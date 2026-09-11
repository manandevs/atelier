/**
 * Contact enquiry -> Airtable.
 *
 * This module runs SERVER-SIDE ONLY. It reads the Airtable personal access
 * token from the environment under a name with no `VITE_` prefix, so Vite
 * never inlines it into the client bundle. Nothing here may be imported from
 * `src/` — doing so would ship the token to the browser.
 */

const AIRTABLE_API = "https://api.airtable.com/v0";

// Mirrors of the <select> options in src/components/ContactForm.jsx. Airtable
// rejects unknown singleSelect values, and submitting with `typecast` would
// silently create junk options — so anything off-list is refused here instead.
const SALON_CITIES = ["Paris", "London", "New York"];
const SUBJECTS = [
  "Private Commission",
  "Salon Appointment",
  "Runway Archive Enquiry",
  "Press & Editorial",
  "Other Correspondence",
];

const MAX = { name: 200, email: 320, phone: 40, message: 5000 };

const str = (v) => (typeof v === "string" ? v.trim() : "");

/**
 * Server-side validation. The client validates too, for the sake of the UI,
 * but this endpoint is public so the rules are re-applied here rather than
 * trusted. Kept deliberately in step with `validate()` in ContactForm.jsx.
 */
export function validateEnquiry(values) {
  const errors = {};
  const name = str(values.name);
  const email = str(values.email);
  const phone = str(values.phone);
  const message = str(values.message);

  if (!name) errors.name = "A name is required.";
  else if (name.length > MAX.name) errors.name = "That name is too long.";

  if (!email) errors.email = "An email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "That email address is not valid.";
  else if (email.length > MAX.email) errors.email = "That email is too long.";

  if (phone && !/^[+(\d][\d\s().-]{5,}$/.test(phone))
    errors.phone = "That telephone number is not valid.";
  else if (phone.length > MAX.phone) errors.phone = "That number is too long.";

  if (!message) errors.message = "A message is required.";
  else if (message.length < 20)
    errors.message = "The message is too short — at least 20 characters.";
  else if (message.length > MAX.message)
    errors.message = "The message is too long.";

  if (!SALON_CITIES.includes(values.city))
    errors.city = "Please choose one of the listed salon cities.";

  if (!SUBJECTS.includes(values.subject))
    errors.subject = "Please choose one of the listed enquiry types.";

  if (values.consent !== true)
    errors.consent = "Consent to be contacted is required.";

  return errors;
}

/** Shape a validated enquiry into the Airtable field names. */
function toFields(values) {
  return {
    Name: str(values.name),
    Email: str(values.email),
    Phone: str(values.phone),
    "Salon City": values.city,
    Subject: values.subject,
    Message: str(values.message),
    Consent: true,
    "Submitted At": new Date().toISOString(),
    Status: "New",
  };
}

function readConfig(env) {
  const token = env.AIRTABLE_PAT;
  const baseId = env.AIRTABLE_BASE_ID;
  const table = env.AIRTABLE_TABLE_NAME || "Enquiries";
  if (!token || !baseId) return null;
  return { token, baseId, table };
}

/**
 * Handle one enquiry submission.
 *
 * Returns a plain `{ status, body }` rather than touching a response object,
 * so the same logic serves both the Vite dev middleware and the deployed
 * serverless function.
 */
export async function handleEnquiry(body, env) {
  const config = readConfig(env);
  if (!config) {
    console.error(
      "[ATELIER] AIRTABLE_PAT / AIRTABLE_BASE_ID are not set — enquiry dropped.",
    );
    return {
      status: 500,
      body: { ok: false, error: "The enquiry service is not configured." },
    };
  }

  if (!body || typeof body !== "object") {
    return { status: 400, body: { ok: false, error: "Malformed request." } };
  }

  const errors = validateEnquiry(body);
  if (Object.keys(errors).length > 0) {
    return {
      status: 422,
      body: { ok: false, error: "Some details need attention.", errors },
    };
  }

  const url = `${AIRTABLE_API}/${config.baseId}/${encodeURIComponent(config.table)}`;

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [{ fields: toFields(body) }] }),
    });
  } catch (cause) {
    console.error("[ATELIER] Airtable request failed:", cause);
    return {
      status: 502,
      body: { ok: false, error: "The enquiry could not be delivered." },
    };
  }

  if (!response.ok) {
    // Log the detail for the operator; never return it to the browser, as
    // Airtable errors can echo base and field names back.
    const detail = await response.text().catch(() => "<unreadable>");
    console.error(`[ATELIER] Airtable ${response.status}:`, detail);
    return {
      status: 502,
      body: { ok: false, error: "The enquiry could not be delivered." },
    };
  }

  const created = await response.json().catch(() => null);
  return {
    status: 201,
    body: { ok: true, id: created?.records?.[0]?.id ?? null },
  };
}
