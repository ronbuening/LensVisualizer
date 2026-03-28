import { sampleOrthogonalPupilFan } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type {
  ComaPointCloudPoint,
  ComaPointCloudPreviewFieldResult,
  ComaPointCloudPreviewResult,
  ComaPreviewFieldResult,
  ComaPreviewResult,
  MeridionalComaResult,
  MeridionalComaSample,
  SagittalComaResult,
  SagittalComaSample,
} from "./types.js";
import {
  COMA_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES,
  COMA_PREVIEW_FIELD_FRACTIONS,
  COMA_PREVIEW_POINT_CLOUD_SAMPLE_COUNT,
  MERIDIONAL_COMA_SAMPLE_COUNT,
} from "./types.js";
import { computeOffAxisFieldGeometry, traceCircularOffAxisBundle, traceOrthogonalOffAxisBundle } from "./offAxis.js";

const COMA_PREVIEW_MIN_SHARED_HALF_RANGE_MM = 0.01;
const COMA_POINT_CLOUD_MIN_VALID_SAMPLES = 5;

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

interface ComaPointCloudFieldFootprint {
  fieldFraction: number;
  fieldAngleDeg: number;
  sampleCount: number;
  validSampleCount: number;
  clippedSampleCount: number;
  chiefIntercept: number;
  minRelativeTangentialImageHeight: number;
  maxRelativeTangentialImageHeight: number;
  minRelativeSagittalImageHeight: number;
  maxRelativeSagittalImageHeight: number;
  points: ComaPointCloudPoint[];
}

interface FixedComaPointCloudPreviewFootprint {
  fieldFraction: (typeof COMA_PREVIEW_FIELD_FRACTIONS)[number];
  label: string;
  footprint: ComaPointCloudFieldFootprint | null;
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

function buildFixedComaPointCloudPreviewFootprints(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): FixedComaPointCloudPreviewFootprint[] {
  return fixedComaPreviewFieldMeta().map(({ fieldFraction, label }) => ({
    fieldFraction,
    label,
    footprint: computeComaPointCloudFieldFootprint(
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

function emptyComaPointCloudPreviewFieldResult({
  fieldFraction,
  label,
}: ComaPreviewFieldMeta): ComaPointCloudPreviewFieldResult {
  return {
    fieldFraction,
    label,
    fieldAngleDeg: 0,
    sampleCount: COMA_PREVIEW_POINT_CLOUD_SAMPLE_COUNT,
    validSampleCount: 0,
    clippedSampleCount: COMA_PREVIEW_POINT_CLOUD_SAMPLE_COUNT,
    chiefIntercept: 0,
    minRelativeTangentialImageHeight: 0,
    maxRelativeTangentialImageHeight: 0,
    minRelativeSagittalImageHeight: 0,
    maxRelativeSagittalImageHeight: 0,
    points: [],
    usable: false,
  };
}

function comaPointCloudPreviewFieldResultFromFootprint({
  fieldFraction,
  label,
  footprint,
}: FixedComaPointCloudPreviewFootprint): ComaPointCloudPreviewFieldResult {
  if (footprint === null) {
    return emptyComaPointCloudPreviewFieldResult({ fieldFraction, label });
  }

  return {
    fieldFraction,
    label,
    fieldAngleDeg: footprint.fieldAngleDeg,
    sampleCount: footprint.sampleCount,
    validSampleCount: footprint.validSampleCount,
    clippedSampleCount: footprint.clippedSampleCount,
    chiefIntercept: footprint.chiefIntercept,
    minRelativeTangentialImageHeight: footprint.minRelativeTangentialImageHeight,
    maxRelativeTangentialImageHeight: footprint.maxRelativeTangentialImageHeight,
    minRelativeSagittalImageHeight: footprint.minRelativeSagittalImageHeight,
    maxRelativeSagittalImageHeight: footprint.maxRelativeSagittalImageHeight,
    points: footprint.points,
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

  const geometry = computeOffAxisFieldGeometry(L, zPos, zoomT, fieldFraction);
  if (geometry === null) return null;

  const bundle = traceOrthogonalOffAxisBundle(
    "tangential",
    MERIDIONAL_COMA_SAMPLE_COUNT,
    geometry,
    L,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
  );
  if (bundle === null) return null;

  const tracedSamplesByIndex = new Map(bundle.samples.map((sample) => [sample.sourceSampleIndex, sample]));
  const samples: MeridionalComaFieldSample[] = sampleOrthogonalPupilFan(MERIDIONAL_COMA_SAMPLE_COUNT, "tangential").map(
    (sample) => {
      const tracedSample = tracedSamplesByIndex.get(sample.index);
      return {
        index: sample.index,
        pupilFraction: sample.pupilFraction,
        launchHeight: geometry.yChief + sample.yFraction * currentEPSD,
        imageHeight: tracedSample?.imagePoint.y ?? null,
        relativeImageHeight: null,
        clipped: tracedSample === undefined,
      };
    },
  );
  const validSamples = samples.filter(
    (sample): sample is MeridionalComaFieldSample & { imageHeight: number } =>
      sample.imageHeight !== null && !sample.clipped,
  );

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
    fieldAngleDeg: geometry.fieldAngleDeg,
    sampleCount: bundle.sampleCount,
    validSampleCount: validSamples.length,
    clippedSampleCount: bundle.clippedSampleCount,
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

function computeComaPointCloudFieldFootprint(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldFraction: number,
): ComaPointCloudFieldFootprint | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const geometry = computeOffAxisFieldGeometry(L, zPos, zoomT, fieldFraction);
  if (geometry === null) return null;

  const bundle = traceCircularOffAxisBundle(
    COMA_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES,
    geometry,
    L,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
  );
  if (bundle === null) return null;

  const points: ComaPointCloudPoint[] = bundle.samples.map((sample, index) => ({
    index,
    sourceSampleIndex: sample.sourceSampleIndex,
    tangentialImageHeight: sample.imagePoint.y - bundle.chiefRay.imagePoint.y,
    sagittalImageHeight: sample.imagePoint.x - bundle.chiefRay.imagePoint.x,
    weight: sample.weight ?? 0,
  }));

  if (points.length < COMA_POINT_CLOUD_MIN_VALID_SAMPLES) return null;

  const tangentialHeights = points.map((point) => point.tangentialImageHeight);
  const sagittalHeights = points.map((point) => point.sagittalImageHeight);

  return {
    fieldFraction,
    fieldAngleDeg: geometry.fieldAngleDeg,
    sampleCount: bundle.sampleCount,
    validSampleCount: bundle.validSampleCount,
    clippedSampleCount: bundle.clippedSampleCount,
    chiefIntercept: bundle.chiefRay.imagePoint.y,
    minRelativeTangentialImageHeight: Math.min(...tangentialHeights),
    maxRelativeTangentialImageHeight: Math.max(...tangentialHeights),
    minRelativeSagittalImageHeight: Math.min(...sagittalHeights),
    maxRelativeSagittalImageHeight: Math.max(...sagittalHeights),
    points,
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
    COMA_PREVIEW_MIN_SHARED_HALF_RANGE_MM,
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

export function computeSagittalComa(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): SagittalComaResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const fieldFraction = L.offAxisFieldFrac;
  const geometry = computeOffAxisFieldGeometry(L, zPos, zoomT, fieldFraction);
  if (geometry === null || geometry.fieldAngleDeg <= 0) return null;

  const bundle = traceOrthogonalOffAxisBundle(
    "sagittal",
    MERIDIONAL_COMA_SAMPLE_COUNT,
    geometry,
    L,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
  );
  if (bundle === null) return null;

  const tracedSamplesByIndex = new Map(bundle.samples.map((sample) => [sample.sourceSampleIndex, sample]));
  const samples: SagittalComaSample[] = sampleOrthogonalPupilFan(MERIDIONAL_COMA_SAMPLE_COUNT, "sagittal").map(
    (sample) => {
      const tracedSample = tracedSamplesByIndex.get(sample.index);
      return {
        index: sample.index,
        pupilFraction: sample.pupilFraction,
        launchX: sample.xFraction * currentEPSD,
        imageX: tracedSample?.imagePoint.x ?? null,
        clipped: tracedSample === undefined,
      };
    },
  );
  const validSamples = samples.filter(
    (sample): sample is SagittalComaSample & { imageX: number } => sample.imageX !== null && !sample.clipped,
  );

  if (validSamples.length < 3) return null;

  const centerSample =
    validSamples.find((sample) => Math.abs(sample.pupilFraction) < 1e-9) ??
    validSamples.reduce((best, sample) =>
      Math.abs(sample.pupilFraction) < Math.abs(best.pupilFraction) ? sample : best,
    );
  const centerIntercept = centerSample.imageX;

  const lowerSample = validSamples.find((sample) => sample.pupilFraction < 0) ?? null;
  const upperSample = [...validSamples].reverse().find((sample) => sample.pupilFraction > 0) ?? null;

  if (!lowerSample || !upperSample) return null;

  const intercepts = validSamples.map((sample) => sample.imageX);
  const spanMm = upperSample.imageX - lowerSample.imageX;

  return {
    fieldAngleDeg: geometry.fieldAngleDeg,
    sampleCount: bundle.sampleCount,
    validSampleCount: validSamples.length,
    clippedSampleCount: bundle.clippedSampleCount,
    centerIntercept,
    minIntercept: Math.min(...intercepts),
    maxIntercept: Math.max(...intercepts),
    spanMm,
    spanUm: spanMm * 1000,
    lowerIntercept: lowerSample.imageX,
    upperIntercept: upperSample.imageX,
    samples,
  };
}

export function computeComaPointCloudPreview(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): ComaPointCloudPreviewResult | null {
  const fields = buildFixedComaPointCloudPreviewFootprints(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD).map(
    comaPointCloudPreviewFieldResultFromFootprint,
  );

  const usableFields = fields.filter((field) => field.usable);
  if (usableFields.length < 2) return null;

  const sharedTangentialHalfRangeMm = Math.max(
    COMA_PREVIEW_MIN_SHARED_HALF_RANGE_MM,
    ...usableFields.map((field) =>
      Math.max(Math.abs(field.minRelativeTangentialImageHeight), Math.abs(field.maxRelativeTangentialImageHeight)),
    ),
  );
  const sharedSagittalHalfRangeMm = Math.max(
    COMA_PREVIEW_MIN_SHARED_HALF_RANGE_MM,
    ...usableFields.map((field) =>
      Math.max(Math.abs(field.minRelativeSagittalImageHeight), Math.abs(field.maxRelativeSagittalImageHeight)),
    ),
  );

  return {
    fieldFractions: COMA_PREVIEW_FIELD_FRACTIONS,
    fields,
    sharedTangentialHalfRangeMm,
    sharedSagittalHalfRangeMm,
    usableFieldCount: usableFields.length,
  };
}
