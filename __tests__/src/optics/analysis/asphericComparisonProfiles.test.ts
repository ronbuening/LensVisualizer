import { describe, expect, it } from "vitest";
import {
  computeAsphericDepartureFromProfiles,
  computeBestFitSphereRFromProfiles,
  computeDepartureProfileFromProfiles,
} from "../../../../src/optics/analysis/asphericComparison/comparison.js";
import {
  computeAsphericElementComparison,
  createAnalysisRequest,
  computeAsphericDeparture,
  computeBestFitSphereR,
  computeDepartureProfile,
  nearestSurfaceForClick,
  peakAbsDeparture,
  rmsDeparture,
} from "../../../../src/optics/analysis.js";
import { analysisRequestForLens, sharedNikkorZ50f18 } from "../testLensFixtures.js";
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

describe("aspheric comparison profile contract", () => {
  it("preserves both sag paths on the Nikkor Z 50/1.8 S aspheric surfaces", () => {
    const L = sharedNikkorZ50f18();
    const asphericSurfaces = Object.entries(L.asphByIdx).map(([surfIdx, asph]) => ({
      surface: L.S[Number(surfIdx)],
      asph,
    }));
    expect(asphericSurfaces.length).toBeGreaterThan(0);

    let nonTrivialSurfaces = 0;
    for (const { surface, asph } of asphericSurfaces) {
      const { R, sd } = surface;
      const fit = computeBestFitSphereRFromProfiles(R, asph, sd);
      expect(fit).toBe(computeBestFitSphereR(R, asph, sd));
      expect(Math.sign(fit)).toBe(Math.sign(R));

      const profile = computeDepartureProfileFromProfiles(fit, R, asph, sd, 33);
      expect(profile).toEqual(computeDepartureProfile(fit, R, asph, sd, 33));
      expect(profile).toHaveLength(33);
      expect(profile[0]).toMatchObject({ h: 0 });
      expect(profile.at(-1)?.h).toBeCloseTo(sd, 10);
      expect(computeDepartureProfileFromProfiles(fit, R, asph, sd, 1)).toEqual(
        computeDepartureProfile(fit, R, asph, sd, 1),
      );
      expect(computeDepartureProfileFromProfiles(fit, R, asph, sd, 1)).toHaveLength(2);

      for (const h of [0, sd * 0.5, sd]) {
        expect(computeAsphericDepartureFromProfiles(h, fit, R, asph)).toBe(computeAsphericDeparture(h, fit, R, asph));
      }

      if (peakAbsDeparture(profile) > 0) nonTrivialSurfaces += 1;
    }
    /* A real aspheric prescription must produce non-zero departure somewhere,
       otherwise the equivalence above would only compare zeros. */
    expect(nonTrivialSurfaces).toBeGreaterThan(0);
  });

  it("keeps the inclusive 96-sample profile and 64-sample fit defaults", () => {
    for (const sample of [computeDepartureProfile, computeDepartureProfileFromProfiles]) {
      const profile = sample(50, 50, MILD_ASPH, 10);
      expect(profile).toHaveLength(96);
      expect(profile[0].h).toBe(0);
      expect(profile.at(-1)?.h).toBe(10);
    }
    expect(computeBestFitSphereR(50, MILD_ASPH, 10)).toBe(computeBestFitSphereR(50, MILD_ASPH, 10, 64));
    expect(computeBestFitSphereRFromProfiles(50, MILD_ASPH, 10)).toBe(
      computeBestFitSphereRFromProfiles(50, MILD_ASPH, 10, 64),
    );
  });

  it("preserves both sag paths on degenerate, edge-case, and click inputs", () => {
    /* Matching spherical surfaces: zero departure. */
    for (const h of [0, 5, 10, 15]) {
      expect(computeAsphericDepartureFromProfiles(h, 40, 40, undefined)).toBe(
        computeAsphericDeparture(h, 40, 40, undefined),
      );
      expect(computeAsphericDepartureFromProfiles(h, 40, 40, undefined)).toBeCloseTo(0, 12);
    }

    /* Flat, apertureless, zero-coefficient, and negative-radius best fits. */
    expect(computeBestFitSphereRFromProfiles(1e15, MILD_ASPH, 10)).toBe(computeBestFitSphereR(1e15, MILD_ASPH, 10));
    expect(computeBestFitSphereRFromProfiles(1e15, MILD_ASPH, 10)).toBe(1e15);
    expect(computeBestFitSphereRFromProfiles(50, MILD_ASPH, 0)).toBe(computeBestFitSphereR(50, MILD_ASPH, 0));
    expect(computeBestFitSphereRFromProfiles(50, MILD_ASPH, 0)).toBe(50);
    expect(computeBestFitSphereRFromProfiles(50, ZERO_ASPH, 15)).toBe(computeBestFitSphereR(50, ZERO_ASPH, 15));
    expect(computeBestFitSphereRFromProfiles(50, ZERO_ASPH, 15)).toBeCloseTo(50, 1);
    expect(computeBestFitSphereRFromProfiles(-50, MILD_ASPH, 18)).toBe(computeBestFitSphereR(-50, MILD_ASPH, 18));
    expect(computeBestFitSphereRFromProfiles(-50, MILD_ASPH, 18)).toBeLessThan(0);

    /* Empty profile summaries. */
    expect(peakAbsDeparture([])).toBe(0);
    expect(rmsDeparture([])).toBe(0);

    /* Nearest-surface click selection, including the first-surface tie and empty input. */
    const surfaces = [
      { surfIdx: 3, z: 10 },
      { surfIdx: 4, z: 18 },
    ];
    expect(nearestSurfaceForClick(11, surfaces)).toBe(3);
    expect(nearestSurfaceForClick(17, surfaces)).toBe(4);
    expect(nearestSurfaceForClick(14, surfaces)).toBe(3);
    expect(nearestSurfaceForClick(0, [])).toBeNull();
  });
});

describe("aspheric element requests", () => {
  it("retains each evaluator's coefficient-free spherical-rim arithmetic", () => {
    expect(computeAsphericDeparture(40, 40, 40, undefined)).toBe(-0.00003999995999492967);
    expect(computeAsphericDepartureFromProfiles(40, 40, 40, undefined)).toBe(0);
    expect(computeDepartureProfile(40, 40, undefined, 40).at(-1)?.delta).toBe(-0.00003999995999492967);
    expect(computeDepartureProfileFromProfiles(40, 40, undefined, 40).at(-1)?.delta).toBe(0);
  });

  it("uses construction-local vertices and preserves lens surface/coefficient identity", () => {
    const L = sharedNikkorZ50f18();
    const request = analysisRequestForLens(L);
    for (const [id, front, rear] of L.ES) {
      const result = computeAsphericElementComparison(request, id);
      expect(result.elemThickness).toBe(L.S[front].d);
      expect(result.sdMax).toBe(Math.max(L.S[front].sd, L.S[rear].sd));
      expect(result.surfaces.map((s) => s.surfIdx)).toEqual([front, rear].filter((i) => L.asphByIdx[i]));
      for (const s of result.surfaces) {
        expect(s.asph).toBe(L.asphByIdx[s.surfIdx]);
        expect(s.R_aspheric).toBe(L.S[s.surfIdx].R);
        expect(s.R_base).toBe(s.R_aspheric);
        expect(s.vertexZ).toBe(s.surfIdx === front ? 0 : L.S[front].d);
        expect(s.R_bestFit).toBe(computeBestFitSphereR(s.R_base, s.asph, s.sd));
      }
      const changed = createAnalysisRequest({
        preparedState: analysisRequestForLens(L, 1).preparedGeometry,
        dynamicEFL: 123,
        currentEPSD: 2,
        currentPhysStopSD: 1,
        sampling: { pupilAberrationSampleCount: 3 },
      });
      expect(computeAsphericElementComparison(changed, id)).toEqual(result);
    }
    expect(computeAsphericElementComparison(request, -1)).toEqual({ surfaces: [], elemThickness: 0, sdMax: 0 });
  });
});
