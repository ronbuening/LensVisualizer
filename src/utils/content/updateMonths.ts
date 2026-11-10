/**
 * Calendar months of site activity, shared by the build (routes, sitemap dates) and the /updates pages.
 *
 * A month exists when it has a changelog entry or a published lens, so every lens and every entry lands on exactly
 * one /updates/YYYY-MM/ archive page. The hub shows the newest RECENT_UPDATE_MONTH_COUNT months. This module stays
 * import-free at runtime so plain-Node scripts load the same rule the pages render.
 */

/** Months shown on /updates; older months live only on their archive pages. */
export const RECENT_UPDATE_MONTH_COUNT = 2;

export interface UpdateMonth {
  /** Calendar month, `YYYY-MM` */
  month: string;
  changelogCount: number;
  lensCount: number;
}

const UPDATE_MONTH = /^\d{4}-(0[1-9]|1[0-2])$/;

/** True for a well-formed `YYYY-MM` month. */
export function isUpdateMonth(value: unknown): value is string {
  return typeof value === "string" && UPDATE_MONTH.test(value);
}

/** The `YYYY-MM` month of an ISO date (`YYYY-MM-DD`). */
export function updateMonthOf(isoDate: string): string {
  return isoDate.slice(0, 7);
}

/** Every month with a changelog entry or a published lens, newest first, with the count of each. */
export function buildUpdateMonths(changelogDates: readonly string[], lensDates: readonly string[]): UpdateMonth[] {
  const months = new Map<string, UpdateMonth>();
  const monthFor = (isoDate: string) => {
    const month = updateMonthOf(isoDate);
    let entry = months.get(month);
    if (!entry) {
      entry = { month, changelogCount: 0, lensCount: 0 };
      months.set(month, entry);
    }
    return entry;
  };
  for (const date of changelogDates) monthFor(date).changelogCount++;
  for (const date of lensDates) monthFor(date).lensCount++;
  return [...months.values()].sort((a, b) => (a.month < b.month ? 1 : a.month > b.month ? -1 : 0));
}

/** Display label for a month, e.g. "November 2026". Parsed at local midnight so no timezone shifts the month. */
export function formatUpdateMonth(month: string): string {
  return new Date(`${month}-01T00:00:00`).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
