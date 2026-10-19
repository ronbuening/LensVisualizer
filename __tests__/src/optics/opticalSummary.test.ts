import { computeFocusEFL, computeFocusBreathingSeries } from "../../../src/optics/analysis/summary/breathing.js";
import {
  analysisRequestForLens,
  buildSimplePositiveElementLens,
  buildVariableStopGapLens,
  registerRuntimeFixture,
} from "./testLensFixtures.js";
import { createAnalysisRequest } from "../../../src/optics/analysis/request.js";
import { describe, expect, it } from "vitest";
import ReferenceNewtonianSideFocusRaw from "../../../src/lens-data/reference/ReferenceNewtonianSideFocus.data.js";
import { computeOpticalSummary, prepareRuntimeState } from "../../../src/optics/compat.js";
import { computeAnalysisFieldGeometryAtState, eflAtFocus } from "../../../src/optics/optics.js";
import { apertureAt, build, buildRearPlateLens, REAR_PLATE_FIXTURE, sharedSonnar50f15 } from "./testLensFixtures.js";

describe("computeOpticalSummary", () => {
  it("summarizes current refractive lens state from prepared optics data", () => {
    const L = sharedSonnar50f15();
    const focusT = 0.5;
    const zoomT = 0;
    const state = prepareRuntimeState(L, focusT, zoomT);
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT, 0);
    const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);

    const summary = computeOpticalSummary(
      createAnalysisRequest({ preparedState: state, dynamicEFL, currentEPSD, currentPhysStopSD, fieldGeometry }),
    );

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
    const summary = computeOpticalSummary(
      createAnalysisRequest({
        preparedState: state,
        dynamicEFL: L.EFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: L.stopPhysSD,
      }),
    );

    expect(summary.opticalPath).toBe("folded");
    expect(summary.surfaceCount).toBe(L.N);
    expect(summary.focusDistanceM).toBeNull();
    expect(summary.imagePlaneZMm).toBeCloseTo(state.imgZ, 6);
    expect(summary.totalTrackMm).toBeCloseTo(state.totalTrack, 6);
  });

  it("counts authored surfaces only and reports modeled rear plates separately", () => {
    const L = buildRearPlateLens();
    const state = prepareRuntimeState(L, 0, 0);
    const summary = computeOpticalSummary(
      createAnalysisRequest({
        preparedState: state,
        dynamicEFL: L.EFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: L.stopPhysSD,
      }),
    );

    expect(summary.surfaceCount).toBe(L.N - 2);
    expect(summary.rearPlateCount).toBe(1);
    expect(summary.rearPlateThicknessMm).toBe(REAR_PLATE_FIXTURE.thicknessMm);
  });
});

describe("request breathing", () => {
  it("keeps the chart series independent of aberration while current EFL follows it", () => {
    const base = buildSimplePositiveElementLens();
    const L = build({
      ...base.data,
      var: { "1": [5, 8] },
      aberrationControl: {
        label: "Soft focus",
        minLabel: "Sharp",
        maxLabel: "Soft",
        step: 0.01,
        var: { "1": [5, 12] },
        varLabels: [["1", "Gap"]],
      },
    });
    const request = analysisRequestForLens(L, 0.371, 0, 0.7);
    const corrected = analysisRequestForLens(L, 0.371, 0, 0);
    expect(computeFocusEFL(request)).not.toBe(computeFocusEFL(corrected));
    const series = computeFocusBreathingSeries(request);
    expect(series).toEqual(computeFocusBreathingSeries(corrected));
    expect(series.map((point) => point.focusT)).toEqual(
      [...Array.from({ length: 21 }, (_, i) => i / 20), 0.371].sort((a, b) => a - b),
    );
    expect(series[0].efl).toBe(L.EFL);
    expect(series.find((point) => point.focusT === 0.371)?.efl).toBe(computeFocusEFL(corrected));
  });

  it("retains cached infinity EFL and interpolates its zoom stations", () => {
    const base = buildVariableStopGapLens([
      [1, 2],
      [2, 3],
      [3, 4],
    ]);
    const L = registerRuntimeFixture({ ...base, EFL: 35, zoomEFLs: [35, 50, 80] });
    const request = analysisRequestForLens(L, 0.001, 0.25);
    expect(computeFocusEFL(request)).toBe(42.5);
    expect(computeFocusBreathingSeries(request)[0].efl).toBe(42.5);
  });
});
