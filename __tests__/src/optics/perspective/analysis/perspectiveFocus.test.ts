import { describe, expect, it } from "vitest";
import buildLens from "../../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../../src/optics/compat.js";
import {
  computePerspectiveFocusAnalysis,
  type PerspectiveFocusOptions,
} from "../../../../../src/optics/perspective/analysis/focus.js";
import {
  createPerspectiveTraceContext,
  type PerspectiveTraceContext,
} from "../../../../../src/optics/perspective/trace.js";
import { LENS_CATALOG } from "../../../../../src/utils/catalog/lensCatalog.js";

const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
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

function options(): PerspectiveFocusOptions {
  return {
    stopSemiDiameterMm: L.stopPhysSD,
    pupilSemiDiameterMm: 0.25,
    sensorUvs: [
      { u: 0, v: -0.25 },
      { u: 0, v: 0.25 },
      { u: 0, v: 1.2 },
    ],
    pupilPoints: PUPIL_POINTS,
  };
}

describe("perspective focus and bokeh analysis", () => {
  it("defaults to signed top-through-center-to-bottom sampling under movement", () => {
    const result = computePerspectiveFocusAnalysis(context(1, 1), {
      stopSemiDiameterMm: L.stopPhysSD,
      pupilSemiDiameterMm: 0.25,
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
    const result = computePerspectiveFocusAnalysis(camera, options());

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
    const identity = computePerspectiveFocusAnalysis(context(), {
      ...options(),
      sensorUvs: [{ u: 0, v: 0.25 }],
    }).samples[0];
    const moved = computePerspectiveFocusAnalysis(context(3, 2), {
      ...options(),
      sensorUvs: [{ u: 0, v: 0.25 }],
    }).samples[0];

    expect(identity.sensorPoint).toEqual(moved.sensorPoint);
    expect(moved.fieldSample.sceneDirectionCamera).not.toEqual(identity.fieldSample.sceneDirectionCamera);
    expect(moved.bestFocus?.normalOffsetMm).not.toBeCloseTo(identity.bestFocus!.normalOffsetMm, 8);
  });
});
