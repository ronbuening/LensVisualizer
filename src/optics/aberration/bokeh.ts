import type { RuntimeLens } from "../../types/optics.js";
import type {
  ApertureSilhouette,
  BokehPreviewConjugateResult,
  BokehPreviewFieldResult,
  BokehPreviewPoint,
  BokehPreviewResult,
  PreviewObjectConjugate,
} from "./types.js";
import {
  BOKEH_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES,
  BOKEH_PREVIEW_POINT_CLOUD_SAMPLE_COUNT,
  PREVIEW_FIELD_FRACTIONS,
} from "./types.js";
import { computeOffAxisFieldGeometry, traceCircularOffAxisBundle } from "./offAxis.js";
import { summarizeWeightedPointCloud } from "./shared.js";

const BOKEH_PREVIEW_MIN_SHARED_HALF_RANGE_MM = 0.01;
const BOKEH_PREVIEW_MIN_VALID_SAMPLES = 9;

const FIELD_LABELS: Record<(typeof PREVIEW_FIELD_FRACTIONS)[number], string> = {
  0: "Center",
  0.25: "25%",
  0.5: "50%",
  0.75: "75%",
};

const APERTURE_SILHOUETTE: ApertureSilhouette = { kind: "circular" };

interface PreviewFieldMeta {
  fieldFraction: (typeof PREVIEW_FIELD_FRACTIONS)[number];
  label: string;
}

interface ConjugateMeta {
  objectConjugate: PreviewObjectConjugate;
  label: string;
}

const CONJUGATE_META: readonly ConjugateMeta[] = [
  { objectConjugate: "infinity", label: "Infinity subject" },
  { objectConjugate: "minimumFocus", label: "Minimum-focus subject" },
];

function previewFieldMeta(): PreviewFieldMeta[] {
  return PREVIEW_FIELD_FRACTIONS.map((fieldFraction) => ({
    fieldFraction,
    label: FIELD_LABELS[fieldFraction],
  }));
}

function emptyBokehPreviewFieldResult(
  meta: PreviewFieldMeta,
  objectConjugate: PreviewObjectConjugate,
): BokehPreviewFieldResult {
  return {
    fieldFraction: meta.fieldFraction,
    label: meta.label,
    fieldAngleDeg: 0,
    objectConjugate,
    sampleCount: BOKEH_PREVIEW_POINT_CLOUD_SAMPLE_COUNT,
    validSampleCount: 0,
    clippedSampleCount: BOKEH_PREVIEW_POINT_CLOUD_SAMPLE_COUNT,
    chiefImageHeight: 0,
    minRelativeTangentialImageHeight: 0,
    maxRelativeTangentialImageHeight: 0,
    minRelativeSagittalImageHeight: 0,
    maxRelativeSagittalImageHeight: 0,
    centroidTangentialImageHeight: 0,
    centroidSagittalImageHeight: 0,
    rmsRadiusMm: 0,
    rmsRadiusUm: 0,
    points: [],
    apertureSilhouette: APERTURE_SILHOUETTE,
    usable: false,
  };
}

function computeBokehPreviewField(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  meta: PreviewFieldMeta,
  objectConjugate: PreviewObjectConjugate,
): BokehPreviewFieldResult {
  if (currentEPSD <= 0 || L.N < 1) return emptyBokehPreviewFieldResult(meta, objectConjugate);

  const geometry = computeOffAxisFieldGeometry(
    L,
    zPos,
    focusT,
    zoomT,
    currentPhysStopSD,
    meta.fieldFraction,
    objectConjugate,
  );
  if (geometry === null) return emptyBokehPreviewFieldResult(meta, objectConjugate);

  const bundle = traceCircularOffAxisBundle(
    BOKEH_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES,
    geometry,
    L,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
  );
  if (bundle === null) return emptyBokehPreviewFieldResult(meta, objectConjugate);

  const points: BokehPreviewPoint[] = bundle.samples.map((sample, index) => ({
    index,
    sourceSampleIndex: sample.sourceSampleIndex,
    tangentialImageHeight: sample.imagePoint.y - bundle.chiefRay.imagePoint.y,
    sagittalImageHeight: sample.imagePoint.x - bundle.chiefRay.imagePoint.x,
    weight: sample.weight ?? 0,
  }));
  if (points.length < BOKEH_PREVIEW_MIN_VALID_SAMPLES) return emptyBokehPreviewFieldResult(meta, objectConjugate);

  const summary = summarizeWeightedPointCloud(points);
  if (summary === null) return emptyBokehPreviewFieldResult(meta, objectConjugate);

  return {
    fieldFraction: meta.fieldFraction,
    label: meta.label,
    fieldAngleDeg: geometry.fieldAngleDeg,
    objectConjugate,
    sampleCount: bundle.sampleCount,
    validSampleCount: bundle.validSampleCount,
    clippedSampleCount: bundle.clippedSampleCount,
    chiefImageHeight: bundle.chiefRay.imagePoint.y,
    minRelativeTangentialImageHeight: summary.minRelativeTangentialImageHeight,
    maxRelativeTangentialImageHeight: summary.maxRelativeTangentialImageHeight,
    minRelativeSagittalImageHeight: summary.minRelativeSagittalImageHeight,
    maxRelativeSagittalImageHeight: summary.maxRelativeSagittalImageHeight,
    centroidTangentialImageHeight: summary.centroidTangentialImageHeight,
    centroidSagittalImageHeight: summary.centroidSagittalImageHeight,
    rmsRadiusMm: summary.rmsRadiusMm,
    rmsRadiusUm: summary.rmsRadiusUm,
    points,
    apertureSilhouette: APERTURE_SILHOUETTE,
    usable: true,
  };
}

function computeBokehPreviewConjugate(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  meta: ConjugateMeta,
): BokehPreviewConjugateResult {
  const fields = previewFieldMeta().map((fieldMeta) =>
    computeBokehPreviewField(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, fieldMeta, meta.objectConjugate),
  );
  const ranges = measureBokehFieldRanges(fields);
  const usableFieldCount = ranges?.usableFields.length ?? 0;

  return {
    objectConjugate: meta.objectConjugate,
    label: meta.label,
    fields,
    usableFieldCount,
    sharedTangentialHalfRangeMm: ranges?.sharedTangentialHalfRangeMm ?? BOKEH_PREVIEW_MIN_SHARED_HALF_RANGE_MM,
    sharedSagittalHalfRangeMm: ranges?.sharedSagittalHalfRangeMm ?? BOKEH_PREVIEW_MIN_SHARED_HALF_RANGE_MM,
    sharedSpotHalfRangeMm: ranges?.sharedSpotHalfRangeMm ?? BOKEH_PREVIEW_MIN_SHARED_HALF_RANGE_MM,
    displaySpotHalfRangeMm: ranges?.sharedSpotHalfRangeMm ?? BOKEH_PREVIEW_MIN_SHARED_HALF_RANGE_MM,
  };
}

function measureBokehFieldRanges(fields: readonly BokehPreviewFieldResult[]) {
  const usableFields = fields.filter((field) => field.usable);
  if (usableFields.length < 1) return null;
  const sharedTangentialHalfRangeMm = Math.max(
    BOKEH_PREVIEW_MIN_SHARED_HALF_RANGE_MM,
    ...usableFields.map((field) =>
      Math.max(Math.abs(field.minRelativeTangentialImageHeight), Math.abs(field.maxRelativeTangentialImageHeight)),
    ),
  );
  const sharedSagittalHalfRangeMm = Math.max(
    BOKEH_PREVIEW_MIN_SHARED_HALF_RANGE_MM,
    ...usableFields.map((field) =>
      Math.max(Math.abs(field.minRelativeSagittalImageHeight), Math.abs(field.maxRelativeSagittalImageHeight)),
    ),
  );

  return {
    usableFields,
    sharedTangentialHalfRangeMm,
    sharedSagittalHalfRangeMm,
    sharedSpotHalfRangeMm: Math.max(sharedTangentialHalfRangeMm, sharedSagittalHalfRangeMm),
  };
}

function measureBokehPreviewRanges(conjugates: readonly BokehPreviewConjugateResult[]) {
  return measureBokehFieldRanges(conjugates.flatMap((conjugate) => conjugate.fields));
}

export function computeBokehPreview(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): BokehPreviewResult | null {
  const conjugates = CONJUGATE_META.map((meta) =>
    computeBokehPreviewConjugate(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, meta),
  );
  const ranges = measureBokehPreviewRanges(conjugates);
  if (ranges === null) return null;

  return {
    fieldFractions: PREVIEW_FIELD_FRACTIONS,
    conjugates,
    sharedTangentialHalfRangeMm: ranges.sharedTangentialHalfRangeMm,
    sharedSagittalHalfRangeMm: ranges.sharedSagittalHalfRangeMm,
    sharedSpotHalfRangeMm: ranges.sharedSpotHalfRangeMm,
    displaySpotHalfRangeMm: Math.max(...conjugates.map((conjugate) => conjugate.sharedSpotHalfRangeMm)),
  };
}
