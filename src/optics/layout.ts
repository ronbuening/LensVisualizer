/**
 * Runtime layout helpers — state-aware surface positions, sag, zoom, and first-order values.
 *
 * Adapts the prepared optics-engine state back to the legacy RuntimeLens helper names used by
 * diagram rendering and analysis panels.
 */

import type { LayoutResult, RuntimeLens } from "../types/optics.js";
import { buildStateSurfaces, resolveControlledThickness } from "./internal/lensState.js";
import { conicPolySag, sag, sagSlopeRaw } from "./internal/surfaceMath.js";
import { traceSurfacesParaxial } from "./internal/traceSurfaces.js";

/** Number of straight SVG segments used when rendering one surface profile. */
export const SVG_PATH_SUBDIVISIONS: number = 96;
const BISECT_ITERATIONS: number = 30;
/** Focus slider values below this threshold are treated as infinity. */
export const FOCUS_INFINITY_THRESHOLD: number = 0.003;

/**
 * Compute rendered sag for a RuntimeLens surface.
 *
 * @param h - radial surface height in mm
 * @param surfIdx - zero-based physical surface index
 * @param L - runtime lens object
 * @returns spherical or aspheric sag in mm, positive toward image space
 */
export function renderSag(h: number, surfIdx: number, L: RuntimeLens): number {
  const R = L.S[surfIdx].R;
  const a = L.asphByIdx[surfIdx];
  if (!a) return sag(h, R);
  return conicPolySag(h, R, a);
}

/**
 * Compute radial sag slope for a RuntimeLens surface.
 *
 * @param h - radial surface height in mm
 * @param surfIdx - zero-based physical surface index
 * @param L - runtime lens object
 * @returns dz/dh at the requested height
 */
export function sagSlope(h: number, surfIdx: number, L: RuntimeLens): number {
  return sagSlopeRaw(h, L.S[surfIdx].R, L.asphByIdx[surfIdx]);
}

/**
 * Trim a surface semi-diameter until sag intrusion fits an allowed air gap.
 *
 * This is a display safeguard only; tracing still uses authored apertures.
 *
 * @param surfIdx - zero-based physical surface index
 * @param sd - declared semi-diameter in mm
 * @param maxSag - maximum allowed absolute sag intrusion in mm
 * @param L - runtime lens object
 * @returns display semi-diameter in mm
 */
export function gapTrimHeight(surfIdx: number, sd: number, maxSag: number, L: RuntimeLens): number {
  if (maxSag <= 0 || L.gapSagFrac <= 0) return sd;
  if (Math.abs(renderSag(sd, surfIdx, L)) <= maxSag) return sd;
  let lo = 0;
  let hi = sd;
  for (let j = 0; j < BISECT_ITERATIONS; j++) {
    const mid = (lo + hi) / 2;
    if (Math.abs(renderSag(mid, surfIdx, L)) > maxSag) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

/**
 * Trim a display semi-diameter to keep rim slope below a tangent threshold.
 *
 * @param surfIdx - zero-based physical surface index
 * @param sd - declared semi-diameter in mm
 * @param maxSlopeTan - maximum allowed `|dz/dh|`
 * @param L - runtime lens object
 * @returns display semi-diameter in mm
 */
export function slopeTrimHeight(surfIdx: number, sd: number, maxSlopeTan: number, L: RuntimeLens): number {
  if (maxSlopeTan <= 0) return sd;
  if (Math.abs(sagSlope(sd, surfIdx, L)) <= maxSlopeTan) return sd;
  let lo = 0;
  let hi = sd;
  for (let j = 0; j < BISECT_ITERATIONS; j++) {
    const mid = (lo + hi) / 2;
    if (Math.abs(sagSlope(mid, surfIdx, L)) > maxSlopeTan) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

/**
 * Resolve current axial thickness after a surface.
 *
 * @param i - zero-based physical surface index
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns current thickness in mm
 */
export function thick(i: number, focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  return resolveControlledThickness(
    L.S[i].d,
    L.varByIdx[i],
    L.aberrationControl?.varByIdx[i],
    Boolean(L.isZoom),
    focusT,
    zoomT,
    aberrationT,
  );
}

/**
 * Compute current RuntimeLens layout positions.
 *
 * Surface vertices start at z=0 and accumulate current thicknesses. Folded systems
 * use their explicit image plane instead of assuming the last surface plus BFD.
 *
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns surface z positions, current thicknesses, and image-plane z in mm
 */
export function doLayout(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): LayoutResult {
  const th = L.S.map((_: unknown, i: number) => thick(i, focusT, zoomT, L, aberrationT));
  const z = [0];
  for (let i = 0; i < th.length - 1; i++) z.push(z[i] + th[i]);
  const defaultImgZ = z[z.length - 1] + th[th.length - 1];
  return { z, th, imgZ: L.isFoldedOptics ? L.imagePlane.z : defaultImgZ };
}

/**
 * Return RuntimeLens surfaces with state-adjusted thickness values.
 *
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns copied surface records with current `d` values
 */
export function stateSurfaces(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0) {
  return buildStateSurfaces(
    L.S,
    L.varByIdx,
    Boolean(L.isZoom),
    focusT,
    zoomT,
    L.aberrationControl?.varByIdx,
    aberrationT,
  );
}

/**
 * Interpolate EFL for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns effective focal length in mm
 */
export function eflAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EFL;
  return lerpZoomArray(zoomT, L.zoomEFLs!);
}

/**
 * Interpolate entrance-pupil semi-diameter for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns entrance-pupil semi-diameter in mm
 */
export function epAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EP.epSD;
  return lerpZoomArray(zoomT, L.zoomEPs!);
}

/**
 * Interpolate wide-open f-number for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns wide-open f-number
 */
export function fopenAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom || !L.zoomFOPENs) return L.FOPEN;
  return lerpZoomArray(zoomT, L.zoomFOPENs);
}

/**
 * Interpolate declared display half-field for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns half field angle in degrees
 */
export function halfFieldAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.halfField;
  return lerpZoomArray(zoomT, L.zoomHalfFields!);
}

/**
 * Interpolate trace-safe half-field for a zoom state.
 *
 * Fisheyes may have a declared half field wider than scalar slope launches can
 * trace; this value is the narrower field used for visible ray bundles.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns trace-safe half field angle in degrees
 */
export function tracingHalfFieldAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.tracingHalfField;
  return lerpZoomArray(zoomT, L.zoomTracingHalfFields!);
}

/**
 * Interpolate entrance-pupil stop height ratio for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns paraxial marginal-ray stop-height ratio
 */
export function yRatioAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EP.yRatio;
  return lerpZoomArray(zoomT, L.zoomYRatios!);
}

/**
 * Interpolate paraxial chief-ray stop coefficient for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns chief-ray stop-height coefficient in mm per unit slope
 */
export function bAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.B;
  return lerpZoomArray(zoomT, L.zoomBs!);
}

/**
 * Interpolate exit-pupil semi-diameter for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns exit-pupil semi-diameter in mm, or Infinity when any zoom entry is non-finite
 */
export function xpAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.xpSD;
  const arr = L.zoomXpSDs!;
  if (arr.some((v) => !isFinite(v))) return Infinity;
  return lerpZoomArray(zoomT, arr);
}

/**
 * Interpolate entrance-pupil z offset relative to the stop for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns entrance-pupil axial offset from stop in mm
 */
export function epZRelStopAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.epZRelStop;
  return lerpZoomArray(zoomT, L.zoomEpZRelStops!);
}

/**
 * Interpolate exit-pupil z offset relative to the last surface for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns exit-pupil axial offset from last surface in mm
 */
export function xpZRelLastSurfAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.xpZRelLastSurf;
  const arr = L.zoomXpZRelLastSurfs!;
  if (arr.some((v) => !isFinite(v))) return Infinity;
  return lerpZoomArray(zoomT, arr);
}

function lerpZoomArray(zoomT: number, arr: number[]): number {
  if (arr.length === 1) return arr[0];
  const pos = zoomT * (arr.length - 1);
  const idx = Math.min(Math.floor(pos), arr.length - 2);
  const frac = pos - idx;
  return arr[idx] + (arr[idx + 1] - arr[idx]) * frac;
}

/**
 * Compute current EFL from focus/zoom state using a paraxial basis ray.
 *
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns effective focal length in mm
 */
export function eflAtFocus(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  if (focusT < FOCUS_INFINITY_THRESHOLD && aberrationT <= 0) {
    return L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  }
  const S = stateSurfaces(focusT, zoomT, L, aberrationT);
  const trace = traceSurfacesParaxial(S, 1, 0, { skipLastTransfer: true });
  if (Math.abs(trace.u) < 1e-15) return L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  return -1.0 / trace.u;
}

/**
 * Estimate effective f-number at the current focus state.
 *
 * Uses the same close-focus correction as the first-order helper:
 * `N_eff = N * (1 + |m| / p)`, where `p` is pupil magnification XP/EP.
 *
 * @param nominalFNumber - marked f-number for the current aperture
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns effective f-number
 */
export function effectiveFNumber(
  nominalFNumber: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): number {
  if (focusT < FOCUS_INFINITY_THRESHOLD) return nominalFNumber;

  const efl = eflAtFocus(focusT, zoomT, L, aberrationT);
  const focusDistMm = (L.closeFocusM / focusT) * 1000;
  const denom = focusDistMm - efl;
  if (Math.abs(denom) < 1e-10) return nominalFNumber;
  const m = -efl / denom;

  const epSD = L.isZoom ? epAtZoom(zoomT, L) : L.EP.epSD;
  const xpSD = L.isZoom ? xpAtZoom(zoomT, L) : L.xpSD;
  const p = Math.abs(epSD) > 1e-10 ? Math.abs(xpSD) / Math.abs(epSD) : 1;

  return nominalFNumber * (1 + Math.abs(m) / (p > 1e-10 ? p : 1));
}
