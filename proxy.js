import { NextResponse } from "next/server";

// Gate the deck behind the password cookie set by /api/unlock.
// Anyone visiting /deck without it is bounced back to the gate.
export function proxy(request) {
  const hasAccess = request.cookies.get("kita_access")?.value === "2";
  if (!hasAccess) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/deck/:path*",
};
