import type { QuizQuestion } from "@/lib/weekendQuiz";

export const finalExam = {
  id: "final-opportunity-to-app-exam",
  title: "Final Exam: From Local Opportunity To Live App",
  dueLabel: "Opens Thursday, June 25 at 9:15 AM ET",
  unlockAtIso: "2026-06-25T09:15:00-04:00",
  points: 45,
  questions: [
    {
      id: "q01",
      prompt:
        "Your team has a cool app idea but no evidence yet. What is the strongest next move?",
      options: [
        "Design the logo first so the idea feels real.",
        "Open the city budget and find a funded department priority connected to the idea.",
        "Ask Base44 to build the full app immediately.",
        "Pick the biggest department and assume they will fund it.",
      ],
      answerIndex: 1,
      explanation:
        "The program starts with demand evidence: budgets, priorities, departments, and real problems.",
    },
    {
      id: "q02",
      prompt:
        "ChatGPT gives a budget summary, but it is too general. Which follow-up prompt is strongest?",
      options: [
        "Make it better.",
        "Give me one big table with departments, directors, staff, budget, programs, plans, and pain points.",
        "Tell me if this city is good or bad.",
        "Write a slogan for the department.",
      ],
      answerIndex: 1,
      explanation:
        "Strong prompts specify the structure, columns, and lens needed for useful analysis.",
    },
    {
      id: "q03",
      prompt:
        "A department has a large budget but no clear program connection. What should you check before building?",
      options: [
        "Whether the department has recent programs, plans, vendors, or pain points tied to the audience.",
        "Whether the app colors match the city seal.",
        "Whether another team likes the same department.",
        "Whether Base44 can generate animations.",
      ],
      answerIndex: 0,
      explanation:
        "A large budget alone is not enough; the team needs program and problem context.",
    },
    {
      id: "q04",
      prompt:
        "You choose Grand Rapids Public Safety. What research question best fits the workflow?",
      options: [
        "What games are popular with students right now?",
        "What public safety programs, spending, vendors, and priorities appeared over the last five years?",
        "Which font feels safest?",
        "Can we skip the city context and build a dashboard?",
      ],
      answerIndex: 1,
      explanation:
        "Historical program research shows patterns, priorities, spending, vendors, and local reality.",
    },
    {
      id: "q05",
      prompt:
        "Your app is polished, but the problem statement is vague. Who will notice first?",
      options: [
        "Only the designer.",
        "Demand managers and funding people who need to know what real priority the program serves.",
        "Nobody, because design quality solves that.",
        "Only students who forgot to log in.",
      ],
      answerIndex: 1,
      explanation:
        "Funders and department leads look for a clear fit between the program and the problem they own.",
    },
    {
      id: "q06",
      prompt:
        "The Chamber directory is mainly useful because it helps teams find what?",
      options: [
        "Supply: businesses, nonprofits, venues, services, and possible collaborators.",
        "City council votes.",
        "The final exam answers.",
        "A replacement for budget research.",
      ],
      answerIndex: 0,
      explanation:
        "Chamber directories help teams map potential collaborators who can deliver value.",
    },
    {
      id: "q07",
      prompt:
        "A partner says, 'Why should we join?' Which answer is weakest?",
      options: [
        "You reach the target audience.",
        "You get visibility, data, referrals, recruiting, or mission impact.",
        "You are listed in the Chamber, so you have to help.",
        "Your role connects to a specific activity and outcome.",
      ],
      answerIndex: 2,
      explanation:
        "Partnership requires real ROI, not pressure or assumptions.",
    },
    {
      id: "q08",
      prompt:
        "What does it mean for the student company to be the broker?",
      options: [
        "The team owns the city department.",
        "The team connects demand, partners, participants, and a software system into a program offer.",
        "The team avoids partners and builds alone.",
        "The team only makes a pitch deck.",
      ],
      answerIndex: 1,
      explanation:
        "The broker connects the system and adds value through organization and technology.",
    },
    {
      id: "q09",
      prompt:
        "A win-win-win-win program must create value for which group?",
      options: [
        "Only the students building the app.",
        "Only the city.",
        "Participants, partners, the department/demand manager, and the student company.",
        "Only the biggest Chamber partner.",
      ],
      answerIndex: 2,
      explanation:
        "The model works when every stakeholder has a clear reason to participate.",
    },
    {
      id: "q10",
      prompt:
        "A program idea sounds good, but the activities are missing. What should the team define next?",
      options: [
        "Program mechanics: lessons, activities, roles, flow, deliverables, data, and partner touchpoints.",
        "Only a new app name.",
        "A random game mechanic.",
        "A longer mission statement with no schedule.",
      ],
      answerIndex: 0,
      explanation:
        "Program mechanics turn an idea into something that can actually run.",
    },
    {
      id: "q11",
      prompt:
        "Why ask for a Mermaid/FigJam-style flow before designing the app?",
      options: [
        "To make the app unnecessary.",
        "To see the program sequence, roles, decisions, and handoffs before building screens.",
        "To replace partner research.",
        "To avoid explaining the audience.",
      ],
      answerIndex: 1,
      explanation:
        "Flow diagrams help teams understand the system before turning it into software.",
    },
    {
      id: "q12",
      prompt:
        "Your software tool table has five ideas. Which one should you choose first?",
      options: [
        "The one with the most advanced animation.",
        "The one that best supports the activities, data collection, partner ROI, and final report.",
        "The one with the shortest name.",
        "The one ChatGPT lists first without comparison.",
      ],
      answerIndex: 1,
      explanation:
        "The best MVP is the tool that makes the program more useful and provable.",
    },
    {
      id: "q13",
      prompt:
        "Which software feature most clearly supports a 3-day transformation program?",
      options: [
        "A landing page only.",
        "Participant activities, submissions, progress tracking, resources, and impact metrics.",
        "A background gradient with no forms.",
        "A hidden admin page nobody can interpret.",
      ],
      answerIndex: 1,
      explanation:
        "The app should guide action, collect evidence, and show progress.",
    },
    {
      id: "q14",
      prompt:
        "What was Stitch best used for in the workflow?",
      options: [
        "Turning the program and tool idea into a visual portal direction.",
        "Replacing the city budget.",
        "Publishing the final app.",
        "Finding department staff.",
      ],
      answerIndex: 0,
      explanation:
        "Stitch helped teams design the portal experience before building in Base44.",
    },
    {
      id: "q15",
      prompt:
        "What was Base44 best used for today?",
      options: [
        "Publishing a live working app from the program and software context.",
        "Writing the city budget.",
        "Replacing ChatGPT research.",
        "Choosing the department priority for every team.",
      ],
      answerIndex: 0,
      explanation:
        "Base44 was the build and publish environment for the working prototype.",
    },
    {
      id: "q16",
      prompt:
        "A team wants their app public fast. What is the best action from today's workflow?",
      options: [
        "Click Publish in Base44, copy the live URL, and test the site.",
        "Start a new city budget search.",
        "Delete the app and rebuild in a game tool.",
        "Wait until every feature is perfect.",
      ],
      answerIndex: 0,
      explanation:
        "The Base44 Publish button gives teams a live hosted URL quickly.",
    },
    {
      id: "q17",
      prompt:
        "`safe-u-connect.base44.app` means what?",
      options: [
        "The app is hosted by Base44 with `safe-u-connect` as the subdomain.",
        "The team bought a custom domain.",
        "The app is stored in Google Docs.",
        "The site is private and cannot be shared.",
      ],
      answerIndex: 0,
      explanation:
        "The subdomain is the part before `.base44.app`; Base44 hosts the app.",
    },
    {
      id: "q18",
      prompt:
        "When should the team use ChatGPT instead of Base44?",
      options: [
        "When reasoning about the program, weak spots, prompts, screenshots, and proposal logic.",
        "When clicking the Publish button.",
        "When changing the browser tab.",
        "When copying the live URL from the modal.",
      ],
      answerIndex: 0,
      explanation:
        "ChatGPT is the strategy partner; Base44 is the build and publish partner.",
    },
    {
      id: "q19",
      prompt:
        "A screenshot shows a dashboard with nice cards but no clear next action. What should you ask ChatGPT?",
      options: [
        "Make the colors brighter.",
        "What is confusing about this flow, and what should Base44 upgrade first?",
        "Ignore the screenshot.",
        "Write a poem about dashboards.",
      ],
      answerIndex: 1,
      explanation:
        "Screenshots help ChatGPT critique the real app flow and generate specific upgrade prompts.",
    },
    {
      id: "q20",
      prompt:
        "Before asking for upgrades, why ask ChatGPT to explain the program simply?",
      options: [
        "To expose whether the program story is clear or still confusing.",
        "To make the report longer.",
        "To avoid using the Google Doc.",
        "To replace every team decision.",
      ],
      answerIndex: 0,
      explanation:
        "A simple explanation reveals gaps in audience, promise, problem, and transformation.",
    },
    {
      id: "q21",
      prompt:
        "Which Day 1 activity is strongest?",
      options: [
        "Read a paragraph and click next.",
        "Diagnose your starting point, submit an intake, and get matched to resources.",
        "Watch a random video with no question.",
        "Choose a color theme.",
      ],
      answerIndex: 1,
      explanation:
        "Strong activities ask participants to act and produce useful program data.",
    },
    {
      id: "q22",
      prompt:
        "Which data point best proves transformation?",
      options: [
        "Button color.",
        "Before/after confidence, completed activities, reflections, submissions, and final showcase quality.",
        "Number of browser tabs open.",
        "How many icons are on the page.",
      ],
      answerIndex: 1,
      explanation:
        "Transformation needs evidence of change, completion, learning, or outcomes.",
    },
    {
      id: "q23",
      prompt:
        "A city program manager opens the organizer dashboard. What should they see first?",
      options: [
        "A random welcome quote.",
        "Signups, progress, submissions, blockers, partner usage, and impact metrics.",
        "Only the student company's logo.",
        "A blank page until the final day.",
      ],
      answerIndex: 1,
      explanation:
        "Demand managers need operational and impact visibility.",
    },
    {
      id: "q24",
      prompt:
        "A partner dashboard is weak if it only shows what?",
      options: [
        "Their role, resources, engagement, and ROI signals.",
        "A generic thank-you message with no role or value.",
        "Which activity they support.",
        "How participants used their resource.",
      ],
      answerIndex: 1,
      explanation:
        "Partners need to see why their participation matters and what value they receive.",
    },
    {
      id: "q25",
      prompt:
        "The final opportunity proposal should focus on what?",
      options: [
        "Only screenshots.",
        "The opportunity, department fit, partner model, app role, activities, data, impact, and next iteration.",
        "Only the app URL.",
        "Only AI tool names.",
      ],
      answerIndex: 1,
      explanation:
        "The proposal ties research, program design, collaborators, app evidence, and funding logic together.",
    },
    {
      id: "q26",
      prompt:
        "Students loved AI game tools. When should those tools influence the program app?",
      options: [
        "When they make an activity more interactive and connected to the transformation.",
        "Whenever a tool looks fun, even if unrelated.",
        "Only after deleting the program research.",
        "Never, because games cannot teach anything.",
      ],
      answerIndex: 0,
      explanation:
        "Creative tools are valuable when they support learning, action, and outcomes.",
    },
    {
      id: "q27",
      prompt:
        "Which Three.js idea best fits a career pathway program?",
      options: [
        "A 3D pathway map where students unlock stages by completing activities.",
        "A spinning cube that does nothing.",
        "A 3D logo that hides the form.",
        "A slow animation that blocks mobile users.",
      ],
      answerIndex: 0,
      explanation:
        "Three.js should make the learning journey clearer or more engaging, not just decorative.",
    },
    {
      id: "q28",
      prompt:
        "A team wants an interactive partner ecosystem map. Which package direction fits best?",
      options: [
        "React Flow or a graph/network visualization.",
        "A PDF reader.",
        "A password manager.",
        "A calendar only.",
      ],
      answerIndex: 0,
      explanation:
        "Flow and graph tools are good fits for visualizing systems, partners, and relationships.",
    },
    {
      id: "q29",
      prompt:
        "Why research award-winning programs before the final proposal?",
      options: [
        "To copy them exactly.",
        "To find proven patterns, activities, metrics, and partner models to adapt.",
        "To avoid local context.",
        "To replace the team app.",
      ],
      answerIndex: 1,
      explanation:
        "Strong examples help teams improve without copying.",
    },
    {
      id: "q30",
      prompt:
        "What is the Google Doc's most important role now?",
      options: [
        "A place to dump random text.",
        "The evidence hub: budget research, ChatGPT reasoning, partner notes, screenshots, links, and proposal draft.",
        "A replacement for the app.",
        "A place only the project manager can understand.",
      ],
      answerIndex: 1,
      explanation:
        "The Google Doc preserves the context needed to build a credible proposal.",
    },
    {
      id: "q31",
      prompt:
        "A funding reviewer asks, 'Why this program?' What should your answer use first?",
      options: [
        "A personal guess.",
        "Department priority, budget signal, local pain point, and target audience evidence.",
        "The app's color palette.",
        "The fact that Base44 published it.",
      ],
      answerIndex: 1,
      explanation:
        "Funding logic starts with evidence of real demand and fit.",
    },
    {
      id: "q32",
      prompt:
        "Who is a demand manager in this course?",
      options: [
        "Someone who owns or manages the problem, priority, funding, program, or audience need.",
        "Anyone who likes the app.",
        "Only the student developer.",
        "A random website visitor.",
      ],
      answerIndex: 0,
      explanation:
        "Demand managers are stakeholders responsible for the problem or desired outcome.",
    },
    {
      id: "q33",
      prompt:
        "Who counts as a collaborator?",
      options: [
        "Only city council.",
        "Businesses, nonprofits, mentors, venues, service providers, and partners who help deliver the program.",
        "Only the person who wrote the prompt.",
        "Only Base44.",
      ],
      answerIndex: 1,
      explanation:
        "Collaborators provide resources, services, expertise, access, or credibility.",
    },
    {
      id: "q34",
      prompt:
        "Which prompt will probably produce the best Base44 update?",
      options: [
        "Make it better.",
        "Using our screenshots, program goal, target audience, partner roles, and missing metrics, improve the Day 2 activity flow.",
        "Add cool stuff.",
        "Change everything.",
      ],
      answerIndex: 1,
      explanation:
        "Specific context and a focused target produce better app changes.",
    },
    {
      id: "q35",
      prompt:
        "A weak prompt usually fails because it lacks what?",
      options: [
        "Context, audience, goal, constraints, source evidence, and desired output.",
        "Capital letters.",
        "Emoji.",
        "A long app name.",
      ],
      answerIndex: 0,
      explanation:
        "Prompt quality depends on context and clarity, not decoration.",
    },
    {
      id: "q36",
      prompt:
        "The app looks good but feels generic. What is the best fix?",
      options: [
        "Add more gradients.",
        "Reconnect the copy, activities, dashboards, and data to the specific department, partners, and transformation.",
        "Hide the activities.",
        "Delete the research.",
      ],
      answerIndex: 1,
      explanation:
        "Generic apps become credible when they reflect the exact local context and program mechanics.",
    },
    {
      id: "q37",
      prompt:
        "Which loop best matches today's product workflow?",
      options: [
        "Publish -> ignore feedback -> stop.",
        "Publish -> test -> screenshot -> ask ChatGPT -> prompt Base44 -> publish again.",
        "Research -> never build.",
        "Build -> never publish.",
      ],
      answerIndex: 1,
      explanation:
        "Iteration means testing, reasoning, improving, and publishing again.",
    },
    {
      id: "q38",
      prompt:
        "SAFE U Career Night wants to impress Public Safety leaders. Which landing page claim is strongest?",
      options: [
        "This app is cool.",
        "This 3-day program helps youth explore public safety careers, connect with local mentors, submit career plans, and gives organizers impact data.",
        "Everyone should join because it is fun.",
        "We used AI tools.",
      ],
      answerIndex: 1,
      explanation:
        "The strongest claim links audience, activity, partners, and measurable value.",
    },
    {
      id: "q39",
      prompt:
        "Funding people mainly need to believe what?",
      options: [
        "The team used the newest AI tool.",
        "The program can produce the transformation it promises and measure evidence of that change.",
        "The app has the most pages.",
        "The subdomain is short.",
      ],
      answerIndex: 1,
      explanation:
        "Funding decisions depend on credible outcomes, fit, and evidence.",
    },
    {
      id: "q40",
      prompt:
        "A speaker teaches networking. How should the app reflect that lesson?",
      options: [
        "Add a networking activity, mentor match, reflection, contact plan, or partner resource tied to that concept.",
        "Add a random quiz about colors.",
        "Ignore the speaker because the app is already published.",
        "Only write 'networking matters' on the page.",
      ],
      answerIndex: 0,
      explanation:
        "Speaker concepts should become actions, submissions, and progress inside the app.",
    },
    {
      id: "q41",
      prompt:
        "Which participant path feels most like a transformation?",
      options: [
        "Login -> read -> leave.",
        "Intake -> Day 1 discovery -> Day 2 practice -> Day 3 showcase -> reflection/report.",
        "Landing page -> logo -> logout.",
        "Dashboard -> blank page -> final score.",
      ],
      answerIndex: 1,
      explanation:
        "A transformation moves the participant through stages of action and evidence.",
    },
    {
      id: "q42",
      prompt:
        "What makes a final showcase useful?",
      options: [
        "It gives participants an artifact or pitch that proves what they learned or created.",
        "It is hidden from organizers.",
        "It has no connection to the program promise.",
        "It only asks for a name.",
      ],
      answerIndex: 0,
      explanation:
        "The showcase should prove the participant reached the intended outcome.",
    },
    {
      id: "q43",
      prompt:
        "ChatGPT gives a confident answer about a department. What should you do before trusting it?",
      options: [
        "Check the source document, city site, or research notes and save the evidence.",
        "Assume confidence means accuracy.",
        "Delete the Google Doc.",
        "Publish immediately.",
      ],
      answerIndex: 0,
      explanation:
        "AI output should be checked against sources, especially for local programs and funding.",
    },
    {
      id: "q44",
      prompt:
        "A team's subdomain is `app-1234.base44.app`. What is the best improvement?",
      options: [
        "Leave it confusing.",
        "Change it to a short, readable name connected to the program.",
        "Buy a custom domain immediately for class.",
        "Stop publishing the app.",
      ],
      answerIndex: 1,
      explanation:
        "A clear Base44 subdomain makes the app easier to share and remember.",
    },
    {
      id: "q45",
      prompt:
        "Which final product best represents the full course arc?",
      options: [
        "A live app plus a proposal that connects budget demand, department priority, partners, activities, data, and impact.",
        "A game unrelated to the program.",
        "A table of departments with no next step.",
        "A published app with no explanation of who it helps.",
      ],
      answerIndex: 0,
      explanation:
        "The final product should connect research, partnerships, software, and a credible opportunity proposal.",
    },
  ] satisfies QuizQuestion[],
};

export type FinalExam = typeof finalExam;
