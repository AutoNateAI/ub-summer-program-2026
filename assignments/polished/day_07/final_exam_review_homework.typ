#import "theme.typ": *

#setup(
  title: "Final Exam Review Homework",
  subtitle: "Tonight, think through the full path from city budget to published app",
  kind: "Homework",
)[

#title-card("Final Exam Review Homework", subtitle: "Tonight, think through the full path from city budget to published app", label: "Day 6 · Homework")

= What The Exam Is Really Testing

The final exam is not asking you to memorize tool names.

It is asking whether you can place yourself inside a real build situation and choose the strongest next move.

#quote-card[Can you move from local opportunity research to a credible software-supported program offer?]

The full story:

#compact-flow("Course Arc", (
  ("City Budget", "Department Priority", "Program Research"),
  ("Chamber Partners", "Win-Win-Win Program", "Software Offer"),
  ("Stitch Design", "Base44 App", "Published Link"),
  ("Screenshots", "ChatGPT Refinement", "Opportunity Proposal"),
))

When you review, do not only ask, "What does this word mean?"

Ask:

- What would I do next if my team was stuck here?
- Which tool fits this step?
- What evidence would make this more credible?
- What prompt would give the AI better context?
- What would make a department, funder, or partner care?

= Research Workflow 1: Demand

Demand means the problem is real enough that someone already cares.

Use your Google Doc and ChatGPT conversation to find evidence of demand.

#pro-table((1fr, 1.7fr), (
  [#text(fill: white)[Evidence]], [#text(fill: white)[What It Proves]],
  [Budget line], [The city is putting money toward a priority.],
  [Department name], [A specific team owns the problem area.],
  [Director/staff], [People are responsible for decisions and implementation.],
  [Existing program], [The city or organization has already tried to act.],
  [Pain point], [There is still a gap worth solving.],
  [Target audience], [The program has a real group of people to serve.],
))

#prompt("Review Prompt: Demand")[
"Using our Google Doc and ChatGPT research, explain the demand behind our program.

Answer:
1. What department or priority did we choose?
2. What budget or program evidence shows this matters?
3. What problem or pain point are we responding to?
4. Who is the target audience?
5. What would a city leader or funding person care about most?"
]

= Research Workflow 2: Supply

Supply means the people and organizations that can help deliver the solution.

The Chamber directory helped teams find businesses, nonprofits, venues, mentors, services, and collaborators.

Review each partner through ROI.

#pro-table((1fr, 1.7fr), (
  [#text(fill: white)[Partner Question]], [#text(fill: white)[Why It Matters]],
  [What do they contribute?], [Programs need real resources, not just names.],
  [Which activity do they support?], [Partners should connect to the actual flow.],
  [What value do they receive?], [Partnership works when everyone has a reason.],
  [What data proves their value?], [ROI needs evidence.],
  [What follow-up could happen?], [Good programs create future opportunity.],
))

#prompt("Review Prompt: Partner ROI")[
"Look at our partner list.

For each partner, explain:
- Their role in the program
- What activity they support
- What they give
- What they get back
- What data would prove their participation mattered
- How our app helps show their value"
]

= Research Workflow 3: Program Mechanics

A program is more than an idea.

It needs a sequence of activities that creates transformation.

#compact-flow("Transformation Flow", (
  ("Starting Problem", "Day 1 Discover", "Day 2 Practice"),
  ("Day 3 Showcase", "Final Evidence", "Impact Story"),
))

Ask whether each activity makes the participant do something useful.

#pro-table((1fr, 1.6fr), (
  [#text(fill: white)[Weak]], [#text(fill: white)[Stronger]],
  [Read only], [Answer an intake question or make a choice.],
  [Watch only], [Complete a challenge connected to the lesson.],
  [Reflect only], [Submit a saved reflection with progress tracking.],
  [Browse resources], [Choose a partner resource and explain why it helps.],
  [Finish], [Create a final plan, pitch, showcase, or artifact.],
))

#prompt("Review Prompt: Activity Flow")[
"Review our 3-day program.

For each day, explain:
1. What the participant learns
2. What they do
3. What they submit
4. Which partner helps
5. What data the app collects
6. How this day moves them toward the final transformation"
]

= Software And Publishing

The app is the system that makes the program easier to run, track, and pitch.

Base44 helped teams turn the program into a working app. Publishing gave teams a live link that can be shared.

#pro-table((1fr, 1.5fr), (
  [#text(fill: white)[App Part]], [#text(fill: white)[Purpose]],
  [Landing page], [Explains the program promise and why it matters.],
  [Participant dashboard], [Shows what the participant should do next.],
  [Activity pages], [Guide the 3-day transformation.],
  [Forms], [Collect submissions, reflections, and evidence.],
  [Partner page], [Shows partner roles, resources, and ROI.],
  [Organizer dashboard], [Shows progress, blockers, submissions, and impact.],
  [Final showcase], [Proves what participants created or learned.],
))

#callout("Base44 hosting")[
  A `.base44.app` link means Base44 is hosting the app. The subdomain should be short and connected to the program. A fully custom domain is outside this course.
]

= ChatGPT Refinement Workflow

Use ChatGPT to think before asking Base44 to build.

Upload or describe:

- Google Doc research
- ChatGPT conversation
- Published app link
- Screenshots of the landing page, dashboard, activities, forms, partner page, and metrics
- What feels weak or unfinished

#prompt("Review Prompt: Screenshot Critique")[
"I am reviewing for my final exam and improving our app.

Using these screenshots and research notes, tell me:
1. What story does the app currently tell?
2. Where is the flow weak?
3. Which screen would confuse a participant?
4. Which screen would fail to impress a funder or department lead?
5. Which activity needs to be more interactive?
6. What should we ask Base44 to improve first?"
]

#prompt("Review Prompt: AI Tool Upgrade")[
"Suggest one useful way to make an activity more interactive with Three.js or another JavaScript package.

Only suggest it if it supports the learning goal.

Explain:
- Which activity it improves
- What the participant does
- Why it supports the transformation
- What data it collects
- Whether it is MVP or nice-to-have"
]

= Final Opportunity Proposal

Your final proposal should make the opportunity feel real to a department, funder, school, Chamber partner, or program manager.

It should answer:

#checklist((
  "What local opportunity did we find?",
  "What department priority or funding logic supports it?",
  "Who is the target audience?",
  "What transformation does the program create?",
  "Which partners help and why do they care?",
  "How does the app drive the activities?",
  "What data proves the program worked?",
  "What screenshots show the app is real?",
  "What would we improve next?",
  "Why is our student company a valuable software partner?",
))

#quote-card[The strongest answers connect evidence, people, partners, software, and impact.]

]
