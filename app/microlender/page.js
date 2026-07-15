import { cookies } from "next/headers";
import Gate from "@/components/Gate";
import Deck from "@/components/Deck";
import { MICROLENDER_SLIDES } from "@/components/microlender/Slides";
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
//
// The slides are Server Components rendered here, only after the auth cookie is
// verified, and passed into the client <Deck> shell as props, so the content
// lives solely in the RSC payload for authenticated requests and is never
// emitted into a public client JS bundle.
export default async function Microlender() {
  const store = await cookies();
  const { cookie, token } = DECKS.microlender;
  if (store.get(cookie)?.value !== token) {
    return (
      <Gate
        deck="microlender"
        blurb="Enter the password to view the Kita deck for microlenders."
        footerLabel="Kita · Microlending"
      />
    );
  }

  const slides = MICROLENDER_SLIDES.map(({ id, fullBleed, Component }) => ({
    id,
    fullBleed: Boolean(fullBleed),
    node: <Component />,
  }));

  return <Deck slides={slides} />;
}
