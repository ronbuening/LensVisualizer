import { describe, expect, it } from "vitest";
import {
  computeAsphericDeparture2,
  computeBestFitSphereR2,
  computeDepartureProfile2,
  nearestSurfaceForClick2,
  peakAbsDeparture2,
  rmsDeparture2,
} from "../../../../src/optics/analysis/asphericComparison.js";
import type { AsphericCoefficients } from "../../../../src/types/optics.js";

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

describe("aspheric comparison analysis adapter", () => {
  it("computes zero departure for matching spherical surfaces", () => {
    for (const h of [0, 5, 10, 15]) {
      expect(computeAsphericDeparture2(h, 40, 40, undefined)).toBeCloseTo(0, 12);
    }
  });

  it("finds a same-sign best-fit sphere and reduces RMS departure", () => {
    const baseR = 50;
    const sd = 18;
    const fit = computeBestFitSphereR2(baseR, MILD_ASPH, sd);
    const baseProfile = computeDepartureProfile2(baseR, baseR, MILD_ASPH, sd);
    const fitProfile = computeDepartureProfile2(fit, baseR, MILD_ASPH, sd);

    expect(fit).toBeGreaterThan(0);
    expect(rmsDeparture2(fitProfile)).toBeLessThanOrEqual(rmsDeparture2(baseProfile));
    expect(computeBestFitSphereR2(-baseR, MILD_ASPH, sd)).toBeLessThan(0);
  });

  it("returns the base radius for flat or apertureless fits", () => {
    expect(computeBestFitSphereR2(1e15, MILD_ASPH, 10)).toBe(1e15);
    expect(computeBestFitSphereR2(50, MILD_ASPH, 0)).toBe(50);
    expect(computeBestFitSphereR2(50, ZERO_ASPH, 15)).toBeCloseTo(50, 1);
  });

  it("samples both endpoints and clamps to at least two samples", () => {
    const profile = computeDepartureProfile2(50, 50, MILD_ASPH, 10, 33);
    expect(profile).toHaveLength(33);
    expect(profile[0]).toMatchObject({ h: 0 });
    expect(profile.at(-1)?.h).toBeCloseTo(10, 10);
    expect(computeDepartureProfile2(50, 50, MILD_ASPH, 10, 1)).toHaveLength(2);
  });

  it("summarizes peak/RMS departures and handles empty input", () => {
    const profile = [
      { h: 0, delta: 0 },
      { h: 1, delta: -3 },
      { h: 2, delta: 4 },
    ];

    expect(peakAbsDeparture2(profile)).toBe(4);
    expect(rmsDeparture2(profile)).toBeCloseTo(Math.sqrt(25 / 3), 10);
    expect(peakAbsDeparture2([])).toBe(0);
    expect(rmsDeparture2([])).toBe(0);
  });

  it("selects the nearest rendered surface and keeps first surface on ties", () => {
    const surfaces = [
      { surfIdx: 3, z: 10 },
      { surfIdx: 4, z: 18 },
    ];

    expect(nearestSurfaceForClick2(11, surfaces)).toBe(3);
    expect(nearestSurfaceForClick2(17, surfaces)).toBe(4);
    expect(nearestSurfaceForClick2(14, surfaces)).toBe(3);
    expect(nearestSurfaceForClick2(0, [])).toBeNull();
  });
});
