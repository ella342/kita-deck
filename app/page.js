import { redirect } from "next/navigation";

// The deck lives at /community. Send the bare domain there.
export default function Home() {
  redirect("/community");
}
