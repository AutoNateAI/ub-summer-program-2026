import {
  BookOpen,
  CalendarDays,
  Download,
  FileText,
  GraduationCap,
  Link as LinkIcon,
  NotebookText,
  Play,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { availableResources, days, type ProgramDay, type Resource } from "@/lib/resources";
import { WeekendQuiz } from "@/components/WeekendQuiz";

const typeStyles = {
  "Pre-Class Notes": {
    icon: NotebookText,
    label: "Prep",
    className: "bg-[#e9f2f3] text-[#174b54]",
  },
  "Class Notes": {
    icon: BookOpen,
    label: "Notes",
    className: "bg-[#edf4ec] text-[#1d5731]",
  },
  Assignment: {
    icon: FileText,
    label: "Homework",
    className: "bg-[#fff2d8] text-[#7b5610]",
  },
} as const;

function ResourceCard({ resource }: { resource: Resource }) {
  const style = typeStyles[resource.type];
  const Icon = style.icon;
  const isAvailable = resource.status === "Available" && resource.href;
  const isPdf = resource.href?.endsWith(".pdf");

  return (
    <article className="flex min-h-[210px] flex-col justify-between rounded-lg border border-[#d4dbe0] bg-white p-5 shadow-sm">
      <div>
        <div className="flex items-start justify-between gap-3">
          <span
            className={`inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-black uppercase tracking-[0.08em] ${style.className}`}
          >
            <Icon className="h-3.5 w-3.5" />
            {style.label}
          </span>
          <span
            className={`rounded-md px-2.5 py-1 text-xs font-bold ${
              isAvailable
                ? "bg-[#d8f1e2] text-[#17542d]"
                : "bg-[#edf0f2] text-[#65727b]"
            }`}
          >
            {resource.status}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-black leading-tight text-[#14384c]">
          {resource.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#53616b]">{resource.detail}</p>
      </div>

      {isAvailable ? (
        <a
          href={resource.href}
          download={isPdf || undefined}
          target={isPdf ? undefined : "_blank"}
          rel={isPdf ? undefined : "noreferrer"}
          className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#14384c] px-4 text-sm font-black text-white transition hover:bg-[#1f516b]"
        >
          {isPdf ? <Download className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
          {isPdf ? "Download PDF" : "Open Resource"}
        </a>
      ) : (
        <div className="mt-5 flex h-11 items-center rounded-md border border-dashed border-[#c5ced5] px-4 text-sm font-bold text-[#65727b]">
          Not posted yet
        </div>
      )}
    </article>
  );
}

function VideoCard({ day }: { day: ProgramDay }) {
  if (!day.video) {
    return (
      <aside className="rounded-lg border border-dashed border-[#c5ced5] bg-white p-5">
        <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#65727b]">
          <Play className="h-4 w-4" />
          Daily Video
        </div>
        <p className="mt-3 text-sm leading-6 text-[#65727b]">
          The class replay will appear here when it is ready.
        </p>
      </aside>
    );
  }

  return (
    <aside className="overflow-hidden rounded-lg border border-[#14384c] bg-[#071821] text-white shadow-sm">
      <div className="aspect-video bg-black">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${day.video.youtubeId}`}
          title={day.video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#ffd56a]">
          <Play className="h-4 w-4" />
          Daily Video
        </div>
        <h4 className="mt-2 text-xl font-black">{day.video.title}</h4>
        <p className="mt-2 text-sm leading-6 text-[#c9d9df]">{day.video.detail}</p>
        <a
          href={day.video.url}
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#7ff8ef] px-4 py-2 text-sm font-black text-[#071821] transition hover:bg-[#b2fff8]"
        >
          Open on YouTube
        </a>
      </div>
    </aside>
  );
}

function DaySection({
  day,
  focused,
}: {
  day: ProgramDay;
  focused: boolean;
}) {
  return (
    <section
      id={day.slug}
      className={`scroll-mt-6 rounded-lg border bg-[#fbfaf7] p-4 ${
        focused ? "border-[#d99a2b] shadow-[0_0_0_3px_rgba(217,154,43,0.16)]" : "border-[#d4dbe0]"
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.08em] text-[#8f6417]">
            {day.label} · {day.date}
          </p>
          <h3 className="text-xl font-black text-[#14384c]">{day.title}</h3>
        </div>
        <a
          href={`/${day.slug}/`}
          className="inline-flex items-center gap-2 rounded-md border border-[#d4dbe0] bg-white px-3 py-2 text-sm font-black text-[#14384c] transition hover:border-[#277c86] hover:text-[#277c86]"
        >
          <LinkIcon className="h-4 w-4" />
          Share {day.label}
        </a>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {day.resources.map((resource) => (
            <ResourceCard key={`${day.label}-${resource.type}`} resource={resource} />
          ))}
        </div>
        <VideoCard day={day} />
      </div>
      {day.slug === "day-3" ? <WeekendQuiz /> : null}
    </section>
  );
}

export function ResourceLibrary({ focusedDaySlug }: { focusedDaySlug?: string }) {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#18252d]">
      <header className="border-b border-[#d7d1c3] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-md bg-[#14384c] text-white">
              <GraduationCap className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.08em] text-[#8f6417]">
                GVSU TRIO Upward Bound
              </p>
              <h1 className="text-2xl font-black tracking-tight text-[#14384c]">
                Summer Program Resource Library
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-[#d7d1c3] bg-[#fbfaf7] px-3 py-2 text-sm font-bold text-[#53616b]">
            <Sparkles className="h-4 w-4 text-[#277c86]" />
            Built with AutoNateAI
          </div>
        </div>
      </header>

      <section className="border-b border-[#d7d1c3] bg-[#14384c] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#d99a2b]">
              Become The Plug Program · ub.autonateai.com
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Learn how money, people, and opportunities move through your city.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#dbe8ed]">
              This is the free resource library for the GVSU TRIO Upward Bound
              summer experience powered by AutoNateAI. Students use this page to
              watch the daily video, download the notes, complete the assignments,
              and build the mindset of becoming the plug: the person who understands
              demand, traces supply, connects partners, and helps real programs happen.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Demand", "Spot what people need and what leaders are discussing."],
                ["Supply", "Trace the money, departments, vendors, and programs."],
                ["The Plug", "Connect local businesses to opportunities that already exist."],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-md border border-white/15 bg-white/8 p-4">
                  <p className="font-black text-[#ffd56a]">{title}</p>
                  <p className="mt-1 text-sm leading-5 text-[#bfd2da]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/8 p-5">
            <p className="text-sm font-black uppercase tracking-[0.08em] text-[#ffd56a]">
              How to use this page
            </p>
            <div className="mt-4 space-y-4">
              {[
                [Play, "Watch the daily video first so the class theme clicks before you start working."],
                [BookOpen, "Download the notes and keep them open while your team researches."],
                [FileText, "Use the assignments to turn research into a real Opportunity Report."],
                [Users, "Share the day link with classmates, mentors, or partner orgs so they see the work in real time."],
              ].map(([Icon, text]) => (
                <div key={text as string} className="flex gap-3">
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-md bg-[#7ff8ef] text-[#071821]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm leading-6 text-[#dbe8ed]">{text as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:px-8 lg:grid-cols-3">
        {[
          ["For students", "You are not just doing homework. You are learning how to read the city, find demand, understand supply, and connect people to opportunity."],
          ["For partners", "This is a live look at a youth innovation program that turns public data, AI workflows, and local networks into practical community ideas."],
          ["For the program", "Every day builds toward students becoming opportunity brokers who can explain the problem, map the money, and assemble the partnership."],
        ].map(([title, detail]) => (
          <article key={title} className="rounded-lg border border-[#d4dbe0] bg-white p-5 shadow-sm">
            <Target className="h-5 w-5 text-[#277c86]" />
            <h3 className="mt-3 text-lg font-black text-[#14384c]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#53616b]">{detail}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.1em] text-[#8f6417]">
              Available Now
            </p>
            <h2 className="mt-1 text-2xl font-black text-[#14384c]">
              Latest Downloads
            </h2>
          </div>
          <p className="text-sm font-semibold text-[#65727b]">
            {availableResources.length} resources posted
          </p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {availableResources.map((resource) => (
            <ResourceCard key={`${resource.day}-${resource.type}`} resource={resource} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
        <div className="flex items-center gap-3 border-t border-[#d7d1c3] pt-8">
          <CalendarDays className="h-5 w-5 text-[#277c86]" />
          <h2 className="text-2xl font-black text-[#14384c]">Program Materials</h2>
        </div>

        <div className="mt-5 grid gap-5">
          {days.map((day) => (
            <DaySection
              key={day.label}
              day={day}
              focused={focusedDaySlug === day.slug}
            />
          ))}
        </div>
      </section>

      <footer className="border-t border-[#d7d1c3] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm font-semibold text-[#65727b] sm:px-8 md:flex-row md:items-center md:justify-between">
          <span>GVSU TRIO Upward Bound</span>
          <span>AutoNateAI</span>
        </div>
      </footer>
    </main>
  );
}
