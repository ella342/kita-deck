import Deck from "@/components/Deck";
import { MICROLENDER_SLIDES } from "./Slides";

export default function MicrolenderDeck() {
  return (
    <Deck slides={MICROLENDER_SLIDES.map(({ id, fullBleed }) => ({ id, fullBleed }))}>
      {MICROLENDER_SLIDES.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </Deck>
  );
}
