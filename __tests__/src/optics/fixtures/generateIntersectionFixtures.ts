/**
 * High-precision intersection fixtures — reference roots of a ray against sphere, conic and asphere
 * sag surfaces, computed to 80 decimals and written to intersectionFixtures.json with 60.
 *
 * Each root is the exact answer for the float64 inputs both intersection solvers receive: the
 * float64 radius (curvature 0 beyond the engine's flat threshold), coefficients, vertex and ray
 * origin, and the direction as float64 normalization leaves it, every one taken as the exact
 * rational its bits spell. Nothing here imports the engine, so the values stand outside it.
 * `__tests__/src/optics/intersectionFixtures.test.ts` holds both solvers to them and fails when
 * the committed file is stale.
 *
 * Regenerate after editing the case table. The import hook maps the `.js` specifiers onto the
 * TypeScript sources, as Vitest does when the test imports this file:
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs \
 *     __tests__/src/optics/fixtures/generateIntersectionFixtures.ts
 */

import { realpathSync, writeFileSync } from "node:fs";
import { argv } from "node:process";
import { fileURLToPath } from "node:url";
import type { AsphericCoefficients } from "../../../../src/types/optics.js";
import { createFixedPoint, type FixedPoint } from "./fixedPoint.js";

/** Decimals carried while computing a root. */
export const WORKING_DIGITS = 80;
/**
 * Decimals written to the fixture file: at least 50 significant digits for any value above 1e-10.
 * The 20 decimals dropped absorb the working error, which a steep rim multiplies by |f''| near 1e8.
 */
export const EMITTED_DECIMALS = 60;
/** Radius magnitude above which the engine evaluates a base curvature of zero (its `FLAT_R_THRESHOLD`). */
export const FLAT_RADIUS_THRESHOLD = 1e10;
/** Committed fixture file, beside this generator. */
export const INTERSECTION_FIXTURE_PATH = fileURLToPath(new URL("./intersectionFixtures.json", import.meta.url));

/** Samples of the residual scanned for sign changes across the parametric bounds. */
const SCAN_SAMPLES = 256;
/**
 * Smallest |f'(t*)| a fixture root may have. The solvers bound the residual, so a root is located
 * only to tolerance / |f'|; below this the first-order bound the test applies stops being safe.
 */
const MIN_RESIDUAL_SLOPE = 1e-3;

type Vector = [number, number, number];
type FixtureKind = "sphere" | "conic" | "asphere";

/** One real root of the sag residual, in ray order. Decimal strings carry `EMITTED_DECIMALS` decimals. */
export interface IntersectionFixtureRoot {
  /** Distance along the unit direction from the ray origin, mm. */
  t: string;
  /** Hit point, mm. */
  point: [string, string, string];
  /** Radial height of the hit, mm. */
  radius: string;
  /** f'(t) at the root, for f(t) = z_ray(t) - (vertexZ + sag(r(t))). */
  residualSlope: string;
  /** Whether the root lies inside the authored cap, r <= sd; null when the surface has no sd. */
  inCap: boolean | null;
  /**
   * Whether float64 arithmetic cannot bring the residual within the raw 1e-12 mm target at this root:
   * the float64 ray parameters beside it all evaluate beyond the target. A solve that ends here has
   * stalled, and reports the roundoff envelope as its effectiveTolerance.
   */
  roundoffLimited: boolean;
}

/** One ray against one surface: the float64 inputs, and every real root inside the bounds. */
export interface IntersectionFixture {
  id: string;
  /** A conic is an asphere with no polynomial; both build the engine's aspheric profile. */
  kind: FixtureKind;
  covers: string;
  surface: { R: number; asphere: AsphericCoefficients | null; vertexZ: number; sd: number | null };
  ray: { origin: Vector; direction: Vector };
  bounds: { minT: number; maxT: number };
  roots: IntersectionFixtureRoot[];
  expect: {
    /**
     * Index of the root the documented contract selects; "unspecified" when several roots are in
     * bounds and the contract names none; null when the surface has no root in bounds.
     */
    winner: number | "unspecified" | null;
  };
}

/** Shape of intersectionFixtures.json. */
export interface IntersectionFixtureFile {
  generatedBy: string;
  workingDigits: number;
  emittedDecimals: number;
  fixtures: IntersectionFixture[];
}

/* ── Case table ── */

interface FixtureCase {
  id: string;
  kind: FixtureKind;
  covers: string;
  R: number;
  asphere?: AsphericCoefficients;
  vertexZ?: number;
  sd?: number;
  origin: Vector;
  /**
   * Any length; stored as float64 normalization leaves it. When the fixture test reports that
   * Math.hypot does not call the stored vector a unit vector, rescale the components: the rounding
   * changes with them.
   */
  direction: Vector;
  minT?: number;
  maxT: number;
  /** Real roots expected in bounds; a mismatch means the case no longer covers what it says. */
  rootCount: number;
  /** Indices, in ray order, of the roots float64 arithmetic cannot bring within the raw residual target. */
  roundoffLimitedRoots?: readonly number[];
}

const NO_POLYNOMIAL = { A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
/** Voigtlander Nokton 50/1 first surface: a production asphere with six even terms. */
const NOKTON_FRONT = {
  K: -0.02238,
  A4: -1.0281e-6,
  A6: 6.04388e-10,
  A8: -4.31143e-12,
  A10: 5.62572e-15,
  A12: -3.29805e-18,
  A14: -5.97602e-23,
};
/** Its tenth-order term bends the continuation back toward the object outside the cap. */
const DIVING_RIM = { K: 0, ...NO_POLYNOMIAL, A10: -1e-10 };
const FLAT_QUARTIC = { K: 0, ...NO_POLYNOMIAL, A4: 0.125 };
const ODD_ON_CONIC = { K: -0.5, A4: 1e-5, A6: -2e-8, A8: 0, A10: 0, A12: 0, A14: 0, A3: 5e-5, A5: -3e-7 };

const CASES: readonly FixtureCase[] = [
  /* Spheres */
  {
    id: "sphere-axial",
    kind: "sphere",
    covers: "ray along the axis to the vertex, where the radial derivative term vanishes",
    R: 50,
    origin: [0, 0, -5],
    direction: [0, 0, 1],
    maxT: 20,
    rootCount: 1,
  },
  {
    id: "sphere-paraxial",
    kind: "sphere",
    covers: "paraxial skew ray",
    R: 50,
    origin: [1e-5, 1e-4, -5],
    direction: [2e-5, -1e-4, 1],
    maxT: 20,
    rootCount: 1,
  },
  {
    id: "sphere-parallel",
    kind: "sphere",
    covers: "ray parallel to the axis; the sag is 1 / (5 + sqrt(24))",
    R: 5,
    origin: [0, 1, -5],
    direction: [0, 0, 1],
    maxT: 10,
    rootCount: 1,
  },
  {
    id: "sphere-marginal",
    kind: "sphere",
    covers: "converging marginal ray near the clear aperture",
    R: 30,
    sd: 14.5,
    origin: [0, 14.2, -6],
    direction: [0, -0.02, 1],
    maxT: 20,
    rootCount: 1,
  },
  {
    id: "sphere-skew",
    kind: "sphere",
    covers: "skew ray",
    R: 44.452,
    sd: 19.5,
    origin: [1.5, -7.25, -6],
    direction: [0.05, 0.12, 1],
    maxT: 20,
    rootCount: 1,
  },
  {
    id: "sphere-steep-rim",
    kind: "sphere",
    covers: "rim of a strong concave surface; the vertex-plane seed lies beyond |R|",
    R: -17.388,
    vertexZ: 67.46,
    origin: [-2.2042, -14.9501, 57.7633],
    direction: [-0.01696, -0.44528, 0.89523],
    maxT: 22.6,
    rootCount: 1,
  },
  {
    id: "sphere-backward",
    kind: "sphere",
    covers: "backward ray, direction z below zero",
    R: 50,
    origin: [0, 30, 100],
    direction: [0, 0, -1],
    maxT: 200,
    rootCount: 1,
  },
  {
    id: "sphere-far-forward",
    kind: "sphere",
    covers: "forward ray launched 100 mm ahead of the vertex",
    R: 50,
    origin: [0, 30, -100],
    direction: [0, 0, 1],
    maxT: 200,
    rootCount: 1,
  },
  {
    id: "sphere-transverse",
    kind: "sphere",
    covers: "transverse ray, direction z of zero, in bounds that end before its second crossing",
    R: 50,
    origin: [0, 30, 5],
    direction: [0, -1, 0],
    maxT: 30,
    rootCount: 1,
  },
  {
    id: "sphere-two-roots",
    kind: "sphere",
    covers: "chord through the sphere: two roots in bounds on a profile with no cap selection",
    R: 50,
    origin: [0, 30, 5],
    direction: [0, -1, 0],
    maxT: 60,
    rootCount: 2,
  },
  {
    id: "sphere-near-tangent",
    kind: "sphere",
    covers: "near-tangent skew ray meeting the surface about one degree off its tangent plane",
    R: 50,
    origin: [0.2, 3, 0.012],
    direction: [0.05, -1, -0.001],
    maxT: 2.5,
    rootCount: 1,
  },
  {
    id: "sphere-grazing-chord",
    kind: "sphere",
    covers: "grazing ray clipping a 0.58 mm chord, shorter than one step of a 24-sample scan of the bounds",
    R: 50,
    origin: [-0.6, 12, 0.0006],
    direction: [0.05, -1, 0.00002],
    maxT: 20,
    rootCount: 2,
  },
  {
    id: "sphere-far-launch-1e8",
    kind: "sphere",
    covers: "launch 1e8 mm ahead: t is quantized far above the residual target",
    R: 5,
    origin: [0, 1, -1e8],
    direction: [0, 0, 1],
    maxT: 1e8 + 2,
    rootCount: 1,
    roundoffLimitedRoots: [0],
  },
  {
    id: "sphere-far-launch-1e12",
    kind: "sphere",
    covers: "launch 1e12 mm ahead: t is quantized far above the residual target",
    R: 5,
    origin: [0, 1, -1e12],
    direction: [0, 0, 1],
    maxT: 1e12 + 2,
    rootCount: 1,
    roundoffLimitedRoots: [0],
  },
  {
    id: "sphere-hemisphere-rim",
    kind: "sphere",
    covers: "exterior hit at a hemisphere's rim, where the bracket must collapse to adjacent floats",
    R: -36.4652369171381,
    sd: 32.1266972069614,
    origin: [0, 36.90213507972658, -36.573912873864174],
    direction: [0, -0.9558022906274851, 0.2940101719860258],
    maxT: 150,
    rootCount: 2,
    roundoffLimitedRoots: [0],
  },
  {
    id: "sphere-nearly-flat",
    kind: "sphere",
    covers:
      "radius of 1e9 mm: the leading coefficient of the quadratic nearly vanishes and its far root is 2e9 mm away",
    R: 1e9,
    origin: [3, -4, -7],
    direction: [0.2, 0.1, 1],
    maxT: 20,
    rootCount: 1,
  },
  {
    id: "sphere-nearly-flat-backward",
    kind: "sphere",
    covers:
      "backward ray on a radius of 1e6 mm: the quadratic's linear coefficient is positive, and a root formed by subtraction there loses the residual target",
    R: 1e6,
    origin: [3, -4, 7],
    direction: [0.2, 0.1, -1],
    maxT: 20,
    rootCount: 1,
  },
  {
    id: "sphere-short-domain-window",
    kind: "sphere",
    covers: "bounds that start and end outside the domain, with the ray inside it for 2 mm: less than one scan step",
    R: 1.2197,
    origin: [23.004892262080347, -15.156818272318729, -16.882753855318946],
    direction: [-0.7199228794750878, 0.4486349873613213, 0.5295636842945382],
    maxT: 177.078,
    rootCount: 2,
  },

  /* Conics */
  {
    id: "conic-ellipsoid",
    kind: "conic",
    covers: "prolate ellipsoid, skew ray",
    R: 40,
    asphere: { K: -0.5, ...NO_POLYNOMIAL },
    sd: 15,
    origin: [0.3, 8, -5],
    direction: [0.02, -0.03, 1],
    maxT: 20,
    rootCount: 1,
  },
  {
    id: "conic-paraboloid",
    kind: "conic",
    covers: "concave paraboloid off the origin, skew ray",
    R: -25,
    asphere: { K: -1, ...NO_POLYNOMIAL },
    vertexZ: 3,
    sd: 12,
    origin: [2, -6, -4],
    direction: [0.1, 0.05, 1],
    maxT: 20,
    rootCount: 1,
  },
  {
    id: "conic-hyperboloid",
    kind: "conic",
    covers: "hyperboloid, meridional ray",
    R: 30,
    asphere: { K: -2.5, ...NO_POLYNOMIAL },
    sd: 14,
    origin: [0, 9, -3],
    direction: [0, 0.1, 1],
    maxT: 20,
    rootCount: 1,
  },
  {
    id: "conic-oblate",
    kind: "conic",
    covers: "oblate ellipsoid, skew ray",
    R: 60,
    asphere: { K: 0.75, ...NO_POLYNOMIAL },
    sd: 12,
    origin: [-4, 5, -2],
    direction: [0.03, 0.02, 1],
    maxT: 20,
    rootCount: 1,
  },
  {
    id: "conic-steep-rim",
    kind: "conic",
    covers: "oblate ellipsoid near the edge of its domain, sag slope above 2",
    R: 20,
    asphere: { K: 0.75, ...NO_POLYNOMIAL },
    sd: 14.8,
    origin: [0.5, 14.1, -3],
    direction: [-0.01, 0.02, 1],
    maxT: 12,
    rootCount: 1,
  },
  {
    id: "conic-grazing-chord",
    kind: "conic",
    covers: "grazing ray clipping a 0.58 mm chord inside the cap, shorter than one step of a 24-sample scan",
    R: 40,
    asphere: { K: -0.5, ...NO_POLYNOMIAL },
    sd: 15,
    origin: [0.4, 11, 0.0008],
    direction: [-0.03, -1, 0.00003],
    maxT: 18,
    rootCount: 2,
  },
  {
    id: "conic-two-roots-in-cap",
    kind: "conic",
    covers: "chord through a paraboloid: two roots inside the cap, the first one wins",
    R: 10,
    asphere: { K: -1, ...NO_POLYNOMIAL },
    sd: 8,
    origin: [0.4, 9, 2],
    direction: [-0.03, -1, 0.02],
    maxT: 18,
    rootCount: 2,
  },
  {
    id: "conic-exterior-then-cap",
    kind: "conic",
    covers: "first root on the continuation outside the cap, second root inside it",
    R: -10,
    asphere: { K: -1, ...NO_POLYNOMIAL },
    sd: 5,
    origin: [0, 12, -3.45],
    direction: [0, -4.9, 1],
    maxT: 20,
    rootCount: 2,
  },
  {
    id: "conic-paraboloid-axial",
    kind: "conic",
    covers: "paraboloid met parallel to its axis: the quadratic has no second-order term and one root",
    R: 20,
    asphere: { K: -1, ...NO_POLYNOMIAL },
    origin: [0, 3, -5],
    direction: [0, 0, 1],
    maxT: 20,
    rootCount: 1,
  },
  {
    id: "conic-second-sheet-first",
    kind: "conic",
    covers: "ray that crosses the hyperboloid's second sheet, which is no part of the sag, before the sag sheet",
    R: 30,
    asphere: { K: -2.5, ...NO_POLYNOMIAL },
    origin: [0, 0, -200],
    direction: [0, 0.02, 1],
    maxT: 400,
    rootCount: 1,
  },
  {
    id: "conic-asymptote",
    kind: "conic",
    covers: "ray along the hyperboloid's asymptotic cone: the second-order term cancels to rounding",
    R: 30,
    asphere: { K: -2.5, ...NO_POLYNOMIAL },
    origin: [0, 1, -3],
    direction: [0, Math.sqrt(1.5), 1],
    maxT: 200,
    rootCount: 1,
  },
  {
    id: "conic-oblate-rim",
    kind: "conic",
    covers: "oblate ellipsoid at 99% of its domain radius, sag slope near 7",
    R: 20,
    asphere: { K: 3, ...NO_POLYNOMIAL },
    origin: [0, 9.9, -5],
    direction: [0, 0, 1],
    maxT: 20,
    rootCount: 1,
  },

  /* Aspheres */
  {
    id: "asphere-even",
    kind: "asphere",
    covers: "even terms A4 to A14 on a production surface, skew ray",
    R: 40.765,
    asphere: NOKTON_FRONT,
    sd: 27,
    origin: [1, 12, -10],
    direction: [0.02, 0.15, 1],
    maxT: 25,
    rootCount: 1,
  },
  {
    id: "asphere-odd",
    kind: "asphere",
    covers: "odd terms A3 and A5 in the radial height, mixed with even terms on a conic base",
    R: 40,
    asphere: ODD_ON_CONIC,
    sd: 20,
    origin: [0, 0, -10],
    direction: [0.1, 0.05, 1],
    maxT: 25,
    rootCount: 1,
  },
  {
    id: "asphere-odd-axial",
    kind: "asphere",
    covers: "ray along the axis of a surface with odd terms, radial height zero at the root",
    R: 40,
    asphere: ODD_ON_CONIC,
    sd: 20,
    origin: [0, 0, -10],
    direction: [0, 0, 1],
    maxT: 25,
    rootCount: 1,
  },
  {
    id: "asphere-steep-high-order",
    kind: "asphere",
    covers: "steep rim, sag slope 1.4, with even terms up to A20 and odd A7",
    R: 12,
    asphere: {
      K: -0.8,
      A4: 2.5e-4,
      A6: -1.2e-6,
      A8: 4e-9,
      A10: -6e-12,
      A12: 0,
      A14: 0,
      A16: 3e-18,
      A20: -1e-24,
      A7: 2e-8,
    },
    sd: 10,
    origin: [-0.8, 9.6, -2],
    direction: [0.03, -0.04, 1],
    maxT: 12,
    rootCount: 1,
  },
  {
    id: "asphere-flat-quartic-cap-edge",
    kind: "asphere",
    covers: "flat base, z = r^4 / 8: steep root exactly on the cap boundary r = sd",
    R: 1e15,
    asphere: FLAT_QUARTIC,
    sd: 2,
    origin: [0, 1, 1],
    direction: [0, 1, 1],
    maxT: 3,
    rootCount: 1,
  },
  {
    id: "asphere-flat-far-vertex",
    kind: "asphere",
    covers: "flat base 1e12 mm from the origin of coordinates; the root t = 0.125 is representable",
    R: 1e15,
    asphere: FLAT_QUARTIC,
    vertexZ: 1e12,
    origin: [0, 1, 1e12],
    direction: [0, 0, 1],
    maxT: 0.26,
    rootCount: 1,
  },
  {
    id: "asphere-flat-steep-stall",
    kind: "asphere",
    covers: "z = 1e4 r^4: adjacent floats straddle the root and the bracket midpoint cannot advance",
    R: 1e15,
    asphere: { K: 0, ...NO_POLYNOMIAL, A4: 10000 },
    origin: [1.1, 0, 10000.000000000002],
    direction: [-1, 0, 0],
    maxT: 0.2,
    rootCount: 1,
    roundoffLimitedRoots: [0],
  },
  {
    id: "asphere-flat-transverse-cancellation",
    kind: "asphere",
    covers: "z = 100 r^4 reached from 1e8 mm to the side: transverse cancellation under a steep slope",
    R: 1e15,
    asphere: { K: 0, ...NO_POLYNOMIAL, A4: 100 },
    origin: [1e8, 0, 101],
    direction: [-1, 0, 0],
    minT: 1e8 - 2,
    maxT: 1e8,
    rootCount: 1,
    roundoffLimitedRoots: [0],
  },
  {
    id: "asphere-two-roots-in-cap",
    kind: "asphere",
    covers: "chord through a quartic bowl: two roots inside the cap, the first one wins",
    R: 1e15,
    asphere: FLAT_QUARTIC,
    sd: 2,
    origin: [0.3, 2.5, 0.5],
    direction: [-0.1, -1, 0.05],
    maxT: 5,
    rootCount: 2,
  },
  {
    id: "asphere-grazing-chord",
    kind: "asphere",
    covers:
      "the ray of conic-grazing-chord on the same conic with a small quartic term: a 0.58 mm chord that only the bracket scan can find, between two of its 24 samples",
    R: 40,
    asphere: { K: -0.5, ...NO_POLYNOMIAL, A4: 1e-9 },
    sd: 15,
    origin: [0.4, 11, 0.0008],
    direction: [-0.03, -1, 0.00003],
    maxT: 18,
    rootCount: 2,
  },
  {
    id: "asphere-exterior-then-cap",
    kind: "asphere",
    covers: "steep ray crossing the diverging polynomial continuation before it reaches the cap",
    R: 30,
    asphere: DIVING_RIM,
    sd: 10,
    origin: [0, 16, -12],
    direction: [0, -0.6, 0.8],
    maxT: 20,
    rootCount: 2,
  },
  {
    id: "asphere-exterior-only",
    kind: "asphere",
    covers: "the same ray stopped before the cap: its only root is exterior and is kept",
    R: 30,
    asphere: DIVING_RIM,
    sd: 10,
    origin: [0, 16, -12],
    direction: [0, -0.6, 0.8],
    maxT: 9,
    rootCount: 1,
  },
  {
    id: "asphere-no-root",
    kind: "asphere",
    covers: "captured exterior ray that starts beyond the conic domain and meets no root in bounds",
    R: 40.765,
    asphere: NOKTON_FRONT,
    sd: 27,
    origin: [-4.3626017234355216e-15, -43.94943189209652, -10.312310421674399],
    direction: [0, 0.36739419447650656, 0.9300653234396813],
    maxT: 22.175454049907273,
    rootCount: 0,
  },
];

/* ── Exact residual ── */

interface Sample {
  t: bigint;
  point: [bigint, bigint, bigint];
  radius: bigint;
  value: bigint;
  derivative: bigint;
}

type Residual = (t: bigint) => Sample | null;

/**
 * Build f(t) = z_ray(t) - (vertexZ + sag(r(t))) and f'(t) for one fixture's ray and surface.
 *
 * sag(h) = c h^2 / (1 + sqrt(1 - (1 + K) c^2 h^2)) + sum A_n h^n with c = 1 / R, and c = 0 beyond the
 * flat threshold; odd terms are in the radial height h >= 0. The base term is evaluated through
 * h / R so the float64 radius divides exactly.
 *
 * @param F - fixed-point arithmetic
 * @param fixture - the float64 surface and ray
 * @returns evaluator along the ray; null where the conic is not real (on or beyond its domain edge)
 */
function residualAlong(F: FixedPoint, { surface, ray }: Pick<IntersectionFixture, "surface" | "ray">): Residual {
  const origin = ray.origin.map(F.of);
  const direction = ray.direction.map(F.of);
  const vertexZ = F.of(surface.vertexZ);
  const flat = Math.abs(surface.R) > FLAT_RADIUS_THRESHOLD;
  const onePlusK = F.one + F.of(surface.asphere?.K ?? 0);
  // A<n> multiplies h^n; K is the only key that is not a polynomial term.
  const terms = Object.entries(surface.asphere ?? {})
    .filter(([key, coefficient]) => key !== "K" && coefficient !== 0)
    .map(([key, coefficient]) => ({ power: Number(key.slice(1)), coefficient }));

  return (t) => {
    const x = origin[0] + F.times(t, ray.direction[0]);
    const y = origin[1] + F.times(t, ray.direction[1]);
    const z = origin[2] + F.times(t, ray.direction[2]);
    const radius = F.sqrt(F.mul(x, x) + F.mul(y, y));
    let sag = 0n;
    let slope = 0n;
    if (!flat) {
      const ratio = F.over(radius, surface.R);
      const q = F.one - F.mul(onePlusK, F.mul(ratio, ratio));
      if (q <= 0n) return null;
      const root = F.sqrt(q);
      sag = F.div(F.mul(radius, ratio), F.one + root);
      slope = F.div(ratio, root);
    }
    for (const { power, coefficient } of terms) {
      let lowerPower = F.one;
      for (let i = 1; i < power; i++) lowerPower = F.mul(lowerPower, radius);
      sag += F.times(F.mul(lowerPower, radius), coefficient);
      slope += F.times(lowerPower, coefficient) * BigInt(power);
    }
    // dr/dt; on the axis the radial direction is undefined and the sag slope is zero.
    const radial = radius === 0n ? 0n : F.div(F.mul(x, direction[0]) + F.mul(y, direction[1]), radius);
    return { t, point: [x, y, z], radius, value: z - vertexZ - sag, derivative: direction[2] - F.mul(slope, radial) };
  };
}

/* ── Roots ── */

/**
 * Surface point nearest the domain edge between a parameter off the surface and one on it.
 *
 * @param residual - evaluator along the ray
 * @param outsideT - parameter where the conic is not real
 * @param inside - sample on the surface
 * @returns the sample adjacent to the edge
 */
function domainEdge(residual: Residual, outsideT: bigint, inside: Sample): Sample {
  let edge = inside;
  while ((outsideT > edge.t ? outsideT - edge.t : edge.t - outsideT) > 1n) {
    const middle = residual((outsideT + edge.t) / 2n);
    if (middle === null) outsideT = (outsideT + edge.t) / 2n;
    else edge = middle;
  }
  return edge;
}

/**
 * Converge on the root inside a sign-changing bracket: Newton steps, bisecting when one leaves it.
 *
 * @param F - fixed-point arithmetic
 * @param residual - evaluator along the ray
 * @param lower - sample at the bracket's lower parameter
 * @param upper - sample at its upper parameter
 * @returns the sample at the root
 */
function refine(F: FixedPoint, residual: Residual, lower: Sample, upper: Sample): Sample {
  let lo = lower.t;
  let hi = upper.t;
  let current = lower;
  let next = (lo + hi) / 2n;
  // The domain is one interval along a straight ray, so every point of the bracket is on the surface.
  while (hi - lo > 1n) {
    current = residual(next)!;
    if (current.value < 0n === lower.value < 0n) lo = current.t;
    else hi = current.t;
    const step = current.derivative === 0n ? null : F.div(current.value, current.derivative);
    // A Newton correction below one unit: the root is located to the working precision.
    if (step === 0n) break;
    const newton = step === null ? lo : current.t - step;
    next = newton > lo && newton < hi ? newton : (lo + hi) / 2n;
  }
  return current;
}

/**
 * Every real root of the residual in bounds, in ray order.
 *
 * Roots are bracketed by a uniform scan, joined by the surface point at each domain edge so a root
 * in the sliver beside the edge still brackets, then refined and certified: the residual changes
 * sign across t +/- 1e-(EMITTED_DECIMALS + 2), which fixes every emitted digit.
 *
 * @param F - fixed-point arithmetic
 * @param residual - evaluator along the ray
 * @param minT - lower parametric bound
 * @param maxT - upper parametric bound
 * @returns root samples in increasing t
 */
function findRoots(F: FixedPoint, residual: Residual, minT: number, maxT: number): Sample[] {
  const start = F.of(minT);
  const span = F.of(maxT) - start;
  const roots: Sample[] = [];
  let previous: Sample | null = null;
  const visit = (sample: Sample): void => {
    if (sample.value === 0n) roots.push(sample);
    else if (previous !== null && previous.value < 0n !== sample.value < 0n) {
      roots.push(refine(F, residual, previous, sample));
    }
    // A sample that is itself a root must not also bracket one with its neighbour.
    previous = sample.value === 0n ? null : sample;
  };
  let lastT = start;
  let last: Sample | null = null;
  for (let i = 0; i <= SCAN_SAMPLES; i++) {
    const t = start + (span * BigInt(i)) / BigInt(SCAN_SAMPLES);
    const sample = residual(t);
    if (i > 0 && sample !== null && last === null) visit(domainEdge(residual, lastT, sample));
    if (sample !== null) visit(sample);
    else {
      if (last !== null) visit(domainEdge(residual, t, last));
      previous = null;
    }
    lastT = t;
    last = sample;
  }

  const margin = 10n ** BigInt(F.digits - EMITTED_DECIMALS - 2);
  for (const root of roots) {
    const below = residual(root.t - margin);
    const above = residual(root.t + margin);
    if (below === null || above === null || below.value < 0n === above.value < 0n) {
      throw new Error(`root near t = ${F.toDecimal(root.t, 20)} is not certified by a sign change`);
    }
  }
  return roots;
}

/**
 * Closed-form roots of a ray against a sphere or conic, as an independent check on the scan.
 *
 * With z measured from the vertex the surface is the sag branch of h^2 + (1 + K) z^2 - 2 R z = 0,
 * a quadratic A t^2 + 2 B t + C = 0 along the ray. The branch is the one with
 * 1 - (1 + K) z / R > 0, which is the square root in the sag formula.
 *
 * @param F - fixed-point arithmetic
 * @param fixture - the float64 surface, ray and bounds
 * @returns root parameters in bounds, in increasing t
 */
function quadricRoots(
  F: FixedPoint,
  { surface, ray, bounds }: Pick<IntersectionFixture, "surface" | "ray" | "bounds">,
): bigint[] {
  const [ox, oy] = ray.origin.map(F.of);
  const oz = F.of(ray.origin[2]) - F.of(surface.vertexZ);
  const [dx, dy, dz] = ray.direction.map(F.of);
  const onePlusK = F.one + F.of(surface.asphere?.K ?? 0);
  const a = F.mul(dx, dx) + F.mul(dy, dy) + F.mul(onePlusK, F.mul(dz, dz));
  const b = F.mul(ox, dx) + F.mul(oy, dy) + F.mul(onePlusK, F.mul(oz, dz)) - F.times(dz, surface.R);
  const c = F.mul(ox, ox) + F.mul(oy, oy) + F.mul(onePlusK, F.mul(oz, oz)) - 2n * F.times(oz, surface.R);
  const discriminant = F.mul(b, b) - F.mul(a, c);
  if (discriminant < 0n) return [];
  // q = -(b + sign(b) sqrt(disc)) gives t = q / a and t = c / q without cancellation, and keeps the
  // finite root when a = 0 (a paraboloid met by an axial ray).
  const q = b < 0n ? F.sqrt(discriminant) - b : -(b + F.sqrt(discriminant));
  const candidates = [...(a === 0n ? [] : [F.div(q, a)]), ...(q === 0n ? [] : [F.div(c, q)])];
  return candidates
    .filter((t) => t >= F.of(bounds.minT) && t <= F.of(bounds.maxT))
    .filter((t) => F.one - F.over(F.mul(onePlusK, oz + F.mul(dz, t)), surface.R) > 0n)
    .sort((left, right) => (left < right ? -1 : left > right ? 1 : 0));
}

/* ── Fixtures ── */

/**
 * Root the documented contract selects (agent_docs/architecture/optics-engine.md, Exact Surface
 * Trace): on an aspheric profile with an authored cap the first root with r <= sd in ray order,
 * and otherwise the only root. Several roots with no cap root among them have no named winner.
 *
 * @param fixture - kind, cap and roots of one fixture
 * @returns winning root index, "unspecified", or null with no root
 */
function contractWinner({ kind, roots }: Pick<IntersectionFixture, "kind" | "roots">): number | "unspecified" | null {
  if (roots.length === 0) return null;
  // A spherical profile gets no cap selection, whatever its sd.
  const firstInCap = kind === "sphere" ? -1 : roots.findIndex((root) => root.inCap === true);
  if (firstInCap >= 0) return firstInCap;
  return roots.length === 1 ? 0 : "unspecified";
}

function buildFixture(F: FixedPoint, entry: FixtureCase): IntersectionFixture {
  // Multiplication, addition, division and square root are correctly rounded IEEE 754 operations, so
  // the stored direction has the same bits on every machine. The language leaves Math.hypot to the
  // JavaScript runtime as an approximation; the fixture test checks that it calls each stored
  // direction a unit vector, which is what makes the solvers' own normalization leave it as stored.
  const [dx, dy, dz] = entry.direction;
  const length = Math.sqrt(dx * dx + dy * dy + dz * dz);
  const direction = entry.direction.map((component) => component / length) as Vector;

  const fixture: Omit<IntersectionFixture, "roots" | "expect"> = {
    id: entry.id,
    kind: entry.kind,
    covers: entry.covers,
    surface: { R: entry.R, asphere: entry.asphere ?? null, vertexZ: entry.vertexZ ?? 0, sd: entry.sd ?? null },
    ray: { origin: entry.origin, direction },
    bounds: { minT: entry.minT ?? 0, maxT: entry.maxT },
  };
  const decimal = (value: bigint): string => F.toDecimal(value, EMITTED_DECIMALS);
  const samples = findRoots(F, residualAlong(F, fixture), fixture.bounds.minT, fixture.bounds.maxT);
  const roundoffLimitedRoots = entry.roundoffLimitedRoots ?? [];
  if (roundoffLimitedRoots.some((index) => index >= entry.rootCount)) {
    throw new Error(`${entry.id}: a root declared roundoff-limited is not among the ${entry.rootCount} declared`);
  }
  const roots = samples.map((sample, index): IntersectionFixtureRoot => {
    const slope = sample.derivative < 0n ? -sample.derivative : sample.derivative;
    if (slope < F.of(MIN_RESIDUAL_SLOPE)) throw new Error(`${entry.id}: |f'| is below ${MIN_RESIDUAL_SLOPE} at a root`);
    return {
      t: decimal(sample.t),
      point: [decimal(sample.point[0]), decimal(sample.point[1]), decimal(sample.point[2])],
      radius: decimal(sample.radius),
      residualSlope: decimal(sample.derivative),
      // Decided on the emitted radius, so a root on the boundary does not turn on the last working digit.
      inCap: entry.sd === undefined ? null : F.round(sample.radius, EMITTED_DECIMALS) <= F.of(entry.sd),
      roundoffLimited: roundoffLimitedRoots.includes(index),
    };
  });
  if (roots.length !== entry.rootCount) {
    throw new Error(`${entry.id}: found ${roots.length} roots in bounds, the case declares ${entry.rootCount}`);
  }
  const built = { ...fixture, roots };
  if (entry.kind !== "asphere") {
    const closedForm = quadricRoots(F, built);
    const tolerance = 10n ** BigInt(F.digits - EMITTED_DECIMALS);
    const agrees =
      closedForm.length === samples.length &&
      closedForm.every((t, i) => (t > samples[i].t ? t - samples[i].t : samples[i].t - t) <= tolerance);
    if (!agrees) throw new Error(`${entry.id}: the closed-form roots disagree with the refined ones`);
  }
  return { ...built, expect: { winner: contractWinner(built) } };
}

/**
 * Compute every fixture.
 *
 * @param digits - decimals carried; the emitted decimals do not depend on it
 * @returns fixtures in case-table order
 */
export function buildIntersectionFixtures(digits = WORKING_DIGITS): IntersectionFixture[] {
  const F = createFixedPoint(digits);
  return CASES.map((entry) => buildFixture(F, entry));
}

/**
 * Render the fixture file exactly as committed.
 *
 * @returns JSON text of intersectionFixtures.json
 */
export function renderIntersectionFixtures(): string {
  const file: IntersectionFixtureFile = {
    generatedBy: "__tests__/src/optics/fixtures/generateIntersectionFixtures.ts",
    workingDigits: WORKING_DIGITS,
    emittedDecimals: EMITTED_DECIMALS,
    fixtures: buildIntersectionFixtures(),
  };
  return `${JSON.stringify(file, null, 2)}\n`;
}

/* ── Entry point ── */

// Node loads the entry file from its real path and leaves argv[1] as typed, so the two are compared as real
// paths: started through a symlink this still writes, and an entry path that cannot be resolved throws.
if (argv.length > 1 && realpathSync(argv[1]) === realpathSync(fileURLToPath(import.meta.url))) {
  writeFileSync(INTERSECTION_FIXTURE_PATH, renderIntersectionFixtures());
}
