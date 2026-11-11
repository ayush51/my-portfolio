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
  { value: "4+", label: "years of engineering experience" },
  { value: "SE II", label: "promoted at Ellucian in 2026" },
  { value: "Node 22", label: "runtime upgrade I led across services" },
  { value: "41%", label: "lower query time, Athena vs RDS POC (2,000-row sample)" },
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
  points: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    company: "Ellucian",
    role: "Software Engineer II",
    location: "Reston, VA",
    period: "Jun 2024 - Present",
    current: true,
    points: [
      "Owned the Metabase-Athena lakehouse integration end to end: worked with the Metabase team to resolve JDBC and metadata-sync issues, and implemented database routing (a router database plus hidden destination databases with separate IAM credentials, chosen per user by a login attribute).",
      "Onboarded customers onto Metabase reporting and led user acceptance testing (UAT) with dozens of college users.",
      "Co-designed role-based lakehouse data access with AWS SMEs: a login resolver that unions a user's app roles into a permission package, mapped to IAM credentials and Lake Formation grants, with DynamoDB tracking and SSM credentials.",
      "Built backend services (Node.js, AWS Lambda) for Ellucian's agentic chat interface, now shipped to customers: a permission-aware layer that calls existing reporting APIs, resolves each user's roles through the lakehouse routing and access model, and returns structured results the agent turns into conversational insights.",
      "Identified long-lived IAM credentials as a security and maintenance risk, won alignment from senior architects, and built an automated credential-rotation service (Jenkins, DynamoDB metadata, scheduler, validation) that is deployed and running.",
      "Led the Node.js 22 upgrade across 40+ services (runtime, dependency and CI compatibility), with automated validation.",
      "Contributed to the streaming ingestion platform (Python, Kafka/MSK, Flink): shipped DII transformation of nested documents into relational tables, added _document_key indexes on child tables, and built a source-type allowlist with a CI validation gate that fails builds on unsupported config.",
      "Built a Lambda-based Datadog log-triage pipeline that cut manual operational effort by 50%, and shipped accessible (WCAG, right-to-left) React reporting features.",
    ],
    tech: ["AWS", "Athena", "Lake Formation", "IAM", "DynamoDB", "Metabase", "Node.js", "Python", "Kafka", "Terraform", "Jenkins", "React"],
  },
  {
    company: "Ellucian",
    role: "Software Engineer Intern",
    location: "Reston, VA",
    period: "May 2023 - Aug 2023",
    points: [
      "Built a self-service Insights Card template for Metabase embeds (React, Lambda, Terraform), supporting 500+ assets.",
    ],
    tech: ["React", "AWS Lambda", "Terraform", "Metabase"],
  },
  {
    company: "ZS Associates",
    role: "Software Engineer",
    location: "Gurgaon, India",
    period: "Aug 2020 - Jun 2022",
    points: [
      "On a global pharma transparency platform, harmonized data from ~50 countries (differing formats and languages) into one model using per-country mapping and validation rules (Python, SQL on Athena/Redshift, Parquet on S3), giving client teams a single global view for KPI dashboards and cutting the time users spent on KPI reporting and manual reconciliation.",
      "Migrated legacy MySQL/Oracle pipelines to AWS (S3, Athena, Redshift), improving query performance ~30% and integration throughput ~20% with partitioning and Parquet; built data apps and APIs that pushed modeled data into downstream tools, with orchestration, retries and monitoring.",
      "Worked directly with dozens of client users and stakeholders: trained them on the dashboards, troubleshot data issues they reported as production support, and kept scheduled syncs reliable.",
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
  accent: string; // gradient for the card's visual header
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
    accent: "linear-gradient(135deg, rgba(129,140,248,0.28), rgba(168,85,247,0.15))",
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
    accent: "linear-gradient(135deg, rgba(34,211,238,0.25), rgba(99,102,241,0.18))",
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
    accent: "linear-gradient(135deg, rgba(190,242,100,0.22), rgba(34,211,238,0.12))",
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
    accent: "linear-gradient(135deg, rgba(251,146,60,0.28), rgba(244,114,182,0.15))",
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
    accent: "linear-gradient(135deg, rgba(148,163,184,0.22), rgba(34,211,238,0.14))",
    glyph: "05",
  },
  {
    title: "Automated Lecture Generation",
    badge: "NLP · LLMs",
    description:
      "Used NLP and LLMs to generate automated lectures, reducing course preparation time by 40% and boosting educator efficiency.",
    highlights: [],
    tech: ["Python", "LLMs", "NLP"],
    repo: "https://github.com/ayush51/EducatorAlly-AutomatedLectureGenerator",
    accent: "linear-gradient(135deg, rgba(244,114,182,0.22), rgba(129,140,248,0.15))",
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
