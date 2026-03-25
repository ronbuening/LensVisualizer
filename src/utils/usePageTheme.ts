/**
 * Reads persisted dark/highContrast preferences and returns the matching Theme object.
 *
 * Initializes to T.dark so the SSR-rendered HTML and the initial client render agree,
 * then updates after mount by reading localStorage (with system media-query fallbacks).
 */

import { useState, useEffect } from "react";
import T from "./themes.js";
import { loadPrefs } from "./preferences.js";
import type { Theme } from "../types/theme.js";

export function usePageTheme(): Theme {
  const [theme, setTheme] = useState<Theme>(T.dark);

  useEffect(() => {
    const prefs = loadPrefs();
    const dark = prefs.dark ?? window.matchMedia("(prefers-color-scheme: dark)").matches;
    const highContrast = prefs.highContrast ?? window.matchMedia("(prefers-contrast: more)").matches;
    setTheme(T[dark ? (highContrast ? "darkHC" : "dark") : highContrast ? "lightHC" : "light"]);
  }, []);

  return theme;
}
