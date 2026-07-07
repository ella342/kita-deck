import Gate from "@/components/Gate";

export const metadata = {
  title: "Kita — Document AI for microlending",
  description:
    "Kita turns the documents borrowers already submit into predictive credit signal for microlenders in thin-file markets.",
  robots: { index: false, follow: false },
};

export default function MicrolenderGate() {
  return (
    <Gate
      redirectTo="/microlender/deck"
      blurb="Enter your work email to view the Kita microlending deck."
      footerLabel="Kita · Microlending"
    />
  );
}
