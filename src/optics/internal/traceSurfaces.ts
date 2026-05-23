import type { ParaxialTraceResult } from "../../types/optics.js";
import { FLAT_R_THRESHOLD } from "./surfaceMath.js";

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
