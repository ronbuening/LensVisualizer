import { describe, expect, it } from "vitest";
import { apertureMetricsForState, resolveApertureStop, effectiveFNumber } from "../../../src/optics/optics.js";
import { computeOpticalSummaryForState2, prepareRuntimeState } from "../../../src/optics/compat.js";
import { build, buildSimplePositiveElementLens } from "./testLensFixtures.js";
import NikonZoom from "../../../src/lens-data/nikon/NikonNikkorAFS28300mmf3556G.data.js";
import TamronZoom from "../../../src/lens-data/tamron/TamronB02818400mmf3563.data.js";
import CanonZoom from "../../../src/lens-data/canon/CanonEF70300mmf4556DOISUSM.data.js";
import Nikon200 from "../../../src/lens-data/nikon/NikonAiNikkor200mmf2IFED.data.js";
import validateLensData from "../../../src/optics/validateLensData.js";

function thinLensState(imageDistance: number) {
  const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
  // Ideal zero-thickness lensmaker reference, used only by the paraxial solver.
  const values = [
    { R: 1e15, nd: 1, d: 0 },
    { R: 100, nd: 1.5, d: 0 },
    { R: -100, nd: 1, d: imageDistance },
  ];
  return {
    ...state,
    imgZ: imageDistance,
    z: [0, 0, 0],
    surfaces: state.surfaces.map((s, i) => ({ ...s, ...values[i], z: 0 })),
  };
}

describe("current-state aperture metrics", () => {
  it("shares immutable reports while bounding retained iris settings", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const original = apertureMetricsForState(state, 1);
    expect(apertureMetricsForState(state, 1)).toBe(original);
    expect(Object.isFrozen(original)).toBe(true);
    for (let i = 2; i <= 18; i++) apertureMetricsForState(state, i / 2);
    const recalculated = apertureMetricsForState(state, 1);
    expect(recalculated).not.toBe(original);
    expect(recalculated).toEqual(original);
    expect(apertureMetricsForState({ ...state }, 1)).not.toBe(recalculated);
  });
  it.each([
    [100, 10],
    [200, 20],
  ])("gives the physical cone for an image at %s mm", (distance, expected) => {
    const metrics = apertureMetricsForState(thinLensState(distance), 5);
    expect(metrics.paraxialWorkingFNumber).toBeCloseTo(expected, 10);
    expect(metrics.geometricFNumber).toBeCloseTo(10, 10);
    expect(metrics.entrancePupilSemiDiameterMm).toBe(5);
    expect(metrics.exitPupilSemiDiameterMm).toBe(5);
  });

  it("uses the same working f-number in Summary and the runtime viewer helper", () => {
    const L = build(Nikon200);
    for (const focusT of [0, 0.5, 1]) {
      const stop = resolveApertureStop(L, 0, L.FOPEN * 2);
      const summary = computeOpticalSummaryForState2(
        prepareRuntimeState(L, focusT, 0),
        999,
        999,
        stop.stopSemiDiameterMm,
      );
      expect(summary.effectiveFNumber).toBeCloseTo(effectiveFNumber(stop.fNumber, focusT, 0, L), 10);
      expect(summary.paraxialWorkingFNumber).toBeCloseTo(3.8892718835256, 9);
    }
  });

  it("includes the image-space refractive index in paraxial numerical aperture", () => {
    const state = thinLensState(300);
    const immersed = { ...state, surfaces: state.surfaces.map((s, i) => (i === 2 ? { ...s, nd: 1.5 } : s)) };
    const metrics = apertureMetricsForState(immersed, 5);
    expect(metrics.geometricFNumber).toBeCloseTo(30, 10);
    expect(metrics.paraxialWorkingFNumber).toBeCloseTo(20, 10);
  });

  it("does not invent a finite cone for degenerate or folded paths", () => {
    const state = thinLensState(100);
    expect(apertureMetricsForState(state, 0).status).toBe("degenerate");
    expect(apertureMetricsForState(state, NaN).workingFNumber).toBeNull();
    expect(apertureMetricsForState(thinLensState(0), 5).workingFNumber).toBeNull();
    expect(
      apertureMetricsForState(
        { ...state, lens: { ...state.lens, flags: { ...state.lens.flags, isFoldedOptics: true } } },
        5,
      ).status,
    ).toBe("unsupported");
  });

  it("preserves existing stop mapping and clamps requested apertures", () => {
    const L = buildSimplePositiveElementLens();
    expect(resolveApertureStop(L, 0, L.FOPEN).stopSemiDiameterMm).toBe(L.stopPhysSD);
    expect(resolveApertureStop(L, 0, L.FOPEN * 2).stopSemiDiameterMm).toBe(L.stopPhysSD / 2);
    expect(resolveApertureStop(L, 0, 0.1).fNumber).toBe(L.FOPEN);
    expect(resolveApertureStop(L, 0, 1000).fNumber).toBe(L.maxFstop);
    expect(() => resolveApertureStop(L, 0, NaN)).toThrow();
    expect(() => resolveApertureStop(L, Infinity, 2)).toThrow();
  });

  it.each([NikonZoom, TamronZoom, CanonZoom])(
    "keeps the full iris at every wide-open zoom marking for $key",
    (data) => {
      const L = build(data);
      for (const zoomT of [0, 0.25, 0.428, 0.5, 0.75, 1]) {
        const open = resolveApertureStop(L, zoomT, 0.1);
        expect(open.stopSemiDiameterMm).toBe(L.stopPhysSD);
        const stopped = resolveApertureStop(L, zoomT, open.fNumber * 2);
        expect(stopped.stopSemiDiameterMm).toBe(L.stopPhysSD / 2);
        const selected = resolveApertureStop(L, zoomT, 8);
        expect(selected.fNumber).toBe(8);
        expect(selected.stopSemiDiameterMm).toBeCloseTo((L.stopPhysSD * open.fNumber) / 8, 10);
      }
    },
  );

  it("interpolates only an explicitly authored wide-open stop schedule", () => {
    const base = buildSimplePositiveElementLens();
    const L = {
      ...base,
      isZoom: true,
      zoomFOPENs: [2, 4],
      data: { ...base.data, wideOpenStopSemiDiameterMm: [10, 8] },
    };
    expect(resolveApertureStop(L, 0.5, 3).stopSemiDiameterMm).toBe(9);
    expect(resolveApertureStop(L, 1, 8).stopSemiDiameterMm).toBe(4);
    expect(
      resolveApertureStop({ ...base, data: { ...base.data, wideOpenStopSemiDiameterMm: 10 } }, 0, 4).stopSemiDiameterMm,
    ).toBe(5);
  });

  it.each([0, -1, NaN, 100, [], [5, 6]])("rejects an invalid stop schedule %s", (schedule) => {
    const base = buildSimplePositiveElementLens();
    expect(
      validateLensData({ ...base.data, wideOpenStopSemiDiameterMm: schedule }).some((s) =>
        s.includes("wideOpenStopSemiDiameterMm"),
      ),
    ).toBe(true);
  });

  it("accepts a physical stop inside the existing clear radius", () => {
    const base = buildSimplePositiveElementLens();
    expect(validateLensData({ ...base.data, wideOpenStopSemiDiameterMm: 10 })).toEqual([]);
  });
});
