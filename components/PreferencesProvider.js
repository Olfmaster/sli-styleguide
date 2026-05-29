"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { dict } from "@/lib/dict";

const PreferencesContext = createContext(null);

const STORAGE = { theme: "sli-theme", locale: "sli-locale" };

export function PreferencesProvider({ children }) {
  // Default: light + de. Inline-script in layout may set data-theme/lang earlier
  // to avoid FOUC; we hydrate from that before falling back to localStorage.
  const [theme, setThemeState] = useState("light");
  const [locale, setLocaleState] = useState("de");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const htmlTheme = document.documentElement.dataset.theme;
    const storedTheme = htmlTheme || localStorage.getItem(STORAGE.theme) || "light";
    setThemeState(storedTheme === "dark" ? "dark" : "light");

    const htmlLang = document.documentElement.lang;
    const storedLocale = (htmlLang === "en" || htmlLang === "de")
      ? htmlLang
      : (localStorage.getItem(STORAGE.locale) || "de");
    setLocaleState(storedLocale === "en" ? "en" : "de");

    setMounted(true);
  }, []);

  const setTheme = useCallback((next) => {
    setThemeState(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(STORAGE.theme, next); } catch (_) {}
  }, []);

  const setLocale = useCallback((next) => {
    setLocaleState(next);
    document.documentElement.lang = next;
    try { localStorage.setItem(STORAGE.locale, next); } catch (_) {}
  }, []);

  const toggleTheme = useCallback(() => setTheme(theme === "dark" ? "light" : "dark"), [theme, setTheme]);
  const toggleLocale = useCallback(() => setLocale(locale === "de" ? "en" : "de"), [locale, setLocale]);

  const t = dict[locale];

  return (
    <PreferencesContext.Provider value={{ theme, locale, t, setTheme, setLocale, toggleTheme, toggleLocale, mounted }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error("usePreferences must be used inside <PreferencesProvider>");
  return ctx;
}
