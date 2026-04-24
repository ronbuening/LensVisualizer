// @vitest-environment jsdom

import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useOnAxisRays from "../src/components/hooks/useOnAxisRays.js";
import buildLens from "../src/optics/buildLens.js";
import { doLayout, entrancePupilAtState, fopenAtZoom } from "../src/optics/optics.js";
import { createCoordinateTransforms } from "../src/optics/diagramGeometry.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import type { LensData, RuntimeLens } from "../src/types/optics.js";
import SonnarRaw from "../src/lens-data/carl-zeiss/ZeissSonnar50f15.data.js";

const Sonnar = { ...LENS_DEFAULTS, ...SonnarRaw } as LensData;

/* ── Build a real lens and derived parameters for realistic testing ── */
function buildTestFixture(focusT = 0, zoomT = 0, stopdownT = 0) {
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
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
  const baseEPSD = entrancePupilAtState(L.stopPhysSD, focusT, zoomT, L).epSD;
  const currentEPSD = (baseEPSD * L.FOPEN) / fNumber;
  return { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD };
}

describe("useOnAxisRays", () => {
  it("returns empty segments when L is undefined", () => {
    const { result } = renderHook(() =>
      useOnAxisRays({
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
        lensKey: "none",
      }),
    );
    expect(result.current.segments).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it("returns one segment per rayFraction for a real lens", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useOnAxisRays({
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
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.error).toBeNull();
    expect(result.current.segments.length).toBe(L.rayFractions.length);
  });

  it("each segment has sp and gp arrays", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useOnAxisRays({
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
        lensKey: "ZeissSonnar50f15",
      }),
    );
    for (const seg of result.current.segments) {
      expect(Array.isArray(seg.sp)).toBe(true);
      expect(Array.isArray(seg.gp)).toBe(true);
      // solid polyline should have at least 2 points (entry + exit)
      expect(seg.sp.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("works with rayTracksF enabled (converging rays)", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture(0.5);
    const { result } = renderHook(() =>
      useOnAxisRays({
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
        focusK: 0.001,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.error).toBeNull();
    expect(result.current.segments.length).toBe(L.rayFractions.length);
  });

  it("catches errors and returns them", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    /* Create a lens whose rayFractions getter throws to trigger the catch path */
    const brokenL = {
      get rayFractions(): number[] {
        throw new Error("Simulated traceRay failure");
      },
    } as unknown as RuntimeLens;
    const { result } = renderHook(() =>
      useOnAxisRays({
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
        lensKey: "broken",
      }),
    );
    expect(result.current.segments).toEqual([]);
    expect(result.current.error).toBeTruthy();
    spy.mockRestore();
  });

  it("produces different segments at different stopdown levels", () => {
    const wide = buildTestFixture(0, 0, 0);
    const stopped = buildTestFixture(0, 0, 0.5);
    const { result: r1 } = renderHook(() =>
      useOnAxisRays({
        L: wide.L,
        zPos: wide.zPos,
        IMG_MM: wide.IMG_MM,
        focusT: 0,
        zoomT: 0,
        sx: wide.sx,
        sy: wide.sy,
        clampedRayEnd: wide.clampedRayEnd,
        currentPhysStopSD: wide.currentPhysStopSD,
        currentEPSD: wide.currentEPSD,
        rayTracksF: false,
        focusK: 0,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    const { result: r2 } = renderHook(() =>
      useOnAxisRays({
        L: stopped.L,
        zPos: stopped.zPos,
        IMG_MM: stopped.IMG_MM,
        focusT: 0,
        zoomT: 0,
        sx: stopped.sx,
        sy: stopped.sy,
        clampedRayEnd: stopped.clampedRayEnd,
        currentPhysStopSD: stopped.currentPhysStopSD,
        currentEPSD: stopped.currentEPSD,
        rayTracksF: false,
        focusK: 0,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    // at different apertures, ray heights differ so segments should differ
    const wideFirst = r1.current.segments[0]?.sp;
    const stoppedFirst = r2.current.segments[0]?.sp;
    expect(wideFirst).not.toEqual(stoppedFirst);
  });
});
