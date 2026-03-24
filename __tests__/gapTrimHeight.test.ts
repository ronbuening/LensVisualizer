import { describe, it, expect } from "vitest";
import { gapTrimHeight, renderSag } from "../src/optics/optics.js";
import type { RuntimeLens, AsphericCoefficients } from "../src/types/optics.js";

/**
 * Minimal lens-like object for gapTrimHeight tests.
 * gapTrimHeight needs: L.gapSagFrac, L.S[surfIdx].R, L.asphByIdx[surfIdx]
 */
function makeLens(R: number, gapSagFrac: number = 0.9, asph: AsphericCoefficients | null = null): RuntimeLens {
  return {
    gapSagFrac,
    S: [{ R }],
    asphByIdx: { 0: asph },
  } as unknown as RuntimeLens;
}

describe("gapTrimHeight", () => {
  it("returns sd unchanged when sag fits within maxSag", () => {
    // R=100, sd=10 → sag ≈ 0.50 mm, well within maxSag=5
    const L = makeLens(100);
    expect(gapTrimHeight(0, 10, 5, L)).toBe(10);
  });

  it("returns sd unchanged when maxSag <= 0", () => {
    const L = makeLens(20);
    expect(gapTrimHeight(0, 15, 0, L)).toBe(15);
    expect(gapTrimHeight(0, 15, -1, L)).toBe(15);
  });

  it("returns sd unchanged when gapSagFrac <= 0", () => {
    const L = makeLens(20, 0);
    expect(gapTrimHeight(0, 15, 0.5, L)).toBe(15);
  });

  it("trims height when sag exceeds maxSag", () => {
    // R=20, sd=15 → sag ≈ 6.4 mm. With maxSag=2, must trim.
    const L = makeLens(20);
    const trimmed = gapTrimHeight(0, 15, 2, L);
    expect(trimmed).toBeLessThan(15);
    expect(trimmed).toBeGreaterThan(0);
    // Verify the trimmed height has sag ≈ maxSag
    expect(Math.abs(renderSag(trimmed, 0, L))).toBeCloseTo(2, 1);
  });

  it("trims height for negative R (concave surface)", () => {
    // R=-20, sd=15 → sag ≈ -6.4 mm. |sag| > maxSag=2 → trim
    const L = makeLens(-20);
    const trimmed = gapTrimHeight(0, 15, 2, L);
    expect(trimmed).toBeLessThan(15);
    expect(trimmed).toBeGreaterThan(0);
    expect(Math.abs(renderSag(trimmed, 0, L))).toBeCloseTo(2, 1);
  });

  it("works with aspherical surfaces", () => {
    const asph = { K: -1.5, A4: 1e-5, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
    const L = makeLens(30, 0.9, asph);
    const sd = 12;
    const sagAtSd = Math.abs(renderSag(sd, 0, L));
    // Only trim if sag exceeds threshold
    if (sagAtSd > 1.0) {
      const trimmed = gapTrimHeight(0, sd, 1.0, L);
      expect(trimmed).toBeLessThan(sd);
      expect(Math.abs(renderSag(trimmed, 0, L))).toBeCloseTo(1.0, 1);
    }
  });

  it("converges precisely via bisection", () => {
    // Use a strongly curved surface for precision test
    const L = makeLens(15);
    const maxSag = 1.5;
    const trimmed = gapTrimHeight(0, 14, maxSag, L);
    // 30 bisection iterations → precision better than 1e-8
    expect(Math.abs(Math.abs(renderSag(trimmed, 0, L)) - maxSag)).toBeLessThan(1e-6);
  });

  it("returns flat surface sd unchanged (zero sag always)", () => {
    const L = makeLens(1e15); // flat
    expect(gapTrimHeight(0, 20, 0.1, L)).toBe(20);
  });
});
