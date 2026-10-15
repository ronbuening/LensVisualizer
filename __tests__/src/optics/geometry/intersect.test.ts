import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import type { AsphericCoefficients } from "../../../../src/types/optics.js";
import type { Ray3, SagSlope, SurfaceProfile, Vec3 } from "../../../../src/optics/types.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { INTERSECTION_MAX_ITERATIONS } from "../../../../src/optics/constants.js";
import {
  intersectSurfaceProfile,
  seedAsphereSolve,
  type SeedRefusal,
  type SurfaceIntersectionOptions,
} from "../../../../src/optics/geometry/intersect.js";
import { capCoordinateTolerance } from "../../../../src/optics/geometry/intersectTolerance.js";
import { createSurfaceProfile, createTiltedPlaneProfile, sag } from "../../../../src/optics/geometry/surfaceProfile.js";
import { ulpOf } from "../../../../src/optics/math/numerics.js";
import { dot, normalize } from "../../../../src/optics/math/vector.js";
import { evaluateAperture } from "../../../../src/optics/trace/aperture.js";
import { traceEngineRay2 } from "../../../../src/optics/trace/rayAdapters.js";
import { INTERSECTION_FIXTURE_PATH, type IntersectionFixtureFile } from "../fixtures/generateIntersectionFixtures.js";
import { build, buildFoldedTirLens, buildSimplePositiveElementLens } from "../testLensFixtures.js";

function expectClose(actual: number, expected: number, tolerance: number): void {
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);
}

// Counts surface evaluations, so that which path answered a solve is read off its cost and not only off its result.
// The solver reads sag and slope through `evaluate`, once per point it evaluates, so that is the call to count.
const countingProfile = (p: SurfaceProfile) => {
  const counter = { evaluations: 0 };
  const profile = {
    ...p,
    evaluate: (radius: number, out?: SagSlope) => (counter.evaluations++, p.evaluate(radius, out)),
  };
  return { profile, counter };
};

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
// This must remain independent of a catalog prescription and exercise cap selection in the production kernel.
describe("authored asphere cap selection", () => {
  const asphere: AsphericCoefficients = { K: 0, A4: 0.04, A6: -0.004, A8: 0, A10: 0, A12: 0, A14: 0 };
  const profile = createSurfaceProfile({ R: 1e15 }, asphere);
  const ray = { origin: [0, 7.5, -5] as Vec3, direction: normalize([0, -1, 1])! };

  it("replaces an exterior polynomial root with the first cap hit", () => {
    const exterior = intersectSurfaceProfile(ray, profile, 0, { maxT: 15 });
    const physical = intersectSurfaceProfile(ray, profile, 0, { maxT: 15, clearRadius: 2.5 });
    expect(exterior.ok && exterior.radius).toBeCloseTo(3.417823094641, 8);
    expect(physical.ok).toBe(true);
    if (!physical.ok) return;
    expect(physical.radius).toBeCloseTo(2.076820214007, 8);
    expect(physical.point[2]).toBeCloseTo(0.423179785993, 8);
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

  // The counting profile shows a certified hit to skip the redundant cap search, not just to agree with it.
  it("certifies an inside-cap hit from an origin far outside the cap without a second solve", () => {
    // Over the whole ray prefix the r^4 extension is far too steep to certify; capped at the authored radius it is not.
    const { profile, counter } = countingProfile(
      createSurfaceProfile({ R: 1e15 }, { K: 0, A4: 1e-4, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 }),
    );
    const ray = { origin: [0, -100, -100] as Vec3, direction: normalize([0, 1, 1])! };
    const unbounded = intersectSurfaceProfile(ray, profile, 0, { maxT: 150 });
    const established = counter.evaluations;
    expect(established).toBeGreaterThan(0);
    // Cap selection belongs to the iterative path, which an explicit budget asks for: it keeps the established hit.
    const selected = intersectSurfaceProfile(ray, profile, 0, {
      maxT: 150,
      clearRadius: 5,
      maxIterations: INTERSECTION_MAX_ITERATIONS,
    });
    expect(selected).toEqual(unbounded);
    expect(counter.evaluations - established).toBe(established);
    // By default the seeded route answers the capped solve, from the vertex-plane crossing alone.
    const beforeSeeded = counter.evaluations;
    const hit = intersectSurfaceProfile(ray, profile, 0, { maxT: 150, clearRadius: 5 });
    expect(hit).toEqual(unbounded);
    expect(hit.ok && hit.radius).toBeLessThan(1e-6);
    expect(counter.evaluations - beforeSeeded).toBe(1);
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
    // Without a cap the exterior root is the answer; its bracket collapses outside the envelope and the solve fails.
    const unbounded = intersectSurfaceProfile(ray, noisy(), 0, { maxT: 20 });
    expect(unbounded).toMatchObject({ ok: false, failureReason: "noConvergedIntersection" });
    expect(unbounded.iterations).toBeLessThan(INTERSECTION_MAX_ITERATIONS);
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
    const kept = intersectSurfaceProfile(ray, noisy(), 0, { maxT: 12, clearRadius: sd });
    expect(kept).toMatchObject({ ok: false, failureReason: "noConvergedIntersection" });
    expect(kept.iterations).toBeLessThan(INTERSECTION_MAX_ITERATIONS);
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

/* A polynomial asphere with an authored cap first tries a Newton iteration from the root of its base conic
 * (`seedAsphereSolve`), and returns that point only under a certificate that the iterative path returns the same
 * root. Three things are read off every case, so that none passes without the route having decided as named: what
 * the route itself returns, the number of profile evaluations a counting copy of the profile sees, and the same
 * solve on the iterative path alone, which an explicit budget asks for. */
describe("conic-seeded asphere solve", () => {
  interface Solve {
    ray: Ray3;
    profile: SurfaceProfile;
    vertexZ: number;
    options: SurfaceIntersectionOptions;
  }
  const NO_TERMS: AsphericCoefficients = { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
  const asphereOn = (R: number, terms: Partial<AsphericCoefficients>) =>
    createSurfaceProfile({ R }, { ...NO_TERMS, ...terms });
  const at = (origin: Vec3, t: number, direction: Vec3): Vec3 => [
    origin[0] + direction[0] * t,
    origin[1] + direction[1] * t,
    origin[2] + direction[2] * t,
  ];

  /** One solve by default and on the iterative path alone, each against a counting copy of the profile. */
  const solveBothWays = ({ ray, profile, vertexZ, options }: Solve) => {
    const byDefault = countingProfile(profile);
    const iteratively = countingProfile(profile);
    return {
      route: seedAsphereSolve(ray, profile, vertexZ, options),
      result: intersectSurfaceProfile(ray, byDefault.profile, vertexZ, options),
      evaluations: byDefault.counter.evaluations,
      iterative: intersectSurfaceProfile(ray, iteratively.profile, vertexZ, {
        ...options,
        maxIterations: INTERSECTION_MAX_ITERATIONS,
      }),
      iterativeEvaluations: iteratively.counter.evaluations,
    };
  };

  /**
   * A seeded hit: the route's own point, at the raw target, within half a hit's budget and half a direction
   * cosine's of the iterative path's point, for the evaluations given.
   */
  const expectSeeded = (input: Solve, cost: { seeded: number; iterative: number }) => {
    const { route, result, evaluations, iterative, iterativeEvaluations } = solveBothWays(input);
    expect(route).toMatchObject({ ok: true });
    expect(result).toEqual(route);
    expect(result).not.toHaveProperty("closedFormFallback");
    expect({ seeded: evaluations, iterative: iterativeEvaluations }).toEqual(cost);
    if (!(result.ok && iterative.ok)) throw new Error("a seeded solve hits on both paths");
    expect(result.iterations).toBe(cost.seeded);
    expect(result.effectiveTolerance).toBe(input.options.tolerance ?? 1e-12);
    expect(iterative.effectiveTolerance).toBe(result.effectiveTolerance);
    expect(Math.abs(result.t - iterative.t)).toBeLessThanOrEqual(5e-10);
    for (const axis of [0, 1, 2]) {
      expect(Math.abs(result.normal[axis] - iterative.normal[axis])).toBeLessThanOrEqual(5e-11);
    }
    return { result, iterative };
  };

  /**
   * A solve the route leaves alone: the result is the iterative path's, member for member, and costs that path's
   * evaluations plus the ones the route spent before it refused.
   *
   * @param reason - what the route returns: its reason, or null where it is not tried
   * @param cost - evaluations of the iterative path, and of the route before it refused
   */
  const expectIterative = (input: Solve, reason: SeedRefusal | null, cost: { iterative?: number; spent: number }) => {
    const { route, result, evaluations, iterative, iterativeEvaluations } = solveBothWays(input);
    expect(route).toBe(reason);
    expect(result).toEqual(iterative);
    if (cost.iterative !== undefined) expect(iterativeEvaluations).toBe(cost.iterative);
    expect(evaluations - iterativeEvaluations).toBe(cost.spent);
    return result;
  };

  // Surface P: a mild conic with two polynomial terms, met well inside its cap by an oblique ray.
  const surfaceP = asphereOn(40, { K: -0.5, A4: 1e-5, A6: -2e-7 });
  const obliqueP: Ray3 = { origin: [0, -6, -10], direction: normalize([0, 0.36, 1])! };
  const onP: Solve = { ray: obliqueP, profile: surfaceP, vertexZ: 0, options: { maxT: 20, clearRadius: 15 } };
  // Surface Q: strong enough that Newton from the base sphere's root needs more than the route's six evaluations.
  const onQ: Solve = {
    ray: { origin: [0, 2, -2.3], direction: normalize([0, 0.34, 1])! },
    profile: asphereOn(-14.5, { A4: 0.0067, A6: 0.00085 }),
    vertexZ: 0,
    options: { maxT: 11, clearRadius: 8.9 },
  };
  /* Surface P's conic with a quartic term too small to move the root: the conic's root already meets the target,
   * so the cases below can put a bound, or the rim, 1e-12 mm from the point the route finds. */
  const thin = asphereOn(40, { K: -0.5, A4: 1e-14 });
  const onThin: Solve = { ...onP, profile: thin };
  const thinHit = intersectSurfaceProfile(obliqueP, thin, 0, onThin.options);
  if (!thinHit.ok) throw new Error("the thin asphere is hit by the oblique ray");
  const farOblique = asphereOn(300, { A4: 1e-7 });
  // A ray 1e-6 off the axial direction, 5 mm from the axis: its bounds can be set a hair to each side of its hit.
  const nearlyAxial: Ray3 = { origin: [3, 4, -10], direction: normalize([1e-6, 0, 1])! };
  const nearlyAxialHit = intersectSurfaceProfile(nearlyAxial, thin, 0, onThin.options);
  if (!nearlyAxialHit.ok) throw new Error("the thin asphere is hit by the nearly axial ray");
  const withTolerance = (input: Solve, tolerance: number): Solve => ({
    ...input,
    options: { ...input.options, tolerance },
  });
  /** A copy of a profile that counts the slope-bound calls made on it, and keeps the radii they ask for. */
  const slopeBoundCalls = (p: SurfaceProfile) => {
    const radii: number[] = [];
    const profile: SurfaceProfile = { ...p, maxAbsSlope: (radius) => (radii.push(radius), p.maxAbsSlope!(radius)) };
    return { profile, radii };
  };
  /** A copy of a profile whose evaluation number `call` answers with `answer`, and that counts its evaluations. */
  const answering = (p: SurfaceProfile, call: number, answer: (radius: number) => SagSlope) => {
    const counter = { evaluations: 0 };
    const profile: SurfaceProfile = {
      ...p,
      evaluate: (radius, out) => (++counter.evaluations === call ? answer(radius) : p.evaluate(radius, out)),
    };
    return { profile, counter };
  };

  describe("which path answers each asphere fixture", () => {
    const { fixtures } = JSON.parse(readFileSync(INTERSECTION_FIXTURE_PATH, "utf-8")) as IntersectionFixtureFile;
    /* Each fixture's solve, with its sd as the clear radius. A seeded fixture lists the profile evaluations of the
     * route and of the iterative path. The others list what the route returns in place of a hit; their solve is
     * then that path's, member for member and evaluation for evaluation. intersectionFixtures.test.ts holds the
     * same solves to the 60-decimal roots. */
    const PATHS: Record<string, { seeded: number; iterative: number } | { route: SeedRefusal | null }> = {
      "asphere-even": { seeded: 3, iterative: 6 },
      "asphere-odd": { seeded: 3, iterative: 5 },
      "asphere-odd-axial": { seeded: 1, iterative: 3 },
      "asphere-steep-high-order": { seeded: 4, iterative: 6 },
      "asphere-far-oblique-in-cap": { seeded: 3, iterative: 25 },
      "asphere-flat-quartic-cap-edge": { route: "noSeed" },
      "asphere-flat-far-vertex": { route: null },
      "asphere-flat-steep-stall": { route: null },
      "asphere-flat-transverse-cancellation": { route: null },
      "asphere-two-roots-in-cap": { route: "noSeed" },
      "asphere-grazing-chord": { route: "slopeBound" },
      "asphere-exterior-then-cap": { route: "slopeBound" },
      "asphere-exterior-only": { route: null },
      "asphere-no-root": { route: null },
    };
    const aspheres = fixtures.filter((fixture) => fixture.kind === "asphere");

    it("lists every asphere fixture", () => {
      expect(Object.keys(PATHS).sort()).toEqual(aspheres.map((fixture) => fixture.id).sort());
    });

    it.each(aspheres.map((fixture) => [fixture.id, fixture] as const))("%s", (id, { surface, ray, bounds }) => {
      const input: Solve = {
        ray,
        profile: createSurfaceProfile({ R: surface.R }, surface.asphere ?? undefined),
        vertexZ: surface.vertexZ,
        options: { ...bounds, directionNormalized: true, clearRadius: surface.sd ?? undefined },
      };
      const path = PATHS[id];
      if ("seeded" in path) expectSeeded(input, path);
      else expectIterative(input, path.route, { spent: 0 });
    });
  });

  it("takes the route on an ordinary hit, with the profile's own normal", () => {
    const { result } = expectSeeded(onP, { seeded: 3, iterative: 5 });
    expect(result.normal).toEqual(surfaceP.normalAt(result.point, 0));
  });

  it("returns the accepted evaluation: its residual, the optical path, and a normal with no further pass", () => {
    let normalPasses = 0;
    const watched: SurfaceProfile = {
      ...surfaceP,
      normalAt: (point, vertexZ) => (normalPasses++, surfaceP.normalAt(point, vertexZ)),
    };
    const hit = intersectSurfaceProfile(obliqueP, watched, 0, { ...onP.options, refractiveIndex: 1.5 });
    if (!hit.ok) throw new Error("surface P is hit by the oblique ray");
    // The normal is built from the slope the accepted evaluation holds, not from another pass over the profile.
    expect(normalPasses).toBe(0);
    expect(hit.residual).toBe(hit.point[2] - surfaceP.sag(hit.radius));
    expect(hit.residual).not.toBe(0);
    expect(hit.opticalPathLength).toBe(1.5 * hit.t);
    expect(hit.segmentLength).toBe(hit.t);
  });

  it("is not tried on another kind of profile, or on input the iterative path rejects", () => {
    const { ray, options } = onP;
    // A conic without a polynomial term, a sphere and a plane are the closed forms', fallbacks included.
    for (const profile of [
      asphereOn(40, { K: -0.5 }),
      createSurfaceProfile({ R: 40 }),
      createSurfaceProfile({ R: 1e15 }),
    ]) {
      expect(seedAsphereSolve(ray, profile, 0, options)).toBeNull();
    }
    expect(seedAsphereSolve(ray, { ...surfaceP, maxAbsSlope: undefined }, 0, options)).toBeNull();
    // No direction, no upper bound, reversed bounds, and no clear radius.
    expect(seedAsphereSolve({ origin: ray.origin, direction: [0, 0, 0] }, surfaceP, 0, options)).toBeNull();
    expect(seedAsphereSolve(ray, surfaceP, 0, { clearRadius: 15 })).toBeNull();
    expect(seedAsphereSolve(ray, surfaceP, 0, { minT: 5, maxT: 2, clearRadius: 15 })).toBeNull();
    expect(seedAsphereSolve(ray, surfaceP, 0, { maxT: 20 })).toBeNull();
  });

  it("holds a direction as the solve is told to, with its lengths per unit of the ray parameter", () => {
    // Surface P's ray on a direction twice as long, taken as given: the same point at half the parameter.
    const twice: Solve = {
      ...onP,
      ray: { origin: obliqueP.origin, direction: [0, 0.72, 2] },
      options: { maxT: 10, clearRadius: 15, directionNormalized: true },
    };
    const { result } = expectSeeded(twice, { seeded: 3, iterative: 5 });
    expect(result.t).toBeCloseTo(5.03539606941781, 12);
    expect(result.radius).toBeCloseTo(2.374514830019, 12);
  });

  describe("the vertex plane", () => {
    it("returns the vertex-plane point of an axial ray, the iterative path's own", () => {
      const axial: Solve = { ...onP, ray: { origin: [0, 0, -10], direction: [0, 0, 1] } };
      const { route, result, evaluations, iterative } = solveBothWays(axial);
      expect(route).toMatchObject({ ok: true, t: 10, iterations: 1 });
      expect(result).toEqual(iterative);
      expect(evaluations).toBe(1);
    });

    it("starts from the vertex-plane crossing within twice the target of that plane, off the axis too", () => {
      /* An oblique ray that crosses the vertex plane 5e-6 mm from the axis, where surface P's sag is 3e-13 mm. The
       * iterative path stops on that crossing, and so does the route, from one evaluation. Started from the
       * conic's root it would find a point 3e-13 mm on, which is not that path's. */
      const nearVertex: Solve = { ...onP, ray: { origin: [0, -3.6 + 5e-6, -10], direction: obliqueP.direction } };
      const offAxis = expectSeeded(nearVertex, { seeded: 1, iterative: 3 });
      expect(offAxis.result).toEqual(offAxis.iterative);
      /* Twice the target, not once. On this nearly flat base the conic's sag at the crossing is 1.4e-12 mm, and
       * the quartic term brings the surface's back to 7.5e-13, inside the target: the crossing is that path's
       * point here too. */
      const shallowBase: Solve = {
        ray: { origin: [0, -0.0483, -1], direction: normalize([0, 0.05, 1])! },
        profile: asphereOn(1e6, { A4: -0.083 }),
        vertexZ: 0,
        options: { maxT: 2, clearRadius: 1 },
      };
      const inBand = expectSeeded(shallowBase, { seeded: 1, iterative: 3 });
      expect(inBand.result).toEqual(inBand.iterative);
    });

    it("does not start from a crossing outside the cap interval", () => {
      /* The thin asphere's sag is 8e-13 mm where this ray crosses the vertex plane, 8e-6 mm from the axis, and the
       * ray is started 5e-13 mm past that crossing. The crossing is behind the lower bound, so the route starts
       * from the conic's root and finds a point within twice the target of the vertex plane that is not the
       * crossing. The iterative path returns the lower bound itself. */
      const crossing = 10 / obliqueP.direction[2];
      const startedPast: Solve = {
        ...onThin,
        ray: { origin: at([0, -3.6 + 8e-6, -10], crossing + 5e-13, obliqueP.direction), direction: obliqueP.direction },
        options: { maxT: 5, clearRadius: 15 },
      };
      const result = expectIterative(startedPast, "vertexPlane", { iterative: 1, spent: 1 });
      expect(result).toMatchObject({ ok: true, t: 0, iterations: 0 });
    });
  });

  describe("follows the caller's tolerance", () => {
    it("in the move between the two paths' points, and in the tolerance a hit reports", () => {
      // At 1e-9 mm two points that both meet the target can lie further apart than a hit may move.
      const loose = expectIterative(withTolerance(onP, 1e-9), "nearTangency", { spent: 0 });
      expect(loose).toMatchObject({ ok: true, effectiveTolerance: 1e-9 });
      const { result } = expectSeeded(withTolerance(onP, 1e-13), { seeded: 3, iterative: 6 });
      expect(Math.abs(result.residual)).toBeLessThanOrEqual(1e-13);
    });

    it("in what the iteration accepts, and in the rounding the residual may carry", () => {
      // This ray's second evaluation leaves 9.3e-12 mm: a hit at a target of 1e-11, one evaluation short of the default.
      const second: Solve = { ...onP, ray: { origin: [0, -5.3, -10], direction: obliqueP.direction } };
      expectSeeded(second, { seeded: 3, iterative: 5 });
      const { result } = expectSeeded(withTolerance(second, 1e-11), { seeded: 2, iterative: 5 });
      expect(Math.abs(result.residual)).toBeGreaterThan(1e-12);
      // The residual of surface P's ray carries 8e-14 mm of rounding: over 31/32 of a target of 5e-14.
      expectIterative(withTolerance(onP, 5e-14), "roundoff", { iterative: 6, spent: 3 });
    });

    it("in both bands about the vertex plane", () => {
      /* Surface P's sag is 8e-11 mm where this ray crosses the vertex plane: outside twice the default target and
       * inside twice 1e-10. At 1e-10 the route starts from the crossing, where the iterative path stops. */
      const nearVertex: Solve = { ...onP, ray: { origin: [0, -3.6 + 8e-5, -10], direction: obliqueP.direction } };
      const { result, iterative } = expectSeeded(withTolerance(nearVertex, 1e-10), { seeded: 1, iterative: 3 });
      expect(result).toEqual(iterative);
      /* A flat-based asphere whose sag is 1.4e-11 mm at this ray's hit, 0.0066 mm from the axis. The hit is not
       * the vertex-plane crossing. At the default target it is clear of the band and is returned; at 1e-11 it is
       * inside it, where the iterative path may stop on the crossing instead. */
      const offCrossing: Solve = {
        ray: { origin: [0, 1.4974, -4.7], direction: normalize([0, -0.32, 1])! },
        profile: asphereOn(1e15, { A4: -0.0076, A6: -0.00073 }),
        vertexZ: 0,
        options: { maxT: 15, clearRadius: 6.1 },
      };
      expectSeeded(offCrossing, { seeded: 2, iterative: 4 });
      expectIterative(withTolerance(offCrossing, 1e-11), "vertexPlane", { iterative: 4, spent: 2 });
    });

    it("in the guard on cap points beyond the stretch", () => {
      /* Bounds 1.8764e-6 mm to each side of the nearly axial ray's hit: one scan step is 5e-11 mm more than twice
       * the envelope a cap point beyond the stretch can have. That clears a target of 1e-12 and not one of 1e-10. */
      const input: Solve = {
        ...onThin,
        ray: nearlyAxial,
        options: { minT: nearlyAxialHit.t - 1.8764e-6, maxT: nearlyAxialHit.t + 1.8764e-6, clearRadius: 15 },
      };
      expectSeeded(input, { seeded: 2, iterative: 3 });
      expectIterative(withTolerance(input, 1e-10), "farEnvelope", { iterative: 3, spent: 0 });
    });

    it("in the length a scan step has to exceed", () => {
      // Bounds 5e-10 mm to each side of the hit: a scan step of 4.2e-11 mm, over a target of 1e-12 and under 1e-10.
      const input: Solve = {
        ...onThin,
        options: { minT: thinHit.t - 5e-10, maxT: thinHit.t + 5e-10, clearRadius: 15 },
      };
      expectSeeded(input, { seeded: 1, iterative: 3 });
      expectIterative(withTolerance(input, 1e-10), "shortBounds", { iterative: 3, spent: 0 });
    });
  });

  describe("refusals return the iterative path's result", () => {
    const shallow = normalize([0, 1, 0.004])!;
    /* A launch 250 mm off the axis toward a small cap. The ends of the cap interval are solved from the origin and
     * lose digits as (250 / sd)^2: 1.1e-9 mm of rounding at a cap of 0.2 mm, over the clip tolerance, and 0.9e-9
     * at 0.25. The coordinate sum itself is the same 1.8e-12 mm for both. */
    const toSmallCap = (clearRadius: number): Solve => ({
      ray: { origin: [0, -250, -100], direction: normalize([0, 1, 0.4])! },
      profile: asphereOn(1e15, { A4: 1e-9 }),
      vertexZ: 0,
      options: { maxT: 300, clearRadius },
    });
    /* z = -4.2e-15 r^20 with a cap of 5, met at r = 4.87 by a ray that first crosses the polynomial continuation
     * outside the cap, at r = 5.41. The direction is 1e13 long and is taken as given. */
    const onLongDirection: Solve = {
      ray: { origin: [0, 5.775, -3.1], direction: [0, -3e12, 9.5e12] },
      profile: asphereOn(1e15, { A20: -4.2e-15 }),
      vertexZ: 0,
      options: { maxT: 4e-13, clearRadius: 5, directionNormalized: true },
    };
    /* A ray that crosses the vertex plane 4e-16 mm inside the radius of 1e-12 mm, with a scan whose first sample
     * is 8e-13 mm past that crossing: the iterative path accepts the sample, 4e-16 mm outside that radius. */
    const onAxisStep = (R: number): Solve => ({
      ray: { origin: [-0.0000499999990004, 0, -0.04999997499999376], direction: [0.001, 0, 0.999999499999875] },
      profile: asphereOn(R, { A4: 1 }),
      vertexZ: 0,
      options: { maxT: 1.2000000000192, clearRadius: 0.2 * R, directionNormalized: true },
    });
    /* One case per reason, with the evaluations the route spends before it refuses: none where the refusal follows
     * from the ray and the slope bound alone. */
    const CASES: [SeedRefusal, string, number, Solve][] = [
      ["noSeed", "the base conic is met outside the cap", 0, { ...onP, options: { maxT: 20, clearRadius: 2 } }],
      [
        "coordinateRoundoff",
        "a launch 400 m off the axis",
        0,
        {
          ray: { origin: [0, -4e5, -4e5], direction: normalize([0, 1, 1])! },
          profile: farOblique,
          vertexZ: 0,
          options: { minT: 565680, maxT: 565700, clearRadius: 20 },
        },
      ],
      ["coordinateRoundoff", "the ends of a cap interval solved from 250 mm off the axis", 0, toSmallCap(0.2)],
      [
        "slopeBound",
        "a ray too oblique for the slope bound over its stretch",
        0,
        { ...onP, ray: { origin: [0, -8, -1], direction: normalize([0, 1, 0.2])! } },
      ],
      [
        "roundoff",
        "a vertex 300 mm from the origin of coordinates",
        0,
        { ...onP, ray: { origin: [0, -6, 290], direction: obliqueP.direction }, vertexZ: 300 },
      ],
      [
        "nearTangency",
        "a ray 0.23 degrees from the surface",
        0,
        {
          ray: { origin: [0, -0.5, -0.002], direction: shallow },
          profile: asphereOn(1e15, { A4: 1e-9 }),
          vertexZ: 0,
          options: { maxT: 1.2, clearRadius: 1 },
        },
      ],
      ["notConverged", "six evaluations that do not reach the target", 6, onQ],
      [
        "vertexPlane",
        "a hit within twice the target of the vertex plane, off the point the iterative path stops on",
        2,
        {
          ray: { origin: [0, 1.5, -4.7], direction: normalize([0, -0.32, 1])! },
          profile: asphereOn(1e15, { A4: -0.0076, A6: -0.00073 }),
          vertexZ: 0,
          options: { maxT: 15, clearRadius: 6.1 },
        },
      ],
      [
        "atBound",
        "a ray started 1e-12 mm before its hit",
        1,
        {
          ...onThin,
          ray: { origin: at(obliqueP.origin, thinHit.t - 1e-12, obliqueP.direction), direction: obliqueP.direction },
          options: { maxT: 5, clearRadius: 15 },
        },
      ],
      [
        "atBound",
        "an upper bound 1e-12 mm past the hit",
        1,
        { ...onThin, options: { maxT: thinHit.t + 1e-12, clearRadius: 15 } },
      ],
      [
        "atRim",
        "a cap that ends 1e-13 mm outside the hit",
        1,
        { ...onThin, options: { maxT: 20, clearRadius: thinHit.radius + 1e-13 } },
      ],
      [
        "farEnvelope",
        "bounds a nanometre to each side of the hit",
        0,
        {
          ...onThin,
          ray: nearlyAxial,
          options: { minT: nearlyAxialHit.t - 1e-6, maxT: nearlyAxialHit.t + 1e-6, clearRadius: 15 },
        },
      ],
      ["shortBounds", "a direction 1e13 long, with bounds of 4e-13 in its parameter", 0, onLongDirection],
      [
        "axisNormal",
        "a hit 4e-16 mm inside the radius where a normal becomes the axis', on a base radius of 1 µm",
        1,
        onAxisStep(0.001),
      ],
    ];

    it.each(CASES)("%s: %s", (reason, _what, spent, input) => {
      const result = expectIterative(input, reason, { spent });
      expect(result.ok).toBe(true);
    });

    it("names every reason", () => {
      const reasons: Record<SeedRefusal, true> = {
        noSeed: true,
        coordinateRoundoff: true,
        shortBounds: true,
        slopeBound: true,
        farEnvelope: true,
        roundoff: true,
        nearTangency: true,
        axisNormal: true,
        notConverged: true,
        vertexPlane: true,
        atBound: true,
        atRim: true,
      };
      expect([...new Set(CASES.map(([reason]) => reason))].sort()).toEqual(Object.keys(reasons).sort());
    });

    it("keeps the exterior hit that cap selection returns on a direction that is not a unit vector", () => {
      /* Cap selection keeps an established hit when the cap search's hit is within the tolerance of it in the ray
       * parameter. On this direction 4 mm of ray are 4e-13 of parameter, so it keeps the root this ray meets
       * outside the cap, 1.8 mm before the cap's. The route's certificate is about the cap's root. */
      const result = expectIterative(onLongDirection, "shortBounds", { iterative: 22, spent: 0 });
      expect(result.ok && result.radius).toBeGreaterThan(5.4);
      // The same ray on a unit direction: both paths return the cap's root.
      const { ray, options } = onLongDirection;
      const unit: Solve = {
        ...onLongDirection,
        ray: { origin: ray.origin, direction: normalize(ray.direction)! },
        options: { maxT: 4, clearRadius: options.clearRadius },
      };
      const { result: capRoot } = expectSeeded(unit, { seeded: 5, iterative: 22 });
      expect(capRoot.radius).toBeLessThan(4.9);
    });

    it("keeps the miss of a ray whose transverse speed underflows when squared", () => {
      /* z = r^3 met by a ray 1e-162 off the axial direction: the residual t - 1 - (1e-162 t)^3 has roots at 1 and
       * at 1e243, both inside the first scan step of these bounds, so the scan finds no bracket. The square of
       * 1e-162 is zero, which would make this ray axial and its slope bound moot. */
      const input: Solve = {
        ray: { origin: [0, 0, -1], direction: [1e-162, 0, 1] },
        profile: asphereOn(1e15, { A3: 1 }),
        vertexZ: 0,
        options: { maxT: 3.6e244, clearRadius: 10, directionNormalized: true },
      };
      const result = expectIterative(input, "coordinateRoundoff", { spent: 0 });
      expect(result).toMatchObject({ ok: false, failureReason: "noBracket", iterations: 24 });
      // The square of 1e-160 is not zero, and has lost its digits: the cap interval solved from it is not this ray's.
      const denormal: Solve = {
        ...onThin,
        ray: { origin: [0, 0, -10], direction: [1e-160, 0, 1] },
        options: { maxT: 20, clearRadius: 15, directionNormalized: true },
      };
      expectIterative(denormal, "coordinateRoundoff", { iterative: 3, spent: 0 });
    });

    it("returns the iterative path's normal where the two points straddle the radius of the axis' normal", () => {
      /* Under 1e-12 mm of radius a normal is the axis'. The route's point is 4e-16 mm inside that radius and the
       * iterative path's 4e-16 mm outside, where the normal of a 1 µm sphere leans by 1e-9. */
      const result = expectIterative(onAxisStep(0.001), "axisNormal", { iterative: 2, spent: 1 });
      expect(result.ok && result.normal[0]).toBeCloseTo(-1.0004e-9, 13);
      // On a base radius of 5 µm the step is 2e-10, still over half a direction cosine's budget.
      expectIterative(onAxisStep(0.005), "axisNormal", { spent: 1 });
    });

    it("takes the same surfaces and rays where no gate refuses", () => {
      // The thin asphere's oblique ray and its nearly axial one, with ordinary bounds and cap.
      expectSeeded(onThin, { seeded: 1, iterative: 5 });
      expectSeeded({ ...onThin, ray: nearlyAxial }, { seeded: 2, iterative: 4 });
      // The same launch toward a cap a quarter wider, where the rounding of its ends is inside the clip tolerance.
      expectSeeded(toSmallCap(0.25), { seeded: 1, iterative: 17 });
      // The same crossing on a base radius of 0.5 mm, whose normal leans by 2e-12 there.
      expectSeeded(onAxisStep(0.5), { seeded: 1, iterative: 3 });
    });
  });

  it("leaves zero and exhausted budgets to the iterative path, with the meaning they have there", () => {
    expectSeeded(onP, { seeded: 3, iterative: 5 });
    const budgeted = (option: SurfaceIntersectionOptions) => {
      const options = { ...onP.options, ...option };
      expect(seedAsphereSolve(obliqueP, surfaceP, 0, options)).toBeNull();
      const { profile, counter } = countingProfile(surfaceP);
      return { result: intersectSurfaceProfile(obliqueP, profile, 0, options), evaluations: counter.evaluations };
    };
    const whole = budgeted({ maxIterations: INTERSECTION_MAX_ITERATIONS });
    expect(whole).toMatchObject({ result: { ok: true, iterations: 3 }, evaluations: 5 });
    // A budget of exactly the iterations the hit takes, and a scan density, select the same path and the same hit.
    expect(budgeted({ maxIterations: 3 })).toEqual(whole);
    expect(budgeted({ bracketSamples: 24 })).toEqual(whole);
    // One short: the pending step is evaluated, and it is the hit.
    expect(budgeted({ maxIterations: 2 }).result).toEqual({ ...whole.result, iterations: 2 });
    expect(budgeted({ maxIterations: 1 }).result).toMatchObject({
      ok: false,
      failureReason: "noConvergedIntersection",
      iterations: 1,
    });
    expect(budgeted({ maxIterations: 0 }).result).toMatchObject({
      ok: false,
      failureReason: "noConvergedIntersection",
      iterations: 0,
    });
  });

  it("spends at most six evaluations of its own, then falls back to the whole iterative budget", () => {
    // The six are not charged to that path: it runs its own 30 evaluations and returns its own iteration count.
    const result = expectIterative(onQ, "notConverged", { iterative: 30, spent: 6 });
    expect(result).toMatchObject({ ok: true, iterations: 4, effectiveTolerance: 1e-12 });
  });

  it("takes a steep quartic where its slope is certified, and refuses before evaluating where it is not", () => {
    // z = r^4 / 8 with a cap of 2: the sag slope reaches 4 at the rim.
    const quartic = asphereOn(1e15, { A4: 0.125 });
    const options = { maxT: 4, clearRadius: 2 };
    const inner: Solve = {
      ray: { origin: [0, 0.4, -2], direction: normalize([0, 0.28, 1])! },
      profile: quartic,
      vertexZ: 0,
      options,
    };
    expectSeeded(inner, { seeded: 4, iterative: 6 });
    /* This ray crosses the cap from r = 1.5, where the slope bound is 1.69 against the 1.05 its direction
     * tolerates, to a hit at r = 0.4. The refusal costs no evaluation. */
    const across: Solve = { ...inner, ray: { origin: [0, -1.5, -2], direction: normalize([0, 0.95, 1])! } };
    const result = expectIterative(across, "slopeBound", { iterative: 27, spent: 0 });
    expect(result.ok && result.radius).toBeCloseTo(0.403136, 6);
  });

  describe("an in-cap hit whose operand sum exceeds 281 mm", () => {
    /** The transverse operand sum the cap-selection certificate holds to the residual tolerance: 281 mm at 1e-12. */
    const operandSum = ({ ray, options }: Solve) =>
      Math.abs(ray.origin[0]) +
      Math.abs(ray.origin[1]) +
      Math.hypot(ray.direction[0], ray.direction[1]) * options.maxT!;

    it("keeps its certificate where its residual rounding is within 31/32 of the target", () => {
      // The ray of the fixture "asphere-far-oblique-in-cap": launched 200 mm off the axis, hit at r = 4.1.
      const input: Solve = {
        ray: { origin: [0, -200, -60], direction: normalize([0, 3.4, 1])! },
        profile: farOblique,
        vertexZ: 0,
        options: { minT: 200.641, maxT: 224.641, clearRadius: 20 },
      };
      expect(operandSum(input)).toBeGreaterThan(415);
      // The iterative path's own certificate is refused at that sum, and it scans the cap: 25 evaluations.
      const { result, iterative } = expectSeeded(input, { seeded: 3, iterative: 25 });
      expect(result.t).toBe(iterative.t);
      expect(result.radius).toBeCloseTo(4.09513, 5);
    });

    it("is left to the scan where it is not", () => {
      /* The flat quartic of the certificate test above, launched 150 mm off the axis and 150 mm before the
       * vertex: 305 mm of transverse operands and 300 mm of axial ones, whose rounding alone is 1.07e-12 mm. */
      const input: Solve = {
        ray: { origin: [0, -150, -150], direction: normalize([0, 1, 1])! },
        profile: asphereOn(1e15, { A4: 1e-4 }),
        vertexZ: 0,
        options: { maxT: 225, clearRadius: 5 },
      };
      expect(operandSum(input)).toBeGreaterThan(300);
      const result = expectIterative(input, "roundoff", { iterative: 17, spent: 0 });
      expect(result).toMatchObject({ ok: true, effectiveTolerance: 1e-12 });
    });

    it("draws that line at 31/32 of the target, not at the target", () => {
      /* Surface P and its ray moved along the axis. With the vertex at 138 mm the residual's rounding at the hit is
       * 9.9e-13 mm, between 31/32 of the target and the target; at 133 mm it is 9.5e-13. */
      const movedTo = (vertexZ: number): Solve => ({
        ...onP,
        ray: { origin: [0, -6, vertexZ - 10], direction: obliqueP.direction },
        vertexZ,
      });
      expectSeeded(movedTo(133), { seeded: 3, iterative: 5 });
      expectIterative(movedTo(138), "roundoff", { iterative: 5, spent: 3 });
    });
  });

  describe("the certificate", () => {
    it("asks the slope bound for the stretch's largest radius, with its margins and the coordinate rounding", () => {
      /* Surface P's ray starts 6 mm from the axis and comes inward, so the stretch's largest radius is its start's.
       * The radius certified carries the margins of the cap-selection certificate and the rounding of a
       * coordinate, which counts the far end of the cap interval and the ends that interval is solved to. */
      const { profile, radii } = slopeBoundCalls(surfaceP);
      expect(seedAsphereSolve(obliqueP, profile, 0, onP.options)).toMatchObject({ ok: true });
      const transverseSpeed = Math.hypot(obliqueP.direction[0], obliqueP.direction[1]);
      const coordinateRounding = 16 * Number.EPSILON * (6 + transverseSpeed * 20) + (16 * Number.EPSILON * 6 * 6) / 15;
      expect(radii).toHaveLength(1);
      expect(coordinateRounding).toBeGreaterThan(5e-14);
      expect(Math.abs(radii[0] - (6 * (1 + 1e-12) + coordinateRounding + 1e-12))).toBeLessThan(2e-15);
    });

    it.each([-1, NaN, Infinity])("certifies nothing from an invalid slope bound (%s)", (bound) => {
      const profile: SurfaceProfile = { ...surfaceP, maxAbsSlope: () => bound };
      expectIterative({ ...onP, profile }, "slopeBound", { spent: 0 });
    });

    it("holds the least |f'| to the floor of the cap-selection certificate", () => {
      // Surface P's ray on a direction 5e-11 long: |f'| per unit of its parameter is under 1e-10 everywhere.
      const [, dy, dz] = obliqueP.direction;
      const slow: Solve = {
        ...onP,
        ray: { origin: obliqueP.origin, direction: [0, dy * 5e-11, dz * 5e-11] },
        options: { maxT: 20 / 5e-11, clearRadius: 15, directionNormalized: true },
      };
      expectIterative(slow, "slopeBound", { spent: 0 });
    });

    it("takes the rounding of the residual under the stretch's slope bound, not the slope at the point", () => {
      /* A launch 62 mm off the axis of a sphere of R = 100 with a small quartic term, hit 2 mm from the axis. The
       * slope there is 0.02, and the slope bound over the stretch is 0.79 at its start: weighted by it, the 122 mm
       * of transverse operands bring the rounding to 1.05e-12 mm. */
      const launchedAt = (y: number): Solve => ({
        ray: { origin: [0, y, -100], direction: normalize([0, 0.6, 1])! },
        profile: asphereOn(100, { A4: 1e-9 }),
        vertexZ: 0,
        options: { maxT: 130, clearRadius: 70 },
      });
      const result = expectIterative(launchedAt(-62), "roundoff", { iterative: 5, spent: 2 });
      expect(result.ok && result.radius).toBeCloseTo(1.98814, 5);
      // From 40 mm off the axis the bound is 0.44 and the rounding 0.9e-12 mm.
      expectSeeded(launchedAt(-40), { seeded: 3, iterative: 6 });
    });

    it("counts a scan step with the rounding of its samples' positions", () => {
      /* 5000 mm from the origin a sample's position rounds by up to 4.4e-12 mm. These bounds make a scan step of
       * 9.8e-11 mm without that and 1.02e-10 with it, against a target of 1e-10. */
      const input: Solve = {
        ray: { origin: [0, 0, -5000], direction: [0, 0, 1] },
        profile: thin,
        vertexZ: 0,
        options: { minT: 5000 - 1.176e-9, maxT: 5000 + 1.176e-9, clearRadius: 15, tolerance: 1e-10 },
      };
      const { result, iterative } = expectSeeded(input, { seeded: 1, iterative: 3 });
      expect(result).toEqual(iterative);
    });

    it("guards nothing beyond a stretch that reaches the upper bound", () => {
      /* Bounds 1e-9 mm to each side of the nearly axial ray's hit. One scan step and the move between the two
       * points reach past both, so no cap point lies beyond the stretch. With bounds 1e-6 mm to each side the
       * stretch ends short of the upper bound and the guard refuses (the table above). */
      const input: Solve = {
        ...onThin,
        ray: nearlyAxial,
        options: { minT: nearlyAxialHit.t - 1e-9, maxT: nearlyAxialHit.t + 1e-9, clearRadius: 15 },
      };
      expectSeeded(input, { seeded: 2, iterative: 3 });
    });

    describe("the move between the two paths' points", () => {
      // A sphere of R = 2.5 with a small quartic term: the normal turns by up to 0.4 per mm at the vertex.
      const strong = asphereOn(2.5, { A4: 1e-3 });

      it("is held to half a direction cosine's budget through the turn of the normal", () => {
        const options = { maxT: 2, clearRadius: 1.4 };
        /* 56 degrees off the axis the slope bound leaves |f'| no less than 0.17: the two points lie within
         * 1.2e-11 mm, a fortieth of what a hit may move, over which the normal can turn by 9e-11. That is known
         * from the ray and the slope bound alone. */
        const steep: Solve = {
          ray: { origin: [0, -1.05, -0.5], direction: normalize([0, 1.5, 1])! },
          profile: strong,
          vertexZ: 0,
          options,
        };
        expectIterative(steep, "nearTangency", { iterative: 6, spent: 0 });
        // At 45 degrees |f'| is no less than 0.44, and the turn over the move 2.6e-11.
        const lessSteep: Solve = { ...steep, ray: { origin: [0, -0.8, -0.5], direction: normalize([0, 1, 1])! } };
        expectSeeded(lessSteep, { seeded: 3, iterative: 6 });
      });

      it("counts the conic's curvature and the polynomial's in that turn", () => {
        /* A ray started 2.45 mm from the axis, 98% of the conic's domain radius, where the conic's own curvature is
         * over half of the bound on the turn. At 6.8 degrees the conic's part of the turn over the move is 3.3e-11
         * and the polynomial's 2.5e-11: either alone is inside the limit, their sum is not. */
        const options = { maxT: 4, clearRadius: 2.49 };
        const nearEdge = (tilt: number): Solve => ({
          ray: { origin: [0, -2.45, -0.5], direction: normalize([0, tilt, 1])! },
          profile: strong,
          vertexZ: 0,
          options,
        });
        expectIterative(nearEdge(0.12), "nearTangency", { iterative: 7, spent: 0 });
        expectSeeded(nearEdge(0.05), { seeded: 3, iterative: 7 });
      });

      it("is counted toward the rim, with the rounding of both radii", () => {
        /* The thin asphere's oblique ray, whose two points lie within 8e-13 mm of radius, with radii that round by
         * 2e-13 between them: a cap 5e-13 mm outside the hit is too near, one 2e-12 mm outside is not. */
        const capOutsideBy = (gap: number): Solve => ({
          ...onThin,
          options: { maxT: 20, clearRadius: thinHit.radius + gap },
        });
        expectIterative(capOutsideBy(5e-13), "atRim", { iterative: 5, spent: 1 });
        expectSeeded(capOutsideBy(2e-12), { seeded: 1, iterative: 5 });
        // An axial ray 5 mm from the axis: its two points have one radius, which rounds by 6e-14 mm for each.
        const axialCapOutsideBy = (gap: number): Solve => ({
          ...onThin,
          ray: { origin: [3, 4, -10], direction: [0, 0, 1] },
          options: { maxT: 20, clearRadius: 5 + gap },
        });
        expectIterative(axialCapOutsideBy(5e-14), "atRim", { iterative: 4, spent: 2 });
        expectSeeded(axialCapOutsideBy(1e-12), { seeded: 2, iterative: 4 });
      });
    });

    describe("the certificate about the point", () => {
      /* A fuzzed ray whose window, one scan step to each side of the seed, reaches radii where the slope bound
       * leaves too little |f'| for the normal's limit; the stretch about the point alone does not. */
      const windowTooWide: Solve = {
        ray: {
          origin: [4.1590269728708655, -2.740028016515651, -10.509225539688956],
          direction: [-0.45485986506414233, 0.16258911048517366, 0.8755953884674531],
        },
        profile: asphereOn(106.69192128080991, { A4: 7.911316059174475e-5, A14: 6.417733795087523e-5 }),
        vertexZ: 0,
        options: { maxT: 13.57191084824779, clearRadius: 1.5695343189661988, directionNormalized: true },
      };

      it("serves a point inside the window where the window's certificate does not", () => {
        const { result, iterative } = expectSeeded(windowTooWide, { seeded: 4, iterative: 28 });
        expect(result).toEqual(iterative);
      });

      it("is the only one that serves a point outside the window", () => {
        /* A fuzzed ray whose fifth evaluation meets the target outside the window. The window's certificate would
         * pass this point, which its stretch does not cover; the one about the point finds the rounding of the
         * residual over the limit. */
        const input: Solve = {
          ray: {
            origin: [4.702886779879723, 3.5068794044794536, -2.67751053429822],
            direction: [0.0005990994497294247, 0.02537235769055027, 0.9996778903952372],
          },
          profile: asphereOn(77.51850522027796, {
            A4: 0.002316551267596931,
            A6: 2.8057485460832795e-7,
            A12: 3.25534279709838e-9,
          }),
          vertexZ: 0,
          options: { maxT: 64.3257256548954, clearRadius: 6.168180355738542, directionNormalized: true },
        };
        expectIterative(input, "roundoff", { iterative: 7, spent: 5 });
      });

      it("costs a second slope-bound call, made only where the first certificate can be bettered", () => {
        const callsOn = ({ ray, profile, vertexZ, options }: Solve) => {
          const watched = slopeBoundCalls(profile);
          return { route: seedAsphereSolve(ray, watched.profile, vertexZ, options), calls: watched.radii.length };
        };
        // A point inside the window that the window's certificate serves.
        expect(callsOn(onP)).toMatchObject({ route: { ok: true }, calls: 1 });
        expect(callsOn(windowTooWide)).toMatchObject({ route: { ok: true }, calls: 2 });
        /* A ray that starts inside the cap at its largest radius: no stretch about a point of it is tighter than
         * the window's, so a refusal under that certificate stands. */
        const boundAtHit: Solve = { ...onThin, options: { maxT: thinHit.t + 1e-12, clearRadius: 15 } };
        expect(callsOn(boundAtHit)).toEqual({ route: "atBound", calls: 1 });
      });
    });
  });

  describe("the iteration", () => {
    it("ends where a step leaves the cap interval", () => {
      /* Surface P's polynomial moves this outward ray's hit from r = 3.66036 on the base conic to r = 3.66084. A cap
       * that ends between the two holds the conic's root and not the surface's: the first step leaves the cap
       * interval, though not the bounds. */
      const input: Solve = {
        ...onP,
        ray: { origin: [0, 0, -10], direction: obliqueP.direction },
        options: { maxT: 20, clearRadius: 3.6606 },
      };
      const result = expectIterative(input, "notConverged", { iterative: 8, spent: 1 });
      expect(result.ok && result.radius).toBeGreaterThan(3.6606);
    });

    it("ends where a step leaves the conic's domain", () => {
      /* A cap wider than the domain of its base sphere of R = 5. The first step from the sphere's root lands
       * outside that domain, where the surface is not evaluated. The ray has no root. */
      const input: Solve = {
        ray: { origin: [0, 4, -3], direction: normalize([0, 0.1, 1])! },
        profile: asphereOn(5, { A4: 0.01 }),
        vertexZ: 0,
        options: { maxT: 20, clearRadius: 8 },
      };
      const { route, result, evaluations, iterative, iterativeEvaluations } = solveBothWays(input);
      expect(route).toBe("notConverged");
      expect(result).toEqual(iterative);
      expect(result).toMatchObject({ ok: false, failureReason: "noBracket" });
      expect(evaluations - iterativeEvaluations).toBe(1);
    });

    /** z of surface P's oblique ray where its radius is `radius`, before it reaches the axis. */
    const zOnRay = ({ origin, direction }: Ray3, radius: number) =>
      origin[2] + (direction[2] * (-radius - origin[1])) / direction[1];

    it("ends on a correction too small to move t, whatever the residual there", () => {
      /* The second evaluation is answered with a residual of 2e-12 mm and a slope of 1e4: a correction of 6e-16 at
       * t = 10.7. A stall is the iterative path's to judge, so the route neither goes on nor returns the point. */
      const stalled = answering(surfaceP, 2, (radius) => ({ sag: zOnRay(obliqueP, radius) - 2e-12, slope: 1e4 }));
      expect(seedAsphereSolve(obliqueP, stalled.profile, 0, onP.options)).toBe("notConverged");
      expect(stalled.counter.evaluations).toBe(2);
    });

    it("ends on a derivative it cannot divide by", () => {
      /* A sphere of R = 4000 under a cap of 500, so that the cap interval is 400 mm long. The second evaluation is
       * answered with a residual of -1.1e-12 mm and a slope that leaves f' = 9e-15: a correction of 122 mm, to a
       * point still inside the cap interval. */
      const ray: Ray3 = { origin: [0, -60, -100], direction: obliqueP.direction };
      const options = { maxT: 400, clearRadius: 500 };
      const wide = asphereOn(4000, { A4: 1e-12 });
      expect(seedAsphereSolve(ray, wide, 0, options)).toMatchObject({ ok: true, iterations: 2 });
      const flat = answering(wide, 2, (radius) => ({
        sag: zOnRay(ray, radius) + 1.1e-12,
        slope: (9e-15 - ray.direction[2]) / ray.direction[1],
      }));
      expect(seedAsphereSolve(ray, flat.profile, 0, options)).toBe("notConverged");
      expect(flat.counter.evaluations).toBe(2);
    });
  });

  describe("leaves a root the scan does not resolve to the scan (#779)", () => {
    /** The iterative path's miss, with nothing evaluated by the route: the slope bound certifies no such stretch. */
    const expectUnresolved = (input: Solve) => {
      const result = expectIterative(input, "slopeBound", { spent: 0 });
      expect(result).toMatchObject({ ok: false, failureReason: "noBracket", iterations: 24 });
    };

    it("past the point", () => {
      /* A fuzzed ray that meets the cap's surface 0.0096 mm from its origin and crosses the polynomial
       * continuation again 2.26 mm on, outside the cap. Both roots are inside the first 2.54 mm step of the scan of
       * these bounds, whose samples share a sign. The first root is the cap's first, and a certificate that
       * reached only as far as it would return it. The route's reaches one scan step past the root, where the
       * slope bound certifies nothing, so the solve stays the iterative path's miss. */
      const input: Solve = {
        ray: {
          origin: [0.01932244702926018, 0.4967530110802363, 9.5574007596014],
          direction: [-0.3132659831941196, 0.4208002893931687, 0.8513468976980224],
        },
        profile: asphereOn(-3.225266933870704, { K: 0.8924472795333713, A14: 0.0031486773123754327 }),
        vertexZ: 9.604946756735444,
        options: { maxT: 61.000913940452605, clearRadius: 1.022244990318606, directionNormalized: true },
      };
      expectUnresolved(input);
      // In bounds whose scan resolves that root, the route returns it.
      const { result: resolved } = expectSeeded(
        { ...input, options: { ...input.options, maxT: 1 } },
        { seeded: 2, iterative: 6 },
      );
      expect(resolved.t).toBeCloseTo(0.0095975, 7);
      expect(resolved.radius).toBeLessThan(input.options.clearRadius!);
    });

    it("before the point", () => {
      /* A fuzzed ray that enters a cap of 0.59 mm late in its bounds and meets the surface inside it at t = 31.59,
       * having crossed the steep continuation outside the cap less than one scan step earlier. A certificate
       * that started at the cap's edge would return the cap's root. */
      expectUnresolved({
        ray: {
          origin: [-9.926984543136438, 11.682524628594077, -14.610476130227639],
          direction: [0.3029539150321064, -0.36609948960433897, 0.8798807243474321],
        },
        profile: asphereOn(1e15, { A4: -0.00028772305143368385, A10: -7.132303213700877 }),
        vertexZ: 13.185465149581432,
        options: { maxT: 33.346572405788486, clearRadius: 0.5853312312098131, directionNormalized: true },
      });
    });

    it("by a whole scan step, not a part of one", () => {
      /* A fuzzed ray whose second root lies between half a scan step and a whole one past the cap's root at
       * t = 132.17: a certificate that reached half a step would return that root. */
      expectUnresolved({
        ray: {
          origin: [-30.388063927874065, 60.03849249075668, -113.6073851997027],
          direction: [0.23075710340336103, -0.45598256974461465, 0.8595528228782615],
        },
        profile: asphereOn(25.464866780385307, {
          K: -1.3239709502086043,
          A4: 8.48802097807252e-6,
          A6: -1.0898106979340697e-4,
          A8: -1.2063843594698692e-5,
          A14: 1.2953653587728126e-5,
        }),
        vertexZ: 0,
        options: {
          minT: 131.94477985396264,
          maxT: 265.34067151168654,
          clearRadius: 0.5006782333719075,
          directionNormalized: true,
        },
      });
    });
  });

  it("holds the cap's coordinate tolerance to the clear-aperture rule of the trace", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const clipping = state.surfaces.find(
      (surface) => surface.clips && surface.physicalIndex !== state.lens.stop.surfaceIndex,
    );
    if (!clipping) throw new Error("the fixture has a clipping surface besides its stop");
    // The absolute 1e-9 mm under a clear radius of 1000 mm, and the relative 1e-12 above it.
    expect([15, 5000].map(capCoordinateTolerance)).toEqual([1e-9, 5e-9]);
    for (const sd of [15, 5000]) {
      const surface = { ...clipping, sd };
      const edge = sd + capCoordinateTolerance(sd);
      expect(evaluateAperture(state.traceGeometry, surface, edge).state).toBe("inside");
      expect(evaluateAperture(state.traceGeometry, surface, edge * (1 + 4 * Number.EPSILON)).state).toBe("outside");
    }
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
          { label: "3", R: -50, nd: 1.0, sd: 15, d: 80, elemId: 0 },
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

describe("coordinate ulps for Newton stalls", () => {
  it.each([
    [1, Number.EPSILON],
    [2 - Number.EPSILON, Number.EPSILON],
    [2, 2 * Number.EPSILON],
    [Number.MAX_VALUE * (1 - 1e-14), 2 ** 971],
    [Number.MAX_VALUE, 2 ** 971],
    [2 ** -1022, Number.MIN_VALUE],
    [Number.MIN_VALUE, Number.MIN_VALUE],
    [128 * Number.MIN_VALUE, Number.MIN_VALUE],
    [0, Number.MIN_VALUE],
  ])("reads the binade spacing at ±%s", (value, expected) => {
    expect(ulpOf(value)).toBe(expected);
    expect(ulpOf(-value)).toBe(expected);
  });

  it.each([Infinity, -Infinity, NaN])("does not authorize a stall at %s", (value) => {
    expect(ulpOf(value)).toBeNaN();
  });
});
