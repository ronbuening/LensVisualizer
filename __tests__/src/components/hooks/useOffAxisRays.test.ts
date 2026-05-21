// @vitest-environment jsdom

import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useOffAxisRays from "../../../../src/components/hooks/useOffAxisRays.js";
import buildLens from "../../../../src/optics/buildLens.js";
import {
  doLayout,
  entrancePupilAtState,
  fopenAtZoom,
  halfFieldAtZoom,
  tracingHalfFieldAtZoom,
} from "../../../../src/optics/optics.js";
import { createCoordinateTransforms } from "../../../../src/optics/diagramGeometry.js";
import { raySampleCountForDensity } from "../../../../src/optics/raySampling.js";
import LENS_DEFAULTS from "../../../../src/lens-data/defaults.js";
import type { LensData, RuntimeLens } from "../../../../src/types/optics.js";
import SonnarRaw from "../../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import NikonFisheye6mmf28Raw from "../../../../src/lens-data/nikon/NikonFisheyeNikkor6mmf28.data.js";
import { computeOffAxisTraceGeometry } from "../../../../src/components/hooks/offAxisRayUtils.js";

const Sonnar = { ...LENS_DEFAULTS, ...SonnarRaw } as LensData;
const NikonFisheye6mmf28 = { ...LENS_DEFAULTS, ...NikonFisheye6mmf28Raw } as LensData;

function buildTestFixture(focusT = 0, zoomT = 0, data: LensData = Sonnar) {
  const L = buildLens(data);
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

describe("useOffAxisRays", () => {
  it("returns empty segments when showOffAxis is 'off'", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useOffAxisRays({
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showOffAxis: "off",
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.segments).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it("returns empty segments when L is undefined", () => {
    const { result } = renderHook(() =>
      useOffAxisRays({
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showOffAxis: "trueAngle",
        lensKey: "none",
      }),
    );
    expect(result.current.segments).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it("produces segments in trueAngle mode", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useOffAxisRays({
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showOffAxis: "trueAngle",
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.error).toBeNull();
    expect(result.current.segments.length).toBe(L.offAxisFractions.length);
    for (const seg of result.current.segments) {
      expect(Array.isArray(seg.sp)).toBe(true);
      expect(seg.sp.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("keeps rectilinear off-axis rendering on the tracing-half-field safety scale", () => {
    const { L, zPos, IMG_MM, sx, sy } = buildTestFixture();
    const geometry = computeOffAxisTraceGeometry({
      L,
      zPos,
      IMG_MM,
      focusT: 0,
      zoomT: 0,
      sx,
      sy,
      showOffAxis: "trueAngle",
    });

    expect(geometry?.kind).toBe("slope");
    expect(geometry?.fieldAngleDeg).toBeCloseTo(tracingHalfFieldAtZoom(0, L) * L.offAxisFieldFrac, 5);
    expect(geometry?.fieldAngleDeg).toBeLessThan(halfFieldAtZoom(0, L) * L.offAxisFieldFrac);
  });

  it("uses diagnostic ray sampling when requested", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useOffAxisRays({
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
        rayDensity: "diagnostic",
        rayTracksF: false,
        focusK: 0,
        showOffAxis: "trueAngle",
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.error).toBeNull();
    expect(result.current.segments.length).toBe(raySampleCountForDensity(L.offAxisFractions, "diagnostic"));
    expect(result.current.segments.length).toBeGreaterThanOrEqual(L.offAxisFractions.length * 3);
  });

  it("produces segments in edge mode", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const { result } = renderHook(() =>
      useOffAxisRays({
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showOffAxis: "edge",
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.error).toBeNull();
    expect(result.current.segments.length).toBe(L.offAxisFractions.length);
  });

  it("works with rayTracksF enabled", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture(0.3);
    const { result } = renderHook(() =>
      useOffAxisRays({
        L,
        zPos,
        IMG_MM,
        focusT: 0.3,
        zoomT: 0,
        sx,
        sy,
        clampedRayEnd,
        currentPhysStopSD,
        currentEPSD,
        rayDensity: "normal",
        rayTracksF: true,
        focusK: 0.002,
        showOffAxis: "trueAngle",
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.error).toBeNull();
    expect(result.current.segments.length).toBeGreaterThan(0);
  });

  it("targets the declared fisheye field with vector off-axis rendering", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture(
      0,
      0,
      NikonFisheye6mmf28,
    );

    const geometry = computeOffAxisTraceGeometry({
      L,
      zPos,
      IMG_MM,
      focusT: 0,
      zoomT: 0,
      sx,
      sy,
      showOffAxis: "trueAngle",
    });

    expect(geometry?.kind).toBe("vector");
    expect(geometry?.fieldAngleDeg).toBeCloseTo(66, 8);
    if (geometry?.kind === "vector") {
      expect(geometry.vectorLaunch.totalFieldDeg).toBeCloseTo(66, 8);
    }

    const { result } = renderHook(() =>
      useOffAxisRays({
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showOffAxis: "trueAngle",
        lensKey: "nikon-fisheye-nikkor-6mm-f28",
      }),
    );

    expect(result.current.error).toBeNull();
    expect(result.current.segments.length).toBe(L.offAxisFractions.length);
    expect(result.current.segments.some((seg) => seg.sp.length > 0 || seg.gp.length > 0)).toBe(true);
  });

  it("catches errors and returns them", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    /* offAxisFieldFrac getter throws to trigger the catch path */
    const brokenL = {
      get offAxisFieldFrac(): number {
        throw new Error("Simulated off-axis failure");
      },
    } as unknown as RuntimeLens;
    const { result } = renderHook(() =>
      useOffAxisRays({
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showOffAxis: "trueAngle",
        lensKey: "broken",
      }),
    );
    expect(result.current.segments).toEqual([]);
    expect(result.current.error).toBeTruthy();
    spy.mockRestore();
  });
});
