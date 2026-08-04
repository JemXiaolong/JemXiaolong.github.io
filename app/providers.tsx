"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { Lang } from "@/lib/content";

type Theme = "light" | "dark";

/**
 * Runs before first paint so a stored preference never flashes the wrong
 * colours or language. Kept as a string because it must execute ahead of
 * React hydration; <html> is the single source of truth from then on.
 */
export const NO_FLASH_SCRIPT = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (!t) t = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = t;
    var l = localStorage.getItem("lang");
    if (!l) l = (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
    document.documentElement.lang = l;
  } catch (e) {}
})();
`;

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function emit() {
  for (const listener of listeners) listener();
}

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function readLang(): Lang {
  return document.documentElement.lang === "en" ? "en" : "es";
}

export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function usePrefs() {
  // The pre-paint script already wrote both values onto <html>; the server
  // snapshot mirrors the markup we ship so hydration stays quiet.
  const theme = useSyncExternalStore(subscribe, readTheme, () => "light" as Theme);
  const lang = useSyncExternalStore(subscribe, readLang, () => "es" as Lang);

  const setLang = useCallback((next: Lang) => {
    document.documentElement.lang = next;
    try {
      localStorage.setItem("lang", next);
    } catch {
      // Private browsing can refuse writes; the in-page choice still applies.
    }
    emit();
  }, []);

  const toggleTheme = useCallback(() => {
    const next = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Same as above: a failed write must not break the toggle.
    }
    emit();
  }, []);

  return { lang, theme, setLang, toggleTheme };
}

/** Picks the copy for the active language. */
export function useT() {
  const { lang } = usePrefs();
  return useCallback((copy: Record<Lang, string>) => copy[lang], [lang]);
}
