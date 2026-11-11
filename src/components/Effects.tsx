"use client";

import { useEffect, useRef } from "react";

/** Scroll-reveal for [data-reveal] elements + scroll progress bar. */
export default function Effects() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

    const onScroll = () => {
      if (barRef.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        barRef.current.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div ref={barRef} className="fixed top-0 left-0 z-[60] h-[2px] bg-accent" aria-hidden />;
}
