"use client";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { usePreferences } from "./PreferencesProvider";

const PRIMARY = { hex: "#006843", rgb: "0 · 104 · 67", cmyk: "92 · 38 · 88 · 36", pantone: "342 C" };

export default function SectionColor() {
  const { t } = usePreferences();

  return (
    <section id="farben" className="section-anchor py-24 lg:py-32 bg-paper-soft">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeader
          number="02"
          eyebrow={t.color.eyebrow}
          title={t.color.title}
          lead={t.color.lead}
        />

        {/* Primary swatch */}
        <Reveal>
          <div data-reveal-stagger className="mt-16 grid lg:grid-cols-[1.5fr_1fr] gap-6">
            <div className="bg-brand rounded-sm p-10 lg:p-14 text-white relative overflow-hidden min-h-[360px] flex flex-col justify-between">
              <div>
                <p className="eyebrow text-white/70">{t.color.primaryEyebrow}</p>
                <div className="mt-6 text-5xl lg:text-7xl font-medium tracking-tight">
                  {t.color.primaryName}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <Kv k="HEX" v={PRIMARY.hex} />
                <Kv k="RGB" v={PRIMARY.rgb} />
                <Kv k="CMYK" v={PRIMARY.cmyk} />
                <Kv k="Pantone" v={PRIMARY.pantone} />
              </div>
            </div>

            <div data-reveal-stagger className="grid gap-6">
              {t.color.secondary.map((c) => (
                <div key={c.hex} className="flex items-center gap-5 p-5 bg-paper border border-line rounded-sm">
                  <div className="h-16 w-16 rounded-sm shrink-0 border border-line" style={{ backgroundColor: c.hex }} aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="text-base font-medium text-ink">{c.name}</div>
                    <div className="text-sm text-ink-muted tabular-nums">{c.hex}</div>
                    <div className="text-xs text-ink-muted mt-1">{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Neutrals */}
        <Reveal>
          <div data-reveal className="mt-16">
            <div className="flex items-baseline justify-between gap-6 mb-6">
              <h3 className="text-2xl font-medium tracking-tight text-ink">{t.color.neutralsHeading}</h3>
              <p className="text-sm text-ink-muted hidden sm:block">{t.color.neutralsLead}</p>
            </div>
            <div data-reveal-stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-line border border-line">
              {t.color.neutrals.map((c) => (
                <div key={c.hex} className="bg-paper">
                  <div className="h-24" style={{ backgroundColor: c.hex }} aria-hidden="true" />
                  <div className="p-4">
                    <div className="text-sm font-medium text-ink">{c.name}</div>
                    <div className="text-xs text-ink-muted tabular-nums mt-1">{c.hex}</div>
                    <div className="text-xs text-ink-muted mt-2">{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Accessibility */}
        <Reveal>
          <div data-reveal className="mt-12 p-6 lg:p-8 bg-brand-tint border border-brand/15 rounded-sm">
            <div className="grid md:grid-cols-[200px_1fr] gap-4">
              <div className="eyebrow text-brand-deep">{t.color.a11yEyebrow}</div>
              <p className="text-sm text-ink-soft leading-relaxed">{t.color.a11yText}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Kv({ k, v }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">{k}</div>
      <div className="text-sm font-medium tabular-nums mt-1">{v}</div>
    </div>
  );
}
