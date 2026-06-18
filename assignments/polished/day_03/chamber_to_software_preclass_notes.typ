#import "theme.typ": *

#setup(
  title: "Chamber Partners To Software",
  subtitle: "Broker the program, then build the system",
  kind: "Pre-Class Notes",
)[

#title-card("Chamber Partners To Software", subtitle: "Broker the program, then build the system", label: "Day 3 · Pre-Class Notes")

= Why Day 3 Matters

On Day 1, you learned how to find demand.

On Day 2, you learned how to trace money through budgets, departments, directors, staff, programs, and projects.

On Day 3, you add the supply side.

#quote-card[Demand tells you what the city needs. Supply tells you who can help deliver it.]

Tomorrow, your team will use the same ChatGPT research conversation from the city budget work. But now you will add a Chamber of Commerce directory for either Grand Rapids or Detroit.

That adds local businesses and organizations into the research.

#compact-flow("Day 3 Flow", (
  ("Department Demand", "Chamber Supply", "Partner Match"),
  ("Program Concept", "Software Tool", "Opportunity Pitch"),
))

#callout("Become The Plug")[
  The plug connects demand and supply. You are learning how to find the public need, identify the money or priority behind it, locate local partners, and build the software system that makes the program easier to run.
]

= Demand + Supply

Your department research showed the demand side:

- What problems the city is spending money on
- Which departments manage those problems
- Which directors and staff are connected to the work
- Which programs and projects already exist
- Which pain points or opportunity gaps still show up

The Chamber directory adds the supply side:

- Businesses
- Nonprofits
- Schools
- Venues
- Service providers
- Professional firms
- Training providers
- Technology partners
- Community organizations

#pro-table((1fr, 1.45fr), (
  [#text(fill: white)[Side]], [#text(fill: white)[What It Gives You]],
  [Demand], [The problem, priority, department, budget, public pressure, or opportunity gap],
  [Supply], [The organizations, services, spaces, expertise, products, and people that can help solve it],
  [Brokerage], [The strategy that connects demand and supply into a program where every partner benefits],
  [Software], [The custom tool that makes the program easier to run, track, explain, and pitch],
))

= The Partnership Model

When you broker a partnership, the goal is not to make one organization do all the work.

The goal is to create a model where every partner eats.

That means each partner should receive some kind of return on investment.

#pro-table((1fr, 1.6fr), (
  [#text(fill: white)[Partner ROI Goal]], [#text(fill: white)[What It Could Look Like]],
  [Recognition], [Public visibility, community goodwill, press, social media content],
  [Traffic], [More people visiting a business, venue, website, event, or program],
  [Sales], [New customers, contracts, services, or paid opportunities],
  [Recruiting], [Access to students, workers, volunteers, interns, or future employees],
  [Impact], [Measurable community outcomes that support mission or funding goals],
  [Data], [Better information about participants, needs, outcomes, or demand],
))

#callout("Partnership rule")[
  A strong program does not only ask, “Who can help us?” It asks, “Why would each partner want to be involved?”
]

= Your Company Is The Fourth Partner

Tomorrow, every team will design a program using at least three Chamber organizations.

Your student company becomes the fourth partner.

Your company provides the software tool.

#compact-flow("Four-Partner Model", (
  ("Chamber Partner 1", "Chamber Partner 2", "Chamber Partner 3"),
  ("Your Company", "Software Tool", "Program Runs Better"),
))

The software tool is what makes your team unique.

Because the tool is designed around the exact program, audience, partners, and situation, it can help participants and organizers do useful things.

Examples:

- Participant sign-up
- Event check-in
- Resource matching
- Partner directory
- Progress tracking
- Workshop scheduling
- Volunteer coordination
- Feedback collection
- Impact dashboard
- Follow-up reminders
- Report generation

= What You Learned Yesterday

Yesterday, you learned how powerful AI can be when the right document meets the right prompt.

You:

- Downloaded a city budget
- Uploaded a long document to ChatGPT
- Asked ChatGPT to extract department-level tables
- Moved the research into Google Docs
- Used tabs to organize the work
- Copied the full ChatGPT conversation for transparency
- Let the designer use the research in Stitch
- Generated a simple opportunity-report landing page
- Opened prototype mode
- Shared the prototype link in the Google Doc

#quote-card[You saw that research can become a design fast when the team gives AI strong context.]

Tomorrow, you will use that same process, but add the Chamber directory and Lovable.dev.

= Tomorrow's Toolchain

#pro-table((1fr, 1.7fr), (
  [#text(fill: white)[Tool]], [#text(fill: white)[What You Use It For]],
  [ChatGPT], [Research, cross-analysis, program concepts, partner roles, ROI logic, prompt improvement],
  [Google Docs], [Team workspace, tabs, links, research logs, prototype links, program architecture],
  [Google Stitch], [Turning research and program concepts into a clean visual landing page or prototype],
  [Lovable.dev], [Turning the program concept into a usable software dashboard or app],
  [Chamber Directory], [Finding the local suppliers, partners, venues, services, and organizations],
))

= The 10-Minute Program Architecture Sprint

Before the developer opens Lovable, the whole team needs a clear idea.

You will get 10 minutes to architect the program with AI.

Your team should produce:

#checklist((
  "Program name",
  "Problem being solved",
  "Department connection",
  "Target audience",
  "At least 3 Chamber partners",
  "Partner roles",
  "ROI for each partner",
  "Software tool idea",
  "Main users of the tool",
  "What the tool helps users do",
))

Then save the output in the Google Doc.

= ChatGPT Prompt 1: Add Chamber Supply

Use this in the same ChatGPT conversation where your budget and department research already lives.

#prompt("Prompt 1: Chamber Supply Analysis")[
"We already researched this city department, budget, programs, pain points, and opportunity gaps.

Now I am adding supply-side context from a Chamber of Commerce directory.

City: [Grand Rapids or Detroit]
Department: [insert department]
Problem / opportunity gap: [insert problem]
Chamber directory link or copied members: [paste link or list]

Analyze the Chamber members as potential suppliers for a program.

Create a table with:
- Organization name
- Category
- What they provide
- Why they fit this department opportunity
- Possible role in a program
- What ROI they could receive
- Any risks or questions we should research"
]

= ChatGPT Prompt 2: Broker The Deal

Use this after ChatGPT understands the department and Chamber supply.

#prompt("Prompt 2: Partnership Brokerage Concepts")[
"Act as a community partnership broker and program strategist.

Using our department research and Chamber member supply list, create 5 program concepts.

Each program must include:
- At least 3 Chamber organizations
- Our student company as the 4th partner
- A clear problem being solved
- A target audience
- A role for each partner
- A specific ROI goal for each partner
- A software tool our company can provide to help the program run better
- A reason the city or department would care

Make the concepts practical, local, and pitchable."
]

= ChatGPT Prompt 3: Software Tool Architect

Use this before the developer goes to Lovable.

#prompt("Prompt 3: Software Tool Architecture")[
"Take the strongest program concept and architect the software tool our company should build.

Program concept: [paste selected concept]
Partners: [paste partners]
Target audience: [paste audience]

Define:
1. Tool name
2. Main purpose
3. Primary users
4. What users can do
5. Dashboard sections
6. Data the tool should collect
7. Partner-facing features
8. Participant-facing features
9. Admin / organizer features
10. What makes the tool useful during the program
11. What makes the tool useful after the program

Make this clear enough for a developer to paste into Lovable.dev."
]

= Stitch Prompt

The designer can use the improved research and program concept in Stitch.

#prompt("Stitch Prompt")[
"I am creating an opportunity report landing page for a local program concept.

Use this research to design a polished landing page that explains:
- The problem
- The department connection
- The partner network
- The program concept
- The software tool
- The expected outcomes
- Why every partner benefits

Make the page feel like something we could show to city leaders, Chamber members, and community organizations.

Here is the research and program concept:"
]

= Lovable Primer Prompt

The developer uses this after the team saves the software architecture in the Google Doc.

#prompt("Lovable.dev Primer Prompt")[
"Build a modern, usable software dashboard for this community program.

Context:
We are a student company creating a program with local Chamber partners. Our company provides the software tool that helps the program run smoothly for participants, organizers, and partners.

Program:
[paste program name and description]

Target audience:
[paste audience]

Partners:
[paste partner list and roles]

Software tool architecture:
[paste ChatGPT software architecture]

Build a polished web app with:
- A clear dashboard home screen
- Participant sign-up or intake flow
- Partner directory or partner cards
- Program schedule or activity tracker
- Resource matching or recommendation area
- Organizer/admin view
- Simple impact metrics
- Clean navigation
- Professional visual design
- Mobile-friendly layout

Use realistic sample data. Make it feel like a real tool we could demo to the city, partners, and program participants."
]

= Team Workflow Tomorrow

#compact-flow("Team Workflow", (
  ("Researcher", "ChatGPT Supply Analysis", "Program Concepts"),
  ("Project Manager", "Google Doc Tabs", "Saved Architecture"),
  ("Designer", "Stitch Prototype", "Visual Pitch"),
  ("Developer", "Lovable Dashboard", "Usable Demo"),
))

Each role should save its links, prompts, and outputs in the Google Doc.

The Google Doc is your team’s command center.

= What Success Looks Like

By the end of class, your team should have:

#checklist((
  "A department opportunity",
  "A Chamber supply analysis",
  "At least 3 partner organizations",
  "A program concept where every partner has ROI",
  "A software tool idea",
  "A Stitch design or prototype",
  "A Lovable dashboard or first app draft",
  "All links saved in Google Docs",
))

#callout("Final thought")[
  Tomorrow is when the opportunity report starts becoming a real venture concept. You are not just researching anymore. You are brokering partners, designing programs, and building software that makes the program easier to run.
]

You are becoming the plug.

]
