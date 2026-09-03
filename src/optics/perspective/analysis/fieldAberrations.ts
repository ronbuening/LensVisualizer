/** Sensor-locked field curvature, astigmatism, and coma for moved lenses. */

import { COMA_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES, type ComaTailDirection } from "../../aberration/types.js";
import { sampleCircularPupil, sampleOrthogonalPupilFan } from "../../rayTrace.js";
import type { Vec3 } from "../../types.js";
import {
  sampleCircularPupilBundle,
  sampleSensorLockedFields,
  type FieldSample,
  type PerspectiveFieldSamplingOptions,
  type PerspectiveFieldStatus,
  type PerspectivePupilPoint,
  type SensorUv,
} from "../fieldSampling.js";
import type { PerspectiveTraceContext } from "../trace.js";
import {
  affineSensorRaysFromField,
  cameraFieldAngleDeg,
  fieldSensorAxes,
  resolvePerspectivePupilSemiDiameter,
  solvePerspectiveSensorBestFocus,
  type PerspectiveAffineSensorRay,
  type PerspectiveSensorBestFocus,
} from "./imageSpace.js";

const DEFAULT_FIELD_SENSOR_UVS: readonly SensorUv[] = [
  { u: 0, v: -1 },
  { u: 0, v: -0.5 },
  { u: 0, v: 0 },
  { u: 0, v: 0.5 },
  { u: 0, v: 1 },
];
const DEFAULT_FOCUS_FAN_SAMPLE_COUNT = 17;
const COMA_TAIL_RATIO_THRESHOLD = 1.15;

/** Shared controls for fixed-sensor field-aberration analysis. */
export interface PerspectiveFieldAberrationOptions {
  stopSemiDiameterMm: number;
  pupilSemiDiameterMm?: number;
  /** Ordered fixed-sensor coordinates; failures are retained at their requested positions. */
  sensorUvs?: readonly SensorUv[];
  /** Fractions used by both field-radial and perpendicular best-focus fans. */
  focusPupilFractions?: readonly number[];
  focusFanSampleCount?: number;
  /** Explicit circular pupil quadrature for coma. */
  comaPupilPoints?: readonly PerspectivePupilPoint[];
  comaRingSamples?: readonly number[];
  fieldSampling?: Omit<PerspectiveFieldSamplingOptions, "pupilBundle">;
}

/** One directional sensor-normal best-focus solve and its retained pupil fan. */
export interface PerspectiveDirectionalFieldFocus {
  axis: "tangential" | "sagittal";
  bestFocus: PerspectiveSensorBestFocus | null;
  sampleCount: number;
  usableSampleCount: number;
  rays: readonly PerspectiveAffineSensorRay[];
}

/** Tangential/sagittal focus at one requested sensor point. */
export interface PerspectiveFieldCurvatureSample {
  requestedSensorUv: SensorUv;
  status: PerspectiveFieldStatus;
  sensorPoint: Vec3 | null;
  fieldAngleDeg: number | null;
  tangential: PerspectiveDirectionalFieldFocus;
  sagittal: PerspectiveDirectionalFieldFocus;
  /** Sagittal minus tangential focus displacement along the fixed sensor normal. */
  astigmaticDifferenceMm: number | null;
  fieldSample: FieldSample;
}

/** Ordered movement-aware field-curvature curve. */
export interface PerspectiveFieldCurvatureAnalysis {
  contextCacheKey: string;
  samples: readonly PerspectiveFieldCurvatureSample[];
  usableSampleCount: number;
  sharedFocusShiftHalfRangeMm: number;
  maxAbsAstigmaticDifferenceMm: number | null;
}

/** One retained circular-pupil contribution to the fixed-sensor coma footprint. */
export interface PerspectiveComaRaySample {
  sourceIndex: number;
  pupilUv: SensorUv;
  status: Extract<PerspectiveFieldStatus, "usable" | "clipped" | "missed-sensor">;
  sensorPoint: Vec3 | null;
  sagittalOffsetMm: number | null;
  tangentialOffsetMm: number | null;
  weight: number;
  transmission: number;
}

/** Chief-relative coma footprint at one sensor-locked field point. */
export interface PerspectiveComaFieldSample {
  requestedSensorUv: SensorUv;
  status: PerspectiveFieldStatus;
  sensorPoint: Vec3 | null;
  chiefSensorPoint: Vec3 | null;
  fieldAngleDeg: number | null;
  rays: readonly PerspectiveComaRaySample[];
  sampleCount: number;
  usableSampleCount: number;
  centroidSagittalMm: number | null;
  centroidTangentialMm: number | null;
  rmsRadiusMm: number | null;
  sagittalSpanMm: number | null;
  tangentialSpanMm: number | null;
  tailDirection: ComaTailDirection | null;
  tailSkewRatio: number | null;
  usable: boolean;
  fieldSample: FieldSample;
}

/** Ordered movement-aware coma footprints. */
export interface PerspectiveComaAnalysis {
  contextCacheKey: string;
  samples: readonly PerspectiveComaFieldSample[];
  usableSampleCount: number;
  sharedSpotHalfRangeMm: number;
}

/** Combined field-curvature/astigmatism and coma result. */
export interface PerspectiveFieldAberrationAnalysis {
  contextCacheKey: string;
  pupilSemiDiameterMm: number;
  fieldCurvature: PerspectiveFieldCurvatureAnalysis;
  coma: PerspectiveComaAnalysis;
}

/** Build one deterministic cross-shaped pupil request for directional focus. */
export function createPerspectiveFocusCrossPoints(
  fractions: readonly number[] = sampleOrthogonalPupilFan(DEFAULT_FOCUS_FAN_SAMPLE_COUNT, "tangential").map(
    (sample) => sample.pupilFraction,
  ),
): PerspectivePupilPoint[] {
  if (fractions.some((fraction) => !Number.isFinite(fraction) || Math.abs(fraction) > 1 + 1e-9)) {
    throw new RangeError("focusPupilFractions must be finite values inside [-1, 1]");
  }
  const points = fractions.map((fraction) => ({ u: 0, v: fraction, weight: 1 }));
  for (const fraction of fractions) {
    const duplicate = points.some((point) => Math.abs(point.u - fraction) <= 1e-12 && Math.abs(point.v) <= 1e-12);
    if (!duplicate) points.push({ u: fraction, v: 0, weight: 1 });
  }
  return points;
}

/** Reuse the established equal-area coma point-cloud pattern. */
export function createPerspectiveComaPupilPoints(
  ringSamples: readonly number[] = COMA_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES,
): PerspectivePupilPoint[] {
  return sampleCircularPupil(ringSamples).map((sample) => ({
    u: sample.xFraction,
    v: sample.yFraction,
    weight: sample.weight,
  }));
}

/** Compute sensor-normal tangential/sagittal focus and fixed-sensor coma. */
export function computePerspectiveFieldAberrations(
  context: PerspectiveTraceContext,
  options: PerspectiveFieldAberrationOptions,
): PerspectiveFieldAberrationAnalysis {
  const pupilSemiDiameterMm = resolvePerspectivePupilSemiDiameter(
    context,
    options.stopSemiDiameterMm,
    options.pupilSemiDiameterMm,
  );
  const sensorUvs = options.sensorUvs ?? DEFAULT_FIELD_SENSOR_UVS;
  const focusFractions =
    options.focusPupilFractions ??
    sampleOrthogonalPupilFan(options.focusFanSampleCount ?? DEFAULT_FOCUS_FAN_SAMPLE_COUNT, "tangential").map(
      (sample) => sample.pupilFraction,
    );
  const focusPoints = createPerspectiveFocusCrossPoints(focusFractions);
  const comaPoints = options.comaPupilPoints
    ? options.comaPupilPoints.map((point) => ({ ...point }))
    : createPerspectiveComaPupilPoints(options.comaRingSamples);
  const focusFields = sampleSensorLockedFields(context, sensorUvs, {
    ...options.fieldSampling,
    pupilBundle: {
      kind: "circular",
      pupilSemiDiameterMm,
      stopSemiDiameterMm: options.stopSemiDiameterMm,
      points: focusPoints,
      channel: options.fieldSampling?.chiefRay?.channel,
    },
  });
  const comaFields = focusFields.map(
    (field): FieldSample => ({
      ...field,
      pupilBundle: field.chiefSolve
        ? sampleCircularPupilBundle(
            context,
            field.chiefSolve,
            pupilSemiDiameterMm,
            comaPoints,
            options.fieldSampling?.chiefRay?.channel,
            options.stopSemiDiameterMm,
          )
        : null,
    }),
  );
  const curvatureSamples = focusFields.map((field, index) =>
    fieldCurvatureSample(context, field, sensorUvs[index] ?? { u: 0, v: 0 }),
  );
  const comaSamples = comaFields.map((field, index) => comaSample(context, field, sensorUvs[index] ?? { u: 0, v: 0 }));

  return {
    contextCacheKey: context.cacheKey,
    pupilSemiDiameterMm,
    fieldCurvature: buildFieldCurvatureAnalysis(context.cacheKey, curvatureSamples),
    coma: buildComaAnalysis(context.cacheKey, comaSamples),
  };
}

/** Reduce an ordered focus bundle into tangential and sagittal sensor-normal positions. */
export function fieldCurvatureSample(
  context: PerspectiveTraceContext,
  field: FieldSample,
  requestedSensorUv: SensorUv,
): PerspectiveFieldCurvatureSample {
  const rays = affineSensorRaysFromField(context, field.pupilBundle?.samples ?? [], field.sensorPoint ?? undefined);
  const axes = fieldSensorAxes(context, requestedSensorUv);
  const tangentialRays = rays.filter((ray) => Math.abs(ray.pupilUv.u) <= 1e-10);
  const sagittalRays = rays.filter((ray) => Math.abs(ray.pupilUv.v) <= 1e-10);
  const tangentialBestFocus = solvePerspectiveSensorBestFocus(tangentialRays, [axes.tangential]);
  const sagittalBestFocus = solvePerspectiveSensorBestFocus(sagittalRays, [axes.sagittal]);
  return {
    requestedSensorUv: { ...requestedSensorUv },
    status: field.status,
    sensorPoint: field.sensorPoint,
    fieldAngleDeg: cameraFieldAngleDeg(field.sceneDirectionCamera),
    tangential: directionalFocus("tangential", tangentialRays, tangentialBestFocus),
    sagittal: directionalFocus("sagittal", sagittalRays, sagittalBestFocus),
    astigmaticDifferenceMm:
      tangentialBestFocus && sagittalBestFocus
        ? sagittalBestFocus.normalOffsetMm - tangentialBestFocus.normalOffsetMm
        : null,
    fieldSample: field,
  };
}

/** Reduce a circular bundle into a chief-relative fixed-sensor coma footprint. */
export function comaSample(
  context: PerspectiveTraceContext,
  field: FieldSample,
  requestedSensorUv: SensorUv,
): PerspectiveComaFieldSample {
  const chiefSensorPoint = field.actualSensorIntercept ?? field.sensorPoint;
  const affineRays = affineSensorRaysFromField(
    context,
    field.pupilBundle?.samples ?? [],
    chiefSensorPoint ?? context.sensorPlane.point,
  );
  const axes = fieldSensorAxes(context, requestedSensorUv);
  const rays: PerspectiveComaRaySample[] = affineRays.map((ray) => ({
    sourceIndex: ray.sourceIndex,
    pupilUv: { ...ray.pupilUv },
    status: ray.status,
    sensorPoint: ray.sensorPoint,
    sagittalOffsetMm:
      ray.sensorUMm === null || ray.sensorVMm === null
        ? null
        : ray.sensorUMm * axes.sagittal.u + ray.sensorVMm * axes.sagittal.v,
    tangentialOffsetMm:
      ray.sensorUMm === null || ray.sensorVMm === null
        ? null
        : ray.sensorUMm * axes.tangential.u + ray.sensorVMm * axes.tangential.v,
    weight: ray.photometricWeight,
    transmission: ray.transmission,
  }));
  const usableRays = rays.filter(
    (ray) =>
      ray.status === "usable" && ray.weight > 0 && ray.sagittalOffsetMm !== null && ray.tangentialOffsetMm !== null,
  );
  const totalWeight = usableRays.reduce((sum, ray) => sum + ray.weight, 0);
  const usable = usableRays.length >= 3 && Number.isFinite(totalWeight) && totalWeight > 1e-15;
  const centroidSagittalMm = usable
    ? usableRays.reduce((sum, ray) => sum + ray.sagittalOffsetMm! * ray.weight, 0) / totalWeight
    : null;
  const centroidTangentialMm = usable
    ? usableRays.reduce((sum, ray) => sum + ray.tangentialOffsetMm! * ray.weight, 0) / totalWeight
    : null;
  const sagittalValues = usableRays.map((ray) => ray.sagittalOffsetMm!);
  const tangentialValues = usableRays.map((ray) => ray.tangentialOffsetMm!);
  const sagittalSpanMm = usable ? span(sagittalValues) : null;
  const tangentialSpanMm = usable ? span(tangentialValues) : null;
  const rmsRadiusMm =
    usable && centroidSagittalMm !== null && centroidTangentialMm !== null
      ? Math.sqrt(
          usableRays.reduce(
            (sum, ray) =>
              sum +
              ray.weight *
                ((ray.sagittalOffsetMm! - centroidSagittalMm) ** 2 +
                  (ray.tangentialOffsetMm! - centroidTangentialMm) ** 2),
            0,
          ) / totalWeight,
        )
      : null;
  const tail =
    usable && centroidTangentialMm !== null
      ? describeComaTail(tangentialValues.map((value) => value - centroidTangentialMm))
      : null;

  return {
    requestedSensorUv: { ...requestedSensorUv },
    status: field.status,
    sensorPoint: field.sensorPoint,
    chiefSensorPoint,
    fieldAngleDeg: cameraFieldAngleDeg(field.sceneDirectionCamera),
    rays,
    sampleCount: rays.length,
    usableSampleCount: usableRays.length,
    centroidSagittalMm,
    centroidTangentialMm,
    rmsRadiusMm,
    sagittalSpanMm,
    tangentialSpanMm,
    tailDirection: tail?.tailDirection ?? null,
    tailSkewRatio: tail?.tailSkewRatio ?? null,
    usable,
    fieldSample: field,
  };
}

/** Classify the signed field-radial tail, where positive points toward the selected field edge. */
export function describeComaTail(
  centeredTangentialOffsets: readonly number[],
): { tailDirection: ComaTailDirection; tailSkewRatio: number } | null {
  const finite = centeredTangentialOffsets.filter(Number.isFinite);
  if (finite.length === 0) return null;
  const towardEdge = Math.max(0, ...finite);
  const towardCenter = Math.max(0, ...finite.map((value) => -value));
  const smaller = Math.min(towardEdge, towardCenter);
  const larger = Math.max(towardEdge, towardCenter);
  const tailSkewRatio = smaller > 1e-12 ? larger / smaller : larger > 1e-12 ? Number.POSITIVE_INFINITY : 1;
  const tailDirection =
    tailSkewRatio < COMA_TAIL_RATIO_THRESHOLD
      ? "balanced"
      : towardEdge > towardCenter
        ? "toward-edge"
        : "toward-center";
  return { tailDirection, tailSkewRatio };
}

function directionalFocus(
  axis: PerspectiveDirectionalFieldFocus["axis"],
  rays: readonly PerspectiveAffineSensorRay[],
  bestFocus: PerspectiveSensorBestFocus | null,
): PerspectiveDirectionalFieldFocus {
  return {
    axis,
    bestFocus,
    sampleCount: rays.length,
    usableSampleCount: rays.filter((ray) => ray.status === "usable" && ray.photometricWeight > 0).length,
    rays,
  };
}

function buildFieldCurvatureAnalysis(
  contextCacheKey: string,
  samples: readonly PerspectiveFieldCurvatureSample[],
): PerspectiveFieldCurvatureAnalysis {
  const usable = samples.filter((sample) => sample.tangential.bestFocus !== null && sample.sagittal.bestFocus !== null);
  const focusShifts = usable.flatMap((sample) => [
    sample.tangential.bestFocus!.normalOffsetMm,
    sample.sagittal.bestFocus!.normalOffsetMm,
  ]);
  const astigmatism = usable.flatMap((sample) =>
    sample.astigmaticDifferenceMm === null ? [] : [Math.abs(sample.astigmaticDifferenceMm)],
  );
  return {
    contextCacheKey,
    samples,
    usableSampleCount: usable.length,
    sharedFocusShiftHalfRangeMm: Math.max(0.1, ...focusShifts.map(Math.abs)),
    maxAbsAstigmaticDifferenceMm: astigmatism.length > 0 ? Math.max(...astigmatism) : null,
  };
}

function buildComaAnalysis(
  contextCacheKey: string,
  samples: readonly PerspectiveComaFieldSample[],
): PerspectiveComaAnalysis {
  const usable = samples.filter((sample) => sample.usable);
  return {
    contextCacheKey,
    samples,
    usableSampleCount: usable.length,
    sharedSpotHalfRangeMm: Math.max(
      0.01,
      ...usable.map((sample) => Math.max((sample.sagittalSpanMm ?? 0) / 2, (sample.tangentialSpanMm ?? 0) / 2)),
    ),
  };
}

function span(values: readonly number[]): number {
  return values.length > 0 ? Math.max(...values) - Math.min(...values) : 0;
}
