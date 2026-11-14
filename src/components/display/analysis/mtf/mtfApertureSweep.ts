/** Aperture sweeps use the comparison's ordinary request scaling, without changing the engine. */
import { createAnalysisRequest, type AnalysisRequest } from "../../../../optics/analysis.js";
import { stopSemiDiameterForFNumber } from "../../../../optics/optics.js";
import type { RuntimeLens } from "../../../../types/optics.js";
import { MTF_COMPARISON_F_NUMBERS } from "../../../../utils/state/mtfPreferences.js";

/** Rounded chart labels within 0.05 f-number represent the same aperture. */
const APERTURE_LABEL_TOLERANCE = 0.05;
/** Include an endpoint despite floating-point roundoff, without extending the physical range. */
const APERTURE_BOUND_TOLERANCE = 1e-9;

/**
 * Share the attainable full stops between the overlay, its selector and the aperture sweep.
 * @param fNumber - marked chart aperture at the current zoom position
 * @param maxFstop - lens's minimum aperture (largest attainable marked f-number)
 * @returns slower full stops, including the minimum aperture within roundoff tolerance
 */
export function mtfComparisonFNumbers(fNumber: number | undefined, maxFstop: number) {
  if (!fNumber || !Number.isFinite(fNumber) || fNumber <= 0) return [];
  return MTF_COMPARISON_F_NUMBERS.filter(
    (stop) => fNumber < stop - APERTURE_LABEL_TOLERANCE && stop <= maxFstop + APERTURE_BOUND_TOLERANCE,
  );
}

/**
 * Scale both physical radii at the current optical station.
 * @param lens - lens whose stop rule sizes the iris
 * @param request - charted optical state and aperture
 * @param fNumber - marked f-number at that zoom position
 * @returns an ordinary analysis request with proportional entrance pupil
 */
export function mtfRequestAtAperture(lens: RuntimeLens, request: AnalysisRequest, fNumber: number): AnalysisRequest {
  const stop = stopSemiDiameterForFNumber(fNumber, request.preparedGeometry.zoomT, lens);
  return createAnalysisRequest({
    preparedState: request.preparedGeometry,
    dynamicEFL: request.dynamicEFL,
    currentEPSD: (request.aperture.entrancePupilSemiDiameterMm * stop) / request.aperture.stopSemiDiameterMm,
    currentPhysStopSD: stop,
    perspectiveTraceContext: request.perspectiveTraceContext,
  });
}

/**
 * Start at the exact charted aperture, followed by the comparison selector's slower full stops.
 * @param lens - current lens, including its minimum-aperture bound
 * @param request - charted request, retained verbatim for the first point
 * @param fNumber - charted marked f-number
 * @returns ordered aperture/request pairs; no jobs for an absent or invalid aperture
 */
export function mtfApertureRequests(lens: RuntimeLens, request: AnalysisRequest, fNumber: number | undefined) {
  if (!fNumber || !Number.isFinite(fNumber) || fNumber <= 0 || !(request.aperture.stopSemiDiameterMm > 0)) return [];
  return [
    { fNumber, request },
    ...mtfComparisonFNumbers(fNumber, lens.maxFstop).map((stop) => ({
      fNumber: stop,
      request: mtfRequestAtAperture(lens, request, stop),
    })),
  ];
}
