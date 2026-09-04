import { describe, expect, it } from "vitest";
import {
  AnalysisSectionUnavailableError,
  analysisJobsForState2,
  createAnalysisComputationContext,
  prepareRuntimeState,
} from "../../../src/optics/compat.js";
import { createPerspectiveTraceContext } from "../../../src/optics/perspective/index.js";
import type { TiltPivot } from "../../../src/types/optics.js";
import { computeAnalysisFieldGeometryAtState, eflAtFocus } from "../../../src/optics/optics.js";
import { apertureAt, buildChromaticPositiveElementLens, sharedSonnar50f15 } from "./testLensFixtures.js";

describe("analysis computation context", () => {
  it("returns direct-job-equivalent results and reuses exact result objects", () => {
    const L = sharedSonnar50f15();
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
    const L = sharedSonnar50f15();
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

  it("keys shift/tilt-only changes and blocks legacy centered jobs for migrated sections", () => {
    const L = sharedSonnar50f15();
    const preparedState = prepareRuntimeState(L, 0, 0);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0);
    const pivot: TiltPivot = {
      frame: "camera",
      basis: "rear-vertex-fallback",
      zOffsetFromImagePlaneMm: (preparedState.z.at(-1) ?? preparedState.imgZ) - preparedState.imgZ,
    };
    const centeredTrace = createPerspectiveTraceContext({
      preparedState,
      movement: { shiftMm: 0, tiltDeg: 0 },
    });
    const shiftedTrace = createPerspectiveTraceContext({
      preparedState,
      movement: { shiftMm: 2, tiltDeg: 0 },
    });
    const tiltedTrace = createPerspectiveTraceContext({
      preparedState,
      movement: { shiftMm: 0, tiltDeg: 2 },
      tiltPivot: pivot,
    });
    const common = {
      preparedState,
      dynamicEFL: L.EFL,
      currentEPSD,
      currentPhysStopSD,
    };
    const centered = createAnalysisComputationContext({ ...common, perspectiveTraceContext: centeredTrace });
    const shifted = createAnalysisComputationContext({ ...common, perspectiveTraceContext: shiftedTrace });
    const tilted = createAnalysisComputationContext({ ...common, perspectiveTraceContext: tiltedTrace });

    expect(centered.movementActive).toBe(false);
    expect(centered.sectionAvailability("distortion")).toMatchObject({ available: true, mode: "centered" });
    expect(centered.computeDistortionCurve()).toBe(centered.computeDistortionCurve());
    expect(shifted.movementActive).toBe(true);
    expect(shifted.perspectiveTraceContext).toBe(shiftedTrace);
    expect(shifted.perspectiveCacheKey).toBe(shiftedTrace.cacheKey);
    expect(new Set([centered.cacheKey, shifted.cacheKey, tilted.cacheKey]).size).toBe(3);
    expect(shifted.sectionAvailability("summary")).toMatchObject({ available: true, mode: "intrinsic" });
    expect(shifted.sectionAvailability("spherical-aberration")).toMatchObject({ available: true, mode: "intrinsic" });
    expect(shifted.sectionAvailability("distortion")).toMatchObject({ available: true, mode: "perspective" });
    expect(() => shifted.computeDistortionCurve()).toThrow(AnalysisSectionUnavailableError);
    expect(() => tilted.computeChromaticAnalysis()).toThrow(AnalysisSectionUnavailableError);
    expect(tilted.computeSphericalAberration()).toBe(tilted.computeSphericalAberration());

    const centeredSummary = centered.computeOpticalSummary();
    const shiftedSummary = shifted.computeOpticalSummary();
    expect(shiftedSummary).toEqual(centeredSummary);
    expect(shiftedSummary).not.toBe(centeredSummary);
    expect(shifted.computeIntrinsicLongitudinalChromaticFocus()).toBe(
      shifted.computeIntrinsicLongitudinalChromaticFocus(),
    );
  });
});
