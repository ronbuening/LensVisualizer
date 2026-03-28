import type { RuntimeLens } from "../../types/optics.js";
import type { FieldCurvatureFieldResult, FieldCurvatureResult } from "./types.js";
import { FIELD_CURVATURE_FIELD_FRACTIONS, MERIDIONAL_COMA_SAMPLE_COUNT } from "./types.js";
import { bestFocusPlaneForDirection, computeOffAxisFieldGeometry, traceOrthogonalOffAxisBundle } from "./offAxis.js";

const FIELD_CURVATURE_MIN_SHARED_HALF_RANGE_MM = 0.1;

const FIELD_CURVATURE_FIELD_LABELS: Record<(typeof FIELD_CURVATURE_FIELD_FRACTIONS)[number], string> = {
  0: "Center",
  0.25: "25%",
  0.5: "50%",
  0.75: "75%",
  1: "100%",
};

interface FieldCurvatureFieldMeta {
  fieldFraction: (typeof FIELD_CURVATURE_FIELD_FRACTIONS)[number];
  label: string;
}

function fieldCurvatureFieldMeta(): FieldCurvatureFieldMeta[] {
  return FIELD_CURVATURE_FIELD_FRACTIONS.map((fieldFraction) => ({
    fieldFraction,
    label: FIELD_CURVATURE_FIELD_LABELS[fieldFraction],
  }));
}

function emptyFieldCurvatureFieldResult({ fieldFraction, label }: FieldCurvatureFieldMeta): FieldCurvatureFieldResult {
  return {
    fieldFraction,
    label,
    fieldAngleDeg: 0,
    sampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
    validSampleCount: 0,
    clippedSampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
    chiefImageHeight: 0,
    tangentialBestFocusZ: 0,
    sagittalBestFocusZ: 0,
    petzvalBestFocusZ: 0,
    tangentialShiftMm: 0,
    sagittalShiftMm: 0,
    petzvalShiftMm: 0,
    astigmaticDifferenceMm: 0,
    astigmaticDifferenceUm: 0,
    usable: false,
  };
}

function petzvalShiftAtImageHeight(imageHeight: number, petzvalSum: number): number | null {
  if (!isFinite(imageHeight) || !isFinite(petzvalSum)) return null;
  if (Math.abs(petzvalSum) < 1e-9) return 0;

  const radius = 1 / petzvalSum;
  const underRoot = radius * radius - imageHeight * imageHeight;
  if (underRoot <= 0) return null;

  return radius - Math.sign(radius) * Math.sqrt(underRoot);
}

function computeFieldCurvatureField(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  meta: FieldCurvatureFieldMeta,
): FieldCurvatureFieldResult {
  if (currentEPSD <= 0 || L.N < 1) return emptyFieldCurvatureFieldResult(meta);

  const geometry = computeOffAxisFieldGeometry(L, zPos, zoomT, meta.fieldFraction);
  if (geometry === null) return emptyFieldCurvatureFieldResult(meta);

  if (meta.fieldFraction === 0) {
    return {
      fieldFraction: meta.fieldFraction,
      label: meta.label,
      fieldAngleDeg: 0,
      sampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
      validSampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
      clippedSampleCount: 0,
      chiefImageHeight: 0,
      tangentialBestFocusZ: geometry.imagePlaneZ,
      sagittalBestFocusZ: geometry.imagePlaneZ,
      petzvalBestFocusZ: geometry.imagePlaneZ,
      tangentialShiftMm: 0,
      sagittalShiftMm: 0,
      petzvalShiftMm: 0,
      astigmaticDifferenceMm: 0,
      astigmaticDifferenceUm: 0,
      usable: true,
    };
  }

  const tangentialBundle = traceOrthogonalOffAxisBundle(
    "tangential",
    MERIDIONAL_COMA_SAMPLE_COUNT,
    geometry,
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
  );
  const sagittalBundle = traceOrthogonalOffAxisBundle(
    "sagittal",
    MERIDIONAL_COMA_SAMPLE_COUNT,
    geometry,
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
  );
  if (tangentialBundle === null || sagittalBundle === null) return emptyFieldCurvatureFieldResult(meta);
  if (tangentialBundle.validSampleCount < 3 || sagittalBundle.validSampleCount < 3) {
    return emptyFieldCurvatureFieldResult(meta);
  }

  const tangentialBestFocusZ = bestFocusPlaneForDirection(tangentialBundle, "tangential");
  const sagittalBestFocusZ = bestFocusPlaneForDirection(sagittalBundle, "sagittal");
  const chiefImageHeight = tangentialBundle.chiefRay.imagePoint.y;
  const petzvalShiftMm = petzvalShiftAtImageHeight(chiefImageHeight, L.petzvalSum) ?? 0;
  const petzvalBestFocusZ = geometry.imagePlaneZ + petzvalShiftMm;
  const tangentialShiftMm = tangentialBestFocusZ - geometry.imagePlaneZ;
  const sagittalShiftMm = sagittalBestFocusZ - geometry.imagePlaneZ;
  const astigmaticDifferenceMm = sagittalBestFocusZ - tangentialBestFocusZ;
  const validSampleCount = Math.min(tangentialBundle.validSampleCount, sagittalBundle.validSampleCount);

  return {
    fieldFraction: meta.fieldFraction,
    label: meta.label,
    fieldAngleDeg: geometry.fieldAngleDeg,
    sampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
    validSampleCount,
    clippedSampleCount: MERIDIONAL_COMA_SAMPLE_COUNT - validSampleCount,
    chiefImageHeight,
    tangentialBestFocusZ,
    sagittalBestFocusZ,
    petzvalBestFocusZ,
    tangentialShiftMm,
    sagittalShiftMm,
    petzvalShiftMm,
    astigmaticDifferenceMm,
    astigmaticDifferenceUm: astigmaticDifferenceMm * 1000,
    usable: true,
  };
}

export function computeFieldCurvature(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): FieldCurvatureResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + (L.S[L.N - 1]?.d ?? 0);
  if (!isFinite(imagePlaneZ)) return null;

  const fields = fieldCurvatureFieldMeta().map((meta) =>
    computeFieldCurvatureField(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, meta),
  );
  const usableFields = fields.filter((field) => field.usable);
  if (usableFields.length < 2) return null;

  const maxAstigmaticDifferenceMm = Math.max(...usableFields.map((field) => Math.abs(field.astigmaticDifferenceMm)));
  const sharedFocusShiftHalfRangeMm = Math.max(
    FIELD_CURVATURE_MIN_SHARED_HALF_RANGE_MM,
    ...usableFields.map((field) =>
      Math.max(Math.abs(field.tangentialShiftMm), Math.abs(field.sagittalShiftMm), Math.abs(field.petzvalShiftMm)),
    ),
  );

  const edgeField = [...usableFields].reverse()[0];

  return {
    fieldFractions: FIELD_CURVATURE_FIELD_FRACTIONS,
    fields,
    usableFieldCount: usableFields.length,
    imagePlaneZ,
    sharedFocusShiftHalfRangeMm,
    maxAstigmaticDifferenceMm,
    maxAstigmaticDifferenceUm: maxAstigmaticDifferenceMm * 1000,
    edgeTangentialShiftMm: edgeField?.tangentialShiftMm ?? 0,
    edgeSagittalShiftMm: edgeField?.sagittalShiftMm ?? 0,
  };
}
