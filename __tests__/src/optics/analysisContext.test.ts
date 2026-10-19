import { describe, expect, it, vi } from "vitest";
import {
  AnalysisSectionUnavailableError,
  analysisJobsForState2,
  createAnalysisComputationContext,
  prepareRuntimeState,
} from "../../../src/optics/compat.js";
import { runtimeView } from "../../../src/optics/prescription/runtimeView.js";
import { createAnalysisRequest, type AnalysisRequestParams } from "../../../src/optics/analysis/request.js";
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

describe("analysis request identity", () => {
  function inputs(key: string): AnalysisRequestParams {
    const L = buildChromaticPositiveElementLens(key);
    return { preparedState: prepareRuntimeState(L, 0, 0), dynamicEFL: L.EFL, ...apertureAt(L, 0) };
  }

  it("reuses the request and context for equal scalar, field and sampling values", () => {
    const params = inputs("request-values");
    const fieldGeometry = { halfFieldDeg: 10, yRatio: 1, b: 2, epRatio: 3 };
    const first = createAnalysisRequest({ ...params, fieldGeometry, sampling: { bokehRingSamples: [1, 4] } });
    const second = createAnalysisRequest({
      ...params,
      preparedState: prepareRuntimeState(buildChromaticPositiveElementLens("different-owner"), 0, 0),
    });
    expect(second).not.toBe(first);
    const repeated = createAnalysisRequest({
      ...params,
      fieldGeometry: { ...fieldGeometry },
      sampling: { bokehRingSamples: [1, 4], comaFanSampleCount: undefined },
    });
    expect(repeated).toBe(first);
    expect(createAnalysisComputationContext(repeated)).toBe(createAnalysisComputationContext(first));
    expect(createAnalysisComputationContext({ ...params, fieldGeometry, sampling: { bokehRingSamples: [1, 4] } })).toBe(
      createAnalysisComputationContext(first),
    );
  });

  it("freezes owned snapshots without freezing or retaining caller arrays and fields", () => {
    const params = inputs("request-snapshot");
    const fieldGeometry = { halfFieldDeg: 10, yRatio: 1, b: 2, epRatio: 3 };
    const rings = [1, 4];
    const sampling = { bokehRingSamples: rings, comaFanSampleCount: 3 };
    const request = createAnalysisRequest({ ...params, fieldGeometry, sampling });
    fieldGeometry.b = 7;
    rings.push(8);
    sampling.comaFanSampleCount = 9;
    expect(request.preparedGeometry).toBe(params.preparedState);
    expect(request.aperture).toEqual({
      entrancePupilSemiDiameterMm: params.currentEPSD,
      stopSemiDiameterMm: params.currentPhysStopSD,
    });
    expect(request.fieldGeometry?.b).toBe(2);
    expect(request.sampling).toEqual({ bokehRingSamples: [1, 4], comaFanSampleCount: 3 });
    expect(request.channels).toEqual(["R", "G", "B", "V"]);
    expect(request.capture).toBe("diagnostics");
    for (const value of [
      request,
      request.aperture,
      request.fieldGeometry,
      request.sampling,
      request.sampling.bokehRingSamples,
      request.channels,
    ]) {
      expect(Object.isFrozen(value)).toBe(true);
    }
    expect(Object.isFrozen(fieldGeometry)).toBe(false);
    expect(Object.isFrozen(rings)).toBe(false);
  });

  it("invalidates each control independently, retaining exact numeric distinctions", () => {
    const params = inputs("request-controls");
    const first = createAnalysisRequest(params);
    const changed: AnalysisRequestParams[] = [
      { ...params, dynamicEFL: params.dynamicEFL + 1 },
      { ...params, currentEPSD: params.currentEPSD / 2 },
      { ...params, currentPhysStopSD: params.currentPhysStopSD / 2 },
      { ...params, analysisQuality: "interactive" },
      { ...params, fieldGeometry: { halfFieldDeg: 10, yRatio: 1, b: 2, epRatio: 3 } },
      { ...params, sampling: { bokehRingSamples: [1, 4] } },
      ...[
        [0.25, 0, 0],
        [0, 0.25, 0],
        [0, 0, 0.25],
      ].map(([focus, zoom, aberration]) => ({
        ...params,
        preparedState: prepareRuntimeState(runtimeView(params.preparedState.lens), focus, zoom, aberration),
      })),
    ];
    for (const input of changed) expect(createAnalysisRequest(input)).not.toBe(first);
    const zero = createAnalysisRequest({ ...params, currentEPSD: 0 });
    expect(createAnalysisRequest({ ...params, currentEPSD: -0 })).not.toBe(zero);
    expect(createAnalysisRequest({ ...params, currentEPSD: NaN })).toBe(
      createAnalysisRequest({ ...params, currentEPSD: NaN }),
    );
    expect(createAnalysisRequest({ ...params, currentEPSD: Infinity })).not.toBe(
      createAnalysisRequest({ ...params, currentEPSD: -Infinity }),
    );
  });

  it("keys geometry and tracing by object identity even when diagnostic strings match", () => {
    const params = inputs("request-identity");
    const first = createAnalysisComputationContext(params);
    const other = createAnalysisComputationContext({
      ...params,
      preparedState: Object.freeze({ ...params.preparedState }),
    });
    expect(other.cacheKey).toBe(first.cacheKey);
    expect(other.request).not.toBe(first.request);
    expect(other).not.toBe(first);
    const trace = createPerspectiveTraceContext({
      preparedState: params.preparedState,
      movement: { shiftMm: 0, tiltDeg: 0 },
    });
    const a = createAnalysisRequest({ ...params, perspectiveTraceContext: trace });
    const b = createAnalysisRequest({ ...params, perspectiveTraceContext: { ...trace } });
    expect(a.pose).toBe(trace.pose);
    expect(a.perspectiveTraceContext).toBe(trace);
    expect(b).not.toBe(a);
    expect(createAnalysisRequest({ ...params, perspectiveTraceContext: trace })).toBe(a);
  });

  it("does not serialize inputs on request/context cache hits or misses", () => {
    const params = inputs("request-no-serialization");
    const stringify = vi.spyOn(JSON, "stringify");
    try {
      const context = createAnalysisComputationContext(params);
      expect(createAnalysisComputationContext({ ...params })).toBe(context);
      expect(stringify).not.toHaveBeenCalled();
    } finally {
      stringify.mockRestore();
    }
  });

  it("evicts the least recently used request at 96 entries, preserving touched jobs", () => {
    const params = inputs("request-eviction");
    const context = (currentPhysStopSD: number) => createAnalysisComputationContext({ ...params, currentPhysStopSD });
    const first = context(0);
    const evicted = context(1);
    for (let i = 2; i < 96; i++) context(i);
    expect(context(0)).toBe(first);
    context(96);
    expect(context(0)).toBe(first);
    expect(context(1)).not.toBe(evicted);
    // A caller holding the old request still owns its lazy results after LRU eviction.
    expect(createAnalysisComputationContext(evicted.request)).toBe(evicted);
  });

  it("bounds lens ownership to the two most recently used compiled identities", () => {
    const a = inputs("request-lens-a");
    const b = inputs("request-lens-b");
    const c = inputs("request-lens-c");
    const firstA = createAnalysisComputationContext(a);
    const firstB = createAnalysisComputationContext(b);
    expect(createAnalysisComputationContext(a)).toBe(firstA);
    createAnalysisComputationContext(c);
    expect(createAnalysisComputationContext(a)).toBe(firstA);
    expect(createAnalysisComputationContext(b)).not.toBe(firstB);
  });
});
