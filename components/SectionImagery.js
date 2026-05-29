"use client";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { usePreferences } from "./PreferencesProvider";

const IMAGES = [
  { image: "/SLI-Skin-Care-Ingredients-10-2023_web-1.jpg", crop: "object-[50%_30%]" },
  { image: "/Cover-Page-Skin-Care-Broschure-10.2025.jpg",  crop: "object-top" },
  { image: "/Sustainability-Tour.jpg",                      crop: "object-center" },
];

export default function SectionImagery() {
  const { t } = usePreferences();

  return (
    <section id="bildsprache" className="section-anchor py-24 lg:py-32 bg-paper-soft">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeader
          number="04"
          eyebrow={t.imagery.eyebrow}
          title={t.imagery.title}
          lead={t.imagery.lead}
        />

        <Reveal>
          <div data-reveal-stagger className="mt-16 grid md:grid-cols-3 gap-6">
            {t.imagery.themes.map((theme, i) => (
              <article
                key={theme.title}
                className="group border border-line rounded-sm overflow-hidden bg-paper flex flex-col"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-ink">
                  <Image
                    src={IMAGES[i].image}
                    alt={theme.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover ${IMAGES[i].crop} transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]`}
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-paper/90 backdrop-blur-sm rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                    <span className="text-[11px] font-medium text-ink tracking-wide">{theme.badge}</span>
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex-1">
                  <h3 className="text-xl font-medium text-ink">{theme.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{theme.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div data-reveal-stagger className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-6 lg:p-8 border border-brand/30 rounded-sm bg-brand-tint">
              <div className="eyebrow text-brand-deep mb-3">{t.imagery.doHeading}</div>
              <ul className="space-y-2 text-sm text-ink-soft list-disc pl-5">
                {t.imagery.doList.map((line) => <li key={line}>{line}</li>)}
              </ul>
            </div>
            <div className="p-6 lg:p-8 border border-line rounded-sm bg-paper">
              <div className="eyebrow text-[#c63a2e] mb-3">{t.imagery.dontHeading}</div>
              <ul className="space-y-2 text-sm text-ink-soft list-disc pl-5">
                {t.imagery.dontList.map((line) => <li key={line}>{line}</li>)}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
