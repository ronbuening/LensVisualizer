import { describe, expect, it } from "vitest";
import { solveScalarRoot } from "../../../../src/optics/math/rootSolve.js";

describe("solveScalarRoot", () => {
  it("expands, brackets, and bisects a callback residual", () => {
    const result = solveScalarRoot((x) => x * x - 9, {
      initialGuess: 1,
      initialHalfWidth: 0.25,
    });

    expect(result.status).toBe("converged");
    expect(result.root).toBeCloseTo(3, 7);
    expect(Math.abs(result.residual!)).toBeLessThanOrEqual(1e-7);
    expect(result.evaluations).toBeGreaterThan(0);
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
