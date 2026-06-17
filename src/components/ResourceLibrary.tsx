import {
  BookOpen,
  CalendarDays,
  Download,
  FileText,
  GraduationCap,
  Link as LinkIcon,
  NotebookText,
  Sparkles,
} from "lucide-react";
import { availableResources, days, type ProgramDay, type Resource } from "@/lib/resources";

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
          download
          className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#14384c] px-4 text-sm font-black text-white transition hover:bg-[#1f516b]"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      ) : (
        <div className="mt-5 flex h-11 items-center rounded-md border border-dashed border-[#c5ced5] px-4 text-sm font-bold text-[#65727b]">
          Not posted yet
        </div>
      )}
    </article>
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
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {day.resources.map((resource) => (
          <ResourceCard key={`${day.label}-${resource.type}`} resource={resource} />
        ))}
      </div>
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
              ub.autonateai.com
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Download the notes, assignments, and pre-class materials for each program day.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#dbe8ed]">
              This page replaces the student portal. Materials will be posted here as PDFs so students can access them directly before, during, and after class.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["Pre-Class Notes", "Prep before sessions"],
              ["Class Notes", "Daily concept handouts"],
              ["Assignments", "Homework packets"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-md border border-white/15 bg-white/8 p-4">
                <p className="font-black">{title}</p>
                <p className="mt-1 text-sm text-[#bfd2da]">{detail}</p>
              </div>
            ))}
          </div>
        </div>
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
            {availableResources.length} PDF downloads posted
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
