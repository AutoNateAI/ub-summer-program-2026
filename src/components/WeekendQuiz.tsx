"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Loader2,
  LockKeyhole,
  Save,
  Sparkles,
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
  const [wizardStep, setWizardStep] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"forward" | "back">("forward");

  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const score = useMemo(() => scoreAnswers(answers), [answers]);
  const canSave = name.trim() && email.trim() && !busy;
  const allAnswered = answeredCount === weekendQuiz.questions.length;
  const currentQuestion = weekendQuiz.questions[currentIndex];
  const currentAnswer = answers[currentQuestion.id];
  const isLastQuestion = currentIndex === weekendQuiz.questions.length - 1;

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
      setWizardStep(2);
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

  function moveQuestion(nextIndex: number) {
    const boundedIndex = Math.min(
      Math.max(nextIndex, 0),
      weekendQuiz.questions.length - 1,
    );

    if (boundedIndex === currentIndex) return;

    setSlideDirection(boundedIndex > currentIndex ? "forward" : "back");
    setCurrentIndex(boundedIndex);
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
            Quiz Console
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Setup", "Identity", "Quiz"].map((step, index) => (
              <button
                key={step}
                type="button"
                onClick={() => (loaded || index < 2 ? setWizardStep(index) : null)}
                className={`h-9 rounded-md text-xs font-black transition ${
                  wizardStep === index
                    ? "bg-[#14384c] text-white"
                    : "bg-white text-[#65727b]"
                }`}
              >
                {step}
              </button>
            ))}
          </div>

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

        <div className="min-h-[640px] overflow-hidden rounded-lg border border-[#d4dbe0] bg-[#fbfaf7]">
          {wizardStep === 0 ? (
            <div className="quiz-panel-enter grid gap-5 p-5 sm:p-7">
              <div className="rounded-lg bg-[#071821] p-5 text-white">
                <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-[#ffd56a]">
                  <Sparkles className="h-4 w-4" />
                  Intro Wizard
                </div>
                <h4 className="mt-4 text-3xl font-black tracking-tight">
                  Before you start, know what this quiz is testing.
                </h4>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#c9d9df]">
                  This is not a memorization check. It is asking whether you can
                  think through demand, money, departments, Chamber supply,
                  partner ROI, team workflows, AI prompts, and useful software.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["1", "Read the system", "Budgets, departments, staff, and meetings show where demand is becoming action."],
                  ["2", "Find the supply", "Chamber members give you businesses, venues, services, and partners that can help."],
                  ["3", "Build the tool", "Lovable.dev turns the program idea into software that makes the program easier to run."],
                ].map(([number, title, detail]) => (
                  <article
                    key={number}
                    className="rounded-lg border border-[#d4dbe0] bg-white p-4"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-[#7ff8ef] text-sm font-black text-[#071821]">
                      {number}
                    </span>
                    <h5 className="mt-3 text-lg font-black text-[#14384c]">
                      {title}
                    </h5>
                    <p className="mt-2 text-sm leading-6 text-[#53616b]">
                      {detail}
                    </p>
                  </article>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setWizardStep(1)}
                className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-md bg-[#14384c] px-5 text-sm font-black text-white transition hover:bg-[#1f516b]"
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          ) : null}

          {wizardStep === 1 ? (
            <div className="quiz-panel-enter grid gap-5 p-5 sm:p-7">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.08em] text-[#8f6417]">
                  Save & Resume
                </p>
                <h4 className="mt-2 text-3xl font-black tracking-tight text-[#14384c]">
                  Enter the same name and email each time.
                </h4>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#53616b]">
                  Firebase saves your answers under your name and email. If you
                  come back later, this will reload your progress.
                </p>
              </div>

              <form
                className="grid max-w-xl gap-4 rounded-lg border border-[#d4dbe0] bg-white p-5"
                onSubmit={loadProgress}
              >
                <label className="grid gap-1 text-sm font-bold text-[#14384c]">
                  Full name
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="h-12 rounded-md border border-[#c5ced5] bg-white px-3 text-sm font-semibold outline-none focus:border-[#277c86]"
                    placeholder="Student name"
                  />
                </label>
                <label className="grid gap-1 text-sm font-bold text-[#14384c]">
                  Email
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-12 rounded-md border border-[#c5ced5] bg-white px-3 text-sm font-semibold outline-none focus:border-[#277c86]"
                    placeholder="student@email.com"
                    type="email"
                  />
                </label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setWizardStep(0)}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#14384c] bg-white px-4 text-sm font-black text-[#14384c]"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!canSave}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#14384c] px-4 text-sm font-black text-white transition hover:bg-[#1f516b] disabled:cursor-not-allowed disabled:bg-[#9aa5aa]"
                  >
                    {busy ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <ClipboardCheck className="h-4 w-4" />
                    )}
                    Load / Start Quiz
                  </button>
                </div>
              </form>
            </div>
          ) : null}

          {wizardStep === 2 ? (
            <div className="grid gap-5 p-5 sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.08em] text-[#8f6417]">
                    Question {currentIndex + 1} of {weekendQuiz.questions.length}
                  </p>
                  <h4 className="mt-1 text-2xl font-black text-[#14384c]">
                    Carousel Mode
                  </h4>
                </div>
                <div className="rounded-md bg-white px-3 py-2 text-sm font-black text-[#174b54]">
                  {typeof currentAnswer === "number" ? "Answered" : "Needs answer"}
                </div>
              </div>

              <article
                key={currentQuestion.id}
                className={`rounded-lg border border-[#d4dbe0] bg-white p-5 shadow-sm ${
                  slideDirection === "forward"
                    ? "quiz-slide-forward"
                    : "quiz-slide-back"
                }`}
              >
                <h5 className="text-xl font-black leading-7 text-[#14384c]">
                  {currentQuestion.prompt}
                </h5>
                <div className="mt-5 grid gap-3">
                  {currentQuestion.options.map((option, optionIndex) => {
                    const selected = currentAnswer === optionIndex;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setAnswers((current) => ({
                            ...current,
                            [currentQuestion.id]: optionIndex,
                          }))
                        }
                        className={`flex min-h-16 w-full items-start gap-3 rounded-md border bg-white p-4 text-left text-sm font-semibold leading-5 transition ${
                          selected
                            ? "border-[#277c86] bg-[#e9f7f8] shadow-[0_0_0_3px_rgba(39,124,134,0.18)]"
                            : "border-[#d4dbe0] hover:border-[#277c86]"
                        }`}
                      >
                        <span
                          className={`grid h-7 w-7 flex-none place-items-center rounded-md text-xs font-black ${
                            selected
                              ? "bg-[#277c86] text-white"
                              : "bg-[#edf0f2] text-[#53616b]"
                          }`}
                        >
                          {["A", "B", "C", "D"][optionIndex]}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
              </article>

              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="grid grid-cols-10 gap-1 sm:grid-cols-[repeat(30,minmax(0,1fr))] lg:w-[420px]">
                  {weekendQuiz.questions.map((question, index) => {
                    const answered = typeof answers[question.id] === "number";
                    const active = index === currentIndex;

                    return (
                      <button
                        key={question.id}
                        type="button"
                        onClick={() => moveQuestion(index)}
                        aria-label={`Go to question ${index + 1}`}
                        className={`h-2.5 rounded-full transition ${
                          active
                            ? "bg-[#14384c]"
                            : answered
                              ? "bg-[#277c86]"
                              : "bg-[#d4dbe0]"
                        }`}
                      />
                    );
                  })}
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => moveQuestion(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#14384c] bg-white px-4 text-sm font-black text-[#14384c] disabled:cursor-not-allowed disabled:border-[#c5ced5] disabled:text-[#9aa5aa]"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => moveQuestion(currentIndex + 1)}
                    disabled={isLastQuestion}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#14384c] px-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:bg-[#9aa5aa]"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  {isLastQuestion ? (
                    <button
                      type="button"
                      disabled={!canSave || !allAnswered}
                      onClick={() => saveProgress(true)}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#d99a2b] px-4 text-sm font-black text-[#071821] transition hover:bg-[#f1b94b] disabled:cursor-not-allowed disabled:bg-[#d8d2bf]"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Submit
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
