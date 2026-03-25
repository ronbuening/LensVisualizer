/**
 * usePageThemeToggle — extends usePageTheme with dark/HC toggle capability.
 *
 * Returns the current Theme plus boolean state and toggle functions for
 * dark mode and high contrast. Persists changes to localStorage so they
 * are picked up by both static pages and the LensViewer.
 */

import { useState, useEffect, useCallback } from "react";
import T from "./themes.js";
import { loadPrefs, PREFS_KEY } from "./preferences.js";
import type { Theme } from "../types/theme.js";

interface PageThemeToggle {
  theme: Theme;
  dark: boolean;
  highContrast: boolean;
  toggleDark: () => void;
  toggleHC: () => void;
}

function resolveTheme(dark: boolean, hc: boolean): Theme {
  return T[dark ? (hc ? "darkHC" : "dark") : hc ? "lightHC" : "light"];
}

export function usePageThemeToggle(): PageThemeToggle {
  const [dark, setDark] = useState(true);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const prefs = loadPrefs();
    const d = prefs.dark ?? window.matchMedia("(prefers-color-scheme: dark)").matches;
    const hc = prefs.highContrast ?? window.matchMedia("(prefers-contrast: more)").matches;
    setDark(d);
    setHighContrast(hc);
  }, []);

  const persist = useCallback((d: boolean, hc: boolean) => {
    try {
      const raw = localStorage.getItem(PREFS_KEY);
      const existing = raw ? JSON.parse(raw) : {};
      localStorage.setItem(PREFS_KEY, JSON.stringify({ ...existing, dark: d, highContrast: hc }));
    } catch {
      /* private browsing or quota — ignore */
    }
  }, []);

  const toggleDark = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      persist(next, highContrast);
      return next;
    });
  }, [highContrast, persist]);

  const toggleHC = useCallback(() => {
    setHighContrast((prev) => {
      const next = !prev;
      persist(dark, next);
      return next;
    });
  }, [dark, persist]);

  return { theme: resolveTheme(dark, highContrast), dark, highContrast, toggleDark, toggleHC };
}
