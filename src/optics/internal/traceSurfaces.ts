import type { AsphericCoefficients, ParaxialTraceResult } from "../../types/optics.js";
import { FLAT_R_THRESHOLD, sagSlopeRaw } from "./surfaceMath.js";

interface TraceSurface {
  R: number;
  nd: number;
  d: number;
  sd?: number;
}

export interface ParaxialSurfaceTraceOptions {
  stopAt?: number;
  skipLastTransfer?: boolean;
  recordHeights?: boolean;
}

export interface RealSurfaceTraceOptions extends ParaxialSurfaceTraceOptions {
  checkSemiDiameter?: boolean;
}

export interface RealSurfaceTraceResult {
  y: number;
  u: number;
  n: number;
  clipped: boolean;
  heights: number[] | null;
}

export function traceSurfacesParaxial(
  surfaces: TraceSurface[],
  y0: number,
  u0: number,
  { stopAt, skipLastTransfer = false, recordHeights = false }: ParaxialSurfaceTraceOptions = {},
): ParaxialTraceResult {
  const tracedCount = stopAt !== undefined ? stopAt : surfaces.length;
  const total = surfaces.length;
  const heights: number[] | null = recordHeights ? [] : null;
  let y = y0;
  let u = u0;
  let n = 1.0;
  for (let i = 0; i < tracedCount; i++) {
    if (recordHeights) heights!.push(y);
    const { R, nd, d } = surfaces[i];
    const nextN = nd === 1.0 ? 1.0 : nd;
    if (nextN !== n) {
      u = Math.abs(R) < FLAT_R_THRESHOLD ? (n * u - (y * (nextN - n)) / R) / nextN : (n * u) / nextN;
    }
    n = nextN;
    const isLast = i === tracedCount - 1;
    if (isLast && skipLastTransfer) {
      continue;
    }
    if (i < total - 1) y += d * u;
  }
  return { y, u, n, heights };
}

export function traceSurfacesReal(
  surfaces: TraceSurface[],
  asphByIdx: Record<number, AsphericCoefficients>,
  y0: number,
  u0: number,
  { stopAt, skipLastTransfer = false, recordHeights = false, checkSemiDiameter = false }: RealSurfaceTraceOptions = {},
): RealSurfaceTraceResult {
  const tracedCount = stopAt !== undefined ? stopAt : surfaces.length;
  const total = surfaces.length;
  const heights: number[] | null = recordHeights ? [] : null;
  let y = y0;
  let U = Math.atan(u0);
  let n = 1.0;
  let clipped = false;
  for (let i = 0; i < tracedCount; i++) {
    if (recordHeights) heights!.push(y);
    const { R, nd, d, sd } = surfaces[i];
    if (checkSemiDiameter && typeof sd === "number" && Math.abs(y) > sd) clipped = true;
    const nextN = nd === 1.0 ? 1.0 : nd;
    if (nextN !== n) {
      const absY = Math.abs(y);
      const slope = sagSlopeRaw(absY, R, asphByIdx[i]);
      const alpha = y >= 0 ? -Math.atan(slope) : Math.atan(slope);
      const sinIp = (n / nextN) * Math.sin(U - alpha);
      if (Math.abs(sinIp) > 1.0) {
        return { y: NaN, u: NaN, n: nextN, clipped: true, heights };
      }
      U = alpha + Math.asin(sinIp);
    }
    n = nextN;
    const isLast = i === tracedCount - 1;
    if (isLast && skipLastTransfer) {
      continue;
    }
    if (i < total - 1) y += d * Math.tan(U);
  }
  return { y, u: Math.tan(U), n, clipped, heights };
}
