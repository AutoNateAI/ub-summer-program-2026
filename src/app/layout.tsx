import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ub.autonateai.com"),
  title: "Become The Plug | GVSU TRIO Upward Bound",
  description:
    "A free live resource library where students learn demand, supply, public funding, partnerships, and how to become the plug in their city.",
  openGraph: {
    title: "Become The Plug",
    description:
      "GVSU TRIO Upward Bound + AutoNateAI resources for learning demand, tracing supply, connecting people, and building what matters.",
    url: "https://ub.autonateai.com",
    siteName: "GVSU TRIO Upward Bound Resource Library",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Become the plug in your city. GVSU TRIO Upward Bound and AutoNateAI.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Become The Plug",
    description:
      "Learn demand. Trace supply. Connect people. Build what matters.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f4f1e8] text-[#17211c]">{children}</body>
    </html>
  );
}
