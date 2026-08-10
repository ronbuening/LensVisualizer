import { describe, expect, it } from "vitest";
import { analysisJobs2, analysisJobsForState2, prepareRuntimeState } from "../../../src/optics/compat.js";
import { eflAtFocus } from "../../../src/optics/optics.js";
import { zPosForPreparedAnalysis2 } from "../../../src/optics/analysis/preparedStateAdapters.js";
import { apertureAt, buildChromaticPositiveElementLens, sharedSonnar50f15 } from "./testLensFixtures.js";

describe("analysis job facade", () => {
  it("runs distortion and vignetting from a shared prepared-state z-position view", () => {
    const L = sharedSonnar50f15();
    const focusT = 0.25;
    const zoomT = 0;
    const state = prepareRuntimeState(L, focusT, zoomT);
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT);
    const zPos = zPosForPreparedAnalysis2(state);

    expect(zPos).toBe(state.z);
    expect(Object.isFrozen(state.z)).toBe(true);

    expect(analysisJobsForState2.computeDistortionCurve(state, dynamicEFL, currentPhysStopSD)).toEqual(
      analysisJobs2.computeDistortionCurve(L, zPos, focusT, zoomT, dynamicEFL, currentPhysStopSD),
    );
    expect(analysisJobsForState2.computeDistortionFieldGrid(state, currentPhysStopSD)).toEqual(
      analysisJobs2.computeDistortionFieldGrid(L, zPos, focusT, zoomT, currentPhysStopSD),
    );
    expect(analysisJobsForState2.computeVignettingCurve(state, currentEPSD, currentPhysStopSD)).toEqual(
      analysisJobs2.computeVignettingCurve(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
    expect(analysisJobsForState2.computeFieldCurvatureBundle(state, currentEPSD, currentPhysStopSD)).toEqual(
      analysisJobs2.computeFieldCurvatureBundle(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
    expect(analysisJobsForState2.computeChromaticRayFanAnalysis(state, currentEPSD, currentPhysStopSD)).toEqual(
      analysisJobs2.computeChromaticRayFanAnalysis(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
    expect(analysisJobsForState2.computeChromaticAnalysis(state, currentEPSD, currentPhysStopSD)).toEqual(
      analysisJobs2.computeChromaticAnalysis(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
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

    const analysis = analysisJobsForState2.computeChromaticAnalysis(
      state,
      currentEPSD,
      currentPhysStopSD,
      undefined,
      sampling,
    );
    const rayTrace = analysisJobsForState2.computeChromaticRayFanAnalysis(
      state,
      currentEPSD,
      currentPhysStopSD,
      undefined,
      {
        channels: ["R", "G", "B", "V"],
        onAxisFractions: sampling.chromaticRayTraceOnAxisFractions,
        offAxisFractions: sampling.chromaticRayTraceOffAxisFractions,
      },
    );

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

    const statePupilProfiles = analysisJobsForState2.computeBothPupilAberrationProfiles(state, 5);
    expect(statePupilProfiles).toEqual(analysisJobs2.computeBothPupilAberrationProfiles(focusT, zoomT, L, 5));
    expect(statePupilProfiles.ep.samples).toHaveLength(5);
    expect(statePupilProfiles.xp.samples).toHaveLength(5);

    const bokehPair = analysisJobsForState2.computeBokehPreviewPair(state, currentEPSD, currentPhysStopSD);
    expect(bokehPair).toEqual(analysisJobs2.computeBokehPreviewPair(L, focusT, zoomT, currentEPSD, currentPhysStopSD));
    expect(bokehPair.infinity || bokehPair.nearFocus).toBeTruthy();

    const summary = analysisJobsForState2.computeOpticalSummary(state, L.EFL, currentEPSD, currentPhysStopSD);
    expect(summary.currentEFLMm).toBeCloseTo(L.EFL, 6);
    expect(summary.entrancePupilDiameterMm).toBeCloseTo(currentEPSD * 2, 6);
  });
});
