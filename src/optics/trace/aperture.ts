/**
 * Aperture evaluation — classifies ray hits against clear apertures and annular obstructions.
 *
 * Shared by sequential and generalized tracers so clipping, holes, and inactive surfaces use the same radial rules.
 */

import type { CompiledStateSurface, PreparedOpticalState } from "../types.js";

/** Radial relationship between a ray hit and a surface's active aperture band. */
export type ApertureState = "inside" | "inside-hole" | "outside";

/** Aperture classification plus effective outer and inner semi-diameters in mm. */
export interface ApertureEvaluation {
  state: ApertureState;
  radius: number;
  semiDiameter: number | null;
  innerSemiDiameter: number;
}

const TRACE_CLIP_ABS_TOLERANCE = 1e-9;

/**
 * Classify a ray/surface hit against the active radial aperture.
 *
 * Outer semi-diameters clip ordinary rays. `innerSd` creates an annular inactive
 * zone for secondary obstructions or mirror holes, so a hit can be geometrically
 * on the surface but optically pass through the center.
 *
 * @param state - prepared optical state carrying stop and display margins
 * @param surface - prepared surface being hit
 * @param radius - radial hit distance from the local optical axis in mm
 * @param stopSemiDiameter - optional current physical stop radius override
 * @returns aperture classification and effective radial limits
 */
export function evaluateAperture(
  state: PreparedOpticalState,
  surface: CompiledStateSurface,
  radius: number,
  stopSemiDiameter?: number,
): ApertureEvaluation {
  const semiDiameter = activeSemiDiameter(state, surface, stopSemiDiameter);
  const innerSemiDiameter = surface.innerSd ?? 0;
  let apertureState: ApertureState = "inside";

  if (semiDiameter !== null && exceedsAperture(radius, semiDiameter)) {
    apertureState = "outside";
  } else if (innerSemiDiameter > 0) {
    const tolerance = Math.max(TRACE_CLIP_ABS_TOLERANCE, Math.abs(innerSemiDiameter) * 1e-12);
    apertureState = radius >= innerSemiDiameter - tolerance ? "inside" : "inside-hole";
  }

  return {
    state: apertureState,
    radius,
    semiDiameter,
    innerSemiDiameter,
  };
}

/**
 * Check whether a hit should participate in optical interaction.
 *
 * @param evaluation - result from evaluateAperture()
 * @returns true when the hit is inside the active annular aperture band
 */
export function isInsideActiveAperture(evaluation: ApertureEvaluation): boolean {
  return evaluation.state === "inside";
}

function activeSemiDiameter(
  state: PreparedOpticalState,
  surface: CompiledStateSurface,
  stopSemiDiameter: number | undefined,
): number | null {
  if (surface.physicalIndex === state.lens.stop.surfaceIndex && stopSemiDiameter !== undefined) return stopSemiDiameter;
  if (typeof surface.sd !== "number") return null;
  return surface.sd * state.lens.display.clipMargin;
}

function exceedsAperture(radius: number, semiDiameter: number): boolean {
  const tolerance = Math.max(TRACE_CLIP_ABS_TOLERANCE, Math.abs(semiDiameter) * 1e-12);
  return radius > semiDiameter + tolerance;
}
