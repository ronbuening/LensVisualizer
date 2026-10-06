/**
 * Source-published stations of a lens: the authored zoom stations and focus keyframes the cited source tabulates.
 *
 * Authored stations are interpolation control points. `LensData.publishedStations` and `finiteConjugates` say which
 * of them come from the source; this module turns that provenance into slider coordinates so the viewer can step
 * through source configurations only. It reads lens data and never changes tracing: `buildLens()` and the analyses
 * stay unaware of it, and a converter-mounted system keeps its host's stations.
 *
 * Coordinates follow the variable-gap interpolator: zoom station `i` of `n` sits at `zoomT = i / (n - 1)` and focus
 * keyframe `j` at `focusPositions[j]`, so a station reproduces its authored gap row.
 */
import type { FiniteConjugate, PublishedStations, RuntimeLens } from "../types/optics.js";
import { closeFocusAtZoom } from "./focusDistance.js";
import { getGroupMovementAvailability } from "./groupMovement.js";
import { zoomIndexToT } from "./internal/lensState.js";

/** Slider-coordinate tolerance for "on a station"; matches the finite-conjugate station match in MTF. */
export const STATION_COORDINATE_TOLERANCE = 1e-8;

const DEFAULT_FOCUS_POSITIONS: readonly number[] = [0, 1];

/* ── Types ── */

/** The lens-data fields that decide which stations are published; `LensData` satisfies it. */
export interface PublishedStationSource {
  publishedStations?: PublishedStations;
  finiteConjugates?: readonly FiniteConjugate[];
  zoomPositions?: readonly number[] | null;
  focusPositions?: readonly number[];
}

/** One published station in both index and slider coordinates. */
export interface PublishedStationCoordinate {
  /** Index into `zoomPositions`; 0 for a prime. */
  zoomIndex: number;
  /** Canonical zoom slider value [0 = first station, 1 = last]. */
  zoomT: number;
  /** Index into `focusPositions`; 0 is infinity. */
  focusIndex: number;
  /** Canonical focus slider value [0 = infinity, 1 = close focus]. */
  focusT: number;
}

/** Published stations in slider coordinates, computed from lens data alone. */
export interface PublishedStationGrid {
  /** Authored zoom stations; 1 for a prime. */
  zoomCount: number;
  /** Published zoom stations in ascending order; never empty. */
  zoom: { index: number; zoomT: number }[];
  /** Published focus keyframes per authored zoom station; empty where the zoom station is not published. */
  focusByZoomIndex: { index: number; focusT: number }[][];
}

export interface PublishedZoomStation {
  /** Index into `zoomPositions`; 0 for a prime. */
  index: number;
  zoomT: number;
  /** Authored station focal length in mm (`zoomPositions[index]`); the lens EFL for a prime. */
  focalLengthMm: number;
  /** Computed paraxial EFL at the station, in mm. */
  eflMm: number;
  /** Wide-open f-number the model uses at the station. */
  fNumber: number;
}

export interface PublishedFocusStation {
  /** Index into `focusPositions`; 0 is infinity. */
  index: number;
  focusT: number;
  isInfinity: boolean;
  /** Slider-convention focus distance in metres; a label, not a source claim. Null at infinity. */
  distanceM: number | null;
  /** Source-certified conjugate at this station, when the lens declares one. */
  conjugate: FiniteConjugate | null;
}

export type PublishedStationLimitKind =
  | "single-prescription"
  | "no-focus-travel"
  | "focus-infinity-only"
  | "single-zoom-station";

/** Why a lens offers fewer published stations than its sliders suggest. */
export interface PublishedStationLimit {
  kind: PublishedStationLimitKind;
  text: string;
}

export interface PublishedStationAvailability {
  /** True when there are two or more published stations to step between. */
  available: boolean;
  zoomStationCount: number;
  authoredZoomCount: number;
  /** Largest number of focus stations (infinity included) at any published zoom station. */
  maxFocusStationCount: number;
  limits: PublishedStationLimit[];
  /** Set for a host + converter system: stations are the host's, focal lengths and f-numbers are computed. */
  composed: { teleconverterName: string; hostName: string } | null;
}

/* ── Grid from lens data ── */

function isIndexInRange(value: unknown, min: number, max: number): value is number {
  return typeof value === "number" && Number.isInteger(value) && value >= min && value <= max;
}

/**
 * Resolve the published stations of a lens from its data, without building it.
 *
 * Defaults: every authored zoom station is published and only infinity focus is. `publishedStations` narrows the zoom
 * list and adds focus keyframes; each `finiteConjugates` entry adds its own station.
 *
 * @param data - lens data (or the subset of fields that decide provenance)
 * @returns published zoom stations and, per authored zoom station, its published focus keyframes
 */
export function publishedStationGrid(data: PublishedStationSource): PublishedStationGrid {
  const zoomCount = data.zoomPositions && data.zoomPositions.length >= 2 ? data.zoomPositions.length : 1;
  const focusPositions =
    data.focusPositions && data.focusPositions.length >= 2 ? data.focusPositions : DEFAULT_FOCUS_POSITIONS;
  const declared = data.publishedStations;

  const declaredZoom = declared?.zoom?.filter((index) => isIndexInRange(index, 0, zoomCount - 1));
  const zoomIndices =
    declaredZoom && declaredZoom.length > 0
      ? [...new Set(declaredZoom)].sort((a, b) => a - b)
      : Array.from({ length: zoomCount }, (_, index) => index);

  const focusSets: Set<number>[] = Array.from({ length: zoomCount }, () => new Set<number>());
  for (const zoomIndex of zoomIndices) focusSets[zoomIndex].add(0);

  const addFocus = (zoomIndex: number, focusIndex: unknown) => {
    if (focusSets[zoomIndex].size > 0 && isIndexInRange(focusIndex, 1, focusPositions.length - 1)) {
      focusSets[zoomIndex].add(focusIndex);
    }
  };
  const declaredFocus = declared?.focus;
  if (declaredFocus) {
    declaredFocus.forEach((entry, position) => {
      if (Array.isArray(entry)) {
        if (position < zoomCount) for (const focusIndex of entry) addFocus(position, focusIndex);
      } else {
        for (const zoomIndex of zoomIndices) addFocus(zoomIndex, entry);
      }
    });
  }
  for (const conjugate of data.finiteConjugates ?? []) {
    const zoomIndex = Math.round(conjugate.zoomT * (zoomCount - 1));
    const focusIndex = focusPositions.findIndex(
      (focusT) => Math.abs(focusT - conjugate.focusT) < STATION_COORDINATE_TOLERANCE,
    );
    if (isIndexInRange(zoomIndex, 0, zoomCount - 1)) addFocus(zoomIndex, focusIndex);
  }

  return {
    zoomCount,
    zoom: zoomIndices.map((index) => ({ index, zoomT: zoomIndexToT(index, zoomCount) })),
    focusByZoomIndex: focusSets.map((set) =>
      [...set].sort((a, b) => a - b).map((index) => ({ index, focusT: focusPositions[index] })),
    ),
  };
}

/**
 * Snap slider coordinates to the nearest published station.
 *
 * The zoom station is chosen first, then the focus keyframe published at that zoom station. Ties go to the lower
 * zoom index and toward infinity, so the result is deterministic and snapping a station returns the same station.
 *
 * @param grid - published stations from `publishedStationGrid`
 * @param zoomT - zoom slider value [0, 1]; non-finite values read as 0
 * @param focusT - focus slider value [0 = infinity, 1 = close focus]; non-finite values read as 0
 * @returns the station in index and canonical slider coordinates
 */
export function nearestStationInGrid(
  grid: PublishedStationGrid,
  zoomT: number,
  focusT: number,
): PublishedStationCoordinate {
  const targetZoomT = Number.isFinite(zoomT) ? zoomT : 0;
  const targetFocusT = Number.isFinite(focusT) ? focusT : 0;
  let zoomStation = grid.zoom[0];
  for (const candidate of grid.zoom) {
    if (Math.abs(candidate.zoomT - targetZoomT) < Math.abs(zoomStation.zoomT - targetZoomT)) zoomStation = candidate;
  }
  const focusStations = grid.focusByZoomIndex[zoomStation.index];
  let focusStation = focusStations[0];
  for (const candidate of focusStations) {
    if (Math.abs(candidate.focusT - targetFocusT) < Math.abs(focusStation.focusT - targetFocusT)) {
      focusStation = candidate;
    }
  }
  return {
    zoomIndex: zoomStation.index,
    zoomT: zoomStation.zoomT,
    focusIndex: focusStation.index,
    focusT: focusStation.focusT,
  };
}

/* ── Runtime-lens views ── */

/**
 * List the published zoom stations of a lens with their focal length and wide-open f-number.
 *
 * @param L - runtime lens object
 * @returns published zoom stations in ascending order; one pseudo station at index 0 for a prime
 */
export function publishedZoomStations(L: RuntimeLens): PublishedZoomStation[] {
  return publishedStationGrid(L.data).zoom.map(({ index, zoomT }) => ({
    index,
    zoomT,
    focalLengthMm: L.zoomPositions?.[index] ?? L.EFL,
    eflMm: L.zoomEFLs?.[index] ?? L.EFL,
    fNumber: L.zoomFOPENs?.[index] ?? L.FOPEN,
  }));
}

/**
 * List the published focus stations at one zoom station, infinity first.
 *
 * @param L - runtime lens object
 * @param zoomStationIndex - index into `zoomPositions`; 0 for a prime
 * @returns published focus keyframes at that zoom station; empty when the zoom station is not published
 */
export function publishedFocusStations(L: RuntimeLens, zoomStationIndex = 0): PublishedFocusStation[] {
  const grid = publishedStationGrid(L.data);
  const zoomT = zoomIndexToT(zoomStationIndex, grid.zoomCount);
  const closeFocusM = closeFocusAtZoom(zoomT, L);
  return (grid.focusByZoomIndex[zoomStationIndex] ?? []).map(({ index, focusT }) => ({
    index,
    focusT,
    isInfinity: index === 0,
    distanceM: index === 0 ? null : closeFocusM / focusT,
    conjugate:
      L.data.finiteConjugates?.find(
        (conjugate) =>
          Math.abs(conjugate.focusT - focusT) < STATION_COORDINATE_TOLERANCE &&
          Math.abs(conjugate.zoomT - zoomT) < STATION_COORDINATE_TOLERANCE,
      ) ?? null,
  }));
}

/**
 * Snap slider coordinates to the nearest published station of a lens.
 *
 * @param L - runtime lens object
 * @param zoomT - zoom slider value [0, 1]
 * @param focusT - focus slider value [0 = infinity, 1 = close focus]
 * @returns the station in index and canonical slider coordinates; (0, infinity) for a single-prescription prime
 */
export function nearestPublishedStation(L: RuntimeLens, zoomT: number, focusT: number): PublishedStationCoordinate {
  return nearestStationInGrid(publishedStationGrid(L.data), zoomT, focusT);
}

/**
 * Test whether a slider state is a published station.
 *
 * @param L - runtime lens object
 * @param zoomT - zoom slider value [0, 1]
 * @param focusT - focus slider value [0 = infinity, 1 = close focus]
 * @param aberrationT - aberration-control value; any non-neutral setting is off-station
 * @returns true when the state matches a published station within `STATION_COORDINATE_TOLERANCE`
 */
export function isOnPublishedStation(L: RuntimeLens, zoomT: number, focusT: number, aberrationT = 0): boolean {
  if (Math.abs(aberrationT) > STATION_COORDINATE_TOLERANCE) return false;
  const station = nearestPublishedStation(L, zoomT, focusT);
  return (
    Math.abs(station.zoomT - zoomT) < STATION_COORDINATE_TOLERANCE &&
    Math.abs(station.focusT - focusT) < STATION_COORDINATE_TOLERANCE
  );
}

/**
 * Summarize how many published stations a lens offers and why there are not more.
 *
 * @param L - runtime lens object
 * @returns station counts, the limits that apply, and the converter pairing for a composed system
 */
export function publishedStationAvailability(L: RuntimeLens): PublishedStationAvailability {
  const grid = publishedStationGrid(L.data);
  const focusCounts = grid.zoom.map(({ index }) => grid.focusByZoomIndex[index].length);
  const stationCount = focusCounts.reduce((total, count) => total + count, 0);
  const maxFocusStationCount = Math.max(...focusCounts);

  const limits: PublishedStationLimit[] = [];
  if (stationCount === 1) {
    limits.push({ kind: "single-prescription", text: "Single patent prescription — no other tabulated positions" });
  }
  if (maxFocusStationCount === 1) {
    limits.push(
      getGroupMovementAvailability(L).focus
        ? /* Absence of a flag cannot tell a reconstructed close-focus row from one not yet reviewed. */
          { kind: "focus-infinity-only", text: "No close-focus position is certified as source-tabulated" }
        : { kind: "no-focus-travel", text: "Focus travel is not modeled" },
    );
  }
  if (L.isZoom && grid.zoom.length === 1) {
    limits.push({ kind: "single-zoom-station", text: "The source tabulates one zoom position" });
  }

  const converter = L.data.attachedTeleconverter;
  return {
    available: stationCount > 1,
    zoomStationCount: grid.zoom.length,
    authoredZoomCount: grid.zoomCount,
    maxFocusStationCount,
    limits,
    composed: converter ? { teleconverterName: converter.name, hostName: converter.hostName } : null,
  };
}
