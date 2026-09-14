/**
 * Movement-aware entrance/exit pupil analysis in lens and camera frames.
 *
 * First-order pupil geometry remains intrinsic to the prepared prescription.
 * Apparent field-dependent centers are reconstructed from solved chief and
 * pupil-bundle lines, then compared with the rigidly posed intrinsic pupils.
 */

import type { ChromaticChannel } from "../../../types/optics.js";
import { entrancePupilFromStop2, paraxialPupilGeometry2 } from "../../first-order/pupils.js";
import { traceParaxialSurfaces2 } from "../../math/paraxial.js";
import { add, dot, scale } from "../../math/vector.js";
import type { Ray3, Vec3 } from "../../types.js";
import {
  sampleSensorLockedFields,
  type FieldSample,
  type PerspectiveFieldSamplingOptions,
  type PerspectiveFieldStatus,
  type PerspectivePupilRaySample,
  type SensorUv,
} from "../fieldSampling.js";
import type { PerspectiveTraceContext } from "../trace.js";
import { sensorFrameDisplacement, type SensorFrameDisplacement } from "./shared.js";

const DEFAULT_SENSOR_SAMPLE_COUNT = 9;
const DEFAULT_PUPIL_SAMPLE_COUNT = 17;

/** Options for signed sensor-locked apparent-pupil sampling. */
export interface PerspectivePupilOptions {
  /** Physical active stop semi-diameter in mm for the current aperture. */
  stopSemiDiameterMm: number;
  /** Entrance-pupil semi-diameter in mm; derived paraxially when omitted. */
  pupilSemiDiameterMm?: number;
  /** Ordered signed sensor samples; defaults to a vertical -1..+1 sweep. */
  sensorUvs?: readonly SensorUv[];
  /** Meridional pupil fractions, normally spanning -1..+1. */
  pupilFractions?: readonly number[];
  channel?: ChromaticChannel;
  fieldSampling?: Omit<PerspectiveFieldSamplingOptions, "pupilBundle">;
}

/** Intrinsic first-order entrance pupil for the active aperture. */
export interface IntrinsicEntrancePupil {
  centerLens: Vec3;
  posedCenterCamera: Vec3;
  semiDiameterMm: number;
  zRelativeToStopMm: number;
}

/** Intrinsic first-order exit pupil; telecentric pupils have no finite center. */
export interface IntrinsicExitPupil {
  centerLens: Vec3 | null;
  posedCenterCamera: Vec3 | null;
  semiDiameterMm: number;
  zRelativeToLastSurfaceMm: number;
  telecentric: boolean;
}

/** Intrinsic pupil references shared by every signed field sample. */
export interface IntrinsicPerspectivePupils {
  entrance: IntrinsicEntrancePupil;
  exit: IntrinsicExitPupil;
  stopSemiDiameterMm: number;
  yRatio: number;
  b: number;
}

/** Weighted ray line used by the pure apparent-pupil estimator. */
export interface WeightedPupilRayLine {
  ray: Ray3;
  weight: number;
  included: boolean;
}

/** Lens-frame pupil estimate on the chief ray's apparent axial plane. */
export interface ApparentPupilLineEstimate {
  centerLens: Vec3;
  axialPlaneZMm: number;
  semiDiameterMm: number;
  rmsRadiusMm: number;
  usedRayCount: number;
  usedWeight: number;
}

/** Apparent pupil plus fixed-camera displacement diagnostics. */
export interface ApparentPerspectivePupil extends ApparentPupilLineEstimate {
  centerCamera: Vec3;
  axialShiftFromIntrinsicMm: number | null;
  displacementFromPosedIntrinsic: SensorFrameDisplacement | null;
  displacementFromSensorCenter: SensorFrameDisplacement;
}

/** One retained sensor-locked EP/XP observation. */
export interface PerspectivePupilSample {
  requestedSensorUv: SensorUv;
  status: PerspectiveFieldStatus;
  entrance: ApparentPerspectivePupil | null;
  exit: ApparentPerspectivePupil | null;
  fieldSample: FieldSample;
}

/** Complete intrinsic and apparent pupil result for one movement state. */
export interface PerspectivePupilAnalysis {
  contextCacheKey: string;
  intrinsic: IntrinsicPerspectivePupils;
  samples: readonly PerspectivePupilSample[];
}

/**
 * Compute the current-aperture intrinsic EP/XP geometry in the lens frame.
 *
 * @param context - camera-anchored prepared state and physical lens pose
 * @param stopSemiDiameterMm - current physical stop semi-diameter in mm
 * @returns first-order pupil centers/sizes plus their rigid camera positions
 */
export function computeIntrinsicPerspectivePupils(
  context: PerspectiveTraceContext,
  stopSemiDiameterMm: number,
): IntrinsicPerspectivePupils {
  assertPositiveFinite(stopSemiDiameterMm, "stopSemiDiameterMm");
  const geometry = paraxialPupilGeometry2(context.state);
  const entrance = entrancePupilFromStop2(stopSemiDiameterMm, geometry);
  const firstSurfaceZ = context.state.z[0] ?? 0;
  const stopZ = context.state.z[context.state.lens.stop.surfaceIndex] ?? firstSurfaceZ;
  const entranceCenterLens: Vec3 = [0, 0, firstSurfaceZ + entrance.epRatio];

  const marginal = traceParaxialSurfaces2(context.state.surfaces, 1, 0, { skipLastTransfer: true });
  const chief = traceParaxialSurfaces2(context.state.surfaces, 0, 1, { skipLastTransfer: true });
  const xpY = geometry.yRatio * chief.y - geometry.b * marginal.y;
  const xpU = geometry.yRatio * chief.u - geometry.b * marginal.u;
  const zRelativeToLastSurfaceMm = Math.abs(xpU) > 1e-9 ? -xpY / xpU : Infinity;
  const lastSurfaceZ = context.state.z[context.state.z.length - 1] ?? firstSurfaceZ;
  const exitCenterLens: Vec3 | null = Number.isFinite(zRelativeToLastSurfaceMm)
    ? [0, 0, lastSurfaceZ + zRelativeToLastSurfaceMm]
    : null;
  const exitSemiDiameterMm = exitCenterLens
    ? Math.abs(marginal.y + marginal.u * zRelativeToLastSurfaceMm) * entrance.epSD
    : Infinity;

  return {
    entrance: {
      centerLens: entranceCenterLens,
      posedCenterCamera: context.pose.lensToCameraPoint(entranceCenterLens),
      semiDiameterMm: entrance.epSD,
      zRelativeToStopMm: entranceCenterLens[2] - stopZ,
    },
    exit: {
      centerLens: exitCenterLens,
      posedCenterCamera: exitCenterLens ? context.pose.lensToCameraPoint(exitCenterLens) : null,
      semiDiameterMm: exitSemiDiameterMm,
      zRelativeToLastSurfaceMm,
      telecentric: exitCenterLens === null,
    },
    stopSemiDiameterMm,
    yRatio: geometry.yRatio,
    b: geometry.b,
  };
}

/**
 * Estimate a pupil center/size where a solved chief line approaches the axis.
 *
 * The axial plane comes from the chief ray's closest approach to the intrinsic
 * z axis. All included bundle lines are intersected with that plane and reduced
 * by their mechanical quadrature weights; absorption never moves the pupil.
 *
 * @param chiefRay - solved chief line in intrinsic lens coordinates
 * @param bundle - weighted bundle lines in the same coordinate frame
 * @param fallbackAxisZMm - on-axis/telecentric fallback plane, when finite
 * @returns weighted center/radii, or null when no stable plane/lines exist
 */
export function estimateApparentPupilFromLines(
  chiefRay: Ray3 | null,
  bundle: readonly WeightedPupilRayLine[],
  fallbackAxisZMm: number | null,
): ApparentPupilLineEstimate | null {
  const axialPlaneZMm = chiefRay ? (closestApproachToAxisZ(chiefRay) ?? fallbackAxisZMm) : fallbackAxisZMm;
  if (axialPlaneZMm === null || !Number.isFinite(axialPlaneZMm)) return null;

  const projected: { point: Vec3; weight: number }[] = [];
  let usedWeight = 0;
  for (const sample of bundle) {
    if (!sample.included || !Number.isFinite(sample.weight) || sample.weight <= 0) continue;
    const point = rayPointAtZ(sample.ray, axialPlaneZMm);
    if (!point) continue;
    projected.push({ point, weight: sample.weight });
    usedWeight += sample.weight;
  }
  if (projected.length === 0 || usedWeight <= 0) return null;

  const centerLens: Vec3 = [
    projected.reduce((sum, sample) => sum + sample.point[0] * sample.weight, 0) / usedWeight,
    projected.reduce((sum, sample) => sum + sample.point[1] * sample.weight, 0) / usedWeight,
    axialPlaneZMm,
  ];
  const radii = projected.map(({ point, weight }) => ({
    radius: Math.hypot(point[0] - centerLens[0], point[1] - centerLens[1]),
    weight,
  }));
  const radiusSquareSum = radii.reduce((sum, sample) => sum + sample.radius * sample.radius * sample.weight, 0);
  return {
    centerLens,
    axialPlaneZMm,
    semiDiameterMm: Math.max(...radii.map((sample) => sample.radius)),
    rmsRadiusMm: Math.sqrt(radiusSquareSum / usedWeight),
    usedRayCount: projected.length,
    usedWeight,
  };
}

/**
 * Compute intrinsic and apparent entrance/exit pupils across signed sensor fields.
 *
 * @param context - physical moved-lens trace context with a fixed sensor
 * @param options - current aperture, signed sensor fields, and bundle density
 * @returns intrinsic lens-frame references plus retained camera-frame samples
 */
export function computePerspectivePupilAnalysis(
  context: PerspectiveTraceContext,
  options: PerspectivePupilOptions,
): PerspectivePupilAnalysis {
  const intrinsic = computeIntrinsicPerspectivePupils(context, options.stopSemiDiameterMm);
  const pupilSemiDiameterMm = options.pupilSemiDiameterMm ?? intrinsic.entrance.semiDiameterMm;
  assertPositiveFinite(pupilSemiDiameterMm, "pupilSemiDiameterMm");
  const sensorUvs = options.sensorUvs ?? signedVerticalSensorUvs(DEFAULT_SENSOR_SAMPLE_COUNT);
  const pupilFractions = options.pupilFractions ?? evenlySpacedSigned(DEFAULT_PUPIL_SAMPLE_COUNT);
  const fields = sampleSensorLockedFields(context, sensorUvs, {
    ...options.fieldSampling,
    pupilBundle: {
      kind: "meridional",
      pupilSemiDiameterMm,
      fractions: pupilFractions,
      stopSemiDiameterMm: options.stopSemiDiameterMm,
      channel: options.channel,
    },
  });

  return {
    contextCacheKey: context.cacheKey,
    intrinsic,
    samples: fields.map((field, index) => ({
      requestedSensorUv: { ...(field.sensorUv ?? sensorUvs[index]) },
      status: field.status,
      entrance: apparentEntrancePupil(context, field, intrinsic.entrance),
      exit: apparentExitPupil(context, field, intrinsic.exit),
      fieldSample: field,
    })),
  };
}

function apparentEntrancePupil(
  context: PerspectiveTraceContext,
  field: FieldSample,
  intrinsic: IntrinsicEntrancePupil,
): ApparentPerspectivePupil | null {
  const chiefRay = field.chiefSolve?.launchRayLens ?? null;
  const bundle = field.pupilBundle?.samples.map(entranceLineForPupilRay) ?? [];
  const estimate = estimateApparentPupilFromLines(chiefRay, bundle, intrinsic.centerLens[2]);
  return estimate ? apparentPupilInCamera(context, estimate, intrinsic.centerLens, intrinsic.posedCenterCamera) : null;
}

function apparentExitPupil(
  context: PerspectiveTraceContext,
  field: FieldSample,
  intrinsic: IntrinsicExitPupil,
): ApparentPerspectivePupil | null {
  const chiefRay = field.chiefTrace ? exitingRay(field.chiefTrace.localTrace) : null;
  const bundle = field.pupilBundle?.samples.map(exitLineForPupilRay) ?? [];
  const estimate = estimateApparentPupilFromLines(chiefRay, bundle, intrinsic.centerLens?.[2] ?? null);
  return estimate ? apparentPupilInCamera(context, estimate, intrinsic.centerLens, intrinsic.posedCenterCamera) : null;
}

function apparentPupilInCamera(
  context: PerspectiveTraceContext,
  estimate: ApparentPupilLineEstimate,
  intrinsicCenterLens: Vec3 | null,
  posedIntrinsicCenter: Vec3 | null,
): ApparentPerspectivePupil {
  const centerCamera = context.pose.lensToCameraPoint(estimate.centerLens);
  return {
    ...estimate,
    centerCamera,
    axialShiftFromIntrinsicMm: intrinsicCenterLens ? estimate.centerLens[2] - intrinsicCenterLens[2] : null,
    displacementFromPosedIntrinsic: posedIntrinsicCenter
      ? sensorFrameDisplacement(context, posedIntrinsicCenter, centerCamera)
      : null,
    displacementFromSensorCenter: sensorFrameDisplacement(context, context.sensorPlane.point, centerCamera),
  };
}

function entranceLineForPupilRay(sample: PerspectivePupilRaySample): WeightedPupilRayLine {
  return {
    ray: sample.trace.localTrace.input,
    weight: sample.weight,
    included: mechanicallyReachesSensor(sample),
  };
}

function exitLineForPupilRay(sample: PerspectivePupilRaySample): WeightedPupilRayLine {
  const exitRay = exitingRay(sample.trace.localTrace);
  return {
    ray: exitRay ?? sample.trace.localTrace.input,
    weight: sample.weight,
    included: mechanicallyReachesSensor(sample) && exitRay !== null,
  };
}

function mechanicallyReachesSensor(sample: PerspectivePupilRaySample): boolean {
  return (
    sample.trace.localTrace.status === "ok" && sample.trace.reachedSensor && sample.trace.sensorIntersection !== null
  );
}

function exitingRay(trace: PerspectivePupilRaySample["trace"]["localTrace"]): Ray3 | null {
  const hit = [...trace.hits].reverse().find((candidate) => !candidate.fallback && candidate.failureReason === null);
  if (!hit) return null;
  return { origin: hit.point, direction: hit.outgoingDirection ?? trace.terminalDirection };
}

function closestApproachToAxisZ(ray: Ray3): number | null {
  const transverseDirectionSquared = ray.direction[0] ** 2 + ray.direction[1] ** 2;
  if (!Number.isFinite(transverseDirectionSquared) || transverseDirectionSquared <= 1e-18) return null;
  const t =
    -dot([ray.origin[0], ray.origin[1], 0], [ray.direction[0], ray.direction[1], 0]) / transverseDirectionSquared;
  const point = add(ray.origin, scale(ray.direction, t));
  return Number.isFinite(point[2]) ? point[2] : null;
}

function rayPointAtZ(ray: Ray3, z: number): Vec3 | null {
  if (!Number.isFinite(z) || !Number.isFinite(ray.direction[2]) || Math.abs(ray.direction[2]) <= 1e-15) return null;
  const t = (z - ray.origin[2]) / ray.direction[2];
  const point = add(ray.origin, scale(ray.direction, t));
  return point.every(Number.isFinite) ? point : null;
}

function signedVerticalSensorUvs(count: number): SensorUv[] {
  return evenlySpacedSigned(count).map((v) => ({ u: 0, v }));
}

function evenlySpacedSigned(count: number): number[] {
  return Array.from({ length: count }, (_, index) => -1 + (2 * index) / (count - 1));
}

function assertPositiveFinite(value: number, label: string): void {
  if (!Number.isFinite(value) || value <= 0) throw new RangeError(`${label} must be finite and greater than zero`);
}
