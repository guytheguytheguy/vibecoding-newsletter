import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeCoding Newsletter — Weekly AI Coding Insights",
  description:
    "Get weekly insights on AI-powered development, vibe coding, Claude, Cursor, and the future of building software. Free. No spam. Unsubscribe anytime.",
  metadataBase: new URL("https://vibecoding-newsletter.com"),
  openGraph: {
    title: "VibeCoding Newsletter — Weekly AI Coding Insights",
    description:
      "Get weekly insights on AI-powered development, vibe coding, Claude, Cursor, and the future of building software.",
    url: "https://vibecoding-newsletter.com",
    siteName: "VibeCoding Newsletter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeCoding Newsletter — Weekly AI Coding Insights",
    description:
      "Get weekly insights on AI-powered development, vibe coding, Claude, Cursor, and the future of building software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        {/* Statcounter */}
        <Script id="statcounter-init" strategy="afterInteractive">
          {`var sc_project=13319486;var sc_invisible=1;var sc_security="65db2bf1";`}
        </Script>
        <Script id="statcounter" src="https://www.statcounter.com/counter/counter.js" strategy="afterInteractive" />
        <noscript>
          <div className="statcounter">
            <a title="Web Analytics" href="https://statcounter.com/" target="_blank" rel="noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="statcounter" src="https://c.statcounter.com/13319486/0/65db2bf1/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade" />
            </a>
          </div>
        </noscript>
      </body>
    </html>
  );
}
