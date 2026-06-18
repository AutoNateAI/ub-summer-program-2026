"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  KeyRound,
  Loader2,
  LogOut,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  Timestamp,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { weekendQuiz } from "@/lib/weekendQuiz";

type QuizResponse = {
  id: string;
  name: string;
  email: string;
  answers: Record<string, number>;
  answeredCount: number;
  score: number;
  totalPoints: number;
  submitted: boolean;
  updatedAt?: Timestamp;
  submittedAt?: Timestamp;
};

const allowedAdminEmail = "autonate.ai@gmail.com";
const temporaryPassphrase = "auth_user";

function optionLetter(index: number) {
  return ["A", "B", "C", "D"][index] || "-";
}

function formatTimestamp(timestamp?: Timestamp) {
  if (!timestamp) return "Not recorded";

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Detroit",
  }).format(timestamp.toDate());
}

export function QuizAdminView() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [phrase, setPhrase] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [loadingResponses, setLoadingResponses] = useState(false);
  const [status, setStatus] = useState("");
  const [selectedResponseId, setSelectedResponseId] = useState<string | null>(null);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(
    null,
  );

  const isAllowedEmail = user?.email?.toLowerCase() === allowedAdminEmail;

  const submittedCount = useMemo(
    () => responses.filter((response) => response.submitted).length,
    [responses],
  );
  const averageScore = useMemo(() => {
    if (!responses.length) return 0;

    return (
      responses.reduce((total, response) => total + (response.score || 0), 0) /
      responses.length
    );
  }, [responses]);
  const selectedResponse = useMemo(
    () =>
      responses.find((response) => response.id === selectedResponseId) ||
      responses[0] ||
      null,
    [responses, selectedResponseId],
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  async function signInAdmin() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    await signInWithPopup(auth, provider);
  }

  async function loadResponses() {
    setLoadingResponses(true);
    setStatus("Loading quiz responses from Firebase...");

    try {
      const responsesQuery = query(
        collection(db, "weekendQuizResponses"),
        orderBy("updatedAt", "desc"),
      );
      const snapshot = await getDocs(responsesQuery);
      setResponses(
        snapshot.docs.map((item) => ({
          id: item.id,
          ...(item.data() as Omit<QuizResponse, "id">),
        })),
      );
      if (!selectedResponseId && snapshot.docs[0]) {
        setSelectedResponseId(snapshot.docs[0].id);
      }
      setStatus("Quiz responses loaded.");
    } catch (error) {
      console.error(error);
      setStatus("Unable to load quiz responses. Check admin access and Firestore rules.");
    } finally {
      setLoadingResponses(false);
    }
  }

  async function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (phrase !== temporaryPassphrase || !isAllowedEmail) {
      setUnlocked(false);
      setStatus("Access denied.");
      return;
    }

    setUnlocked(true);
    await loadResponses();
  }

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#18252d]">
      <header className="border-b border-[#d7d1c3] bg-[#071821] text-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-[#ffd56a]">
            GVSU TRIO Upward Bound + AutoNateAI
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Weekend Quiz Admin
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#c9d9df]">
            Review student progress, submitted answers, scores, and the answer key
            for the Days 1-3 weekend checkpoint.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <div className="rounded-lg border border-[#d4dbe0] bg-white p-5 shadow-sm">
          {authLoading ? (
            <div className="inline-flex items-center gap-2 text-sm font-black text-[#14384c]">
              <Loader2 className="h-4 w-4 animate-spin" />
              Checking admin session
            </div>
          ) : user ? (
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-black text-[#14384c]">
                  Signed in as {user.email}
                </p>
                <p
                  className={`mt-1 inline-flex items-center gap-2 text-sm font-bold ${
                    isAllowedEmail ? "text-[#17542d]" : "text-[#8f1d1d]"
                  }`}
                >
                  {isAllowedEmail ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  {isAllowedEmail
                    ? "Email authorized"
                    : "This Google account is not authorized"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => signOut(auth)}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#14384c] px-4 text-sm font-black text-[#14384c]"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={signInAdmin}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#14384c] px-4 text-sm font-black text-white"
            >
              <ShieldCheck className="h-4 w-4" />
              Sign in with Google
            </button>
          )}

          {user ? (
            <form className="mt-5 grid gap-3 sm:max-w-md" onSubmit={unlock}>
              <label className="grid gap-1 text-sm font-bold text-[#14384c]">
                Temporary admin password
                <input
                  value={phrase}
                  onChange={(event) => setPhrase(event.target.value)}
                  className="h-11 rounded-md border border-[#c5ced5] bg-white px-3 text-sm font-semibold outline-none focus:border-[#277c86]"
                  placeholder="Enter password"
                  type="password"
                />
              </label>
              <button
                type="submit"
                disabled={!isAllowedEmail}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#d99a2b] px-4 text-sm font-black text-[#071821] disabled:cursor-not-allowed disabled:bg-[#d8d2bf]"
              >
                <KeyRound className="h-4 w-4" />
                Unlock Admin View
              </button>
            </form>
          ) : null}

          {status ? (
            <p className="mt-4 rounded-md bg-[#e9f2f3] p-3 text-sm font-semibold text-[#174b54]">
              {status}
            </p>
          ) : null}
        </div>
      </section>

      {unlocked ? (
        <>
          <section className="mx-auto grid max-w-7xl gap-4 px-5 pb-6 sm:px-8 lg:grid-cols-3">
            {[
              ["Responses", responses.length.toString()],
              ["Submitted", submittedCount.toString()],
              ["Average Score", `${averageScore.toFixed(1)}/${weekendQuiz.points}`],
            ].map(([label, value]) => (
              <article
                key={label}
                className="rounded-lg border border-[#d4dbe0] bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-black uppercase tracking-[0.08em] text-[#8f6417]">
                  {label}
                </p>
                <p className="mt-2 text-3xl font-black text-[#14384c]">{value}</p>
              </article>
            ))}
          </section>

          <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-black text-[#14384c]">
                Student Attempts
              </h2>
              <button
                type="button"
                onClick={loadResponses}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#14384c] bg-white px-4 text-sm font-black text-[#14384c]"
              >
                {loadingResponses ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : null}
                Refresh
              </button>
            </div>

            <div className="mt-4 grid gap-5 xl:grid-cols-[420px_1fr]">
              <div className="grid h-fit gap-3 md:grid-cols-2 xl:grid-cols-1">
                {responses.map((response) => {
                  const active = selectedResponse?.id === response.id;

                  return (
                    <button
                      key={response.id}
                      type="button"
                      onClick={() => {
                        setSelectedResponseId(response.id);
                        setSelectedQuestionIndex(null);
                      }}
                      className={`rounded-lg border bg-white p-4 text-left shadow-sm transition ${
                        active
                          ? "border-[#277c86] shadow-[0_0_0_3px_rgba(39,124,134,0.16)]"
                          : "border-[#d4dbe0] hover:border-[#277c86]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-black leading-tight text-[#14384c]">
                            {response.name || "Unnamed student"}
                          </h3>
                          <p className="mt-1 text-sm font-semibold text-[#65727b]">
                            {response.email}
                          </p>
                        </div>
                        <ChevronRight
                          className={`h-5 w-5 flex-none ${
                            active ? "text-[#277c86]" : "text-[#9aa5aa]"
                          }`}
                        />
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-md bg-[#e9f2f3] px-2 py-2">
                          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#65727b]">
                            Score
                          </p>
                          <p className="text-sm font-black text-[#14384c]">
                            {response.score || 0}/{response.totalPoints || weekendQuiz.points}
                          </p>
                        </div>
                        <div className="rounded-md bg-[#e9f2f3] px-2 py-2">
                          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#65727b]">
                            Done
                          </p>
                          <p className="text-sm font-black text-[#14384c]">
                            {response.answeredCount || 0}/30
                          </p>
                        </div>
                        <div
                          className={`rounded-md px-2 py-2 ${
                            response.submitted
                              ? "bg-[#d8f1e2]"
                              : "bg-[#fff2d8]"
                          }`}
                        >
                          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#65727b]">
                            Status
                          </p>
                          <p className="text-sm font-black text-[#14384c]">
                            {response.submitted ? "Sent" : "Open"}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}

              {!responses.length ? (
                <div className="rounded-lg border border-dashed border-[#c5ced5] bg-white p-5 text-sm font-bold text-[#65727b]">
                  No quiz responses have been saved yet.
                </div>
              ) : null}

              </div>

              <article className="min-h-[640px] rounded-lg border border-[#d4dbe0] bg-white shadow-sm">
                {selectedResponse ? (
                  <div className="grid min-h-[640px] xl:grid-cols-[1fr_380px]">
                    <div className="p-5">
                      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <p className="text-sm font-black uppercase tracking-[0.08em] text-[#8f6417]">
                            Selected Attempt
                          </p>
                          <h3 className="mt-1 text-2xl font-black text-[#14384c]">
                            {selectedResponse.name || "Unnamed student"}
                          </h3>
                          <p className="mt-1 text-sm font-semibold text-[#65727b]">
                            {selectedResponse.email}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-[#65727b]">
                            Updated: {formatTimestamp(selectedResponse.updatedAt)}
                          </p>
                        </div>
                        <div className="rounded-md bg-[#e9f2f3] px-4 py-3 text-sm font-black text-[#174b54]">
                          {selectedResponse.score || 0}/
                          {selectedResponse.totalPoints || weekendQuiz.points} ·{" "}
                          {selectedResponse.submitted
                            ? "Submitted"
                            : "In progress"}
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.08em]">
                        <span className="inline-flex items-center gap-2 rounded-md bg-[#f0f8f2] px-3 py-2 text-[#17542d]">
                          <span className="h-3 w-3 rounded-sm bg-[#2f9e44]" />
                          Correct
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-md bg-[#fff7f7] px-3 py-2 text-[#8f1d1d]">
                          <span className="h-3 w-3 rounded-sm bg-[#d94848]" />
                          Wrong
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-md bg-[#edf0f2] px-3 py-2 text-[#65727b]">
                          <span className="h-3 w-3 rounded-sm bg-[#9aa5aa]" />
                          Not attempted
                        </span>
                      </div>

                      <div className="mt-5 grid grid-cols-5 gap-2 sm:grid-cols-10">
                        {weekendQuiz.questions.map((question, index) => {
                          const selected = selectedResponse.answers?.[question.id];
                          const attempted = typeof selected === "number";
                          const correct = selected === question.answerIndex;
                          const active = selectedQuestionIndex === index;

                          return (
                            <button
                              key={question.id}
                              type="button"
                              onClick={() => setSelectedQuestionIndex(index)}
                              className={`aspect-square rounded-md border text-sm font-black transition ${
                                !attempted
                                  ? "border-[#c5ced5] bg-[#edf0f2] text-[#65727b]"
                                  : correct
                                    ? "border-[#2f9e44] bg-[#d8f1e2] text-[#17542d]"
                                    : "border-[#d94848] bg-[#ffe3e3] text-[#8f1d1d]"
                              } ${
                                active
                                  ? "shadow-[0_0_0_3px_rgba(20,56,76,0.2)]"
                                  : ""
                              }`}
                            >
                              {index + 1}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-5 grid gap-3 rounded-lg border border-[#d4dbe0] bg-[#fbfaf7] p-4 md:grid-cols-3">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#65727b]">
                            Correct
                          </p>
                          <p className="mt-1 text-2xl font-black text-[#17542d]">
                            {selectedResponse.score || 0}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#65727b]">
                            Wrong
                          </p>
                          <p className="mt-1 text-2xl font-black text-[#8f1d1d]">
                            {Math.max(
                              (selectedResponse.answeredCount || 0) -
                                (selectedResponse.score || 0),
                              0,
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#65727b]">
                            Not attempted
                          </p>
                          <p className="mt-1 text-2xl font-black text-[#65727b]">
                            {weekendQuiz.questions.length -
                              (selectedResponse.answeredCount || 0)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <aside className="border-t border-[#d4dbe0] bg-[#fbfaf7] p-5 xl:border-l xl:border-t-0">
                      {selectedQuestionIndex === null ? (
                        <div className="grid h-full place-items-center rounded-lg border border-dashed border-[#c5ced5] bg-white p-5 text-center">
                          <div>
                            <p className="text-lg font-black text-[#14384c]">
                              Click a question square
                            </p>
                            <p className="mt-2 text-sm leading-6 text-[#65727b]">
                              The question detail drawer will show the prompt,
                              student answer, correct answer, and explanation.
                            </p>
                          </div>
                        </div>
                      ) : (
                        (() => {
                          const question = weekendQuiz.questions[selectedQuestionIndex];
                          const selected =
                            selectedResponse.answers?.[question.id];
                          const attempted = typeof selected === "number";
                          const correct = selected === question.answerIndex;

                          return (
                            <div className="quiz-panel-enter rounded-lg border border-[#d4dbe0] bg-white p-4">
                              <div className="flex items-center justify-between gap-3">
                                <p className="text-sm font-black uppercase tracking-[0.08em] text-[#8f6417]">
                                  Question {selectedQuestionIndex + 1}
                                </p>
                                <button
                                  type="button"
                                  onClick={() => setSelectedQuestionIndex(null)}
                                  className="rounded-md border border-[#c5ced5] px-2 py-1 text-xs font-black text-[#65727b]"
                                >
                                  Close
                                </button>
                              </div>
                              <h4 className="mt-3 text-lg font-black leading-6 text-[#14384c]">
                                {question.prompt}
                              </h4>
                              <div className="mt-4 grid gap-3">
                                <div
                                  className={`rounded-md border p-3 ${
                                    !attempted
                                      ? "border-[#c5ced5] bg-[#edf0f2]"
                                      : correct
                                        ? "border-[#b8dec4] bg-[#f0f8f2]"
                                        : "border-[#ecc6c6] bg-[#fff7f7]"
                                  }`}
                                >
                                  <p className="text-xs font-black uppercase tracking-[0.08em] text-[#65727b]">
                                    Student answer
                                  </p>
                                  <p className="mt-1 text-sm font-bold leading-5 text-[#14384c]">
                                    {attempted
                                      ? `${optionLetter(selected)}. ${question.options[selected]}`
                                      : "No answer selected"}
                                  </p>
                                </div>
                                <div className="rounded-md border border-[#b8dec4] bg-[#f0f8f2] p-3">
                                  <p className="text-xs font-black uppercase tracking-[0.08em] text-[#65727b]">
                                    Correct answer
                                  </p>
                                  <p className="mt-1 text-sm font-bold leading-5 text-[#17542d]">
                                    {optionLetter(question.answerIndex)}.{" "}
                                    {question.options[question.answerIndex]}
                                  </p>
                                </div>
                                <div className="rounded-md border border-[#d4dbe0] bg-[#fbfaf7] p-3">
                                  <p className="text-xs font-black uppercase tracking-[0.08em] text-[#65727b]">
                                    Explanation
                                  </p>
                                  <p className="mt-1 text-sm font-semibold leading-5 text-[#53616b]">
                                    {question.explanation}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })()
                      )}
                    </aside>
                  </div>
                ) : (
                  <div className="grid min-h-[360px] place-items-center p-5 text-sm font-bold text-[#65727b]">
                    Select a student attempt to inspect.
                  </div>
                )}
              </article>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
            <h2 className="text-2xl font-black text-[#14384c]">Answer Key</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {weekendQuiz.questions.map((question, index) => (
                <article
                  key={question.id}
                  className="rounded-lg border border-[#d4dbe0] bg-white p-4 shadow-sm"
                >
                  <p className="text-sm font-black text-[#14384c]">
                    {index + 1}. {optionLetter(question.answerIndex)}.{" "}
                    {question.options[question.answerIndex]}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-[#53616b]">
                    {question.explanation}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </>
      ) : null}
    </main>
  );
}
