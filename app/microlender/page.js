import { cookies } from "next/headers";
import Gate from "@/components/Gate";
import MicrolenderDeck from "@/components/microlender/MicrolenderDeck";
import { DECKS } from "@/lib/decks";

export const metadata = {
  title: "Kita — Document AI for Microlending",
  description:
    "Kita turns the documents borrowers already submit into predictive credit signal for microlenders in thin-file markets.",
  robots: { index: false, follow: false },
};

// The microlender deck lives at /microlender. Same pattern as /community:
// show the password gate until unlocked, then render the slides at the
// same URL. Has its own password + cookie (see lib/decks.js).
export default async function Microlender() {
  const store = await cookies();
  const { cookie, token } = DECKS.microlender;
  const authed = store.get(cookie)?.value === token;
  return authed ? (
    <MicrolenderDeck />
  ) : (
    <Gate
      deck="microlender"
      blurb="Enter the password to view the Kita deck for microlenders."
      footerLabel="Kita · Microlending"
    />
  );
}
