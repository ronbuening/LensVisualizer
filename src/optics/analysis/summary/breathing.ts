/**
 * Request-facing EFL readouts and sampled breathing series over first-order cores.
 */

import { eflAtPreparedState } from "../../first-order/focusBreathing.js";
import { prepareState } from "../../state/preparedGeometry.js";
import { runtimeView } from "../../prescription/runtimeView.js";
import { eflAtZoom } from "../../state/stationTables.js";
import { formatDist } from "../../first-order/format.js";
import type { AnalysisRequest } from "../request.js";

/**
 * Read the current EFL using the prepared request's controls.
 * @param request - current focus/zoom/aberration geometry
 * @returns effective focal length in mm
 */
export function computeFocusEFL(request: AnalysisRequest): number {
  return eflAtPreparedState(request.preparedGeometry);
}

export interface BreathingSample {
  focusT: number;
  efl: number;
  breathingPercent: number;
  distanceLabel: string;
}

const SAMPLE_COUNT = 21;

/**
 * Sample the intrinsic breathing curve, preserving the chart's zero-aberration inputs.
 * @param request - current focus marker and zoom geometry; aberration is intentionally omitted
 * @returns sorted focus samples including both endpoints and the current focus
 */
export function computeFocusBreathingSeries(request: AnalysisRequest): BreathingSample[] {
  const { lens, zoomT, focusT: currentFocusT } = request.preparedGeometry;
  const L = runtimeView(lens);
  const infinityEFL = L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  const points = new Set<number>([0, 1, currentFocusT]);
  for (let i = 0; i < SAMPLE_COUNT; i++) points.add(i / (SAMPLE_COUNT - 1));

  return [...points]
    .sort((a, b) => a - b)
    .map((focusT) => {
      const efl = eflAtPreparedState(prepareState(lens, focusT, zoomT, 0));
      const breathingPercent = Math.abs(infinityEFL) > 1e-9 ? (100 * (efl - infinityEFL)) / infinityEFL : 0;
      return {
        focusT,
        efl,
        breathingPercent,
        distanceLabel: formatDist(focusT, L, zoomT),
      };
    });
}
