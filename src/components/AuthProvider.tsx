"use client";

import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { auth } from "@/lib/firebase";
import { ensureUserProfile } from "@/lib/portalStore";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  createEmailAccount: (
    name: string,
    email: string,
    password: string,
  ) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signOutUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 2500);
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      window.clearTimeout(timeout);
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        try {
          await ensureUserProfile(currentUser);
        } catch (error) {
          console.error("Unable to sync student profile", error);
        }
      }
    });

    return () => {
      window.clearTimeout(timeout);
      unsubscribe();
    };
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      async signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        const result = await signInWithPopup(auth, provider);
        await ensureUserProfile(result.user);
      },
      async signInWithEmail(email, password) {
        const result = await signInWithEmailAndPassword(
          auth,
          email.trim(),
          password,
        );
        await ensureUserProfile(result.user);
      },
      async createEmailAccount(name, email, password) {
        const result = await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password,
        );
        if (name.trim()) {
          await updateProfile(result.user, { displayName: name.trim() });
        }
        await ensureUserProfile(result.user, name.trim());
      },
      resetPassword(email) {
        return sendPasswordResetEmail(auth, email.trim());
      },
      signOutUser() {
        return signOut(auth);
      },
    }),
    [loading, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
