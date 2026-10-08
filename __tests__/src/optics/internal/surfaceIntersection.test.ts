import { describe, expect, it } from "vitest";
import {
  intersectSagSurface,
  normalizeVector3,
  surfaceNormalAtHit,
  type SurfaceIntersectionRay,
} from "../../../../src/optics/internal/surfaceIntersection.js";
import { conicPolySag, sag } from "../../../../src/optics/internal/surfaceMath.js";
import { intersectSurfaceProfile } from "../../../../src/optics/math/intersection.js";
import { createSurfaceProfile, createTiltedPlaneProfile } from "../../../../src/optics/math/surfaceProfile.js";
import { traceExactSurfaceStackVector } from "../../../../src/optics/internal/exactSurfaceTrace.js";
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

// Keep these analytic cases shared by both engines: the default accuracy is a shipped contract.
describe.each(["production", "legacy"] as const)("%s intersection accuracy", (engine) => {
  const intersect = (
    ray: SurfaceIntersectionRay,
    R: number,
    vertexZ: number,
    options: { minT?: number; maxT: number; maxIterations?: number; tolerance?: number },
    asphere?: AsphericCoefficients,
    sd?: number,
  ) =>
    engine === "production"
      ? intersectSurfaceProfile(ray, createSurfaceProfile({ R }, asphere), vertexZ, { ...options, clearRadius: sd })
      : intersectSagSurface(ray, 0, vertexZ, { S: [{ R, sd }], asphByIdx: asphere ? { 0: asphere } : {} }, options);

  it("refines a bracket endpoint that met the former 1e-9 default", () => {
    const root = 5 + sag(1, 5);
    const hit = intersect(axialRay(1), 5, 0, { maxT: root + 5e-10 });
    expect(hit.ok).toBe(true);
    if (!hit.ok) return;
    expect(Math.abs(hit.residual)).toBeLessThanOrEqual(1e-12);
    expect(hit.effectiveTolerance).toBe(1e-12);
    expect(Math.abs(hit.point[2] - 1 / (5 + Math.sqrt(24)))).toBeLessThanOrEqual(1e-12);
  });

  it("does not grant a tenfold residual after an exhausted iteration budget", () => {
    const root = 5 + sag(1, 5);
    const hit = intersect(axialRay(1), 5, 0, { minT: root - 1, maxT: root + 1 + 1e-11, maxIterations: 0 });
    expect(hit).toMatchObject({ ok: false, failureReason: "noConvergedIntersection" });
  });

  it("does not substitute a large coordinate envelope for attainable refinement", () => {
    const asphere = { K: 0, A4: 0.125, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
    const ray: SurfaceIntersectionRay = { origin: [0, 1, 1e12], direction: [0, 0, 1] };
    // The exact root t=0.125 is representable. The midpoint t=0.13 is inside the
    // roundoff envelope but still needs a Newton step, even at this translation.
    expect(intersect(ray, 1e15, 1e12, { maxT: 0.26, maxIterations: 0 }, asphere)).toMatchObject({
      ok: false,
      failureReason: "noConvergedIntersection",
    });
    const refined = intersect(ray, 1e15, 1e12, { maxT: 0.26, maxIterations: 1 }, asphere);
    expect(refined).toMatchObject({ ok: true, residual: 0, effectiveTolerance: 1e-12 });
  });

  it("accepts an irreducible residual when the safeguarded bracket cannot advance", () => {
    const asphere = { K: 0, A4: 10000, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
    // Adjacent represented radii straddle the exact quartic root. Raw Newton
    // changes t, but lies outside the final bracket; its midpoint rounds to t.
    const hit = intersect(
      { origin: [1.1, 0, 10000.000000000002], direction: [-1, 0, 0] },
      1e15,
      0,
      { minT: 0, maxT: 0.2 },
      asphere,
    );
    expect(hit.ok).toBe(true);
    if (!hit.ok) return;
    expect(hit.radius).toBe(1);
    expect(hit.residual).toBe(1.8189894035458565e-12);
    expect(hit.effectiveTolerance).toBeGreaterThan(1e-12);
    expect(Math.abs(hit.residual)).toBeLessThanOrEqual(hit.effectiveTolerance!);
  });

  it("uses the tightened parametric bounds for an analytic plane", () => {
    expect(intersect(axialRay(1), 1e15, 0, { maxT: 5 - 1e-10 })).toMatchObject({
      ok: false,
      failureReason: "noBracket",
    });
    expect(intersect(axialRay(1), 1e15, 0, { maxT: 5 - 1e-10, tolerance: 1e-9 }).ok).toBe(true);
  });

  it("converges on a steep quartic at the authored cap boundary", () => {
    // z = r^4/8 meets z = r at r=2; dz/dr=4 there, and t=sqrt(2).
    const asphere = { K: 0, A4: 0.125, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
    const hit = intersect(
      { origin: [0, 1, 1], direction: normalizeVector3([0, 1, 1])! },
      1e15,
      0,
      { maxT: 3 },
      asphere,
      2,
    );
    expect(hit.ok).toBe(true);
    if (!hit.ok) return;
    expect(Math.abs(hit.residual)).toBeLessThanOrEqual(1e-12);
    expect(Math.abs(hit.t - Math.sqrt(2))).toBeLessThanOrEqual(1e-12);
  });

  it.each([-1e8, -1e12])("reports the attainable residual when the axial operands cancel (%s mm)", (originZ) => {
    const hit = intersect(axialRay(1, originZ), 5, 0, { maxT: -originZ + 2 });
    expect(hit.ok).toBe(true);
    if (!hit.ok) return;
    // t is quantized at the large launch distance even though final z is only 0.101 mm.
    const analyticSag = 1 / (5 + Math.sqrt(24));
    const nearestPoint = originZ + (analyticSag - originZ);
    expect(hit.point[2]).toBe(nearestPoint);
    expect(Math.abs(hit.residual)).toBeGreaterThan(1e-12);
    expect(Math.abs(hit.residual)).toBeLessThanOrEqual(hit.effectiveTolerance!);
  });

  it("accounts for transverse cancellation amplified by a steep asphere", () => {
    const asphere = { K: 0, A4: 100, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
    // z=100*r^4 at z=101: the first radial root is (1.01)^(1/4).
    const hit = intersect(
      { origin: [1e8, 0, 101], direction: [-1, 0, 0] },
      1e15,
      0,
      { minT: 1e8 - 2, maxT: 1e8 },
      asphere,
    );
    expect(hit.ok).toBe(true);
    if (!hit.ok) return;
    expect(Math.abs(hit.radius - 1.01 ** 0.25)).toBeLessThan(2e-8);
    expect(Math.abs(hit.residual)).toBeGreaterThan(1e-12);
    expect(Math.abs(hit.residual)).toBeLessThanOrEqual(hit.effectiveTolerance!);
  });
});

describe("legacy clipped diagnostics at tightened accuracy", () => {
  it("allows enough bisections to preserve an exterior aperture clip without a loose residual", () => {
    // Captured Nokton 50/1 first-surface ray. This legacy clamped extension is
    // outside the conic domain and the aperture; it is a diagnostic clip, not
    // a physical conic hit. The production domain rejection remains unchanged.
    const asphere: AsphericCoefficients = {
      K: -0.02238,
      A4: -1.0281e-6,
      A6: 6.04388e-10,
      A8: -4.31143e-12,
      A10: 5.62572e-15,
      A12: -3.29805e-18,
      A14: -5.97602e-23,
    };
    const surface = { label: "1A", R: 40.765, d: 4.89, nd: 1.90525, sd: 27 };
    const lens = { S: [surface], asphByIdx: { 0: asphere } };
    const ray: SurfaceIntersectionRay = {
      origin: [-4.3626017234355216e-15, -43.94943189209652, -10.312310421674399],
      direction: [0, 0.36739419447650656, 0.9300653234396813],
    };
    const options = { maxT: 22.175454049907273 };
    expect(intersectSagSurface(ray, 0, 0, lens, { ...options, maxIterations: 32 })).toMatchObject({
      ok: false,
      failureReason: "noConvergedIntersection",
    });
    const hit = intersectSagSurface(ray, 0, 0, lens, options);
    expect(hit.ok).toBe(true);
    if (!hit.ok) return;
    expect(Math.abs(hit.residual)).toBeLessThanOrEqual(1e-12);
    expect(hit.effectiveTolerance).toBe(1e-12);
    expect(hit.radius).toBeGreaterThan(surface.sd);
    const profile = createSurfaceProfile(surface, asphere);
    expect(hit.radius).toBeGreaterThan(profile.finiteRadiusLimit()!);
    expect(intersectSurfaceProfile(ray, profile, 0, { ...options, clearRadius: surface.sd })).toMatchObject({
      ok: false,
      failureReason: "noBracket",
    });
    const trace = traceExactSurfaceStackVector(lens, ray, { zPos: [0], checkSemiDiameter: true, stopOnClip: true });
    expect(trace.failureReason).toBeNull();
    expect(trace.clipped).toBe(true);
    expect(trace.hits).toHaveLength(1);
    expect(trace.hits[0]).toMatchObject({ clipped: true, fallback: false, clipReason: "semi-diameter" });
  });
});

describe("tilted mirror accuracy", () => {
  it.each([
    { y: 1, z: 1 },
    { y: 1, z: 1e-14 },
    { y: 1, z: 0 },
  ])("checks normal-distance residual without dividing by normal.z ($z)", (normal) => {
    const ray: SurfaceIntersectionRay = { origin: [0, 1, 3], direction: [0, -1, 0] };
    const production = intersectSurfaceProfile(ray, createTiltedPlaneProfile(normal), 1, { maxT: 10 });
    const legacy = traceExactSurfaceStackVector(
      {
        S: [{ label: "M", R: 1e15, nd: 1, d: 1, sd: 10, interaction: { type: "reflect", normal } }],
        asphByIdx: {},
        opticalPath: { mode: "sequential", surfaceOrder: [0], surfaceLabels: ["M"], maxInteractions: 4 },
        isFoldedOptics: true,
      },
      ray,
      { zPos: [1], launchBoundT: 10 },
    );
    expect(production.ok).toBe(true);
    expect(legacy.hits).toHaveLength(1);
    const points = [...(production.ok ? [production.point] : []), legacy.hits[0].point];
    for (const point of points) {
      const residual = (normal.y * point[1] + normal.z * (point[2] - 1)) / Math.hypot(normal.y, normal.z);
      expect(Math.abs(residual)).toBeLessThanOrEqual(1e-12);
      expect(point.every(Number.isFinite)).toBe(true);
    }
  });
});

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

  it("recovers steep-rim sphere hits when the vertex-plane seed lands on the sag continuation", () => {
    // A rim ray of a strong concave surface (sd/|R| ≈ 0.89): the z-projected Newton seed lies beyond |R|,
    // where the continued sag has slope ~1e6, while the real hit near r = 15.35 mm is well conditioned.
    const R = -17.388;
    const vertexZ = 67.46;
    const origin: [number, number, number] = [-2.2042, -14.9501, 57.7633];
    const direction = normalizeVector3([-0.01696, -0.44528, 0.89523])!;
    const result = intersectSagSurface({ origin, direction }, 0, vertexZ, lensWithSurface(R), { maxT: 22.6 });

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
    // The analytic geometry also guards the backward/grazing launch convention.
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
