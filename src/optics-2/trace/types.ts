import type {
  FoldedPathClipReason,
  FoldedPathTraceDiagnostics,
  FoldedPathTraceTermination,
} from "../../types/optics.js";
import type { SurfaceIntersectionFailureReason } from "../math/intersection.js";
import type { Ray3, Vec3 } from "../types.js";

export type TraceFailureReason =
  | SurfaceIntersectionFailureReason
  | "totalInternalReflection"
  | "loopDetected"
  | "maxInteractions";

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
}

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
