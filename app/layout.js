import "./globals.css";

const TITLE = "Kita — AI for Underwriting";
const DESCRIPTION =
  "AI-native credit assessment for community lenders. Kita reads borrower documents, checks for fraud, and drafts the credit memo.";

export const metadata = {
  metadataBase: new URL("https://deck.kita.ai"),
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://deck.kita.ai/community",
    siteName: "Kita",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
