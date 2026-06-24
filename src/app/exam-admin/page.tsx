import type { Metadata } from "next";
import { ExamAdminView } from "@/components/ExamAdminView";

export const metadata: Metadata = {
  title: "Final Exam Admin | GVSU TRIO Upward Bound",
  description: "Admin review for the final opportunity-to-app exam.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ExamAdminPage() {
  return <ExamAdminView />;
}
