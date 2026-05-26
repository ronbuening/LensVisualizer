import { describe, expect, it } from "vitest";
import { conicPolySag, sag, sagSlopeRaw } from "../../../src/optics/optics.js";
import type { AsphericCoefficients } from "../../../src/types/optics.js";
import { createSurfaceProfile, createTiltedPlaneProfile } from "../../../src/optics/math/surfaceProfile.js";
import { intersectSurfaceProfile } from "../../../src/optics/math/intersection.js";
import {
  cross,
  directionFromSkewSlope,
  dot,
  length,
  normalize,
  reflect,
  refract,
} from "../../../src/optics/math/vector.js";

const SURFACE_TOLERANCE = {
  sag: 1e-10,
  slope: 1e-10,
} as const;

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

describe("Optics engine surface profiles", () => {
  it("matches public spherical and aspheric sag/slope formulas", () => {
    const R = 42.5;
    const h = 12.3;
    const spherical = createSurfaceProfile({ R }, undefined);
    expectClose(spherical.sag(h), sag(h, R), SURFACE_TOLERANCE.sag);
    expectClose(spherical.slope(h), sagSlopeRaw(h, R, undefined), SURFACE_TOLERANCE.slope);

    const asphere: AsphericCoefficients = {
      K: -0.7,
      A4: 1e-6,
      A6: -2e-9,
      A8: 3e-12,
      A10: 0,
      A12: 0,
      A14: 0,
    };
    const aspheric = createSurfaceProfile({ R }, asphere);
    expectClose(aspheric.sag(h), conicPolySag(h, R, asphere), SURFACE_TOLERANCE.sag);
    expectClose(aspheric.slope(h), sagSlopeRaw(h, R, asphere), SURFACE_TOLERANCE.slope);
    expectClose(length(aspheric.normalAt(aspheric.pointAt(0, 3, 4), 0)), 1, 1e-12);
  });

  it("preserves the conic denominator guard outside the real spherical domain", () => {
    const asphere: AsphericCoefficients = {
      K: 0,
      A4: 0,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    };
    const profile = createSurfaceProfile({ R: 10 }, asphere);
    expect(profile.sag(12)).toBe(conicPolySag(12, 10, asphere));
    expect(Number.isFinite(profile.slope(12))).toBe(true);
  });

  it("creates tilted meridional planes whose points satisfy the plane equation", () => {
    const profile = createTiltedPlaneProfile({ y: 1, z: 1 });
    const point = profile.pointAt(7, 0, 3);
    const normal = profile.normalAt(point, 7);
    const residual = dot(normal, [point[0], point[1], point[2] - 7]);
    expectClose(residual, 0, 1e-12);
    expectClose(length(normal), 1, 1e-12);
  });
});

describe("Optics engine surface intersections", () => {
  it("intersects flat, spherical, marginal, skew, and tilted-plane surfaces", () => {
    const flat = createSurfaceProfile({ R: 1e15 }, undefined);
    const flatHit = intersectSurfaceProfile({ origin: [0, 1, -10], direction: [0, 0, 1] }, flat, 5);
    expect(flatHit.ok).toBe(true);
    if (flatHit.ok) expectClose(flatHit.t, 15, 1e-12);

    const spherical = createSurfaceProfile({ R: 50 }, undefined);
    const axial = intersectSurfaceProfile({ origin: [0, 0, -10], direction: [0, 0, 1] }, spherical, 0, {
      maxT: 20,
    });
    expect(axial.ok).toBe(true);
    if (axial.ok) expectClose(axial.point[2], 0, 1e-12);

    const marginal = intersectSurfaceProfile({ origin: [3, 4, -10], direction: [0, 0, 1] }, spherical, 0, {
      maxT: 20,
    });
    expect(marginal.ok).toBe(true);
    if (marginal.ok) expectClose(marginal.point[2], sag(5, 50), 1e-9);

    const skew = intersectSurfaceProfile({ origin: [0, 0, -10], direction: normalize([0.1, 0.05, 1])! }, spherical, 0, {
      maxT: 25,
    });
    expect(skew.ok).toBe(true);
    if (skew.ok) expectClose(skew.residual, 0, 1e-8);

    const tilted = createTiltedPlaneProfile({ y: 1, z: 1 });
    const tiltedHit = intersectSurfaceProfile({ origin: [0, 0, -5], direction: [0, 0, 1] }, tilted, 10);
    expect(tiltedHit.ok).toBe(true);
  });

  it("returns typed failures for invalid directions, invalid bounds, tangents, and misses", () => {
    const flat = createSurfaceProfile({ R: 1e15 }, undefined);
    expect(intersectSurfaceProfile({ origin: [0, 0, 0], direction: [0, 0, 0] }, flat, 0)).toMatchObject({
      ok: false,
      failureReason: "invalidDirection",
    });
    expect(intersectSurfaceProfile({ origin: [0, 0, 0], direction: [0, 0, 1] }, flat, 0, { minT: -1 })).toMatchObject({
      ok: false,
      failureReason: "invalidBounds",
    });
    expect(intersectSurfaceProfile({ origin: [0, 0, 0], direction: [1, 0, 0] }, flat, 5)).toMatchObject({
      ok: false,
      failureReason: "noBracket",
    });

    const spherical = createSurfaceProfile({ R: 50 }, undefined);
    expect(
      intersectSurfaceProfile({ origin: [100, 0, -10], direction: [0, 0, 1] }, spherical, 0, { maxT: 20 }),
    ).toMatchObject({ ok: false, failureReason: "noBracket" });
  });
});
