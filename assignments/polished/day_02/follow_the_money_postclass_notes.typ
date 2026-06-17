#import "theme.typ": *

#let figjam-url = "https://www.figma.com/board/2pCjBRB31jurSQB37y235q/Untitled?node-id=0-1&p=f&t=KFdkvK26mCnTtZNn-0"

#setup(
  title: "Follow The Money",
  subtitle: "Post-Class Review",
  kind: "Class Notes",
)[

#title-card("Follow The Money", subtitle: "Post-Class Review", label: "Day 2 · Class Notes")

= What We Learned Today

Today was about understanding how a city budget becomes a map of power, priorities, people, programs, and opportunity.

The big shift was this:

#quote-card[The budget is not just a list of numbers. It is a map of what the city is trying to solve, who controls the work, and where organizations can plug in.]

On Day 1, you learned to find demand. Today, you learned how that demand gets organized through money and departments.

#compact-flow("Day 2 Review Flow", (
  ("City Budget", "Votes", "Departments"),
  ("Department Directors", "Staff", "Programs & Projects"),
  ("RFPs", "Organizations", "Opportunity Reports"),
))

#callout("Become The Plug")[
  Being the plug means you understand where demand is coming from, where money is being directed, who makes decisions, and which organizations can help turn that demand into real programs.
]

= The FigJam Board We Used

We used the class FigJam board to visualize how money and decision-making move through the city system.

#block(width: 100%, breakable: false, fill: white, stroke: 0.7pt + rule-color, radius: 6pt, inset: 8pt)[
  #image("assets/figjam-budget-flow.png", width: 100%)
]

#callout("Open the board")[
  Live FigJam board: #link(figjam-url)[#figjam-url]
]

The top part of the board showed the path from revenue sources into the city budget, then from the budget into votes, departments, department directors, staff, programs, and projects.

We focused on the part of the board that explains:

- How a city collects money
- How the city budget organizes that money
- Why city council matters
- How votes move money into departments
- Why department directors have power
- How staff help carry out the work
- How programs and projects become opportunities

= Why City Council Matters

City council is important because it is connected to the power and decision-making layer of local government.

When people sit on city council, they help influence:

- What problems become priorities
- Which budgets get approved
- Which departments receive support
- Which programs move forward
- Which community needs get public attention

#compact-flow("Power Path", (
  ("Public Demand", "City Budget", "City Council Votes"),
  ("Departments", "Directors", "Staff"),
  ("Programs", "RFPs", "Community Impact"),
))

This is why local politics matters. It is one of the ways public demand turns into funded action.

= What Departments Do

Departments are where the city organizes work.

Each department manages a specific type of community demand.

#pro-table((1.1fr, 1.5fr), (
  [#text(fill: white)[Department Layer]], [#text(fill: white)[What It Helps You Understand]],
  [Department], [What problem the city is organizing around],
  [Department Budget], [How much energy the city is putting behind that problem],
  [Director / Leader], [Who is responsible for guiding that department],
  [Staff], [Who helps carry out daily work, programs, and services],
  [Programs & Projects], [What the department is actively doing],
  [Pain Points], [Where the department may need help],
))

The goal was not just to summarize the budget. The goal was to build a City Opportunity Map.

= The Research Prompt We Used

We used ChatGPT to help split the city budget into a structured department opportunity table.

#prompt("Class Prompt: City Opportunity Map")[
"I want you to split this city budget into the main departments, and I want the department directors as well as the staff. I want the budget for each department and any plans from programs, also pain points. Make sure this is a nice structured table, and also just make it one table, one big table with all the info in it like that."
]

The important lesson was that AI can help organize a large document, but you still have to understand what you are asking for.

ChatGPT helped us see that a department table should include:

- Department
- Budget or budget scale
- Director or leader
- Main programs and responsibilities
- Pain points
- Opportunity signals
- Possible partners or vendors

#callout("Research lesson")[
  A good prompt turns a huge budget into a usable research table. A better researcher knows what columns should exist before asking AI to build the table.
]

= Google Docs Workflow

After ChatGPT created the department table, we moved the work into Google Docs.

We used Google Docs as the team workspace.

The document needed tabs so each part of the work had a home:

#pro-table((1fr, 1.5fr), (
  [#text(fill: white)[Google Doc Tab]], [#text(fill: white)[What Goes There]],
  [ChatGPT Research Conversation], [Full copied ChatGPT conversation for evidence and transparency],
  [Department Tables], [Clean table showing departments, budgets, leaders, programs, and pain points],
  [Google Stitch Design], [Design prompt, generated landing page concept, prototype link],
  [Lovable Website], [Future development work and usable product link],
))

You practiced copying the full ChatGPT conversation into the correct Google Doc tab so teammates could review the research process, not just the final answer.

That matters because good teams need shared context.

= Team Roles

Today, teams formed with 2-4 people.

Each team started becoming a product team.

#pro-table((1fr, 1.65fr), (
  [#text(fill: white)[Role]], [#text(fill: white)[Responsibility]],
  [Researcher], [Uses ChatGPT to analyze documents, extract tables, identify departments, and explain findings],
  [Project Manager], [Controls the Google Doc, creates tabs, keeps teammates connected, and makes sure the work is organized],
  [Designer], [Uses research with stitch.withgoogle.com to create a visual landing page or prototype],
  [Developer], [Uses lovable.dev to turn the design into a usable product. We will focus on this more tomorrow],
))

#callout("Product team mindset")[
  The team is not just answering questions. The team is building a research-backed product that explains an opportunity clearly enough for other people to understand and use.
]

= From Research To Design

After the researcher and project manager organized the ChatGPT output, the designer used that research in Google Stitch.

The designer copied the department table and research content into Stitch with this prompt:

#prompt("Stitch Design Prompt")[
"I am doing research and I want you to build a nice landing page over this research given the tables as I am creating an opportunity report over Grand Rapids. Here is the info from my research:"
]

Then the designer pasted the research into the chat interface.

This helped teams turn raw research into a visual explanation.

#compact-flow("Research-to-Prototype Workflow", (
  ("ChatGPT Research", "Google Doc Tabs", "Department Table"),
  ("Stitch Prompt", "Landing Page Design", "Prototype Mode"),
  ("Share Prototype Link", "Team Reviews", "Opportunity Report"),
))

= Prototype Mode And Sharing

After Stitch generated the landing page, we moved into prototype mode.

Then teams copied the prototype share link into the Google Doc tab so everybody could access it.

That step matters because a team needs one shared place where the research, design, and links live together.

#checklist((
  "Research conversation copied into Google Doc",
  "Department table added to the Department Tables tab",
  "Designer used research to generate a Stitch landing page",
  "Prototype mode opened",
  "Prototype link pasted into the Google Doc",
  "All teammates can access the document and prototype",
))

= What We Did Not Finish Yet

We did not fully work with the developer role today.

That is okay.

Today was about understanding the structure:

- How budgets work
- How departments get money to spend
- Why directors and staff matter
- How research turns into a department opportunity table
- How teams organize research in a shared Google Doc
- How designers turn research into a prototype

Tomorrow, we move deeper into development concepts.

= Tomorrow: Make It Usable

Tomorrow, the developer role becomes more important.

The goal is to learn how the design can become an actual usable product.

That means asking:

- What should this page or tool help someone do?
- Who is the user?
- What information should they see first?
- What action should they take?
- How can the research become something interactive or useful?

#compact-flow("Tomorrow's Build Path", (
  ("Research", "Design", "Prototype"),
  ("Development Concepts", "Lovable Build", "Usable Product"),
  ("Opportunity Report", "Team Pitch"),
))

= Review Questions

Use these questions to check your understanding:

1. Why is the city budget a list of priorities?
2. Why does city council matter when money is being allocated?
3. What does a department director control or influence?
4. Why do departments need staff?
5. What kind of information should go in the Department Tables tab?
6. Why should the full ChatGPT conversation be saved in the Google Doc?
7. How does Stitch help a designer turn research into a landing page?
8. What is the difference between a prototype and a usable product?
9. How does this work help you become the plug in your city?

= Key Takeaway

Today, you became more than a student reading a budget.

You started acting like a product team.

You researched the city, organized department intelligence, mapped decision-making power, created a design from real data, and shared the prototype with your team.

#quote-card[The plug understands demand, traces supply, finds the people with power, and builds the connection between opportunity and action.]

]
