import type { CompiledStateSurface, PreparedOpticalState } from "../types.js";

export type ApertureState = "inside" | "inside-hole" | "outside";

export interface ApertureEvaluation {
  state: ApertureState;
  radius: number;
  semiDiameter: number | null;
  innerSemiDiameter: number;
}

const TRACE_CLIP_ABS_TOLERANCE = 1e-9;

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
