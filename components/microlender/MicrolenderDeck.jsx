"use client";

import Deck from "@/components/Deck";
import { MICROLENDER_SLIDES } from "./Slides";

// Client entry for the microlender deck: keeps the slide components inside
// the client module graph (server components can't pass them as props).
export default function MicrolenderDeck() {
  return <Deck slides={MICROLENDER_SLIDES} />;
}
