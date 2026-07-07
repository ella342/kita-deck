"use client";

import DeckShell from "@/components/DeckShell";
import { MICROLENDER_SLIDES } from "@/components/microlender/Slides";

export default function MicrolenderDeck() {
  return <DeckShell slides={MICROLENDER_SLIDES} />;
}
