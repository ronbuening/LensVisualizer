import { describe, expect, it } from "vitest";
import * as geometryBarrel from "../../../../src/optics/geometry.js";
import * as opticsBarrel from "../../../../src/optics/optics.js";
import {
  DEFAULT_MAX_RIM_ANGLE_DEG,
  FLAT_R_THRESHOLD,
  MAX_RIM_SLOPE_TAN,
  conicFiniteRadiusLimit,
  conicPolySag,
  createAsphericProfile,
  createFlatProfile,
  createSphericalProfile,
  createSurfaceProfile,
  createTiltedPlaneProfile,
  normalFromSlope,
  sag,
  sagSlopeRaw,
} from "../../../../src/optics/geometry/surfaceProfile.js";
import type { SagSlope, SurfaceProfile, Vec3 } from "../../../../src/optics/types.js";
import { ASPHERIC_COEFFICIENT_SCHEMA, ASPHERIC_POLYNOMIAL_TERMS } from "../../../../src/types/asphericSchema.js";
import type { AsphericCoefficients } from "../../../../src/types/optics.js";

/**
 * Surface geometry module: sag, slope, normals and profiles of every kind.
 *
 * - Schema: the coefficient list the term slots are derived from.
 * - Analytic: each profile kind, and each schema term alone, against its closed form.
 * - Arithmetic: `evaluate`, `sag`/`slope` and the positional functions agree bit for bit; the association the module
 *   header documents is the one evaluated; spheres, planes, normals, the slope bound and the domain radius keep the
 *   expressions they had before the surface modules were merged, which are written out here.
 * - Coefficients: a frozen object is compiled once, a mutable one is re-read on every call.
 *
 * Finite differences stay inside the conic domain and never straddle the clamp (agent_docs/decisions.md, 2026-08-04).
 */

const FLAT_R = 1e15;
const EPS = Number.EPSILON;

/** All-zero coefficient object covering every schema key. */
function zeroCoefficients(): AsphericCoefficients {
  const coefficients: Record<string, number> = {};
  for (const descriptor of ASPHERIC_COEFFICIENT_SCHEMA) coefficients[descriptor.key] = 0;
  return coefficients as unknown as AsphericCoefficients;
}

/** Every schema term nonzero: signs alternate by parity and magnitudes shrink with power, so no term dominates. */
function combinedCoefficients(K: number): AsphericCoefficients {
  const coefficients = zeroCoefficients() as unknown as Record<string, number>;
  coefficients.K = K;
  for (const term of ASPHERIC_POLYNOMIAL_TERMS) {
    coefficients[term.key] = (term.parity === "even" ? 1 : -1) * 3e-4 * 10 ** -(term.power - 3);
  }
  return coefficients as unknown as AsphericCoefficients;
}

/** Fujifilm GFX100RF 35mm surface 15A: patent magnitudes, with terms that cancel against each other. */
const PATENT_R = -137.7142;
const PATENT_ASPHERE: AsphericCoefficients = {
  K: 6.0896629652,
  A4: -1.0499566787e-4,
  A6: 4.5030349598e-6,
  A8: -1.8332704424e-7,
  A10: 3.2832007849e-9,
  A12: -2.6860875467e-11,
  A14: 6.2135840221e-14,
  A16: 4.8063364846e-16,
  A18: -3.3492681519e-18,
  A20: 6.0349230674e-21,
  A5: -1.7524859132e-5,
  A7: 2.1858635689e-7,
  A9: 1.0104186656e-8,
  A11: -3.5373721277e-10,
  A13: 4.6941325681e-12,
  A15: -3.1574129484e-14,
  A17: 1.0713713899e-16,
  A19: -1.4581851029e-19,
};

/** Every order A3–A20 with alternating signs, in an object that carries no zero. */
const MIXED_ORDERS: AsphericCoefficients = {
  K: -0.5,
  A4: 1e-5,
  A6: -2e-7,
  A8: 3e-9,
  A10: -4e-11,
  A12: 5e-13,
  A14: -6e-15,
  A16: 7e-17,
  A18: -8e-19,
  A20: 9e-21,
  A3: 2e-4,
  A5: -3e-6,
  A7: 4e-8,
  A9: -5e-10,
  A11: 6e-12,
  A13: -7e-14,
  A15: 8e-16,
  A17: -9e-18,
  A19: 1e-19,
};

/** Only the keys the schema requires: every optional one is absent, not zero. */
const REQUIRED_KEYS_ASPHERE: AsphericCoefficients = { K: -0.7, A4: 1e-6, A6: -2e-9, A8: 3e-12, A10: 0, A12: 0, A14: 0 };

/** The required keys plus three of the optional odd ones. */
const ODD_BEARING_ASPHERE: AsphericCoefficients = {
  K: 0.4,
  A4: -2e-5,
  A6: 3e-8,
  A8: 0,
  A10: 0,
  A12: 0,
  A14: 0,
  A3: -4e-5,
  A5: 6e-7,
  A9: -2e-11,
};

function coefficient(asph: AsphericCoefficients, key: string): number {
  return (asph as unknown as Record<string, number | undefined>)[key] ?? 0;
}

/** `toBe` on each component: unlike `toEqual` on the pair, a failure names the field that moved. */
function expectSameBits(actual: SagSlope, expected: SagSlope, label: string): void {
  expect(actual.sag, `${label} sag`).toBe(expected.sag);
  expect(actual.slope, `${label} slope`).toBe(expected.slope);
}

function expectWithin(actual: number, expected: number, bound: number, label: string): void {
  expect(Math.abs(actual - expected), `${label}: ${actual} against ${expected}`).toBeLessThanOrEqual(bound);
}

/* ── The module's documented arithmetic, transcribed from its header ── */

/** One parity's Horner chain in h²: dense slots, started at the highest nonzero one, run down to slot 0. */
function hornerChain(
  h2: number,
  asph: AsphericCoefficients,
  parity: "even" | "odd",
  slotOf: (power: number) => number,
  weightOf: (power: number) => number,
): number {
  const terms = ASPHERIC_POLYNOMIAL_TERMS.filter((term) => term.parity === parity);
  const slots = new Array<number>(Math.max(...terms.map((term) => slotOf(term.power))) + 1).fill(0);
  for (const term of terms) slots[slotOf(term.power)] = weightOf(term.power) * coefficient(asph, term.key);
  let top = slots.length - 1;
  while (top >= 0 && slots[top] === 0) top--;
  if (top < 0) return 0;
  let sum = slots[top];
  for (let slot = top - 1; slot >= 0; slot--) sum = sum * h2 + slots[slot];
  return sum;
}

function documentedSagSlope(h: number, R: number, asph: AsphericCoefficients): SagSlope {
  const h2 = h * h;
  const c = Math.abs(R) > 1e10 ? 0 : 1 / R;
  const d = 1 - (1 + asph.K) * c * c * h2;
  const root = Math.sqrt(d > 0 ? d : 1e-12);
  const evenSag = hornerChain(
    h2,
    asph,
    "even",
    (n) => n / 2,
    () => 1,
  );
  const oddSag =
    h *
    hornerChain(
      h2,
      asph,
      "odd",
      (n) => (n - 1) / 2,
      () => 1,
    );
  const evenSlope =
    h *
    hornerChain(
      h2,
      asph,
      "even",
      (n) => n / 2 - 1,
      (n) => n,
    );
  const oddSlope = hornerChain(
    h2,
    asph,
    "odd",
    (n) => (n - 1) / 2,
    (n) => n,
  );
  return { sag: (c * h2) / (1 + root) + evenSag + oddSag, slope: (c * h) / root + evenSlope + oddSlope };
}

/* ── Expressions from before the merge ── */

/** `sag(h, R)`: the sphere, with its root argument clamped to 0. */
function sphereSagBefore(h: number, R: number): number {
  if (Math.abs(R) > 1e10) return 0;
  const c = 1 / R;
  const h2 = h * h;
  const d = 1 - c * c * h2;
  return (c * h2) / (1 + Math.sqrt(d > 0 ? d : 0));
}

/** `conicPolySag(h, R, undefined)`: the same sphere through the conic path, clamped to 1e-12. */
function conicSagBefore(h: number, R: number): number {
  if (Math.abs(R) > 1e10) return 0;
  const c = 1.0 / R;
  const K = 0;
  const h2 = h * h;
  const d = 1 - (1 + K) * c * c * h2;
  return (c * h2) / (1 + Math.sqrt(d > 0 ? d : 1e-12));
}

/** `sagSlopeRaw(h, R, undefined)`: the only sphere slope, clamped to 1e-12. */
function sphereSlopeBefore(h: number, R: number): number {
  if (Math.abs(R) > 1e10) return 0;
  const c = 1.0 / R;
  const K = 0;
  const h2 = h * h;
  const denom2 = 1 - (1 + K) * c * c * h2;
  return (c * h) / Math.sqrt(denom2 > 0 ? denom2 : 1e-12);
}

function normalizeBefore(v: Vec3): Vec3 | null {
  const magnitude = Math.hypot(v[0], v[1], v[2]);
  if (!Number.isFinite(magnitude) || magnitude <= 1e-12) return null;
  return [v[0] / magnitude, v[1] / magnitude, v[2] / magnitude];
}

function radialNormalBefore(point: Vec3, slope: number): Vec3 {
  const radius = Math.hypot(point[0], point[1]);
  if (radius < 1e-12) return [0, 0, 1];
  const dzdx = (slope * point[0]) / radius;
  const dzdy = (slope * point[1]) / radius;
  return normalizeBefore([-dzdx, -dzdy, 1]) ?? [0, 0, 1];
}

function slopeBoundBefore(R: number, asph: AsphericCoefficients, radius: number): number {
  if (!(Number.isFinite(radius) && radius >= 0)) return Infinity;
  let bound = 0;
  if (Math.abs(R) <= 1e10) {
    const q = 1 - (1 + asph.K) * (radius / R) ** 2;
    if (!(q > 1e-12)) return Infinity;
    bound = Math.abs(radius / R) / Math.sqrt(q);
  }
  const coefficients = new Float64Array(20);
  for (const term of ASPHERIC_POLYNOMIAL_TERMS) {
    coefficients[term.power - 1] += Math.abs(coefficient(asph, term.key)) * term.power;
  }
  let poly = 0;
  for (let exponent = coefficients.length - 1; exponent >= 0; exponent--) poly = poly * radius + coefficients[exponent];
  bound += poly;
  return bound * (1 + 1e-12) + 1e-12;
}

function domainRadiusBefore(R: number, K: number): number | null {
  if (Math.abs(R) > 1e10) return null;
  const c = 1 / R;
  const factor = (1 + K) * c * c;
  if (factor <= 0) return null;
  return 1 / Math.sqrt(factor);
}

/** The tilted plane as it was built: unit normal, z from signed y, constant slope. */
function tiltedPlaneBefore(normal: { y: number; z: number }) {
  const planeNormal = normalizeBefore([0, normal.y, normal.z]) ?? ([0, 0, 1] as Vec3);
  const normalY = planeNormal[1];
  const normalZ = planeNormal[2];
  const zFromY = (vertexZ: number, y: number): number =>
    Math.abs(normalZ) <= 1e-12 ? vertexZ : vertexZ - (normalY * y) / normalZ;
  return {
    planeNormal,
    sag: (y: number) => zFromY(0, y),
    slope: () => (Math.abs(normalZ) <= 1e-12 ? 0 : -normalY / normalZ),
    pointAt: (vertexZ: number, x: number, y: number): Vec3 =>
      Math.abs(normalZ) <= 1e-12 ? [x, 0, vertexZ] : [x, y, zFromY(vertexZ, y)],
  };
}

/** Radii from the axis to far beyond any domain, with the non-finite inputs a failed solve can produce. */
function radiiAround(scale: number): number[] {
  return [
    0,
    1e-300,
    1e-9 * scale,
    0.3 * scale,
    0.85 * scale,
    0.999999 * scale,
    scale,
    scale * (1 + 1e-12),
    1.5 * scale,
    40 * scale,
    1e16,
    1e200,
    Infinity,
    NaN,
  ];
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

describe("surface geometry constants", () => {
  it("keeps the flat threshold and the rim-slope defaults", () => {
    expect(FLAT_R_THRESHOLD).toBe(1e10);
    expect(MAX_RIM_SLOPE_TAN).toBe(0.9 / Math.sqrt(1 - 0.9 ** 2));
    expect(DEFAULT_MAX_RIM_ANGLE_DEG).toBe((Math.atan(MAX_RIM_SLOPE_TAN) * 180) / Math.PI);
  });

  it("treats a radius at the threshold as curved and one above it as flat", () => {
    expect(createSurfaceProfile({ R: FLAT_R_THRESHOLD }).kind).toBe("spherical");
    expect(createSurfaceProfile({ R: -FLAT_R_THRESHOLD * (1 + 1e-12) }).kind).toBe("flat");
    expect(sag(1, FLAT_R_THRESHOLD)).toBeGreaterThan(0);
    expect(sag(1, FLAT_R_THRESHOLD * (1 + 1e-12))).toBe(0);
  });

  it("offers the same functions and constants through the outside barrel", () => {
    expect({ ...geometryBarrel }).toMatchObject({
      DEFAULT_MAX_RIM_ANGLE_DEG,
      FLAT_R_THRESHOLD,
      MAX_RIM_SLOPE_TAN,
      conicPolySag,
      sag,
      sagSlopeRaw,
    });
  });

  it("is the only outside door: the optics barrel exports none of them", () => {
    for (const name of Object.keys(geometryBarrel)) {
      expect(name in opticsBarrel, name).toBe(false);
    }
  });
});

describe("profile kinds against closed forms", () => {
  it("dispatches each surface to its kind, tilt first", () => {
    const asphere = zeroCoefficients();
    expect(createSurfaceProfile({ R: 50 }).kind).toBe("spherical");
    expect(createSurfaceProfile({ R: FLAT_R }).kind).toBe("flat");
    expect(createSurfaceProfile({ R: 50 }, asphere).kind).toBe("aspheric");
    // A flat base with coefficients is still an asphere, and so is one whose coefficients are all zero.
    expect(createSurfaceProfile({ R: FLAT_R }, asphere).kind).toBe("aspheric");
    const tilt = { type: "reflect" as const, normal: { y: 1, z: 1 } };
    expect(createSurfaceProfile({ R: 50, interaction: tilt }, asphere).kind).toBe("tilted-plane");
  });

  it("evaluates a flat surface as the vertex plane", () => {
    const flat = createFlatProfile();
    for (const radius of radiiAround(10)) {
      expect(flat.sag(radius)).toBe(0);
      expect(flat.slope(radius)).toBe(0);
    }
    expect(flat.pointAt(7, 3, -4)).toEqual([3, -4, 7]);
    expect(flat.normalAt([3, -4, 7], 7)).toEqual([0, 0, 1]);
    expect(flat.finiteRadiusLimit()).toBeNull();
    expect(flat.maxAbsSlope).toBeUndefined();
  });

  it("evaluates a sphere as z = R - sign(R)·sqrt(R² - r²) and dz/dr = r / sqrt(R² - r²)", () => {
    // A 3-4-5 triangle: r = 30 on |R| = 50 gives sag 10 and slope 3/4.
    for (const R of [50, -50]) {
      const sphere = createSphericalProfile(R);
      expectWithin(sphere.sag(30), Math.sign(R) * 10, 8 * EPS * 10, `R=${R} sag`);
      expectWithin(sphere.slope(30), Math.sign(R) * 0.75, 8 * EPS, `R=${R} slope`);
      // The positional functions are the same sphere.
      expect(sag(30, R)).toBe(sphere.sag(30));
      expect(sagSlopeRaw(30, R, undefined)).toBe(sphere.slope(30));
      const point = sphere.pointAt(100, 18, 24);
      expect(point[0]).toBe(18);
      expect(point[1]).toBe(24);
      expectWithin(point[2], 100 + Math.sign(R) * 10, 8 * EPS * 100, `R=${R} point`);
      // The normal of a sphere points along the line to its center, here (0, 0, 100 + R).
      const normal = sphere.normalAt(point, 100);
      const toCenter = [-18 / R, -24 / R, (100 + R - point[2]) / R];
      toCenter.forEach((component, axis) => expectWithin(normal[axis], component, 8 * EPS, `R=${R} normal ${axis}`));
      expect(sphere.finiteRadiusLimit()).toBe(50);
      expect(sphere.maxAbsSlope).toBeUndefined();

      // Away from the triangle: r = 10, and r at 45° of the sphere, where the sag is |R|·(1 - cos 45°).
      expectWithin(sag(10, R), Math.sign(R) * (50 - Math.sqrt(2400)), 8 * EPS * 50, `R=${R} sag(10)`);
      const atHalfRightAngle = 50 * Math.sin(Math.PI / 4);
      const sagAtHalfRightAngle = Math.sign(R) * (50 - 50 * Math.cos(Math.PI / 4));
      expectWithin(sag(atHalfRightAngle, R), sagAtHalfRightAngle, 8 * EPS * 50, `R=${R} sag at 45°`);
    }
    // On the axis the sag is a zero that carries the sign of R.
    expect(sag(0, 50)).toBe(0);
    expect(sag(0, -100)).toBe(-0);
  });

  it("evaluates a conic against its closed form inside the domain", () => {
    const R = 40;
    const h = 9;
    // K = -1 is a paraboloid: sag r²/(2R), slope r/R.
    const parabola = createAsphericProfile(R, { ...zeroCoefficients(), K: -1 });
    expectWithin(parabola.sag(h), (h * h) / (2 * R), 4 * EPS, "parabola sag");
    expectWithin(parabola.slope(h), h / R, 4 * EPS, "parabola slope");
    // Any other K: z = (R / (1 + K))·(1 - sqrt(1 - (1 + K)·r²/R²)), dz/dr = (r/R) / sqrt(1 - (1 + K)·r²/R²).
    for (const K of [-2.5, -0.85, 0, 0.5]) {
      const coefficients = { ...zeroCoefficients(), K };
      const conic = createAsphericProfile(R, coefficients);
      const root = Math.sqrt(1 - ((1 + K) * h * h) / (R * R));
      // The closed form subtracts two nearly equal numbers, so it carries the looser bound of the two.
      expectWithin(conic.sag(h), (R / (1 + K)) * (1 - root), 64 * EPS, `K=${K} sag`);
      expectWithin(conic.slope(h), h / R / root, 8 * EPS, `K=${K} slope`);
      expect(conicPolySag(h, R, coefficients)).toBe(conic.sag(h));
      expect(sagSlopeRaw(h, R, coefficients)).toBe(conic.slope(h));
    }
  });

  it("evaluates a pure polynomial exactly where every product is an integer", () => {
    // sag = 2·r⁴ - r³ on a flat base, at r = 3: 162 - 27, and slope 8·27 - 3·9.
    const profile = createAsphericProfile(FLAT_R, { ...zeroCoefficients(), A4: 2, A3: -1 });
    expect(profile.sag(3)).toBe(135);
    expect(profile.slope(3)).toBe(189);
  });

  it("evaluates a tilted plane as a function of signed y", () => {
    // Normal (0, 1, 1): the plane z = -y through the vertex.
    const plane = createTiltedPlaneProfile({ y: 1, z: 1 });
    for (const y of [-7.5, -1, 0, 2, 11]) {
      expectWithin(plane.sag(y), -y, 4 * EPS * Math.abs(y), `sag(${y})`);
      expectWithin(plane.slope(y), -1, 4 * EPS, `slope(${y})`);
      const point = plane.pointAt(5, 3, y);
      expectWithin(point[2], 5 - y, 4 * EPS * (5 + Math.abs(y)), `point(${y})`);
    }
    // Every point of the profile satisfies n·(p - vertex) = 0, with a unit normal.
    for (const [vertexZ, x, y] of [
      [7, 0, 3],
      [5, 3, -7.5],
      [5, 3, 11],
    ]) {
      const point = plane.pointAt(vertexZ, x, y);
      const normal = plane.normalAt(point, vertexZ);
      const residual = normal[0] * point[0] + normal[1] * point[1] + normal[2] * (point[2] - vertexZ);
      expectWithin(residual, 0, 1e-12, `plane equation at y=${y}`);
      expectWithin(Math.hypot(normal[0], normal[1], normal[2]), 1, 1e-12, "unit normal");
    }
    expect(plane.finiteRadiusLimit()).toBeNull();
    expect(plane.maxAbsSlope).toBeUndefined();
  });
});

describe("each schema term in isolation", () => {
  /* A term's Horner chain is the coefficient times h² up to ten times, each product rounded once, on an h² that is
   * itself rounded: at most 10 EPS relative. The closed form's `**` and one product add about 2 EPS. */
  const TERM_BOUND = 32 * EPS;

  for (const term of ASPHERIC_POLYNOMIAL_TERMS) {
    it(`evaluates ${term.key} as ${term.key}·h^${term.power} with slope ${term.power}·${term.key}·h^${term.power - 1}`, () => {
      for (const value of [1.25e-4, 2e-3]) {
        const asph = { ...zeroCoefficients(), [term.key]: value } as AsphericCoefficients;
        // A flat base has no conic term, which leaves the monomial alone.
        const profile = createAsphericProfile(FLAT_R, asph);
        expect(profile.hasPolynomial).toBe(true);

        for (const h of [1.5, 1.7, 10]) {
          const expectedSag = value * h ** term.power;
          const expectedSlope = term.power * value * h ** (term.power - 1);
          expect(expectedSag).not.toBe(0);
          expectWithin(profile.sag(h), expectedSag, TERM_BOUND * expectedSag, `sag h=${h}`);
          expectWithin(profile.slope(h), expectedSlope, TERM_BOUND * expectedSlope, `slope h=${h}`);

          // The positional functions read the same term, so a coefficient dropped from either path fails its own case.
          expect(conicPolySag(h, FLAT_R, asph)).toBe(profile.sag(h));
          expect(sagSlopeRaw(h, FLAT_R, asph)).toBe(profile.slope(h));

          // An odd term is odd in h and an even term is even: the caller passes a radius, never a signed height.
          const mirror = term.parity === "even" ? 1 : -1;
          expect(conicPolySag(-h, FLAT_R, asph)).toBe(mirror * conicPolySag(h, FLAT_R, asph));
        }

        // On the axis the term and its slope vanish exactly.
        expectSameBits(profile.evaluate(0), { sag: 0, slope: 0 }, "axis");
        const positional = { sag: conicPolySag(0, FLAT_R, asph), slope: sagSlopeRaw(0, FLAT_R, asph) };
        expectSameBits(positional, { sag: 0, slope: 0 }, "axis, positional");
      }
    });
  }

  it("includes optional higher-order asphere terms in sag and slope calculations", () => {
    const asphere: AsphericCoefficients = {
      K: -0.5,
      A4: 1e-5,
      A6: -2e-7,
      A8: 3e-9,
      A10: -4e-11,
      A12: 5e-13,
      A14: -6e-15,
      A16: 7e-17,
      A18: -8e-19,
      A20: 9e-21,
    };

    const withoutHighOrder: AsphericCoefficients = {
      ...asphere,
      A16: 0,
      A18: 0,
      A20: 0,
    };

    const h = 4;
    const R = 32;

    expect(conicPolySag(h, R, asphere)).not.toBeCloseTo(conicPolySag(h, R, withoutHighOrder), 12);
    expect(sagSlopeRaw(h, R, asphere)).not.toBeCloseTo(sagSlopeRaw(h, R, withoutHighOrder), 12);
  });
});

describe("one arithmetic", () => {
  const ASPHERES: readonly { name: string; R: number; asphere: AsphericCoefficients; heights?: readonly number[] }[] = [
    { name: "combined, convex", R: 30, asphere: combinedCoefficients(-0.6) },
    { name: "combined, concave, K > 0", R: -30, asphere: combinedCoefficients(0.5) },
    { name: "patent coefficients", R: PATENT_R, asphere: PATENT_ASPHERE },
    { name: "flat base", R: FLAT_R, asphere: combinedCoefficients(0) },
    { name: "conic only", R: 25, asphere: { ...zeroCoefficients(), K: 0.3 } },
    { name: "all zero", R: -25, asphere: zeroCoefficients() },
    { name: "gap between terms", R: 60, asphere: { ...zeroCoefficients(), K: -1, A4: 2e-5, A10: -3e-13, A7: 4e-9 } },
    // Objects that leave optional keys out, each with a mid-aperture height of its own.
    { name: "required keys only", R: 42.5, asphere: REQUIRED_KEYS_ASPHERE, heights: [12.3] },
    { name: "some odd keys", R: -60, asphere: ODD_BEARING_ASPHERE, heights: [9.25] },
  ];

  /** The radius the conic term stops being real at, or a rim-sized scale where it never does. */
  const scaleOf = (R: number, K: number): number => conicFiniteRadiusLimit(R, K) ?? 12;
  /** Inside the domain, at its edge and beyond it, plus the entry's own heights. */
  const heightsOf = (entry: (typeof ASPHERES)[number]): number[] => [
    ...radiiAround(scaleOf(entry.R, entry.asphere.K)),
    ...(entry.heights ?? []),
  ];

  it.each(ASPHERES)("evaluates the documented association: $name", (entry) => {
    const { R, asphere } = entry;
    // Beyond the domain only the conic root argument is clamped.
    for (const h of heightsOf(entry)) {
      const expected = documentedSagSlope(h, R, asphere);
      expectSameBits({ sag: conicPolySag(h, R, asphere), slope: sagSlopeRaw(h, R, asphere) }, expected, `h=${h}`);
    }
  });

  it.each(ASPHERES)("agrees bit for bit across evaluate, sag/slope and the positional functions: $name", (entry) => {
    for (const asphere of [entry.asphere, Object.freeze({ ...entry.asphere })]) {
      const profile = createAsphericProfile(entry.R, asphere);
      for (const h of heightsOf(entry)) {
        const separate = { sag: profile.sag(h), slope: profile.slope(h) };
        expectSameBits(profile.evaluate(h), separate, `evaluate h=${h}`);
        const positional = { sag: conicPolySag(h, entry.R, asphere), slope: sagSlopeRaw(h, entry.R, asphere) };
        expectSameBits(positional, separate, `positional h=${h}`);
      }
    }
  });

  it("agrees bit for bit on spheres, flats and tilted planes, with the signed zero at a concave vertex", () => {
    for (const R of [50, -50, 42.5, -17.388, 0.5, FLAT_R_THRESHOLD, FLAT_R]) {
      const profile = createSphericalProfile(R);
      for (const h of [...radiiAround(Math.min(Math.abs(R), 1e6)), 12.3]) {
        const separate = { sag: profile.sag(h), slope: profile.slope(h) };
        expectSameBits(profile.evaluate(h), separate, `sphere R=${R} h=${h}`);
        expectSameBits({ sag: sag(h, R), slope: sagSlopeRaw(h, R, undefined) }, separate, `positional R=${R} h=${h}`);
      }
    }
    // c·0 is -0 for R < 0, and nothing is added to it on a sphere.
    expectSameBits(createSphericalProfile(-50).evaluate(0), { sag: -0, slope: -0 }, "concave vertex");
    expectSameBits(createSphericalProfile(50).evaluate(0), { sag: 0, slope: 0 }, "convex vertex");
    // On an asphere the polynomial sums add +0, on every path alike.
    const concave = createAsphericProfile(-50, combinedCoefficients(0.2));
    expectSameBits(concave.evaluate(0), { sag: 0, slope: 0 }, "concave asphere vertex");
    expectSameBits({ sag: concave.sag(0), slope: concave.slope(0) }, { sag: 0, slope: 0 }, "concave asphere vertex");

    const planes: SurfaceProfile[] = [
      createFlatProfile(),
      createTiltedPlaneProfile({ y: 1, z: 1 }),
      createTiltedPlaneProfile({ y: -0.3, z: 2 }),
      createTiltedPlaneProfile({ y: 1, z: 0 }),
    ];
    for (const plane of planes) {
      for (const y of [-11, -0, 0, 2.5, 1e16, Infinity, NaN]) {
        expectSameBits(plane.evaluate(y), { sag: plane.sag(y), slope: plane.slope(y) }, `${plane.kind} y=${y}`);
      }
    }
  });

  it("fills and returns the caller's object, and allocates only without one", () => {
    const profiles = [
      createFlatProfile(),
      createSphericalProfile(50),
      createAsphericProfile(50, combinedCoefficients(0)),
      createTiltedPlaneProfile({ y: 1, z: 2 }),
    ];
    for (const profile of profiles) {
      const out: SagSlope = { sag: NaN, slope: NaN };
      expect(profile.evaluate(4, out)).toBe(out);
      expectSameBits(out, { sag: profile.sag(4), slope: profile.slope(4) }, profile.kind);
      expect(profile.evaluate(4)).not.toBe(profile.evaluate(4));
    }
  });

  it("builds points and normals from the same sag and slope", () => {
    const profiles = [
      createSphericalProfile(-42.5),
      createAsphericProfile(PATENT_R, PATENT_ASPHERE),
      createAsphericProfile(30, Object.freeze(combinedCoefficients(-0.6))),
      createSurfaceProfile({ R: 42.5 }, REQUIRED_KEYS_ASPHERE),
      createSurfaceProfile({ R: -60 }, ODD_BEARING_ASPHERE),
    ];
    for (const profile of profiles) {
      for (const [x, y] of [
        [0, 0],
        [3, 4],
        [-6.5, 2.25],
        [0, -11],
      ]) {
        const radius = Math.hypot(x, y);
        const point = profile.pointAt(12.5, x, y);
        expect(point).toEqual([x, y, 12.5 + profile.sag(radius)]);
        const normal = profile.normalAt(point, 12.5);
        expect(normal).toEqual(normalFromSlope(x, y, radius, profile.slope(radius)));
        expectWithin(Math.hypot(normal[0], normal[1], normal[2]), 1, 8 * EPS, "unit normal");
      }
    }
  });

  it("stays finite beyond the conic domain and keeps the polynomial apart from the clamp", () => {
    const R = 30;
    // Same-signed terms, so the surface is not a small difference of large addends.
    const asphere = { ...zeroCoefficients(), K: 0.5, A3: 1e-5, A4: 1e-6, A6: 1e-9 };
    const domain = conicFiniteRadiusLimit(R, asphere.K)!;
    const conicOnly = { ...zeroCoefficients(), K: asphere.K };
    for (const h of [domain * 1.000001, domain * 1.2, domain * 3]) {
      const full = createAsphericProfile(R, asphere).evaluate(h);
      expect(Number.isFinite(full.sag)).toBe(true);
      expect(Number.isFinite(full.slope)).toBe(true);
      // The clamped conic term is the whole difference between the surface and its polynomial alone.
      const clamped = createAsphericProfile(R, conicOnly).evaluate(h);
      expect(conicPolySag(h, R, conicOnly)).toBe(clamped.sag);
      expect(sagSlopeRaw(h, R, conicOnly)).toBe(clamped.slope);
      const polynomial = createAsphericProfile(FLAT_R, asphere).evaluate(h);
      expectWithin(full.sag, clamped.sag + polynomial.sag, 4 * EPS * Math.abs(full.sag), `sag h=${h}`);
      expectWithin(full.slope, clamped.slope + polynomial.slope, 4 * EPS * Math.abs(full.slope), `slope h=${h}`);
      // The clamp holds the root at sqrt(1e-12): sag c·h²/(1 + 1e-6) and slope c·h·1e6.
      expectWithin(clamped.sag, (h * h) / R / (1 + 1e-6), 4 * EPS * clamped.sag, `clamped sag h=${h}`);
      expectWithin(clamped.slope, (h / R) * 1e6, 4 * EPS * clamped.slope, `clamped slope h=${h}`);
    }

    // A sphere written as an all-zero asphere takes the conic path: beyond |R| it keeps the 1e-12 clamp.
    const sphereCoefficients = { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
    const sphereAsAsphere = createSurfaceProfile({ R: 10 }, sphereCoefficients);
    expect(sphereAsAsphere.sag(12)).toBe(conicPolySag(12, 10, sphereCoefficients));
    expect(sphereAsAsphere.sag(12)).toBe(conicSagBefore(12, 10));
    expect(sphereAsAsphere.slope(12)).toBe(sphereSlopeBefore(12, 10));
    expect(Number.isFinite(sphereAsAsphere.slope(12))).toBe(true);
  });

  it("starts each chain at the highest nonzero term, so a zero coefficient never meets an overflowed power", () => {
    // All-zero coefficients: no power is formed, so the sums are 0 wherever h² itself is finite.
    const zero = createAsphericProfile(FLAT_R, zeroCoefficients());
    for (const h of [1e16, 1e150]) {
      expectSameBits(zero.evaluate(h), { sag: 0, slope: 0 }, `all zero h=${h}`);
    }
    // One low term: the sag overflows to Infinity as r⁴ does, and is not NaN from 0·Infinity in a higher slot.
    const quartic = createAsphericProfile(FLAT_R, { ...zeroCoefficients(), A4: 1 });
    expect(quartic.sag(1e100)).toBe(Infinity);
    expectWithin(quartic.slope(1e100), 4e300, 4 * EPS * 4e300, "quartic slope");
    expect(quartic.hasPolynomial).toBe(true);
    expect(zero.hasPolynomial).toBe(false);
    // Where h² itself overflows, a chain that began at a zero slot would compute 0·Infinity. Beginning at the highest
    // nonzero term leaves the clamped conic continuation, plus whatever the present terms overflow to.
    const conicOnly = createAsphericProfile(30, { ...zeroCoefficients(), K: 0.5 });
    const clampedSlope = (1e200 * (1.0 / 30)) / Math.sqrt(1e-12);
    expectSameBits(conicOnly.evaluate(1e200), { sag: Infinity, slope: clampedSlope }, "conic only, h² overflowed");
    const curvedQuartic = createAsphericProfile(30, { ...zeroCoefficients(), K: 0.5, A4: 1e-9 });
    expectSameBits(curvedQuartic.evaluate(1e200), { sag: Infinity, slope: Infinity }, "quartic, h² overflowed");
  });
});

describe("Horner form against an independent power sum", () => {
  /** Ascending sum of A_n·h^n and of n·A_n·h^(n-1), with the sum of absolute terms that scales its rounding. */
  function powerSum(h: number, asph: AsphericCoefficients) {
    const total = { sag: 0, slope: 0, sagMagnitude: 0, slopeMagnitude: 0 };
    for (let power = 3; power <= 20; power++) {
      const value = coefficient(asph, `A${power}`);
      const sagTerm = value * h ** power;
      const slopeTerm = power * value * h ** (power - 1);
      total.sag += sagTerm;
      total.slope += slopeTerm;
      total.sagMagnitude += Math.abs(sagTerm);
      total.slopeMagnitude += Math.abs(slopeTerm);
    }
    return total;
  }

  /* Both forms round each of at most 18 terms a bounded number of times, so each is within about 20 EPS of the
   * exact sum, relative to the sum of absolute terms and not to a result that cancellation can make small. */
  const RELATIVE_BOUND = 64 * EPS;

  /** Even terms only, through A16: the odd sums and the top two even slots stay empty. */
  const EVEN_ONLY = {
    K: -0.7,
    A4: 1e-6,
    A6: -2e-9,
    A8: 3e-12,
    A10: -4e-15,
    A12: 5e-18,
    A14: -6e-21,
    A16: 7e-24,
  } satisfies AsphericCoefficients;
  const EVERY_HUNDREDTH = Array.from({ length: 2001 }, (_, step) => step / 100);

  it.each([
    // A flat base leaves the polynomial alone.
    { name: "combined coefficients", R: FLAT_R, asphere: combinedCoefficients(0), heights: [0.4, 2.5, 7, 11.5] },
    { name: "patent coefficients", R: FLAT_R, asphere: PATENT_ASPHERE, heights: [2, 6.5, 12.9] },
    // On a curved base the conic term joins the reference as an addend of its own.
    { name: "mixed orders on a curved base", R: 40, asphere: MIXED_ORDERS, heights: [0.5, 4, 9.5] },
    /* The power sum was the evaluation before Horner. The two forms round differently, so on this surface they part
     * in the last bit at about one height in a hundred: every height is held to the bound, none to equal bits. */
    { name: "an even-only surface, every 0.01 mm to 20 mm", R: 42.5, asphere: EVEN_ONLY, heights: EVERY_HUNDREDTH },
  ])("matches on $name within 64 EPS of the summed term magnitudes", ({ R, asphere, heights }) => {
    for (const h of heights) {
      const reference = powerSum(h, asphere);
      const c = Math.abs(R) > FLAT_R_THRESHOLD ? 0 : 1 / R;
      const root = Math.sqrt(1 - (1 + asphere.K) * c * c * h * h);
      const conicSag = (c * h * h) / (1 + root);
      const conicSlope = (c * h) / root;
      const horner = createAsphericProfile(R, asphere).evaluate(h);
      const sagBound = RELATIVE_BOUND * (Math.abs(conicSag) + reference.sagMagnitude);
      const slopeBound = RELATIVE_BOUND * (Math.abs(conicSlope) + reference.slopeMagnitude);
      expectWithin(horner.sag, conicSag + reference.sag, sagBound, `sag h=${h}`);
      expectWithin(horner.slope, conicSlope + reference.slope, slopeBound, `slope h=${h}`);
      expect(conicPolySag(h, R, asphere)).toBe(horner.sag);
      expect(sagSlopeRaw(h, R, asphere)).toBe(horner.slope);
    }
  });

  it("leaves an even-only surface untouched by the odd sums", () => {
    const even = EVEN_ONLY;
    const R = 42.5;
    for (const h of [0, 3.7, 11.9, 20.1]) {
      const h2 = h * h;
      const c = 1 / R;
      const root = Math.sqrt(1 - (1 + even.K) * c * c * h2);
      const sagChain =
        ((((((even.A16 * h2 + even.A14) * h2 + even.A12) * h2 + even.A10) * h2 + even.A8) * h2 + even.A6) * h2 +
          even.A4) *
        h2 *
        h2;
      const slopeChain =
        ((((((16 * even.A16 * h2 + 14 * even.A14) * h2 + 12 * even.A12) * h2 + 10 * even.A10) * h2 + 8 * even.A8) * h2 +
          6 * even.A6) *
          h2 +
          4 * even.A4) *
        h2;
      expect(conicPolySag(h, R, even)).toBe((c * h2) / (1 + root) + sagChain);
      expect(sagSlopeRaw(h, R, even)).toBe((c * h) / root + h * slopeChain);
    }
  });
});

describe("slope against finite differences inside the conic domain", () => {
  it.each([
    { name: "sphere", R: -30, asphere: undefined, domain: 30 },
    { name: "conic", R: 30, asphere: { ...zeroCoefficients(), K: 0.5 }, domain: 30 / Math.sqrt(1.5) },
    { name: "every term", R: 30, asphere: combinedCoefficients(-0.6), domain: 30 / Math.sqrt(0.4) },
    { name: "patent", R: PATENT_R, asphere: PATENT_ASPHERE, domain: 12.9 / 0.85 },
  ])("matches the central difference of sag to 85% of the domain: $name", ({ R, asphere, domain }) => {
    const profile = createSurfaceProfile({ R }, asphere);
    for (const fraction of [0.1, 0.25, 0.4, 0.55, 0.7, 0.85]) {
      // The largest sample and its step stay inside the domain: no difference is taken across the clamp.
      const radius = fraction * domain;
      // Scaled to the radius, so truncation and roundoff stay balanced across the sweep.
      const step = 1e-6 * Math.max(1, radius);
      const { slope } = profile.evaluate(radius);
      const centralDifference = (profile.sag(radius + step) - profile.sag(radius - step)) / (2 * step);
      expect(Math.abs(centralDifference - slope), `r=${radius}`).toBeLessThan(1e-8 + 1e-6 * Math.abs(slope));

      // The positional functions give the same three numbers, so the same difference holds through them.
      expect(conicPolySag(radius + step, R, asphere)).toBe(profile.sag(radius + step));
      expect(conicPolySag(radius - step, R, asphere)).toBe(profile.sag(radius - step));
      expect(sagSlopeRaw(radius, R, asphere)).toBe(slope);
    }
  });

  it("agrees with a central finite difference at real patent coefficient magnitudes", () => {
    const eps = 1e-5;
    for (const h of [2, 6.5, 12.9]) {
      const numeric =
        (conicPolySag(h + eps, PATENT_R, PATENT_ASPHERE) - conicPolySag(h - eps, PATENT_R, PATENT_ASPHERE)) / (2 * eps);
      const analytic = sagSlopeRaw(h, PATENT_R, PATENT_ASPHERE);
      expect(Math.abs(numeric - analytic) / Math.max(Math.abs(analytic), 1e-12)).toBeLessThan(1e-6);
    }
  });

  it("is exact on a tilted plane, whose sag is linear", () => {
    const plane = createTiltedPlaneProfile({ y: -0.3, z: 2 });
    expectWithin((plane.sag(8) - plane.sag(-8)) / 16, plane.slope(0), 4 * EPS, "plane");
  });
});

describe("spheres and planes keep their expressions", () => {
  const RADII = [50, -50, 42.5, -17.388, 0.5, -1e3, FLAT_R_THRESHOLD, -FLAT_R_THRESHOLD];

  it("evaluates sphere sag and slope exactly as before, inside and beyond |R|", () => {
    for (const R of RADII) {
      const profile = createSphericalProfile(R);
      for (const h of radiiAround(Math.min(Math.abs(R), 1e6))) {
        const before = { sag: sphereSagBefore(h, R), slope: sphereSlopeBefore(h, R) };
        expectSameBits({ sag: sag(h, R), slope: sagSlopeRaw(h, R, undefined) }, before, `positional R=${R} h=${h}`);
        expectSameBits(profile.evaluate(h), before, `profile R=${R} h=${h}`);
        // The conic path's sphere keeps its own clamp: 1e-12, where sag() uses 0.
        expect(conicPolySag(h, R, undefined), `conic path R=${R} h=${h}`).toBe(conicSagBefore(h, R));
      }
    }
  });

  it("keeps the two sphere clamps apart at |R| and beyond it, and equal inside it", () => {
    const R = 10;
    expect(sag(9.99, R)).toBe(conicPolySag(9.99, R, undefined));
    // Beyond |R|: sag() gives c·h², the conic path c·h²/(1 + 1e-6).
    expect(sag(12, R)).toBe((1 / R) * 144);
    expect(conicPolySag(12, R, undefined)).toBe(((1 / R) * 144) / (1 + Math.sqrt(1e-12)));
    expect(sag(12, R)).not.toBe(conicPolySag(12, R, undefined));

    // At |R| the root argument is exactly 0, which neither clamp counts as positive: the hemisphere's sag is |R|
    // through sag(), the conic path floors the root at 1e-6, and the slope is the floored c·h·1e6 on both paths.
    for (const edge of [8, -8]) {
      const sign = Math.sign(edge);
      expect(sag(8, edge)).toBe(edge);
      expect(conicPolySag(8, edge, undefined)).toBe(sign * 7.9999920000080005);
      expect(sagSlopeRaw(8, edge, undefined)).toBe(sign * 1e6);
      expectSameBits(createSphericalProfile(edge).evaluate(8), { sag: edge, slope: sign * 1e6 }, `R=${edge} at |R|`);
    }
  });

  it("returns zero for a flat radius on every positional path", () => {
    for (const h of radiiAround(10)) {
      for (const R of [FLAT_R, -FLAT_R, Infinity]) expect(sag(h, R), `sag(${h}, ${R})`).toBe(0);
      expect(conicPolySag(h, -FLAT_R, undefined)).toBe(0);
      expect(sagSlopeRaw(h, FLAT_R, undefined)).toBe(0);
      expectSameBits(createSphericalProfile(FLAT_R).evaluate(h), { sag: 0, slope: 0 }, `flat sphere h=${h}`);
    }
  });

  it.each([
    { y: 1, z: 1 },
    { y: -0.3, z: 2 },
    { y: 0.6, z: -0.8 },
    { y: 1, z: 0 },
    { y: 0, z: 0 },
    { y: 1e-13, z: 0 },
  ])("builds the tilted plane ($y, $z) exactly as before", (normal) => {
    const plane = createTiltedPlaneProfile(normal);
    const before = tiltedPlaneBefore(normal);
    expect(plane.planeNormal).toEqual(before.planeNormal);
    expect(plane.normalAt([1, 2, 3], 0)).toBe(plane.planeNormal);
    for (const y of [-11, -0, 0, 2.5, 40]) {
      expectSameBits(plane.evaluate(y), { sag: before.sag(y), slope: before.slope() }, `y=${y}`);
      expect(plane.pointAt(7, -3, y)).toEqual(before.pointAt(7, -3, y));
    }
  });

  it("builds a normal from a slope exactly as before", () => {
    const points: Vec3[] = [
      [0, 0, 5],
      [1e-13, 0, 5],
      [3, 4, 1],
      [-6.5, 2.25, 0],
      [0, -11, 2],
      [1e-9, -1e-9, 0],
    ];
    for (const point of points) {
      for (const slope of [0, -0, 0.75, -3.5, 1e6, -1e300, Infinity, NaN]) {
        const radius = Math.hypot(point[0], point[1]);
        expect(normalFromSlope(point[0], point[1], radius, slope), `point ${point} slope ${slope}`).toEqual(
          radialNormalBefore(point, slope),
        );
      }
    }
  });
});

describe("domain radius and slope bound keep their expressions", () => {
  it.each([
    { R: 50, K: 0 },
    { R: -50, K: 0 },
    { R: 30, K: 0.5 },
    { R: -30, K: -0.6 },
    { R: 30, K: -1 },
    { R: 30, K: -2.5 },
    { R: 0.5, K: 3 },
    { R: FLAT_R_THRESHOLD, K: 0 },
    { R: FLAT_R, K: 0.3 },
  ])("gives the domain radius of R=$R, K=$K as before", ({ R, K }) => {
    const before = domainRadiusBefore(R, K);
    expect(conicFiniteRadiusLimit(R, K)).toBe(before);
    expect(createAsphericProfile(R, { ...zeroCoefficients(), K }).finiteRadiusLimit()).toBe(before);
    expect(createAsphericProfile(R, Object.freeze({ ...zeroCoefficients(), K })).finiteRadiusLimit()).toBe(before);
  });

  it("gives a sphere |R| and a plane no limit", () => {
    expect(createSphericalProfile(-17.388).finiteRadiusLimit()).toBe(17.388);
    expect(createFlatProfile().finiteRadiusLimit()).toBeNull();
    expect(createTiltedPlaneProfile({ y: 1, z: 1 }).finiteRadiusLimit()).toBeNull();
  });

  it.each([
    { name: "conic, even and odd", R: 20, asphere: { ...zeroCoefficients(), K: -0.5, A3: 2e-4, A4: -1e-5, A6: 1e-8 } },
    { name: "concave", R: -20, asphere: { ...zeroCoefficients(), K: -0.5, A3: -2e-4, A4: -1e-5, A6: 1e-8 } },
    { name: "K > 0", R: 30, asphere: combinedCoefficients(0.5) },
    { name: "flat base", R: FLAT_R, asphere: combinedCoefficients(0) },
    { name: "patent", R: PATENT_R, asphere: PATENT_ASPHERE },
    { name: "all zero", R: 5, asphere: zeroCoefficients() },
  ])("bounds the slope of $name by the same expression as before", ({ R, asphere }) => {
    const domain = conicFiniteRadiusLimit(R, asphere.K) ?? 12;
    const radii = [...radiiAround(domain), domain * (1 - 1e-13), 1, 5, 10, -1, -Infinity];
    for (const coefficients of [asphere, Object.freeze({ ...asphere })]) {
      const profile = createAsphericProfile(R, coefficients);
      for (const radius of radii) {
        expect(profile.maxAbsSlope!(radius), `r=${radius}`).toBe(slopeBoundBefore(R, asphere, radius));
      }
    }
  });

  it.each([
    { name: "patent", R: PATENT_R, asphere: PATENT_ASPHERE, steps: 1290, beyondDomain: 60 },
    {
      name: "convex conic, even and odd",
      R: 20,
      asphere: { K: -0.5, A3: 0.0002, A4: -0.00001, A6: 1e-8, A8: 0, A10: 0, A12: 0, A14: 0 },
      steps: 1000,
      beyondDomain: 30,
    },
    {
      name: "concave conic, even and odd",
      R: -20,
      asphere: { K: -0.5, A3: -0.0002, A4: -0.00001, A6: 1e-8, A8: 0, A10: 0, A12: 0, A14: 0 },
      steps: 1000,
      beyondDomain: 30,
    },
  ])("bounds the slope throughout a real radial interval: $name", ({ R, asphere, steps, beyondDomain }) => {
    const profile = createSurfaceProfile({ R }, asphere);
    // The bound at the interval's outer radius holds at every radius inside it, 0.01 mm apart.
    const bound = profile.maxAbsSlope!(steps / 100);
    for (let step = 0; step <= steps; step++) {
      expect(Math.abs(profile.slope(step / 100))).toBeLessThanOrEqual(bound);
    }
    // Past the conic domain there is no bound to give.
    expect(profile.maxAbsSlope!(beyondDomain)).toBe(Infinity);
  });
});

describe("profile data for closed-form solves", () => {
  it("exposes curvature, conic, polynomial presence and plane normal on every kind", () => {
    const describeProfile = ({ curvature, conic, hasPolynomial, planeNormal }: SurfaceProfile) => ({
      curvature,
      conic,
      hasPolynomial,
      planeNormal,
    });
    expect(describeProfile(createFlatProfile())).toEqual({
      curvature: 0,
      conic: 0,
      hasPolynomial: false,
      planeNormal: null,
    });
    expect(describeProfile(createSphericalProfile(-40))).toEqual({
      curvature: 1 / -40,
      conic: 0,
      hasPolynomial: false,
      planeNormal: null,
    });
    expect(describeProfile(createAsphericProfile(40, { ...zeroCoefficients(), K: -0.85 }))).toEqual({
      curvature: 1 / 40,
      conic: -0.85,
      hasPolynomial: false,
      planeNormal: null,
    });
    expect(describeProfile(createAsphericProfile(FLAT_R, { ...zeroCoefficients(), K: 2, A9: 1e-12 }))).toEqual({
      curvature: 0,
      conic: 2,
      hasPolynomial: true,
      planeNormal: null,
    });
    const plane = createTiltedPlaneProfile({ y: 3, z: 4 });
    expect(describeProfile(plane)).toEqual({
      curvature: 0,
      conic: 0,
      hasPolynomial: false,
      planeNormal: [0, 0.6, 0.8],
    });
  });

  it("survives a spread copy, which is how a caller wraps a profile", () => {
    const profile = createAsphericProfile(40, Object.freeze({ ...zeroCoefficients(), K: -0.85, A4: 1e-6 }));
    const copy = { ...profile };
    expect(copy.conic).toBe(-0.85);
    expect(copy.hasPolynomial).toBe(true);
    expectSameBits(copy.evaluate(6), profile.evaluate(6), "copy");
  });

  it("holds the copied data on a spread copy while its evaluators follow a mutable object", () => {
    const mutable = { ...zeroCoefficients(), K: -0.5 };
    const live = createAsphericProfile(40, mutable);
    const copy = { ...live };
    mutable.A4 = 1e-3;
    mutable.K = 2;
    // The factory's profile reads through.
    expect(live.conic).toBe(2);
    expect(live.hasPolynomial).toBe(true);
    // The copy keeps the data it was made with, and evaluates the edited surface like the original.
    expect(copy.conic).toBe(-0.5);
    expect(copy.hasPolynomial).toBe(false);
    expect(copy.curvature).toBe(1 / 40);
    expectSameBits(copy.evaluate(5), live.evaluate(5), "copy after the edit");
    expectSameBits(copy.evaluate(5), documentedSagSlope(5, 40, mutable), "edited surface");
  });
});

describe("coefficient objects", () => {
  /** Coefficients whose A4 counts its own reads; `Object.freeze` leaves the accessor in place. */
  function countingCoefficients() {
    const reads = { A4: 0 };
    const coefficients = {
      ...zeroCoefficients(),
      K: -0.5,
      get A4() {
        reads.A4++;
        return 1e-5;
      },
    };
    return { coefficients, reads };
  }

  it("compiles a frozen object once, across the positional functions and its profile", () => {
    const { coefficients, reads } = countingCoefficients();
    const frozen = Object.freeze(coefficients);
    const first = conicPolySag(3, 40, frozen);
    const compiled = reads.A4;
    expect(compiled).toBeGreaterThan(0);
    expect(sagSlopeRaw(3, 40, frozen)).toBe(
      documentedSagSlope(3, 40, { ...zeroCoefficients(), K: -0.5, A4: 1e-5 }).slope,
    );
    expect(conicPolySag(3, 40, frozen)).toBe(first);
    expect(reads.A4).toBe(compiled);

    // The profile reads the coefficient once more, for its slope bound, and never again.
    const profile = createAsphericProfile(40, frozen);
    const built = reads.A4;
    expect(profile.sag(3)).toBe(first);
    profile.evaluate(5);
    profile.maxAbsSlope!(5);
    expect(profile.hasPolynomial).toBe(true);
    expect(reads.A4).toBe(built);
  });

  it("re-reads a mutable object on every call", () => {
    const { coefficients, reads } = countingCoefficients();
    conicPolySag(3, 40, coefficients);
    const afterOne = reads.A4;
    conicPolySag(3, 40, coefficients);
    expect(reads.A4).toBeGreaterThan(afterOne);

    const mutable = { ...zeroCoefficients() };
    const profile = createAsphericProfile(FLAT_R, mutable);
    expectSameBits(profile.evaluate(2), { sag: 0, slope: 0 }, "before");
    expect(conicPolySag(2, FLAT_R, mutable)).toBe(0);
    expect(sagSlopeRaw(2, FLAT_R, mutable)).toBe(0);
    expect(profile.hasPolynomial).toBe(false);
    expect(profile.maxAbsSlope!(2)).toBe(1e-12);

    mutable.A4 = 1;
    mutable.K = -3;
    expectSameBits(profile.evaluate(2), { sag: 16, slope: 32 }, "after");
    expect(conicPolySag(2, FLAT_R, mutable)).toBe(16);
    expect(sagSlopeRaw(2, FLAT_R, mutable)).toBe(32);
    expect(profile.hasPolynomial).toBe(true);
    expect(profile.conic).toBe(-3);
    expect(profile.maxAbsSlope!(2)).toBe(slopeBoundBefore(FLAT_R, mutable, 2));

    // On a curved base through the dispatching factory, the slope bound follows an edit as well.
    const curved = { K: 0, A4: 0.00001, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
    const curvedProfile = createSurfaceProfile({ R: 50 }, curved);
    const before = curvedProfile.maxAbsSlope!(5);
    curved.A4 = 0.01;
    expect(curvedProfile.maxAbsSlope!(5)).toBeGreaterThan(before);
  });

  it("keeps one profile per frozen object, that of the last radius, and builds a fresh one for a mutable object", () => {
    const mutable = combinedCoefficients(-0.6);
    expect(createAsphericProfile(30, mutable)).not.toBe(createAsphericProfile(30, mutable));

    const frozen = Object.freeze({ ...mutable });
    const profile = createAsphericProfile(30, frozen);
    expect(createAsphericProfile(30, frozen)).toBe(profile);
    expect(createSurfaceProfile({ R: 30 }, frozen)).toBe(profile);

    // Another base radius is another surface: its own profile, which takes the object's one cache entry.
    const other = createAsphericProfile(-30, frozen);
    expect(other).not.toBe(profile);
    expect(createAsphericProfile(-30, frozen)).toBe(other);
    expect(other.curvature).toBe(1 / -30);
    expectSameBits(other.evaluate(7), documentedSagSlope(7, -30, frozen), "other radius");

    // The first radius is rebuilt, not found: a new object with the same values, and the old one still works.
    const rebuilt = createAsphericProfile(30, frozen);
    expect(rebuilt).not.toBe(profile);
    expect(createSurfaceProfile({ R: 30 }, frozen)).toBe(rebuilt);
    expectSameBits(rebuilt.evaluate(7), profile.evaluate(7), "first radius again");
    expectSameBits(profile.evaluate(7), documentedSagSlope(7, 30, frozen), "replaced profile");
    expect(createSurfaceProfile({ R: -30 }, frozen)).not.toBe(createSurfaceProfile({ R: 30 }, frozen));
  });
});
