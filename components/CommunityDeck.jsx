import Deck from "@/components/Deck";
import { SLIDES } from "@/components/deck/Slides";

export default function CommunityDeck() {
  return (
    <Deck slides={SLIDES.map(({ id, fullBleed }) => ({ id, fullBleed }))}>
      {SLIDES.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </Deck>
  );
}
