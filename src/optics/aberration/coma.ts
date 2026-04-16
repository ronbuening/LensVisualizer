import {
  computeFieldGeometryAtState,
  sampleCircularPupil,
  sampleOrthogonalPupilFan,
  type CircularPupilSample,
  type FieldGeometryState,
  type OrthogonalPupilSample,
} from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type {
  ComaAnalysisResult,
  ComaPointCloudPoint,
  ComaPointCloudPreviewFieldResult,
  ComaPointCloudPreviewResult,
  ComaPreviewFieldResult,
  ComaPreviewResult,
  ComaTailDirection,
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
import {
  computeStateAwareOffAxisFieldGeometry,
  traceOffAxisBundleFromSamples,
  type OffAxisBundle,
  type OffAxisFieldGeometry,
} from "./offAxis.js";

const COMA_PREVIEW_MIN_SHARED_HALF_RANGE_MM = 0.01;
const COMA_POINT_CLOUD_MIN_VALID_SAMPLES = 5;
const COMA_TAIL_SKEW_THRESHOLD = 1.15;

const COMA_PREVIEW_FIELD_LABELS: Record<(typeof COMA_PREVIEW_FIELD_FRACTIONS)[number], string> = {
  0: "Center",
  0.25: "25%",
  0.5: "50%",
  0.75: "75%",
};

interface ComaTraceContext {
  fieldGeometryState: FieldGeometryState;
  tangentialPupilSamples: OrthogonalPupilSample[];
  sagittalPupilSamples: OrthogonalPupilSample[];
  circularPupilSamples: CircularPupilSample[];
}

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
  centroidTangentialImageHeight: number;
  centroidSagittalImageHeight: number;
  rmsRadiusMm: number;
  rmsRadiusUm: number;
  tailDirection: ComaTailDirection;
  tailSkewRatio: number;
  sagittalToTangentialRatio: number;
  points: ComaPointCloudPoint[];
}

interface FixedComaPointCloudPreviewFootprint {
  fieldFraction: (typeof COMA_PREVIEW_FIELD_FRACTIONS)[number];
  label: string;
  footprint: ComaPointCloudFieldFootprint | null;
}

function buildComaTraceContext(L: RuntimeLens, focusT: number, zoomT: number): ComaTraceContext {
  return {
    fieldGeometryState: computeFieldGeometryAtState(focusT, zoomT, L),
    tangentialPupilSamples: sampleOrthogonalPupilFan(MERIDIONAL_COMA_SAMPLE_COUNT, "tangential"),
    sagittalPupilSamples: sampleOrthogonalPupilFan(MERIDIONAL_COMA_SAMPLE_COUNT, "sagittal"),
    circularPupilSamples: sampleCircularPupil(COMA_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES),
  };
}

function fixedComaPreviewFieldMeta(): ComaPreviewFieldMeta[] {
  return COMA_PREVIEW_FIELD_FRACTIONS.map((fieldFraction) => ({
    fieldFraction,
    label: COMA_PREVIEW_FIELD_LABELS[fieldFraction],
  }));
}

function buildComaShapeDescriptor(
  chiefIntercept: number,
  minRelativeTangentialImageHeight: number,
  maxRelativeTangentialImageHeight: number,
  minRelativeSagittalImageHeight: number,
  maxRelativeSagittalImageHeight: number,
  centroidTangentialImageHeight: number,
): {
  tailDirection: ComaTailDirection;
  tailSkewRatio: number;
  sagittalToTangentialRatio: number;
} {
  const positiveExtent = Math.max(0, maxRelativeTangentialImageHeight - centroidTangentialImageHeight);
  const negativeExtent = Math.max(0, centroidTangentialImageHeight - minRelativeTangentialImageHeight);
  const dominantExtent = Math.max(positiveExtent, negativeExtent);
  const trailingExtent = Math.min(positiveExtent, negativeExtent);
  const tailSkewRatio = trailingExtent > 1e-9 ? dominantExtent / trailingExtent : dominantExtent > 1e-9 ? 999 : 1;

  let tailDirection: ComaTailDirection = "balanced";
  if (tailSkewRatio >= COMA_TAIL_SKEW_THRESHOLD && Math.abs(chiefIntercept) > 1e-9) {
    const dominantSign = positiveExtent > negativeExtent ? 1 : negativeExtent > positiveExtent ? -1 : 0;
    if (dominantSign !== 0) {
      tailDirection = Math.sign(chiefIntercept) === dominantSign ? "toward-edge" : "toward-center";
    }
  }

  const tangentialSpan = Math.max(maxRelativeTangentialImageHeight - minRelativeTangentialImageHeight, 1e-9);
  const sagittalSpan = Math.max(maxRelativeSagittalImageHeight - minRelativeSagittalImageHeight, 0);

  return {
    tailDirection,
    tailSkewRatio,
    sagittalToTangentialRatio: sagittalSpan / tangentialSpan,
  };
}

function traceComaFieldBundle(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldFraction: number,
  traceContext: ComaTraceContext,
  samples: readonly OrthogonalPupilSample[] | readonly CircularPupilSample[],
): { geometry: OffAxisFieldGeometry; bundle: OffAxisBundle } | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const geometry = computeStateAwareOffAxisFieldGeometry(
    L,
    zPos,
    focusT,
    zoomT,
    fieldFraction,
    traceContext.fieldGeometryState,
  );
  if (geometry === null) return null;

  const bundle = traceOffAxisBundleFromSamples(samples, geometry, L, focusT, zoomT, currentEPSD, currentPhysStopSD);
  if (bundle === null) return null;

  return { geometry, bundle };
}

function buildMeridionalComaFieldFootprintFromBundle(
  geometry: OffAxisFieldGeometry,
  bundle: OffAxisBundle,
  currentEPSD: number,
  samples: readonly OrthogonalPupilSample[],
): MeridionalComaFieldFootprint | null {
  const tracedSamplesByIndex = new Map(bundle.samples.map((sample) => [sample.sourceSampleIndex, sample]));
  const resolvedSamples: MeridionalComaFieldSample[] = samples.map((sample) => {
    const tracedSample = tracedSamplesByIndex.get(sample.index);
    return {
      index: sample.index,
      pupilFraction: sample.pupilFraction,
      launchHeight: geometry.yChief + sample.yFraction * currentEPSD,
      imageHeight: tracedSample?.imagePoint.y ?? null,
      relativeImageHeight: null,
      clipped: tracedSample === undefined,
    };
  });
  const validSamples = resolvedSamples.filter(
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

  for (const sample of resolvedSamples) {
    sample.relativeImageHeight = sample.imageHeight === null ? null : sample.imageHeight - centerIntercept;
  }

  const lowerSample = validSamples.find((sample) => sample.pupilFraction < 0) ?? null;
  const upperSample = [...validSamples].reverse().find((sample) => sample.pupilFraction > 0) ?? null;
  if (!lowerSample || !upperSample) return null;

  const intercepts = validSamples.map((sample) => sample.imageHeight);
  const relativeIntercepts = validSamples.map((sample) => sample.imageHeight - centerIntercept);
  const spanMm = upperSample.imageHeight - lowerSample.imageHeight;

  return {
    fieldFraction: geometry.fieldFraction,
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
    samples: resolvedSamples,
  };
}

function buildSagittalComaResultFromBundle(
  geometry: OffAxisFieldGeometry,
  bundle: OffAxisBundle,
  currentEPSD: number,
  samples: readonly OrthogonalPupilSample[],
): SagittalComaResult | null {
  const tracedSamplesByIndex = new Map(bundle.samples.map((sample) => [sample.sourceSampleIndex, sample]));
  const resolvedSamples: SagittalComaSample[] = samples.map((sample) => {
    const tracedSample = tracedSamplesByIndex.get(sample.index);
    return {
      index: sample.index,
      pupilFraction: sample.pupilFraction,
      launchX: sample.xFraction * currentEPSD,
      imageX: tracedSample?.imagePoint.x ?? null,
      clipped: tracedSample === undefined,
    };
  });
  const validSamples = resolvedSamples.filter(
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
    samples: resolvedSamples,
  };
}

function buildComaPointCloudFieldFootprintFromBundle(
  geometry: OffAxisFieldGeometry,
  bundle: OffAxisBundle,
): ComaPointCloudFieldFootprint | null {
  const points: ComaPointCloudPoint[] = bundle.samples.map((sample, index) => ({
    index,
    sourceSampleIndex: sample.sourceSampleIndex,
    tangentialImageHeight: sample.imagePoint.y - bundle.chiefRay.imagePoint.y,
    sagittalImageHeight: sample.imagePoint.x - bundle.chiefRay.imagePoint.x,
    weight: sample.weight ?? 0,
  }));
  if (points.length < COMA_POINT_CLOUD_MIN_VALID_SAMPLES) return null;

  const totalWeight = points.reduce((sum, point) => sum + point.weight, 0);
  if (totalWeight <= 1e-12) return null;

  const tangentialHeights = points.map((point) => point.tangentialImageHeight);
  const sagittalHeights = points.map((point) => point.sagittalImageHeight);
  const centroidTangentialImageHeight =
    points.reduce((sum, point) => sum + point.tangentialImageHeight * point.weight, 0) / totalWeight;
  const centroidSagittalImageHeight =
    points.reduce((sum, point) => sum + point.sagittalImageHeight * point.weight, 0) / totalWeight;
  const rmsRadiusMm = Math.sqrt(
    points.reduce((sum, point) => {
      const dx = point.tangentialImageHeight - centroidTangentialImageHeight;
      const dy = point.sagittalImageHeight - centroidSagittalImageHeight;
      return sum + point.weight * (dx * dx + dy * dy);
    }, 0) / totalWeight,
  );

  const minRelativeTangentialImageHeight = Math.min(...tangentialHeights);
  const maxRelativeTangentialImageHeight = Math.max(...tangentialHeights);
  const minRelativeSagittalImageHeight = Math.min(...sagittalHeights);
  const maxRelativeSagittalImageHeight = Math.max(...sagittalHeights);
  const { tailDirection, tailSkewRatio, sagittalToTangentialRatio } = buildComaShapeDescriptor(
    bundle.chiefRay.imagePoint.y,
    minRelativeTangentialImageHeight,
    maxRelativeTangentialImageHeight,
    minRelativeSagittalImageHeight,
    maxRelativeSagittalImageHeight,
    centroidTangentialImageHeight,
  );

  return {
    fieldFraction: geometry.fieldFraction,
    fieldAngleDeg: geometry.fieldAngleDeg,
    sampleCount: bundle.sampleCount,
    validSampleCount: bundle.validSampleCount,
    clippedSampleCount: bundle.clippedSampleCount,
    chiefIntercept: bundle.chiefRay.imagePoint.y,
    minRelativeTangentialImageHeight,
    maxRelativeTangentialImageHeight,
    minRelativeSagittalImageHeight,
    maxRelativeSagittalImageHeight,
    centroidTangentialImageHeight,
    centroidSagittalImageHeight,
    rmsRadiusMm,
    rmsRadiusUm: rmsRadiusMm * 1000,
    tailDirection,
    tailSkewRatio,
    sagittalToTangentialRatio,
    points,
  };
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
    centroidTangentialImageHeight: 0,
    centroidSagittalImageHeight: 0,
    rmsRadiusMm: 0,
    rmsRadiusUm: 0,
    tailDirection: "balanced",
    tailSkewRatio: 1,
    sagittalToTangentialRatio: 0,
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
    centroidTangentialImageHeight: footprint.centroidTangentialImageHeight,
    centroidSagittalImageHeight: footprint.centroidSagittalImageHeight,
    rmsRadiusMm: footprint.rmsRadiusMm,
    rmsRadiusUm: footprint.rmsRadiusUm,
    tailDirection: footprint.tailDirection,
    tailSkewRatio: footprint.tailSkewRatio,
    sagittalToTangentialRatio: footprint.sagittalToTangentialRatio,
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
  traceContext = buildComaTraceContext(L, focusT, zoomT),
): MeridionalComaFieldFootprint | null {
  const tracedField = traceComaFieldBundle(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    fieldFraction,
    traceContext,
    traceContext.tangentialPupilSamples,
  );
  if (tracedField === null) return null;

  return buildMeridionalComaFieldFootprintFromBundle(
    tracedField.geometry,
    tracedField.bundle,
    currentEPSD,
    traceContext.tangentialPupilSamples,
  );
}

function computeSagittalComaResultAtField(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldFraction: number,
  traceContext = buildComaTraceContext(L, focusT, zoomT),
): SagittalComaResult | null {
  const tracedField = traceComaFieldBundle(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    fieldFraction,
    traceContext,
    traceContext.sagittalPupilSamples,
  );
  if (tracedField === null || tracedField.geometry.fieldAngleDeg <= 0) return null;

  return buildSagittalComaResultFromBundle(
    tracedField.geometry,
    tracedField.bundle,
    currentEPSD,
    traceContext.sagittalPupilSamples,
  );
}

function computeComaPointCloudFieldFootprint(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldFraction: number,
  traceContext = buildComaTraceContext(L, focusT, zoomT),
): ComaPointCloudFieldFootprint | null {
  const tracedField = traceComaFieldBundle(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    fieldFraction,
    traceContext,
    traceContext.circularPupilSamples,
  );
  if (tracedField === null) return null;

  return buildComaPointCloudFieldFootprintFromBundle(tracedField.geometry, tracedField.bundle);
}

function buildFixedComaPreviewFootprints(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  traceContext: ComaTraceContext,
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
      traceContext,
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
  traceContext: ComaTraceContext,
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
      traceContext,
    ),
  }));
}

function computeComaPreviewFromContext(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  traceContext: ComaTraceContext,
): ComaPreviewResult | null {
  const fields = buildFixedComaPreviewFootprints(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    traceContext,
  ).map(comaPreviewFieldResultFromFootprint);

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

function computeComaPointCloudPreviewFromContext(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  traceContext: ComaTraceContext,
): ComaPointCloudPreviewResult | null {
  const fields = buildFixedComaPointCloudPreviewFootprints(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    traceContext,
  ).map(comaPointCloudPreviewFieldResultFromFootprint);

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
  const sharedSpotHalfRangeMm = Math.max(sharedTangentialHalfRangeMm, sharedSagittalHalfRangeMm);

  return {
    fieldFractions: COMA_PREVIEW_FIELD_FRACTIONS,
    fields,
    sharedTangentialHalfRangeMm,
    sharedSagittalHalfRangeMm,
    sharedSpotHalfRangeMm,
    usableFieldCount: usableFields.length,
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
  const traceContext = buildComaTraceContext(L, focusT, zoomT);
  const footprint = computeMeridionalComaFieldFootprint(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    L.offAxisFieldFrac,
    traceContext,
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
  return computeComaPreviewFromContext(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    buildComaTraceContext(L, focusT, zoomT),
  );
}

export function computeSagittalComa(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): SagittalComaResult | null {
  return computeSagittalComaResultAtField(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    L.offAxisFieldFrac,
    buildComaTraceContext(L, focusT, zoomT),
  );
}

export function computeComaPointCloudPreview(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): ComaPointCloudPreviewResult | null {
  return computeComaPointCloudPreviewFromContext(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    buildComaTraceContext(L, focusT, zoomT),
  );
}

export function computeComaAnalysis(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): ComaAnalysisResult {
  const traceContext = buildComaTraceContext(L, focusT, zoomT);
  const meridionalFootprint = computeMeridionalComaFieldFootprint(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    L.offAxisFieldFrac,
    traceContext,
  );

  return {
    meridionalComa:
      meridionalFootprint === null || meridionalFootprint.fieldAngleDeg <= 0
        ? null
        : {
            fieldAngleDeg: meridionalFootprint.fieldAngleDeg,
            sampleCount: meridionalFootprint.sampleCount,
            validSampleCount: meridionalFootprint.validSampleCount,
            clippedSampleCount: meridionalFootprint.clippedSampleCount,
            centerIntercept: meridionalFootprint.centerIntercept,
            minIntercept: meridionalFootprint.minIntercept,
            maxIntercept: meridionalFootprint.maxIntercept,
            spanMm: meridionalFootprint.spanMm,
            spanUm: meridionalFootprint.spanUm,
            lowerIntercept: meridionalFootprint.lowerIntercept,
            upperIntercept: meridionalFootprint.upperIntercept,
            samples: meridionalFootprint.samples.map(
              ({ relativeImageHeight: _relativeImageHeight, ...sample }) => sample,
            ),
          },
    sagittalComa: computeSagittalComaResultAtField(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      L.offAxisFieldFrac,
      traceContext,
    ),
    pointCloudPreview: computeComaPointCloudPreviewFromContext(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      traceContext,
    ),
  };
}
