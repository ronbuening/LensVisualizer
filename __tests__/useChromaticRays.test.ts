// @vitest-environment jsdom

import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useChromaticRays from "../src/components/hooks/useChromaticRays.js";
import buildLens from "../src/optics/buildLens.js";
import { doLayout, entrancePupilAtState, fopenAtZoom } from "../src/optics/optics.js";
import { createCoordinateTransforms } from "../src/optics/diagramGeometry.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import type { LensData, RuntimeLens } from "../src/types/optics.js";
import SonnarRaw from "../src/lens-data/ZeissSonnar50f15.data.js";

const Sonnar = { ...LENS_DEFAULTS, ...SonnarRaw } as LensData;

function buildTestFixture(focusT = 0, zoomT = 0) {
  const L = buildLens(Sonnar);
  const ref = doLayout(0, 0, L);
  const IMG_MM = ref.imgZ;
  const cur = doLayout(focusT, zoomT, L);
  const dz = IMG_MM - cur.imgZ;
  const zPos = cur.z.map((v) => v + dz);
  const { sx, sy, clampedRayEnd } = createCoordinateTransforms({
    svgW: L.svgW,
    svgH: L.svgH,
    SC: L.SC,
    YSC: L.YSC,
    lensShiftFrac: L.lensShiftFrac,
    imgMM: IMG_MM,
    scaleRatio: null,
  });
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const fNumber = currentFOPEN;
  const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
  const baseEPSD = entrancePupilAtState(L.stopPhysSD, focusT, zoomT, L).epSD;
  const currentEPSD = (baseEPSD * L.FOPEN) / fNumber;
  return { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD };
}

describe("useChromaticRays", () => {
  it("returns empty when showChromatic is false", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useChromaticRays({
        L,
        zPos,
        IMG_MM,
        focusT: 0,
        zoomT: 0,
        sx,
        sy,
        clampedRayEnd,
        currentPhysStopSD,
        currentEPSD,
        rayTracksF: false,
        focusK: 0,
        showChromatic: false,
        chromR: true,
        chromG: true,
        chromB: true,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.chromaticRays).toEqual([]);
    expect(result.current.chromSpread).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it("returns empty when L is undefined", () => {
    const { result } = renderHook(() =>
      useChromaticRays({
        L: undefined,
        zPos: [],
        IMG_MM: 0,
        focusT: 0,
        zoomT: 0,
        sx: (z) => z,
        sy: (y) => y,
        clampedRayEnd: () => [0, 0],
        currentPhysStopSD: 0,
        currentEPSD: 0,
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        chromR: true,
        chromG: true,
        chromB: true,
        lensKey: "none",
      }),
    );
    expect(result.current.chromaticRays).toEqual([]);
    expect(result.current.chromSpread).toBeNull();
  });

  it("returns empty when no channels enabled", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useChromaticRays({
        L,
        zPos,
        IMG_MM,
        focusT: 0,
        zoomT: 0,
        sx,
        sy,
        clampedRayEnd,
        currentPhysStopSD,
        currentEPSD,
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        chromR: false,
        chromG: false,
        chromB: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.chromaticRays).toEqual([]);
  });

  it("produces 3 fracs * 3 channels = 9 segments with all channels enabled", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useChromaticRays({
        L,
        zPos,
        IMG_MM,
        focusT: 0,
        zoomT: 0,
        sx,
        sy,
        clampedRayEnd,
        currentPhysStopSD,
        currentEPSD,
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        chromR: true,
        chromG: true,
        chromB: true,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.error).toBeNull();
    // CHROM_FRACS = [0, 0.75, -0.75] = 3 fractions × 3 channels = 9 segments
    expect(result.current.chromaticRays.length).toBe(9);
    // Each segment has channel property
    for (const seg of result.current.chromaticRays) {
      expect(["R", "G", "B"]).toContain(seg.channel);
      expect(Array.isArray(seg.sp)).toBe(true);
      expect(typeof seg.y).toBe("number");
      expect(typeof seg.u).toBe("number");
      expect(typeof seg.clipped).toBe("boolean");
    }
  });

  it("produces 3 fracs * 1 channel = 3 segments with single channel", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useChromaticRays({
        L,
        zPos,
        IMG_MM,
        focusT: 0,
        zoomT: 0,
        sx,
        sy,
        clampedRayEnd,
        currentPhysStopSD,
        currentEPSD,
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        chromR: true,
        chromG: false,
        chromB: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.chromaticRays.length).toBe(3);
    for (const seg of result.current.chromaticRays) {
      expect(seg.channel).toBe("R");
    }
  });

  it("computes chromSpread with 2+ channels", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useChromaticRays({
        L,
        zPos,
        IMG_MM,
        focusT: 0,
        zoomT: 0,
        sx,
        sy,
        clampedRayEnd,
        currentPhysStopSD,
        currentEPSD,
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        chromR: true,
        chromG: true,
        chromB: true,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.chromSpread).not.toBeNull();
    expect(typeof result.current.chromSpread!.lcaMm).toBe("number");
    expect(typeof result.current.chromSpread!.tcaMm).toBe("number");
  });

  it("returns null chromSpread with only 1 channel", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useChromaticRays({
        L,
        zPos,
        IMG_MM,
        focusT: 0,
        zoomT: 0,
        sx,
        sy,
        clampedRayEnd,
        currentPhysStopSD,
        currentEPSD,
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        chromR: false,
        chromG: true,
        chromB: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    // Only 1 channel → can't compute spread
    expect(result.current.chromSpread).toBeNull();
  });

  it("catches errors gracefully", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    /* Use a Proxy that throws on any property access after the initial guards,
     * forcing the try/catch path inside the hook's useMemo. */
    let accessCount = 0;
    const brokenL = new Proxy({} as RuntimeLens, {
      get(_target, _prop) {
        accessCount++;
        /* Let the first few property reads succeed (for the guard checks),
         * then throw on deeper access (traceRayChromatic internals). */
        if (accessCount > 3) throw new Error("Simulated chromatic failure");
        return undefined;
      },
    });
    const { result } = renderHook(() =>
      useChromaticRays({
        L: brokenL,
        zPos: [],
        IMG_MM: 0,
        focusT: 0,
        zoomT: 0,
        sx: (z) => z,
        sy: (y) => y,
        clampedRayEnd: () => [0, 0],
        currentPhysStopSD: 5,
        currentEPSD: 5,
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        chromR: true,
        chromG: true,
        chromB: true,
        lensKey: "broken",
      }),
    );
    expect(result.current.chromaticRays).toEqual([]);
    expect(result.current.error).toBeTruthy();
    spy.mockRestore();
  });
});
