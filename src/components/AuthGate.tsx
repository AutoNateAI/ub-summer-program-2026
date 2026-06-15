"use client";

import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AuthProvider, useAuth } from "@/components/AuthProvider";

function Guard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const isAuthPage = pathname === "/auth" || pathname === "/auth/";

  useEffect(() => {
    if (!loading && !user && !isAuthPage) {
      router.replace("/auth/");
      const fallback = window.setTimeout(() => {
        if (window.location.pathname !== "/auth/") {
          window.location.replace("/auth/");
        }
      }, 500);

      return () => window.clearTimeout(fallback);
    }
  }, [isAuthPage, loading, router, user]);

  if ((loading || !user) && !isAuthPage) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f4f1e8] px-4">
        <div className="rounded-md border border-[#d8d2bf] bg-white px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#1e4b3a] shadow-sm">
          Verifying access
        </div>
      </main>
    );
  }

  return children;
}

export function AuthGate({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Guard>{children}</Guard>
    </AuthProvider>
  );
}
