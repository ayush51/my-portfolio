"use client";

import { useEffect, useRef } from "react";

/** Scroll-reveal for [data-reveal] elements + mouse-following glow + scroll progress bar. */
export default function Effects() {
  const glowRef = useRef<HTMLDivElement>(null);
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

    const onMove = (e: PointerEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };

    const onScroll = () => {
      if (barRef.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        barRef.current.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
      }
    };

    const fine = window.matchMedia("(pointer: fine)").matches;
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      if (fine) window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={barRef}
        className="fixed top-0 left-0 z-[60] h-[2px] bg-gradient-to-r from-indigo-400 to-cyan-400"
        aria-hidden
      />
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-0 hidden size-[500px] rounded-full opacity-60 md:block"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.09), transparent 60%)",
        }}
      />
    </>
  );
}
