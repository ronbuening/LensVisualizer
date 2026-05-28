/**
 * Current-state optical summary derived from a prepared engine state.
 */

import type { FieldGeometryState } from "../optics.js";
import { FOCUS_INFINITY_THRESHOLD, eflAtZoom } from "../layout.js";
import { computeCardinalElements2 } from "../first-order/cardinals.js";
import type { PreparedOpticalState } from "../types.js";

/**
 * Scalar metrics shown by the Summary analysis tab for one current optical state.
 *
 * Distances are in millimeters unless the property name says meters. Nullable values
 * indicate unavailable or non-finite optics results rather than zero-valued measurements.
 */
export interface OpticalSummaryMetrics2 {
  currentEFLMm: number | null;
  infinityEFLMm: number | null;
  breathingPercent: number | null;
  effectiveFNumber: number | null;
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
  surfaceCount: number;
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
 * @param state - prepared optical state for current focus/zoom/aberration sliders
 * @param dynamicEFL - current effective focal length in mm
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param fieldGeometry - optional solved field geometry for current half-field reporting
 * @returns finite/null summary metrics for the analysis drawer
 */
export function computeOpticalSummaryForState2(
  state: PreparedOpticalState,
  dynamicEFL: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
): OpticalSummaryMetrics2 {
  const L = state.lens.runtime;
  const currentEFLMm = finiteOrNull(dynamicEFL);
  const infinityEFLMm = finiteOrNull(eflAtZoom(state.zoomT, L));
  const breathingPercent =
    currentEFLMm !== null && infinityEFLMm !== null && Math.abs(infinityEFLMm) > 1e-9
      ? (100 * (currentEFLMm - infinityEFLMm)) / infinityEFLMm
      : null;
  const entrancePupilDiameterMm = currentEPSD > 0 ? finiteOrNull(currentEPSD * 2) : null;
  const physicalStopDiameterMm = currentPhysStopSD > 0 ? finiteOrNull(currentPhysStopSD * 2) : null;
  const effectiveFNumber =
    currentEFLMm !== null && entrancePupilDiameterMm !== null && entrancePupilDiameterMm > 1e-9
      ? Math.abs(currentEFLMm) / entrancePupilDiameterMm
      : null;
  const halfFieldDeg = finiteOrNull(fieldGeometry?.halfFieldDeg);
  const cardinals = computeCardinalElements2(state);

  return {
    currentEFLMm,
    infinityEFLMm,
    breathingPercent,
    effectiveFNumber,
    entrancePupilDiameterMm,
    physicalStopDiameterMm,
    halfFieldDeg,
    fullFieldDeg: halfFieldDeg === null ? null : halfFieldDeg * 2,
    focusDistanceM: focusDistanceForState(state),
    zoomT: state.zoomT,
    focusT: state.focusT,
    aberrationT: state.aberrationT,
    imagePlaneZMm: finiteOrNull(state.imgZ),
    totalTrackMm: finiteOrNull(state.totalTrack),
    surfaceCount: state.surfaces.length,
    opticalPath: state.lens.flags.isFoldedOptics ? "folded" : "sequential",
    cardinalEFLMm: finiteOrNull(cardinals?.distances.efl.valueMm),
    bfdMm: finiteOrNull(cardinals?.distances.bfd.valueMm),
    ffdMm: finiteOrNull(cardinals?.distances.ffd.valueMm),
    principalHiatusMm: finiteOrNull(cardinals?.distances.hiatus.valueMm),
  };
}

function focusDistanceForState(state: PreparedOpticalState): number | null {
  const closeFocusM = state.lens.runtime.closeFocusM;
  if (state.focusT < FOCUS_INFINITY_THRESHOLD) return null;
  if (!Number.isFinite(closeFocusM) || closeFocusM <= 0 || state.focusT <= 0) return null;
  return closeFocusM / state.focusT;
}

function finiteOrNull(value: number | null | undefined): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
