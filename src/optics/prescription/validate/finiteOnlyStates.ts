/**
 * Finite-only state checks on a built lens. A finite-only lens has no infinity state to fall back on: its authored
 * conjugates are the only object definition, and diagram rays, focus labels and MTF all start there. So every state's
 * object must be one the prescription images on its authored plane, and `focus.closeFocusM` names the nearest state.
 */
import type { RuntimeLens } from "../../../types/optics.js";
import { createAnalysisRequest } from "../../analysis/request.js";
import { assessMtfConjugateConsistency } from "../../analysis/mtf/mtfConjugateConsistency.js";
import { stopSemiDiameterForFNumber } from "../../state/apertureStop.js";
import { entrancePupilAtState } from "../../state/fieldAdapters.js";
import { focusDistanceAt } from "../../state/focusDistance.js";
import { prepareRuntimeState } from "../../state/runtimeAdapters.js";
import { fopenAtZoom } from "../../state/stationTables.js";

/** Share by which `focus.closeFocusM` may differ from the nearest state's distance; the catalog's close-focus rule. */
const CLOSE_FOCUS_FRACTION = 0.05;

/**
 * Check each finite-only state's conjugate against the prescription, and `focus.closeFocusM` against the states.
 *
 * Conjugacy uses the finite-conjugate audit's paraxial verdict at the open iris (`npm run audit:finite-conjugates`),
 * without its real-ray diagnostic. A declared distance whose other reference fits is reported as such.
 *
 * @param L - built lens; an ordinary lens returns no issues
 * @returns readable issues, empty when every state is consistent
 */
export function validateFiniteOnlyStates(L: RuntimeLens): string[] {
  if (!L.isFiniteOnly) return [];
  const issues: string[] = [];
  const stop = stopSemiDiameterForFNumber(fopenAtZoom(0, L), 0, L);
  const distancesM: number[] = [];
  L.source.focus.keyframes.forEach((focusT, keyframe) => {
    const request = createAnalysisRequest({
      preparedState: prepareRuntimeState(L, focusT, 0),
      dynamicEFL: 0,
      currentPhysStopSD: stop,
      currentEPSD: entrancePupilAtState(stop, focusT, 0, L).epSD,
    });
    const report = assessMtfConjugateConsistency(request, { realRayDiagnostic: false });
    if (report && (report.verdict === "inconsistent" || report.verdict === "other-reference")) {
      const offset = report.offsetDepths === null ? "" : ` (${report.offsetDepths.toFixed(1)} focus depths)`;
      issues.push(
        report.verdict === "other-reference"
          ? `focus.conjugates for keyframe ${keyframe}: the object is in focus only when measured from the other distanceReference`
          : `focus.conjugates for keyframe ${keyframe}: the prescription does not image this object on its image plane${offset}`,
      );
    }
    const distanceM = focusDistanceAt(focusT, L);
    if (distanceM !== null) distancesM.push(distanceM);
  });
  const nearestM = Math.min(...distancesM);
  if (Number.isFinite(nearestM) && Math.abs(L.closeFocusM / nearestM - 1) > CLOSE_FOCUS_FRACTION) {
    issues.push(
      `focus.closeFocusM ${L.closeFocusM} m must be the nearest finite state's object-to-image distance, ${nearestM.toFixed(3)} m`,
    );
  }
  return issues;
}
