import { NextResponse } from "next/server";
import { DECKS } from "@/lib/decks";

export async function POST(request) {
  let password = "";
  let deck = "";
  const contentType = request.headers.get("content-type") || "";
  const wantsHtml = contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data");

  try {
    if (wantsHtml) {
      const body = await request.formData();
      password = String(body.get("password") || "").trim();
      deck = String(body.get("deck") || "community").trim();
    } else {
      const body = await request.json();
      password = (body.password || "").trim();
      deck = (body.deck || "community").trim();
    }
  } catch {
    if (wantsHtml) {
      return NextResponse.redirect(new URL("/community?error=invalid", request.url), 303);
    }
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const cfg = DECKS[deck];
  const targetPath = deck === "microlender" ? "/microlender" : "/community";

  if (!cfg) {
    if (wantsHtml) {
      return NextResponse.redirect(new URL("/community?error=invalid", request.url), 303);
    }
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (password !== cfg.password) {
    if (wantsHtml) {
      return NextResponse.redirect(new URL(`${targetPath}?error=incorrect`, request.url), 303);
    }
    return NextResponse.json({ ok: false, error: "Incorrect password. Try again." }, { status: 401 });
  }

  const res = wantsHtml
    ? NextResponse.redirect(new URL(targetPath, request.url), 303)
    : NextResponse.json({ ok: true });
  res.cookies.set(cfg.cookie, cfg.token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return res;
}
