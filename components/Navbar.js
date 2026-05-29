"use client";
import Image from "next/image";
import Link from "next/link";
import { usePreferences } from "./PreferencesProvider";
import PrefToolbar from "./PrefToolbar";

export default function Navbar() {
  const { t } = usePreferences();
  const NAV = [
    { href: "#logo",        label: t.nav.logo },
    { href: "#farben",      label: t.nav.farben },
    { href: "#typografie",  label: t.nav.typografie },
    { href: "#bildsprache", label: t.nav.bildsprache },
    { href: "#anwendungen", label: t.nav.anwendungen },
    { href: "#downloads",   label: t.nav.downloads },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-line" style={{ backgroundColor: "color-mix(in srgb, var(--color-paper) 85%, transparent)" }}>
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
        <Link href="#top" className="flex items-center gap-3" aria-label="SLI Chemicals — Brand Guidelines">
          <Image
            src="/sli_logo_green.png"
            alt="SLI Chemicals"
            width={240}
            height={56}
            priority
            className="h-8 w-auto logo-light-only"
          />
          <Image
            src="/sli_logo.png"
            alt="SLI Chemicals"
            width={240}
            height={56}
            priority
            className="h-8 w-auto logo-dark-only"
          />
          <span className="hidden sm:inline-block h-4 w-px bg-line" aria-hidden="true" />
          <span className="hidden sm:inline-block eyebrow text-ink-soft">{t.common.brand}</span>
        </Link>

        <nav aria-label="Sections" className="hidden lg:block">
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

        <PrefToolbar />
      </div>
    </header>
  );
}
