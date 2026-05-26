import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { indexAt, summarizeDispersionQuality } from "../../../src/optics/dispersion.js";
import { computeChromaticSpread, doLayout, traceRayChromatic, wavelengthNd } from "../../../src/optics/optics.js";
import {
  computeChromaticSpread2,
  indexAtRuntimeSurface2,
  summarizeDispersionQuality2,
  traceRayChromatic2,
  wavelengthNd2,
} from "../../../src/optics-2/compat.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import type { ChromaticChannel } from "../../../src/types/optics.js";
import { OPTICS_2_PARITY_TOLERANCES } from "./tolerances.js";

function expectClose(actual: number, expected: number, label: string): void {
  expect(Math.abs(actual - expected), label).toBeLessThanOrEqual(OPTICS_2_PARITY_TOLERANCES.ray.imageHeight.abs);
}

describe("Optics 2 chromatic parity", () => {
  it("matches legacy Abbe wavelength fallback", () => {
    for (const channel of ["R", "G", "B", "V"] as ChromaticChannel[]) {
      expect(wavelengthNd2(1.5168, 64.17, channel)).toBe(wavelengthNd(1.5168, 64.17, channel));
      expect(wavelengthNd2(1.5, undefined, channel)).toBe(wavelengthNd(1.5, undefined, channel));
      expect(wavelengthNd2(1, 64.17, channel)).toBe(1);
    }
  });

  it("matches per-surface index resolver and weakest-link quality", () => {
    for (const key of ["nikkor-z-50f18s", "pentax-645-a-45mm-f28", "sonnar-50f15"]) {
      const lens = buildLens(LENS_CATALOG[key]);
      expect(summarizeDispersionQuality2(lens), `${key} quality`).toBe(summarizeDispersionQuality(lens));
      for (let surfaceIndex = 0; surfaceIndex < lens.N; surfaceIndex++) {
        for (const channel of ["R", "G", "B", "V"] as ChromaticChannel[]) {
          expect(indexAtRuntimeSurface2(lens, surfaceIndex, channel), `${key} ${surfaceIndex} ${channel}`).toBe(
            indexAt(lens, surfaceIndex, channel),
          );
        }
      }
    }
  });

  it("matches chromatic trace and spread for representative lenses", () => {
    for (const key of ["nikkor-z-50f18s", "pentax-645-a-45mm-f28", "canon-ef-8-15mm-f4l-fisheye-usm"]) {
      const lens = buildLens(LENS_CATALOG[key]);
      const zoomT = lens.isZoom ? 0.5 : 0;
      const { z: zPos, imgZ } = doLayout(0, zoomT, lens);
      const rayHeight = lens.EP.epSD * 0.25;
      const legacyRays: Partial<Record<ChromaticChannel, { y: number; u: number; clipped: boolean }>> = {};
      const nextRays: Partial<Record<ChromaticChannel, { y: number; u: number; clipped: boolean }>> = {};

      for (const channel of ["R", "G", "B", "V"] as ChromaticChannel[]) {
        const legacy = traceRayChromatic(rayHeight, 0, zPos, 0, zoomT, lens.stopPhysSD, false, lens, channel);
        const next = traceRayChromatic2(rayHeight, 0, zPos, 0, zoomT, lens.stopPhysSD, false, lens, channel);
        expect(next.clipped, `${key} ${channel} clipped`).toBe(legacy.clipped);
        expectClose(next.y, legacy.y, `${key} ${channel} y`);
        expectClose(next.u, legacy.u, `${key} ${channel} u`);
        legacyRays[channel] = legacy;
        nextRays[channel] = next;
      }

      const legacySpread = computeChromaticSpread(legacyRays, imgZ, zPos[lens.N - 1]);
      const nextSpread = computeChromaticSpread2(nextRays, imgZ, zPos[lens.N - 1]);
      expectClose(nextSpread.lcaMm, legacySpread.lcaMm, `${key} lca`);
      expectClose(nextSpread.tcaMm, legacySpread.tcaMm, `${key} tca`);
      for (const channel of ["R", "G", "B", "V"] as ChromaticChannel[]) {
        expectClose(
          nextSpread.intercepts[channel] ?? 0,
          legacySpread.intercepts[channel] ?? 0,
          `${key} ${channel} intercept`,
        );
        expectClose(
          nextSpread.imgHeights[channel] ?? 0,
          legacySpread.imgHeights[channel] ?? 0,
          `${key} ${channel} image height`,
        );
      }
    }
  });
});
