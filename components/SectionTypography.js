"use client";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { usePreferences } from "./PreferencesProvider";

export default function SectionTypography() {
  const { t } = usePreferences();

  return (
    <section id="typografie" className="section-anchor py-24 lg:py-32 bg-paper">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeader
          number="03"
          eyebrow={t.typo.eyebrow}
          title={t.typo.title}
          lead={t.typo.lead}
        />

        {/* Typeface showcase */}
        <Reveal>
          <div data-reveal className="mt-16 bg-paper-soft border border-line rounded-sm overflow-hidden">
            <div className="p-10 lg:p-16 border-b border-line">
              <p className="eyebrow mb-6">{t.typo.faceEyebrow}</p>
              <div className="text-[120px] lg:text-[180px] leading-[0.92] font-medium tracking-[-0.035em] text-ink">
                Helvetica
              </div>
              <p className="mt-6 text-base text-ink-muted max-w-xl">
                {t.typo.faceLead}{" "}
                <code className="font-mono text-sm bg-paper px-2 py-0.5 rounded text-ink">
                  "Helvetica Neue", Helvetica, Arial, sans-serif
                </code>
              </p>
            </div>

            <div data-reveal-stagger className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
              {t.typo.weights.map((w) => (
                <div key={w.w} className="p-8">
                  <div className="text-5xl mb-3 text-ink" style={{ fontWeight: w.w }}>Aa</div>
                  <div className="text-sm font-medium text-ink">{w.name}</div>
                  <div className="text-xs text-ink-muted tabular-nums">{w.w}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Type scale */}
        <Reveal>
          <div data-reveal className="mt-16">
            <div className="flex items-baseline justify-between gap-6 mb-6">
              <h3 className="text-2xl font-medium tracking-tight text-ink">{t.typo.scaleHeading}</h3>
              <p className="text-sm text-ink-muted hidden sm:block">{t.typo.scaleLead}</p>
            </div>
            <ul data-reveal-stagger className="divide-y divide-line border-y border-line">
              {t.typo.scale.map((row) => (
                <li key={row.name} className="grid grid-cols-[120px_80px_1fr] sm:grid-cols-[180px_120px_1fr] gap-6 items-baseline py-5">
                  <div>
                    <div className="text-sm font-medium text-ink">{row.name}</div>
                    <div className="text-xs text-ink-muted tabular-nums mt-1">{row.size} · {row.weight}</div>
                  </div>
                  <div className="text-xs text-ink-muted tabular-nums">{row.weight}</div>
                  <div
                    className="text-ink truncate"
                    style={{
                      fontSize: row.size,
                      fontWeight: row.weight === "Medium" ? 500 : 400,
                      letterSpacing: "-0.015em",
                      lineHeight: 1.1,
                    }}
                  >
                    {row.sample}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
