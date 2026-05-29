import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const SCALE = [
  { name: "Display",   size: "96px", weight: "Medium",  sample: "Specialty." },
  { name: "H1",        size: "64px", weight: "Medium",  sample: "Brand Guidelines" },
  { name: "H2",        size: "40px", weight: "Medium",  sample: "Our color system" },
  { name: "H3",        size: "24px", weight: "Medium",  sample: "Personal Care" },
  { name: "Body Lead", size: "18px", weight: "Regular", sample: "Your partner in formulation." },
  { name: "Body",      size: "16px", weight: "Regular", sample: "Specialty chemicals and natural raw materials." },
  { name: "Caption",   size: "12px", weight: "Regular", sample: "Stand: Mai 2026" },
];

const WEIGHTS = [
  { w: 300, name: "Light" },
  { w: 400, name: "Regular" },
  { w: 500, name: "Medium" },
  { w: 700, name: "Bold" },
];

export default function SectionTypography() {
  return (
    <section id="typografie" className="section-anchor py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeader
          number="03"
          eyebrow="Schrift"
          title="Typografie"
          lead="Helvetica ist die Stimme der Marke — neutral, präzise, international lesbar. Sie spiegelt unsere wissenschaftliche Haltung wider, ohne distanziert zu wirken."
        />

        {/* Typeface showcase */}
        <Reveal>
        <div data-reveal className="mt-16 bg-paper-soft border border-line rounded-sm overflow-hidden">
          <div className="p-10 lg:p-16 border-b border-line">
            <p className="eyebrow mb-6">Haupt-Schrift · seit 2026</p>
            <div className="text-[120px] lg:text-[180px] leading-[0.92] font-medium tracking-[-0.035em]">
              Helvetica
            </div>
            <p className="mt-6 text-base text-ink-muted max-w-xl">
              System-sicher, weltweit verfügbar — Helvetica Neue mit Fallback auf Arial.
              Web-Stack: <code className="font-mono text-sm bg-paper px-2 py-0.5 rounded">"Helvetica Neue", Helvetica, Arial, sans-serif</code>
            </p>
          </div>

          {/* Weights */}
          <div data-reveal-stagger className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
            {WEIGHTS.map((w) => (
              <div key={w.w} className="p-8">
                <div className="text-5xl mb-3" style={{ fontWeight: w.w }}>Aa</div>
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
            <h3 className="text-2xl font-medium tracking-tight">Typ-Skala</h3>
            <p className="text-sm text-ink-muted hidden sm:block">
              Konsistente Hierarchie über alle Touchpoints
            </p>
          </div>
          <ul data-reveal-stagger className="divide-y divide-line border-y border-line">
            {SCALE.map((row) => (
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
