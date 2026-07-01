/**
 * Shared theme-toggle display constants — icon glyphs and labels for the
 * Auto / Dark / Light theme mode buttons used in PageNavBar and BreadcrumbBar.
 */

import type { ThemeMode } from "./themePreferences.js";
import type { HolidayTheme } from "./holidayThemes.js";

export const THEME_ICON: Record<ThemeMode, string> = { auto: "◑", dark: "🌙", light: "☀️" };
export const THEME_LABEL: Record<ThemeMode, string> = { auto: "AUTO", dark: "DARK", light: "LIGHT" };

/**
 * Icon + label for the theme toggle's current slot. On a holiday the "auto" slot
 * shows the holiday's icon/label in place of AUTO; Dark/Light are unchanged.
 */
export function themeSlotDisplay(mode: ThemeMode, holiday: HolidayTheme | null): { icon: string; label: string } {
  if (mode === "auto" && holiday) return { icon: holiday.icon, label: holiday.label };
  return { icon: THEME_ICON[mode], label: THEME_LABEL[mode] };
}
