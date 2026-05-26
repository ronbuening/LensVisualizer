import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import {
  computeElementRenderDiagnostics,
  computeElementShapes,
  createCoordinateTransforms,
} from "../../../src/optics/diagramGeometry.js";
import { doLayout } from "../../../src/optics/optics.js";
import {
  computeElementRenderDiagnostics2,
  computeElementShapes2,
  createCoordinateTransforms2,
} from "../../../src/optics-2/compat.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

const sx = (z: number): number => z;
const sy = (y: number): number => y;

describe("Optics 2 diagram geometry parity", () => {
  it("matches coordinate transform output", () => {
    const params = {
      svgW: 800,
      svgH: 400,
      SC: 2,
      YSC: 3,
      lensShiftFrac: 0.08,
      imgMM: 100,
      scaleRatio: 0.75,
      zExtent: { min: -25, max: 140 },
    };
    const legacy = createCoordinateTransforms(params);
    const next = createCoordinateTransforms2(params);

    expect(next.sx(0)).toBeCloseTo(legacy.sx(0), 12);
    expect(next.sx(100)).toBeCloseTo(legacy.sx(100), 12);
    expect(next.sy(12)).toBeCloseTo(legacy.sy(12), 12);
    expect(next.clampedRayEnd(0, 0, 100, 100)).toEqual(legacy.clampedRayEnd(0, 0, 100, 100));
    expect(next.effectiveSC).toBeCloseTo(legacy.effectiveSC, 12);
  });

  it("matches ordinary, aspheric, annular, and tilted-mirror element shapes", () => {
    const keys = [
      "nikkor-z-50f18s",
      "sony-fe-14mm-f18-gm",
      "reference-annular-obscured-mirror",
      "reference-newtonian-side-focus",
      "reference-mangin-second-surface-mirror",
    ];

    for (const key of keys) {
      const lens = buildLens(LENS_CATALOG[key]);
      const layout = doLayout(0, lens.isZoom ? 0.5 : 0, lens);
      const legacyShapes = computeElementShapes(lens, layout.z, sx, sy);
      const nextShapes = computeElementShapes2(lens, layout.z, sx, sy);
      const legacyDiagnostics = computeElementRenderDiagnostics(lens, layout.z);
      const nextDiagnostics = computeElementRenderDiagnostics2(lens, layout.z);

      expect(nextDiagnostics, `${key} diagnostics`).toEqual(legacyDiagnostics);
      expect(nextShapes, `${key} shapes`).toEqual(legacyShapes);
    }
  });
});
