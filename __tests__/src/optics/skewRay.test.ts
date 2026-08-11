import { describe, expect, it } from "vitest";
import {
  computeChromaticRayFanSpread,
  doLayout,
  sampleCircularPupil,
  sampleOrthogonalPupilFan,
  skewImagePlaneIntercept,
  traceChiefRelativeSkewRay,
  traceChiefRelativeSkewRayChromatic,
  traceRay,
  traceRayChromatic,
  traceSkewRay,
  traceSkewRayChromatic,
} from "../../../src/optics/optics.js";
import {
  traceRay as traceRayFacade,
  traceRayChromatic as traceRayChromaticFacade,
  traceRayVector as traceRayVectorFacade,
  traceRayVectorChromatic as traceRayVectorChromaticFacade,
  traceSkewRay as traceSkewRayFacade,
  traceSkewRayVector as traceSkewRayVectorFacade,
  traceSkewRayVectorChromatic as traceSkewRayVectorChromaticFacade,
  wavelengthNd,
} from "../../../src/optics/rayTrace.js";
import { computeOffAxisFieldGeometry, traceOrthogonalOffAxisBundle } from "../../../src/optics/aberration/offAxis.js";
import {
  buildChromaticPositiveElementLens,
  buildSimplePositiveElementLens,
  sharedApoLanthar50f2,
  sharedSonnar50f15,
} from "./testLensFixtures.js";

describe("traceSkewRay", () => {
  const L = buildSimplePositiveElementLens("test-skew-single-element");
  const { z: zPos, imgZ: imagePlaneZ } = doLayout(0, 0, L);
  const lastSurfZ = zPos[L.N - 1];

  it.each([[true], [false]])("marks skew rays clipped when they exceed the stop radius (ghost=%s)", (ghost) => {
    const clipped = traceSkewRay(20, 0, 0, 0, 0, 0, 15, ghost, L);
    expect(clipped.clipped).toBe(true);
  });

  it("projects finite skew axialIntercepts to the image plane", () => {
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

  it("normalizes invalid circular pupil ring counts before weighting", () => {
    const samples = sampleCircularPupil([0, -2, Number.NaN, 4.6]);
    const totalWeight = samples.reduce((sum, sample) => sum + sample.weight, 0);

    expect(samples).toHaveLength(7);
    expect(totalWeight).toBeCloseTo(1, 10);
    expect(samples.every((sample) => Number.isFinite(sample.xFraction))).toBe(true);
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
  const L = buildSimplePositiveElementLens("test-chief-relative-skew-single-element");

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

  it("routes chromatic chief-relative launches through the channel adapter", () => {
    const Lchrom = buildChromaticPositiveElementLens("test-chief-relative-skew-chromatic");
    const viaWrapper = traceChiefRelativeSkewRayChromatic(0.25, -0.2, 1.5, -0.02, 8, 0, 0, 15, false, Lchrom, "B");
    const viaDirect = traceSkewRayChromatic(2, -0.1, 0, -0.02, 0, 0, 15, false, Lchrom, "B");

    expect(viaWrapper.x).toBeCloseTo(viaDirect.x, 12);
    expect(viaWrapper.y).toBeCloseTo(viaDirect.y, 12);
    expect(viaWrapper.ux).toBeCloseTo(viaDirect.ux, 12);
    expect(viaWrapper.uy).toBeCloseTo(viaDirect.uy, 12);
  });
});

describe("rayTrace facade adapters", () => {
  const L = buildChromaticPositiveElementLens("test-ray-trace-facade-adapters");
  const { z: zPos } = doLayout(0, 0, L);

  it("keeps direct meridional facade results aligned with the public optics wrapper", () => {
    const viaFacade = traceRayFacade(2, -0.01, zPos, 0, 0, L.stopPhysSD, true, L);
    const viaPublic = traceRay(2, -0.01, zPos, 0, 0, L.stopPhysSD, true, L);

    expect(viaFacade.y).toBeCloseTo(viaPublic.y, 12);
    expect(viaFacade.u).toBeCloseTo(viaPublic.u, 12);
    expect(viaFacade.clipped).toBe(viaPublic.clipped);
    expect(viaFacade.pts.length).toBeGreaterThan(1);
  });

  it("traces chromatic and vector launches through the direct facade", () => {
    const theta = (3 * Math.PI) / 180;
    const direction: [number, number, number] = [0, -Math.sin(theta), Math.cos(theta)];
    const origin: [number, number, number] = [0, 0.5, zPos[0]];

    const chromatic = traceRayChromaticFacade(0.5, -Math.tan(theta), zPos, 0, 0, L.stopPhysSD, true, L, "R");
    const vector = traceRayVectorFacade({ origin, direction }, zPos, L.stopPhysSD, true, L);
    const vectorChromatic = traceRayVectorChromaticFacade({ origin, direction }, zPos, L.stopPhysSD, true, L, "R");

    expect(chromatic.clipped).toBe(false);
    expect(vector.y).toBeCloseTo(traceRayFacade(0.5, -Math.tan(theta), zPos, 0, 0, L.stopPhysSD, true, L).y, 10);
    expect(vectorChromatic.y).toBeCloseTo(chromatic.y, 10);
    expect(vectorChromatic.pts.length).toBeGreaterThan(1);
  });

  it("traces skew vector launches and chromatic skew vector launches", () => {
    const ux = 0.015;
    const uy = -0.02;
    const length = Math.hypot(ux, uy, 1);
    const direction: [number, number, number] = [ux / length, uy / length, 1 / length];
    const origin: [number, number, number] = [0.3, 0.4, zPos[0]];

    const skew = traceSkewRayFacade(0.3, 0.4, ux, uy, 0, 0, L.stopPhysSD, false, L);
    const vector = traceSkewRayVectorFacade({ origin, direction }, zPos, L.stopPhysSD, false, L);
    const chromaticVector = traceSkewRayVectorChromaticFacade({ origin, direction }, zPos, L.stopPhysSD, false, L, "B");

    expect(vector.x).toBeCloseTo(skew.x, 10);
    expect(vector.y).toBeCloseTo(skew.y, 10);
    expect(vector.ux).toBeCloseTo(skew.ux, 10);
    expect(vector.uy).toBeCloseTo(skew.uy, 10);
    expect(chromaticVector.clipped).toBe(false);
    expect(Number.isFinite(chromaticVector.x)).toBe(true);
  });
});

describe("chromatic fallback helpers", () => {
  it("orders fallback refractive indices by wavelength channel", () => {
    const red = wavelengthNd(1.5, 50, "R");
    const green = wavelengthNd(1.5, 50, "G");
    const blue = wavelengthNd(1.5, 50, "B");
    const violet = wavelengthNd(1.5, 50, "V");

    expect(wavelengthNd(1, 50, "B")).toBe(1);
    expect(wavelengthNd(1.5, undefined, "R")).toBe(1.5);
    expect(red).toBeLessThan(green);
    expect(green).toBeLessThan(blue);
    expect(blue).toBeLessThan(violet);
  });

  it("measures chromatic spread while omitting clipped and zero-slope axialIntercepts", () => {
    const spread = computeChromaticRayFanSpread(
      {
        R: { y: 1, u: -0.1, clipped: false },
        G: { y: 0.5, u: 0, clipped: false },
        B: { y: 5, u: -0.2, clipped: true },
        V: { y: -0.2, u: 0.1, clipped: false },
      },
      20,
      10,
    );

    expect(spread.axialIntercepts.R).toBeCloseTo(20, 10);
    expect(spread.axialIntercepts.G).toBeUndefined();
    expect(spread.axialIntercepts.B).toBeUndefined();
    expect(spread.axialIntercepts.V).toBeCloseTo(12, 10);
    expect(spread.axialInterceptSpreadMm).toBeCloseTo(8, 10);
    expect(spread.imagePlaneHeightSpreadMm).toBeCloseTo(0.8, 10);
  });
});

describe("traceSkewRay with non-trivial initial x-slope", () => {
  const L = buildSimplePositiveElementLens("test-skew-x-slope-single-element");

  it("produces different x output when launched with nonzero ux", () => {
    const withUx = traceSkewRay(3, 0, 0.05, 0, 0, 0, 15, false, L);
    const withoutUx = traceSkewRay(3, 0, 0, 0, 0, 0, 15, false, L);

    // Nonzero initial x-slope should deflect the ray differently
    expect(withUx.x).not.toBeCloseTo(withoutUx.x, 6);
    expect(withUx.ux).not.toBeCloseTo(withoutUx.ux, 6);
  });
});

describe("skew-meridional cross-validation", () => {
  /* Tangential-plane skew launches must reduce to the meridional trace. One
     sweep covers the union of the previously separate per-lens/per-height
     tests; per-height digits preserve each original tolerance. */
  it.each([
    {
      label: "single positive element",
      make: () => buildSimplePositiveElementLens("test-skew-single-element"),
      stopSD: 15 as number | undefined,
      axisDigits: 10,
      heights: [
        [0, 10],
        [0.1, 10],
        [5, 8],
      ] as const,
    },
    {
      label: "Apo-Lanthar 50/2",
      make: sharedApoLanthar50f2,
      stopSD: undefined as number | undefined,
      axisDigits: 8,
      heights: [
        [1, 6],
        [3, 6],
        [6, 6],
        [9, 6],
      ] as const,
    },
    {
      label: "Sonnar 50/1.5",
      make: sharedSonnar50f15,
      stopSD: undefined as number | undefined,
      axisDigits: 8,
      heights: [
        [2, 6],
        [5, 6],
        [10, 6],
      ] as const,
    },
  ])("matches the meridional trace in the tangential plane on $label", ({ make, stopSD, axisDigits, heights }) => {
    const L = make();
    const { z: zPos } = doLayout(0, 0, L);
    const stop = stopSD ?? L.stopPhysSD;

    for (const [h, digits] of heights) {
      const skew = traceSkewRay(0, h, 0, 0, 0, 0, stop, false, L);
      const meridional = traceRay(h, 0, zPos, 0, 0, stop, false, L);

      if (meridional.clipped) {
        expect(skew.clipped).toBe(true);
        continue;
      }

      expect(skew.x).toBeCloseTo(0, axisDigits);
      expect(skew.y).toBeCloseTo(meridional.y, digits);
      expect(skew.ux).toBeCloseTo(0, axisDigits);
      expect(skew.uy).toBeCloseTo(meridional.u, digits);
      expect(skew.clipped).toBe(meridional.clipped);
    }
  });

  it.each([
    {
      label: "mirrored sagittal rays on the single positive element",
      make: () => buildSimplePositiveElementLens("test-skew-single-element"),
      stopSD: 15 as number | undefined,
      positive: [3, 1, 0, -0.04] as const,
      negative: [-3, 1, 0, -0.04] as const,
      fullMirror: true,
    },
    {
      // With y=0 and uy=0 both rays stay in the x-z plane, so only the
      // y-equality half of the mirror relation is asserted (as originally).
      label: "opposite initial x-slopes on the single positive element",
      make: () => buildSimplePositiveElementLens("test-skew-x-slope-single-element"),
      stopSD: 15 as number | undefined,
      positive: [3, 0, 0.05, 0] as const,
      negative: [3, 0, -0.05, 0] as const,
      fullMirror: false,
    },
    {
      label: "mirrored x on the Apo-Lanthar 50/2",
      make: sharedApoLanthar50f2,
      stopSD: undefined as number | undefined,
      positive: [4, 2, 0, -0.03] as const,
      negative: [-4, 2, 0, -0.03] as const,
      fullMirror: true,
    },
  ])("preserves rotational symmetry for $label", ({ make, stopSD, positive, negative, fullMirror }) => {
    const L = make();
    const stop = stopSD ?? L.stopPhysSD;
    const positiveTrace = traceSkewRay(positive[0], positive[1], positive[2], positive[3], 0, 0, stop, false, L);
    const negativeTrace = traceSkewRay(negative[0], negative[1], negative[2], negative[3], 0, 0, stop, false, L);

    expect(positiveTrace.y).toBeCloseTo(negativeTrace.y, 8);
    if (fullMirror) {
      expect(positiveTrace.x).toBeCloseTo(-negativeTrace.x, 8);
      expect(positiveTrace.ux).toBeCloseTo(-negativeTrace.ux, 8);
      expect(positiveTrace.uy).toBeCloseTo(negativeTrace.uy, 8);
    }
  });

  it("produces zero x-displacement for sagittal bundle at center field", () => {
    const L = sharedApoLanthar50f2();
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
    const L = sharedSonnar50f15();
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

  it("produces different R and B axialIntercepts for a dispersive lens", () => {
    const L = sharedSonnar50f15();

    const redSkew = traceSkewRayChromatic(0, 5, 0, 0, 0, 0, L.stopPhysSD, false, L, "R");
    const blueSkew = traceSkewRayChromatic(0, 5, 0, 0, 0, 0, L.stopPhysSD, false, L, "B");

    expect(redSkew.clipped).toBe(false);
    expect(blueSkew.clipped).toBe(false);
    // R and B should refract differently due to dispersion
    expect(redSkew.y).not.toBeCloseTo(blueSkew.y, 6);
    expect(redSkew.uy).not.toBeCloseTo(blueSkew.uy, 6);
  });

  // Apo-Lanthar tolerance reflects data rounding: when an element's `glass` resolves in the
  // catalog, Sellmeier-at-d-line can differ from the lens-data-stored `nd` by ~1e-4 per surface
  // (the precision at which patent values are typically transcribed), and across a 10-
  // element trace this accumulates to a few-thousandths-of-a-mm path difference. The
  // chromatic engine is intentionally self-consistent with the catalog, not with the
  // rounded scalar nd. Tolerance 1e-2 mm absorbs the accumulated transcription rounding
  // while still catching meaningful divergence (the safety net in dispersion.ts rejects
  // catalog matches that disagree with the authored nd/vd beyond the runtime compatibility window).
  it.each([
    {
      label: "the Apo-Lanthar 50/2 (catalog-resolved glasses, transcription-rounding tolerance)",
      make: sharedApoLanthar50f2,
      launch: [3, 4, 0.01, -0.02] as const,
      digits: { x: 2, y: 2, ux: 2, uy: 2 },
    },
    {
      label: "the Sonnar 50/1.5",
      make: sharedSonnar50f15,
      launch: [0, 5, 0, 0] as const,
      digits: { x: 8, y: 6, ux: 8, uy: 6 },
    },
  ])("matches monochromatic skew tracing at channel G on $label", ({ make, launch, digits }) => {
    const L = make();

    const chromatic = traceSkewRayChromatic(
      launch[0],
      launch[1],
      launch[2],
      launch[3],
      0,
      0,
      L.stopPhysSD,
      false,
      L,
      "G",
    );
    const monochromatic = traceSkewRay(launch[0], launch[1], launch[2], launch[3], 0, 0, L.stopPhysSD, false, L);

    expect(chromatic.x).toBeCloseTo(monochromatic.x, digits.x);
    expect(chromatic.y).toBeCloseTo(monochromatic.y, digits.y);
    expect(chromatic.ux).toBeCloseTo(monochromatic.ux, digits.ux);
    expect(chromatic.uy).toBeCloseTo(monochromatic.uy, digits.uy);
  });
});
