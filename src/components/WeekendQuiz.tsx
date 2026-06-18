"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  CheckCircle2,
  ClipboardCheck,
  Loader2,
  LockKeyhole,
  Save,
} from "lucide-react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { weekendQuiz } from "@/lib/weekendQuiz";

type QuizSaveData = {
  quizId: string;
  name: string;
  email: string;
  answers: Record<string, number>;
  score: number;
  submitted: boolean;
};

function normalizeName(value: string) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function toHex(buffer: ArrayBuffer) {
  return [...new Uint8Array(buffer)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function quizDocId(name: string, email: string) {
  const payload = `${weekendQuiz.id}:${normalizeName(name)}:${normalizeEmail(email)}`;
  const buffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(payload),
  );

  return toHex(buffer);
}

function scoreAnswers(answers: Record<string, number>) {
  return weekendQuiz.questions.reduce(
    (total, question) =>
      answers[question.id] === question.answerIndex ? total + 1 : total,
    0,
  );
}

export function WeekendQuiz() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [loaded, setLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const score = useMemo(() => scoreAnswers(answers), [answers]);
  const canSave = name.trim() && email.trim() && !busy;
  const allAnswered = answeredCount === weekendQuiz.questions.length;

  async function loadProgress(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSave) return;

    setBusy(true);
    setStatus("Checking Firebase for saved progress...");

    try {
      const id = await quizDocId(name, email);
      const ref = doc(db, "weekendQuizResponses", id);
      const snapshot = await getDoc(ref);

      if (snapshot.exists()) {
        const data = snapshot.data() as QuizSaveData;
        setAnswers(data.answers || {});
        setSubmitted(Boolean(data.submitted));
        setStatus("Loaded saved quiz progress.");
      } else {
        setAnswers({});
        setSubmitted(false);
        setStatus("No saved quiz found yet. Start below and save as you go.");
      }

      setLoaded(true);
    } catch (error) {
      console.error(error);
      setStatus("Unable to load progress. Check the name and email, then try again.");
    } finally {
      setBusy(false);
    }
  }

  async function saveProgress(nextSubmitted = submitted) {
    if (!canSave) return;

    setBusy(true);
    setStatus(nextSubmitted ? "Submitting quiz..." : "Saving progress...");

    try {
      const id = await quizDocId(name, email);
      const ref = doc(db, "weekendQuizResponses", id);

      await setDoc(
        ref,
        {
          quizId: weekendQuiz.id,
          name: name.trim(),
          nameKey: normalizeName(name),
          email: normalizeEmail(email),
          answers,
          answeredCount,
          score,
          totalPoints: weekendQuiz.points,
          submitted: nextSubmitted,
          dueLabel: weekendQuiz.dueLabel,
          updatedAt: serverTimestamp(),
          ...(nextSubmitted ? { submittedAt: serverTimestamp() } : {}),
        },
        { merge: true },
      );

      setSubmitted(nextSubmitted);
      setLoaded(true);
      setStatus(nextSubmitted ? "Quiz submitted and saved." : "Progress saved.");
    } catch (error) {
      console.error(error);
      setStatus("Save failed. Try again before leaving the page.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section
      id="weekend-quiz"
      className="mt-5 scroll-mt-6 overflow-hidden rounded-lg border border-[#14384c] bg-white shadow-sm"
    >
      <div className="bg-[#071821] px-5 py-6 text-white sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.1em] text-[#ffd56a]">
              Weekend Quiz · 30 points
            </p>
            <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              {weekendQuiz.title}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#c9d9df]">
              This checks what you picked up from Days 1-3: demand, budgets,
              city council, departments, Chamber supply, partnership ROI,
              prompting, Google Docs, Stitch, Lovable.dev, and becoming the plug.
            </p>
          </div>
          <div className="rounded-md border border-[#ffd56a]/40 bg-[#ffd56a]/12 px-4 py-3 text-sm font-black text-[#ffd56a]">
            {weekendQuiz.dueLabel}
          </div>
        </div>
      </div>

      <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[320px_1fr]">
        <aside className="h-fit rounded-lg border border-[#d4dbe0] bg-[#fbfaf7] p-4">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#8f6417]">
            <LockKeyhole className="h-4 w-4" />
            Save & Resume
          </div>
          <form className="mt-4 grid gap-3" onSubmit={loadProgress}>
            <label className="grid gap-1 text-sm font-bold text-[#14384c]">
              Full name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="h-11 rounded-md border border-[#c5ced5] bg-white px-3 text-sm font-semibold outline-none focus:border-[#277c86]"
                placeholder="Student name"
              />
            </label>
            <label className="grid gap-1 text-sm font-bold text-[#14384c]">
              Email
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-11 rounded-md border border-[#c5ced5] bg-white px-3 text-sm font-semibold outline-none focus:border-[#277c86]"
                placeholder="student@email.com"
                type="email"
              />
            </label>
            <button
              type="submit"
              disabled={!canSave}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#14384c] px-4 text-sm font-black text-white transition hover:bg-[#1f516b] disabled:cursor-not-allowed disabled:bg-[#9aa5aa]"
            >
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <ClipboardCheck className="h-4 w-4" />}
              Load / Start Quiz
            </button>
          </form>

          <div className="mt-4 rounded-md border border-[#d4dbe0] bg-white p-3">
            <p className="text-sm font-black text-[#14384c]">
              {answeredCount}/{weekendQuiz.questions.length} answered
            </p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#edf0f2]">
              <div
                className="h-full bg-[#277c86]"
                style={{
                  width: `${(answeredCount / weekendQuiz.questions.length) * 100}%`,
                }}
              />
            </div>
            {submitted ? (
              <p className="mt-3 text-sm font-black text-[#17542d]">
                Submitted: {score}/{weekendQuiz.points}
              </p>
            ) : null}
          </div>

          {status ? (
            <p className="mt-3 rounded-md bg-[#e9f2f3] p-3 text-sm font-semibold leading-5 text-[#174b54]">
              {status}
            </p>
          ) : null}

          <div className="mt-4 grid gap-2">
            <button
              type="button"
              disabled={!canSave || !loaded}
              onClick={() => saveProgress(false)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#14384c] bg-white px-4 text-sm font-black text-[#14384c] transition hover:bg-[#eef7f8] disabled:cursor-not-allowed disabled:border-[#c5ced5] disabled:text-[#9aa5aa]"
            >
              <Save className="h-4 w-4" />
              Save Progress
            </button>
            <button
              type="button"
              disabled={!canSave || !loaded || !allAnswered}
              onClick={() => saveProgress(true)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#d99a2b] px-4 text-sm font-black text-[#071821] transition hover:bg-[#f1b94b] disabled:cursor-not-allowed disabled:bg-[#d8d2bf]"
            >
              <CheckCircle2 className="h-4 w-4" />
              Submit Quiz
            </button>
          </div>
        </aside>

        <div className="grid gap-4">
          {weekendQuiz.questions.map((question, index) => (
            <article
              key={question.id}
              className="rounded-lg border border-[#d4dbe0] bg-[#fbfaf7] p-4"
            >
              <p className="text-sm font-black uppercase tracking-[0.08em] text-[#8f6417]">
                Question {index + 1}
              </p>
              <h4 className="mt-2 text-base font-black leading-6 text-[#14384c]">
                {question.prompt}
              </h4>
              <div className="mt-3 grid gap-2">
                {question.options.map((option, optionIndex) => {
                  const selected = answers[question.id] === optionIndex;

                  return (
                    <label
                      key={option}
                      className={`flex cursor-pointer gap-3 rounded-md border bg-white p-3 text-sm font-semibold leading-5 transition ${
                        selected
                          ? "border-[#277c86] shadow-[0_0_0_2px_rgba(39,124,134,0.18)]"
                          : "border-[#d4dbe0] hover:border-[#277c86]"
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        checked={selected}
                        onChange={() =>
                          setAnswers((current) => ({
                            ...current,
                            [question.id]: optionIndex,
                          }))
                        }
                        className="mt-1"
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
