"use client";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { usePreferences } from "./PreferencesProvider";

export default function SectionApplications() {
  const { t } = usePreferences();

  return (
    <section id="anwendungen" className="section-anchor py-24 lg:py-32 bg-paper">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeader
          number="05"
          eyebrow={t.applications.eyebrow}
          title={t.applications.title}
          lead={t.applications.lead}
        />

        <Reveal>
          <div data-reveal-stagger className="mt-16 grid lg:grid-cols-[1.5fr_1fr] gap-6">
            {/* Business cards */}
            <div className="bg-paper-soft border border-line rounded-sm p-10 lg:p-14 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 max-w-2xl w-full">
                <div className="aspect-[1.7/1] bg-paper rounded-sm p-5 shadow-sm flex flex-col justify-between">
                  <Image src="/sli_logo_green.png" alt="" width={180} height={42} className="h-5 w-auto" aria-hidden="true" />
                  <div>
                    <div className="text-[10px] font-medium text-ink">{t.applications.cardName}</div>
                    <div className="text-[8px] text-ink-muted">{t.applications.cardRole}</div>
                  </div>
                </div>
                <div className="aspect-[1.7/1] bg-brand rounded-sm p-5 shadow-sm flex flex-col justify-between text-white">
                  <Image src="/sli_logo.png" alt="" width={180} height={42} className="h-5 w-auto" aria-hidden="true" />
                  <div>
                    <div className="text-[8px] text-white/70">slichemicals.com</div>
                    <div className="text-[8px] text-white/70">+49 (0) ··· ····</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Letterhead */}
            <div className="bg-paper border border-line rounded-sm p-10 lg:p-12 flex items-center justify-center">
              <div className="bg-paper-soft w-full max-w-xs aspect-[1/1.41] rounded-sm shadow-sm p-6 flex flex-col">
                <Image src="/sli_logo_green.png" alt="" width={180} height={42} className="h-5 w-auto self-end" aria-hidden="true" />
                <div className="mt-6 space-y-1.5">
                  <div className="h-1.5 w-3/4 bg-line rounded-full" />
                  <div className="h-1.5 w-1/2 bg-line rounded-full" />
                </div>
                <div className="mt-6 space-y-1">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-1 bg-line rounded-full" style={{ width: `${85 - (i % 4) * 8}%` }} />
                  ))}
                </div>
                <div className="mt-auto h-1 w-1/3 bg-brand rounded-full" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div data-reveal-stagger className="mt-6 grid lg:grid-cols-2 gap-6">
            {/* Web preview */}
            <div className="aspect-[16/10] bg-paper-soft border border-line rounded-sm p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="ml-3 text-[10px] text-ink-muted tabular-nums">slichemicals.com</span>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-medium tracking-tight text-ink leading-tight">
                  {t.applications.webHeadline1}
                  <br />
                  <span className="text-brand">{t.applications.webHeadline2}</span>
                </div>
                <div className="mt-5 inline-flex h-9 px-4 items-center bg-brand text-white text-xs font-medium rounded-full w-fit">
                  {t.applications.webCta}
                </div>
              </div>
            </div>

            {/* Trade show */}
            <div className="aspect-[16/10] bg-brand rounded-sm p-8 lg:p-10 text-white relative overflow-hidden">
              <p className="eyebrow text-white/70">{t.applications.tradeEyebrow}</p>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.02]">
                  {t.applications.tradeHeadline1}
                  <br />
                  {t.applications.tradeHeadline2}
                </div>
                <Image src="/sli_logo.png" alt="" width={240} height={56} className="h-7 w-auto mt-6" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
