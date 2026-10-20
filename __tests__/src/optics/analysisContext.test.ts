import { describe, expect, it, vi } from "vitest";
import {
  AnalysisSectionUnavailableError,
  analysisJobsForState2,
  createAnalysisComputationContext,
  prepareRuntimeState,
} from "../../../src/optics/compat.js";
import { analysisSamplingForQuality } from "../../../src/optics/analysis/analysisQuality.js";
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

    expect(context.computeDistortionCurve()).toEqual(analysisJobsForState2.computeDistortionCurve(context.request));
    expect(context.computeOpticalSummary()).toEqual(
      analysisJobsForState2.computeOpticalSummary(
        createAnalysisRequest({ preparedState: state, dynamicEFL, currentEPSD, currentPhysStopSD, fieldGeometry }),
      ),
    );
    expect(context.computeDistortionFieldGrid()).toEqual(
      analysisJobsForState2.computeDistortionFieldGrid(context.request),
    );
    expect(context.computeVignettingCurve()).toEqual(analysisJobsForState2.computeVignettingCurve(context.request));
    expect(context.computeBothPupilAberrationProfiles()).toEqual(
      analysisJobsForState2.computeBothPupilAberrationProfiles(context.request),
    );
    expect(context.computeBokehPreviewPair()).toEqual(analysisJobsForState2.computeBokehPreviewPair(context.request));
    expect(context.computeChromaticAnalysis()).toEqual(analysisJobsForState2.computeChromaticAnalysis(context.request));
    expect(context.computeChromaticRayFanAnalysis()).toEqual(
      analysisJobsForState2.computeChromaticRayFanAnalysis(context.request),
    );
    expect(context.computeBestFocusZ()).toEqual(analysisJobsForState2.computeBestFocusZ(context.request));
    expect(context.computeSphericalAberration()).toEqual(
      analysisJobsForState2.computeSphericalAberration(context.request),
    );
    expect(context.computeSAProfile()).toEqual(analysisJobsForState2.computeSAProfile(context.request));
    expect(context.computeSphericalAberrationBlurCharacter()).toEqual(
      analysisJobsForState2.computeSphericalAberrationBlurCharacter(
        context.request,
        context.computeSphericalAberration(),
      ),
    );
    expect(context.computeComaAnalysis()).toEqual(analysisJobsForState2.computeComaAnalysis(context.request));
    expect(context.computeFieldCurvatureBundle()).toEqual(
      analysisJobsForState2.computeFieldCurvatureBundle(context.request),
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

  it("forwards curve sampling while keeping independent grid defaults", () => {
    const L = sharedSonnar50f15();
    const state = prepareRuntimeState(L, 0.25, 0);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0);
    const request = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: L.EFL,
      currentEPSD,
      currentPhysStopSD,
      sampling: {
        distortionCurveSampleCount: 5,
        distortionGridSegmentCount: 3,
        distortionGridLineCoordinates: [-1, 0, 1],
        distortionPupilCorrectionSampleCount: 2,
      },
    });
    const context = createAnalysisComputationContext(request);
    expect(context.computeDistortionCurve().samples).toHaveLength(5);
    expect(context.computeDistortionCurve()).toEqual(analysisJobsForState2.computeDistortionCurve(request));
    const grid = context.computeDistortionFieldGrid();
    expect(grid).toEqual(analysisJobsForState2.computeDistortionFieldGrid({ ...request, sampling: {} }));
    expect(grid.lines).toHaveLength(10);
    expect(grid.lines.every((line) => line.points.length === 17)).toBe(true);
    const directGrid = analysisJobsForState2.computeDistortionFieldGrid(request);
    expect(directGrid.lines).toHaveLength(6);
    expect(directGrid.lines.every((line) => line.points.length === 3)).toBe(true);
    expect(context.computeDistortionFieldGrid()).toBe(grid);
  });

  it("forwards vignetting sampling and caches the request result", () => {
    const L = sharedSonnar50f15();
    const state = prepareRuntimeState(L, 0.25, 0);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0.3);
    const request = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: L.EFL,
      currentEPSD,
      currentPhysStopSD,
      sampling: { vignettingFieldSampleCount: 5, vignettingPupilSampleCount: 17 },
    });
    const context = createAnalysisComputationContext(request);
    const samples = context.computeVignettingCurve();
    expect(samples).toHaveLength(5);
    expect(samples).toEqual(analysisJobsForState2.computeVignettingCurve(request));
    expect(context.computeVignettingCurve()).toBe(samples);
  });

  it("forwards pupil field geometry and quality sampling while caching one combined result", () => {
    const L = sharedSonnar50f15();
    const preparedState = prepareRuntimeState(L, 0.25, 0);
    const fieldGeometry = computeAnalysisFieldGeometryAtState(0.25, 0, L);
    const params = {
      preparedState,
      dynamicEFL: 0,
      currentEPSD: 0,
      currentPhysStopSD: 0,
      fieldGeometry: { ...fieldGeometry, halfFieldDeg: fieldGeometry.halfFieldDeg * 0.75 },
    };
    const defaults = createAnalysisComputationContext(params);
    expect(defaults.computeBothPupilAberrationProfiles().ep.samples).toHaveLength(17);
    for (const sampling of [analysisSamplingForQuality("interactive")!, { pupilAberrationSampleCount: 5 }]) {
      const request = createAnalysisRequest({ ...params, analysisQuality: "interactive", sampling });
      const context = createAnalysisComputationContext(request);
      const profiles = context.computeBothPupilAberrationProfiles();
      expect(profiles.ep.samples).toHaveLength(sampling.pupilAberrationSampleCount!);
      expect(profiles.xp.samples).toHaveLength(sampling.pupilAberrationSampleCount!);
      expect(profiles.halfFieldDeg).toBe(params.fieldGeometry.halfFieldDeg);
      expect(profiles).toEqual(analysisJobsForState2.computeBothPupilAberrationProfiles(request));
      expect(context.computeBothPupilAberrationProfiles()).toBe(profiles);
    }
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
    expect(context.computeDistortionCurve()).toEqual(analysisJobsForState2.computeDistortionCurve(context.request));
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

  it("bounds retained analysis jobs to two recent requests, preserving touched and caller-owned jobs", () => {
    const params = inputs("request-eviction");
    const context = (currentPhysStopSD: number) => createAnalysisComputationContext({ ...params, currentPhysStopSD });
    const first = context(0);
    const evicted = context(1);
    const result = evicted.computeOpticalSummary();
    expect(context(0)).toBe(first);
    context(2);
    expect(context(0)).toBe(first);
    const recomputed = context(1);
    expect(recomputed).not.toBe(evicted);
    expect(recomputed.computeOpticalSummary()).toEqual(result);
    // A caller holding the old request still owns its lazy results after LRU eviction.
    expect(createAnalysisComputationContext(evicted.request)).toBe(evicted);
    expect(evicted.computeOpticalSummary()).toBe(result);
  });

  it("reuses adjacent tab renders while alternating interactive and settled quality", () => {
    const params = inputs("request-adjacent-quality");
    const interactive = createAnalysisComputationContext({ ...params, analysisQuality: "interactive" });
    const settled = createAnalysisComputationContext({ ...params, analysisQuality: "settled" });
    const result = settled.computeOpticalSummary();
    for (let render = 0; render < 3; render++) {
      expect(createAnalysisComputationContext({ ...params, analysisQuality: "interactive" })).toBe(interactive);
      expect(createAnalysisComputationContext({ ...params, analysisQuality: "settled" })).toBe(settled);
      expect(settled.computeOpticalSummary()).toBe(result);
    }
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
