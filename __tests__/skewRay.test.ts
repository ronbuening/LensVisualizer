import { describe, expect, it } from "vitest";
import {
  sampleCircularPupil,
  sampleOrthogonalPupilFan,
  skewImagePlaneIntercept,
  traceRay,
  traceSkewRay,
} from "../src/optics/optics.js";
import type { RuntimeLens } from "../src/types/optics.js";

function mkSingleElement(): RuntimeLens {
  return {
    S: [
      { label: "1", R: 50, nd: 1.5168, sd: 15, d: 5, elemId: 1 },
      { label: "2", R: -50, nd: 1.0, sd: 15, d: 80, elemId: 1 },
    ],
    N: 2,
    stopIdx: 0,
    clipMargin: 1.0,
    rayLead: 5,
    asphByIdx: {},
    varByIdx: {},
  } as unknown as RuntimeLens;
}

describe("traceSkewRay", () => {
  const L = mkSingleElement();
  const zPos = [0, 5];
  const imagePlaneZ = 85;
  const lastSurfZ = 5;

  it("matches the on-axis meridional trace", () => {
    const skew = traceSkewRay(0, 0, 0, 0, zPos, 0, 0, 15, false, L);
    const meridional = traceRay(0, 0, zPos, 0, 0, 15, false, L);

    expect(skew.x).toBeCloseTo(0, 10);
    expect(skew.y).toBeCloseTo(meridional.y, 10);
    expect(skew.ux).toBeCloseTo(0, 10);
    expect(skew.uy).toBeCloseTo(meridional.u, 10);
    expect(skew.clipped).toBe(false);
  });

  it("reduces to the existing meridional trace when launched in the tangential plane", () => {
    const skew = traceSkewRay(0, 0.1, 0, 0, zPos, 0, 0, 15, false, L);
    const meridional = traceRay(0.1, 0, zPos, 0, 0, 15, false, L);

    expect(skew.x).toBeCloseTo(0, 10);
    expect(skew.y).toBeCloseTo(meridional.y, 10);
    expect(skew.ux).toBeCloseTo(0, 10);
    expect(skew.uy).toBeCloseTo(meridional.u, 10);
  });

  it("preserves rotational symmetry for mirrored sagittal rays", () => {
    const positive = traceSkewRay(3, 1, 0, -0.04, zPos, 0, 0, 15, false, L);
    const negative = traceSkewRay(-3, 1, 0, -0.04, zPos, 0, 0, 15, false, L);

    expect(positive.x).toBeCloseTo(-negative.x, 8);
    expect(positive.y).toBeCloseTo(negative.y, 8);
    expect(positive.ux).toBeCloseTo(-negative.ux, 8);
    expect(positive.uy).toBeCloseTo(negative.uy, 8);
  });

  it("marks skew rays clipped when they exceed the stop radius", () => {
    const clipped = traceSkewRay(20, 0, 0, 0, zPos, 0, 0, 15, true, L);
    expect(clipped.clipped).toBe(true);
  });

  it("projects finite skew intercepts to the image plane", () => {
    const skew = traceSkewRay(2, 1, 0.02, -0.03, zPos, 0, 0, 15, false, L);
    const intercept = skewImagePlaneIntercept(skew.x, skew.y, skew.ux, skew.uy, lastSurfZ, imagePlaneZ);

    expect(intercept).not.toBeNull();
    expect(isFinite(intercept!.x)).toBe(true);
    expect(isFinite(intercept!.y)).toBe(true);
  });
});

describe("skew pupil sampling helpers", () => {
  it("returns an odd orthogonal fan that includes the chief ray sample", () => {
    const tangential = sampleOrthogonalPupilFan(6, "tangential");
    const sagittal = sampleOrthogonalPupilFan(5, "sagittal");

    expect(tangential).toHaveLength(7);
    expect(tangential.some((sample) => sample.pupilFraction === 0 && sample.yFraction === 0)).toBe(true);
    expect(sagittal.some((sample) => sample.pupilFraction === 0 && sample.xFraction === 0)).toBe(true);
  });

  it("returns a weighted circular pupil pattern with zero-centered symmetry", () => {
    const samples = sampleCircularPupil();
    const totalWeight = samples.reduce((sum, sample) => sum + sample.weight, 0);
    const weightedX = samples.reduce((sum, sample) => sum + sample.xFraction * sample.weight, 0);
    const weightedY = samples.reduce((sum, sample) => sum + sample.yFraction * sample.weight, 0);

    expect(samples.length).toBe(61);
    expect(totalWeight).toBeCloseTo(1, 10);
    expect(weightedX).toBeCloseTo(0, 10);
    expect(weightedY).toBeCloseTo(0, 10);
  });
});
