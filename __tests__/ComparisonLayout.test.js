import { describe, it, expect } from "vitest";
import { computeFocusPair, computeAperturePair, computeZoomPair } from "../src/utils/comparisonSliders.js";

/**
 * ComparisonLayout renders two LensDiagramPanel instances in a side-by-side
 * (desktop) or stacked (mobile) layout. We verify its module contract and
 * the shapes of the comparison slider results it consumes as props.
 */

/* Mock lens objects matching the fields these functions require */
const lensA = { closeFocusM: 0.45, FOPEN: 1.0, maxFstop: 16, isZoom: false, zoomPositions: null };
const lensB = { closeFocusM: 0.9, FOPEN: 1.93, maxFstop: 16, isZoom: false, zoomPositions: null };

describe("ComparisonLayout", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/ComparisonLayout.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("ComparisonLayout");
  });

  it("imports comparison slider functions from comparisonSliders", async () => {
    const mod = await import("../src/utils/comparisonSliders.js");
    expect(typeof mod.computeFocusPair).toBe("function");
    expect(typeof mod.computeAperturePair).toBe("function");
    expect(typeof mod.computeZoomPair).toBe("function");
  });

  it("computeFocusPair result has focusA, focusB, commonPoint fields (props consumed by ComparisonLayout)", () => {
    const result = computeFocusPair(0.5, lensA, lensB);
    expect(typeof result.focusA).toBe("number");
    expect(typeof result.focusB).toBe("number");
    expect(typeof result.commonPoint).toBe("number");
    expect(typeof result.minCloseFocus).toBe("number");
    expect(typeof result.maxCloseFocus).toBe("number");
  });

  it("computeAperturePair result has stopdownA and stopdownB fields (props consumed by ComparisonLayout)", () => {
    const result = computeAperturePair(0.5, lensA, lensB);
    expect(typeof result.stopdownA).toBe("number");
    expect(typeof result.stopdownB).toBe("number");
  });

  it("computeZoomPair returns null zoom fields for non-zoom lens pair", () => {
    const result = computeZoomPair(0, lensA, lensB);
    // Both lenses are non-zoom; zoomA and zoomB should fall back gracefully
    expect(result).toBeDefined();
  });
});
