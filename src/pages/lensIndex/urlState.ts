/**
 * Shareable URL state for the lens-library page.
 *
 * Query params are intentionally compact and validated against the catalog
 * taxonomy before they can affect the UI.
 */

import { IMAGE_FORMAT_BY_ID, LENS_MOUNT_BY_ID, isImageFormatId, isLensMountId } from "../../utils/lensTaxonomy.js";
import { allMakerSlugs } from "../../utils/lensMetadata.js";
import { clampNumericFilterValue, defaultCustomFilter, hasActiveCustomFilters } from "./catalog.js";
import type { CustomFilterState, FilterBounds, GroupMode, NumericFilterField } from "./types.js";

export interface LensIndexUrlState {
  groupMode: GroupMode;
  filterOpen: boolean;
  customFilter: CustomFilterState;
}

const GROUP_MODES = new Set<GroupMode>(["maker", "focal", "year-asc", "year-desc", "mount", "format"]);
const NUMERIC_PARAMS: ReadonlyArray<{ param: string; field: NumericFilterField; step: number }> = [
  { param: "focalMin", field: "focalMin", step: 0.1 },
  { param: "focalMax", field: "focalMax", step: 0.1 },
  { param: "apertureMin", field: "apertureMin", step: 0.05 },
  { param: "apertureMax", field: "apertureMax", step: 0.05 },
  { param: "yearMin", field: "patentYearMin", step: 1 },
  { param: "yearMax", field: "patentYearMax", step: 1 },
] as const;

function parseListParam(value: string | null): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function sortedKnownMakers(values: string[]): string[] {
  const makerSlugs = new Set(allMakerSlugs());
  return [...new Set(values.filter((slug) => makerSlugs.has(slug)))].sort((a, b) => a.localeCompare(b));
}

function sortedKnownMounts(values: string[]): CustomFilterState["lensMountIds"] {
  return [...new Set(values.filter(isLensMountId))].sort(
    (a, b) => LENS_MOUNT_BY_ID[a].sortOrder - LENS_MOUNT_BY_ID[b].sortOrder || a.localeCompare(b),
  );
}

function sortedKnownFormats(values: string[]): CustomFilterState["imageFormatIds"] {
  return [...new Set(values.filter(isImageFormatId))].sort(
    (a, b) => IMAGE_FORMAT_BY_ID[a].sortOrder - IMAGE_FORMAT_BY_ID[b].sortOrder || a.localeCompare(b),
  );
}

function parseNumericParam(
  params: URLSearchParams,
  param: string,
  fallback: number,
  bounds: FilterBounds,
  step: number,
) {
  const raw = params.get(param);
  if (raw === null || raw.trim() === "") return fallback;
  const parsed = Number(raw);
  if (!Number.isFinite(parsed)) return fallback;
  const isYear = param === "yearMin" || param === "yearMax";
  const min = isYear ? bounds.patentYearMin : param.includes("aperture") ? bounds.apertureMin : bounds.focalMin;
  const max = isYear ? bounds.patentYearMax : param.includes("aperture") ? bounds.apertureMax : bounds.focalMax;
  return clampNumericFilterValue(parsed, min, max, step);
}

export function parseLensIndexUrlState(search: string, bounds: FilterBounds): LensIndexUrlState {
  const params = new URLSearchParams(search);
  const defaultFilter = defaultCustomFilter(bounds);
  const requestedGroup = params.get("group");
  const groupMode =
    requestedGroup && GROUP_MODES.has(requestedGroup as GroupMode) ? (requestedGroup as GroupMode) : "maker";

  const customFilter: CustomFilterState = {
    ...defaultFilter,
    makerSlugs: sortedKnownMakers(parseListParam(params.get("makers"))),
    lensMountIds: sortedKnownMounts(parseListParam(params.get("mounts"))),
    imageFormatIds: sortedKnownFormats(parseListParam(params.get("formats"))),
  };

  for (const { param, field, step } of NUMERIC_PARAMS) {
    customFilter[field] = parseNumericParam(params, param, defaultFilter[field], bounds, step);
  }

  const focalMin = customFilter.focalMin;
  const focalMax = customFilter.focalMax;
  const apertureMin = customFilter.apertureMin;
  const apertureMax = customFilter.apertureMax;
  const patentYearMin = customFilter.patentYearMin;
  const patentYearMax = customFilter.patentYearMax;
  customFilter.focalMin = Math.min(focalMin, focalMax);
  customFilter.focalMax = Math.max(focalMin, focalMax);
  customFilter.apertureMin = Math.min(apertureMin, apertureMax);
  customFilter.apertureMax = Math.max(apertureMin, apertureMax);
  customFilter.patentYearMin = Math.min(patentYearMin, patentYearMax);
  customFilter.patentYearMax = Math.max(patentYearMin, patentYearMax);

  const filterOpen = params.get("filters") === "open" || hasActiveCustomFilters(customFilter, bounds);
  return { groupMode, filterOpen, customFilter };
}

export function serializeLensIndexUrlState({
  groupMode,
  filterOpen,
  customFilter,
  bounds,
}: LensIndexUrlState & { bounds: FilterBounds }): string {
  const params = new URLSearchParams();

  if (groupMode !== "maker") params.set("group", groupMode);
  if (customFilter.makerSlugs.length > 0) params.set("makers", customFilter.makerSlugs.join(","));
  if (customFilter.lensMountIds.length > 0) params.set("mounts", customFilter.lensMountIds.join(","));
  if (customFilter.imageFormatIds.length > 0) params.set("formats", customFilter.imageFormatIds.join(","));

  for (const { param, field } of NUMERIC_PARAMS) {
    if (customFilter[field] !== bounds[field]) params.set(param, String(customFilter[field]));
  }

  if (filterOpen && !hasActiveCustomFilters(customFilter, bounds)) params.set("filters", "open");
  return params.toString();
}

export function isSameCustomFilter(a: CustomFilterState, b: CustomFilterState): boolean {
  return (
    a.focalMin === b.focalMin &&
    a.focalMax === b.focalMax &&
    a.apertureMin === b.apertureMin &&
    a.apertureMax === b.apertureMax &&
    a.patentYearMin === b.patentYearMin &&
    a.patentYearMax === b.patentYearMax &&
    a.makerSlugs.join(",") === b.makerSlugs.join(",") &&
    a.lensMountIds.join(",") === b.lensMountIds.join(",") &&
    a.imageFormatIds.join(",") === b.imageFormatIds.join(",")
  );
}

export function isValidLensLibraryReturnPath(path: string, bounds: FilterBounds): boolean {
  if (!path.startsWith("/lenses")) return false;
  try {
    const url = new URL(path, "https://surfaceandstop.com");
    if (url.pathname !== "/lenses") return false;
    parseLensIndexUrlState(url.search, bounds);
    return true;
  } catch {
    return false;
  }
}
