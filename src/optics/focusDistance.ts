/** Focus-control coordinates and prescription-derived distance/aperture readouts. */
import type { RuntimeLens } from "../types/optics.js";
import { buildStateSurfaces } from "./internal/lensState.js";
import { traceParaxialSurfaces2, transferParaxialRay2 } from "./math/paraxial.js";

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

/** Look up a documented conjugate without treating interpolation as a source station. */
export function focusConjugate(focusT: number, L: RuntimeLens, zoomT = 0) {
  return L.data.finiteConjugates?.find((c) => Math.abs(c.focusT - focusT) < 1e-8 && Math.abs(c.zoomT - zoomT) < 1e-8);
}

/** Metres in the declared reference convention, deriving intermediate conjugates from the current gaps. */
export function focusDistanceAt(focusT: number, L: RuntimeLens, zoomT = 0): number | null {
  if (focusT < FOCUS_INFINITY_THRESHOLD) return null;
  if (L.data?.focusControl === "stations") {
    const conjugate = focusConjugate(focusT, L, zoomT);
    if (conjugate) return conjugate.objectDistanceMm / 1000;
    if (L.isFoldedOptics) return null;
    const surfaces = buildStateSurfaces(L.S, L.varByIdx, L.isZoom, focusT, zoomT, {}, 0, L.focusPositions);
    // The shared surface trace ends at the last vertex; propagate its two basis rays to the image plane.
    const imageGapMm = surfaces[surfaces.length - 1].d;
    const marginal = transferParaxialRay2(traceParaxialSurfaces2(surfaces, 1, 0), imageGapMm);
    const chief = transferParaxialRay2(traceParaxialSurfaces2(surfaces, 0, 1), imageGapMm);
    // At the image plane, A*y + B*u = 0; a real axial object has u = y / objectDistance.
    const objectDistanceMm = -chief.y / marginal.y;
    const trackMm = surfaces.reduce((sum, surface) => sum + surface.d, 0);
    const reference = L.data.finiteConjugates?.[0]?.distanceReference ?? "image-plane";
    const distanceM = (objectDistanceMm + (reference === "image-plane" ? trackMm : 0)) / 1000;
    return objectDistanceMm > 0 && Number.isFinite(distanceM) ? distanceM : null;
  }
  const distance = closeFocusAtZoom(zoomT, L) / focusT;
  return Number.isFinite(distance) && distance > 0 ? distance : null;
}

/**
 * Estimate a station-based lens's effective f-number from its current axial cone.
 * Normalize by the infinity cone to retain the marked aperture calibration. This also
 * accounts for changing pupil geometry without interpreting focusT as inverse distance.
 */
export function stationEffectiveFNumber(
  nominalFNumber: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): number | null {
  if (L.data?.focusControl !== "stations" || L.isFoldedOptics) return null;
  if (focusT < FOCUS_INFINITY_THRESHOLD) return nominalFNumber;
  const coneSlope = (focus: number, aberration: number) => {
    const surfaces = buildStateSurfaces(
      L.S,
      L.varByIdx,
      L.isZoom,
      focus,
      zoomT,
      L.aberrationControl?.varByIdx,
      aberration,
      L.focusPositions,
    );
    const marginal = traceParaxialSurfaces2(surfaces, 1, 0);
    const chief = traceParaxialSurfaces2(surfaces, 0, 1);
    const gap = surfaces[surfaces.length - 1].d;
    const a = transferParaxialRay2(marginal, gap).y;
    const b = transferParaxialRay2(chief, gap).y;
    const inputSlope = focus === 0 ? 0 : -a / b;
    if (!Number.isFinite(inputSlope) || inputSlope < 0) return null;
    const stop = traceParaxialSurfaces2(surfaces, 1, inputSlope, { stopAt: L.stopIdx });
    const slope = Math.abs((marginal.u + chief.u * inputSlope) / stop.y);
    return Number.isFinite(slope) && slope > 1e-12 ? slope : null;
  };
  const infinityCone = coneSlope(0, 0);
  const currentCone = coneSlope(focusT, aberrationT);
  return infinityCone !== null && currentCone !== null ? (nominalFNumber * infinityCone) / currentCone : null;
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
