"use client";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { usePreferences } from "./PreferencesProvider";

export default function SectionDownloads() {
  const { t } = usePreferences();

  return (
    <section id="downloads" className="section-anchor py-24 lg:py-32 bg-paper-soft">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeader
          number="06"
          eyebrow={t.downloads.eyebrow}
          title={t.downloads.title}
          lead={t.downloads.lead}
        />

        <Reveal>
          <ul data-reveal-stagger className="mt-16 grid sm:grid-cols-2 gap-px bg-line border border-line">
            {t.downloads.packs.map((pack) => (
              <li key={pack.title} className="bg-paper">
                <a
                  href="#"
                  className="group flex items-start gap-6 p-7 lg:p-9 hover:bg-paper-soft transition-colors"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand text-lg" aria-hidden="true">↓</span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-xl font-medium text-ink group-hover:text-brand transition-colors">
                      {pack.title}
                    </span>
                    <span className="block text-sm leading-relaxed text-ink-soft mt-2">
                      {pack.desc}
                    </span>
                    <span className="eyebrow mt-4 inline-block">{pack.format}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div data-reveal className="mt-16 p-8 lg:p-12 bg-brand text-white rounded-sm grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <p className="eyebrow text-white/70 mb-4">{t.downloads.contactEyebrow}</p>
              <h3 className="text-3xl lg:text-4xl font-medium tracking-tight leading-tight">
                {t.downloads.contactHeading}
              </h3>
              <p className="mt-4 text-white/80 leading-relaxed max-w-xl">
                {t.downloads.contactLead}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@slichemicals.com"
                className="inline-flex items-center justify-between gap-3 px-5 py-4 bg-white text-brand font-medium rounded-sm hover:bg-paper transition-colors"
              >
                info@slichemicals.com
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://www.slichemicals.com"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-between gap-3 px-5 py-4 border border-white/30 text-white font-medium rounded-sm hover:bg-white/10 transition-colors"
              >
                slichemicals.com
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
