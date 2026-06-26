"use client";

import { useState } from "react";
import {
  Check,
  Clipboard,
  Clock,
  Code2,
  Download,
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

const gameJamRules = [
  "Build a Zelda-like browser game connected to TRIO: Path to the Future.",
  "Use ChatGPT or Gemini first to research, ask questions, refine the idea, and create the AI handoff.",
  "Use Replit AI to build, debug, polish, and deploy the playable game.",
  "Your game must include top-down exploration, power-ups, enemies or obstacles, health, score, restart, and a win or lose state.",
  "Your team may use HTML, CSS, and JavaScript only, or add Phaser.js, Three.js, or p5.js as digital Lego add-ons.",
  "Test the game before judging. A smaller working game beats a huge broken game.",
  "During arcade playtesting, students may not vote for their own team.",
];

const judgingCriteria = [
  ["Fun & Replayability", "30", "The game is enjoyable, fast to understand, and worth playing more than once."],
  ["TRIO Theme", "20", "The game clearly connects obstacles, power-ups, and progress to the TRIO journey."],
  ["Creativity", "20", "The team adds an original twist, strong story, smart mechanics, or memorable world."],
  ["Polish", "15", "The game feels finished through visuals, sound, feedback, animation, and clear UI."],
  ["Technical Execution", "10", "Controls work, core features function, and bugs do not block gameplay."],
  ["Arcade Pitch", "5", "The team can quickly explain what they built, why it matters, and how to play."],
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
            Today&apos;s challenge is to build a playable Zelda-like web game
            during TRIO Olympics. Use ChatGPT or Google Gemini as your creative
            director. Use Replit AI as your software engineer. Copy a prompt,
            edit it for your team, ask questions, then move the best handoff
            into Replit.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/resources/day-08/trio-olympics-ai-game-jam.pdf"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#ffd56a] px-5 text-sm font-black text-[#071821] transition hover:bg-[#ffe08a]"
            >
              <Download className="h-4 w-4" />
              Download Offline Guide
            </a>
            <a
              href="#prompt-pack"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-5 text-sm font-black text-white transition hover:bg-white/10"
            >
              <Clipboard className="h-4 w-4" />
              Jump To Prompts
            </a>
          </div>
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
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-[#d4dbe0] bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <Gamepad2 className="mt-1 h-6 w-6 flex-none text-[#277c86]" />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.1em] text-[#8f6417]">
                  The Challenge
                </p>
                <h2 className="mt-1 text-2xl font-black text-[#14384c]">
                  Build TRIO: Path To The Future
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#53616b]">
                  Everyone is building a Zelda-like browser game: top-down
                  exploration, a Future Realm map, power-ups, challenge enemies,
                  a boss, score, health, and replayable action. The player is a
                  TRIO scholar collecting Knowledge, Mentors, Scholarships,
                  Confidence, Study Skills, and Leadership while overcoming
                  Procrastination, Self-Doubt, Distraction, Financial Stress,
                  Fear of Failure, and Burnout.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[#d4dbe0] bg-[#fbfaf7] p-5 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.1em] text-[#8f6417]">
              Digital Legos
            </p>
            <h2 className="mt-1 text-2xl font-black text-[#14384c]">
              Start Simple, Add Power
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#53616b]">
              HTML gives the game structure, CSS gives it style, and JavaScript
              makes it move. Canvas, Phaser.js, Three.js, and p5.js are add-on
              pieces teams can ask Replit to use when they want stronger game
              systems, 3D scenes, or visual effects.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-[#d4dbe0] bg-white p-5 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.1em] text-[#8f6417]">
            Rules
          </p>
          <h2 className="mt-1 text-2xl font-black text-[#14384c]">
            Game Jam Rules
          </h2>
          <div className="mt-4 grid gap-2">
            {gameJamRules.map((rule, index) => (
              <div
                key={rule}
                className="grid grid-cols-[32px_1fr] gap-3 rounded-md border border-[#d4dbe0] bg-[#fbfaf7] p-3"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#14384c] text-sm font-black text-white">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold leading-6 text-[#53616b]">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#d4dbe0] bg-white p-5 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.1em] text-[#8f6417]">
            Judging
          </p>
          <h2 className="mt-1 text-2xl font-black text-[#14384c]">
            Judging Criteria
          </h2>
          <div className="mt-4 overflow-hidden rounded-md border border-[#d4dbe0]">
            {judgingCriteria.map(([category, points, detail]) => (
              <div
                key={category}
                className="grid gap-2 border-b border-[#d4dbe0] bg-[#fbfaf7] p-3 last:border-b-0 sm:grid-cols-[1fr_72px_1.5fr]"
              >
                <p className="text-sm font-black text-[#14384c]">{category}</p>
                <p className="text-sm font-black text-[#8f6417]">{points} pts</p>
                <p className="text-sm font-semibold leading-6 text-[#65727b]">
                  {detail}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md bg-[#edf4ec] p-3 text-sm font-bold leading-6 text-[#1d5731]">
            Total: 100 points. Peer choice can be used as a separate arcade
            award after students play each other&apos;s games.
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

      <section id="prompt-pack" className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
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
