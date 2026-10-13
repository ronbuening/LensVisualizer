/** Fixed-sensor image-space ray reductions shared by perspective analyses. */

import { dot, subtract } from "../../math/vector.js";
import { entrancePupilFromStop2, paraxialPupilGeometry2 } from "../../first-order/pupils.js";
import type { Vec3 } from "../../types.js";
import type { PerspectiveFieldStatus, PerspectivePupilRaySample, SensorUv } from "../fieldSampling.js";
import type { PerspectiveTraceContext, PerspectiveTraceResult } from "../trace.js";
import { sensorPointForUv } from "./shared.js";

/** A traced pupil ray expressed as an affine function of sensor-normal displacement. */
export interface PerspectiveAffineSensorRay {
  sourceIndex: number;
  pupilUv: SensorUv;
  status: Extract<PerspectiveFieldStatus, "usable" | "clipped" | "missed-sensor">;
  sensorPoint: Vec3 | null;
  sensorUMm: number | null;
  sensorVMm: number | null;
  /** Change in sensor-u intercept per millimeter along the canonical sensor normal. */
  slopeUPerNormal: number | null;
  /** Change in sensor-v intercept per millimeter along the canonical sensor normal. */
  slopeVPerNormal: number | null;
  mechanicalWeight: number;
  photometricWeight: number;
  transmission: number;
  trace: PerspectiveTraceResult;
}

/** One normalized direction in fixed-sensor u/v coordinates. */
export interface SensorPlaneAxis {
  u: number;
  v: number;
}

/** Field-radial (tangential) and perpendicular (sagittal) sensor axes. */
export interface PerspectiveFieldSensorAxes {
  tangential: SensorPlaneAxis;
  sagittal: SensorPlaneAxis;
}

/** Weighted spot statistics on one plane parallel to the fixed sensor. */
export interface PerspectiveSensorSpotSummary {
  normalOffsetMm: number;
  usedRayCount: number;
  usedWeight: number;
  centroidUMm: number;
  centroidVMm: number;
  rmsRadiusMm: number;
  maxRadiusMm: number;
  spanUMm: number;
  spanVMm: number;
}

/** Least-squares focus plane measured from the fixed sensor along its canonical normal. */
export interface PerspectiveSensorBestFocus {
  /** Positive lies in the canonical sensor-normal direction; negative lies lensward. */
  normalOffsetMm: number;
  usedRayCount: number;
  usedWeight: number;
  centroidUMm: number;
  centroidVMm: number;
  rmsMm: number;
  maxRadiusMm: number;
}

/** Resolve the current entrance-pupil radius shared by sensor-locked bundle analyses. */
export function resolvePerspectivePupilSemiDiameter(
  context: PerspectiveTraceContext,
  stopSemiDiameterMm: number,
  override?: number,
): number {
  assertPositiveFinite(stopSemiDiameterMm, "stopSemiDiameterMm");
  const pupilSemiDiameterMm =
    override ?? entrancePupilFromStop2(stopSemiDiameterMm, paraxialPupilGeometry2(context.state)).epSD;
  assertPositiveFinite(pupilSemiDiameterMm, "pupilSemiDiameterMm");
  return pupilSemiDiameterMm;
}

/** Resolve one pupil sample into affine sensor-plane coordinates without dropping failures. */
export function affineSensorRayFromPupilSample(
  context: PerspectiveTraceContext,
  sample: PerspectivePupilRaySample,
  sourceIndex: number,
  referencePoint: Vec3 = context.sensorPlane.point,
): PerspectiveAffineSensorRay {
  const mechanicalWeight = finiteNonNegative(sample.weight);
  const transmission = Math.min(1, finiteNonNegative(sample.transmission));
  const direction = sample.trace.cameraTrace.terminalDirection;
  const denominator = dot(context.sensorBasis.normal, direction);
  const sensorPoint = sample.sensorIntercept;
  const usableGeometry =
    sample.status === "usable" && sensorPoint !== null && Number.isFinite(denominator) && Math.abs(denominator) > 1e-12;
  const offset = usableGeometry ? subtract(sensorPoint, referencePoint) : null;
  const sensorUMm = offset ? dot(offset, context.sensorBasis.u) : null;
  const sensorVMm = offset ? dot(offset, context.sensorBasis.v) : null;
  const slopeUPerNormal = usableGeometry ? dot(context.sensorBasis.u, direction) / denominator : null;
  const slopeVPerNormal = usableGeometry ? dot(context.sensorBasis.v, direction) / denominator : null;

  return {
    sourceIndex,
    pupilUv: { ...sample.pupilUv },
    status: sample.status,
    sensorPoint,
    sensorUMm: finiteOrNull(sensorUMm),
    sensorVMm: finiteOrNull(sensorVMm),
    slopeUPerNormal: finiteOrNull(slopeUPerNormal),
    slopeVPerNormal: finiteOrNull(slopeVPerNormal),
    mechanicalWeight,
    photometricWeight: mechanicalWeight * transmission,
    transmission,
    trace: sample.trace,
  };
}

/** Build retained affine rays for every member of a canonical pupil bundle. */
export function affineSensorRaysFromField(
  context: PerspectiveTraceContext,
  samples: readonly PerspectivePupilRaySample[],
  referencePoint: Vec3 = context.sensorPlane.point,
): PerspectiveAffineSensorRay[] {
  return samples.map((sample, index) => affineSensorRayFromPupilSample(context, sample, index, referencePoint));
}

/** Resolve the field-radial and perpendicular axes at one fixed-sensor coordinate. */
export function fieldSensorAxes(context: PerspectiveTraceContext, sensorUv: SensorUv): PerspectiveFieldSensorAxes {
  const sensorPoint = sensorPointForUv(context, sensorUv);
  if (!sensorPoint) return defaultFieldAxes();
  const offset = subtract(sensorPoint, context.sensorPlane.point);
  const u = dot(offset, context.sensorBasis.u);
  const v = dot(offset, context.sensorBasis.v);
  const radius = Math.hypot(u, v);
  if (!Number.isFinite(radius) || radius <= 1e-12) return defaultFieldAxes();
  const tangential = { u: u / radius, v: v / radius };
  return {
    tangential,
    // For a positive vertical field this preserves camera-right as positive sagittal.
    sagittal: { u: tangential.v, v: -tangential.u },
  };
}

/** Return a ray's u/v coordinates on a sensor-parallel plane at `normalOffsetMm`. */
export function affineRayCoordinatesAtOffset(
  ray: PerspectiveAffineSensorRay,
  normalOffsetMm: number,
): { uMm: number; vMm: number } | null {
  if (
    ray.sensorUMm === null ||
    ray.sensorVMm === null ||
    ray.slopeUPerNormal === null ||
    ray.slopeVPerNormal === null ||
    !Number.isFinite(normalOffsetMm)
  ) {
    return null;
  }
  const uMm = ray.sensorUMm + ray.slopeUPerNormal * normalOffsetMm;
  const vMm = ray.sensorVMm + ray.slopeVPerNormal * normalOffsetMm;
  return Number.isFinite(uMm) && Number.isFinite(vMm) ? { uMm, vMm } : null;
}

/** Summarize a photometrically weighted spot on a sensor-parallel plane. */
export function summarizePerspectiveSensorSpot(
  rays: readonly PerspectiveAffineSensorRay[],
  normalOffsetMm = 0,
): PerspectiveSensorSpotSummary | null {
  const moments = weightedProjectedMoments(rays, normalOffsetMm, ORTHONORMAL_SENSOR_AXES);
  if (!moments) return null;
  const coordinates = moments.rays.map(({ uMm, vMm }) => ({ uMm, vMm }));
  return {
    normalOffsetMm,
    usedRayCount: moments.rays.length,
    usedWeight: moments.usedWeight,
    centroidUMm: moments.centroidUMm,
    centroidVMm: moments.centroidVMm,
    rmsRadiusMm: moments.rmsMm,
    maxRadiusMm: moments.maxRadiusMm,
    spanUMm: coordinateSpan(coordinates.map(({ uMm }) => uMm)),
    spanVMm: coordinateSpan(coordinates.map(({ vMm }) => vMm)),
  };
}

/** Solve the weighted least-squares focus for one or two sensor-plane axes. */
export function solvePerspectiveSensorBestFocus(
  rays: readonly PerspectiveAffineSensorRay[],
  axes: readonly SensorPlaneAxis[] = ORTHONORMAL_SENSOR_AXES,
): PerspectiveSensorBestFocus | null {
  const normalizedAxes = normalizeAxes(axes);
  if (normalizedAxes.length === 0) return null;
  const usable = usableAffineRays(rays);
  if (usable.length < 2) return null;
  const usedWeight = usable.reduce((sum, ray) => sum + ray.photometricWeight, 0);
  if (!Number.isFinite(usedWeight) || usedWeight <= 1e-15) return null;

  let numerator = 0;
  let denominator = 0;
  for (const axis of normalizedAxes) {
    const meanA =
      usable.reduce(
        (sum, ray) => sum + ray.photometricWeight * (ray.sensorUMm! * axis.u + ray.sensorVMm! * axis.v),
        0,
      ) / usedWeight;
    const meanB =
      usable.reduce(
        (sum, ray) => sum + ray.photometricWeight * (ray.slopeUPerNormal! * axis.u + ray.slopeVPerNormal! * axis.v),
        0,
      ) / usedWeight;
    for (const ray of usable) {
      const a = ray.sensorUMm! * axis.u + ray.sensorVMm! * axis.v - meanA;
      const b = ray.slopeUPerNormal! * axis.u + ray.slopeVPerNormal! * axis.v - meanB;
      numerator += ray.photometricWeight * a * b;
      denominator += ray.photometricWeight * b * b;
    }
  }
  if (!Number.isFinite(denominator) || denominator <= 1e-15) return null;
  const normalOffsetMm = -numerator / denominator;
  if (!Number.isFinite(normalOffsetMm)) return null;
  const moments = weightedProjectedMoments(usable, normalOffsetMm, normalizedAxes);
  if (!moments) return null;
  return {
    normalOffsetMm,
    usedRayCount: moments.rays.length,
    usedWeight: moments.usedWeight,
    centroidUMm: moments.centroidUMm,
    centroidVMm: moments.centroidVMm,
    rmsMm: moments.rmsMm,
    maxRadiusMm: moments.maxRadiusMm,
  };
}

/** Field angle of a solved camera-space scene direction, in degrees. */
export function cameraFieldAngleDeg(direction: Vec3 | null): number | null {
  if (!direction || !direction.every(Number.isFinite)) return null;
  const angle = (Math.atan2(Math.hypot(direction[0], direction[1]), direction[2]) * 180) / Math.PI;
  return Number.isFinite(angle) ? angle : null;
}

interface WeightedProjectedMoments {
  rays: Array<{ ray: PerspectiveAffineSensorRay; uMm: number; vMm: number }>;
  usedWeight: number;
  centroidUMm: number;
  centroidVMm: number;
  rmsMm: number;
  maxRadiusMm: number;
}

const ORTHONORMAL_SENSOR_AXES: readonly SensorPlaneAxis[] = [
  { u: 1, v: 0 },
  { u: 0, v: 1 },
];

function weightedProjectedMoments(
  rays: readonly PerspectiveAffineSensorRay[],
  normalOffsetMm: number,
  axes: readonly SensorPlaneAxis[],
): WeightedProjectedMoments | null {
  const projected = usableAffineRays(rays).flatMap((ray) => {
    const coordinates = affineRayCoordinatesAtOffset(ray, normalOffsetMm);
    return coordinates ? [{ ray, ...coordinates }] : [];
  });
  const usedWeight = projected.reduce((sum, sample) => sum + sample.ray.photometricWeight, 0);
  if (projected.length === 0 || !Number.isFinite(usedWeight) || usedWeight <= 1e-15) return null;
  const centroidUMm =
    projected.reduce((sum, sample) => sum + sample.uMm * sample.ray.photometricWeight, 0) / usedWeight;
  const centroidVMm =
    projected.reduce((sum, sample) => sum + sample.vMm * sample.ray.photometricWeight, 0) / usedWeight;
  let squareSum = 0;
  let maxRadiusMm = 0;
  for (const sample of projected) {
    const du = sample.uMm - centroidUMm;
    const dv = sample.vMm - centroidVMm;
    const radiusSquared = axes.reduce((sum, axis) => sum + (du * axis.u + dv * axis.v) ** 2, 0);
    squareSum += sample.ray.photometricWeight * radiusSquared;
    maxRadiusMm = Math.max(maxRadiusMm, Math.sqrt(radiusSquared));
  }
  return {
    rays: projected,
    usedWeight,
    centroidUMm,
    centroidVMm,
    rmsMm: Math.sqrt(squareSum / usedWeight),
    maxRadiusMm,
  };
}

function usableAffineRays(rays: readonly PerspectiveAffineSensorRay[]): PerspectiveAffineSensorRay[] {
  return rays.filter(
    (ray) =>
      ray.status === "usable" &&
      ray.photometricWeight > 0 &&
      ray.sensorUMm !== null &&
      ray.sensorVMm !== null &&
      ray.slopeUPerNormal !== null &&
      ray.slopeVPerNormal !== null,
  );
}

function normalizeAxes(axes: readonly SensorPlaneAxis[]): SensorPlaneAxis[] {
  return axes.flatMap((axis) => {
    const magnitude = Math.hypot(axis.u, axis.v);
    return Number.isFinite(magnitude) && magnitude > 1e-12 ? [{ u: axis.u / magnitude, v: axis.v / magnitude }] : [];
  });
}

function coordinateSpan(values: readonly number[]): number {
  return values.length > 0 ? Math.max(...values) - Math.min(...values) : 0;
}

function finiteNonNegative(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function finiteOrNull(value: number | null): number | null {
  return value !== null && Number.isFinite(value) ? value : null;
}

function defaultFieldAxes(): PerspectiveFieldSensorAxes {
  return { tangential: { u: 0, v: 1 }, sagittal: { u: 1, v: 0 } };
}

function assertPositiveFinite(value: number, label: string): void {
  if (!Number.isFinite(value) || value <= 0) throw new RangeError(`${label} must be a positive finite number`);
}
