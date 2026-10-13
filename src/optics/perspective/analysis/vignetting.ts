/**
 * Movement-aware vignetting and illumination analysis on the fixed sensor.
 *
 * Sensor-locked chief solves feed an area-weighted circular pupil integral.
 * Mechanical survival, authored absorption, and geometric propagation remain
 * separate so no active-pose center normalization can hide real losses.
 */

import type { ChromaticChannel } from "../../../types/optics.js";
import { entrancePupilFromStop2, paraxialPupilGeometry2 } from "../../first-order/pupils.js";
import { formatCacheNumber } from "../../math/numerics.js";
import { intersectRayPlane } from "../../math/plane.js";
import { dot, normalize, scale, subtract } from "../../math/vector.js";
import type { Plane3, PreparedOpticalState, Vec3 } from "../../types.js";
import {
  sampleSensorLockedFields,
  type FieldSample,
  type PerspectiveFieldSamplingOptions,
  type PerspectiveFieldStatus,
  type PerspectivePupilPoint,
  type PerspectivePupilRaySample,
  type SensorUv,
} from "../fieldSampling.js";
import { paraxialExitPupilCenterLens } from "../fieldGeometry.js";
import type { PerspectiveTraceContext } from "../trace.js";
import { createZeroMovementPerspectiveContext, finiteRatio } from "./shared.js";

const DEFAULT_SENSOR_SAMPLE_COUNT = 9;
const DEFAULT_RADIAL_STRATA = 5;
const DEFAULT_AZIMUTHAL_SAMPLES = 12;
const MAX_REFERENCE_CACHE_ENTRIES_PER_STATE = 64;

/** Options for fixed-sensor vignetting and radiometric pupil integration. */
export interface PerspectiveVignettingOptions {
  /** Physical active stop semi-diameter in mm for the current aperture. */
  stopSemiDiameterMm: number;
  /** Entrance-pupil semi-diameter in mm; derived paraxially when omitted. */
  pupilSemiDiameterMm?: number;
  /** Ordered signed fixed-sensor samples; defaults to a vertical -1..+1 sweep. */
  sensorUvs?: readonly SensorUv[];
  /** Explicit circular quadrature; generated from radial/azimuthal counts when omitted. */
  pupilPoints?: readonly PerspectivePupilPoint[];
  radialStrata?: number;
  azimuthalSamples?: number;
  channel?: ChromaticChannel;
  fieldSampling?: Omit<PerspectiveFieldSamplingOptions, "pupilBundle">;
  /** Also compare each active sample with zero movement at that same sensor coordinate. */
  includeActiveToZeroRatio?: boolean;
}

/** Minimal weighted ray geometry consumed by the pure throughput reducer. */
export interface PerspectiveVignettingRayContribution {
  weight: number;
  transmitted: boolean;
  transmission: number;
  exitPoint: Vec3 | null;
  exitNormal: Vec3 | null;
  sensorPoint: Vec3 | null;
}

/** Absolute weighted pupil throughput before any reference normalization. */
export interface PerspectiveVignettingThroughput {
  sampleCount: number;
  usableCount: number;
  totalWeight: number;
  usableWeight: number;
  /** Area-weighted aperture survival in [0, 1]. */
  absoluteGeometricTransmission: number;
  /** Area-weighted survival after Beer-Lambert transmission in [0, 1]. */
  absoluteTransmittedFlux: number;
  /** Area-weighted geometric propagation factor in inverse-square millimeters. */
  absoluteGeometricFactor: number;
  /** The same propagation integral after authored bulk absorption. */
  absoluteTransmittedGeometricFactor: number;
}

/** Ratios between corresponding active- and zero-movement absolute metrics. */
export interface PerspectiveVignettingRatios {
  geometricTransmission: number | null;
  transmittedFlux: number | null;
  geometricFactor: number | null;
  transmittedGeometricFactor: number | null;
}

/** Cached zero-movement sensor-center normalization for one full optical/aperture state. */
export interface PerspectiveVignettingReference {
  cacheKey: string;
  status: PerspectiveFieldStatus;
  throughput: PerspectiveVignettingThroughput | null;
}

/** One retained signed sensor sample and its absolute/relative throughput. */
export interface PerspectiveVignettingSample {
  requestedSensorUv: SensorUv;
  status: PerspectiveFieldStatus;
  throughput: PerspectiveVignettingThroughput | null;
  /** Geometry-only factor divided by the matched zero-movement sensor center. */
  geometricFactorNormalizedToZeroCenter: number | null;
  /** Absorption-weighted factor divided by the matched zero-movement sensor center. */
  transmittedGeometricFactorNormalizedToZeroCenter: number | null;
  /** Optional comparison against zero movement at this exact sensor coordinate. */
  activeToZeroRatio: PerspectiveVignettingRatios | null;
  fieldSample: FieldSample;
}

/** Complete movement-aware vignetting result for one context and aperture. */
export interface PerspectiveVignettingAnalysis {
  contextCacheKey: string;
  stopSemiDiameterMm: number;
  pupilSemiDiameterMm: number;
  pupilPoints: readonly PerspectivePupilPoint[];
  zeroMovementCenterReference: PerspectiveVignettingReference;
  samples: readonly PerspectiveVignettingSample[];
}

const ZERO_CENTER_REFERENCE_BY_STATE = new WeakMap<PreparedOpticalState, Map<string, PerspectiveVignettingReference>>();

/**
 * Build a deterministic equal-area midpoint quadrature over the unit disk.
 *
 * Equal increments of r² represent equal annular area. Alternating each
 * ring's azimuthal phase avoids lining up every radial stratum.
 *
 * @param radialStrata - number of equal-area radial annuli
 * @param azimuthalSamples - samples around every annulus
 * @returns normalized pupil coordinates whose weights sum to one
 */
export function createAreaWeightedCircularPupilPoints(
  radialStrata = DEFAULT_RADIAL_STRATA,
  azimuthalSamples = DEFAULT_AZIMUTHAL_SAMPLES,
): PerspectivePupilPoint[] {
  const rings = positiveSampleCount(radialStrata, "radialStrata");
  const azimuths = positiveSampleCount(azimuthalSamples, "azimuthalSamples");
  const weight = 1 / (rings * azimuths);
  const points: PerspectivePupilPoint[] = [];
  for (let ring = 0; ring < rings; ring++) {
    const radius = Math.sqrt((ring + 0.5) / rings);
    const phase = (ring % 2) * (Math.PI / azimuths);
    for (let azimuth = 0; azimuth < azimuths; azimuth++) {
      const angle = phase + (2 * Math.PI * azimuth) / azimuths;
      points.push({ u: radius * Math.cos(angle), v: radius * Math.sin(angle), weight });
    }
  }
  return points;
}

/**
 * Evaluate the exit-to-sensor differential geometric factor for one ray.
 *
 * Uses `G = |nExit dot rHat| |nSensor dot -rHat| / r^2`; both cosine
 * factors are absolute because surface-normal orientation is not semantic.
 *
 * @param exitPoint - final physical surface point in camera coordinates
 * @param exitNormal - final physical surface normal in camera coordinates
 * @param sensorPoint - ray intersection with the fixed sensor plane
 * @param sensorNormal - canonical fixed-sensor normal
 * @returns inverse-square-mm geometric factor, or null for degenerate input
 */
export function perspectiveRayGeometricFactor(
  exitPoint: Vec3,
  exitNormal: Vec3,
  sensorPoint: Vec3,
  sensorNormal: Vec3,
): number | null {
  const connector = subtract(sensorPoint, exitPoint);
  const distanceSquared = dot(connector, connector);
  const rHat = normalize(connector);
  const nExit = normalize(exitNormal);
  const nSensor = normalize(sensorNormal);
  if (!rHat || !nExit || !nSensor || !Number.isFinite(distanceSquared) || distanceSquared <= 1e-18) return null;
  const factor = (Math.abs(dot(nExit, rHat)) * Math.abs(dot(nSensor, scale(rHat, -1)))) / distanceSquared;
  return Number.isFinite(factor) && factor >= 0 ? factor : null;
}

/**
 * Integrate absolute mechanical, absorption, and propagation throughput.
 *
 * @param rays - weighted circular-pupil contributions, including failures
 * @param sensorNormal - canonical fixed-sensor normal
 * @returns absolute metrics, or null when no positive quadrature weight exists
 */
export function integratePerspectiveVignettingRays(
  rays: readonly PerspectiveVignettingRayContribution[],
  sensorNormal: Vec3,
): PerspectiveVignettingThroughput | null {
  let totalWeight = 0;
  let usableWeight = 0;
  let transmittedWeight = 0;
  let geometricFactorSum = 0;
  let transmittedGeometricFactorSum = 0;
  let usableCount = 0;

  for (const ray of rays) {
    if (!Number.isFinite(ray.weight) || ray.weight <= 0) continue;
    totalWeight += ray.weight;
    if (!ray.transmitted) continue;
    usableCount++;
    usableWeight += ray.weight;
    const transmission = Number.isFinite(ray.transmission) ? Math.max(0, Math.min(1, ray.transmission)) : 0;
    transmittedWeight += ray.weight * transmission;
    const factor =
      ray.exitPoint && ray.exitNormal && ray.sensorPoint
        ? perspectiveRayGeometricFactor(ray.exitPoint, ray.exitNormal, ray.sensorPoint, sensorNormal)
        : null;
    if (factor === null) continue;
    geometricFactorSum += ray.weight * factor;
    transmittedGeometricFactorSum += ray.weight * transmission * factor;
  }

  if (!Number.isFinite(totalWeight) || totalWeight <= 0) return null;
  return {
    sampleCount: rays.length,
    usableCount,
    totalWeight,
    usableWeight,
    absoluteGeometricTransmission: usableWeight / totalWeight,
    absoluteTransmittedFlux: transmittedWeight / totalWeight,
    absoluteGeometricFactor: geometricFactorSum / totalWeight,
    absoluteTransmittedGeometricFactor: transmittedGeometricFactorSum / totalWeight,
  };
}

/**
 * Compute fixed-sensor vignetting without active-center normalization.
 *
 * @param context - physical moved-lens trace context
 * @param options - current aperture, signed sensor samples, and quadrature
 * @returns absolute samples plus a matched zero-movement center reference
 */
export function computePerspectiveVignettingAnalysis(
  context: PerspectiveTraceContext,
  options: PerspectiveVignettingOptions,
): PerspectiveVignettingAnalysis {
  assertPositiveFinite(options.stopSemiDiameterMm, "stopSemiDiameterMm");
  const pupilSemiDiameterMm =
    options.pupilSemiDiameterMm ??
    entrancePupilFromStop2(options.stopSemiDiameterMm, paraxialPupilGeometry2(context.state)).epSD;
  assertPositiveFinite(pupilSemiDiameterMm, "pupilSemiDiameterMm");

  const sensorUvs = options.sensorUvs ?? signedVerticalSensorUvs(DEFAULT_SENSOR_SAMPLE_COUNT);
  const pupilPoints =
    options.pupilPoints ?? createAreaWeightedCircularPupilPoints(options.radialStrata, options.azimuthalSamples);
  const samplingOptions: PerspectiveFieldSamplingOptions = {
    ...options.fieldSampling,
    pupilBundle: {
      kind: "circular",
      pupilSemiDiameterMm,
      points: pupilPoints,
      stopSemiDiameterMm: options.stopSemiDiameterMm,
      channel: options.channel,
    },
  };
  const fields = sampleSensorLockedFields(context, sensorUvs, samplingOptions);
  const zeroContext = createZeroMovementPerspectiveContext(context);
  const exitPupilPlane = perspectiveExitPupilPlane(context);
  const zeroExitPupilPlane = perspectiveExitPupilPlane(zeroContext);
  const reference = zeroMovementCenterReference(
    context,
    zeroContext,
    samplingOptions,
    options.stopSemiDiameterMm,
    pupilSemiDiameterMm,
    pupilPoints,
    options.channel,
    zeroExitPupilPlane,
  );
  const zeroFields = options.includeActiveToZeroRatio
    ? context.pose.active
      ? sampleSensorLockedFields(zeroContext, sensorUvs, samplingOptions)
      : fields
    : null;

  return {
    contextCacheKey: context.cacheKey,
    stopSemiDiameterMm: options.stopSemiDiameterMm,
    pupilSemiDiameterMm,
    pupilPoints,
    zeroMovementCenterReference: reference,
    samples: fields.map((field, index) => {
      const throughput = throughputForField(field, context.sensorBasis.normal, exitPupilPlane);
      const zeroThroughput = zeroFields
        ? throughputForField(zeroFields[index], zeroContext.sensorBasis.normal, zeroExitPupilPlane)
        : null;
      return {
        requestedSensorUv: { ...(field.sensorUv ?? sensorUvs[index]) },
        status: field.status,
        throughput,
        geometricFactorNormalizedToZeroCenter:
          throughput && reference.throughput
            ? finiteRatio(throughput.absoluteGeometricFactor, reference.throughput.absoluteGeometricFactor)
            : null,
        transmittedGeometricFactorNormalizedToZeroCenter:
          throughput && reference.throughput
            ? finiteRatio(
                throughput.absoluteTransmittedGeometricFactor,
                reference.throughput.absoluteTransmittedGeometricFactor,
              )
            : null,
        activeToZeroRatio: throughput && zeroThroughput ? throughputRatios(throughput, zeroThroughput) : null,
        fieldSample: field,
      };
    }),
  };
}

function throughputForField(
  field: FieldSample | undefined,
  sensorNormal: Vec3,
  exitPupilPlane: Plane3,
): PerspectiveVignettingThroughput | null {
  if (!field?.pupilBundle) return null;
  return integratePerspectiveVignettingRays(
    field.pupilBundle.samples.map((sample) => perspectiveVignettingRayContribution(sample, exitPupilPlane)),
    sensorNormal,
  );
}

/** Resolve one traced bundle member onto the common posed exit-pupil plane. */
export function perspectiveVignettingRayContribution(
  sample: PerspectivePupilRaySample,
  exitPupilPlane: Plane3,
): PerspectiveVignettingRayContribution {
  const exitHit = [...sample.trace.cameraTrace.hits]
    .reverse()
    .find((hit) => !hit.fallback && hit.failureReason === null && !hit.clipped);
  const exitPupilIntersection = exitHit
    ? intersectRayPlane(
        {
          origin: exitHit.point,
          direction: exitHit.outgoingDirection ?? sample.trace.cameraTrace.terminalDirection,
        },
        exitPupilPlane,
        { minT: Number.NEGATIVE_INFINITY },
      )
    : null;
  return {
    weight: sample.weight,
    // The active sensor rectangle classifies coverage, not optical vignetting.
    // A ray that clears the lens and reaches the sensor plane remains transmitted
    // even when its aberrated intercept falls just outside the finite format.
    transmitted:
      sample.trace.localTrace.status === "ok" && sample.trace.reachedSensor && sample.trace.sensorIntersection !== null,
    transmission: sample.transmission,
    exitPoint: exitPupilIntersection?.point ?? null,
    exitNormal: exitPupilIntersection ? exitPupilPlane.normal : null,
    sensorPoint: sample.sensorIntercept,
  };
}

/** First-order exit-pupil plane after applying the current rigid lens pose. */
export function perspectiveExitPupilPlane(context: PerspectiveTraceContext): Plane3 {
  return context.pose.lensToCameraPlane({
    point: paraxialExitPupilCenterLens(context),
    normal: [0, 0, 1],
    label: "XP",
  });
}

function throughputRatios(
  active: PerspectiveVignettingThroughput,
  zero: PerspectiveVignettingThroughput,
): PerspectiveVignettingRatios {
  return {
    geometricTransmission: finiteRatio(active.absoluteGeometricTransmission, zero.absoluteGeometricTransmission),
    transmittedFlux: finiteRatio(active.absoluteTransmittedFlux, zero.absoluteTransmittedFlux),
    geometricFactor: finiteRatio(active.absoluteGeometricFactor, zero.absoluteGeometricFactor),
    transmittedGeometricFactor: finiteRatio(
      active.absoluteTransmittedGeometricFactor,
      zero.absoluteTransmittedGeometricFactor,
    ),
  };
}

function zeroMovementCenterReference(
  activeContext: PerspectiveTraceContext,
  zeroContext: PerspectiveTraceContext,
  samplingOptions: PerspectiveFieldSamplingOptions,
  stopSemiDiameterMm: number,
  pupilSemiDiameterMm: number,
  pupilPoints: readonly PerspectivePupilPoint[],
  channel: ChromaticChannel | undefined,
  exitPupilPlane: Plane3,
): PerspectiveVignettingReference {
  let stateCache = ZERO_CENTER_REFERENCE_BY_STATE.get(activeContext.state);
  if (!stateCache) {
    stateCache = new Map();
    ZERO_CENTER_REFERENCE_BY_STATE.set(activeContext.state, stateCache);
  }
  const cacheKey = vignettingReferenceCacheKey(
    zeroContext,
    samplingOptions,
    stopSemiDiameterMm,
    pupilSemiDiameterMm,
    pupilPoints,
    channel,
  );
  const cached = stateCache.get(cacheKey);
  if (cached) return cached;

  const field = sampleSensorLockedFields(zeroContext, [{ u: 0, v: 0 }], samplingOptions)[0];
  const reference: PerspectiveVignettingReference = {
    cacheKey,
    status: field?.status ?? "chief-unreachable",
    throughput: throughputForField(field, zeroContext.sensorBasis.normal, exitPupilPlane),
  };
  // Aperture scrubbing can create many short-lived keys; retain a small per-state working set.
  if (stateCache.size >= MAX_REFERENCE_CACHE_ENTRIES_PER_STATE) {
    const oldest = stateCache.keys().next().value;
    if (oldest !== undefined) stateCache.delete(oldest);
  }
  stateCache.set(cacheKey, reference);
  return reference;
}

function vignettingReferenceCacheKey(
  zeroContext: PerspectiveTraceContext,
  samplingOptions: PerspectiveFieldSamplingOptions,
  stopSemiDiameterMm: number,
  pupilSemiDiameterMm: number,
  pupilPoints: readonly PerspectivePupilPoint[],
  channel: ChromaticChannel | undefined,
): string {
  const number = formatCacheNumber;
  const chief = samplingOptions.chiefRay;
  return [
    "perspective-vignetting-zero-center-v1",
    `zero=${zeroContext.cacheKey}`,
    `stop=${number(stopSemiDiameterMm)}`,
    `pupil=${number(pupilSemiDiameterMm)}`,
    `channel=${channel ?? "mono"}`,
    `chief-channel=${chief?.channel ?? "mono"}`,
    `focal=${number(samplingOptions.focalLengthMm ?? 0)}`,
    `chief-residual=${number(chief?.residualToleranceMm ?? 0)}`,
    `chief-iterations=${chief?.maxIterations ?? 0}`,
    `chief-scan=${chief?.bracketScanSamples ?? 0}`,
    `quadrature=${pupilPoints
      .map((point) => `${number(point.u)},${number(point.v)},${number(point.weight)}`)
      .join(";")}`,
  ].join("|");
}

function signedVerticalSensorUvs(count: number): SensorUv[] {
  return Array.from({ length: count }, (_, index) => ({ u: 0, v: -1 + (2 * index) / (count - 1) }));
}

function assertPositiveFinite(value: number, label: string): void {
  if (!Number.isFinite(value) || value <= 0) throw new RangeError(`${label} must be finite and greater than zero`);
}

function positiveSampleCount(value: number, label: string): number {
  assertPositiveFinite(value, label);
  return Math.max(1, Math.round(value));
}
