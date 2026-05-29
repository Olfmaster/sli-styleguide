"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SectionHeader({ number, eyebrow, title, lead }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const numberEl = root.querySelector("[data-h-number]");
      const eyebrowEl = root.querySelector("[data-h-eyebrow]");
      const titleEl = root.querySelector("[data-h-title]");
      const leadEl = root.querySelector("[data-h-lead]");

      gsap.set([eyebrowEl, leadEl], { autoAlpha: 0, y: 20 });
      gsap.set(numberEl, { autoAlpha: 0, x: -40 });
      gsap.set(titleEl, { autoAlpha: 0, y: 32 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: root, start: "top 75%", once: true },
      });
      tl.to(numberEl, { autoAlpha: 1, x: 0, duration: 0.8 })
        .to(eyebrowEl, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.55")
        .to(titleEl, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.5")
        .to(leadEl, { autoAlpha: 1, y: 0, duration: 0.55 }, "-=0.45");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="grid lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 items-start">
      <div data-h-number className="section-no text-brand text-5xl lg:text-6xl font-medium tabular-nums leading-none">
        {number}
      </div>
      <div className="max-w-3xl">
        {eyebrow ? <p data-h-eyebrow className="eyebrow mb-4">{eyebrow}</p> : null}
        <h2 data-h-title className="text-4xl lg:text-6xl font-medium tracking-tight leading-[1.05]">
          {title}
        </h2>
        {lead ? (
          <p data-h-lead className="mt-6 text-lg leading-relaxed text-ink-soft max-w-2xl">
            {lead}
          </p>
        ) : null}
      </div>
    </div>
  );
}
