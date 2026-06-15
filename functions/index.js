import admin from "firebase-admin";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { onRequest } from "firebase-functions/v2/https";

admin.initializeApp();

export const ubPortalHealth = onRequest(
  {
    region: "us-central1",
    cors: [/^https:\/\/ub\.autonateai\.com$/, /^http:\/\/localhost:\d+$/],
    maxInstances: 5,
  },
  (_request, response) => {
    response.json({
      ok: true,
      service: "ub-portal",
      cohort: "ub-summer-2026",
      timestamp: new Date().toISOString(),
    });
  },
);

export const onUbHomeworkSubmitted = onDocumentCreated(
  {
    document: "cohorts/{cohortId}/students/{studentId}/homework/{submissionId}",
    region: "us-central1",
    maxInstances: 10,
  },
  async (event) => {
    const { cohortId, studentId } = event.params;
    const statsRef = admin
      .firestore()
      .doc(`cohorts/${cohortId}/students/${studentId}/stats/homework`);

    await statsRef.set(
      {
        submissionCount: admin.firestore.FieldValue.increment(1),
        lastSubmissionAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedBy: "onUbHomeworkSubmitted",
      },
      { merge: true },
    );
  },
);
