/**
 * Internal paraxial tracing — low-level first-order stepping over authored surface arrays.
 *
 * Used by runtime-lens construction to derive focal length, pupils, and stop behavior before the
 * exact trace facade is available.
 */

import type { ParaxialTraceResult } from "../../types/optics.js";
import { FLAT_R_THRESHOLD } from "./surfaceMath.js";

interface TraceSurface {
  R: number;
  nd: number;
  d: number;
  sd?: number;
  interaction?: { type?: "refract" | "reflect" | "block" };
}

export interface ParaxialRayState {
  y: number;
  u: number;
  n: number;
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

/**
 * Transfer a paraxial ray by one axial gap.
 *
 * @param state - current height, slope, and medium index
 * @param distance - axial distance in mm
 * @returns state at the next surface vertex plane
 */
export function transferParaxialRay({ y, u, n }: ParaxialRayState, distance: number): ParaxialRayState {
  return { y: y + distance * u, u, n };
}

/**
 * Apply paraxial refraction, reflection, or blocking at an authored surface.
 *
 * @param state - incoming paraxial ray
 * @param surface - authored surface radius/index/interaction data
 * @param options - optional mirror and same-index guards
 * @returns outgoing state, or null when the surface blocks this first-order path
 */
export function interactParaxialSurface(
  { y, u, n }: ParaxialRayState,
  surface: TraceSurface,
  {
    allowReflect = false,
    requireSameIndexRefraction = false,
  }: { allowReflect?: boolean; requireSameIndexRefraction?: boolean } = {},
): ParaxialRayState | null {
  const interactionType = surface.interaction?.type ?? "refract";
  if (interactionType === "block") return null;

  if (interactionType === "reflect") {
    if (!allowReflect) return null;
    const reflectedU = Math.abs(surface.R) < FLAT_R_THRESHOLD ? -u - (2 * y) / surface.R : -u;
    return { y, u: reflectedU, n };
  }

  const nextN = surface.nd === 1.0 ? 1.0 : surface.nd;
  if (requireSameIndexRefraction && Math.abs(nextN - n) > 1e-12) return null;
  if (nextN === n) return { y, u, n };

  const refractedU =
    Math.abs(surface.R) < FLAT_R_THRESHOLD ? (n * u - (y * (nextN - n)) / surface.R) / nextN : (n * u) / nextN;
  return { y, u: refractedU, n: nextN };
}

/**
 * Trace a paraxial ray through authored surfaces during runtime-lens construction.
 *
 * @param surfaces - authored surface array
 * @param y0 - launch height in mm
 * @param u0 - small-angle launch slope
 * @param options - stop and height-recording controls
 * @returns final paraxial state and optional per-surface heights
 */
export function traceSurfacesParaxial(
  surfaces: TraceSurface[],
  y0: number,
  u0: number,
  { stopAt, skipLastTransfer = false, recordHeights = false }: ParaxialSurfaceTraceOptions = {},
): ParaxialTraceResult {
  const tracedCount = stopAt !== undefined ? stopAt : surfaces.length;
  const total = surfaces.length;
  const heights: number[] | null = recordHeights ? [] : null;
  let state: ParaxialRayState = { y: y0, u: u0, n: 1.0 };
  for (let i = 0; i < tracedCount; i++) {
    if (recordHeights) heights!.push(state.y);
    const surface = surfaces[i];
    const nextState = interactParaxialSurface(state, surface);
    if (nextState === null) return { ...state, heights };
    state = nextState;
    const isLast = i === tracedCount - 1;
    if (isLast && skipLastTransfer) {
      continue;
    }
    if (i < total - 1) state = transferParaxialRay(state, surface.d);
  }
  return { ...state, heights };
}
