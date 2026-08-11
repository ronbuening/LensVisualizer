import { describe, expect, it } from "vitest";
import {
  computeAsphericDeparture2,
  computeBestFitSphereR2,
  computeDepartureProfile2,
  nearestSurfaceForClick2,
  peakAbsDeparture2,
  rmsDeparture2,
} from "../../../../src/optics/analysis/asphericComparison.js";
import {
  computeAsphericDeparture,
  computeBestFitSphereR,
  computeDepartureProfile,
  nearestSurfaceForClick,
  peakAbsDeparture,
  rmsDeparture,
} from "../../../../src/optics/asphericComparison.js";
import { sharedNikkorZ50f18 } from "../testLensFixtures.js";
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

/* The v2 analysis-namespace helpers reimplement the public asphericComparison
   utilities on top of surface profiles, so behavioral coverage lives in
   asphericComparison.test.ts and these tests prove the adapter output equals
   the runtime helper output for the same inputs. */
describe("aspheric comparison analysis adapter", () => {
  it("matches the runtime helpers on the Nikkor Z 50/1.8 S aspheric surfaces", () => {
    const L = sharedNikkorZ50f18();
    const asphericSurfaces = Object.entries(L.asphByIdx).map(([surfIdx, asph]) => ({
      surface: L.S[Number(surfIdx)],
      asph,
    }));
    expect(asphericSurfaces.length).toBeGreaterThan(0);

    let nonTrivialSurfaces = 0;
    for (const { surface, asph } of asphericSurfaces) {
      const { R, sd } = surface;
      const fit = computeBestFitSphereR2(R, asph, sd);
      expect(fit).toBe(computeBestFitSphereR(R, asph, sd));
      expect(Math.sign(fit)).toBe(Math.sign(R));

      const profile = computeDepartureProfile2(fit, R, asph, sd, 33);
      expect(profile).toEqual(computeDepartureProfile(fit, R, asph, sd, 33));
      expect(profile).toHaveLength(33);
      expect(profile[0]).toMatchObject({ h: 0 });
      expect(profile.at(-1)?.h).toBeCloseTo(sd, 10);
      expect(computeDepartureProfile2(fit, R, asph, sd, 1)).toEqual(computeDepartureProfile(fit, R, asph, sd, 1));
      expect(computeDepartureProfile2(fit, R, asph, sd, 1)).toHaveLength(2);

      for (const h of [0, sd * 0.5, sd]) {
        expect(computeAsphericDeparture2(h, fit, R, asph)).toBe(computeAsphericDeparture(h, fit, R, asph));
      }

      expect(peakAbsDeparture2(profile)).toBe(peakAbsDeparture(profile));
      expect(rmsDeparture2(profile)).toBe(rmsDeparture(profile));
      if (peakAbsDeparture2(profile) > 0) nonTrivialSurfaces += 1;
    }
    /* A real aspheric prescription must produce non-zero departure somewhere,
       otherwise the equivalence above would only compare zeros. */
    expect(nonTrivialSurfaces).toBeGreaterThan(0);
  });

  it("matches the runtime helpers on degenerate, edge-case, and click inputs", () => {
    /* Matching spherical surfaces: zero departure. */
    for (const h of [0, 5, 10, 15]) {
      expect(computeAsphericDeparture2(h, 40, 40, undefined)).toBe(computeAsphericDeparture(h, 40, 40, undefined));
      expect(computeAsphericDeparture2(h, 40, 40, undefined)).toBeCloseTo(0, 12);
    }

    /* Flat, apertureless, zero-coefficient, and negative-radius best fits. */
    expect(computeBestFitSphereR2(1e15, MILD_ASPH, 10)).toBe(computeBestFitSphereR(1e15, MILD_ASPH, 10));
    expect(computeBestFitSphereR2(1e15, MILD_ASPH, 10)).toBe(1e15);
    expect(computeBestFitSphereR2(50, MILD_ASPH, 0)).toBe(computeBestFitSphereR(50, MILD_ASPH, 0));
    expect(computeBestFitSphereR2(50, MILD_ASPH, 0)).toBe(50);
    expect(computeBestFitSphereR2(50, ZERO_ASPH, 15)).toBe(computeBestFitSphereR(50, ZERO_ASPH, 15));
    expect(computeBestFitSphereR2(50, ZERO_ASPH, 15)).toBeCloseTo(50, 1);
    expect(computeBestFitSphereR2(-50, MILD_ASPH, 18)).toBe(computeBestFitSphereR(-50, MILD_ASPH, 18));
    expect(computeBestFitSphereR2(-50, MILD_ASPH, 18)).toBeLessThan(0);

    /* Empty profile summaries. */
    expect(peakAbsDeparture2([])).toBe(peakAbsDeparture([]));
    expect(peakAbsDeparture2([])).toBe(0);
    expect(rmsDeparture2([])).toBe(rmsDeparture([]));
    expect(rmsDeparture2([])).toBe(0);

    /* Nearest-surface click selection, including the first-surface tie and empty input. */
    const surfaces = [
      { surfIdx: 3, z: 10 },
      { surfIdx: 4, z: 18 },
    ];
    for (const clickZ of [11, 17, 14]) {
      expect(nearestSurfaceForClick2(clickZ, surfaces)).toBe(nearestSurfaceForClick(clickZ, surfaces));
    }
    expect(nearestSurfaceForClick2(14, surfaces)).toBe(3);
    expect(nearestSurfaceForClick2(0, [])).toBe(nearestSurfaceForClick(0, []));
    expect(nearestSurfaceForClick2(0, [])).toBeNull();
  });
});
