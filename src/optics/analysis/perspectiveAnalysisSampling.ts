/** Signed fixed-sensor sampling policy shared by perspective requests and lazy jobs. */

import { CHROMATIC_CHANNEL_ORDER } from "../chromatic/channels.js";
import type { PerspectiveFieldSamplingOptions, SensorUv } from "../perspective/fieldSampling.js";
import type { PerspectiveChromaticOptions } from "../perspective/analysis/chromatic.js";
import type { PerspectiveDistortionOptions } from "../perspective/analysis/distortion.js";
import type { PerspectiveFieldAberrationOptions } from "../perspective/analysis/fieldAberrations.js";
import type { PerspectiveFocusOptions } from "../perspective/analysis/focus.js";
import type { PerspectivePupilOptions } from "../perspective/analysis/pupil.js";
import {
  createAreaWeightedCircularPupilPoints,
  type PerspectiveVignettingOptions,
} from "../perspective/analysis/vignetting.js";
import type { AnalysisSamplingOptions } from "./analysisQuality.js";
import type { AnalysisRequest } from "./request.js";

const SETTLED_SENSOR_MAGNITUDES = [0, 0.25, 0.5, 0.75, 1] as const;
const SETTLED_DISTORTION_CURVE_SAMPLE_COUNT = 17;
const SETTLED_DISTORTION_GRID_MAGNITUDES = [0, 0.5, 1] as const;
const SETTLED_VIGNETTING_FIELD_SAMPLE_COUNT = 9;
const SETTLED_VIGNETTING_PUPIL_SAMPLE_COUNT = 60;
const SETTLED_PUPIL_FIELD_SAMPLE_COUNT = 9;
const SETTLED_PUPIL_FRACTION_SAMPLE_COUNT = 17;
const INTERACTIVE_PUPIL_FRACTION_SAMPLE_COUNT = 7;
const INTERACTIVE_SENSOR_UVS: readonly SensorUv[] = [
  { u: 0, v: -1 },
  { u: 0, v: 0 },
  { u: 0, v: 1 },
];
const DEFAULT_CHROMATIC_PUPIL_FRACTIONS = [-0.9, -0.6, -0.3, 0, 0.3, 0.6, 0.9] as const;

/** Concrete engine options derived once for one analysis-context identity. */
export interface PerspectiveAnalysisSamplingPlan {
  focus: PerspectiveFocusOptions;
  fieldAberrations: PerspectiveFieldAberrationOptions;
  chromatic: PerspectiveChromaticOptions;
  distortion: PerspectiveDistortionOptions;
  vignetting: PerspectiveVignettingOptions;
  pupils: PerspectivePupilOptions;
}

/**
 * Translate the existing centered-analysis quality knobs into signed fixed-sensor requests.
 *
 * Every field family explicitly spans top (-1), center (0), and bottom (+1).
 * Interactive work uses only those three field points; settled work uses denser
 * signed sequences while preserving the same fixed-camera convention.
 *
 * @param request - frozen physical aperture, EFL, quality and sampling overrides
 * @returns concrete field and pupil sampling options in their original order
 */
export function perspectiveAnalysisSamplingPlan({
  dynamicEFL,
  aperture: { entrancePupilSemiDiameterMm: currentEPSD, stopSemiDiameterMm: currentPhysStopSD },
  analysisQuality = "settled",
  sampling,
}: AnalysisRequest): PerspectiveAnalysisSamplingPlan {
  const qualitySampling = sampling ?? {};
  const interactive = analysisQuality === "interactive";
  const fieldSampling: Omit<PerspectiveFieldSamplingOptions, "pupilBundle"> = {
    focalLengthMm: dynamicEFL,
  };
  const settledSensorUvs = signedSensorUvs(SETTLED_SENSOR_MAGNITUDES);
  const interactiveSensorUvs = copySensorUvs(INTERACTIVE_SENSOR_UVS);
  const focusSensorUvs = interactive
    ? interactiveSensorUvs
    : sensorUvsFromFieldFractions(qualitySampling.bokehFieldFractions, settledSensorUvs);
  const fieldAberrationSensorUvs = interactive
    ? interactiveSensorUvs
    : sensorUvsFromFieldFractions(
        combineFieldFractions(
          qualitySampling.fieldCurvatureFieldFractions,
          qualitySampling.fieldCurvatureCurveFieldFractions,
          qualitySampling.comaFieldFractions,
          qualitySampling.comaDetailFieldFraction === undefined ? undefined : [qualitySampling.comaDetailFieldFraction],
        ),
        settledSensorUvs,
      );
  const chromaticSensorUvs = interactive
    ? interactiveSensorUvs
    : sensorUvsFromFieldFractions(
        qualitySampling.chromaticLateralFieldFractions ?? qualitySampling.fieldCurvatureFieldFractions,
        settledSensorUvs,
      );
  const distortionGridCoordinates = interactive ? [-1, 0, 1] : distortionGridCoordinatesForSampling(qualitySampling);
  const vignettingPupilPoints = circularPupilPointsForCount(
    qualitySampling.vignettingPupilSampleCount ?? SETTLED_VIGNETTING_PUPIL_SAMPLE_COUNT,
  );
  const pupilFractionSampleCount = interactive
    ? INTERACTIVE_PUPIL_FRACTION_SAMPLE_COUNT
    : SETTLED_PUPIL_FRACTION_SAMPLE_COUNT;
  return {
    focus: {
      sensorUvs: copySensorUvs(focusSensorUvs),
      pupilRingSamples: copyNumbers(qualitySampling.bokehRingSamples ?? qualitySampling.sphericalBlurRingSamples),
      fieldSampling,
    },
    fieldAberrations: {
      sensorUvs: copySensorUvs(fieldAberrationSensorUvs),
      focusFanSampleCount:
        maxDefined(qualitySampling.fieldCurvatureDiagnosticSampleCount, qualitySampling.comaFanSampleCount) ??
        undefined,
      comaRingSamples: copyNumbers(qualitySampling.comaRingSamples),
      fieldSampling,
    },
    chromatic: {
      sensorUvs: copySensorUvs(chromaticSensorUvs),
      channels: CHROMATIC_CHANNEL_ORDER,
      pupilFractions: chromaticPupilFractions(qualitySampling),
      fieldSampling,
    },
    distortion: {
      verticalSensorV: interactive
        ? [-1, 0, 1]
        : evenlySpacedSigned(qualitySampling.distortionCurveSampleCount ?? SETTLED_DISTORTION_CURVE_SAMPLE_COUNT),
      gridSensorU: distortionGridCoordinates,
      gridSensorV: distortionGridCoordinates,
      fieldSampling,
    },
    vignetting: {
      stopSemiDiameterMm: currentPhysStopSD,
      pupilSemiDiameterMm: currentEPSD,
      sensorUvs: interactive
        ? copySensorUvs(INTERACTIVE_SENSOR_UVS)
        : sensorUvsForCount(qualitySampling.vignettingFieldSampleCount ?? SETTLED_VIGNETTING_FIELD_SAMPLE_COUNT),
      pupilPoints: vignettingPupilPoints,
      fieldSampling,
      includeActiveToZeroRatio: true,
    },
    pupils: {
      stopSemiDiameterMm: currentPhysStopSD,
      pupilSemiDiameterMm: currentEPSD,
      sensorUvs: interactive
        ? copySensorUvs(INTERACTIVE_SENSOR_UVS)
        : sensorUvsForCount(qualitySampling.pupilAberrationSampleCount ?? SETTLED_PUPIL_FIELD_SAMPLE_COUNT),
      pupilFractions: evenlySpacedSigned(pupilFractionSampleCount),
      fieldSampling,
    },
  };
}

function signedSensorUvs(magnitudes: readonly number[]): SensorUv[] {
  return signedValues(magnitudes, { includeBounds: true }).map((v) => ({ u: 0, v }));
}

function sensorUvsFromFieldFractions(
  fractions: readonly number[] | undefined,
  fallback: readonly SensorUv[],
): SensorUv[] {
  if (!fractions || fractions.length === 0) return copySensorUvs(fallback);
  return signedSensorUvs(fractions);
}

function combineFieldFractions(...collections: (readonly number[] | undefined)[]): number[] | undefined {
  const combined = collections.flatMap((values) => values ?? []);
  return combined.length > 0 ? combined : undefined;
}

function distortionGridCoordinatesForSampling(sampling: AnalysisSamplingOptions): number[] {
  if (sampling.distortionGridSegmentCount === undefined && sampling.distortionGridLineCoordinates === undefined) {
    return signedValues(SETTLED_DISTORTION_GRID_MAGNITUDES, { includeBounds: true });
  }
  const axisCoordinates = evenlySpacedSigned(
    sampling.distortionGridSegmentCount ?? SETTLED_DISTORTION_GRID_MAGNITUDES.length,
  );
  const requestedLines = sampling.distortionGridLineCoordinates ?? [];
  return [
    ...new Set(
      [...axisCoordinates, ...requestedLines].filter((value) => Number.isFinite(value) && Math.abs(value) <= 1),
    ),
  ]
    .map((value) => (value === 0 ? 0 : value))
    .sort((a, b) => a - b);
}

function signedValues(values: readonly number[], { includeBounds }: { includeBounds: boolean }): number[] {
  const magnitudes = values.filter(Number.isFinite).map(Math.abs);
  magnitudes.push(0);
  if (includeBounds) magnitudes.push(1);
  const unique = [...new Set(magnitudes.map((value) => (value === 0 ? 0 : value)))];
  return [...unique.filter((value) => value > 0).map((value) => -value), ...unique]
    .filter((value, index, all) => all.indexOf(value) === index)
    .sort((a, b) => a - b);
}

function copySensorUvs(sensorUvs: readonly SensorUv[]): SensorUv[] {
  return sensorUvs.map((sensorUv) => ({ ...sensorUv }));
}

function copyNumbers(values: readonly number[] | undefined): number[] | undefined {
  return values ? [...values] : undefined;
}

function sensorUvsForCount(count: number): SensorUv[] {
  return evenlySpacedSigned(count).map((v) => ({ u: 0, v }));
}

function evenlySpacedSigned(requestedCount: number): number[] {
  const rounded = Number.isFinite(requestedCount) ? Math.max(3, Math.round(requestedCount)) : 3;
  const count = rounded % 2 === 0 ? rounded + 1 : rounded;
  return Array.from({ length: count }, (_, index) => -1 + (2 * index) / (count - 1));
}

function circularPupilPointsForCount(requestedCount: number) {
  const count = Number.isFinite(requestedCount) ? Math.max(1, Math.round(requestedCount)) : 1;
  let radialStrata = Math.max(1, Math.floor(Math.sqrt(count / 2)));
  while (radialStrata > 1 && count % radialStrata !== 0) radialStrata--;
  return createAreaWeightedCircularPupilPoints(radialStrata, count / radialStrata);
}

function chromaticPupilFractions(sampling: AnalysisSamplingOptions): number[] {
  const requested = [
    ...(sampling.chromaticLongitudinalFractions ?? []),
    ...(sampling.chromaticRayTraceOnAxisFractions ?? []),
    ...(sampling.chromaticRayTraceOffAxisFractions ?? []),
  ];
  return requested.length > 0
    ? signedValues(requested, { includeBounds: false })
    : [...DEFAULT_CHROMATIC_PUPIL_FRACTIONS];
}

function maxDefined(...values: (number | undefined)[]): number | null {
  const finite = values.filter((value): value is number => value !== undefined && Number.isFinite(value));
  return finite.length > 0 ? Math.max(...finite) : null;
}
