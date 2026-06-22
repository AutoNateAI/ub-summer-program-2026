#import "theme.typ": *

#setup(
  title: "Program Blueprint To App Build",
  subtitle: "Expand the program, design the digital activities, then build the app",
  kind: "Pre-Class Notes",
)[

#title-card("Program Blueprint To App Build", subtitle: "Expand the program, design the digital activities, then build the app", label: "Day 4 · Pre-Class Notes")

= Why Day 4 Matters

Last Thursday, your team reached an important point.

You had already:

- Brought a yearly city budget into ChatGPT
- Extracted departments from the budget
- Found current programs the department is running
- Chosen one program or opportunity signal to build from
- Added a Chamber of Commerce directory
- Asked AI to pattern-match local partners
- Started building a program that could be presented to the department and collaborators

That was the first version of the deal.

Today, you expand it into a real program.

#quote-card[Day 3 helped you find the partners. Day 4 helps you design the transformation.]

The program cannot just sound cool. It needs a clear audience, a clear transformation, a schedule, activities, lessons, partner roles, digital tools, data collection, and a reason every partner benefits.

#compact-flow("Day 4 Flow", (
  ("Department Program", "Chamber Partners", "Win-Win-Win Concept"),
  ("3-Day Transformation", "Digital Activities", "Stitch Portal Design"),
  ("Base44 Web App", "Team Demo", "Partner Pitch"),
))

#callout("What changes today")[
  Your team moves from a partnership concept into a 3-day transformation program. Then your company becomes the fourth partner by providing the digital technology that helps participants complete activities, organizers run the program, and partners see value.
]

= The Big Idea

The program you design should help people move from one state to another.

#pro-table((1fr, 1.4fr), (
  [#text(fill: white)[Program Layer]], [#text(fill: white)[What It Must Answer]],
  [Starting Point], [What problem, barrier, gap, or need does the audience have right now?],
  [Transformation], [What should participants understand, practice, build, or become by the end?],
  [Lessons], [What concepts must be taught by your team or service providers?],
  [Activities], [What will participants actually do, create, discuss, or submit?],
  [Digital Tool], [How does your company make the program easier to run or more valuable?],
  [Partner ROI], [How does every collaborator receive recognition, traffic, sales, recruiting, impact, data, or mission value?],
))

The strongest programs have a clear arc:

#compact-flow("Transformation Arc", (
  ("Problem Awareness", "Skill Practice", "Guided Build"),
  ("Feedback", "Showcase", "Next Step"),
))

= The Four-Company Model

Your program should use at least three outside collaborators from the Chamber or local partner list.

Your company is the fourth partner.

#compact-flow("Partner Structure", (
  ("Service Provider 1", "Service Provider 2", "Service Provider 3"),
  ("Your Company", "Digital Tool", "Program Runs Better"),
))

Each service provider should teach or support part of the transformation.

Examples:

- A bank or credit union teaches financial readiness.
- A marketing agency teaches branding or outreach.
- A health organization teaches wellness and prevention.
- A workforce organization teaches career skills.
- A venue hosts the program.
- A food business supports hospitality.
- A tech company supports digital literacy.
- A nonprofit supports participant outreach.

Your company provides the digital layer.

That could be:

- Intake form
- Participant dashboard
- Activity tracker
- Resource matcher
- Partner directory
- Reflection journal
- Schedule portal
- Check-in system
- Feedback form
- Impact dashboard
- Final report generator

= Today’s Toolchain

#pro-table((1fr, 1.65fr), (
  [#text(fill: white)[Tool]], [#text(fill: white)[What You Use It For Today]],
  [ChatGPT], [Expand the 3-day program, lessons, activities, partner roles, digital tool ideas, and refinement prompts],
  [Google Docs], [Save the program blueprint, prompts, team decisions, Stitch text export, and Base44 app link],
  [Google Stitch], [Design the portal that holds the activities and collects participant data],
  [Base44], [Turn the Stitch design and app prompt into a usable web app],
  [Team Discussion], [Decide what the program should actually feel like, what participants do, and what partners get],
))

The point is not to let AI decide everything.

The point is to use AI as a strategy partner while your team makes choices.

= Team Discussion Before Prompting

Before using the big prompt, the team should discuss:

#checklist((
  "Who is the target audience?",
  "What problem are we helping them solve?",
  "What department program or priority are we building from?",
  "What does the audience need to learn or practice?",
  "Which 3 partners make the most sense?",
  "What does each partner teach, provide, or gain?",
  "What activity would make the program feel hands-on?",
  "What data would prove the program worked?",
  "What digital tool would make the program easier to run?",
  "What would make this pitchable to the department?",
))

#prompt("Team Discussion Prompt")[
"Before building the full program, ask us 10 strategic questions one at a time.

Help us decide:
- Who our audience is
- What transformation they need
- Which department priority we connect to
- Which Chamber partners fit best
- What each partner should teach or provide
- What each partner gets in return
- What activities participants should complete
- What data we should collect
- What digital tool our company should build
- What would make the program pitchable

After each answer, briefly summarize what you heard and ask the next question."
]

= Master ChatGPT Prompt: Build The 3-Day Program

Use this after your team has selected a department program, opportunity gap, and possible collaborators.

#prompt("Master Prompt: 3-Day Transformation Program + Digital Tool")[
"Act as a community program strategist, partnership broker, instructional designer, and software product architect.

We are a student company building a program from real local opportunity research.

Context:
- City: [Grand Rapids or Detroit]
- Department: [insert department]
- Department program or priority we are building from: [insert program]
- Problem / opportunity gap: [insert problem]
- Target audience: [insert audience]
- Chamber directory / partner list: [paste link or partner options]
- Partners we are considering: [paste at least 3 partners]
- Our company role: We are the fourth partner. We provide the digital technology that helps participants complete activities, organizers run the program, partners see ROI, and the department understand impact.

Build a complete 3-day transformation program.

Requirements:
1. Program name
2. One-sentence program promise
3. Target audience profile
4. Starting problem
5. End transformation
6. Why the department would care
7. Why each partner would care
8. Partner roles and ROI
9. Three-day schedule
10. Lessons for each day
11. Activities for each day
12. Which partner or service provider leads each lesson/activity
13. What participants create each day
14. What data we collect each day
15. Digital tool features our company should provide
16. Where the digital tool is used inside each activity
17. Success metrics
18. Final showcase or deliverable
19. Risks or weak spots
20. Questions our team should answer before pitching

Make the program practical, local, hands-on, and pitchable.

Use clear headings and tables."
]

= Program Blueprint Table

After the master prompt, ask ChatGPT to create a clean blueprint table.

#prompt("Blueprint Table Prompt")[
"Turn this program into a clean blueprint table.

Columns:
- Day
- Theme
- Lesson
- Lead partner / service provider
- Participant activity
- Digital tool used
- Data collected
- Partner ROI
- Output created

Make it easy for our project manager to paste into Google Docs and easy for our designer to use in Stitch."
]

= Digital Tool Prompt

Now isolate the digital product your company will build.

#prompt("Digital Tool Product Architect Prompt")[
"Act as a senior software product architect.

Using this 3-day program, define the digital tool our company should build.

The tool must support the program activities and make the program more valuable for participants, organizers, partners, and the department.

Define:
1. App name
2. Core purpose
3. User types
4. Dashboard pages
5. Participant features
6. Organizer features
7. Partner features
8. Data collection forms
9. Activity flows
10. Progress tracking
11. Resource matching logic
12. Impact metrics
13. Final report / showcase feature
14. Sample data
15. What should be included in the MVP
16. What can wait until later

Then create a user flow that shows how someone moves through the app during all 3 days."
]

= Refinement Prompts

Once AI gives the first version, do not accept it immediately.

Use follow-up prompts to make it stronger.

#prompt("Refine For Partner ROI")[
"Review the program and make the partner ROI more specific.

For each partner, explain:
- What they give
- What they get
- How their ROI can be measured
- Why they would say yes
- What risk or concern they might have
- How we can make the partnership easier for them"
]

#prompt("Refine For Activities")[
"Make the activities more hands-on and less like a lecture.

For each day, add:
- A warm-up activity
- A main build activity
- A partner interaction
- A digital tool activity
- A reflection
- A concrete output participants submit"
]

#prompt("Refine For Department Pitch")[
"Rewrite the program so it sounds pitchable to the department.

Connect it to:
- The department's mission
- Current programs
- Budget priorities
- Community need
- Measurable outcomes
- Partner capacity
- Data the program will generate
- Why this is a realistic pilot"
]

= Stitch Portal Prompt

Once the program and digital tool are strong, the designer moves into Google Stitch.

#prompt("Google Stitch Prompt")[
"Design a polished web app portal for this 3-day community transformation program.

The portal should hold the activities, guide participants through each day, collect data, and show impact to organizers and partners.

Create screens for:
- Home dashboard
- Program overview
- Day 1 activities
- Day 2 activities
- Day 3 activities
- Participant intake
- Partner directory
- Resource matching
- Progress tracker
- Reflection / feedback forms
- Organizer dashboard
- Impact metrics
- Final showcase / report

Design style:
- Professional
- Youth-friendly
- City / community innovation feel
- Easy to navigate
- Mobile-friendly
- Clear sections for participants, organizers, and partners

Use realistic sample data from the program below.

Here is the full program blueprint and digital tool architecture:"
]

= Base44 Build Prompt

After Stitch creates the design, use “copy to text” and bring that into Base44.

#prompt("Base44 Prompt")[
"Build this web app from the design and program description below.

Context:
We are a student company creating a 3-day community transformation program with local partners. Our company provides the digital portal that helps participants complete activities, organizers run the program, partners see ROI, and the department understand impact.

Build a usable web app with:
- Dashboard home
- Program overview
- Day-by-day activity pages
- Participant intake form
- Activity submission forms
- Reflection forms
- Partner directory
- Resource matching section
- Progress tracker
- Organizer view
- Impact metrics
- Final report / showcase page

Use clean navigation, realistic sample data, and a professional visual style.

Make the app feel demo-ready for a city department, Chamber partners, and program participants.

Here is the Stitch design text:
[paste Stitch copy-to-text output]

Here is the program blueprint:
[paste program blueprint]"
]

= Team Workflow Today

#compact-flow("Day 4 Team Workflow", (
  ("Researcher", "Program Expansion", "Refinement Prompts"),
  ("Project Manager", "Google Doc Blueprint", "Saved Decisions"),
  ("Designer", "Stitch Portal", "Copy Design Text"),
  ("Developer", "Base44 App", "Demo Link"),
))

The Google Doc remains the command center.

The team should create or update tabs for:

#pro-table((1fr, 1.65fr), (
  [#text(fill: white)[Google Doc Tab]], [#text(fill: white)[What Goes There]],
  [Program Blueprint], [Final 3-day schedule, lessons, activities, partners, ROI, and outputs],
  [Digital Tool Architecture], [App name, users, pages, features, forms, data, and metrics],
  [Stitch Design], [Stitch prompt, design link, prototype link, and copy-to-text output],
  [Base44 Build], [Base44 prompt, generated app link, notes, screenshots, and next fixes],
  [Team Decisions], [What the team changed after discussing with AI and each other],
))

= End Of Class Goal

By the end of class, your team should have:

#checklist((
  "A clear 3-day program concept",
  "A department program or priority connection",
  "At least 3 collaborator roles",
  "ROI for each collaborator",
  "Lessons and activities for each day",
  "A digital activity or tool for each day",
  "A Stitch portal design",
  "A Base44 web app draft",
  "All prompts and links saved in Google Docs",
  "A short explanation of why the department and partners should care",
))

#callout("Final thought")[
  Today is where the program starts becoming real. You are not just finding opportunities anymore. You are designing the transformation, organizing the partners, and building the digital system that helps the whole thing run.
]

You are becoming the plug.

]
