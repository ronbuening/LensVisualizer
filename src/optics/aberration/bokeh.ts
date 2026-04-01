import { doLayout, entrancePupilAtState } from "../optics.js";
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

const DISPLAY_ENVELOPE_FOCUS_SAMPLES = [0, 1] as const;

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
  const usableFieldCount = fields.filter((field) => field.usable).length;

  return {
    objectConjugate: meta.objectConjugate,
    label: meta.label,
    fields,
    usableFieldCount,
  };
}

function measureBokehPreviewRanges(conjugates: readonly BokehPreviewConjugateResult[]) {
  const usableFields = conjugates.flatMap((conjugate) => conjugate.fields.filter((field) => field.usable));
  if (usableFields.length < 2) return null;

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

function currentEntrancePupilDiameterAtFocus(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  currentPhysStopSD: number,
): number {
  if (!isFinite(currentPhysStopSD) || currentPhysStopSD <= 0 || !isFinite(L.stopPhysSD) || L.stopPhysSD <= 0) return 0;

  const entrancePupil = entrancePupilAtState(L.stopPhysSD, focusT, zoomT, L);
  if (!isFinite(entrancePupil.epSD) || entrancePupil.epSD <= 0) return 0;

  return (entrancePupil.epSD * currentPhysStopSD) / L.stopPhysSD;
}

function computeDisplaySpotHalfRangeMm(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  currentPhysStopSD: number,
  currentSharedSpotHalfRangeMm: number,
): number {
  const focusEnvelopeHalfRanges = DISPLAY_ENVELOPE_FOCUS_SAMPLES.flatMap((sampleFocusT) => {
    if (Math.abs(sampleFocusT - focusT) < 1e-9) return [];

    const currentEPSDAtSampleFocus = currentEntrancePupilDiameterAtFocus(L, sampleFocusT, zoomT, currentPhysStopSD);
    if (currentEPSDAtSampleFocus <= 0) return [];

    const { z: sampleZPos } = doLayout(sampleFocusT, zoomT, L);
    const conjugates = CONJUGATE_META.map((meta) =>
      computeBokehPreviewConjugate(
        L,
        sampleZPos,
        sampleFocusT,
        zoomT,
        currentEPSDAtSampleFocus,
        currentPhysStopSD,
        meta,
      ),
    );
    const ranges = measureBokehPreviewRanges(conjugates);
    return ranges ? [ranges.sharedSpotHalfRangeMm] : [];
  });

  return Math.max(currentSharedSpotHalfRangeMm, ...focusEnvelopeHalfRanges);
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
    displaySpotHalfRangeMm: computeDisplaySpotHalfRangeMm(
      L,
      focusT,
      zoomT,
      currentPhysStopSD,
      ranges.sharedSpotHalfRangeMm,
    ),
  };
}
