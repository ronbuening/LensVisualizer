import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { evaluateAperture } from "./aperture.js";
import { traceGeneralized } from "./generalizedTrace.js";
import type { EngineTraceResult, TraceOptions } from "./types.js";
import { directionSlopes } from "./utils.js";

export interface StopTraceOptions extends Omit<TraceOptions, "stopAt"> {
  stopOccurrence?: number;
}

export interface TraceToStopResult {
  found: boolean;
  x: number;
  y: number;
  ux: number;
  uy: number;
  n: number;
  point: Vec3 | null;
  hitIndex: number;
  trace: EngineTraceResult;
}

export function traceToStopViaGeneralized2(
  state: PreparedOpticalState,
  input: Ray3,
  stopIndex: number,
  {
    stopOccurrence = 0,
    recordHeights = false,
    checkSemiDiameter = false,
    stopSemiDiameter,
    ghost = false,
    stopOnClip = false,
    launchBoundT,
    indexAtSurface,
  }: StopTraceOptions = {},
): TraceToStopResult {
  const trace = traceGeneralized(state, input, {
    recordHeights,
    checkSemiDiameter,
    stopSemiDiameter,
    ghost,
    stopOnClip,
    launchBoundT,
    indexAtSurface,
  });

  let occurrence = 0;
  for (let hitIndex = 0; hitIndex < trace.hits.length; hitIndex++) {
    const hit = trace.hits[hitIndex];
    if (hit.surfaceIndex !== stopIndex || hit.clipped || hit.fallback || hit.failureReason !== null) continue;
    if (occurrence === stopOccurrence) {
      const direction = hit.incidentDirection ?? trace.terminalDirection;
      return stopTraceResult(true, hit.point, direction, trace.finalMedium, hitIndex, trace);
    }
    occurrence++;
  }

  const launchPlaneStop = stopTraceLaunchPlaneCandidate(state, input.origin, input.direction, stopIndex, trace, {
    checkSemiDiameter,
    stopSemiDiameter,
  });
  if (stopOccurrence === 0 && launchPlaneStop !== null) {
    return stopTraceResult(true, launchPlaneStop, input.direction, trace.finalMedium, -1, trace);
  }

  return {
    found: false,
    x: NaN,
    y: NaN,
    ux: NaN,
    uy: NaN,
    n: trace.finalMedium,
    point: null,
    hitIndex: -1,
    trace,
  };
}

function stopTraceResult(
  found: boolean,
  point: Vec3,
  direction: Vec3,
  n: number,
  hitIndex: number,
  trace: EngineTraceResult,
): TraceToStopResult {
  const slopes = directionSlopes(direction);
  return {
    found,
    x: point[0],
    y: point[1],
    ux: slopes.ux,
    uy: slopes.uy,
    n,
    point,
    hitIndex,
    trace,
  };
}

function stopTraceLaunchPlaneCandidate(
  state: PreparedOpticalState,
  origin: Vec3,
  direction: Vec3,
  stopIndex: number,
  trace: EngineTraceResult,
  {
    checkSemiDiameter,
    stopSemiDiameter,
  }: {
    checkSemiDiameter: boolean;
    stopSemiDiameter?: number;
  },
): Vec3 | null {
  const surface = state.surfaces[stopIndex];
  if (!surface) return null;

  const normal = surface.interaction.normal ?? ([0, 0, 1] as Vec3);
  const vertex: Vec3 = [0, 0, surface.z];
  const denom = direction[0] * normal[0] + direction[1] * normal[1] + direction[2] * normal[2];
  if (Math.abs(denom) <= 1e-12) return null;
  const t =
    ((vertex[0] - origin[0]) * normal[0] + (vertex[1] - origin[1]) * normal[1] + (vertex[2] - origin[2]) * normal[2]) /
    denom;
  if (!Number.isFinite(t) || t < -1e-7) return null;

  const firstHit = trace.hits[0];
  if (firstHit) {
    const firstHitT = rayParameterAtPoint(origin, direction, firstHit.point);
    if (Number.isFinite(firstHitT) && t > firstHitT + Math.max(1e-7, Math.abs(firstHitT) * 1e-9)) return null;
  }

  const point: Vec3 = [origin[0] + direction[0] * t, origin[1] + direction[1] * t, origin[2] + direction[2] * t];
  if (!point.every(Number.isFinite)) return null;

  if (checkSemiDiameter) {
    const radius = Math.hypot(point[0], point[1]);
    const aperture = evaluateAperture(state, surface, radius, stopSemiDiameter);
    if (aperture.state !== "inside") return null;
  }

  return point;
}

function rayParameterAtPoint(origin: Vec3, direction: Vec3, point: Vec3): number {
  return (
    (point[0] - origin[0]) * direction[0] +
    (point[1] - origin[1]) * direction[1] +
    (point[2] - origin[2]) * direction[2]
  );
}
