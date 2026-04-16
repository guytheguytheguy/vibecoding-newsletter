import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
