/**
 * Optics engine — pure functions for sag, layout, ray tracing, and conjugates.
 *
 * Every function accepts the runtime lens object L as an explicit parameter.
 * No React dependencies — this module is fully testable in isolation.
 */

/* ── Named constants ── */
export const FLAT_R_THRESHOLD   = 1e10;  /* surfaces with |R| above this are treated as flat (plano) */
const SVG_PATH_SUBDIVISIONS     = 48;    /* arc segments per surface when building SVG paths */
const BISECT_ITERATIONS         = 30;    /* bisection steps for gapTrimHeight — yields ~1e-9 mm precision */
export const FOCUS_INFINITY_THRESHOLD = 0.003; /* focusT values below this are treated as infinity focus */


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
 * @param {number} h  — ray height from optical axis (mm)
 * @param {number} R  — radius of curvature (mm, signed per sign convention)
 * @returns {number}    sag in mm (positive = toward image side)
 */
export function sag(h, R) {
  if (Math.abs(R) > FLAT_R_THRESHOLD) return 0;
  const c = 1 / R, h2 = h * h, d = 1 - c * c * h2;
  return (c * h2) / (1 + Math.sqrt(d > 0 ? d : 0));
}

/**
 * Aspherical sag — extends the conic sag with even-order polynomial deformation.
 *
 * Conic sag: z = c·h² / (1 + √(1 − (1+K)·c²·h²))
 * Polynomial: + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰ + A12·h¹² + A14·h¹⁴
 *
 * Falls back to plain spherical sag when no aspheric coefficients exist
 * for the given surface index.
 *
 * @param {number} h        — ray height from axis (mm)
 * @param {number} surfIdx  — surface index into L.S[]
 * @param {Object} L        — runtime lens object from buildLens()
 * @returns {number}          sag in mm
 */
export function renderSag(h, surfIdx, L) {
  const R = L.S[surfIdx].R;
  const a = L.asphByIdx[surfIdx];
  if (!a) return sag(h, R);
  if (Math.abs(R) > FLAT_R_THRESHOLD && !a) return 0;
  const c = Math.abs(R) > FLAT_R_THRESHOLD ? 0 : 1.0 / R;
  const h2 = h * h;
  const d = 1 - (1 + a.K) * c * c * h2;
  const conic = (c * h2) / (1 + Math.sqrt(d > 0 ? d : 1e-12));
  const poly = a.A4*h2*h2 + a.A6*h2**3 + a.A8*h2**4
             + a.A10*h2**5 + a.A12*h2**6 + a.A14*h2**7;
  return conic + poly;
}

/**
 * Derivative dz/dh of the aspherical sag — gives the surface slope at height h.
 *
 * Used to compute the surface normal for exact Snell's law refraction in
 * traceRay/traceRayChromatic.  The surface normal tilt angle is atan(slope).
 *
 * @param {number} h        — ray height from axis (mm)
 * @param {number} surfIdx  — surface index into L.S[]
 * @param {Object} L        — runtime lens object
 * @returns {number}          dz/dh (dimensionless slope)
 */
export function sagSlope(h, surfIdx, L) {
  const R = L.S[surfIdx].R;
  const a = L.asphByIdx[surfIdx];
  if (Math.abs(R) > FLAT_R_THRESHOLD && !a) return 0;
  const c = Math.abs(R) > FLAT_R_THRESHOLD ? 0 : 1.0 / R;
  const K = a ? a.K : 0;
  const h2 = h * h;
  const denom2 = 1 - (1 + K) * c * c * h2;
  const conicSlope = c * h / Math.sqrt(denom2 > 0 ? denom2 : 1e-12);
  if (!a) return conicSlope;
  const polySlope = h * (4*a.A4*h2 + 6*a.A6*h2*h2 + 8*a.A8*h2**3
                       + 10*a.A10*h2**4 + 12*a.A12*h2**5 + 14*a.A14*h2**6);
  return conicSlope + polySlope;
}

/**
 * Find the maximum ray height at which a surface's sag fits within maxSag.
 *
 * When a thin air gap separates two strongly curved surfaces, their sag
 * intrusions can overlap visually.  This function bisects to find the
 * largest h ≤ sd where |sag(h)| ≤ maxSag, used to trim the gap rendering.
 *
 * @param {number} surfIdx  — surface index
 * @param {number} sd       — nominal semi-diameter (mm)
 * @param {number} maxSag   — maximum allowed sag magnitude (mm)
 * @param {Object} L        — runtime lens object
 * @returns {number}          trimmed semi-diameter ≤ sd
 */
export function gapTrimHeight(surfIdx, sd, maxSag, L) {
  if (maxSag <= 0 || L.gapSagFrac <= 0) return sd;
  if (Math.abs(renderSag(sd, surfIdx, L)) <= maxSag) return sd;
  let lo = 0, hi = sd;
  for (let j = 0; j < BISECT_ITERATIONS; j++) {
    const mid = (lo + hi) / 2;
    if (Math.abs(renderSag(mid, surfIdx, L)) > maxSag) hi = mid; else lo = mid;
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
 * @param {number} i       — surface index
 * @param {number} focusT  — focus slider [0 = infinity, 1 = close focus]
 * @param {number} zoomT   — zoom slider [0 = wide, 1 = tele]
 * @param {Object} L       — runtime lens object
 * @returns {number}         thickness in mm
 */
export function thick(i, focusT, zoomT, L) {
  const v = L.varByIdx[i];
  if (!v) return L.S[i].d;
  if (!L.isZoom) return v[0] + (v[1] - v[0]) * focusT;
  /* Piecewise-linear interpolation across zoom positions, then focus */
  const nz = v.length;
  if (nz === 1) return v[0][0] + (v[0][1] - v[0][0]) * focusT;
  const zp = zoomT * (nz - 1);
  const zi = Math.min(Math.floor(zp), nz - 2);
  const zf = zp - zi;
  const d_inf   = v[zi][0] + (v[zi + 1][0] - v[zi][0]) * zf;
  const d_close = v[zi][1] + (v[zi + 1][1] - v[zi][1]) * zf;
  return d_inf + (d_close - d_inf) * focusT;
}

/**
 * Compute axial positions (z) for every surface at the current focus/zoom.
 *
 * @param {number} focusT  — focus slider [0..1]
 * @param {number} zoomT   — zoom slider [0..1]
 * @param {Object} L       — runtime lens object
 * @returns {{ z: number[], th: number[], imgZ: number }}
 *   z[i] = axial position of surface i; imgZ = image plane position
 */
export function doLayout(focusT, zoomT, L) {
  const th = L.S.map((_, i) => thick(i, focusT, zoomT, L));
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
 * @param {number} zoomT  — zoom slider [0 = wide, 1 = tele]
 * @param {Object} L      — runtime lens object
 * @returns {number}         EFL in mm
 */
export function eflAtZoom(zoomT, L) {
  if (!L.isZoom) return L.EFL;
  return _lerpZoomArray(zoomT, L.zoomEFLs);
}

/**
 * Interpolate entrance pupil SD at a given zoom position.
 *
 * @param {number} zoomT  — zoom slider [0 = wide, 1 = tele]
 * @param {Object} L      — runtime lens object
 * @returns {number}         entrance pupil SD in mm
 */
export function epAtZoom(zoomT, L) {
  if (!L.isZoom) return L.EP.epSD;
  return _lerpZoomArray(zoomT, L.zoomEPs);
}

/**
 * Interpolate half-field angle at a given zoom position.
 *
 * @param {number} zoomT  — zoom slider [0 = wide, 1 = tele]
 * @param {Object} L      — runtime lens object
 * @returns {number}         half-field angle in degrees
 */
export function halfFieldAtZoom(zoomT, L) {
  if (!L.isZoom) return L.halfField;
  return _lerpZoomArray(zoomT, L.zoomHalfFields);
}

/**
 * Interpolate marginal ray height ratio at stop for a given zoom position.
 *
 * @param {number} zoomT  — zoom slider [0 = wide, 1 = tele]
 * @param {Object} L      — runtime lens object
 * @returns {number}         yRatio at the stop surface
 */
export function yRatioAtZoom(zoomT, L) {
  if (!L.isZoom) return L.EP.yRatio;
  return _lerpZoomArray(zoomT, L.zoomYRatios);
}

/**
 * Interpolate chief ray height at stop for a given zoom position.
 *
 * @param {number} zoomT  — zoom slider [0 = wide, 1 = tele]
 * @param {Object} L      — runtime lens object
 * @returns {number}         B (chief ray height at stop)
 */
export function bAtZoom(zoomT, L) {
  if (!L.isZoom) return L.B;
  return _lerpZoomArray(zoomT, L.zoomBs);
}

/**
 * Piecewise-linear interpolation across a pre-computed zoom array.
 * Shared helper for eflAtZoom, epAtZoom, halfFieldAtZoom, etc.
 */
function _lerpZoomArray(zoomT, arr) {
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
 * Trace a single ray through the lens system using exact (real) Snell's law.
 *
 * Ray starts at height y0 with slope u0 (tan of angle to axis).
 * At each surface, the surface normal is computed from sagSlope() and
 * exact Snell's law is applied:  n·sin(I) = n'·sin(I')
 * where I = U − α (angle of incidence relative to surface normal).
 *
 * Clipping: rays exceeding a surface's semi-diameter are either stopped
 * (ghost=false) or continued as ghost rays (ghost=true) for visualization.
 *
 * @param {number}   y0      — initial ray height (mm)
 * @param {number}   u0      — initial ray slope (tan of angle)
 * @param {number[]} zPos    — axial position of each surface (from doLayout)
 * @param {number}   focusT  — focus slider [0..1]
 * @param {number}   zoomT   — zoom slider [0..1]
 * @param {number}   stopSD  — aperture stop semi-diameter (mm), or undefined for full open
 * @param {boolean}  ghost   — if true, continue tracing clipped rays as ghost paths
 * @param {Object}   L       — runtime lens object
 * @returns {{ pts: number[][], ghostPts: number[][], y: number, u: number, clipped: boolean }}
 */
export function traceRay(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L) {
  const pts = [];
  const ghostPts = [];
  pts.push([zPos[0] - L.rayLead, y0 - u0 * L.rayLead]);
  let y = y0, n = 1.0;
  let U = Math.atan(u0);
  let clipped = false;
  for (let i = 0; i < L.N; i++) {
    const { R, nd, sd } = L.S[i];
    const z = zPos[i];
    const isStop = i === L.stopIdx;
    const clip = (isStop && stopSD !== undefined) ? stopSD : sd * L.clipMargin;
    if (!clipped && Math.abs(y) > clip) {
      if (!ghost) break;
      clipped = true;
    }
    const pt = [z + renderSag(Math.abs(y), i, L), y];
    if (clipped) ghostPts.push(pt); else pts.push(pt);
    const nn = nd === 1.0 ? 1.0 : nd;
    if (nn !== n) {
      /* Exact Snell's law refraction:
       *   α  = surface normal tilt angle (from sagSlope)
       *   I  = angle of incidence = ray angle − normal tilt
       *   I' = angle of refraction via n·sin(I) = n'·sin(I')
       *   U' = α + I'  (new ray angle after refraction)
       * |sin(I')| > 1 means total internal reflection → clip the ray. */
      const absY = Math.abs(y);
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
    n = nn;
    if (i < L.N - 1) y += thick(i, focusT, zoomT, L) * Math.tan(U);
  }
  return { pts, ghostPts, y, u: Math.tan(U), clipped };
}

/**
 * Refractive index adjusted for wavelength using Abbe number dispersion.
 * channel: 'R' (C-line 656.3nm), 'G' (d-line 587.6nm), 'B' (F-line 486.1nm)
 */
export function wavelengthNd(nd, vd, channel) {
  if (nd === 1.0) return 1.0;
  if (!vd || channel === 'G') return nd;
  const delta = (nd - 1) / (2 * vd);
  return channel === 'R' ? nd - delta : nd + delta;
}

/**
 * Chromatic ray trace — same as traceRay but adjusts refractive index per
 * wavelength channel using Abbe number dispersion (wavelengthNd).
 *
 * Channels: 'R' = C-line 656nm, 'G' = d-line 588nm, 'B' = F-line 486nm.
 * The difference between R and B traces reveals longitudinal/transverse
 * chromatic aberration (LCA/TCA).
 *
 * @param {number}   y0      — initial ray height (mm)
 * @param {number}   u0      — initial ray slope
 * @param {number[]} zPos    — surface positions from doLayout
 * @param {number}   focusT  — focus slider [0..1]
 * @param {number}   zoomT   — zoom slider [0..1]
 * @param {number}   stopSD  — stop semi-diameter or undefined
 * @param {boolean}  ghost   — continue clipped rays as ghost paths
 * @param {Object}   L       — runtime lens object
 * @param {string}   channel — 'R', 'G', or 'B'
 * @returns {{ pts: number[][], ghostPts: number[][], y: number, u: number, clipped: boolean }}
 */
export function traceRayChromatic(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, channel) {
  const pts = [];
  const ghostPts = [];
  pts.push([zPos[0] - L.rayLead, y0 - u0 * L.rayLead]);
  let y = y0, n = 1.0;
  let U = Math.atan(u0);
  let clipped = false;
  for (let i = 0; i < L.N; i++) {
    const { R, nd, sd } = L.S[i];
    const z = zPos[i];
    const isStop = i === L.stopIdx;
    const clip = (isStop && stopSD !== undefined) ? stopSD : sd * L.clipMargin;
    if (!clipped && Math.abs(y) > clip) {
      if (!ghost) break;
      clipped = true;
    }
    const pt = [z + renderSag(Math.abs(y), i, L), y];
    if (clipped) ghostPts.push(pt); else pts.push(pt);
    const nn = wavelengthNd(nd, L.vdByIdx[i], channel);
    if (nn !== n) {
      const absY = Math.abs(y);
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
    n = nn;
    if (i < L.N - 1) y += thick(i, focusT, zoomT, L) * Math.tan(U);
  }
  return { pts, ghostPts, y, u: Math.tan(U), clipped };
}

/**
 * Compute chromatic aberration metrics from marginal ray trace results.
 * marginalRays: { R?: {y,u,clipped}, G?: {y,u,clipped}, B?: {y,u,clipped} }
 * Returns { lcaMm, tcaMm, intercepts: {R?,G?,B?}, imgHeights: {R?,G?,B?} }
 */
export function computeChromaticSpread(marginalRays, imgZ, lastSurfZ) {
  const intercepts = {};
  const imgHeights = {};
  for (const ch of ['R', 'G', 'B']) {
    const ray = marginalRays[ch];
    if (!ray || ray.clipped) continue;
    if (Math.abs(ray.u) > 1e-15) {
      intercepts[ch] = lastSurfZ - ray.y / ray.u;
    }
    const dz = imgZ - lastSurfZ;
    imgHeights[ch] = ray.y + dz * ray.u;
  }
  const lcaMm = (intercepts.R !== undefined && intercepts.B !== undefined)
    ? intercepts.R - intercepts.B : 0;
  const tcaMm = (imgHeights.R !== undefined && imgHeights.B !== undefined)
    ? imgHeights.R - imgHeights.B : 0;
  return { lcaMm, tcaMm, intercepts, imgHeights };
}

/**
 * Paraxial ray trace to the image plane — returns final ray height.
 *
 * Uses the paraxial (small-angle) refraction formula:
 *   u' = (n·u − y·(n'−n)/R) / n'
 * This is faster than traceRay but only accurate for rays near the axis.
 * Used by conjugateK as a fast initial estimate.
 *
 * @param {number} y0      — initial ray height (mm)
 * @param {number} u0      — initial ray slope
 * @param {number} focusT  — focus slider [0..1]
 * @param {number} zoomT   — zoom slider [0..1]
 * @param {Object} L       — runtime lens object
 * @returns {number}         ray height at image plane (mm)
 */
export function traceToImage(y0, u0, focusT, zoomT, L) {
  let y = y0, u = u0, n = 1.0;
  for (let i = 0; i < L.N; i++) {
    const { R, nd } = L.S[i];
    const nn = nd === 1.0 ? 1.0 : nd;
    if (nn !== n) u = Math.abs(R) < FLAT_R_THRESHOLD ? (n * u - y * (nn - n) / R) / nn : (n * u) / nn;
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
function traceToImageReal(y0, u0, focusT, zoomT, L) {
  let y = y0, n = 1.0;
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
function realK(yRef, du, focusT, zoomT, L) {
  const y0 = traceToImageReal(yRef, 0, focusT, zoomT, L);
  const y1 = traceToImageReal(yRef, du, focusT, zoomT, L);
  if (isNaN(y0) || isNaN(y1)) return NaN;
  const dydu = (y1 - y0) / du;
  if (Math.abs(dydu) < 1e-15) return NaN;
  return (-y0 / dydu) / yRef;
}

/**
 * Image-plane convergence shift relative to infinity focus.
 *
 * Returns K(focusT) − K(0), where K measures how rays converge at the
 * image plane.  This drives the visual "defocus cone" in the diagram —
 * positive K means the focus has shifted forward of the sensor.
 * Uses real ray trace (traceToImageReal) for accuracy with aspheric lenses.
 *
 * @param {number} focusT  — focus slider [0..1]
 * @param {number} zoomT   — zoom slider [0..1]
 * @param {Object} L       — runtime lens object
 * @returns {number}         convergence shift (0 at infinity focus)
 */
export function conjugateK(focusT, zoomT, L) {
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
 * @param {number} t  — focus slider value [0..1]
 * @param {Object} L  — runtime lens object (provides closeFocusM)
 * @returns {string}    e.g. "∞", "3.50 m", "45 cm"
 */
export function formatDist(t, L) {
  if (t < FOCUS_INFINITY_THRESHOLD) return "\u221e";
  const d = L.closeFocusM / t;
  if (d >= 100) return `${Math.round(d)} m`;
  if (d >= 10) return `${d.toFixed(1)} m`;
  if (d >= 1) return `${d.toFixed(2)} m`;
  return `${(d * 100).toFixed(0)} cm`;
}

export { SVG_PATH_SUBDIVISIONS };
