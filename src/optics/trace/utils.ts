import type { PreparedOpticalState, Vec3 } from "../types.js";
import { normalize } from "../math/vector.js";
import type { EngineTraceResult, TraceFailureReason, TraceHit } from "./types.js";
import { buildTraceDiagnostics } from "./foldedDiagnostics.js";
import type {
  FoldedPathAutoStepDiagnostics,
  FoldedPathClipEvent,
  FoldedPathTraceTermination,
} from "../../types/optics.js";

export function directionSlopes(direction: Vec3): { ux: number; uy: number } {
  const invDz = Math.abs(direction[2]) > 1e-12 ? 1 / direction[2] : Infinity;
  return { ux: direction[0] * invDz, uy: direction[1] * invDz };
}

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

export function normalizeTraceDirection(direction: Vec3): Vec3 | null {
  return normalize(direction);
}

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

export function clampTraceCount(value: number, total: number): number {
  if (!Number.isFinite(value)) return total;
  return Math.min(total, Math.max(0, Math.round(value)));
}

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
