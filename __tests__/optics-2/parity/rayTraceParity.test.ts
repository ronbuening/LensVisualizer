import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import {
  doLayout,
  epAtZoom,
  fopenAtZoom,
  solveChiefRay,
  traceRay,
  traceRayChromatic,
  traceSkewRay,
} from "../../../src/optics/optics.js";
import { solveChiefRay2, traceRay2, traceRayChromatic2, traceSkewRay2 } from "../../../src/optics-2/compat.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import type { RuntimeLens } from "../../../src/types/optics.js";
import { OPTICS_2_PARITY_TOLERANCES } from "./tolerances.js";

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

function expectCloseOrBothNonFinite(actual: number, expected: number, tolerance: number, label: string): void {
  if (!Number.isFinite(actual) || !Number.isFinite(expected)) {
    expect(Number.isFinite(actual), label).toBe(Number.isFinite(expected));
    return;
  }
  expect(Math.abs(actual - expected), label).toBeLessThanOrEqual(tolerance);
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

  it("compares traceRay against traceRay2 from src/optics-2/trace", () => {
    for (const key of ["nikkor-z-50f18s", "canon-ef-8-15mm-f4l-fisheye-usm", "nikon-fisheye-nikkor-6mm-f28"]) {
      const lens = buildLens(LENS_CATALOG[key]);
      const focusT = 0;
      const zoomT = lens.isZoom ? 0.5 : 0;
      const { z: zPos } = doLayout(focusT, zoomT, lens);
      const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT, 0);
      const rayHeight = currentEPSD * 0.25;

      const legacy = traceRay(rayHeight, 0, zPos, focusT, zoomT, currentPhysStopSD, false, lens);
      const next = traceRay2(rayHeight, 0, zPos, focusT, zoomT, currentPhysStopSD, false, lens);

      expect(next.clipped, `${key} clipped`).toBe(legacy.clipped);
      expect(next.pts.length, `${key} point count`).toBe(legacy.pts.length);
      expectCloseOrBothNonFinite(next.y, legacy.y, OPTICS_2_PARITY_TOLERANCES.ray.imageHeight.abs, `${key} y`);
      expectCloseOrBothNonFinite(next.u, legacy.u, OPTICS_2_PARITY_TOLERANCES.ray.directionSlope.abs, `${key} u`);
      for (let i = 0; i < Math.min(next.pts.length, legacy.pts.length); i++) {
        expectCloseOrBothNonFinite(
          next.pts[i][0],
          legacy.pts[i][0],
          OPTICS_2_PARITY_TOLERANCES.ray.point.abs,
          `${key} pts[${i}].z`,
        );
        expectCloseOrBothNonFinite(
          next.pts[i][1],
          legacy.pts[i][1],
          OPTICS_2_PARITY_TOLERANCES.ray.point.abs,
          `${key} pts[${i}].y`,
        );
      }
    }
  });

  it("compares traceSkewRay against traceSkewRay2 from src/optics-2/trace", () => {
    for (const key of ["nikkor-z-50f18s", "canon-ef-8-15mm-f4l-fisheye-usm"]) {
      const lens = buildLens(LENS_CATALOG[key]);
      const focusT = 0;
      const zoomT = lens.isZoom ? 0.5 : 0;
      const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT, 0);
      const rayHeight = currentEPSD * 0.25;

      const legacy = traceSkewRay(0.1, rayHeight, 0.001, 0, focusT, zoomT, currentPhysStopSD, false, lens);
      const next = traceSkewRay2(0.1, rayHeight, 0.001, 0, focusT, zoomT, currentPhysStopSD, false, lens);

      expect(next.clipped, `${key} clipped`).toBe(legacy.clipped);
      expectCloseOrBothNonFinite(next.x, legacy.x, OPTICS_2_PARITY_TOLERANCES.ray.imageHeight.abs, `${key} x`);
      expectCloseOrBothNonFinite(next.y, legacy.y, OPTICS_2_PARITY_TOLERANCES.ray.imageHeight.abs, `${key} y`);
      expectCloseOrBothNonFinite(next.ux, legacy.ux, OPTICS_2_PARITY_TOLERANCES.ray.directionSlope.abs, `${key} ux`);
      expectCloseOrBothNonFinite(next.uy, legacy.uy, OPTICS_2_PARITY_TOLERANCES.ray.directionSlope.abs, `${key} uy`);
    }
  });

  it("compares traceRayChromatic against traceRayChromatic2 through optics-2 dispersion descriptors", () => {
    for (const key of ["nikkor-z-50f18s", "canon-ef-8-15mm-f4l-fisheye-usm"]) {
      const lens = buildLens(LENS_CATALOG[key]);
      const focusT = 0;
      const zoomT = lens.isZoom ? 0.5 : 0;
      const { z: zPos } = doLayout(focusT, zoomT, lens);
      const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT, 0);
      const rayHeight = currentEPSD * 0.25;

      for (const channel of ["R", "G", "B", "V"] as const) {
        const legacy = traceRayChromatic(rayHeight, 0, zPos, focusT, zoomT, currentPhysStopSD, false, lens, channel);
        const next = traceRayChromatic2(rayHeight, 0, zPos, focusT, zoomT, currentPhysStopSD, false, lens, channel);

        expect(next.clipped, `${key} ${channel} clipped`).toBe(legacy.clipped);
        expectCloseOrBothNonFinite(
          next.y,
          legacy.y,
          OPTICS_2_PARITY_TOLERANCES.ray.imageHeight.abs,
          `${key} ${channel} y`,
        );
        expectCloseOrBothNonFinite(
          next.u,
          legacy.u,
          OPTICS_2_PARITY_TOLERANCES.ray.directionSlope.abs,
          `${key} ${channel} u`,
        );
      }
    }
  });

  it("compares solveChiefRay launch status against solveChiefRay2 from src/optics-2/field", () => {
    for (const key of ["nikkor-z-50f18s", "nikon-fisheye-nikkor-6mm-f28", "zeiss-hologon-15f8"]) {
      const lens = buildLens(LENS_CATALOG[key]);
      const fieldAngles = key === "nikon-fisheye-nikkor-6mm-f28" ? [0.5, 10, 30, 100] : [0.5, 10, 30];
      for (const fieldAngleDeg of fieldAngles) {
        const legacy = solveChiefRay(fieldAngleDeg, 0, 0, lens);
        const next = solveChiefRay2(fieldAngleDeg, 0, 0, lens);

        expect(next.status, `${key} ${fieldAngleDeg} status`).toBe(legacy.status);
        expect(next.launchSurface, `${key} ${fieldAngleDeg} launch`).toBe(legacy.launchSurface);
        expect(Boolean(next.vectorLaunch), `${key} ${fieldAngleDeg} vector launch`).toBe(Boolean(legacy.vectorLaunch));
        expectCloseOrBothNonFinite(
          next.yLaunch,
          legacy.yLaunch,
          OPTICS_2_PARITY_TOLERANCES.ray.imageHeight.abs,
          `${key} ${fieldAngleDeg} yLaunch`,
        );
      }
    }
  });
});
