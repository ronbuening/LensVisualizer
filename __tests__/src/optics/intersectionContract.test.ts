import { describe, expect, it } from "vitest";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeAdapters.js";
import { normalize as normalizeVector3 } from "../../../src/optics/math/vector.js";
import type { Ray3 as SurfaceIntersectionRay } from "../../../src/optics/types.js";
import { createSurfaceProfile, createTiltedPlaneProfile, sag } from "../../../src/optics/geometry/surfaceProfile.js";
import { intersectSurfaceProfile } from "../../../src/optics/geometry/intersect.js";
import { planeResidualRoundoff, sagResidualRoundoff } from "../../../src/optics/geometry/intersectTolerance.js";
import { doLayoutForRuntimeLens as doLayout } from "../../../src/optics/state/runtimeAdapters.js";
import { traceEngineRay } from "../../../src/optics/trace/rayAdapters.js";
import type { AsphericCoefficients } from "../../../src/types/optics.js";
import { buildSimplePositiveElementLens } from "./testLensFixtures.js";

/**
 * Intersection accuracy contract (architecture/optics-engine.md, Exact Surface Trace), pinned for the
 * production intersection kernel and traversal.
 */

function axialRay(y: number, z = -5): SurfaceIntersectionRay {
  return { origin: [0, y, z], direction: [0, 0, 1] };
}

// The default accuracy is a shipped contract.
describe("production intersection accuracy", () => {
  const intersect = (
    ray: SurfaceIntersectionRay,
    R: number,
    vertexZ: number,
    options: { minT?: number; maxT: number; maxIterations?: number; tolerance?: number },
    asphere?: AsphericCoefficients,
    sd?: number,
  ) => intersectSurfaceProfile(ray, createSurfaceProfile({ R }, asphere), vertexZ, { ...options, clearRadius: sd });

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
    expect(Math.abs(hit.residual)).toBeLessThanOrEqual(hit.effectiveTolerance);
  });

  it("tries the next safeguarded point before accepting a creep under the envelope", () => {
    const hit = intersect(
      { origin: [1.70000013, 0, 8352.099999999999], direction: [-1, 0, 0] },
      1e15,
      0,
      { maxT: 3e-7 },
      { K: 0, A4: 1000, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 },
    );
    expect(hit).toMatchObject({ ok: true, residual: 0, effectiveTolerance: 1e-12, iterations: 4 });
  });

  it("checks the safeguarded midpoint fixed point on the pending final step", () => {
    const ray: SurfaceIntersectionRay = { origin: [1.1, 0, 10000.000000000002], direction: [-1, 0, 0] };
    const asphere = { K: 0, A4: 10000, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
    const full = intersect(ray, 1e15, 0, { maxT: 0.2 }, asphere);
    expect(full.ok).toBe(true);
    if (!full.ok) return;
    expect(intersect(ray, 1e15, 0, { maxT: 0.2, maxIterations: 2 }, asphere)).toMatchObject({
      ok: true,
      t: full.t,
      residual: 1.8189894035458565e-12,
      effectiveTolerance: full.effectiveTolerance,
      iterations: 2,
    });
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
    expect(Math.abs(hit.residual)).toBeLessThanOrEqual(hit.effectiveTolerance);
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
    expect(Math.abs(hit.residual)).toBeLessThanOrEqual(hit.effectiveTolerance);
  });
  it("fails an exhausted budget whose pending residual is within ten times the target", () => {
    // The bracket excludes the z-projected seed, so the solve starts at its midpoint, 5e-12 mm past the root.
    // The removed fallback accepted any pending residual up to 1e-11 mm.
    const root = 5 + sag(1, 5);
    const bounds = { minT: root - 0.05, maxT: root + 0.05 + 1e-11 };
    const exhausted = intersect(axialRay(1), 5, 0, { ...bounds, maxIterations: 0 });
    expect(exhausted).toMatchObject({ ok: false, failureReason: "noConvergedIntersection" });
    if (exhausted.ok) return;
    expect(Math.abs(exhausted.residual!)).toBeGreaterThan(1e-12);
    expect(Math.abs(exhausted.residual!)).toBeLessThanOrEqual(1e-11);
    expect(intersect(axialRay(1), 5, 0, { ...bounds, maxIterations: 1 })).toMatchObject({ ok: true, iterations: 1 });
  });

  it("applies the stall rule to the step still pending when the budget runs out", () => {
    // The launch distance quantizes t, so the nearest representable point misses the raw target.
    const ray = axialRay(1, -1e8);
    const options = { maxT: 1e8 + 2 };
    const full = intersect(ray, 5, 0, options);
    expect(full.ok).toBe(true);
    if (!full.ok) return;
    expect(full.effectiveTolerance).toBeGreaterThan(1e-12);
    expect(intersect(ray, 5, 0, { ...options, maxIterations: full.iterations - 1 })).toMatchObject({
      ok: true,
      t: full.t,
      residual: full.residual,
      effectiveTolerance: full.effectiveTolerance,
    });
  });

  it("converges on a roundoff-limited rim root without bisecting to adjacent floats", () => {
    /* Exterior hit at a hemisphere's rim. The residual rounds in steps of about 6e-12 mm on 36 mm coordinates, so
     * Newton's corrections are 19 and 95 ulps of t, under one ulp of those coordinates, and never zero. Two in a
     * row that point the same way and do not halve are a stall. Bisecting the 5.8 mm scan bracket to adjacent
     * floats instead took 50 iterations, and failed at 48. */
    const R = -36.4652369171381;
    const sd = 32.1266972069614;
    const ray: SurfaceIntersectionRay = {
      origin: [0, 36.90213507972658, -36.573912873864174],
      direction: [0, -0.9558022906274851, 0.2940101719860258],
    };
    const hit = intersect(ray, R, 0, { maxT: 150 }, undefined, sd);
    expect(hit.ok).toBe(true);
    if (!hit.ok) return;
    expect(hit.iterations).toBeLessThanOrEqual(25);
    expect(hit.radius).toBeGreaterThan(sd);
    expect(hit.effectiveTolerance).toBeGreaterThan(1e-12);
    expect(Math.abs(hit.residual)).toBeLessThanOrEqual(hit.effectiveTolerance);
    // The bisection-only answer was 50 ulps of t from the exact root (0.45711046816240262); the stall's is nearer.
    expect(Math.abs(hit.t - 0.4571104681624026)).toBeLessThan(Math.abs(0.4571104681624054 - 0.4571104681624026));
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
    expect(production.ok).toBe(true);
    const points = production.ok ? [production.point] : [];
    for (const point of points) {
      const residual = (normal.y * point[1] + normal.z * (point[2] - 1)) / Math.hypot(normal.y, normal.z);
      expect(Math.abs(residual)).toBeLessThanOrEqual(1e-12);
      expect(point.every(Number.isFinite)).toBe(true);
    }
  });
});

describe("roundoff envelope authorization", () => {
  // Adjacent represented radii straddle the quartic root, so acceptance rests on the envelope alone.
  const asphere = { K: 0, A4: 10000, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
  const ray: SurfaceIntersectionRay = { origin: [1.1, 0, 10000.000000000002], direction: [-1, 0, 0] };
  const profile = createSurfaceProfile({ R: 1e15 }, asphere);

  it("accepts the stalled residual under the profile's own slope bound", () => {
    expect(intersectSurfaceProfile(ray, profile, 0, { maxT: 0.2 })).toMatchObject({ ok: true, radius: 1 });
  });

  it.each([
    { bound: "missing", maxAbsSlope: undefined },
    { bound: "NaN", maxAbsSlope: () => NaN },
    { bound: "infinite", maxAbsSlope: () => Infinity },
    { bound: "negative", maxAbsSlope: () => -1 },
  ])("never accepts it with a $bound slope bound, and fails on the iteration it stalls", ({ maxAbsSlope }) => {
    const accepted = intersectSurfaceProfile(ray, profile, 0, { maxT: 0.2 });
    expect(accepted.ok).toBe(true);
    // The same stall with no usable envelope: nothing after it can do better, so the solve ends there.
    expect(intersectSurfaceProfile(ray, { ...profile, maxAbsSlope }, 0, { maxT: 0.2 })).toMatchObject({
      ok: false,
      failureReason: "noConvergedIntersection",
      residual: accepted.ok ? accepted.residual : NaN,
      iterations: accepted.iterations,
    });
  });
});

describe("intersection roundoff envelopes", () => {
  const UNIT = 16 * Number.EPSILON;

  it("leaves the 1e-12 mm target alone below a 281 mm operand sum", () => {
    expect(sagResidualRoundoff([0, 0, 0], [0, 0, 1], 0.5, 0, 0, 0, 0)).toBe(UNIT);
    expect(sagResidualRoundoff([0, 0, -140], [0, 0, 1], 141, 0, 0, 0, 0)).toBeLessThanOrEqual(1e-12);
    expect(sagResidualRoundoff([0, 0, -140], [0, 0, 1], 142, 0, 0, 0, 0)).toBeGreaterThan(1e-12);
  });

  it("weights transverse operands by the slope bound", () => {
    // |oz| + |vertexZ| + max(|sag|, radius * slope) + slope * (|ox| + |dx * t|) = 3 + 1 + 12 + 2 * 10
    expect(sagResidualRoundoff([8, 0, 3], [-1, 0, 0], 2, 1, 6, 1, 2)).toBe(UNIT * 36);
  });

  it.each([NaN, Infinity, -1])("gives no sag allowance for a slope bound of %s", (slopeBound) => {
    expect(sagResidualRoundoff([0, 0, 0], [0, 0, 1], 1, 0, 1, 0, slopeBound)).toBeNaN();
  });

  it("bounds a vertical plane without dividing by normal.z", () => {
    expect(planeResidualRoundoff([0, 300, 7], [0, -1, 0], 299, [0, 1, 7], [0, 1, 0])).toBe(UNIT * 600);
    expect(planeResidualRoundoff([0, Infinity, 7], [0, -1, 0], 299, [0, 1, 7], [0, 1, 0])).toBeNaN();
  });
});

describe("trace hit records", () => {
  it("carry the residual and the bound each accepted intersection met", () => {
    const L = buildSimplePositiveElementLens();
    const zPos = doLayout(0, 0, L).z;
    const ray: SurfaceIntersectionRay = { origin: [0, 1, zPos[0] - 5], direction: [0, 0, 1] };
    const engine = traceEngineRay(prepareRuntimeState(L, 0, 0), ray, { checkSemiDiameter: true });
    expect(engine.hits.length).toBeGreaterThan(1);
    for (const hit of engine.hits) {
      expect(hit.effectiveTolerance).toBeGreaterThanOrEqual(1e-12);
      expect(Math.abs(hit.residual!)).toBeLessThanOrEqual(hit.effectiveTolerance!);
    }
  });
});
