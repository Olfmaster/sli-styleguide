import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const PRIMARY = {
  name: "SLI Green",
  hex: "#006843",
  rgb: "0 · 104 · 67",
  cmyk: "92 · 38 · 88 · 36",
  pantone: "342 C",
};

const SECONDARY = [
  { name: "Deep Green", hex: "#004A30", note: "Hover / Text auf hellem Grund" },
  { name: "Mid Green",  hex: "#2E8C63", note: "Akzente, Highlights" },
  { name: "Soft Mint",  hex: "#D6E8DF", note: "Flächen, Karten-Hintergrund" },
];

const NEUTRALS = [
  { name: "Ink",        hex: "#0F120F", note: "Primäre Textfarbe" },
  { name: "Ink Soft",   hex: "#2B2E2B", note: "Sekundärer Text" },
  { name: "Ink Muted",  hex: "#6A6F68", note: "Hilfstext, Captions" },
  { name: "Line",       hex: "#E2DFD6", note: "Trennlinien" },
  { name: "Paper",      hex: "#F6F4EE", note: "Hintergrund" },
  { name: "Paper Soft", hex: "#EFECE3", note: "Sekundärer Hintergrund" },
];

export default function SectionColor() {
  return (
    <section id="farben" className="section-anchor py-24 lg:py-32 bg-paper-soft">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeader
          number="02"
          eyebrow="Farbsystem"
          title="Farben"
          lead="Das SLI Green ist das Herz unserer Marke. Es trägt jede Anwendung und steht für unsere Wurzeln in Natur, Nachhaltigkeit und Forschung. Sekundärfarben und Neutrals strukturieren das Layout, ohne die Primärfarbe zu konkurrenzieren."
        />

        {/* Primary swatch — hero treatment */}
        <Reveal>
        <div data-reveal-stagger className="mt-16 grid lg:grid-cols-[1.5fr_1fr] gap-6">
          <div className="bg-brand rounded-sm p-10 lg:p-14 text-white relative overflow-hidden min-h-[360px] flex flex-col justify-between">
            <div>
              <p className="eyebrow text-white/70">Primär · 01</p>
              <div className="mt-6 text-5xl lg:text-7xl font-medium tracking-tight">
                {PRIMARY.name}
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
            {SECONDARY.map((c) => (
              <div key={c.hex} className="flex items-center gap-5 p-5 bg-paper border border-line rounded-sm">
                <div
                  className="h-16 w-16 rounded-sm shrink-0 border border-line"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden="true"
                />
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

        {/* Neutrals row */}
        <Reveal>
        <div data-reveal className="mt-16">
          <div className="flex items-baseline justify-between gap-6 mb-6">
            <h3 className="text-2xl font-medium tracking-tight">Neutrals</h3>
            <p className="text-sm text-ink-muted hidden sm:block">
              Für Text, Flächen und Trennlinien
            </p>
          </div>
          <div data-reveal-stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-line border border-line">
            {NEUTRALS.map((c) => (
              <div key={c.hex} className="bg-paper">
                <div
                  className="h-24"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden="true"
                />
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

        {/* Accessibility note */}
        <Reveal>
        <div data-reveal className="mt-12 p-6 lg:p-8 bg-brand-tint border border-brand/15 rounded-sm">
          <div className="grid md:grid-cols-[200px_1fr] gap-4">
            <div className="eyebrow text-brand-deep">Zugänglichkeit</div>
            <p className="text-sm text-ink-soft leading-relaxed">
              SLI Green auf Weiß erreicht ein Kontrastverhältnis von <span className="font-medium">8.4:1</span> —
              WCAG AAA für alle Textgrößen. Für Text auf SLI Green nutzen Sie ausschließlich
              Weiß oder Paper, niemals Ink.
            </p>
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
