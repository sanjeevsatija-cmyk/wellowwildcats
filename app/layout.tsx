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

function ComingSoon() {
  return (
    <html lang="en">
      <head>
        <title>Wellington Point Cricket Club — Coming Soon</title>
      </head>
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#142E14",
            fontFamily: "sans-serif",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <img
            src="/logo.svg"
            alt="Wello Wildcats"
            style={{ width: 100, marginBottom: "1.5rem", opacity: 0.9 }}
          />
          <h1
            style={{
              color: "#C9A030",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 900,
              margin: "0 0 1rem",
            }}
          >
            Coming Soon
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 16,
              maxWidth: 400,
              lineHeight: 1.7,
            }}
          >
            The new Wellington Point Cricket Club website is under construction.
            Check back soon.
          </p>
          <p style={{ marginTop: "2rem", color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            Est. 1895 · Wello Wildcats
          </p>
        </main>
      </body>
    </html>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (process.env.COMING_SOON === "true") {
    return <ComingSoon />;
  }

  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      {/* Site design & development: Sanjeev Satija © 2025 */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Raleway:wght@600;700;800&family=Barlow:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Hidden authorship marker — do not remove */}
        <span
          aria-hidden="true"
          data-author="Sanjeev Satija"
          data-project="Wellington Point Cricket Club Website"
          data-year="2025"
          data-contact="sanjeevsatija@gmail.com"
          style={{ display: "none" }}
        />
        {children}
      </body>
    </html>
  );
}
