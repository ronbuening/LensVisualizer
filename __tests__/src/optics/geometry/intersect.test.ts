import { describe, expect, it } from "vitest";
import type { AsphericCoefficients } from "../../../../src/types/optics.js";
import type { SagSlope, SurfaceProfile, Vec3 } from "../../../../src/optics/types.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { INTERSECTION_MAX_ITERATIONS } from "../../../../src/optics/constants.js";
import { intersectSurfaceProfile } from "../../../../src/optics/geometry/intersect.js";
import { createSurfaceProfile, createTiltedPlaneProfile, sag } from "../../../../src/optics/geometry/surfaceProfile.js";
import { intersectSagSurface } from "../../../../src/optics/internal/surfaceIntersection.js";
import { dot, normalize } from "../../../../src/optics/math/vector.js";
import { traceEngineRay2 } from "../../../../src/optics/trace/rayAdapters.js";
import { build, buildFoldedTirLens, buildSimplePositiveElementLens } from "../testLensFixtures.js";

function expectClose(actual: number, expected: number, tolerance: number): void {
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);
}

describe("Optics engine surface intersections", () => {
  it("intersects flat, spherical, marginal, skew, and tilted-plane surfaces", () => {
    const flat = createSurfaceProfile({ R: 1e15 }, undefined);
    const flatHit = intersectSurfaceProfile({ origin: [0, 1, -10], direction: [0, 0, 1] }, flat, 5);
    expect(flatHit.ok).toBe(true);
    if (flatHit.ok) expectClose(flatHit.t, 15, 1e-12);

    const spherical = createSurfaceProfile({ R: 50 }, undefined);
    const axial = intersectSurfaceProfile({ origin: [0, 0, -10], direction: [0, 0, 1] }, spherical, 0, {
      maxT: 20,
    });
    expect(axial.ok).toBe(true);
    if (axial.ok) expectClose(axial.point[2], 0, 1e-12);

    const marginal = intersectSurfaceProfile({ origin: [3, 4, -10], direction: [0, 0, 1] }, spherical, 0, {
      maxT: 20,
    });
    expect(marginal.ok).toBe(true);
    if (marginal.ok) expectClose(marginal.point[2], sag(5, 50), 1e-9);

    const skew = intersectSurfaceProfile({ origin: [0, 0, -10], direction: normalize([0.1, 0.05, 1])! }, spherical, 0, {
      maxT: 25,
    });
    expect(skew.ok).toBe(true);
    if (skew.ok) expectClose(skew.residual, 0, 1e-8);

    const tilted = createTiltedPlaneProfile({ y: 1, z: 1 });
    const tiltedHit = intersectSurfaceProfile({ origin: [0, 0, -5], direction: [0, 0, 1] }, tilted, 10);
    expect(tiltedHit.ok).toBe(true);
  });

  it("solves from one fused evaluation exactly as from separate sag and slope calls", () => {
    const sphere = createSurfaceProfile({ R: 50 }, undefined);
    const rim = createSurfaceProfile({ R: -17.388 }, undefined);
    const asphere = createSurfaceProfile({ R: 40 }, { K: -0.5, A4: 1e-5, A6: -2e-7, A8: 0, A10: 0, A12: 0, A14: 0 });
    const far = { origin: [3, 4, -1e9] as Vec3, direction: [0, 0, 1] as Vec3 };
    const cases = [
      { profile: sphere, vertexZ: 0, ray: { origin: [3, 4, -10] as Vec3, direction: [0, 0, 1] as Vec3 }, maxT: 20 },
      {
        profile: sphere,
        vertexZ: 0,
        ray: { origin: [0, 0, -10] as Vec3, direction: normalize([0.1, 0.05, 1])! },
        maxT: 25,
      },
      {
        profile: rim,
        vertexZ: 67.46,
        ray: { origin: [-2.2042, -14.9501, 57.7633] as Vec3, direction: normalize([-0.01696, -0.44528, 0.89523])! },
        maxT: 22.6,
      },
      {
        profile: asphere,
        vertexZ: 5,
        ray: { origin: [2, -6, -8] as Vec3, direction: normalize([0.05, 0.1, 1])! },
        maxT: 30,
      },
      // Launched from 1e9 mm the residual cannot reach the raw target: these hits rest on the roundoff envelope.
      { profile: sphere, vertexZ: 0, ray: far, maxT: 1e9 + 20, floorAssisted: true },
      { profile: asphere, vertexZ: 0, ray: far, maxT: 1e9 + 20, floorAssisted: true },
    ];
    for (const { profile, vertexZ, ray, maxT, floorAssisted } of cases) {
      const options = { maxT, directionNormalized: true };
      const hit = intersectSurfaceProfile(ray, profile, vertexZ, options);
      expect(hit.ok).toBe(true);
      if (!hit.ok) continue;
      expect(hit.effectiveTolerance > 1e-12).toBe(floorAssisted ?? false);

      // The residual is z - (vertexZ + sag) at the hit's own radius, and the normal is the profile's.
      expect(hit.residual).toBe(hit.point[2] - profile.pointAt(vertexZ, hit.point[0], hit.point[1])[2]);
      expect(hit.normal).toEqual(profile.normalAt(hit.point, vertexZ));

      // A profile that answers `evaluate` from its separate methods, in a fresh object each time, changes nothing.
      const unfused = {
        ...profile,
        evaluate: (radius: number): SagSlope => ({ sag: profile.sag(radius), slope: profile.slope(radius) }),
      };
      expect(intersectSurfaceProfile(ray, unfused, vertexZ, options)).toEqual(hit);
    }
  });

  it("recovers steep-rim sphere hits when the vertex-plane seed lands on the sag continuation", () => {
    // A rim ray of a strong concave surface (sd/|R| ≈ 0.89): the z-projected Newton seed lies beyond |R|,
    // where the continued sag has slope ~1e6, while the real hit near r = 15.35 mm is well conditioned.
    const R = -17.388;
    const vertexZ = 67.46;
    const ray = { origin: [-2.2042, -14.9501, 57.7633] as Vec3, direction: normalize([-0.01696, -0.44528, 0.89523])! };
    // The seed and the halving rule belong to the iterative path, which an explicit budget asks for.
    const hit = intersectSurfaceProfile(ray, createSurfaceProfile({ R }, undefined), vertexZ, {
      maxT: 22.6,
      directionNormalized: true,
      maxIterations: INTERSECTION_MAX_ITERATIONS,
    });
    const center: Vec3 = [0, 0, vertexZ + R];
    const offset: Vec3 = [ray.origin[0] - center[0], ray.origin[1] - center[1], ray.origin[2] - center[2]];
    const b = dot(offset, ray.direction);
    const c = dot(offset, offset) - R * R;
    const analyticT = [-b - Math.sqrt(b * b - c), -b + Math.sqrt(b * b - c)].find(
      (t) => ray.origin[2] + t * ray.direction[2] > center[2],
    )!;
    expect(hit).not.toHaveProperty("closedFormFallback");
    expect(hit.ok).toBe(true);
    if (hit.ok) {
      expect(hit.iterations).toBeGreaterThan(0);
      expectClose(hit.t, analyticT, 1e-8);
      expect(hit.radius).toBeLessThan(15.5);
    }
  });

  it("returns typed failures for invalid directions, invalid bounds, tangents, and misses", () => {
    const flat = createSurfaceProfile({ R: 1e15 }, undefined);
    expect(intersectSurfaceProfile({ origin: [0, 0, 0], direction: [0, 0, 0] }, flat, 0)).toMatchObject({
      ok: false,
      failureReason: "invalidDirection",
    });
    expect(intersectSurfaceProfile({ origin: [0, 0, 0], direction: [0, 0, 1] }, flat, 0, { minT: -1 })).toMatchObject({
      ok: false,
      failureReason: "invalidBounds",
    });
    expect(intersectSurfaceProfile({ origin: [0, 0, 0], direction: [1, 0, 0] }, flat, 5)).toMatchObject({
      ok: false,
      failureReason: "noBracket",
    });

    const spherical = createSurfaceProfile({ R: 50 }, undefined);
    expect(
      intersectSurfaceProfile({ origin: [100, 0, -10], direction: [0, 0, 1] }, spherical, 0, { maxT: 20 }),
    ).toMatchObject({ ok: false, failureReason: "noBracket" });
  });

  /* Past its domain radius (|R| here) a conic's sag is clamped into a fake extension that no glass occupies. A steep
   * ray that passes outside the domain on its way in must reach the real surface, not a root on that extension —
   * the failure that stopped wide-field chief rays on deep front aspheres. */
  it("ignores the clamped extension past a conic's domain radius", () => {
    const asphere: AsphericCoefficients = { K: 0, A4: 0, A6: -2e-6, A8: 0, A10: 0, A12: 0, A14: 0 };
    const profile = createSurfaceProfile({ R: 10 }, asphere);
    const hit = intersectSurfaceProfile({ origin: [0, 17, -12], direction: normalize([0, -1, 1])! }, profile, 0, {
      maxT: 40,
    });

    expect(hit.ok).toBe(true);
    if (!hit.ok) return;
    expect(hit.radius).toBeLessThan(10);
    expectClose(hit.point[2], profile.sag(hit.radius), 1e-9);
  });

  /* A ray entering the domain from outside can cross the surface between the domain edge and the first scan sample
   * inside it; that root has no sign change between valid samples, so the search must bracket the edge itself.
   * The explicit budget keeps the solve on the iterative path, whose scan this is. */
  it("finds a root just inside a conic's domain edge", () => {
    const profile = createSurfaceProfile({ R: 4 }, undefined);
    const angle = (21 * Math.PI) / 180;
    const hit = intersectSurfaceProfile(
      { origin: [0, 6, -2], direction: [0, -Math.sin(angle), Math.cos(angle)] },
      profile,
      0,
      { maxT: 24, directionNormalized: true, maxIterations: INTERSECTION_MAX_ITERATIONS },
    );

    expect(hit).not.toHaveProperty("closedFormFallback");
    expect(hit.ok).toBe(true);
    if (!hit.ok) return;
    expect(hit.iterations).toBeGreaterThan(0);
    expect(hit.radius).toBeGreaterThan(3.9);
    expect(hit.radius).toBeLessThan(4);
    expectClose(hit.point[2], profile.sag(hit.radius), 1e-9);
  });
});

// Small shared-engine regression: a sixth-order continuation has an exterior root before the authored cap.
// This must remain independent of a catalog prescription and exercise both intersection entry points.
describe("authored asphere cap selection", () => {
  const asphere: AsphericCoefficients = { K: 0, A4: 0.04, A6: -0.004, A8: 0, A10: 0, A12: 0, A14: 0 };
  const profile = createSurfaceProfile({ R: 1e15 }, asphere);
  const ray = { origin: [0, 7.5, -5] as Vec3, direction: normalize([0, -1, 1])! };

  it("replaces an exterior polynomial root with the first cap hit", () => {
    const exterior = intersectSurfaceProfile(ray, profile, 0, { maxT: 15 });
    const physical = intersectSurfaceProfile(ray, profile, 0, { maxT: 15, clearRadius: 2.5 });
    const legacy = intersectSagSurface(
      { origin: [...ray.origin], direction: [...ray.direction] },
      0,
      0,
      { S: [{ R: 1e15, sd: 2.5 }], asphByIdx: { 0: asphere } },
      { maxT: 15 },
    );
    expect(exterior.ok && exterior.radius).toBeCloseTo(3.417823094641, 8);
    for (const hit of [physical, legacy]) {
      expect(hit.ok).toBe(true);
      if (!hit.ok) continue;
      expect(hit.radius).toBeCloseTo(2.076820214007, 8);
      expect(hit.point[2]).toBeCloseTo(0.423179785993, 8);
    }
  });

  it("preserves exterior first-clip geometry when the ray misses the cap", () => {
    const original = intersectSurfaceProfile(ray, profile, 0, { maxT: 15 });
    expect(intersectSurfaceProfile(ray, profile, 0, { maxT: 15, clearRadius: 2 })).toEqual(original);
    const axialMiss = { origin: [0, 3.5, -5] as Vec3, direction: [0, 0, 1] as Vec3 };
    expect(intersectSurfaceProfile(axialMiss, profile, 0, { maxT: 15, clearRadius: 2.5 })).toEqual(
      intersectSurfaceProfile(axialMiss, profile, 0, { maxT: 15 }),
    );
  });

  it.each([-1, 1])("uses ray-distance order for convex/concave and forward/backward paths (%s)", (sign) => {
    const coefficients = { ...asphere, A4: sign * asphere.A4, A6: sign * asphere.A6 };
    const p = createSurfaceProfile({ R: 1e15 }, coefficients);
    const r = { origin: [0, 7.5, -5 * sign] as Vec3, direction: normalize([0, -1, sign])! };
    const hit = intersectSurfaceProfile(r, p, 0, { maxT: 15, clearRadius: 2.5 });
    expect(hit.ok).toBe(true);
    if (hit.ok) {
      expect(hit.radius).toBeCloseTo(2.076820214007, 8);
      expect(hit.point[2]).toBeCloseTo(sign * 0.423179785993, 8);
    }
  });

  it("does not reinterpret spherical, flat, or tilted-plane aperture misses", () => {
    for (const p of [
      createSurfaceProfile({ R: 50 }),
      createSurfaceProfile({ R: 1e15 }),
      createTiltedPlaneProfile({ y: 1, z: 1 }),
    ]) {
      expect(intersectSurfaceProfile(ray, p, 0, { maxT: 15, clearRadius: 1 })).toEqual(
        intersectSurfaceProfile(ray, p, 0, { maxT: 15 }),
      );
    }
  });

  it("selects the first physical root even when the final endpoint is also a root", () => {
    // sag = r³(r - 1)(r - 2)(r - 3): the ray meets r=3 outside the cap, then r=2, r=1, and r=0.
    const p = createSurfaceProfile({ R: 1e15 }, { K: 0, A3: -6, A4: 11, A5: -6, A6: 1, A8: 0, A10: 0, A12: 0, A14: 0 });
    const r = { origin: [0, 4, 0] as Vec3, direction: [0, -1, 0] as Vec3 };
    const hit = intersectSurfaceProfile(r, p, 0, { maxT: 4, clearRadius: 2.5 });
    expect(hit.ok).toBe(true);
    if (hit.ok) expect(hit.radius).toBeCloseTo(2, 8);
  });

  it("keeps invalid input and failed cap convergence explicit", () => {
    expect(intersectSurfaceProfile(ray, profile, 0, { minT: -1, maxT: 15, clearRadius: 2.5 })).toMatchObject({
      ok: false,
      failureReason: "invalidBounds",
    });
    expect(intersectSurfaceProfile(ray, profile, 0, { maxT: 15, clearRadius: 2.5, maxIterations: 0 })).toMatchObject({
      ok: false,
      failureReason: "noConvergedIntersection",
    });
  });
});

describe("asphere cap uniqueness certificate", () => {
  it("does not trust an inside-cap endpoint root when earlier physical roots exist", () => {
    const p = createSurfaceProfile({ R: 1e15 }, { K: 0, A3: -6, A4: 11, A5: -6, A6: 1, A8: 0, A10: 0, A12: 0, A14: 0 });
    const r = { origin: [0, 4, 0] as Vec3, direction: [0, -1, 0] as Vec3 };
    const old = intersectSurfaceProfile(r, p, 0, { maxT: 4 });
    expect(old.ok && old.radius).toBe(0);
    const hit = intersectSurfaceProfile(r, p, 0, { maxT: 4, clearRadius: 5 });
    expect(hit.ok && hit.radius).toBeCloseTo(3, 8);
  });

  // Counts surface evaluations so a certified hit is shown to skip the redundant cap search, not just to agree with it.
  // The solver reads sag and slope through `evaluate`, once per point it evaluates, so that is the call to count.
  const countingProfile = (p: ReturnType<typeof createSurfaceProfile>) => {
    const counter = { evaluations: 0 };
    const profile = {
      ...p,
      evaluate: (radius: number, out?: SagSlope) => (counter.evaluations++, p.evaluate(radius, out)),
    };
    return { profile, counter };
  };

  it("certifies an inside-cap hit from an origin far outside the cap without a second solve", () => {
    // Over the whole ray prefix the r^4 extension is far too steep to certify; capped at the authored radius it is not.
    const { profile, counter } = countingProfile(
      createSurfaceProfile({ R: 1e15 }, { K: 0, A4: 1e-4, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 }),
    );
    const ray = { origin: [0, -100, -100] as Vec3, direction: normalize([0, 1, 1])! };
    const unbounded = intersectSurfaceProfile(ray, profile, 0, { maxT: 150 });
    const established = counter.evaluations;
    expect(established).toBeGreaterThan(0);
    const hit = intersectSurfaceProfile(ray, profile, 0, { maxT: 150, clearRadius: 5 });
    expect(hit).toEqual(unbounded);
    expect(hit.ok && hit.radius).toBeLessThan(1e-6);
    expect(counter.evaluations - established).toBe(established);
  });

  it("proves a monotone cap miss from its two endpoints instead of scanning", () => {
    const { profile, counter } = countingProfile(
      createSurfaceProfile({ R: 1e15 }, { K: 0, A4: 0.001, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 }),
    );
    const ray = { origin: [0, -1, -5] as Vec3, direction: normalize([0, 1, 1])! };
    const exterior = intersectSurfaceProfile(ray, profile, 0, { maxT: 15 });
    const established = counter.evaluations;
    expect(established).toBeGreaterThan(0);
    expect(exterior.ok && exterior.radius).toBeGreaterThan(2);
    // The ray leaves the authored cap before reaching the surface: keep the exterior hit for first-clip diagnostics.
    expect(intersectSurfaceProfile(ray, profile, 0, { maxT: 15, clearRadius: 2 })).toEqual(exterior);
    expect(counter.evaluations - established).toBe(established + 2);
  });
});

describe("asphere cap certificate fallbacks", () => {
  it("falls back when the original pre-hit interval leaves the real conic domain", () => {
    const p = createSurfaceProfile({ R: 5 }, { K: 0, A4: 0.0001, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 });
    const ray = { origin: [0, 8, -10] as Vec3, direction: normalize([0, -0.5, 1])! };
    const hit = intersectSurfaceProfile(ray, p, 0, { maxT: 30, clearRadius: 4.5 });
    expect(hit.ok).toBe(true);
    if (hit.ok) {
      expect(hit.radius).toBeLessThan(4.5);
      expect(hit.residual).toBeLessThan(1e-8);
    }
    expect(p.maxAbsSlope!(8)).toBe(Infinity);
  });

  it("does not turn an axial conic-domain miss into a successful cap hit", () => {
    const p = createSurfaceProfile({ R: 5 }, { K: 0, A4: 0.0001, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 });
    const r = { origin: [0, 6, -10] as Vec3, direction: [0, 0, 1] as Vec3 };
    expect(intersectSurfaceProfile(r, p, 0, { maxT: 30, clearRadius: 8 })).toMatchObject({
      ok: false,
      failureReason: "noBracket",
    });
  });

  it("respects a caller's positive lower bound and retains the first remaining root", () => {
    const p = createSurfaceProfile({ R: 1e15 }, { K: 0, A3: -6, A4: 11, A5: -6, A6: 1, A8: 0, A10: 0, A12: 0, A14: 0 });
    const r = { origin: [0, 4, 0] as Vec3, direction: [0, -1, 0] as Vec3 };
    const hit = intersectSurfaceProfile(r, p, 0, { minT: 1.1, maxT: 4, clearRadius: 5 });
    expect(hit.ok && hit.radius).toBeCloseTo(2, 8);
  });
});

it("preserves a real axial-plane intersection at extreme cancelling coordinates", () => {
  const p = createSurfaceProfile({ R: 1e15 }, { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 });
  const r = { origin: [0, 1e16, -1e16] as Vec3, direction: normalize([0, -1, 1])! };
  const options = { maxT: 2e16, clearRadius: 4 };
  const hit = intersectSurfaceProfile(r, p, 0, options);
  expect(hit).toEqual(intersectSurfaceProfile(r, { ...p, maxAbsSlope: undefined }, 0, options));
  expect(hit.ok).toBe(true);
  if (hit.ok) {
    expect(hit.point[1]).toBe(0);
    expect(hit.point[2]).toBe(0);
  }
});

it.each([-1, NaN, Infinity])(
  "does not certify an earlier-root-free interval from an invalid slope bound (%s)",
  (bound) => {
    const p = createSurfaceProfile({ R: 1e15 }, { K: 0, A3: -6, A4: 11, A5: -6, A6: 1, A8: 0, A10: 0, A12: 0, A14: 0 });
    const ray = { origin: [0, 4, 0] as Vec3, direction: [0, -1, 0] as Vec3 };
    const hit = intersectSurfaceProfile(ray, { ...p, maxAbsSlope: () => bound }, 0, { maxT: 4, clearRadius: 5 });
    expect(hit.ok && hit.radius).toBeCloseTo(3, 8);
  },
);

describe("cap search after a failed unbounded solve", () => {
  /* z = r^2 / 60 - 1e-10 r^10 turns back toward the object outside its cap. This ray crosses that continuation at
   * r = 12.6 and reaches the cap at r = 6.5. Outside the cap the sag here carries 1e-9 mm of alternating noise, so
   * no iteration can bring the exterior root within the residual target. */
  const clean = createSurfaceProfile({ R: 30 }, { K: 0, A4: 0, A6: 0, A8: 0, A10: -1e-10, A12: 0, A14: 0 });
  const sd = 10;
  /** The clean profile with the noise beyond `quietRadius`. */
  const noisy = (quietRadius = sd): SurfaceProfile => {
    let flip = false;
    return {
      ...clean,
      evaluate: (radius: number, out?: SagSlope) => {
        const { sag: cleanSag, slope } = clean.evaluate(radius, out);
        if (radius <= quietRadius) return { sag: cleanSag, slope };
        flip = !flip;
        return { sag: cleanSag + (flip ? 1e-9 : -1e-9), slope };
      },
    };
  };
  const ray = { origin: [0, 16, -12] as Vec3, direction: [0, -0.6, 0.8] as Vec3 };

  it("finds the cap root although the solve cannot converge outside the cap", () => {
    // Without a cap the exterior root is the answer, and the solve runs out of iterations on it.
    expect(intersectSurfaceProfile(ray, noisy(), 0, { maxT: 20 })).toMatchObject({
      ok: false,
      failureReason: "noConvergedIntersection",
      iterations: INTERSECTION_MAX_ITERATIONS,
    });
    const hit = intersectSurfaceProfile(ray, noisy(), 0, { maxT: 20, clearRadius: sd });
    const reference = intersectSurfaceProfile(ray, clean, 0, { maxT: 20, clearRadius: sd });
    expect(reference.ok && reference.radius).toBeCloseTo(6.478819365544, 9);
    expect(hit.ok && reference.ok && Math.abs(hit.t - reference.t)).toBeLessThanOrEqual(1e-12);
    expect(hit.ok && Math.abs(hit.residual)).toBeLessThanOrEqual(1e-12);
  });

  it("keeps the failure when the cap holds no root", () => {
    /* The ray enters the cap at t = 10 and meets its root there at t = 15.9, so these bounds leave the cap search
     * two millimetres of cap with no root in them. Its own result, a scan that found no bracket, is not the
     * answer: the failure of the unbounded solve is. */
    expect(intersectSurfaceProfile(ray, noisy(), 0, { maxT: 12, clearRadius: sd })).toMatchObject({
      ok: false,
      failureReason: "noConvergedIntersection",
      iterations: INTERSECTION_MAX_ITERATIONS,
    });
    expect(intersectSurfaceProfile(ray, clean, 0, { maxT: 12, clearRadius: sd })).toMatchObject({ ok: true });
  });

  it("searches the cap in ray order, although its far end is a root too", () => {
    /* A shallow ray that chords the bowl: it meets the continuation at r = 10.2, the cap at r = 6.0, and the cap
     * again at r = 6.63 on its way out. The clear radius is that last radius, so the cap interval ends on a root.
     * A search that tested its far end first would return it. */
    const chord = { origin: [0, 16, 0.5] as Vec3, direction: normalize([0, -1, 0.01])! };
    const roots = [9, 22].map((minT) => intersectSurfaceProfile(chord, clean, 0, { minT, maxT: minT + 2 }));
    const [inner, outer] = roots.map((root) => (root.ok ? root : null));
    expect(inner?.radius).toBeCloseTo(5.99962523, 8);
    expect(outer?.radius).toBeCloseTo(6.63482258, 8);

    // Quiet a micrometre past the clear radius, so the rim root itself evaluates cleanly.
    const clearRadius = outer!.radius;
    const profile = noisy(clearRadius + 1e-6);
    expect(intersectSurfaceProfile(chord, profile, 0, { maxT: 32 })).toMatchObject({
      ok: false,
      failureReason: "noConvergedIntersection",
    });
    const hit = intersectSurfaceProfile(chord, profile, 0, { maxT: 32, clearRadius });
    expect(hit.ok && Math.abs(hit.t - inner!.t)).toBeLessThanOrEqual(1e-9);
    expect(hit.ok && Math.abs(hit.residual)).toBeLessThanOrEqual(1e-12);
  });

  it("does not search the cap after a scan that found no bracket", () => {
    /* A sphere of R = 50 with a small quartic term, grazed by a ray that clips a 0.58 mm chord at r = 0.29,
     * inside the cap. Both roots fall between two samples of the scan, which reports no bracket, and that stands:
     * only a solve that failed to converge is followed by the cap search. A scan of the 10 mm the ray spends
     * inside the cap would resolve the chord, and so does the same solve with samples that separate the roots. */
    const asphere = createSurfaceProfile({ R: 50 }, { K: 0, A4: 1e-9, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 });
    const grazing = { origin: [-0.6, 12, 0.0006] as Vec3, direction: normalize([0.05, -1, 0.00002])! };
    const unresolved = intersectSurfaceProfile(grazing, asphere, 0, { maxT: 20, clearRadius: 5 });
    expect(unresolved).toMatchObject({ ok: false, failureReason: "noBracket", iterations: 24 });
    expect(unresolved).toEqual(intersectSurfaceProfile(grazing, asphere, 0, { maxT: 20 }));
    expect(unresolved).not.toHaveProperty("closedFormFallback");
    const resolved = intersectSurfaceProfile(grazing, asphere, 0, { maxT: 20, clearRadius: 5, bracketSamples: 96 });
    expect(resolved.ok && resolved.radius).toBeCloseTo(0.28883, 4);
  });
});

describe("a plane at zero gap behind a curved surface", () => {
  const oblique: Vec3 = [0, 0.6, 0.8];

  it("moves an overshoot within the tolerance onto the plane and validates the residual there", () => {
    const plane = createSurfaceProfile({ R: 1e15 });
    // The origin is past the plane by 6e-13 mm, which is 7.5e-13 mm along the ray: inside the parametric slack.
    const within = intersectSurfaceProfile({ origin: [0, 0, 6e-13], direction: oblique }, plane, 0, {
      maxT: 5,
      directionNormalized: true,
    });
    expect(within).toMatchObject({ ok: true, t: 0, point: [0, 0, 6e-13], residual: 6e-13, effectiveTolerance: 1e-12 });
    // Past it by 9e-13 mm, 1.125e-12 mm along the ray: outside the slack, so the first case passed by no wider bound.
    const beyond = intersectSurfaceProfile({ origin: [0, 0, 9e-13], direction: oblique }, plane, 0, {
      maxT: 5,
      directionNormalized: true,
    });
    expect(beyond).toMatchObject({ ok: false, failureReason: "noBracket" });
  });

  /* A dummy curved surface in air, then the stop plane at its vertex, then one element. Air on both sides of the
   * curved surface leaves the ray straight, so the plane is asked from the curved hit along the launch direction. */
  const zeroGapState = (R: number) =>
    prepareRuntimeState(
      build({
        key: "test-zero-gap-plane",
        name: "Zero-gap plane fixture",
        closeFocusM: 0.5,
        yScFill: 0.55,
        nominalFno: 2,
        fstopSeries: [2, 2.8, 4],
        elements: [{ id: 1, name: "Fixture element", label: "L1", type: "positive", nd: 1.5168, vd: 64.17 }],
        surfaces: [
          { label: "1", R, nd: 1.0, sd: 15, d: 0, elemId: 0 },
          { label: "STO", R: 1e15, nd: 1.0, sd: 15, d: 1, elemId: 0 },
          { label: "2", R: 50, nd: 1.5168, sd: 15, d: 5, elemId: 1 },
          { label: "3", R: -50, nd: 1.0, sd: 15, d: 80, elemId: 1 },
        ],
      }),
      0,
      0,
    );
  /** Trace the oblique ray that meets the first surface at height `y`. */
  const traceThrough = (state: ReturnType<typeof zeroGapState>, y: number) => {
    const { z, profile } = state.surfaces[0];
    const target: Vec3 = [0, y, z + profile.sag(y)];
    const origin: Vec3 = [0, target[1] - 2 * oblique[1], target[2] - 2 * oblique[2]];
    return {
      z,
      profile,
      ray: { origin, direction: oblique },
      trace: traceEngineRay2(state, { origin, direction: oblique }, { checkSemiDiameter: true }),
    };
  };

  it("reaches the plane from a hit just behind it, and from one just past it within the tolerance", () => {
    // Concave toward the ray: off the axis the surface is ahead of its vertex plane, and the plane is a real step on.
    const ahead = traceThrough(zeroGapState(-50), 3);
    expect(ahead.trace.hits).toHaveLength(4);
    expect(ahead.trace.hits[0].point[2]).toBeLessThan(ahead.z - 0.09);
    expect(ahead.trace.hits[1].point[2]).toBe(ahead.z);

    /* Convex toward the ray: the surface is past its vertex plane by its sag, 4e-13 mm at this height. The hit is
     * on the surface, not on the vertex plane, so the plane lies 5e-13 mm back along the ray and the hit is moved
     * onto it at t = 0, keeping its point and reporting the overshoot as the residual. */
    const past = traceThrough(zeroGapState(5000), 6.32e-5);
    expect(past.trace.hits).toHaveLength(4);
    const [curved, plane] = past.trace.hits;
    const overshoot = curved.point[2] - past.z;
    expect(overshoot).toBeGreaterThan(3.9e-13);
    expect(overshoot).toBeLessThan(4.1e-13);
    expect(plane.point).toEqual(curved.point);
    expect(plane.residual).toBe(overshoot);
    expect(plane.effectiveTolerance).toBe(1e-12);
  });

  /* A boundary transition from the iterative path, declared in the step's pull request. It is held here so that a
   * change to it is seen, not as a rule to keep. It needs a plane at zero gap behind a surface that is convex
   * toward the ray, which overlaps it everywhere off the axis, and an oblique ray that meets them within 1e-4 mm
   * of the axis; the differential tiers show no lens with it. */
  it("boundary transition: loses the plane where the iterative path had stopped on the vertex plane", () => {
    /* At this height the sag is 8.1e-13 mm, within the residual target but 1.01e-12 mm back along the ray. The
     * closed-form hit is on the surface, so the plane is behind it by more than its parametric slack and the
     * trace ends there. The iterative path accepted its vertex-plane seed for this ray, a point on the plane
     * itself with the sag as its residual, and went on to all four surfaces. */
    const { z, profile, ray, trace } = traceThrough(zeroGapState(5000), 9e-5);
    expect(trace.hits).toHaveLength(1);
    expect(trace.failureReason).toBe("noBracket");
    expect(trace.hits[0].point[2] - z).toBeGreaterThan(8e-13);
    expect(Math.abs(trace.hits[0].residual!)).toBeLessThan(1e-15);

    const seeded = intersectSurfaceProfile(ray, profile, z, {
      maxT: 5,
      directionNormalized: true,
      maxIterations: INTERSECTION_MAX_ITERATIONS,
    });
    expect(seeded.ok && seeded.point[2]).toBe(z);
    expect(seeded.ok && Math.abs(seeded.residual)).toBeGreaterThan(8e-13);
  });
});

describe("the closed-form diagnostic stays on the kernel's result", () => {
  /** Every key named `closedFormFallback` anywhere inside a trace result. */
  const diagnosticPaths = (value: unknown, path = "trace"): string[] => {
    if (value === null || typeof value !== "object") return [];
    return Object.entries(value).flatMap(([key, member]) =>
      key === "closedFormFallback" ? [`${path}.${key}`] : diagnosticPaths(member, `${path}.${key}`),
    );
  };
  const sphere = createSurfaceProfile({ R: -40 });
  const mirrorRay = { origin: [0, 5, 0] as Vec3, direction: [0, 0, 1] as Vec3 };

  it("is set by the kernel on the solves these traces make", () => {
    expect(intersectSurfaceProfile(mirrorRay, sphere, 110, { maxT: 200 })).toHaveProperty("closedFormFallback", null);
  });

  it("is in no record of a sequential trace", () => {
    const trace = traceEngineRay2(prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0), mirrorRay, {
      checkSemiDiameter: true,
    });
    expect(trace.hits.length).toBeGreaterThan(1);
    expect(diagnosticPaths(trace)).toEqual([]);
  });

  it("is in no record of a folded trace, on a listed path or a searched one", () => {
    // The listed path meets the spherical mirror MG2 through the generalized tracer.
    const listed = traceEngineRay2(prepareRuntimeState(buildFoldedTirLens(), 0, 0), mirrorRay, {
      checkSemiDiameter: true,
    });
    expect(listed.hits.map((hit) => hit.surfaceLabel)).toEqual(["STO", "MG1", "MG2", "MG1"]);
    expect(diagnosticPaths(listed)).toEqual([]);

    /* The searched path asks every surface for a candidate hit and records the ones it skips: a flat mirror
     * facing a spherical one, with the ray started between them. */
    const cavity = build({
      key: "test-curved-mirror-cavity",
      name: "Curved mirror cavity fixture",
      closeFocusM: 0.5,
      yScFill: 0.55,
      nominalFno: 4,
      focalLengthDesign: 100,
      fstopSeries: [4, 5.6, 8],
      elements: [
        { id: 1, name: "MA", label: "Mirror A", type: "Flat First-Surface Mirror", nd: 1.0, vd: 0 },
        { id: 2, name: "MB", label: "Mirror B", type: "First-Surface Mirror", nd: 1.0, vd: 0 },
      ],
      surfaces: [
        { label: "STO", R: 1e15, nd: 1.0, sd: 20, d: 5, elemId: 0 },
        {
          label: "MA",
          R: 1e15,
          nd: 1.0,
          sd: 20,
          d: 10,
          elemId: 1,
          interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "first-surface" },
        },
        {
          label: "MB",
          R: -200,
          nd: 1.0,
          sd: 20,
          d: 0,
          elemId: 2,
          interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
        },
      ],
      groups: [
        { text: "MA", fromSurface: "MA", toSurface: "MA" },
        { text: "MB", fromSurface: "MB", toSurface: "MB" },
      ],
      opticalPath: { mode: "auto", imagePlane: { z: 50, label: "IMG" }, maxInteractions: 8 },
    });
    const searched = traceEngineRay2(
      prepareRuntimeState(cavity, 0, 0),
      { origin: [0, 3, 10], direction: [0, 0, 1] },
      { checkSemiDiameter: true, launchBoundT: 25 },
    );
    expect(searched.hits.some((hit) => hit.surfaceLabel === "MB")).toBe(true);
    expect(diagnosticPaths(searched)).toEqual([]);
  });
});
