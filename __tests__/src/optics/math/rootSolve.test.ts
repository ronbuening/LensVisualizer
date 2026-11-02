import { describe, expect, it } from "vitest";
import { solveScalarRoot } from "../../../../src/optics/math/rootSolve.js";

describe("solveScalarRoot", () => {
  it("expands, brackets, and refines a callback residual", () => {
    const result = solveScalarRoot((x) => x * x - 9, {
      initialGuess: 1,
      initialHalfWidth: 0.25,
    });

    expect(result.status).toBe("converged");
    expect(result.root).toBeCloseTo(3, 7);
    expect(Math.abs(result.residual!)).toBeLessThanOrEqual(1e-7);
    expect(result.evaluations).toBeGreaterThan(0);
  });

  it.each([
    { name: "smooth", evaluate: (x: number) => Math.expm1(x) - 1, root: Math.LN2, tolerance: 1e-12 },
    {
      name: "near-flat",
      evaluate: (x: number) => (x - 0.137) ** 3 + 1e-8 * (x - 0.137),
      root: 0.137,
      tolerance: 1e-15,
    },
    { name: "steep", evaluate: (x: number) => 1e12 * (x - 0.137), root: 0.137, tolerance: 1e-7 },
    { name: "near the low end", evaluate: (x: number) => x + 1 - 1e-10, root: -1 + 1e-10, tolerance: 1e-14 },
    { name: "near the high end", evaluate: (x: number) => x - 1 + 1e-10, root: 1 - 1e-10, tolerance: 1e-14 },
  ])("finds the known $name root within its residual criterion", ({ evaluate, root, tolerance }) => {
    const result = solveScalarRoot(evaluate, {
      initialGuess: 0,
      initialHalfWidth: 1,
      min: -1,
      max: 1,
      maxExpansions: 0,
      residualTolerance: tolerance,
      intervalTolerance: 1e-12,
    });

    expect(result.status).toBe("converged");
    expect(Math.abs(result.root! - root)).toBeLessThanOrEqual(1e-8);
    expect(result.residual).toBe(evaluate(result.root!));
    expect(Math.abs(result.residual!)).toBeLessThanOrEqual(tolerance);
    expect(result.root).toBeGreaterThanOrEqual(result.bracket![0]);
    expect(result.root).toBeLessThanOrEqual(result.bracket![1]);
  });

  it("falls back to bisection when interpolation makes too little progress", () => {
    const result = solveScalarRoot((x) => x ** 9 - 1, {
      initialGuess: 0,
      initialHalfWidth: 2,
      scanSamples: 2,
      maxExpansions: 0,
    });

    expect(result.status).toBe("converged");
    expect(result.root).toBeCloseTo(1, 7);
    expect(Math.abs(result.residual!)).toBeLessThanOrEqual(1e-7);
  });

  it("checks the seed before scanning and prefers a nearby bracket", () => {
    const atSeed = solveScalarRoot((x) => x - 0.5, { initialGuess: 0.5, initialHalfWidth: 1 });
    expect(atSeed).toEqual({
      status: "converged",
      root: 0.5,
      residual: 0,
      iterations: 0,
      evaluations: 1,
      bracket: [0.5, 0.5],
    });

    const nearby = solveScalarRoot((x) => (x + 0.9) * (x - 0.05), {
      initialGuess: 0,
      initialHalfWidth: 1,
      scanSamples: 20,
    });
    expect(nearby.status).toBe("converged");
    expect(nearby.root).toBeCloseTo(0.05, 6);
    expect(nearby.bracket![0]).toBeGreaterThanOrEqual(0);
  });

  it.each([3, 12, 96])("keeps a clipped, asymmetric scan inside its bounds with %i samples", (scanSamples) => {
    const visited: number[] = [];
    const result = solveScalarRoot(
      (x) => {
        visited.push(x);
        return x - 0.6999999;
      },
      { initialGuess: 0.1, initialHalfWidth: 2, min: -0.4, max: 0.7, scanSamples, residualTolerance: 1e-12 },
    );

    expect(result.status).toBe("converged");
    expect(result.root).toBeCloseTo(0.6999999, 10);
    expect(visited.every((x) => x >= -0.4 && x <= 0.7)).toBe(true);
  });

  it("does not bridge unavailable callback intervals", () => {
    const result = solveScalarRoot((x) => (Math.abs(x) < 1 ? null : x < 0 ? -1 : 1), {
      initialGuess: 0,
      initialHalfWidth: 2,
      maxExpansions: 0,
      scanSamples: 32,
    });

    expect(result.status).toBe("unbracketed");
    expect(result.bracket).toBeNull();
  });

  it.each([null, undefined, Number.NaN, Number.POSITIVE_INFINITY])(
    "preserves the grid pair straddling an unavailable off-grid seed (%s)",
    (unavailable) => {
      const lo = 5;
      const hi = -38 + (86 * 7) / 12;
      const root = (lo + hi) / 2;
      const result = solveScalarRoot((x) => (x === 10 ? unavailable : x - root), {
        initialGuess: 10,
        initialHalfWidth: 48,
        min: -48,
        max: 48,
        scanSamples: 12,
      });

      expect(result.status).toBe("converged");
      expect(result.bracket).toEqual([lo, hi]);
      expect(result.root).toBeGreaterThan(lo);
      expect(result.root).toBeLessThan(hi);
      expect(result.root).toBeCloseTo(root, 12);
      expect(result.residual).toBe(0);
    },
  );

  it.each([null, undefined, Number.NaN, Number.POSITIVE_INFINITY])(
    "keeps an unavailable on-grid seed as an adjacency split (%s)",
    (unavailable) => {
      const result = solveScalarRoot((x) => (x === 0 ? unavailable : x - 0.1), {
        initialGuess: 0,
        initialHalfWidth: 1,
        scanSamples: 8,
        maxExpansions: 0,
      });

      expect(result.status).toBe("unbracketed");
      expect(result.bracket).toBeNull();
    },
  );

  it.each([null, undefined, Number.NaN, Number.POSITIVE_INFINITY])(
    "splits each scan side at an unavailable sample (%s)",
    (unavailable) => {
      for (const direction of [-1, 1]) {
        const result = solveScalarRoot(
          (x) => (Math.abs(x - direction * 0.5) < 0.1 ? unavailable : x - direction * 0.5),
          {
            initialGuess: 0,
            initialHalfWidth: 1,
            maxExpansions: 0,
            scanSamples: 8,
          },
        );
        expect(result.status).toBe("unbracketed");
        expect(result.bracket).toBeNull();
      }
    },
  );

  it.each([-1, 1])("finds a root on a valid island beyond a null split on side %i", (direction) => {
    const result = solveScalarRoot((x) => (Math.abs(x) < 0.5 ? null : x - direction * 0.73), {
      initialGuess: 0,
      initialHalfWidth: 1,
      maxExpansions: 0,
      scanSamples: 16,
    });

    expect(result.status).toBe("converged");
    expect(result.root).toBeCloseTo(direction * 0.73, 7);
    expect(result.bracket!.every((x) => direction * x >= 0.5)).toBe(true);
  });

  it("fails if refinement discovers a hole inside a scanned bracket", () => {
    const result = solveScalarRoot((x) => (x > 0.2 && x < 0.3 ? null : x - 0.25), {
      initialGuess: 0,
      initialHalfWidth: 1,
      scanSamples: 2,
      maxExpansions: 0,
    });

    expect(result.status).toBe("evaluation-failed");
    expect(result.iterations).toBe(1);
    expect(result.bracket).toEqual([0, 1]);
    expect(result.root).toBe(0);
    expect(result.residual).toBe(-0.25);
  });

  it("retains interval convergence for a sign jump whose residual cannot converge", () => {
    const result = solveScalarRoot((x) => (x < 0.137 ? -1 : 1), {
      initialGuess: 0,
      initialHalfWidth: 1,
      scanSamples: 2,
      intervalTolerance: 1e-6,
    });

    expect(result.status).toBe("converged");
    expect(Math.abs(result.root! - 0.137)).toBeLessThanOrEqual(1e-6);
    expect(Math.abs(result.residual!)).toBe(1);
  });

  it("reports an exhausted iteration budget with its final candidate", () => {
    const result = solveScalarRoot((x) => Math.expm1(x) - 1, {
      initialGuess: 0,
      initialHalfWidth: 1,
      scanSamples: 2,
      maxIterations: 1,
    });

    expect(result.status).toBe("iteration-limit");
    expect(result.iterations).toBe(1);
    expect(result.bracket).toEqual([0, 1]);
    expect(result.residual).toBe(Math.expm1(result.root!) - 1);
  });

  it("uses at most twelve evaluations for smooth residuals near the seed", () => {
    // A slightly nonlinear, near-seed residual models a well-seeded ray aim.
    // This fixture checks plausibility; the PC-Nikkor profile (EFFICIENCY_IMPROVEMENT_PLAN.md, P8) measures the median.
    for (const root of [0.001, 0.007, 0.013, 0.019, 0.025]) {
      let evaluations = 0;
      const result = solveScalarRoot(
        (x) => {
          evaluations++;
          return Math.expm1(x - root);
        },
        { initialGuess: 0, initialHalfWidth: 1 },
      );

      expect(result.status).toBe("converged");
      expect(Math.abs(result.root! - root)).toBeLessThanOrEqual(1e-7);
      expect(Math.abs(result.residual!)).toBeLessThanOrEqual(1e-7);
      expect(result.evaluations).toBe(evaluations);
      expect(evaluations).toBeLessThanOrEqual(12);
    }
  });

  it("returns the nearest valid sample when no bracket exists", () => {
    const result = solveScalarRoot((x) => x * x + 1, {
      initialGuess: 0,
      initialHalfWidth: 1,
      maxExpansions: 0,
    });

    expect(result.status).toBe("unbracketed");
    expect(result.root).toBeCloseTo(0, 12);
    expect(result.residual).toBeCloseTo(1, 12);
  });

  it("distinguishes an entirely unavailable domain from invalid options", () => {
    const unavailable = solveScalarRoot(() => null, { initialGuess: 0, initialHalfWidth: 1 });
    const invalid = solveScalarRoot((x) => x, { initialGuess: Number.NaN, initialHalfWidth: 1 });

    expect(unavailable.status).toBe("evaluation-failed");
    expect(unavailable.root).toBeNull();
    expect(invalid.status).toBe("invalid-input");
    expect(invalid.evaluations).toBe(0);
  });
});
