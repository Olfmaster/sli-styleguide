import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function SectionLogo() {
  return (
    <section id="logo" className="section-anchor py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeader
          number="01"
          eyebrow="Wortbildmarke"
          title="Das Logo"
          lead="Die SLI-Wortbildmarke ist der zentrale Identifikator unserer Marke. Sie wird stets ohne Modifikation verwendet — kein Verzerren, kein Neufärben, kein Hinzufügen von Effekten."
        />

        {/* Logo showcase */}
        <Reveal>
        <div data-reveal-stagger className="mt-16 grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <div className="aspect-[16/10] flex items-center justify-center bg-paper-soft border border-line rounded-sm p-12">
            <Image
              src="/sli_logo_green.png"
              alt="SLI Chemicals Logo auf hellem Hintergrund"
              width={1024}
              height={240}
              className="max-h-40 w-auto"
            />
          </div>
          <div className="aspect-[16/10] flex items-center justify-center bg-brand rounded-sm p-12">
            <Image
              src="/sli_logo.png"
              alt="SLI Chemicals Logo auf Markenfarbe"
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
          <Rule
            label="Schutzraum"
            text="Mindestens die Höhe des Buchstabens „S“ als Freiraum auf allen Seiten."
          />
          <Rule
            label="Mindestgröße"
            text="Print: 24 mm Breite · Digital: 120 px Breite — kleiner wird die Lesbarkeit beeinträchtigt."
          />
          <Rule
            label="Hintergrund"
            text="Auf hellen Flächen Originalfarbe, auf dunklen oder Markenfarbe ausschließlich weiß."
          />
        </div>
        </Reveal>
      </div>
    </section>
  );
}

function Rule({ label, text }) {
  return (
    <div className="bg-paper p-8">
      <div className="eyebrow text-brand mb-3">{label}</div>
      <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
    </div>
  );
}
