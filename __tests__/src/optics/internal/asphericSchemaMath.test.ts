/**
 * Descriptor-driven coverage for the single-source aspheric schema.
 *
 * Every polynomial descriptor is exercised in isolation against its analytic
 * sag and derivative, so a coefficient dropped from either math path fails its
 * own case rather than hiding inside a combined sum. The combined sweep then
 * cross-checks slope against a central difference of sag inside the valid
 * conic domain, and the intentional invalid-domain clamp is tested separately
 * (never by differencing across the clamp boundary).
 */
import { describe, expect, it } from "vitest";
import { conicPolySag, sagSlopeRaw } from "../../../../src/optics/internal/surfaceMath.js";
import { ASPHERIC_COEFFICIENT_SCHEMA, ASPHERIC_POLYNOMIAL_TERMS } from "../../../../src/types/asphericSchema.js";
import type { AsphericCoefficients } from "../../../../src/types/optics.js";

const FLAT_R = 1e15;

/** All-zero coefficient object covering every schema key. */
function zeroCoefficients(): AsphericCoefficients {
  const coefficients: Record<string, number> = {};
  for (const descriptor of ASPHERIC_COEFFICIENT_SCHEMA) coefficients[descriptor.key] = 0;
  return coefficients as unknown as AsphericCoefficients;
}

describe("aspheric schema shape", () => {
  it("covers K and the full A3–A20 range exactly once each", () => {
    const keys = ASPHERIC_COEFFICIENT_SCHEMA.map((descriptor) => descriptor.key);
    expect(new Set(keys).size).toBe(keys.length);
    expect(keys).toContain("K");
    for (let power = 3; power <= 20; power++) {
      expect(keys).toContain(`A${power}`);
    }
    expect(keys.length).toBe(1 + 18);
  });

  it("marks parity consistently with each term's power", () => {
    for (const term of ASPHERIC_POLYNOMIAL_TERMS) {
      expect(term.parity, term.key).toBe(term.power % 2 === 0 ? "even" : "odd");
    }
  });
});

describe("per-descriptor term isolation", () => {
  const h = 1.7;

  for (const term of ASPHERIC_POLYNOMIAL_TERMS) {
    it(`evaluates ${term.key} sag and slope against the analytic monomial`, () => {
      const coefficient = 1.25e-4;
      const asph = { ...zeroCoefficients(), [term.key]: coefficient } as AsphericCoefficients;

      // Flat base radius: conic contribution is exactly 0, leaving only the
      // isolated monomial A_n·h^n and its derivative n·A_n·h^(n-1).
      const sagValue = conicPolySag(h, FLAT_R, asph);
      const slopeValue = sagSlopeRaw(h, FLAT_R, asph);
      const analyticSag = coefficient * h ** term.power;
      const analyticSlope = term.power * coefficient * h ** (term.power - 1);

      expect(analyticSag).not.toBe(0);
      expect(sagValue / analyticSag).toBeCloseTo(1, 12);
      expect(slopeValue / analyticSlope).toBeCloseTo(1, 12);
    });
  }

  it("evaluates the conic K against the closed-form conic sag and slope", () => {
    const R = 40;
    const K = -0.85;
    const asph = { ...zeroCoefficients(), K } as AsphericCoefficients;
    const c = 1 / R;
    const h = 9;
    const d = 1 - (1 + K) * c * c * h * h;

    expect(d).toBeGreaterThan(0);
    expect(conicPolySag(h, R, asph)).toBeCloseTo((c * h * h) / (1 + Math.sqrt(d)), 12);
    expect(sagSlopeRaw(h, R, asph)).toBeCloseTo((c * h) / Math.sqrt(d), 12);
  });
});

describe("combined-term slope consistency", () => {
  it("reflects coefficient changes on mutable ad-hoc inputs", () => {
    const asph = zeroCoefficients();
    const h = 2;

    expect(conicPolySag(h, FLAT_R, asph)).toBe(0);
    expect(sagSlopeRaw(h, FLAT_R, asph)).toBe(0);

    asph.A4 = 1;

    expect(conicPolySag(h, FLAT_R, asph)).toBe(16);
    expect(sagSlopeRaw(h, FLAT_R, asph)).toBe(32);
  });

  it("matches a central difference of sag inside the valid conic domain", () => {
    const R = 30;
    const K = -0.6;
    const asph = zeroCoefficients() as Record<string, number>;
    asph.K = K;
    for (const term of ASPHERIC_POLYNOMIAL_TERMS) {
      // Alternate signs and shrink with power so no single term dominates.
      asph[term.key] = (term.parity === "even" ? 1 : -1) * 3e-4 * 10 ** -(term.power - 3);
    }
    const combined = asph as unknown as AsphericCoefficients;

    const c = 1 / R;
    const hDomainMax = Math.sqrt(1 / ((1 + K) * c * c));
    for (const fraction of [0.1, 0.25, 0.4, 0.55, 0.7, 0.85]) {
      const h = fraction * hDomainMax;
      // Adaptive step: scaled to h so truncation and roundoff stay balanced
      // across the sweep, and always well inside the conic domain.
      const step = 1e-6 * Math.max(1, h);
      const centralDifference =
        (conicPolySag(h + step, R, combined) - conicPolySag(h - step, R, combined)) / (2 * step);
      const slope = sagSlopeRaw(h, R, combined);
      const tolerance = 1e-8 + 1e-6 * Math.abs(slope);
      expect(Math.abs(centralDifference - slope), `h=${h}`).toBeLessThan(tolerance);
    }
  });

  it("clamps the invalid conic domain to finite values instead of NaN", () => {
    const R = 30;
    const K = 0.5;
    const asph = { ...zeroCoefficients(), K } as AsphericCoefficients;
    const c = 1 / R;
    const hDomainMax = Math.sqrt(1 / ((1 + K) * c * c));

    // Beyond the domain the sqrt argument is clamped; results must stay
    // finite so tracing reports a miss instead of exploding. No finite
    // difference is taken across this boundary.
    const hBeyond = hDomainMax * 1.2;
    expect(Number.isFinite(conicPolySag(hBeyond, R, asph))).toBe(true);
    expect(Number.isFinite(sagSlopeRaw(hBeyond, R, asph))).toBe(true);
  });
});
