import { bAtZoom, halfFieldAtZoom, traceRay, yRatioAtZoom } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { FieldCurvatureFieldResult, FieldCurvatureResult } from "./types.js";
import { FIELD_CURVATURE_FIELD_FRACTIONS, MERIDIONAL_COMA_SAMPLE_COUNT } from "./types.js";
import { bestRelativeFocusPlane, imagePlaneIntercept, type RealRayHit } from "./shared.js";

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

interface FieldCurvatureRayHit extends RealRayHit {
  index: number;
  pupilFraction: number;
  launchHeight: number;
}

function fieldCurvatureFieldMeta(): FieldCurvatureFieldMeta[] {
  return FIELD_CURVATURE_FIELD_FRACTIONS.map((fieldFraction) => ({
    fieldFraction,
    label: FIELD_CURVATURE_FIELD_LABELS[fieldFraction],
  }));
}

function emptyFieldCurvatureFieldResult({
  fieldFraction,
  label,
}: FieldCurvatureFieldMeta): FieldCurvatureFieldResult {
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

  const halfFieldDeg = halfFieldAtZoom(zoomT, L);
  const yRatio = yRatioAtZoom(zoomT, L);
  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + (L.S[L.N - 1]?.d ?? 0);

  if (!isFinite(halfFieldDeg) || halfFieldDeg < 0 || !isFinite(yRatio) || Math.abs(yRatio) < 1e-12) {
    return emptyFieldCurvatureFieldResult(meta);
  }
  if (!isFinite(imagePlaneZ)) return emptyFieldCurvatureFieldResult(meta);

  const fieldAngleDeg = halfFieldDeg * meta.fieldFraction;
  if (!isFinite(fieldAngleDeg) || fieldAngleDeg < 0) return emptyFieldCurvatureFieldResult(meta);

  if (meta.fieldFraction === 0) {
    return {
      fieldFraction: meta.fieldFraction,
      label: meta.label,
      fieldAngleDeg: 0,
      sampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
      validSampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
      clippedSampleCount: 0,
      chiefImageHeight: 0,
      tangentialBestFocusZ: imagePlaneZ,
      sagittalBestFocusZ: imagePlaneZ,
      petzvalBestFocusZ: imagePlaneZ,
      tangentialShiftMm: 0,
      sagittalShiftMm: 0,
      petzvalShiftMm: 0,
      astigmaticDifferenceMm: 0,
      astigmaticDifferenceUm: 0,
      usable: true,
    };
  }

  const uField = -Math.tan((fieldAngleDeg * Math.PI) / 180);
  const yChief = -(bAtZoom(zoomT, L) / yRatio) * uField;
  if (!isFinite(uField) || !isFinite(yChief)) return emptyFieldCurvatureFieldResult(meta);

  const hits: FieldCurvatureRayHit[] = [];
  for (let index = 0; index < MERIDIONAL_COMA_SAMPLE_COUNT; index++) {
    const pupilFraction = -1 + (2 * index) / (MERIDIONAL_COMA_SAMPLE_COUNT - 1);
    const launchHeight = yChief + pupilFraction * currentEPSD;
    const trace = traceRay(launchHeight, uField, zPos, focusT, zoomT, currentPhysStopSD, true, L);
    if (trace.clipped) continue;

    const intercept = imagePlaneIntercept(trace.y, trace.u, lastSurfZ, imagePlaneZ);
    if (intercept === null) continue;

    hits.push({
      index,
      fraction: Math.abs(pupilFraction),
      signedFraction: pupilFraction,
      pupilFraction,
      launchHeight,
      y: trace.y,
      u: trace.u,
      intercept: 0,
      imageHeight: intercept,
    });
  }

  if (hits.length < 3) return emptyFieldCurvatureFieldResult(meta);

  const chiefHit =
    hits.find((hit) => Math.abs(hit.pupilFraction) < 1e-9) ??
    hits.reduce((best, hit) => (Math.abs(hit.pupilFraction) < Math.abs(best.pupilFraction) ? hit : best));

  const tangentialBestFocusZ = bestRelativeFocusPlane(hits, chiefHit, lastSurfZ);
  const chiefImageHeight = chiefHit.y + chiefHit.u * (imagePlaneZ - lastSurfZ);
  const petzvalShiftMm = petzvalShiftAtImageHeight(chiefImageHeight, L.petzvalSum) ?? 0;
  const petzvalBestFocusZ = imagePlaneZ + petzvalShiftMm;
  const sagittalBestFocusZ = 2 * petzvalBestFocusZ - tangentialBestFocusZ;
  const tangentialShiftMm = tangentialBestFocusZ - imagePlaneZ;
  const sagittalShiftMm = sagittalBestFocusZ - imagePlaneZ;
  const astigmaticDifferenceMm = sagittalBestFocusZ - tangentialBestFocusZ;

  return {
    fieldFraction: meta.fieldFraction,
    label: meta.label,
    fieldAngleDeg,
    sampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
    validSampleCount: hits.length,
    clippedSampleCount: MERIDIONAL_COMA_SAMPLE_COUNT - hits.length,
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
      Math.max(
        Math.abs(field.tangentialShiftMm),
        Math.abs(field.sagittalShiftMm),
        Math.abs(field.petzvalShiftMm),
      ),
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
