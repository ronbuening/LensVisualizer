import { describe, it, expect } from "vitest";
import { HOLIDAY_THEMES } from "../../../src/utils/theme/holidayThemes.js";
import { buildHolidayTheme, resolveActiveTheme, resolveTheme } from "../../../src/utils/theme/themePreferences.js";
import { themeSlotDisplay } from "../../../src/utils/theme/themeConstants.js";
import type { HolidayId } from "../../../src/utils/holidays.js";
import type { ThemeVariant } from "../../../src/types/theme.js";

const HOLIDAY_IDS: HolidayId[] = [
  "newYearsDay",
  "mlkDay",
  "presidentsDay",
  "mardiGras",
  "ashWednesday",
  "easter",
  "independenceDay",
  "laborDay",
  "columbusDay",
  "veteransDay",
  "thanksgiving",
  "christmasEve",
  "christmas",
  "newYearsEve",
];

const VARIANTS: Array<[boolean, boolean]> = [
  [true, false], // dark
  [false, false], // light
  [true, true], // darkHC
  [false, true], // lightHC
];

describe("HOLIDAY_THEMES", () => {
  it("has an entry with assets for every holiday id", () => {
    for (const id of HOLIDAY_IDS) {
      const h = HOLIDAY_THEMES[id];
      expect(h.id).toBe(id);
      expect(h.icon.length).toBeGreaterThan(0);
      expect(h.label.length).toBeGreaterThan(0);
      expect(h.brandMark).toBe(`/branding/holiday/mark-${id}.svg`);
      expect(h.favicon).toBe(`/branding/holiday/favicon-${id}.svg`);
    }
  });
});

describe("buildHolidayTheme", () => {
  it("returns a valid Theme (closures intact) for every variant and applies the accent", () => {
    for (const [dark, hc] of VARIANTS) {
      for (const id of HOLIDAY_IDS) {
        const holiday = HOLIDAY_THEMES[id];
        const built = buildHolidayTheme(dark, hc, holiday);
        // closure-based functions survive the rebuild
        expect(typeof built.grid).toBe("function");
        expect(typeof built.elemFill).toBe("function");
        // accent override is applied
        const variantOverride = !dark && holiday.overrides.light ? holiday.overrides.light : holiday.overrides.base;
        expect(built.sliderAccent).toBe(variantOverride.sliderAccent ?? holiday.overrides.base.sliderAccent);
      }
    }
  });
});

describe("resolveActiveTheme", () => {
  const holiday = HOLIDAY_THEMES.christmas;

  it("applies the holiday only in auto mode", () => {
    const auto = resolveActiveTheme("auto", true, false, holiday);
    expect(auto.sliderAccent).toBe(holiday.overrides.base.sliderAccent);
  });

  it("ignores the holiday when the user forces dark or light", () => {
    expect(resolveActiveTheme("dark", true, false, holiday)).toEqual(resolveTheme(true, false));
    expect(resolveActiveTheme("light", false, false, holiday)).toEqual(resolveTheme(false, false));
  });

  it("falls back to the base theme when there is no holiday", () => {
    expect(resolveActiveTheme("auto", true, false, null)).toEqual(resolveTheme(true, false));
  });
});

describe("themeSlotDisplay", () => {
  it("shows the holiday label in the auto slot, and standard labels otherwise", () => {
    const holiday = HOLIDAY_THEMES.independenceDay;
    expect(themeSlotDisplay("auto", holiday)).toEqual({ icon: holiday.icon, label: holiday.label });
    expect(themeSlotDisplay("dark", holiday)).toEqual({ icon: "🌙", label: "DARK" });
    expect(themeSlotDisplay("auto", null)).toEqual({ icon: "◑", label: "AUTO" });
  });
});

// Type-only guard: every ThemeVariant is covered by the boolean matrix above.
const _variantCheck: Record<ThemeVariant, true> = { dark: true, light: true, darkHC: true, lightHC: true };
void _variantCheck;
