import { CATALOG_CONSTRUCTION_FIXTURES } from "../../constructionFixtures.js";
/** Fixed-sensor request contract and ordered perspective diagnostics. */
import { describe, expect, it } from "vitest";
import { createAnalysisRequest } from "../../../../../src/optics/analysis/request.js";
import { buildFixtureLens as buildLens } from "../../constructionFixtures.js";
import { prepareRuntimeState } from "../../../../../src/optics/state/runtimeAdapters.js";
import { computePerspectiveFocusAnalysis } from "../../../../../src/optics/perspective/analysis/focus.js";
import type { PerspectiveFocusOptions } from "../../../../../src/optics/perspective/analysis/focus.js";
import { createPerspectiveTraceContext } from "../../../../../src/optics/perspective/trace.js";
import type { PerspectiveTraceContext } from "../../../../../src/optics/perspective/trace.js";
import {} from "../../../../../src/utils/catalog/lensCatalog.js";

const L = buildLens(CATALOG_CONSTRUCTION_FIXTURES["nikon-pc-nikkor-19mm-f4e-ed"]);
const STATE = prepareRuntimeState(L, 0, 0);
const PUPIL_POINTS = [
  { u: 0, v: 0, weight: 1 },
  { u: -0.5, v: 0, weight: 1 },
  { u: 0.5, v: 0, weight: 1 },
  { u: 0, v: -0.5, weight: 1 },
  { u: 0, v: 0.5, weight: 1 },
] as const;

function context(shiftMm = 0, tiltDeg = 0): PerspectiveTraceContext {
  return createPerspectiveTraceContext({
    preparedState: STATE,
    movement: { shiftMm, tiltDeg },
    tiltPivot: L.perspectiveControl?.tiltPivot,
  });
}

function request(camera: PerspectiveTraceContext) {
  return createAnalysisRequest({
    preparedState: camera.state,
    dynamicEFL: L.EFL,
    currentEPSD: 0.25,
    currentPhysStopSD: L.stopPhysSD,
    perspectiveTraceContext: camera,
  });
}

function options(): PerspectiveFocusOptions {
  return {
    sensorUvs: [
      { u: 0, v: -0.25 },
      { u: 0, v: 0.25 },
      { u: 0, v: 1.2 },
    ],
    pupilPoints: PUPIL_POINTS,
  };
}

describe("perspective focus and bokeh analysis", () => {
  it.each(["settled", "interactive"] as const)(
    "reads aperture and %s sampling directly from the request",
    (analysisQuality) => {
      const camera = context(3, 2);
      const input = createAnalysisRequest({
        preparedState: camera.state,
        dynamicEFL: L.EFL,
        currentEPSD: 0.25,
        currentPhysStopSD: L.stopPhysSD / 2,
        perspectiveTraceContext: camera,
        analysisQuality,
        sampling: { bokehRingSamples: [1, 4], fieldCurvatureDiagnosticSampleCount: 5 },
      });
      const result = computePerspectiveFocusAnalysis(input);

      expect(result.samples.map((sample) => sample.requestedSensorUv.v)).toEqual(
        analysisQuality === "interactive" ? [-1, 0, 1] : [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1],
      );
      expect(result.contextCacheKey).toBe(camera.cacheKey);
      expect(result.pupilSemiDiameterMm).toBe(input.aperture.entrancePupilSemiDiameterMm);
      expect(result.stopSemiDiameterMm).toBe(input.aperture.stopSemiDiameterMm);
      expect(result.pupilPoints).toHaveLength(5);
    },
  );

  it("requires the request's shared perspective trace context", () => {
    const input = createAnalysisRequest({
      preparedState: STATE,
      dynamicEFL: L.EFL,
      currentEPSD: 0.25,
      currentPhysStopSD: L.stopPhysSD,
    });
    expect(() => computePerspectiveFocusAnalysis(input)).toThrow(
      "Movement-aware analysis requires a PerspectiveTraceContext",
    );
  });

  it("defaults to signed top-through-center-to-bottom sampling under movement", () => {
    const result = computePerspectiveFocusAnalysis(request(context(1, 1)), {
      pupilPoints: PUPIL_POINTS,
    });

    expect(result.samples.map((sample) => sample.requestedSensorUv.v)).toEqual([-1, -0.5, 0, 0.5, 1]);
    const topDirection = result.samples[0].fieldSample.sceneDirectionCamera;
    const bottomDirection = result.samples.at(-1)!.fieldSample.sceneDirectionCamera;
    expect(topDirection).not.toBeNull();
    expect(bottomDirection).not.toBeNull();
    expect(topDirection![1]).not.toBeCloseTo(-bottomDirection![1], 5);
  });

  it("retains signed field order and evaluates blur on the fixed sensor", () => {
    const camera = context(3, 2);
    const result = computePerspectiveFocusAnalysis(request(camera), options());

    expect(result.samples.map((sample) => sample.requestedSensorUv.v)).toEqual([-0.25, 0.25, 1.2]);
    expect(result.samples.map((sample) => sample.status)).toEqual(["usable", "usable", "outside-projection-domain"]);
    expect(result.samples[0].sensorPoint?.[2]).toBeCloseTo(camera.sensorPlane.point[2], 12);
    expect(result.samples[1].rays.map((ray) => ray.pupilUv)).toEqual(PUPIL_POINTS.map(({ u, v }) => ({ u, v })));

    for (const sample of result.samples.slice(0, 2)) {
      expect(sample.sensorBlur?.rmsRadiusMm).toBeTypeOf("number");
      expect(sample.bestFocus?.normalOffsetMm).toBeTypeOf("number");
      expect(sample.bokeh.totalRays).toBe(PUPIL_POINTS.length);
      expect(sample.bokeh.passedRays).toBeGreaterThanOrEqual(3);
      expect(sample.bokeh.mechanicalTransmission).toBeGreaterThan(0);
      expect(sample.bokeh.transmittedWeight).toBeGreaterThan(0);
    }
    expect(result.samples[2].sensorBlur).toBeNull();
    expect(result.samples[2].bokeh.usable).toBe(false);
  });

  it("changes the scene solve while keeping the physical sensor point fixed", () => {
    const identity = computePerspectiveFocusAnalysis(request(context()), {
      ...options(),
      sensorUvs: [{ u: 0, v: 0.25 }],
    }).samples[0];
    const moved = computePerspectiveFocusAnalysis(request(context(3, 2)), {
      ...options(),
      sensorUvs: [{ u: 0, v: 0.25 }],
    }).samples[0];

    expect(identity.sensorPoint).toEqual(moved.sensorPoint);
    expect(moved.fieldSample.sceneDirectionCamera).not.toEqual(identity.fieldSample.sceneDirectionCamera);
    expect(moved.bestFocus?.normalOffsetMm).not.toBeCloseTo(identity.bestFocus!.normalOffsetMm, 8);
  });
});
