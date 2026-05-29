import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-soft mt-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image src="/sli_logo_green.png" alt="SLI Chemicals" width={240} height={56} className="h-9 w-auto" />
          </div>
          <p className="text-sm leading-relaxed text-ink-soft max-w-md">
            Your Partner for Specialty Chemicals and Natural Raw Materials in Beauty, Health, and Pet Food.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Brand Portal</div>
          <ul className="space-y-2 text-sm text-ink-soft">
            <li><a href="#downloads" className="hover:text-brand link-underline">Logo & Asset Downloads</a></li>
            <li><a href="#farben" className="hover:text-brand link-underline">Farb-Tokens</a></li>
            <li><a href="#anwendungen" className="hover:text-brand link-underline">Anwendungsbeispiele</a></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Kontakt</div>
          <ul className="space-y-2 text-sm text-ink-soft">
            <li>
              <a
                href="https://www.slichemicals.com"
                target="_blank"
                rel="noopener"
                className="hover:text-brand link-underline"
              >
                slichemicals.com
              </a>
            </li>
            <li><a href="mailto:info@slichemicals.com" className="hover:text-brand link-underline">info@slichemicals.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-ink-muted">
          <span>© {new Date().getFullYear()} SLI Chemicals. Alle Rechte vorbehalten.</span>
          <span className="eyebrow">Brand Guidelines · v1.0</span>
        </div>
      </div>
    </footer>
  );
}
