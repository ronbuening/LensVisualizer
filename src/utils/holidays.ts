/**
 * Holiday date engine — pure, dependency-free calendar math.
 *
 * Given a date, returns which (if any) recognized US holiday falls on that
 * calendar day. Used to swap the theme "auto" slot for a themed holiday variant
 * for the single day the holiday is celebrated. All matching is done against the
 * caller-supplied date's LOCAL fields (getFullYear/getMonth/getDate) so it lines
 * up with how a visitor experiences "today" on their device.
 *
 * Kept free of React/DOM so it is fully unit-testable.
 */

export type HolidayId =
  | "newYearsDay"
  | "mlkDay"
  | "presidentsDay"
  | "mardiGras"
  | "ashWednesday"
  | "easter"
  | "independenceDay"
  | "laborDay"
  | "columbusDay"
  | "veteransDay"
  | "thanksgiving"
  | "christmasEve"
  | "christmas"
  | "newYearsEve";

/** Every holiday id, in calendar order. Source of truth for validation. */
export const HOLIDAY_IDS: readonly HolidayId[] = [
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

/** True when `value` is a recognized holiday id (case-sensitive canonical form). */
export function isHolidayId(value: string): value is HolidayId {
  return (HOLIDAY_IDS as readonly string[]).includes(value);
}

/** Month is 1-based (1 = January) to match human calendar reading. */
interface MonthDay {
  month: number;
  day: number;
}

/**
 * Date (day-of-month) of the nth given weekday in a month.
 *
 * @param year   full year
 * @param month  1-based month (1 = January)
 * @param weekday 0 = Sunday … 6 = Saturday
 * @param n      1-based occurrence (1 = first, 4 = fourth)
 */
export function nthWeekdayOfMonth(year: number, month: number, weekday: number, n: number): number {
  const firstDow = new Date(year, month - 1, 1).getDay();
  const offset = (weekday - firstDow + 7) % 7;
  return 1 + offset + (n - 1) * 7;
}

/**
 * Easter Sunday for a given year via the Anonymous Gregorian algorithm
 * (a.k.a. the "Meeus/Jones/Butcher" algorithm). Returns a 1-based month/day.
 */
export function computeEaster(year: number): MonthDay {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31); // 3 = March, 4 = April
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return { month, day };
}

/** Add `days` to a 1-based month/day within `year`, returning 1-based month/day. */
function shiftMonthDay(year: number, base: MonthDay, days: number): MonthDay {
  const d = new Date(year, base.month - 1, base.day + days);
  return { month: d.getMonth() + 1, day: d.getDate() };
}

/**
 * Build the map of holiday → calendar date for a given year.
 *
 * Order matters: `getActiveHoliday` returns the FIRST match, so if two holidays
 * ever share a date the earlier entry here wins.
 */
function holidayDatesForYear(year: number): Array<[HolidayId, MonthDay]> {
  const easter = computeEaster(year);
  return [
    ["newYearsDay", { month: 1, day: 1 }],
    ["mlkDay", { month: 1, day: nthWeekdayOfMonth(year, 1, 1, 3) }], // 3rd Mon of Jan
    ["presidentsDay", { month: 2, day: nthWeekdayOfMonth(year, 2, 1, 3) }], // 3rd Mon of Feb
    ["mardiGras", shiftMonthDay(year, easter, -47)],
    ["ashWednesday", shiftMonthDay(year, easter, -46)],
    ["easter", easter],
    ["independenceDay", { month: 7, day: 4 }],
    ["laborDay", { month: 9, day: nthWeekdayOfMonth(year, 9, 1, 1) }], // 1st Mon of Sep
    ["columbusDay", { month: 10, day: nthWeekdayOfMonth(year, 10, 1, 2) }], // 2nd Mon of Oct
    ["veteransDay", { month: 11, day: 11 }],
    ["thanksgiving", { month: 11, day: nthWeekdayOfMonth(year, 11, 4, 4) }], // 4th Thu of Nov
    ["christmasEve", { month: 12, day: 24 }],
    ["christmas", { month: 12, day: 25 }],
    ["newYearsEve", { month: 12, day: 31 }],
  ];
}

/**
 * The holiday celebrated on `date` (local calendar day), or `null` if none.
 *
 * @param date defaults to now; pass an explicit date for testing/simulation.
 */
export function getActiveHoliday(date: Date = new Date()): HolidayId | null {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  for (const [id, md] of holidayDatesForYear(year)) {
    if (md.month === month && md.day === day) return id;
  }
  return null;
}

/** Result of parsing a `?holiday=` override: whether one was supplied, and which. */
export interface HolidayOverride {
  /** True when a valid `holiday` param was present (forces the result). */
  forced: boolean;
  /** The forced holiday, or null when forcing "no holiday". */
  id: HolidayId | null;
}

const NO_HOLIDAY_TOKENS = new Set(["none", "off", "false", "0"]);

/**
 * Parse a `?holiday=<id>` override from a URL query string, letting any page
 * preview or share a specific holiday skin regardless of the calendar date.
 *
 * - `?holiday=christmas` (case-insensitive) → force that holiday.
 * - `?holiday=none` (or off/false/0) → force NO holiday.
 * - absent or unrecognized → not forced; the caller falls back to the real date.
 */
export function holidayOverrideFromSearch(search: string): HolidayOverride {
  const raw = new URLSearchParams(search).get("holiday");
  if (raw === null) return { forced: false, id: null };

  const value = raw.trim().toLowerCase();
  if (value === "") return { forced: false, id: null };
  if (NO_HOLIDAY_TOKENS.has(value)) return { forced: true, id: null };

  const match = HOLIDAY_IDS.find((id) => id.toLowerCase() === value);
  return match ? { forced: true, id: match } : { forced: false, id: null };
}
