import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let email = "";
  let company = "";
  try {
    const body = await request.json();
    email = (body.email || "").trim();
    company = (body.company || "").trim();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  // Fire off a lead notification if Resend is configured. Never block access on it.
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL || "founders@kita.ai";
  const from = process.env.LEAD_FROM_EMAIL || "Kita Deck <onboarding@resend.dev>";

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from,
        to: [notifyTo],
        subject: `New deck view — ${email}`,
        text: `Someone just unlocked the Kita community lending deck.\n\nEmail: ${email}\nCompany: ${company || "—"}\nTime: ${new Date().toISOString()}`,
      });
    } catch (err) {
      console.error("Resend notify failed:", err);
    }
  } else {
    console.log("[lead] (Resend not configured) captured:", email, company);
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("kita_access", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return res;
}
