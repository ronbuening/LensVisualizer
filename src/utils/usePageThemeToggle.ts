/**
 * usePageThemeToggle — extends usePageTheme with dark/HC toggle capability.
 *
 * Returns the current Theme plus state and toggle functions for dark mode
 * and high contrast. The dark mode cycles through three modes:
 *   auto (null) → dark (true) → light (false) → auto (null) → …
 *
 * "auto" respects the device's prefers-color-scheme setting and updates
 * reactively when the system theme changes.
 *
 * Persists changes to localStorage so they are picked up by both static
 * pages and the LensViewer.
 */

import { useState, useEffect, useCallback } from "react";
import T from "./themes.js";
import { loadPrefs, PREFS_KEY } from "./preferences.js";
import type { Theme } from "../types/theme.js";

export type ThemeMode = "auto" | "dark" | "light";

interface PageThemeToggle {
  theme: Theme;
  themeMode: ThemeMode;
  highContrast: boolean;
  toggleTheme: () => void;
  toggleHC: () => void;
}

function resolveTheme(dark: boolean, hc: boolean): Theme {
  return T[dark ? (hc ? "darkHC" : "dark") : hc ? "lightHC" : "light"];
}

function modeFromPref(pref: boolean | null | undefined): ThemeMode {
  if (pref === true) return "dark";
  if (pref === false) return "light";
  return "auto";
}

function prefFromMode(mode: ThemeMode): boolean | null {
  if (mode === "dark") return true;
  if (mode === "light") return false;
  return null;
}

function nextMode(current: ThemeMode): ThemeMode {
  if (current === "auto") return "dark";
  if (current === "dark") return "light";
  return "auto";
}

export function usePageThemeToggle(): PageThemeToggle {
  const [themeMode, setThemeMode] = useState<ThemeMode>("auto");
  const [highContrast, setHighContrast] = useState(false);
  const [systemDark, setSystemDark] = useState(true); // SSR-safe default

  /* On mount: load prefs and subscribe to system preference changes */
  useEffect(() => {
    const prefs = loadPrefs();
    setThemeMode(modeFromPref(prefs.dark));
    const hc = prefs.highContrast ?? window.matchMedia("(prefers-contrast: more)").matches;
    setHighContrast(hc);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const persist = useCallback((mode: ThemeMode, hc: boolean) => {
    try {
      const raw = localStorage.getItem(PREFS_KEY);
      const existing = raw ? JSON.parse(raw) : {};
      localStorage.setItem(PREFS_KEY, JSON.stringify({ ...existing, dark: prefFromMode(mode), highContrast: hc }));
    } catch {
      /* private browsing or quota — ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeMode((prev) => {
      const next = nextMode(prev);
      persist(next, highContrast);
      return next;
    });
  }, [highContrast, persist]);

  const toggleHC = useCallback(() => {
    setHighContrast((prev) => {
      const next = !prev;
      persist(themeMode, next);
      return next;
    });
  }, [themeMode, persist]);

  const resolvedDark = themeMode === "auto" ? systemDark : themeMode === "dark";
  return { theme: resolveTheme(resolvedDark, highContrast), themeMode, highContrast, toggleTheme, toggleHC };
}
