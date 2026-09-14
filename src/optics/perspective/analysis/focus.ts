/** Sensor-locked signed blur, best-focus, and bokeh footprints for moved lenses. */

import { buildBokehRadialProfile, classifyBokehBrightnessCharacter } from "../../aberration/bokeh.js";
import {
  BOKEH_CIRCULAR_PUPIL_RING_SAMPLES,
  type BokehBrightnessCharacter,
  type BokehPoint,
  type BokehPupilFootprint,
  type BokehPupilSample,
  type BokehRadialProfile,
} from "../../aberration/types.js";
import { sampleCircularPupil } from "../../rayTrace.js";
import type { Vec3 } from "../../types.js";
import {
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
  summarizePerspectiveSensorSpot,
  type PerspectiveAffineSensorRay,
  type PerspectiveSensorBestFocus,
  type PerspectiveSensorSpotSummary,
} from "./imageSpace.js";

const DEFAULT_BOKEH_SENSOR_UVS: readonly SensorUv[] = [
  { u: 0, v: -1 },
  { u: 0, v: -0.5 },
  { u: 0, v: 0 },
  { u: 0, v: 0.5 },
  { u: 0, v: 1 },
];
const MIN_BOKEH_RAYS = 3;

/** Controls for fixed-sensor blur and point-spread sampling. */
export interface PerspectiveFocusOptions {
  /** Current physical aperture-stop semi-diameter in millimeters. */
  stopSemiDiameterMm: number;
  /** Current entrance-pupil semi-diameter; derived from the stop when omitted. */
  pupilSemiDiameterMm?: number;
  /** Ordered sensor coordinates. Signed and unavailable coordinates are retained. */
  sensorUvs?: readonly SensorUv[];
  /** Explicit area-weighted circular pupil quadrature. */
  pupilPoints?: readonly PerspectivePupilPoint[];
  /** Existing ring populations used only when `pupilPoints` is omitted. */
  pupilRingSamples?: readonly number[];
  fieldSampling?: Omit<PerspectiveFieldSamplingOptions, "pupilBundle">;
}

/** Point-spread footprint at one fixed-sensor field coordinate. */
export interface PerspectiveBokehFootprint {
  totalRays: number;
  passedRays: number;
  points: readonly BokehPoint[];
  /** Signed centroid relative to the requested point in field-aligned coordinates. */
  centroidSagittalMm: number | null;
  centroidTangentialMm: number | null;
  rmsRadiusMm: number | null;
  maxRadiusMm: number | null;
  mechanicalTransmission: number;
  transmittedWeight: number;
  pupilFootprint: BokehPupilFootprint;
  radialProfile: BokehRadialProfile;
  brightnessCharacter: BokehBrightnessCharacter;
  centerToRimRatio: number;
  usable: boolean;
}

/** One requested sensor point, including unavailable fields and pupil rays in input order. */
export interface PerspectiveFocusFieldSample {
  requestedSensorUv: SensorUv;
  status: PerspectiveFieldStatus;
  sensorPoint: Vec3 | null;
  fieldAngleDeg: number | null;
  /** Signed fixed-u/v blur relative to the requested sensor point. */
  sensorBlur: PerspectiveSensorSpotSummary | null;
  /** Circle-of-least-confusion offset along the fixed sensor normal. */
  bestFocus: PerspectiveSensorBestFocus | null;
  bokeh: PerspectiveBokehFootprint;
  rays: readonly PerspectiveAffineSensorRay[];
  fieldSample: FieldSample;
}

/** Complete sensor-locked blur/bokeh analysis for one physical pose. */
export interface PerspectiveFocusAnalysis {
  contextCacheKey: string;
  stopSemiDiameterMm: number;
  pupilSemiDiameterMm: number;
  pupilPoints: readonly PerspectivePupilPoint[];
  samples: readonly PerspectiveFocusFieldSample[];
  usableSampleCount: number;
}

/** Reuse the established equal-area circular pupil sampler in perspective requests. */
export function createPerspectiveBokehPupilPoints(
  ringSamples: readonly number[] = BOKEH_CIRCULAR_PUPIL_RING_SAMPLES,
): PerspectivePupilPoint[] {
  return sampleCircularPupil(ringSamples).map((sample) => ({
    u: sample.xFraction,
    v: sample.yFraction,
    weight: sample.weight,
  }));
}

/** Compute movement-aware blur and bokeh directly on the fixed camera sensor. */
export function computePerspectiveFocusAnalysis(
  context: PerspectiveTraceContext,
  options: PerspectiveFocusOptions,
): PerspectiveFocusAnalysis {
  const pupilSemiDiameterMm = resolvePerspectivePupilSemiDiameter(
    context,
    options.stopSemiDiameterMm,
    options.pupilSemiDiameterMm,
  );
  const sensorUvs = options.sensorUvs ?? DEFAULT_BOKEH_SENSOR_UVS;
  const pupilPoints = options.pupilPoints
    ? options.pupilPoints.map((point) => ({ ...point }))
    : createPerspectiveBokehPupilPoints(options.pupilRingSamples);
  const fields = sampleSensorLockedFields(context, sensorUvs, {
    ...options.fieldSampling,
    pupilBundle: {
      kind: "circular",
      pupilSemiDiameterMm,
      stopSemiDiameterMm: options.stopSemiDiameterMm,
      points: pupilPoints,
      channel: options.fieldSampling?.chiefRay?.channel,
    },
  });
  const samples = fields.map((field, index) =>
    focusSampleFromField(context, field, sensorUvs[index] ?? { u: 0, v: 0 }),
  );

  return {
    contextCacheKey: context.cacheKey,
    stopSemiDiameterMm: options.stopSemiDiameterMm,
    pupilSemiDiameterMm,
    pupilPoints,
    samples,
    usableSampleCount: samples.filter((sample) => sample.status === "usable" && sample.bokeh.usable).length,
  };
}

/** Reduce one canonical field sample into signed sensor and field-aligned footprint metrics. */
export function focusSampleFromField(
  context: PerspectiveTraceContext,
  field: FieldSample,
  requestedSensorUv: SensorUv,
): PerspectiveFocusFieldSample {
  const referencePoint = field.sensorPoint ?? context.sensorPlane.point;
  const rays = affineSensorRaysFromField(context, field.pupilBundle?.samples ?? [], referencePoint);
  const sensorBlur = summarizePerspectiveSensorSpot(rays);
  const bestFocus = solvePerspectiveSensorBestFocus(rays);
  return {
    requestedSensorUv: { ...requestedSensorUv },
    status: field.status,
    sensorPoint: field.sensorPoint,
    fieldAngleDeg: cameraFieldAngleDeg(field.sceneDirectionCamera),
    sensorBlur,
    bestFocus,
    bokeh: perspectiveBokehFootprint(context, requestedSensorUv, rays),
    rays,
    fieldSample: field,
  };
}

/** Build a field-aligned bokeh footprint while preserving mechanical and photometric weights separately. */
export function perspectiveBokehFootprint(
  context: PerspectiveTraceContext,
  requestedSensorUv: SensorUv,
  rays: readonly PerspectiveAffineSensorRay[],
): PerspectiveBokehFootprint {
  const axes = fieldSensorAxes(context, requestedSensorUv);
  const passed = rays.filter(
    (ray) => ray.status === "usable" && ray.sensorUMm !== null && ray.sensorVMm !== null && ray.mechanicalWeight > 0,
  );
  const pupilFootprint = buildPerspectivePupilFootprint(rays, passed);
  const points: BokehPoint[] = passed.map((ray) => ({
    index: ray.sourceIndex,
    sagittalOffset: ray.sensorUMm! * axes.sagittal.u + ray.sensorVMm! * axes.sagittal.v,
    tangentialOffset: ray.sensorUMm! * axes.tangential.u + ray.sensorVMm! * axes.tangential.v,
    pupilRadius: Math.hypot(ray.pupilUv.u, ray.pupilUv.v),
    pupilAzimuth: Math.atan2(ray.pupilUv.v, ray.pupilUv.u),
    weight: ray.photometricWeight,
  }));
  const transmittedWeight = points.reduce((sum, point) => sum + point.weight, 0);
  const usable = points.length >= MIN_BOKEH_RAYS && Number.isFinite(transmittedWeight) && transmittedWeight > 1e-15;
  const centroidSagittalMm = usable
    ? points.reduce((sum, point) => sum + point.sagittalOffset * point.weight, 0) / transmittedWeight
    : null;
  const centroidTangentialMm = usable
    ? points.reduce((sum, point) => sum + point.tangentialOffset * point.weight, 0) / transmittedWeight
    : null;
  const radii =
    centroidSagittalMm === null || centroidTangentialMm === null
      ? []
      : points.map((point) =>
          Math.hypot(point.sagittalOffset - centroidSagittalMm, point.tangentialOffset - centroidTangentialMm),
        );
  const rmsRadiusMm = usable
    ? Math.sqrt(points.reduce((sum, point, index) => sum + point.weight * radii[index] ** 2, 0) / transmittedWeight)
    : null;
  const maxRadiusMm = usable ? Math.max(...radii) : null;
  const radialProfile = buildBokehRadialProfile(
    usable ? points : [],
    centroidSagittalMm ?? 0,
    centroidTangentialMm ?? 0,
  );
  const { brightnessCharacter, centerToRimRatio } = classifyBokehBrightnessCharacter(radialProfile);

  return {
    totalRays: rays.length,
    passedRays: passed.length,
    points,
    centroidSagittalMm,
    centroidTangentialMm,
    rmsRadiusMm,
    maxRadiusMm,
    mechanicalTransmission: pupilFootprint.transmission,
    transmittedWeight,
    pupilFootprint,
    radialProfile,
    brightnessCharacter,
    centerToRimRatio,
    usable,
  };
}

function buildPerspectivePupilFootprint(
  rays: readonly PerspectiveAffineSensorRay[],
  passed: readonly PerspectiveAffineSensorRay[],
): BokehPupilFootprint {
  const totalWeight = rays.reduce((sum, ray) => sum + ray.mechanicalWeight, 0);
  const samples: BokehPupilSample[] = passed.map((ray) => ({
    index: ray.sourceIndex,
    xFraction: ray.pupilUv.u,
    yFraction: ray.pupilUv.v,
    pupilRadius: Math.hypot(ray.pupilUv.u, ray.pupilUv.v),
    pupilAzimuth: Math.atan2(ray.pupilUv.v, ray.pupilUv.u),
    weight: ray.mechanicalWeight,
  }));
  const passedWeight = samples.reduce((sum, sample) => sum + sample.weight, 0);
  if (samples.length === 0 || passedWeight <= 1e-15) {
    return emptyPupilFootprint(totalWeight > 0 ? passedWeight / totalWeight : 0);
  }
  const centroidSagittal = samples.reduce((sum, sample) => sum + sample.xFraction * sample.weight, 0) / passedWeight;
  const centroidTangential = samples.reduce((sum, sample) => sum + sample.yFraction * sample.weight, 0) / passedWeight;
  const xs = samples.map((sample) => sample.xFraction);
  const ys = samples.map((sample) => sample.yFraction);
  const spanSagittal = Math.max(...xs) - Math.min(...xs);
  const spanTangential = Math.max(...ys) - Math.min(...ys);
  const maxSpan = Math.max(spanSagittal, spanTangential);
  return {
    samples,
    transmission: totalWeight > 0 ? passedWeight / totalWeight : 0,
    centroidSagittal,
    centroidTangential,
    spanSagittal,
    spanTangential,
    shiftRadius: Math.hypot(centroidSagittal, centroidTangential),
    catEyeAspect: maxSpan > 1e-12 ? Math.min(spanSagittal, spanTangential) / maxSpan : 0,
  };
}

function emptyPupilFootprint(transmission: number): BokehPupilFootprint {
  return {
    samples: [],
    transmission,
    centroidSagittal: 0,
    centroidTangential: 0,
    spanSagittal: 0,
    spanTangential: 0,
    shiftRadius: 0,
    catEyeAspect: 0,
  };
}
