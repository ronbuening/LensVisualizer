/**
 * Chief-ray solving for a physically shifted/tilted lens in a fixed camera.
 *
 * The input scene direction remains camera-locked. The solver transforms it to
 * the intrinsic lens frame, slides a parallel launch along the field-radial
 * pupil axis, and finds the launch whose exact partial trace crosses the moved
 * stop center.
 */

import { projectionValueAtZoom2 } from "../field/projection.js";
import { solveScalarRoot, type ScalarRootSolveResult } from "../math/rootSolve.js";
import { add, cross, dot, length, normalize, scale, subtract } from "../math/vector.js";
import type { Ray3, Vec3 } from "../types.js";
import type { PerspectiveTraceContext, PerspectiveTraceResult } from "./trace.js";
import type { ChromaticChannel } from "../../types/optics.js";

export type PerspectiveFieldStatus =
  | "usable"
  | "outside-projection-domain"
  | "chief-unreachable"
  | "clipped"
  | "missed-sensor";

/** Options controlling the moved-stop solve and final exact chief trace. */
export interface PerspectiveChiefRayOptions {
  channel?: ChromaticChannel;
  residualToleranceMm?: number;
  maxIterations?: number;
  bracketScanSamples?: number;
}

/** Exact chief-ray solve result shared by field and pupil sampling. */
export interface PerspectiveChiefRayResult {
  status: PerspectiveFieldStatus;
  sceneDirectionCamera: Vec3 | null;
  sceneDirectionLens: Vec3 | null;
  launchRayCamera: Ray3 | null;
  launchRayLens: Ray3 | null;
  launchOffsetMm: number | null;
  pupilRadialAxisLens: Vec3 | null;
  pupilSagittalAxisLens: Vec3 | null;
  stopPointCamera: Vec3 | null;
  stopPointLens: Vec3 | null;
  stopResidualMm: number | null;
  rootSolve: ScalarRootSolveResult | null;
  stopTrace: PerspectiveTraceResult | null;
  chiefTrace: PerspectiveTraceResult | null;
}

const DEFAULT_RESIDUAL_TOLERANCE_MM = 1e-7;

/**
 * Solve and fully trace the chief ray for an arbitrary camera-space scene direction.
 */
export function solvePerspectiveChiefRay(
  context: PerspectiveTraceContext,
  requestedSceneDirectionCamera: Vec3,
  options: PerspectiveChiefRayOptions = {},
): PerspectiveChiefRayResult {
  const sceneDirectionCamera = normalize(requestedSceneDirectionCamera);
  if (!sceneDirectionCamera) return failedChief("outside-projection-domain", null, null);
  const sceneDirectionLens = normalize(context.pose.cameraToLensDirection(sceneDirectionCamera));
  if (!sceneDirectionLens || !isPerspectiveDirectionInsideProjectionDomain(context, sceneDirectionLens)) {
    return failedChief("outside-projection-domain", sceneDirectionCamera, sceneDirectionLens);
  }

  const geometry = chiefLaunchGeometry(context, sceneDirectionLens);
  if (!geometry) return failedChief("chief-unreachable", sceneDirectionCamera, sceneDirectionLens);
  const residualToleranceMm = options.residualToleranceMm ?? DEFAULT_RESIDUAL_TOLERANCE_MM;
  let nearestStopTrace: PerspectiveTraceResult | null = null;

  const stopResidual = (offsetMm: number): number | null => {
    const launchRayLens = launchRayAtOffset(geometry, offsetMm);
    const launchRayCamera = context.pose.lensToCameraRay(launchRayLens);
    const trace = context.traceRay(launchRayCamera, {
      channel: options.channel,
      stopAt: geometry.stopIndex,
      projectToSensor: false,
      checkSemiDiameter: false,
      stopOnClip: false,
      launchBoundT: geometry.launchBoundT,
      directionNormalized: true,
    });
    if (trace.localTrace.status === "failed" || !finitePoint(trace.cameraReturnPoint)) return null;
    nearestStopTrace = trace;
    return dot(subtract(trace.cameraReturnPoint, geometry.stopCenterCamera), geometry.pupilRadialAxisCamera);
  };

  const rootSolve = solveScalarRoot(stopResidual, {
    initialGuess: 0,
    initialHalfWidth: geometry.initialHalfWidth,
    min: -geometry.maxOffset,
    max: geometry.maxOffset,
    residualTolerance: residualToleranceMm,
    intervalTolerance: 1e-9,
    maxIterations: options.maxIterations ?? 30,
    scanSamples: options.bracketScanSamples ?? 96,
    maxExpansions: 4,
  });
  if (rootSolve.status !== "converged" || rootSolve.root === null) {
    return {
      ...failedChief("chief-unreachable", sceneDirectionCamera, sceneDirectionLens),
      rootSolve,
      stopTrace: nearestStopTrace,
    };
  }

  const launchRayLens = launchRayAtOffset(geometry, rootSolve.root);
  const launchRayCamera = context.pose.lensToCameraRay(launchRayLens);
  const stopTrace = context.traceRay(launchRayCamera, {
    channel: options.channel,
    stopAt: geometry.stopIndex,
    projectToSensor: false,
    checkSemiDiameter: false,
    stopOnClip: false,
    launchBoundT: geometry.launchBoundT,
    directionNormalized: true,
  });
  const stopPointLens = finitePoint(stopTrace.localReturnPoint) ? stopTrace.localReturnPoint : null;
  const stopPointCamera = stopPointLens ? context.pose.lensToCameraPoint(stopPointLens) : null;
  if (!stopPointLens || stopTrace.localTrace.status === "failed") {
    return {
      ...failedChief("chief-unreachable", sceneDirectionCamera, sceneDirectionLens),
      launchRayCamera,
      launchRayLens,
      launchOffsetMm: rootSolve.root,
      pupilRadialAxisLens: geometry.pupilRadialAxisLens,
      pupilSagittalAxisLens: geometry.pupilSagittalAxisLens,
      rootSolve,
      stopTrace,
    };
  }

  const chiefTrace = context.traceRay(launchRayCamera, {
    channel: options.channel,
    projectToSensor: true,
    checkSemiDiameter: true,
    stopSemiDiameter: context.state.lens.stop.physicalSemiDiameter,
    stopOnClip: true,
    launchBoundT: geometry.launchBoundT,
    directionNormalized: true,
  });
  const status = perspectiveTraceStatus(chiefTrace);

  return {
    status,
    sceneDirectionCamera,
    sceneDirectionLens,
    launchRayCamera,
    launchRayLens,
    launchOffsetMm: rootSolve.root,
    pupilRadialAxisLens: geometry.pupilRadialAxisLens,
    pupilSagittalAxisLens: geometry.pupilSagittalAxisLens,
    stopPointCamera,
    stopPointLens,
    stopResidualMm: stopPointCamera ? length(subtract(stopPointCamera, geometry.stopCenterCamera)) : null,
    rootSolve,
    stopTrace,
    chiefTrace,
  };
}

/** Map an exact perspective trace into the stable field-sampling status set. */
export function perspectiveTraceStatus(trace: PerspectiveTraceResult): PerspectiveFieldStatus {
  if (trace.localTrace.status === "clipped") return "clipped";
  if (trace.localTrace.status !== "ok" || !trace.reachedSensor || !trace.sensorIntersection) return "missed-sensor";
  return "usable";
}

interface ChiefLaunchGeometry {
  stopIndex: number;
  stopCenterLens: Vec3;
  stopCenterCamera: Vec3;
  baseOriginLens: Vec3;
  sceneDirectionLens: Vec3;
  pupilRadialAxisLens: Vec3;
  pupilRadialAxisCamera: Vec3;
  pupilSagittalAxisLens: Vec3;
  launchBoundT: number;
  initialHalfWidth: number;
  maxOffset: number;
}

function chiefLaunchGeometry(context: PerspectiveTraceContext, sceneDirectionLens: Vec3): ChiefLaunchGeometry | null {
  if (sceneDirectionLens[2] <= 1e-6) return null;
  const stopIndex = context.state.lens.stop.surfaceIndex;
  const stopZ = context.state.z[stopIndex];
  const firstZ = context.state.z[0];
  if (!Number.isFinite(stopZ) || !Number.isFinite(firstZ)) return null;

  const pupilRadialAxisLens = radialPupilAxis(sceneDirectionLens);
  const pupilSagittalAxisLens = pupilRadialAxisLens ? normalize(cross(pupilRadialAxisLens, sceneDirectionLens)) : null;
  if (!pupilRadialAxisLens || !pupilSagittalAxisLens) return null;

  const maxSurfaceSd = context.state.surfaces.reduce((max, surface) => Math.max(max, surface.sd), 0);
  const objectwardMargin = Math.max(2 * maxSurfaceSd, 10);
  const launchDistance = Math.max(
    context.state.lens.runtime.rayLead,
    (stopZ - firstZ + objectwardMargin) / sceneDirectionLens[2],
  );
  if (!Number.isFinite(launchDistance) || launchDistance <= 0) return null;

  const stopCenterLens: Vec3 = [0, 0, stopZ];
  const stopCenterCamera = context.pose.lensToCameraPoint(stopCenterLens);
  const pupilRadialAxisCamera = context.pose.lensToCameraDirection(pupilRadialAxisLens);
  const baseOriginLens = subtract(stopCenterLens, scale(sceneDirectionLens, launchDistance));
  const initialHalfWidth = Math.max(context.state.lens.stop.physicalSemiDiameter, 0.5);
  const maxOffset = Math.max(8 * initialHalfWidth, 4 * maxSurfaceSd, 10);
  return {
    stopIndex,
    stopCenterLens,
    stopCenterCamera,
    baseOriginLens,
    sceneDirectionLens,
    pupilRadialAxisLens,
    pupilRadialAxisCamera,
    pupilSagittalAxisLens,
    launchBoundT: launchDistance + 4 * maxSurfaceSd,
    initialHalfWidth,
    maxOffset,
  };
}

function launchRayAtOffset(geometry: ChiefLaunchGeometry, offsetMm: number): Ray3 {
  return {
    origin: add(geometry.baseOriginLens, scale(geometry.pupilRadialAxisLens, offsetMm)),
    direction: geometry.sceneDirectionLens,
  };
}

function radialPupilAxis(direction: Vec3): Vec3 | null {
  const transverse = Math.hypot(direction[0], direction[1]);
  if (transverse <= 1e-12) return [0, 1, 0];
  const imageRadialX = -direction[0] / transverse;
  const imageRadialY = -direction[1] / transverse;
  return normalize([imageRadialX * direction[2], imageRadialY * direction[2], transverse]);
}

/** Test a normalized camera- or lens-frame direction against the authored projection domain. */
export function isPerspectiveDirectionInsideProjectionDomain(
  context: PerspectiveTraceContext,
  directionLens: Vec3,
): boolean {
  const fieldAngleDeg = (Math.atan2(Math.hypot(directionLens[0], directionLens[1]), directionLens[2]) * 180) / Math.PI;
  const projection = context.state.lens.projection.config;
  const zoomT = context.state.zoomT;
  if (projection.kind === "rectilinear") {
    const authoredLimit =
      projection.maxTraceFieldDeg ?? (typeof projection.fullFieldDeg === "number" ? projection.fullFieldDeg / 2 : 89);
    return fieldAngleDeg < Math.min(89, authoredLimit + 1e-9);
  }

  const fullField = projectionValueAtZoom2(projection.fullFieldDeg, zoomT);
  const maxTraceField = projectionValueAtZoom2(projection.maxTraceFieldDeg, zoomT);
  const limit = Math.min(fullField !== undefined ? fullField / 2 : 175, maxTraceField ?? 175, 175);
  return Number.isFinite(fieldAngleDeg) && fieldAngleDeg <= limit + 1e-9;
}

function finitePoint(point: Vec3): boolean {
  return point.every(Number.isFinite);
}

function failedChief(
  status: Extract<PerspectiveFieldStatus, "outside-projection-domain" | "chief-unreachable">,
  sceneDirectionCamera: Vec3 | null,
  sceneDirectionLens: Vec3 | null,
): PerspectiveChiefRayResult {
  return {
    status,
    sceneDirectionCamera,
    sceneDirectionLens,
    launchRayCamera: null,
    launchRayLens: null,
    launchOffsetMm: null,
    pupilRadialAxisLens: null,
    pupilSagittalAxisLens: null,
    stopPointCamera: null,
    stopPointLens: null,
    stopResidualMm: null,
    rootSolve: null,
    stopTrace: null,
    chiefTrace: null,
  };
}
