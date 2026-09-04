/**
 * Shared perspective-control field sampling in a fixed camera/sensor frame.
 *
 * This public orchestration layer keeps failed samples in request order. Focused
 * modules own projection geometry, actual sensor-target solving, and pupil fans.
 */

import { normalize } from "../math/vector.js";
import type { Vec3 } from "../types.js";
import {
  solvePerspectiveChiefRay,
  type PerspectiveChiefRayOptions,
  type PerspectiveChiefRayResult,
} from "./chiefRay.js";
import {
  createFieldPlaneFrame,
  directionForIdealCoordinates,
  finiteSensorUv,
  idealPointForDirection,
  invertSensorPointToLensDirection,
  paraxialExitPupilCenterLens,
  perspectiveProjectionReference,
  pointForSensorUv,
  poseIdealPointForDirection,
  requirePerspectiveImageFormatMetadata,
  resolvePerspectiveFocalLength,
  sensorUvForPoint,
  sensorUvInsideFormat,
  type FieldPlaneFrame,
  type PerspectiveProjectionReference,
  type SensorUv,
} from "./fieldGeometry.js";
import { boundedFieldStatus, unavailableFieldSample } from "./fieldResults.js";
import type {
  FieldSample,
  FieldSampleDomain,
  PerspectiveFieldRequest,
  PerspectiveFieldSamplingOptions,
} from "./fieldTypes.js";
import { pupilBundleForRequest, type PerspectivePupilBundleRequest } from "./pupilBundle.js";
import { solveChiefToSensorPoint, type PerspectiveSensorLockSolveResult } from "./sensorTarget.js";
import type { PerspectiveTraceContext } from "./trace.js";

export { PerspectiveFieldSamplingError } from "./fieldGeometry.js";
export type { SensorUv } from "./fieldGeometry.js";
export {
  sampleCircularPupilBundle,
  sampleMeridionalPupilBundle,
  type PerspectivePupilBundle,
  type PerspectivePupilBundleRequest,
  type PerspectivePupilPoint,
  type PerspectivePupilRaySample,
} from "./pupilBundle.js";
export type { PerspectiveSensorLockSolveResult } from "./sensorTarget.js";
export type { PerspectiveFieldStatus } from "./chiefRay.js";
export type {
  FieldSample,
  FieldSampleDomain,
  PerspectiveFieldRequest,
  PerspectiveFieldSamplingOptions,
} from "./fieldTypes.js";

/** Sample one or more scene- or sensor-locked requests without reordering failures. */
export function samplePerspectiveFields(
  context: PerspectiveTraceContext,
  requests: readonly PerspectiveFieldRequest[],
  options: PerspectiveFieldSamplingOptions = {},
): FieldSample[] {
  const format = requirePerspectiveImageFormatMetadata(context);
  const projection = perspectiveProjectionReference(
    context,
    resolvePerspectiveFocalLength(context, options.focalLengthMm),
  );
  const sensorFrame = createFieldPlaneFrame(context.sensorPlane, format, context.sensorBasis);
  const intrinsicFrame = createFieldPlaneFrame(context.state.imagePlane, format);
  const exitPupilCenterLens = paraxialExitPupilCenterLens(context);

  return requests.map((request) =>
    request.domain === "scene-locked"
      ? sampleSceneLocked(
          context,
          request.sceneDirectionCamera,
          sensorFrame,
          intrinsicFrame,
          exitPupilCenterLens,
          projection,
          options,
        )
      : sampleSensorLocked(
          context,
          request.sensorUv,
          sensorFrame,
          intrinsicFrame,
          exitPupilCenterLens,
          projection,
          options,
        ),
  );
}

/** Convenience wrapper for ordered arbitrary camera-space scene directions. */
export function sampleSceneLockedFields(
  context: PerspectiveTraceContext,
  sceneDirectionsCamera: readonly Vec3[],
  options: PerspectiveFieldSamplingOptions = {},
): FieldSample[] {
  return samplePerspectiveFields(
    context,
    sceneDirectionsCamera.map((sceneDirectionCamera) => ({ domain: "scene-locked", sceneDirectionCamera })),
    options,
  );
}

/** Convenience wrapper for ordered fixed-sensor normalized coordinates. */
export function sampleSensorLockedFields(
  context: PerspectiveTraceContext,
  sensorUvs: readonly SensorUv[],
  options: PerspectiveFieldSamplingOptions = {},
): FieldSample[] {
  return samplePerspectiveFields(
    context,
    sensorUvs.map((sensorUv) => ({ domain: "sensor-locked", sensorUv })),
    options,
  );
}

/** Convert a fixed-sensor UV into its zero-pose analytic camera scene direction. */
export function zeroPoseSceneDirectionForSensorUv(
  context: PerspectiveTraceContext,
  sensorUv: SensorUv,
  focalLengthMm?: number,
): Vec3 | null {
  if (!finiteSensorUv(sensorUv) || !sensorUvInsideFormat(sensorUv)) return null;
  const format = requirePerspectiveImageFormatMetadata(context);
  const projection = perspectiveProjectionReference(context, resolvePerspectiveFocalLength(context, focalLengthMm));
  return directionForIdealCoordinates(
    sensorUv.u * (format.widthMm / 2),
    sensorUv.v * (format.heightMm / 2),
    projection,
  );
}

function sampleSceneLocked(
  context: PerspectiveTraceContext,
  requestedDirection: Vec3,
  sensorFrame: FieldPlaneFrame,
  intrinsicFrame: FieldPlaneFrame,
  exitPupilCenterLens: Vec3,
  projection: PerspectiveProjectionReference,
  options: PerspectiveFieldSamplingOptions,
): FieldSample {
  const sceneDirectionCamera = normalize(requestedDirection);
  const sceneDirectionLens = sceneDirectionCamera
    ? normalize(context.pose.cameraToLensDirection(sceneDirectionCamera))
    : null;
  const zeroPoseIdealSensorIntercept = sceneDirectionCamera
    ? idealPointForDirection(context, sceneDirectionCamera, sensorFrame, projection)
    : null;
  const sensorUv = zeroPoseIdealSensorIntercept ? sensorUvForPoint(sensorFrame, zeroPoseIdealSensorIntercept) : null;

  if (!sceneDirectionCamera || !sceneDirectionLens || !zeroPoseIdealSensorIntercept || !sensorUv) {
    return unavailableFieldSample({
      domain: "scene-locked",
      status: "outside-projection-domain",
      sensorUv,
      sensorPoint: zeroPoseIdealSensorIntercept,
      sceneDirectionCamera,
      sceneDirectionLens,
      zeroPoseIdealSensorIntercept,
    });
  }

  const poseIdealSensorIntercept = poseIdealPointForDirection(
    context,
    sceneDirectionLens,
    intrinsicFrame,
    exitPupilCenterLens,
    projection,
  );
  return sampleFromChief({
    context,
    sensorFrame,
    domain: "scene-locked",
    sensorUv,
    sensorPoint: zeroPoseIdealSensorIntercept,
    zeroPoseIdealSensorIntercept,
    poseIdealSensorIntercept,
    chief: solvePerspectiveChiefRay(context, sceneDirectionCamera, chiefOptionsForSampling(options)),
    pupilRequest: options.pupilBundle,
  });
}

function sampleSensorLocked(
  context: PerspectiveTraceContext,
  requestedUv: SensorUv,
  sensorFrame: FieldPlaneFrame,
  intrinsicFrame: FieldPlaneFrame,
  exitPupilCenterLens: Vec3,
  projection: PerspectiveProjectionReference,
  options: PerspectiveFieldSamplingOptions,
): FieldSample {
  const sensorUv = finiteSensorUv(requestedUv) ? { ...requestedUv } : null;
  const sensorPoint = sensorUv ? pointForSensorUv(sensorFrame, sensorUv) : null;
  if (!sensorUv || !sensorPoint || !sensorUvInsideFormat(sensorUv)) {
    return unavailableFieldSample({
      domain: "sensor-locked",
      status: "outside-projection-domain",
      sensorUv,
      sensorPoint,
    });
  }

  const seedDirectionLens = invertSensorPointToLensDirection(
    context,
    sensorPoint,
    intrinsicFrame,
    exitPupilCenterLens,
    projection,
  );
  const seedDirectionCamera = seedDirectionLens
    ? normalize(context.pose.lensToCameraDirection(seedDirectionLens))
    : null;
  if (!seedDirectionCamera || !seedDirectionLens) {
    return unavailableFieldSample({
      domain: "sensor-locked",
      status: "outside-projection-domain",
      sensorUv,
      sensorPoint,
      sceneDirectionCamera: seedDirectionCamera,
      sceneDirectionLens: seedDirectionLens,
    });
  }

  const solved = solveChiefToSensorPoint(
    context,
    sensorPoint,
    sensorFrame,
    intrinsicFrame,
    projection,
    seedDirectionLens,
    chiefOptionsForSampling(options),
  );
  if (!solved.chief) {
    return unavailableFieldSample({
      domain: "sensor-locked",
      status: "chief-unreachable",
      sensorUv,
      sensorPoint,
      sceneDirectionCamera: seedDirectionCamera,
      sceneDirectionLens: seedDirectionLens,
      sensorSolve: solved.sensorSolve,
    });
  }

  const zeroPoseIdealSensorIntercept = solved.chief.sceneDirectionCamera
    ? idealPointForDirection(context, solved.chief.sceneDirectionCamera, sensorFrame, projection)
    : null;
  const poseIdealSensorIntercept = solved.chief.sceneDirectionLens
    ? poseIdealPointForDirection(
        context,
        solved.chief.sceneDirectionLens,
        intrinsicFrame,
        exitPupilCenterLens,
        projection,
      )
    : null;
  return sampleFromChief({
    context,
    sensorFrame,
    domain: "sensor-locked",
    sensorUv,
    sensorPoint,
    zeroPoseIdealSensorIntercept,
    poseIdealSensorIntercept,
    chief: solved.chief,
    pupilRequest: options.pupilBundle,
    sensorSolve: solved.sensorSolve,
  });
}

interface SampleFromChiefParams {
  context: PerspectiveTraceContext;
  sensorFrame: FieldPlaneFrame;
  domain: FieldSampleDomain;
  sensorUv: SensorUv;
  sensorPoint: Vec3;
  zeroPoseIdealSensorIntercept: Vec3 | null;
  poseIdealSensorIntercept: Vec3 | null;
  chief: PerspectiveChiefRayResult;
  pupilRequest: PerspectivePupilBundleRequest | null | undefined;
  sensorSolve?: PerspectiveSensorLockSolveResult | null;
}

function sampleFromChief({
  context,
  sensorFrame,
  domain,
  sensorUv,
  sensorPoint,
  zeroPoseIdealSensorIntercept,
  poseIdealSensorIntercept,
  chief,
  pupilRequest,
  sensorSolve = null,
}: SampleFromChiefParams): FieldSample {
  const sensorSolveConverged = sensorSolve === null || sensorSolve.status === "converged";
  const pupilBundle = sensorSolveConverged && pupilRequest ? pupilBundleForRequest(context, chief, pupilRequest) : null;
  const actualSensorIntercept = chief.chiefTrace?.sensorIntersection?.point ?? null;
  const status = sensorSolveConverged
    ? boundedFieldStatus(domain, chief.status, sensorFrame, poseIdealSensorIntercept, actualSensorIntercept)
    : "chief-unreachable";
  return {
    domain,
    status,
    sensorUv,
    sensorPoint,
    sceneDirectionCamera: chief.sceneDirectionCamera,
    sceneDirectionLens: chief.sceneDirectionLens,
    zeroPoseIdealSensorIntercept,
    poseIdealSensorIntercept,
    actualSensorIntercept,
    chiefTrace: chief.chiefTrace,
    chiefSolve: chief,
    sensorSolve,
    pupilBundle,
  };
}

function chiefOptionsForSampling(options: PerspectiveFieldSamplingOptions): PerspectiveChiefRayOptions | undefined {
  const channel = options.pupilBundle?.channel ?? options.chiefRay?.channel;
  return channel ? { ...options.chiefRay, channel } : options.chiefRay;
}
