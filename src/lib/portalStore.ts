"use client";

import { User } from "firebase/auth";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";

export type StudentProfile = {
  uid: string;
  displayName: string;
  email: string;
  cohort: string;
  role: string;
  updatedAt?: Timestamp;
};

export type ProgramIdea = {
  id: string;
  problem: string;
  audience: string;
  partner: string;
  createdAt?: Timestamp;
};

export type HomeworkSubmission = {
  id: string;
  title: string;
  body: string;
  createdAt?: Timestamp;
};

const cohortId = "ub-summer-2026";

export async function ensureUserProfile(user: User, displayName?: string) {
  const profileRef = doc(db, "cohorts", cohortId, "students", user.uid);
  await setDoc(
    profileRef,
    {
      uid: user.uid,
      displayName: displayName || user.displayName || user.email || "Student",
      email: user.email || "",
      cohort: cohortId,
      role: "student",
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export function usePortalWorkspace(user: User | null) {
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [ideas, setIdeas] = useState<ProgramIdea[]>([]);
  const [homework, setHomework] = useState<HomeworkSubmission[]>([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    const profileRef = doc(db, "cohorts", cohortId, "students", user.uid);
    const ideasQuery = query(
      collection(db, "cohorts", cohortId, "students", user.uid, "programIdeas"),
      orderBy("createdAt", "desc"),
    );
    const homeworkQuery = query(
      collection(db, "cohorts", cohortId, "students", user.uid, "homework"),
      orderBy("createdAt", "desc"),
    );

    const unsubscribeProfile = onSnapshot(profileRef, (snapshot) => {
      setProfile(snapshot.exists() ? (snapshot.data() as StudentProfile) : null);
    });
    const unsubscribeIdeas = onSnapshot(ideasQuery, (snapshot) => {
      setIdeas(
        snapshot.docs.map((item) => ({
          id: item.id,
          ...(item.data() as Omit<ProgramIdea, "id">),
        })),
      );
    });
    const unsubscribeHomework = onSnapshot(homeworkQuery, (snapshot) => {
      setHomework(
        snapshot.docs.map((item) => ({
          id: item.id,
          ...(item.data() as Omit<HomeworkSubmission, "id">),
        })),
      );
    });

    return () => {
      unsubscribeProfile();
      unsubscribeIdeas();
      unsubscribeHomework();
    };
  }, [user]);

  if (!user) {
    return { profile: null, ideas: [], homework: [] };
  }

  return { profile, ideas, homework };
}

export async function addProgramIdea(
  user: User,
  idea: Pick<ProgramIdea, "problem" | "audience" | "partner">,
) {
  await addDoc(
    collection(db, "cohorts", cohortId, "students", user.uid, "programIdeas"),
    {
      problem: idea.problem.trim(),
      audience: idea.audience.trim(),
      partner: idea.partner.trim(),
      createdAt: serverTimestamp(),
    },
  );
}

export async function addHomeworkSubmission(
  user: User,
  submission: Pick<HomeworkSubmission, "title" | "body">,
) {
  await addDoc(collection(db, "cohorts", cohortId, "students", user.uid, "homework"), {
    title: submission.title,
    body: submission.body.trim(),
    createdAt: serverTimestamp(),
  });
}
