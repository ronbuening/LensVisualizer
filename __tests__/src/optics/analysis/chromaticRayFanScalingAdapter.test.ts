import { describe, expect, it } from "vitest";
import {
  REFERENCE_FAN_IMAGE_HEIGHT_SPREAD_MM,
  computeChromaticBarOffsets,
  REFERENCE_LOCA_MM,
  computeLocaBarOffsets,
} from "../../../../src/optics/analysis/chromatic/rayFanScaling.js";

describe("LoCA scaling reference contract", () => {
  it("retains the generic fan reference, channel order and signed-zero offsets", () => {
    expect(REFERENCE_FAN_IMAGE_HEIGHT_SPREAD_MM).toBe(0.01);
    const bars = computeChromaticBarOffsets(
      { V: 0.01, B: -0.01, G: -0, R: 0 },
      0,
      200,
      2,
      REFERENCE_FAN_IMAGE_HEIGHT_SPREAD_MM,
    );
    expect(Object.keys(bars.barOffsets)).toEqual(["R", "G", "B", "V"]);
    expect(bars.barOffsets).toEqual({ R: 0, G: -0, B: -70, V: 70 });
    expect(bars.mag).toBe(3500);
    expect(bars.clamped).toBe(false);
    const clamped = computeChromaticBarOffsets({ R: -0.1, B: 0.1 }, 0, 200, 2, REFERENCE_FAN_IMAGE_HEIGHT_SPREAD_MM);
    expect(clamped).toEqual({ barOffsets: { R: -100, B: 100 }, mag: 500, clamped: true });
  });

  it("maps intercept differences to pixel offsets around the reference intercept", () => {
    const result = computeLocaBarOffsets({ R: -0.05, G: 0, B: 0.05 }, 0, 200, 2);

    expect(REFERENCE_LOCA_MM).toBe(0.15);
    expect(result.clamped).toBe(false);
    expect(result.barOffsets.G).toBe(0);
    expect(result.barOffsets.R).toBeCloseTo(-70 / 3, 10);
    expect(result.barOffsets.B).toBeCloseTo(70 / 3, 10);
    expect(result.barOffsets.V).toBeUndefined();
  });

  it("clamps large offsets to half the viewport width", () => {
    const result = computeLocaBarOffsets({ R: -1, B: 1 }, 0, 120, 1);

    expect(result.clamped).toBe(true);
    expect(Math.abs(result.barOffsets.R ?? 0)).toBeCloseTo(60, 10);
    expect(Math.abs(result.barOffsets.B ?? 0)).toBeCloseTo(60, 10);
    expect(result.mag).toBeLessThan((60 * 0.7) / REFERENCE_LOCA_MM);
  });

  it("supports empty and zero-width inputs without inventing channels", () => {
    expect(computeLocaBarOffsets({}, 0, 200, 1)).toMatchObject({
      barOffsets: {},
      clamped: false,
    });

    const zeroWidth = computeLocaBarOffsets({ R: 1 }, 0, 0, 1);
    expect(zeroWidth.barOffsets.R).toBe(0);
    expect(zeroWidth.mag).toBe(0);
    expect(zeroWidth.clamped).toBe(false);
  });
});
