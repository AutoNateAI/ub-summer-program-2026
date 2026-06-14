# UB Summer Program 2026

Next.js portal for the 2026 Upward Bound Community Innovation Studio.

Students sign in with Firebase Auth, then use a protected workspace for:

- Grand Rapids community research
- team program ideas
- homework submissions
- project and outreach prompts
- community impact planning

## Local Development

```bash
npm install
npm run dev
```

## Firebase

The app uses the same Firebase project pattern as the sibling Opportunities portal:

- project: `autonateai-learning-hub`
- client SDK: `src/lib/firebase.ts`
- Firestore workspace helpers: `src/lib/portalStore.ts`
- rules: `firestore.rules`

Enable Email/Password and Google sign-in in Firebase Auth for the project before
students use the portal.

## Deployment

Pushing to `main` runs `.github/workflows/pages.yml`, builds the static Next.js
export, and deploys `out/` to the `gh-pages` branch.

The GitHub Pages custom domain is set through `public/CNAME`:

```text
ub.autonateai.com
```
