import type { ChromaticChannel, RuntimeLens } from "../../types/optics.js";
import type { ChromaticFieldShift, FieldCurvatureFieldResult, FieldCurvatureResult } from "./types.js";
import {
  FIELD_CURVATURE_CURVE_FIELD_FRACTIONS,
  FIELD_CURVATURE_FIELD_FRACTIONS,
  MERIDIONAL_COMA_SAMPLE_COUNT,
} from "./types.js";
import { traceChiefRelativeSkewRay, traceChiefRelativeSkewRayChromatic } from "../optics.js";
import {
  bestFocusPlaneForDirection,
  computeOffAxisFieldGeometry,
  traceOffAxisChiefRay,
  traceOrthogonalOffAxisBundle,
} from "./offAxis.js";
import { bestRelativeFocusPlane, type TransverseFocusHit } from "./shared.js";

const FIELD_CURVATURE_MIN_SHARED_HALF_RANGE_MM = 0.1;
const FIELD_CURVATURE_PARABASAL_RAY_HEIGHT_MM = 0.01;
const FIELD_CURVATURE_PARABASAL_FRACTION_MIN = 1e-4;
const FIELD_CURVATURE_PARABASAL_FRACTION_MAX = 0.02;

const FIELD_CURVATURE_FIELD_LABELS: Record<(typeof FIELD_CURVATURE_FIELD_FRACTIONS)[number], string> = {
  0: "Center",
  0.25: "25%",
  0.5: "50%",
  0.75: "75%",
  1: "100%",
};

interface FieldCurvatureFieldMeta {
  fieldFraction: number;
  label: string;
}

interface StandardizedFieldFocus {
  sampleCount: number;
  validSampleCount: number;
  clippedSampleCount: number;
  chiefImageHeight: number;
  tangentialBestFocusZ: number;
  sagittalBestFocusZ: number;
  tangentialShiftMm: number;
  sagittalShiftMm: number;
  astigmaticDifferenceMm: number;
  astigmaticDifferenceUm: number;
}

interface DiagnosticFieldFocus {
  sampleCount: number;
  validSampleCount: number;
  clippedSampleCount: number;
  tangentialBestFocusZ: number;
  sagittalBestFocusZ: number;
  tangentialShiftMm: number;
  sagittalShiftMm: number;
  astigmaticDifferenceMm: number;
  astigmaticDifferenceUm: number;
}

function labelForFieldFraction(fieldFraction: number): string {
  const standardLabel = FIELD_CURVATURE_FIELD_LABELS[fieldFraction as (typeof FIELD_CURVATURE_FIELD_FRACTIONS)[number]];
  if (standardLabel) return standardLabel;

  const percent = fieldFraction * 100;
  return `${Number(percent.toFixed(percent % 1 === 0 ? 0 : 2))}%`;
}

function fieldCurvatureFieldMeta(fieldFractions: readonly number[]): FieldCurvatureFieldMeta[] {
  return fieldFractions.map((fieldFraction) => ({
    fieldFraction,
    label: labelForFieldFraction(fieldFraction),
  }));
}

function emptyFieldCurvatureFieldResult({ fieldFraction, label }: FieldCurvatureFieldMeta): FieldCurvatureFieldResult {
  return {
    fieldFraction,
    label,
    fieldAngleDeg: 0,
    sampleCount: 4,
    validSampleCount: 0,
    clippedSampleCount: 4,
    chiefImageHeight: 0,
    tangentialBestFocusZ: 0,
    sagittalBestFocusZ: 0,
    petzvalBestFocusZ: 0,
    tangentialShiftMm: 0,
    sagittalShiftMm: 0,
    petzvalShiftMm: 0,
    astigmaticDifferenceMm: 0,
    astigmaticDifferenceUm: 0,
    chromaticFieldShifts: null,
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

const CHROMATIC_CHANNELS: ChromaticChannel[] = ["R", "G", "B"];

function parabasalPupilFraction(entrancePupilSemiDiameter: number): number {
  if (!isFinite(entrancePupilSemiDiameter) || entrancePupilSemiDiameter <= 0) {
    return FIELD_CURVATURE_PARABASAL_FRACTION_MIN;
  }

  const fraction = FIELD_CURVATURE_PARABASAL_RAY_HEIGHT_MM / entrancePupilSemiDiameter;
  return Math.min(FIELD_CURVATURE_PARABASAL_FRACTION_MAX, Math.max(FIELD_CURVATURE_PARABASAL_FRACTION_MIN, fraction));
}

function focusPlaneFromRelativeHits(
  hits: TransverseFocusHit[],
  referenceHit: TransverseFocusHit,
  lastSurfZ: number,
): number | null {
  if (hits.length === 0) return null;
  if (hits.length === 1) {
    const dy = hits[0].coordinate - referenceHit.coordinate;
    const du = hits[0].slope - referenceHit.slope;
    if (Math.abs(du) <= 1e-12) return lastSurfZ;
    return lastSurfZ - dy / du;
  }

  return bestRelativeFocusPlane(hits, referenceHit, lastSurfZ);
}

function computeStandardizedFieldFocus(
  L: RuntimeLens,
  geometry: ReturnType<typeof computeOffAxisFieldGeometry> & object,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  channel?: ChromaticChannel,
): StandardizedFieldFocus | null {
  const chiefRay = traceOffAxisChiefRay(geometry, L, focusT, zoomT, currentEPSD, currentPhysStopSD, channel);
  if (chiefRay === null) return null;

  const parabasalFraction = parabasalPupilFraction(currentEPSD);
  const traceRelativeRay = (direction: "tangential" | "sagittal", sign: -1 | 1): TransverseFocusHit | null => {
    const xFraction = direction === "sagittal" ? sign * parabasalFraction : 0;
    const yFraction = direction === "tangential" ? sign * parabasalFraction : 0;
    const trace = channel
      ? traceChiefRelativeSkewRayChromatic(
          xFraction,
          yFraction,
          geometry.yChief,
          geometry.uField,
          currentEPSD,
          focusT,
          zoomT,
          currentPhysStopSD,
          true,
          L,
          channel,
        )
      : traceChiefRelativeSkewRay(
          xFraction,
          yFraction,
          geometry.yChief,
          geometry.uField,
          currentEPSD,
          focusT,
          zoomT,
          currentPhysStopSD,
          true,
          L,
        );
    if (trace.clipped) return null;

    return direction === "tangential"
      ? { coordinate: trace.y, slope: trace.uy }
      : { coordinate: trace.x, slope: trace.ux };
  };

  const tangentialHits = ([-1, 1] as const)
    .map((sign) => traceRelativeRay("tangential", sign))
    .filter((hit): hit is TransverseFocusHit => hit !== null);
  const sagittalHits = ([-1, 1] as const)
    .map((sign) => traceRelativeRay("sagittal", sign))
    .filter((hit): hit is TransverseFocusHit => hit !== null);
  const tangentialReferenceHit = { coordinate: chiefRay.trace.y, slope: chiefRay.trace.uy };
  const sagittalReferenceHit = { coordinate: chiefRay.trace.x, slope: chiefRay.trace.ux };

  const tangentialBestFocusZ = focusPlaneFromRelativeHits(tangentialHits, tangentialReferenceHit, geometry.lastSurfZ);
  const sagittalBestFocusZ = focusPlaneFromRelativeHits(sagittalHits, sagittalReferenceHit, geometry.lastSurfZ);
  if (tangentialBestFocusZ === null || sagittalBestFocusZ === null) return null;

  const tangentialShiftMm = tangentialBestFocusZ - geometry.imagePlaneZ;
  const sagittalShiftMm = sagittalBestFocusZ - geometry.imagePlaneZ;
  const astigmaticDifferenceMm = sagittalBestFocusZ - tangentialBestFocusZ;
  const validSampleCount = tangentialHits.length + sagittalHits.length;

  return {
    sampleCount: 4,
    validSampleCount,
    clippedSampleCount: 4 - validSampleCount,
    chiefImageHeight: chiefRay.imagePoint.y,
    tangentialBestFocusZ,
    sagittalBestFocusZ,
    tangentialShiftMm,
    sagittalShiftMm,
    astigmaticDifferenceMm,
    astigmaticDifferenceUm: astigmaticDifferenceMm * 1000,
  };
}

function computeDiagnosticFieldFocus(
  L: RuntimeLens,
  geometry: ReturnType<typeof computeOffAxisFieldGeometry> & object,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): DiagnosticFieldFocus | null {
  const tangentialBundle = traceOrthogonalOffAxisBundle(
    "tangential",
    MERIDIONAL_COMA_SAMPLE_COUNT,
    geometry,
    L,
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
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
  );
  if (tangentialBundle === null || sagittalBundle === null) return null;
  if (tangentialBundle.validSampleCount < 3 || sagittalBundle.validSampleCount < 3) return null;

  const tangentialBestFocusZ = bestFocusPlaneForDirection(tangentialBundle, "tangential");
  const sagittalBestFocusZ = bestFocusPlaneForDirection(sagittalBundle, "sagittal");
  const tangentialShiftMm = tangentialBestFocusZ - geometry.imagePlaneZ;
  const sagittalShiftMm = sagittalBestFocusZ - geometry.imagePlaneZ;
  const astigmaticDifferenceMm = sagittalBestFocusZ - tangentialBestFocusZ;
  const validSampleCount = Math.min(tangentialBundle.validSampleCount, sagittalBundle.validSampleCount);

  return {
    sampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
    validSampleCount,
    clippedSampleCount: MERIDIONAL_COMA_SAMPLE_COUNT - validSampleCount,
    tangentialBestFocusZ,
    sagittalBestFocusZ,
    tangentialShiftMm,
    sagittalShiftMm,
    astigmaticDifferenceMm,
    astigmaticDifferenceUm: astigmaticDifferenceMm * 1000,
  };
}

function computeChromaticFieldShifts(
  L: RuntimeLens,
  geometry: ReturnType<typeof computeOffAxisFieldGeometry> & object,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): ChromaticFieldShift[] | null {
  const shifts: ChromaticFieldShift[] = [];

  for (const channel of CHROMATIC_CHANNELS) {
    const fieldFocus = computeStandardizedFieldFocus(
      L,
      geometry,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      channel,
    );
    if (fieldFocus === null) return null;

    shifts.push({
      channel,
      tangentialShiftMm: fieldFocus.tangentialShiftMm,
      sagittalShiftMm: fieldFocus.sagittalShiftMm,
    });
  }

  return shifts;
}

function computeFieldCurvatureField(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  meta: FieldCurvatureFieldMeta,
  chromatic: boolean,
): FieldCurvatureFieldResult {
  if (currentEPSD <= 0 || L.N < 1) return emptyFieldCurvatureFieldResult(meta);

  const geometry = computeOffAxisFieldGeometry(L, zPos, zoomT, meta.fieldFraction);
  if (geometry === null) return emptyFieldCurvatureFieldResult(meta);

  const standardizedFieldFocus = computeStandardizedFieldFocus(
    L,
    geometry,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
  );
  if (standardizedFieldFocus === null) return emptyFieldCurvatureFieldResult(meta);

  const diagnosticFieldFocus = computeDiagnosticFieldFocus(L, geometry, focusT, zoomT, currentEPSD, currentPhysStopSD);
  const chiefImageHeight = standardizedFieldFocus.chiefImageHeight;
  const petzvalShiftMm = petzvalShiftAtImageHeight(chiefImageHeight, L.petzvalSum) ?? 0;
  const petzvalBestFocusZ = geometry.imagePlaneZ + petzvalShiftMm;

  return {
    fieldFraction: meta.fieldFraction,
    label: meta.label,
    fieldAngleDeg: geometry.fieldAngleDeg,
    sampleCount: standardizedFieldFocus.sampleCount,
    validSampleCount: standardizedFieldFocus.validSampleCount,
    clippedSampleCount: standardizedFieldFocus.clippedSampleCount,
    chiefImageHeight,
    tangentialBestFocusZ: standardizedFieldFocus.tangentialBestFocusZ,
    sagittalBestFocusZ: standardizedFieldFocus.sagittalBestFocusZ,
    petzvalBestFocusZ,
    tangentialShiftMm: standardizedFieldFocus.tangentialShiftMm,
    sagittalShiftMm: standardizedFieldFocus.sagittalShiftMm,
    petzvalShiftMm,
    astigmaticDifferenceMm: standardizedFieldFocus.astigmaticDifferenceMm,
    astigmaticDifferenceUm: standardizedFieldFocus.astigmaticDifferenceUm,
    diagnosticTangentialBestFocusZ: diagnosticFieldFocus?.tangentialBestFocusZ,
    diagnosticSagittalBestFocusZ: diagnosticFieldFocus?.sagittalBestFocusZ,
    diagnosticTangentialShiftMm: diagnosticFieldFocus?.tangentialShiftMm,
    diagnosticSagittalShiftMm: diagnosticFieldFocus?.sagittalShiftMm,
    diagnosticAstigmaticDifferenceMm: diagnosticFieldFocus?.astigmaticDifferenceMm,
    diagnosticAstigmaticDifferenceUm: diagnosticFieldFocus?.astigmaticDifferenceUm,
    chromaticFieldShifts: chromatic
      ? computeChromaticFieldShifts(L, geometry, focusT, zoomT, currentEPSD, currentPhysStopSD)
      : null,
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
  chromatic = false,
): FieldCurvatureResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + (L.S[L.N - 1]?.d ?? 0);
  if (!isFinite(imagePlaneZ)) return null;

  const fields = fieldCurvatureFieldMeta(FIELD_CURVATURE_FIELD_FRACTIONS).map((meta) =>
    computeFieldCurvatureField(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, meta, chromatic),
  );
  const curveFields = fieldCurvatureFieldMeta(FIELD_CURVATURE_CURVE_FIELD_FRACTIONS).map((meta) =>
    computeFieldCurvatureField(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, meta, chromatic),
  );
  const usableFields = fields.filter((field) => field.usable);
  const usableCurveFields = curveFields.filter((field) => field.usable);
  if (usableFields.length < 2) return null;

  const maxAstigmaticDifferenceMm = Math.max(
    ...(usableCurveFields.length > 0 ? usableCurveFields : usableFields).map((field) =>
      Math.abs(field.astigmaticDifferenceMm),
    ),
  );
  const sharedFocusShiftHalfRangeMm = Math.max(
    FIELD_CURVATURE_MIN_SHARED_HALF_RANGE_MM,
    ...(usableCurveFields.length > 0 ? usableCurveFields : usableFields).map((field) =>
      Math.max(Math.abs(field.tangentialShiftMm), Math.abs(field.sagittalShiftMm), Math.abs(field.petzvalShiftMm)),
    ),
  );

  const edgeField = [...usableFields].reverse()[0];

  // Compute max chromatic focus spread across all usable fields
  let chromaticFocusSpreadMm: number | null = null;
  if (chromatic) {
    const spreads = (usableCurveFields.length > 0 ? usableCurveFields : usableFields)
      .map((field) => {
        if (!field.chromaticFieldShifts) return null;
        const tShifts = field.chromaticFieldShifts.map((s) => s.tangentialShiftMm);
        const sShifts = field.chromaticFieldShifts.map((s) => s.sagittalShiftMm);
        const tSpread = Math.max(...tShifts) - Math.min(...tShifts);
        const sSpread = Math.max(...sShifts) - Math.min(...sShifts);
        return Math.max(tSpread, sSpread);
      })
      .filter((s): s is number => s !== null);
    if (spreads.length > 0) chromaticFocusSpreadMm = Math.max(...spreads);
  }

  return {
    fieldFractions: FIELD_CURVATURE_FIELD_FRACTIONS,
    curveFieldFractions: FIELD_CURVATURE_CURVE_FIELD_FRACTIONS,
    fields,
    curveFields,
    usableFieldCount: usableFields.length,
    imagePlaneZ,
    sharedFocusShiftHalfRangeMm,
    maxAstigmaticDifferenceMm,
    maxAstigmaticDifferenceUm: maxAstigmaticDifferenceMm * 1000,
    edgeTangentialShiftMm: edgeField?.tangentialShiftMm ?? 0,
    edgeSagittalShiftMm: edgeField?.sagittalShiftMm ?? 0,
    chromaticFocusSpreadMm,
  };
}
