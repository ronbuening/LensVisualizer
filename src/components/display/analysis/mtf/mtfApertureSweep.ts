/** Aperture and zoom sweeps build ordinary requests from the viewer's physical controls. */
import { computeFocusEFL, createAnalysisRequest, type AnalysisRequest } from "../../../../optics/analysis.js";
import { fopenAtZoomClamped, prepareRuntimeState, stopSemiDiameterForFNumber } from "../../../../optics/optics.js";
import { computeAnalysisFieldGeometryAtState, entrancePupilAtState } from "../../../../optics/fieldGeometry.js";
import { publishedZoomStations } from "../../../../optics/publishedStations.js";
import type { RuntimeLens } from "../../../../types/optics.js";
import { isMtfComparisonFNumber, MTF_COMPARISON_F_NUMBERS } from "../../../../utils/state/mtfPreferences.js";

/** Rounded chart labels within 0.05 f-number represent the same aperture. */
const APERTURE_LABEL_TOLERANCE = 0.05;

/**
 * Share attainable full stops and a distinct minimum aperture between comparison and sweep.
 * @param fNumber - marked chart aperture at the current zoom position
 * @param maxFstop - lens's minimum aperture (largest attainable marked f-number)
 * @returns slower full stops through f/128 within the exact bound, plus a distinct minimum
 */
export function mtfComparisonFNumbers(fNumber: number | undefined, maxFstop: number): number[] {
  if (!fNumber || !Number.isFinite(fNumber) || fNumber <= 0) return [];
  const stops: number[] = MTF_COMPARISON_F_NUMBERS.filter(
    (stop) => fNumber < stop - APERTURE_LABEL_TOLERANCE && stop <= maxFstop,
  );
  if (
    isMtfComparisonFNumber(maxFstop) &&
    fNumber < maxFstop - APERTURE_LABEL_TOLERANCE &&
    MTF_COMPARISON_F_NUMBERS.every((stop) => Math.abs(stop - maxFstop) > APERTURE_LABEL_TOLERANCE)
  ) {
    stops.push(maxFstop);
  }
  return stops;
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
 * Start at the exact charted aperture, followed by the comparison selector's slower stops.
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

/**
 * Build the same wide-open controls as the viewer at each published infinity station.
 * @param lens - zoom lens with source-declared station provenance
 * @param request - current controls; only zoom, focus and aperture are replaced
 * @returns design focal lengths and ordinary station requests; no stations for a prime
 */
export function mtfZoomRequests(lens: RuntimeLens, request: AnalysisRequest) {
  if (!lens.isZoom) return [];
  return publishedZoomStations(lens).map(({ zoomT, focalLengthMm }) => {
    const aberrationT = request.preparedGeometry.aberrationT;
    const preparedState = prepareRuntimeState(lens, 0, zoomT, aberrationT);
    const fNumber = fopenAtZoomClamped(zoomT, lens);
    const stop = stopSemiDiameterForFNumber(fNumber, zoomT, lens);
    const fieldGeometry = computeAnalysisFieldGeometryAtState(0, zoomT, lens, aberrationT);
    const pupil = entrancePupilAtState(stop, 0, zoomT, lens, fieldGeometry, aberrationT).epSD;
    const firstOrderRequest = createAnalysisRequest({
      preparedState,
      dynamicEFL: lens.EFL,
      currentEPSD: lens.EP.epSD,
      currentPhysStopSD: lens.stopPhysSD,
    });
    return {
      fNumber,
      focalLengthMm,
      zoomT,
      request: createAnalysisRequest({
        preparedState,
        dynamicEFL: computeFocusEFL(firstOrderRequest),
        currentEPSD: pupil,
        currentPhysStopSD: stop,
      }),
    };
  });
}
