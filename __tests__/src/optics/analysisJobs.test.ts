import { computeBothPupilAberrationProfiles } from "../../../src/optics/analysis/pupils/pupilAberration.js";
import { computeVignettingCurve } from "../../../src/optics/analysis/vignetting/vignetting.js";
import {
  computeDistortionCurve,
  computeDistortionFieldGrid,
} from "../../../src/optics/analysis/distortion/distortion.js";
import { computeFieldCurvatureBundle } from "../../../src/optics/analysis/aberration/fieldCurvature.js";
import { createAnalysisRequest } from "../../../src/optics/analysis/request.js";
import { describe, expect, it } from "vitest";
import { analysisPreviewJobs, analysisJobs } from "../../../src/optics/analysis/analysisJobs.js";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeAdapters.js";
import { eflAtFocus } from "../../../src/optics/first-order/focusBreathing.js";
import { apertureAt, buildChromaticPositiveElementLens, sharedSonnar50f15 } from "./testLensFixtures.js";

describe("analysis job facade", () => {
  it("runs distortion and vignetting from a shared prepared-state z-position view", () => {
    const L = sharedSonnar50f15();
    const focusT = 0.25;
    const zoomT = 0;
    const state = prepareRuntimeState(L, focusT, zoomT);
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT);
    expect(Object.isFrozen(state.z)).toBe(true);

    const distortionRequest = createAnalysisRequest({
      preparedState: state,
      dynamicEFL,
      currentEPSD,
      currentPhysStopSD,
    });
    expect(analysisJobs.computeDistortionCurve(distortionRequest)).toEqual(computeDistortionCurve(distortionRequest));
    expect(analysisPreviewJobs.computeDistortionCurve(distortionRequest)).toEqual(
      computeDistortionCurve(distortionRequest),
    );
    expect(analysisPreviewJobs.computeDistortionFieldGrid(distortionRequest)).toEqual(
      computeDistortionFieldGrid(distortionRequest),
    );
    expect(analysisJobs.computeDistortionFieldGrid(distortionRequest)).toEqual(
      computeDistortionFieldGrid(distortionRequest),
    );
    expect(analysisJobs.computeVignettingCurve(distortionRequest)).toEqual(computeVignettingCurve(distortionRequest));
    expect(analysisPreviewJobs.computeVignettingCurve(distortionRequest)).toEqual(
      computeVignettingCurve(distortionRequest),
    );
    const fieldRequest = createAnalysisRequest({ preparedState: state, dynamicEFL, currentEPSD, currentPhysStopSD });
    expect(analysisJobs.computeFieldCurvatureBundle(fieldRequest)).toEqual(computeFieldCurvatureBundle(fieldRequest));
    expect(analysisPreviewJobs.computeFieldCurvatureBundle(fieldRequest)).toEqual(
      computeFieldCurvatureBundle(fieldRequest),
    );
    expect(analysisJobs.computeChromaticRayFanAnalysis(distortionRequest)).toEqual(
      analysisPreviewJobs.computeChromaticRayFanAnalysis(distortionRequest),
    );
    expect(analysisJobs.computeChromaticAnalysis(distortionRequest)).toEqual(
      analysisPreviewJobs.computeChromaticAnalysis(distortionRequest),
    );
  });

  it("applies reduced chromatic sampling through the job facade", () => {
    const L = buildChromaticPositiveElementLens("analysis-jobs-chromatic-sampling");
    const focusT = 0;
    const zoomT = 0;
    const state = prepareRuntimeState(L, focusT, zoomT);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT);
    const sampling = {
      chromaticLongitudinalFractions: [0.5],
      chromaticLateralFieldFractions: [0, 1],
      chromaticRayTraceOnAxisFractions: [0.5],
      chromaticRayTraceOffAxisFractions: [0.5],
    };

    const request = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: L.EFL,
      currentEPSD,
      currentPhysStopSD,
      sampling,
    });
    const analysis = analysisJobs.computeChromaticAnalysis(request);
    const rayTrace = analysisJobs.computeChromaticRayFanAnalysis(request);

    expect(analysis.longitudinalFocus?.marginalFraction).toBe(0.5);
    expect(analysis.longitudinalFocus?.channels).toEqual(["R", "G", "B", "V"]);
    expect(analysis.lateralColor?.fieldFractions).toEqual([0, 1]);
    expect(analysis.lateralColor?.channels).toEqual(["R", "G", "B", "V"]);
    expect(rayTrace.channels).toEqual(["R", "G", "B", "V"]);
    expect(rayTrace.onAxisAttemptedRayCount).toBeLessThanOrEqual(4);
    expect(rayTrace.offAxisAttemptedRayCount).toBeLessThanOrEqual(4);
  });

  it("exposes bokeh and pupil work through the same prepared-state facade", () => {
    const L = sharedSonnar50f15();
    const focusT = 0;
    const zoomT = 0;
    const state = prepareRuntimeState(L, focusT, zoomT);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT);

    const pupilRequest = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: 0,
      currentEPSD,
      currentPhysStopSD,
      sampling: { pupilAberrationSampleCount: 5 },
    });
    const statePupilProfiles = analysisJobs.computeBothPupilAberrationProfiles(pupilRequest);
    expect(statePupilProfiles).toEqual(analysisPreviewJobs.computeBothPupilAberrationProfiles(pupilRequest));
    expect(statePupilProfiles).toEqual(computeBothPupilAberrationProfiles(pupilRequest));
    expect(statePupilProfiles.ep.samples).toHaveLength(5);
    expect(statePupilProfiles.xp.samples).toHaveLength(5);

    const bokehRequest = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: L.EFL,
      currentEPSD,
      currentPhysStopSD,
    });
    const bokehPair = analysisJobs.computeBokehPreviewPair(bokehRequest);
    expect(bokehPair).toEqual(analysisPreviewJobs.computeBokehPreviewPair(bokehRequest));
    expect(bokehPair.infinity || bokehPair.nearFocus).toBeTruthy();

    const summary = analysisJobs.computeOpticalSummary(
      createAnalysisRequest({ preparedState: state, dynamicEFL: L.EFL, currentEPSD, currentPhysStopSD }),
    );
    expect(summary.currentEFLMm).toBeCloseTo(L.EFL, 6);
    expect(summary.entrancePupilDiameterMm).toBeCloseTo(currentEPSD * 2, 6);
  });
});
