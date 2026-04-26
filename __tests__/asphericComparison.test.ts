import { describe, it, expect } from "vitest";
import {
  computeAsphericDeparture,
  computeBestFitSphereR,
  computeDepartureProfile,
  peakAbsDeparture,
  rmsDeparture,
  nearestSurfaceForClick,
} from "../src/optics/asphericComparison.js";
import type { AsphericCoefficients } from "../src/types/optics.js";

const ZERO_ASPH: AsphericCoefficients = {
  K: 0,
  A4: 0,
  A6: 0,
  A8: 0,
  A10: 0,
  A12: 0,
  A14: 0,
};

const MILD_ASPH: AsphericCoefficients = {
  K: -0.5,
  A4: 1e-7,
  A6: 0,
  A8: 0,
  A10: 0,
  A12: 0,
  A14: 0,
};

describe("computeAsphericDeparture", () => {
  it("is exactly 0 at the vertex when sphere matches base R", () => {
    expect(computeAsphericDeparture(0, 50, 50, MILD_ASPH)).toBe(0);
  });

  it("equals 0 everywhere when asph is undefined and R_sphere = R_aspheric", () => {
    for (const h of [0, 5, 10, 15]) {
      expect(computeAsphericDeparture(h, 40, 40, undefined)).toBeCloseTo(0, 12);
    }
  });

  it("grows nonzero away from vertex for a real aspheric", () => {
    const d = computeAsphericDeparture(15, 50, 50, MILD_ASPH);
    expect(Math.abs(d)).toBeGreaterThan(0);
  });
});

describe("computeBestFitSphereR", () => {
  it("returns ≈ R_base when polynomial coefficients are zero and K = 0", () => {
    const R = 50;
    const fit = computeBestFitSphereR(R, ZERO_ASPH, 15);
    expect(Math.abs(fit - R)).toBeLessThan(0.05);
  });

  it("preserves the sign of R_base for negative radii", () => {
    const fit = computeBestFitSphereR(-40, MILD_ASPH, 12);
    expect(fit).toBeLessThan(0);
  });

  it("yields lower RMS departure than the base sphere for a real aspheric", () => {
    const R = 50;
    const sd = 18;
    const fit = computeBestFitSphereR(R, MILD_ASPH, sd);
    const baseProfile = computeDepartureProfile(R, R, MILD_ASPH, sd);
    const fitProfile = computeDepartureProfile(fit, R, MILD_ASPH, sd);
    expect(rmsDeparture(fitProfile)).toBeLessThanOrEqual(rmsDeparture(baseProfile));
  });

  it("returns base R unchanged when R is effectively flat", () => {
    expect(computeBestFitSphereR(1e15, MILD_ASPH, 10)).toBe(1e15);
  });
});

describe("computeDepartureProfile", () => {
  it("respects the requested sample count and includes both endpoints", () => {
    const profile = computeDepartureProfile(50, 50, MILD_ASPH, 10, 33);
    expect(profile.length).toBe(33);
    expect(profile[0].h).toBe(0);
    expect(profile[profile.length - 1].h).toBeCloseTo(10, 10);
  });

  it("clamps sample count to a minimum of 2", () => {
    expect(computeDepartureProfile(50, 50, MILD_ASPH, 10, 1).length).toBe(2);
  });
});

describe("peakAbsDeparture", () => {
  it("returns the maximum |delta| across samples", () => {
    expect(
      peakAbsDeparture([
        { h: 0, delta: 0 },
        { h: 1, delta: -3 },
        { h: 2, delta: 1 },
      ]),
    ).toBe(3);
  });

  it("returns 0 for empty input", () => {
    expect(peakAbsDeparture([])).toBe(0);
  });
});

describe("rmsDeparture", () => {
  it("computes RMS correctly for known values", () => {
    // rms([3, -4]) = sqrt((9 + 16) / 2) = sqrt(12.5)
    const profile = [
      { h: 0, delta: 3 },
      { h: 1, delta: -4 },
    ];
    expect(rmsDeparture(profile)).toBeCloseTo(Math.sqrt(12.5), 10);
  });

  it("returns 0 for empty input", () => {
    expect(rmsDeparture([])).toBe(0);
  });

  it("returns 0 when all deltas are zero", () => {
    expect(
      rmsDeparture([
        { h: 0, delta: 0 },
        { h: 5, delta: 0 },
      ]),
    ).toBe(0);
  });

  it("is always non-negative", () => {
    const profile = computeDepartureProfile(50, 50, MILD_ASPH, 10);
    expect(rmsDeparture(profile)).toBeGreaterThanOrEqual(0);
  });
});

describe("nearestSurfaceForClick", () => {
  it("picks the closer of two surface z-positions", () => {
    const surfaces = [
      { surfIdx: 3, z: 10 },
      { surfIdx: 4, z: 18 },
    ];
    expect(nearestSurfaceForClick(11, surfaces)).toBe(3);
    expect(nearestSurfaceForClick(17, surfaces)).toBe(4);
  });

  it("picks the correct surface among three", () => {
    const surfaces = [
      { surfIdx: 1, z: 0 },
      { surfIdx: 2, z: 10 },
      { surfIdx: 3, z: 20 },
    ];
    expect(nearestSurfaceForClick(8, surfaces)).toBe(2);
    expect(nearestSurfaceForClick(12, surfaces)).toBe(2);
    expect(nearestSurfaceForClick(17, surfaces)).toBe(3);
  });

  it("returns the first surface when equidistant", () => {
    const surfaces = [
      { surfIdx: 5, z: 0 },
      { surfIdx: 6, z: 10 },
    ];
    expect(nearestSurfaceForClick(5, surfaces)).toBe(5);
  });

  it("returns null when no surfaces are provided", () => {
    expect(nearestSurfaceForClick(0, [])).toBe(null);
  });
});
