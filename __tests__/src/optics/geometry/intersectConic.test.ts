import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { INTERSECTION_MAX_ITERATIONS } from "../../../../src/optics/constants.js";
import {
  intersectSurfaceProfile,
  type SurfaceIntersectionOptions,
  type SurfaceIntersectionResult,
} from "../../../../src/optics/geometry/intersect.js";
import { baseConicRoot } from "../../../../src/optics/geometry/intersectConic.js";
import { createSurfaceProfile, createTiltedPlaneProfile } from "../../../../src/optics/geometry/surfaceProfile.js";
import { normalize } from "../../../../src/optics/math/vector.js";
import type { Ray3, SagSlope, SurfaceProfile, Vec3 } from "../../../../src/optics/types.js";
import {
  INTERSECTION_FIXTURE_PATH,
  type IntersectionFixtureFile,
  type IntersectionFixtureRoot,
} from "../fixtures/generateIntersectionFixtures.js";

/**
 * Closed-form roots of spheres and polynomial-free conics (geometry/intersectConic.ts), through the kernel's entry.
 *
 * Three things are read off every result so that no case passes without the closed form having run:
 * `closedFormFallback` (null when the closed form answered, a reason after a fallback, absent when it was not
 * tried), the number of calls into a counting copy of the profile, and, for a fallback, equality with the same solve
 * on the iterative path. intersectionFixtures.test.ts holds the same solves to the 60-decimal roots.
 */

const { fixtures } = JSON.parse(readFileSync(INTERSECTION_FIXTURE_PATH, "utf-8")) as IntersectionFixtureFile;
const NO_POLYNOMIAL = { A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };

interface Solve {
  ray: Ray3;
  profile: SurfaceProfile;
  vertexZ: number;
  options: SurfaceIntersectionOptions;
}

/** One committed fixture as the trace asks it: unit direction taken as given, the surface's sd as the cap. */
function fixtureSolve(id: string): Solve & { roots: IntersectionFixtureRoot[] } {
  const fixture = fixtures.find((entry) => entry.id === id);
  if (!fixture) throw new Error(`no intersection fixture named ${id}`);
  const { surface, ray, bounds, roots } = fixture;
  return {
    ray,
    profile: createSurfaceProfile({ R: surface.R }, surface.asphere ?? undefined),
    vertexZ: surface.vertexZ,
    options: { ...bounds, directionNormalized: true, clearRadius: surface.sd ?? undefined },
    roots,
  };
}

function sphere(R: number, ray: Ray3, options: SurfaceIntersectionOptions, vertexZ = 0): Solve {
  return { ray, profile: createSurfaceProfile({ R }), vertexZ, options: { directionNormalized: true, ...options } };
}

function conic(R: number, K: number, ray: Ray3, options: SurfaceIntersectionOptions): Solve {
  const profile = createSurfaceProfile({ R }, { K, ...NO_POLYNOMIAL });
  return { ray, profile, vertexZ: 0, options: { directionNormalized: true, ...options } };
}

const solve = ({ ray, profile, vertexZ, options }: Solve): SurfaceIntersectionResult =>
  intersectSurfaceProfile(ray, profile, vertexZ, options);

/** The same solve on the iterative path alone, which an explicit budget asks for. This one is the default budget. */
const solveIteratively = ({ ray, profile, vertexZ, options }: Solve): SurfaceIntersectionResult =>
  intersectSurfaceProfile(ray, profile, vertexZ, { ...options, maxIterations: INTERSECTION_MAX_ITERATIONS });

/** Solve against a copy of the profile that counts every call into it. */
function solveCounted(input: Solve): { result: SurfaceIntersectionResult; calls: number } {
  const { profile } = input;
  let calls = 0;
  const counting: SurfaceProfile = {
    ...profile,
    evaluate: (radius: number, out?: SagSlope) => (calls++, profile.evaluate(radius, out)),
    sag: (radius: number) => (calls++, profile.sag(radius)),
    slope: (radius: number) => (calls++, profile.slope(radius)),
    normalAt: (point: Vec3, vertexZ: number) => (calls++, profile.normalAt(point, vertexZ)),
    pointAt: (vertexZ: number, x: number, y: number) => (calls++, profile.pointAt(vertexZ, x, y)),
  };
  return { result: solve({ ...input, profile: counting }), calls };
}

/**
 * Hold a hit to one reference root. Both the hit and the root meet the residual target, and the residual's own
 * rounding is below it at these coordinates, so the two lie within 2e-12 / |f'| of each other along the ray.
 */
function expectRoot(result: SurfaceIntersectionResult, root: IntersectionFixtureRoot): void {
  expect(result.ok).toBe(true);
  if (!result.ok) return;
  expect(Math.abs(result.t - Number(root.t))).toBeLessThanOrEqual(2e-12 / Math.abs(Number(root.residualSlope)));
  expect(Math.abs(result.residual)).toBeLessThanOrEqual(1e-12);
  expect(result.effectiveTolerance).toBe(1e-12);
}

/** A closed-form hit: answered without the iterative path, from one evaluation of the profile. */
function expectClosedFormHit(input: Solve, root?: IntersectionFixtureRoot): void {
  const { result, calls } = solveCounted(input);
  expect(result).toMatchObject({ ok: true, iterations: 0, closedFormFallback: null });
  // Not zero: acceptance went through the profile. Not two: the same evaluation gives the normal its slope.
  expect(calls).toBe(1);
  if (root) expectRoot(result, root);
}

/** A closed-form miss: decided from the quadratic, with nothing evaluated. */
function expectClosedFormMiss(input: Solve): void {
  const { result, calls } = solveCounted(input);
  expect(result).toEqual({
    ok: false,
    failureReason: "noBracket",
    residual: null,
    iterations: 0,
    closedFormFallback: null,
  });
  expect(calls).toBe(0);
}

/**
 * A fallback: the reason is on the result, and everything else is what the iterative path returns for the same
 * call, iteration count included, so the path was neither seeded nor cut short.
 */
function expectFallback(input: Solve, reason: "failedValidation" | "nearTangency" | "domainEdge") {
  const result = solve(input);
  expect(result.closedFormFallback).toBe(reason);
  const iterative = solveIteratively(input);
  expect(iterative).not.toHaveProperty("closedFormFallback");
  expect(result).toEqual({ ...iterative, closedFormFallback: reason });
  if (result.ok) expect(Math.abs(result.residual)).toBeLessThanOrEqual(result.effectiveTolerance);
  return result;
}

describe("closed-form roots on the high-precision fixtures", () => {
  /* For a sphere the linear coefficient of the quadratic is -dz, so these take each sign of it: forward rays
   * (negative), backward rays (positive) and transverse rays (zero). Which form of the root is stable shows only
   * where the other form cancels, on the nearly flat pair: a textbook root there is off by more than the target
   * for the sign it does not suit. */
  it.each([
    "sphere-axial",
    "sphere-paraxial",
    "sphere-parallel",
    "sphere-marginal",
    "sphere-skew",
    "sphere-steep-rim",
    "sphere-backward",
    "sphere-far-forward",
    "sphere-transverse",
    "sphere-near-tangent",
    "sphere-nearly-flat",
    "sphere-nearly-flat-backward",
    "conic-ellipsoid",
    "conic-paraboloid",
    "conic-hyperboloid",
    "conic-oblate",
    "conic-steep-rim",
    "conic-oblate-rim",
    // The quadratic's second-order term is zero here, and cancels to rounding on the asymptote.
    "conic-paraboloid-axial",
    "conic-asymptote",
  ])("answers %s from one evaluation", (id) => {
    const input = fixtureSolve(id);
    expectClosedFormHit(input, input.roots[0]);
  });

  it("returns the first of two roots, which is the quadratic's farther root on this ray", () => {
    // The reference point is on the axis between the roots, so neither is "the near root" by construction.
    const input = fixtureSolve("sphere-two-roots");
    expectClosedFormHit(input, input.roots[0]);
  });

  it("finds a grazing chord shorter than one step of the bracket scan", () => {
    const input = fixtureSolve("sphere-grazing-chord");
    expectClosedFormHit(input, input.roots[0]);
    // The iterative path does not: both roots fall between two of its samples.
    expect(solveIteratively(input)).toMatchObject({ ok: false, failureReason: "noBracket" });

    const inCap = fixtureSolve("conic-grazing-chord");
    expectClosedFormHit(inCap, inCap.roots[0]);
  });

  it("leaves a polynomial asphere, a plane and an explicit budget to the iterative path", () => {
    for (const id of ["asphere-even", "asphere-odd-axial", "asphere-two-roots-in-cap", "asphere-no-root"]) {
      expect(solve(fixtureSolve(id))).not.toHaveProperty("closedFormFallback");
    }
    const ray: Ray3 = { origin: [0, 1, -5], direction: [0, 0, 1] };
    for (const profile of [createSurfaceProfile({ R: 1e15 }), createTiltedPlaneProfile({ y: 1, z: 1 })]) {
      const hit = intersectSurfaceProfile(ray, profile, 0, { maxT: 20 });
      expect(hit.ok).toBe(true);
      expect(hit).not.toHaveProperty("closedFormFallback");
    }
    const budgeted = fixtureSolve("sphere-parallel");
    for (const option of [{ maxIterations: INTERSECTION_MAX_ITERATIONS }, { bracketSamples: 24 }]) {
      const hit = solve({ ...budgeted, options: { ...budgeted.options, ...option } });
      expect(hit).not.toHaveProperty("closedFormFallback");
      expect(hit.ok && hit.iterations).toBeGreaterThan(0);
    }
  });

  it("leaves rejected input to the iterative path, which reports it", () => {
    const profile = createSurfaceProfile({ R: 50 });
    const ray: Ray3 = { origin: [0, 3, -10], direction: [0, 0, 1] };
    for (const [options, failureReason] of [
      [{}, "invalidBounds"],
      [{ minT: -1, maxT: 20 }, "invalidBounds"],
      [{ minT: 30, maxT: 20 }, "invalidBounds"],
    ] as const) {
      const result = intersectSurfaceProfile(ray, profile, 0, options);
      expect(result).toMatchObject({ ok: false, failureReason });
      expect(result).not.toHaveProperty("closedFormFallback");
    }
    const degenerate = intersectSurfaceProfile({ origin: [0, 3, -10], direction: [0, 0, 0] }, profile, 0, { maxT: 20 });
    expect(degenerate).toMatchObject({ ok: false, failureReason: "invalidDirection" });
    expect(degenerate).not.toHaveProperty("closedFormFallback");
  });
});

describe("closed-form root forms", () => {
  it("solves a conic on a flat base as its vertex plane", () => {
    const input = conic(1e15, -3, { origin: [1, 2, -5], direction: normalize([0.1, 0.2, 1])! }, { maxT: 20 });
    expectClosedFormHit(input);
    const hit = solve(input);
    expect(hit.ok && hit.point[2]).toBe(0);
  });

  it("skips the second sheet of a hyperboloid", () => {
    /* R = 30, K = -2.5: the sag sheet passes through the vertex, and the other sheet has its own vertex 40 mm
     * behind it. A ray coming up the axis from z = -200 crosses that sheet first, near t = 160, then the sag
     * sheet near t = 200. Only the second is a root of the sag. */
    const input = fixtureSolve("conic-second-sheet-first");
    expect(input.roots).toHaveLength(1);
    expect(Number(input.roots[0].t)).toBeGreaterThan(199);
    expectClosedFormHit(input, input.roots[0]);
    // With the bounds cut between the two, the other sheet's root is the only one inside them: a miss.
    expectClosedFormMiss({ ...input, options: { ...input.options, maxT: 180 } });
  });

  it("declares a miss without evaluating the profile", () => {
    expectClosedFormMiss(sphere(50, { origin: [100, 0, -10], direction: [0, 0, 1] }, { maxT: 20 }));
    // The root is behind the origin.
    expectClosedFormMiss(sphere(50, { origin: [0, 3, 5], direction: [0, 0, 1] }, { maxT: 20 }));
  });

  it("reports the segment and the optical path of the hit", () => {
    const input = fixtureSolve("sphere-skew");
    const hit = solve({ ...input, options: { ...input.options, refractiveIndex: 1.5 } });
    expect(hit).toMatchObject({ ok: true, closedFormFallback: null });
    if (!hit.ok) return;
    expect(hit.segmentLength).toBe(hit.t);
    expect(hit.opticalPathLength).toBe(1.5 * hit.t);
    expect(solve(input)).toMatchObject({ ok: true, opticalPathLength: null });
  });
});

describe("closed-form acceptance", () => {
  it("accepts under the caller's tolerance and reports it", () => {
    const loose = solve(sphere(50, { origin: [0, 3, -10], direction: [0, 0, 1] }, { maxT: 20, tolerance: 1e-9 }));
    expect(loose).toMatchObject({ ok: true, effectiveTolerance: 1e-9, closedFormFallback: null });

    /* Launched 65.5 m away the residual at the root evaluates to 7e-12 mm: no hit at the default target, where
     * the solve falls back, and a closed-form hit at a target of 1e-9 mm. */
    const far = sphere(5, { origin: [0, 1, -65536], direction: [0, 0, 1] }, { maxT: 65538 });
    expect(solve(far).closedFormFallback).toBe("failedValidation");
    const farLoose = solve({ ...far, options: { ...far.options, tolerance: 1e-9 } });
    expect(farLoose).toMatchObject({ ok: true, effectiveTolerance: 1e-9, closedFormFallback: null });
    expect(farLoose.ok && Math.abs(farLoose.residual)).toBeGreaterThan(1e-12);
  });

  it("falls back where the rounding of the residual leaves the root's position outside the budget of a hit", () => {
    /* From 1e8 mm a ray parameter is quantized to 1.5e-8 mm. At a target of 1e-6 mm the root validates, but the
     * points that do are spread over more than the 1e-9 mm a hit may move, and the iterative path keeps the
     * choice among them. */
    const far = fixtureSolve("sphere-far-launch-1e8");
    const loose = { ...far, options: { ...far.options, tolerance: 1e-6 } };
    expect(expectFallback(loose, "nearTangency")).toMatchObject({ ok: true, effectiveTolerance: 1e-6 });
  });

  it("reports the raw target where the iterative path stalls into the envelope on the same root", () => {
    /* A rim hit at coordinates of a few hundred mm, where the rounding of the residual is close to the target.
     * The iterative path stops on a float that evaluates to 1.9e-12 mm and reports the envelope it stalled at.
     * The closed-form root evaluates within the target, so it is accepted at the target, as the contract's
     * raw-target-first rule has it. The differential harness reads the two tolerances as a discrete transition. */
    const rim = sphere(
      350.07755067764026,
      {
        origin: [181.06244312115612, 302.39185194681045, 384.8821984019431],
        direction: [-0.9224904861247076, 0.3860178611324734, 0.001230404856567662],
      },
      { minT: 1e-6, maxT: 23.0655202479365 },
      45.69984027184546,
    );
    const closed = solve(rim);
    const iterative = solveIteratively(rim);
    expect(closed).toMatchObject({ ok: true, effectiveTolerance: 1e-12, closedFormFallback: null });
    expect(iterative.ok && iterative.effectiveTolerance).toBeGreaterThan(1e-10);
    expect(iterative.ok && Math.abs(iterative.residual)).toBeGreaterThan(1e-12);
    expect(closed.ok && iterative.ok && Math.abs(closed.t - iterative.t)).toBeLessThan(1e-9);
  });
});

describe("closed-form cap selection", () => {
  it("returns the cap root behind an exterior root, and the first of two cap roots", () => {
    const exteriorFirst = fixtureSolve("conic-exterior-then-cap");
    expect(exteriorFirst.roots.map((root) => root.inCap)).toEqual([false, true]);
    expectClosedFormHit(exteriorFirst, exteriorFirst.roots[1]);

    const bothInCap = fixtureSolve("conic-two-roots-in-cap");
    expect(bothInCap.roots.map((root) => root.inCap)).toEqual([true, true]);
    expectClosedFormHit(bothInCap, bothInCap.roots[0]);
  });

  it("keeps the exterior root when the bounds end before the cap", () => {
    const input = fixtureSolve("conic-exterior-then-cap");
    const between = (Number(input.roots[0].t) + Number(input.roots[1].t)) / 2;
    expectClosedFormHit({ ...input, options: { ...input.options, maxT: between } }, input.roots[0]);
  });

  it("finds the cap root whatever the profile does outside the cap", () => {
    /* Outside the cap the sag carries 1e-9 mm of alternating noise, so no solve can converge on the exterior
     * root. The closed form never evaluates there: it takes both roots from the quadratic and validates the
     * one in the cap. */
    const input = fixtureSolve("conic-exterior-then-cap");
    const sd = input.options.clearRadius!;
    let flip = false;
    const noisy: SurfaceProfile = {
      ...input.profile,
      evaluate: (radius: number, out?: SagSlope) => {
        const { sag, slope } = input.profile.evaluate(radius, out);
        if (radius <= sd) return { sag, slope };
        flip = !flip;
        return { sag: sag + (flip ? 1e-9 : -1e-9), slope };
      },
    };
    expectClosedFormHit({ ...input, profile: noisy }, input.roots[1]);
    // Without a cap the exterior root is the answer, and it cannot be validated or converged on.
    const uncapped = { ...input, profile: noisy, options: { ...input.options, clearRadius: undefined } };
    expect(solve(uncapped)).toMatchObject({
      ok: false,
      failureReason: "noConvergedIntersection",
      closedFormFallback: "failedValidation",
    });
  });

  it("holds the slope floor at the root it returns, not at an earlier root outside the cap", () => {
    /* R = 50, K = -401: a shallow hyperboloid. The ray runs just inside its asymptotic cone and crosses the sheet
     * at r = 100 and again at r = 1. |f'| is s / w with one s for both roots, and the conic root w is 40 at the
     * first and 1.08 at the second: 8e-4 per mm and 3e-2. The cap takes the second, which is above the floor. */
    const profile = createSurfaceProfile({ R: 50 }, { K: -401, ...NO_POLYNOMIAL });
    const outer: Vec3 = [0, 100, profile.sag(100)];
    const inner: Vec3 = [0, 1, profile.sag(1)];
    const direction = normalize([0, inner[1] - outer[1], inner[2] - outer[2]])!;
    const origin: Vec3 = [0, outer[1] - 10 * direction[1], outer[2] - 10 * direction[2]];
    const input: Solve = {
      ray: { origin, direction },
      profile,
      vertexZ: 0,
      options: { directionNormalized: true, maxT: 125, clearRadius: 14 },
    };
    expectClosedFormHit(input);
    const inCap = solve(input);
    expect(inCap.ok && inCap.radius).toBeCloseTo(1, 9);
    // Without a cap the first root is the answer, and it is under the floor.
    const uncapped = expectFallback(
      { ...input, options: { ...input.options, clearRadius: undefined } },
      "nearTangency",
    );
    expect(uncapped.ok && uncapped.radius).toBeCloseTo(100, 6);
  });

  it("gives a sphere no cap selection", () => {
    /* The same ray and base radius as "conic-exterior-then-cap", on a sphere: its first root is outside the clear
     * radius and its second inside. A spherical profile keeps the first; an aspheric one with K = 0 takes the
     * second. */
    const ray: Ray3 = { origin: [0, 12, -3.45], direction: normalize([0, -4.9, 1])! };
    const options = { maxT: 20, clearRadius: 5 };
    const onSphere = solve(sphere(-10, ray, options));
    expect(onSphere).toMatchObject({ ok: true, closedFormFallback: null });
    expect(onSphere.ok && onSphere.radius).toBeCloseTo(6.385479316, 8);
    expect(onSphere.ok && onSphere.t).toBeCloseTo(5.730248445, 8);

    const onConic = solve(conic(-10, 0, ray, options));
    expect(onConic).toMatchObject({ ok: true, closedFormFallback: null });
    expect(onConic.ok && onConic.radius).toBeCloseTo(2.859289792, 8);
    expect(onConic.ok && onConic.t).toBeCloseTo(15.165572809, 8);
  });
});

describe("closed-form roots at a bound", () => {
  const chord = fixtureSolve("sphere-two-roots");
  const firstRoot = Number(chord.roots[0].t);
  const slope = Math.abs(Number(chord.roots[0].residualSlope));
  const withMinT = (minT: number): Solve => ({ ...chord, options: { ...chord.options, minT } });

  it.each([
    { where: "just outside", offset: 0.5e-12 },
    { where: "just inside", offset: -0.5e-12 },
  ])("returns the lower bound itself for a root $where it", ({ offset }) => {
    // The bound is half the tolerance from the root in residual, so the residual there passes.
    const input = withMinT(firstRoot + offset / slope);
    const hit = solve(input);
    expect(hit).toMatchObject({ ok: true, t: input.options.minT, closedFormFallback: null });
    // The iterative path captures the same endpoint: one point, one residual.
    expect(hit).toEqual({ ...solveIteratively(input), closedFormFallback: null });
  });

  it("falls back when the residual at the bound does not pass, and the later root is the answer", () => {
    // 1.5 tolerances past the first root: it is outside the bounds, and the bound is no root.
    const result = expectFallback(withMinT(firstRoot + 1.5e-12 / slope), "failedValidation");
    expectRoot(result, chord.roots[1]);
  });

  it("leaves a later root at the upper bound to the iterative path, which returns it first", () => {
    // That path tests both endpoints before it looks between them.
    const secondRoot = 51.794494717703365;
    const input = sphere(50, chord.ray, { maxT: secondRoot });
    const result = expectFallback(input, "domainEdge");
    expect(result).toMatchObject({ ok: true, t: secondRoot, iterations: 0 });
    // With the bound a micrometre short of that root, the earlier one is returned, in closed form.
    expectClosedFormHit(sphere(50, chord.ray, { maxT: secondRoot - 1e-6 }), chord.roots[0]);
  });

  it("leaves a later root on a scan sample to the iterative path, which returns it first", () => {
    /* A 0.26 mm chord near the rim of a unit sphere, in bounds twice as long as the distance to its second root:
     * that root is the scan's twelfth sample, and both roots lie between the eleventh and it. The scan tests each
     * sample's residual before it looks for a sign change, so it returns the second root. */
    const ray: Ray3 = {
      origin: [0, 0.9995, -5],
      direction: [0.16295806520527048, -0.16295806520527048, 0.9730823901238319],
    };
    const secondRoot = 6.133479792736725;
    const result = expectFallback(sphere(1, ray, { minT: 0, maxT: 2 * secondRoot }), "domainEdge");
    expect(result).toMatchObject({ ok: true, t: secondRoot, iterations: 12 });
    // With the bounds a micrometre longer no sample is on a root, and the first root is the answer.
    const first = solve(sphere(1, ray, { minT: 0, maxT: 2 * secondRoot + 1e-6 }));
    expect(first).toMatchObject({ ok: true, closedFormFallback: null });
    expect(first.ok && first.t).toBeCloseTo(5.869262061, 9);
  });

  it("leaves a later root on a sample of the cap search to the iterative path", () => {
    /* The 0.58 mm chord of "conic-grazing-chord", with the clear radius cut to 9 so that the ray starts outside
     * the cap. The scan of the bounds separates the two roots and finds the first. It is inside the cap but
     * cannot be certified as the cap's only root, so the cap interval is scanned in ray order, from where the ray
     * enters the cap to the upper bound. That bound is set to put the fifteenth of its samples on the second
     * root, with the first root in the same step: the cap search returns the second. */
    const chord = fixtureSolve("conic-grazing-chord");
    const secondRoot = Number(chord.roots[1].t);
    const clearRadius = 9;
    // Where the ray enters the cap: the first root of |origin_xy + t direction_xy| = clearRadius.
    const [ox, oy] = chord.ray.origin;
    const [dx, dy] = chord.ray.direction;
    const speed2 = dx * dx + dy * dy;
    const along = ox * dx + oy * dy;
    const offset = ox * ox + oy * oy - clearRadius * clearRadius;
    const capStart = (-along - Math.sqrt(along * along - speed2 * offset)) / speed2;
    const maxT = capStart + ((secondRoot - capStart) * 24) / 15;
    const input = { ...chord, options: { ...chord.options, clearRadius, maxT } };
    const result = expectFallback(input, "domainEdge");
    expectRoot(result, chord.roots[1]);
    // With the bound a micrometre longer no sample is on a root, and the first root is returned in closed form.
    expectClosedFormHit({ ...input, options: { ...input.options, maxT: maxT + 1e-6 } }, chord.roots[0]);
  });

  it("leaves a root on the cap's rim to the iterative path", () => {
    /* A paraboloid chord whose first root is at r = 6 and second at r = 3, with the clear radius 64 floats under
     * 6. The cap search captures its own endpoint and returns the rim root; taken as outside the cap, that root
     * would lose to the second. */
    const ray: Ray3 = { origin: [0, 10, 2.4], direction: normalize([0, -9, -1.35])! };
    const result = expectFallback(conic(10, -1, ray, { maxT: 30, clearRadius: 5.9999999999999138 }), "domainEdge");
    expect(result.ok && result.radius).toBeCloseTo(6, 9);
    // Clear of the rim the same ray is answered in closed form: the second root, the first one inside the cap.
    const clear = solve(conic(10, -1, ray, { maxT: 30, clearRadius: 5.5 }));
    expect(clear).toMatchObject({ ok: true, closedFormFallback: null });
    expect(clear.ok && clear.radius).toBeCloseTo(3, 9);
  });
});

describe("closed-form fallbacks", () => {
  const tangent = (originZ: number, maxT: number): Solve =>
    sphere(50, { origin: [0, 30, originZ], direction: [0, -1, 0] }, { maxT });

  it("falls back on a tangent ray, whatever the iterative path then finds", () => {
    // The line touches the vertex at t = 30. A scan sample lands there with these bounds, and not with the next.
    expect(expectFallback(tangent(0, 60), "nearTangency")).toMatchObject({
      ok: true,
      t: 30,
      effectiveTolerance: 1e-12,
    });
    expect(expectFallback(tangent(0, 61), "nearTangency")).toMatchObject({ ok: false, failureReason: "noBracket" });
  });

  it("falls back on a chord too short to locate within the budget of a hit", () => {
    // 1e-10 mm inside the vertex: the two roots are 2e-4 mm apart.
    expect(expectFallback(tangent(1e-10, 61), "nearTangency")).toMatchObject({ ok: false });
    /* A 0.15 mm chord with |f'| = 1.5e-3, under the 4e-3 floor: it stays with the scan, which does not resolve
     * it. Closed form closes the grazing-chord finding only above that floor. */
    expect(expectFallback(tangent(5.625003164066059e-5, 61), "nearTangency")).toMatchObject({
      ok: false,
      failureReason: "noBracket",
    });
  });

  it("holds the slope floor at 4e-3 per mm", () => {
    /* A transverse chord a depth d inside the vertex of R = 50 meets the sphere at |f'| = sqrt(2 d / R), to
     * within 1e-5. One at 3e-3 stays with the iterative path and one at 5e-3 is answered in closed form. The
     * bounds end between each chord's two roots, so that path brackets the first root as well. */
    const chordAtSlope = (slope: number): Solve => tangent((slope * slope * 50) / 2, 30);
    expect(expectFallback(chordAtSlope(3e-3), "nearTangency")).toMatchObject({ ok: true, effectiveTolerance: 1e-12 });
    expectClosedFormHit(chordAtSlope(5e-3));
    // Above the floor the two paths' points are within half the budget of a hit of each other.
    const closed = solve(chordAtSlope(5e-3));
    const iterative = solveIteratively(chordAtSlope(5e-3));
    expect(closed.ok && iterative.ok && Math.abs(closed.t - iterative.t)).toBeLessThanOrEqual(5e-10);
  });

  it("raises the slope floor with the curvature, for the normal", () => {
    /* A transverse chord of a sphere of R = 2, met where the conic root is 0.9 at an angle of incidence whose
     * cosine is given. |f'| is that cosine over 0.9, above the 4e-3 floor for both rays here. The normal turns
     * by |c| / 0.9 per mm of radius, which puts its own floor at 4e-2 |c| / 0.9 = 0.022 per mm: a cosine of
     * 0.02. Under it the two points that both meet the target have normals up to 1e-10 apart. */
    const chordAtCosine = (cosine: number): Solve => {
      const halfChord = 2 * cosine;
      const offset = Math.sqrt(2 * 2 - (2 - 0.2) ** 2 - halfChord * halfChord);
      return sphere(2, { origin: [offset, 1, 0.2], direction: [0, -1, 0] }, { maxT: 1 });
    };
    expect(expectFallback(chordAtCosine(1.2e-2), "nearTangency")).toMatchObject({ ok: true });
    expectClosedFormHit(chordAtCosine(3e-2));

    /* Toward the rim the normal turns faster still, by |c| / w per mm of radius on a sphere. R = 5 met where the
     * conic root is 0.2, by a ray along the rim's tangent tilted into the surface by the cosine given: the floor
     * is 4e-2 per mm there, a cosine of 8e-3, where the curvature alone would put it at 1.6e-3. */
    const rimAtCosine = (cosine: number): Solve => {
      const point: Vec3 = [0, 5 * Math.sqrt(1 - 0.04), 4];
      const towardCentre: Vec3 = [0, -Math.sqrt(1 - 0.04), 0.2];
      const direction = normalize([1, cosine * towardCentre[1], cosine * towardCentre[2]])!;
      const origin: Vec3 = [point[0] - direction[0], point[1] - direction[1], point[2] - direction[2]];
      // The chord is 10 cosines long, and the bounds end at its middle.
      return sphere(5, { origin, direction }, { maxT: 1 + 5 * cosine });
    };
    expect(expectFallback(rimAtCosine(4e-3), "nearTangency")).toMatchObject({ ok: true });
    expectClosedFormHit(rimAtCosine(1.2e-2));

    /* A fuzzed ray on a sphere of R = -1.66, at |f'| = 9.4e-3 per mm: the closed-form root and the point the
     * iterative path stops at are 2e-10 mm apart, inside the budget of a hit, and their normals 1.2e-10. */
    const steep = sphere(
      -1.6610424201727554,
      {
        origin: [34.935714883926174, -15.252002966345463, 126.44996877188031],
        direction: [-0.9235745475297469, 0.35843827857930927, 0.13613249283078857],
      },
      { minT: 9.84435296316671, maxT: 38.37201491570439 },
      132.8234839718789,
    );
    expect(expectFallback(steep, "nearTangency")).toMatchObject({ ok: true, effectiveTolerance: 1e-12 });
  });

  it("does not call a miss where the scan can accept a touch", () => {
    /* The line passes 5e-13 mm outside the vertex and crosses nothing, but a sample at the vertex is within the
     * tolerance, and the iterative path returns it. */
    const touch = expectFallback(tangent(-5e-13, 60), "nearTangency");
    expect(touch).toMatchObject({ ok: true, t: 30, residual: -5e-13, effectiveTolerance: 1e-12 });
    /* A miss is declared only past twice the tolerance plus the rounding of the residual a sample evaluates,
     * which is bounded here at 5.1e-13 mm for a ray that starts 30 mm off the axis: 3.03e-12 mm in all. */
    expectFallback(tangent(-2.5e-12, 60), "nearTangency");
    expectClosedFormMiss(tangent(-3.5e-12, 60));
    expect(solveIteratively(tangent(-3.5e-12, 60))).toMatchObject({ ok: false, failureReason: "noBracket" });
  });

  it("does not call a miss inside the rounding of the residual the scan evaluates", () => {
    /* A ray that starts on a sphere 50 m from the origin of coordinates and leaves along its tangent. As floats
     * the line misses the quadric by more than the tolerance allows, but a coordinate there is quantized to
     * 7e-12 mm, the residual at the start evaluates to zero, and the iterative path returns the start. */
    const leaving = sphere(
      100,
      { origin: [0, 5.05, 50000.127593901016], direction: [0, 0.998724060989821, 0.050499999999999996] },
      { minT: 0, maxT: 5, clearRadius: 60 },
      50000,
    );
    expect(expectFallback(leaving, "nearTangency")).toMatchObject({ ok: true, t: 0, residual: 0 });
  });

  it("does not call a miss while the discriminant's sign is inside its rounding", () => {
    /* The same tangent line, 1e-9 mm outside the vertex, launched from 1e6 mm away: far outside the touch band,
     * but at that distance a coordinate is quantized to 1e-10 mm and the discriminant's rounding is larger than
     * its value. */
    const far = sphere(50, { origin: [0, 1e6, -1e-9], direction: [0, -1, 0] }, { maxT: 1e6 + 30 });
    expectFallback(far, "nearTangency");
  });

  it("falls back when the root cannot be validated at the raw target", () => {
    // Launched 1e8 mm away, t is quantized far above the target: the iterative path stalls and reports the envelope.
    const result = expectFallback(fixtureSolve("sphere-far-launch-1e8"), "failedValidation");
    expect(result.ok && result.effectiveTolerance).toBeGreaterThan(1e-12);
    expect(result.ok && Math.abs(result.residual)).toBeGreaterThan(1e-12);
  });

  it("falls back when the quadratic's coefficients are not finite", () => {
    /* A direction too long to square, taken as given. The iterative path never squares it and finds the hit; a
     * closed form that read a NaN discriminant as "no root" would call a miss. */
    const long = sphere(50, { origin: [0, 3, -10], direction: [0, 0, 1e200] }, { maxT: 1e-198 });
    const result = expectFallback(long, "failedValidation");
    expect(result.ok && result.point[2]).toBeCloseTo(0.0900811461, 9);

    /* A conic so strong that (1 + K) c overflows, met by a ray that starts on its vertex. The coefficients are
     * finite and the conic root at the proposed root is not. The iterative path returns the start. */
    const strong = conic(1e-150, 1e200, { origin: [0, 0, 0], direction: [1, 0, 1e-120] }, { maxT: 1 });
    expect(expectFallback(strong, "failedValidation")).toMatchObject({ ok: true, t: 0 });
  });

  it("falls back at the edge of the conic's domain, and the iterative path stalls on the rim root", () => {
    const result = expectFallback(fixtureSolve("sphere-hemisphere-rim"), "domainEdge");
    // Newton's corrections stop shrinking on the residual's rounding long before bisection could collapse the bracket.
    expect(result.ok && result.iterations).toBeLessThanOrEqual(25);
    expect(result.ok && result.effectiveTolerance).toBeGreaterThan(1e-12);
  });

  it("puts the edge of the domain at a conic root of 3e-2", () => {
    // A ray parallel to the axis at the height where the conic root sqrt(1 - r^2 / R^2) has the given value.
    const atConicRoot = (w: number): Solve =>
      sphere(50, { origin: [0, 50 * Math.sqrt(1 - w * w), -10], direction: [0, 0, 1] }, { maxT: 100 });
    expect(expectFallback(atConicRoot(1e-2), "domainEdge")).toMatchObject({ ok: true });
    expectClosedFormHit(atConicRoot(5e-2));
  });

  it("falls back when the bounds reach the domain radius beside an edge root that is outside them", () => {
    /* An aspheric profile floors its conic root at the domain radius, so the sag it evaluates there is 1e-6 R
     * short of the quadric's. This ray leaves the domain of a K = 0 asphere of R = 1 exactly on that floored
     * point, and the lower bound is that point: the iterative path tests the bound and returns it. The
     * quadratic's root is 3.1e-12 mm before the bound, outside it by more than the root's own slack. */
    const leaving = conic(
      1,
      0,
      { origin: [0, 1, -5], direction: [0.16222144674464947, -0.16222144674464947, 0.9733285182466123] },
      { minT: 6.164413029641427, maxT: 9.164413029641427 },
    );
    expect(expectFallback(leaving, "domainEdge")).toMatchObject({ ok: true, t: 6.164413029641427, radius: 1 });

    /* A fuzzed ray that enters the domain of an oblate ellipsoid inside bounds 4e-9 mm long, with its edge root
     * 2e-10 mm past the upper bound. The iterative path brackets on the floored point and cannot converge. */
    const entering = conic(
      -1574.601982884589,
      5,
      {
        origin: [117.80005235948018, 631.9428099813068, -262.43340138273464],
        direction: [-0.8468886167608503, -0.5317703177132902, 1.1590786721007314e-9],
      },
      { minT: 2.766088614861041e-9, maxT: 6.684347355341009e-9, clearRadius: 57.22 },
    );
    expect(expectFallback(entering, "domainEdge")).toMatchObject({
      ok: false,
      failureReason: "noConvergedIntersection",
    });
  });

  it("does not call a miss for a line that passes the edge of the domain without a root", () => {
    /* The floored point of a K = 0 asphere of R = 100, at its domain radius, and a ray from it along the tangent
     * of the domain cylinder. The line misses the quadric by 1e-10 in F, far outside the touch band, yet the
     * iterative path tests the lower bound, which is that point, and returns it. */
    const profile = createSurfaceProfile({ R: 100 }, { K: 0, ...NO_POLYNOMIAL });
    const floored: Vec3 = [100, 0, profile.sag(100)];
    expect(100 - floored[2]).toBeCloseTo(1e-4, 9);
    const input: Solve = {
      ray: { origin: floored, direction: [0, 1, 0] },
      profile,
      vertexZ: 0,
      options: { directionNormalized: true, maxT: 5 },
    };
    expect(expectFallback(input, "domainEdge")).toMatchObject({ ok: true, t: 0, radius: 100 });
    // A sphere's sag has no floor: the same line misses it on both paths.
    const onSphere = sphere(100, input.ray, { maxT: 5 });
    expect(solveIteratively(onSphere)).toMatchObject({ ok: false, failureReason: "noBracket" });
    expect(solve(onSphere).ok).toBe(false);
  });

  it("falls back when a root is moved onto a bound that is outside the domain", () => {
    /* A transverse ray from 1e13 mm away, where a ray parameter is quantized to 2e-3 mm and the slack of a root
     * is wider than the rim: the root at a conic root of 0.1 is within it of a lower bound that lies 0.016 mm
     * earlier, outside the unit sphere's domain. The profile is not evaluated there. */
    const root = 1e13 - Math.sqrt(1 - 0.01);
    const input = sphere(
      1,
      { origin: [0, 1e13, 0.9], direction: [0, -1, 0] },
      { minT: root - 0.016, maxT: root + 0.5 },
    );
    expect(Math.hypot(0, 1e13 - (root - 0.016))).toBeGreaterThan(1);
    const { result, calls } = solveCounted(input);
    expect(result.closedFormFallback).toBe("domainEdge");
    expectFallback(input, "domainEdge");
    // Every call into the profile is the iterative path's: it evaluates only inside the domain.
    expect(calls).toBeGreaterThan(0);
  });

  it("finds the roots the scan steps over inside a short domain window", () => {
    /* Both bounds are outside the sphere's domain and no scan sample lands in the 2 mm the ray spends inside it,
     * so the iterative path sees no surface at all. */
    const input = fixtureSolve("sphere-short-domain-window");
    expectClosedFormHit(input, input.roots[0]);
    expect(solveIteratively(input)).toMatchObject({ ok: false, failureReason: "noBracket", residual: null });
  });
});

describe("base-conic root", () => {
  /** `baseConicRoot` for one solve's ray and base conic, over an interval of ray parameters. */
  const rootOf = ({ ray, profile, vertexZ }: Solve, lo: number, hi: number) =>
    baseConicRoot(ray.origin, ray.direction, profile.curvature, profile.conic, vertexZ, lo, hi);

  /** The bounds cut to the cylinder r <= sd, as the kernel cuts them; null when the ray has no span inside it. */
  function capSpan({ ray, options }: Solve): { minT: number; maxT: number } | null {
    const { minT = 0, maxT = Infinity, clearRadius } = options;
    if (clearRadius === undefined) return null;
    const [ox, oy] = ray.origin;
    const [dx, dy] = ray.direction;
    const speed2 = dx ** 2 + dy ** 2;
    const along = ox * dx + oy * dy;
    const offset = ox ** 2 + oy ** 2 - clearRadius ** 2;
    if (speed2 === 0) return offset > 0 ? null : { minT, maxT };
    const discriminant = along ** 2 - speed2 * offset;
    if (discriminant < 0) return null;
    const root = Math.sqrt(discriminant);
    const span = { minT: Math.max(minT, (-along - root) / speed2), maxT: Math.min(maxT, (-along + root) / speed2) };
    return span.maxT >= span.minT ? span : null;
  }

  it("is the closed form's root, bit for bit, wherever that root is between the bounds", () => {
    const compared: string[] = [];
    for (const { id, kind } of fixtures) {
      if (kind === "asphere") continue;
      const input = fixtureSolve(id);
      const hit = solve(input);
      const { minT = 0, maxT = Infinity } = input.options;
      // A fallback's point is the iterative path's, and a root at a bound was moved onto it.
      if (!(hit.ok && hit.closedFormFallback === null && hit.t > minT && hit.t < maxT)) continue;
      // The interval the closed form selects in: the cap's on an aspheric profile, when the ray has one.
      const span = (input.profile.kind === "aspheric" ? capSpan(input) : null) ?? { minT, maxT };
      expect(rootOf(input, span.minT, span.maxT)?.t, id).toBe(hit.t);
      compared.push(id);
    }
    expect(compared.length).toBeGreaterThan(20);
    expect(compared).toContain("sphere-two-roots");

    // The interval decides between two roots: over the bounds, the exterior root this ray meets first.
    const exteriorFirst = fixtureSolve("conic-exterior-then-cap");
    expect(compared).toContain("conic-exterior-then-cap");
    const overBounds = rootOf(exteriorFirst, 0, exteriorFirst.options.maxT!);
    expect(Math.abs(overBounds!.t - Number(exteriorFirst.roots[0].t))).toBeLessThan(1e-9);
  });

  it("returns the conic's sag at the root", () => {
    const input = fixtureSolve("conic-ellipsoid");
    const root = rootOf(input, 0, input.options.maxT!)!;
    const point = input.ray.origin.map((origin, axis) => origin + input.ray.direction[axis] * root.t);
    expect(Math.abs(root.sag - input.profile.sag(Math.hypot(point[0], point[1])))).toBeLessThan(1e-12);
    expect(Math.abs(root.sag - (point[2] - input.vertexZ))).toBeLessThan(1e-12);
  });

  it("returns the vertex-plane crossing of a flat base bit for bit", () => {
    const origin: Vec3 = [1, 2, -5];
    const direction = normalize([0.1, 0.2, 1])!;
    const vertexZ = 0.3;
    const crossing = (vertexZ - origin[2]) / direction[2];
    expect(baseConicRoot(origin, direction, 0, -3, vertexZ, 0, 20)).toEqual({ t: crossing, sag: 0 });
    // The ends of the interval are inside it.
    expect(baseConicRoot(origin, direction, 0, 0, vertexZ, crossing, crossing)).toEqual({ t: crossing, sag: 0 });
  });

  it("returns null for a root on the other sheet, outside the interval, or of no line that meets the quadric", () => {
    // The hyperboloid's second sheet is crossed near t = 160 and its sag sheet near t = 200.
    const sheets = fixtureSolve("conic-second-sheet-first");
    expect(rootOf(sheets, 0, 180)).toBeNull();
    expect(rootOf(sheets, 0, 250)?.t).toBeGreaterThan(199);

    const behind = sphere(50, { origin: [0, 3, 5], direction: [0, 0, 1] }, { maxT: 20 });
    expect(rootOf(behind, 0, 20)).toBeNull();
    const chord = fixtureSolve("sphere-two-roots");
    const [first, second] = chord.roots.map((root) => Number(root.t));
    const between = (first + second) / 2;
    expect(rootOf(chord, 0, between)?.t).toBeCloseTo(first, 9);
    expect(rootOf(chord, between, chord.options.maxT!)?.t).toBeCloseTo(second, 9);
    expect(rootOf(chord, between, second - 1e-6)).toBeNull();

    const miss = sphere(50, { origin: [100, 0, -10], direction: [0, 0, 1] }, { maxT: 20 });
    expect(rootOf(miss, 0, 20)).toBeNull();
    // A line that passes the sphere 10 mm outside it has no root anywhere, however wide the interval.
    const passing = sphere(50, { origin: [60, 0, -100], direction: [0, 0, 1] }, { maxT: 400 });
    expect(rootOf(passing, 0, 400)).toBeNull();
    // A ray parallel to a flat base never crosses its vertex plane.
    expect(baseConicRoot([0, 1, -5], [1, 0, 0], 0, 0, 0, 0, 20)).toBeNull();
  });
});
