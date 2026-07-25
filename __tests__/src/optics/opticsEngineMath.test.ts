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

  it("matches raw sag/slope and keeps unit normals for an odd-bearing asphere", () => {
    const R = -60;
    const h = 9.25;
    const asphere: AsphericCoefficients = {
      K: 0.4,
      A4: -2e-5,
      A6: 3e-8,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
      A3: -4e-5,
      A5: 6e-7,
      A9: -2e-11,
    };
    const profile = createSurfaceProfile({ R }, asphere);
    expectClose(profile.sag(h), conicPolySag(h, R, asphere), SURFACE_TOLERANCE.sag);
    expectClose(profile.slope(h), sagSlopeRaw(h, R, asphere), SURFACE_TOLERANCE.slope);
    expectClose(length(profile.normalAt(profile.pointAt(0, 3, 4), 0)), 1, 1e-12);
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

describe("Odd-order aspheric terms", () => {
  const FLAT_R = 1e15;

  it("reduces to the analytic A3*h^3 sag and 3*A3*h^2 slope on a flat base", () => {
    const A3 = 2e-3;
    const asph: AsphericCoefficients = { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0, A3 };
    for (const h of [0, 1.5, 10]) {
      expectClose(conicPolySag(h, FLAT_R, asph), A3 * h ** 3, 1e-12);
      expectClose(sagSlopeRaw(h, FLAT_R, asph), 3 * A3 * h ** 2, 1e-12);
    }
  });

  it("matches an independently computed conic + sum of A_n*h^n for mixed orders", () => {
    const R = 40;
    const asph: AsphericCoefficients = {
      K: -0.5,
      A4: 1e-5,
      A6: -2e-7,
      A8: 3e-9,
      A10: -4e-11,
      A12: 5e-13,
      A14: -6e-15,
      A16: 7e-17,
      A18: -8e-19,
      A20: 9e-21,
      A3: 2e-4,
      A5: -3e-6,
      A7: 4e-8,
      A9: -5e-10,
      A11: 6e-12,
      A13: -7e-14,
      A15: 8e-16,
      A17: -9e-18,
      A19: 1e-19,
    };
    for (const h of [0.5, 4, 9.5]) {
      const c = 1 / R;
      const conic = (c * h * h) / (1 + Math.sqrt(1 - (1 + asph.K) * c * c * h * h));
      let expected = conic;
      let expectedSlope = (c * h) / Math.sqrt(1 - (1 + asph.K) * c * c * h * h);
      for (let n = 3; n <= 20; n++) {
        const coeff = (asph[`A${n}` as keyof AsphericCoefficients] ?? 0) as number;
        expected += coeff * h ** n;
        expectedSlope += n * coeff * h ** (n - 1);
      }
      expectClose(conicPolySag(h, R, asph), expected, 1e-12);
      expectClose(sagSlopeRaw(h, R, asph), expectedSlope, 1e-12);
    }
  });

  it("agrees with a central finite difference at real patent coefficient magnitudes", () => {
    // Fujifilm GFX100RF 35mm surface 15A patent coefficients.
    const R = -137.7142;
    const asph: AsphericCoefficients = {
      K: 6.0896629652,
      A4: -1.0499566787e-4,
      A6: 4.5030349598e-6,
      A8: -1.8332704424e-7,
      A10: 3.2832007849e-9,
      A12: -2.6860875467e-11,
      A14: 6.2135840221e-14,
      A16: 4.8063364846e-16,
      A18: -3.3492681519e-18,
      A20: 6.0349230674e-21,
      A5: -1.7524859132e-5,
      A7: 2.1858635689e-7,
      A9: 1.0104186656e-8,
      A11: -3.5373721277e-10,
      A13: 4.6941325681e-12,
      A15: -3.1574129484e-14,
      A17: 1.0713713899e-16,
      A19: -1.4581851029e-19,
    };
    const eps = 1e-5;
    for (const h of [2, 6.5, 12.9]) {
      const numeric = (conicPolySag(h + eps, R, asph) - conicPolySag(h - eps, R, asph)) / (2 * eps);
      const analytic = sagSlopeRaw(h, R, asph);
      expect(Math.abs(numeric - analytic) / Math.max(Math.abs(analytic), 1e-12)).toBeLessThan(1e-6);
    }
  });

  it("keeps even-only surfaces bit-identical to the pre-odd-order formula", () => {
    const R = 42.5;
    const asph: AsphericCoefficients = {
      K: -0.7,
      A4: 1e-6,
      A6: -2e-9,
      A8: 3e-12,
      A10: -4e-15,
      A12: 5e-18,
      A14: -6e-21,
      A16: 7e-24,
    };
    for (const h of [0, 3.7, 11.9]) {
      const c = 1 / R;
      const h2 = h * h;
      const d = 1 - (1 + asph.K) * c * c * h2;
      const conic = (c * h2) / (1 + Math.sqrt(d > 0 ? d : 1e-12));
      const poly =
        asph.A4 * h2 * h2 +
        asph.A6 * h2 ** 3 +
        asph.A8 * h2 ** 4 +
        asph.A10 * h2 ** 5 +
        asph.A12 * h2 ** 6 +
        asph.A14 * h2 ** 7 +
        (asph.A16 ?? 0) * h2 ** 8 +
        (asph.A18 ?? 0) * h2 ** 9 +
        (asph.A20 ?? 0) * h2 ** 10;
      expect(conicPolySag(h, R, asph)).toBe(conic + poly);

      const denom2 = 1 - (1 + asph.K) * c * c * h2;
      const conicSlope = (c * h) / Math.sqrt(denom2 > 0 ? denom2 : 1e-12);
      const polySlope =
        h *
        (4 * asph.A4 * h2 +
          6 * asph.A6 * h2 * h2 +
          8 * asph.A8 * h2 ** 3 +
          10 * asph.A10 * h2 ** 4 +
          12 * asph.A12 * h2 ** 5 +
          14 * asph.A14 * h2 ** 6 +
          16 * (asph.A16 ?? 0) * h2 ** 7 +
          18 * (asph.A18 ?? 0) * h2 ** 8 +
          20 * (asph.A20 ?? 0) * h2 ** 9);
      expect(sagSlopeRaw(h, R, asph)).toBe(conicSlope + polySlope);
    }
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
