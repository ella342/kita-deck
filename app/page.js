import Gate from "@/components/Gate";

export default function CommunityGate() {
  return (
    <Gate
      redirectTo="/deck"
      blurb="Enter your work email to view the Kita community-lending deck."
      footerLabel="Kita · Community Lending"
    />
  );
}
