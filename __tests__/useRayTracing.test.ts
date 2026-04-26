// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import useRayTracing from "../src/components/hooks/useRayTracing.js";
import buildLens from "../src/optics/buildLens.js";
import { doLayout, entrancePupilAtState, fopenAtZoom } from "../src/optics/optics.js";
import { createCoordinateTransforms } from "../src/optics/diagramGeometry.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import type { LensData } from "../src/types/optics.js";
import SonnarRaw from "../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";

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

describe("useRayTracing", () => {
  it("returns all ray categories when L is undefined", () => {
    const { result } = renderHook(() =>
      useRayTracing({
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
        showOffAxis: "off",
        showChromatic: false,
        chromR: false,
        chromG: false,
        chromB: false,
        lensKey: "none",
      }),
    );
    expect(result.current.rays).toEqual([]);
    expect(result.current.offAxisRays).toEqual([]);
    expect(result.current.chromaticRays).toEqual([]);
    expect(result.current.chromSpread).toBeNull();
    expect(result.current.rayError).toBeNull();
    expect(result.current.focusK).toBe(0);
  });

  it("produces on-axis rays for a real lens", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useRayTracing({
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
        showOffAxis: "off",
        showChromatic: false,
        chromR: false,
        chromG: false,
        chromB: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.rayError).toBeNull();
    expect(result.current.rays.length).toBe(L.rayFractions.length);
    expect(result.current.offAxisRays).toEqual([]);
    expect(result.current.chromaticRays).toEqual([]);
  });

  it("produces all three ray types when all enabled", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useRayTracing({
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
        showOffAxis: "trueAngle",
        showChromatic: true,
        chromR: true,
        chromG: true,
        chromB: true,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.rayError).toBeNull();
    expect(result.current.rays.length).toBeGreaterThan(0);
    expect(result.current.offAxisRays.length).toBeGreaterThan(0);
    expect(result.current.chromaticRays.length).toBeGreaterThan(0);
    expect(result.current.chromSpread).not.toBeNull();
  });

  it("computes focusK when rayTracksF is true", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture(0.5);
    const { result } = renderHook(() =>
      useRayTracing({
        L,
        zPos,
        IMG_MM,
        focusT: 0.5,
        zoomT: 0,
        sx,
        sy,
        clampedRayEnd,
        currentPhysStopSD,
        currentEPSD,
        rayTracksF: true,
        showOffAxis: "off",
        showChromatic: false,
        chromR: false,
        chromG: false,
        chromB: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    // At non-zero focus, conjugateK should produce a nonzero value
    expect(result.current.focusK).not.toBe(0);
  });

  it("focusK is 0 when rayTracksF is false", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture(0.5);
    const { result } = renderHook(() =>
      useRayTracing({
        L,
        zPos,
        IMG_MM,
        focusT: 0.5,
        zoomT: 0,
        sx,
        sy,
        clampedRayEnd,
        currentPhysStopSD,
        currentEPSD,
        rayTracksF: false,
        showOffAxis: "off",
        showChromatic: false,
        chromR: false,
        chromG: false,
        chromB: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.focusK).toBe(0);
  });
});
