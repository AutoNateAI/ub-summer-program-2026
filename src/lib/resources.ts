export type Resource = {
  title: string;
  type: "Pre-Class Notes" | "Class Notes" | "Assignment";
  status: "Available" | "Coming Soon";
  href?: string;
  detail: string;
};

export type ProgramDay = {
  slug: string;
  label: string;
  date: string;
  title: string;
  video?: {
    title: string;
    youtubeId: string;
    url: string;
    detail: string;
  };
  ogImage: string;
  ogTitle: string;
  ogDescription: string;
  resources: Resource[];
};

export const days: ProgramDay[] = [
  {
    slug: "day-1",
    label: "Day 1",
    date: "June 16",
    title: "Opportunity Hunting",
    video: {
      title: "Day 1 Class Video",
      youtubeId: "oewoDbElntg",
      url: "https://youtu.be/oewoDbElntg",
      detail:
        "Replay the Day 1 setup on demand, budgets, departments, programs, and how opportunity hunters read the city.",
    },
    ogImage: "/og/day-01.png",
    ogTitle: "Day 1: Opportunity Hunting",
    ogDescription:
      "Find the demand. Learn how community needs, budgets, departments, programs, and partners reveal real local opportunities.",
    resources: [
      {
        title: "Pre-Class Notes",
        type: "Pre-Class Notes",
        status: "Coming Soon",
        detail: "Posted before class when a prep handout is available.",
      },
      {
        title: "Opportunity Hunting 101",
        type: "Class Notes",
        status: "Available",
        href: "/resources/day-01/opportunity-hunting-101-class-notes.pdf",
        detail:
          "Professional class notes covering funded problems, budgets, departments, AI research, and opportunity ecosystems.",
      },
      {
        title: "Opportunity Report",
        type: "Assignment",
        status: "Available",
        href: "/resources/day-01/opportunity-report-student-assignment.pdf",
        detail:
          "Student homework packet for department discovery, funded problem analysis, partner mapping, and program design.",
      },
    ],
  },
  {
    slug: "day-2",
    label: "Day 2",
    date: "June 17",
    title: "Follow The Money",
    video: {
      title: "Day 2 Class Video",
      youtubeId: "WUGM1x-NC2k",
      url: "https://youtu.be/WUGM1x-NC2k",
      detail:
        "Watch the Day 2 walkthrough on tracing money from federal priorities into Michigan, local departments, vendors, and opportunity gaps.",
    },
    ogImage: "/og/day-02.png",
    ogTitle: "Day 2: Follow The Money",
    ogDescription:
      "Trace the money from federal departments to Michigan, local programs, vendors, LinkedIn networks, and opportunity gaps.",
    resources: [
      {
        title: "Follow The Money",
        type: "Pre-Class Notes",
        status: "Available",
        href: "/resources/day-02/follow-the-money-preclass-notes.pdf",
        detail:
          "Prep notes on how public demand, departments, federal funding, local programs, vendors, LinkedIn, and partnership networks connect.",
      },
      {
        title: "Follow The Money Review",
        type: "Class Notes",
        status: "Available",
        href: "/resources/day-02/follow-the-money-postclass-notes.pdf",
        detail:
          "Post-class review covering the FigJam budget flow, city council decisions, department tables, team roles, Google Docs, Stitch prototypes, and tomorrow's development path.",
      },
      {
        title: "Day 2 Homework",
        type: "Assignment",
        status: "Available",
        href: "/resources/day-02/follow-the-money-homework.pdf",
        detail:
          "Review today's class notes and prepare for tomorrow's Chamber directory research, program design, and Lovable.dev software build workflow.",
      },
    ],
  },
  {
    slug: "day-3",
    label: "Day 3",
    date: "June 18",
    title: "Chamber Partners To Software",
    video: {
      title: "Day 3 Class Video",
      youtubeId: "elI7LgEOfLU",
      url: "https://youtu.be/elI7LgEOfLU",
      detail:
        "Replay the Day 3 workflow on adding Chamber supply to the budget research, brokering win-win partner programs, and using Lovable.dev to build software that makes the program real.",
    },
    ogImage: "/og/day-03.png",
    ogTitle: "Day 3: Chamber Partners To Software",
    ogDescription:
      "Add Chamber supply to the budget research, broker win-win programs, and use Lovable.dev to build a practical software tool.",
    resources: [
      {
        title: "Chamber Partners To Software",
        type: "Pre-Class Notes",
        status: "Available",
        href: "/resources/day-03/chamber-to-software-preclass-notes.pdf",
        detail:
          "Prep notes for adding Chamber directory suppliers, brokering partner ROI, architecting a program, and prompting ChatGPT, Stitch, and Lovable.dev.",
      },
      {
        title: "Day 3 FigJam Board",
        type: "Class Notes",
        status: "Available",
        href: "https://www.figma.com/board/2pCjBRB31jurSQB37y235q/Untitled?node-id=0-1&p=f&t=qkMPow9gzM7NABQ2-0",
        detail:
          "Live class board showing the budget-to-department flow, city council decision path, department directors, staff, programs, projects, and opportunity mapping.",
      },
      {
        title: "Assignment",
        type: "Assignment",
        status: "Coming Soon",
        detail: "Download will appear after the assignment is finalized.",
      },
    ],
  },
  {
    slug: "day-4",
    label: "Day 4",
    date: "June 22",
    title: "Program Blueprint To App Build",
    ogImage: "/og/day-04.png",
    ogTitle: "Day 4: Program Blueprint To App Build",
    ogDescription:
      "Expand partner concepts into a 3-day transformation program, design digital activities, create a Stitch portal, and build a Base44 app draft.",
    resources: [
      {
        title: "Program Blueprint To App Build",
        type: "Pre-Class Notes",
        status: "Available",
        href: "/resources/day-04/program-blueprint-to-app-build-preclass-notes.pdf",
        detail:
          "Prep notes and prompts for expanding a win-win-win program, designing digital activities, moving into Stitch, and building with Base44.",
      },
      {
        title: "Class Notes",
        type: "Class Notes",
        status: "Coming Soon",
        detail: "Download will appear after the notes are finalized.",
      },
      {
        title: "Assignment",
        type: "Assignment",
        status: "Coming Soon",
        detail: "Download will appear after the assignment is finalized.",
      },
    ],
  },
  ...Array.from({ length: 5 }, (_, index) => {
    const day = index + 5;
    const slug = `day-${day}`;

    return {
      slug,
      label: `Day ${day}`,
      date: "Coming soon",
      title: "Materials will be posted here",
      ogImage: `/og/day-${String(day).padStart(2, "0")}.png`,
      ogTitle: `Day ${day}: GVSU TRIO Upward Bound Resources`,
      ogDescription:
        "Notes, assignments, and pre-class materials will be posted here when they are ready.",
      resources: [
        {
          title: "Pre-Class Notes",
          type: "Pre-Class Notes" as const,
          status: "Coming Soon" as const,
          detail: "Check this page before class.",
        },
        {
          title: "Class Notes",
          type: "Class Notes" as const,
          status: "Coming Soon" as const,
          detail: "Download will appear after the notes are finalized.",
        },
        {
          title: "Assignment",
          type: "Assignment" as const,
          status: "Coming Soon" as const,
          detail: "Download will appear after the assignment is finalized.",
        },
      ],
    };
  }),
];

export function getDay(slug: string) {
  return days.find((day) => day.slug === slug);
}

export const availableResources = days.flatMap((day) =>
  day.resources
    .filter((resource) => resource.status === "Available")
    .map((resource) => ({ ...resource, day: day.label, daySlug: day.slug })),
);
