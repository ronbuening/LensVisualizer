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
import { doLayout } from "../../../../src/optics/optics.js";
import type { FieldCurvatureFieldResult, FieldCurvatureResult } from "../../../../src/optics/aberrationAnalysis.js";

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

  it("computes longitudinal chromatic focus from the outermost usable marginal ray", () => {
    const { L, z, currentEPSD, currentPhysStopSD } = chromaticFixture();

    const result = computeLongitudinalChromaticFocus2(L, z, 0, 0, currentEPSD, currentPhysStopSD);

    expect(result).not.toBeNull();
    expect(result?.channels).toEqual(["R", "G", "B", "V"]);
    expect(result?.referenceChannel).toBe("G");
    expect(result?.spread.axis).toBe("onAxis");
    expect(result?.spread.channels).toEqual(["R", "G", "B", "V"]);
    expect(result?.longitudinalSpreadMm).toBeGreaterThan(0);
    expect(result?.transverseSpreadMm).toBeGreaterThanOrEqual(0);
    expect(result?.validChannelCount).toBeGreaterThanOrEqual(2);
    expect(result?.samples.find((sample) => sample.channel === "G")?.relativeFocusShiftMm).toBeCloseTo(0);
  });

  it("computes lateral color as chief-ray image-height spread across fields", () => {
    const { L, z, currentEPSD, currentPhysStopSD } = chromaticFixture();

    const result = computeLateralColorCurve2(L, z, 0, 0, currentEPSD, currentPhysStopSD, 0, undefined, {
      channels: ["R", "G", "B"],
      fieldFractions: [0, 0.5, 1],
    });

    expect(result).not.toBeNull();
    expect(result?.channels).toEqual(["R", "G", "B"]);
    expect(result?.referenceChannel).toBe("G");
    expect(result?.fields).toHaveLength(3);
    expect(result?.fields[0].fieldFraction).toBe(0);
    expect(result?.fields.some((field) => field.usable)).toBe(true);
    expect(result?.maxLateralSpreadMm).toBeGreaterThanOrEqual(0);
  });

  it("returns null chromatic sections when fewer than two channels are selected", () => {
    const { L, z, currentEPSD, currentPhysStopSD } = chromaticFixture();

    const result = computeChromaticAnalysis2(L, z, 0, 0, currentEPSD, currentPhysStopSD, 0, undefined, {
      channels: ["R"],
    });

    expect(result.longitudinalFocus).toBeNull();
    expect(result.lateralColor).toBeNull();
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
      ],
    } as FieldCurvatureResult;

    const summary = summarizeChromaticFieldFocus2(result);

    expect(summary?.source).toBe("curve");
    expect(summary?.maxTangentialSpreadMm).toBeCloseTo(0.3);
    expect(summary?.maxSagittalSpreadMm).toBeCloseTo(0.45);
    expect(summary?.maxFocusFieldFraction).toBe(0.5);
    expect(summary?.edgeFocusSpreadMm).toBeCloseTo(0.2);
  });
});
