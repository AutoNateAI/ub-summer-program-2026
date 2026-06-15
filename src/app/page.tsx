"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bell,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  Database,
  Home,
  Lightbulb,
  LogOut,
  MessageSquare,
  Rocket,
  Search,
  Send,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";
import { AuthGate } from "@/components/AuthGate";
import { useAuth } from "@/components/AuthProvider";
import { CourseDay, courseDays } from "@/components/CourseDay";
import {
  addHomeworkSubmission,
  addProgramIdea,
  usePortalWorkspace,
} from "@/lib/portalStore";

const roles = ["Research Lead", "Program Lead", "Design Lead", "Technology Lead"];

const navItems = [
  ["dashboard", "Dashboard", Home],
  ["curriculum", "Curriculum", BookOpen],
  ["data", "Explore Data", Database],
  ["workspace", "Team Workspace", Users],
  ["ai", "AI Lab", Bot],
  ["submissions", "Submissions", ClipboardList],
] as const;

const dataSources = [
  ["City Budget 2026", "Current budget signals", true],
  ["Grand Rapids Chamber", "Partner and employer directory", true],
  ["City Commission Agendas", "Meetings and civic priorities", false],
  ["Board of Education", "School system initiatives", false],
] as const;

function initials(value?: string | null) {
  return (value || "Student")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function Portal() {
  const { user, signOutUser } = useAuth();
  const { homework, ideas, profile } = usePortalWorkspace(user);
  const [problem, setProblem] = useState("");
  const [audience, setAudience] = useState("");
  const [partner, setPartner] = useState("");
  const [homeworkText, setHomeworkText] = useState("");
  const [savingIdea, setSavingIdea] = useState(false);
  const [savingHomework, setSavingHomework] = useState(false);
  const [activeView, setActiveView] = useState<(typeof navItems)[number][0]>("dashboard");
  const [activeDayId, setActiveDayId] = useState(courseDays[0].id);

  const displayName = user?.displayName || user?.email || "Student";
  const activeDayIndex = Math.max(
    0,
    courseDays.findIndex((day) => day.id === activeDayId),
  );
  const activeDay = courseDays[activeDayIndex] || courseDays[0];
  const nextDay = courseDays[activeDayIndex + 1];
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
        title: activeView === "curriculum" ? activeDay.homeworkTitle : "Dashboard Homework Draft",
        body: homeworkText,
      });
      setHomeworkText("");
    } finally {
      setSavingHomework(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f8fafb] font-[Inter,Arial,sans-serif] text-[#191c1d]">
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[280px] flex-col bg-[#182732] px-4 py-3 text-white lg:flex">
        <div className="mb-8 flex items-center gap-3 px-2 py-4">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#3fddc2] text-[#0e1d27]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-[Hanken_Grotesk,Inter,sans-serif] text-2xl font-black leading-none">
              Civic Scholar
            </h1>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#98a7b5]">
              1,250 Points
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto">
          {navItems.map(([view, label, Icon]) => {
            const isActive = activeView === view;

            return (
              <div key={label}>
                <button
                  onClick={() => setActiveView(view)}
                  className={`flex w-full items-center gap-3 rounded-r-lg px-4 py-3 text-left text-sm transition ${
                    isActive
                      ? "border-l-4 border-[#3fddc2] bg-[#2e3d48] font-black text-[#61f7db]"
                      : "text-[#98a7b5] hover:bg-[#2e3d48]/60 hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-mono text-[12px] uppercase tracking-[0.05em]">
                    {label}
                  </span>
                </button>

                {view === "curriculum" && activeView === "curriculum" && (
                  <div className="ml-8 mt-2 space-y-1 border-l border-[#3a4954] pb-2 pl-3">
                    {courseDays.map((day) => {
                      const dayActive = activeDayId === day.id;

                      return (
                        <button
                          key={day.id}
                          onClick={() => setActiveDayId(day.id)}
                          className={`w-full rounded-lg px-3 py-2 text-left transition ${
                            dayActive
                              ? "bg-[#3fddc2] text-[#00201b]"
                              : "text-[#98a7b5] hover:bg-[#2e3d48] hover:text-white"
                          }`}
                        >
                          <span className="block font-mono text-[10px] font-black uppercase tracking-[0.08em]">
                            {day.label}
                          </span>
                          <span className="mt-0.5 block truncate text-xs font-semibold">
                            {day.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-4 border-t border-[#2e3d48] pt-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#3fddc2] py-3 text-sm font-black text-[#00201b] transition hover:bg-[#64fade]">
            <Rocket className="h-4 w-4" />
            Launch AI Lab
          </button>
          <div className="mt-4 space-y-1">
            {[["Settings", Settings], ["Help", CircleHelp]].map(([label, Icon]) => (
              <button
                key={label as string}
                className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm text-[#98a7b5] transition hover:text-white"
              >
                <Icon className="h-5 w-5" />
                <span className="font-mono text-[12px] uppercase">{label as string}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      <section className="min-h-screen lg:ml-[280px]">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[#c3c7cb] bg-white/90 px-4 backdrop-blur-md sm:px-8 lg:px-10">
          <div className="flex items-center gap-5">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#74777c]" />
              <input
                className="h-10 w-80 rounded-full border-0 bg-[#eceeef] pl-10 pr-4 text-sm outline-none ring-0 focus:ring-2 focus:ring-[#006b5c]"
                placeholder="Search research, data, teams..."
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={submitHomework}
              disabled={!homeworkText.trim() || savingHomework}
              className="hidden rounded-lg bg-[#182732] px-4 py-2 text-sm font-black text-white transition hover:bg-[#2e3d48] disabled:opacity-50 sm:inline-flex"
            >
              Submit Homework
            </button>
            <button className="relative p-2 text-[#43474b] hover:text-[#006b5c]">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#ba1a1a]" />
            </button>
            <button className="flex items-center gap-2 rounded-lg p-1 hover:bg-[#eceeef]">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#61f7db] text-xs font-black text-[#00201b]">
                {initials(displayName)}
              </span>
              <ChevronDown className="hidden h-4 w-4 text-[#74777c] sm:block" />
            </button>
            <button
              onClick={signOutUser}
              className="rounded-lg p-2 text-[#43474b] transition hover:bg-[#eceeef] hover:text-[#182732]"
              aria-label="Sign out"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div
          className={`mx-auto space-y-6 p-4 sm:p-8 lg:p-10 ${
            activeView === "curriculum" ? "max-w-[1520px]" : "max-w-[1280px]"
          }`}
        >
          {activeView === "curriculum" ? (
            <CourseDay
              key={activeDay.id}
              day={activeDay}
              nextDay={nextDay}
              homeworkText={homeworkText}
              savingHomework={savingHomework}
              onHomeworkTextChange={setHomeworkText}
              onSubmitHomework={submitHomework}
              onNextDay={() => {
                if (nextDay) setActiveDayId(nextDay.id);
              }}
            />
          ) : (
            <>
          <section className="relative overflow-hidden rounded-xl bg-[#2e3d48] p-6 text-white sm:p-8">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block rounded-full bg-[#61f7db] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.08em] text-[#007060]">
                UB Summer Program 2026
              </span>
              <h2 className="mt-4 font-[Hanken_Grotesk,Inter,sans-serif] text-4xl font-black leading-tight sm:text-5xl">
                Welcome back, {displayName.split("@")[0]}.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#98a7b5]">
                Your team is learning how communities work, where money flows,
                and how AI can turn public data into a real local program.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    setActiveView("curriculum");
                    setActiveDayId(courseDays[0].id);
                  }}
                  className="flex items-center gap-2 rounded-lg bg-[#006b5c] px-5 py-3 text-sm font-black text-white transition hover:bg-[#005045]"
                >
                  Resume Day 1 Module <ArrowRight className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-2 rounded-lg bg-[#182732] px-4 py-3">
                  <Users className="h-4 w-4 text-[#3fddc2]" />
                  <span className="text-sm font-semibold">{currentRole}</span>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 opacity-40 md:block">
              <div className="absolute right-8 top-8 h-28 w-28 rounded-xl border border-[#64fade]/30" />
              <div className="absolute bottom-8 right-24 h-40 w-40 rounded-xl border border-[#64fade]/20" />
              <div className="absolute right-20 top-28 h-2 w-44 bg-[#64fade]" />
            </div>
          </section>

          <section className="grid grid-cols-12 gap-6">
            <div className="col-span-12 space-y-6 lg:col-span-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-[#c3c7cb] bg-white p-6 transition hover:shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#006b5c]/10 text-[#006b5c]">
                      <ClipboardList className="h-6 w-6" />
                    </div>
                    <span className="rounded bg-[#ffdad6] px-2 py-1 text-xs font-bold text-[#93000a]">
                      Due today
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Community Systems Reflection</h3>
                  <p className="mt-2 text-sm leading-6 text-[#43474b]">
                    Submit three things learned, three organizations found, and
                    one community problem you care about.
                  </p>
                  <textarea
                    value={homeworkText}
                    onChange={(event) => setHomeworkText(event.target.value)}
                    className="mt-4 min-h-28 w-full resize-none rounded-lg border border-[#c3c7cb] bg-[#f2f4f5] p-3 text-sm outline-none focus:ring-2 focus:ring-[#006b5c]"
                    placeholder="Type your Day 1 reflection..."
                  />
                </div>

                <div className="rounded-xl border border-[#c3c7cb] bg-white p-6 transition hover:shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#eeb111]/10 text-[#946900]">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <span className="rounded bg-[#eceeef] px-2 py-1 text-xs font-bold text-[#43474b]">
                      Team seed
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Program Idea Builder</h3>
                  <div className="mt-4 space-y-3">
                    <input
                      value={problem}
                      onChange={(event) => setProblem(event.target.value)}
                      placeholder="Community problem"
                      className="h-11 w-full rounded-lg border border-[#c3c7cb] bg-[#f2f4f5] px-3 text-sm outline-none focus:ring-2 focus:ring-[#006b5c]"
                    />
                    <input
                      value={audience}
                      onChange={(event) => setAudience(event.target.value)}
                      placeholder="Audience"
                      className="h-11 w-full rounded-lg border border-[#c3c7cb] bg-[#f2f4f5] px-3 text-sm outline-none focus:ring-2 focus:ring-[#006b5c]"
                    />
                    <input
                      value={partner}
                      onChange={(event) => setPartner(event.target.value)}
                      placeholder="Possible partner"
                      className="h-11 w-full rounded-lg border border-[#c3c7cb] bg-[#f2f4f5] px-3 text-sm outline-none focus:ring-2 focus:ring-[#006b5c]"
                    />
                    <button
                      onClick={saveIdea}
                      disabled={savingIdea || !problem.trim()}
                      className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#006b5c] text-sm font-black text-white transition hover:bg-[#005045] disabled:opacity-50"
                    >
                      Save idea <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#c3c7cb] bg-white">
                <div className="flex items-center justify-between border-b border-[#c3c7cb] p-6">
                  <h3 className="text-xl font-bold">AI Lab Insights</h3>
                  <button className="rounded bg-[#182732] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.08em] text-white">
                    Refresh Data
                  </button>
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-3">
                  {[
                    ["94%", "Confidence score", "Budget + chamber signals aligned"],
                    ["128", "Local orgs", "Directory scan ready for review"],
                    ["4", "Role tracks", "Research, design, build, outreach"],
                  ].map(([value, label, detail]) => (
                    <div key={label}>
                      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#74777c]">
                        {label}
                      </p>
                      <div className="mt-2 text-4xl font-black text-[#006b5c]">
                        {value}
                      </div>
                      <p className="mt-1 text-sm text-[#43474b]">{detail}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#eceeef] p-5">
                  <div className="grid gap-3 md:grid-cols-4">
                    {dataSources.map(([title, detail, active]) => (
                      <div
                        key={title}
                        className="rounded-lg border border-[#c3c7cb] bg-white p-4"
                      >
                        <div className="flex items-center justify-between">
                          <Database className="h-5 w-5 text-[#006b5c]" />
                          {active && <CheckCircle2 className="h-4 w-4 text-[#006b5c]" />}
                        </div>
                        <p className="mt-3 text-sm font-bold">{title}</p>
                        <p className="mt-1 text-xs leading-5 text-[#43474b]">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#c3c7cb] bg-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Curriculum Sprint</h3>
                  <BookOpen className="h-5 w-5 text-[#006b5c]" />
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-4">
                  {courseDays.map((day) => (
                    <button
                      key={day.id}
                      onClick={() => {
                        setActiveView("curriculum");
                        setActiveDayId(day.id);
                      }}
                      className="rounded-lg bg-[#f2f4f5] p-4 text-left transition hover:bg-[#eceeef] hover:shadow-md"
                    >
                      <p className="font-mono text-[11px] font-black uppercase text-[#006b5c]">
                        {day.label}
                      </p>
                      <p className="mt-2 text-sm font-black">{day.title}</p>
                      <p className="mt-2 text-xs leading-5 text-[#43474b]">
                        {day.deliverable}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-12 space-y-6 lg:col-span-4">
              <div className="rounded-xl border border-[#c3c7cb] bg-white">
                <div className="border-b border-[#c3c7cb] p-6">
                  <h3 className="flex items-center gap-2 text-xl font-bold">
                    <MessageSquare className="h-5 w-5 text-[#006b5c]" />
                    Activity Feed
                  </h3>
                </div>
                <div className="space-y-5 p-6">
                  {[
                    ["You", "created a Day 1 reflection draft", "2 minutes ago"],
                    ["Team Delta", "completed opportunity mapping", "1 hour ago"],
                    ["AI Lab", "found workforce budget signals", "3 hours ago"],
                  ].map(([name, action, time]) => (
                    <div key={time} className="flex gap-3">
                      <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-[#d4e5f3] text-xs font-black text-[#182732]">
                        {initials(name)}
                      </span>
                      <div>
                        <p className="text-sm">
                          <span className="font-bold">{name}</span> {action}
                        </p>
                        <p className="mt-1 font-mono text-[10px] uppercase text-[#74777c]">
                          {time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-[#182732] p-6 text-white">
                <p className="font-mono text-[11px] font-black uppercase tracking-[0.08em] text-[#3fddc2]">
                  My upcoming milestones
                </p>
                <div className="mt-5 space-y-4">
                  {([
                    ["Community data scan", "Finish before Day 2 lab", true],
                    ["Role preference", "Choose one track to practice", false],
                    ["Proposal pitch", "Ready by Thursday", false],
                  ] as const).map(([title, detail, done]) => (
                    <div key={title} className="flex gap-3">
                      {done ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#3fddc2]" />
                      ) : (
                        <span className="mt-1 h-3 w-3 rounded-full border-2 border-[#eeb111]" />
                      )}
                      <div>
                        <p className="text-sm font-bold">{title}</p>
                        <p className="text-xs text-[#98a7b5]">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[#c3c7cb] bg-white p-6">
                <h3 className="flex items-center gap-2 text-xl font-bold">
                  <Bot className="h-5 w-5 text-[#006b5c]" />
                  AI Lab Assistant
                </h3>
                <div className="mt-4 rounded-lg bg-[#f2f4f5] p-4 text-sm italic leading-6 text-[#43474b]">
                  &quot;Based on your current goals, start by comparing city
                  budget priorities with Chamber organizations that already
                  serve youth workforce pathways.&quot;
                </div>
                <div className="mt-4 flex gap-2">
                  <input
                    className="h-10 flex-1 rounded-lg border border-[#c3c7cb] bg-[#f2f4f5] px-3 text-sm outline-none focus:ring-2 focus:ring-[#006b5c]"
                    placeholder="Ask AI Assistant..."
                  />
                  <button className="grid h-10 w-10 place-items-center rounded-lg bg-[#006b5c] text-white">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {ideas.length > 0 && (
                <div className="rounded-xl border border-[#c3c7cb] bg-white p-6">
                  <h3 className="text-xl font-bold">Saved Ideas</h3>
                  <div className="mt-4 space-y-3">
                    {ideas.slice(0, 3).map((idea) => (
                      <div key={idea.id} className="rounded-lg bg-[#f2f4f5] p-3">
                        <p className="text-sm font-bold">{idea.problem}</p>
                        <p className="mt-1 text-xs text-[#43474b]">
                          {idea.audience || "Audience TBD"} /{" "}
                          {idea.partner || "Partner TBD"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {homework.length > 0 && (
                <div className="rounded-xl border border-[#c3c7cb] bg-white p-6">
                  <h3 className="text-xl font-bold">Recent Submissions</h3>
                  <div className="mt-4 space-y-3">
                    {homework.slice(0, 2).map((item) => (
                      <div key={item.id} className="rounded-lg bg-[#f2f4f5] p-3">
                        <p className="font-mono text-[10px] font-black uppercase text-[#006b5c]">
                          {item.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-sm text-[#43474b]">
                          {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          <footer className="flex flex-col justify-between gap-3 border-t border-[#c3c7cb] pt-8 text-sm text-[#74777c] md:flex-row">
            <span>AutoNateAI Civic Scholar Portal</span>
            <span>Grand Rapids Community Innovation Studio</span>
          </footer>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default function HomePage() {
  return (
    <AuthGate>
      <Portal />
    </AuthGate>
  );
}
