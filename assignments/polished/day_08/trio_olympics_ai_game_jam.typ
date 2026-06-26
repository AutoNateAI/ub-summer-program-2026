#import "theme.typ": *

#setup(
  title: "TRIO Olympics AI Game Jam",
  subtitle: "Build a Zelda-like browser game with ChatGPT, Gemini, Replit, and digital Legos",
  kind: "Competition Guide",
)[

#title-card("TRIO Olympics AI Game Jam", subtitle: "Build a Zelda-like browser game with ChatGPT, Gemini, Replit, and digital Legos", label: "Day 8 · TRIO Olympics")

= The Challenge

Today is TRIO Olympics.

Your team will build a Zelda-like browser game about a TRIO Upward Bound student entering the Future Realm.

The player explores a world, collects resources, defeats obstacles, levels up, and moves closer to college, career, and personal success.

#quote-card[The goal is not to write the most code. The goal is to direct your AI tools like a fast software studio.]

You will use:

- ChatGPT or Google Gemini to think, research, design, and create prompts
- Replit AI to build, debug, improve, and publish the game
- HTML, CSS, and JavaScript as the basic web pieces
- Phaser.js, Three.js, or p5.js as optional add-on pieces

Prompt repo:

#quote-card[`https://ub.autonateai.com/trio-olympics/`]

= Official Run Of Show

#pro-table((0.75fr, 1.6fr, 1fr), (
  [#text(fill: white)[Time]], [#text(fill: white)[Activity]], [#text(fill: white)[Location]],
  [9:00 AM], [Breakfast], [Kleiner / DISH],
  [9:45 AM], [Travel to Kirkhof], [Kirkhof],
  [10:00 AM], [Welcome, admissions presentation, SSS intro, and review of the day], [Kirkhof],
  [10:25 AM], [Shift to first round of games], [Game rooms],
  [10:30 AM], [First round of games], [Assigned locations],
  [11:35 AM], [Shift to second round of games], [Game rooms],
  [11:45 AM], [Second round of games], [Assigned locations],
  [12:50 PM], [Shift to lunch], [Kleiner / DISH],
  [1:00 PM], [Lunch], [Kleiner / DISH],
  [2:00 PM], [Shift to third round of games], [Game rooms],
  [2:10 PM], [Third round of games], [Assigned locations],
  [3:15 PM], [Travel to closing ceremonies], [KC 2250],
  [3:30 PM], [Closing ceremonies and group photo], [KC 2250],
))

#callout("Medal scoring")[
  Each activity has 1 gold, 1 silver, and 1 bronze. Whichever program has the most gold medals at the end wins the trophy.
]

= Event Locations

#pro-table((1fr, 1.4fr), (
  [#text(fill: white)[Location]], [#text(fill: white)[Event]],
  [Room 2204], [Paper Airplane Competition],
  [Room 2215 / 2216], [Scattegories],
  [Room 2263], [Spelling Bee],
  [Room 2266], [Math Jeopardy],
  [Room 2270], [Math Jeopardy],
  [Room 1142], [AI Hackathon],
  [Library North Lawn], [Corn Hole Tournament],
  [Library North Lawn], [Precision Games],
  [KC East Lawn], [Physical Fitness Challenges],
  [Kleiner], [Hoop Skills],
))

#callout("Materials")[
  Writing pens, paper/card stock, markers, tape, scissors for airplanes, and whiteboard markers.
]

= Game Theme

Theme: `TRIO: Path to the Future`

Your game must be action-oriented and replayable.

Required world:

#compact-flow("Core Loop", (
  ("Explore", "Find Challenges", "Collect Resources"),
  ("Defeat Obstacles", "Unlock Ability", "Harder World"),
  ("Play Again", "Improve Score", "Level Up"),
))

Required concept:

#pro-table((1fr, 1.6fr), (
  [#text(fill: white)[Game Element]], [#text(fill: white)[TRIO Meaning]],
  [Hero], [A TRIO scholar moving toward their future.],
  [World], [The Future Realm: school, college, career, community, and life challenges.],
  [Big Bads], [Procrastination, Self-Doubt, Distraction, Financial Stress, Burnout, Fear of Failure.],
  [Power-Ups], [Knowledge, Mentors, Scholarships, Confidence, Study Skills, Leadership, Community.],
  [Boss], [One major obstacle that blocks the next level.],
  [Win], [The player levels up, reaches the goal, or defeats the boss.],
))

= Digital Legos

Think of web games like digital Lego builds.

#pro-table((1fr, 1.7fr), (
  [#text(fill: white)[Piece]], [#text(fill: white)[What It Does]],
  [HTML], [The structure: canvas, buttons, score area, game screen.],
  [CSS], [The look: colors, layout, animations, mobile sizing.],
  [JavaScript], [The behavior: movement, collision, score, enemies, win/lose logic.],
  [Canvas], [The drawing surface for 2D games.],
  [Phaser.js], [A 2D game engine add-on for platformers, top-down games, shooters, and RPG-style games.],
  [Three.js], [A 3D graphics add-on for worlds, flying games, space, and 3D exploration.],
  [p5.js], [A creative coding add-on for visuals, particles, physics, and generative effects.],
))

Start simple. Add one library only if it helps the game.

= Timebox

This is designed for 45 minutes. If class gives us closer to an hour, use extra time for testing and polish.

#pro-table((1fr, 1.3fr), (
  [#text(fill: white)[Time]], [#text(fill: white)[Move]],
  [5 min], [Use ChatGPT or Gemini to brainstorm and research TRIO game ideas.],
  [5 min], [Design the gameplay loop, enemies, boss, power-ups, and win/lose conditions.],
  [5 min], [Create the AI handoff: a clear specification for Replit.],
  [25 min], [Build in Replit AI. Test constantly.],
  [5 min], [Polish: effects, sounds, screen shake, instructions, restart, and publish.],
))

= Prompt Workflow

Do not go straight to Replit with a messy idea.

Use the tools in order:

#compact-flow("AI Software Studio", (
  ("ChatGPT / Gemini", "Game Design", "AI Handoff"),
  ("Replit AI", "Build Game", "Debug"),
  ("Playtest", "Polish", "Publish"),
))

You can copy prompts from:

#quote-card[`https://ub.autonateai.com/trio-olympics/`]

You may edit every prompt. Ask ChatGPT or Gemini questions before sending the handoff to Replit.

= Starter Prompts

#prompt("ChatGPT / Gemini: Idea Sprint")[
"I am participating in a 45-minute TRIO Olympics AI Game Jam. The theme is \"TRIO: Path to the Future.\" Every team is building a Zelda-like browser game where a TRIO scholar explores a world, collects resources, defeats obstacles, and levels up toward college, career, and personal success. Give me 3 simple game concepts that are fun, replayable, and realistic to build quickly with HTML, CSS, JavaScript, and Replit AI."
]

#prompt("ChatGPT / Gemini: AI Handoff")[
"You are my game design director. Write a complete handoff specification for Replit AI to build my browser game. Format it clearly with sections for title, story, gameplay loop, player controls, enemies, boss, power-ups, map, UI, visual style, sound effects, scoring, win/lose screens, required files, MVP features, and stretch goals. The game should be Zelda-like, fast to build, and connected to TRIO Upward Bound."
]

#prompt("Replit AI: Core Build")[
"Build this as a complete browser game using HTML, CSS, and JavaScript. Make it Zelda-like with a top-down player, tile-style world, collectibles, enemies, one boss, score, health, increasing difficulty, restart button, win screen, game-over screen, keyboard controls, simple mobile controls, sound effects, particle effects, and polished UI. Keep the code clean and organized. Use only files that will run in Replit."
]

#prompt("Replit AI: Polish")[
"Make this game feel more satisfying to play. Add game juice: screen shake, hit flashes, sound effects, collectible sparkle, enemy defeat particles, score popups, smoother movement, better button styling, clearer instructions, and a more exciting win/lose screen. Do not break the existing gameplay."
]

= Challenge Cards

If your core game works, add one twist.

#pro-table((1fr, 1fr), (
  [#text(fill: white)[Card]], [#text(fill: white)[Card]],
  [Boss Battle], [NPC Mentor],
  [Hidden Scholarship Treasure], [Leaderboard],
  [Weather Effect], [Day/Night Cycle],
  [Shop Or Upgrade System], [Random Event],
  [Mini-Map], [Combo System],
  [Secret Area], [Speedrun Timer],
))

= Rules

#checklist((
  "Your game must be Zelda-like: top-down exploration, challenges, resources, and a boss or final objective.",
  "Your game must connect to TRIO Upward Bound and the journey toward the future.",
  "You may use ChatGPT, Gemini, Replit AI, or another AI for thinking and building.",
  "ChatGPT/Gemini should help you plan before Replit builds.",
  "Replit should build, debug, polish, and publish the game.",
  "The game must be playable by another student.",
  "The game must have a title, instructions, score or progress, and a restart option.",
  "Your team must be ready to explain what the player learns or feels.",
))

= Judging

#pro-table((1fr, 0.5fr, 1.8fr), (
  [#text(fill: white)[Category]], [#text(fill: white)[Points]], [#text(fill: white)[What Judges Look For]],
  [Fun & Replayability], [30], [The game is enjoyable, quick to understand, and worth replaying.],
  [Creativity], [20], [The team has an original take on the Future Realm, enemies, power-ups, or mechanics.],
  [TRIO Theme], [20], [The game clearly connects to confidence, college readiness, leadership, resilience, mentorship, or overcoming obstacles.],
  [Polish], [15], [The game has feedback, instructions, visual clarity, sound, effects, and a finished feel.],
  [Technical Execution], [10], [The game runs, controls work, and major bugs do not block gameplay.],
  [Presentation], [5], [The team explains the idea, controls, theme connection, and what they would add next.],
))

Total: 100 points.

= Arcade Playtest

When games are published, the room becomes an arcade.

Each team should have:

- Game title
- One-sentence pitch
- Replit link or QR code
- Controls
- What to judge

Players rotate, play, score, and move to the next station.

#quote-card[Think like a game designer. Prompt like a creative director. Build like a software studio.]

]
