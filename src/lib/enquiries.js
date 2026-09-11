/**
 * Client transport for the concierge form.
 *
 * This posts to our own `/api/contact` endpoint rather than to Airtable
 * directly. The Airtable token is a write-capable credential, so it lives on
 * the server only — anything imported from here ends up in the browser bundle
 * and must stay free of secrets.
 */

/** Raised when the server rejects the payload, carrying per-field messages. */
export class EnquiryValidationError extends Error {
  constructor(errors) {
    super("The enquiry was rejected.");
    this.name = "EnquiryValidationError";
    this.errors = errors;
  }
}

export async function submitEnquiry(values) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      phone: values.phone,
      city: values.city,
      subject: values.subject,
      message: values.message,
      consent: values.consent,
    }),
  });

  const payload = await response.json().catch(() => null);

  if (response.status === 422 && payload?.errors) {
    throw new EnquiryValidationError(payload.errors);
  }

  if (!response.ok || !payload?.ok) {
    throw new Error(payload?.error ?? "The enquiry could not be sent.");
  }

  return payload;
}
