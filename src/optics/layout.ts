import type { LayoutResult, RuntimeLens } from "../types/optics.js";
import { buildStateSurfaces, resolveControlledThickness } from "./internal/lensState.js";
import { conicPolySag, sag, sagSlopeRaw } from "./internal/surfaceMath.js";
import { traceSurfacesParaxial } from "./internal/traceSurfaces.js";

export const SVG_PATH_SUBDIVISIONS: number = 96;
const BISECT_ITERATIONS: number = 30;
export const FOCUS_INFINITY_THRESHOLD: number = 0.003;

export function renderSag(h: number, surfIdx: number, L: RuntimeLens): number {
  const R = L.S[surfIdx].R;
  const a = L.asphByIdx[surfIdx];
  if (!a) return sag(h, R);
  return conicPolySag(h, R, a);
}

export function sagSlope(h: number, surfIdx: number, L: RuntimeLens): number {
  return sagSlopeRaw(h, L.S[surfIdx].R, L.asphByIdx[surfIdx]);
}

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

export function doLayout(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): LayoutResult {
  const th = L.S.map((_: unknown, i: number) => thick(i, focusT, zoomT, L, aberrationT));
  const z = [0];
  for (let i = 0; i < th.length - 1; i++) z.push(z[i] + th[i]);
  return { z, th, imgZ: z[z.length - 1] + th[th.length - 1] };
}

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

export function eflAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EFL;
  return lerpZoomArray(zoomT, L.zoomEFLs!);
}

export function epAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EP.epSD;
  return lerpZoomArray(zoomT, L.zoomEPs!);
}

export function fopenAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom || !L.zoomFOPENs) return L.FOPEN;
  return lerpZoomArray(zoomT, L.zoomFOPENs);
}

export function halfFieldAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.halfField;
  return lerpZoomArray(zoomT, L.zoomHalfFields!);
}

export function tracingHalfFieldAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.tracingHalfField;
  return lerpZoomArray(zoomT, L.zoomTracingHalfFields!);
}

export function yRatioAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EP.yRatio;
  return lerpZoomArray(zoomT, L.zoomYRatios!);
}

export function bAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.B;
  return lerpZoomArray(zoomT, L.zoomBs!);
}

export function xpAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.xpSD;
  const arr = L.zoomXpSDs!;
  if (arr.some((v) => !isFinite(v))) return Infinity;
  return lerpZoomArray(zoomT, arr);
}

export function epZRelStopAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.epZRelStop;
  return lerpZoomArray(zoomT, L.zoomEpZRelStops!);
}

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

export function eflAtFocus(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  if (focusT < FOCUS_INFINITY_THRESHOLD && aberrationT <= 0) {
    return L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  }
  const S = stateSurfaces(focusT, zoomT, L, aberrationT);
  const trace = traceSurfacesParaxial(S, 1, 0, {
    skipLastTransfer: true,
    traceSequence: L.traceSequence ?? null,
  });
  if (Math.abs(trace.u) < 1e-15) return L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  return Math.abs(-1.0 / trace.u);
}

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
