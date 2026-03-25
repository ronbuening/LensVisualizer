import { describe, it, expect } from "vitest";
import { createCoordinateTransforms, computeElementShapes } from "../src/optics/diagramGeometry.js";
import { SVG_PATH_SUBDIVISIONS } from "../src/optics/optics.js";
import type { RuntimeLens, AsphericCoefficients } from "../src/types/optics.js";

/* ═══════════════════════════════════════════════════════════════════
 * §1  createCoordinateTransforms
 * ═══════════════════════════════════════════════════════════════════ */

describe("createCoordinateTransforms", () => {
  /* Baseline params used across most tests */
  const base = { svgW: 800, svgH: 400, SC: 2, YSC: 3, lensShiftFrac: 0, imgMM: 100, scaleRatio: null };

  it("sx maps z=0 and z=imgMM to expected pixel positions", () => {
    const { sx } = createCoordinateTransforms(base);
    // CX = 800/2 + 0 = 400, MID = 50, IX = 400 + 50*2 = 500
    // sx(0) = 500 - (100-0)*2 = 300
    // sx(100) = 500 - (100-100)*2 = 500
    expect(sx(0)).toBeCloseTo(300);
    expect(sx(100)).toBeCloseTo(500);
  });

  it("sx is linear — midpoint maps to midpoint", () => {
    const { sx } = createCoordinateTransforms(base);
    expect(sx(50)).toBeCloseTo((sx(0) + sx(100)) / 2);
  });

  it("sy maps y=0 to vertical center", () => {
    const { sy } = createCoordinateTransforms(base);
    expect(sy(0)).toBeCloseTo(200); // svgH/2
  });

  it("sy positive Y maps downward (higher pixel value)", () => {
    const { sy } = createCoordinateTransforms(base);
    expect(sy(10)).toBeGreaterThan(sy(0));
    expect(sy(10)).toBeCloseTo(200 + 10 * 3); // CY + y * YSC
  });

  it("sy negative Y maps upward (lower pixel value)", () => {
    const { sy } = createCoordinateTransforms(base);
    expect(sy(-10)).toBeLessThan(sy(0));
    expect(sy(-10)).toBeCloseTo(200 - 10 * 3);
  });

  it("scaleRatio scales both axes proportionally", () => {
    const scaled = createCoordinateTransforms({ ...base, scaleRatio: 0.5 });
    const unscaled = createCoordinateTransforms(base);
    // With scaleRatio=0.5, effectiveSC = 1, effectiveYSC = 1.5
    // The pixel range should be half as wide
    const rangeScaled = Math.abs(scaled.sx(100) - scaled.sx(0));
    const rangeUnscaled = Math.abs(unscaled.sx(100) - unscaled.sx(0));
    expect(rangeScaled).toBeCloseTo(rangeUnscaled * 0.5);
  });

  it("scaleRatio=null uses raw SC/YSC", () => {
    const withNull = createCoordinateTransforms({ ...base, scaleRatio: null });
    const withOne = createCoordinateTransforms({ ...base, scaleRatio: 1 });
    // Both should produce identical results since null means "use raw"
    expect(withNull.sx(50)).toBeCloseTo(withOne.sx(50));
    expect(withNull.sy(10)).toBeCloseTo(withOne.sy(10));
  });

  it("lensShiftFrac offsets horizontally", () => {
    const shifted = createCoordinateTransforms({ ...base, lensShiftFrac: 0.1 });
    const unshifted = createCoordinateTransforms(base);
    // CX shifts by svgW * lensShiftFrac = 800 * 0.1 = 80
    expect(shifted.sx(50) - unshifted.sx(50)).toBeCloseTo(80);
  });

  it("yViewMax computed correctly", () => {
    const { yViewMax } = createCoordinateTransforms(base);
    // (svgH/2 - 10) / effectiveYSC = (200 - 10) / 3 ≈ 63.33
    expect(yViewMax).toBeCloseTo(190 / 3);
  });

  it("clampedRayEnd passes through when ray is within viewport", () => {
    const { clampedRayEnd, yViewMax } = createCoordinateTransforms(base);
    // Small slope, ray stays within viewport
    const result = clampedRayEnd(50, 0, 0.01, 60);
    const { sx, sy } = createCoordinateTransforms(base);
    const expectedY = 0 + (60 - 50) * 0.01; // 0.1, well within yViewMax
    expect(result[0]).toBeCloseTo(sx(60));
    expect(result[1]).toBeCloseTo(sy(expectedY));
    expect(Math.abs(expectedY)).toBeLessThan(yViewMax);
  });

  it("clampedRayEnd clamps ray at viewport edge for large slopes", () => {
    const { clampedRayEnd, yViewMax, sx, sy } = createCoordinateTransforms(base);
    // Large slope that would exceed yViewMax
    const result = clampedRayEnd(0, 0, 100, 100);
    // yImg = 0 + 100*100 = 10000, way beyond yViewMax ≈ 63.3
    // Should clamp to yViewMax
    expect(result[1]).toBeCloseTo(sy(yViewMax));
    // zEdge = 0 + (yViewMax - 0) / 100 = yViewMax/100
    expect(result[0]).toBeCloseTo(sx(yViewMax / 100));
  });

  it("clampedRayEnd handles zero slope (parallel ray)", () => {
    const { clampedRayEnd, sx, sy } = createCoordinateTransforms(base);
    const result = clampedRayEnd(50, 5, 0, 80);
    // u=0, yImg = 5, no clamping needed (small y)
    expect(result[0]).toBeCloseTo(sx(80));
    expect(result[1]).toBeCloseTo(sy(5));
  });
});

/* ═══════════════════════════════════════════════════════════════════
 * §2  computeElementShapes
 * ═══════════════════════════════════════════════════════════════════ */

describe("computeElementShapes", () => {
  /* Identity transforms for interpretable coordinates */
  const sx = (z: number): number => z;
  const sy = (y: number): number => y;

  /**
   * Minimal lens-like object builder.
   * computeElementShapes accesses: L.ES, L.S[].sd, L.S[].R, L.S[].nd, L.S[].d,
   * L.asphByIdx, L.maxRimSin, L.gapSagFrac, L.N
   */
  function makeSingleElementLens({
    R1 = 50,
    R2 = 1e15,
    sd = 15,
    nd = 1.5,
    asph1 = null as AsphericCoefficients | null,
    asph2 = null as AsphericCoefficients | null,
  } = {}): RuntimeLens {
    return {
      ES: [[0, 0, 1]],
      S: [
        { R: R1, sd, nd, d: 5 },
        { R: R2, sd, nd: 1.0, d: 10 },
      ],
      asphByIdx: { 0: asph1, 1: asph2 },
      maxRimSin: 0.95,
      gapSagFrac: 0.9,
      N: 2,
    } as unknown as RuntimeLens;
  }

  it("returns empty array for empty ES", () => {
    const L = { ...makeSingleElementLens(), ES: [] };
    expect(computeElementShapes(L, [0, 5], sx, sy)).toEqual([]);
  });

  it("single plano-convex element returns correct structure", () => {
    const L = makeSingleElementLens({ R1: 50, R2: 1e15 });
    const zPos = [0, 5];
    const shapes = computeElementShapes(L, zPos, sx, sy);

    expect(shapes).toHaveLength(1);
    expect(shapes[0].eid).toBe(0);
    expect(shapes[0].z1).toBe(0);
    expect(shapes[0].z2).toBe(5);
    expect(shapes[0].d).toMatch(/^M.*Z$/); // starts with M, ends with Z (closed)
    expect(shapes[0].asphPaths).toEqual([]);
  });

  it("path contains expected number of line segments", () => {
    const L = makeSingleElementLens();
    const zPos = [0, 5];
    const shapes = computeElementShapes(L, zPos, sx, sy);
    const NN = SVG_PATH_SUBDIVISIONS;
    // Front arc: 1 M + NN L = NN+1 points, Rear arc: NN+1 L points
    const mCount = (shapes[0].d.match(/M/g) || []).length;
    const lCount = (shapes[0].d.match(/L/g) || []).length;
    expect(mCount).toBe(1);
    expect(lCount).toBe(2 * NN + 1); // NN from front + (NN+1) from rear
  });

  it("flat surface produces vertical line (constant x per surface)", () => {
    const L = makeSingleElementLens({ R1: 1e15, R2: 1e15 });
    const zPos = [0, 5];
    const shapes = computeElementShapes(L, zPos, sx, sy);
    // With identity sx and flat surfaces (sag ≈ 0), all front-arc x-coords ≈ z1=0
    const coords = shapes[0].d.match(/[ML]([\d.e+-]+),([\d.e+-]+)/g)!;
    const NN = SVG_PATH_SUBDIVISIONS;
    // First NN+1 coords are front surface at z1=0
    for (let i = 0; i <= NN; i++) {
      const match = coords[i].match(/[ML]([\d.e+-]+)/)!;
      expect(parseFloat(match[1])).toBeCloseTo(0, 3);
    }
    // Last NN+1 coords are rear surface at z2=5
    for (let i = NN + 1; i < coords.length; i++) {
      const match = coords[i].match(/[ML]([\d.e+-]+)/)!;
      expect(parseFloat(match[1])).toBeCloseTo(5, 3);
    }
  });

  it("conic height limit is applied when K > 0", () => {
    // With K=3 and R=20: hMax = 20/√4 * 0.98 = 9.8, which is less than sd=15
    const L = makeSingleElementLens({ R1: 20, sd: 15, asph1: { K: 3, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } });
    const zPos = [0, 5];
    const shapes = computeElementShapes(L, zPos, sx, sy);
    // The path should exist (no error)
    expect(shapes).toHaveLength(1);
    // With identity transforms, we can check the x-coords near the edge.
    // The trim should prevent rendering at the full sd=15 height,
    // so the sag values near the edge should be smaller than for an untrimmed lens.
    const untrimmedL = makeSingleElementLens({ R1: 20, sd: 15 });
    const untrimmedShapes = computeElementShapes(untrimmedL, zPos, sx, sy);
    // The trimmed path should differ from untrimmed
    expect(shapes[0].d).not.toBe(untrimmedShapes[0].d);
  });

  it("aspheric front surface produces asphPaths entry", () => {
    const L = makeSingleElementLens({ R1: 50, asph1: { K: -1, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } });
    const zPos = [0, 5];
    const shapes = computeElementShapes(L, zPos, sx, sy);

    expect(shapes[0].asphPaths).toHaveLength(1);
    const ap = shapes[0].asphPaths[0];
    expect(ap.surfIdx).toBe(0);
    expect(ap.pathD).toMatch(/^M/);
    expect(ap.halfPathD).toMatch(/Z$/);
    expect(typeof ap.labelX).toBe("number");
    expect(typeof ap.labelY).toBe("number");
  });

  it("both surfaces aspheric produces two asphPaths entries", () => {
    const L = makeSingleElementLens({
      R1: 50,
      R2: -50,
      asph1: { K: -1, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 },
      asph2: { K: -0.5, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 },
    });
    const zPos = [0, 5];
    const shapes = computeElementShapes(L, zPos, sx, sy);

    expect(shapes[0].asphPaths).toHaveLength(2);
    expect(shapes[0].asphPaths[0].surfIdx).toBe(0);
    expect(shapes[0].asphPaths[1].surfIdx).toBe(1);
  });

  it("multi-element system returns one shape per element", () => {
    const L = {
      ES: [
        [0, 0, 1],
        [1, 2, 3],
        [2, 4, 5],
      ],
      S: [
        { R: 50, sd: 15, nd: 1.5, d: 3 },
        { R: -80, sd: 15, nd: 1.0, d: 2 },
        { R: 30, sd: 12, nd: 1.7, d: 4 },
        { R: -40, sd: 12, nd: 1.0, d: 2 },
        { R: 60, sd: 10, nd: 1.5, d: 3 },
        { R: 1e15, sd: 10, nd: 1.0, d: 50 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      gapSagFrac: 0.9,
      N: 6,
    } as unknown as RuntimeLens;
    const zPos = [0, 3, 5, 9, 11, 14];
    const shapes = computeElementShapes(L, zPos, sx, sy);

    expect(shapes).toHaveLength(3);
    expect(shapes[0].eid).toBe(0);
    expect(shapes[1].eid).toBe(1);
    expect(shapes[2].eid).toBe(2);
  });

  it("gap trimming: rear surface with positive sag into narrow gap", () => {
    // Element 0: front flat, rear with R=15 (positive sag curves forward)
    // Element 1: front flat, rear flat
    // Gap between them is only 0.5mm — should trigger rear trim on element 0
    const L = {
      ES: [
        [0, 0, 1],
        [1, 2, 3],
      ],
      S: [
        { R: 1e15, sd: 12, nd: 1.5, d: 3 },
        { R: 15, sd: 12, nd: 1.0, d: 0.5 }, // tight gap, positive-sag rear
        { R: 1e15, sd: 12, nd: 1.5, d: 3 },
        { R: 1e15, sd: 12, nd: 1.0, d: 50 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      gapSagFrac: 0.9,
      N: 4,
    } as unknown as RuntimeLens;
    const zPos = [0, 3, 3.5, 6.5];
    const shapes = computeElementShapes(L, zPos, sx, sy);
    expect(shapes).toHaveLength(2);
    // The shapes should compute without error — trimming handles the tight gap
    expect(shapes[0].d).toMatch(/^M.*Z$/);
  });

  it("gap trimming: front surface with negative sag into narrow preceding gap", () => {
    // Element 0: flat front, flat rear, followed by narrow gap
    // Element 1: front with R=-15 (negative sag curves backward into gap), flat rear
    const L = {
      ES: [
        [0, 0, 1],
        [1, 2, 3],
      ],
      S: [
        { R: 1e15, sd: 12, nd: 1.5, d: 3 },
        { R: 1e15, sd: 12, nd: 1.0, d: 0.5 }, // tight gap
        { R: -15, sd: 12, nd: 1.5, d: 3 }, // negative-sag front
        { R: 1e15, sd: 12, nd: 1.0, d: 50 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      gapSagFrac: 0.9,
      N: 4,
    } as unknown as RuntimeLens;
    const zPos = [0, 3, 3.5, 6.5];
    const shapes = computeElementShapes(L, zPos, sx, sy);
    expect(shapes).toHaveLength(2);
    expect(shapes[1].d).toMatch(/^M.*Z$/);
  });

  it("front trim with prevES: backward-curving front sag accounts for previous element", () => {
    /* Three elements: E0 → air gap → E1 (front curves backward) → air gap → E2
     * E1's front surface has negative renderSag, and a prevES exists (E0).
     * This exercises the prevES branch at lines 104-117 of diagramGeometry.ts. */
    const L = {
      ES: [
        [0, 0, 1],
        [1, 2, 3],
        [2, 4, 5],
      ],
      S: [
        { R: 50, sd: 12, nd: 1.5, d: 3 },
        { R: -50, sd: 12, nd: 1.0, d: 0.3 }, // narrow gap, air after rear
        { R: -12, sd: 12, nd: 1.7, d: 4 }, // front with negative sag (curves backward)
        { R: -40, sd: 12, nd: 1.0, d: 2 },
        { R: 60, sd: 10, nd: 1.5, d: 3 },
        { R: 1e15, sd: 10, nd: 1.0, d: 50 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      gapSagFrac: 0.9,
      N: 6,
    } as unknown as RuntimeLens;
    const zPos = [0, 3, 3.3, 7.3, 9.3, 12.3];
    const shapes = computeElementShapes(L, zPos, sx, sy);
    expect(shapes).toHaveLength(3);
    /* All shapes should be valid closed paths */
    for (const shape of shapes) {
      expect(shape.d).toMatch(/^M.*Z$/);
    }
  });

  it("rear trim with nextES: forward-curving rear sag accounts for next element", () => {
    /* Two elements: E0 (rear curves forward into gap) → narrow air gap → E1
     * E0's rear surface has nd=1.0 and positive renderSag, and nextES exists (E1).
     * This exercises the nextES branch at lines 124-136 of diagramGeometry.ts. */
    const L = {
      ES: [
        [0, 0, 1],
        [1, 2, 3],
      ],
      S: [
        { R: 1e15, sd: 14, nd: 1.5, d: 3 },
        { R: 12, sd: 14, nd: 1.0, d: 0.3 }, // rear curves forward (positive sag), air gap
        { R: 40, sd: 14, nd: 1.7, d: 4 }, // next element front (may also curve forward)
        { R: 1e15, sd: 14, nd: 1.0, d: 50 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      gapSagFrac: 0.9,
      N: 4,
    } as unknown as RuntimeLens;
    const zPos = [0, 3, 3.3, 7.3];
    const shapes = computeElementShapes(L, zPos, sx, sy);
    expect(shapes).toHaveLength(2);
    for (const shape of shapes) {
      expect(shape.d).toMatch(/^M.*Z$/);
    }
  });

  it("no trim when gapSagFrac is 0", () => {
    /* Same geometry as rear trim test but gapSagFrac=0 disables trimming */
    const L = {
      ES: [
        [0, 0, 1],
        [1, 2, 3],
      ],
      S: [
        { R: 1e15, sd: 14, nd: 1.5, d: 3 },
        { R: 12, sd: 14, nd: 1.0, d: 0.3 },
        { R: 40, sd: 14, nd: 1.7, d: 4 },
        { R: 1e15, sd: 14, nd: 1.0, d: 50 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      gapSagFrac: 0,
      N: 4,
    } as unknown as RuntimeLens;
    const zPos = [0, 3, 3.3, 7.3];
    const shapes = computeElementShapes(L, zPos, sx, sy);
    expect(shapes).toHaveLength(2);
    for (const shape of shapes) {
      expect(shape.d).toMatch(/^M.*Z$/);
    }
  });
});
