import { describe, expect, it } from "vitest";
import { solveBracketedRoot } from "../../../src/optics/math/bracketedRoot.js";
import { interpolateUniformSchedule } from "../../../src/optics/math/uniformInterpolation.js";
import { intersectSurfaceProfile } from "../../../src/optics/math/intersection.js";
import { intersectSagSurface } from "../../../src/optics/internal/surfaceIntersection.js";
import { createSurfaceProfile } from "../../../src/optics/math/surfaceProfile.js";

describe("shared exact optical math", () => {
  it("matches independent spherical sag hits in both surface adapters", () => {
    for (const R of [-30, 30])
      for (const radius of [0, 3, 10]) {
        const ray = {
          origin: [radius, 0, 0] as [number, number, number],
          direction: [0, 0, 1] as [number, number, number],
        };
        const expected = 50 + R - Math.sign(R) * Math.sqrt(R * R - radius * radius);
        const engine = intersectSurfaceProfile(ray, createSurfaceProfile({ R }), 50, { maxT: 100 });
        const runtime = intersectSagSurface(ray, 0, 50, { S: [{ R }], asphByIdx: {} }, { maxT: 100 });
        expect(engine.ok).toBe(true);
        expect(runtime.ok).toBe(true);
        if (engine.ok && runtime.ok) {
          expect(engine.point[2]).toBeCloseTo(expected, 9);
          expect(runtime.point[2]).toBeCloseTo(expected, 9);
          expect(engine.t).toBeCloseTo(runtime.t, 12);
        }
      }
  });
  it("finds an interior sign change with equal-sign endpoints and preserves bounded failure diagnostics", () => {
    const evaluate = (t: number) => ({ t, value: (t - 1) * (t - 3), derivative: 2 * t - 4 });
    const validValue = (e: ReturnType<typeof evaluate>) => Number.isFinite(e.value);
    const options = {
      minT: 0,
      maxT: 4,
      seed: 0,
      tolerance: 1e-10,
      maxIterations: 32,
      bracketSamples: 7,
      validValue,
      validNewton: validValue,
    };
    const found = solveBracketedRoot(evaluate, options);
    expect(found.kind).toBe("success");
    if (found.kind === "success") expect(found.value.t).toBeCloseTo(1, 9);
    expect(solveBracketedRoot((t) => ({ t, value: t * t + 1, derivative: 2 * t }), options)).toMatchObject({
      kind: "failure",
      failureReason: "noBracket",
    });
    expect(solveBracketedRoot(evaluate, { ...options, maxT: Infinity })).toMatchObject({
      kind: "failure",
      failureReason: "invalidBounds",
    });
    expect(solveBracketedRoot(evaluate, { ...options, maxIterations: 0 })).toMatchObject({
      kind: "failure",
      failureReason: "noConvergedIntersection",
    });
  });
  it("preserves single values, knots and the linear schedule independently of clamping policy", () => {
    expect(interpolateUniformSchedule([7], 0.8)).toBe(7);
    expect(interpolateUniformSchedule([], 0)).toBeNaN();
    for (const t of [0, 0.125, 0.25, 0.5, 0.75, 1])
      expect(interpolateUniformSchedule([2, 5, 8], t)).toBeCloseTo(2 + 6 * t, 14);
    expect(interpolateUniformSchedule([2, 5, 8], 1.5)).toBe(11);
  });
});
