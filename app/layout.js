import "./globals.css";

export const metadata = {
  title: "Kita — AI for underwriting",
  description:
    "AI-native credit assessment for community lenders. Kita reads borrower documents, checks for fraud, and drafts the credit memo.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
