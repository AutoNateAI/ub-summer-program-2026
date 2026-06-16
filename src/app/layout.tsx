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
  title: "GVSU TRIO Upward Bound Resource Library",
  description:
    "Download notes, assignments, and pre-class materials for the GVSU TRIO Upward Bound summer program, hosted by AutoNateAI.",
  openGraph: {
    title: "Become the plug in your city",
    description:
      "GVSU TRIO Upward Bound + AutoNateAI resources for finding funded problems, connecting people, and building what matters.",
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
    title: "Become the plug in your city",
    description:
      "Find funded problems. Connect people. Build what matters.",
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
