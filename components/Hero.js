"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const eyebrow = root.querySelector("[data-hero-eyebrow]");
      const lines = root.querySelectorAll("[data-hero-line]");
      const lead = root.querySelector("[data-hero-lead]");
      const meta = root.querySelector("[data-hero-meta]");
      const bar = root.querySelector("[data-hero-bar]");

      gsap.set([eyebrow, lead, meta], { autoAlpha: 0, y: 18 });
      gsap.set(lines, { yPercent: 110 });
      gsap.set(bar, { scaleX: 0, transformOrigin: "0% 50%" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.55 })
        .to(lines, { yPercent: 0, duration: 0.95, stagger: 0.12 }, "-=0.25")
        .to(lead, { autoAlpha: 1, y: 0, duration: 0.55 }, "-=0.5")
        .to(meta, { autoAlpha: 1, y: 0, duration: 0.45 }, "-=0.35")
        .to(bar, { scaleX: 1, duration: 1.4, ease: "expo.out" }, "-=0.4");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative pt-20 pb-28 lg:pt-32 lg:pb-40 paper-grain overflow-hidden"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-end">
          <div>
            <p data-hero-eyebrow className="eyebrow mb-8 flex items-center gap-3">
              <span className="inline-block h-px w-10 bg-brand" aria-hidden="true" />
              Brand Guidelines · 2026
            </p>
            <h1 className="font-sans tracking-[-0.025em] text-[44px] leading-[1.02] sm:text-[64px] lg:text-[96px] xl:text-[112px] font-medium text-ink">
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-hero-line className="block">Für Beauty.</span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-hero-line className="block">Für Health.</span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-hero-line className="block text-brand">
                  Für alle, die formulieren.
                </span>
              </span>
            </h1>
          </div>

          <div className="lg:pb-6">
            <p
              data-hero-lead
              className="text-lg leading-relaxed text-ink-soft max-w-xl"
            >
              Dieses Brand-Book bündelt alle Bausteine der visuellen Identität
              von SLI Chemicals — Logo, Farben, Typografie, Bildsprache und
              Anwendungsbeispiele. Es richtet sich an alle, die unsere Marke in
              digitalen und gedruckten Medien sichtbar machen.
            </p>
            <p
              data-hero-meta
              className="mt-6 text-base leading-relaxed text-ink-muted max-w-xl"
            >
              Stand: Mai 2026. Bei Fragen zur Anwendung wenden Sie sich bitte
              an <a href="mailto:info@slichemicals.com" className="text-ink link-underline">info@slichemicals.com</a>.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-28 mx-auto max-w-[1320px] px-6 lg:px-10">
        <div data-hero-bar className="h-2 bg-brand rounded-full" aria-hidden="true" />
      </div>
    </section>
  );
}
