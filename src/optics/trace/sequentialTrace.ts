/**
 * Sequential exact tracer — left-to-right real-ray traversal for ordinary refractive lenses.
 *
 * Uses prepared state and surface profiles for the default optical path while delegating
 * folded systems to the generalized tracer.
 */

import type { FoldedPathClipEvent } from "../../types/optics.js";
import { FLAT_R_THRESHOLD } from "../constants.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { evaluateAperture } from "./aperture.js";
import { pushClipEvent } from "./foldedDiagnostics.js";
import { refractedDirection } from "./interactions.js";
import { intersectStateSurface, sequentialSurfaceMaxT } from "./pathPlanner.js";
import type { EngineTraceResult, TraceFailureReason, TraceHit, TraceOptions } from "./types.js";
import {
  clampTraceCount,
  finalizeTraceResult,
  normalizeTraceDirection,
  projectCoordinateToZ,
  resolveReturnVertexIndex,
} from "./utils.js";

/**
 * Trace a ray through ordinary sequential surface order.
 *
 * Each surface hit is solved against its exact sag profile, then refracted with
 * vector Snell's law. Folded systems use generalizedTrace instead.
 *
 * @param state - prepared optical state
 * @param input - ray origin and direction
 * @param options - stop, aperture, ghost, and chromatic trace controls
 * @returns engine trace result with hits, clipping, and terminal ray state
 */
export function traceSequential(
  state: PreparedOpticalState,
  input: Ray3,
  options: TraceOptions = {},
): EngineTraceResult {
  const direction0 = options.directionNormalized ? input.direction : normalizeTraceDirection(input.direction);
  if (
    !direction0 ||
    !Number.isFinite(direction0[0]) ||
    !Number.isFinite(direction0[1]) ||
    !Number.isFinite(direction0[2])
  ) {
    return failedBeforeHit(state, input, "invalidDirection");
  }

  const {
    stopAt,
    skipLastTransfer = false,
    recordHeights = false,
    checkSemiDiameter = false,
    stopSemiDiameter,
    ghost = false,
    stopOnClip = false,
    launchBoundT,
    indexAtSurface,
  } = options;

  const total = state.surfaces.length;
  const tracedCount = clampTraceCount(stopAt ?? total, total);
  const heights: number[] | null = recordHeights ? [] : null;
  const hits: TraceHit[] = [];
  const clipEvents: FoldedPathClipEvent[] = [];
  let origin: Vec3 = [input.origin[0], input.origin[1], input.origin[2]];
  let direction: Vec3 = direction0;
  let n = 1;
  let clipped = false;
  let terminalPoint: Vec3 = origin;
  let terminalSurfaceIndex = -1;
  let failureReason: TraceFailureReason | null = null;

  for (let i = 0; i < tracedCount; i++) {
    const surface = state.surfaces[i];
    const maxT = sequentialSurfaceMaxT(state, i, origin, direction, launchBoundT);
    const hit = intersectStateSurface({ origin, direction }, state, i, { maxT, refractiveIndex: n });

    if (!hit.ok) {
      // A miss is terminal even in ghost mode: prior hits still display, while
      // fabricated fallback points can create unbounded SVG paths.
      clipped = true;
      failureReason = hit.failureReason;
      pushClipEvent(clipEvents, state, i, "intersection-failure", hit.failureReason);
      break;
    }

    const point = hit.point;
    const normal = hit.normal;
    const radius = hit.radius;
    terminalPoint = point;
    terminalSurfaceIndex = i;
    if (recordHeights) {
      heights!.push(projectCoordinateToZ(point[1], point[2], direction[1], direction[2], surface.z));
    }

    const incidentDirection: Vec3 = [direction[0], direction[1], direction[2]];
    const aperture = evaluateAperture(state, surface, radius, stopSemiDiameter);
    let clipReason: TraceHit["clipReason"] | undefined;
    if (checkSemiDiameter && aperture.state !== "inside") {
      clipped = true;
      clipReason = aperture.state === "inside-hole" ? "inner-hole" : "semi-diameter";
      pushClipEvent(clipEvents, state, i, clipReason);
    }

    const hitClipped = clipped;
    const traceHit: TraceHit = {
      surfaceIndex: i,
      surfaceLabel: surface.label,
      point,
      normal,
      incidentDirection,
      radius,
      clipped: hitClipped,
      fallback: false,
      failureReason: null,
      clipReason,
    };

    if (hitClipped && stopOnClip && !ghost) {
      hits.push(traceHit);
      break;
    }

    /* Chromatic traces replace the physical d-line nd with channel-specific
     * n(lambda), while air stays exactly 1. */
    const nn = indexAtSurface ? indexAtSurface(i, surface.nd) : surface.nd === 1 ? 1 : surface.nd;
    let stopAfterHit = false;
    if (nn !== n) {
      if (hitClipped && Math.abs(surface.R) < FLAT_R_THRESHOLD && radius * radius > surface.R * surface.R) {
        // Ghost ray beyond the mathematical sphere extent: preserve legacy straight propagation.
      } else {
        const refracted = refractedDirection(direction, normal, n, nn);
        if (refracted === null) {
          clipped = true;
          failureReason = "totalInternalReflection";
          pushClipEvent(clipEvents, state, i, "total-internal-reflection", failureReason);
          traceHit.clipped = true;
          traceHit.failureReason = failureReason;
          traceHit.clipReason = "total-internal-reflection";
          stopAfterHit = !ghost;
        } else {
          direction = refracted;
        }
      }
    }

    n = nn;
    traceHit.outgoingDirection = [direction[0], direction[1], direction[2]];
    hits.push(traceHit);
    if (stopAfterHit) break;
    origin = point;
  }

  const returnVertexIndex = resolveReturnVertexIndex(stopAt, skipLastTransfer, terminalSurfaceIndex, total);
  return finalizeTraceResult({
    state,
    input: { origin: input.origin, direction: direction0 },
    hits,
    heights,
    terminalPoint,
    terminalDirection: direction,
    terminalSurfaceIndex,
    returnVertexIndex,
    finalMedium: n,
    clipped,
    failureReason,
    reachedImagePlane: false,
    terminationReason: "sequential-return",
    clipEvents,
    autoSteps: [],
    loopKey: null,
  });
}

function failedBeforeHit(
  state: PreparedOpticalState,
  input: Ray3,
  failureReason: TraceFailureReason,
): EngineTraceResult {
  const direction: Vec3 = [input.direction[0], input.direction[1], input.direction[2]];
  return finalizeTraceResult({
    state,
    input,
    hits: [],
    heights: null,
    terminalPoint: input.origin,
    terminalDirection: direction,
    terminalSurfaceIndex: -1,
    returnVertexIndex: 0,
    finalMedium: 1,
    clipped: true,
    failureReason,
    reachedImagePlane: false,
    terminationReason: "trace-failure",
    clipEvents: [],
    autoSteps: [],
    loopKey: null,
  });
}
