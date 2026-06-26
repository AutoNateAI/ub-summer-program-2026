"use client";

import { useState } from "react";
import {
  Check,
  Clipboard,
  Clock,
  Code2,
  Gamepad2,
  Library,
  MapPin,
  Sparkles,
  Trophy,
} from "lucide-react";
import {
  trioOlympicsChallengeCards,
  trioOlympicsPrompts,
  type TrioPrompt,
} from "@/lib/trioOlympicsPrompts";

const toolStyles = {
  "ChatGPT / Gemini": "bg-[#e9f2f3] text-[#174b54]",
  "Replit AI": "bg-[#fff2d8] text-[#7b5610]",
  Either: "bg-[#edf4ec] text-[#1d5731]",
} as const;

const runOfShow = [
  ["9:00 AM", "Breakfast", "Kleiner / DISH"],
  ["9:45 AM", "Travel to Kirkhof", "Kirkhof"],
  ["10:00 AM", "Welcome, Admissions, SSS intro, and review of the day", "Kirkhof"],
  ["10:25 AM", "Shift to first round of games", "Game rooms"],
  ["10:30 AM", "First round of games", "Assigned locations"],
  ["11:35 AM", "Shift to second round of games", "Game rooms"],
  ["11:45 AM", "Second round of games", "Assigned locations"],
  ["12:50 PM", "Shift to lunch", "Kleiner / DISH"],
  ["1:00 PM", "Lunch", "Kleiner / DISH"],
  ["2:00 PM", "Shift to third round of games", "Game rooms"],
  ["2:10 PM", "Third round of games", "Assigned locations"],
  ["3:15 PM", "Travel to closing ceremonies", "KC 2250"],
  ["3:30 PM", "Closing ceremonies and group photo", "KC 2250"],
];

const olympicEvents = [
  ["Room 2204", "Paper Airplane Competition"],
  ["Room 2215 / 2216", "Scattegories"],
  ["Room 2263", "Spelling Bee"],
  ["Room 2266", "Math Jeopardy"],
  ["Room 2270", "Math Jeopardy"],
  ["Room 1142", "AI Hackathon"],
  ["Library North Lawn", "Corn Hole Tournament"],
  ["Library North Lawn", "Precision Games"],
  ["KC East Lawn", "Physical Fitness Challenges"],
  ["Kleiner", "Hoop Skills"],
];

function PromptCard({ prompt }: { prompt: TrioPrompt }) {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <article className="rounded-lg border border-[#d4dbe0] bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-[#14384c] px-2.5 py-1 text-xs font-black uppercase tracking-[0.08em] text-white">
              {prompt.stage}
            </span>
            <span
              className={`rounded-md px-2.5 py-1 text-xs font-black uppercase tracking-[0.08em] ${toolStyles[prompt.tool]}`}
            >
              {prompt.tool}
            </span>
          </div>
          <h2 className="mt-3 text-xl font-black text-[#14384c]">
            {prompt.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#53616b]">{prompt.detail}</p>
        </div>
        <button
          type="button"
          onClick={copyPrompt}
          className="inline-flex h-10 flex-none items-center justify-center gap-2 rounded-md bg-[#14384c] px-4 text-sm font-black text-white transition hover:bg-[#1f516b]"
        >
          {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="mt-4 max-h-[260px] overflow-auto whitespace-pre-wrap rounded-md border border-[#d4dbe0] bg-[#fbfaf7] p-4 text-sm font-semibold leading-6 text-[#18252d]">
        {prompt.prompt}
      </pre>
    </article>
  );
}

export function TrioOlympicsPromptRepo() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#18252d]">
      <header className="border-b border-[#d7d1c3] bg-[#071821] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#ffd56a]/30 bg-[#ffd56a]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-[#ffd56a]">
            <Trophy className="h-4 w-4" />
            TRIO Olympics
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            AI Game Jam Prompt Repo
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#dbe8ed]">
            Use ChatGPT or Google Gemini as your creative director. Use Replit AI
            as your software engineer. Copy a prompt, edit it for your team, ask
            questions, then move the best handoff into Replit.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              [Sparkles, "Think", "Use ChatGPT or Gemini to research, brainstorm, and design."],
              [Code2, "Build", "Use Replit AI to turn the handoff into HTML, CSS, and JavaScript."],
              [Library, "Add Legos", "Use Phaser, Three.js, or p5.js as optional digital Lego add-ons."],
            ].map(([Icon, title, detail]) => (
              <article key={title as string} className="rounded-lg border border-white/15 bg-white/8 p-4">
                <Icon className="h-5 w-5 text-[#7ff8ef]" />
                <h2 className="mt-3 text-lg font-black">{title as string}</h2>
                <p className="mt-2 text-sm leading-6 text-[#c9d9df]">
                  {detail as string}
                </p>
              </article>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="rounded-lg border border-[#d4dbe0] bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <Gamepad2 className="mt-1 h-6 w-6 flex-none text-[#277c86]" />
            <div>
              <h2 className="text-2xl font-black text-[#14384c]">
                Required Game Style
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#53616b]">
                Everyone is building a Zelda-like browser game: top-down
                exploration, a Future Realm map, power-ups, challenge enemies, a
                boss, score, health, and replayable action. Your team can remix
                the look, story, power-ups, and add-on library.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-8 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-lg border border-[#d4dbe0] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#8f6417]">
            <Clock className="h-4 w-4" />
            Run of Show
          </div>
          <div className="mt-4 grid gap-2">
            {runOfShow.map(([time, activity, location]) => (
              <div
                key={`${time}-${activity}`}
                className="grid gap-2 rounded-md border border-[#d4dbe0] bg-[#fbfaf7] p-3 sm:grid-cols-[90px_1fr_140px]"
              >
                <p className="text-sm font-black text-[#14384c]">{time}</p>
                <p className="text-sm font-semibold text-[#18252d]">{activity}</p>
                <p className="text-sm font-bold text-[#65727b]">{location}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#d4dbe0] bg-[#fbfaf7] p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#8f6417]">
            <MapPin className="h-4 w-4" />
            Event Locations
          </div>
          <div className="mt-4 grid gap-2">
            {olympicEvents.map(([location, event]) => (
              <div
                key={`${location}-${event}`}
                className="rounded-md border border-[#d4dbe0] bg-white p-3"
              >
                <p className="text-sm font-black text-[#14384c]">{event}</p>
                <p className="mt-1 text-sm font-semibold text-[#65727b]">
                  {location}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md bg-[#fff2d8] p-3 text-sm font-bold leading-6 text-[#7b5610]">
            Each activity awards 1 gold, 1 silver, and 1 bronze. The program
            with the most gold medals at the end wins the trophy.
          </div>
          <div className="mt-4 rounded-md border border-[#d4dbe0] bg-white p-3">
            <p className="text-sm font-black text-[#14384c]">Materials</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-[#65727b]">
              Writing pens, paper/card stock, markers, tape, scissors for
              airplanes, and whiteboard markers.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.1em] text-[#8f6417]">
              Copy, Edit, Build
            </p>
            <h2 className="mt-1 text-2xl font-black text-[#14384c]">
              Prompt Pack
            </h2>
          </div>
          <p className="text-sm font-semibold text-[#65727b]">
            {trioOlympicsPrompts.length} prompts
          </p>
        </div>
        <div className="mt-5 grid gap-4">
          {trioOlympicsPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
        <div className="rounded-lg border border-[#d4dbe0] bg-[#fbfaf7] p-5">
          <h2 className="text-2xl font-black text-[#14384c]">
            Challenge Cards
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#53616b]">
            Pick one twist if your team has time after the core game works.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {trioOlympicsChallengeCards.map((card) => (
              <div
                key={card}
                className="rounded-md border border-[#d4dbe0] bg-white px-3 py-3 text-sm font-black text-[#14384c]"
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
