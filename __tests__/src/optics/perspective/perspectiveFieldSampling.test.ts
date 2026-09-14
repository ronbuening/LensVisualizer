import { describe, expect, it } from "vitest";
import buildLens from "../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import {
  PerspectiveFieldSamplingError,
  samplePerspectiveFields,
  sampleSceneLockedFields,
  sampleSensorLockedFields,
  zeroPoseSceneDirectionForSensorUv,
  type SensorUv,
} from "../../../../src/optics/perspective/fieldSampling.js";
import {
  createPerspectiveTraceContext,
  type PerspectiveTraceContext,
} from "../../../../src/optics/perspective/trace.js";
import type { Vec3 } from "../../../../src/optics/types.js";
import { LENS_CATALOG } from "../../../../src/utils/catalog/lensCatalog.js";
import { buildSimplePositiveElementLens } from "../testLensFixtures.js";

const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
const STATE = prepareRuntimeState(L, 0, 0);

function context(shiftMm = 0, tiltDeg = 0): PerspectiveTraceContext {
  return createPerspectiveTraceContext({
    preparedState: STATE,
    movement: { shiftMm, tiltDeg },
    tiltPivot: L.perspectiveControl?.tiltPivot,
  });
}

function expectPointClose(actual: Vec3 | null, expected: Vec3 | null, precision = 4): void {
  expect(actual).not.toBeNull();
  expect(expected).not.toBeNull();
  for (let index = 0; index < 3; index++) expect(actual![index]).toBeCloseTo(expected![index], precision);
}

function sceneDirectionsForUvs(camera: PerspectiveTraceContext, uvs: readonly SensorUv[]): Vec3[] {
  return uvs.map((uv) => {
    const direction = zeroPoseSceneDirectionForSensorUv(camera, uv);
    expect(direction).not.toBeNull();
    return direction!;
  });
}

describe("perspective field sampling", () => {
  it("preserves signed -1/0/1 input order and zero-pose ideal parity", () => {
    const camera = context();
    const requested = [
      { u: 0, v: -0.5 },
      { u: 0, v: 0 },
      { u: 0, v: 0.5 },
    ] as const;
    const samples = sampleSceneLockedFields(camera, sceneDirectionsForUvs(camera, requested));

    expect(samples).toHaveLength(3);
    expect(samples.map((sample) => sample.domain)).toEqual(["scene-locked", "scene-locked", "scene-locked"]);
    expect(samples.map((sample) => sample.status)).toEqual(["usable", "usable", "usable"]);
    expect(samples.map((sample) => Math.sign(sample.sensorUv!.v))).toEqual([-1, 0, 1]);
    samples.forEach((sample, index) => {
      expect(sample.sensorUv!.u).toBeCloseTo(requested[index].u, 10);
      expect(sample.sensorUv!.v).toBeCloseTo(requested[index].v, 10);
      expectPointClose(sample.poseIdealSensorIntercept, sample.zeroPoseIdealSensorIntercept, 9);
      expect(sample.chiefSolve?.stopResidualMm).toBeLessThan(1e-6);
      expect(sample.sensorSolve).toBeNull();
    });
  });

  it("outer-solves actual sensor intercepts for meridional and rectangular-corner targets", () => {
    const targets = [
      { u: 0, v: -0.35 },
      { u: 0, v: 0.25 },
      { u: 0.3, v: 0.4 },
    ] as const;
    const samples = sampleSensorLockedFields(context(3, 2), targets);

    expect(samples.map((sample) => sample.sensorUv)).toEqual(targets);
    expect(samples.map((sample) => sample.status)).toEqual(["usable", "usable", "usable"]);
    samples.forEach((sample) => {
      expect(sample.sensorSolve?.status).toBe("converged");
      expect(sample.sensorSolve?.residualMm?.u).toBeCloseTo(0, 4);
      expect(sample.sensorSolve?.residualMm?.v).toBeCloseTo(0, 4);
      expectPointClose(sample.actualSensorIntercept, sample.sensorPoint, 4);
      expect(sample.chiefSolve?.stopResidualMm).toBeLessThan(1e-6);
    });
    expect(samples[0].sensorSolve?.scalarRoot?.status).toBe("converged");
    expect(samples[2].sensorSolve?.scalarRoot).toBeNull();
  });

  it("retains unavailable requests and their exact order", () => {
    const samples = samplePerspectiveFields(context(), [
      { domain: "scene-locked", sceneDirectionCamera: [Number.NaN, 0, 1] },
      { domain: "sensor-locked", sensorUv: { u: 0, v: 0 } },
      { domain: "scene-locked", sceneDirectionCamera: [0, 1, 0] },
      { domain: "sensor-locked", sensorUv: { u: 1.5, v: -0.25 } },
    ]);

    expect(samples.map((sample) => sample.domain)).toEqual([
      "scene-locked",
      "sensor-locked",
      "scene-locked",
      "sensor-locked",
    ]);
    expect(samples.map((sample) => sample.status)).toEqual([
      "outside-projection-domain",
      "usable",
      "outside-projection-domain",
      "outside-projection-domain",
    ]);
    expect(samples[0].sensorUv).toBeNull();
    expect(samples[3].sensorUv).toEqual({ u: 1.5, v: -0.25 });
  });

  it("preserves +/- movement symmetry for a scene-locked field", () => {
    const positive = sampleSceneLockedFields(context(3, 2), [[0, 0, 1]])[0];
    const negative = sampleSceneLockedFields(context(-3, -2), [[0, 0, 1]])[0];

    expect(positive.status).toBe("usable");
    expect(negative.status).toBe("usable");
    expect(positive.actualSensorIntercept![0]).toBeCloseTo(negative.actualSensorIntercept![0], 8);
    expect(positive.actualSensorIntercept![1]).toBeCloseTo(-negative.actualSensorIntercept![1], 7);
    expect(positive.poseIdealSensorIntercept![1]).toBeCloseTo(-negative.poseIdealSensorIntercept![1], 9);
  });

  it("preserves pupil order, active-stop clipping, circular weights, and transmission", () => {
    const camera = context(1, 1);
    const meridional = sampleSceneLockedFields(camera, [[0, 0, 1]], {
      pupilBundle: {
        kind: "meridional",
        pupilSemiDiameterMm: 1,
        stopSemiDiameterMm: 0.05,
        fractions: [-1, 0, 1],
      },
    })[0];
    const circular = sampleSceneLockedFields(camera, [[0, 0, 1]], {
      pupilBundle: {
        kind: "circular",
        pupilSemiDiameterMm: 0.25,
        stopSemiDiameterMm: L.stopPhysSD,
        points: [
          { u: 0, v: 0, weight: 0.5 },
          { u: 0.5, v: 0, weight: 0.25 },
          { u: 0, v: 0.5, weight: 0.25 },
        ],
      },
    })[0];

    expect(meridional.pupilBundle?.samples.map((sample) => sample.pupilUv.v)).toEqual([-1, 0, 1]);
    expect(meridional.pupilBundle?.samples[1].status).toBe("usable");
    expect(meridional.pupilBundle?.samples.some((sample) => sample.status === "clipped")).toBe(true);
    expect(circular.pupilBundle?.kind).toBe("circular");
    expect(circular.pupilBundle?.samples.map((sample) => sample.weight)).toEqual([0.5, 0.25, 0.25]);
    expect(circular.pupilBundle?.samples.every((sample) => Number.isFinite(sample.transmission))).toBe(true);
    expect(circular.pupilBundle?.samples.map((sample) => sample.pupilUv)).toEqual([
      { u: 0, v: 0 },
      { u: 0.5, v: 0 },
      { u: 0, v: 0.5 },
    ]);
  });

  it("requires validated image-format metadata", () => {
    const fixture = buildSimplePositiveElementLens("perspective-field-without-format");
    const camera = createPerspectiveTraceContext({
      preparedState: prepareRuntimeState(fixture, 0, 0),
      movement: { shiftMm: 0, tiltDeg: 0 },
    });

    expect(() => sampleSceneLockedFields(camera, [[0, 0, 1]])).toThrow(PerspectiveFieldSamplingError);
  });

  it("applies finite bounds by domain: scene pose misses, sensor target remains usable", () => {
    const extreme = context(12, 7.5);
    const scene = sampleSceneLockedFields(extreme, [[0, 0, 1]])[0];
    const moderate = context(3, 2);
    const sensor = sampleSensorLockedFields(moderate, [{ u: 0, v: 0.8 }])[0];

    expect(scene.status).toBe("missed-sensor");
    expect(scene.actualSensorIntercept).not.toBeNull();
    expect(Math.abs(scene.actualSensorIntercept![1] - extreme.sensorPlane.point[1])).toBeGreaterThan(12);
    expect(sensor.status).toBe("usable");
    expect(Math.abs(sensor.poseIdealSensorIntercept![1] - moderate.sensorPlane.point[1])).toBeGreaterThan(12);
    expectPointClose(sensor.actualSensorIntercept, sensor.sensorPoint, 4);
  });
});
