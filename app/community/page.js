import { cookies } from "next/headers";
import Gate from "@/components/Gate";
import Deck from "@/components/Deck";
import { SLIDES } from "@/components/deck/Slides";
import { DECKS } from "@/lib/decks";

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
  const { cookie, token } = DECKS.community;
  if (store.get(cookie)?.value !== token) return <Gate deck="community" />;

  const slides = SLIDES.map(({ id, fullBleed, Component }) => ({
    id,
    fullBleed: Boolean(fullBleed),
    node: <Component />,
  }));

  return <Deck slides={slides} />;
}
