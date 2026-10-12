import { describe, expect, it } from "vitest";
import type { AsphericCoefficients } from "../../../src/types/optics.js";
import type { SagSlope, Vec3 } from "../../../src/optics/types.js";
import { createSurfaceProfile, createTiltedPlaneProfile, sag } from "../../../src/optics/geometry/surfaceProfile.js";
import { intersectSagSurface } from "../../../src/optics/internal/surfaceIntersection.js";
import { intersectSurfaceProfile } from "../../../src/optics/math/intersection.js";
import {
  cross,
  directionFromSkewSlope,
  dot,
  length,
  normalize,
  reflect,
  refract,
} from "../../../src/optics/math/vector.js";
import {
  compileDiffractivePhase,
  diffractiveRefractedDirection,
  diffractiveParaxialPower,
  radialPhaseKick,
  radialPhaseOpticalPath,
} from "../../../src/optics/math/diffractivePhase.js";

function expectClose(actual: number, expected: number, tolerance: number): void {
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);
}

describe("Optics engine vector math", () => {
  it("normalizes vectors and computes dot/cross products", () => {
    expect(normalize([3, 4, 0])).toEqual([0.6, 0.8, 0]);
    expect(dot([1, 2, 3], [4, -5, 6])).toBe(12);
    expect(cross([1, 0, 0], [0, 1, 0])).toEqual([0, 0, 1]);
  });

  it("maps skew slopes to unit directions and handles reflection/refraction", () => {
    const direction = directionFromSkewSlope(0.1, -0.2);
    expect(direction).not.toBeNull();
    expectClose(length(direction!), 1, 1e-12);

    const reflected = reflect(normalize([0, 1, -1])!, [0, 0, 1]);
    expect(reflected).not.toBeNull();
    expectClose(reflected![2], Math.SQRT1_2, 1e-12);

    expect(refract([0, 0, 1], [0, 0, 1], 1, 1.5)).toEqual([0, 0, 1]);
    expect(refract(normalize([0, 0.95, 0.3122498999])!, [0, 0, 1], 1.5, 1)).toBeNull();
  });
});

describe("Diffractive radial phase math", () => {
  const phase = compileDiffractivePhase({
    kind: "radial-polynomial",
    referenceWavelengthNm: 587.6,
    diffractionOrder: 1,
    terms: [
      { radialPower: 2, coefficient: -4.25304e-5 },
      { radialPower: 4, coefficient: 3e-10 },
    ],
  })!;

  it("reproduces the Nikon PF optical path, gradient kick, and paraxial power", () => {
    const h = 34.9262;
    expectClose(radialPhaseOpticalPath(phase, h), -0.0514339, 2e-7);
    expectClose(radialPhaseKick(phase, h, 587.6), -0.00291973, 2e-8);
    expectClose(1 / diffractiveParaxialPower(phase, 587.6), 11756.29667, 0.02);
  });

  it("scales phase power directly with wavelength", () => {
    const red = diffractiveParaxialPower(phase, 656.3);
    const blue = diffractiveParaxialPower(phase, 486.1);
    expectClose(red / blue, 656.3 / 486.1, 1e-12);
  });

  it("applies a same-index radial kick symmetrically and retraces in reverse", () => {
    const point = [0, 10, 0] as const;
    const forward = diffractiveRefractedDirection([0, 0, 1], [0, 0, 1], point, 1, 1, phase, 587.6);
    expect(forward).not.toBeNull();
    expectClose(forward![1], radialPhaseKick(phase, 10, 587.6), 1e-12);

    const reversedInput = [-forward![0], -forward![1], -forward![2]] as const;
    const reverse = diffractiveRefractedDirection(reversedInput, [0, 0, -1], point, 1, 1, phase, 587.6);
    expect(reverse).not.toBeNull();
    expectClose(reverse![0], 0, 1e-12);
    expectClose(reverse![1], 0, 1e-12);
    expectClose(reverse![2], -1, 1e-12);
  });
});

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
    const hit = intersectSurfaceProfile(ray, createSurfaceProfile({ R }, undefined), vertexZ, {
      maxT: 22.6,
      directionNormalized: true,
    });
    const center: Vec3 = [0, 0, vertexZ + R];
    const offset: Vec3 = [ray.origin[0] - center[0], ray.origin[1] - center[1], ray.origin[2] - center[2]];
    const b = dot(offset, ray.direction);
    const c = dot(offset, offset) - R * R;
    const analyticT = [-b - Math.sqrt(b * b - c), -b + Math.sqrt(b * b - c)].find(
      (t) => ray.origin[2] + t * ray.direction[2] > center[2],
    )!;
    expect(hit.ok).toBe(true);
    if (hit.ok) {
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
   * inside it; that root has no sign change between valid samples, so the search must bracket the edge itself. */
  it("finds a root just inside a conic's domain edge", () => {
    const profile = createSurfaceProfile({ R: 4 }, undefined);
    const angle = (21 * Math.PI) / 180;
    const hit = intersectSurfaceProfile(
      { origin: [0, 6, -2], direction: [0, -Math.sin(angle), Math.cos(angle)] },
      profile,
      0,
      { maxT: 24, directionNormalized: true },
    );

    expect(hit.ok).toBe(true);
    if (!hit.ok) return;
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
