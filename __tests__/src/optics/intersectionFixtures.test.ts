import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { FLAT_R_THRESHOLD, createSurfaceProfile } from "../../../src/optics/geometry/surfaceProfile.js";
import { intersectSagSurface } from "../../../src/optics/internal/surfaceIntersection.js";
import { intersectSurfaceProfile, type SurfaceIntersectionSuccess } from "../../../src/optics/math/intersection.js";
import { sagResidualRoundoff } from "../../../src/optics/math/intersectionTolerance.js";
import type { SurfaceProfile } from "../../../src/optics/types.js";
import {
  FLAT_RADIUS_THRESHOLD,
  INTERSECTION_FIXTURE_PATH,
  WORKING_DIGITS,
  buildIntersectionFixtures,
  renderIntersectionFixtures,
  type IntersectionFixture,
  type IntersectionFixtureFile,
  type IntersectionFixtureRoot,
} from "./fixtures/generateIntersectionFixtures.js";

/**
 * Both intersection solvers against roots computed outside the engine to 60 decimals
 * (fixtures/generateIntersectionFixtures.ts), held to the documented contract (architecture/optics-engine.md, Exact
 * Surface Trace). The legacy arm goes when internal/surfaceIntersection.ts is deleted.
 */

const committedText = readFileSync(INTERSECTION_FIXTURE_PATH, "utf-8");
const { fixtures } = JSON.parse(committedText) as IntersectionFixtureFile;

/**
 * The contract's raw residual target, mm. It and the roundoff envelope below are stated in this file, not imported:
 * a bound read from the engine follows the engine, so a loosened one would pass.
 */
const RESIDUAL_TARGET = 1e-12;

const SOLVERS = ["production", "legacy"] as const;
type Solver = (typeof SOLVERS)[number];

interface ExpectedFinding {
  fixture: string;
  solver: Solver;
  /** What fails, in the words `contractViolations` reports. */
  violations: string[];
  /** The solver's answer as measured, so a failure that changes is noticed as well as one that is fixed. */
  measured: Record<string, unknown>;
}

/**
 * Fixtures today's solvers do not meet the contract on. Each entry is asserted to fail exactly as listed, so it has
 * to be deleted in the change that fixes it. An entry is a finding to fix in the engine, never a reason to drop or
 * loosen the fixture.
 */
const EXPECTED_FINDINGS: readonly ExpectedFinding[] = [
  // Both roots of the 0.58 mm chord fall between two samples of the 24-sample bracket scan (0.83 mm apart on these
  // bounds), and the bounds' endpoints share a sign, so neither solver sees a sign change.
  // Tracked as https://github.com/ronbuening/LensVisualizer/issues/779.
  {
    fixture: "sphere-grazing-chord",
    solver: "production",
    violations: ["no hit: noBracket"],
    measured: { ok: false, failureReason: "noBracket", residual: -0.00038026840608391954, iterations: 24 },
  },
  {
    fixture: "sphere-grazing-chord",
    solver: "legacy",
    violations: ["no hit: noBracket"],
    measured: { ok: false, failureReason: "noBracket", residual: -0.00038026840608391954, iterations: 24 },
  },
];

function solve(solver: Solver, { surface, ray, bounds }: IntersectionFixture, profile: SurfaceProfile) {
  const sd = surface.sd ?? undefined;
  const asphere = surface.asphere ?? undefined;
  // The stored direction is the float64-normalized one. Production skips normalizing, as the trace does; the legacy
  // solver always normalizes, and divides this direction by exactly 1.
  return solver === "production"
    ? intersectSurfaceProfile(ray, profile, surface.vertexZ, { ...bounds, directionNormalized: true, clearRadius: sd })
    : intersectSagSurface(
        ray,
        0,
        surface.vertexZ,
        { S: [{ R: surface.R, sd }], asphByIdx: asphere ? { 0: asphere } : {} },
        bounds,
      );
}

type Hit = Pick<SurfaceIntersectionSuccess, "t" | "point" | "radius" | "residual" | "effectiveTolerance">;

/** The slope bound both solvers give the roundoff envelope: the sum of absolute terms on an asphere. */
function slopeBound(profile: SurfaceProfile, radius: number): number {
  return profile.kind === "aspheric" ? profile.maxAbsSlope!(radius) : Math.abs(profile.slope(radius));
}

/**
 * The contract's operand roundoff envelope at a hit, written out: 16 EPSILON times the sum of the absolute operands
 * of the residual, the transverse ones weighted by the slope bound, and never below 16 EPSILON.
 */
function operandEnvelope({ surface, ray }: IntersectionFixture, profile: SurfaceProfile, hit: Hit): number {
  const slope = slopeBound(profile, hit.radius);
  const [originX, originY, originZ] = ray.origin.map(Math.abs);
  const [travelX, travelY, travelZ] = ray.direction.map((component) => Math.abs(component * hit.t));
  const operandSum =
    originZ +
    travelZ +
    Math.abs(surface.vertexZ) +
    Math.max(Math.abs(profile.sag(hit.radius)), hit.radius * slope) +
    slope * (originX + travelX + originY + travelY);
  return 16 * Number.EPSILON * Math.max(1, operandSum);
}

/** The envelope the engine computes for the same hit: what a floor-assisted hit has to report. */
function engineEnvelope({ surface, ray }: IntersectionFixture, profile: SurfaceProfile, hit: Hit): number {
  return sagResidualRoundoff(
    ray.origin,
    ray.direction,
    hit.t,
    surface.vertexZ,
    hit.radius,
    profile.sag(hit.radius),
    slopeBound(profile, hit.radius),
  );
}

/**
 * Whether a hit is the given reference root, within what the contract implies.
 *
 * The contract bounds the residual a solver computes, not the position of its root, so "within 1e-12 mm of the root"
 * would be the wrong test: the two are tied by |t - t*| = |f(t)| / |f'(t*)|, and |f'| is below 1 for many rays. The
 * solver's float64 residual is in turn off the exact f(t) by at most the operand roundoff envelope the contract
 * defines, which gives
 *
 *   |t - t*| <= (effectiveTolerance + envelope) / |f'(t*)|.
 *
 * First order is enough: the generator refuses roots with |f'| below 1e-3, which keeps the quadratic term far
 * inside the envelope allowance.
 *
 * Float64 allowances on top of that:
 * - The decimal reference is read with Number(), within one ulp of it by the language specification, so every
 *   comparison adds EPSILON * |reference|.
 * - A hit coordinate is origin + direction * t evaluated in float64, off the exact sum by at most
 *   EPSILON * (|origin| + |direction * t|). Together with the reference's own ulp that is twice that term, on top
 *   of |direction| times the bound on t. Near a cancelling sum it dominates: a ray launched 1e8 mm away lands
 *   within 1e-8 mm, not 1e-12.
 */
function isReferenceRoot(
  { ray }: IntersectionFixture,
  root: IntersectionFixtureRoot,
  hit: Hit,
  envelope: number,
): boolean {
  const reference = Number(root.t);
  const parameterBound = (hit.effectiveTolerance + envelope) / Math.abs(Number(root.residualSlope));
  if (!(Math.abs(hit.t - reference) <= parameterBound + Number.EPSILON * Math.abs(reference))) return false;

  const coordinateBounds = ray.direction.map(
    (component, axis) =>
      Math.abs(component) * parameterBound +
      2 * Number.EPSILON * (Math.abs(ray.origin[axis]) + Math.abs(component * reference)),
  );
  if (!coordinateBounds.every((bound, axis) => Math.abs(hit.point[axis] - Number(root.point[axis])) <= bound)) {
    return false;
  }
  // The radius moves by at most the two transverse coordinates, plus the ulps of Math.hypot and of its reference.
  const radius = Number(root.radius);
  return Math.abs(hit.radius - radius) <= coordinateBounds[0] + coordinateBounds[1] + 2 * Number.EPSILON * radius;
}

/**
 * Hold one solver to the contract on one fixture.
 *
 * @returns what it fails, in fixed wording; empty when the contract is met
 */
function contractViolations(solver: Solver, fixture: IntersectionFixture): string[] {
  const { surface, roots, expect: expected } = fixture;
  const profile = createSurfaceProfile({ R: surface.R }, surface.asphere ?? undefined);
  const hit = solve(solver, fixture, profile);

  if (expected.winner === null) {
    // No real root in bounds. The production solver rejects the region beyond the conic domain; the legacy one
    // follows its clamped continuation there (optics-engine.md), so a hit it reports must lie beyond the domain.
    if (solver === "production") {
      return !hit.ok && hit.failureReason === "noBracket" ? [] : ["expected noBracket where no root exists"];
    }
    if (!hit.ok) return [];
    const domainRadius = profile.finiteRadiusLimit();
    const violations: string[] = [];
    if (!(domainRadius !== null && hit.radius > domainRadius)) violations.push("hit inside the domain without a root");
    if (!(Math.abs(hit.residual) <= hit.effectiveTolerance)) violations.push("residual above effectiveTolerance");
    return violations;
  }

  if (!hit.ok) return [`no hit: ${hit.failureReason}`];
  const violations: string[] = [];
  if (!(Math.abs(hit.residual) <= hit.effectiveTolerance)) violations.push("residual above effectiveTolerance");

  const envelope = operandEnvelope(fixture, profile, hit);
  const found = roots.findIndex((root) => isReferenceRoot(fixture, root, hit, envelope));
  if (found < 0) return [...violations, "hit is not a reference root"];
  if (expected.winner !== "unspecified" && found !== expected.winner) {
    violations.push(`hit is root ${found}, the contract selects root ${expected.winner}`);
  }

  // Raw target first: only a hit on a root declared roundoff-limited may report more. It then reports exactly the
  // envelope the engine computes, and the envelope stated here caps that, so an engine envelope that grows fails.
  if (!roots[found].roundoffLimited) {
    if (hit.effectiveTolerance !== RESIDUAL_TARGET) violations.push("effectiveTolerance is not the raw target");
  } else {
    const reported = engineEnvelope(fixture, profile, hit);
    if (!(hit.effectiveTolerance > RESIDUAL_TARGET && hit.effectiveTolerance === reported)) {
      violations.push("effectiveTolerance is not the roundoff envelope of a floor-assisted hit");
    }
    if (!(hit.effectiveTolerance <= envelope)) violations.push("effectiveTolerance is above the contract's envelope");
  }
  return violations;
}

describe.each(SOLVERS)("%s solver on the high-precision fixtures", (solver) => {
  it.each(fixtures.map((fixture) => [fixture.id, fixture] as const))("%s", (_id, fixture) => {
    const finding = EXPECTED_FINDINGS.find((entry) => entry.fixture === fixture.id && entry.solver === solver);
    expect(contractViolations(solver, fixture)).toEqual(finding?.violations ?? []);
    if (finding) {
      const profile = createSurfaceProfile({ R: fixture.surface.R }, fixture.surface.asphere ?? undefined);
      expect(solve(solver, fixture, profile)).toMatchObject(finding.measured);
    }
  });
});

describe("high-precision intersection fixture file", () => {
  it("is what its generator writes", () => {
    expect(renderIntersectionFixtures()).toBe(committedText);
  });

  it("keeps every emitted digit when the working precision is raised", () => {
    expect(buildIntersectionFixtures(WORKING_DIGITS + 20)).toEqual(fixtures);
  });

  it("flattens the base curvature where the engine does", () => {
    expect(FLAT_RADIUS_THRESHOLD).toBe(FLAT_R_THRESHOLD);
  });

  it("stores directions the solvers' normalization leaves unchanged", () => {
    // The generator normalizes with IEEE operations; the solvers divide by Math.hypot, which has to return exactly 1.
    expect(fixtures.filter(({ ray }) => Math.hypot(...ray.direction) !== 1).map(({ id }) => id)).toEqual([]);
  });

  it("lists findings only for fixtures it holds", () => {
    const ids = new Set(fixtures.map((fixture) => fixture.id));
    expect(EXPECTED_FINDINGS.filter((entry) => !ids.has(entry.fixture))).toEqual([]);
  });
});
