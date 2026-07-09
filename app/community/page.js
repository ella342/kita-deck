import { cookies } from "next/headers";
import Gate from "@/components/Gate";
import CommunityDeck from "@/components/CommunityDeck";
import { DECKS } from "@/lib/decks";

// The deck lives at /community. Show the password gate until unlocked,
// then render the slides at the same URL — no separate /deck path.
export default async function Community({ searchParams }) {
  const store = await cookies();
  const { cookie, token } = DECKS.community;
  const authed = store.get(cookie)?.value === token;
  const params = await searchParams;
  return authed ? <CommunityDeck /> : <Gate deck="community" error={params?.error ? "Incorrect password. Try again." : ""} />;
}
