"use client";

import DeckShell from "@/components/DeckShell";
import { SLIDES } from "@/components/deck/Slides";

export default function Deck() {
  return <DeckShell slides={SLIDES} />;
}
