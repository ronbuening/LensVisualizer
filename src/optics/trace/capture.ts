/**
 * Trace capture policy — select observation storage before traversal.
 *
 * Terminal traces keep only the solver state; hit and diagnostic recorders never affect propagation.
 */

import type { FoldedPathAutoCandidateSkip, FoldedPathClipReason } from "../../types/optics.js";
import type { SurfaceIntersectionSuccess } from "../geometry/intersectTypes.js";
import type { Vec3 } from "../types.js";
import { buildTraceDiagnostics, pushClipEvent, surfaceLabel } from "./foldedDiagnostics.js";
import type { TraceCapture, TraceDiagnosticsInput, TraceFailureReason, TraceGeometry, TraceHit } from "./types.js";

type HitGeometry = Pick<SurfaceIntersectionSuccess, "point" | "normal" | "radius" | "residual" | "effectiveTolerance">;

/** Observation sink chosen once per trace, including a stateless terminal sink. */
export interface TraceRecorder {
  readonly hits: TraceHit[] | undefined;
  readonly recordCandidates: boolean;
  hit(index: number, geometry: HitGeometry, incident: Vec3, clipped: boolean, reason?: FoldedPathClipReason): void;
  failure(reason: TraceFailureReason, clipReason?: FoldedPathClipReason): void;
  outgoing(direction: Vec3): void;
  loop(): void;
  clip(index: number | null, reason: FoldedPathClipReason, failure?: string | null): void;
  autoStep(step: number, skipped: FoldedPathAutoCandidateSkip[] | undefined): void;
  diagnostics?: (
    input: Omit<TraceDiagnosticsInput, "hits" | "clipEvents" | "autoSteps">,
  ) => ReturnType<typeof buildTraceDiagnostics>;
}

const ignore = () => {};
const TERMINAL_RECORDER: TraceRecorder = Object.freeze({
  hits: undefined,
  recordCandidates: false,
  hit: ignore,
  failure: ignore,
  outgoing: ignore,
  loop: ignore,
  clip: ignore,
  autoStep: ignore,
  diagnostics: undefined,
});

/** Choose storage before the loop; no observation argument needs a new per-hit object. */
export function createTraceRecorder(
  geometry: TraceGeometry,
  capture: TraceCapture = "diagnostics",
  sequential = false,
): TraceRecorder {
  if (capture === "terminal") return TERMINAL_RECORDER;
  const hits: TraceHit[] = [];
  const clipEvents: TraceDiagnosticsInput["clipEvents"] | undefined = capture === "diagnostics" ? [] : undefined;
  const autoSteps: TraceDiagnosticsInput["autoSteps"] | undefined = capture === "diagnostics" ? [] : undefined;
  return {
    hits,
    recordCandidates: capture === "diagnostics",
    hit(index, hit, incident, clipped, clipReason) {
      const row: TraceHit = {
        surfaceIndex: index,
        surfaceLabel: surfaceLabel(geometry, index),
        point: hit.point,
        normal: hit.normal,
        incidentDirection: [incident[0], incident[1], incident[2]],
        radius: hit.radius,
        residual: hit.residual,
        effectiveTolerance: hit.effectiveTolerance,
        clipped,
        fallback: false,
        failureReason: null,
      };
      if (sequential || clipReason !== undefined) row.clipReason = clipReason;
      hits.push(row);
    },
    failure(failureReason, clipReason) {
      const hit = hits[hits.length - 1];
      hit.clipped = true;
      hit.failureReason = failureReason;
      if (clipReason !== undefined) hit.clipReason = clipReason;
    },
    outgoing(direction) {
      hits[hits.length - 1].outgoingDirection = [direction[0], direction[1], direction[2]];
    },
    loop() {
      const hit = hits[hits.length - 1];
      hit.clipped = true;
      hit.clipReason = "loop-detected";
    },
    clip: clipEvents ? (index, reason, failure) => pushClipEvent(clipEvents, geometry, index, reason, failure) : ignore,
    autoStep: autoSteps ? (step, skipped) => autoSteps.push({ step, skippedCandidates: skipped! }) : ignore,
    diagnostics:
      clipEvents && autoSteps
        ? (input) => buildTraceDiagnostics(geometry, { ...input, hits, clipEvents, autoSteps })
        : TERMINAL_RECORDER.diagnostics,
  };
}
