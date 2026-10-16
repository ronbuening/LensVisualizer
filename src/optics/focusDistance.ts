/** Focus-distance endpoints follow the same normalized station coordinates as zoom gaps. */
import type { RuntimeLens } from "../types/optics.js";

/** Focus slider values below this threshold are treated as infinity. */
export const FOCUS_INFINITY_THRESHOLD = 0.003;

/** UI travel may be spread over authored states without changing engine/URL focus coordinates. */
export function focusControlPositions(L: RuntimeLens): readonly number[] {
  return L.data?.focusControl === "stations" ? L.focusPositions : [0, 1];
}

/** Convert evenly spaced control travel to canonical focusT, returning each authored knot exactly. */
export function focusFromControl(controlT: number, positions: readonly number[]): number {
  if (controlT <= 0 || !Number.isFinite(controlT)) return positions[0];
  if (controlT >= 1) return positions[positions.length - 1];
  const position = Math.max(0, Math.min(1, controlT)) * (positions.length - 1);
  const index = Math.min(Math.floor(position), positions.length - 2);
  return positions[index] + (positions[index + 1] - positions[index]) * (position - index);
}

/** Inverse presentation mapping; saved focusT and optical interpolation remain unchanged. */
export function focusToControl(focusT: number, positions: readonly number[]): number {
  if (focusT <= positions[0] || !Number.isFinite(focusT)) return 0;
  for (let i = 0; i < positions.length - 1; i++) {
    if (focusT <= positions[i + 1]) {
      return (i + (focusT - positions[i]) / (positions[i + 1] - positions[i])) / (positions.length - 1);
    }
  }
  return 1;
}

/** A distance belongs to its exact documented state, never to an interpolated spacing. */
export function focusConjugate(focusT: number, L: RuntimeLens, zoomT = 0) {
  return L.data.finiteConjugates?.find((c) => Math.abs(c.focusT - focusT) < 1e-8 && Math.abs(c.zoomT - zoomT) < 1e-8);
}

/** Metres in the declared reference convention; null means infinity or no verified distance. */
export function focusDistanceAt(focusT: number, L: RuntimeLens, zoomT = 0): number | null {
  if (L.data?.focusControl === "stations") {
    const conjugate = focusConjugate(focusT, L, zoomT);
    return conjugate ? conjugate.objectDistanceMm / 1000 : null;
  }
  if (focusT < FOCUS_INFINITY_THRESHOLD) return null;
  const distance = closeFocusAtZoom(zoomT, L) / focusT;
  return Number.isFinite(distance) && distance > 0 ? distance : null;
}

/** Always-visible qualification for station-based focus controls and analysis readouts. */
export function focusDistanceNote(focusT: number, L: RuntimeLens, zoomT = 0): string | undefined {
  if (L.data?.focusControl !== "stations") return undefined;
  if (focusT === 0) return "Patent states spaced evenly";
  const conjugate = focusConjugate(focusT, L, zoomT);
  if (!conjugate) return "Distance unverified";
  return `${conjugate.distanceReference === "image-plane" ? "From image plane" : "From first surface"} · source spacing`;
}

/** Preserve object distance when the modeled close-focus endpoint changes. */
export function remapFocusDistance(focusT: number, previousCloseM: number, nextCloseM: number): number {
  if (focusT < FOCUS_INFINITY_THRESHOLD || previousCloseM <= 0 || nextCloseM <= 0) return 0;
  return Math.min(1, (focusT * nextCloseM) / previousCloseM);
}

export function closeFocusAtZoom(zoomT: number, L: RuntimeLens): number {
  const values = L.zoomCloseFocusM;
  if (!L.isZoom || !values || values.length < 2) return L.closeFocusM;
  const position = Math.max(0, Math.min(1, Number.isFinite(zoomT) ? zoomT : 0)) * (values.length - 1);
  const index = Math.min(Math.floor(position), values.length - 2);
  return values[index] + (values[index + 1] - values[index]) * (position - index);
}
