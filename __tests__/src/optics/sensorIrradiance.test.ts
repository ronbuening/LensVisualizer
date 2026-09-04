import { describe, expect, it } from "vitest";
import { integrateSensorIrradiance, computeSensorIrradiance } from "../../../src/optics/analysis/sensorIrradiance.js";
import { createAreaWeightedCircularPupilPoints } from "../../../src/optics/math/pupilSampling.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { traceGeneralized } from "../../../src/optics/trace/generalizedTrace.js";
import { traceEngineRay2 } from "../../../src/optics/trace/rayAdapters.js";
import type { PreparedOpticalState } from "../../../src/optics/types.js";
import { buildSimplePositiveElementLens, sharedSonnar50f15 } from "./testLensFixtures.js";

const clear = () => 1;
function diskState(): PreparedOpticalState {
  const base = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
  return {
    ...base,
    surfaces: [{ ...base.surfaces[0], sd: 5, z: 0, d: 10 }],
    imgZ: 10,
    imagePlane: { label: "Radiometry reference", point: [0, 0, 10], normal: [0, 0, 1] },
  };
}

describe("area quadrature and sensor radiometry", () => {
  it("integrates circular pupil area rather than a diameter", () => {
    const points = createAreaWeightedCircularPupilPoints(64, 32);
    const sum = (fn: (p: (typeof points)[number]) => number) => points.reduce((v, p) => v + p.weight * fn(p), 0);
    expect(sum(() => 1)).toBeCloseTo(1, 12);
    expect(sum((p) => p.u * p.u)).toBeCloseTo(0.25, 12);
    expect(sum((p) => p.v * p.v)).toBeCloseTo(0.25, 12);
    expect(sum((p) => (p.u * p.u + p.v * p.v < 0.25 ? 1 : 0))).toBeCloseTo(0.25, 12);
    expect(() => createAreaWeightedCircularPupilPoints(NaN)).toThrow(RangeError);
  });

  it("matches the analytic solid angle integral of a disk, including a high-NA disk", () => {
    for (const radius of [1, 5, 10]) {
      const actual = integrateSensorIrradiance([0, 0, 10], 0, radius, clear, { radialStrata: 128 });
      // E/L = 2pi integral_0^atan(a/d) cos(theta) sin(theta) dtheta.
      expect(actual.irradiancePerRadiance).toBeCloseTo((Math.PI * radius ** 2) / (radius ** 2 + 100), 5);
      expect(actual.status).toBe("converged");
      expect(actual.estimatedRelativeError).toBeLessThan(0.0001);
    }
  });

  it("recovers cos-fourth only in the small-aperture far-field limit", () => {
    const center = integrateSensorIrradiance([0, 0, 100], 0, 0.1, clear);
    const edge = integrateSensorIrradiance([0, 100, 100], 0, 0.1, clear);
    expect(edge.irradiancePerRadiance! / center.irradiancePerRadiance!).toBeCloseTo(0.25, 5);
  });

  it("is scale/rotation invariant and linear in intensity transmission", () => {
    const base = integrateSensorIrradiance([0, 3, 10], 0, 5, clear);
    const rotated = integrateSensorIrradiance([3, 0, 10], 0, 5, clear);
    const scaled = integrateSensorIrradiance([0, 6, 20], 0, 10, () => 0.25);
    expect(rotated.irradiancePerRadiance).toBeCloseTo(base.irradiancePerRadiance!, 12);
    expect(scaled.irradiancePerRadiance).toBeCloseTo(base.irradiancePerRadiance! / 4, 12);
  });

  it("keeps rejected rays, failed solves, and insufficient sampling distinct", () => {
    expect(integrateSensorIrradiance([0, 0, 10], 0, 5, () => 0).status).toBe("no-transmission-sampled");
    for (const invalid of [null, NaN, -1, 2]) {
      expect(integrateSensorIrradiance([0, 0, 10], 0, 5, () => invalid).irradiancePerRadiance).toBeNull();
    }
    expect(integrateSensorIrradiance([0, 0, 0], 1, 5, clear).status).toBe("failed");
    expect(integrateSensorIrradiance([0, 0, 1], 0, 10, clear, { radialStrata: 1 }).status).toBe("undersampled");
  });

  it("traces a real stop and reproduces its analytic irradiance and aperture scaling", () => {
    const state = diskState();
    const full = computeSensorIrradiance(state, 0, 5, { radialStrata: 128 });
    const half = computeSensorIrradiance(state, 0, 2.5, { radialStrata: 128 });
    expect(full.irradiancePerRadiance).toBeCloseTo(Math.PI / 5, 5);
    expect(half.irradiancePerRadiance).toBeCloseTo(Math.PI / 17, 5);
    expect(full.status).toBe("converged");
  });

  it("rejects unvalidated paths, non-air image space, invalid stops and unsafe integration bounds", () => {
    const state = diskState();
    expect(
      computeSensorIrradiance(
        { ...state, lens: { ...state.lens, flags: { ...state.lens.flags, isFoldedOptics: true } } },
        0,
        5,
      ).status,
    ).toBe("unsupported");
    expect(computeSensorIrradiance({ ...state, surfaces: [] }, 0, 5).status).toBe("unsupported");
    expect(computeSensorIrradiance({ ...state, surfaces: [{ ...state.surfaces[0], nd: 1.5 }] }, 0, 5).status).toBe(
      "unsupported",
    );
    expect(computeSensorIrradiance({ ...state, imgZ: -1 }, 0, 5).status).toBe("unsupported");
    expect(computeSensorIrradiance(state, 0, 0).status).toBe("failed");
    for (const surface of [
      { ...state.surfaces[0], innerSd: 1 },
      { ...state.surfaces[0], interaction: { ...state.surfaces[0].interaction, incidentSide: "front" as const } },
    ]) {
      expect(computeSensorIrradiance({ ...state, surfaces: [surface] }, 0, 5).status).toBe("unsupported");
    }
  });

  it("does not turn unbracketed reverse intersections into physical zero transmission", () => {
    const lens = sharedSonnar50f15();
    const result = computeSensorIrradiance(prepareRuntimeState(lens, 0, 0), 0, lens.stopPhysSD);
    expect(result.status).toBe("failed");
    expect(result.irradiancePerRadiance).toBeNull();
  });

  it("reverses skew refractive paths through the same physical hit points", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const forward = traceEngineRay2(state, { origin: [1, 2, -1], direction: [0, 0, 1] });
    expect(forward.status).toBe("ok");
    const reverse = traceGeneralized(
      {
        ...state,
        imagePlane: { label: "Radiometry reference", point: [0, 0, -1], normal: [0, 0, -1] },
        lens: { ...state.lens, opticalPath: { ...state.lens.opticalPath, surfaceOrder: [2, 1, 0] } },
      },
      {
        origin: forward.terminalPoint,
        direction: [-forward.terminalDirection[0], -forward.terminalDirection[1], -forward.terminalDirection[2]],
      },
    );
    expect(reverse.status).toBe("ok");
    expect(reverse.reachedImagePlane).toBe(true);
    reverse.hits.forEach((hit, i) =>
      hit.point.forEach((coordinate, axis) => {
        expect(coordinate).toBeCloseTo(forward.hits[2 - i].point[axis], 7);
      }),
    );
    expect(reverse.terminalPoint[0]).toBeCloseTo(1, 7);
    expect(reverse.terminalPoint[1]).toBeCloseTo(2, 7);
  });
});
