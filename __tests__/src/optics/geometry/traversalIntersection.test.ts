import { describe, expect, it } from "vitest";
import { normalize as normalizeVector3 } from "../../../../src/optics/math/vector.js";
import type { SurfaceIntersectionOptions } from "../../../../src/optics/geometry/intersect.js";
import type { Ray3 as SurfaceIntersectionRay } from "../../../../src/optics/types.js";
import { INTERSECTION_MAX_ITERATIONS } from "../../../../src/optics/constants.js";
import { conicPolySag, createSurfaceProfile, sag } from "../../../../src/optics/geometry/surfaceProfile.js";
import { intersectSurfaceProfile, seedAsphereSolve } from "../../../../src/optics/geometry/intersect.js";
import { traceFixtureVector } from "../traceGeometryFixtures.js";
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

describe("a ray that only meets the clamped sag beyond the conic domain", () => {
  it("is the kernel's domain rejection, and the trace records an intersection failure", () => {
    // Captured Nokton 50/1 first-surface ray. In bounds it crosses only the clamped extension of the sag, at a
    // radius of 42.06 mm: outside the conic domain (41.23 mm) and the aperture (27 mm). Until the stack tracer's
    // solver delegated it returned that crossing as a hit, in 43 iterations, and the tracer clipped it at the rim.
    // No surface is there, and the answer is the kernel's.
    const asphere: AsphericCoefficients = {
      K: -0.02238,
      A4: -1.0281e-6,
      A6: 6.04388e-10,
      A8: -4.31143e-12,
      A10: 5.62572e-15,
      A12: -3.29805e-18,
      A14: -5.97602e-23,
    };
    const surface = { elemId: 1, label: "1A", R: 40.765, d: 4.89, nd: 1.90525, sd: 27 };
    const lens = { S: [surface], asphByIdx: { 0: asphere } };
    const ray: SurfaceIntersectionRay = {
      origin: [-4.3626017234355216e-15, -43.94943189209652, -10.312310421674399],
      direction: [0, 0.36739419447650656, 0.9300653234396813],
    };
    const options = { maxT: 22.175454049907273 };
    const profile = createSurfaceProfile(surface, asphere);
    expect(Math.hypot(ray.origin[0], ray.origin[1])).toBeGreaterThan(profile.finiteRadiusLimit()!);
    const capped = { ...options, clearRadius: surface.sd };
    const production = intersectSurfaceProfile(ray, profile, 0, capped);
    expect(production).toMatchObject({ ok: false, failureReason: "noBracket", iterations: 24 });
    // That is the iterative path's own answer: the ray has no span inside the cap, so the seeded route is not tried.
    expect(seedAsphereSolve(ray, profile, 0, capped)).toBeNull();
    expect(production).toEqual(
      intersectSurfaceProfile(ray, profile, 0, { ...capped, maxIterations: INTERSECTION_MAX_ITERATIONS }),
    );
    for (const maxIterations of [32, 4096]) {
      expect(intersectSurfaceProfile(ray, profile, 0, { ...capped, maxIterations })).toEqual(production);
    }
    // The trace ends on the miss. It used to hold one hit there, clipped by the semi-diameter.
    const traceOptions = { zPos: [0], checkSemiDiameter: true, stopOnClip: true };
    const trace = traceFixtureVector(lens, ray, traceOptions);
    expect(trace.failureReason).toBe("noBracket");
    expect(trace.status !== "ok").toBe(true);
    expect(trace.hits).toHaveLength(0);
    expect(trace.diagnostics.clipEvents).toEqual([
      { surfaceIdx: 0, surfaceLabel: "1A", reason: "intersection-failure", failureReason: "noBracket" },
    ]);
    // Production misses terminate without a fabricated fallback hit, including ghost requests.
    const ghost = traceFixtureVector(lens, ray, { ...traceOptions, ghost: true });
    expect(ghost.failureReason).toBe("noBracket");
    expect(ghost.status).toBe("failed");
    expect(ghost.hits).toHaveLength(0);
  });
});

describe("surface intersection helpers", () => {
  it("normalizes finite 3D direction vectors", () => {
    expect(normalizeVector3([3, 4, 0])).toEqual([0.6, 0.8, 0]);
    expect(normalizeVector3([0, 0, 0])).toBeNull();
  });

  it("intersects a flat surface analytically", () => {
    const L = lensWithSurface(1e15);
    const result = intersectFixture(axialRay(2), 0, L, { maxT: 10, refractiveIndex: 1.5 });

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
    const result = intersectFixture(axialRay(h), 0, L, { maxT: 20 });

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
    const result = intersectFixture(axialRay(h), 0, L, { maxT: 20 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.point[2]).toBeCloseTo(conicPolySag(h, 40, asph), 10);
    expect(Math.abs(result.residual)).toBeLessThan(1e-9);
  });

  it("intersects a polynomial aspheric sag surface", () => {
    const asph: AsphericCoefficients = { K: 0, A4: 1e-3, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
    const L = lensWithSurface(1e15, asph);
    const result = intersectFixture({ origin: [2, 0, -1], direction: [0, 0, 1] }, 0, L, { maxT: 5 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.radius).toBeCloseTo(2, 12);
    expect(result.point[2]).toBeCloseTo(0.016, 12);
    expect(result.t).toBeCloseTo(1.016, 12);
  });

  it("intersects an odd-order aspheric sag surface at the analytic A3 height", () => {
    const asph: AsphericCoefficients = { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0, A3: 1e-3 };
    const L = lensWithSurface(1e15, asph);
    const result = intersectFixture({ origin: [2, 0, -1], direction: [0, 0, 1] }, 0, L, { maxT: 5 });

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
    const result = intersectFixture({ origin: [0, 0, -10], direction: direction! }, 0, L, { maxT: 25 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.point[2]).toBeCloseTo(conicPolySag(result.radius, 40, asph), 10);
    expect(Math.abs(result.residual)).toBeLessThan(1e-9);
  });

  it("reports no bracket when the bounded segment cannot reach the surface", () => {
    const L = lensWithSurface(1e15);
    const result = intersectFixture(axialRay(0), 10, L, { maxT: 5 });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.failureReason).toBe("noBracket");
  });

  it("reports no convergence when iteration budget is exhausted", () => {
    const L = lensWithSurface(50);
    const result = intersectFixture(axialRay(5), 0, L, { maxT: 20, maxIterations: 0 });

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
    const result = intersectFixture({ origin: [0, 0, -1], direction: [1, 0, 0] }, 0, L, { maxT: 5 });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.failureReason).toBe("noBracket");
  });

  it("recovers steep-rim sphere hits when the vertex-plane seed lands on the sag continuation", () => {
    // A rim ray of a strong concave surface (sd/|R| ≈ 0.89): the z-projected Newton seed lies beyond |R|,
    // where the continued sag has slope ~1e6, while the real hit near r = 15.35 mm is well conditioned.
    const R = -17.388;
    const vertexZ = 67.46;
    const origin: [number, number, number] = [-2.2042, -14.9501, 57.7633];
    const direction = normalizeVector3([-0.01696, -0.44528, 0.89523])!;
    const result = intersectFixture({ origin, direction }, vertexZ, lensWithSurface(R), { maxT: 22.6 });

    const offset = [origin[0], origin[1], origin[2] - (vertexZ + R)];
    const b = offset[0] * direction[0] + offset[1] * direction[1] + offset[2] * direction[2];
    const c = offset[0] ** 2 + offset[1] ** 2 + offset[2] ** 2 - R * R;
    const analyticT = [-b - Math.sqrt(b * b - c), -b + Math.sqrt(b * b - c)].find(
      (t) => origin[2] + t * direction[2] > vertexZ + R,
    )!;
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.t).toBeCloseTo(analyticT, 8);
    expect(result.radius).toBeLessThan(15.5);
  });

  it("computes rotationally symmetric normals at hit points", () => {
    const L = lensWithSurface(50);
    const positive = createSurfaceProfile(L.S[0]).normalAt([3, 4, sag(5, 50)], 0);
    const negative = createSurfaceProfile(L.S[0]).normalAt([-3, 4, sag(5, 50)], 0);

    expect(positive[0]).toBeCloseTo(-negative[0], 12);
    expect(positive[1]).toBeCloseTo(negative[1], 12);
    expect(positive[2]).toBeCloseTo(negative[2], 12);
  });
});

describe("production grazing and backward intersections", () => {
  // Spherical surface with R=50, vertex at z=0. Analytic sag at r=21.79 is 5.0
  // (verified: 475 / (50 + sqrt(2500 - 475)) = 475/95 = 5).
  const R = 50;
  const L = lensWithSurface(R);

  it("traces a grazing ray with direction[2] = 0 to the analytic intersection", () => {
    // Ray at z=5, traveling in -y from y=30. Surface z=5 occurs at r=sqrt(475)≈21.79.
    // Expected intersection: t = 30 - sqrt(475), point (0, sqrt(475), 5).
    // The analytic geometry also guards the backward/grazing launch convention.
    const expectedY = Math.sqrt(475);
    const expectedT = 30 - expectedY;
    const result = intersectFixture({ origin: [0, 30, 5], direction: [0, -1, 0] }, 0, L, { maxT: 30 });

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
    const result = intersectFixture({ origin: [0, 30, 100], direction: [0, 0, -1] }, 0, L, { maxT: 200 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.t).toBeCloseTo(90, 9);
    expect(result.point[0]).toBeCloseTo(0, 12);
    expect(result.point[1]).toBeCloseTo(30, 9);
    expect(result.point[2]).toBeCloseTo(10, 9);
  });

  it("bit-identical convergence for a steep forward-cone ray (regression check)", () => {
    // Ray at y=30 from z=-100 toward +z. Hits sphere at (0, 30, 10), so t=110.
    const result = intersectFixture({ origin: [0, 30, -100], direction: [0, 0, 1] }, 0, L, { maxT: 200 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.t).toBeCloseTo(110, 9);
    expect(result.point[1]).toBeCloseTo(30, 9);
    expect(result.point[2]).toBeCloseTo(10, 9);
  });
});

function intersectFixture(
  ray: SurfaceIntersectionRay,
  vertexZ: number,
  lens: Pick<RuntimeLens, "S" | "asphByIdx">,
  options: SurfaceIntersectionOptions = {},
) {
  return intersectSurfaceProfile(ray, createSurfaceProfile(lens.S[0], lens.asphByIdx[0]), vertexZ, {
    ...options,
    clearRadius: lens.S[0].sd,
  });
}

describe("production intersection input failures", () => {
  it("rejects invalid directions and bounds", () => {
    const profile = createSurfaceProfile({ R: 50 });
    expect(
      intersectSurfaceProfile({ origin: [0, 1, -5], direction: [0, 0, 0] }, profile, 0, { maxT: 20 }),
    ).toMatchObject({ ok: false, failureReason: "invalidDirection", residual: null, iterations: 0 });
    expect(intersectSurfaceProfile(axialRay(1), profile, 0, { minT: -1, maxT: 20 })).toMatchObject({
      ok: false,
      failureReason: "invalidBounds",
    });
    expect(intersectSurfaceProfile(axialRay(1), profile, 0)).toMatchObject({
      ok: false,
      failureReason: "invalidBounds",
    });
  });
});
