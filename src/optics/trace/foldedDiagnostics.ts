/**
 * Folded trace diagnostics — converts trace clip and failure state into structured messages.
 *
 * Gives mirror and annular systems explainable trace failures without coupling diagnostics to rendering components.
 */

import type { FoldedPathClipEvent, FoldedPathClipReason, FoldedPathTraceDiagnostics } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import type { TraceDiagnosticsInput } from "./types.js";

export function surfaceLabel(state: PreparedOpticalState, surfaceIndex: number | null): string {
  if (surfaceIndex === null || surfaceIndex < 0) return "";
  return state.surfaces[surfaceIndex]?.label ?? `S${surfaceIndex + 1}`;
}

export function pushClipEvent(
  events: FoldedPathClipEvent[],
  state: PreparedOpticalState,
  surfaceIndex: number | null,
  reason: FoldedPathClipReason,
  failureReason: string | null = null,
): void {
  events.push({
    surfaceIdx: surfaceIndex,
    surfaceLabel: surfaceIndex === null ? null : surfaceLabel(state, surfaceIndex),
    reason,
    failureReason,
  });
}

export function buildTraceDiagnostics(
  state: PreparedOpticalState,
  {
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
  }: TraceDiagnosticsInput,
): FoldedPathTraceDiagnostics {
  const hitSurfaceIndexes = hits.map((hit) => hit.surfaceIndex);
  return {
    expectedPathMode: state.lens.opticalPath.mode,
    expectedSurfaceLabels: state.lens.opticalPath.surfaceLabels ? [...state.lens.opticalPath.surfaceLabels] : null,
    maxInteractions: state.lens.opticalPath.maxInteractions,
    hitSurfaceIndexes,
    hitSurfaceLabels: hitSurfaceIndexes.map((idx) => surfaceLabel(state, idx)),
    finalMedium,
    reachedImagePlane,
    imagePlaneLabel: state.imagePlane.label,
    terminalSurfaceIndex,
    terminalSurfaceLabel: terminalSurfaceIndex >= 0 ? surfaceLabel(state, terminalSurfaceIndex) : null,
    clipped,
    failureReason,
    terminationReason,
    clipEvents,
    autoSteps,
    loopDetected: terminationReason === "loop-detected",
    loopKey,
  };
}
