/**
 * Lens index catalog helpers — catalog-derived filter bounds, grouping, and
 * formatting logic for the /lenses route.
 *
 * The route and filter UI both depend on the same catalog semantics. Keeping
 * those pure helpers here makes the page component read like composition
 * instead of a 1000-line mix of SEO, state, and grouping math.
 */

import { CATALOG_KEYS, LENS_CATALOG } from "../../utils/lensCatalog.js";
import { deriveMaker } from "../../utils/lensMetadata.js";
import type {
  CatalogLensEntry,
  CustomFilterState,
  FilterBounds,
  FocalSubGroup,
  MakerGroup,
  MakerOption,
  NumericFilterField,
  PrimeZoomSection,
  YearGroup,
} from "./types.js";
import type { LensData } from "../../types/optics.js";

const FOCAL_BUCKETS: ReadonlyArray<{ label: string; maxFl: number }> = [
  { label: "Ultrawide (≤24mm)", maxFl: 24 },
  { label: "Wide (25–39mm)", maxFl: 39 },
  { label: "Normal (40–60mm)", maxFl: 60 },
  { label: "Short Tele (61–99mm)", maxFl: 99 },
  { label: "Mid Tele (100–199mm)", maxFl: 199 },
  { label: "Ultra Tele (≥200mm)", maxFl: Infinity },
] as const;

function focalBucketLabel(fl: number): string {
  for (const { label, maxFl } of FOCAL_BUCKETS) {
    if (fl <= maxFl) return label;
  }
  return FOCAL_BUCKETS[FOCAL_BUCKETS.length - 1].label;
}

function lensFocalRange(data: LensData): [number, number] | null {
  const fl = data.focalLengthMarketing;
  if (fl === undefined || fl === null) return null;
  if (Array.isArray(fl)) return [Math.min(fl[0], fl[1]), Math.max(fl[0], fl[1])];
  return [fl, fl];
}

function isZoomLens(data: LensData): boolean {
  return Array.isArray(data.focalLengthMarketing);
}

function groupingFocalLength(data: LensData): number | null {
  const range = lensFocalRange(data);
  return range ? range[0] : null;
}

function lensAperture(data: LensData): number | null {
  if (data.apertureMarketing !== undefined) return data.apertureMarketing;
  if (data.apertureDesign !== undefined) return data.apertureDesign;
  if (Array.isArray(data.nominalFno)) return Math.min(...data.nominalFno);
  return data.nominalFno ?? null;
}

function buildCatalogEntries(): CatalogLensEntry[] {
  return CATALOG_KEYS.map((key) => {
    const data = LENS_CATALOG[key];
    return {
      key,
      data,
      maker: deriveMaker(data.name, data.maker),
      focalRange: lensFocalRange(data),
      aperture: lensAperture(data),
      patentYear: data.patentYear ?? null,
    };
  });
}

function numericBounds(values: number[]): [number, number] {
  return [Math.min(...values), Math.max(...values)];
}

/**
 * Derive the numeric filter bounds from the current catalog contents.
 *
 * @param entries - normalized catalog entries for the lens index page
 * @returns inclusive min/max bounds for each numeric filter
 */
export function buildFilterBounds(entries: CatalogLensEntry[]): FilterBounds {
  const focalValues = entries.flatMap((entry) => (entry.focalRange ? [entry.focalRange[0], entry.focalRange[1]] : []));
  const apertureValues = entries.flatMap((entry) => (entry.aperture !== null ? [entry.aperture] : []));
  const patentYears = entries.flatMap((entry) => (entry.patentYear !== null ? [entry.patentYear] : []));
  const [focalMin, focalMax] = numericBounds(focalValues);
  const [apertureMin, apertureMax] = numericBounds(apertureValues);
  const [patentYearMin, patentYearMax] = numericBounds(patentYears);

  return {
    focalMin,
    focalMax,
    apertureMin,
    apertureMax,
    patentYearMin,
    patentYearMax,
  };
}

/**
 * Build the default "show everything" custom filter state.
 *
 * @param bounds - catalog-derived numeric bounds
 * @returns filter state that leaves all lenses visible
 */
export function defaultCustomFilter(bounds: FilterBounds): CustomFilterState {
  return {
    ...bounds,
    makerSlugs: [],
  };
}

function buildMakerOptions(entries: CatalogLensEntry[]): MakerOption[] {
  const counts = new Map<string, MakerOption>();
  for (const entry of entries) {
    const existing = counts.get(entry.maker.slug);
    if (existing) {
      existing.count++;
    } else {
      counts.set(entry.maker.slug, { display: entry.maker.display, slug: entry.maker.slug, count: 1 });
    }
  }
  return Array.from(counts.values()).sort((a, b) => a.display.localeCompare(b.display));
}

/**
 * Test whether a catalog entry survives the active custom-filter state.
 *
 * Zoom focal lengths are treated as inclusive ranges so a 24–70 mm lens still
 * matches a 35–50 mm query instead of disappearing outside its wide endpoint.
 *
 * @param entry - normalized lens catalog entry
 * @param filter - current filter state
 * @param bounds - default bounds used to interpret missing values
 * @returns true when the entry should remain visible
 */
export function matchesCustomFilter(entry: CatalogLensEntry, filter: CustomFilterState, bounds: FilterBounds): boolean {
  const makerMatch = filter.makerSlugs.length === 0 || filter.makerSlugs.includes(entry.maker.slug);
  const focalMatch =
    entry.focalRange === null
      ? filter.focalMin === bounds.focalMin && filter.focalMax === bounds.focalMax
      : entry.focalRange[0] <= filter.focalMax && entry.focalRange[1] >= filter.focalMin;
  const apertureMatch =
    entry.aperture === null
      ? filter.apertureMin === bounds.apertureMin && filter.apertureMax === bounds.apertureMax
      : entry.aperture >= filter.apertureMin && entry.aperture <= filter.apertureMax;
  const patentYearMatch =
    entry.patentYear === null
      ? filter.patentYearMin === bounds.patentYearMin && filter.patentYearMax === bounds.patentYearMax
      : entry.patentYear >= filter.patentYearMin && entry.patentYear <= filter.patentYearMax;

  return makerMatch && focalMatch && apertureMatch && patentYearMatch;
}

/**
 * Determine whether the custom filter differs from the default "show all" state.
 *
 * @param filter - current filter state
 * @param bounds - default bounds derived from the full catalog
 * @returns true when any filter constraint is active
 */
export function hasActiveCustomFilters(filter: CustomFilterState, bounds: FilterBounds): boolean {
  return (
    filter.focalMin !== bounds.focalMin ||
    filter.focalMax !== bounds.focalMax ||
    filter.apertureMin !== bounds.apertureMin ||
    filter.apertureMax !== bounds.apertureMax ||
    filter.patentYearMin !== bounds.patentYearMin ||
    filter.patentYearMax !== bounds.patentYearMax ||
    filter.makerSlugs.length > 0
  );
}

/**
 * Group filtered entries by maker for the default lens-index view.
 *
 * @param entries - filtered catalog entries
 * @returns maker sections sorted by display name
 */
export function groupByMaker(entries: CatalogLensEntry[]): MakerGroup[] {
  const groups = new Map<string, MakerGroup>();
  for (const entry of entries) {
    if (!groups.has(entry.maker.slug)) {
      groups.set(entry.maker.slug, { display: entry.maker.display, slug: entry.maker.slug, lenses: [] });
    }
    groups.get(entry.maker.slug)!.lenses.push(entry);
  }
  return Array.from(groups.values()).sort((a, b) => a.display.localeCompare(b.display));
}

/**
 * Group entries into prime/zoom sections and focal-length buckets.
 *
 * @param entries - filtered catalog entries
 * @returns ordered prime and zoom sections with empty buckets removed
 */
export function groupByFocalLength(entries: CatalogLensEntry[]): PrimeZoomSection[] {
  const primeBuckets = new Map<string, CatalogLensEntry[]>();
  const zoomBuckets = new Map<string, CatalogLensEntry[]>();

  for (const entry of entries) {
    const fl = groupingFocalLength(entry.data);
    const label = fl !== null ? focalBucketLabel(fl) : "Unknown";
    const buckets = isZoomLens(entry.data) ? zoomBuckets : primeBuckets;
    if (!buckets.has(label)) buckets.set(label, []);
    buckets.get(label)!.push(entry);
  }

  const toSections = (buckets: Map<string, CatalogLensEntry[]>): FocalSubGroup[] =>
    FOCAL_BUCKETS.map(({ label }) => ({ label, lenses: buckets.get(label) ?? [] })).filter(
      (group) => group.lenses.length > 0,
    );

  const sections: PrimeZoomSection[] = [];
  const primeSections = toSections(primeBuckets);
  if (primeSections.length > 0) sections.push({ label: "Primes", subGroups: primeSections });
  const zoomSections = toSections(zoomBuckets);
  if (zoomSections.length > 0) sections.push({ label: "Zooms", subGroups: zoomSections });
  return sections;
}

/**
 * Group entries by patent decade in ascending or descending year order.
 *
 * @param entries - filtered catalog entries
 * @param direction - chronological ordering direction
 * @returns decade sections preserving the requested year ordering
 */
export function groupByPatentYear(entries: CatalogLensEntry[], direction: "asc" | "desc"): YearGroup[] {
  const sorted = [...entries].sort((a, b) => {
    const yearA = a.patentYear ?? (direction === "asc" ? Infinity : -Infinity);
    const yearB = b.patentYear ?? (direction === "asc" ? Infinity : -Infinity);
    if (yearA !== yearB) return direction === "asc" ? yearA - yearB : yearB - yearA;
    return a.data.name.localeCompare(b.data.name);
  });

  const groups = new Map<string, CatalogLensEntry[]>();
  for (const entry of sorted) {
    const year = entry.patentYear;
    const decade = year !== null ? `${Math.floor(year / 10) * 10}s` : "Unknown Year";
    if (!groups.has(decade)) groups.set(decade, []);
    groups.get(decade)!.push(entry);
  }

  return Array.from(groups.entries()).map(([decade, lenses]) => ({ decade, lenses }));
}

/**
 * Format a numeric filter value for a text input or readout label.
 *
 * @param value - raw numeric filter value
 * @returns compact decimal string with trailing zeros removed
 */
export function formatFilterValue(value: number): string {
  return Number.isInteger(value) ? value.toString() : value.toFixed(2).replace(/\.?0+$/, "");
}

/**
 * Convert committed numeric filter state into text-input draft values.
 *
 * @param filter - committed filter state
 * @returns string versions of each numeric field
 */
export function numericFilterInputValues(filter: CustomFilterState): Record<NumericFilterField, string> {
  return {
    focalMin: formatFilterValue(filter.focalMin),
    focalMax: formatFilterValue(filter.focalMax),
    apertureMin: formatFilterValue(filter.apertureMin),
    apertureMax: formatFilterValue(filter.apertureMax),
    patentYearMin: filter.patentYearMin.toString(),
    patentYearMax: filter.patentYearMax.toString(),
  };
}

function countStepDecimals(step: number): number {
  const [, decimals = ""] = step.toString().split(".");
  return decimals.length;
}

/**
 * Clamp and snap a typed numeric input value back onto the slider grid.
 *
 * This keeps keyboard edits and range-slider drags aligned to the same
 * canonical value so the UI never drifts between representations.
 *
 * @param value - parsed numeric input value
 * @param min - inclusive lower bound
 * @param max - inclusive upper bound
 * @param step - slider step used for snapping
 * @returns canonical numeric value within bounds
 */
export function clampNumericFilterValue(value: number, min: number, max: number, step: number): number {
  const clamped = Math.min(max, Math.max(min, value));
  if (step >= 1) return Math.round(clamped);
  const precision = countStepDecimals(step);
  const snapped = Math.round((clamped - min) / step) * step + min;
  return Number(snapped.toFixed(precision));
}

export const CATALOG_ENTRIES = buildCatalogEntries();
export const FILTER_BOUNDS = buildFilterBounds(CATALOG_ENTRIES);
export const MAKER_OPTIONS = buildMakerOptions(CATALOG_ENTRIES);
