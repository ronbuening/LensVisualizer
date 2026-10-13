// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useComparisonMode, {
  isComparisonOk,
  type ComparisonLensesResult,
} from "../../../src/comparison/useComparisonMode.js";
import { CATALOG_KEYS, LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import { ALL_TELECONVERTER_KEYS, resolveTeleconverterKey } from "../../../src/utils/catalog/teleconverterCatalog.js";
import { build, buildSimplePositiveElementLens, buildVariableStopGapLens } from "../optics/testLensFixtures.js";

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
    sharedShiftMm: 0,
    sharedTiltDeg: 0,
    ...overrides,
  };
}

describe("useComparisonMode", () => {
  it("updates aperture limits and the marker when only shared zoom changes", () => {
    const base = buildVariableStopGapLens([
      [1, 1],
      [1.2, 1.2],
      [1.4, 1.4],
    ]);
    const data = { ...base.data, key: "test-comparison-aperture-zoom", nominalFno: [2, 4, 8], maxFstop: 16 };
    const prime = buildSimplePositiveElementLens("test-comparison-aperture-prime").data;
    LENS_CATALOG[data.key] = build(data).data;
    LENS_CATALOG[prime.key] = prime;
    try {
      const { result, rerender, unmount } = renderHook(
        ({ zoom }) =>
          useComparisonMode(
            makeParams({ comparing: true, lensKeyA: data.key, lensKeyB: prime.key, sharedZoomT: zoom }),
          ),
        { initialProps: { zoom: 0 } },
      );
      expect(result.current.aperturePair?.fNumberA).toBe(2);
      rerender({ zoom: 1 });
      expect(result.current.aperturePair?.fNumberA).toBe(8);
      expect(result.current.aperturePair?.commonPoint).toBeCloseTo(Math.log(8 / 2) / Math.log(16 / 2), 10);
      unmount();
    } finally {
      delete LENS_CATALOG[data.key];
      delete LENS_CATALOG[prime.key];
    }
  });
  it("builds each pane with its own teleconverter so a lens can be compared against itself", () => {
    /* The hook reads the real catalogs, so resolve a real converter–host pair instead of naming a lens. */
    const teleconverterKey = ALL_TELECONVERTER_KEYS[0];
    const hostKey = CATALOG_KEYS.find((key) => resolveTeleconverterKey(key, teleconverterKey) !== null)!;
    const { result } = renderHook(() =>
      useComparisonMode(
        makeParams({ comparing: true, lensKeyA: hostKey, lensKeyB: hostKey, teleconverterKeyA: teleconverterKey }),
      ),
    );

    const lenses = result.current.comparisonLenses;
    expect(isComparisonOk(lenses)).toBe(true);
    if (!isComparisonOk(lenses)) return;
    expect(lenses.LA.data.attachedTeleconverter?.key).toBe(teleconverterKey);
    expect(lenses.LB.data.attachedTeleconverter).toBeUndefined();
    expect(lenses.LA.stopPhysSD).toBeCloseTo(lenses.LB.stopPhysSD, 9);
    expect(lenses.LA.EFL).toBeGreaterThan(lenses.LB.EFL);
  });

  it("returns null for all fields when not comparing", () => {
    const { result } = renderHook(() => useComparisonMode(makeParams({ comparing: false })));
    expect(result.current.comparisonLenses).toBeNull();
    expect(result.current.focusPair).toBeNull();
    expect(result.current.aperturePair).toBeNull();
    expect(result.current.zoomPair).toBeNull();
    expect(result.current.movementPair).toBeNull();
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
    expect(result.current.movementPair).not.toBeNull();
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
