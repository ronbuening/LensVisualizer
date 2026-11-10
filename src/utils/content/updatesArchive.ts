/**
 * The /updates archive: which months exist, which the hub shows, and what each month page lists.
 *
 * Everything derives from the compiled changelog and the lens publication dates, never from the clock, so the
 * prerendered pages and the running app always agree. The build computes the same months with the same
 * `buildUpdateMonths` to emit one /updates/YYYY-MM/ route per month.
 */

import { ALL_LENSES_BY_DATE, type RecentLensEntry } from "../catalog/lensSummaries.js";
import { CHANGELOG } from "./changelogData.js";
import { monthFromChangelogEntryId, type ChangelogEntry } from "./changelogHelpers.js";
import { RECENT_UPDATE_MONTH_COUNT, buildUpdateMonths, updateMonthOf, type UpdateMonth } from "./updateMonths.js";

/** Every month with a changelog entry or a published lens, newest first. */
export const UPDATE_MONTHS: readonly UpdateMonth[] = buildUpdateMonths(
  CHANGELOG.map((entry) => entry.date),
  ALL_LENSES_BY_DATE.map((lens) => lens.date),
);

/** The months the /updates hub shows, newest first. */
export const RECENT_UPDATE_MONTHS: readonly string[] = UPDATE_MONTHS.slice(0, RECENT_UPDATE_MONTH_COUNT).map(
  (entry) => entry.month,
);

const KNOWN_MONTHS = new Set(UPDATE_MONTHS.map((entry) => entry.month));

/** True when `month` has its own /updates/YYYY-MM/ page. */
export function hasUpdateMonth(month: string | undefined): month is string {
  return month !== undefined && KNOWN_MONTHS.has(month);
}

/** Changelog entries dated in any of `months`, newest first. */
export function changelogForMonths(months: readonly string[]): ChangelogEntry[] {
  const wanted = new Set(months);
  return CHANGELOG.filter((entry) => wanted.has(updateMonthOf(entry.date)));
}

/** Lenses first published in any of `months`, newest first. */
export function lensesForMonths(months: readonly string[]): RecentLensEntry[] {
  const wanted = new Set(months);
  return ALL_LENSES_BY_DATE.filter((lens) => wanted.has(updateMonthOf(lens.date)));
}

/**
 * The archive month to send a changelog anchor to when its entry is not on the current page, or `null` when the
 * fragment is not a changelog anchor, its entry is already here, or its month has no page.
 */
export function archivedMonthForFragment(fragmentId: string, monthsOnPage: readonly string[]): string | null {
  const month = monthFromChangelogEntryId(fragmentId);
  if (month === null || monthsOnPage.includes(month) || !KNOWN_MONTHS.has(month)) return null;
  return month;
}
