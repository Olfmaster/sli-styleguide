"use client";
import { usePreferences } from "./PreferencesProvider";

export default function PrefToolbar({ className = "" }) {
  const { locale, theme, toggleLocale, toggleTheme, mounted, t } = usePreferences();

  // Avoid hydration flicker — render skeleton until mounted, label-only after.
  const localeLabel = mounted ? (locale === "de" ? "DE" : "EN") : "DE";
  const themeLabel = mounted ? (theme === "dark" ? t.common.themeToggleLight : t.common.themeToggleDark) : t.common.themeToggleDark;
  const isDark = mounted && theme === "dark";

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <button
        type="button"
        onClick={toggleLocale}
        aria-label={t.common.langSwitch}
        className="group inline-flex items-center gap-1 h-9 px-3 rounded-full border border-line text-xs font-medium text-ink-soft hover:text-brand hover:border-brand transition-colors"
      >
        <span className={localeLabel === "DE" ? "text-brand" : ""}>DE</span>
        <span className="text-ink-muted/60" aria-hidden="true">/</span>
        <span className={localeLabel === "EN" ? "text-brand" : ""}>EN</span>
      </button>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={themeLabel}
        title={themeLabel}
        className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-line text-ink-soft hover:text-brand hover:border-brand transition-colors"
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.4 5.4l1.1 1.1M17.5 17.5l1.1 1.1M5.4 18.6l1.1-1.1M17.5 6.5l1.1-1.1" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
    </svg>
  );
}
