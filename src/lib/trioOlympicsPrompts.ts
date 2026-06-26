export type TrioPrompt = {
  id: string;
  title: string;
  tool: "ChatGPT / Gemini" | "Replit AI" | "Either";
  stage: string;
  detail: string;
  prompt: string;
};

export const trioOlympicsPrompts: TrioPrompt[] = [
  {
    id: "idea-sprint",
    title: "Idea Sprint",
    tool: "ChatGPT / Gemini",
    stage: "Plan",
    detail: "Use this first to quickly turn the TRIO theme into game ideas.",
    prompt:
      "I am participating in a 45-minute TRIO Olympics AI Game Jam. The theme is \"TRIO: Path to the Future.\" Every team is building a Zelda-like browser game where a TRIO scholar explores a world, collects resources, defeats obstacles, and levels up toward college, career, and personal success. Give me 3 simple game concepts that are fun, replayable, and realistic to build quickly with HTML, CSS, JavaScript, and Replit AI.",
  },
  {
    id: "research-to-game",
    title: "Mission Research",
    tool: "ChatGPT / Gemini",
    stage: "Research",
    detail: "Use this to connect the game to real TRIO goals.",
    prompt:
      "Help me research the TRIO Upward Bound mission and turn it into game ideas. Focus on college readiness, confidence, study skills, leadership, mentoring, financial preparation, and overcoming obstacles. Give me a list of challenges, power-ups, bosses, and quests that would make sense in a Zelda-like game called \"TRIO: Path to the Future.\" Keep the ideas student-friendly and action-packed.",
  },
  {
    id: "game-loop",
    title: "Game Loop Designer",
    tool: "ChatGPT / Gemini",
    stage: "Design",
    detail: "Use this to decide what happens over and over in the game.",
    prompt:
      "Design a simple addictive game loop for my Zelda-like TRIO game. Include: player objective, map layout, controls, enemies, one boss, power-ups, scoring, health, win condition, lose condition, difficulty progression, and replayability. Keep it simple enough for Replit AI to build in about 30 minutes.",
  },
  {
    id: "ai-handoff",
    title: "AI Handoff Spec",
    tool: "ChatGPT / Gemini",
    stage: "Handoff",
    detail: "Use this before Replit so your builder prompt is clear.",
    prompt:
      "You are my game design director. Write a complete handoff specification for Replit AI to build my browser game. Format it clearly with sections for title, story, gameplay loop, player controls, enemies, boss, power-ups, map, UI, visual style, sound effects, scoring, win/lose screens, required files, MVP features, and stretch goals. The game should be Zelda-like, fast to build, and connected to TRIO Upward Bound.",
  },
  {
    id: "replit-core-build",
    title: "Core Replit Build",
    tool: "Replit AI",
    stage: "Build",
    detail: "Paste your AI handoff above this in Replit.",
    prompt:
      "Build this as a complete browser game using HTML, CSS, and JavaScript. Make it Zelda-like with a top-down player, tile-style world, collectibles, enemies, one boss, score, health, increasing difficulty, restart button, win screen, game-over screen, keyboard controls, simple mobile controls, sound effects, particle effects, and polished UI. Keep the code clean and organized. Use only files that will run in Replit.",
  },
  {
    id: "zelda-starter",
    title: "Zelda-Like Starter",
    tool: "Replit AI",
    stage: "Build",
    detail: "Use this if you need a fast default game.",
    prompt:
      "Create a Zelda-like top-down browser game called \"TRIO: Path to the Future.\" The player is a TRIO scholar exploring the Future Realm. They collect Knowledge, Mentors, Scholarships, Confidence, Study Skills, and Leadership. Enemies are Procrastination, Self-Doubt, Distraction, Financial Stress, and Fear of Failure. Add a boss named Burnout. The player wins by collecting enough power-ups and defeating Burnout. Add score, health, increasing difficulty, simple map obstacles, particles, sounds, restart, and a polished game-over screen.",
  },
  {
    id: "digital-legos",
    title: "Digital Lego Explainer",
    tool: "ChatGPT / Gemini",
    stage: "Learn",
    detail: "Use this to understand the web pieces before building.",
    prompt:
      "Explain HTML, CSS, JavaScript, Canvas, Phaser.js, Three.js, and p5.js like digital Lego pieces for a beginner. Tell me which pieces are the basic web blocks and which are optional add-ons. Then recommend which pieces I should use for a simple Zelda-like TRIO game in Replit.",
  },
  {
    id: "phaser-addon",
    title: "Phaser Add-On",
    tool: "Replit AI",
    stage: "Library",
    detail: "Use Phaser for a stronger 2D game structure.",
    prompt:
      "Upgrade this game to use Phaser.js if it makes the code cleaner. Keep the same TRIO Zelda-like concept. Add a top-down player, collisions, collectibles, enemies, boss, score, health, restart, and a polished scene flow. Explain what Phaser is doing in the code.",
  },
  {
    id: "three-addon",
    title: "Three.js Add-On",
    tool: "Replit AI",
    stage: "Library",
    detail: "Use Three.js for a 3D exploration twist.",
    prompt:
      "Create a simple Three.js version or bonus scene for this TRIO game. Make a small 3D Future Realm where the player collects glowing power-ups and avoids obstacle enemies. Keep controls simple and performance smooth. Explain how Three.js is being used as an add-on library.",
  },
  {
    id: "p5-addon",
    title: "p5.js Effects Add-On",
    tool: "Replit AI",
    stage: "Library",
    detail: "Use p5.js for creative visuals, particles, or motion.",
    prompt:
      "Use p5.js to add creative visual effects to this TRIO game. Add particle bursts when collecting power-ups, simple animated backgrounds, and satisfying feedback when the player defeats an obstacle. Keep the core game simple and playable.",
  },
  {
    id: "juice-polish",
    title: "Make It Feel Better",
    tool: "Replit AI",
    stage: "Polish",
    detail: "Use after the first playable version exists.",
    prompt:
      "Make this game feel more satisfying to play. Add game juice: screen shake, hit flashes, sound effects, collectible sparkle, enemy defeat particles, score popups, smoother movement, better button styling, clearer instructions, and a more exciting win/lose screen. Do not break the existing gameplay.",
  },
  {
    id: "debug-loop",
    title: "Debug Fast",
    tool: "Replit AI",
    stage: "Fix",
    detail: "Use when something breaks.",
    prompt:
      "The game has a bug. Inspect the code, explain what is likely wrong in simple language, then fix it. Keep the current features. After fixing, give me a quick test checklist so I know what to click or play to confirm it works.",
  },
  {
    id: "challenge-card",
    title: "Challenge Card",
    tool: "Either",
    stage: "Twist",
    detail: "Use this to add one surprise mechanic.",
    prompt:
      "Give my TRIO Zelda-like game one challenge-card feature. Choose one: boss battle, NPC mentor, hidden scholarship treasure, leaderboard, weather effect, day/night cycle, shop, upgrade system, random event, mini-map, combo system, or secret area. Explain the simplest version and then write a Replit-ready prompt to add it.",
  },
  {
    id: "presentation",
    title: "Arcade Pitch",
    tool: "ChatGPT / Gemini",
    stage: "Present",
    detail: "Use this before playtesting and judging.",
    prompt:
      "Help us write a 30-second arcade pitch for our TRIO Olympics game. Include the game title, what challenge it represents, how to play, what power-ups mean, what the player learns, and what we would add with more time. Keep it energetic and easy to say out loud.",
  },
];

export const trioOlympicsChallengeCards = [
  "Boss Battle",
  "NPC Mentor",
  "Hidden Scholarship Treasure",
  "Leaderboard",
  "Weather Effect",
  "Day/Night Cycle",
  "Shop Or Upgrade System",
  "Random Event",
  "Mini-Map",
  "Combo System",
  "Secret Area",
  "Speedrun Timer",
];
