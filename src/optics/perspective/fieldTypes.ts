/** Public contracts for fixed-camera perspective field sampling. */

import type { Vec3 } from "../types.js";
import type { PerspectiveChiefRayOptions, PerspectiveChiefRayResult, PerspectiveFieldStatus } from "./chiefRay.js";
import type { SensorUv } from "./fieldGeometry.js";
import type { PerspectivePupilBundle, PerspectivePupilBundleRequest } from "./pupilBundle.js";
import type { PerspectiveSensorLockSolveResult } from "./sensorTarget.js";
import type { PerspectiveTraceResult } from "./trace.js";

export type FieldSampleDomain = "scene-locked" | "sensor-locked";

/** One requested field point. Mixed request arrays retain this exact input order. */
export type PerspectiveFieldRequest =
  | { domain: "scene-locked"; sceneDirectionCamera: Vec3 }
  | { domain: "sensor-locked"; sensorUv: SensorUv };

/** Canonical field sample consumed by movement-aware analysis families. */
export interface FieldSample {
  domain: FieldSampleDomain;
  status: PerspectiveFieldStatus;
  sensorUv: SensorUv | null;
  sensorPoint: Vec3 | null;
  sceneDirectionCamera: Vec3 | null;
  sceneDirectionLens: Vec3 | null;
  zeroPoseIdealSensorIntercept: Vec3 | null;
  poseIdealSensorIntercept: Vec3 | null;
  actualSensorIntercept: Vec3 | null;
  chiefTrace: PerspectiveTraceResult | null;
  chiefSolve: PerspectiveChiefRayResult | null;
  sensorSolve: PerspectiveSensorLockSolveResult | null;
  pupilBundle: PerspectivePupilBundle | null;
}

export interface PerspectiveFieldSamplingOptions {
  /** Current intrinsic focal scale; defaults to the prepared state's first-order EFL. */
  focalLengthMm?: number;
  chiefRay?: PerspectiveChiefRayOptions;
  pupilBundle?: PerspectivePupilBundleRequest | null;
}
