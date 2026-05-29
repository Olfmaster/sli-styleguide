import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "#logo", label: "Logo" },
  { href: "#farben", label: "Farben" },
  { href: "#typografie", label: "Typografie" },
  { href: "#bildsprache", label: "Bildsprache" },
  { href: "#anwendungen", label: "Anwendungen" },
  { href: "#downloads", label: "Downloads" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-3" aria-label="SLI Chemicals — Startseite">
          <Image
            src="/sli_logo_green.png"
            alt="SLI Chemicals"
            width={240}
            height={56}
            priority
            className="h-8 w-auto"
          />
          <span className="hidden sm:inline-block h-4 w-px bg-line" aria-hidden="true" />
          <span className="hidden sm:inline-block eyebrow text-ink-soft">Brand Guidelines</span>
        </Link>

        <nav aria-label="Sektionen" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-[13px] text-ink-soft">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-brand transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="https://www.slichemicals.com"
          target="_blank"
          rel="noopener"
          className="hidden md:inline-flex items-center gap-2 text-[13px] font-medium text-ink hover:text-brand transition-colors"
        >
          slichemicals.com
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
