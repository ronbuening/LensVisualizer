/**
 * Trace utility helpers — direction normalization, vertex projection, and result finalization.
 *
 * Keeps sequential and generalized tracers aligned on launch conventions, failure handling,
 * and RuntimeLens-compatible outputs.
 */

import type { PreparedOpticalState, Vec3 } from "../types.js";
import { normalize } from "../math/vector.js";
import type { EngineTraceResult, TraceFailureReason, TraceHit } from "./types.js";
import { buildTraceDiagnostics } from "./foldedDiagnostics.js";
import type {
  FoldedPathAutoStepDiagnostics,
  FoldedPathClipEvent,
  FoldedPathTraceTermination,
} from "../../types/optics.js";

/**
 * Convert a normalized 3D ray direction to legacy skew slopes.
 *
 * @param direction - normalized engine ray direction
 * @returns ux=dx/dz and uy=dy/dz, with Infinity for z-parallel degeneracy
 */
export function directionSlopes(direction: Vec3): { ux: number; uy: number } {
  const invDz = Math.abs(direction[2]) > 1e-12 ? 1 / direction[2] : Infinity;
  return { ux: direction[0] * invDz, uy: direction[1] * invDz };
}

/**
 * Project one transverse coordinate along a ray to a requested z plane.
 *
 * @param coordinate - coordinate value at pointZ
 * @param pointZ - current axial position in mm
 * @param directionCoordinate - matching direction component
 * @param directionZ - axial direction component
 * @param z - target axial plane in mm
 * @returns coordinate value at the target plane
 */
export function projectCoordinateToZ(
  coordinate: number,
  pointZ: number,
  directionCoordinate: number,
  directionZ: number,
  z: number,
): number {
  if (Math.abs(directionZ) <= 1e-12) return coordinate;
  return coordinate + ((z - pointZ) * directionCoordinate) / directionZ;
}

/**
 * Normalize a trace direction using the shared vector epsilon policy.
 *
 * @param direction - input direction
 * @returns normalized direction, or null for invalid input
 */
export function normalizeTraceDirection(direction: Vec3): Vec3 | null {
  return normalize(direction);
}

/**
 * Build the common EngineTraceResult shape from sequential or generalized traces.
 *
 * The terminal point is projected back to the requested return vertex plane for
 * RuntimeLens compatibility; arbitrary image-plane hits keep their true point.
 *
 * @param args - accumulated trace state and diagnostics
 * @returns finalized engine trace result
 */
export function finalizeTraceResult({
  state,
  input,
  hits,
  heights,
  terminalPoint,
  terminalDirection,
  terminalSurfaceIndex,
  returnVertexIndex,
  finalMedium,
  clipped,
  failureReason,
  reachedImagePlane,
  terminationReason,
  clipEvents,
  autoSteps,
  loopKey,
}: {
  state: PreparedOpticalState;
  input: { origin: Vec3; direction: Vec3 };
  hits: readonly TraceHit[];
  heights: readonly number[] | null;
  terminalPoint: Vec3;
  terminalDirection: Vec3;
  terminalSurfaceIndex: number;
  returnVertexIndex: number;
  finalMedium: number;
  clipped: boolean;
  failureReason: TraceFailureReason | null;
  reachedImagePlane: boolean;
  terminationReason: FoldedPathTraceTermination;
  clipEvents: FoldedPathClipEvent[];
  autoSteps: FoldedPathAutoStepDiagnostics[];
  loopKey: string | null;
}): EngineTraceResult {
  const returnZ = reachedImagePlane
    ? terminalPoint[2]
    : (state.z[returnVertexIndex] ?? state.z[state.z.length - 1] ?? 0);
  const x = reachedImagePlane
    ? terminalPoint[0]
    : projectCoordinateToZ(terminalPoint[0], terminalPoint[2], terminalDirection[0], terminalDirection[2], returnZ);
  const y = reachedImagePlane
    ? terminalPoint[1]
    : projectCoordinateToZ(terminalPoint[1], terminalPoint[2], terminalDirection[1], terminalDirection[2], returnZ);
  const slopes = directionSlopes(terminalDirection);
  const status = failureReason !== null ? "failed" : clipped ? "clipped" : "ok";
  return {
    input,
    hits,
    terminalPoint,
    terminalDirection,
    terminalSurfaceIndex,
    returnVertexIndex,
    finalMedium,
    status,
    failureReason,
    reachedImagePlane,
    diagnostics: buildTraceDiagnostics(state, {
      hits,
      finalMedium,
      reachedImagePlane,
      terminalSurfaceIndex,
      clipped,
      failureReason,
      terminationReason,
      clipEvents,
      autoSteps,
      loopKey,
    }),
    heights,
    x,
    y,
    ux: slopes.ux,
    uy: slopes.uy,
  };
}

/**
 * Clamp a requested trace count to the available surface range.
 *
 * @param value - requested number of surfaces
 * @param total - available surface count
 * @returns integer count in [0, total]
 */
export function clampTraceCount(value: number, total: number): number {
  if (!Number.isFinite(value)) return total;
  return Math.min(total, Math.max(0, Math.round(value)));
}

/**
 * Determine which vertex plane the final trace result should be reported at.
 *
 * @param stopAt - optional number of surfaces to trace
 * @param skipLastTransfer - whether to report at the last hit instead of next gap
 * @param terminalSurfaceIndex - final hit surface index
 * @param total - total surface count
 * @returns surface index whose vertex plane receives the final projected result
 */
export function resolveReturnVertexIndex(
  stopAt: number | undefined,
  skipLastTransfer: boolean,
  terminalSurfaceIndex: number,
  total: number,
): number {
  if (total <= 0) return 0;
  if (stopAt !== undefined) {
    const tracedCount = clampTraceCount(stopAt, total);
    if (tracedCount <= 0) return 0;
    return skipLastTransfer ? Math.min(tracedCount - 1, total - 1) : Math.min(tracedCount, total - 1);
  }
  return terminalSurfaceIndex >= 0 ? terminalSurfaceIndex : 0;
}
