import {
  bAtZoom,
  halfFieldAtZoom,
  sampleCircularPupil,
  skewImagePlaneIntercept,
  traceChiefRelativeSkewRay,
  traceRay,
  yRatioAtZoom,
} from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type {
  ComaPointCloudPoint,
  ComaPointCloudPreviewFieldResult,
  ComaPointCloudPreviewResult,
  ComaPreviewFieldResult,
  ComaPreviewResult,
  MeridionalComaResult,
  MeridionalComaSample,
} from "./types.js";
import {
  COMA_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES,
  COMA_PREVIEW_FIELD_FRACTIONS,
  COMA_PREVIEW_POINT_CLOUD_SAMPLE_COUNT,
  MERIDIONAL_COMA_SAMPLE_COUNT,
} from "./types.js";
import { imagePlaneIntercept } from "./shared.js";

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

interface ComaFieldGeometry {
  fieldAngleDeg: number;
  uField: number;
  yChief: number;
  lastSurfZ: number;
  imagePlaneZ: number;
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

function computeComaFieldGeometry(
  L: RuntimeLens,
  zPos: number[],
  zoomT: number,
  fieldFraction: number,
): ComaFieldGeometry | null {
  if (L.N < 1) return null;

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
  if (!isFinite(uField) || !isFinite(yChief) || !isFinite(imagePlaneZ)) return null;

  return {
    fieldAngleDeg,
    uField,
    yChief,
    lastSurfZ,
    imagePlaneZ,
  };
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

  const geometry = computeComaFieldGeometry(L, zPos, zoomT, fieldFraction);
  if (geometry === null) return null;

  const samples: MeridionalComaFieldSample[] = [];
  const validSamples: Array<MeridionalComaFieldSample & { imageHeight: number }> = [];

  for (let index = 0; index < MERIDIONAL_COMA_SAMPLE_COUNT; index++) {
    const pupilFraction = -1 + (2 * index) / (MERIDIONAL_COMA_SAMPLE_COUNT - 1);
    const launchHeight = geometry.yChief + pupilFraction * currentEPSD;
    const trace = traceRay(launchHeight, geometry.uField, zPos, focusT, zoomT, currentPhysStopSD, true, L);
    const projectedHeight = trace.clipped
      ? null
      : imagePlaneIntercept(trace.y, trace.u, geometry.lastSurfZ, geometry.imagePlaneZ);
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
    fieldAngleDeg: geometry.fieldAngleDeg,
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

  const geometry = computeComaFieldGeometry(L, zPos, zoomT, fieldFraction);
  if (geometry === null) return null;

  const chiefTrace = traceChiefRelativeSkewRay(
    0,
    0,
    geometry.yChief,
    geometry.uField,
    currentEPSD,
    zPos,
    focusT,
    zoomT,
    currentPhysStopSD,
    true,
    L,
  );
  if (chiefTrace.clipped) return null;

  const chiefImagePoint = skewImagePlaneIntercept(
    chiefTrace.x,
    chiefTrace.y,
    chiefTrace.ux,
    chiefTrace.uy,
    geometry.lastSurfZ,
    geometry.imagePlaneZ,
  );
  if (chiefImagePoint === null) return null;

  const points: ComaPointCloudPoint[] = [];
  for (const sample of sampleCircularPupil(COMA_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES)) {
    const trace = traceChiefRelativeSkewRay(
      sample.xFraction,
      sample.yFraction,
      geometry.yChief,
      geometry.uField,
      currentEPSD,
      zPos,
      focusT,
      zoomT,
      currentPhysStopSD,
      true,
      L,
    );
    if (trace.clipped) continue;

    const imagePoint = skewImagePlaneIntercept(
      trace.x,
      trace.y,
      trace.ux,
      trace.uy,
      geometry.lastSurfZ,
      geometry.imagePlaneZ,
    );
    if (imagePoint === null) continue;

    points.push({
      index: points.length,
      sourceSampleIndex: sample.index,
      tangentialImageHeight: imagePoint.y - chiefImagePoint.y,
      sagittalImageHeight: imagePoint.x - chiefImagePoint.x,
      weight: sample.weight,
    });
  }

  if (points.length < COMA_POINT_CLOUD_MIN_VALID_SAMPLES) return null;

  const tangentialHeights = points.map((point) => point.tangentialImageHeight);
  const sagittalHeights = points.map((point) => point.sagittalImageHeight);

  return {
    fieldFraction,
    fieldAngleDeg: geometry.fieldAngleDeg,
    sampleCount: COMA_PREVIEW_POINT_CLOUD_SAMPLE_COUNT,
    validSampleCount: points.length,
    clippedSampleCount: COMA_PREVIEW_POINT_CLOUD_SAMPLE_COUNT - points.length,
    chiefIntercept: chiefImagePoint.y,
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
