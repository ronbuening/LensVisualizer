import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import {
  traceExactSurfaceStack,
  traceExactSurfaceStackVector,
} from "../../../src/optics/internal/exactSurfaceTrace.js";
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
});
