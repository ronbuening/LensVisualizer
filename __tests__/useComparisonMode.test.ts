// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useComparisonMode, { isComparisonOk, type ComparisonLensesResult } from "../src/comparison/useComparisonMode.js";
import { CATALOG_KEYS } from "../src/utils/lensCatalog.js";

/* Pick two valid catalog keys for testing */
const keyA = CATALOG_KEYS[0];
const keyB = CATALOG_KEYS.length > 1 ? CATALOG_KEYS[1] : CATALOG_KEYS[0];

function makeParams(overrides: Record<string, unknown> = {}) {
  return {
    comparing: false,
    lensKeyA: keyA,
    lensKeyB: keyB,
    scaleMode: "independent",
    sharedFocusT: 0,
    sharedStopdownT: 0,
    sharedZoomT: 0,
    ...overrides,
  };
}

describe("useComparisonMode", () => {
  it("returns expected interface shape", () => {
    const { result } = renderHook(() => useComparisonMode(makeParams()));
    expect(result.current.comparisonLenses).toBeNull();
    expect(result.current.scaleRatios).toBeNull();
    expect(result.current.focusPair).toBeNull();
    expect(result.current.aperturePair).toBeNull();
    expect(result.current.zoomPair).toBeNull();
    expect(typeof result.current.handleHeaderHeight).toBe("function");
    expect(typeof result.current.maxHeaderHeight).toBe("number");
  });

  it("returns null for all fields when not comparing", () => {
    const { result } = renderHook(() => useComparisonMode(makeParams({ comparing: false })));
    expect(result.current.comparisonLenses).toBeNull();
    expect(result.current.focusPair).toBeNull();
    expect(result.current.aperturePair).toBeNull();
    expect(result.current.zoomPair).toBeNull();
    expect(result.current.scaleRatios).toBeNull();
  });

  it("builds both lenses when comparing", () => {
    const { result } = renderHook(() => useComparisonMode(makeParams({ comparing: true })));
    const cl = result.current.comparisonLenses;
    expect(isComparisonOk(cl)).toBe(true);
    if (isComparisonOk(cl)) {
      expect(cl.LA).toBeDefined();
      expect(cl.LB).toBeDefined();
      expect(typeof cl.LA.SC).toBe("number");
      expect(typeof cl.LB.SC).toBe("number");
    }
  });

  it("returns error result for invalid lens key", () => {
    const { result } = renderHook(() => useComparisonMode(makeParams({ comparing: true, lensKeyA: "__INVALID__" })));
    const cl = result.current.comparisonLenses;
    expect(cl).not.toBeNull();
    expect(isComparisonOk(cl)).toBe(false);
    expect(cl!.error).toBeDefined();
  });

  it("computes focusPair, aperturePair, zoomPair when comparison is valid", () => {
    const { result } = renderHook(() =>
      useComparisonMode(makeParams({ comparing: true, sharedFocusT: 0.3, sharedStopdownT: 0.2 })),
    );
    expect(result.current.focusPair).not.toBeNull();
    expect(typeof result.current.focusPair!.focusA).toBe("number");
    expect(typeof result.current.focusPair!.focusB).toBe("number");
    expect(result.current.aperturePair).not.toBeNull();
    expect(typeof result.current.aperturePair!.stopdownA).toBe("number");
    expect(result.current.zoomPair).not.toBeNull();
  });

  it("returns null scaleRatios in independent mode", () => {
    const { result } = renderHook(() => useComparisonMode(makeParams({ comparing: true, scaleMode: "independent" })));
    expect(result.current.scaleRatios).toBeNull();
  });

  it("computes scaleRatios in normalized mode", () => {
    const { result } = renderHook(() => useComparisonMode(makeParams({ comparing: true, scaleMode: "normalized" })));
    const sr = result.current.scaleRatios;
    expect(sr).not.toBeNull();
    if (sr) {
      expect(typeof sr.a).toBe("number");
      expect(typeof sr.b).toBe("number");
      /* The smaller SC lens gets ratio 1.0, the larger gets minSC/SC < 1 */
      expect(Math.max(sr.a, sr.b)).toBeCloseTo(1.0);
    }
  });

  it("handleHeaderHeight tracks max height across panels", () => {
    const { result } = renderHook(() => useComparisonMode(makeParams()));
    expect(result.current.maxHeaderHeight).toBe(0);

    act(() => result.current.handleHeaderHeight("a", 40));
    expect(result.current.maxHeaderHeight).toBe(40);

    act(() => result.current.handleHeaderHeight("b", 60));
    expect(result.current.maxHeaderHeight).toBe(60);

    act(() => result.current.handleHeaderHeight("a", 80));
    expect(result.current.maxHeaderHeight).toBe(80);
  });

  it("handleHeaderHeight is referentially stable", () => {
    const { result, rerender } = renderHook(() => useComparisonMode(makeParams()));
    const ref1 = result.current.handleHeaderHeight;
    rerender();
    expect(result.current.handleHeaderHeight).toBe(ref1);
  });
});

describe("isComparisonOk", () => {
  it("returns false for null", () => {
    expect(isComparisonOk(null)).toBe(false);
  });

  it("returns false for error result", () => {
    const err: ComparisonLensesResult = { error: new Error("test"), failedKeys: "a vs b" };
    expect(isComparisonOk(err)).toBe(false);
  });
});
