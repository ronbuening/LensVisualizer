import { describe, expect, it } from "vitest";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import Sonnar50f15Raw from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import ReferenceNewtonianSideFocusRaw from "../../../src/lens-data/reference/ReferenceNewtonianSideFocus.data.js";
import buildLens from "../../../src/optics/buildLens.js";
import { computeOpticalSummaryForState2, prepareRuntimeState } from "../../../src/optics/compat.js";
import { computeAnalysisFieldGeometryAtState, eflAtFocus, epAtZoom, fopenAtZoom } from "../../../src/optics/optics.js";
import type { LensData } from "../../../src/types/optics.js";

function build(raw: object) {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

function apertureAt(L: ReturnType<typeof build>, zoomT: number, stopdownT: number) {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  return {
    currentPhysStopSD: (L.stopPhysSD * L.FOPEN) / fNumber,
    currentEPSD: (epAtZoom(zoomT, L) * L.FOPEN) / fNumber,
  };
}

describe("computeOpticalSummaryForState2", () => {
  it("summarizes current refractive lens state from prepared optics data", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0.5;
    const zoomT = 0;
    const state = prepareRuntimeState(L, focusT, zoomT);
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT, 0);
    const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);

    const summary = computeOpticalSummaryForState2(state, dynamicEFL, currentEPSD, currentPhysStopSD, fieldGeometry);

    expect(summary.opticalPath).toBe("sequential");
    expect(summary.surfaceCount).toBe(L.N);
    expect(summary.currentEFLMm).toBeCloseTo(dynamicEFL, 6);
    expect(summary.infinityEFLMm).toBeCloseTo(L.EFL, 6);
    expect(summary.breathingPercent).not.toBeNull();
    expect(summary.effectiveFNumber).toBeCloseTo(Math.abs(dynamicEFL) / (currentEPSD * 2), 6);
    expect(summary.halfFieldDeg).toBeCloseTo(fieldGeometry.halfFieldDeg, 6);
    expect(summary.fullFieldDeg).toBeCloseTo(fieldGeometry.halfFieldDeg * 2, 6);
    expect(summary.focusDistanceM).toBeCloseTo(L.closeFocusM / focusT, 6);
    expect(summary.imagePlaneZMm).toBeCloseTo(state.imgZ, 6);
    expect(summary.totalTrackMm).toBeCloseTo(state.totalTrack, 6);
    expect(summary.cardinalEFLMm).not.toBeNull();
    expect(summary.bfdMm).not.toBeNull();
  });

  it("keeps folded mirror summaries available even when cardinal data is path-limited", () => {
    const L = build(ReferenceNewtonianSideFocusRaw);
    const state = prepareRuntimeState(L, 0, 0);
    const summary = computeOpticalSummaryForState2(state, L.EFL, L.EP.epSD, L.stopPhysSD);

    expect(summary.opticalPath).toBe("folded");
    expect(summary.surfaceCount).toBe(L.N);
    expect(summary.focusDistanceM).toBeNull();
    expect(summary.imagePlaneZMm).toBeCloseTo(state.imgZ, 6);
    expect(summary.totalTrackMm).toBeCloseTo(state.totalTrack, 6);
  });
});
