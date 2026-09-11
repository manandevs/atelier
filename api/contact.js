/**
 * POST /api/contact — serverless entry point for the concierge form.
 *
 * Node serverless signature (Vercel, Netlify's Node runtime, and anything else
 * that speaks `(req, res)`). The Airtable token stays in this process; the
 * browser only ever sees `{ ok }` or an error message.
 *
 * Locally this same handler is mounted by the dev-server plugin in
 * vite.config.js, so `npm run dev` exercises the real path.
 */
import { handleEnquiry } from "./_enquiry.js";

async function readJson(req) {
  // Some runtimes pre-parse the body; others hand over a raw stream.
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (chunks.length === 0) return null;
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "Method not allowed." }));
    return;
  }

  const body = await readJson(req);
  const { status, body: payload } = await handleEnquiry(body, process.env);

  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}
