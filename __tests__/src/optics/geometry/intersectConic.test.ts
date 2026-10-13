import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { INTERSECTION_MAX_ITERATIONS } from "../../../../src/optics/constants.js";
import {
  intersectSurfaceProfile,
  type SurfaceIntersectionOptions,
  type SurfaceIntersectionResult,
} from "../../../../src/optics/geometry/intersect.js";
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
  /* For a sphere the linear coefficient of the quadratic is -dz, so these cover each branch of the stable root:
   * forward rays (negative), a backward ray (positive) and transverse rays (zero). */
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
    expect(expectFallback(tangent(0, 60), "nearTangency")).toMatchObject({ ok: true, t: 30 });
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

  it("does not call a miss where the scan can accept a touch", () => {
    /* The line passes 5e-13 mm outside the vertex and crosses nothing, but a sample at the vertex is within the
     * tolerance, and the iterative path returns it. Past twice the tolerance it is a miss on both paths. */
    const touch = expectFallback(tangent(-5e-13, 60), "nearTangency");
    expect(touch).toMatchObject({ ok: true, t: 30, residual: -5e-13 });
    expectClosedFormMiss(tangent(-2.1e-12, 60));
    expect(solveIteratively(tangent(-2.1e-12, 60))).toMatchObject({ ok: false, failureReason: "noBracket" });
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

  it("falls back at the edge of the conic's domain, with the whole iteration budget", () => {
    const result = expectFallback(fixtureSolve("sphere-hemisphere-rim"), "domainEdge");
    // The rim root is accepted only once bisection collapses the bracket, past the old 48-step cap.
    expect(result.ok && result.iterations).toBeGreaterThan(48);
    expect(result.ok && result.effectiveTolerance).toBeGreaterThan(1e-12);
  });

  it("finds the roots the scan steps over inside a short domain window", () => {
    /* Both bounds are outside the sphere's domain and no scan sample lands in the 2 mm the ray spends inside it,
     * so the iterative path sees no surface at all. */
    const input = fixtureSolve("sphere-short-domain-window");
    expectClosedFormHit(input, input.roots[0]);
    expect(solveIteratively(input)).toMatchObject({ ok: false, failureReason: "noBracket", residual: null });
  });
});
