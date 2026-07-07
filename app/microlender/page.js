import { cookies } from "next/headers";
import Gate from "@/components/Gate";
import MicrolenderDeck from "@/components/microlender/MicrolenderDeck";
import { DECKS } from "@/lib/decks";

const TITLE = "Kita — Document AI for Microlending";
const DESCRIPTION =
  "Kita turns the documents borrowers already submit into predictive credit signal for microlenders in thin-file markets.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://deck.kita.ai/microlender",
    siteName: "Kita",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// The microlender deck lives at /microlender. Same pattern as /community:
// show the password gate until unlocked, then render the slides at the
// same URL. Has its own password + cookie (see lib/decks.js).
export default async function Microlender({ searchParams }) {
  const store = await cookies();
  const { cookie, token } = DECKS.microlender;
  const authed = store.get(cookie)?.value === token;
  const params = await searchParams;
  return authed ? (
    <MicrolenderDeck />
  ) : (
    <Gate
      deck="microlender"
      blurb="Enter the password to view the Kita deck for microlenders."
      footerLabel="Kita · Microlending"
      error={params?.error ? "Incorrect password. Try again." : ""}
    />
  );
}
