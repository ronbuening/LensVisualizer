import { describe, expect, it } from "vitest";
import { buildChromaticPositiveElementLens } from "../testLensFixtures.js";
import {
  computeChromaticAnalysis2,
  computeChromaticAnalysisForState2,
  computeChromaticRayFanAnalysis2,
  computeLateralColorCurve2,
  computeLongitudinalChromaticFocus2,
  prepareRuntimeState,
  summarizeChromaticFieldFocus2,
} from "../../../../src/optics/compat.js";
import {
  computeChromaticAnalysis,
  computeLateralColorCurve,
  computeLongitudinalChromaticFocus,
} from "../../../../src/optics/chromatic/analysis.js";
import { doLayout } from "../../../../src/optics/optics.js";
import type { FieldCurvatureFieldResult, FieldCurvatureResult } from "../../../../src/optics/aberrationAnalysis.js";

/* The single-field variants of these fixtures leave the max-field reduction
 * in summarizeChromaticFieldFocus2 unexecuted — keep at least two curve
 * fields in the summary test. */
function chromaticFixture() {
  const L = buildChromaticPositiveElementLens();
  const { z } = doLayout(0, 0, L);
  return { L, z, currentEPSD: L.EP.epSD, currentPhysStopSD: L.stopPhysSD };
}

describe("chromatic analysis helpers", () => {
  it("computes axis-split ray-trace spreads for analysis callers", () => {
    const { L, z, currentEPSD, currentPhysStopSD } = chromaticFixture();

    const result = computeChromaticRayFanAnalysis2(L, z, 0, 0, currentEPSD, currentPhysStopSD);

    expect(result.channels).toEqual(["R", "G", "B", "V"]);
    expect(result.spreads.onAxis?.axis).toBe("onAxis");
    expect(result.spreads.offAxis?.axis).toBe("offAxis");
    expect(result.spreads.onAxis?.axialInterceptSpreadMm).toBeGreaterThan(0);
    expect(result.spreads.offAxis?.imagePlaneHeightSpreadMm).toBeGreaterThanOrEqual(0);
    expect(result.onAxisAttemptedRayCount).toBeGreaterThanOrEqual(3);
    expect(result.offAxisAttemptedRayCount).toBeGreaterThanOrEqual(3);
  });

  it("matches the runtime chromatic helpers through the v2 wrappers", () => {
    /* Behavioral coverage of these helpers lives in chromatic/analysis.test.ts;
       the v2 names only need to prove they delegate to the same runtime code. */
    const { L, z, currentEPSD, currentPhysStopSD } = chromaticFixture();
    const curveOptions = { channels: ["R", "G", "B"] as const, fieldFractions: [0, 0.5, 1] };

    const longitudinal = computeLongitudinalChromaticFocus2(L, z, 0, 0, currentEPSD, currentPhysStopSD);
    expect(longitudinal).not.toBeNull();
    expect(longitudinal).toEqual(computeLongitudinalChromaticFocus(L, z, 0, 0, currentEPSD, currentPhysStopSD));

    const lateral = computeLateralColorCurve2(L, z, 0, 0, currentEPSD, currentPhysStopSD, 0, undefined, curveOptions);
    expect(lateral).not.toBeNull();
    expect(lateral).toEqual(
      computeLateralColorCurve(L, z, 0, 0, currentEPSD, currentPhysStopSD, 0, undefined, curveOptions),
    );

    expect(computeChromaticAnalysis2(L, z, 0, 0, currentEPSD, currentPhysStopSD)).toEqual(
      computeChromaticAnalysis(L, z, 0, 0, currentEPSD, currentPhysStopSD),
    );
  });

  it("matches the prepared-state chromatic analysis adapter", () => {
    const { L, z, currentEPSD, currentPhysStopSD } = chromaticFixture();
    const state = prepareRuntimeState(L, 0, 0);

    expect(computeChromaticAnalysisForState2(state, currentEPSD, currentPhysStopSD)).toEqual(
      computeChromaticAnalysis2(L, z, 0, 0, currentEPSD, currentPhysStopSD),
    );
  });

  it("summarizes chromatic field-focus spread from existing field-curvature data", () => {
    const field = (
      fieldFraction: number,
      shifts: FieldCurvatureFieldResult["chromaticFieldShifts"],
    ): FieldCurvatureFieldResult =>
      ({
        fieldFraction,
        label: `${fieldFraction * 100}%`,
        fieldAngleDeg: fieldFraction * 20,
        chromaticFieldShifts: shifts,
        usable: true,
      }) as FieldCurvatureFieldResult;
    const result = {
      fields: [
        field(0, null),
        field(1, [
          { channel: "R", tangentialShiftMm: -0.05, sagittalShiftMm: -0.05 },
          { channel: "G", tangentialShiftMm: 0, sagittalShiftMm: 0 },
          { channel: "B", tangentialShiftMm: 0.1, sagittalShiftMm: 0.15 },
        ]),
      ],
      curveFields: [
        field(0.5, [
          { channel: "R", tangentialShiftMm: -0.1, sagittalShiftMm: -0.05 },
          { channel: "G", tangentialShiftMm: 0, sagittalShiftMm: 0.05 },
          { channel: "B", tangentialShiftMm: 0.2, sagittalShiftMm: 0.4 },
        ]),
        // Second field with a smaller spread so the max-field reduction has to compare.
        field(1, [
          { channel: "R", tangentialShiftMm: -0.02, sagittalShiftMm: -0.02 },
          { channel: "G", tangentialShiftMm: 0, sagittalShiftMm: 0 },
          { channel: "B", tangentialShiftMm: 0.05, sagittalShiftMm: 0.08 },
        ]),
      ],
    } as FieldCurvatureResult;

    const summary = summarizeChromaticFieldFocus2(result);

    expect(summary?.source).toBe("curve");
    expect(summary?.maxTangentialSpreadMm).toBeCloseTo(0.3);
    expect(summary?.maxSagittalSpreadMm).toBeCloseTo(0.45);
    expect(summary?.maxFocusFieldFraction).toBe(0.5);
    expect(summary?.edgeFocusSpreadMm).toBeCloseTo(0.2); // from the outermost `fields` entry, not curveFields
  });
});
