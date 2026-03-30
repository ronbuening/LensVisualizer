import { describe, expect, it } from "vitest";
import {
  axialIntercept,
  bestFocusPlane,
  bestRelativeFocusPlane,
  bestRelativeFocusPlaneWeighted,
  peakAtPlane,
  rmsAtPlane,
  type RealRayHit,
  type TransverseFocusHit,
  transverseCoordinateAtPlane,
} from "../src/optics/aberration/shared.js";

describe("aberration shared helpers", () => {
  it("returns null for axial intercepts when the slope is too small", () => {
    expect(axialIntercept(1, 1e-13, 10)).toBeNull();
  });

  it("computes axial intercepts for valid slopes", () => {
    expect(axialIntercept(2, 0.5, 10)).toBeCloseTo(6, 6);
  });

  it("computes RMS, peak, and best focus from a synthetic ray bundle", () => {
    const hits: RealRayHit[] = [
      { coordinate: 1, fraction: 0.1, signedFraction: 0.1, slope: -0.5, y: 1, u: -0.5, intercept: 2, imageHeight: 0 },
      {
        coordinate: -1,
        fraction: 0.1,
        signedFraction: -0.1,
        slope: 0.5,
        y: -1,
        u: 0.5,
        intercept: 2,
        imageHeight: 0,
      },
      { coordinate: 2, fraction: 0.5, signedFraction: 0.5, slope: -1, y: 2, u: -1, intercept: 2, imageHeight: 0 },
      {
        coordinate: -2,
        fraction: 0.5,
        signedFraction: -0.5,
        slope: 1,
        y: -2,
        u: 1,
        intercept: 2,
        imageHeight: 0,
      },
    ];

    expect(bestFocusPlane(hits, 0)).toBeCloseTo(2, 6);
    expect(rmsAtPlane(hits, 0, 2)).toBeCloseTo(0, 6);
    expect(peakAtPlane(hits, 0, 2)).toBeCloseTo(0, 6);
  });

  it("solves best focus from generic transverse coordinate and slope pairs", () => {
    const hits: TransverseFocusHit[] = [
      { coordinate: 1.5, slope: -0.5 },
      { coordinate: 0.75, slope: -0.25 },
      { coordinate: -0.75, slope: 0.25 },
      { coordinate: -1.5, slope: 0.5 },
    ];

    expect(bestFocusPlane(hits, 10)).toBeCloseTo(13, 6);
    expect(transverseCoordinateAtPlane(hits[0], 10, 13)).toBeCloseTo(0, 6);
    expect(rmsAtPlane(hits, 10, 13)).toBeCloseTo(0, 6);
  });

  it("solves relative focus from generic transverse hits", () => {
    const referenceHit = { coordinate: 0.2, slope: -0.1 };
    const hits: TransverseFocusHit[] = [
      referenceHit,
      { coordinate: 0.1, slope: -0.05 },
      { coordinate: -0.1, slope: 0.05 },
      { coordinate: -0.2, slope: 0.1 },
    ];

    expect(bestRelativeFocusPlane(hits, referenceHit, 4)).toBeCloseTo(6, 6);
  });

  it("falls back to the last surface when all transverse slopes are degenerate", () => {
    const hits: TransverseFocusHit[] = [
      { coordinate: 1, slope: 0 },
      { coordinate: -1, slope: 0 },
    ];

    expect(bestFocusPlane(hits, 7)).toBe(7);
    expect(bestRelativeFocusPlane(hits, hits[0], 7)).toBe(7);
  });

  it("weighted best-focus agrees with unweighted for uniform pupil fractions", () => {
    const referenceHit: TransverseFocusHit = { coordinate: 0, slope: 0 };
    const hits: TransverseFocusHit[] = [
      { coordinate: 0.1, slope: -0.05 },
      { coordinate: -0.1, slope: 0.05 },
      { coordinate: -0.2, slope: 0.1 },
    ];
    const pupilFractions = [0, 0, 0];

    const unweighted = bestRelativeFocusPlane(hits, referenceHit, 4);
    const weighted = bestRelativeFocusPlaneWeighted(hits, referenceHit, 4, pupilFractions, 0.7);
    expect(weighted).toBeCloseTo(unweighted, 6);
  });

  it("weighted best-focus emphasizes central pupil rays", () => {
    const referenceHit: TransverseFocusHit = { coordinate: 0, slope: 0 };
    const hits: TransverseFocusHit[] = [
      { coordinate: 0.01, slope: -0.01 },
      { coordinate: 0.02, slope: -0.02 },
      { coordinate: 0.5, slope: -0.1 },
    ];
    const pupilFractions = [0.1, 0.3, 0.95];

    const unweighted = bestRelativeFocusPlane(hits, referenceHit, 10);
    const weighted = bestRelativeFocusPlaneWeighted(hits, referenceHit, 10, pupilFractions, 0.7);
    expect(weighted).not.toBe(unweighted);
    expect(isFinite(weighted)).toBe(true);
  });

  it("weighted best-focus falls back to unweighted on mismatched lengths", () => {
    const referenceHit: TransverseFocusHit = { coordinate: 0, slope: 0 };
    const hits: TransverseFocusHit[] = [{ coordinate: 0.1, slope: -0.05 }];

    const result = bestRelativeFocusPlaneWeighted(hits, referenceHit, 4, [], 0.7);
    const unweighted = bestRelativeFocusPlane(hits, referenceHit, 4);
    expect(result).toBeCloseTo(unweighted, 6);
  });
});
