"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-ink/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-slate-200">
          <span className="text-accent">~/</span>ayush
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active === id
                    ? "bg-indigo-400/10 text-indigo-300"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Ayush_Aggarwal_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-indigo-400/40 px-4 py-1.5 text-sm font-medium text-indigo-300 transition-all hover:border-indigo-300 hover:bg-indigo-400/10 hover:shadow-[0_0_20px_rgba(129,140,248,0.25)]"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
