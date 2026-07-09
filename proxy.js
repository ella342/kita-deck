import { NextResponse } from "next/server";
import { DECKS } from "@/lib/decks";

function hasDeckAccess(request) {
  return Object.values(DECKS).some(({ cookie, token }) => request.cookies.get(cookie)?.value === token);
}

export function proxy(request) {
  if (hasDeckAccess(request)) {
    return NextResponse.next();
  }

  return new NextResponse("Not found", {
    status: 404,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export const config = {
  matcher: "/_next/static/chunks/:path*",
};
