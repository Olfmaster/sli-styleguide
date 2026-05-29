import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const THEMES = [
  {
    title: "Editorial",
    description:
      "Hochwertig inszenierte Aufnahmen für Cover-Motive und Print-Hero­bilder. Klare Bildachse, ein Hauptmotiv, kontrolliertes Licht.",
    image: "/SLI-Skin-Care-Ingredients-10-2023_web-1.jpg",
    badge: "Skin Care Ingredients",
    crop: "object-[50%_30%]",
  },
  {
    title: "Brand Cover",
    description:
      "Broschüren- und Präsentations­titel. Logo oben rechts, Markenfarbe als Akzent, dezenter Textblock unter dem Motiv.",
    image: "/Cover-Page-Skin-Care-Broschure-10.2025.jpg",
    badge: "Cosmetic Ingredients",
    crop: "object-top",
  },
  {
    title: "Lifestyle",
    description:
      "Authentische Porträts mit natürlichem Licht. Anwendungsnah, ohne Stockfoto-Klischee — zeigt den Menschen vor dem Produkt.",
    image: "/Sustainability-Tour.jpg",
    badge: "Sustainability",
    crop: "object-center",
  },
];

export default function SectionImagery() {
  return (
    <section id="bildsprache" className="section-anchor py-24 lg:py-32 bg-paper-soft">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeader
          number="04"
          eyebrow="Bildwelt"
          title="Bildsprache"
          lead="Bilder bei SLI sind nie Dekoration. Sie zeigen Anwendung, Wirkung und Werte. Drei Bildtypen begleiten uns über alle Touchpoints — Editorial, Brand Cover und Lifestyle."
        />

        <Reveal>
          <div data-reveal-stagger className="mt-16 grid md:grid-cols-3 gap-6">
            {THEMES.map((t) => (
              <article
                key={t.title}
                className="group border border-line rounded-sm overflow-hidden bg-paper flex flex-col"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-ink">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover ${t.crop} transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]`}
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-paper/90 backdrop-blur-sm rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                    <span className="text-[11px] font-medium text-ink tracking-wide">{t.badge}</span>
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex-1">
                  <h3 className="text-xl font-medium text-ink">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {t.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Do / don't rules */}
        <Reveal>
          <div data-reveal-stagger className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-6 lg:p-8 border border-brand/30 rounded-sm bg-brand-tint">
              <div className="eyebrow text-brand-deep mb-3">So machen wir es</div>
              <ul className="space-y-2 text-sm text-ink-soft list-disc pl-5">
                <li>Authentische Materialien, echte Texturen</li>
                <li>Natürliches Licht, warme Schatten</li>
                <li>Eine klare Bildaussage pro Aufnahme</li>
                <li>Logo oben rechts, Markenfarbe als Akzent</li>
              </ul>
            </div>
            <div className="p-6 lg:p-8 border border-line rounded-sm bg-paper">
              <div className="eyebrow text-[#c63a2e] mb-3">Vermeiden</div>
              <ul className="space-y-2 text-sm text-ink-soft list-disc pl-5">
                <li>Generische Stock-Lab-Coats und Reagenzgläser</li>
                <li>Übersättigte oder kühl-blaue Tonalität</li>
                <li>Collagen aus mehreren Motiven</li>
                <li>Text-im-Bild ohne klaren Zweck</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
