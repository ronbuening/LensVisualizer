import type { ChromaticChannel, RuntimeLens } from "../../types/optics.js";
import type { ChromaticFieldShift, FieldCurvatureFieldResult, FieldCurvatureResult } from "./types.js";
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
    const tangentialBundle = traceOrthogonalOffAxisBundle(
      "tangential",
      MERIDIONAL_COMA_SAMPLE_COUNT,
      geometry,
      L,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      channel,
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
      channel,
    );
    if (tangentialBundle === null || sagittalBundle === null) return null;
    if (tangentialBundle.validSampleCount < 3 || sagittalBundle.validSampleCount < 3) return null;

    const tangentialBestFocusZ = bestFocusPlaneForDirection(tangentialBundle, "tangential");
    const sagittalBestFocusZ = bestFocusPlaneForDirection(sagittalBundle, "sagittal");

    shifts.push({
      channel,
      tangentialShiftMm: tangentialBestFocusZ - geometry.imagePlaneZ,
      sagittalShiftMm: sagittalBestFocusZ - geometry.imagePlaneZ,
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

  const fields = fieldCurvatureFieldMeta().map((meta) =>
    computeFieldCurvatureField(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, meta, chromatic),
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

  // Compute max chromatic focus spread across all usable fields
  let chromaticFocusSpreadMm: number | null = null;
  if (chromatic) {
    const spreads = usableFields
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
    fields,
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
