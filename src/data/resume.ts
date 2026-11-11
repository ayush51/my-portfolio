export const profile = {
  name: "Ayush Aggarwal",
  role: "Software Engineer II",
  company: "Ellucian",
  location: "Arlington, VA",
  email: "aama098@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayush-aggarwal0298/",
  github: "https://github.com/ayush51",
  headline: "Full-stack engineer, backend-leaning.",
  tagline:
    "4+ years building AWS backend and data systems at Ellucian and ZS, with hands-on customer work (onboarding, UAT, data integration), plus full-stack apps in React, Next.js and Supabase that I design and ship end to end.",
  availability: "Open to roles anywhere in the US",
};

export const stats = [
  { value: "~50", label: "countries of client data harmonized" },
  { value: "40+", label: "services upgraded to Node 22" },
  { value: "Dozens", label: "of college users led through UAT" },
  { value: "50%", label: "less manual ops effort via automation" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "C/C++", "SQL", "Bash"] },
  { group: "Backend & Data", items: ["Node.js", "REST APIs", "Data Pipelines", "Athena", "Metabase"] },
  { group: "Cloud", items: ["AWS Lambda", "S3", "IAM", "Lake Formation", "DynamoDB", "SQS / SNS", "Terraform", "Docker"] },
  { group: "Frontend", items: ["React", "Next.js", "HTML / CSS", "D3.js"] },
  { group: "Tools", items: ["Git", "Jenkins", "Datadog", "Playwright", "Figma"] },
];

export const marquee = [
  "AWS", "Node.js", "Python", "React", "TypeScript", "Terraform", "Athena",
  "Lambda", "DynamoDB", "Lake Formation", "Docker", "Playwright",
  "Datadog", "SQS", "Jenkins", "Metabase",
];

export type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: { title: string; text: string }[];
  more?: { title: string; text: string }[]; // shown behind "Show more"
  tech: string[];
};

export const experience: Job[] = [
  {
    company: "Ellucian",
    role: "Software Engineer II",
    location: "Reston, VA",
    period: "Jun 2024 - Present",
    current: true,
    highlights: [
      { title: "Customer UAT", text: "Onboarded customers onto Metabase reporting and led UAT with dozens of college users." },
      { title: "Agentic chat backend", text: "Built permission-aware services behind Ellucian's shipped agentic chat interface." },
      { title: "Metabase-Athena integration", text: "Owned it end to end, with per-user database routing on separate IAM credentials." },
      { title: "Role-based data access", text: "Co-designed how app roles map to Lake Formation grants and IAM credentials." },
    ],
    more: [
      { title: "Credential rotation", text: "Proposed and built automated IAM credential rotation, now deployed." },
      { title: "Node.js 22 upgrade", text: "Led the upgrade across 40+ services, with automated validation." },
      { title: "Streaming ingestion", text: "Shipped nested-document transforms and a CI gate that rejects bad source config." },
      { title: "Operations automation", text: "A Datadog triage pipeline cut manual operational effort by 50%." },
    ],
    tech: ["AWS", "Athena", "Lake Formation", "IAM", "DynamoDB", "Metabase", "Node.js", "Python", "Kafka", "Terraform", "Jenkins", "React"],
  },
  {
    company: "Ellucian",
    role: "Software Engineer Intern",
    location: "Reston, VA",
    period: "May 2023 - Aug 2023",
    highlights: [
      { title: "Insights Card template", text: "Self-service Metabase embed template (React, Lambda, Terraform) supporting 500+ assets." },
    ],
    tech: ["React", "AWS Lambda", "Terraform", "Metabase"],
  },
  {
    company: "ZS Associates",
    role: "Software Engineer",
    location: "Gurgaon, India",
    period: "Aug 2020 - Jun 2022",
    highlights: [
      { title: "Global data harmonization", text: "Unified data from ~50 countries into one model feeding client KPI dashboards." },
      { title: "Client support", text: "Trained dozens of client users and troubleshot data issues as production support." },
      { title: "AWS migration", text: "Moved MySQL/Oracle pipelines to AWS: ~30% faster queries, ~20% more throughput." },
    ],
    tech: ["AWS", "S3", "Athena", "Redshift", "Python", "SQL", "Parquet"],
  },
];

export const earlierRoles = [
  { company: "Info Space Export", role: "Software Developer Intern", period: "Summer 2019", note: "Features for an online gaming platform serving 35k+ users (PHP, JavaScript, Oracle SQL)." },
  { company: "NIIT Ltd", role: "Software Developer Intern", period: "Summer 2018", note: "Student performance dashboards with D3.js; dynamic PDF watermarking in C# that hardened document security." },
  { company: "Define Labs", role: "Software Developer Intern", period: "Summer 2017", note: "Built a scalable in-house user management web app end to end." },
];

export type Project = {
  title: string;
  description: string;
  highlights: string[]; // engineering depth: what's hard about it
  tech: string[];
  link?: string; // live site
  repo?: string; // omit for private repos
  badge: string;
  glyph: string;  // mono glyph shown when there are no screenshots
  shots?: { src: string; alt: string; w: number; h: number }[];
  shotKind?: "phone" | "desktop";
};

export const projects: Project[] = [
  {
    title: "The Couch",
    badge: "Live · Invite-only",
    description:
      "Private PWA for one household: realtime chat, shared plans, daily photos, a points economy, and async chess and Monopoly-style games.",
    highlights: [
      "Security lives in Postgres: row-level security on every table, so cross-household access is impossible regardless of app code.",
      "Append-only ledger with idempotency keys and a non-negative balance check, so retries and replays can't double-pay.",
      "Server-validated game moves, pg_cron reminders, web push, and a Playwright suite across 5 screen sizes.",
    ],
    tech: ["Next.js 16", "TypeScript", "Supabase", "Postgres RLS", "Web Push", "Playwright"],
    link: "https://roomies-vert.vercel.app",
    repo: "https://github.com/ayush51/social-rommies-hub",
    glyph: "01",
    shotKind: "phone",
    shots: [
      { src: "/projects/couch/chat.jpg", alt: "The Couch group chat with reactions", w: 520, h: 885 },
      { src: "/projects/couch/games.jpg", alt: "The Couch games hub with wallet and leaderboard", w: 520, h: 885 },
      { src: "/projects/couch/plans.jpg", alt: "The Couch shared plans list", w: 520, h: 885 },
    ],
  },
  {
    title: "StockLens",
    badge: "Live",
    description:
      "Investment research dashboard that ties a portfolio to the thesis behind each position, with filings, alerts, and a signal-convergence research tool.",
    highlights: [
      "Brokerage integration is read-only by design: the provider interface has no write method, so it's enforced by the type system.",
      "Signal Convergence cross-references SEC EDGAR insider filings with USAspending.gov contract awards, with entity resolution and a transparent 0 to 100 score.",
      "Feature-based architecture with provider contracts for every external data source.",
    ],
    tech: ["Next.js 15", "TypeScript", "Prisma", "Postgres", "SEC EDGAR", "shadcn/ui"],
    link: "https://thesistrack-eight.vercel.app",
    repo: "https://github.com/ayush51/stocklens",
    glyph: "02",
    shotKind: "desktop",
    shots: [
      { src: "/projects/stocklens/thesis.jpg", alt: "StockLens investment thesis page for a company", w: 1200, h: 750 },
      { src: "/projects/stocklens/signal.jpg", alt: "StockLens Signal Convergence score breakdown with insider transactions", w: 1200, h: 750 },
    ],
  },
  {
    title: "SideQuest",
    badge: "Live",
    description:
      "Mobile-first PWA that hands out a small real-world adventure every day, with points, streaks, friends, and community-suggested quests.",
    highlights: [
      "User-suggested quests go through an admin approval queue; the quest pool only ever serves approved rows.",
      "Server Actions with optimistic UI, per-route loading skeletons, and RLS so friends only see what users choose to share.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind", "shadcn/ui", "Motion"],
    link: "https://sidequestdmv.vercel.app",
    repo: "https://github.com/ayush51/sidequest",
    glyph: "03",
    shotKind: "phone",
    shots: [
      { src: "/projects/sidequest/today.jpg", alt: "SideQuest daily quest card with XP and streak", w: 520, h: 1124 },
      { src: "/projects/sidequest/social.jpg", alt: "SideQuest friends activity feed", w: 520, h: 1124 },
      { src: "/projects/sidequest/profile.jpg", alt: "SideQuest profile with achievements", w: 520, h: 1124 },
    ],
  },
  {
    title: "Sip Happens",
    badge: "Live",
    description:
      "Drink tracker where you snap a photo and a vision model estimates the drink, with daily limits, history, group view, and push reminders.",
    highlights: [
      "Gemini vision analysis behind a server route, running on a fully free-tier stack.",
      "Installable PWA with a service worker and web push.",
    ],
    tech: ["Next.js", "Gemini API", "Supabase", "Web Push", "Vercel"],
    link: "https://drink-tracker-lime.vercel.app",
    repo: "https://github.com/ayush51/drink-tracker",
    glyph: "04",
    shotKind: "phone",
    shots: [
      { src: "/projects/sip/home.jpg", alt: "Sip Happens dashboard with daily limit and streaks", w: 520, h: 1124 },
      { src: "/projects/sip/calendar.jpg", alt: "Sip Happens calendar view", w: 520, h: 1124 },
      { src: "/projects/sip/profile.jpg", alt: "Sip Happens profile", w: 520, h: 1124 },
    ],
  },
  {
    title: "The 4 AM Desk",
    badge: "Automated",
    description:
      "Pre-market briefing emailed every weekday at ~4 AM ET: futures, world markets, commodities, overnight headlines, and the day's economic calendar.",
    highlights: [
      "Zero servers: scheduled on GitHub Actions, pulling from several free market-data APIs with graceful fallbacks.",
      "Optional AI-written takeaway on top of the data.",
    ],
    tech: ["Python", "GitHub Actions", "Cloudflare Workers", "REST APIs"],
    repo: "https://github.com/ayush51/premarket-briefing",
    glyph: "05",
  },
  {
    title: "Automated Lecture Generation",
    badge: "NLP · LLMs",
    description:
      "Team project that used NLP and LLMs to generate automated lectures, reducing course preparation time by 40%.",
    highlights: [],
    tech: ["Python", "LLMs", "NLP"],
    repo: "https://github.com/ayush51/EducatorAlly-AutomatedLectureGenerator",
    glyph: "06",
  },
];

export const education = [
  {
    school: "Virginia Tech",
    degree: "M.Eng, Computer Science",
    period: "2022 - 2024",
    detail: "GPA 3.96/4 · Graduate Research Assistant: AI in Design, UI/UX, Full-Stack Development",
  },
  {
    school: "GGSIP University, Delhi",
    degree: "B.Tech, Information Technology",
    period: "2016 - 2020",
    detail: "GPA 9.12/10 · First rank in University Examination 2017 · DSA mentor for two years",
  },
];

export const recognition = [
  "“Impact and Recognition” Award, for outstanding client impact",
  "“Celebrating Impact - Best Team” Award",
  "First rank, University Examination 2017",
  "Data Structures & Algorithms mentor for two years",
];

export const caseStudy = {
  project: "The Couch",
  summary:
    "A private PWA for one six-person household, built the way a multi-tenant product would be: the database enforces the rules, and the app can't bypass them.",
  flow: [
    { label: "Browser", note: "anon key + user JWT only" },
    { label: "Postgres + RLS", note: "every table, every row" },
    { label: "Server-only", note: "service-role key, cron, invites" },
  ],
  decisions: [
    {
      problem: "Who can see what?",
      decision:
        "Every table carries a household_id and row-level security decides access. Security-definer helpers have a pinned search_path, and tables that clients must not write simply have no insert or update policy. The service-role key lives only in server-only modules.",
    },
    {
      problem: "Can a retry double-pay someone?",
      decision:
        "Rewards go through an append-only ledger with a unique idempotency key (for example daily:{user}:{date}). The balance updates in the same transaction under SELECT … FOR UPDATE with a CHECK that it never goes negative, so replays are no-ops.",
    },
    {
      problem: "What does \"today\" mean?",
      decision:
        "Each household has its own timezone. Scheduled jobs run in pg_cron and write rows keyed by (household_id, local_date) with unique constraints, so re-running a job is safe. Photo expiry is enforced in the backend, never in the UI.",
    },
    {
      problem: "Can players cheat at chess or Monopoly?",
      decision:
        "Dice are rolled on the server and chess moves are validated server-side behind a secret-gated RPC. The client only requests a move.",
    },
    {
      problem: "How do you know it still works?",
      decision:
        "RLS and rollback tests on the database, plus a Playwright suite across 5 screen sizes. Tab pages are prefetched and cached, which brought tab switches down to 31 to 64 ms.",
    },
  ],
};
