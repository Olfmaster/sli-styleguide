import Reveal from "./Reveal";

const ITEMS = [
  { no: "01", id: "logo", title: "Logo", note: "Wortbildmarke, Schutzraum, Anwendung" },
  { no: "02", id: "farben", title: "Farben", note: "Primär- und Sekundärpalette, Tokens" },
  { no: "03", id: "typografie", title: "Typografie", note: "Helvetica · Display & Body" },
  { no: "04", id: "bildsprache", title: "Bildsprache", note: "Editorial · Brand Cover · Lifestyle" },
  { no: "05", id: "anwendungen", title: "Anwendungen", note: "Print, Web, Messeauftritt" },
  { no: "06", id: "downloads", title: "Downloads", note: "Logo-Pack, Tokens, Templates" },
];

export default function TableOfContents() {
  return (
    <section className="py-20 lg:py-28 border-y border-line bg-paper-soft" aria-label="Inhaltsverzeichnis">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-20">
          <Reveal>
            <div data-reveal>
              <p className="eyebrow mb-4">Inhalt</p>
              <h2 className="text-3xl lg:text-4xl font-medium tracking-tight">
                Sechs Kapitel.
              </h2>
              <p className="mt-4 text-sm text-ink-muted max-w-xs">
                Springen Sie direkt zu den Themen, die Sie für Ihr Projekt brauchen.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <ul data-reveal-stagger className="grid sm:grid-cols-2 gap-px bg-line border border-line">
              {ITEMS.map((item) => (
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
