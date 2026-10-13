/** Status/bounds classification and canonical unavailable field records. */

import type { PerspectiveFieldStatus } from "./chiefRay.js";
import { pointInsideSensor, type FieldPlaneFrame } from "./fieldGeometry.js";
import type { FieldSample, FieldSampleDomain } from "./fieldTypes.js";
import type { Vec3 } from "../types.js";

export function boundedFieldStatus(
  domain: FieldSampleDomain,
  status: PerspectiveFieldStatus,
  sensorFrame: FieldPlaneFrame,
  poseIdealSensorIntercept: Vec3 | null,
  actualSensorIntercept: Vec3 | null,
): PerspectiveFieldStatus {
  if (status !== "usable") return status;
  if (!pointInsideSensor(sensorFrame, actualSensorIntercept)) return "missed-sensor";
  return domain === "sensor-locked" || pointInsideSensor(sensorFrame, poseIdealSensorIntercept)
    ? "usable"
    : "missed-sensor";
}

export function unavailableFieldSample(
  partial: Pick<FieldSample, "domain" | "status"> & Partial<Omit<FieldSample, "domain" | "status">>,
): FieldSample {
  return {
    domain: partial.domain,
    status: partial.status,
    sensorUv: partial.sensorUv ?? null,
    sensorPoint: partial.sensorPoint ?? null,
    sceneDirectionCamera: partial.sceneDirectionCamera ?? null,
    sceneDirectionLens: partial.sceneDirectionLens ?? null,
    zeroPoseIdealSensorIntercept: partial.zeroPoseIdealSensorIntercept ?? null,
    poseIdealSensorIntercept: partial.poseIdealSensorIntercept ?? null,
    actualSensorIntercept: partial.actualSensorIntercept ?? null,
    chiefTrace: partial.chiefTrace ?? null,
    chiefSolve: partial.chiefSolve ?? null,
    sensorSolve: partial.sensorSolve ?? null,
    pupilBundle: partial.pupilBundle ?? null,
  };
}
