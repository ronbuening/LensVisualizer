import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import {
  AnalysisSectionUnavailableError,
  createAnalysisComputationContext,
  prepareRuntimeState,
} from "../../../src/optics/compat.js";
import { createPerspectiveTraceContext, type PerspectiveTraceContext } from "../../../src/optics/perspective/trace.js";
import type { AnalysisSamplingOptions } from "../../../src/optics/analysis/analysisQuality.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
const STATE = prepareRuntimeState(L, 0, 0);
const LIGHTWEIGHT_SAMPLING: AnalysisSamplingOptions = {
  distortionCurveSampleCount: 3,
  distortionGridLineCoordinates: [-1, 0, 1],
  vignettingFieldSampleCount: 3,
  vignettingPupilSampleCount: 4,
  pupilAberrationSampleCount: 3,
  bokehFieldFractions: [0, 1],
  bokehRingSamples: [1, 4],
  comaFieldFractions: [0, 1],
  comaRingSamples: [1, 4],
  comaFanSampleCount: 3,
  fieldCurvatureFieldFractions: [0, 1],
  fieldCurvatureCurveFieldFractions: [0, 1],
  fieldCurvatureDiagnosticSampleCount: 3,
  chromaticLongitudinalFractions: [0.5],
  chromaticLateralFieldFractions: [0, 1],
  chromaticRayTraceOnAxisFractions: [0.5],
  chromaticRayTraceOffAxisFractions: [-0.5, 0.5],
};

function traceContext(shiftMm = 0, tiltDeg = 0): PerspectiveTraceContext {
  return createPerspectiveTraceContext({
    preparedState: STATE,
    movement: { shiftMm, tiltDeg },
    tiltPivot: L.perspectiveControl?.tiltPivot,
  });
}

function analysisContext(perspectiveTraceContext: PerspectiveTraceContext, sampling = LIGHTWEIGHT_SAMPLING) {
  return createAnalysisComputationContext({
    preparedState: STATE,
    dynamicEFL: L.EFL,
    currentEPSD: 0.25,
    currentPhysStopSD: L.stopPhysSD,
    analysisQuality: "interactive",
    sampling,
    perspectiveTraceContext,
  });
}

describe("movement-aware analysis computation context", () => {
  it("keeps identity contexts on the centered fast path without starting perspective sweeps", () => {
    const base = traceContext();
    let perspectiveTraceCalls = 0;
    const counted: PerspectiveTraceContext = {
      ...base,
      traceRay: (...args) => {
        perspectiveTraceCalls++;
        return base.traceRay(...args);
      },
    };
    const context = analysisContext(counted, undefined);

    expect(context.movementActive).toBe(false);
    expect(context.sectionAvailability("distortion")).toMatchObject({ available: true, mode: "centered" });
    expect(perspectiveTraceCalls).toBe(0);
    expect(context.computeDistortionCurve()).toBe(context.computeDistortionCurve());
    expect(perspectiveTraceCalls).toBe(0);

    const withoutPerspective = createAnalysisComputationContext({
      preparedState: STATE,
      dynamicEFL: L.EFL,
      currentEPSD: 0.25,
      currentPhysStopSD: L.stopPhysSD,
    });
    expect(withoutPerspective.computePerspectiveDistortionAnalysis).toThrow(/PerspectiveTraceContext/);
  });

  it("invalidates movement jobs independently for shift-only and tilt-only poses", () => {
    const shifted = analysisContext(traceContext(1, 0));
    const tilted = analysisContext(traceContext(0, 0.5));
    const shiftedResult = shifted.computePerspectiveDistortionAnalysis();
    const tiltedResult = tilted.computePerspectiveDistortionAnalysis();

    expect(shifted.cacheKey).not.toBe(tilted.cacheKey);
    expect(shifted.perspectiveCacheKey).not.toBe(tilted.perspectiveCacheKey);
    expect(shiftedResult.contextCacheKey).toBe(shifted.perspectiveCacheKey);
    expect(tiltedResult.contextCacheKey).toBe(tilted.perspectiveCacheKey);
    expect(shiftedResult).not.toBe(tiltedResult);
  });

  it("exposes every active family through a memoized perspective job", () => {
    const context = analysisContext(traceContext(1, 0.5));
    const perspectiveSections = [
      "bokeh",
      "field-curvature",
      "coma",
      "chromatic",
      "distortion",
      "vignetting",
      "pupils",
    ] as const;
    for (const section of perspectiveSections) {
      expect(context.sectionAvailability(section)).toMatchObject({
        available: true,
        movementActive: true,
        mode: "perspective",
      });
    }
    for (const section of ["summary", "spherical-aberration", "breathing"] as const) {
      expect(context.sectionAvailability(section)).toMatchObject({ available: true, mode: "intrinsic" });
    }

    const jobs = [
      context.computePerspectiveFocusAnalysis,
      context.computePerspectiveFieldAberrations,
      context.computePerspectiveChromaticAnalysis,
      context.computePerspectiveDistortionAnalysis,
      context.computePerspectiveVignettingAnalysis,
      context.computePerspectivePupilAnalysis,
    ] as const;
    for (const compute of jobs) {
      const result = compute();
      expect(result.contextCacheKey).toBe(context.perspectiveCacheKey);
      expect(compute()).toBe(result);
    }
  }, 30_000);

  it("never routes active movement through legacy centered jobs", () => {
    const context = analysisContext(traceContext(1, 0));
    const legacyJobs = [
      context.computeBokehPreviewPair,
      context.computeFieldCurvatureBundle,
      context.computeComaAnalysis,
      context.computeChromaticAnalysis,
      context.computeChromaticRayFanAnalysis,
      context.computeDistortionCurve,
      context.computeDistortionFieldGrid,
      context.computeVignettingCurve,
      context.computeBothPupilAberrationProfiles,
    ] as const;

    for (const compute of legacyJobs) expect(compute).toThrow(AnalysisSectionUnavailableError);
    expect(context.computeSphericalAberration()).toBe(context.computeSphericalAberration());
    expect(context.computeIntrinsicLongitudinalChromaticFocus()).toBe(
      context.computeIntrinsicLongitudinalChromaticFocus(),
    );
  });

  it("retains failed pupil rays in their requested bundle order", () => {
    const perspectiveTraceContext = traceContext(1, 0.5);
    const context = createAnalysisComputationContext({
      preparedState: STATE,
      dynamicEFL: L.EFL,
      currentEPSD: 100,
      currentPhysStopSD: L.stopPhysSD,
      analysisQuality: "interactive",
      sampling: LIGHTWEIGHT_SAMPLING,
      perspectiveTraceContext,
    });
    const result = context.computePerspectivePupilAnalysis();
    const center = result.samples.find((sample) => sample.requestedSensorUv.v === 0)!;
    const rays = center.fieldSample.pupilBundle?.samples ?? [];

    expect(result.samples.map((sample) => sample.requestedSensorUv.v)).toEqual([-1, 0, 1]);
    expect(rays).toHaveLength(7);
    expect(rays.map((ray) => ray.pupilUv.v)).toEqual([...rays].map((_, index) => -1 + (2 * index) / (rays.length - 1)));
    expect(rays.some((ray) => ray.status !== "usable")).toBe(true);
  });

  it("rejects a perspective trace built from a different prepared slider state", () => {
    const otherState = prepareRuntimeState(L, 0.25, 0);
    const mismatched = createPerspectiveTraceContext({
      preparedState: otherState,
      movement: { shiftMm: 1, tiltDeg: 0 },
      tiltPivot: L.perspectiveControl?.tiltPivot,
    });

    expect(() =>
      createAnalysisComputationContext({
        preparedState: STATE,
        dynamicEFL: L.EFL,
        currentEPSD: 0.25,
        currentPhysStopSD: L.stopPhysSD,
        perspectiveTraceContext: mismatched,
      }),
    ).toThrow(/same prepared lens and slider state/);
  });
});
