/**
 * Sequential exact tracer — left-to-right real-ray traversal for ordinary refractive lenses.
 *
 * Uses indexed trace geometry and surface profiles for the ordinary optical path.
 * Geometry construction selects generalized traversal for folded systems.
 */

import { FLAT_R_THRESHOLD } from "../geometry/surfaceProfile.js";
import type { Ray3, Vec3 } from "../types.js";
import { evaluateAperture } from "./aperture.js";
import { createTraceRecorder, type TraceRecorder } from "./capture.js";
import { interactRefractiveSurface } from "./interactions.js";
import { DEFAULT_PHASE_WAVELENGTH_NM } from "../math/diffractivePhase.js";
import { intersectStateSurface, sequentialSurfaceMaxT, sequentialSurfaceMinT } from "./pathPlanner.js";
import type {
  TraceGeometry,
  EngineTraceResult,
  TraceFailureReason,
  TraceCapture,
  TraceHit,
  TraceOptions,
} from "./types.js";
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
 * @param geometry - indexed trace geometry
 * @param input - ray origin and direction
 * @param options - stop, aperture, ghost, and chromatic trace controls
 * @returns engine trace result with hits, clipping, and terminal ray state
 */
export function traceSequential<C extends TraceCapture = "diagnostics">(
  geometry: TraceGeometry,
  input: Ray3,
  options: TraceOptions<C> = {},
): EngineTraceResult<C> {
  const capture = createTraceRecorder(geometry, options.capture, true);
  const direction0 = options.directionNormalized ? input.direction : normalizeTraceDirection(input.direction);
  if (
    !direction0 ||
    !Number.isFinite(direction0[0]) ||
    !Number.isFinite(direction0[1]) ||
    !Number.isFinite(direction0[2])
  ) {
    return failedBeforeHit<C>(geometry, input, "invalidDirection", capture);
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
    wavelengthNm = DEFAULT_PHASE_WAVELENGTH_NM,
  } = options;

  const total = geometry.surfaces.length;
  const tracedCount = clampTraceCount(stopAt ?? total, total);
  const heights: number[] | null = recordHeights ? [] : null;
  let origin: Vec3 = [input.origin[0], input.origin[1], input.origin[2]];
  let direction: Vec3 = direction0;
  let n = 1;
  let opticalPathLengthMm = 0;
  let clipped = false;
  let terminalPoint: Vec3 = origin;
  let terminalSurfaceIndex = -1;
  let failureReason: TraceFailureReason | null = null;

  for (let i = 0; i < tracedCount; i++) {
    const surface = geometry.surfaces[i];
    const minT = sequentialSurfaceMinT(geometry, i, origin, direction);
    const maxT = Math.max(minT, sequentialSurfaceMaxT(geometry, i, origin, direction, launchBoundT));
    const hit = intersectStateSurface({ origin, direction }, geometry, i, { minT, maxT, refractiveIndex: n });

    if (!hit.ok) {
      // A miss is terminal even in ghost mode: prior hits still display, while
      // fabricated fallback points can create unbounded SVG paths.
      clipped = true;
      failureReason = hit.failureReason;
      capture.clip(i, "intersection-failure", hit.failureReason);
      break;
    }

    const point = hit.point;
    if (options.recordOpticalPath) opticalPathLengthMm += hit.opticalPathLength ?? n * hit.segmentLength;
    const normal = hit.normal;
    const radius = hit.radius;
    terminalPoint = point;
    terminalSurfaceIndex = i;
    if (recordHeights) {
      heights!.push(projectCoordinateToZ(point[1], point[2], direction[1], direction[2], surface.z));
    }

    const aperture = evaluateAperture(geometry, surface, radius, stopSemiDiameter);
    let clipReason: TraceHit["clipReason"] | undefined;
    if (checkSemiDiameter && aperture.state !== "inside") {
      clipped = true;
      clipReason = aperture.state === "inside-hole" ? "inner-hole" : "semi-diameter";
      capture.clip(i, clipReason);
    }

    const hitClipped = clipped;
    capture.hit(i, hit, direction, hitClipped, clipReason);
    if (hitClipped && stopOnClip && !ghost) break;

    /* Chromatic traces replace the physical d-line nd with channel-specific
     * n(lambda), while air stays exactly 1. */
    const nn = indexAtSurface ? indexAtSurface(i, surface.nd) : surface.nd === 1 ? 1 : surface.nd;
    let stopAfterHit = false;
    if (nn !== n || surface.diffractive) {
      if (hitClipped && Math.abs(surface.R) < FLAT_R_THRESHOLD && radius * radius > surface.R * surface.R) {
        // Ghost ray beyond the mathematical sphere extent: preserve legacy straight propagation.
      } else {
        const interaction = interactRefractiveSurface(direction, normal, point, n, nn, surface, wavelengthNm);
        if (interaction.failure) {
          clipped = true;
          failureReason = interaction.failure.failureReason;
          capture.clip(i, interaction.failure.clipReason, failureReason);
          capture.failure(failureReason, interaction.failure.clipReason);
          stopAfterHit = !ghost;
        } else {
          direction = interaction.direction;
        }
      }
    }

    n = nn;
    capture.outgoing(direction);
    if (stopAfterHit) break;
    origin = point;
  }

  const returnVertexIndex = resolveReturnVertexIndex(stopAt, skipLastTransfer, terminalSurfaceIndex, total);
  const result = finalizeTraceResult<C>({
    geometry,
    input: { origin: input.origin, direction: direction0 },
    capture,
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
    loopKey: null,
  });
  return options.recordOpticalPath ? { ...result, opticalPathLengthMm } : result;
}

function failedBeforeHit<C extends TraceCapture>(
  geometry: TraceGeometry,
  input: Ray3,
  failureReason: TraceFailureReason,
  capture: TraceRecorder,
): EngineTraceResult<C> {
  const direction: Vec3 = [input.direction[0], input.direction[1], input.direction[2]];
  return finalizeTraceResult<C>({
    geometry,
    input,
    capture,
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
    loopKey: null,
  });
}
