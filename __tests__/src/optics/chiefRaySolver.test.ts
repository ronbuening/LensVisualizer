import { chiefRayCacheKey } from "../../../src/optics/field/chiefRayCache.js";
import { solveChiefRay as solvePreparedChiefRay } from "../../../src/optics/field/chiefRaySolve.js";
import { computeFieldGeometry as computePreparedFieldGeometry } from "../../../src/optics/field/fieldGeometry.js";
import { reportChiefRayFallback } from "../../../src/optics/diagnostics/chiefRay.js";
import { prepareStateUncached } from "../../../src/optics/state/preparedGeometry.js";
import { buildSimplePositiveElementLens } from "./testLensFixtures.js";
import { afterEach, describe, expect, it } from "vitest";
import { compiledLensFromRuntime } from "../../../src/optics/prescription/compile.js";
import buildLens from "../../../src/optics/buildLens.js";
import { computeFieldGeometryAtState, solveChiefRay } from "../../../src/optics/fieldGeometry.js";
import {
  ABSOLUTE_HALF_FIELD_CEILING,
  MAX_FIELD_LAUNCH_DEG,
  projectionLaunchSlopeForField,
} from "../../../src/optics/projection.js";
import { getChiefRayDiagnostics, resetChiefRayDiagnostics } from "../../../src/optics/chiefRayDiagnostics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

const RECTILINEAR_FIXTURE = "nokton-50f1";
const FISHEYE_FIXTURE = "nikon-fisheye-nikkor-6mm-f28";
const HOLOGON_FIXTURE = "zeiss-hologon-15f8";

describe("projectionLaunchSlopeForField", () => {
  it("returns -tan(theta) for rectilinear lenses at moderate fields", () => {
    const L = buildLens(LENS_CATALOG[RECTILINEAR_FIXTURE]);
    for (const deg of [0, 5, 15, 30, 45, 60, 85]) {
      const result = projectionLaunchSlopeForField(L, deg);
      expect(result.status).toBe("ok");
      expect(result.uField).toBeCloseTo(-Math.tan((deg * Math.PI) / 180), 12);
    }
  });

  it("returns out-of-domain at or beyond MAX_FIELD_LAUNCH_DEG", () => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const oob = projectionLaunchSlopeForField(L, MAX_FIELD_LAUNCH_DEG);
    expect(oob.status).toBe("out-of-domain");
    expect(Number.isNaN(oob.uField)).toBe(true);

    const oobNeg = projectionLaunchSlopeForField(L, -90);
    expect(oobNeg.status).toBe("out-of-domain");
  });

  it("rejects non-finite inputs", () => {
    const L = buildLens(LENS_CATALOG[RECTILINEAR_FIXTURE]);
    expect(projectionLaunchSlopeForField(L, Number.NaN).status).toBe("out-of-domain");
    expect(projectionLaunchSlopeForField(L, Number.POSITIVE_INFINITY).status).toBe("out-of-domain");
  });
});

describe("solveChiefRay", () => {
  it("memoizes repeat solves on the same lens/state/field", () => {
    const L = buildLens(LENS_CATALOG[RECTILINEAR_FIXTURE]);
    const first = solveChiefRay(20, 0, 0, L);
    const second = solveChiefRay(20, 0, 0, L);
    expect(second).toBe(first);
  });

  it("returns paraxial fallback (iterations=0) for near-axis fields", () => {
    const L = buildLens(LENS_CATALOG[RECTILINEAR_FIXTURE]);
    const result = solveChiefRay(0.5, 0, 0, L);
    expect(result.status).toBe("converged");
    expect(result.iterations).toBe(0);
  });

  it("converges within the iteration cap for moderate fisheye fields", () => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    for (const deg of [10, 30, 60, 80]) {
      const result = solveChiefRay(deg, 0, 0, L);
      expect(result.status).not.toBe("out-of-domain");
      expect(result.iterations).toBeLessThanOrEqual(30);
      expect(Number.isFinite(result.yLaunch)).toBe(true);
    }
  });

  it("converges for representative wide Hologon object-plane chief rays", () => {
    const L = buildLens(LENS_CATALOG[HOLOGON_FIXTURE]);

    for (const deg of [30, 35]) {
      const result = solveChiefRay(deg, 0, 0, L);
      expect(result.launchSurface).toBe("object-plane");
      expect(result.status).toBe("converged");
      expect(result.iterations).toBeLessThanOrEqual(30);
      expect(Number.isFinite(result.yLaunch)).toBe(true);
    }
  });
});

describe("computeFieldGeometryAtState halfField clamp", () => {
  it("uses declared maxTraceFieldDeg for the fisheye fixture (skips paraxial bisection)", () => {
    // Fisheye lenses skip the slope-based testChief bisection — see
    // computeFieldGeometryAtState's comment block. The Nikon 6mm declares
    // `maxTraceFieldDeg: 110°` and `halfFieldDeg` matches it. This is well
    // past MAX_FIELD_LAUNCH_DEG (89°); per-ray dispatch to bounding-sphere or
    // graceful clipping handles the past-cap angles.
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const geom = computeFieldGeometryAtState(0, 0, L);
    expect(geom.halfFieldDeg).toBeCloseTo(110, 6);
    expect(geom.halfFieldDeg).toBeGreaterThan(MAX_FIELD_LAUNCH_DEG);
  });

  it("rectilinear halfFieldDeg never exits projectionLaunchSlopeForField's in-domain region", () => {
    const L = buildLens(LENS_CATALOG[RECTILINEAR_FIXTURE]);
    const geom = computeFieldGeometryAtState(0, 0, L);
    const edge = projectionLaunchSlopeForField(L, geom.halfFieldDeg);
    expect(edge.status).toBe("ok");
  });

  it("uses declared rectilinear Hologon coverage without fisheye dispatch", () => {
    const L = buildLens(LENS_CATALOG[HOLOGON_FIXTURE]);
    const geom = computeFieldGeometryAtState(0, 0, L);
    const edge = projectionLaunchSlopeForField(L, geom.halfFieldDeg);

    expect(L.projection.kind).toBe("rectilinear");
    expect(geom.halfFieldDeg).toBeCloseTo(60, 6);
    expect(edge.status).toBe("ok");
  });

  it("fisheye halfFieldDeg respects ABSOLUTE_HALF_FIELD_CEILING, not the slope-launch cap", () => {
    // Whatever the bisection finds for a fisheye, the absolute physical
    // ceiling is `ABSOLUTE_HALF_FIELD_CEILING` (175°), not the slope-launch
    // cap. The Nikon 6mm comes nowhere near either bound; this test asserts
    // the clamp ARM is correct rather than the actual numeric outcome.
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const geom = computeFieldGeometryAtState(0, 0, L);
    expect(geom.halfFieldDeg).toBeLessThanOrEqual(ABSOLUTE_HALF_FIELD_CEILING);
  });
});

describe("chiefRayDiagnostics", () => {
  afterEach(() => {
    resetChiefRayDiagnostics();
  });

  it("counts converged solves under the compiled identity", () => {
    resetChiefRayDiagnostics();
    const L = buildLens(structuredClone(LENS_CATALOG[RECTILINEAR_FIXTURE]));
    solveChiefRay(10, 0, 0, L);
    solveChiefRay(20, 0, 0, L);
    const counts = getChiefRayDiagnostics().get(compiledLensFromRuntime(L));
    expect(counts).toBeDefined();
    expect((counts?.converged ?? 0) + (counts?.["paraxial-fallback"] ?? 0)).toBeGreaterThanOrEqual(2);
  });

  it("counts out-of-domain solves separately from converged ones", () => {
    resetChiefRayDiagnostics();
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    // NaN input deterministically triggers the boundingSphereLaunchVector
    // out-of-domain branch regardless of lens geometry — unlike a past-cap
    // numeric angle which may now converge or bracket-fail via Step 3.
    solveChiefRay(Number.NaN, 0, 0, L);
    const counts = getChiefRayDiagnostics().get(compiledLensFromRuntime(L));
    expect(counts?.["out-of-domain"]).toBe(1);
    expect(counts?.converged ?? 0).toBe(0);
  });
});

// These synthetic cases hold cache ownership across slider histories and equal catalog keys.
describe("prepared chief-ray ownership", () => {
  afterEach(resetChiefRayDiagnostics);

  it("shares only the same prepared geometry, field, launch surface and channel", () => {
    const lens = compiledLensFromRuntime(buildSimplePositiveElementLens());
    const state = prepareStateUncached(lens, 0, 0);
    const sameControls = prepareStateUncached(lens, 0, 0);
    const request = { fieldAngleDeg: 0.5, geometry: computePreparedFieldGeometry(state) };
    const first = solvePreparedChiefRay(state, request);
    expect(solvePreparedChiefRay(state, request)).toBe(first);
    expect(solvePreparedChiefRay(sameControls, request)).not.toBe(first);
    expect(solvePreparedChiefRay(sameControls, request)).toEqual(first);
    const red = solvePreparedChiefRay(state, { ...request, channel: "R" });
    expect(red).not.toBe(first);
    expect(solvePreparedChiefRay(state, { ...request, channel: "R" })).toBe(red);
    expect(solvePreparedChiefRay(state, { ...request, channel: "B" })).not.toBe(red);
    expect(chiefRayCacheKey(0.5, "object-plane", "R")).not.toBe(chiefRayCacheKey(0.5, "bounding-sphere", "R"));
  });

  it("evicts the least recently used solve at the per-geometry limit without changing its numbers", () => {
    const state = prepareStateUncached(compiledLensFromRuntime(buildSimplePositiveElementLens()), 0, 0);
    const geometry = computePreparedFieldGeometry(state);
    const solve = (i: number) => solvePreparedChiefRay(state, { fieldAngleDeg: i / 10000, geometry });
    const first = solve(1);
    const second = solve(2);
    for (let i = 3; i <= 512; i++) solve(i);
    expect(solve(2)).toBe(second);
    solve(513);
    expect(solve(2)).toBe(second);
    const recomputed = solve(1);
    expect(recomputed).not.toBe(first);
    expect(recomputed).toEqual(first);
  });

  it("keeps equal catalog keys separate and snapshots defensive", () => {
    resetChiefRayDiagnostics();
    const left = compiledLensFromRuntime(buildSimplePositiveElementLens("same-key"));
    const right = compiledLensFromRuntime(buildSimplePositiveElementLens("same-key"));
    expect(left).not.toBe(right);
    solvePreparedChiefRay(prepareStateUncached(left, 0, 0), { fieldAngleDeg: 0.25 });
    solvePreparedChiefRay(prepareStateUncached(right, 0, 0), { fieldAngleDeg: 0.25 });
    const snapshot = getChiefRayDiagnostics();
    expect(snapshot.size).toBe(2);
    expect(snapshot.get(left)?.converged).toBe(1);
    expect(snapshot.get(right)?.converged).toBe(1);
    snapshot.get(left)!.converged = 99;
    snapshot.clear();
    expect(getChiefRayDiagnostics().get(left)?.converged).toBe(1);
    resetChiefRayDiagnostics();
    expect(getChiefRayDiagnostics().size).toBe(0);
  });

  it("bounds retained diagnostic identities", () => {
    resetChiefRayDiagnostics();
    const base = prepareStateUncached(compiledLensFromRuntime(buildSimplePositiveElementLens()), 0, 0);
    reportChiefRayFallback(base, 0, "converged");
    for (let i = 0; i < 2048; i++) {
      reportChiefRayFallback({ ...base, lens: { ...base.lens } }, 0, "converged");
    }
    const snapshot = getChiefRayDiagnostics();
    expect(snapshot.size).toBe(2048);
    expect(snapshot.has(base.lens)).toBe(false);
  });
});
