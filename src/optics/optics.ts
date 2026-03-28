/**
 * Optics engine — pure functions for sag, layout, ray tracing, and conjugates.
 *
 * Every function accepts the runtime lens object L as an explicit parameter.
 * No React dependencies — this module is fully testable in isolation.
 */

import type {
  RuntimeLens,
  RayTraceResult,
  LayoutResult,
  ChromaticChannel,
  ChromaticSpread,
  ParaxialTraceResult,
} from "../types/optics.js";
import { buildStateSurfaces, resolveVariableThickness } from "./internal/lensState.js";
import { FLAT_R_THRESHOLD, conicPolySag, sag, sagSlopeRaw } from "./internal/surfaceMath.js";
import { traceSurfacesParaxial, traceSurfacesReal } from "./internal/traceSurfaces.js";

export { FLAT_R_THRESHOLD, conicPolySag, sag, sagSlopeRaw } from "./internal/surfaceMath.js";

export interface FieldGeometryState {
  halfFieldDeg: number;
  yRatio: number;
  b: number;
  epRatio: number;
}

export interface EntrancePupilState {
  epSD: number;
  yRatio: number;
  b: number;
  epRatio: number;
}

export interface SkewRayTraceResult {
  x: number;
  y: number;
  ux: number;
  uy: number;
  clipped: boolean;
}

export interface SkewImagePlaneIntercept {
  x: number;
  y: number;
}

export interface OrthogonalPupilSample {
  index: number;
  pupilFraction: number;
  xFraction: number;
  yFraction: number;
}

export interface CircularPupilSample {
  index: number;
  xFraction: number;
  yFraction: number;
  radiusFraction: number;
  azimuthRad: number;
  weight: number;
}

/* ── Named constants ── */
const SVG_PATH_SUBDIVISIONS: number = 48; /* arc segments per surface when building SVG paths */
const BISECT_ITERATIONS: number = 30; /* bisection steps for gapTrimHeight — yields ~1e-9 mm precision */
export const FOCUS_INFINITY_THRESHOLD: number = 0.003; /* focusT values below this are treated as infinity focus */
export const DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES = [1, 6, 12, 18, 24] as const;

/* =====================================================================
 * §4  RENDERING HELPERS — Sag, layout, and shape utilities
 * =================================================================== */

/**
 * Aspherical sag at a surface, looked up from the runtime lens object.
 *
 * Falls back to plain spherical sag when no aspheric coefficients exist
 * for the given surface index.
 *
 * @param h        — ray height from axis (mm)
 * @param surfIdx  — surface index into L.S[]
 * @param L        — runtime lens object from buildLens()
 * @returns          sag in mm
 */
export function renderSag(h: number, surfIdx: number, L: RuntimeLens): number {
  const R = L.S[surfIdx].R;
  const a = L.asphByIdx[surfIdx];
  if (!a) return sag(h, R);
  return conicPolySag(h, R, a);
}

export function sagSlope(h: number, surfIdx: number, L: RuntimeLens): number {
  return sagSlopeRaw(h, L.S[surfIdx].R, L.asphByIdx[surfIdx]);
}

/**
 * Find the maximum ray height at which a surface's sag fits within maxSag.
 *
 * When a thin air gap separates two strongly curved surfaces, their sag
 * intrusions can overlap visually.  This function bisects to find the
 * largest h ≤ sd where |sag(h)| ≤ maxSag, used to trim the gap rendering.
 *
 * @param surfIdx  — surface index
 * @param sd       — nominal semi-diameter (mm)
 * @param maxSag   — maximum allowed sag magnitude (mm)
 * @param L        — runtime lens object
 * @returns          trimmed semi-diameter ≤ sd
 */
export function gapTrimHeight(surfIdx: number, sd: number, maxSag: number, L: RuntimeLens): number {
  if (maxSag <= 0 || L.gapSagFrac <= 0) return sd;
  if (Math.abs(renderSag(sd, surfIdx, L)) <= maxSag) return sd;
  let lo = 0,
    hi = sd;
  for (let j = 0; j < BISECT_ITERATIONS; j++) {
    const mid = (lo + hi) / 2;
    if (Math.abs(renderSag(mid, surfIdx, L)) > maxSag) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

/**
 * Effective thickness of surface i, interpolated for focus and zoom.
 *
 * Non-variable surfaces return their fixed thickness.  For variable gaps:
 * - Prime lenses: lerp between d_infinity (v[0]) and d_close (v[1]) by focusT
 * - Zoom lenses: piecewise-linear interpolation across zoom positions first,
 *   then lerp between infinity and close-focus distances by focusT
 *
 * @param i       — surface index
 * @param focusT  — focus slider [0 = infinity, 1 = close focus]
 * @param zoomT   — zoom slider [0 = wide, 1 = tele]
 * @param L       — runtime lens object
 * @returns         thickness in mm
 */
export function thick(i: number, focusT: number, zoomT: number, L: RuntimeLens): number {
  return resolveVariableThickness(L.S[i].d, L.varByIdx[i], Boolean(L.isZoom), focusT, zoomT);
}

/**
 * Compute axial positions (z) for every surface at the current focus/zoom.
 *
 * @param focusT  — focus slider [0..1]
 * @param zoomT   — zoom slider [0..1]
 * @param L       — runtime lens object
 * @returns   z[i] = axial position of surface i; imgZ = image plane position
 */
export function doLayout(focusT: number, zoomT: number, L: RuntimeLens): LayoutResult {
  const th = L.S.map((_: unknown, i: number) => thick(i, focusT, zoomT, L));
  const z = [0];
  for (let i = 0; i < th.length - 1; i++) z.push(z[i] + th[i]);
  return { z, th, imgZ: z[z.length - 1] + th[th.length - 1] };
}

function stateSurfaces(focusT: number, zoomT: number, L: RuntimeLens) {
  return buildStateSurfaces(L.S, L.varByIdx, Boolean(L.isZoom), focusT, zoomT);
}

export function computeFieldGeometryAtState(focusT: number, zoomT: number, L: RuntimeLens): FieldGeometryState {
  const S = stateSurfaces(focusT, zoomT, L);
  const stopIdx = L.stopIdx;
  const delta = 1e-4;

  const paraxMarg = traceSurfacesParaxial(S, 1, 0, { stopAt: stopIdx });
  const paraxChief = traceSurfacesParaxial(S, 0, 1, { stopAt: stopIdx });
  const realMarg = traceSurfacesReal(S, L.asphByIdx, delta, 0, { stopAt: stopIdx });
  const realChief = traceSurfacesReal(S, L.asphByIdx, 0, delta, { stopAt: stopIdx });

  const yRatio = isFinite(realMarg.y) ? realMarg.y / delta : paraxMarg.y;
  const b = isFinite(realChief.y) ? realChief.y / delta : paraxChief.y;
  const epRatio = Math.abs(yRatio) > 1e-9 ? b / yRatio : 0;

  const hA = traceSurfacesParaxial(S, 1, 0, { skipLastTransfer: true, recordHeights: true }).heights!;
  const hB = traceSurfacesParaxial(S, 0, 1, { skipLastTransfer: true, recordHeights: true }).heights!;
  const r = Math.abs(hA[stopIdx]) > 1e-15 ? hB[stopIdx] / hA[stopIdx] : 0;
  let minU = Infinity;
  for (let i = 0; i < L.N; i++) {
    if (i === stopIdx) continue;
    const coeff = Math.abs(hB[i] - r * hA[i]);
    if (coeff > 1e-8) {
      const uMax = S[i].sd / coeff;
      if (uMax < minU) minU = uMax;
    }
  }
  let halfFieldDeg = (Math.atan(minU) * 180) / Math.PI;

  const testChief = (deg: number): boolean => {
    const uField = -Math.tan((deg * Math.PI) / 180);
    const yChiefIn = -epRatio * uField;
    const trace = traceSurfacesReal(S, L.asphByIdx, yChiefIn, uField, { checkSemiDiameter: true });
    return isFinite(trace.y) && !trace.clipped;
  };

  if (isFinite(halfFieldDeg) && halfFieldDeg > 0 && !testChief(halfFieldDeg)) {
    let lo = 0,
      hi = halfFieldDeg;
    for (let i = 0; i < 20; i++) {
      const mid = (lo + hi) / 2;
      if (testChief(mid)) lo = mid;
      else hi = mid;
    }
    halfFieldDeg = lo;
  }

  return { halfFieldDeg, yRatio, b, epRatio };
}

export function traceChiefRayAtAngle(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
): RayTraceResult {
  const geom = geometry ?? computeFieldGeometryAtState(focusT, zoomT, L);
  const thetaRad = (fieldAngleDeg * Math.PI) / 180;
  const uField = -Math.tan(thetaRad);
  const yChief = -geom.epRatio * uField;
  return traceRay(yChief, uField, zPos, focusT, zoomT, undefined, true, L);
}

/**
 * State-aware paraxial trace to the last surface.
 *
 * Mirrors traceRay()'s convention by returning the ray height and slope
 * immediately after refraction at the last surface, before the final transfer
 * to the image plane.
 */
export function traceParaxialRay(
  y0: number,
  u0: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
): Pick<ParaxialTraceResult, "y" | "u"> {
  const S = stateSurfaces(focusT, zoomT, L);
  const result = traceSurfacesParaxial(S, y0, u0, { skipLastTransfer: true });
  return { y: result.y, u: result.u };
}

export function chiefRayImageHeight(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
): number {
  const trace = traceChiefRayAtAngle(fieldAngleDeg, zPos, focusT, zoomT, L, geometry);
  return trace.y + trace.u * thick(L.N - 1, focusT, zoomT, L);
}

export function solveFieldAngleForImageHeight(
  targetImageHeight: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
): number | null {
  if (!isFinite(targetImageHeight) || Math.abs(targetImageHeight) < 1e-12) return 0;
  const geom = geometry ?? computeFieldGeometryAtState(focusT, zoomT, L);
  if (!isFinite(geom.halfFieldDeg) || geom.halfFieldDeg <= 0) return null;

  const target = -Math.abs(targetImageHeight);
  let lo = 0;
  let hi = geom.halfFieldDeg;
  const yLo = chiefRayImageHeight(lo, zPos, focusT, zoomT, L, geom);
  const yHi = chiefRayImageHeight(hi, zPos, focusT, zoomT, L, geom);
  if (!isFinite(yLo) || !isFinite(yHi)) return null;
  if (target > yLo || target < yHi) return null;

  for (let i = 0; i < 32; i++) {
    const mid = (lo + hi) / 2;
    const yMid = chiefRayImageHeight(mid, zPos, focusT, zoomT, L, geom);
    if (!isFinite(yMid)) return null;
    if (Math.abs(yMid - target) < 1e-4) return mid;
    if (yMid > target) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

/**
 * Interpolate the effective focal length at a given zoom position.
 *
 * For prime lenses, returns L.EFL directly.  For zooms, linearly
 * interpolates between the pre-computed EFLs at each zoom position.
 *
 * @param zoomT  — zoom slider [0 = wide, 1 = tele]
 * @param L      — runtime lens object
 * @returns         EFL in mm
 */
export function eflAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EFL;
  return _lerpZoomArray(zoomT, L.zoomEFLs!);
}

/**
 * Interpolate entrance pupil SD at a given zoom position.
 *
 * @param zoomT  — zoom slider [0 = wide, 1 = tele]
 * @param L      — runtime lens object
 * @returns         entrance pupil SD in mm
 */
export function epAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EP.epSD;
  return _lerpZoomArray(zoomT, L.zoomEPs!);
}

/**
 * Interpolate wide-open f-number at a given zoom position.
 * For variable-aperture zooms (e.g. f/4.5-5.6), this returns
 * the zoom-dependent maximum aperture. For constant-aperture
 * zooms and primes, returns L.FOPEN unchanged.
 *
 * @param zoomT  — zoom slider [0 = wide, 1 = tele]
 * @param L      — runtime lens object
 * @returns         wide-open f-number at this zoom position
 */
export function fopenAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom || !L.zoomFOPENs) return L.FOPEN;
  return _lerpZoomArray(zoomT, L.zoomFOPENs);
}

/**
 * Interpolate half-field angle at a given zoom position.
 *
 * @param zoomT  — zoom slider [0 = wide, 1 = tele]
 * @param L      — runtime lens object
 * @returns         half-field angle in degrees
 */
export function halfFieldAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.halfField;
  return _lerpZoomArray(zoomT, L.zoomHalfFields!);
}

/**
 * Interpolate marginal ray height ratio at stop for a given zoom position.
 *
 * @param zoomT  — zoom slider [0 = wide, 1 = tele]
 * @param L      — runtime lens object
 * @returns         yRatio at the stop surface
 */
export function yRatioAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EP.yRatio;
  return _lerpZoomArray(zoomT, L.zoomYRatios!);
}

/**
 * Interpolate chief ray height at stop for a given zoom position.
 *
 * @param zoomT  — zoom slider [0 = wide, 1 = tele]
 * @param L      — runtime lens object
 * @returns         B (chief ray height at stop)
 */
export function bAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.B;
  return _lerpZoomArray(zoomT, L.zoomBs!);
}

/** Interpolate exit pupil SD at a given zoom position. */
export function xpAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.xpSD;
  return _lerpZoomArray(zoomT, L.zoomXpSDs!);
}

/**
 * Compute entrance pupil geometry for the current focus/zoom state.
 *
 * Uses the current front-group marginal-ray ratio instead of the build-time
 * infinity-focus value so pupil-dependent analyses stay aligned with floating-
 * focus and internal-focus designs.
 */
export function entrancePupilAtState(
  stopSD: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
): EntrancePupilState {
  const geometry = computeFieldGeometryAtState(focusT, zoomT, L);
  const yRatio = geometry.yRatio;
  const epSD = Math.abs(yRatio) > 1e-9 ? Math.abs(stopSD / yRatio) : 0;
  return {
    epSD,
    yRatio,
    b: geometry.b,
    epRatio: geometry.epRatio,
  };
}

/**
 * Piecewise-linear interpolation across a pre-computed zoom array.
 * Shared helper for eflAtZoom, epAtZoom, halfFieldAtZoom, etc.
 */
function _lerpZoomArray(zoomT: number, arr: number[]): number {
  if (arr.length === 1) return arr[0];
  const pos = zoomT * (arr.length - 1);
  const idx = Math.min(Math.floor(pos), arr.length - 2);
  const frac = pos - idx;
  return arr[idx] + (arr[idx + 1] - arr[idx]) * frac;
}

/**
 * Compute the effective focal length at a given focus/zoom position.
 *
 * At infinity focus, returns the static EFL (or zoom-interpolated EFL).
 * At closer focus distances, variable gaps change the spacing between
 * lens groups, which shifts the overall optical power.  This is especially
 * noticeable in internal-focusing designs where only a subset of elements move.
 *
 * Uses a paraxial marginal ray (y=1, u=0) with focus-aware thicknesses,
 * skipping the last transfer: EFL = −1/u_final.
 */
export function eflAtFocus(focusT: number, zoomT: number, L: RuntimeLens): number {
  if (focusT < FOCUS_INFINITY_THRESHOLD) {
    return L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  }
  const S = stateSurfaces(focusT, zoomT, L);
  const trace = traceSurfacesParaxial(S, 1, 0, { skipLastTransfer: true });
  if (Math.abs(trace.u) < 1e-15) return L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  return -1.0 / trace.u;
}

/**
 * Compute the effective f-number accounting for the bellows extension factor.
 *
 * As a lens focuses closer, the image-side working distance increases,
 * reducing the effective light-gathering ability.  The correction is:
 *   f_eff = f_nominal × (1 + |m| / p)
 * where m is the image magnification and p is the pupil magnification
 * (exit pupil SD / entrance pupil SD).
 *
 * At infinity focus (m ≈ 0), returns the nominal f-number unchanged.
 */
export function effectiveFNumber(nominalFNumber: number, focusT: number, zoomT: number, L: RuntimeLens): number {
  if (focusT < FOCUS_INFINITY_THRESHOLD) return nominalFNumber;

  const efl = eflAtFocus(focusT, zoomT, L);
  const focusDistMm = (L.closeFocusM / focusT) * 1000;
  const denom = focusDistMm - efl;
  if (Math.abs(denom) < 1e-10) return nominalFNumber;
  const m = -efl / denom;

  const epSD = L.isZoom ? epAtZoom(zoomT, L) : L.EP.epSD;
  const xpSD = L.isZoom ? xpAtZoom(zoomT, L) : L.xpSD;
  const p = Math.abs(epSD) > 1e-10 ? Math.abs(xpSD) / Math.abs(epSD) : 1;

  return nominalFNumber * (1 + Math.abs(m) / (p > 1e-10 ? p : 1));
}

/* =====================================================================
 * §5  OPTICS ENGINE — Ray-trace and conjugate functions
 * =================================================================== */

/**
 * Refractive index adjusted for wavelength using Abbe number dispersion.
 * channel: 'R' (C-line 656.3nm), 'G' (d-line 587.6nm), 'B' (F-line 486.1nm)
 */
export function wavelengthNd(nd: number, vd: number | undefined, channel: ChromaticChannel): number {
  if (nd === 1.0) return 1.0;
  if (!vd || channel === "G") return nd;
  const delta = (nd - 1) / (2 * vd);
  return channel === "R" ? nd - delta : nd + delta;
}

/**
 * Core ray-trace implementation using exact (real) Snell's law.
 *
 * When channel is undefined, uses the d-line refractive index directly.
 * When channel is provided, adjusts nd per wavelength via Abbe dispersion.
 *
 * Ray starts at height y0 with slope u0 (tan of angle to axis).
 * At each surface, the surface normal is computed from sagSlope() and
 * exact Snell's law is applied:  n·sin(I) = n'·sin(I')
 * where I = U − α (angle of incidence relative to surface normal).
 *
 * Clipping: rays exceeding a surface's semi-diameter are either stopped
 * (ghost=false) or continued as ghost rays (ghost=true) for visualization.
 */
function _traceRayCore(
  y0: number,
  u0: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
): RayTraceResult {
  const pts: number[][] = [];
  const ghostPts: number[][] = [];
  pts.push([zPos[0] - L.rayLead, y0 - u0 * L.rayLead]);
  let y = y0,
    n = 1.0;
  let U = Math.atan(u0);
  let clipped = false;
  for (let i = 0; i < L.N; i++) {
    const { nd, sd } = L.S[i];
    const z = zPos[i];
    const isStop = i === L.stopIdx;
    const clip = isStop && stopSD !== undefined ? stopSD : sd * L.clipMargin;
    if (!clipped && Math.abs(y) > clip) {
      if (!ghost) break;
      clipped = true;
    }
    const pt = [z + renderSag(Math.abs(y), i, L), y];
    if (clipped) ghostPts.push(pt);
    else pts.push(pt);
    const nn = channel ? wavelengthNd(nd, L.vdByIdx[i], channel) : nd === 1.0 ? 1.0 : nd;
    if (nn !== n) {
      /* Exact Snell's law refraction:
       *   α  = surface normal tilt angle (from sagSlope)
       *   I  = angle of incidence = ray angle − normal tilt
       *   I' = angle of refraction via n·sin(I) = n'·sin(I')
       *   U' = α + I'  (new ray angle after refraction)
       * |sin(I')| > 1 means total internal reflection → clip the ray.
       *
       * Guard: if the ray is a ghost and |y| exceeds the sphere's geometric
       * extent (|y| > |R|, so the sag discriminant would go negative), the
       * surface normal is undefined.  Skip refraction and propagate straight
       * rather than letting the 1e-12 clamp in sagSlope produce a garbage angle. */
      const absY = Math.abs(y);
      const R = L.S[i].R;
      if (clipped && Math.abs(R) < FLAT_R_THRESHOLD && absY * absY > R * R) {
        /* ghost ray beyond sphere extent — propagate straight, no refraction */
      } else {
        const slope = sagSlope(absY, i, L);
        const alpha = y >= 0 ? -Math.atan(slope) : Math.atan(slope);
        const I = U - alpha;
        const sinIp = (n / nn) * Math.sin(I);
        if (Math.abs(sinIp) > 1.0) {
          if (!ghost) break;
          clipped = true;
        } else {
          U = alpha + Math.asin(sinIp);
        }
      }
    }
    n = nn;
    if (i < L.N - 1) y += thick(i, focusT, zoomT, L) * Math.tan(U);
  }
  return { pts, ghostPts, y, u: Math.tan(U), clipped };
}

function normalizeDirection(ux: number, uy: number): [number, number, number] {
  const invMag = 1 / Math.hypot(ux, uy, 1);
  return [ux * invMag, uy * invMag, invMag];
}

function surfaceNormalAtPoint(x: number, y: number, surfIdx: number, L: RuntimeLens): [number, number, number] {
  const radius = Math.hypot(x, y);
  if (radius < 1e-12) return [0, 0, 1];

  const radialSlope = sagSlope(radius, surfIdx, L);
  const invRadius = 1 / radius;
  const dzdx = radialSlope * x * invRadius;
  const dzdy = radialSlope * y * invRadius;
  const invMag = 1 / Math.hypot(dzdx, dzdy, 1);
  return [-dzdx * invMag, -dzdy * invMag, invMag];
}

function refractDirection(
  direction: [number, number, number],
  normal: [number, number, number],
  n: number,
  nn: number,
): [number, number, number] | null {
  const eta = n / nn;
  const cosIncident = direction[0] * normal[0] + direction[1] * normal[1] + direction[2] * normal[2];
  const tangentX = direction[0] - cosIncident * normal[0];
  const tangentY = direction[1] - cosIncident * normal[1];
  const tangentZ = direction[2] - cosIncident * normal[2];
  const tangentSq = tangentX * tangentX + tangentY * tangentY + tangentZ * tangentZ;
  const scaledTangentSq = eta * eta * tangentSq;
  if (scaledTangentSq > 1 + 1e-12) return null;

  const normalScale = Math.sqrt(Math.max(0, 1 - scaledTangentSq));
  const transmitted: [number, number, number] = [
    eta * tangentX + normalScale * normal[0],
    eta * tangentY + normalScale * normal[1],
    eta * tangentZ + normalScale * normal[2],
  ];
  const invMag = 1 / Math.hypot(transmitted[0], transmitted[1], transmitted[2]);
  return [transmitted[0] * invMag, transmitted[1] * invMag, transmitted[2] * invMag];
}

/**
 * Trace a skew ray through the rotationally symmetric lens model.
 *
 * The surfaces remain axisymmetric, but the ray is tracked with orthogonal
 * transverse coordinates (x, y) and slopes (ux, uy), enabling a true sagittal
 * solve without disturbing the existing meridional traceRay() path.
 */
export function traceSkewRay(
  x0: number,
  y0: number,
  ux0: number,
  uy0: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
): SkewRayTraceResult {
  void zPos;
  let x = x0;
  let y = y0;
  let n = 1.0;
  let direction = normalizeDirection(ux0, uy0);
  let clipped = false;

  for (let i = 0; i < L.N; i++) {
    const { nd, sd } = L.S[i];
    const isStop = i === L.stopIdx;
    const clip = isStop && stopSD !== undefined ? stopSD : sd * L.clipMargin;
    const radius = Math.hypot(x, y);
    if (!clipped && radius > clip) {
      if (!ghost) break;
      clipped = true;
    }

    const nn = nd === 1.0 ? 1.0 : nd;
    if (nn !== n) {
      const R = L.S[i].R;
      if (!(clipped && Math.abs(R) < FLAT_R_THRESHOLD && radius * radius > R * R)) {
        const normal = surfaceNormalAtPoint(x, y, i, L);
        const refracted = refractDirection(direction, normal, n, nn);
        if (refracted === null) {
          if (!ghost) break;
          clipped = true;
        } else {
          direction = refracted;
        }
      }
    }
    n = nn;

    if (i < L.N - 1) {
      const dz = thick(i, focusT, zoomT, L);
      const invDz = Math.abs(direction[2]) > 1e-12 ? 1 / direction[2] : 0;
      x += dz * direction[0] * invDz;
      y += dz * direction[1] * invDz;
    }
  }

  const invDz = Math.abs(direction[2]) > 1e-12 ? 1 / direction[2] : Infinity;
  return {
    x,
    y,
    ux: direction[0] * invDz,
    uy: direction[1] * invDz,
    clipped,
  };
}

export function skewImagePlaneIntercept(
  x: number,
  y: number,
  ux: number,
  uy: number,
  lastSurfZ: number,
  imagePlaneZ: number,
): SkewImagePlaneIntercept | null {
  const dz = imagePlaneZ - lastSurfZ;
  const imagePoint = {
    x: x + ux * dz,
    y: y + uy * dz,
  };
  return isFinite(imagePoint.x) && isFinite(imagePoint.y) ? imagePoint : null;
}

export function sampleOrthogonalPupilFan(
  sampleCount: number,
  orientation: "tangential" | "sagittal",
): OrthogonalPupilSample[] {
  const roundedCount = Math.max(1, Math.round(sampleCount));
  const oddCount = roundedCount % 2 === 0 ? roundedCount + 1 : roundedCount;

  return Array.from({ length: oddCount }, (_, index) => {
    const pupilFraction = oddCount === 1 ? 0 : -1 + (2 * index) / (oddCount - 1);
    return {
      index,
      pupilFraction,
      xFraction: orientation === "sagittal" ? pupilFraction : 0,
      yFraction: orientation === "tangential" ? pupilFraction : 0,
    };
  });
}

export function sampleCircularPupil(
  ringSamples: readonly number[] = DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES,
): CircularPupilSample[] {
  const normalizedRingSamples = ringSamples
    .map((count) => Math.max(1, Math.round(count)))
    .filter((count) => Number.isFinite(count) && count > 0);
  if (normalizedRingSamples.length === 0) return [];

  const totalSamples = normalizedRingSamples.reduce((sum, count) => sum + count, 0);
  const weight = 1 / totalSamples;
  const samples: CircularPupilSample[] = [];
  let cumulative = 0;

  normalizedRingSamples.forEach((count, ringIndex) => {
    const innerRadiusSq = cumulative / totalSamples;
    const outerRadiusSq = (cumulative + count) / totalSamples;
    const radiusFraction = count === 1 && ringIndex === 0 ? 0 : Math.sqrt((innerRadiusSq + outerRadiusSq) / 2);
    const phaseOffset = count === 1 ? 0 : ((ringIndex % 2) * Math.PI) / count;

    for (let sampleIndex = 0; sampleIndex < count; sampleIndex++) {
      const azimuthRad = count === 1 ? 0 : phaseOffset + (2 * Math.PI * sampleIndex) / count;
      samples.push({
        index: samples.length,
        xFraction: radiusFraction * Math.cos(azimuthRad),
        yFraction: radiusFraction * Math.sin(azimuthRad),
        radiusFraction,
        azimuthRad,
        weight,
      });
    }

    cumulative += count;
  });

  return samples;
}

export function traceChiefRelativeSkewRay(
  xFraction: number,
  yFraction: number,
  chiefLaunchHeight: number,
  fieldSlope: number,
  entrancePupilSemiDiameter: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
): SkewRayTraceResult {
  return traceSkewRay(
    xFraction * entrancePupilSemiDiameter,
    chiefLaunchHeight + yFraction * entrancePupilSemiDiameter,
    0,
    fieldSlope,
    zPos,
    focusT,
    zoomT,
    stopSD,
    ghost,
    L,
  );
}

/**
 * Trace a single ray through the lens system using exact (real) Snell's law.
 *
 * @param y0      — initial ray height (mm)
 * @param u0      — initial ray slope (tan of angle)
 * @param zPos    — axial position of each surface (from doLayout)
 * @param focusT  — focus slider [0..1]
 * @param zoomT   — zoom slider [0..1]
 * @param stopSD  — aperture stop semi-diameter (mm), or undefined for full open
 * @param ghost   — if true, continue tracing clipped rays as ghost paths
 * @param L       — runtime lens object
 */
export function traceRay(
  y0: number,
  u0: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
): RayTraceResult {
  return _traceRayCore(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, undefined);
}

/**
 * Chromatic ray trace — adjusts refractive index per wavelength channel
 * using Abbe number dispersion (wavelengthNd).
 *
 * Channels: 'R' = C-line 656nm, 'G' = d-line 588nm, 'B' = F-line 486nm.
 * The difference between R and B traces reveals longitudinal/transverse
 * chromatic aberration (LCA/TCA).
 *
 * @param y0      — initial ray height (mm)
 * @param u0      — initial ray slope
 * @param zPos    — surface positions from doLayout
 * @param focusT  — focus slider [0..1]
 * @param zoomT   — zoom slider [0..1]
 * @param stopSD  — stop semi-diameter or undefined
 * @param ghost   — continue clipped rays as ghost paths
 * @param L       — runtime lens object
 * @param channel — 'R', 'G', or 'B'
 */
export function traceRayChromatic(
  y0: number,
  u0: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
): RayTraceResult {
  return _traceRayCore(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, channel);
}

/** Marginal ray data for one chromatic channel */
interface MarginalRayData {
  y: number;
  u: number;
  clipped: boolean;
}

/**
 * Compute chromatic aberration metrics from marginal ray trace results.
 *
 * lcaMm prefers the full R−B span; falls back to R−G or G−B when one channel
 * is toggled off, so the widget remains visible with any 2-channel combination.
 * lcaMm is 0 only when fewer than 2 channels have valid intercepts.
 */
export function computeChromaticSpread(
  marginalRays: Partial<Record<ChromaticChannel, MarginalRayData>>,
  imgZ: number,
  lastSurfZ: number,
): ChromaticSpread {
  const intercepts: Partial<Record<ChromaticChannel, number>> = {};
  const imgHeights: Partial<Record<ChromaticChannel, number>> = {};
  for (const ch of ["R", "G", "B"] as ChromaticChannel[]) {
    const ray = marginalRays[ch];
    if (!ray || ray.clipped) continue;
    if (Math.abs(ray.u) > 1e-15) {
      intercepts[ch] = lastSurfZ - ray.y / ray.u;
    }
    const dz = imgZ - lastSurfZ;
    imgHeights[ch] = ray.y + dz * ray.u;
  }
  // Prefer R−B; fall back to partial pairs so the widget stays visible
  // when the user toggles individual wavelength channels off.
  let lcaMm = 0;
  if (intercepts.R !== undefined && intercepts.B !== undefined) lcaMm = intercepts.R - intercepts.B;
  else if (intercepts.R !== undefined && intercepts.G !== undefined) lcaMm = intercepts.R - intercepts.G;
  else if (intercepts.G !== undefined && intercepts.B !== undefined) lcaMm = intercepts.G - intercepts.B;

  let tcaMm = 0;
  if (imgHeights.R !== undefined && imgHeights.B !== undefined) tcaMm = imgHeights.R - imgHeights.B;
  else if (imgHeights.R !== undefined && imgHeights.G !== undefined) tcaMm = imgHeights.R - imgHeights.G;
  else if (imgHeights.G !== undefined && imgHeights.B !== undefined) tcaMm = imgHeights.G - imgHeights.B;
  return { lcaMm, tcaMm, intercepts, imgHeights };
}

/**
 * Paraxial ray trace to the image plane — returns final ray height.
 *
 * Uses the paraxial (small-angle) refraction formula:
 *   u' = (n·u − y·(n'−n)/R) / n'
 * This is faster than traceRay but only accurate for rays near the axis.
 * Not used in production code paths — conjugateK uses traceToImageReal
 * for self-consistency with the rendering engine.  Retained as a paraxial
 * reference for testing (e.g. comparing real vs paraxial image heights).
 *
 * @param y0      — initial ray height (mm)
 * @param u0      — initial ray slope
 * @param focusT  — focus slider [0..1]
 * @param zoomT   — zoom slider [0..1]
 * @param L       — runtime lens object
 * @returns         ray height at image plane (mm)
 */
export function traceToImage(y0: number, u0: number, focusT: number, zoomT: number, L: RuntimeLens): number {
  const S = stateSurfaces(focusT, zoomT, L);
  const trace = traceSurfacesParaxial(S, y0, u0);
  return trace.y + S[S.length - 1].d * trace.u;
}

/**
 * Real-ray trace to image plane — same interface as traceToImage but uses
 * exact Snell's law and aspheric surface normals (sagSlope).  This makes
 * conjugateK self-consistent with the rendering engine (traceRay).
 */
function traceToImageReal(y0: number, u0: number, focusT: number, zoomT: number, L: RuntimeLens): number {
  const S = stateSurfaces(focusT, zoomT, L);
  const trace = traceSurfacesReal(S, L.asphByIdx, y0, u0);
  if (!isFinite(trace.y)) return NaN;
  return trace.y + S[S.length - 1].d * trace.u;
}

/**
 * Compute the convergence ratio K at a reference ray height using real ray trace.
 *
 * K = (−y_image / (dy/du)) / yRef
 * This is the ratio of image displacement to marginal-ray sensitivity,
 * normalized by the reference height.  Used by conjugateK to measure
 * the shift in focus between infinity and close focus.
 */
function realK(yRef: number, du: number, focusT: number, zoomT: number, L: RuntimeLens): number {
  const y0 = traceToImageReal(yRef, 0, focusT, zoomT, L);
  const y1 = traceToImageReal(yRef, du, focusT, zoomT, L);
  if (isNaN(y0) || isNaN(y1)) return NaN;
  const dydu = (y1 - y0) / du;
  if (Math.abs(dydu) < 1e-15) return NaN;
  return -y0 / dydu / yRef;
}

/**
 * Image-plane convergence shift relative to infinity focus.
 *
 * Returns K(focusT) − K(0), where K measures how rays converge at the
 * image plane.  This drives the visual "defocus cone" in the diagram —
 * positive K means the focus has shifted forward of the sensor.
 * Uses real ray trace (traceToImageReal) for accuracy with aspheric lenses.
 *
 * @param focusT  — focus slider [0..1]
 * @param zoomT   — zoom slider [0..1]
 * @param L       — runtime lens object
 * @returns         convergence shift (0 at infinity focus)
 */
export function conjugateK(focusT: number, zoomT: number, L: RuntimeLens): number {
  if (focusT < FOCUS_INFINITY_THRESHOLD) return 0;
  const yRef = L.EP.epSD * 0.7;
  const du = 1e-5;
  const Kt = realK(yRef, du, focusT, zoomT, L);
  const K0 = realK(yRef, du, 0, zoomT, L);
  if (isNaN(Kt) || isNaN(K0)) return 0;
  return Kt - K0;
}

/**
 * Format a focusT value as a human-readable distance string.
 *
 * Maps focusT → physical distance via d = closeFocusM / t,
 * then formats with appropriate units (m or cm).
 *
 * @param t  — focus slider value [0..1]
 * @param L  — runtime lens object (provides closeFocusM)
 * @returns    e.g. "∞", "3.50 m", "45 cm"
 */
export function formatDist(t: number, L: RuntimeLens): string {
  if (t < FOCUS_INFINITY_THRESHOLD) return "\u221e";
  const d = L.closeFocusM / t;
  if (d >= 100) return `${Math.round(d)} m`;
  if (d >= 10) return `${d.toFixed(1)} m`;
  if (d >= 1) return `${d.toFixed(2)} m`;
  return `${(d * 100).toFixed(0)} cm`;
}

/**
 * Format the Petzval field radius for display.
 *
 * @param P         — Petzval sum (mm⁻¹)
 * @param subscript — true → subscripted label "Rₚₜₓ =", false → plain "R ="
 * @returns formatted string, e.g. "Rₚₜₓ = −42 mm" or "R = ∞"
 */
export function formatPetzvalRadius(P: number, subscript = true): string {
  const label = subscript ? "R\u209a\u209c\u2093" : "R";
  if (Math.abs(P) < 1e-6) return `${label} = \u221e`;
  const R = 1 / P;
  const absR = Math.abs(R);
  const formatted = absR < 10 ? absR.toFixed(1) : Math.round(absR).toString();
  return `${label} = ${R < 0 ? "\u2212" : ""}${formatted} mm`;
}

export { SVG_PATH_SUBDIVISIONS };
