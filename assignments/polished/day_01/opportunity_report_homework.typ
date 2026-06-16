#import "theme.typ": *

#let phase(num, title, body) = {
  block(
    width: 100%,
    fill: soft-blue,
    stroke: 0.8pt + teal,
    radius: 6pt,
    inset: 12pt,
    above: 12pt,
    below: 10pt,
  )[
    #text(size: 9pt, weight: "bold", fill: gold)[Phase #num]
    #v(3pt)
    #text(size: 17pt, weight: "bold", fill: navy)[#title]
  ]
  body
}

#setup(
  title: "Opportunity Report",
  subtitle: "Student Assignment",
  kind: "Assignment",
)[

#title-card("Opportunity Report", subtitle: "Student Assignment", label: "Day 1")

= Purpose of This Assignment

Most people think opportunities start with an idea.

In reality, many opportunities start with a problem that already exists and a budget that has already been allocated to solve it.

Throughout this project, you will learn how to think like a community leader, consultant, economic developer, or program designer. You will use public information, AI tools, and local business resources to identify a real community challenge and design a realistic solution.

#callout("Project goal")[
  Your goal is not to create a startup company. Your goal is to discover a funded community need and design a program that could help address it.
]

#phase("1", "Department Discovery & Opportunity Analysis")[

== What Is This Phase?

Every city department exists to solve specific community problems.

For example:

- Parks & Recreation creates recreational opportunities.
- Public Works maintains roads and infrastructure.
- Workforce Development helps people find jobs and training.
- Housing departments address housing challenges.
- Economic Development supports business growth.

Departments receive funding because community leaders believe these issues are important.

In this phase, you will explore several departments and identify one that appears to have meaningful challenges, active projects, and opportunities for improvement.

Your goal is to understand:

- What the department does
- What problems it is trying to solve
- How it spends its budget
- What challenges still exist

== Obtain

#checklist((
  "City Budget",
  "Department Budget",
  "Annual Report",
  "Year-End Review",
))

Review all available departments and select ONE department that appears to have meaningful challenges, active projects, and available funding.

#field("Department")
#field("Department Budget")
#field("Primary Responsibilities", height: 44pt)
#field("Reason For Selection", height: 58pt)

Using ChatGPT, upload:

- Department Budget
- Annual Report
- Year-End Review

#prompt("Prompt 1: Department Intelligence Report")[
"Act as a municipal strategy consultant.

Analyze the uploaded documents and create a Department Intelligence Report.

Identify:

1. The department's primary mission.
2. The top 5 priorities receiving the most attention.
3. The largest spending categories.
4. Programs that appear successful.
5. Programs that appear underperforming.
6. Challenges repeatedly mentioned across documents.
7. Community needs that are acknowledged but not fully addressed.
8. Risks or concerns that could become future problems.
9. Areas where partnerships could improve outcomes.
10. Opportunities where additional programs, events, education, workforce development, technology, or community engagement could create measurable impact.

For each opportunity identified, explain:

- Why it matters
- Who is affected
- Evidence supporting the opportunity
- Potential partners that could help"
]

#prompt("Prompt 2: Opportunity Extraction")[
"Based on these documents, identify 10 potential opportunities for a community program, initiative, event series, workforce project, educational campaign, or partnership effort.

For each opportunity provide:

- Opportunity Name
- Problem Being Solved
- Evidence From Documents
- Existing Funding Connection
- Potential Stakeholders
- Estimated Difficulty (Low, Medium, High)
- Potential Community Impact
- Why This Opportunity Is Worth Exploring"
]

#field("Record findings below", height: 90pt)
]

#phase("2", "Identify Funded Problems")[

== What Is This Phase?

Now that you understand the department, it is time to identify opportunities.

Remember:

#quote-card[A funded problem is a problem that leaders already recognize and are already spending money to address.]

These opportunities are often easier to support because:

- The need has already been identified.
- Funding may already exist.
- Community leaders already care about the issue.
- Potential partners may already be involved.

Your goal is to narrow your research and identify the opportunities that appear most realistic and impactful.

Based on your analysis, identify the most promising funded problems and opportunities.

List the top opportunities discovered:

#pro-table((1.2fr, 1.4fr, 1.2fr), (
  [#text(fill: white)[Opportunity]], [#text(fill: white)[Evidence]], [#text(fill: white)[Funding Connection]],
  [], [], [],
  [], [], [],
  [], [], [],
  [], [], [],
))

Select ONE opportunity to investigate further.

#field("Selected Opportunity")
#field("Why This Opportunity Was Selected", height: 52pt)
#field("Supporting Evidence", height: 72pt)
]

#phase("3", "Department Intelligence Enrichment (Optional)")[

== What Is This Phase?

Sometimes budgets and annual reports do not tell the whole story.

Community concerns often appear in:

- Public meetings
- Presentations
- Strategic plans
- News releases
- Committee discussions

This phase helps you gather additional information if you need a deeper understanding of your selected opportunity.

You only need to complete this phase if you believe additional research will strengthen your project.

== Locate

#checklist((
  "Department Updates",
  "Department Presentations",
  "Department Strategic Plans",
  "Department News Releases",
  "Committee Meetings Related To The Department",
  "City Council Meetings Discussing The Department",
))

Upload transcripts, notes, agendas, presentations, or reports into ChatGPT.

#prompt("Prompt 3: Department Signal Analysis")[
"Analyze only information related to the selected department.

Ignore unrelated discussions.

Identify:

1. Frequently discussed concerns.
2. Community complaints.
3. Community requests.
4. Unresolved issues.
5. Future projects being considered.
6. Funding discussions.
7. Capacity limitations.
8. Partnership opportunities.
9. Programs that leaders appear excited about.
10. Areas where community support could accelerate results.

For each finding provide:

- Evidence
- Stakeholders involved
- Potential opportunity created"
]

#prompt("Prompt 4: Hidden Opportunity Discovery")[
"Review all department-related discussions and identify opportunities that may not be obvious.

Look for:

- Repeated frustrations
- Resource shortages
- Staffing challenges
- Outreach gaps
- Participation gaps
- Communication problems
- Event opportunities
- Workforce opportunities
- Volunteer opportunities
- Technology opportunities

Identify opportunities where a community-led program could support the department's goals."
]

#field("Record findings", height: 90pt)
]

#phase("4", "Opportunity Selection")[

== What Is This Phase?

At this point, you should have enough information to choose one specific problem to address.

The strongest opportunities usually have:

- Clear evidence that the problem exists
- A connection to existing funding
- A group of people who would benefit
- Potential partners who could help
- A realistic path toward implementation

Your goal is to clearly define the challenge before designing a solution.

Select ONE problem to solve.

#field("Problem")
#field("Evidence", height: 50pt)
#field("Budget Connected")
#field("Why It Matters", height: 44pt)
#field("Who Benefits")
#field("How Success Could Be Measured", height: 44pt)
]

#phase("5", "Chamber Research & Partnership Development")[

== What Is This Phase?

Very few community problems are solved by one organization alone.

Successful programs often involve partnerships between:

- Businesses
- Nonprofits
- Schools
- Government agencies
- Community organizations

The Chamber of Commerce directory can help you identify organizations that already have resources, expertise, facilities, staff, or community connections.

Your goal is to build a team of organizations that could realistically work together to address the problem.

Search the Chamber Directory and identify organizations that could help solve this problem.

You must identify at least THREE partners.

== Requirements

#checklist((
  "Minimum 3 Partners",
  "At Least 1 Organization Must Have Event Space Or Meeting Facilities",
  "Partners Must Have Clearly Defined Roles",
))

Possible partners:

#pro-table((1.4fr, 1fr, 1.4fr), (
  [#text(fill: white)[Organization]], [#text(fill: white)[Category]], [#text(fill: white)[Role]],
  [], [], [],
  [], [], [],
  [], [], [],
))

Categories:

#checklist((
  "Business",
  "Nonprofit",
  "School",
  "Workforce Organization",
  "Faith-Based Organization",
  "Government Partner",
  "Venue / Event Space Partner",
))

#prompt("Prompt 5: Partnership Strategy")[
"Act as a community partnership strategist.

Review the Chamber of Commerce business directory (or the relevant business categories) and analyze which organizations are best positioned to help address the selected opportunity.

Identify businesses and organizations that:

- Are already working on this issue
- Have services, expertise, facilities, staff, or resources that align with the need
- Could create meaningful community impact through participation
- Have a clear business, workforce, community, or economic incentive to be involved

For each recommended organization explain:

- Why they are a strong fit
- What resources or capabilities they contribute
- What incentives they have to participate
- What role they could play in the partnership
- How they benefit from successful outcomes

Then recommend the highest-impact partnership network and explain why these organizations should be prioritized over others in the directory."
]
]

#phase("6", "Network Mapping")[

== What Is This Phase?

Every project involves people who influence decisions.

Some people approve funding. Some people provide resources. Some people help recruit participants. Some people help build community support.

Understanding who these stakeholders are can help you design a stronger and more realistic program.

Your goal is to identify the people who could help move your idea forward.

Identify key decision makers.

#field("Department Contact")
#field("Director")
#field("LinkedIn Profiles", height: 42pt)
#field("Potential Community Champion")
#field("Potential Program Sponsor")
#field("Potential Venue Partner")

#prompt("Prompt 6: Stakeholder Mapping")[
"Analyze the selected opportunity and stakeholder network.

Identify:

- Decision Makers
- Influencers
- Potential Sponsors
- Community Champions
- Program Participants
- Strategic Partners

Explain how each stakeholder contributes to program success and recommend an engagement strategy for each."
]
]

#phase("7", "Program Design")[

== What Is This Phase?

Now it is time to create a solution.

Your program should directly address the problem you selected.

Think about:

- Who the program serves
- What activities will take place
- Which organizations will participate
- What resources are needed
- How success will be measured

Your goal is to design a realistic program that could actually be implemented using existing community resources and partnerships.

Create a program that addresses the problem.

#field("Program Name")
#field("Target Audience")
#field("Expected Outcomes", height: 52pt)
#field("Organizations Needed", height: 44pt)
#field("Venue Partner")
#field("Estimated Budget")

#prompt("Prompt 7: Program Architect")[
"Design a realistic community program that addresses the selected problem.

Include:

1. Program Overview
2. Target Audience
3. Program Activities
4. Partner Responsibilities
5. Venue Requirements
6. Staffing Requirements
7. Marketing Strategy
8. Budget Categories
9. Success Metrics
10. Expected Community Impact

Design the program so it can realistically be implemented using existing community resources and partnerships."
]
]

#phase("8", "Resource Allocation")[

== What Is This Phase?

Every program requires resources.

Resources may include:

- Funding
- Staff time
- Volunteers
- Facilities
- Equipment
- Marketing support

In this phase, you will estimate what it would take to operate your program and what impact it could create.

Remember that estimates do not need to be perfect. The goal is to think critically about how resources are used and how value is created.

Estimate participation.

#pro-table((1.2fr, 1.2fr, 1fr), (
  [#text(fill: white)[Partner]], [#text(fill: white)[Role]], [#text(fill: white)[Estimated Cost]],
  [], [], [],
  [], [], [],
  [], [], [],
))

#field("Expected Participation")
#field("Expected Impact", height: 44pt)
#field("Expected Return On Investment", height: 44pt)

#prompt("Prompt 8: Impact & ROI Analysis")[
"Evaluate the proposed program.

Estimate:

- Community impact
- Economic impact
- Workforce impact
- Educational impact
- Social impact

Identify:

- Key performance indicators
- Short-term outcomes
- Long-term outcomes
- Risks
- Mitigation strategies

Provide a realistic assessment of expected return on investment."
]
]

= Final Deliverable

Submit:

1. Department Intelligence Report
2. Opportunity Analysis
3. Department Intelligence Enrichment (if completed)
4. Opportunity Selection
5. Partnership Network Map
6. Program Design
7. Resource Allocation Plan
8. Opportunity Report Summary

= Final Reflection

By completing this project, you should be able to:

#checklist((
  "Analyze public budgets and reports",
  "Use AI as a research assistant",
  "Identify funded community needs",
  "Evaluate evidence and opportunities",
  "Research local organizations and partnerships",
  "Map stakeholder networks",
  "Design realistic community programs",
  "Estimate resources and impact",
  "Think like a consultant, planner, or community leader",
))

#callout("Closing idea")[
  The goal is not simply to find a problem. The goal is to discover where community needs, funding, partnerships, and impact intersect—and then design a solution that creates value for the people you serve.
]

]
