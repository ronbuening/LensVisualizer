/**
 * Reads persisted dark/highContrast preferences and returns the matching Theme object.
 *
 * Initializes to T.dark so the SSR-rendered HTML and the initial client render agree,
 * then updates after mount by reading localStorage (with system media-query fallbacks).
 */

import { useState, useEffect } from "react";
import { loadPrefs } from "./preferences.js";
import { readSystemThemePreferences, resolveTheme, resolveThemePreferences } from "./themePreferences.js";
import type { Theme } from "../types/theme.js";

export function usePageTheme(): Theme {
  const [theme, setTheme] = useState<Theme>(resolveTheme(true, false));

  useEffect(() => {
    setTheme(resolveThemePreferences(loadPrefs(), readSystemThemePreferences()).theme);
  }, []);

  return theme;
}
