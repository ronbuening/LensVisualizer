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
import { buildChromaticPositiveElementLens } from "./testLensFixtures.js";
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
    expect(context.computeOpticalSummary()).toEqual(
      analysisJobsForState2.computeOpticalSummary(state, dynamicEFL, currentEPSD, currentPhysStopSD, fieldGeometry),
    );
    expect(context.computeDistortionFieldGrid()).toEqual(
      analysisJobsForState2.computeDistortionFieldGrid(state, currentPhysStopSD, fieldGeometry),
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
    expect(context.computeChromaticAnalysis()).toEqual(
      analysisJobsForState2.computeChromaticAnalysis(state, currentEPSD, currentPhysStopSD, fieldGeometry),
    );
    expect(context.computeChromaticRayFanAnalysis()).toEqual(
      analysisJobsForState2.computeChromaticRayFanAnalysis(state, currentEPSD, currentPhysStopSD, fieldGeometry, {
        channels: ["R", "G", "B", "V"],
      }),
    );
    expect(context.computeBestFocusZ()).toEqual(
      analysisJobsForState2.computeBestFocusZ(state, currentEPSD, currentPhysStopSD),
    );
    expect(context.computeSphericalAberration()).toEqual(
      analysisJobsForState2.computeSphericalAberration(state, currentEPSD, currentPhysStopSD),
    );
    expect(context.computeSAProfile()).toEqual(
      analysisJobsForState2.computeSAProfile(state, currentEPSD, currentPhysStopSD),
    );
    expect(context.computeSphericalAberrationBlurCharacter()).toEqual(
      analysisJobsForState2.computeSphericalAberrationBlurCharacter(
        state,
        currentEPSD,
        currentPhysStopSD,
        context.computeSphericalAberration(),
      ),
    );
    expect(context.computeComaAnalysis()).toEqual(
      analysisJobsForState2.computeComaAnalysis(state, currentEPSD, currentPhysStopSD, fieldGeometry),
    );
    expect(context.computeFieldCurvatureBundle()).toEqual(
      analysisJobsForState2.computeFieldCurvatureBundle(state, currentEPSD, currentPhysStopSD, fieldGeometry),
    );

    expect(context.computeDistortionCurve()).toBe(context.computeDistortionCurve());
    expect(context.computeOpticalSummary()).toBe(context.computeOpticalSummary());
    expect(context.computeSphericalAberration()).toBe(context.computeSphericalAberration());
    expect(context.computeSphericalAberrationBlurCharacter()).toBe(context.computeSphericalAberrationBlurCharacter());
    expect(context.computeBokehPreviewPair()).toBe(context.computeBokehPreviewPair());
    expect(context.computeChromaticAnalysis()).toBe(context.computeChromaticAnalysis());
    expect(context.computeChromaticRayFanAnalysis()).toBe(context.computeChromaticRayFanAnalysis());
    expect(context.computeFieldCurvatureBundle()).toBe(context.computeFieldCurvatureBundle());
  });

  it("applies interactive chromatic sampling through the cached context", () => {
    const L = buildChromaticPositiveElementLens("analysis-context-chromatic-sampling");
    const focusT = 0;
    const zoomT = 0;
    const state = prepareRuntimeState(L, focusT, zoomT);
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT);
    const context = createAnalysisComputationContext({
      preparedState: state,
      dynamicEFL,
      currentEPSD,
      currentPhysStopSD,
      sampling: {
        chromaticLongitudinalFractions: [0.5],
        chromaticLateralFieldFractions: [0, 1],
        chromaticRayTraceOnAxisFractions: [0.5],
        chromaticRayTraceOffAxisFractions: [0.5],
      },
    });

    expect(context.computeChromaticAnalysis().longitudinalFocus?.marginalFraction).toBe(0.5);
    expect(context.computeChromaticAnalysis().lateralColor?.fieldFractions).toEqual([0, 1]);
    expect(context.computeChromaticRayFanAnalysis().onAxisAttemptedRayCount).toBeLessThanOrEqual(4);
    expect(context.computeChromaticRayFanAnalysis().offAxisAttemptedRayCount).toBeLessThanOrEqual(4);
  });

  it("normalizes null field geometry to undefined for job calls", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0;
    const zoomT = 0;
    const state = prepareRuntimeState(L, focusT, zoomT);
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT);
    const context = createAnalysisComputationContext({
      preparedState: state,
      dynamicEFL,
      currentEPSD,
      currentPhysStopSD,
      fieldGeometry: null,
    });

    expect(context.fieldGeometry).toBeNull();
    expect(context.computeDistortionCurve()).toEqual(
      analysisJobsForState2.computeDistortionCurve(state, dynamicEFL, currentPhysStopSD, undefined),
    );
  });
});
