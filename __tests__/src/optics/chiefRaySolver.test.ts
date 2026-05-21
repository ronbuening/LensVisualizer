import { afterEach, describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import {
  computeFieldGeometryAtState,
  solveChiefRay,
  solveChiefRayLaunchHeight,
} from "../../../src/optics/fieldGeometry.js";
import { projectionLaunchSlopeForField, MAX_FIELD_LAUNCH_DEG } from "../../../src/optics/projection.js";
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

  it("reports out-of-domain for field angles past MAX_FIELD_LAUNCH_DEG without iterating", () => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const result = solveChiefRay(MAX_FIELD_LAUNCH_DEG + 1, 0, 0, L);
    expect(result.status).toBe("out-of-domain");
    expect(result.iterations).toBe(0);
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
  it("clamps halfFieldDeg below MAX_FIELD_LAUNCH_DEG for the fisheye fixture", () => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const geom = computeFieldGeometryAtState(0, 0, L);
    expect(geom.halfFieldDeg).toBeLessThan(MAX_FIELD_LAUNCH_DEG);
  });

  it("never publishes halfFieldDeg outside projectionLaunchSlopeForField's in-domain region", () => {
    for (const key of [RECTILINEAR_FIXTURE, FISHEYE_FIXTURE]) {
      const L = buildLens(LENS_CATALOG[key]);
      const geom = computeFieldGeometryAtState(0, 0, L);
      const edge = projectionLaunchSlopeForField(L, geom.halfFieldDeg);
      expect(edge.status).toBe("ok");
    }
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
    solveChiefRay(MAX_FIELD_LAUNCH_DEG + 1, 0, 0, L);
    const counts = getChiefRayDiagnostics().get(L.data?.key ?? "<unknown-lens>");
    expect(counts?.["out-of-domain"]).toBe(1);
    expect(counts?.converged ?? 0).toBe(0);
  });
});
