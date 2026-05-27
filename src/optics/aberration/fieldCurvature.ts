/**
 * Field-curvature analysis — computes sagittal/tangential best-focus surfaces across field height.
 *
 * Uses state-aware off-axis bundles and chromatic field shifts to summarize Petzval-like focus bend for display tabs.
 */

import type { ChromaticChannel, RuntimeLens } from "../../types/optics.js";
import type { ChromaticFieldShift, FieldCurvatureFieldResult, FieldCurvatureResult } from "./types.js";
import {
  FIELD_CURVATURE_CURVE_FIELD_FRACTIONS,
  FIELD_CURVATURE_FIELD_FRACTIONS,
  MERIDIONAL_COMA_SAMPLE_COUNT,
} from "./types.js";
import {
  computeAnalysisFieldGeometryAtState,
  thick,
  traceChiefRelativeSkewRay,
  traceChiefRelativeSkewRayChromatic,
  type FieldGeometryState,
} from "../optics.js";
import {
  bestFocusPlaneForDirection,
  computeStateAwareOffAxisFieldGeometry,
  traceOffAxisChiefRay,
  traceOrthogonalOffAxisBundle,
  type OffAxisFieldGeometry,
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

const EMPTY_FIELD_GEOMETRY: FieldGeometryState = {
  halfFieldDeg: 0,
  yRatio: 0,
  b: 0,
  epRatio: 0,
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

export interface FieldCurvatureBundleResult {
  fieldCurvature: FieldCurvatureResult | null;
  chromaticFieldCurvature: FieldCurvatureResult | null;
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

  // The Petzval surface radius R_P = 1/P has its center of curvature on the
  // lens side of the image plane for a converging system (P > 0). The sag at
  // image height h is: shift = -(R_P - sign(R_P) * sqrt(R_P^2 - h^2)), which
  // gives negative shift (toward the lens) for P > 0.
  const radius = 1 / petzvalSum;
  const underRoot = radius * radius - imageHeight * imageHeight;
  if (underRoot <= 0) return null;

  return -(radius - Math.sign(radius) * Math.sqrt(underRoot));
}

// Field-curvature shift is a longitudinal-focus metric on the C/d/F triplet only;
// g-line (V) tracing is supported by the engine but not analyzed here.
const CHROMATIC_CHANNELS: ("R" | "G" | "B")[] = ["R", "G", "B"];

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
  geometry: OffAxisFieldGeometry,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  channel?: ChromaticChannel,
  aberrationT = 0,
): StandardizedFieldFocus | null {
  const chiefRay = traceOffAxisChiefRay(
    geometry,
    L,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    channel,
    aberrationT,
  );
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
          aberrationT,
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
          aberrationT,
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
  geometry: OffAxisFieldGeometry,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
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
    undefined,
    aberrationT,
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
    undefined,
    aberrationT,
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
  geometry: OffAxisFieldGeometry,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
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
      aberrationT,
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
  stateGeometry: FieldGeometryState,
  aberrationT = 0,
): FieldCurvatureFieldResult {
  if (currentEPSD <= 0 || L.N < 1) return emptyFieldCurvatureFieldResult(meta);

  const geometry = computeStateAwareOffAxisFieldGeometry(
    L,
    zPos,
    focusT,
    zoomT,
    meta.fieldFraction,
    stateGeometry,
    aberrationT,
  );
  if (geometry === null) return emptyFieldCurvatureFieldResult(meta);

  const standardizedFieldFocus = computeStandardizedFieldFocus(
    L,
    geometry,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    undefined,
    aberrationT,
  );
  if (standardizedFieldFocus === null) return emptyFieldCurvatureFieldResult(meta);

  const diagnosticFieldFocus = computeDiagnosticFieldFocus(
    L,
    geometry,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    aberrationT,
  );
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
      ? computeChromaticFieldShifts(L, geometry, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT)
      : null,
    usable: true,
  };
}

function buildFieldCurvatureResult(
  fields: FieldCurvatureFieldResult[],
  curveFields: FieldCurvatureFieldResult[],
  imagePlaneZ: number,
  chromatic: boolean,
): FieldCurvatureResult | null {
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
      Math.max(
        Math.abs(field.tangentialShiftMm),
        Math.abs(field.sagittalShiftMm),
        Math.abs(field.petzvalShiftMm),
        Math.abs(field.diagnosticTangentialShiftMm ?? 0),
        Math.abs(field.diagnosticSagittalShiftMm ?? 0),
      ),
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

function computeFieldCurvatureBase(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
  fieldGeometry?: FieldGeometryState,
): { result: FieldCurvatureResult | null; stateGeometry: FieldGeometryState; imagePlaneZ: number } {
  if (currentEPSD <= 0 || L.N < 1) {
    return {
      result: null,
      stateGeometry: fieldGeometry ?? EMPTY_FIELD_GEOMETRY,
      imagePlaneZ: 0,
    };
  }

  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  const stateGeometry = fieldGeometry ?? computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT);
  if (!isFinite(imagePlaneZ)) return { result: null, stateGeometry, imagePlaneZ };

  const fields = fieldCurvatureFieldMeta(FIELD_CURVATURE_FIELD_FRACTIONS).map((meta) =>
    computeFieldCurvatureField(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      meta,
      false,
      stateGeometry,
      aberrationT,
    ),
  );
  const curveFields = fieldCurvatureFieldMeta(FIELD_CURVATURE_CURVE_FIELD_FRACTIONS).map((meta) =>
    computeFieldCurvatureField(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      meta,
      false,
      stateGeometry,
      aberrationT,
    ),
  );

  return {
    result: buildFieldCurvatureResult(fields, curveFields, imagePlaneZ, false),
    stateGeometry,
    imagePlaneZ,
  };
}

function addChromaticShiftsToField(
  field: FieldCurvatureFieldResult,
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  stateGeometry: FieldGeometryState,
  aberrationT = 0,
): FieldCurvatureFieldResult {
  if (!field.usable) return { ...field, chromaticFieldShifts: null };
  const geometry = computeStateAwareOffAxisFieldGeometry(
    L,
    zPos,
    focusT,
    zoomT,
    field.fieldFraction,
    stateGeometry,
    aberrationT,
  );
  return {
    ...field,
    chromaticFieldShifts:
      geometry === null
        ? null
        : computeChromaticFieldShifts(L, geometry, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT),
  };
}

function buildChromaticFieldCurvatureFromBase(
  base: FieldCurvatureResult | null,
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  stateGeometry: FieldGeometryState,
  aberrationT = 0,
): FieldCurvatureResult | null {
  if (base === null) return null;

  const fields = base.fields.map((field) =>
    addChromaticShiftsToField(
      field,
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      stateGeometry,
      aberrationT,
    ),
  );
  const curveFields = base.curveFields.map((field) =>
    addChromaticShiftsToField(
      field,
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      stateGeometry,
      aberrationT,
    ),
  );

  return buildFieldCurvatureResult(fields, curveFields, base.imagePlaneZ, true);
}

export function computeFieldCurvatureBundle(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
  fieldGeometry?: FieldGeometryState,
): FieldCurvatureBundleResult {
  const base = computeFieldCurvatureBase(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    aberrationT,
    fieldGeometry,
  );
  return {
    fieldCurvature: base.result,
    chromaticFieldCurvature: buildChromaticFieldCurvatureFromBase(
      base.result,
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      base.stateGeometry,
      aberrationT,
    ),
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
  aberrationT = 0,
  fieldGeometry?: FieldGeometryState,
): FieldCurvatureResult | null {
  const base = computeFieldCurvatureBase(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    aberrationT,
    fieldGeometry,
  );
  if (!chromatic) return base.result;
  return buildChromaticFieldCurvatureFromBase(
    base.result,
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    base.stateGeometry,
    aberrationT,
  );
}
