import { NextResponse } from "next/server";
import { DECKS } from "@/lib/decks";

export async function POST(request) {
  let password = "";
  let deck = "";
  try {
    const body = await request.json();
    password = (body.password || "").trim();
    deck = (body.deck || "community").trim();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const cfg = DECKS[deck];
  if (!cfg) {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (password !== cfg.password) {
    return NextResponse.json({ ok: false, error: "Incorrect password. Try again." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(cfg.cookie, cfg.token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return res;
}
