"use client";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { usePreferences } from "./PreferencesProvider";

export default function SectionLogo() {
  const { t } = usePreferences();

  return (
    <section id="logo" className="section-anchor py-24 lg:py-32 bg-paper">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeader
          number="01"
          eyebrow={t.logo.eyebrow}
          title={t.logo.title}
          lead={t.logo.lead}
        />

        {/* Logo showcase */}
        <Reveal>
          <div data-reveal-stagger className="mt-16 grid lg:grid-cols-[1.4fr_1fr] gap-6">
            <div className="aspect-[16/10] flex items-center justify-center bg-paper-soft border border-line rounded-sm p-12">
              <Image
                src="/sli_logo_green.png"
                alt={t.logo.altLight}
                width={1024}
                height={240}
                className="max-h-40 w-auto"
              />
            </div>
            <div className="aspect-[16/10] flex items-center justify-center bg-brand rounded-sm p-12">
              <Image
                src="/sli_logo.png"
                alt={t.logo.altBrand}
                width={1024}
                height={240}
                className="max-h-40 w-auto"
              />
            </div>
          </div>
        </Reveal>

        {/* Rules grid */}
        <Reveal>
          <div data-reveal-stagger className="mt-12 grid md:grid-cols-3 gap-px bg-line border border-line">
            {t.logo.rules.map((rule) => (
              <div key={rule.label} className="bg-paper p-8">
                <div className="eyebrow text-brand mb-3">{rule.label}</div>
                <p className="text-sm leading-relaxed text-ink-soft">{rule.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
