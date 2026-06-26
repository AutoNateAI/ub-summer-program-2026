import type { Metadata } from "next";
import { TrioOlympicsPromptRepo } from "@/components/TrioOlympicsPromptRepo";

export const metadata: Metadata = {
  title: "TRIO Olympics AI Game Jam | GVSU TRIO Upward Bound",
  description:
    "Build a Zelda-like web game with ChatGPT or Gemini planning prompts, Replit AI build prompts, game jam rules, judging criteria, and digital Lego add-ons.",
  openGraph: {
    title: "TRIO Olympics AI Game Jam",
    description:
      "Build a Zelda-like web game with ChatGPT or Gemini, Replit AI, HTML, CSS, JavaScript, and optional Phaser, Three.js, or p5.js add-ons.",
    url: "https://ub.autonateai.com/trio-olympics/",
    siteName: "GVSU TRIO Upward Bound Resource Library",
    images: [
      {
        url: "/og/trio-olympics.png",
        width: 1200,
        height: 630,
        alt: "TRIO Olympics AI Game Jam: build a Zelda-like web game with ChatGPT, Gemini, and Replit AI.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRIO Olympics AI Game Jam",
    description:
      "Prompt repo, rules, judging criteria, and Replit workflow for building a Zelda-like web game.",
    images: ["/og/trio-olympics.png"],
  },
};

export default function TrioOlympicsPage() {
  return <TrioOlympicsPromptRepo />;
}
