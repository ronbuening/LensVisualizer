import { describe, expect, it } from "vitest";
import {
  intersectSagSurface,
  normalizeVector3,
  surfaceNormalAtHit,
  type SurfaceIntersectionRay,
} from "../src/optics/internal/surfaceIntersection.js";
import { conicPolySag, sag } from "../src/optics/internal/surfaceMath.js";
import type { AsphericCoefficients, RuntimeLens } from "../src/types/optics.js";

function lensWithSurface(R: number, asph?: AsphericCoefficients): RuntimeLens {
  return {
    S: [{ R, nd: 1.5, sd: 20, d: 5 }],
    asphByIdx: asph ? { 0: asph } : {},
  } as unknown as RuntimeLens;
}

function axialRay(y: number, z = -5): SurfaceIntersectionRay {
  return { origin: [0, y, z], direction: [0, 0, 1] };
}

describe("surface intersection helpers", () => {
  it("normalizes finite 3D direction vectors", () => {
    expect(normalizeVector3([3, 4, 0])).toEqual([0.6, 0.8, 0]);
    expect(normalizeVector3([0, 0, 0])).toBeNull();
  });

  it("intersects a flat surface analytically", () => {
    const L = lensWithSurface(1e15);
    const result = intersectSagSurface(axialRay(2), 0, 0, L, { maxT: 10, refractiveIndex: 1.5 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.t).toBeCloseTo(5, 12);
    expect(result.point).toEqual([0, 2, 0]);
    expect(result.radius).toBeCloseTo(2, 12);
    expect(result.normal).toEqual([0, 0, 1]);
    expect(result.segmentLength).toBeCloseTo(5, 12);
    expect(result.opticalPathLength).toBeCloseTo(7.5, 12);
  });

  it("intersects a spherical sag surface at the analytic axial-ray sag", () => {
    const R = 50;
    const h = 10;
    const L = lensWithSurface(R);
    const result = intersectSagSurface(axialRay(h), 0, 0, L, { maxT: 20 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.point[2]).toBeCloseTo(sag(h, R), 10);
    expect(result.t).toBeCloseTo(5 + sag(h, R), 10);
    expect(Math.abs(result.residual)).toBeLessThan(1e-9);
    expect(result.normal[1]).toBeLessThan(0);
  });

  it("intersects a conic sag surface", () => {
    const asph: AsphericCoefficients = { K: -0.5, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
    const h = 8;
    const L = lensWithSurface(40, asph);
    const result = intersectSagSurface(axialRay(h), 0, 0, L, { maxT: 20 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.point[2]).toBeCloseTo(conicPolySag(h, 40, asph), 10);
    expect(Math.abs(result.residual)).toBeLessThan(1e-9);
  });

  it("intersects a polynomial aspheric sag surface", () => {
    const asph: AsphericCoefficients = { K: 0, A4: 1e-3, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
    const L = lensWithSurface(1e15, asph);
    const result = intersectSagSurface({ origin: [2, 0, -1], direction: [0, 0, 1] }, 0, 0, L, { maxT: 5 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.radius).toBeCloseTo(2, 12);
    expect(result.point[2]).toBeCloseTo(0.016, 12);
    expect(result.t).toBeCloseTo(1.016, 12);
  });

  it("reports no bracket when the bounded segment cannot reach the surface", () => {
    const L = lensWithSurface(1e15);
    const result = intersectSagSurface(axialRay(0), 0, 10, L, { maxT: 5 });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.failureReason).toBe("noBracket");
  });

  it("reports no convergence when iteration budget is exhausted", () => {
    const L = lensWithSurface(50);
    const result = intersectSagSurface(axialRay(5), 0, 0, L, { maxT: 20, maxIterations: 0 });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.failureReason).toBe("noConvergedIntersection");
  });

  it("rejects rays that do not travel toward increasing z", () => {
    const L = lensWithSurface(1e15);
    const result = intersectSagSurface({ origin: [0, 0, -1], direction: [1, 0, 0] }, 0, 0, L, { maxT: 5 });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.failureReason).toBe("invalidRayDirection");
  });

  it("computes rotationally symmetric normals at hit points", () => {
    const L = lensWithSurface(50);
    const positive = surfaceNormalAtHit(3, 4, 0, L);
    const negative = surfaceNormalAtHit(-3, 4, 0, L);

    expect(positive[0]).toBeCloseTo(-negative[0], 12);
    expect(positive[1]).toBeCloseTo(negative[1], 12);
    expect(positive[2]).toBeCloseTo(negative[2], 12);
  });
});
