/**
 * Optics engine — pure functions for sag, layout, ray tracing, and conjugates.
 *
 * Every function accepts the runtime lens object L as an explicit parameter.
 * No React dependencies — this module is fully testable in isolation.
 */

/* ── Named constants ── */
export const FLAT_R_THRESHOLD   = 1e10;
const SVG_PATH_SUBDIVISIONS     = 48;
const BISECT_ITERATIONS         = 30;
export const FOCUS_INFINITY_THRESHOLD = 0.003;


/* =====================================================================
 * §4  RENDERING HELPERS — Sag, layout, and shape utilities
 * =================================================================== */

export function sag(h, R) {
  if (Math.abs(R) > FLAT_R_THRESHOLD) return 0;
  const c = 1 / R, h2 = h * h, d = 1 - c * c * h2;
  return (c * h2) / (1 + Math.sqrt(d > 0 ? d : 0));
}

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

export function thick(i, t, L) {
  const v = L.varByIdx[i];
  return v ? v[0] + (v[1] - v[0]) * t : L.S[i].d;
}

export function doLayout(t, L) {
  const th = L.S.map((_, i) => thick(i, t, L));
  const z = [0];
  for (let i = 0; i < th.length - 1; i++) z.push(z[i] + th[i]);
  return { z, th, imgZ: z[z.length - 1] + th[th.length - 1] };
}


/* =====================================================================
 * §5  OPTICS ENGINE — Ray-trace and conjugate functions
 * =================================================================== */

export function traceRay(y0, u0, zPos, t, stopSD, ghost, L) {
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
    if (i < L.N - 1) y += thick(i, t, L) * Math.tan(U);
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

export function traceRayChromatic(y0, u0, zPos, t, stopSD, ghost, L, channel) {
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
    if (i < L.N - 1) y += thick(i, t, L) * Math.tan(U);
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

export function traceToImage(y0, u0, t, L) {
  let y = y0, u = u0, n = 1.0;
  for (let i = 0; i < L.N; i++) {
    const { R, nd } = L.S[i];
    const nn = nd === 1.0 ? 1.0 : nd;
    if (nn !== n) u = Math.abs(R) < FLAT_R_THRESHOLD ? (n * u - y * (nn - n) / R) / nn : (n * u) / nn;
    n = nn;
    y += thick(i, t, L) * u;
  }
  return y;
}

/**
 * Real-ray trace to image plane — same interface as traceToImage but uses
 * exact Snell's law and aspheric surface normals (sagSlope).  This makes
 * conjugateK self-consistent with the rendering engine (traceRay).
 */
function traceToImageReal(y0, u0, t, L) {
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
    y += thick(i, t, L) * Math.tan(U);
  }
  return y;
}

function realK(yRef, du, t, L) {
  const y0 = traceToImageReal(yRef, 0, t, L);
  const y1 = traceToImageReal(yRef, du, t, L);
  if (isNaN(y0) || isNaN(y1)) return NaN;
  const dydu = (y1 - y0) / du;
  if (Math.abs(dydu) < 1e-15) return NaN;
  return (-y0 / dydu) / yRef;
}

export function conjugateK(t, L) {
  if (t < FOCUS_INFINITY_THRESHOLD) return 0;
  const yRef = L.EP.epSD * 0.7;
  const du = 1e-5;
  const Kt = realK(yRef, du, t, L);
  const K0 = realK(yRef, du, 0, L);
  if (isNaN(Kt) || isNaN(K0)) return 0;
  return Kt - K0;
}

export function formatDist(t, L) {
  if (t < FOCUS_INFINITY_THRESHOLD) return "\u221e";
  const d = L.closeFocusM / t;
  if (d >= 100) return `${Math.round(d)} m`;
  if (d >= 10) return `${d.toFixed(1)} m`;
  if (d >= 1) return `${d.toFixed(2)} m`;
  return `${(d * 100).toFixed(0)} cm`;
}

export { SVG_PATH_SUBDIVISIONS };
