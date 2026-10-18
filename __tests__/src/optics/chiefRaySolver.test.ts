import * as fieldGeometryModule from "../../../src/optics/field/fieldGeometry.js";
import * as rayAdapters from "../../../src/optics/trace/rayAdapters.js";
import { computeChiefRaySolve, solveChiefRayBoundingSphere } from "../../../src/optics/field/chiefRaySolve.js";
import { computeBoundingSphereVectorFieldLaunch } from "../../../src/optics/field/launch.js";
import type { Ray3 } from "../../../src/optics/types.js";
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

// Synthetic stop functions isolate refinement and disconnected domains from optical prescription details.
describe.each(["object-plane", "bounding-sphere"] as const)("%s bracket refinement", (surface) => {
  afterEach(() => vi.restoreAllMocks());

  function solveStopFunction(height: (x: number) => number | null) {
    const state = prepareStateUncached(compiledLensFromRuntime(buildSimplePositiveElementLens()), 0, 0);
    const geometry = { ...computePreparedFieldGeometry(state), epRatio: 0 };
    const fieldAngleDeg = 10;
    const samples: number[] = [];
    const sample = (x: number) => {
      samples.push(x);
      return height(x);
    };
    if (surface === "object-plane") {
      vi.spyOn(fieldGeometryModule, "prepareStateSurfacesReal").mockReturnValue((x: number) => ({
        y: sample(x) ?? NaN,
        u: 0,
        n: 1,
        clipped: false,
        heights: null,
        reachedImagePlane: false,
        terminalPoint: [0, 0, 0],
      }));
    } else {
      const base = computeBoundingSphereVectorFieldLaunch(state, {
        geometry,
        fieldAngleXDeg: 0,
        fieldAngleYDeg: fieldAngleDeg,
      })!;
      vi.spyOn(rayAdapters, "prepareEngineTrace").mockReturnValue(((ray: Ray3) => {
        const x = (ray.origin[2] - base.origin[2]) / Math.sin((fieldAngleDeg * Math.PI) / 180);
        const y = sample(x);
        return { y, status: y === null ? "miss" : "ok", failureReason: y === null ? "miss" : null };
      }) as ReturnType<typeof rayAdapters.prepareEngineTrace>);
    }
    const solve = surface === "object-plane" ? computeChiefRaySolve : solveChiefRayBoundingSphere;
    const result = solve(state, { fieldAngleDeg, geometry });
    const root = result.yLaunch * (surface === "object-plane" ? 1 : Math.cos((fieldAngleDeg * Math.PI) / 180));
    return { result, root, samples };
  }

  // Independent legacy reference: no secant weighting or retry logic.
  function bisect(height: (x: number) => number | null, lo: number, hi: number) {
    let fLo = height(lo)!;
    const samples: number[] = [];
    for (let i = 0; i < 30; i++) {
      const mid = (lo + hi) / 2;
      samples.push(mid);
      const fMid = height(mid);
      if (fMid === null) return { root: 0, status: "paraxial-fallback", iterations: i + 1, samples };
      if (Math.abs(fMid) < 1e-7) return { root: mid, status: "converged", iterations: i + 1, samples };
      if (fMid < 0 === fLo < 0) {
        lo = mid;
        fLo = fMid;
      } else hi = mid;
      if (hi - lo < 1e-9) return { root: (lo + hi) / 2, status: "converged", iterations: i + 1, samples };
    }
    return { root: (lo + hi) / 2, status: "converged", iterations: 30, samples };
  }

  const bracket = surface === "object-plane" ? [-0.5, 0.5] : [0.125, -1 + (2 * 55) / 96];

  it("keeps the first midpoint and converges a near-linear stop function in few refinement traces", () => {
    const height = (x: number) => (x - 0.141) * (1 + 0.01 * x * x);
    const legacy = bisect(height, bracket[0], bracket[1]);
    const { result, root, samples } = solveStopFunction(height);
    const scanCount = surface === "object-plane" ? 2 : 56;
    expect(samples[scanCount]).toBeCloseTo((bracket[0] + bracket[1]) / 2, 12);
    expect(result.status).toBe("converged");
    expect(result.iterations).toBeLessThanOrEqual(5);
    expect(samples.length).toBe(scanCount + result.iterations);
    expect(Math.abs(height(root))).toBeLessThan(1e-7);
    expect(Math.abs(root - legacy.root)).toBeLessThan(2e-7);
    expect(Math.abs(root - 0.141)).toBeLessThan(1e-7);
  });

  it("replays legacy bisection after a secant trace enters a null region", () => {
    const height = (x: number) => (Math.abs(x - 0.141) < 0.0001 ? null : x - 0.141);
    const legacy = bisect(height, bracket[0], bracket[1]);
    const { result, root, samples } = solveStopFunction(height);
    expect(legacy.status).toBe("paraxial-fallback");
    expect(result.status).toBe(legacy.status);
    expect(result.iterations).toBe(legacy.iterations);
    expect(root).toBeCloseTo(legacy.root, 12);
    const replay = samples.slice(-legacy.samples.length);
    replay.forEach((x, i) => expect(x).toBeCloseTo(legacy.samples[i], 12));
  });

  it("retains legacy convergence when only the secant hits a narrow null region", () => {
    const height = (x: number) => (Math.abs(x - 0.141) < 1e-10 ? null : x - 0.141);
    const legacy = bisect(height, bracket[0], bracket[1]);
    const { result, root } = solveStopFunction(height);
    expect(legacy.status).toBe("converged");
    expect(result.status).toBe(legacy.status);
    expect(result.iterations).toBe(legacy.iterations);
    expect(root).toBeCloseTo(legacy.root, 12);
  });

  it("returns the legacy fallback immediately at a null first midpoint", () => {
    const midpoint = (bracket[0] + bracket[1]) / 2;
    const { result, samples } = solveStopFunction((x) => (Math.abs(x - midpoint) < 1e-10 ? null : x - 0.141));
    expect(result.status).toBe("paraxial-fallback");
    expect(result.iterations).toBe(1);
    expect(samples.length).toBe(surface === "object-plane" ? 3 : 57);
  });

  it("retains the scan order and first sign change when multiple roots exist", () => {
    const { result, root, samples } = solveStopFunction((x) => (x - 0.141) * (x - 0.3));
    const offset = surface === "object-plane" ? 2 : 0;
    for (let i = 0; i <= 55; i++) expect(samples[offset + i]).toBeCloseTo(-1 + (2 * i) / 96, 12);
    expect(samples[offset + 56]).toBeCloseTo((0.125 + (-1 + (2 * 55) / 96)) / 2, 12);
    expect(result.status).toBe("converged");
    expect(root).toBeCloseTo(0.141, 5);
  });

  it("keeps the legacy root when the initial interval contains multiple sign changes", () => {
    const { result, root } = solveStopFunction((x) => (x + 0.2) * (x - 0.1) * (x - 0.3));
    expect(result.status).toBe("converged");
    expect(root).toBeCloseTo(-0.2, 5);
  });

  it("keeps the same expanding scans when the root is outside the first two intervals", () => {
    const { result, root, samples } = solveStopFunction((x) => x - 3.141);
    const offset = surface === "object-plane" ? 2 : 0;
    for (let attempt = 0; attempt < 2; attempt++) {
      const half = 2 ** attempt;
      for (let i = 0; i <= 96; i++) {
        expect(samples[offset + attempt * 97 + i]).toBeCloseTo(-half + (2 * half * i) / 96, 12);
      }
    }
    expect(samples[offset + 194]).toBeCloseTo(-4, 12);
    expect(result.status).toBe("converged");
    expect(root).toBeCloseTo(3.141, 7);
  });

  it("keeps in-scan convergence at zero refinement iterations", () => {
    const { result, root, samples } = solveStopFunction((x) => (Math.abs(x) >= 0.5 ? null : x - 0.125));
    expect(result.status).toBe("converged");
    expect(result.iterations).toBe(0);
    expect(root).toBeCloseTo(0.125, 12);
    expect(samples.length).toBe(surface === "object-plane" ? 57 : 55);
  });

  it("splits scans at null samples and returns the nearest valid sample on failure", () => {
    const { result, root, samples } = solveStopFunction((x) => (Math.abs(x) < 0.01 || Math.abs(x) >= 0.5 ? null : x));
    expect(result.status).toBe("bracket-failed");
    expect(result.iterations).toBe(0);
    expect(samples.length).toBe(4 * 97 + (surface === "object-plane" ? 2 : 0));
    expect(Math.abs(root)).toBeCloseTo(1 / 48, 12);
  });
});
