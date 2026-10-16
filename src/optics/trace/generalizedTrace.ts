/**
 * Generalized exact tracer — data-driven folded-path and mirror-system ray traversal.
 *
 * Uses compiled optical paths, surface interactions, and image planes to trace systems
 * that cannot be represented by simple left-to-right sequential order.
 */

import type { FoldedPathTraceTermination } from "../../types/optics.js";
import type { CompiledStateSurface, Ray3, Vec3 } from "../types.js";
import { evaluateAperture, isInsideActiveAperture } from "./aperture.js";
import { createTraceRecorder } from "./capture.js";
import {
  advanceOrigin,
  incidentSideFor,
  interactRefractiveSurface,
  isSurfaceSideActive,
  orientedRefractionNormal,
  reflectedDirection,
  resolvedNextIndex,
} from "./interactions.js";
import { DEFAULT_PHASE_WAVELENGTH_NM } from "../math/diffractivePhase.js";
import {
  findNearestGeneralizedSurfaceHit,
  generalizedHitTolerance,
  intersectImagePlane,
  intersectStateSurface,
  loopStateKey,
  targetedSurfaceMaxT,
} from "./pathPlanner.js";
import type { TraceGeometry, EngineTraceResult, TraceFailureReason, TraceCapture, TraceOptions } from "./types.js";
import { finalizeTraceResult, normalizeTraceDirection, projectCoordinateToZ } from "./utils.js";

/**
 * Trace a ray through explicit or auto-discovered generalized optical paths.
 *
 * Unlike sequential tracing, this path may repeat surfaces, reflect, skip passive
 * same-index hits, and terminate on an arbitrary image plane.
 *
 * @param geometry - indexed trace geometry
 * @param input - ray origin and direction
 * @param options - aperture, ghost, chromatic, and launch-bound controls
 * @returns engine trace result with folded diagnostics and hit history
 */
/* Passive clip classification for a surface the ray does not interact with:
 * inactive-side block, block surface, or aperture clip. Returns the reason to
 * record, or null when the ray passes through unrecorded. */
function passiveClipReason(
  surface: CompiledStateSurface,
  sideActive: boolean,
  withinAperture: boolean,
  apertureOutside: boolean,
  checkSemiDiameter: boolean,
): "inactive-side-block" | "block-surface" | "semi-diameter" | null {
  if (!sideActive) {
    /* Inactive-side behavior is data-driven. Some mirror backs are blockers;
     * passive refractive surfaces simply let the ray continue through. */
    return surface.interaction.inactiveSide === "block" && withinAperture ? "inactive-side-block" : null;
  }
  if (surface.interaction.type === "block") return withinAperture ? "block-surface" : null;
  /* Central annular holes are not clips unless the caller asked for
   * semi-diameter clipping; they represent clear space through a mirror. */
  return checkSemiDiameter && apertureOutside ? "semi-diameter" : null;
}

export function traceGeneralized<C extends TraceCapture = "diagnostics">(
  geometry: TraceGeometry,
  input: Ray3,
  options: TraceOptions<C> = {},
): EngineTraceResult<C> {
  const capture = createTraceRecorder(geometry, options.capture);
  const direction0 = options.directionNormalized ? input.direction : normalizeTraceDirection(input.direction);
  if (
    !direction0 ||
    !Number.isFinite(direction0[0]) ||
    !Number.isFinite(direction0[1]) ||
    !Number.isFinite(direction0[2])
  ) {
    return finalizeTraceResult<C>({
      geometry,
      input,
      capture,
      heights: null,
      terminalPoint: input.origin,
      terminalDirection: input.direction,
      terminalSurfaceIndex: -1,
      returnVertexIndex: 0,
      finalMedium: 1,
      clipped: true,
      failureReason: "invalidDirection",
      reachedImagePlane: false,
      terminationReason: "trace-failure",
      loopKey: null,
    });
  }

  const {
    recordHeights = false,
    checkSemiDiameter = false,
    stopSemiDiameter,
    ghost = false,
    stopOnClip = false,
    launchBoundT,
    indexAtSurface,
    wavelengthNm = DEFAULT_PHASE_WAVELENGTH_NM,
  } = options;

  const explicitOrder = geometry.pathPlan.surfaceOrder ?? null;
  const maxInteractions = geometry.pathPlan.maxInteractions ?? Math.max(geometry.surfaces.length + 1, 1);
  const heights: number[] | null = recordHeights ? [] : null;
  const seenAutoStates = new Set<string>();
  const reflectiveSurfaceIndexes = new Set(
    geometry.surfaces.flatMap((surface, index) => (surface.interaction.type === "reflect" ? [index] : [])),
  );

  let origin: Vec3 = [input.origin[0], input.origin[1], input.origin[2]];
  let direction: Vec3 = direction0;
  let n = 1;
  let clipped = false;
  let terminalPoint: Vec3 = origin;
  let terminalSurfaceIndex = -1;
  let failureReason: TraceFailureReason | null = null;
  let reachedImagePlane = false;
  let explicitCursor = 0;
  let terminationReason: FoldedPathTraceTermination = "max-interactions";
  let loopKey: string | null = null;

  for (let interactionCount = 0; interactionCount < maxInteractions; interactionCount++) {
    /* In auto mode the image plane competes with candidate surfaces; explicit
     * paths only consider it after the requested surface sequence is exhausted. */
    const imageHit =
      !explicitOrder || explicitCursor >= explicitOrder.length
        ? intersectImagePlane(origin, direction, geometry)
        : null;
    let nextSurfaceIndex: number | null = null;
    let nextSurfaceHit: ReturnType<typeof intersectStateSurface> | null = null;

    if (explicitOrder && explicitCursor < explicitOrder.length) {
      nextSurfaceIndex = explicitOrder[explicitCursor++];
      const maxT = targetedSurfaceMaxT(geometry, nextSurfaceIndex, origin, direction, launchBoundT);
      nextSurfaceHit = intersectStateSurface({ origin, direction }, geometry, nextSurfaceIndex, {
        maxT,
        refractiveIndex: n,
      });
    } else if (
      geometry.pathPlan.mode === "auto" ||
      (explicitOrder !== null && explicitCursor >= explicitOrder.length)
    ) {
      const next = findNearestGeneralizedSurfaceHit(
        origin,
        direction,
        geometry,
        launchBoundT,
        n,
        indexAtSurface,
        terminalSurfaceIndex,
        geometry.pathPlan.mode === "auto" ? undefined : reflectiveSurfaceIndexes,
        capture.recordCandidates,
      );
      capture.autoStep(interactionCount, next.skippedCandidates);
      nextSurfaceIndex = next.surfaceIndex;
      nextSurfaceHit = next.hit;
    }

    if (
      imageHit &&
      (!nextSurfaceHit?.ok || imageHit.t <= Math.max(0, nextSurfaceHit.t - generalizedHitTolerance(nextSurfaceHit.t)))
    ) {
      terminalPoint = imageHit.point;
      reachedImagePlane = true;
      terminationReason = "image-plane";
      break;
    }

    if (nextSurfaceIndex === null || nextSurfaceHit === null) {
      if (imageHit) {
        terminalPoint = imageHit.point;
        reachedImagePlane = true;
        terminationReason = "image-plane";
      } else {
        terminationReason =
          explicitOrder && explicitCursor >= explicitOrder.length && geometry.pathPlan.mode !== "auto"
            ? "explicit-path-complete"
            : "no-next-surface";
      }
      break;
    }

    if (!nextSurfaceHit.ok) {
      // A miss is terminal even in ghost mode: prior hits still display, while
      // fabricated fallback points can create unbounded SVG paths.
      clipped = true;
      failureReason = nextSurfaceHit.failureReason;
      terminationReason = "trace-failure";
      capture.clip(nextSurfaceIndex, "intersection-failure", nextSurfaceHit.failureReason);
      break;
    }

    const surface = geometry.surfaces[nextSurfaceIndex];
    const point = nextSurfaceHit.point;
    const normal = nextSurfaceHit.normal;
    const radius = nextSurfaceHit.radius;
    terminalPoint = point;
    terminalSurfaceIndex = nextSurfaceIndex;
    if (recordHeights) {
      heights!.push(projectCoordinateToZ(point[1], point[2], direction[1], direction[2], surface.z));
    }

    const side = incidentSideFor(direction, normal);
    const sideActive = isSurfaceSideActive(surface, side);
    const aperture = evaluateAperture(geometry, surface, radius, stopSemiDiameter);
    const withinAperture = isInsideActiveAperture(aperture);

    if (!sideActive || surface.interaction.type === "block" || !withinAperture) {
      const clipReason = passiveClipReason(
        surface,
        sideActive,
        withinAperture,
        aperture.state === "outside",
        checkSemiDiameter,
      );
      if (clipReason !== null) {
        clipped = true;
        capture.clip(nextSurfaceIndex, clipReason);
        capture.hit(nextSurfaceIndex, nextSurfaceHit, direction, true, clipReason);
        terminationReason = "clipped";
        if (stopOnClip && !ghost) break;
      }
      origin = advanceOrigin(point, direction);
      continue;
    }

    capture.hit(nextSurfaceIndex, nextSurfaceHit, direction, clipped);
    if (clipped && stopOnClip && !ghost) break;

    if (surface.interaction.type === "reflect") {
      const reflected = reflectedDirection(direction, normal);
      if (reflected === null) {
        clipped = true;
        failureReason = "invalidDirection";
        terminationReason = "trace-failure";
        capture.clip(nextSurfaceIndex, "intersection-failure", failureReason);
        capture.failure(failureReason);
        if (!ghost) break;
      } else {
        direction = reflected;
      }
    } else {
      const nn = resolvedNextIndex(nextSurfaceIndex, side, surface, geometry.surfaces, indexAtSurface);
      if (nn !== n || surface.diffractive) {
        const orientedNormal = orientedRefractionNormal(normal, side);
        const interaction = interactRefractiveSurface(direction, orientedNormal, point, n, nn, surface, wavelengthNm);
        if (interaction.failure) {
          clipped = true;
          failureReason = interaction.failure.failureReason;
          terminationReason = "trace-failure";
          capture.clip(nextSurfaceIndex, interaction.failure.clipReason, failureReason);
          capture.failure(failureReason, interaction.failure.clipReason);
          if (!ghost) break;
        } else {
          direction = interaction.direction;
        }
      }
      n = nn;
    }

    capture.outgoing(direction);

    if (geometry.pathPlan.mode === "auto") {
      const stateKey = loopStateKey(nextSurfaceIndex, point, direction, n);
      if (seenAutoStates.has(stateKey)) {
        clipped = true;
        failureReason = "loopDetected";
        terminationReason = "loop-detected";
        loopKey = stateKey;
        capture.clip(nextSurfaceIndex, "loop-detected");
        capture.loop();
        break;
      }
      seenAutoStates.add(stateKey);
    }

    origin = advanceOrigin(point, direction);
  }

  if (terminationReason === "max-interactions") {
    clipped = true;
    failureReason = failureReason ?? "maxInteractions";
    capture.clip(terminalSurfaceIndex >= 0 ? terminalSurfaceIndex : null, "max-interactions");
  }

  return finalizeTraceResult<C>({
    geometry,
    input: { origin: input.origin, direction: direction0 },
    capture,
    heights,
    terminalPoint,
    terminalDirection: direction,
    terminalSurfaceIndex,
    returnVertexIndex: terminalSurfaceIndex >= 0 ? terminalSurfaceIndex : 0,
    finalMedium: n,
    clipped,
    failureReason,
    reachedImagePlane,
    terminationReason,
    loopKey,
  });
}
