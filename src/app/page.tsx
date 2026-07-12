import CountUp from "@/components/CountUp";
import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import Typer from "@/components/Typer";
import {
  profile,
  stats,
  skills,
  marquee,
  experience,
  earlierRoles,
  projects,
  education,
  recognition,
} from "@/data/resume";

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4" data-reveal>
      <span className="font-mono text-sm text-cyan-300/80">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-indigo-400/40 to-transparent" />
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-300">
      {children}
    </span>
  );
}

const linkedInIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const githubIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
    <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .3z" />
  </svg>
);

const mailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  worksFor: { "@type": "Organization", name: profile.company },
  url: "https://ayush-aggarwal.vercel.app",
  sameAs: [profile.linkedin, profile.github].filter(Boolean),
  email: `mailto:${profile.email}`,
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Virginia Tech" },
    { "@type": "CollegeOrUniversity", name: "GGSIP University" },
  ],
  knowsAbout: ["AWS", "Backend Engineering", "Cloud Infrastructure", "Data Platforms", "React", "Node.js", "Python"],
};

export default function Home() {
  return (
    <div id="top" className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Effects />
      <Nav />

      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="aurora aurora-a -top-40 -left-40" />
        <div className="aurora aurora-b top-1/4 -right-40" />
        <div className="aurora aurora-c top-[60%] left-1/4" />
      </div>
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[120vh]" aria-hidden />

      <main className="relative z-10 mx-auto max-w-6xl px-6">
        {/* ============ HERO ============ */}
        <section className="flex min-h-svh flex-col justify-center pt-24 pb-16">
          <p className="mb-5 font-mono text-sm text-cyan-300" data-reveal>
            Hi, my name is
          </p>
          <h1
            className="text-5xl font-bold tracking-tight text-slate-50 sm:text-7xl"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            Ayush Aggarwal<span className="text-gradient">.</span>
          </h1>
          <h2
            className="mt-4 text-2xl font-semibold tracking-tight text-slate-400 sm:text-4xl"
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            I build <Typer words={profile.typerWords} /> on AWS.
          </h2>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            {profile.tagline}
          </p>
          <div
            className="mt-9 flex flex-wrap items-center gap-4"
            data-reveal
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
          >
            <a
              href="#experience"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_32px_rgba(99,102,241,0.5)]"
            >
              See my work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-indigo-400/50 hover:text-white"
            >
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-4 text-slate-400">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-indigo-300">
                {linkedInIcon}
              </a>
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-indigo-300">
                  {githubIcon}
                </a>
              )}
              <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-indigo-300">
                {mailIcon}
              </a>
            </div>
          </div>
          <div
            className="mt-14 flex items-center gap-3 font-mono text-xs text-slate-500"
            data-reveal
            style={{ "--reveal-delay": "400ms" } as React.CSSProperties}
          >
            <span className="relative flex size-2">
              <span className="pulse-dot relative inline-flex size-2 rounded-full bg-cyan-400" />
            </span>
            {profile.role} @ {profile.company} · {profile.location}
          </div>
        </section>

        {/* ============ MARQUEE ============ */}
        <div className="marquee relative -mx-6 overflow-hidden border-y border-line py-4 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]" data-reveal>
          <div className="marquee-track">
            {[...marquee, ...marquee].map((item, i) => (
              <span key={i} className="font-mono text-sm text-slate-500">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ============ ABOUT / STATS ============ */}
        <section id="about" className="scroll-mt-28 py-24">
          <SectionHeading index="01" title="About" />
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="space-y-4 text-lg leading-relaxed text-slate-400 lg:col-span-3" data-reveal>
              <p>
                I&apos;m a software engineer with{" "}
                <span className="text-slate-200">4+ years of experience</span>{" "}
                across backend, platform, and cloud infrastructure work. Right now I&apos;m at{" "}
                <span className="text-slate-200">Ellucian</span>, where I designed the
                architecture and access-control model for a{" "}
                <span className="text-slate-200">lakehouse analytics platform</span> — moving
                reporting workloads from Postgres to S3 Iceberg tables queried through Athena,
                governed by IAM and Lake Formation.
              </p>
              <p>
                Before that I was at <span className="text-slate-200">ZS Associates</span>,
                migrating legacy data pipelines to AWS, and at{" "}
                <span className="text-slate-200">Virginia Tech</span> earning an M.Eng in
                Computer Science (3.96 GPA) while working as a Graduate Research Assistant on AI
                in design and full-stack development.
              </p>
              <p>
                I&apos;m full-stack by range — React and TypeScript on the front,{" "}
                Python and Node.js APIs behind it — but{" "}
                <span className="text-slate-200">backend and cloud infrastructure</span> is
                where I go deepest. I like problems at the intersection of data,
                infrastructure, and product, and I have a habit of automating away whatever
                slows a team down.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 self-start lg:col-span-2">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="card p-5"
                  data-reveal
                  style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                >
                  <div className="text-gradient text-3xl font-bold">
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section id="experience" className="scroll-mt-28 py-24">
          <SectionHeading index="02" title="Experience" />
          <div className="relative space-y-12 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-indigo-400/50 before:via-line before:to-transparent">
            {experience.map((job, i) => (
              <article key={`${job.company}-${job.period}`} className="relative pl-10" data-reveal>
                <span
                  className={`absolute top-2 left-0 size-[15px] rounded-full border-2 ${
                    job.current
                      ? "border-cyan-400 bg-cyan-400/30 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                      : "border-slate-600 bg-ink"
                  }`}
                  aria-hidden
                />
                <div className="card p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold text-slate-100">
                      {job.role}{" "}
                      <span className="text-indigo-300">@ {job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-slate-500">{job.period}</span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-slate-500">{job.location}</p>
                  <ul className="mt-5 space-y-3">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-slate-400">
                        <span className="mt-[9px] size-1 shrink-0 rounded-full bg-cyan-400/70" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14" data-reveal>
            <h3 className="mb-5 font-mono text-sm tracking-wide text-slate-500 uppercase">
              Earlier internships
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {earlierRoles.map((r) => (
                <div key={r.company} className="card p-5">
                  <div className="text-sm font-semibold text-slate-200">{r.company}</div>
                  <div className="mt-0.5 font-mono text-xs text-slate-500">
                    {r.role} · {r.period}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section id="projects" className="scroll-mt-28 py-24">
          <SectionHeading index="03" title="Projects" />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="card group flex flex-col p-6"
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-indigo-400/10 px-2.5 py-1 font-mono text-[11px] text-indigo-300">
                    {p.badge}
                  </span>
                  {(p.link || p.repo) && (
                    <a
                      href={p.link || p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 transition-colors hover:text-cyan-300"
                      aria-label={`Open ${p.title}`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </a>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100 transition-colors group-hover:text-indigo-200">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ SKILLS ============ */}
        <section id="skills" className="scroll-mt-28 py-24">
          <SectionHeading index="04" title="Skills" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, i) => (
              <div
                key={group.group}
                className="card p-6"
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <h3 className="font-mono text-sm text-cyan-300/90">{group.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ EDUCATION & RECOGNITION ============ */}
        <section id="education" className="scroll-mt-28 py-24">
          <SectionHeading index="05" title="Education & Recognition" />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              {education.map((e, i) => (
                <div
                  key={e.school}
                  className="card p-6"
                  data-reveal
                  style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-100">{e.school}</h3>
                    <span className="font-mono text-xs text-slate-500">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-indigo-300">{e.degree}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{e.detail}</p>
                </div>
              ))}
            </div>
            <div className="card p-6" data-reveal style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
              <h3 className="font-mono text-sm text-cyan-300/90">Recognition</h3>
              <ul className="mt-4 space-y-3">
                {recognition.map((r) => (
                  <li key={r} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                    <span className="mt-1 text-cyan-400" aria-hidden>◆</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="scroll-mt-28 py-24 pb-32 text-center">
          <p className="font-mono text-sm text-cyan-300" data-reveal>
            06 · What&apos;s next?
          </p>
          <h2
            className="mt-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            Let&apos;s build something<span className="text-gradient"> great.</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-400"
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            Whether it&apos;s backend architecture, cloud infrastructure, or just a good
            engineering conversation — my inbox is always open.
          </p>
          <div
            className="mt-9 flex items-center justify-center gap-4"
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_32px_rgba(99,102,241,0.5)]"
            >
              Say hello
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-7 py-3.5 text-sm font-medium text-slate-300 transition-all hover:border-indigo-400/50 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-line py-8 text-center font-mono text-xs text-slate-600">
        Designed & built by Ayush Aggarwal ·{" "}
        <a
          href="https://github.com/ayush51/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-slate-700 underline-offset-4 transition-colors hover:text-slate-400"
        >
          view source
        </a>
      </footer>
    </div>
  );
}
