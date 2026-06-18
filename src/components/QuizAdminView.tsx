"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
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
                Student Responses
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

            <div className="mt-4 grid gap-4">
              {responses.map((response) => (
                <article
                  key={response.id}
                  className="rounded-lg border border-[#d4dbe0] bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="text-xl font-black text-[#14384c]">
                        {response.name || "Unnamed student"}
                      </h3>
                      <p className="text-sm font-semibold text-[#65727b]">
                        {response.email}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#65727b]">
                        Updated: {formatTimestamp(response.updatedAt)}
                      </p>
                    </div>
                    <div className="rounded-md bg-[#e9f2f3] px-4 py-3 text-sm font-black text-[#174b54]">
                      {response.score || 0}/{response.totalPoints || weekendQuiz.points} ·{" "}
                      {response.answeredCount || 0}/30 answered ·{" "}
                      {response.submitted ? "Submitted" : "In progress"}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2">
                    {weekendQuiz.questions.map((question, index) => {
                      const selected = response.answers?.[question.id];
                      const correct = selected === question.answerIndex;

                      return (
                        <div
                          key={question.id}
                          className={`rounded-md border p-3 text-sm ${
                            correct
                              ? "border-[#b8dec4] bg-[#f0f8f2]"
                              : "border-[#ecc6c6] bg-[#fff7f7]"
                          }`}
                        >
                          <p className="font-black text-[#14384c]">
                            {index + 1}. {question.prompt}
                          </p>
                          <p className="mt-1 font-semibold text-[#53616b]">
                            Student:{" "}
                            {typeof selected === "number"
                              ? `${optionLetter(selected)}. ${question.options[selected]}`
                              : "No answer"}
                          </p>
                          <p className="mt-1 font-semibold text-[#17542d]">
                            Correct: {optionLetter(question.answerIndex)}.{" "}
                            {question.options[question.answerIndex]}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}

              {!responses.length ? (
                <div className="rounded-lg border border-dashed border-[#c5ced5] bg-white p-5 text-sm font-bold text-[#65727b]">
                  No quiz responses have been saved yet.
                </div>
              ) : null}
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
