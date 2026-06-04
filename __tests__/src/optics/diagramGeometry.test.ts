import { describe, it, expect } from "vitest";
import {
  createCoordinateTransforms,
  computeElementRenderDiagnostics,
  computeElementShapes,
} from "../../../src/optics/diagramGeometry.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, SVG_PATH_SUBDIVISIONS } from "../../../src/optics/optics.js";
import type { RuntimeLens, AsphericCoefficients, ElementSpan, SurfaceData } from "../../../src/types/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

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

  it("reduces scale when a requested z extent would otherwise exceed the viewport", () => {
    const unbounded = createCoordinateTransforms(base);
    const bounded = createCoordinateTransforms({ ...base, zExtent: { min: -300, max: 140 } });

    expect(bounded.effectiveSC).toBeLessThan(unbounded.effectiveSC);
    expect(bounded.sx(-300)).toBeGreaterThanOrEqual(37.9);
    expect(bounded.sx(140)).toBeLessThanOrEqual(800 - 37.9);
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
  const maxRimTan = 0.9 / Math.sqrt(1 - 0.9 ** 2);

  type DiagramSurfaceFixture = Omit<SurfaceData, "elemId"> & Partial<Pick<SurfaceData, "elemId">>;

  interface DiagramLensFixture extends Partial<Omit<RuntimeLens, "S" | "ES" | "asphByIdx">> {
    S: DiagramSurfaceFixture[];
    ES: ElementSpan[];
    asphByIdx?: Record<number, AsphericCoefficients | null>;
    maxRimSin?: number;
    maxRimTan?: number;
    gapSagFrac?: number;
    N?: number;
    stopIdx?: number;
    stopPhysSD?: number;
  }

  function pathCoords(pathD: string): [number, number][] {
    return [...pathD.matchAll(/[ML]([\d.e+-]+),([\d.e+-]+)/g)].map((match) => [Number(match[1]), Number(match[2])]);
  }

  function hydrateDiagramLens(partial: DiagramLensFixture): RuntimeLens {
    const surfaces = partial.S.map((surface, index) => {
      const span = partial.ES.find(([, s1, s2]) => index >= s1 && index <= s2);
      return {
        label: surface.label ?? `${index + 1}`,
        R: surface.R,
        d: surface.d,
        nd: surface.nd,
        sd: surface.sd,
        innerSd: surface.innerSd,
        elemId: surface.elemId ?? span?.[0] ?? 0,
        stopPlacement: surface.stopPlacement,
        interaction: surface.interaction,
      } satisfies SurfaceData;
    });
    const asph: Record<string, AsphericCoefficients> = {};
    const asphByIdx: Record<number, AsphericCoefficients> = {};
    for (const [indexText, coefficients] of Object.entries(partial.asphByIdx ?? {})) {
      if (coefficients === null) continue;
      const index = Number(indexText);
      asph[surfaces[index].label] = coefficients;
      asphByIdx[index] = coefficients;
    }
    const elements = partial.ES.map(([eid, s1, s2]: ElementSpan) => ({
      id: eid,
      name: `Element ${eid}`,
      label: `E${eid}`,
      type: "fixture",
      nd: surfaces[s1].nd,
      fromSurface: surfaces[s1].label,
      toSurface: surfaces[s2].label,
    }));
    const imageZ = surfaces.reduce((sum, surface) => sum + surface.d, 0);
    return {
      ...partial,
      data: {
        key: "diagram-geometry-fixture",
        name: "Diagram geometry fixture",
        closeFocusM: 0.5,
        focusStep: 0.004,
        maxFstop: 16,
        apertureStep: 0.004,
        fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
        elements,
        surfaces,
        asph,
        svgW: 800,
        svgH: 400,
        scFill: 0.55,
        yScFill: 0.55,
        clipMargin: 1,
        maxRimAngleDeg: 64,
        gapSagFrac: partial.gapSagFrac ?? 0.9,
        maxAspectRatio: 1.6,
        rayFractions: [-0.5, 0, 0.5],
        rayLeadFrac: 0.35,
        offAxisFieldFrac: 0.6,
        offAxisFractions: [-0.5, 0, 0.5],
        nominalFno: 2,
      },
      S: surfaces,
      N: partial.N ?? surfaces.length,
      ES: partial.ES,
      elements,
      asphByIdx,
      varByIdx: partial.varByIdx ?? {},
      vdByIdx: partial.vdByIdx ?? {},
      spectralByIdx: partial.spectralByIdx ?? {},
      indexByIdx: partial.indexByIdx ?? {},
      varLabels: partial.varLabels ?? [],
      groups: partial.groups ?? [],
      doublets: partial.doublets ?? [],
      perspectiveControl: partial.perspectiveControl ?? null,
      aberrationControl: partial.aberrationControl ?? null,
      projection: partial.projection ?? { kind: "rectilinear" },
      opticalPath: partial.opticalPath ?? {
        mode: "sequential",
        surfaceOrder: null,
        surfaceLabels: null,
        maxInteractions: surfaces.length + 1,
      },
      imagePlane: partial.imagePlane ?? { z: imageZ, y: 0, normal: { z: 1, y: 0 }, label: "IMG" },
      isFoldedOptics: partial.isFoldedOptics ?? false,
      stopIdx: partial.stopIdx ?? 0,
      stopPhysSD: partial.stopPhysSD ?? surfaces[partial.stopIdx ?? 0]?.sd ?? 1,
      isZoom: partial.isZoom ?? false,
      zoomPositions: partial.zoomPositions ?? null,
      zoomLabels: partial.zoomLabels ?? null,
      zoomStep: partial.zoomStep ?? 0.01,
      rayFractions: partial.rayFractions ?? [-0.5, 0, 0.5],
      offAxisFractions: partial.offAxisFractions ?? [-0.5, 0, 0.5],
      offAxisFieldFrac: partial.offAxisFieldFrac ?? 0.6,
      svgW: 800,
      svgH: 400,
      scFill: 0.55,
      yScFill: 0.55,
      clipMargin: 1,
      maxRimTan: partial.maxRimTan ?? maxRimTan,
      gapSagFrac: partial.gapSagFrac ?? 0.9,
      maxAspectRatio: 1.6,
      lensShiftFrac: 0,
      rayLeadFrac: 0.35,
    } as RuntimeLens;
  }

  /**
   * Minimal lens-like object builder.
   * computeElementShapes accesses: L.ES, L.S[].sd, L.S[].R, L.S[].nd, L.S[].d,
   * L.asphByIdx, L.maxRimSin, L.gapSagFrac, L.N
   */
  function makeSingleElementLens({
    R1 = 50,
    R2 = 1e15,
    sd = 15,
    sd1,
    sd2,
    nd = 1.5,
    asph1 = null as AsphericCoefficients | null,
    asph2 = null as AsphericCoefficients | null,
  }: {
    R1?: number;
    R2?: number;
    sd?: number;
    sd1?: number;
    sd2?: number;
    nd?: number;
    asph1?: AsphericCoefficients | null;
    asph2?: AsphericCoefficients | null;
  } = {}): RuntimeLens {
    const frontSD = sd1 ?? sd;
    const rearSD = sd2 ?? sd;
    return hydrateDiagramLens({
      ES: [[0, 0, 1]],
      S: [
        { label: "1", R: R1, sd: frontSD, nd, d: 5, elemId: 0 },
        { label: "2", R: R2, sd: rearSD, nd: 1.0, d: 10, elemId: 0 },
      ],
      asphByIdx: { 0: asph1, 1: asph2 },
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0.9,
      N: 2,
    });
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
    expect(shapes[0].surfaceAccentPaths).toEqual([]);
  });

  it("zero point transform preserves element shape coordinates", () => {
    const L = makeSingleElementLens({ R1: 50, R2: 1e15 });
    const zPos = [0, 5];
    const unmoved = computeElementShapes(L, zPos, sx, sy);
    const movedIdentity = computeElementShapes(L, zPos, sx, sy, (z, y) => [z, y]);

    expect(movedIdentity[0].d).toBe(unmoved[0].d);
  });

  it("non-zero point transform changes rendered element coordinates", () => {
    const L = makeSingleElementLens({ R1: 1e15, R2: 1e15 });
    const zPos = [0, 5];
    const unmoved = pathCoords(computeElementShapes(L, zPos, sx, sy)[0].d);
    const shifted = pathCoords(computeElementShapes(L, zPos, sx, sy, (z, y) => [z, y + 5])[0].d);

    expect(shifted[0][0]).toBeCloseTo(unmoved[0][0]);
    expect(shifted[0][1]).toBeCloseTo(unmoved[0][1] + 5);
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
    const L = hydrateDiagramLens({
      ES: [
        [0, 0, 1],
        [1, 2, 3],
        [2, 4, 5],
      ],
      S: [
        { label: "1", R: 50, sd: 15, nd: 1.5, d: 3 },
        { label: "2", R: -80, sd: 15, nd: 1.0, d: 2 },
        { label: "3", R: 30, sd: 12, nd: 1.7, d: 4 },
        { label: "4", R: -40, sd: 12, nd: 1.0, d: 2 },
        { label: "5", R: 60, sd: 10, nd: 1.5, d: 3 },
        { label: "6", R: 1e15, sd: 10, nd: 1.0, d: 50 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0.9,
      N: 6,
    });
    const zPos = [0, 3, 5, 9, 11, 14];
    const shapes = computeElementShapes(L, zPos, sx, sy);

    expect(shapes).toHaveLength(3);
    expect(shapes[0].eid).toBe(0);
    expect(shapes[1].eid).toBe(1);
    expect(shapes[2].eid).toBe(2);
  });

  it("uses explicit span endpoints when a stop sits inside an element", () => {
    const L = hydrateDiagramLens({
      ES: [[1, 0, 2]],
      S: [
        { label: "1", R: 80, sd: 8, nd: 1.5, d: 4 },
        { label: "STO", R: 1e15, sd: 3, nd: 1.5, d: 4, elemId: 1, stopPlacement: "inside-element" },
        { label: "2", R: -80, sd: 8, nd: 1.0, d: 40 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0.9,
      N: 3,
    });
    const zPos = [0, 4, 8];
    const diagnostics = computeElementRenderDiagnostics(L, zPos);
    const shapes = computeElementShapes(L, zPos, sx, sy);

    expect(diagnostics[0].front.surfaceLabel).toBe("1");
    expect(diagnostics[0].rear.surfaceLabel).toBe("2");
    expect(shapes).toHaveLength(1);
    expect(shapes[0].z1).toBe(0);
    expect(shapes[0].z2).toBe(8);
  });

  it("gap trimming: rear surface with positive sag into narrow gap", () => {
    // Element 0: front flat, rear with R=15 (positive sag curves forward)
    // Element 1: front flat, rear flat
    // Gap between them is only 0.5mm — should trigger rear trim on element 0
    const L = hydrateDiagramLens({
      ES: [
        [0, 0, 1],
        [1, 2, 3],
      ],
      S: [
        { label: "1", R: 1e15, sd: 12, nd: 1.5, d: 3 },
        { label: "2", R: 15, sd: 12, nd: 1.0, d: 0.5 }, // tight gap, positive-sag rear
        { label: "3", R: 1e15, sd: 12, nd: 1.5, d: 3 },
        { label: "4", R: 1e15, sd: 12, nd: 1.0, d: 50 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0.9,
      N: 4,
    });
    const zPos = [0, 3, 3.5, 6.5];
    const shapes = computeElementShapes(L, zPos, sx, sy);
    expect(shapes).toHaveLength(2);
    // The shapes should compute without error — trimming handles the tight gap
    expect(shapes[0].d).toMatch(/^M.*Z$/);
  });

  it("gap trimming: front surface with negative sag into narrow preceding gap", () => {
    // Element 0: flat front, flat rear, followed by narrow gap
    // Element 1: front with R=-15 (negative sag curves backward into gap), flat rear
    const L = hydrateDiagramLens({
      ES: [
        [0, 0, 1],
        [1, 2, 3],
      ],
      S: [
        { label: "1", R: 1e15, sd: 12, nd: 1.5, d: 3 },
        { label: "2", R: 1e15, sd: 12, nd: 1.0, d: 0.5 }, // tight gap
        { label: "3", R: -15, sd: 12, nd: 1.5, d: 3 }, // negative-sag front
        { label: "4", R: 1e15, sd: 12, nd: 1.0, d: 50 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0.9,
      N: 4,
    });
    const zPos = [0, 3, 3.5, 6.5];
    const shapes = computeElementShapes(L, zPos, sx, sy);
    expect(shapes).toHaveLength(2);
    expect(shapes[1].d).toMatch(/^M.*Z$/);
  });

  it("front trim with prevES: backward-curving front sag accounts for previous element", () => {
    /* Three elements: E0 → air gap → E1 (front curves backward) → air gap → E2
     * E1's front surface has negative renderSag, and a prevES exists (E0).
     * This exercises the prevES branch at lines 104-117 of diagramGeometry.ts. */
    const L = hydrateDiagramLens({
      ES: [
        [0, 0, 1],
        [1, 2, 3],
        [2, 4, 5],
      ],
      S: [
        { label: "1", R: 50, sd: 12, nd: 1.5, d: 3 },
        { label: "2", R: -50, sd: 12, nd: 1.0, d: 0.3 }, // narrow gap, air after rear
        { label: "3", R: -12, sd: 12, nd: 1.7, d: 4 }, // front with negative sag (curves backward)
        { label: "4", R: -40, sd: 12, nd: 1.0, d: 2 },
        { label: "5", R: 60, sd: 10, nd: 1.5, d: 3 },
        { label: "6", R: 1e15, sd: 10, nd: 1.0, d: 50 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0.9,
      N: 6,
    });
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
    const L = hydrateDiagramLens({
      ES: [
        [0, 0, 1],
        [1, 2, 3],
      ],
      S: [
        { label: "1", R: 1e15, sd: 14, nd: 1.5, d: 3 },
        { label: "2", R: 12, sd: 14, nd: 1.0, d: 0.3 }, // rear curves forward (positive sag), air gap
        { label: "3", R: 40, sd: 14, nd: 1.7, d: 4 }, // next element front (may also curve forward)
        { label: "4", R: 1e15, sd: 14, nd: 1.0, d: 50 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0.9,
      N: 4,
    });
    const zPos = [0, 3, 3.3, 7.3];
    const shapes = computeElementShapes(L, zPos, sx, sy);
    expect(shapes).toHaveLength(2);
    for (const shape of shapes) {
      expect(shape.d).toMatch(/^M.*Z$/);
    }
  });

  it("no trim when gapSagFrac is 0", () => {
    /* Same geometry as rear trim test but gapSagFrac=0 disables trimming */
    const L = hydrateDiagramLens({
      ES: [
        [0, 0, 1],
        [1, 2, 3],
      ],
      S: [
        { label: "1", R: 1e15, sd: 14, nd: 1.5, d: 3 },
        { label: "2", R: 12, sd: 14, nd: 1.0, d: 0.3 },
        { label: "3", R: 40, sd: 14, nd: 1.7, d: 4 },
        { label: "4", R: 1e15, sd: 14, nd: 1.0, d: 50 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0,
      N: 4,
    });
    const zPos = [0, 3, 3.3, 7.3];
    const shapes = computeElementShapes(L, zPos, sx, sy);
    expect(shapes).toHaveLength(2);
    for (const shape of shapes) {
      expect(shape.d).toMatch(/^M.*Z$/);
    }
  });

  it("samples slope-trimmed surfaces only to the diagnostic render SD", () => {
    const L = {
      ...makeSingleElementLens({ R1: 32.975, sd1: 24, R2: 84.15, sd2: 20 }),
      maxRimTan: 0.95,
    } as RuntimeLens;
    const zPos = [0, 8.01];
    const diagnostics = computeElementRenderDiagnostics(L, zPos);
    const shape = computeElementShapes(L, zPos, sx, sy)[0];
    const coords = pathCoords(shape.d);
    const frontCoords = coords.slice(0, SVG_PATH_SUBDIVISIONS + 1);

    expect(diagnostics[0].front.trimCause).toBe("slope");
    expect(diagnostics[0].front.renderSD).toBeLessThan(24);
    expect(Math.max(...frontCoords.map(([, y]) => Math.abs(y)))).toBeCloseTo(diagnostics[0].front.renderSD);
  });

  it("samples gap-trimmed surfaces only to the diagnostic render SD", () => {
    const L = hydrateDiagramLens({
      ES: [
        [1, 0, 1],
        [2, 2, 3],
      ],
      S: [
        { label: "3", R: 27.334, d: 4.319, nd: 1.788, elemId: 1, sd: 21 },
        { label: "4", R: 42.617, d: 0.2, nd: 1.0, elemId: 0, sd: 18.8 },
        { label: "5", R: 84.266, d: 2.228, nd: 1.6668, elemId: 2, sd: 17.5 },
        { label: "6", R: 17.725, d: 7.797, nd: 1.0, elemId: 0, sd: 15.9 },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0.9,
      N: 4,
    });
    const zPos = [0, 4.319, 4.519, 6.747];
    const diagnostics = computeElementRenderDiagnostics(L, zPos);
    const shape = computeElementShapes(L, zPos, sx, sy)[0];
    const coords = pathCoords(shape.d);
    const rearCoords = coords.slice(SVG_PATH_SUBDIVISIONS + 1);

    expect(diagnostics[0].rear.trimCause).toBe("gap");
    expect(diagnostics[0].rear.renderSD).toBeLessThan(18.8);
    expect(Math.max(...rearCoords.map(([, y]) => Math.abs(y)))).toBeCloseTo(diagnostics[0].rear.renderSD);
  });

  it("does not gap-trim a nested corrector that sits inside an annular mirror opening", () => {
    const L = hydrateDiagramLens({
      ES: [
        [1, 2, 4],
        [2, 0, 1],
      ],
      S: [
        { label: "L2F", R: 1e15, d: 3, nd: 1.5, elemId: 2, sd: 8 },
        { label: "L2R", R: 12, d: 0.3, nd: 1.0, elemId: 0, sd: 8 },
        { label: "M1F", R: 1e15, d: 1, nd: 1.5, elemId: 1, sd: 20, innerSd: 10 },
        { label: "BYPASS", R: 1e15, d: 1, nd: 1.0, elemId: 1, sd: 8 },
        {
          label: "M1R",
          R: 1e15,
          d: 40,
          nd: 1.0,
          elemId: 0,
          sd: 20,
          innerSd: 10,
          interaction: { type: "reflect", incidentSide: "front", mirrorKind: "second-surface" },
        },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0.9,
      N: 5,
    });
    const zPos = [0, 3, 3.3, 4.3, 5.3];
    const diagnostics = computeElementRenderDiagnostics(L, zPos);
    const nested = diagnostics.find((diagnostic) => diagnostic.eid === 2);

    expect(nested?.rear.trimCause).toBe("none");
    expect(nested?.rear.renderSD).toBeCloseTo(8);
  });

  it("does not front-gap-trim a nested corrector past an intervening annular mirror opening", () => {
    const L = hydrateDiagramLens({
      ES: [
        [1, 0, 1],
        [2, 2, 5],
        [3, 3, 4],
      ],
      S: [
        { label: "L1F", R: 1e15, d: 1, nd: 1.5, elemId: 1, sd: 8 },
        { label: "L1R", R: 12, d: 6, nd: 1.0, elemId: 0, sd: 8 },
        { label: "M1F", R: 1e15, d: 0.5, nd: 1.5, elemId: 2, sd: 20, innerSd: 10 },
        { label: "L2F", R: -12, d: 1, nd: 1.5, elemId: 3, sd: 8 },
        { label: "L2R", R: 1e15, d: 0.5, nd: 1.0, elemId: 0, sd: 8 },
        {
          label: "M1R",
          R: 1e15,
          d: 40,
          nd: 1.0,
          elemId: 0,
          sd: 20,
          innerSd: 10,
          interaction: { type: "reflect", incidentSide: "front", mirrorKind: "second-surface" },
        },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0.9,
      N: 6,
    });
    const zPos = [0, 1, 7, 7.5, 8.5, 9];
    const diagnostics = computeElementRenderDiagnostics(L, zPos);
    const nested = diagnostics.find((diagnostic) => diagnostic.eid === 3);

    expect(nested?.front.trimCause).toBe("none");
    expect(nested?.front.renderSD).toBeCloseTo(8);
  });

  it("still gap-trims the same neighboring surfaces when radial material overlaps", () => {
    const L = hydrateDiagramLens({
      ES: [
        [1, 2, 4],
        [2, 0, 1],
      ],
      S: [
        { label: "L2F", R: 1e15, d: 3, nd: 1.5, elemId: 2, sd: 8 },
        { label: "L2R", R: 12, d: 0.3, nd: 1.0, elemId: 0, sd: 8 },
        { label: "M1F", R: 1e15, d: 1, nd: 1.5, elemId: 1, sd: 20 },
        { label: "BYPASS", R: 1e15, d: 1, nd: 1.0, elemId: 1, sd: 8 },
        {
          label: "M1R",
          R: 1e15,
          d: 40,
          nd: 1.0,
          elemId: 0,
          sd: 20,
          interaction: { type: "reflect", incidentSide: "front", mirrorKind: "second-surface" },
        },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0.9,
      N: 5,
    });
    const zPos = [0, 3, 3.3, 4.3, 5.3];
    const diagnostics = computeElementRenderDiagnostics(L, zPos);
    const nested = diagnostics.find((diagnostic) => diagnostic.eid === 2);

    expect(nested?.rear.trimCause).toBe("gap");
    expect(nested?.rear.renderSD).toBeLessThan(8);
  });

  it("renders asymmetric front/rear SDs as clean connector edges", () => {
    const L = makeSingleElementLens({ R1: 80, R2: -120, sd1: 18, sd2: 12 });
    const zPos = [0, 5];
    const shape = computeElementShapes(L, zPos, sx, sy)[0];
    const coords = pathCoords(shape.d);
    const frontTop = coords[0];
    const rearTop = coords[coords.length - 1];
    const frontBottom = coords[SVG_PATH_SUBDIVISIONS];
    const rearBottom = coords[SVG_PATH_SUBDIVISIONS + 1];

    expect(frontTop[1]).toBeCloseTo(-18);
    expect(rearTop[1]).toBeCloseTo(-12);
    expect(frontBottom[1]).toBeCloseTo(18);
    expect(rearBottom[1]).toBeCloseTo(12);
  });

  it("renders a tilted fold mirror and its passive backing plane with matching meridional normals", () => {
    const L = buildLens(LENS_CATALOG["reference-newtonian-side-focus"]);
    const layout = doLayout(0, 0, L);
    const shapes = computeElementShapes(L, layout.z, sx, sy);
    const secondaryShape = shapes.find((shape) => shape.eid === 2);
    const coords = pathCoords(secondaryShape?.d ?? "");
    const frontTop = coords[0];
    const frontBottom = coords[SVG_PATH_SUBDIVISIONS];
    const rearBottom = coords[SVG_PATH_SUBDIVISIONS + 1];
    const rearTop = coords[coords.length - 1];

    expect(secondaryShape).toBeDefined();
    expect(frontTop[1]).toBeCloseTo(-10, 10);
    expect(frontTop[0]).toBeCloseTo(layout.z[L.labelIdx.SEC] + 10, 10);
    expect(frontBottom[1]).toBeCloseTo(10, 10);
    expect(frontBottom[0]).toBeCloseTo(layout.z[L.labelIdx.SEC] - 10, 10);
    expect(rearTop[1]).toBeCloseTo(-10, 10);
    expect(rearTop[0]).toBeCloseTo(layout.z[L.labelIdx.SECB] + 10, 10);
    expect(rearBottom[1]).toBeCloseTo(10, 10);
    expect(rearBottom[0]).toBeCloseTo(layout.z[L.labelIdx.SECB] - 10, 10);
  });

  it("emits a coating accent path for second-surface mirror fixtures", () => {
    const L = buildLens(LENS_CATALOG["reference-mangin-second-surface-mirror"]);
    const layout = doLayout(0, 0, L);
    const shapes = computeElementShapes(L, layout.z, sx, sy);
    const manginShape = shapes.find((shape) => shape.eid === 1);
    const coating = manginShape?.surfaceAccentPaths.find(
      (path) => path.kind === "second-surface-coating" && path.surfIdx === L.labelIdx.MG2,
    );

    expect(coating).toBeDefined();
    expect(coating?.pathD).toMatch(/^M/);
    expect(pathCoords(coating?.pathD ?? "")).toHaveLength(SVG_PATH_SUBDIVISIONS + 1);
    expect(Number.isFinite(coating?.labelX)).toBe(true);
    expect(Number.isFinite(coating?.labelY)).toBe(true);
  });

  it("splits annular second-surface coating accents around the clear central opening", () => {
    const L = hydrateDiagramLens({
      ES: [[1, 0, 1]],
      S: [
        { label: "M1F", R: 1e15, d: 5, nd: 1.5, elemId: 1, sd: 20, innerSd: 8 },
        {
          label: "M1R",
          R: 1e15,
          d: 40,
          nd: 1.0,
          elemId: 0,
          sd: 20,
          innerSd: 8,
          interaction: { type: "reflect", incidentSide: "front", mirrorKind: "second-surface" },
        },
      ],
      asphByIdx: {},
      maxRimSin: 0.95,
      maxRimTan,
      gapSagFrac: 0.9,
      N: 2,
    });
    const shape = computeElementShapes(L, [0, 5], sx, sy)[0];
    const coating = shape.surfaceAccentPaths[0];
    const coords = pathCoords(coating.pathD);

    /* Silvering is present only in the annular glass band, so the SVG accent must not cross |y| < innerSd. */
    expect(coating.pathD.match(/M/g)).toHaveLength(2);
    expect(coords.every(([, y]) => Math.abs(y) >= 8 - 1e-9)).toBe(true);
  });
});
