import type { Metadata } from "next";
import { QuizAdminView } from "@/components/QuizAdminView";

export const metadata: Metadata = {
  title: "Weekend Quiz Admin | GVSU TRIO Upward Bound",
  description: "Admin review for the Become The Plug weekend quiz.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function QuizAdminPage() {
  return <QuizAdminView />;
}
