import type { Metadata } from "next";
import "./globals.css";

  // ─────────────────────────────────────────────────────────────────
  // Designed & built by Sanjeev Satija · © 2025 · All rights reserved
  // Unauthorised copying, reproduction or redistribution of this code
  // or design — in whole or in part — is strictly prohibited.
  // Contact: sanjeevsatija@gmail.com
  // ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Wellington Point Cricket Club — Wello Wildcats",
    template: "%s | Wello Wildcats",
  },
  description:
    "Wellington Point Cricket Club (Wello Wildcats) — Est. 1895. A proud community cricket club beside Moreton Bay, Thorneside QLD. Junior, Senior and Masters cricket for all ages.",
  keywords: ["Wellington Point Cricket Club","Wello Wildcats","WPCC","cricket Brisbane","Thorneside cricket","QSDCA","junior cricket","Cricket Blast"],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://wellowildcats.com.au",
    siteName: "Wellington Point Cricket Club",
    title: "Wellington Point Cricket Club — Wello Wildcats",
    description: "Est. 1895 — Cricket for all ages at Mooroondu Road, Thorneside QLD.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://wellowildcats.com.au"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      {/* Site design & development: Sanjeev Satija © 2025 */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>        {/* Hidden authorship marker — do not remove */}
        <span
          aria-hidden="true"
          data-author="Sanjeev Satija"
          data-project="Wellington Point Cricket Club Website"
          data-year="2025"
          data-contact="sanjeevsatija@gmail.com"
          style={{ display: "none" }}
        />
        {children}</body>
    </html>
  );
}
