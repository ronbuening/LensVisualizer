import { describe, expect, it } from "vitest";
import {
  doLayout,
  sampleCircularPupil,
  sampleOrthogonalPupilFan,
  skewImagePlaneIntercept,
  traceChiefRelativeSkewRay,
  traceRay,
  traceRayChromatic,
  traceSkewRay,
  traceSkewRayChromatic,
} from "../src/optics/optics.js";
import { computeOffAxisFieldGeometry, traceOrthogonalOffAxisBundle } from "../src/optics/aberration/offAxis.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import ApoLantharRaw from "../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";
import Sonnar50f15Raw from "../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import type { LensData, RuntimeLens } from "../src/types/optics.js";

function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

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
    const skew = traceSkewRay(0, 0, 0, 0, 0, 0, 15, false, L);
    const meridional = traceRay(0, 0, zPos, 0, 0, 15, false, L);

    expect(skew.x).toBeCloseTo(0, 10);
    expect(skew.y).toBeCloseTo(meridional.y, 10);
    expect(skew.ux).toBeCloseTo(0, 10);
    expect(skew.uy).toBeCloseTo(meridional.u, 10);
    expect(skew.clipped).toBe(false);
  });

  it("reduces to the existing meridional trace when launched in the tangential plane", () => {
    const skew = traceSkewRay(0, 0.1, 0, 0, 0, 0, 15, false, L);
    const meridional = traceRay(0.1, 0, zPos, 0, 0, 15, false, L);

    expect(skew.x).toBeCloseTo(0, 10);
    expect(skew.y).toBeCloseTo(meridional.y, 10);
    expect(skew.ux).toBeCloseTo(0, 10);
    expect(skew.uy).toBeCloseTo(meridional.u, 10);
  });

  it("preserves rotational symmetry for mirrored sagittal rays", () => {
    const positive = traceSkewRay(3, 1, 0, -0.04, 0, 0, 15, false, L);
    const negative = traceSkewRay(-3, 1, 0, -0.04, 0, 0, 15, false, L);

    expect(positive.x).toBeCloseTo(-negative.x, 8);
    expect(positive.y).toBeCloseTo(negative.y, 8);
    expect(positive.ux).toBeCloseTo(-negative.ux, 8);
    expect(positive.uy).toBeCloseTo(negative.uy, 8);
  });

  it("marks skew rays clipped when they exceed the stop radius", () => {
    const clipped = traceSkewRay(20, 0, 0, 0, 0, 0, 15, true, L);
    expect(clipped.clipped).toBe(true);
  });

  it("projects finite skew intercepts to the image plane", () => {
    const skew = traceSkewRay(2, 1, 0.02, -0.03, 0, 0, 15, false, L);
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

  it("clamps orthogonal fan count=1 to a single chief-ray sample", () => {
    const fan = sampleOrthogonalPupilFan(1, "sagittal");
    expect(fan).toHaveLength(1);
    expect(fan[0].pupilFraction).toBe(0);
    expect(fan[0].xFraction).toBe(0);
    expect(fan[0].yFraction).toBe(0);
  });

  it("clamps orthogonal fan count=0 to a single chief-ray sample", () => {
    const fan = sampleOrthogonalPupilFan(0, "tangential");
    expect(fan).toHaveLength(1);
    expect(fan[0].pupilFraction).toBe(0);
  });

  it("rounds an even orthogonal fan count up to odd", () => {
    const fan = sampleOrthogonalPupilFan(10, "sagittal");
    expect(fan).toHaveLength(11);
    expect(fan.some((s) => Math.abs(s.pupilFraction) < 1e-12)).toBe(true);
  });

  it("returns an empty array for sampleCircularPupil with empty ring pattern", () => {
    expect(sampleCircularPupil([])).toHaveLength(0);
  });

  it("handles sampleCircularPupil with a single-ring pattern", () => {
    const samples = sampleCircularPupil([1]);
    expect(samples).toHaveLength(1);
    expect(samples[0].xFraction).toBe(0);
    expect(samples[0].yFraction).toBe(0);
    expect(samples[0].weight).toBeCloseTo(1, 10);
  });
});

describe("skewImagePlaneIntercept edge cases", () => {
  it("returns null for infinite slopes", () => {
    expect(skewImagePlaneIntercept(0, 0, Infinity, 0, 5, 85)).toBeNull();
    expect(skewImagePlaneIntercept(0, 0, 0, Infinity, 5, 85)).toBeNull();
  });

  it("returns null for NaN inputs", () => {
    expect(skewImagePlaneIntercept(NaN, 0, 0, 0, 5, 85)).toBeNull();
    expect(skewImagePlaneIntercept(0, 0, NaN, 0, 5, 85)).toBeNull();
  });
});

describe("traceChiefRelativeSkewRay", () => {
  const L = mkSingleElement();

  it("launches the ray at the correct pupil coordinates", () => {
    const epSD = 10;
    const yChief = 2;
    const fieldSlope = -0.05;

    // Trace with xFraction=0.5, yFraction=0.3
    const result = traceChiefRelativeSkewRay(0.5, 0.3, yChief, fieldSlope, epSD, 0, 0, 15, false, L);

    // The chief-relative wrapper should produce a non-clipped result for modest fractions
    expect(result.clipped).toBe(false);
    expect(isFinite(result.x)).toBe(true);
    expect(isFinite(result.y)).toBe(true);
  });

  it("matches traceSkewRay with equivalent manual launch coordinates", () => {
    const epSD = 10;
    const yChief = 1;
    const fieldSlope = -0.03;
    const xFrac = 0.4;
    const yFrac = 0.2;

    const viaWrapper = traceChiefRelativeSkewRay(xFrac, yFrac, yChief, fieldSlope, epSD, 0, 0, 15, false, L);
    const viaDirect = traceSkewRay(xFrac * epSD, yChief + yFrac * epSD, 0, fieldSlope, 0, 0, 15, false, L);

    expect(viaWrapper.x).toBeCloseTo(viaDirect.x, 12);
    expect(viaWrapper.y).toBeCloseTo(viaDirect.y, 12);
    expect(viaWrapper.ux).toBeCloseTo(viaDirect.ux, 12);
    expect(viaWrapper.uy).toBeCloseTo(viaDirect.uy, 12);
  });
});

describe("traceSkewRay with non-trivial initial x-slope", () => {
  const L = mkSingleElement();

  it("produces different x output when launched with nonzero ux", () => {
    const withUx = traceSkewRay(3, 0, 0.05, 0, 0, 0, 15, false, L);
    const withoutUx = traceSkewRay(3, 0, 0, 0, 0, 0, 15, false, L);

    // Nonzero initial x-slope should deflect the ray differently
    expect(withUx.x).not.toBeCloseTo(withoutUx.x, 6);
    expect(withUx.ux).not.toBeCloseTo(withoutUx.ux, 6);
  });

  it("preserves symmetry for opposite initial x-slopes", () => {
    const positive = traceSkewRay(3, 0, 0.05, 0, 0, 0, 15, false, L);
    const negative = traceSkewRay(3, 0, -0.05, 0, 0, 0, 15, false, L);

    // For a rotationally symmetric system, mirroring ux should mirror the output x
    // but y should remain the same since the surface is symmetric
    expect(positive.y).toBeCloseTo(negative.y, 8);
  });
});

describe("skew-meridional cross-validation on multi-element lenses", () => {
  it("matches meridional trace for multiple heights on Apo-Lanthar 50/2", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const stopSD = L.stopPhysSD;

    for (const h of [1, 3, 6, 9]) {
      const skew = traceSkewRay(0, h, 0, 0, 0, 0, stopSD, false, L);
      const meridional = traceRay(h, 0, zPos, 0, 0, stopSD, false, L);

      if (meridional.clipped) {
        expect(skew.clipped).toBe(true);
        continue;
      }

      expect(skew.x).toBeCloseTo(0, 8);
      expect(skew.y).toBeCloseTo(meridional.y, 6);
      expect(skew.ux).toBeCloseTo(0, 8);
      expect(skew.uy).toBeCloseTo(meridional.u, 6);
      expect(skew.clipped).toBe(meridional.clipped);
    }
  });

  it("matches meridional trace for multiple heights on Sonnar 50/1.5", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const stopSD = L.stopPhysSD;

    for (const h of [2, 5, 10]) {
      const skew = traceSkewRay(0, h, 0, 0, 0, 0, stopSD, false, L);
      const meridional = traceRay(h, 0, zPos, 0, 0, stopSD, false, L);

      if (meridional.clipped) {
        expect(skew.clipped).toBe(true);
        continue;
      }

      expect(skew.y).toBeCloseTo(meridional.y, 6);
      expect(skew.uy).toBeCloseTo(meridional.u, 6);
    }
  });

  it("preserves rotational symmetry for mirrored x on a real lens", () => {
    const L = build(ApoLantharRaw);

    const positive = traceSkewRay(4, 2, 0, -0.03, 0, 0, L.stopPhysSD, false, L);
    const negative = traceSkewRay(-4, 2, 0, -0.03, 0, 0, L.stopPhysSD, false, L);

    expect(positive.x).toBeCloseTo(-negative.x, 8);
    expect(positive.y).toBeCloseTo(negative.y, 8);
    expect(positive.ux).toBeCloseTo(-negative.ux, 8);
    expect(positive.uy).toBeCloseTo(negative.uy, 8);
  });

  it("produces zero x-displacement for sagittal bundle at center field", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const currentEPSD = L.EP.epSD * 0.6;
    const currentPhysStopSD = L.stopPhysSD * 0.6;

    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0);
    expect(geometry).not.toBeNull();

    const bundle = traceOrthogonalOffAxisBundle("sagittal", 11, geometry!, L, 0, 0, currentEPSD, currentPhysStopSD);
    expect(bundle).not.toBeNull();

    // At center field, sagittal rays should have symmetric x-displacement
    // The chief ray should have zero x
    expect(bundle!.chiefRay.imagePoint.x).toBeCloseTo(0, 8);

    // Weighted average of x-displacements should be near zero (rotational symmetry)
    const avgX = bundle!.samples.reduce((sum, s) => sum + s.imagePoint.x, 0) / bundle!.samples.length;
    expect(avgX).toBeCloseTo(0, 6);
  });
});

describe("traceSkewRayChromatic", () => {
  it("matches the chromatic meridional trace in the tangential plane", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);

    for (const channel of ["R", "G", "B"] as const) {
      const skew = traceSkewRayChromatic(0, 5, 0, 0, 0, 0, L.stopPhysSD, false, L, channel);
      const meridional = traceRayChromatic(5, 0, zPos, 0, 0, L.stopPhysSD, false, L, channel);

      if (meridional.clipped) {
        expect(skew.clipped).toBe(true);
        continue;
      }

      expect(skew.x).toBeCloseTo(0, 8);
      expect(skew.y).toBeCloseTo(meridional.y, 6);
      expect(skew.uy).toBeCloseTo(meridional.u, 6);
    }
  });

  it("produces different R and B intercepts for a dispersive lens", () => {
    const L = build(Sonnar50f15Raw);

    const redSkew = traceSkewRayChromatic(0, 5, 0, 0, 0, 0, L.stopPhysSD, false, L, "R");
    const blueSkew = traceSkewRayChromatic(0, 5, 0, 0, 0, 0, L.stopPhysSD, false, L, "B");

    expect(redSkew.clipped).toBe(false);
    expect(blueSkew.clipped).toBe(false);
    // R and B should refract differently due to dispersion
    expect(redSkew.y).not.toBeCloseTo(blueSkew.y, 6);
    expect(redSkew.uy).not.toBeCloseTo(blueSkew.uy, 6);
  });

  it("produces identical results to traceSkewRay for channel G (d-line)", () => {
    const L = build(ApoLantharRaw);

    const chromatic = traceSkewRayChromatic(3, 4, 0.01, -0.02, 0, 0, L.stopPhysSD, false, L, "G");
    const monochromatic = traceSkewRay(3, 4, 0.01, -0.02, 0, 0, L.stopPhysSD, false, L);

    expect(chromatic.x).toBeCloseTo(monochromatic.x, 10);
    expect(chromatic.y).toBeCloseTo(monochromatic.y, 10);
    expect(chromatic.ux).toBeCloseTo(monochromatic.ux, 10);
    expect(chromatic.uy).toBeCloseTo(monochromatic.uy, 10);
  });
});
