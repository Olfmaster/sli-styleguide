"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Wraps children and reveals them on scroll.
 * Targets every descendant with [data-reveal].
 * Use [data-reveal-stagger] on a container to stagger its direct children.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  start = "top 80%",
  duration = 0.9,
  y = 28,
  className,
  ...rest
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const single = root.querySelectorAll(":scope [data-reveal]");
      single.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start, once: true },
          }
        );
      });

      const groups = root.querySelectorAll(":scope [data-reveal-stagger]");
      groups.forEach((group) => {
        const items = group.children;
        gsap.fromTo(
          items,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: group, start, once: true },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, [start, duration, y]);

  return (
    <Tag ref={rootRef} className={className} {...rest}>
      {children}
    </Tag>
  );
}
