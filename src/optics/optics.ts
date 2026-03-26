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
  AsphericCoefficients,
} from "../types/optics.js";

/* ── Named constants ── */
export const FLAT_R_THRESHOLD: number = 1e10; /* surfaces with |R| above this are treated as flat (plano) */
const SVG_PATH_SUBDIVISIONS: number = 48; /* arc segments per surface when building SVG paths */
const BISECT_ITERATIONS: number = 30; /* bisection steps for gapTrimHeight — yields ~1e-9 mm precision */
export const FOCUS_INFINITY_THRESHOLD: number = 0.003; /* focusT values below this are treated as infinity focus */

/* =====================================================================
 * §4  RENDERING HELPERS — Sag, layout, and shape utilities
 * =================================================================== */

/**
 * Spherical sag (axial displacement) at ray height h.
 *
 * Standard sag formula: z = c·h² / (1 + √(1 − c²·h²))
 * where c = 1/R.  Returns 0 for flat surfaces (|R| > FLAT_R_THRESHOLD).
 * The discriminant is clamped to 0 to avoid NaN when h ≈ |R|.
 *
 * @param h  — ray height from optical axis (mm)
 * @param R  — radius of curvature (mm, signed per sign convention)
 * @returns    sag in mm (positive = toward image side)
 */
export function sag(h: number, R: number): number {
  if (Math.abs(R) > FLAT_R_THRESHOLD) return 0;
  const c = 1 / R,
    h2 = h * h,
    d = 1 - c * c * h2;
  return (c * h2) / (1 + Math.sqrt(d > 0 ? d : 0));
}

/**
 * Conic + even-order polynomial sag from raw parameters.
 *
 * Conic sag: z = c·h² / (1 + √(1 − (1+K)·c²·h²))
 * Polynomial: + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰ + A12·h¹² + A14·h¹⁴
 *
 * Shared primitive used by renderSag (runtime) and validateLensData
 * (geometry checks).  Handles both spherical-only (asph=undefined)
 * and full aspheric surfaces.
 *
 * @param h     — ray height from axis (mm)
 * @param R     — radius of curvature (mm, signed)
 * @param asph  — aspheric coefficients, or undefined for spherical
 * @returns       sag in mm
 */
export function conicPolySag(h: number, R: number, asph: AsphericCoefficients | undefined): number {
  if (Math.abs(R) > FLAT_R_THRESHOLD && !asph) return 0;
  const c = Math.abs(R) > FLAT_R_THRESHOLD ? 0 : 1.0 / R;
  const K = asph ? asph.K : 0;
  const h2 = h * h;
  const d = 1 - (1 + K) * c * c * h2;
  const conic = (c * h2) / (1 + Math.sqrt(d > 0 ? d : 1e-12));
  if (!asph) return conic;
  const poly =
    asph.A4 * h2 * h2 +
    asph.A6 * h2 ** 3 +
    asph.A8 * h2 ** 4 +
    asph.A10 * h2 ** 5 +
    asph.A12 * h2 ** 6 +
    asph.A14 * h2 ** 7;
  return conic + poly;
}

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

/**
 * Derivative dz/dh of the aspherical sag — gives the surface slope at height h.
 *
 * Used to compute the surface normal for exact Snell's law refraction in
 * traceRay/traceRayChromatic.  The surface normal tilt angle is atan(slope).
 *
 * @param h        — ray height from axis (mm)
 * @param surfIdx  — surface index into L.S[]
 * @param L        — runtime lens object
 * @returns          dz/dh (dimensionless slope)
 */
/**
 * Surface-normal slope dz/dh from raw parameters.
 *
 * Core math shared by sagSlope() (runtime) and buildLens (build-time).
 * Exported for use in buildLens.ts where no RuntimeLens is available yet.
 *
 * @param h    — ray height from axis (mm)
 * @param R    — radius of curvature (mm)
 * @param asph — aspheric coefficients, or undefined for spherical surfaces
 * @returns      dz/dh (dimensionless slope)
 */
export function sagSlopeRaw(h: number, R: number, asph: AsphericCoefficients | undefined): number {
  if (Math.abs(R) > FLAT_R_THRESHOLD && !asph) return 0;
  const c = Math.abs(R) > FLAT_R_THRESHOLD ? 0 : 1.0 / R;
  const K = asph ? asph.K : 0;
  const h2 = h * h;
  const denom2 = 1 - (1 + K) * c * c * h2;
  const conicSlope = (c * h) / Math.sqrt(denom2 > 0 ? denom2 : 1e-12);
  if (!asph) return conicSlope;
  const polySlope =
    h *
    (4 * asph.A4 * h2 +
      6 * asph.A6 * h2 * h2 +
      8 * asph.A8 * h2 ** 3 +
      10 * asph.A10 * h2 ** 4 +
      12 * asph.A12 * h2 ** 5 +
      14 * asph.A14 * h2 ** 6);
  return conicSlope + polySlope;
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
  const v = L.varByIdx[i];
  if (!v) return L.S[i].d;
  if (!L.isZoom) return (v as [number, number])[0] + ((v as [number, number])[1] - (v as [number, number])[0]) * focusT;
  /* Piecewise-linear interpolation across zoom positions, then focus */
  const zv = v as [number, number][];
  const nz = zv.length;
  if (nz === 1) return zv[0][0] + (zv[0][1] - zv[0][0]) * focusT;
  const zp = zoomT * (nz - 1);
  const zi = Math.min(Math.floor(zp), nz - 2);
  const zf = zp - zi;
  const d_inf = zv[zi][0] + (zv[zi + 1][0] - zv[zi][0]) * zf;
  const d_close = zv[zi][1] + (zv[zi + 1][1] - zv[zi][1]) * zf;
  return d_inf + (d_close - d_inf) * focusT;
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
  let y = y0,
    u = u0,
    n = 1.0;
  for (let i = 0; i < L.N; i++) {
    const { R, nd } = L.S[i];
    const nn = nd === 1.0 ? 1.0 : nd;
    if (nn !== n) u = Math.abs(R) < FLAT_R_THRESHOLD ? (n * u - (y * (nn - n)) / R) / nn : (n * u) / nn;
    n = nn;
    y += thick(i, focusT, zoomT, L) * u;
  }
  return y;
}

/**
 * Real-ray trace to image plane — same interface as traceToImage but uses
 * exact Snell's law and aspheric surface normals (sagSlope).  This makes
 * conjugateK self-consistent with the rendering engine (traceRay).
 */
function traceToImageReal(y0: number, u0: number, focusT: number, zoomT: number, L: RuntimeLens): number {
  let y = y0,
    n = 1.0;
  let U = Math.atan(u0);
  for (let i = 0; i < L.N; i++) {
    const { nd } = L.S[i];
    const nn = nd === 1.0 ? 1.0 : nd;
    if (nn !== n) {
      const absY = Math.abs(y);
      const slope = sagSlope(absY, i, L);
      const alpha = y >= 0 ? -Math.atan(slope) : Math.atan(slope);
      const I = U - alpha;
      const sinIp = (n / nn) * Math.sin(I);
      if (Math.abs(sinIp) > 1.0) return NaN;
      U = alpha + Math.asin(sinIp);
    }
    n = nn;
    y += thick(i, focusT, zoomT, L) * Math.tan(U);
  }
  return y;
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
