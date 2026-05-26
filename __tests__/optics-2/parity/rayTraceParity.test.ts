import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import {
  doLayout,
  epAtZoom,
  fopenAtZoom,
  traceRay,
  traceRayChromatic,
  traceSkewRay,
} from "../../../src/optics/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import type { RuntimeLens } from "../../../src/types/optics.js";

function apertureAt(
  lens: RuntimeLens,
  zoomT: number,
  apertureT: number,
): { currentEPSD: number; currentPhysStopSD: number } {
  const currentFopen = fopenAtZoom(zoomT, lens);
  const rawFNumber = lens.FOPEN * Math.pow(lens.maxFstop / lens.FOPEN, apertureT);
  const fNumber = Math.max(rawFNumber, currentFopen);
  return {
    currentPhysStopSD: (lens.stopPhysSD * lens.FOPEN) / fNumber,
    currentEPSD: (epAtZoom(zoomT, lens) * lens.FOPEN) / fNumber,
  };
}

function expectTraceShape(trace: { y: number; clipped: boolean }, label: string): void {
  expect(Number.isFinite(trace.y) || trace.clipped, label).toBe(true);
}

describe("Optics 2 ray-trace parity scaffold", () => {
  it("captures current on-axis, skew, and chromatic trace output shapes", () => {
    for (const key of ["nikkor-z-50f18s", "canon-ef-8-15mm-f4l-fisheye-usm", "nikon-fisheye-nikkor-6mm-f28"]) {
      const lens = buildLens(LENS_CATALOG[key]);
      const focusT = 0;
      const zoomT = lens.isZoom ? 0.5 : 0;
      const { z: zPos } = doLayout(focusT, zoomT, lens);
      const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT, 0);
      const rayHeight = currentEPSD * 0.25;

      const axial = traceRay(rayHeight, 0, zPos, focusT, zoomT, currentPhysStopSD, false, lens);
      expect(axial.pts.length, `${key} axial pts`).toBeGreaterThan(1);
      expectTraceShape(axial, `${key} axial trace`);

      const skew = traceSkewRay(0.1, rayHeight, 0.001, 0, focusT, zoomT, currentPhysStopSD, false, lens);
      expect(Number.isFinite(skew.y) || skew.clipped, `${key} skew trace`).toBe(true);

      const red = traceRayChromatic(rayHeight, 0, zPos, focusT, zoomT, currentPhysStopSD, false, lens, "R");
      const blue = traceRayChromatic(rayHeight, 0, zPos, focusT, zoomT, currentPhysStopSD, false, lens, "B");
      expectTraceShape(red, `${key} red trace`);
      expectTraceShape(blue, `${key} blue trace`);
    }
  });

  it.skip("compares traceRay against missing traceRay2 from src/optics-2/trace", () => {});

  it.skip("compares traceSkewRay against missing traceSkewRay2 from src/optics-2/trace", () => {});

  it.skip("compares traceRayChromatic against missing traceRayChromatic2 from src/optics-2/chromaticTrace", () => {});

  it.skip("compares solveChiefRay launch status against missing solveChiefRay2 from src/optics-2/fieldGeometry", () => {});
});
