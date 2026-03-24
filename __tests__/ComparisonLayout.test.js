import { describe, it, expect } from "vitest";

/**
 * ComparisonLayout renders two LensDiagramPanel instances in a side-by-side
 * (desktop) or stacked (mobile) layout. We verify its module contract and
 * the types it depends on.
 */

describe("ComparisonLayout", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/ComparisonLayout.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("ComparisonLayout");
  });

  it("imports comparison slider result types from comparisonSliders", async () => {
    const mod = await import("../src/utils/comparisonSliders.js");
    expect(typeof mod.computeFocusPair).toBe("function");
    expect(typeof mod.computeAperturePair).toBe("function");
    expect(typeof mod.computeZoomPair).toBe("function");
  });
});
