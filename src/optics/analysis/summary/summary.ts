/**
 * Current-state optical summary derived from an immutable analysis request.
 */

import { runtimeView } from "../../prescription/runtimeView.js";
import { focusDistanceAt } from "../../state/focusDistance.js";

import { eflAtZoom } from "../../state/stationTables.js";
import { computeCardinalElements } from "./cardinals.js";
import { computeWorkingFNumber } from "./fNumbers.js";
import type { WorkingFNumberResult } from "./fNumbers.js";
import { imageSpaceFNumber, paraxialWorkingFNumber } from "../../first-order/fNumber.js";
import type { AnalysisRequest } from "../request.js";

/**
 * Scalar metrics shown by the Summary analysis tab for one current optical state.
 *
 * Distances are in millimeters unless the property name says meters. Nullable values
 * indicate unavailable or non-finite optics results rather than zero-valued measurements.
 */
export interface OpticalSummaryMetrics {
  currentEFLMm: number | null;
  infinityEFLMm: number | null;
  breathingPercent: number | null;
  /** OpticStudio's image-space F/#: EFL / EPD, paraxial, of the current state. */
  imageSpaceFNumber: number | null;
  /** 1 / (2 n′ |u′|) of the paraxial marginal ray at the current object distance; null on a folded path. */
  paraxialWorkingFNumber: number | null;
  /** 1 / (2 n′ sin θ′) of the real marginal ray through the stop rim, or the state that ray is in. */
  workingFNumber: WorkingFNumberResult;
  entrancePupilDiameterMm: number | null;
  physicalStopDiameterMm: number | null;
  halfFieldDeg: number | null;
  fullFieldDeg: number | null;
  focusDistanceM: number | null;
  zoomT: number;
  focusT: number;
  aberrationT: number;
  imagePlaneZMm: number | null;
  totalTrackMm: number | null;
  /**
   * Prepared total track / |current EFL|, dimensionless. Sequential track is the axial
   * distance from the first surface vertex to the image plane, including synthetic rear
   * plates at their physical thicknesses and gaps. Null for folded paths, whose prepared
   * track is a Z bounding extent rather than the physical front-to-image length.
   */
  telephotoRatio: number | null;
  /** Authored lens surfaces; synthetic rear plates are reported separately. */
  surfaceCount: number;
  rearPlateCount: number;
  /** Summed physical thickness of modeled rear plates in mm (0 when none). */
  rearPlateThicknessMm: number;
  opticalPath: "sequential" | "folded";
  cardinalEFLMm: number | null;
  bfdMm: number | null;
  ffdMm: number | null;
  principalHiatusMm: number | null;
}

/**
 * Compute headline current-state optical metrics from prepared engine data.
 *
 * This is intentionally a read-only summary: it does not rebuild the RuntimeLens or
 * change any trace state. `dynamicEFL` and aperture values are supplied by the caller
 * because they depend on UI state that lives outside the prepared lens prescription.
 *
 * @param request - prepared geometry, current EFL, aperture and optional solved field
 * @returns finite/null summary metrics for the analysis drawer
 */
export function computeOpticalSummary(request: AnalysisRequest): OpticalSummaryMetrics {
  const { preparedGeometry: state, dynamicEFL, fieldGeometry } = request;
  const { entrancePupilSemiDiameterMm: currentEPSD, stopSemiDiameterMm: currentPhysStopSD } = request.aperture;
  const L = runtimeView(state.lens);
  const currentEFLMm = finiteOrNull(dynamicEFL);
  const totalTrackMm = finiteOrNull(state.totalTrack);
  const telephotoRatio =
    !state.lens.flags.isFoldedOptics && totalTrackMm !== null && currentEFLMm !== null && Math.abs(currentEFLMm) > 1e-9
      ? finiteOrNull(totalTrackMm / Math.abs(currentEFLMm))
      : null;
  const infinityEFLMm = finiteOrNull(eflAtZoom(state.zoomT, L));
  const breathingPercent =
    currentEFLMm !== null && infinityEFLMm !== null && Math.abs(infinityEFLMm) > 1e-9
      ? (100 * (currentEFLMm - infinityEFLMm)) / infinityEFLMm
      : null;
  const entrancePupilDiameterMm = currentEPSD > 0 ? finiteOrNull(currentEPSD * 2) : null;
  const physicalStopDiameterMm = currentPhysStopSD > 0 ? finiteOrNull(currentPhysStopSD * 2) : null;
  // A folded path's pupil divides the stop by the generalized tracer's near-axis ratio (`entrancePupil`).
  const imageSpace = state.lens.flags.isFoldedOptics
    ? currentEFLMm !== null && entrancePupilDiameterMm !== null && entrancePupilDiameterMm > 1e-9
      ? Math.abs(currentEFLMm) / entrancePupilDiameterMm
      : null
    : imageSpaceFNumber(state, currentPhysStopSD);
  const halfFieldDeg = finiteOrNull(fieldGeometry?.halfFieldDeg);
  const cardinals = computeCardinalElements(request);

  return {
    currentEFLMm,
    infinityEFLMm,
    breathingPercent,
    imageSpaceFNumber: imageSpace,
    paraxialWorkingFNumber: paraxialWorkingFNumber(state, currentPhysStopSD),
    workingFNumber: computeWorkingFNumber(request),
    entrancePupilDiameterMm,
    physicalStopDiameterMm,
    halfFieldDeg,
    fullFieldDeg: halfFieldDeg === null ? null : halfFieldDeg * 2,
    focusDistanceM: focusDistanceAt(state.focusT, L, state.zoomT),
    zoomT: state.zoomT,
    focusT: state.focusT,
    aberrationT: state.aberrationT,
    imagePlaneZMm: finiteOrNull(state.imgZ),
    totalTrackMm,
    telephotoRatio,
    surfaceCount: L.S.filter((surface) => !surface.synthetic).length,
    rearPlateCount: L.source.rearPlates?.length ?? 0,
    rearPlateThicknessMm: (L.source.rearPlates ?? []).reduce((sum, plate) => sum + plate.thicknessMm, 0),
    opticalPath: state.lens.flags.isFoldedOptics ? "folded" : "sequential",
    cardinalEFLMm: finiteOrNull(cardinals?.distances.efl.valueMm),
    bfdMm: finiteOrNull(cardinals?.distances.bfd.valueMm),
    ffdMm: finiteOrNull(cardinals?.distances.ffd.valueMm),
    principalHiatusMm: finiteOrNull(cardinals?.distances.hiatus.valueMm),
  };
}

function finiteOrNull(value: number | null | undefined): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
