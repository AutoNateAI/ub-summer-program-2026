export type QuizQuestion = {
  id: string;
  prompt: string;
  options: [string, string, string, string];
  answerIndex: number;
  explanation: string;
};

export const weekendQuiz = {
  id: "weekend-checkpoint-days-1-3",
  title: "Weekend Checkpoint: Become The Plug",
  dueLabel: "Due Saturday, June 20 at 9:00 PM ET",
  points: 30,
  questions: [
    {
      id: "q01",
      prompt:
        "Which statement best captures the Day 1 shift from a normal entrepreneur mindset to an Opportunity Hunter mindset?",
      options: [
        "Start with a clever product idea, then search for people who might buy it.",
        "Start with evidence of a real problem, then trace who is responsible, funded, and positioned to solve it.",
        "Start with social media demand, then build the simplest app possible.",
        "Start with the biggest city department because large budgets always mean easy opportunities.",
      ],
      answerIndex: 1,
      explanation:
        "Opportunity Hunters begin with evidence: real problems, responsible organizations, budgets, and possible partners.",
    },
    {
      id: "q02",
      prompt:
        "Why did the class treat the city budget as more than a financial document?",
      options: [
        "Because budgets reveal priorities, responsible departments, active projects, and possible partner needs.",
        "Because budgets replace the need to talk with people in the community.",
        "Because budgets always list every vendor a city will use next year.",
        "Because budgets are mainly useful for calculating taxes.",
      ],
      answerIndex: 0,
      explanation:
        "The budget works like a map of priorities, departments, spending areas, projects, and future opportunities.",
    },
    {
      id: "q03",
      prompt:
        "In the program framework, what does demand mean?",
      options: [
        "The number of students who like a product idea.",
        "Problems, needs, pressure, complaints, public priorities, and goals that create a reason to act.",
        "A vendor directory that lists companies by category.",
        "The final software dashboard built in Lovable.dev.",
      ],
      answerIndex: 1,
      explanation:
        "Demand is the public need or pressure that makes a problem worth solving.",
    },
    {
      id: "q04",
      prompt:
        "What is the strongest reason a funded problem is easier to support than a random idea?",
      options: [
        "The solution is already guaranteed to work.",
        "The need has already been recognized, leaders care, and resources may already be moving toward it.",
        "It removes the need for research.",
        "It means the city will automatically pay any student team.",
      ],
      answerIndex: 1,
      explanation:
        "A funded problem has evidence of recognition, attention, and resources, which reduces guesswork.",
    },
    {
      id: "q05",
      prompt:
        "Which flow best matches the Day 1 opportunity logic?",
      options: [
        "Logo -> website -> pitch -> city budget -> public demand",
        "Community need -> public discussion -> budget -> departments -> programs -> organizations -> impact",
        "Business name -> Chamber listing -> sales page -> city council",
        "Software dashboard -> AI prompt -> department mission -> community need",
      ],
      answerIndex: 1,
      explanation:
        "The class flow moved from community need and discussion into budgets, departments, programs, organizations, and impact.",
    },
    {
      id: "q06",
      prompt:
        "When using ChatGPT with a city budget, what made the prompt more useful?",
      options: [
        "Asking for a short summary only.",
        "Telling ChatGPT the exact table structure, columns, and strategic lens you needed.",
        "Avoiding the source document so ChatGPT could be more creative.",
        "Only asking for department names and nothing else.",
      ],
      answerIndex: 1,
      explanation:
        "Strong prompts define the role, desired structure, columns, and analysis goal.",
    },
    {
      id: "q07",
      prompt:
        "What did Day 2 add above the city-level department research?",
      options: [
        "The idea that federal and state systems influence local funding, priorities, programs, and vendors.",
        "The idea that local budgets are unrelated to federal departments.",
        "The idea that students should ignore politics and focus only on app design.",
        "The idea that Chamber businesses control city council votes.",
      ],
      answerIndex: 0,
      explanation:
        "Day 2 zoomed out to trace money from federal departments into states, local departments, organizations, vendors, and community impact.",
    },
    {
      id: "q08",
      prompt:
        "In Day 2 language, why was money described as energy?",
      options: [
        "Because it is only useful when it is converted into programs, projects, services, and action.",
        "Because it is impossible to track once it leaves Washington.",
        "Because it belongs only to elected officials.",
        "Because every grant has the same purpose.",
      ],
      answerIndex: 0,
      explanation:
        "Money becomes energy when departments and organizations use it to act on priorities.",
    },
    {
      id: "q09",
      prompt:
        "Which option best explains why city council matters in the class framework?",
      options: [
        "City council is where every software tool is approved.",
        "City council connects public demand to power, votes, priorities, and budget decisions.",
        "City council replaces department directors and staff.",
        "City council creates Chamber directories.",
      ],
      answerIndex: 1,
      explanation:
        "City council is a key decision layer where public demand can become funded action.",
    },
    {
      id: "q10",
      prompt:
        "What is the role of departments in the money-flow framework?",
      options: [
        "They are random labels in a budget.",
        "They organize specific types of public demand and direct resources into programs and projects.",
        "They only exist at the federal level.",
        "They are private businesses that sell services to students.",
      ],
      answerIndex: 1,
      explanation:
        "Departments manage categories of community demand and organize spending, programs, staff, and outcomes.",
    },
    {
      id: "q11",
      prompt:
        "Why did students copy the full ChatGPT research conversation into Google Docs?",
      options: [
        "So teammates could see the process, evidence, prompts, and reasoning behind the final table.",
        "So the document would look longer.",
        "So the designer would never need to read the department table.",
        "So the developer could skip building the tool.",
      ],
      answerIndex: 0,
      explanation:
        "Good teams preserve shared context and transparency, not just final answers.",
    },
    {
      id: "q12",
      prompt:
        "Which Google Doc tab setup best matches the workflow students practiced?",
      options: [
        "One untitled page with all research, design, and links mixed together.",
        "Separate tabs for ChatGPT research, department tables, Stitch design, and Lovable website work.",
        "Only a tab for the final pitch.",
        "A tab for each student's personal notes with no shared team structure.",
      ],
      answerIndex: 1,
      explanation:
        "The team document used separate tabs so research, tables, design prompts, prototypes, and development links had a clear home.",
    },
    {
      id: "q13",
      prompt:
        "What was the deeper purpose of turning the department table into a Stitch prototype?",
      options: [
        "To make the research visible, organized, and easier to pitch or understand.",
        "To replace all research with a pretty page.",
        "To prove that design is more important than evidence.",
        "To submit a finished commercial website on Day 2.",
      ],
      answerIndex: 0,
      explanation:
        "Stitch helped transform research into a visible opportunity report concept that teams could share and inspect.",
    },
    {
      id: "q14",
      prompt:
        "Which team role was most responsible for using ChatGPT to extract and structure information from the budget?",
      options: ["Developer", "Designer", "Researcher", "City council member"],
      answerIndex: 2,
      explanation:
        "The researcher uses ChatGPT and source documents to structure the intelligence.",
    },
    {
      id: "q15",
      prompt:
        "Which team role was most responsible for controlling the Google Doc, tabs, links, and team organization?",
      options: ["Project manager", "Designer", "Developer", "Vendor"],
      answerIndex: 0,
      explanation:
        "The project manager keeps the workspace organized and makes sure teammates stay connected to the right artifacts.",
    },
    {
      id: "q16",
      prompt:
        "Day 3 added the Chamber of Commerce directory mainly because it provides what side of the market?",
      options: [
        "Demand, because it lists public complaints.",
        "Supply, because it lists businesses, nonprofits, venues, services, and organizations that can help deliver solutions.",
        "Votes, because it controls city council agendas.",
        "Budgets, because it replaces the city budget document.",
      ],
      answerIndex: 1,
      explanation:
        "The Chamber directory adds the supply side: organizations that can help fulfill a program.",
    },
    {
      id: "q17",
      prompt:
        "What makes a student team's company the fourth partner in the Day 3 model?",
      options: [
        "It provides the custom software tool that helps the program run, track, explain, and pitch better.",
        "It owns the city budget.",
        "It replaces all Chamber partners.",
        "It only makes a logo for the project.",
      ],
      answerIndex: 0,
      explanation:
        "The student company contributes practical software that supports participants and organizers.",
    },
    {
      id: "q18",
      prompt:
        "Which question best reflects the partnership model where everyone eats?",
      options: [
        "How can we get one partner to do all the work for free?",
        "Why would each partner want to be involved, and what ROI does each one receive?",
        "How can we avoid measuring outcomes?",
        "Which partner has the biggest building?",
      ],
      answerIndex: 1,
      explanation:
        "A strong partnership explains the return for every partner: recognition, traffic, sales, recruiting, impact, data, or mission value.",
    },
    {
      id: "q19",
      prompt:
        "Which set best represents possible partner ROI goals from Day 3?",
      options: [
        "Recognition, traffic, sales, recruiting, impact, and data.",
        "Only money and nothing else.",
        "Only social media likes.",
        "Only free labor from students.",
      ],
      answerIndex: 0,
      explanation:
        "ROI can include visibility, customers, recruiting access, mission impact, data, and more.",
    },
    {
      id: "q20",
      prompt:
        "In the 10-minute Program Architecture Sprint, what should happen before the developer opens Lovable.dev?",
      options: [
        "The team should already have a clear program concept, partners, ROI logic, target audience, and software tool idea.",
        "The developer should start coding without context.",
        "The designer should delete the research tab.",
        "The team should pick colors before knowing the problem.",
      ],
      answerIndex: 0,
      explanation:
        "Lovable works better when the team has already architected the program and tool with clear context.",
    },
    {
      id: "q21",
      prompt:
        "What is the best use of Lovable.dev in this program?",
      options: [
        "Building a practical dashboard or app that makes the proposed program easier to run.",
        "Replacing the Chamber directory.",
        "Writing the city budget.",
        "Voting on city council decisions.",
      ],
      answerIndex: 0,
      explanation:
        "Lovable turns the program concept into a usable software tool or dashboard.",
    },
    {
      id: "q22",
      prompt:
        "Which software tool idea best fits the Day 3 logic?",
      options: [
        "A random game unrelated to the audience or program.",
        "A participant sign-up, check-in, resource matching, progress tracking, or impact dashboard tied to the exact program.",
        "A blank website with only a slogan.",
        "A private spreadsheet no partner can use.",
      ],
      answerIndex: 1,
      explanation:
        "The software should be practical and contextual to the program, audience, partners, and outcomes.",
    },
    {
      id: "q23",
      prompt:
        "Which statement best describes becoming the plug?",
      options: [
        "Being the person who connects demand, money, decision-makers, suppliers, partners, and tools into real opportunities.",
        "Being the person who only has the best app idea.",
        "Being the person who avoids public data.",
        "Being the person who works alone without partners.",
      ],
      answerIndex: 0,
      explanation:
        "The plug understands the system and connects people, resources, and opportunities.",
    },
    {
      id: "q24",
      prompt:
        "What should students ask after identifying a local department with a budget?",
      options: [
        "What larger federal or state priority could this connect to, and what organizations might help carry out the work?",
        "How can we ignore all outside context?",
        "Can we assume the first program we see is the only opportunity?",
        "Can we skip evidence and go straight to branding?",
      ],
      answerIndex: 0,
      explanation:
        "Day 2 pushed students to connect local departments to larger funding and policy systems.",
    },
    {
      id: "q25",
      prompt:
        "What is the most important reason to include department directors and staff in the opportunity map?",
      options: [
        "People control decisions, implementation, priorities, and access at every level.",
        "Names make the table look official even if they are irrelevant.",
        "Staff are always the final vendors.",
        "Directors replace the need for partner research.",
      ],
      answerIndex: 0,
      explanation:
        "People matter because decisions, programs, and implementation move through people.",
    },
    {
      id: "q26",
      prompt:
        "Which prompt strategy is strongest when asking AI to create a program from Chamber members?",
      options: [
        "Paste the Chamber link only and say, 'make something cool.'",
        "Provide the department demand, opportunity gap, target audience, Chamber members, required partner count, ROI goals, and requested program options.",
        "Ask for one idea with no explanation.",
        "Ask AI to ignore the budget research.",
      ],
      answerIndex: 1,
      explanation:
        "The best prompt gives AI the demand context, supply context, constraints, and desired output structure.",
    },
    {
      id: "q27",
      prompt:
        "What is the main difference between a vendor and a department in this framework?",
      options: [
        "A department directs public priorities and resources; a vendor is a specialist paid to support work.",
        "A vendor votes on the city budget; a department sells products.",
        "They are the same thing.",
        "Vendors only exist federally.",
      ],
      answerIndex: 0,
      explanation:
        "Departments organize public work; vendors provide specific services or support.",
    },
    {
      id: "q28",
      prompt:
        "Why does the class care about both current opportunities and historical spending?",
      options: [
        "Historical spending shows what a department has funded before, which gives signal about priorities, patterns, vendors, and decision context.",
        "Historical spending proves nothing can change.",
        "Current opportunities are never useful.",
        "Historical spending replaces the Chamber directory.",
      ],
      answerIndex: 0,
      explanation:
        "Past spending gives context for what departments fund and who has been involved.",
    },
    {
      id: "q29",
      prompt:
        "Which team behavior best matches the product-team mindset introduced in class?",
      options: [
        "Everyone works in separate documents and never shares links.",
        "Research, project management, design, and development roles each use their tools while keeping shared context in the team workspace.",
        "Only the developer matters because software is the final output.",
        "The team skips research once the design looks good.",
      ],
      answerIndex: 1,
      explanation:
        "The team acts like a product team by coordinating roles, tools, evidence, and artifacts.",
    },
    {
      id: "q30",
      prompt:
        "Which final report direction best reflects the first three days?",
      options: [
        "A report that names a problem, traces money and decision-makers, identifies supply-side partners, explains partner ROI, and proposes a useful software-supported program.",
        "A report with only a logo and a slogan.",
        "A report that lists departments without explaining demand or partners.",
        "A report that copies AI output without evidence or team structure.",
      ],
      answerIndex: 0,
      explanation:
        "The work should connect demand, money, people, partners, ROI, and a practical software tool.",
    },
  ] satisfies QuizQuestion[],
};

export type WeekendQuiz = typeof weekendQuiz;
