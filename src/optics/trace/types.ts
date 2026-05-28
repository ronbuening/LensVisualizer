/**
 * Trace result types — shared exact-trace hit, failure, option, and diagnostics contracts.
 *
 * Defines the data exchanged by sequential, generalized, ray-adapter, and folded-diagnostic trace modules.
 */

import type {
  FoldedPathClipReason,
  FoldedPathTraceDiagnostics,
  FoldedPathTraceTermination,
} from "../../types/optics.js";
import type { SurfaceIntersectionFailureReason } from "../math/intersection.js";
import type { Ray3, Vec3 } from "../types.js";

/** Failure reason emitted by exact tracing after intersection and interaction steps. */
export type TraceFailureReason =
  | SurfaceIntersectionFailureReason
  | "totalInternalReflection"
  | "loopDetected"
  | "maxInteractions";

/** One surface interaction or attempted hit recorded by an engine trace. */
export interface TraceHit {
  surfaceIndex: number;
  surfaceLabel: string;
  point: Vec3;
  normal: Vec3;
  incidentDirection?: Vec3;
  outgoingDirection?: Vec3;
  radius: number;
  clipped: boolean;
  fallback: boolean;
  failureReason: TraceFailureReason | null;
  clipReason?: FoldedPathClipReason;
}

/** Full engine trace result before conversion to RuntimeLens-compatible ray shapes. */
export interface EngineTraceResult {
  input: Ray3;
  hits: readonly TraceHit[];
  terminalPoint: Vec3;
  terminalDirection: Vec3;
  terminalSurfaceIndex: number;
  returnVertexIndex: number;
  finalMedium: number;
  status: "ok" | "clipped" | "failed";
  failureReason: TraceFailureReason | null;
  reachedImagePlane: boolean;
  diagnostics: FoldedPathTraceDiagnostics;
  heights: readonly number[] | null;
  x: number;
  y: number;
  ux: number;
  uy: number;
}

/**
 * Options controlling exact trace termination, aperture checks, and chromatic indices.
 *
 * Distances and `launchBoundT` are in millimeters because vector directions are
 * normalized. `stopAt` is a physical surface index for sequential-style partial traces.
 */
export interface TraceOptions {
  stopAt?: number;
  skipLastTransfer?: boolean;
  recordHeights?: boolean;
  checkSemiDiameter?: boolean;
  stopSemiDiameter?: number;
  ghost?: boolean;
  stopOnClip?: boolean;
  launchBoundT?: number;
  indexAtSurface?: (surfaceIndex: number, nd: number) => number;
  directionNormalized?: boolean;
}

/** Input used to build folded-path diagnostics from a trace result. */
export interface TraceDiagnosticsInput {
  hits: readonly TraceHit[];
  finalMedium: number;
  reachedImagePlane: boolean;
  terminalSurfaceIndex: number;
  clipped: boolean;
  failureReason: TraceFailureReason | null;
  terminationReason: FoldedPathTraceTermination;
  clipEvents: import("../../types/optics.js").FoldedPathClipEvent[];
  autoSteps: import("../../types/optics.js").FoldedPathAutoStepDiagnostics[];
  loopKey: string | null;
}
