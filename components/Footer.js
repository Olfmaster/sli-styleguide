"use client";
import Image from "next/image";
import { usePreferences } from "./PreferencesProvider";

export default function Footer() {
  const { t } = usePreferences();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-soft mt-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image src="/sli_logo_green.png" alt="SLI Chemicals" width={240} height={56} className="h-9 w-auto logo-light-only" />
            <Image src="/sli_logo.png" alt="SLI Chemicals" width={240} height={56} className="h-9 w-auto logo-dark-only" />
          </div>
          <p className="text-sm leading-relaxed text-ink-soft max-w-md">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">{t.footer.portalHeading}</div>
          <ul className="space-y-2 text-sm text-ink-soft">
            {t.footer.portalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-brand link-underline">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">{t.footer.contactHeading}</div>
          <ul className="space-y-2 text-sm text-ink-soft">
            <li>
              <a href="https://www.slichemicals.com" target="_blank" rel="noopener" className="hover:text-brand link-underline">
                slichemicals.com
              </a>
            </li>
            <li>
              <a href="mailto:info@slichemicals.com" className="hover:text-brand link-underline">info@slichemicals.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-ink-muted">
          <span>{t.footer.copyright(year)}</span>
          <span className="eyebrow">{t.footer.version}</span>
        </div>
      </div>
    </footer>
  );
}
