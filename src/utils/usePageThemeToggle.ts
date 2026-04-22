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
import { loadPrefs, PREFS_KEY } from "./preferences.js";
import {
  darkPreferenceFromThemeMode,
  nextThemeMode,
  readSystemThemePreferences,
  resolveTheme,
  resolveThemePreferences,
  type ThemeMode,
} from "./themePreferences.js";
import type { Theme } from "../types/theme.js";

interface PageThemeToggle {
  theme: Theme;
  themeMode: ThemeMode;
  dark: boolean;
  highContrast: boolean;
  toggleTheme: () => void;
  toggleHC: () => void;
}

export function usePageThemeToggle(): PageThemeToggle {
  const [themeMode, setThemeMode] = useState<ThemeMode>("auto");
  const [highContrast, setHighContrast] = useState(false);
  const [systemDark, setSystemDark] = useState(true); // SSR-safe default

  /* On mount: load prefs and subscribe to system preference changes */
  useEffect(() => {
    const resolved = resolveThemePreferences(loadPrefs(), readSystemThemePreferences());
    setThemeMode(resolved.themeMode);
    setHighContrast(resolved.highContrast);

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
      localStorage.setItem(
        PREFS_KEY,
        JSON.stringify({ ...existing, dark: darkPreferenceFromThemeMode(mode), highContrast: hc }),
      );
    } catch {
      /* private browsing or quota — ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeMode((prev) => {
      const next = nextThemeMode(prev);
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
  return {
    theme: resolveTheme(resolvedDark, highContrast),
    themeMode,
    dark: resolvedDark,
    highContrast,
    toggleTheme,
    toggleHC,
  };
}

export type { ThemeMode } from "./themePreferences.js";
