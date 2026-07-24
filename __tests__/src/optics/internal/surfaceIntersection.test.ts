import { describe, expect, it } from "vitest";
import {
  intersectSagSurface,
  normalizeVector3,
  surfaceNormalAtHit,
  type SurfaceIntersectionRay,
} from "../../../../src/optics/internal/surfaceIntersection.js";
import { conicPolySag, sag } from "../../../../src/optics/internal/surfaceMath.js";
import type { AsphericCoefficients, RuntimeLens } from "../../../../src/types/optics.js";

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

  it("intersects an odd-order aspheric sag surface at the analytic A3 height", () => {
    const asph: AsphericCoefficients = { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0, A3: 1e-3 };
    const L = lensWithSurface(1e15, asph);
    const result = intersectSagSurface({ origin: [2, 0, -1], direction: [0, 0, 1] }, 0, 0, L, { maxT: 5 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.radius).toBeCloseTo(2, 12);
    expect(result.point[2]).toBeCloseTo(1e-3 * 2 ** 3, 12);
    expect(result.t).toBeCloseTo(1.008, 12);
  });

  it("converges for a skew ray on a conic surface with mixed odd/even terms", () => {
    const asph: AsphericCoefficients = {
      K: -0.5,
      A4: 1e-5,
      A6: -2e-8,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
      A3: 5e-5,
      A5: -3e-7,
    };
    const L = lensWithSurface(40, asph);
    const direction = normalizeVector3([0.1, 0.05, 1]);
    expect(direction).not.toBeNull();
    const result = intersectSagSurface({ origin: [0, 0, -10], direction: direction! }, 0, 0, L, { maxT: 25 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.point[2]).toBeCloseTo(conicPolySag(result.radius, 40, asph), 10);
    expect(Math.abs(result.residual)).toBeLessThan(1e-9);
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

  it("reports noBracket when a grazing ray does not actually intersect the surface", () => {
    // Ray traveling in +x at y=0, z=-1: a horizontal line that never reaches
    // the flat surface at z=0. With the post-PR-8 forward-cone gate lifted,
    // the algorithm runs bracket-finding and correctly reports `noBracket`
    // instead of pre-emptively rejecting as `invalidRayDirection`.
    const L = lensWithSurface(1e15);
    const result = intersectSagSurface({ origin: [0, 0, -1], direction: [1, 0, 0] }, 0, 0, L, { maxT: 5 });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.failureReason).toBe("noBracket");
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

describe("intersectSagSurface — past-forward-cone rays (PR 8 surgery)", () => {
  // Spherical surface with R=50, vertex at z=0. Analytic sag at r=21.79 is 5.0
  // (verified: 475 / (50 + sqrt(2500 - 475)) = 475/95 = 5).
  const R = 50;
  const L = lensWithSurface(R);

  it("traces a grazing ray with direction[2] = 0 to the analytic intersection", () => {
    // Ray at z=5, traveling in -y from y=30. Surface z=5 occurs at r=sqrt(475)≈21.79.
    // Expected intersection: t = 30 - sqrt(475), point (0, sqrt(475), 5).
    // Tolerance 1e-8 matches the intersection algorithm's own 1e-9 residual cap.
    const expectedY = Math.sqrt(475);
    const expectedT = 30 - expectedY;
    const result = intersectSagSurface({ origin: [0, 30, 5], direction: [0, -1, 0] }, 0, 0, L, { maxT: 30 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.t).toBeCloseTo(expectedT, 8);
    expect(result.point[0]).toBeCloseTo(0, 12);
    expect(result.point[1]).toBeCloseTo(expectedY, 8);
    expect(result.point[2]).toBeCloseTo(5, 12);
  });

  it("traces a backward ray with direction[2] < 0 to the analytic intersection", () => {
    // Ray at y=30, traveling in -z from z=100. Sphere surface at r=30 has sag=10.
    // Expected intersection: t = 100 - 10 = 90, point (0, 30, 10).
    const result = intersectSagSurface({ origin: [0, 30, 100], direction: [0, 0, -1] }, 0, 0, L, { maxT: 200 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.t).toBeCloseTo(90, 9);
    expect(result.point[0]).toBeCloseTo(0, 12);
    expect(result.point[1]).toBeCloseTo(30, 9);
    expect(result.point[2]).toBeCloseTo(10, 9);
  });

  it("bit-identical convergence for a steep forward-cone ray (regression check)", () => {
    // Ray at y=30 from z=-100 toward +z. Hits sphere at (0, 30, 10), so t=110.
    const result = intersectSagSurface({ origin: [0, 30, -100], direction: [0, 0, 1] }, 0, 0, L, { maxT: 200 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.t).toBeCloseTo(110, 9);
    expect(result.point[1]).toBeCloseTo(30, 9);
    expect(result.point[2]).toBeCloseTo(10, 9);
  });
});
