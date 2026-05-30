import { describe, expect, it } from "vitest";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import Sonnar50f15Raw from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import buildLens from "../../../src/optics/buildLens.js";
import { analysisJobs2, analysisJobsForState2, prepareRuntimeState } from "../../../src/optics/compat.js";
import { eflAtFocus, epAtZoom, fopenAtZoom } from "../../../src/optics/optics.js";
import { zPosForPreparedAnalysis2 } from "../../../src/optics/analysis/preparedStateAdapters.js";
import type { LensData } from "../../../src/types/optics.js";

function build(raw: object) {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

function apertureAt(L: ReturnType<typeof build>, zoomT: number) {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN;
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  return {
    currentPhysStopSD: (L.stopPhysSD * L.FOPEN) / fNumber,
    currentEPSD: (epAtZoom(zoomT, L) * L.FOPEN) / fNumber,
  };
}

describe("analysis job facade", () => {
  it("runs distortion and vignetting from a shared prepared-state z-position view", () => {
    const L = build(Sonnar50f15Raw);
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
    expect(analysisJobsForState2.computeChromaticRayTraceAnalysis(state, currentEPSD, currentPhysStopSD)).toEqual(
      analysisJobs2.computeChromaticRayTraceAnalysis(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
    expect(analysisJobsForState2.computeChromaticAnalysis(state, currentEPSD, currentPhysStopSD)).toEqual(
      analysisJobs2.computeChromaticAnalysis(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
  });

  it("exposes bokeh and pupil work through the same prepared-state facade", () => {
    const L = build(Sonnar50f15Raw);
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
