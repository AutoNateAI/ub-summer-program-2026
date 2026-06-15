"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Download,
  FileText,
  Lightbulb,
  Link as LinkIcon,
  Play,
  Send,
  Sparkles,
  Target,
} from "lucide-react";

type CourseSlideData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  note: string;
};

export type CourseDayData = {
  id: string;
  label: string;
  date: string;
  module: string;
  title: string;
  subtitle: string;
  slideTitle: string;
  slideKicker: string;
  duration: string;
  lectureSummary: string;
  lectureBullets: string[];
  studioTitle: string;
  studioSteps: string[];
  homeworkTitle: string;
  homeworkPrompt: string;
  homeworkChecklist: string[];
  aiInsight: string;
  resources: Array<{ title: string; meta: string }>;
  keyTerms: string[];
  deliverable: string;
};

const dayDeckIntros: Record<string, { question: string; frame: string; action: string }> = {
  "day-1": {
    question: "Where do real community opportunities come from?",
    frame:
      "Students are learning to see a city as a system of public decisions, organizations, programs, budgets, and citizens.",
    action: "Look for signals that repeat across sources instead of chasing the first interesting link.",
  },
  "day-2": {
    question: "Which professional role do I want to practice?",
    frame:
      "The class shifts from school tasks into real job functions used by AI-enabled innovation teams.",
    action: "Try each role's toolchain, then choose the role you want to be known for in your company.",
  },
  "day-3": {
    question: "Which opportunities are strong enough to become companies?",
    frame:
      "Individual proposals become public pitches, and the strongest ideas become Community Innovation Companies.",
    action: "Listen for evidence, urgency, feasibility, partner potential, and clear personal ownership.",
  },
  "day-4": {
    question: "How do professionals create opportunity in public?",
    frame:
      "LinkedIn becomes the public operating system for the companies, especially for marketing and outreach.",
    action: "Build profiles, pages, groups, and first posts that make the company visible and credible.",
  },
  "day-5": {
    question: "How does evidence become a real program?",
    frame:
      "The company turns research into a program model with a defined audience, activities, partners, and outcomes.",
    action: "Use the Program Canvas to connect every activity to the problem and the intended impact.",
  },
  "day-6": {
    question: "What does the solution look and feel like?",
    frame:
      "Design and development work starts with user flows, screens, and a small MVP that students can actually ship.",
    action: "Make the idea visible before trying to make it perfect.",
  },
  "day-7": {
    question: "Can people see, test, and understand what we built?",
    frame:
      "Companies move from planning into production, outreach, testing, and public documentation.",
    action: "Ship a demoable version, post progress, and engage people in the target audience.",
  },
  "day-8": {
    question: "Can we explain our impact to real community stakeholders?",
    frame:
      "The pitch shows the problem, research, program, tool, marketing strategy, and community impact.",
    action: "Treat questions as useful market feedback, not as failure.",
  },
  "day-9": {
    question: "What did I become capable of doing?",
    frame:
      "The final day makes individual growth visible through reflection, confidence, and portfolio storytelling.",
    action: "Tell a specific story about your role, decisions, challenges, and next build.",
  },
};

function buildSlideDeck(day: CourseDayData): CourseSlideData[] {
  const intro = dayDeckIntros[day.id];

  return [
    {
      eyebrow: `${day.module} / ${day.date}`,
      title: `${day.label}: ${day.title}`,
      subtitle: day.slideKicker,
      bullets: [day.subtitle],
      note: "Open with the big idea and make the day feel connected to the final Community Impact Project.",
    },
    {
      eyebrow: "Essential Question",
      title: intro.question,
      subtitle: intro.frame,
      bullets: [intro.action],
      note: "Use this as the question students should be able to answer before they leave.",
    },
    {
      eyebrow: "Core Ideas",
      title: "What students need to understand",
      subtitle: day.duration,
      bullets: day.lectureBullets,
      note: "Keep this section tight. The lecture should set up the studio work, not replace it.",
    },
    {
      eyebrow: "Studio Sprint",
      title: day.studioTitle,
      subtitle: "The work happens inside the portal and the team's toolchain.",
      bullets: day.studioSteps,
      note: "Move quickly from explanation to doing. Circulate like an incubator director and check each company's progress.",
    },
    {
      eyebrow: "AI Workflow",
      title: "How AI should help today",
      subtitle: day.aiInsight,
      bullets: [
        "Use AI to clarify, critique, summarize, draft, or test the work.",
        "Verify claims against real sources before putting them into a proposal, post, or pitch.",
      ],
      note: "Reinforce that AI is a workflow partner. Students still own judgment, evidence, and decisions.",
    },
    {
      eyebrow: "Submission",
      title: day.homeworkTitle,
      subtitle: day.homeworkPrompt,
      bullets: day.homeworkChecklist,
      note: "Close by making the homework concrete and showing exactly what should be submitted in the portal.",
    },
    {
      eyebrow: "Exit Outcome",
      title: day.deliverable,
      subtitle: "This artifact moves the company closer to the final showcase.",
      bullets: day.resources.map((resource) => resource.title),
      note: "Use the resources list as the final pointer before students start work or leave for the day.",
    },
  ];
}

export const courseDays: CourseDayData[] = [
  {
    id: "day-1",
    label: "Day 1",
    date: "June 16",
    module: "Module 01",
    title: "Understanding Communities & Opportunity",
    subtitle:
      "Students learn how data, budgets, organizations, programs, and AI connect inside a city system before they begin looking for real Grand Rapids problems.",
    slideTitle: "The DNA of a City",
    slideKicker: "Data -> Knowledge -> Programs -> Community Change",
    duration: "15 min lecture + guided discovery lab",
    lectureSummary:
      "This session introduces the civic system as a flow of money, data, decisions, organizations, and services. Students see how federal, state, county, city, organization, program, and citizen layers all create data that can reveal opportunity.",
    lectureBullets: [
      "Define data, knowledge, programs, budgets, AI, and community opportunity.",
      "Map how money and initiatives move from government systems into local organizations.",
      "Feel the information overload by exploring public sources before the portal organizes them.",
    ],
    studioTitle: "Community Source Scan",
    studioSteps: [
      "Open city, school board, chamber, nonprofit, foundation, public meeting, and workforce sources.",
      "Capture one issue that appears more than once across sources.",
      "Find two organizations already connected to that issue.",
      "Save one piece of evidence that proves the issue is real.",
    ],
    homeworkTitle: "Individual Community Issue Discovery",
    homeworkPrompt:
      "Submit one community issue, two connected organizations, and one evidence source that shows why the issue matters.",
    homeworkChecklist: [
      "One clear Grand Rapids community issue",
      "Two organizations connected to the issue",
      "One evidence source or public signal",
    ],
    aiInsight:
      "Use AI only after you inspect the source yourself. Ask it to summarize patterns, not to invent the problem for you.",
    resources: [
      { title: "Grand Rapids City Website", meta: "Public data source" },
      { title: "Board of Education Materials", meta: "School system signal" },
      { title: "Grand Rapids Chamber Directory", meta: "Partner discovery" },
    ],
    keyTerms: ["Data", "Knowledge", "Budget", "Program", "Public Signal"],
    deliverable: "Individual issue discovery submitted in the portal.",
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "June 17",
    module: "Module 02",
    title: "Roles & Tools Day",
    subtitle:
      "Students explore the real professional roles inside a modern AI-enabled team and choose the role they want to practice.",
    slideTitle: "Modern Teams Build With Toolchains",
    slideKicker: "Research -> Design -> Development -> Marketing",
    duration: "Heavy demo day + role selection lab",
    lectureSummary:
      "Day 2 reframes the program around jobs that exist in real organizations. Research leads use ChatGPT, Google Search, and the portal. Design leads use Stitch, Canva, and ChatGPT. Developer leads use Lovable, Replit, GitHub, and ChatGPT. Marketing leads use LinkedIn as the primary channel with ChatGPT and image tools as support.",
    lectureBullets: [
      "Research Lead: finds evidence, organizations, funding, and opportunity signals.",
      "Design Lead: turns research into screens, visuals, user flows, and prototypes.",
      "Developer Lead: turns designs into a working MVP that can be published.",
      "Marketing Lead: builds the public story, LinkedIn presence, and outreach strategy.",
    ],
    studioTitle: "Role Tool Rotation",
    studioSteps: [
      "Run a ChatGPT research workflow on yesterday's community issue.",
      "Prompt a Stitch-style interface for a possible tool or portal.",
      "Review how GitHub Pages can publish a simple student-built MVP.",
      "Draft the first LinkedIn positioning line for a future company page.",
    ],
    homeworkTitle: "Opportunity Proposal + Preferred Role",
    homeworkPrompt:
      "Build your individual Opportunity Proposal: problem, organizations, evidence, potential program, potential tool, and preferred role.",
    homeworkChecklist: [
      "Problem and evidence",
      "Organizations and potential community partners",
      "Program idea and tool idea",
      "First and second choice role",
    ],
    aiInsight:
      "Your proposal should sound like a founder spotting a real opportunity, not a student filling in a worksheet.",
    resources: [
      { title: "Role Tool Matrix", meta: "Research, design, build, market" },
      { title: "Opportunity Proposal Template", meta: "Portal assignment" },
      { title: "Stitch Prompt Starter", meta: "Design lead workflow" },
    ],
    keyTerms: ["Research Lead", "Design Lead", "Developer Lead", "Marketing Lead", "MVP"],
    deliverable: "Individual Opportunity Proposal ready for pitch day.",
  },
  {
    id: "day-3",
    label: "Day 3",
    date: "June 18",
    module: "Module 03",
    title: "Opportunity Summit",
    subtitle:
      "Students present individual proposals, vote on the strongest opportunities, and form Community Innovation Companies.",
    slideTitle: "From Class Ideas to Companies",
    slideKicker: "Pitch -> Vote -> Form -> Commit",
    duration: "3 minute pitches + company formation",
    lectureSummary:
      "Day 3 is the Day 2 homework coming alive. Each student presents their opportunity proposal, the class votes, top projects survive, and teams become Community Innovation Companies with roles and portal workspaces.",
    lectureBullets: [
      "Each pitch answers: what problem did you find, who is affected, and what evidence supports it?",
      "The class votes for opportunities with evidence, urgency, partner potential, and buildable tool ideas.",
      "Companies form around the strongest projects with research, design, developer, and marketing responsibilities.",
    ],
    studioTitle: "Company Formation Lab",
    studioSteps: [
      "Deliver a 3 minute individual opportunity pitch.",
      "Vote on the strongest project opportunities.",
      "Join or form a Community Innovation Company.",
      "Name the company, choose a mission, and assign initial roles.",
    ],
    homeworkTitle: "Company Opportunity Report",
    homeworkPrompt:
      "Work with your company over the weekend to organize roles and produce the first Company Opportunity Report.",
    homeworkChecklist: [
      "Problem statement and evidence",
      "Organizations, existing programs, and possible partners",
      "Initial program concept and initial tool concept",
      "Company name, mission, and role assignments",
    ],
    aiInsight:
      "After today, the incubator starts. The instructor serves as portfolio manager across all companies and checks research, build, design, marketing, and community engagement status.",
    resources: [
      { title: "Pitch Scorecard", meta: "Evidence + impact + feasibility" },
      { title: "Company Workspace Setup", meta: "Portal checklist" },
      { title: "Opportunity Report Template", meta: "Team deliverable" },
    ],
    keyTerms: ["Opportunity Summit", "Company", "Mission", "Role Fit", "Portfolio Manager"],
    deliverable: "Companies formed and weekend opportunity report assigned.",
  },
  {
    id: "day-4",
    label: "Day 4",
    date: "June 22",
    module: "Module 04",
    title: "Professional Network Day",
    subtitle:
      "Week 2 begins with LinkedIn, public building, and company pages so teams stop working in isolation.",
    slideTitle: "Build in Public",
    slideKicker: "Profile -> Company Page -> Group -> Outreach",
    duration: "Network lecture + LinkedIn setup studio",
    lectureSummary:
      "Students learn how professional networks create opportunity. Every student sets up a personal LinkedIn profile, every company creates a LinkedIn company page and group, and the marketing lead begins owning the company's public presence.",
    lectureBullets: [
      "LinkedIn becomes the marketer's primary tool; ChatGPT, Canva, and image generation support the content system.",
      "Every company should publish at least three posts per day: research insight, team update, partner highlight, prototype screenshot, or budget finding.",
      "Researchers feed verified evidence to marketers so public content stays grounded in real community data.",
    ],
    studioTitle: "LinkedIn Launch Lab",
    studioSteps: [
      "Optimize each student's personal LinkedIn profile.",
      "Create the company LinkedIn page and company group.",
      "Connect with classmates, teacher, and relevant community contacts.",
      "Draft the first three company story angles from the opportunity report.",
    ],
    homeworkTitle: "Three LinkedIn Posts",
    homeworkPrompt:
      "Publish three LinkedIn posts from your personal account and submit the links: your role, your company, and the community issue you are solving. Tag the instructor in the first comment.",
    homeworkChecklist: [
      "Post 1: my role in the company",
      "Post 2: my company and mission",
      "Post 3: the community issue we are solving",
      "Everyone connected to the company page and group",
    ],
    aiInsight:
      "The loop stays closed when marketing comes from research. Do not post generic hype; turn evidence into public learning.",
    resources: [
      { title: "LinkedIn Profile Checklist", meta: "Personal brand setup" },
      { title: "Company Page Checklist", meta: "Marketing lead setup" },
      { title: "Three-Post Starter Pack", meta: "Daily content workflow" },
    ],
    keyTerms: ["Professional Network", "Company Page", "Company Group", "Content Calendar", "Market Matrix"],
    deliverable: "LinkedIn profiles, company page, group, and first posts live.",
  },
  {
    id: "day-5",
    label: "Day 5",
    date: "June 23",
    module: "Module 05",
    title: "Build Day 1: Research & Program Architecture",
    subtitle:
      "Companies turn their opportunity report into a sharper program model while role-specific coaching starts replacing heavy lectures.",
    slideTitle: "Evidence Becomes Program Logic",
    slideKicker: "Problem -> Audience -> Activities -> Impact",
    duration: "10 min tips + company work sprint",
    lectureSummary:
      "This is a build day. The instructor gives short tips for research quality, program design, and project momentum, then companies work. Research leads deepen evidence, program thinkers define activities, and marketers publish updates from real findings.",
    lectureBullets: [
      "Research leads verify the problem, affected audience, organizations, existing programs, and funding signals.",
      "Companies draft a Program Canvas with problem, audience, activities, expected impact, and partners.",
      "Marketing leads publish three evidence-based LinkedIn updates from research findings.",
    ],
    studioTitle: "Program Canvas Sprint",
    studioSteps: [
      "Refine the problem statement using verified evidence.",
      "Define the audience and the change the program should create.",
      "List activities, partners, resources, and expected outcomes.",
      "Convert at least one research insight into public LinkedIn content.",
    ],
    homeworkTitle: "Team Program Canvas Update",
    homeworkPrompt:
      "Submit the team's Program Canvas and links to the day's LinkedIn updates.",
    homeworkChecklist: [
      "Problem, audience, activities, outcomes",
      "Partner and organization notes",
      "Three company or student LinkedIn updates",
      "One instructor question or blocker",
    ],
    aiInsight:
      "Ask AI to critique your program logic: does each activity connect to the problem and measurable impact?",
    resources: [
      { title: "Program Canvas", meta: "Team planning tool" },
      { title: "Research Verification Checklist", meta: "Evidence quality" },
      { title: "Daily LinkedIn Update Prompts", meta: "Marketing workflow" },
    ],
    keyTerms: ["Program Canvas", "Audience", "Activities", "Outcomes", "Evidence"],
    deliverable: "A credible program model backed by research.",
  },
  {
    id: "day-6",
    label: "Day 6",
    date: "June 24",
    module: "Module 06",
    title: "Build Day 2: Design & Prototype",
    subtitle:
      "Design and developer leads translate the program model into screens, flows, and the first working prototype plan.",
    slideTitle: "Make the Idea Visible",
    slideKicker: "User Flow -> Interface -> Prototype",
    duration: "10 min design/dev tips + sprint",
    lectureSummary:
      "Companies focus on user-centered design and build planning. Design leads use Stitch-style prompting, Canva, or slides to create high-fidelity screens while developer leads define the smallest useful MVP that can be deployed.",
    lectureBullets: [
      "Start with the user: what do they need to see, click, understand, and submit?",
      "Use Stitch prompts to turn research into interface concepts.",
      "Define a small MVP: landing page, dashboard, intake form, chatbot, resource navigator, or program portal.",
    ],
    studioTitle: "Prototype Studio",
    studioSteps: [
      "Create a user flow for the primary audience.",
      "Build at least three high-fidelity screens or prototype sections.",
      "Define MVP features, data needed, and deployment path.",
      "Publish a LinkedIn update with a prototype screenshot or design insight.",
    ],
    homeworkTitle: "Prototype Progress Submission",
    homeworkPrompt:
      "Submit prototype links or screenshots, MVP feature list, and LinkedIn update links.",
    homeworkChecklist: [
      "User flow",
      "Prototype screens or sections",
      "MVP feature list",
      "Three LinkedIn updates or one team content bundle",
    ],
    aiInsight:
      "Have AI write a user story for each screen: as a user, I need to do X so I can achieve Y.",
    resources: [
      { title: "Stitch Prompt Builder", meta: "Design workflow" },
      { title: "MVP Scope Guide", meta: "Developer workflow" },
      { title: "Prototype Review Rubric", meta: "Feedback tool" },
    ],
    keyTerms: ["User Flow", "Prototype", "MVP", "Deployment", "User Story"],
    deliverable: "Prototype direction and MVP scope ready for build.",
  },
  {
    id: "day-7",
    label: "Day 7",
    date: "June 25",
    module: "Module 07",
    title: "Build Day 3: MVP, Marketing & Outreach",
    subtitle:
      "Companies push toward something functional while marketing turns the research, design, and build progress into outreach.",
    slideTitle: "Ship Something Useful",
    slideKicker: "Build -> Test -> Post -> Reach Out",
    duration: "10 min role tips + production sprint",
    lectureSummary:
      "This day is for making visible progress. Developer leads build, design leads refine, research leads validate claims, and marketing leads run the company page, group, daily posts, and target-audience outreach through comments and direct professional engagement.",
    lectureBullets: [
      "Build the simplest functional tool that demonstrates the program idea.",
      "Create marketing assets and LinkedIn posts from real evidence and prototype progress.",
      "Use the market matrix to identify people, organizations, and conversations to engage.",
    ],
    studioTitle: "MVP + Outreach Sprint",
    studioSteps: [
      "Build or update the MVP, landing page, dashboard, or assistant concept.",
      "Test the tool against the team's primary user flow.",
      "Prepare a marketing content bundle for LinkedIn.",
      "Comment on or engage with target-audience posts using the market matrix.",
    ],
    homeworkTitle: "Build + Outreach Status",
    homeworkPrompt:
      "Submit the MVP link or build evidence, marketing assets, outreach notes, and LinkedIn update links.",
    homeworkChecklist: [
      "MVP link, screenshot, or working demo notes",
      "Marketing content bundle",
      "Outreach targets and engagement notes",
      "Three daily LinkedIn updates",
    ],
    aiInsight:
      "Use AI as a production partner: debugging, copywriting, image prompts, test cases, and sharper outreach comments.",
    resources: [
      { title: "Build Sprint Checklist", meta: "Developer workflow" },
      { title: "Market Matrix Template", meta: "Outreach workflow" },
      { title: "LinkedIn Comment Framework", meta: "Community engagement" },
    ],
    keyTerms: ["MVP", "Market Matrix", "Outreach", "Testing", "Community Engagement"],
    deliverable: "A demoable tool and public outreach trail.",
  },
  {
    id: "day-8",
    label: "Day 8",
    date: "June 29",
    module: "Module 08",
    title: "Community Impact Pitch Day",
    subtitle:
      "Companies pitch their Community Impact Proposals to invited contacts and receive real feedback.",
    slideTitle: "Pitch the Community Impact Proposal",
    slideKicker: "7 Minute Pitch + 3 Minute Q&A",
    duration: "Pitch event + feedback capture",
    lectureSummary:
      "Teams pitch to civic, research, nonprofit, and startup ecosystem contacts. The pitch is not just what they built; it explains the purpose, program, tool, marketing strategy, and community impact.",
    lectureBullets: [
      "Pitch includes problem, research, program, tool, marketing, and community impact.",
      "Each company gets seven minutes to present and three minutes for questions.",
      "Feedback is captured immediately and turned into revisions before the final reflection day.",
    ],
    studioTitle: "Live Pitch + Feedback",
    studioSteps: [
      "Deliver the seven minute Community Impact Proposal.",
      "Answer three minutes of questions from guests.",
      "Capture feedback, objections, partner interest, and next steps.",
      "Post a professional LinkedIn update thanking guests and documenting what you learned.",
    ],
    homeworkTitle: "Pitch Reflection",
    homeworkPrompt:
      "Reflect on the pitch: what worked, what did not, what feedback did you receive, and what would you improve?",
    homeworkChecklist: [
      "Pitch performance reflection",
      "Guest feedback summary",
      "Next-step revisions",
      "LinkedIn reflection post link",
    ],
    aiInsight:
      "Ask AI to turn feedback into a prioritized action list: fix now, explain better, explore later.",
    resources: [
      { title: "Community Impact Pitch Deck", meta: "7 minute structure" },
      { title: "Q&A Prep Sheet", meta: "Guest questions" },
      { title: "Feedback Capture Form", meta: "Reflection input" },
    ],
    keyTerms: ["Community Impact Proposal", "Q&A", "Stakeholder Feedback", "Partner Interest", "Pitch"],
    deliverable: "Live pitch completed and feedback captured.",
  },
  {
    id: "day-9",
    label: "Day 9",
    date: "June 30",
    module: "Module 09",
    title: "Final Reflection Showcase",
    subtitle:
      "Each student reflects on their role, confidence, AI workflow growth, and what they would build next.",
    slideTitle: "What Did We Become?",
    slideKicker: "Role -> Learning -> Confidence -> Next Build",
    duration: "3 minute student reflections",
    lectureSummary:
      "The final day shifts from what the company built to what each student learned. Students leave with a LinkedIn profile, a portfolio project, community research experience, AI workflow practice, team collaboration experience, and public speaking evidence.",
    lectureBullets: [
      "Each student gets three minutes to explain their role, contribution, and growth.",
      "Reflections cover what was difficult, how their view of AI changed, and their confidence using AI workflows with a team.",
      "The final artifact is a personal portfolio story students can use for scholarships, college applications, LinkedIn, or resumes.",
    ],
    studioTitle: "Personal Reflection Showcase",
    studioSteps: [
      "Present your three minute reflection to the class.",
      "Name your role and the work you contributed.",
      "Explain what changed in your confidence with AI and teamwork.",
      "Publish or draft a final LinkedIn reflection about the project.",
    ],
    homeworkTitle: "Final Portfolio Reflection",
    homeworkPrompt:
      "Submit your final reflection and the link to your portfolio or LinkedIn post that documents the experience.",
    homeworkChecklist: [
      "Role and contribution",
      "What you learned and what was difficult",
      "AI workflow confidence rating",
      "What you would build next",
    ],
    aiInsight:
      "Use AI to polish the story, but keep the reflection personal. The learning is in your decisions, struggles, and growth.",
    resources: [
      { title: "Final Reflection Guide", meta: "3 minute structure" },
      { title: "Portfolio Story Template", meta: "Resume and LinkedIn ready" },
      { title: "AI Confidence Rubric", meta: "Self-assessment" },
    ],
    keyTerms: ["Reflection", "Portfolio", "AI Workflow", "Public Speaking", "Professional Identity"],
    deliverable: "Final personal reflection and portfolio-ready project story.",
  },
];

type CourseDayProps = {
  day: CourseDayData;
  nextDay?: CourseDayData;
  homeworkText: string;
  savingHomework: boolean;
  onHomeworkTextChange: (value: string) => void;
  onSubmitHomework: () => void;
  onNextDay?: () => void;
};

export function CourseDay({
  day,
  nextDay,
  homeworkText,
  savingHomework,
  onHomeworkTextChange,
  onSubmitHomework,
  onNextDay,
}: CourseDayProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slides = useMemo(() => buildSlideDeck(day), [day]);
  const activeSlide = slides[Math.min(activeSlideIndex, slides.length - 1)];
  const slideNumber = slides.indexOf(activeSlide) + 1;

  function goToPreviousSlide() {
    setActiveSlideIndex((current) => Math.max(0, current - 1));
  }

  function goToNextSlide() {
    setActiveSlideIndex((current) => Math.min(slides.length - 1, current + 1));
  }

  return (
    <div className="space-y-8">
      <section>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded bg-[#006b5c]/15 px-3 py-1 font-mono text-[11px] font-black uppercase tracking-[0.06em] text-[#006b5c]">
            {day.module}
          </span>
          <span className="font-mono text-[11px] font-black uppercase tracking-[0.06em] text-[#43474b]">
            {day.date}
          </span>
          <span className="rounded bg-[#eceeef] px-3 py-1 text-xs font-bold text-[#43474b]">
            {day.duration}
          </span>
        </div>
        <h2 className="font-[Hanken_Grotesk,Inter,sans-serif] text-4xl font-black leading-tight text-[#182732] sm:text-5xl">
          {day.label}: {day.title}
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[#43474b]">
          {day.subtitle}
        </p>
      </section>

      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 space-y-6 lg:col-span-8">
          <div className="overflow-hidden rounded-xl border border-[#c3c7cb] bg-white shadow-sm">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#182732] p-6 text-white sm:p-10">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute left-10 top-10 h-28 w-28 rounded-xl border border-[#64fade]/70" />
                <div className="absolute bottom-12 right-14 h-40 w-40 rounded-xl border border-[#64fade]/50" />
                <div className="absolute left-1/3 top-1/3 h-2 w-56 bg-[#64fade]" />
                <div className="absolute bottom-1/4 left-1/4 h-2 w-40 bg-[#EEB111]" />
              </div>
              <div className="relative z-10 flex h-full w-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#3fddc2] px-4 py-2 font-mono text-[11px] font-black uppercase tracking-[0.08em] text-[#00201b]">
                  <Play className="h-3 w-3" />
                    {activeSlide.eyebrow}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] font-black uppercase tracking-[0.08em] text-[#b9c9d6]">
                    Slide {slideNumber} / {slides.length}
                  </span>
                </div>

                <div className="flex flex-1 items-center">
                  <div className="max-w-3xl">
                    <p className="font-mono text-[12px] font-black uppercase tracking-[0.1em] text-[#64fade]">
                      {activeSlide.subtitle}
                    </p>
                    <h3 className="mt-4 font-[Hanken_Grotesk,Inter,sans-serif] text-3xl font-black leading-tight sm:text-5xl">
                      {activeSlide.title}
                </h3>
                    <div className="mt-6 grid gap-3">
                      {activeSlide.bullets.map((bullet) => (
                        <div key={bullet} className="flex gap-3 rounded-lg bg-white/10 p-3 backdrop-blur">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#3fddc2]" />
                          <p className="text-sm font-semibold leading-6 text-[#eff1f2]">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={goToPreviousSlide}
                    disabled={slideNumber === 1}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-35"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <p className="line-clamp-2 max-w-xl text-center text-xs leading-5 text-[#b9c9d6]">
                    Speaker note: {activeSlide.note}
                  </p>
                  <button
                    onClick={goToNextSlide}
                    disabled={slideNumber === slides.length}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-35"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-[#c3c7cb] bg-[#f2f4f5] px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#43474b]">
                <Sparkles className="h-4 w-4 text-[#006b5c]" />
                  Interactive deck integrated into the course window
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#74777c]">
                  {slides.length} slides for {day.label}
              </span>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-7">
                {slides.map((slide, index) => {
                  const isActive = index === slideNumber - 1;

                  return (
                    <button
                      key={`${slide.eyebrow}-${slide.title}`}
                      onClick={() => setActiveSlideIndex(index)}
                      className={`min-h-20 rounded-lg border p-2 text-left transition ${
                        isActive
                          ? "border-[#006b5c] bg-white shadow-sm"
                          : "border-[#c3c7cb] bg-[#eceeef] hover:border-[#006b5c]"
                      }`}
                    >
                      <span className="font-mono text-[10px] font-black uppercase text-[#006b5c]">
                        {index + 1}
                      </span>
                      <span className="mt-1 line-clamp-2 block text-[11px] font-bold leading-4 text-[#182732]">
                        {slide.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#c3c7cb] bg-white p-6">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-5 w-5 text-[#006b5c]" />
              <h3 className="text-xl font-black text-[#182732]">Lecture Summary</h3>
            </div>
            <p className="text-sm leading-7 text-[#43474b]">{day.lectureSummary}</p>
            <div className="mt-5 space-y-3">
              {day.lectureBullets.map((bullet) => (
                <div key={bullet} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#006b5c]" />
                  <p className="text-sm leading-6 text-[#43474b]">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#c3c7cb] bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <Target className="h-5 w-5 text-[#006b5c]" />
                <h3 className="text-xl font-black text-[#182732]">{day.studioTitle}</h3>
              </div>
              <div className="space-y-3">
                {day.studioSteps.map((step, index) => (
                  <div key={step} className="flex gap-3">
                    <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-[#006b5c] text-xs font-black text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-[#43474b]">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#c3c7cb] bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <ClipboardList className="h-5 w-5 text-[#006b5c]" />
                <h3 className="text-xl font-black text-[#182732]">Daily Homework</h3>
              </div>
              <p className="text-sm font-black text-[#182732]">{day.homeworkTitle}</p>
              <p className="mt-2 text-sm leading-6 text-[#43474b]">
                {day.homeworkPrompt}
              </p>
              <textarea
                value={homeworkText}
                onChange={(event) => onHomeworkTextChange(event.target.value)}
                className="mt-4 min-h-32 w-full resize-none rounded-lg border border-[#c3c7cb] bg-[#f8fafb] p-3 text-sm outline-none focus:ring-2 focus:ring-[#006b5c]"
                placeholder="Submit notes, links, or reflection for this day..."
              />
              <button
                onClick={onSubmitHomework}
                disabled={!homeworkText.trim() || savingHomework}
                className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#006b5c] text-sm font-black text-white transition hover:bg-[#005045] disabled:opacity-50"
              >
                Submit homework <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <aside className="col-span-12 space-y-6 lg:col-span-4">
          <div className="overflow-hidden rounded-xl bg-[#182732] p-6 text-white">
            <div className="mb-3 flex items-center gap-2 text-[#00F0FF]">
              <Bot className="h-5 w-5" />
              <span className="font-mono text-[11px] font-black uppercase tracking-[0.08em]">
                AI Lab Insight
              </span>
            </div>
            <p className="text-sm leading-6 text-[#98a7b5]">&quot;{day.aiInsight}&quot;</p>
            <button className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#3fddc2] text-sm font-black text-[#00201b]">
              Start exercise <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-xl border border-[#c3c7cb] bg-white p-6">
            <h3 className="mb-4 text-xl font-black text-[#182732]">Resources</h3>
            <div className="space-y-3">
              {day.resources.map((resource) => (
                <button
                  key={resource.title}
                  className="flex w-full items-center gap-3 rounded-lg border border-[#c3c7cb] p-3 text-left transition hover:border-[#006b5c] hover:bg-[#f2f4f5]"
                >
                  <Download className="h-5 w-5 flex-none text-[#006b5c]" />
                  <span className="flex-1">
                    <span className="block text-sm font-bold text-[#182732]">
                      {resource.title}
                    </span>
                    <span className="block font-mono text-[10px] uppercase text-[#74777c]">
                      {resource.meta}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#c3c7cb] bg-white p-6">
            <h3 className="mb-4 text-xl font-black text-[#182732]">Key Terms</h3>
            <div className="flex flex-wrap gap-2">
              {day.keyTerms.map((term) => (
                <span
                  key={term}
                  className="rounded-full border border-[#c3c7cb] bg-[#eceeef] px-3 py-1 text-sm font-semibold text-[#43474b]"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#c3c7cb] bg-[#f2f4f5] p-6">
            <div className="mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-[#946900]" />
              <h3 className="text-lg font-black text-[#182732]">Deliverable</h3>
            </div>
            <p className="text-sm leading-6 text-[#43474b]">{day.deliverable}</p>
          </div>

          <div className="rounded-xl border border-[#c3c7cb] bg-white p-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.08em] text-[#74777c]">
                Next Up
              </span>
              {nextDay && (
                <span className="text-xs font-black text-[#006b5c]">{nextDay.date}</span>
              )}
            </div>
            {nextDay ? (
              <button
                onClick={onNextDay}
                className="flex w-full items-center justify-between gap-3 text-left"
              >
                <span>
                  <span className="block text-base font-black text-[#182732]">
                    {nextDay.label}: {nextDay.title}
                  </span>
                  <span className="mt-1 block text-sm text-[#43474b]">
                    {nextDay.deliverable}
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 flex-none text-[#006b5c]" />
              </button>
            ) : (
              <div className="flex items-center gap-2 text-sm font-semibold text-[#43474b]">
                <LinkIcon className="h-4 w-4 text-[#006b5c]" />
                Final portfolio story ready.
              </div>
            )}
          </div>
        </aside>
      </section>
    </div>
  );
}
