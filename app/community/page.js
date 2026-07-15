import { cookies } from "next/headers";
import Gate from "./Gate";
import Deck from "@/components/Deck";
import { SLIDES } from "@/components/deck/Slides";

// The deck lives at /community. Show the password gate until unlocked, then
// render the slides at the same URL — no separate /deck path.
//
// The slides are Server Components rendered here, only after the auth cookie is
// verified, and passed into the client <Deck> shell as props. Because the content
// is server-rendered, it lives solely in the RSC payload for authenticated
// requests and is never emitted into a public client JS bundle. An unauthenticated
// request only ever produces the <Gate> markup.
export default async function Community() {
  const store = await cookies();
  const authed = store.get("kita_access")?.value === "2";
  if (!authed) return <Gate />;

  const slides = SLIDES.map(({ id, fullBleed, Component }) => ({
    id,
    fullBleed: Boolean(fullBleed),
    node: <Component />,
  }));

  return <Deck slides={slides} />;
}
