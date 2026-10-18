import * as chiefSolves from "../../../src/optics/field/chiefRaySolve.js";
import * as rayAdapters from "../../../src/optics/trace/rayAdapters.js";
import {
  chiefRayImageHeight,
  chiefRayImageHeightAccurate,
  invertChiefRayImageHeights,
  solveFieldAngleForImageHeight,
} from "../../../src/optics/field/imageHeight.js";
import { chiefRayCacheKey } from "../../../src/optics/field/chiefRayCache.js";
import { solveChiefRay as solvePreparedChiefRay } from "../../../src/optics/field/chiefRaySolve.js";
import { computeFieldGeometry as computePreparedFieldGeometry } from "../../../src/optics/field/fieldGeometry.js";
import { reportChiefRayFallback } from "../../../src/optics/diagnostics/chiefRay.js";
import { prepareStateUncached } from "../../../src/optics/state/preparedGeometry.js";
import { buildSimplePositiveElementLens } from "./testLensFixtures.js";
import { afterEach, describe, expect, it, vi } from "vitest";
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

// Real projection and zoom states guard inversion work; synthetic trace responses cover failure semantics.
describe("image-height inversion", () => {
  afterEach(() => vi.restoreAllMocks());

  function bisectHeight(height: (angle: number) => number, target: number, lo: number, hi: number) {
    let fLo = height(lo) + target;
    for (let i = 0; i < 40; i++) {
      const mid = (lo + hi) / 2;
      const fMid = height(mid) + target;
      if (!Number.isFinite(fMid)) return null;
      if (Math.abs(fMid) < 1e-4) return mid;
      if ((fLo >= 0 && fMid <= 0) || (fLo <= 0 && fMid >= 0)) hi = mid;
      else {
        lo = mid;
        fLo = fMid;
      }
    }
    return (lo + hi) / 2;
  }

  it.each([
    [RECTILINEAR_FIXTURE, 0, [0.213, 0.537, 0.873]],
    [FISHEYE_FIXTURE, 0, [0.041, 0.123, 0.207]],
    ["nikkor-z-70-200f28", 0.5, [0.213, 0.537, 0.873]],
  ] as const)(
    "refines table targets in at most six chief calls with the bisection forward criterion: %s",
    (key, zoomT, fractions) => {
      const state = prepareStateUncached(compiledLensFromRuntime(buildLens(LENS_CATALOG[key])), 0, zoomT);
      const geometry = computePreparedFieldGeometry(state);
      const height = (fieldAngleDeg: number) =>
        chiefRayImageHeightAccurate(state, { fieldAngleDeg, zPos: state.z, geometry });
      const segments = Math.max(Math.ceil(geometry.halfFieldDeg), 20);
      const table = Array.from({ length: segments + 1 }, (_, i) => {
        const angle = (i / segments) * geometry.halfFieldDeg;
        return { angle, height: height(angle) };
      }).filter((node) => Number.isFinite(node.height));
      for (const fraction of fractions) {
        const target = Math.abs(height(geometry.halfFieldDeg * fraction));
        expect(Number.isFinite(target)).toBe(true);
        const index = table.findIndex(
          (node, i) => i < table.length - 1 && (node.height + target) * (table[i + 1].height + target) <= 0,
        );
        expect(index).toBeGreaterThanOrEqual(0);
        const reference = bisectHeight(height, target, table[index].angle, table[index + 1].angle);
        expect(reference).not.toBeNull();
        const spy = vi.spyOn(chiefSolves, "solveChiefRay");
        const [result] = invertChiefRayImageHeights(state, { zPos: state.z, geometry, targetImageHeights: [target] });
        // The shared table is built once; the target budget covers refinement and final validation.
        const refinementCalls = spy.mock.calls.length - (segments + 1);
        spy.mockRestore();
        expect(refinementCalls).toBeGreaterThan(0);
        expect(refinementCalls).toBeLessThanOrEqual(6);
        expect(result.status).toBe("reached");
        expect(Math.abs(height(result.fieldAngleDeg!) + target)).toBeLessThan(1e-4);
        expect(Math.abs(height(reference!) + target)).toBeLessThan(1e-4);
        expect(Math.abs(height(result.fieldAngleDeg!) - height(reference!))).toBeLessThan(2e-4);
      }
    },
  );

  it("refines the scalar endpoint bracket against bisection with the same forward criterion", () => {
    const state = prepareStateUncached(compiledLensFromRuntime(buildSimplePositiveElementLens()), 0, 0);
    const geometry = { ...computePreparedFieldGeometry(state), halfFieldDeg: 20 };
    const height = (fieldAngleDeg: number) => chiefRayImageHeight(state, { fieldAngleDeg, zPos: state.z, geometry });
    for (const fraction of [0.213, 0.537, 0.873]) {
      const target = Math.abs(height(geometry.halfFieldDeg * fraction));
      const reference = bisectHeight(height, target, 0, geometry.halfFieldDeg);
      let calls = 0;
      const prepare = rayAdapters.prepareRayTraceForState;
      const spy = vi.spyOn(rayAdapters, "prepareRayTraceForState").mockImplementation((...args) => {
        const adapter = prepare(...args);
        return {
          ...adapter,
          ray: (...rayArgs) => {
            calls++;
            return adapter.ray(...rayArgs);
          },
        };
      });
      const angle = solveFieldAngleForImageHeight(state, { targetImageHeight: target, zPos: state.z, geometry });
      spy.mockRestore();
      expect(angle).not.toBeNull();
      expect(calls - 2).toBeLessThanOrEqual(6);
      expect(Math.abs(height(angle!) + target)).toBeLessThan(1e-4);
      expect(Math.abs(height(reference!) + target)).toBeLessThan(1e-4);
      expect(Math.abs(height(angle!) - height(reference!))).toBeLessThan(2e-4);
    }
  });

  function syntheticHeight(height: (angle: number) => number, failed: boolean | ((angle: number) => boolean) = false) {
    const state = prepareStateUncached(compiledLensFromRuntime(buildSimplePositiveElementLens()), 0, 0);
    const geometry = { ...computePreparedFieldGeometry(state), halfFieldDeg: 20 };
    const prepare = rayAdapters.prepareRayTraceForState;
    vi.spyOn(rayAdapters, "prepareRayTraceForState").mockImplementation((...args) => {
      const adapter = prepare(...args);
      return {
        ...adapter,
        ray(y, u) {
          const result = adapter.ray(y, u);
          const angle = (Math.atan(-u) * 180) / Math.PI;
          const traceFailed = typeof failed === "function" ? failed(angle) : failed;
          return {
            ...result,
            y: height(angle),
            u: 0,
            ...(traceFailed ? { diagnostics: { ...result.diagnostics!, terminalSurfaceIndex: -1 } } : {}),
          };
        },
      };
    });
    return {
      accurate: (targets: number[]) =>
        invertChiefRayImageHeights(state, { zPos: state.z, geometry, targetImageHeights: targets }),
      scalar: (target: number) =>
        solveFieldAngleForImageHeight(state, { zPos: state.z, geometry, targetImageHeight: target }),
      state,
      geometry,
    };
  }

  it("preserves the first crossing of a non-monotone table and out-of-range statuses", () => {
    const { accurate, scalar } = syntheticHeight((angle) => (angle <= 10 ? -angle : angle - 20));
    const [crossing, outside] = accurate([5.25, 11]);
    expect(crossing.status).toBe("reached");
    expect(crossing.fieldAngleDeg).toBeCloseTo(5.25, 8);
    expect(outside).toEqual({ status: "unreachable", reason: "field-limit" });
    // The scalar solver retains its endpoint range guard, even with an interior crossing.
    expect(scalar(5.25)).toBeNull();
  });

  it("retains non-finite target, zero and invalid-field returns", () => {
    const { accurate, scalar, state, geometry } = syntheticHeight((angle) => -angle);
    for (const target of [0, 1e-13, NaN, Infinity]) {
      expect(accurate([target])).toEqual([{ status: "reached", fieldAngleDeg: 0 }]);
      expect(scalar(target)).toBe(0);
    }
    for (const halfFieldDeg of [0, NaN]) {
      const request = { zPos: state.z, geometry: { ...geometry, halfFieldDeg } };
      expect(invertChiefRayImageHeights(state, { ...request, targetImageHeights: [0, 1] })).toEqual([
        { status: "reached", fieldAngleDeg: 0 },
        { status: "unreachable", reason: "field-limit" },
      ]);
      expect(solveFieldAngleForImageHeight(state, { ...request, targetImageHeight: 1 })).toBeNull();
    }
    expect(accurate([20, -20])).toEqual([
      { status: "reached", fieldAngleDeg: 20 },
      { status: "reached", fieldAngleDeg: 20 },
    ]);
    expect(scalar(20)).toBe(20);
    expect(accurate([21])).toEqual([{ status: "unreachable", reason: "field-limit" }]);
    expect(scalar(21)).toBeNull();
  });

  it("retains null on non-finite refinement heights and skips non-finite table nodes", () => {
    const { accurate, scalar } = syntheticHeight((angle) =>
      Math.abs(angle - Math.round(angle)) < 1e-10 ? -angle : NaN,
    );
    expect(accurate([5.25])).toEqual([{ status: "unreachable", reason: "field-limit" }]);
    expect(scalar(5.25)).toBeNull();
    vi.restoreAllMocks();
    const gaps = syntheticHeight((angle) =>
      Math.abs(angle - 5) < 1e-10 || Math.abs(angle - 6) < 1e-10 ? NaN : -angle,
    );
    expect(gaps.accurate([5.5])[0]).toEqual({ status: "reached", fieldAngleDeg: 5.5 });
    vi.restoreAllMocks();
    const missing = syntheticHeight(() => NaN);
    expect(missing.accurate([5])).toEqual([{ status: "unreachable", reason: "field-limit" }]);
    expect(missing.scalar(5)).toBeNull();
  });

  it("replays bisection after a non-finite secant height even when bisection succeeds", () => {
    // The first inverse-linear estimates differ for the table and full-field brackets.
    const height = (angle: number) =>
      Math.abs(angle - (5 + 3 / 11)) < 1e-10 || Math.abs(angle - 1.4) < 1e-10 ? NaN : -angle * angle;
    const { accurate, scalar, state, geometry } = syntheticHeight(height);
    const tracedHeight = (fieldAngleDeg: number) =>
      chiefRayImageHeight(state, { fieldAngleDeg, zPos: state.z, geometry });
    expect(accurate([28])[0]).toEqual({
      status: "reached",
      fieldAngleDeg: bisectHeight(tracedHeight, 28, 5, 6),
    });
    expect(scalar(28)).toBe(bisectHeight(tracedHeight, 28, 0, 20));
  });

  it("discards speculative trace failures when replay returns null", () => {
    const secantFailure = (angle: number) => Math.abs(angle - (5 + 3 / 11)) < 1e-10;
    const { accurate } = syntheticHeight(
      (angle) => (secantFailure(angle) || Math.abs(angle - 5.5) < 1e-10 ? NaN : -angle * angle),
      secantFailure,
    );
    expect(accurate([28])[0]).toEqual({ status: "unreachable", reason: "field-limit" });
  });

  it("replays legacy bisection at a rootless jump and allows later valid targets", () => {
    const failed = syntheticHeight((angle) => -angle, true);
    expect(failed.accurate([5.25])[0]).toMatchObject({ status: "unreachable", reason: "trace-failure" });
    vi.restoreAllMocks();
    const height = (angle: number) => -angle - (angle >= 12 ? 10 : 0);
    const jump = syntheticHeight(height);
    const spy = vi.spyOn(chiefSolves, "solveChiefRay");
    expect(jump.accurate([20])[0]).toEqual({
      status: "unreachable",
      reason: "height-miss",
      fieldAngleDeg: bisectHeight(height, 20, 11, 12),
    });
    expect(spy.mock.calls.length).toBe(21 + 8 + 40 + 1);
    expect(jump.scalar(20)).toBe(bisectHeight(height, 20, 0, 20));
    expect(jump.accurate([25])[0].status).toBe("reached");
  });
});
