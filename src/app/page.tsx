import Image from "next/image";
import { Fragment } from "react";
import CountUp from "@/components/CountUp";
import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import {
  profile,
  stats,
  skills,
  experience,
  earlierRoles,
  projects,
  caseStudy,
  education,
  recognition,
} from "@/data/resume";

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4" data-reveal>
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-line" />
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

function Highlights({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className="mt-5 grid gap-x-8 gap-y-5 first:mt-0 sm:grid-cols-2">
      {items.map((h) => (
        <li key={h.title}>
          <div className="text-[15px] font-semibold text-slate-100">{h.title}</div>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">{h.text}</p>
        </li>
      ))}
    </ul>
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

const arrowIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4" aria-hidden>
    <path d="M7 17 17 7M9 7h8v8" />
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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <Effects />
      <Nav />

      <main id="main" className="relative z-10 mx-auto max-w-6xl px-6">
        {/* ============ HERO ============ */}
        <section className="grid min-h-[82svh] items-center gap-10 pt-28 pb-12 md:grid-cols-[1fr_auto]">
          <div className="flex flex-col">
          <p
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-sm font-medium text-accent"
            data-reveal
          >
            {profile.role} · {profile.company}
          </p>
          <h1
            className="text-5xl font-bold tracking-tight text-slate-50 sm:text-7xl"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            Ayush Aggarwal
          </h1>
          <h2
            className="mt-4 text-2xl font-semibold tracking-tight text-balance text-slate-400 sm:text-4xl"
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            I build <span className="text-gradient">data platforms</span> and the{" "}
            <span className="text-gradient">products</span> on top of them
          </h2>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            <span className="text-slate-200">{profile.headline}</span> {profile.tagline}
          </p>
          <div
            className="mt-9 flex flex-wrap items-center gap-4"
            data-reveal
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-all hover:brightness-110"
            >
              View projects
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-accent/50 hover:text-white"
            >
              Get in touch
            </a>
            <a
              href="/Ayush_Aggarwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-accent/50 hover:text-white"
            >
              Résumé
            </a>
            <div className="ml-1 flex items-center gap-4 text-slate-400">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
                {linkedInIcon}
              </a>
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
                  {githubIcon}
                </a>
              )}
              <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-accent">
                {mailIcon}
              </a>
            </div>
          </div>

          {/* proof strip */}
          <div
            className="mt-12 grid max-w-3xl grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4"
            data-reveal
            style={{ "--reveal-delay": "400ms" } as React.CSSProperties}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-gradient text-2xl font-bold sm:text-3xl">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-1 text-xs leading-snug text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>

          <div
            className="mt-12 flex items-center gap-3 font-mono text-xs text-slate-500"
            data-reveal
            style={{ "--reveal-delay": "480ms" } as React.CSSProperties}
          >
            <span className="relative flex size-2">
              <span className="pulse-dot relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {profile.location}
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-emerald-300">
              {profile.availability}
            </span>
          </div>
          </div>
          <div className="order-first md:order-none" data-reveal style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
            <Image
              src="/ayush.jpg"
              alt="Portrait of Ayush Aggarwal"
              width={720}
              height={720}
              priority
              sizes="(min-width: 768px) 288px, 128px"
              className="size-32 rounded-2xl border border-line object-cover sm:size-40 md:size-72"
            />
          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section id="projects" className="scroll-mt-28 py-20">
          <SectionHeading index="01" title="Projects" />
          <p className="-mt-4 mb-8 max-w-2xl text-slate-400" data-reveal>
            Side projects I build end to end, from schema and security model to shipped product.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="card group flex flex-col overflow-hidden"
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 90}ms` } as React.CSSProperties}
              >
                <div className={`relative overflow-hidden bg-[#1c1514] ${p.shots ? "h-64" : "h-24"}`}>
                  <span className="absolute top-3 right-3 z-10 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[11px] text-slate-200 backdrop-blur">
                    {p.badge}
                  </span>
                  {p.shots && p.shotKind === "phone" && (
                    <div className="flex h-full items-start justify-center gap-3 px-6 pt-10">
                      {p.shots.map((sh, n) => (
                        <Image
                          key={sh.src}
                          src={sh.src}
                          alt={sh.alt}
                          width={sh.w}
                          height={sh.h}
                          sizes="130px"
                          className={`w-[30%] max-w-[130px] rounded-t-2xl border border-b-0 border-white/15 shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-2 ${n % 2 === 0 ? "mt-6" : ""}`}
                        />
                      ))}
                    </div>
                  )}
                  {p.shots && p.shotKind === "desktop" && (
                    <>
                      <Image
                        src={p.shots[0].src}
                        alt={p.shots[0].alt}
                        width={p.shots[0].w}
                        height={p.shots[0].h}
                        sizes="320px"
                        className="absolute top-10 left-6 w-[62%] rounded-t-lg border border-b-0 border-white/15 shadow-2xl shadow-black/50"
                      />
                      <Image
                        src={p.shots[1].src}
                        alt={p.shots[1].alt}
                        width={p.shots[1].w}
                        height={p.shots[1].h}
                        sizes="320px"
                        className="absolute top-20 right-6 w-[62%] rounded-t-lg border border-b-0 border-white/15 shadow-2xl shadow-black/60 transition-transform duration-500 group-hover:-translate-y-2"
                      />
                    </>
                  )}
                  {!p.shots && (
                    <span className="absolute top-1/2 left-6 -translate-y-1/2 font-mono text-3xl font-semibold text-white/60 select-none">{p.glyph}</span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-slate-100">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>
                  {p.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-400">
                          <span className="mt-[8px] size-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  {(p.link || p.repo) && (
                    <div className="mt-6 flex gap-5 text-sm">
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent transition-colors hover:text-accent-soft">
                          Live site {arrowIcon}
                        </a>
                      )}
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-slate-200">
                          View source {arrowIcon}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ CASE STUDY ============ */}
        <section id="case-study" className="scroll-mt-28 py-20">
          <SectionHeading index="02" title={`Case study: ${caseStudy.project}`} />
          <p className="max-w-3xl text-lg leading-relaxed text-slate-400" data-reveal>
            {caseStudy.summary}
          </p>
          <div className="mt-8 grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]" data-reveal>
            {caseStudy.flow.map((f, i) => (
              <Fragment key={f.label}>
                {i > 0 && (
                  <span className="hidden items-center justify-center font-mono text-slate-600 sm:flex" aria-hidden>
                    →
                  </span>
                )}
                <div className="card p-5 text-center">
                  <div className="font-mono text-sm text-accent">{f.label}</div>
                  <div className="mt-1 text-xs text-slate-500">{f.note}</div>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {caseStudy.decisions.map((d, i) => (
              <div
                key={d.problem}
                className="card p-6"
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
              >
                <h3 className="font-semibold text-slate-100">{d.problem}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{d.decision}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-6 text-sm" data-reveal>
            <a href="https://github.com/ayush51/social-rommies-hub/blob/main/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent transition-colors hover:text-accent-soft">
              Read the architecture doc {arrowIcon}
            </a>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section id="experience" className="scroll-mt-28 py-20">
          <SectionHeading index="03" title="Experience" />
          <div className="relative space-y-10 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-line">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="relative pl-10" data-reveal>
                <span
                  className={`absolute top-2 left-0 size-[15px] rounded-full border-2 ${
                    job.current
                      ? "border-accent bg-accent/30"
                      : "border-slate-600 bg-ink"
                  }`}
                  aria-hidden
                />
                <div className="card p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold text-slate-100">
                      {job.role}{" "}
                      <span className="text-accent">@ {job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-slate-500">{job.period}</span>
                  </div>
                  <Highlights items={job.highlights} />
                  {job.more && job.more.length > 0 && (
                    <details className="group mt-5">
                      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-soft [&::-webkit-details-marker]:hidden">
                        <span className="group-open:hidden">Show {job.more.length} more</span>
                        <span className="hidden group-open:inline">Show less</span>
                      </summary>
                      <div className="mt-5">
                        <Highlights items={job.more} />
                      </div>
                    </details>
                  )}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4" data-reveal>
            <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-slate-500">
              {earlierRoles.map((r) => (
                <span key={r.company}>
                  {r.company} · {r.role.replace("Software Developer ", "")} · {r.period}
                </span>
              ))}
            </div>
            <a
              href="/Ayush_Aggarwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-soft"
            >
              Full history in the resume {arrowIcon}
            </a>
          </div>
        </section>

        {/* ============ SKILLS ============ */}
        <section id="skills" className="scroll-mt-28 py-20">
          <SectionHeading index="04" title="Skills" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, i) => (
              <div
                key={group.group}
                className="card p-6"
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <h3 className="font-mono text-sm text-accent">{group.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className="scroll-mt-28 py-20">
          <SectionHeading index="05" title="About" />
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="space-y-4 text-lg leading-relaxed text-slate-400 lg:col-span-3" data-reveal>
              <p>
                I&apos;m a software engineer with{" "}
                <span className="text-slate-200">4+ years of experience</span> across backend,
                platform, and cloud work, currently at{" "}
                <span className="text-slate-200">Ellucian</span>, where I own the
                Metabase-Athena integration and help build the role-to-data access that sits
                behind lakehouse reporting.
              </p>
              <p>
                I&apos;m full-stack by range: React and TypeScript on the front, Python and
                Node.js APIs behind it, but{" "}
                <span className="text-slate-200">backend and cloud infrastructure</span> is
                where I go deepest. I like problems at the intersection of data,
                infrastructure, and product, and I have a habit of automating away whatever
                slows a team down.
              </p>
            </div>
            <div className="space-y-4 lg:col-span-2">
              {education.map((e, i) => (
                <div
                  key={e.school}
                  className="card p-5"
                  data-reveal
                  style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-slate-100">{e.school}</h3>
                    <span className="font-mono text-xs text-slate-500">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-accent">{e.degree}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{e.detail}</p>
                </div>
              ))}
              <div className="card p-5" data-reveal style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
                <h3 className="font-mono text-sm text-accent">Recognition</h3>
                <ul className="mt-3 space-y-2">
                  {recognition.map((r) => (
                    <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                      <span className="mt-0.5 text-accent" aria-hidden>◆</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="scroll-mt-28 py-20 pb-32 text-center">
          <p className="font-mono text-sm text-accent" data-reveal>
            06 · What&apos;s next?
          </p>
          <h2
            className="mt-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            Let&apos;s build something<span className="text-gradient"> great</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-400"
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            Whether it&apos;s backend architecture, cloud infrastructure, or just a good
            engineering conversation, my inbox is always open.
          </p>
          <div
            className="mt-9 flex items-center justify-center gap-4"
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:brightness-110"
            >
              Say hello
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-7 py-3.5 text-sm font-medium text-slate-300 transition-all hover:border-accent/50 hover:text-white"
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
