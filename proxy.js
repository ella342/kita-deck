import { NextResponse } from "next/server";

// Next.js 16 renamed Middleware to Proxy. Soft-gates the decks:
// no access cookie -> bounce back to the matching email gate.
export function proxy(request) {
  const hasAccess = request.cookies.get("kita_access")?.value === "1";
  if (!hasAccess) {
    const url = request.nextUrl.clone();
    url.pathname = url.pathname.startsWith("/microlender") ? "/microlender" : "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/deck/:path*", "/microlender/deck/:path*"],
};
