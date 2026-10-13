import { describe, expect, it } from "vitest";
import buildLens from "../../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../../src/optics/compat.js";
import {
  computeIntrinsicPerspectivePupils,
  computePerspectivePupilAnalysis,
  estimateApparentPupilFromLines,
  type WeightedPupilRayLine,
} from "../../../../../src/optics/perspective/analysis/pupil.js";
import {
  createPerspectiveTraceContext,
  type PerspectiveTraceContext,
} from "../../../../../src/optics/perspective/trace.js";
import type { Ray3, Vec3 } from "../../../../../src/optics/types.js";
import { LENS_CATALOG } from "../../../../../src/utils/catalog/lensCatalog.js";

const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
const STATE = prepareRuntimeState(L, 0, 0);

function context(shiftMm = 0, tiltDeg = 0): PerspectiveTraceContext {
  return createPerspectiveTraceContext({
    preparedState: STATE,
    movement: { shiftMm, tiltDeg },
    tiltPivot: L.perspectiveControl?.tiltPivot,
  });
}

const CHIEF: Ray3 = { origin: [0, 1, 0], direction: [0, -0.1, 1] };

function pupilLines(included: readonly boolean[]): WeightedPupilRayLine[] {
  return [0, 1, 2].map((y, index) => ({
    ray: { origin: [0, y, 0], direction: CHIEF.direction },
    weight: 1,
    included: included[index] ?? false,
  }));
}

function expectVecClose(actual: Vec3, expected: Vec3, precision = 8): void {
  actual.forEach((value, index) => expect(value).toBeCloseTo(expected[index], precision));
}

describe("perspective pupil analysis", () => {
  it("keeps intrinsic EP/XP values in the lens frame at identity", () => {
    const camera = context();
    const intrinsic = computeIntrinsicPerspectivePupils(camera, L.stopPhysSD);

    expectVecClose(intrinsic.entrance.posedCenterCamera, intrinsic.entrance.centerLens, 12);
    expect(intrinsic.entrance.semiDiameterMm).toBeGreaterThan(0);
    expect(intrinsic.entrance.zRelativeToStopMm).toBeCloseTo(
      intrinsic.entrance.centerLens[2] - STATE.z[STATE.lens.stop.surfaceIndex],
      12,
    );
    expect(intrinsic.exit.telecentric).toBe(false);
    expect(intrinsic.exit.centerLens).not.toBeNull();
    expectVecClose(intrinsic.exit.posedCenterCamera!, intrinsic.exit.centerLens!, 12);
    expect(intrinsic.exit.semiDiameterMm).toBeGreaterThan(0);
  });

  it("recovers a symmetric apparent pupil on the chief-axis plane", () => {
    const estimate = estimateApparentPupilFromLines(CHIEF, pupilLines([true, true, true]), null)!;

    expect(estimate.axialPlaneZMm).toBeCloseTo(10, 12);
    expectVecClose(estimate.centerLens, [0, 0, 10], 12);
    expect(estimate.semiDiameterMm).toBeCloseTo(1, 12);
    expect(estimate.rmsRadiusMm).toBeCloseTo(Math.sqrt(2 / 3), 12);
    expect(estimate.usedRayCount).toBe(3);
  });

  it("reports apparent displacement when one pupil side is unavailable", () => {
    const estimate = estimateApparentPupilFromLines(CHIEF, pupilLines([true, true, false]), null)!;

    expectVecClose(estimate.centerLens, [0, -0.5, 10], 12);
    expect(estimate.semiDiameterMm).toBeCloseTo(0.5, 12);
    expect(estimate.usedRayCount).toBe(2);
  });

  it("uses the intrinsic axial plane for an on-axis chief ray", () => {
    const estimate = estimateApparentPupilFromLines(
      { origin: [0, 0, 0], direction: [0, 0, 1] },
      [
        { ray: { origin: [0, -1, 0], direction: [0, 0, 1] }, weight: 1, included: true },
        { ray: { origin: [0, 1, 0], direction: [0, 0, 1] }, weight: 1, included: true },
      ],
      5,
    )!;

    expectVecClose(estimate.centerLens, [0, 0, 5], 12);
    expect(estimate.semiDiameterMm).toBeCloseTo(1, 12);
  });

  it("retains signed field order and exposes camera-frame apparent displacement", () => {
    const result = computePerspectivePupilAnalysis(context(3, 2), {
      stopSemiDiameterMm: L.stopPhysSD,
      pupilSemiDiameterMm: 0.25,
      sensorUvs: [
        { u: 0, v: -0.25 },
        { u: 0, v: 0.25 },
      ],
      pupilFractions: [-1, 0, 1],
    });

    expect(result.samples.map((sample) => sample.requestedSensorUv.v)).toEqual([-0.25, 0.25]);
    expect(result.samples.map((sample) => sample.status)).toEqual(["usable", "usable"]);
    result.samples.forEach((sample) => {
      expect(sample.entrance?.centerCamera.every(Number.isFinite)).toBe(true);
      expect(sample.entrance?.displacementFromSensorCenter.vMm).not.toBeNull();
      expect(sample.entrance?.displacementFromPosedIntrinsic).not.toBeNull();
      expect(sample.exit?.centerCamera.every(Number.isFinite)).toBe(true);
    });
    expect(result.samples[0].entrance?.centerCamera[1]).not.toBeCloseTo(result.samples[1].entrance!.centerCamera[1], 8);
  });

  it("mirrors apparent centers under opposite movement and field signs", () => {
    const common = {
      stopSemiDiameterMm: L.stopPhysSD,
      pupilSemiDiameterMm: 0.25,
      pupilFractions: [-1, 0, 1],
    } as const;
    const positive = computePerspectivePupilAnalysis(context(3, 2), {
      ...common,
      sensorUvs: [{ u: 0, v: 0.25 }],
    }).samples[0];
    const negative = computePerspectivePupilAnalysis(context(-3, -2), {
      ...common,
      sensorUvs: [{ u: 0, v: -0.25 }],
    }).samples[0];

    expect(positive.status).toBe("usable");
    expect(negative.status).toBe("usable");
    expect(positive.entrance?.centerCamera[1]).toBeCloseTo(-negative.entrance!.centerCamera[1], 7);
    expect(positive.exit?.centerCamera[1]).toBeCloseTo(-negative.exit!.centerCamera[1], 7);
    expect(positive.entrance?.semiDiameterMm).toBeCloseTo(negative.entrance!.semiDiameterMm, 7);
  });

  it("retains unavailable sensor samples and their requested coordinates", () => {
    const result = computePerspectivePupilAnalysis(context(), {
      stopSemiDiameterMm: L.stopPhysSD,
      pupilSemiDiameterMm: 0.25,
      sensorUvs: [
        { u: 0, v: -1.2 },
        { u: 0, v: 0 },
        { u: 0, v: 1.2 },
      ],
      pupilFractions: [-1, 0, 1],
    });

    expect(result.samples.map((sample) => sample.requestedSensorUv.v)).toEqual([-1.2, 0, 1.2]);
    expect(result.samples.map((sample) => sample.status)).toEqual([
      "outside-projection-domain",
      "usable",
      "outside-projection-domain",
    ]);
    expect(result.samples[0].entrance).toBeNull();
    expect(result.samples[2].exit).toBeNull();
  });
});
