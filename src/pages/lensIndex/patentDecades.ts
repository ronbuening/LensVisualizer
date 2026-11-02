import type { CatalogLensEntry, FilterBounds } from "./types.js";

export interface PatentDecadeOption {
  decade: number;
  count: number;
  patentYearMin: number;
  patentYearMax: number;
}

export function patentDecadeRange(decade: number, bounds: FilterBounds) {
  return {
    patentYearMin: Math.max(bounds.patentYearMin, decade),
    patentYearMax: Math.min(bounds.patentYearMax, decade + 9),
  };
}

/** Count the unfiltered catalog entries, just like the maker options. */
export function buildPatentDecadeOptions(
  entries: readonly CatalogLensEntry[],
  bounds: FilterBounds,
): PatentDecadeOption[] {
  const counts = new Map<number, number>();
  for (const { patentYear } of entries) {
    if (patentYear === null || patentYear < bounds.patentYearMin || patentYear > bounds.patentYearMax) continue;
    const decade = Math.floor(patentYear / 10) * 10;
    counts.set(decade, (counts.get(decade) ?? 0) + 1);
  }
  return Array.from(counts, ([decade, count]) => ({
    decade,
    count,
    ...patentDecadeRange(decade, bounds),
  })).sort((a, b) => a.decade - b.decade);
}
