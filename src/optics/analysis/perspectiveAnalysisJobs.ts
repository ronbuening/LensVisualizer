/** Lazy movement-aware analysis jobs bound to one immutable analysis request. */

import { computePerspectiveChromaticAnalysis } from "../perspective/analysis/chromatic.js";
import { computePerspectiveDistortionAnalysis } from "../perspective/analysis/distortion.js";
import { computePerspectiveFieldAberrations } from "../perspective/analysis/fieldAberrations.js";
import { computePerspectiveFocusAnalysis } from "../perspective/analysis/focus.js";
import { computePerspectivePupilAnalysis } from "../perspective/analysis/pupil.js";
import { computePerspectiveVignettingAnalysis } from "../perspective/analysis/vignetting.js";
import type { AnalysisRequest } from "./request.js";
import { perspectiveAnalysisSamplingPlan } from "./perspectiveAnalysisSampling.js";

/** No-argument lazy jobs exposed by AnalysisComputationContext. */
export interface PerspectiveAnalysisJobs {
  computePerspectiveFocusAnalysis: () => ReturnType<typeof computePerspectiveFocusAnalysis>;
  computePerspectiveFieldAberrations: () => ReturnType<typeof computePerspectiveFieldAberrations>;
  computePerspectiveChromaticAnalysis: () => ReturnType<typeof computePerspectiveChromaticAnalysis>;
  computePerspectiveDistortionAnalysis: () => ReturnType<typeof computePerspectiveDistortionAnalysis>;
  computePerspectiveVignettingAnalysis: () => ReturnType<typeof computePerspectiveVignettingAnalysis>;
  computePerspectivePupilAnalysis: () => ReturnType<typeof computePerspectivePupilAnalysis>;
}

/**
 * Build lazy perspective jobs without starting any ray sweep during context creation.
 * @param request - frozen controls, aperture, pose and shared trace context
 * @returns per-request memoized family accessors
 */
export function createPerspectiveAnalysisJobs(request: AnalysisRequest): PerspectiveAnalysisJobs {
  const plan = perspectiveAnalysisSamplingPlan(request);

  return {
    computePerspectiveFocusAnalysis: memoize(() => computePerspectiveFocusAnalysis(request, plan.focus)),
    computePerspectiveFieldAberrations: memoize(() =>
      computePerspectiveFieldAberrations(request, plan.fieldAberrations),
    ),
    computePerspectiveChromaticAnalysis: memoize(() => computePerspectiveChromaticAnalysis(request, plan.chromatic)),
    computePerspectiveDistortionAnalysis: memoize(() => computePerspectiveDistortionAnalysis(request, plan.distortion)),
    computePerspectiveVignettingAnalysis: memoize(() => computePerspectiveVignettingAnalysis(request, plan.vignetting)),
    computePerspectivePupilAnalysis: memoize(() => computePerspectivePupilAnalysis(request, plan.pupils)),
  };
}

function memoize<Result>(compute: () => Result): () => Result {
  let computed = false;
  let result: Result;
  return () => {
    if (!computed) {
      result = compute();
      computed = true;
    }
    return result!;
  };
}
