/**
 * Shared theme-toggle display constants — icon glyphs and labels for the
 * Auto / Dark / Light theme mode buttons used in PageNavBar and BreadcrumbBar.
 */

import type { ThemeMode } from "./usePageThemeToggle.js";

export const THEME_ICON: Record<ThemeMode, string> = { auto: "◑", dark: "🌙", light: "☀️" };
export const THEME_LABEL: Record<ThemeMode, string> = { auto: "AUTO", dark: "DARK", light: "LIGHT" };
