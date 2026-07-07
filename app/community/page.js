import { cookies } from "next/headers";
import Gate from "@/components/Gate";
import Deck from "@/components/Deck";
import { DECKS } from "@/lib/decks";

// The deck lives at /community. Show the password gate until unlocked,
// then render the slides at the same URL — no separate /deck path.
export default async function Community() {
  const store = await cookies();
  const { cookie, token } = DECKS.community;
  const authed = store.get(cookie)?.value === token;
  return authed ? <Deck /> : <Gate deck="community" />;
}
