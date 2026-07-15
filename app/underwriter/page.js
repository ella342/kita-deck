import { cookies } from "next/headers";
import Gate from "@/components/Gate";
import Deck from "@/components/Deck";
import { UNDERWRITER_SLIDES } from "@/components/underwriter/Slides";
import { DECKS } from "@/lib/decks";

const TITLE = "Kita — AI for Underwriting";
const DESCRIPTION =
  "Kita reads the documents a business already has, in any format and any language, and drafts a cited credit memo. Responsible AI for underwriting, built for banks, fintechs, and non-bank lenders in any market.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://deck.kita.ai/underwriter",
    siteName: "Kita",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// The underwriter deck lives at /underwriter. Same pattern as the other decks:
// show the password gate until unlocked, then render the slides at the same URL.
// Has its own password + cookie (see lib/decks.js).
//
// The slides are Server Components rendered here, only after the auth cookie is
// verified, and passed into the client <Deck> shell as props, so the content
// lives solely in the RSC payload for authenticated requests and is never
// emitted into a public client JS bundle.
export default async function Underwriter() {
  const store = await cookies();
  const { cookie, token } = DECKS.underwriter;
  if (store.get(cookie)?.value !== token) {
    return (
      <Gate
        deck="underwriter"
        blurb="Enter the password to view the Kita deck for banks, fintechs, and non-bank lenders."
        footerLabel="Kita · Underwriting"
      />
    );
  }

  const slides = UNDERWRITER_SLIDES.map(({ id, fullBleed, Component }) => ({
    id,
    fullBleed: Boolean(fullBleed),
    node: <Component />,
  }));

  return <Deck slides={slides} />;
}
