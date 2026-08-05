/**
 * Paraxial ray stepping — first-order transfer/refraction helpers for prepared engine surfaces.
 *
 * Implements the small-angle reference path used by cardinal elements, pupils, and compatibility
 * calculations alongside the exact real-ray tracer.
 */

import { FLAT_R_THRESHOLD } from "../constants.js";
import type { CompiledDiffractivePhase } from "../types.js";
import type { DiffractivePhaseSurface } from "../../types/optics.js";
import { diffractiveParaxialPower } from "./diffractivePhase.js";

/**
 * Minimal structural surface for first-order stepping. Both authored surfaces
 * (runtime-lens construction, where `interaction` may be absent and defaults
 * to plain refraction) and prepared engine surfaces satisfy it, so this module
 * is the single paraxial implementation for both stacks.
 */
export interface ParaxialSurface {
  R: number;
  nd: number;
  interaction?: { type?: "refract" | "reflect" | "block" };
  diffractive?: DiffractivePhaseSurface | CompiledDiffractivePhase | null;
}

/**
 * First-order ray state at a surface vertex plane.
 *
 * `y` is meridional height in mm, `u` is the small-angle slope/radian value,
 * and `n` is the current medium refractive index.
 */
export interface ParaxialState {
  y: number;
  u: number;
  n: number;
}

/** Controls for first-order tracing through a prepared surface sequence. */
export interface ParaxialTraceOptions {
  stopAt?: number;
  skipLastTransfer?: boolean;
  recordHeights?: boolean;
  allowReflect?: boolean;
  requireSameIndexRefraction?: boolean;
}

/** Final first-order ray state plus optional per-surface heights in mm. */
export interface ParaxialTraceResult extends ParaxialState {
  heights: number[] | null;
}

/**
 * Transfer a paraxial ray through axial distance d.
 *
 * Uses the small-angle relation y' = y + d*u; the refractive index is unchanged
 * between surfaces.
 *
 * @param state - current ray height y, angle u, and medium index n
 * @param distance - axial spacing to the next surface in mm
 * @returns updated paraxial state at the next vertex plane
 */
export function transferParaxialRay2({ y, u, n }: ParaxialState, distance: number): ParaxialState {
  return { y: y + distance * u, u, n };
}

/**
 * Apply first-order refraction or reflection at one surface.
 *
 * Refractive surfaces use paraxial Snell's law:
 * n*u' = n*u - y*(n' - n)/R. Reflective surfaces use the paraxial mirror
 * relation u' = -u - 2*y/R when the caller opts into mirror handling.
 *
 * @param state - incoming paraxial ray state at the surface
 * @param surface - prepared surface radius, next index, and interaction kind
 * @param options - mirror and same-index guards for specialized first-order paths
 * @returns outgoing paraxial state, or null when the surface blocks this path
 */
export function interactParaxialSurface2(
  { y, u, n }: ParaxialState,
  surface: ParaxialSurface,
  {
    allowReflect = false,
    requireSameIndexRefraction = false,
  }: { allowReflect?: boolean; requireSameIndexRefraction?: boolean } = {},
): ParaxialState | null {
  const interactionType = surface.interaction?.type ?? "refract";
  if (interactionType === "block") return null;

  if (interactionType === "reflect") {
    if (!allowReflect) return null;
    const reflectedU = Math.abs(surface.R) < FLAT_R_THRESHOLD ? -u - (2 * y) / surface.R : -u;
    return { y, u: reflectedU, n };
  }

  const nextN = surface.nd === 1 ? 1 : surface.nd;
  if (requireSameIndexRefraction && Math.abs(nextN - n) > 1e-12) return null;
  const refractivePower = Math.abs(surface.R) < FLAT_R_THRESHOLD ? (nextN - n) / surface.R : 0;
  const phasePower = diffractiveParaxialPower(surface.diffractive);
  if (nextN === n && phasePower === 0) return { y, u, n };

  const refractedU = (n * u - y * (refractivePower + phasePower)) / nextN;
  return { y, u: refractedU, n: nextN };
}

/**
 * Trace a paraxial ray through a prepared surface sequence.
 *
 * This is the first-order reference path used by cardinal-element and pupil
 * helpers; exact rendering rays use the real surface tracer instead.
 *
 * @param surfaces - prepared optical surfaces in trace order
 * @param y0 - launch height in mm at the first surface plane
 * @param u0 - launch angle/slope in radians under the paraxial approximation
 * @param options - stop, transfer, height-recording, and mirror handling controls
 * @returns final paraxial state and optional per-surface height samples
 */
export function traceParaxialSurfaces2(
  surfaces: readonly (ParaxialSurface & { d: number })[],
  y0: number,
  u0: number,
  {
    stopAt,
    skipLastTransfer = false,
    recordHeights = false,
    allowReflect = false,
    requireSameIndexRefraction = false,
  }: ParaxialTraceOptions = {},
): ParaxialTraceResult {
  const tracedCount = stopAt !== undefined ? stopAt : surfaces.length;
  const heights: number[] | null = recordHeights ? [] : null;
  let state: ParaxialState = { y: y0, u: u0, n: 1 };

  for (let i = 0; i < tracedCount; i++) {
    if (recordHeights) heights!.push(state.y);
    const surface = surfaces[i];
    const nextState = interactParaxialSurface2(state, surface, { allowReflect, requireSameIndexRefraction });
    if (nextState === null) return { ...state, heights };
    state = nextState;
    const isLast = i === tracedCount - 1;
    if (isLast && skipLastTransfer) continue;
    if (i < surfaces.length - 1) state = transferParaxialRay2(state, surface.d);
  }

  return { ...state, heights };
}
