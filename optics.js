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
  let y = y0, u = u0, n = 1.0;
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
    if (nn !== n) u = Math.abs(R) < FLAT_R_THRESHOLD ? (n * u - y * (nn - n) / R) / nn : (n * u) / nn;
    n = nn;
    if (i < L.N - 1) y += thick(i, t, L) * u;
  }
  return { pts, ghostPts, y, u, clipped };
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

export function conjugateK(t, L) {
  const y10 = traceToImage(1, 0, t, L);
  const y01 = traceToImage(0, 1, t, L);
  if (Math.abs(y01) < 1e-15) return 0;
  return -y10 / y01;
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
