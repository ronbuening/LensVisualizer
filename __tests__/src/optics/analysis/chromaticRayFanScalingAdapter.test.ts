import { describe, expect, it } from "vitest";
import { REFERENCE_LOCA_MM_2, computeLocaBarOffsets2 } from "../../../../src/optics/analysis/chromaticRayFanScaling.js";

describe("LoCA scaling analysis adapter", () => {
  it("maps intercept differences to pixel offsets around the reference intercept", () => {
    const result = computeLocaBarOffsets2({ R: -0.05, G: 0, B: 0.05 }, 0, 200, 2);

    expect(REFERENCE_LOCA_MM_2).toBe(0.15);
    expect(result.clamped).toBe(false);
    expect(result.barOffsets.G).toBe(0);
    expect(result.barOffsets.R).toBeCloseTo(-70 / 3, 10);
    expect(result.barOffsets.B).toBeCloseTo(70 / 3, 10);
    expect(result.barOffsets.V).toBeUndefined();
  });

  it("clamps large offsets to half the viewport width", () => {
    const result = computeLocaBarOffsets2({ R: -1, B: 1 }, 0, 120, 1);

    expect(result.clamped).toBe(true);
    expect(Math.abs(result.barOffsets.R ?? 0)).toBeCloseTo(60, 10);
    expect(Math.abs(result.barOffsets.B ?? 0)).toBeCloseTo(60, 10);
    expect(result.mag).toBeLessThan((60 * 0.7) / REFERENCE_LOCA_MM_2);
  });

  it("supports empty and zero-width inputs without inventing channels", () => {
    expect(computeLocaBarOffsets2({}, 0, 200, 1)).toMatchObject({
      barOffsets: {},
      clamped: false,
    });

    const zeroWidth = computeLocaBarOffsets2({ R: 1 }, 0, 0, 1);
    expect(zeroWidth.barOffsets.R).toBe(0);
    expect(zeroWidth.mag).toBe(0);
    expect(zeroWidth.clamped).toBe(false);
  });
});
