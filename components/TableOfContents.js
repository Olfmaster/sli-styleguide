"use client";
import Reveal from "./Reveal";
import { usePreferences } from "./PreferencesProvider";

export default function TableOfContents() {
  const { t } = usePreferences();

  return (
    <section className="py-20 lg:py-28 border-y border-line bg-paper-soft" aria-label="Sections">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-20">
          <Reveal>
            <div data-reveal>
              <p className="eyebrow mb-4">{t.toc.eyebrow}</p>
              <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-ink">
                {t.toc.heading}
              </h2>
              <p className="mt-4 text-sm text-ink-muted max-w-xs">
                {t.toc.lead}
              </p>
            </div>
          </Reveal>

          <Reveal>
            <ul data-reveal-stagger className="grid sm:grid-cols-2 gap-px bg-line border border-line">
              {t.toc.items.map((item) => (
                <li key={item.id} className="bg-paper-soft">
                  <a
                    href={`#${item.id}`}
                    className="group flex items-start gap-6 p-6 lg:p-8 hover:bg-paper transition-colors"
                  >
                    <span className="section-no text-brand text-2xl font-medium tabular-nums shrink-0">
                      {item.no}
                    </span>
                    <span className="flex-1">
                      <span className="block text-xl font-medium text-ink group-hover:text-brand transition-colors">
                        {item.title}
                      </span>
                      <span className="block text-sm text-ink-muted mt-1">
                        {item.note}
                      </span>
                    </span>
                    <span className="shrink-0 text-ink-muted group-hover:text-brand group-hover:translate-x-1 transition-all" aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
