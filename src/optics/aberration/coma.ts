import { bAtZoom, halfFieldAtZoom, traceRay, yRatioAtZoom } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type {
  ComaPreviewFieldResult,
  ComaPreviewResult,
  EstimatedComaPoint,
  EstimatedComaPreviewFieldResult,
  EstimatedComaPreviewResult,
  MeridionalComaResult,
  MeridionalComaSample,
} from "./types.js";
import { COMA_PREVIEW_FIELD_FRACTIONS, MERIDIONAL_COMA_SAMPLE_COUNT } from "./types.js";
import { imagePlaneIntercept } from "./shared.js";

const ESTIMATED_COMA_MAX_CHORD_POINTS_PER_SIDE = 5;
const ESTIMATED_COMA_MIN_SHARED_TANGENTIAL_HALF_RANGE_MM = 0.01;
const ESTIMATED_COMA_NORMALIZED_SAGITTAL_HALF_RANGE = 1;
const ESTIMATED_COMA_MIN_SLICE_WEIGHT = 0.08;

const COMA_PREVIEW_FIELD_LABELS: Record<(typeof COMA_PREVIEW_FIELD_FRACTIONS)[number], string> = {
  0: "Center",
  0.25: "25%",
  0.5: "50%",
  0.75: "75%",
};

interface ComaPreviewFieldMeta {
  fieldFraction: (typeof COMA_PREVIEW_FIELD_FRACTIONS)[number];
  label: string;
}

interface MeridionalComaFieldSample extends MeridionalComaSample {
  relativeImageHeight: number | null;
}

interface MeridionalComaFieldFootprint {
  fieldFraction: number;
  fieldAngleDeg: number;
  sampleCount: number;
  validSampleCount: number;
  clippedSampleCount: number;
  centerIntercept: number;
  minIntercept: number;
  maxIntercept: number;
  minRelativeIntercept: number;
  maxRelativeIntercept: number;
  lowerIntercept: number;
  upperIntercept: number;
  spanMm: number;
  spanUm: number;
  samples: MeridionalComaFieldSample[];
}

interface FixedComaPreviewFootprint {
  fieldFraction: (typeof COMA_PREVIEW_FIELD_FRACTIONS)[number];
  label: string;
  footprint: MeridionalComaFieldFootprint | null;
}

function fixedComaPreviewFieldMeta(): ComaPreviewFieldMeta[] {
  return COMA_PREVIEW_FIELD_FRACTIONS.map((fieldFraction) => ({
    fieldFraction,
    label: COMA_PREVIEW_FIELD_LABELS[fieldFraction],
  }));
}

function buildFixedComaPreviewFootprints(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): FixedComaPreviewFootprint[] {
  return fixedComaPreviewFieldMeta().map(({ fieldFraction, label }) => ({
    fieldFraction,
    label,
    footprint: computeMeridionalComaFieldFootprint(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      fieldFraction,
    ),
  }));
}

function emptyComaPreviewFieldResult({ fieldFraction, label }: ComaPreviewFieldMeta): ComaPreviewFieldResult {
  return {
    fieldFraction,
    label,
    fieldAngleDeg: 0,
    sampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
    validSampleCount: 0,
    clippedSampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
    chiefIntercept: 0,
    minRelativeIntercept: 0,
    maxRelativeIntercept: 0,
    samples: Array.from({ length: MERIDIONAL_COMA_SAMPLE_COUNT }, (_, index) => ({
      index,
      pupilFraction: -1 + (2 * index) / (MERIDIONAL_COMA_SAMPLE_COUNT - 1),
      launchHeight: 0,
      imageHeight: null,
      relativeImageHeight: null,
      clipped: true,
    })),
    usable: false,
  };
}

function comaPreviewFieldResultFromFootprint({
  fieldFraction,
  label,
  footprint,
}: FixedComaPreviewFootprint): ComaPreviewFieldResult {
  if (footprint === null) {
    return emptyComaPreviewFieldResult({ fieldFraction, label });
  }

  return {
    fieldFraction,
    label,
    fieldAngleDeg: footprint.fieldAngleDeg,
    sampleCount: footprint.sampleCount,
    validSampleCount: footprint.validSampleCount,
    clippedSampleCount: footprint.clippedSampleCount,
    chiefIntercept: footprint.centerIntercept,
    minRelativeIntercept: footprint.minRelativeIntercept,
    maxRelativeIntercept: footprint.maxRelativeIntercept,
    samples: footprint.samples,
    usable: true,
  };
}

function emptyEstimatedComaPreviewFieldResult({
  fieldFraction,
  label,
}: ComaPreviewFieldMeta): EstimatedComaPreviewFieldResult {
  return {
    fieldFraction,
    label,
    fieldAngleDeg: 0,
    sampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
    validSampleCount: 0,
    clippedSampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
    chiefIntercept: 0,
    minRelativeIntercept: 0,
    maxRelativeIntercept: 0,
    points: [],
    usable: false,
  };
}

export function estimatedChordPointCount(chordHalfSpan: number): number {
  return Math.max(1, 2 * Math.round(chordHalfSpan * ESTIMATED_COMA_MAX_CHORD_POINTS_PER_SIDE) + 1);
}

export function synthesizeEstimatedComaPoints(samples: MeridionalComaFieldSample[]): EstimatedComaPoint[] {
  const points: EstimatedComaPoint[] = [];

  for (const sample of samples) {
    if (sample.clipped || sample.relativeImageHeight === null || sample.imageHeight === null) continue;

    const chordHalfSpan = Math.sqrt(Math.max(0, 1 - sample.pupilFraction * sample.pupilFraction));
    const pointCount = estimatedChordPointCount(chordHalfSpan);
    const sliceWeight = Math.max(ESTIMATED_COMA_MIN_SLICE_WEIGHT, chordHalfSpan);

    for (let pointIndex = 0; pointIndex < pointCount; pointIndex++) {
      const chordFraction = pointCount === 1 ? 0 : -1 + (2 * pointIndex) / (pointCount - 1);
      points.push({
        index: points.length,
        sourceSampleIndex: sample.index,
        tangentialImageHeight: sample.relativeImageHeight,
        sagittalNormalized: chordFraction * chordHalfSpan,
        weight: sliceWeight / pointCount,
      });
    }
  }

  return points;
}

function estimatedComaPreviewFieldResultFromFootprint({
  fieldFraction,
  label,
  footprint,
}: FixedComaPreviewFootprint): EstimatedComaPreviewFieldResult {
  if (footprint === null) {
    return emptyEstimatedComaPreviewFieldResult({ fieldFraction, label });
  }

  return {
    fieldFraction,
    label,
    fieldAngleDeg: footprint.fieldAngleDeg,
    sampleCount: footprint.sampleCount,
    validSampleCount: footprint.validSampleCount,
    clippedSampleCount: footprint.clippedSampleCount,
    chiefIntercept: footprint.centerIntercept,
    minRelativeIntercept: footprint.minRelativeIntercept,
    maxRelativeIntercept: footprint.maxRelativeIntercept,
    points: synthesizeEstimatedComaPoints(footprint.samples),
    usable: true,
  };
}

function computeMeridionalComaFieldFootprint(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldFraction: number,
): MeridionalComaFieldFootprint | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const halfFieldDeg = halfFieldAtZoom(zoomT, L);
  if (!isFinite(halfFieldDeg) || halfFieldDeg < 0) return null;

  const yRatio = yRatioAtZoom(zoomT, L);
  if (!isFinite(yRatio) || Math.abs(yRatio) < 1e-12) return null;

  if (!isFinite(fieldFraction) || fieldFraction < 0 || fieldFraction > 1) return null;

  const fieldAngleDeg = halfFieldDeg * fieldFraction;
  if (!isFinite(fieldAngleDeg) || fieldAngleDeg < 0) return null;

  const uField = -Math.tan((fieldAngleDeg * Math.PI) / 180);
  const yChief = -(bAtZoom(zoomT, L) / yRatio) * uField;
  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + (L.S[L.N - 1]?.d ?? 0);
  if (!isFinite(imagePlaneZ)) return null;

  const samples: MeridionalComaFieldSample[] = [];
  const validSamples: Array<MeridionalComaFieldSample & { imageHeight: number }> = [];

  for (let index = 0; index < MERIDIONAL_COMA_SAMPLE_COUNT; index++) {
    const pupilFraction = -1 + (2 * index) / (MERIDIONAL_COMA_SAMPLE_COUNT - 1);
    const launchHeight = yChief + pupilFraction * currentEPSD;
    const trace = traceRay(launchHeight, uField, zPos, focusT, zoomT, currentPhysStopSD, true, L);
    const projectedHeight = trace.clipped ? null : imagePlaneIntercept(trace.y, trace.u, lastSurfZ, imagePlaneZ);
    const sample: MeridionalComaFieldSample = {
      index,
      pupilFraction,
      launchHeight,
      imageHeight: projectedHeight,
      relativeImageHeight: null,
      clipped: trace.clipped || projectedHeight === null,
    };
    samples.push(sample);
    if (sample.imageHeight !== null && !sample.clipped) {
      validSamples.push(sample as MeridionalComaFieldSample & { imageHeight: number });
    }
  }

  if (validSamples.length < 3) return null;

  const centerSample =
    validSamples.find((sample) => Math.abs(sample.pupilFraction) < 1e-9) ??
    validSamples.reduce((best, sample) =>
      Math.abs(sample.pupilFraction) < Math.abs(best.pupilFraction) ? sample : best,
    );
  const centerIntercept = centerSample.imageHeight;

  for (const sample of samples) {
    sample.relativeImageHeight = sample.imageHeight === null ? null : sample.imageHeight - centerIntercept;
  }

  const lowerSample = validSamples.find((sample) => sample.pupilFraction < 0) ?? null;
  const upperSample = [...validSamples].reverse().find((sample) => sample.pupilFraction > 0) ?? null;

  if (!lowerSample || !upperSample) return null;

  const intercepts = validSamples.map((sample) => sample.imageHeight);
  const relativeIntercepts = validSamples.map((sample) => sample.imageHeight - centerIntercept);
  const spanMm = upperSample.imageHeight - lowerSample.imageHeight;

  return {
    fieldFraction,
    fieldAngleDeg,
    sampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
    validSampleCount: validSamples.length,
    clippedSampleCount: MERIDIONAL_COMA_SAMPLE_COUNT - validSamples.length,
    centerIntercept,
    minIntercept: Math.min(...intercepts),
    maxIntercept: Math.max(...intercepts),
    minRelativeIntercept: Math.min(...relativeIntercepts),
    maxRelativeIntercept: Math.max(...relativeIntercepts),
    lowerIntercept: lowerSample.imageHeight,
    upperIntercept: upperSample.imageHeight,
    spanMm,
    spanUm: spanMm * 1000,
    samples,
  };
}

export function computeMeridionalComa(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): MeridionalComaResult | null {
  const footprint = computeMeridionalComaFieldFootprint(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    L.offAxisFieldFrac,
  );
  if (footprint === null || footprint.fieldAngleDeg <= 0) return null;

  return {
    fieldAngleDeg: footprint.fieldAngleDeg,
    sampleCount: footprint.sampleCount,
    validSampleCount: footprint.validSampleCount,
    clippedSampleCount: footprint.clippedSampleCount,
    centerIntercept: footprint.centerIntercept,
    minIntercept: footprint.minIntercept,
    maxIntercept: footprint.maxIntercept,
    spanMm: footprint.spanMm,
    spanUm: footprint.spanUm,
    lowerIntercept: footprint.lowerIntercept,
    upperIntercept: footprint.upperIntercept,
    samples: footprint.samples.map(({ relativeImageHeight: _relativeImageHeight, ...sample }) => sample),
  };
}

export function computeComaPreview(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): ComaPreviewResult | null {
  const fields = buildFixedComaPreviewFootprints(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD).map(
    comaPreviewFieldResultFromFootprint,
  );

  const usableFields = fields.filter((field) => field.usable);
  if (usableFields.length < 2) return null;

  const sharedRelativeHalfRangeMm = Math.max(
    ESTIMATED_COMA_MIN_SHARED_TANGENTIAL_HALF_RANGE_MM,
    ...usableFields.map((field) =>
      Math.max(Math.abs(field.minRelativeIntercept), Math.abs(field.maxRelativeIntercept)),
    ),
  );

  return {
    fieldFractions: COMA_PREVIEW_FIELD_FRACTIONS,
    fields,
    sharedRelativeHalfRangeMm,
    usableFieldCount: usableFields.length,
  };
}

export function computeEstimatedComaPreview(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): EstimatedComaPreviewResult | null {
  const fields = buildFixedComaPreviewFootprints(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD).map(
    estimatedComaPreviewFieldResultFromFootprint,
  );

  const usableFields = fields.filter((field) => field.usable);
  if (usableFields.length < 2) return null;

  const sharedTangentialHalfRangeMm = Math.max(
    ESTIMATED_COMA_MIN_SHARED_TANGENTIAL_HALF_RANGE_MM,
    ...usableFields.map((field) =>
      Math.max(Math.abs(field.minRelativeIntercept), Math.abs(field.maxRelativeIntercept)),
    ),
  );

  return {
    fieldFractions: COMA_PREVIEW_FIELD_FRACTIONS,
    fields,
    sharedTangentialHalfRangeMm,
    normalizedSagittalHalfRange: ESTIMATED_COMA_NORMALIZED_SAGITTAL_HALF_RANGE,
    usableFieldCount: usableFields.length,
  };
}
