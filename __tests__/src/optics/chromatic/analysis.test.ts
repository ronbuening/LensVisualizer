import { describe, expect, it } from "vitest";
import {
  computeChromaticAnalysis,
  computeLateralColorCurve,
  computeLongitudinalChromaticFocus,
} from "../../../../src/optics/chromatic/analysis.js";
import { doLayout } from "../../../../src/optics/optics.js";
import { apertureAt, sharedApoLanthar50f2, sharedSonnar50f15 } from "../testLensFixtures.js";

function finiteSpan(values: number[]): number {
  return Math.max(...values) - Math.min(...values);
}

describe("chromatic analysis helpers", () => {
  it("computes longitudinal focus shifts from the outermost usable marginal chromatic ray", () => {
    const L = sharedApoLanthar50f2();
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT);

    const result = computeLongitudinalChromaticFocus(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, 0, {
      channels: ["R", "G", "B", "V"],
    });

    expect(result).not.toBeNull();
    expect(result!.referenceChannel).toBe("G");
    expect(result!.channels).toEqual(["R", "G", "B", "V"]);
    expect(result!.validChannelCount).toBeGreaterThanOrEqual(2);
    expect(result!.marginalFraction).toBeGreaterThan(0);
    expect(result!.spread.axis).toBe("onAxis");
    expect(result!.spread.fraction).toBe(result!.marginalFraction);
    expect(result!.longitudinalSpreadUm).toBeCloseTo(result!.longitudinalSpreadMm * 1000, 9);

    const focusValues = result!.samples
      .map((sample) => sample.focusZ)
      .filter((focusZ): focusZ is number => focusZ !== null);
    expect(result!.longitudinalSpreadMm).toBeCloseTo(finiteSpan(focusValues), 9);
    for (const sample of result!.samples.filter((sample) => sample.usable)) {
      expect(sample.focusShiftMm).toBeCloseTo(sample.focusZ! - result!.imagePlaneZ, 9);
    }
  });

  it("computes lateral color as chromatic chief-ray image-height spread across field", () => {
    const L = sharedSonnar50f15();
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT, 0.25);

    const result = computeLateralColorCurve(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, 0, undefined, {
      channels: ["R", "G", "B"],
      fieldFractions: [0, 0.5, 1],
    });

    expect(result).not.toBeNull();
    expect(result!.channels).toEqual(["R", "G", "B"]);
    expect(result!.fields).toHaveLength(3);
    expect(result!.usableFieldCount).toBeGreaterThan(0);
    expect(result!.maxLateralSpreadUm).toBeCloseTo(result!.maxLateralSpreadMm * 1000, 9);

    const usableField = result!.fields.find((field) => field.usable);
    expect(usableField).toBeTruthy();
    const imageHeights = usableField!.samples
      .map((sample) => sample.imageHeightMm)
      .filter((height): height is number => height !== null);
    expect(usableField!.lateralSpreadMm).toBeCloseTo(finiteSpan(imageHeights), 9);
    expect(usableField!.samples.find((sample) => sample.channel === "G")?.relativeHeightMm).toBeCloseTo(0, 9);
  });

  it("returns combined chromatic analysis with nullable sections instead of throwing on insufficient channels", () => {
    const L = sharedSonnar50f15();
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT, 0.25);

    const full = computeChromaticAnalysis(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, 0, undefined, {
      channels: ["R", "G", "B"],
      fieldFractions: [0, 1],
    });
    expect(full.longitudinalFocus).not.toBeNull();
    expect(full.lateralColor).not.toBeNull();

    const oneChannel = computeChromaticAnalysis(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, 0, undefined, {
      channels: ["G"],
    });
    expect(oneChannel.longitudinalFocus).toBeNull();
    expect(oneChannel.lateralColor).toBeNull();
  });
});
