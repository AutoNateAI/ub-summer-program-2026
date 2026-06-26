import type { Metadata } from "next";
import { TrioOlympicsPromptRepo } from "@/components/TrioOlympicsPromptRepo";

export const metadata: Metadata = {
  title: "TRIO Olympics Prompt Repo | GVSU TRIO Upward Bound",
  description:
    "Prompt pack for the TRIO Olympics AI Game Jam: ChatGPT/Gemini planning prompts, Replit build prompts, and JavaScript library add-ons.",
};

export default function TrioOlympicsPage() {
  return <TrioOlympicsPromptRepo />;
}
