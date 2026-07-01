import { describe, it, expect } from "vitest";
import {
  getActiveHoliday,
  computeEaster,
  nthWeekdayOfMonth,
  holidayOverrideFromSearch,
} from "../../../src/utils/holidays.js";

/** Local-noon date avoids any timezone-boundary ambiguity in the assertions. */
const d = (year: number, month1: number, day: number): Date => new Date(year, month1 - 1, day, 12, 0, 0);

describe("nthWeekdayOfMonth", () => {
  it("finds the 3rd Monday of January 2026 (MLK Day)", () => {
    expect(nthWeekdayOfMonth(2026, 1, 1, 3)).toBe(19);
  });
  it("finds the 4th Thursday of November 2026 (Thanksgiving)", () => {
    expect(nthWeekdayOfMonth(2026, 11, 4, 4)).toBe(26);
  });
  it("finds the 1st Monday of September 2026 (Labor Day)", () => {
    expect(nthWeekdayOfMonth(2026, 9, 1, 1)).toBe(7);
  });
});

describe("computeEaster", () => {
  it.each([
    [2024, 3, 31],
    [2025, 4, 20],
    [2026, 4, 5],
    [2027, 3, 28],
  ])("Easter %i is %i/%i", (year, month, day) => {
    expect(computeEaster(year)).toEqual({ month, day });
  });
});

describe("getActiveHoliday", () => {
  it("matches fixed-date holidays", () => {
    expect(getActiveHoliday(d(2026, 1, 1))).toBe("newYearsDay");
    expect(getActiveHoliday(d(2026, 7, 4))).toBe("independenceDay");
    expect(getActiveHoliday(d(2026, 11, 11))).toBe("veteransDay");
    expect(getActiveHoliday(d(2026, 12, 24))).toBe("christmasEve");
    expect(getActiveHoliday(d(2026, 12, 25))).toBe("christmas");
    expect(getActiveHoliday(d(2026, 12, 31))).toBe("newYearsEve");
  });

  it("matches floating-date holidays", () => {
    expect(getActiveHoliday(d(2026, 1, 19))).toBe("mlkDay");
    expect(getActiveHoliday(d(2026, 2, 16))).toBe("presidentsDay");
    expect(getActiveHoliday(d(2026, 9, 7))).toBe("laborDay");
    expect(getActiveHoliday(d(2026, 10, 12))).toBe("columbusDay");
    expect(getActiveHoliday(d(2026, 11, 26))).toBe("thanksgiving");
  });

  it("matches Easter-derived holidays for 2026 (Easter 4/5)", () => {
    expect(getActiveHoliday(d(2026, 4, 5))).toBe("easter");
    expect(getActiveHoliday(d(2026, 2, 17))).toBe("mardiGras"); // Easter − 47
    expect(getActiveHoliday(d(2026, 2, 18))).toBe("ashWednesday"); // Easter − 46
  });

  it("returns null on a non-holiday day", () => {
    expect(getActiveHoliday(d(2026, 3, 15))).toBeNull();
    expect(getActiveHoliday(d(2026, 8, 20))).toBeNull();
  });
});

describe("holidayOverrideFromSearch", () => {
  it("is not forced when the param is absent or empty", () => {
    expect(holidayOverrideFromSearch("")).toEqual({ forced: false, id: null });
    expect(holidayOverrideFromSearch("?a=1&b=2")).toEqual({ forced: false, id: null });
    expect(holidayOverrideFromSearch("?holiday=")).toEqual({ forced: false, id: null });
  });

  it("forces a specific holiday (case-insensitive)", () => {
    expect(holidayOverrideFromSearch("?holiday=christmas")).toEqual({ forced: true, id: "christmas" });
    expect(holidayOverrideFromSearch("?holiday=christmasEve")).toEqual({ forced: true, id: "christmasEve" });
    expect(holidayOverrideFromSearch("?holiday=INDEPENDENCEDAY")).toEqual({ forced: true, id: "independenceDay" });
  });

  it("forces no holiday for none/off tokens", () => {
    for (const tok of ["none", "off", "false", "0"]) {
      expect(holidayOverrideFromSearch(`?holiday=${tok}`)).toEqual({ forced: true, id: null });
    }
  });

  it("ignores an unrecognized holiday name", () => {
    expect(holidayOverrideFromSearch("?holiday=arborday")).toEqual({ forced: false, id: null });
  });
});
