export const profile = {
  name: "Ayush Aggarwal",
  role: "Software Engineer II",
  company: "Ellucian",
  location: "Reston, VA",
  email: "aama098@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayush-aggarwal0298/",
  github: "https://github.com/ayush51",
  tagline:
    "Software Engineer II at Ellucian. I design lakehouse analytics architectures and serverless pipelines — with deep, hands-on AWS — and ship the full-stack products on top of them.",
};

export const stats = [
  { value: "4+", label: "years of engineering experience" },
  { value: "50%", label: "less manual ops effort via Lambda automation" },
  { value: "57", label: "colleges self-serving analytics dashboards" },
  { value: "30%", label: "query performance gained in cloud migration" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "C/C++", "SQL", "Bash"] },
  { group: "Backend & Data", items: ["Node.js", "REST APIs", "PySpark", "Data Pipelines", "Athena", "Iceberg", "Metabase"] },
  { group: "Cloud", items: ["AWS Lambda", "S3", "IAM", "Lake Formation", "DynamoDB", "SQS / SNS", "Terraform", "Docker"] },
  { group: "Frontend", items: ["React", "Next.js", "HTML / CSS", "D3.js"] },
  { group: "Tools", items: ["Git", "Jenkins", "Datadog", "Playwright", "Figma"] },
];

export const marquee = [
  "AWS", "Node.js", "Python", "React", "TypeScript", "Terraform", "Athena",
  "Iceberg", "Lambda", "DynamoDB", "Lake Formation", "Docker", "Playwright",
  "Datadog", "PySpark", "SQS", "Jenkins", "Metabase",
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
    period: "Jun 2024 — Present",
    current: true,
    points: [
      "Designed the end-to-end architecture and access-control model for a lakehouse analytics platform — migrating reporting workloads from a Postgres data lake to S3 Iceberg tables queried through Athena, with governance enforced via IAM and Lake Formation.",
      "Shipped full-stack product features with React, Python APIs, and AWS serverless services powering customer-facing and internal analytics workflows.",
      "Led the Node.js 22 upgrade across multiple services, and built a Lambda pipeline that triages Datadog logs — cutting manual operational effort by 50%.",
    ],
    tech: ["AWS", "Athena", "Iceberg", "Lake Formation", "Node.js", "Python", "React", "Terraform", "Datadog", "Playwright"],
  },
  {
    company: "Ellucian",
    role: "Software Engineer Intern",
    location: "Reston, VA",
    period: "May 2023 — Aug 2023",
    points: [
      "Built a self-service Insights Card platform with React, AWS Lambda, and Terraform-managed APIs — enabling 57 colleges to create analytics dashboards without engineering support.",
      "Implemented WebSocket APIs and SQS messaging backed by DynamoDB streams to deliver real-time pricing and availability updates.",
    ],
    tech: ["React", "AWS Lambda", "Terraform", "WebSockets", "SQS", "DynamoDB"],
  },
  {
    company: "ZS Associates",
    role: "Software Engineer",
    location: "Gurgaon, India",
    period: "Aug 2020 — Jun 2022",
    points: [
      "Migrated legacy MySQL/Oracle pipelines to AWS (S3, Athena, Redshift) — improving query performance ~30% and integration throughput ~20% with partitioning and Parquet.",
      "Built data apps and APIs pushing modeled data into downstream tools, with job orchestration, retries, and monitoring for reliable syncs.",
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
  tech: string[];
  link?: string; // TODO: add live/demo links
  repo?: string;
  badge?: string;
  accent: string; // gradient for the card's visual header
  glyph: string;  // mono glyph shown in the visual header
};

export const projects: Project[] = [
  {
    title: "Photo-Based Drink Tracker",
    badge: "In progress",
    description:
      "Snap a photo of your drink and AI estimates calories and logs your intake. Full-stack app with vision-model analysis on a fully free-tier stack.",
    tech: ["Next.js", "Gemini API", "Vercel"],
    repo: "https://github.com/ayush51/drink-tracker",
    accent: "linear-gradient(135deg, rgba(34,211,238,0.25), rgba(16,185,129,0.15))",
    glyph: "🥤",
  },
  {
    title: "AI-Powered Coding Platform",
    badge: "AI · Education",
    description:
      "Web-based coding environment with real-time code optimization and intelligent suggestions, built to help students prepare for technical interviews.",
    tech: ["React", "Node.js", "OpenAI"],
    accent: "linear-gradient(135deg, rgba(129,140,248,0.28), rgba(168,85,247,0.15))",
    glyph: "{ }",
  },
  {
    title: "Automated Lecture Generation",
    badge: "NLP · LLMs",
    description:
      "Used NLP and LLMs to generate automated lectures — reducing course preparation time by 40% and boosting educator efficiency.",
    tech: ["Python", "LLMs", "NLP"],
    repo: "https://github.com/ayush51/EducatorAlly-AutomatedLectureGenerator",
    accent: "linear-gradient(135deg, rgba(244,114,182,0.22), rgba(129,140,248,0.15))",
    glyph: "▶︎",
  },
  {
    title: "This Portfolio",
    badge: "Live",
    description:
      "The site you're on — hand-rolled Next.js with a custom animation system, perfect Lighthouse-friendly static output, and content driven from a single data file.",
    tech: ["Next.js", "TypeScript", "Tailwind 4"],
    link: "https://ayush-aggarwal.vercel.app",
    repo: "https://github.com/ayush51/my-portfolio",
    accent: "linear-gradient(135deg, rgba(148,163,184,0.22), rgba(34,211,238,0.14))",
    glyph: "~/",
  },
];

export const education = [
  {
    school: "Virginia Tech",
    degree: "M.Eng, Computer Science",
    period: "2022 — 2024",
    detail: "GPA 3.96/4 · Graduate Research Assistant — AI in Design, UI/UX, Full-Stack Development",
  },
  {
    school: "GGSIP University, Delhi",
    degree: "B.Tech, Information Technology",
    period: "2016 — 2020",
    detail: "GPA 9.12/10 · First rank in University Examination 2017 · DSA mentor for two years",
  },
];

export const recognition = [
  "“Impact and Recognition” Award — for outstanding client impact",
  "“Celebrating Impact — Best Team” Award",
  "First rank, University Examination 2017",
  "Data Structures & Algorithms mentor for two years",
];
