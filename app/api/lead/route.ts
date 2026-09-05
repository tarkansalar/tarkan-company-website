import { NextResponse } from "next/server";

/**
 * Forwards a Complexity Score lead to the GoHighLevel inbound webhook.
 *
 * This runs on the server so the webhook URL never reaches the browser and
 * there is no cross-origin request from the visitor's machine.
 *
 * Set GHL_WEBHOOK_URL in .env.local (local) and in the host's environment
 * variables (production). Without it this route returns 501 and the quiz
 * still shows the score - a broken webhook must never block the result.
 */

export const runtime = "nodejs";

type Payload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  score?: unknown;
  maxScore?: unknown;
  tier?: unknown;
  answers?: unknown;
};

const str = (v: unknown, max = 200) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const firstName = str(body.firstName, 80);
  const lastName = str(body.lastName, 80);
  const email = str(body.email, 160);
  const phone = str(body.phone, 40);

  if (!firstName || !email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "First name and a valid email are required" },
      { status: 400 }
    );
  }

  const webhook = process.env.GHL_WEBHOOK_URL;
  if (!webhook) {
    console.warn(
      "[lead] GHL_WEBHOOK_URL is not set - lead was received but not forwarded."
    );
    return NextResponse.json(
      { ok: false, forwarded: false, reason: "webhook_not_configured" },
      { status: 501 }
    );
  }

  const answers = Array.isArray(body.answers)
    ? body.answers.slice(0, 20).map((a) => str(a, 300))
    : [];

  const payload = {
    firstName,
    lastName,
    name: [firstName, lastName].filter(Boolean).join(" "),
    email,
    phone,
    source: "Complexity Score quiz",
    complexityScore: typeof body.score === "number" ? body.score : null,
    maxScore: typeof body.maxScore === "number" ? body.maxScore : null,
    tier: str(body.tier, 60),
    answers,
    submittedAt: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Don't let a slow webhook hold the visitor's result hostage.
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      console.error("[lead] webhook responded", res.status);
      return NextResponse.json(
        { ok: false, forwarded: false, status: res.status },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("[lead] webhook request failed:", err);
    return NextResponse.json(
      { ok: false, forwarded: false, reason: "request_failed" },
      { status: 502 }
    );
  }
}
