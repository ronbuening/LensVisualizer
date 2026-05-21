import { describe, expect, it } from "vitest";
import {
  isHeavyLensForRayWork,
  rayFractionsForDensity,
  raySampleCountForDensity,
} from "../../../src/optics/raySampling.js";
import buildLens from "../../../src/optics/buildLens.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

function expectSymmetric(fractions: number[]) {
  for (let i = 0; i < fractions.length; i++) {
    const mirror = fractions[fractions.length - 1 - i]!;
    expect(fractions[i]! + mirror).toBeCloseTo(0, 12);
  }
}

describe("raySampling", () => {
  it("preserves normal ray fractions exactly", () => {
    const normal = [-0.83, -0.5, -0.17, 0.17, 0.5, 0.83];
    expect(rayFractionsForDensity(normal, "normal")).toEqual(normal);
  });

  it("creates at least twice as many dense samples", () => {
    const normal = [-0.83, -0.5, -0.17, 0.17, 0.5, 0.83];
    const dense = rayFractionsForDensity(normal, "dense");
    expect(dense.length).toBeGreaterThanOrEqual(normal.length * 2);
    expectSymmetric(dense);
  });

  it("creates at least three times as many diagnostic samples", () => {
    const normal = [-0.75, -0.375, 0, 0.375, 0.75];
    const diagnostic = rayFractionsForDensity(normal, "diagnostic");
    expect(diagnostic.length).toBeGreaterThanOrEqual(normal.length * 3);
    expectSymmetric(diagnostic);
  });

  it("preserves a chief ray when the normal fan has one", () => {
    const normal = [-0.75, -0.375, 0, 0.375, 0.75];
    const dense = rayFractionsForDensity(normal, "dense");
    expect(dense.some((f) => f === 0)).toBe(true);
    expect(dense.length % 2).toBe(1);
  });

  it("keeps no-chief symmetric fans even-sized so they do not add a chief ray", () => {
    const normal = [-0.83, -0.5, -0.17, 0.17, 0.5, 0.83];
    const diagnostic = rayFractionsForDensity(normal, "diagnostic");
    expect(diagnostic.length % 2).toBe(0);
    expect(diagnostic.some((f) => f === 0)).toBe(false);
  });

  it("reports sample counts through the shared helper", () => {
    const normal = [-0.75, -0.375, 0, 0.375, 0.75];
    expect(raySampleCountForDensity(normal, "normal")).toBe(5);
    expect(raySampleCountForDensity(normal, "dense")).toBeGreaterThanOrEqual(10);
    expect(raySampleCountForDensity(normal, "diagnostic")).toBeGreaterThanOrEqual(15);
  });
});

describe("isHeavyLensForRayWork", () => {
  it("returns false for an ordinary rectilinear 50mm prime", () => {
    const L = buildLens(LENS_CATALOG["nokton-50f1"]);
    expect(isHeavyLensForRayWork(L)).toBe(false);
  });

  it("returns true for a fisheye lens regardless of size", () => {
    const L = buildLens(LENS_CATALOG["nikon-fisheye-nikkor-6mm-f28"]);
    expect(isHeavyLensForRayWork(L)).toBe(true);
  });

  it("returns true when any single criterion is met", () => {
    const baseline = {
      projection: { kind: "rectilinear" },
      N: 10,
      maxSD: 20,
      halfField: 20,
    } as const;
    expect(isHeavyLensForRayWork(baseline)).toBe(false);

    expect(isHeavyLensForRayWork({ ...baseline, N: 32 })).toBe(true);
    expect(isHeavyLensForRayWork({ ...baseline, maxSD: 50 })).toBe(true);
    expect(isHeavyLensForRayWork({ ...baseline, halfField: 40 })).toBe(true);
    expect(
      isHeavyLensForRayWork({
        ...baseline,
        projection: { kind: "fisheye-equidistant", focalLengthMm: 6, fullFieldDeg: 180 },
      }),
    ).toBe(true);
  });
});
