import { describe, expect, it } from "vitest";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import Sonnar50f15Raw from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import buildLens from "../../../src/optics/buildLens.js";
import {
  analysisJobsForState2,
  createAnalysisComputationContext,
  prepareRuntimeState,
} from "../../../src/optics/compat.js";
import { computeAnalysisFieldGeometryAtState, eflAtFocus, epAtZoom, fopenAtZoom } from "../../../src/optics/optics.js";
import type { LensData } from "../../../src/types/optics.js";

function build(raw: object) {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

function apertureAt(L: ReturnType<typeof build>, zoomT: number) {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const fNumber = Math.max(L.FOPEN, currentFOPEN);
  return {
    currentPhysStopSD: (L.stopPhysSD * L.FOPEN) / fNumber,
    currentEPSD: (epAtZoom(zoomT, L) * L.FOPEN) / fNumber,
  };
}

describe("analysis computation context", () => {
  it("returns direct-job-equivalent results and reuses exact result objects", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0.25;
    const zoomT = 0;
    const state = prepareRuntimeState(L, focusT, zoomT);
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT);
    const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);
    const context = createAnalysisComputationContext({
      preparedState: state,
      dynamicEFL,
      currentEPSD,
      currentPhysStopSD,
      fieldGeometry,
    });

    expect(context.computeDistortionCurve()).toEqual(
      analysisJobsForState2.computeDistortionCurve(state, dynamicEFL, currentPhysStopSD, fieldGeometry),
    );
    expect(context.computeVignettingCurve()).toEqual(
      analysisJobsForState2.computeVignettingCurve(state, currentEPSD, currentPhysStopSD, fieldGeometry),
    );
    expect(context.computeBothPupilAberrationProfiles()).toEqual(
      analysisJobsForState2.computeBothPupilAberrationProfiles(state, undefined, fieldGeometry),
    );
    expect(context.computeBokehPreviewPair()).toEqual(
      analysisJobsForState2.computeBokehPreviewPair(state, currentEPSD, currentPhysStopSD),
    );
    expect(context.computeComaAnalysis()).toEqual(
      analysisJobsForState2.computeComaAnalysis(state, currentEPSD, currentPhysStopSD, fieldGeometry),
    );
    expect(context.computeFieldCurvatureBundle()).toEqual(
      analysisJobsForState2.computeFieldCurvatureBundle(state, currentEPSD, currentPhysStopSD, fieldGeometry),
    );

    expect(context.computeDistortionCurve()).toBe(context.computeDistortionCurve());
    expect(context.computeBokehPreviewPair()).toBe(context.computeBokehPreviewPair());
    expect(context.computeFieldCurvatureBundle()).toBe(context.computeFieldCurvatureBundle());
  });
});
