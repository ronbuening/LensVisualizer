import type {
  FoldedPathAutoStepDiagnostics,
  FoldedPathClipEvent,
  FoldedPathTraceTermination,
} from "../../types/optics.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { evaluateAperture, isInsideActiveAperture } from "./aperture.js";
import { pushClipEvent, surfaceLabel } from "./foldedDiagnostics.js";
import {
  advanceOrigin,
  incidentSideFor,
  isSurfaceSideActive,
  orientedRefractionNormal,
  reflectedDirection,
  refractedDirection,
  resolvedNextIndex,
} from "./interactions.js";
import {
  fallbackSurfacePoint,
  findNearestGeneralizedSurfaceHit,
  generalizedHitTolerance,
  intersectImagePlane,
  intersectStateSurface,
  loopStateKey,
  targetedSurfaceMaxT,
} from "./pathPlanner.js";
import type { EngineTraceResult, TraceFailureReason, TraceHit, TraceOptions } from "./types.js";
import { finalizeTraceResult, normalizeTraceDirection, projectCoordinateToZ } from "./utils.js";

export function shouldUseGeneralizedTrace(state: PreparedOpticalState, stopAt: number | undefined): boolean {
  if (stopAt !== undefined) return false;
  return (
    state.lens.flags.isFoldedOptics ||
    Boolean(state.lens.opticalPath.surfaceOrder?.length) ||
    state.lens.opticalPath.mode === "auto" ||
    state.surfaces.some((surface) => surface.interaction.type !== "refract")
  );
}

export function traceGeneralized(
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
    return finalizeTraceResult({
      state,
      input,
      hits: [],
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
      clipEvents: [],
      autoSteps: [],
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
  } = options;

  const explicitOrder = state.lens.opticalPath.surfaceOrder ?? null;
  const maxInteractions = state.lens.opticalPath.maxInteractions ?? Math.max(state.surfaces.length + 1, 1);
  const heights: number[] | null = recordHeights ? [] : null;
  const hits: TraceHit[] = [];
  const clipEvents: FoldedPathClipEvent[] = [];
  const autoSteps: FoldedPathAutoStepDiagnostics[] = [];
  const seenAutoStates = new Set<string>();
  const reflectiveSurfaceIndexes = new Set(
    state.surfaces.flatMap((surface, index) => (surface.interaction.type === "reflect" ? [index] : [])),
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
    const imageHit =
      !explicitOrder || explicitCursor >= explicitOrder.length ? intersectImagePlane(origin, direction, state) : null;
    let nextSurfaceIndex: number | null = null;
    let nextSurfaceHit: ReturnType<typeof intersectStateSurface> | null = null;

    if (explicitOrder && explicitCursor < explicitOrder.length) {
      nextSurfaceIndex = explicitOrder[explicitCursor++];
      const maxT = targetedSurfaceMaxT(state, nextSurfaceIndex, origin, direction, launchBoundT);
      nextSurfaceHit = intersectStateSurface({ origin, direction }, state, nextSurfaceIndex, {
        maxT,
        refractiveIndex: n,
      });
    } else if (
      state.lens.opticalPath.mode === "auto" ||
      (explicitOrder !== null && explicitCursor >= explicitOrder.length)
    ) {
      const next = findNearestGeneralizedSurfaceHit(
        origin,
        direction,
        state,
        launchBoundT,
        n,
        indexAtSurface,
        terminalSurfaceIndex,
        state.lens.opticalPath.mode === "auto" ? undefined : reflectiveSurfaceIndexes,
      );
      autoSteps.push({ step: interactionCount, skippedCandidates: next.skippedCandidates });
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
          explicitOrder && explicitCursor >= explicitOrder.length && state.lens.opticalPath.mode !== "auto"
            ? "explicit-path-complete"
            : "no-next-surface";
      }
      break;
    }

    if (!nextSurfaceHit.ok) {
      clipped = true;
      failureReason = nextSurfaceHit.failureReason;
      terminationReason = "trace-failure";
      pushClipEvent(clipEvents, state, nextSurfaceIndex, "intersection-failure", nextSurfaceHit.failureReason);
      if (!ghost) break;

      const fallback = fallbackSurfacePoint(
        origin,
        direction,
        state,
        nextSurfaceIndex,
        targetedSurfaceMaxT(state, nextSurfaceIndex, origin, direction, launchBoundT),
      );
      if (fallback === null) continue;
      const radius = Math.hypot(fallback.point[0], fallback.point[1]);
      hits.push({
        surfaceIndex: nextSurfaceIndex,
        surfaceLabel: surfaceLabel(state, nextSurfaceIndex),
        point: fallback.point,
        normal: fallback.normal,
        incidentDirection: [direction[0], direction[1], direction[2]],
        radius,
        clipped: true,
        fallback: true,
        failureReason: nextSurfaceHit.failureReason,
        clipReason: "intersection-failure",
      });
      terminalPoint = fallback.point;
      terminalSurfaceIndex = nextSurfaceIndex;
      if (stopOnClip) break;
      continue;
    }

    const surface = state.surfaces[nextSurfaceIndex];
    const point = nextSurfaceHit.point;
    const normal = nextSurfaceHit.normal;
    const radius = nextSurfaceHit.radius;
    const incidentDirection: Vec3 = [direction[0], direction[1], direction[2]];
    terminalPoint = point;
    terminalSurfaceIndex = nextSurfaceIndex;
    if (recordHeights) {
      heights!.push(projectCoordinateToZ(point[1], point[2], direction[1], direction[2], surface.z));
    }

    const side = incidentSideFor(direction, normal);
    const sideActive = isSurfaceSideActive(surface, side);
    const aperture = evaluateAperture(state, surface, radius, stopSemiDiameter);
    const withinAperture = isInsideActiveAperture(aperture);

    if (!sideActive) {
      const inactiveClipped = surface.interaction.inactiveSide === "block" && withinAperture;
      if (inactiveClipped) {
        clipped = true;
        pushClipEvent(clipEvents, state, nextSurfaceIndex, "inactive-side-block");
        hits.push({
          surfaceIndex: nextSurfaceIndex,
          surfaceLabel: surfaceLabel(state, nextSurfaceIndex),
          point,
          normal,
          incidentDirection,
          radius,
          clipped: true,
          fallback: false,
          failureReason: null,
          clipReason: "inactive-side-block",
        });
        terminationReason = "clipped";
        if (stopOnClip && !ghost) break;
      }
      origin = advanceOrigin(point, direction);
      continue;
    }

    if (surface.interaction.type === "block") {
      if (withinAperture) {
        clipped = true;
        pushClipEvent(clipEvents, state, nextSurfaceIndex, "block-surface");
        hits.push({
          surfaceIndex: nextSurfaceIndex,
          surfaceLabel: surfaceLabel(state, nextSurfaceIndex),
          point,
          normal,
          incidentDirection,
          radius,
          clipped: true,
          fallback: false,
          failureReason: null,
          clipReason: "block-surface",
        });
        terminationReason = "clipped";
        if (stopOnClip && !ghost) break;
      }
      origin = advanceOrigin(point, direction);
      continue;
    }

    if (!withinAperture) {
      const apertureClipped = checkSemiDiameter && aperture.state === "outside";
      if (apertureClipped) {
        clipped = true;
        pushClipEvent(clipEvents, state, nextSurfaceIndex, "semi-diameter");
        hits.push({
          surfaceIndex: nextSurfaceIndex,
          surfaceLabel: surfaceLabel(state, nextSurfaceIndex),
          point,
          normal,
          incidentDirection,
          radius,
          clipped: true,
          fallback: false,
          failureReason: null,
          clipReason: "semi-diameter",
        });
        terminationReason = "clipped";
        if (stopOnClip && !ghost) break;
      }
      origin = advanceOrigin(point, direction);
      continue;
    }

    hits.push({
      surfaceIndex: nextSurfaceIndex,
      surfaceLabel: surfaceLabel(state, nextSurfaceIndex),
      point,
      normal,
      incidentDirection,
      radius,
      clipped,
      fallback: false,
      failureReason: null,
    });
    if (clipped && stopOnClip && !ghost) break;

    if (surface.interaction.type === "reflect") {
      const reflected = reflectedDirection(direction, normal);
      if (reflected === null) {
        clipped = true;
        failureReason = "invalidDirection";
        terminationReason = "trace-failure";
        pushClipEvent(clipEvents, state, nextSurfaceIndex, "intersection-failure", failureReason);
        hits[hits.length - 1] = { ...hits[hits.length - 1], clipped: true, failureReason };
        if (!ghost) break;
      } else {
        direction = reflected;
      }
    } else {
      const nn = resolvedNextIndex(nextSurfaceIndex, side, surface, state.surfaces, indexAtSurface);
      if (nn !== n) {
        const refracted = refractedDirection(direction, orientedRefractionNormal(normal, side), n, nn);
        if (refracted === null) {
          clipped = true;
          failureReason = "totalInternalReflection";
          terminationReason = "trace-failure";
          pushClipEvent(clipEvents, state, nextSurfaceIndex, "total-internal-reflection", failureReason);
          hits[hits.length - 1] = {
            ...hits[hits.length - 1],
            clipped: true,
            failureReason,
            clipReason: "total-internal-reflection",
          };
          if (!ghost) break;
        } else {
          direction = refracted;
        }
      }
      n = nn;
    }

    hits[hits.length - 1] = {
      ...hits[hits.length - 1],
      outgoingDirection: [direction[0], direction[1], direction[2]],
    };

    if (state.lens.opticalPath.mode === "auto") {
      const stateKey = loopStateKey(nextSurfaceIndex, point, direction, n);
      if (seenAutoStates.has(stateKey)) {
        clipped = true;
        failureReason = "loopDetected";
        terminationReason = "loop-detected";
        loopKey = stateKey;
        pushClipEvent(clipEvents, state, nextSurfaceIndex, "loop-detected");
        hits[hits.length - 1] = { ...hits[hits.length - 1], clipped: true, clipReason: "loop-detected" };
        break;
      }
      seenAutoStates.add(stateKey);
    }

    origin = advanceOrigin(point, direction);
  }

  if (terminationReason === "max-interactions") {
    clipped = true;
    failureReason = failureReason ?? "maxInteractions";
    pushClipEvent(clipEvents, state, terminalSurfaceIndex >= 0 ? terminalSurfaceIndex : null, "max-interactions");
  }

  return finalizeTraceResult({
    state,
    input: { origin: input.origin, direction: direction0 },
    hits,
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
    clipEvents,
    autoSteps,
    loopKey,
  });
}
