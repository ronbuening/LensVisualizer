import { prepareRuntimeState } from "../../../../src/optics/state/runtimeAdapters.js";
import { stateWithZ } from "../../../../src/optics/state/preparedGeometry.js";
import { createAnalysisRequest } from "../../../../src/optics/analysis/request.js";
// @vitest-environment jsdom

import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useChromaticRays from "../../../../src/components/hooks/useChromaticRays.js";
import { buildLens } from "../../../../src/optics/prescription/buildRuntimeLens.js";
import { computeLongitudinalChromaticFocus } from "../../../../src/optics/analysis/chromatic/analysis.js";
import {
  doLayoutForRuntimeLens as doLayout,
  fopenAtZoomClamped as fopenAtZoom,
} from "../../../../src/optics/state/runtimeAdapters.js";
import { entrancePupilAtState } from "../../../../src/optics/state/fieldAdapters.js";
import { createCoordinateTransforms } from "../../../../src/optics/diagram/coordinateTransforms.js";
import { raySampleCountForDensity } from "../../../../src/optics/trace/raySampling.js";
import { catalogLensData } from "../../optics/testLensFixtures.js";
import type { LensData, RuntimeLens } from "../../../../src/types/optics.js";
import SonnarRaw from "../../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import ApoLantharRaw from "../../../../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";

const Sonnar = catalogLensData(SonnarRaw);
const ApoLanthar = catalogLensData(ApoLantharRaw);
const displayLocaFallbackFractions = [0.97, 0.95, 0.9, 0.85, 0.8] as const;

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

function expectedDisplayLocaFractions(L: RuntimeLens): number[] {
  const fractions: number[] = [...displayLocaFallbackFractions];
  for (const fraction of L.rayFractions) {
    const absolute = Math.abs(fraction);
    if (absolute > 1e-12 && !fractions.some((value) => Math.abs(value - absolute) < 1e-12)) {
      fractions.push(absolute);
    }
  }
  return fractions.sort((a, b) => b - a);
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showChromatic: false,
        showOnAxis: true,
        showOffAxis: "off",
        chromR: true,
        chromG: true,
        chromB: true,
        chromV: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.chromaticRays).toEqual([]);
    expect(result.current.chromaticRayFanSpread).toBeNull();
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        showOnAxis: true,
        showOffAxis: "off",
        chromR: true,
        chromG: true,
        chromB: true,
        chromV: false,
        lensKey: "none",
      }),
    );
    expect(result.current.chromaticRays).toEqual([]);
    expect(result.current.chromaticRayFanSpread).toBeNull();
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        showOnAxis: true,
        showOffAxis: "off",
        chromR: false,
        chromG: false,
        chromB: false,
        chromV: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.chromaticRays).toEqual([]);
  });

  it("produces one on-axis chromatic segment per density sample and channel", () => {
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        showOnAxis: true,
        showOffAxis: "off",
        chromR: true,
        chromG: true,
        chromB: true,
        chromV: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.error).toBeNull();
    expect(result.current.chromaticRays.length).toBe(L.rayFractions.length * 3);
    for (const seg of result.current.chromaticRays) {
      expect(["R", "G", "B"]).toContain(seg.channel);
      expect(seg.axis).toBe("onAxis");
      expect(Array.isArray(seg.sp)).toBe(true);
      expect(typeof seg.y).toBe("number");
      expect(typeof seg.u).toBe("number");
      expect(typeof seg.clipped).toBe("boolean");
    }
  });

  it("produces one channel per density sample with single channel", () => {
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        showOnAxis: true,
        showOffAxis: "off",
        chromR: true,
        chromG: false,
        chromB: false,
        chromV: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.chromaticRays.length).toBe(L.rayFractions.length);
    for (const seg of result.current.chromaticRays) {
      expect(seg.channel).toBe("R");
    }
  });

  it("adds off-axis chromatic rays when off-axis tracing is enabled", () => {
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
        rayDensity: "dense",
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        showOnAxis: true,
        showOffAxis: "trueAngle",
        chromR: true,
        chromG: false,
        chromB: true,
        chromV: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    const onAxisCount = raySampleCountForDensity(L.rayFractions, "dense") * 2;
    const offAxisCount = raySampleCountForDensity(L.offAxisFractions, "dense") * 2;
    expect(result.current.error).toBeNull();
    expect(result.current.chromaticRays.filter((r) => r.axis === "onAxis").length).toBe(onAxisCount);
    expect(result.current.chromaticRays.filter((r) => r.axis === "offAxis").length).toBe(offAxisCount);
  });

  it("returns only off-axis chromatic rays when on-axis is hidden", () => {
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        showOnAxis: false,
        showOffAxis: "trueAngle",
        chromR: true,
        chromG: true,
        chromB: false,
        chromV: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.chromaticRays.every((r) => r.axis === "offAxis")).toBe(true);
    expect(result.current.chromaticRayFanSpreads.onAxis).toBeNull();
    expect(result.current.chromaticRayFanSpreads.offAxis).not.toBeNull();
    expect(result.current.chromaticRayFanSpreads.offAxis?.axis).toBe("offAxis");
    expect(result.current.chromaticRayFanSpreads.offAxis?.channels).toEqual(["R", "G"]);
    expect(result.current.chromaticRayFanSpread).toBe(result.current.chromaticRayFanSpreads.offAxis);
  });

  it("computes chromaticRayFanSpread with 2+ channels", () => {
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        showOnAxis: true,
        showOffAxis: "off",
        chromR: true,
        chromG: true,
        chromB: true,
        chromV: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    expect(result.current.chromaticRayFanSpread).not.toBeNull();
    expect(result.current.chromaticRayFanSpreads.onAxis).toBe(result.current.chromaticRayFanSpread);
    expect(result.current.chromaticRayFanSpreads.offAxis).toBeNull();
    expect(typeof result.current.chromaticRayFanSpread!.axialInterceptSpreadMm).toBe("number");
    expect(typeof result.current.chromaticRayFanSpread!.imagePlaneHeightSpreadMm).toBe("number");
    expect(result.current.chromaticRayFanSpread!.axis).toBe("onAxis");
    expect(result.current.chromaticRayFanSpread!.channels).toEqual(["R", "G", "B"]);
    expect(typeof result.current.chromaticRayFanSpread!.fraction).toBe("number");

    const expected = computeLongitudinalChromaticFocus(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), zPos),
        dynamicEFL: L.EFL,
        currentEPSD: currentEPSD,
        currentPhysStopSD: currentPhysStopSD,
      }),
      {
        channels: ["R", "G", "B"],
        longitudinalFractions: expectedDisplayLocaFractions(L),
      },
    )!.spread;
    expect(result.current.chromaticRayFanSpread!.axialInterceptSpreadMm).toBeCloseTo(
      expected.axialInterceptSpreadMm,
      12,
    );
    expect(result.current.chromaticRayFanSpread!.fraction).toBe(expected.fraction);
  });

  it("keeps fixed-index rays visible without reporting artificial zero color error", () => {
    const data = catalogLensData({
      schema: 2,
      key: "constant-dispersion-fixture",
      name: "Constant-index singlet",
      elements: [{ id: 1, name: "L1", nd: 1.5, glass: "Unmatched" }],
      surfaces: [
        { label: "STO", R: "flat", d: 1 },
        { label: "1", R: 30, d: 3, sd: 5, medium: 1 },
        { label: "2", R: -30, d: 30, sd: 5 },
      ],
      focus: { closeFocusM: 1e15 },
      aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8] },
      projection: { kind: "rectilinear", fullFieldDeg: 10, maxTraceFieldDeg: 5 },
      layout: { yScFill: 0.3 },
    });
    const fixture = buildTestFixture(0, 0, data);
    const { result } = renderHook(() =>
      useChromaticRays({
        ...fixture,
        focusT: 0,
        zoomT: 0,
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        showOnAxis: true,
        showOffAxis: "trueAngle",
        chromR: true,
        chromG: true,
        chromB: true,
        chromV: false,
        lensKey: "constant-dispersion-fixture",
      }),
    );

    expect(result.current.error).toBeNull();
    expect(result.current.chromaticRays.length).toBeGreaterThan(0);
    expect(result.current.chromaticRayFanSpreads).toEqual({ onAxis: null, offAxis: null });
    expect(result.current.chromaticRayFanSpread).toBeNull();
  });

  it("does not report a larger LoCA spread when a selected RGB channel is hidden", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture();
    const getLoca = (channels: { chromR: boolean; chromG: boolean; chromB: boolean }) => {
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
          rayDensity: "normal",
          rayTracksF: false,
          focusK: 0,
          showChromatic: true,
          showOnAxis: true,
          showOffAxis: "off",
          ...channels,
          chromV: false,
          lensKey: "ZeissSonnar50f15",
        }),
      );
      expect(result.current.error).toBeNull();
      expect(result.current.chromaticRayFanSpread).not.toBeNull();
      return result.current.chromaticRayFanSpread!.axialInterceptSpreadMm;
    };

    const allRgb = getLoca({ chromR: true, chromG: true, chromB: true });
    const noRed = getLoca({ chromR: false, chromG: true, chromB: true });
    const noGreen = getLoca({ chromR: true, chromG: false, chromB: true });
    const noBlue = getLoca({ chromR: true, chromG: true, chromB: false });

    expect(noRed).toBeLessThanOrEqual(allRgb + 1e-9);
    expect(noGreen).toBeLessThanOrEqual(allRgb + 1e-9);
    expect(noBlue).toBeLessThanOrEqual(allRgb + 1e-9);
  });

  it("falls back to the outermost usable sample when marginal chromatic rays clip", () => {
    const { L, zPos, IMG_MM, sx, sy, clampedRayEnd, currentPhysStopSD, currentEPSD } = buildTestFixture(
      0,
      0,
      ApoLanthar,
    );
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        showOnAxis: true,
        showOffAxis: "off",
        chromR: true,
        chromG: true,
        chromB: true,
        chromV: false,
        lensKey: "ApoLanthar50f2",
      }),
    );

    expect(result.current.error).toBeNull();
    expect(result.current.chromaticRayFanSpread).not.toBeNull();
    expect(Object.keys(result.current.chromaticRayFanSpread!.axialIntercepts).length).toBeGreaterThanOrEqual(2);
  });

  it("returns null chromaticRayFanSpread with only 1 channel", () => {
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        showOnAxis: true,
        showOffAxis: "off",
        chromR: false,
        chromG: true,
        chromB: false,
        chromV: false,
        lensKey: "ZeissSonnar50f15",
      }),
    );
    // Only 1 channel → can't compute spread
    expect(result.current.chromaticRayFanSpread).toBeNull();
    expect(result.current.chromaticRayFanSpreads).toEqual({ onAxis: null, offAxis: null });
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
        rayDensity: "normal",
        rayTracksF: false,
        focusK: 0,
        showChromatic: true,
        showOnAxis: true,
        showOffAxis: "off",
        chromR: true,
        chromG: true,
        chromB: true,
        chromV: false,
        lensKey: "broken",
      }),
    );
    expect(result.current.chromaticRays).toEqual([]);
    expect(result.current.error).toBeTruthy();
    spy.mockRestore();
  });
});
