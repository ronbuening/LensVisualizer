/**
 * Holiday theme palettes — accent overrides layered on the resolved base theme.
 *
 * Each holiday is a small partial `ThemeColorTokens` override (accents, borders,
 * slider/toggle highlight, header tint) merged onto the current dark/light + HC
 * variant, plus display metadata (icon + label) and optional swapped brand
 * graphics. The optical diagram tokens (glass fills, element strokes) are left
 * untouched so the visualization stays legible in every holiday skin.
 *
 * The actual merge/build lives in `themePreferences.buildHolidayTheme` to avoid a
 * circular import with the theme factory; this module is data-only.
 */

import type { ThemeColorTokens } from "../../types/theme.js";
import type { HolidayId } from "../holidays.js";

/** Accent overrides split so light-mode contrast can differ from dark-mode. */
export interface HolidayTheme {
  id: HolidayId;
  /** Emoji shown in the theme toggle where "Auto" normally sits. */
  icon: string;
  /** Short uppercase label (matches AUTO / DARK / LIGHT styling). */
  label: string;
  /** Optional themed hero mark (homepage). Falls back to the default mark. */
  brandMark?: string;
  /** Optional themed favicon. Falls back to the default favicon. */
  favicon?: string;
  overrides: {
    /** Applied for every variant (tuned for dark backgrounds). */
    base: Partial<ThemeColorTokens>;
    /** Merged on top of `base` when the resolved variant is light. */
    light?: Partial<ThemeColorTokens>;
  };
}

type RGB = [number, number, number];

const rgba = ([r, g, b]: RGB, a: number): string => `rgba(${r},${g},${b},${a})`;
const hex = ([r, g, b]: RGB): string => `#${[r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("")}`;

interface HolidayConfig {
  icon: string;
  label: string;
  /** Primary accent hue tuned for dark backgrounds. */
  dark: RGB;
  /** Primary accent hue tuned for light backgrounds (darker/more saturated). */
  light: RGB;
}

/**
 * Build a HolidayTheme's accent overrides from a primary accent hue. Keeps the
 * 14 palettes consistent and short — only the hue and label differ per holiday.
 */
function makeHoliday(id: HolidayId, cfg: HolidayConfig): HolidayTheme {
  const d = cfg.dark;
  const l = cfg.light;
  return {
    id,
    icon: cfg.icon,
    label: cfg.label,
    brandMark: `/branding/holiday/mark-${id}.svg`,
    favicon: `/branding/holiday/favicon-${id}.svg`,
    overrides: {
      base: {
        headerBgImage: `linear-gradient(180deg,${rgba(d, 0.14)},rgba(9,10,13,1))`,
        headerBorder: rgba(d, 0.4),
        panelBorder: rgba(d, 0.24),
        panelDivider: rgba(d, 0.14),
        sliderAccent: hex(d),
        toggleActiveBg: rgba(d, 0.18),
        toggleActiveBorder: rgba(d, 0.5),
        toggleActiveText: hex(d),
        descLinkColor: hex(d),
      },
      light: {
        headerBgImage: "none",
        headerBgColor: rgba(l, 0.1),
        headerBorder: rgba(l, 0.5),
        panelBorder: rgba(l, 0.3),
        panelDivider: rgba(l, 0.18),
        sliderAccent: hex(l),
        toggleActiveBg: rgba(l, 0.14),
        toggleActiveBorder: rgba(l, 0.55),
        toggleActiveText: hex(l),
        descLinkColor: hex(l),
      },
    },
  };
}

export const HOLIDAY_THEMES: Record<HolidayId, HolidayTheme> = {
  newYearsDay: makeHoliday("newYearsDay", {
    icon: "🎉",
    label: "NEW YEAR",
    dark: [255, 207, 77],
    light: [168, 130, 20],
  }),
  mlkDay: makeHoliday("mlkDay", { icon: "🕊️", label: "MLK DAY", dark: [230, 184, 74], light: [150, 110, 30] }),
  presidentsDay: makeHoliday("presidentsDay", {
    icon: "🇺🇸",
    label: "PRESIDENTS",
    dark: [90, 150, 240],
    light: [30, 80, 180],
  }),
  mardiGras: makeHoliday("mardiGras", { icon: "🎭", label: "MARDI GRAS", dark: [170, 90, 220], light: [110, 40, 160] }),
  ashWednesday: makeHoliday("ashWednesday", {
    icon: "✝️",
    label: "ASH WED",
    dark: [150, 130, 180],
    light: [100, 80, 130],
  }),
  easter: makeHoliday("easter", { icon: "🐣", label: "EASTER", dark: [200, 160, 235], light: [150, 110, 190] }),
  independenceDay: makeHoliday("independenceDay", {
    icon: "🎆",
    label: "JULY 4",
    dark: [80, 140, 240],
    light: [30, 80, 190],
  }),
  laborDay: makeHoliday("laborDay", { icon: "🛠️", label: "LABOR DAY", dark: [240, 170, 60], light: [170, 110, 20] }),
  columbusDay: makeHoliday("columbusDay", {
    icon: "🧭",
    label: "COLUMBUS",
    dark: [40, 190, 200],
    light: [20, 120, 140],
  }),
  veteransDay: makeHoliday("veteransDay", {
    icon: "🎖️",
    label: "VETERANS",
    dark: [220, 185, 90],
    light: [150, 118, 30],
  }),
  thanksgiving: makeHoliday("thanksgiving", {
    icon: "🦃",
    label: "THANKSGIVING",
    dark: [230, 130, 55],
    light: [170, 80, 20],
  }),
  christmasEve: makeHoliday("christmasEve", {
    icon: "🕯️",
    label: "CHRISTMAS EVE",
    dark: [240, 200, 130],
    light: [160, 120, 50],
  }),
  christmas: makeHoliday("christmas", { icon: "🎄", label: "CHRISTMAS", dark: [60, 180, 100], light: [20, 120, 65] }),
  newYearsEve: makeHoliday("newYearsEve", {
    icon: "🥂",
    label: "NEW YEAR'S EVE",
    dark: [245, 205, 90],
    light: [150, 118, 30],
  }),
};
