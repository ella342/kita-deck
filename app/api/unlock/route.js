import { NextResponse } from "next/server";

const PASSWORD = "community";

export async function POST(request) {
  let password = "";
  try {
    const body = await request.json();
    password = (body.password || "").trim();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (password !== PASSWORD) {
    return NextResponse.json({ ok: false, error: "Incorrect password. Try again." }, { status: 401 });
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
