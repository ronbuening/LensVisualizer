import themes, { createTheme } from "./themes.js";
import type { HolidayTheme } from "./holidayThemes.js";
import type { Preferences } from "../../types/state.js";
import type { Theme, ThemeVariant } from "../../types/theme.js";

export type ThemeMode = "auto" | "dark" | "light";

export interface SystemThemePreferences {
  dark: boolean;
  highContrast: boolean;
}

export interface ResolvedThemePreferences {
  theme: Theme;
  themeMode: ThemeMode;
  dark: boolean;
  highContrast: boolean;
}

function matchesMediaQuery(query: string): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  return window.matchMedia(query).matches;
}

export function readSystemThemePreferences(): SystemThemePreferences {
  return {
    dark: matchesMediaQuery("(prefers-color-scheme: dark)"),
    highContrast: matchesMediaQuery("(prefers-contrast: more)"),
  };
}

export function themeModeFromDarkPreference(pref: boolean | null | undefined): ThemeMode {
  if (pref === true) return "dark";
  if (pref === false) return "light";
  return "auto";
}

export function darkPreferenceFromThemeMode(mode: ThemeMode): boolean | null {
  if (mode === "dark") return true;
  if (mode === "light") return false;
  return null;
}

export function nextThemeMode(mode: ThemeMode): ThemeMode {
  if (mode === "auto") return "dark";
  if (mode === "dark") return "light";
  return "auto";
}

export function resolveDarkPreference(pref: boolean | null | undefined, systemDark: boolean): boolean {
  return pref ?? systemDark;
}

export function resolveHighContrastPreference(pref: boolean | undefined, systemHighContrast: boolean): boolean {
  return pref ?? systemHighContrast;
}

export function resolveThemeVariant(dark: boolean, highContrast: boolean): ThemeVariant {
  return dark ? (highContrast ? "darkHC" : "dark") : highContrast ? "lightHC" : "light";
}

export function resolveTheme(dark: boolean, highContrast: boolean): Theme {
  return themes[resolveThemeVariant(dark, highContrast)];
}

function isLightVariant(variant: ThemeVariant): boolean {
  return variant === "light" || variant === "lightHC";
}

/**
 * Build a holiday-tinted Theme by merging the holiday's accent overrides onto the
 * resolved base variant. The base Theme already carries every color token
 * (including `_`-prefixed closure inputs), so re-running createTheme with the
 * merged tokens preserves all element-styling functions while recoloring accents.
 */
export function buildHolidayTheme(dark: boolean, highContrast: boolean, holiday: HolidayTheme): Theme {
  const variant = resolveThemeVariant(dark, highContrast);
  const base = themes[variant];
  return createTheme({
    ...base,
    ...holiday.overrides.base,
    ...(isLightVariant(variant) ? holiday.overrides.light : {}),
  });
}

/**
 * Resolve the active Theme, applying the holiday skin only when the user is in
 * "auto" mode on a holiday. Explicit Dark/Light choices are never overridden.
 */
export function resolveActiveTheme(
  mode: ThemeMode,
  dark: boolean,
  highContrast: boolean,
  holiday: HolidayTheme | null,
): Theme {
  if (mode === "auto" && holiday) return buildHolidayTheme(dark, highContrast, holiday);
  return resolveTheme(dark, highContrast);
}

export function resolveThemePreferences(
  prefs: Pick<Partial<Preferences>, "dark" | "highContrast">,
  system: SystemThemePreferences,
): ResolvedThemePreferences {
  const themeMode = themeModeFromDarkPreference(prefs.dark);
  const dark = resolveDarkPreference(prefs.dark, system.dark);
  const highContrast = resolveHighContrastPreference(prefs.highContrast, system.highContrast);

  return {
    theme: resolveTheme(dark, highContrast),
    themeMode,
    dark,
    highContrast,
  };
}
