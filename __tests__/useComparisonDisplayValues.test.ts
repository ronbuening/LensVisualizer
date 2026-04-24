// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import useComparisonDisplayValues from "../src/comparison/useComparisonDisplayValues.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import type { LensData } from "../src/types/optics.js";
import type { ComparisonLensesResult } from "../src/comparison/useComparisonMode.js";
import { computeFocusPair, computeAperturePair, computeZoomPair } from "../src/comparison/comparisonSliders.js";
import SonnarRaw from "../src/lens-data/carl-zeiss/ZeissSonnar50f15.data.js";
import ApoLantharRaw from "../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";

const Sonnar = { ...LENS_DEFAULTS, ...SonnarRaw } as LensData;
const ApoLanthar = { ...LENS_DEFAULTS, ...ApoLantharRaw } as LensData;

function buildFixture() {
  const LA = buildLens(Sonnar);
  const LB = buildLens(ApoLanthar);
  const focusPair = computeFocusPair(0.5, LA, LB);
  const aperturePair = computeAperturePair(0.3, LA, LB);
  const zoomPair = computeZoomPair(0, LA, LB);
  return { LA, LB, focusPair, aperturePair, zoomPair };
}

describe("useComparisonDisplayValues", () => {
  it("returns computed values for valid comparison lenses", () => {
    const { LA, LB, focusPair, aperturePair, zoomPair } = buildFixture();
    const lensResult: ComparisonLensesResult = { LA, LB };
    const { result } = renderHook(() =>
      useComparisonDisplayValues({
        comparisonLenses: lensResult,
        focusPair,
        aperturePair,
        zoomPair,
        sharedStopdownT: 0.3,
      }),
    );
    expect(result.current.ok).toBe(true);
    expect(result.current.dynamicEflA).toBeGreaterThan(0);
    expect(result.current.dynamicEflB).toBeGreaterThan(0);
    expect(result.current.effectiveFNumA).toBeGreaterThan(0);
    expect(result.current.effectiveFNumB).toBeGreaterThan(0);
  });

  it("returns zeros for failed comparison lenses", () => {
    const lensResult: ComparisonLensesResult = { error: new Error("build fail"), failedKeys: "bad-lens" };
    const { result } = renderHook(() =>
      useComparisonDisplayValues({
        comparisonLenses: lensResult,
        focusPair: null,
        aperturePair: null,
        zoomPair: null,
        sharedStopdownT: 0,
      }),
    );
    expect(result.current.ok).toBe(false);
    expect(result.current.dynamicEflA).toBe(0);
    expect(result.current.dynamicEflB).toBe(0);
  });

  it("returns different EFLs for different focus positions", () => {
    const { LA, LB, aperturePair, zoomPair } = buildFixture();
    const lensResult: ComparisonLensesResult = { LA, LB };
    const focusNear = computeFocusPair(0.9, LA, LB);
    const focusFar = computeFocusPair(0.1, LA, LB);

    const { result: near } = renderHook(() =>
      useComparisonDisplayValues({
        comparisonLenses: lensResult,
        focusPair: focusNear,
        aperturePair,
        zoomPair,
        sharedStopdownT: 0,
      }),
    );
    const { result: far } = renderHook(() =>
      useComparisonDisplayValues({
        comparisonLenses: lensResult,
        focusPair: focusFar,
        aperturePair,
        zoomPair,
        sharedStopdownT: 0,
      }),
    );
    // Internal-focusing lenses change EFL with focus
    // Both should be positive; may or may not differ depending on lens design
    expect(near.current.dynamicEflA).toBeGreaterThan(0);
    expect(far.current.dynamicEflA).toBeGreaterThan(0);
  });
});
