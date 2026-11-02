import { describe, expect, it } from "vitest";
import {
  cross,
  directionFromSkewSlope,
  dot,
  length,
  normalize,
  reflect,
  refract,
} from "../../../src/optics/math/vector.js";
import {
  compileDiffractivePhase,
  diffractiveRefractedDirection,
  diffractiveParaxialPower,
  radialPhaseKick,
  radialPhaseOpticalPath,
} from "../../../src/optics/math/diffractivePhase.js";

function expectClose(actual: number, expected: number, tolerance: number): void {
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);
}

describe("Optics engine vector math", () => {
  it("normalizes vectors and computes dot/cross products", () => {
    expect(normalize([3, 4, 0])).toEqual([0.6, 0.8, 0]);
    expect(dot([1, 2, 3], [4, -5, 6])).toBe(12);
    expect(cross([1, 0, 0], [0, 1, 0])).toEqual([0, 0, 1]);
  });

  it("maps skew slopes to unit directions and handles reflection/refraction", () => {
    const direction = directionFromSkewSlope(0.1, -0.2);
    expect(direction).not.toBeNull();
    expectClose(length(direction!), 1, 1e-12);

    const reflected = reflect(normalize([0, 1, -1])!, [0, 0, 1]);
    expect(reflected).not.toBeNull();
    expectClose(reflected![2], Math.SQRT1_2, 1e-12);

    expect(refract([0, 0, 1], [0, 0, 1], 1, 1.5)).toEqual([0, 0, 1]);
    expect(refract(normalize([0, 0.95, 0.3122498999])!, [0, 0, 1], 1.5, 1)).toBeNull();
  });
});

describe("Diffractive radial phase math", () => {
  const phase = compileDiffractivePhase({
    kind: "radial-polynomial",
    referenceWavelengthNm: 587.6,
    diffractionOrder: 1,
    terms: [
      { radialPower: 2, coefficient: -4.25304e-5 },
      { radialPower: 4, coefficient: 3e-10 },
    ],
  })!;

  it("reproduces the Nikon PF optical path, gradient kick, and paraxial power", () => {
    const h = 34.9262;
    expectClose(radialPhaseOpticalPath(phase, h), -0.0514339, 2e-7);
    expectClose(radialPhaseKick(phase, h, 587.6), -0.00291973, 2e-8);
    expectClose(1 / diffractiveParaxialPower(phase, 587.6), 11756.29667, 0.02);
  });

  it("scales phase power directly with wavelength", () => {
    const red = diffractiveParaxialPower(phase, 656.3);
    const blue = diffractiveParaxialPower(phase, 486.1);
    expectClose(red / blue, 656.3 / 486.1, 1e-12);
  });

  it("applies a same-index radial kick symmetrically and retraces in reverse", () => {
    const point = [0, 10, 0] as const;
    const forward = diffractiveRefractedDirection([0, 0, 1], [0, 0, 1], point, 1, 1, phase, 587.6);
    expect(forward).not.toBeNull();
    expectClose(forward![1], radialPhaseKick(phase, 10, 587.6), 1e-12);

    const reversedInput = [-forward![0], -forward![1], -forward![2]] as const;
    const reverse = diffractiveRefractedDirection(reversedInput, [0, 0, -1], point, 1, 1, phase, 587.6);
    expect(reverse).not.toBeNull();
    expectClose(reverse![0], 0, 1e-12);
    expectClose(reverse![1], 0, 1e-12);
    expectClose(reverse![2], -1, 1e-12);
  });
});
