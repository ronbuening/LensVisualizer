import { describe, expect, it } from "vitest";
import { axialIntercept, bestFocusPlane, peakAtPlane, rmsAtPlane, type RealRayHit } from "../src/optics/aberration/shared.js";
import { estimatedChordPointCount, synthesizeEstimatedComaPoints } from "../src/optics/aberration/coma.js";

describe("aberration shared helpers", () => {
  it("returns null for axial intercepts when the slope is too small", () => {
    expect(axialIntercept(1, 1e-13, 10)).toBeNull();
  });

  it("computes axial intercepts for valid slopes", () => {
    expect(axialIntercept(2, 0.5, 10)).toBeCloseTo(6, 6);
  });

  it("computes RMS, peak, and best focus from a synthetic ray bundle", () => {
    const hits: RealRayHit[] = [
      { fraction: 0.1, signedFraction: 0.1, y: 1, u: -0.5, intercept: 2, imageHeight: 0 },
      { fraction: 0.1, signedFraction: -0.1, y: -1, u: 0.5, intercept: 2, imageHeight: 0 },
      { fraction: 0.5, signedFraction: 0.5, y: 2, u: -1, intercept: 2, imageHeight: 0 },
      { fraction: 0.5, signedFraction: -0.5, y: -2, u: 1, intercept: 2, imageHeight: 0 },
    ];

    expect(bestFocusPlane(hits, 0)).toBeCloseTo(2, 6);
    expect(rmsAtPlane(hits, 0, 2)).toBeCloseTo(0, 6);
    expect(peakAtPlane(hits, 0, 2)).toBeCloseTo(0, 6);
  });
});

describe("aberration coma helpers", () => {
  it("returns an odd estimated chord point count with at least one sample", () => {
    expect(estimatedChordPointCount(0)).toBe(1);
    expect(estimatedChordPointCount(1)).toBe(11);
  });

  it("synthesizes estimated coma points from valid pupil slices only", () => {
    const points = synthesizeEstimatedComaPoints([
      {
        index: 0,
        pupilFraction: -1,
        launchHeight: -10,
        imageHeight: null,
        relativeImageHeight: null,
        clipped: true,
      },
      {
        index: 1,
        pupilFraction: 0,
        launchHeight: 0,
        imageHeight: 0.02,
        relativeImageHeight: 0.01,
        clipped: false,
      },
    ]);

    expect(points.length).toBe(11);
    expect(points.every((point) => point.sourceSampleIndex === 1)).toBe(true);
    expect(points.some((point) => point.sagittalNormalized < 0)).toBe(true);
    expect(points.some((point) => point.sagittalNormalized > 0)).toBe(true);
    expect(points.every((point) => point.tangentialImageHeight === 0.01)).toBe(true);
  });
});
