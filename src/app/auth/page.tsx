"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, KeyRound, Mail, Sparkles } from "lucide-react";
import { AuthGate } from "@/components/AuthGate";
import { useAuth } from "@/components/AuthProvider";

function AuthPageContent() {
  const router = useRouter();
  const {
    user,
    signInWithGoogle,
    signInWithEmail,
    createEmailAccount,
    resetPassword,
  } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [router, user]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setNotice("");
    try {
      if (mode === "signup") {
        await createEmailAccount(name, email, password);
      } else {
        await signInWithEmail(email, password);
      }
      router.replace("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed.");
    } finally {
      setBusy(false);
    }
  }

  async function google() {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      await signInWithGoogle();
      router.replace("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google sign-in failed.");
    } finally {
      setBusy(false);
    }
  }

  async function forgotPassword() {
    if (!email.trim()) {
      setError("Enter your email before requesting a reset.");
      return;
    }
    setBusy(true);
    setError("");
    setNotice("");
    try {
      await resetPassword(email);
      setNotice("Password reset email sent.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Password reset failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f4f1e8]">
      <div className="mx-auto grid min-h-screen max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_440px] lg:items-center">
        <section className="rounded-md border border-[#d8d2bf] bg-[#1e4b3a] p-6 text-white lg:p-8">
          <div className="inline-flex items-center gap-2 rounded bg-[#f0c766] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#17211c]">
            <Sparkles className="h-4 w-4" />
            UB Summer Program 2026
          </div>
          <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight sm:text-6xl">
            Build tools your local community can actually use.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#d8ebe2]">
            Sign in to access the Grand Rapids research workspace, team project
            builder, lecture flow, homework submissions, and community impact
            portfolio.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Research", "Design", "Build"].map((item) => (
              <div key={item} className="rounded-md bg-white/10 p-4">
                <p className="text-lg font-black">{item}</p>
                <p className="mt-1 text-xs text-[#d8ebe2]">
                  AI-powered student workflow
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-md border border-[#d8d2bf] bg-white p-5 shadow-sm">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a5a19]">
              Secure portal
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#17211c]">
              {mode === "signin" ? "Sign in" : "Create account"}
            </h2>
          </div>

          <button
            onClick={google}
            disabled={busy}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-md border border-[#d8d2bf] bg-[#fbf8ef] px-4 py-3 text-sm font-black transition hover:bg-[#f4f1e8] disabled:opacity-60"
          >
            <Sparkles className="h-4 w-4 text-[#1e4b3a]" />
            Continue with Google
          </button>

          <form onSubmit={submit} className="mt-4 space-y-3">
            {mode === "signup" && (
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Student name"
                className="w-full rounded-md border border-[#d8d2bf] px-3 py-3 text-sm outline-none focus:border-[#1e4b3a]"
              />
            )}
            <label className="flex items-center gap-2 rounded-md border border-[#d8d2bf] px-3 py-3 focus-within:border-[#1e4b3a]">
              <Mail className="h-4 w-4 text-[#8a5a19]" />
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-sm outline-none"
                required
              />
            </label>
            <label className="flex items-center gap-2 rounded-md border border-[#d8d2bf] px-3 py-3 focus-within:border-[#1e4b3a]">
              <KeyRound className="h-4 w-4 text-[#8a5a19]" />
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-transparent text-sm outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="text-[#66746b]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </label>
            <button
              disabled={busy}
              className="w-full rounded-md bg-[#1e4b3a] px-4 py-3 text-sm font-black text-white transition hover:bg-[#2d6b55] disabled:opacity-60"
            >
              {mode === "signin" ? "Sign in with email" : "Create account"}
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
            <button
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="font-bold text-[#1e4b3a]"
            >
              {mode === "signin" ? "Need an account?" : "Already have one?"}
            </button>
            <button onClick={forgotPassword} className="font-bold text-[#8a5a19]">
              Reset password
            </button>
          </div>

          {error && (
            <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">
              {error}
            </div>
          )}
          {notice && (
            <div className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm font-semibold text-emerald-800">
              {notice}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default function AuthPage() {
  return (
    <AuthGate>
      <AuthPageContent />
    </AuthGate>
  );
}
