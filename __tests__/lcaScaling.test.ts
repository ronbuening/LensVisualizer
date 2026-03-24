import { describe, it, expect } from "vitest";
import { computeLcaBarOffsets, REFERENCE_LCA_MM } from "../src/optics/lcaScaling.js";

describe("computeLcaBarOffsets", () => {
  const SC = 100; // 100 px/mm

  it("produces proportionally wider offsets for larger LCA", () => {
    const small = computeLcaBarOffsets({ R: 50.01, G: 50.0, B: 49.99 }, 50.0, 66, SC);
    const large = computeLcaBarOffsets({ R: 50.1, G: 50.0, B: 49.9 }, 50.0, 66, SC);
    // R offset should be 10× larger in the "large" case
    expect(Math.abs(large.barOffsets.R!)).toBeGreaterThan(Math.abs(small.barOffsets.R!) * 5);
  });

  it("centers the G-line reference at zero offset", () => {
    const result = computeLcaBarOffsets({ R: 50.05, G: 50.0, B: 49.95 }, 50.0, 66, SC);
    expect(result.barOffsets.G).toBeCloseTo(0, 10);
  });

  it("clamps bars that exceed the half-width", () => {
    // REFERENCE_LCA_MM = 0.15, so an offset of 1.0 mm is way beyond reference
    const result = computeLcaBarOffsets({ R: 51.0, G: 50.0, B: 49.0 }, 50.0, 66, SC);
    const halfWidth = 66 / 2;
    expect(Math.abs(result.barOffsets.R!)).toBeLessThanOrEqual(halfWidth + 0.01);
    expect(Math.abs(result.barOffsets.B!)).toBeLessThanOrEqual(halfWidth + 0.01);
    expect(result.clamped).toBe(true);
  });

  it("does not clamp moderate LCA within reference range", () => {
    // Offset of 0.05 mm is well within the 0.15 mm reference
    const result = computeLcaBarOffsets({ R: 50.05, G: 50.0, B: 49.95 }, 50.0, 66, SC);
    expect(result.clamped).toBe(false);
  });

  it("handles two-channel case (R+G only)", () => {
    const result = computeLcaBarOffsets({ R: 50.05, G: 50.0 }, 50.0, 66, SC);
    expect(result.barOffsets.R).toBeDefined();
    expect(result.barOffsets.G).toBeCloseTo(0, 10);
    expect(result.barOffsets.B).toBeUndefined();
  });

  it("scales proportionally with wider view width", () => {
    const narrow = computeLcaBarOffsets({ R: 50.05, G: 50.0, B: 49.95 }, 50.0, 66, SC);
    const wide = computeLcaBarOffsets({ R: 50.05, G: 50.0, B: 49.95 }, 50.0, 132, SC);
    // Double the view width → double the pixel offsets (same LCA, unclamped)
    expect(Math.abs(wide.barOffsets.R!)).toBeCloseTo(Math.abs(narrow.barOffsets.R!) * 2, 1);
  });

  it("returns zero offsets when all channels have the same intercept", () => {
    const result = computeLcaBarOffsets({ R: 50.0, G: 50.0, B: 50.0 }, 50.0, 66, SC);
    expect(result.barOffsets.R).toBeCloseTo(0, 10);
    expect(result.barOffsets.G).toBeCloseTo(0, 10);
    expect(result.barOffsets.B).toBeCloseTo(0, 10);
    expect(result.clamped).toBe(false);
  });

  it("reports a positive magnification", () => {
    const result = computeLcaBarOffsets({ R: 50.05, G: 50.0, B: 49.95 }, 50.0, 66, SC);
    expect(result.mag).toBeGreaterThan(0);
  });

  it("uses REFERENCE_LCA_MM to set base magnification", () => {
    // A channel exactly at REFERENCE_LCA_MM offset should fill ~70% of the half-width
    const viewW = 66;
    const result = computeLcaBarOffsets({ R: 50.0 + REFERENCE_LCA_MM, G: 50.0 }, 50.0, viewW, SC);
    const expectedPx = (viewW / 2) * 0.7; // 70 % of the half-width
    expect(Math.abs(result.barOffsets.R!)).toBeCloseTo(expectedPx, 1);
  });
});
