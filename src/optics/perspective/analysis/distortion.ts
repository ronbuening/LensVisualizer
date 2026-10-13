/**
 * Movement-aware distortion analysis in the fixed camera/sensor frame.
 *
 * Scene directions are locked to zero-pose ideal sensor coordinates. This
 * separates rigid Scheimpflug/shift composition from the residual introduced
 * by the real optical prescription after movement.
 */

import type { Vec3 } from "../../types.js";
import {
  sampleSceneLockedFields,
  zeroPoseSceneDirectionForSensorUv,
  type FieldSample,
  type PerspectiveFieldSamplingOptions,
  type PerspectiveFieldStatus,
  type SensorUv,
} from "../fieldSampling.js";
import type { PerspectiveTraceContext } from "../trace.js";
import { sensorFrameDisplacement, sensorPointForUv, type SensorFrameDisplacement } from "./shared.js";

const DEFAULT_VERTICAL_SAMPLE_COUNT = 17;
const DEFAULT_GRID_COORDINATES = [-1, -0.5, 0, 0.5, 1] as const;

/** Options for signed vertical and rectangular scene-locked sampling. */
export interface PerspectiveDistortionOptions {
  /** Signed normalized sensor-v coordinates; -1 is top and +1 is bottom. */
  verticalSensorV?: readonly number[];
  /** Signed normalized sensor-u coordinates used by the rectangular grid. */
  gridSensorU?: readonly number[];
  /** Signed normalized sensor-v coordinates used by the rectangular grid. */
  gridSensorV?: readonly number[];
  /** Shared focal-scale and chief-solve controls; pupil sampling is excluded. */
  fieldSampling?: Omit<PerspectiveFieldSamplingOptions, "pupilBundle">;
}

/** One scene-locked distortion observation on the fixed sensor. */
export interface PerspectiveDistortionSample {
  requestedSensorUv: SensorUv;
  status: PerspectiveFieldStatus;
  sceneDirectionCamera: Vec3 | null;
  /** Fixed-sensor ideal point before lens movement. */
  zeroPoseIdeal: Vec3 | null;
  /** Thin-lens ideal point after composing the active physical lens pose. */
  poseIdeal: Vec3 | null;
  /** Exact moved-lens chief-ray intercept. */
  actual: Vec3 | null;
  /** `poseIdeal - zeroPoseIdeal`: displacement caused by rigid pose geometry. */
  compositionDisplacement: SensorFrameDisplacement | null;
  /** `actual - poseIdeal`: optical distortion after removing pose composition. */
  opticalResidual: SensorFrameDisplacement | null;
  /** `actual - zeroPoseIdeal`: complete movement plus optical displacement. */
  totalDisplacement: SensorFrameDisplacement | null;
  fieldSample: FieldSample | null;
}

/** RMS/maximum magnitude for the usable members of one displacement family. */
export interface PerspectiveDistortionStatistics {
  usableCount: number;
  rmsMm: number | null;
  maxMm: number | null;
}

/** Signed vertical-curve aggregates and retained top/bottom endpoints. */
export interface PerspectiveDistortionSummary {
  requestedCount: number;
  usableCount: number;
  composition: PerspectiveDistortionStatistics;
  opticalResidual: PerspectiveDistortionStatistics;
  total: PerspectiveDistortionStatistics;
  top: PerspectiveDistortionSample | null;
  bottom: PerspectiveDistortionSample | null;
}

/** Row-major rectangular distortion grid with its requested coordinates. */
export interface PerspectiveDistortionGrid {
  uCoordinates: readonly number[];
  vCoordinates: readonly number[];
  rows: readonly (readonly PerspectiveDistortionSample[])[];
}

/** Complete movement-aware distortion result for one perspective context. */
export interface PerspectiveDistortionAnalysis {
  contextCacheKey: string;
  vertical: readonly PerspectiveDistortionSample[];
  grid: PerspectiveDistortionGrid;
  summary: PerspectiveDistortionSummary;
}

/**
 * Convert one canonical field sample into the distortion decomposition.
 *
 * @param context - active movement context and fixed sensor basis
 * @param requestedSensorUv - zero-pose ideal coordinate used to lock the scene
 * @param fieldSample - exact canonical sample, or null when no direction exists
 * @returns retained point with independent pose and optical displacements
 */
export function perspectiveDistortionSampleFromField(
  context: PerspectiveTraceContext,
  requestedSensorUv: SensorUv,
  fieldSample: FieldSample | null,
): PerspectiveDistortionSample {
  const requestedPoint = sensorPointForUv(context, requestedSensorUv);
  const zeroPoseIdeal = fieldSample?.zeroPoseIdealSensorIntercept ?? requestedPoint;
  const poseIdeal = fieldSample?.poseIdealSensorIntercept ?? null;
  const actual = fieldSample?.actualSensorIntercept ?? null;

  return {
    requestedSensorUv: { ...requestedSensorUv },
    status: fieldSample?.status ?? "outside-projection-domain",
    sceneDirectionCamera: fieldSample?.sceneDirectionCamera ?? null,
    zeroPoseIdeal,
    poseIdeal,
    actual,
    compositionDisplacement:
      zeroPoseIdeal && poseIdeal ? sensorFrameDisplacement(context, zeroPoseIdeal, poseIdeal) : null,
    opticalResidual: poseIdeal && actual ? sensorFrameDisplacement(context, poseIdeal, actual) : null,
    totalDisplacement: zeroPoseIdeal && actual ? sensorFrameDisplacement(context, zeroPoseIdeal, actual) : null,
    fieldSample,
  };
}

/**
 * Summarize a signed vertical distortion curve without dropping failures.
 *
 * @param samples - ordered signed sensor-v observations
 * @returns usable-only RMS/max metrics plus requested top/bottom samples
 */
export function summarizePerspectiveDistortionSamples(
  samples: readonly PerspectiveDistortionSample[],
): PerspectiveDistortionSummary {
  const orderedByV = [...samples].sort((a, b) => a.requestedSensorUv.v - b.requestedSensorUv.v);
  return {
    requestedCount: samples.length,
    usableCount: samples.filter((sample) => sample.status === "usable" && sample.opticalResidual !== null).length,
    composition: displacementStatistics(samples, (sample) => sample.compositionDisplacement),
    opticalResidual: displacementStatistics(samples, (sample) => sample.opticalResidual),
    total: displacementStatistics(samples, (sample) => sample.totalDisplacement),
    top: orderedByV[0] ?? null,
    bottom: orderedByV[orderedByV.length - 1] ?? null,
  };
}

/**
 * Compute signed vertical and rectangular movement-aware distortion samples.
 *
 * The requested sensor coordinates define zero-pose projection ideals. Their
 * analytic camera-space directions are then traced unchanged through the
 * active pose, so `actual - poseIdeal` remains a true moved-optics residual.
 *
 * @param context - physical moved-lens trace context with a fixed sensor
 * @param options - signed curve/grid coordinates and chief-solve controls
 * @returns ordered samples, retained failures, grid, and summary statistics
 */
export function computePerspectiveDistortionAnalysis(
  context: PerspectiveTraceContext,
  options: PerspectiveDistortionOptions = {},
): PerspectiveDistortionAnalysis {
  const verticalSensorV = options.verticalSensorV ?? evenlySpacedSigned(DEFAULT_VERTICAL_SAMPLE_COUNT);
  const gridSensorU = options.gridSensorU ?? DEFAULT_GRID_COORDINATES;
  const gridSensorV = options.gridSensorV ?? DEFAULT_GRID_COORDINATES;
  const verticalUvs = verticalSensorV.map((v) => ({ u: 0, v }));
  const gridUvs = gridSensorV.flatMap((v) => gridSensorU.map((u) => ({ u, v })));
  const samplesByCoordinate = sampleSceneLockedCoordinates(
    context,
    [...verticalUvs, ...gridUvs],
    options.fieldSampling,
  );
  const sampleAt = (sensorUv: SensorUv): PerspectiveDistortionSample =>
    perspectiveDistortionSampleFromField(context, sensorUv, samplesByCoordinate.get(sensorUvKey(sensorUv)) ?? null);
  const vertical = verticalUvs.map(sampleAt);
  const rows = gridSensorV.map((v) => gridSensorU.map((u) => sampleAt({ u, v })));

  return {
    contextCacheKey: context.cacheKey,
    vertical,
    grid: {
      uCoordinates: [...gridSensorU],
      vCoordinates: [...gridSensorV],
      rows,
    },
    summary: summarizePerspectiveDistortionSamples(vertical),
  };
}

function displacementStatistics(
  samples: readonly PerspectiveDistortionSample[],
  select: (sample: PerspectiveDistortionSample) => SensorFrameDisplacement | null,
): PerspectiveDistortionStatistics {
  const magnitudes = samples
    .filter((sample) => sample.status === "usable")
    .map(select)
    .filter((value): value is SensorFrameDisplacement => value !== null)
    .map((value) => value.magnitudeMm)
    .filter(Number.isFinite);
  if (magnitudes.length === 0) return { usableCount: 0, rmsMm: null, maxMm: null };
  const squareSum = magnitudes.reduce((sum, value) => sum + value * value, 0);
  return {
    usableCount: magnitudes.length,
    rmsMm: Math.sqrt(squareSum / magnitudes.length),
    maxMm: Math.max(...magnitudes),
  };
}

function sampleSceneLockedCoordinates(
  context: PerspectiveTraceContext,
  requestedUvs: readonly SensorUv[],
  options: Omit<PerspectiveFieldSamplingOptions, "pupilBundle"> | undefined,
): Map<string, FieldSample | null> {
  const uniqueUvs = new Map<string, SensorUv>();
  for (const sensorUv of requestedUvs) uniqueUvs.set(sensorUvKey(sensorUv), sensorUv);

  const valid: { key: string; direction: Vec3 }[] = [];
  const samples = new Map<string, FieldSample | null>();
  for (const [key, sensorUv] of uniqueUvs) {
    const direction = zeroPoseSceneDirectionForSensorUv(context, sensorUv, options?.focalLengthMm);
    if (direction) valid.push({ key, direction });
    else samples.set(key, null);
  }

  const traced = sampleSceneLockedFields(
    context,
    valid.map((entry) => entry.direction),
    { ...options, pupilBundle: null },
  );
  valid.forEach((entry, index) => samples.set(entry.key, traced[index] ?? null));
  return samples;
}

function sensorUvKey({ u, v }: SensorUv): string {
  return `${u === 0 ? 0 : u}|${v === 0 ? 0 : v}`;
}

function evenlySpacedSigned(count: number): number[] {
  return Array.from({ length: count }, (_, index) => -1 + (2 * index) / (count - 1));
}
