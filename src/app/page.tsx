"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Database,
  ExternalLink,
  FileText,
  Lightbulb,
  LogOut,
  MapPin,
  Megaphone,
  PenLine,
  Search,
  Send,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { AuthGate } from "@/components/AuthGate";
import { useAuth } from "@/components/AuthProvider";
import {
  addHomeworkSubmission,
  addProgramIdea,
  usePortalWorkspace,
} from "@/lib/portalStore";

const days = [
  {
    label: "Day 1",
    title: "How Communities Work",
    theme: "Data, budgets, boards, initiatives, and the local money flow.",
    output: "Three things learned, three organizations found, one issue cared about.",
    icon: Database,
  },
  {
    label: "Day 2",
    title: "Portal Research Lab",
    theme: "Use AI to organize city, school, budget, chamber, and meeting data.",
    output: "Team opportunity map and first program hypotheses.",
    icon: Search,
  },
  {
    label: "Day 3",
    title: "Community Partner Scan",
    theme: "Find employers, nonprofits, schools, hospitals, and civic partners.",
    output: "Ten partner targets with evidence and next-step questions.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Day 4",
    title: "Research Day",
    theme: "Turn scattered sources into a clean community opportunity brief.",
    output: "Problem, audience, evidence, organizations, and budget signals.",
    icon: FileText,
  },
  {
    label: "Day 5",
    title: "Program Studio",
    theme: "Design a practical community program that students could run.",
    output: "Program blueprint with partner, audience, activities, and outcomes.",
    icon: Lightbulb,
  },
  {
    label: "Day 6",
    title: "Design Day",
    theme: "Create mockups, flyers, student-facing content, and outreach material.",
    output: "Prototype screens and campaign assets.",
    icon: PenLine,
  },
  {
    label: "Day 7",
    title: "Developer Day",
    theme: "Build the tool, workflow, chatbot, dashboard, or resource navigator.",
    output: "Working prototype and data model.",
    icon: Sparkles,
  },
  {
    label: "Day 8",
    title: "Marketing + Outreach",
    theme: "Package the idea for LinkedIn, partners, families, and community members.",
    output: "Outreach script, LinkedIn post, and partner invitation.",
    icon: Megaphone,
  },
  {
    label: "Day 9",
    title: "Demo Day",
    theme: "Pitch research, program, tool, partner plan, and community impact.",
    output: "Final community impact presentation.",
    icon: Target,
  },
];

const sources = [
  "Grand Rapids Chamber directory",
  "City budget and strategic plan",
  "City commission agendas",
  "Board of Education materials",
  "Workforce and employer programs",
  "Community foundation priorities",
];

const roles = ["Research Lead", "Program Lead", "Design Lead", "Technology Lead"];

function Portal() {
  const { user, signOutUser } = useAuth();
  const { homework, ideas, profile } = usePortalWorkspace(user);
  const [problem, setProblem] = useState("");
  const [audience, setAudience] = useState("");
  const [partner, setPartner] = useState("");
  const [homeworkText, setHomeworkText] = useState("");
  const [savingIdea, setSavingIdea] = useState(false);
  const [savingHomework, setSavingHomework] = useState(false);

  const currentRole = useMemo(() => {
    if (!profile?.uid) return roles[0];
    return roles[profile.uid.charCodeAt(0) % roles.length];
  }, [profile?.uid]);

  async function saveIdea() {
    if (!user || !problem.trim()) return;
    setSavingIdea(true);
    try {
      await addProgramIdea(user, { problem, audience, partner });
      setProblem("");
      setAudience("");
      setPartner("");
    } finally {
      setSavingIdea(false);
    }
  }

  async function submitHomework() {
    if (!user || !homeworkText.trim()) return;
    setSavingHomework(true);
    try {
      await addHomeworkSubmission(user, {
        title: "Day 1 Community Systems Reflection",
        body: homeworkText,
      });
      setHomeworkText("");
    } finally {
      setSavingHomework(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f4f1e8] text-[#17211c]">
      <header className="border-b border-[#d8d2bf] bg-[#fbf8ef]/95">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-md bg-[#1e4b3a] text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a5a19]">
                Upward Bound 2026
              </p>
              <h1 className="text-xl font-black text-[#17211c]">
                Community Innovation Portal
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded-md border border-[#d8d2bf] bg-white px-3 py-2 font-semibold">
              {user?.displayName || user?.email}
            </span>
            <button
              onClick={signOutUser}
              className="inline-flex items-center gap-2 rounded-md bg-[#17211c] px-3 py-2 font-bold text-white transition hover:bg-[#2d4238]"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-md border border-[#d8d2bf] bg-[#fbf8ef] p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded bg-[#f0c766] px-2 py-1 text-xs font-black uppercase tracking-[0.14em]">
              Live workspace
            </span>
            <span className="rounded bg-[#d8ebe2] px-2 py-1 text-xs font-bold text-[#1e4b3a]">
              Teams of 3-4
            </span>
          </div>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-[#17211c] sm:text-5xl">
            Find a Grand Rapids problem worth solving, then build the program
            and tool to move it.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#4b5a50]">
            Students connect public data, budgets, chamber organizations,
            research workflows, design, development, and outreach into one
            community impact project.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["9", "instruction days"],
              ["6-7", "student teams"],
              ["1", "community pitch"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-md bg-white p-4 shadow-sm">
                <div className="text-3xl font-black text-[#1e4b3a]">
                  {value}
                </div>
                <div className="text-sm font-semibold text-[#66746b]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-[#d8d2bf] bg-[#1e4b3a] p-5 text-white">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f0c766]">
                Your role today
              </p>
              <h3 className="mt-1 text-2xl font-black">{currentRole}</h3>
            </div>
            <Users className="h-8 w-8 text-[#f0c766]" />
          </div>
          <div className="mt-5 space-y-3">
            {roles.map((role) => (
              <div
                key={role}
                className="flex items-center justify-between rounded-md bg-white/10 px-3 py-2 text-sm"
              >
                <span>{role}</span>
                {role === currentRole && <CheckCircle2 className="h-4 w-4" />}
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-md bg-[#f0c766] p-4 text-[#17211c]">
            <p className="text-sm font-black">Week 1 target</p>
            <p className="mt-1 text-sm leading-6">
              Every team leaves Friday with a community opportunity brief:
              problem, evidence, partners, budget signal, audience, and first
              solution idea.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-md border border-[#d8d2bf] bg-white p-5">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-[#8a5a19]" />
            <h2 className="text-lg font-black">Program Idea Builder</h2>
          </div>
          <div className="mt-4 space-y-3">
            <input
              value={problem}
              onChange={(event) => setProblem(event.target.value)}
              placeholder="Community problem"
              className="w-full rounded-md border border-[#d8d2bf] px-3 py-3 text-sm outline-none focus:border-[#1e4b3a]"
            />
            <input
              value={audience}
              onChange={(event) => setAudience(event.target.value)}
              placeholder="Who should this help?"
              className="w-full rounded-md border border-[#d8d2bf] px-3 py-3 text-sm outline-none focus:border-[#1e4b3a]"
            />
            <input
              value={partner}
              onChange={(event) => setPartner(event.target.value)}
              placeholder="Possible local partner"
              className="w-full rounded-md border border-[#d8d2bf] px-3 py-3 text-sm outline-none focus:border-[#1e4b3a]"
            />
            <button
              onClick={saveIdea}
              disabled={savingIdea || !problem.trim()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#1e4b3a] px-4 py-3 text-sm font-black text-white transition hover:bg-[#2d6b55] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Save idea <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-5 space-y-2">
            {ideas.slice(0, 4).map((idea) => (
              <div key={idea.id} className="rounded-md bg-[#f4f1e8] p-3">
                <p className="text-sm font-black">{idea.problem}</p>
                <p className="mt-1 text-xs text-[#66746b]">
                  {idea.audience || "Audience TBD"} |{" "}
                  {idea.partner || "Partner TBD"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-[#d8d2bf] bg-white p-5">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-[#8a5a19]" />
            <h2 className="text-lg font-black">Studio Roadmap</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {days.map((day) => {
              const Icon = day.icon;
              return (
                <div key={day.label} className="rounded-md bg-[#f8f5ec] p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#8a5a19]">
                      {day.label}
                    </span>
                    <Icon className="h-4 w-4 text-[#1e4b3a]" />
                  </div>
                  <h3 className="mt-2 text-sm font-black">{day.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#5b685f]">
                    {day.theme}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[#17211c]">
                    {day.output}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-8 sm:px-6 lg:grid-cols-3">
        <div className="rounded-md border border-[#d8d2bf] bg-white p-5">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[#8a5a19]" />
            <h2 className="text-lg font-black">Research Sources</h2>
          </div>
          <div className="mt-4 space-y-2">
            {sources.map((source) => (
              <div
                key={source}
                className="flex items-center justify-between rounded-md bg-[#f8f5ec] px-3 py-2 text-sm font-semibold"
              >
                {source}
                <ExternalLink className="h-4 w-4 text-[#8a5a19]" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-[#d8d2bf] bg-white p-5">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-[#8a5a19]" />
            <h2 className="text-lg font-black">Homework</h2>
          </div>
          <textarea
            value={homeworkText}
            onChange={(event) => setHomeworkText(event.target.value)}
            placeholder="Submit three things learned, three organizations found, and one problem you care about."
            className="mt-4 min-h-36 w-full resize-none rounded-md border border-[#d8d2bf] p-3 text-sm outline-none focus:border-[#1e4b3a]"
          />
          <button
            onClick={submitHomework}
            disabled={savingHomework || !homeworkText.trim()}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#17211c] px-4 py-3 text-sm font-black text-white transition hover:bg-[#314238] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Submit homework <Send className="h-4 w-4" />
          </button>
          <div className="mt-4 space-y-2">
            {homework.slice(0, 3).map((item) => (
              <div key={item.id} className="rounded-md bg-[#f4f1e8] p-3">
                <p className="text-xs font-black uppercase text-[#8a5a19]">
                  {item.title}
                </p>
                <p className="mt-1 line-clamp-2 text-sm text-[#4b5a50]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-[#d8d2bf] bg-[#f0c766] p-5">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-[#17211c]" />
            <h2 className="text-lg font-black">AI Prompt Stack</h2>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            {[
              "Turn this public budget section into five student-friendly insights.",
              "Find the likely audience, partner, and evidence behind this community problem.",
              "Write an outreach email to a Grand Rapids organization for a student program.",
              "Create a LinkedIn post that showcases what our team learned and built.",
            ].map((prompt) => (
              <div key={prompt} className="rounded-md bg-white/70 p-3 font-semibold">
                {prompt}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <AuthGate>
      <Portal />
    </AuthGate>
  );
}
