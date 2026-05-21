import { afterEach, describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import {
  computeFieldGeometryAtState,
  solveChiefRay,
  solveChiefRayLaunchHeight,
} from "../../../src/optics/fieldGeometry.js";
import {
  ABSOLUTE_HALF_FIELD_CEILING,
  MAX_FIELD_LAUNCH_DEG,
  projectionLaunchSlopeForField,
} from "../../../src/optics/projection.js";
import { getChiefRayDiagnostics, resetChiefRayDiagnostics } from "../../../src/optics/chiefRayDiagnostics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

const RECTILINEAR_FIXTURE = "nokton-50f1";
const FISHEYE_FIXTURE = "nikon-fisheye-nikkor-6mm-f28";

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
  it("returns yLaunch matching the legacy solveChiefRayLaunchHeight for rectilinear lenses", () => {
    const L = buildLens(LENS_CATALOG[RECTILINEAR_FIXTURE]);
    for (const deg of [0, 5, 15, 25]) {
      const typed = solveChiefRay(deg, 0, 0, L);
      const legacy = solveChiefRayLaunchHeight(deg, 0, 0, L);
      expect(typed.yLaunch).toBeCloseTo(legacy, 12);
      expect(typed.status === "converged" || typed.status === "paraxial-fallback").toBe(true);
    }
  });

  it("memoizes repeat solves on the same lens/state/field", () => {
    const L = buildLens(LENS_CATALOG[RECTILINEAR_FIXTURE]);
    const first = solveChiefRay(20, 0, 0, L);
    const second = solveChiefRay(20, 0, 0, L);
    expect(second).toBe(first);
  });

  it("routes past-cap field angles through the bounding-sphere launch path", () => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const result = solveChiefRay(MAX_FIELD_LAUNCH_DEG + 1, 0, 0, L);
    expect(result.launchSurface).toBe("bounding-sphere");
    // Past-cap convergence depends on lens geometry; we only assert the
    // dispatch found the bounding-sphere arm (rather than the old
    // unconditional out-of-domain pre-empt).
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

  it("counts converged solves under the lens key", () => {
    resetChiefRayDiagnostics();
    const L = buildLens(LENS_CATALOG[RECTILINEAR_FIXTURE]);
    solveChiefRay(10, 0, 0, L);
    solveChiefRay(20, 0, 0, L);
    const counts = getChiefRayDiagnostics().get(L.data?.key ?? "<unknown-lens>");
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
    const counts = getChiefRayDiagnostics().get(L.data?.key ?? "<unknown-lens>");
    expect(counts?.["out-of-domain"]).toBe(1);
    expect(counts?.converged ?? 0).toBe(0);
  });
});
