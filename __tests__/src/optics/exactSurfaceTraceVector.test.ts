import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import {
  traceExactSurfaceStack,
  traceExactSurfaceStackVector,
} from "../../../src/optics/internal/exactSurfaceTrace.js";
import {
  doLayout,
  solveChiefRay,
  traceRay,
  traceRayChromatic,
  traceRayVector,
  traceRayVectorChromatic,
  traceSkewRay,
  traceSkewRayVector,
} from "../../../src/optics/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import type { RuntimeLens } from "../../../src/types/optics.js";

const LENS_KEYS = ["apo-lanthar-50f2", "nokton-50f1", "sonnar-50f15"] as const;
const FIELD_DEGS = [5, 30, 60] as const;
const Y0_OFFSETS = [0, 1.5, -2.5] as const;

function lensFor(key: string): RuntimeLens {
  return buildLens(LENS_CATALOG[key]);
}

describe("traceExactSurfaceStackVector", () => {
  it.each(LENS_KEYS)("matches slope entry for %s across moderate fields", (key) => {
    const L = lensFor(key);
    const zFirst = 0;

    for (const fieldDeg of FIELD_DEGS) {
      for (const y0 of Y0_OFFSETS) {
        const thetaRad = (fieldDeg * Math.PI) / 180;
        const uy0 = -Math.tan(thetaRad);

        const slope = traceExactSurfaceStack(L, { y0, uy0 }, { leadDistance: 0, checkSemiDiameter: true });
        const vector = traceExactSurfaceStackVector(
          L,
          { origin: [0, y0, zFirst], direction: [0, -Math.sin(thetaRad), Math.cos(thetaRad)] },
          { checkSemiDiameter: true },
        );

        expect(vector.x).toBeCloseTo(slope.x, 10);
        expect(vector.y).toBeCloseTo(slope.y, 10);
        expect(vector.ux).toBeCloseTo(slope.ux, 10);
        expect(vector.uy).toBeCloseTo(slope.uy, 10);
        expect(vector.clipped).toBe(slope.clipped);
        expect(vector.hits.length).toBe(slope.hits.length);
        expect(vector.failureReason).toBe(slope.failureReason);
      }
    }
  });

  it("preserves recorded heights between slope and vector entries", () => {
    const L = lensFor("nokton-50f1");
    const thetaRad = (15 * Math.PI) / 180;
    const slope = traceExactSurfaceStack(
      L,
      { y0: 0, uy0: -Math.tan(thetaRad) },
      { leadDistance: 0, recordHeights: true },
    );
    const vector = traceExactSurfaceStackVector(
      L,
      { origin: [0, 0, 0], direction: [0, -Math.sin(thetaRad), Math.cos(thetaRad)] },
      { recordHeights: true },
    );

    expect(slope.heights).not.toBeNull();
    expect(vector.heights).not.toBeNull();
    expect(vector.heights!.length).toBe(slope.heights!.length);
    for (let i = 0; i < vector.heights!.length; i++) {
      expect(vector.heights![i]).toBeCloseTo(slope.heights![i], 10);
    }
  });

  it("respects stopAt and skipLastTransfer identically through both entries", () => {
    const L = lensFor("apo-lanthar-50f2");
    const thetaRad = (20 * Math.PI) / 180;
    const stopAt = L.stopIdx;

    const slope = traceExactSurfaceStack(
      L,
      { y0: 0, uy0: -Math.tan(thetaRad) },
      { leadDistance: 0, stopAt, skipLastTransfer: true },
    );
    const vector = traceExactSurfaceStackVector(
      L,
      { origin: [0, 0, 0], direction: [0, -Math.sin(thetaRad), Math.cos(thetaRad)] },
      { stopAt, skipLastTransfer: true },
    );

    expect(vector.terminalSurfaceIdx).toBe(slope.terminalSurfaceIdx);
    expect(vector.returnVertexIdx).toBe(slope.returnVertexIdx);
    expect(vector.y).toBeCloseTo(slope.y, 10);
    expect(vector.uy).toBeCloseTo(slope.uy, 10);
  });

  it("public traceRayVector matches slope tracing below the object-plane cap", () => {
    const L = lensFor("nokton-50f1");
    const { z: zPos } = doLayout(0, 0, L);
    const fieldDeg = 15;
    const thetaRad = (fieldDeg * Math.PI) / 180;
    const y0 = 1.25;

    const slope = traceRay(y0, -Math.tan(thetaRad), zPos, 0, 0, L.stopPhysSD, true, L);
    const vector = traceRayVector(
      {
        origin: [0, y0, 0],
        direction: [0, -Math.sin(thetaRad), Math.cos(thetaRad)],
      },
      zPos,
      L.stopPhysSD,
      true,
      L,
    );

    expect(vector.y).toBeCloseTo(slope.y, 10);
    expect(vector.u).toBeCloseTo(slope.u, 10);
    expect(vector.clipped).toBe(slope.clipped);
    expect(vector.pts.length).toBeGreaterThan(0);
  });

  it("public vector adapters honor non-default focus and zoom state", () => {
    const L = lensFor("nikon-z-24-70f4s");
    const focusT = 0.72;
    const zoomT = 0.65;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const fieldDeg = 4;
    const thetaRad = (fieldDeg * Math.PI) / 180;
    const uy = -Math.tan(thetaRad);
    const direction: [number, number, number] = [0, -Math.sin(thetaRad), Math.cos(thetaRad)];
    const y0 = 0.3;

    const slope = traceRay(y0, uy, zPos, focusT, zoomT, L.stopPhysSD, true, L);
    const vector = traceRayVector({ origin: [0, y0, zPos[0]], direction }, zPos, L.stopPhysSD, true, L, focusT, zoomT);

    expect(vector.y).toBeCloseTo(slope.y, 10);
    expect(vector.u).toBeCloseTo(slope.u, 10);
    expect(vector.clipped).toBe(slope.clipped);

    const chromaticSlope = traceRayChromatic(y0, uy, zPos, focusT, zoomT, L.stopPhysSD, true, L, "R");
    const chromaticVector = traceRayVectorChromatic(
      { origin: [0, y0, zPos[0]], direction },
      zPos,
      L.stopPhysSD,
      true,
      L,
      "R",
      focusT,
      zoomT,
    );
    expect(chromaticVector.y).toBeCloseTo(chromaticSlope.y, 10);
    expect(chromaticVector.u).toBeCloseTo(chromaticSlope.u, 10);

    const ux = 0.01;
    const skewLength = Math.hypot(ux, uy, 1);
    const skewDirection: [number, number, number] = [ux / skewLength, uy / skewLength, 1 / skewLength];
    const skewSlope = traceSkewRay(0.2, y0, ux, uy, focusT, zoomT, L.stopPhysSD, true, L);
    const skewVector = traceSkewRayVector(
      { origin: [0.2, y0, zPos[0]], direction: skewDirection },
      zPos,
      L.stopPhysSD,
      true,
      L,
      focusT,
      zoomT,
    );

    expect(skewVector.x).toBeCloseTo(skewSlope.x, 10);
    expect(skewVector.y).toBeCloseTo(skewSlope.y, 10);
    expect(skewVector.ux).toBeCloseTo(skewSlope.ux, 10);
    expect(skewVector.uy).toBeCloseTo(skewSlope.uy, 10);
    expect(skewVector.clipped).toBe(skewSlope.clipped);
  });

  it("public traceRayVector draws finite ghost points for past-cap fisheye launches", () => {
    const L = lensFor("nikon-fisheye-nikkor-6mm-f28");
    const { z: zPos } = doLayout(0, 0, L);
    const launch = solveChiefRay(110, 0, 0, L).vectorLaunch;

    expect(launch).toBeDefined();
    const result = traceRayVector(launch!, zPos, L.stopPhysSD, true, L);
    const points = [...result.pts, ...result.ghostPts];

    expect(points.length).toBeGreaterThan(0);
    for (const [z, y] of points) {
      expect(Number.isFinite(z)).toBe(true);
      expect(Number.isFinite(y)).toBe(true);
    }
  });
});
