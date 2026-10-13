import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { foldedHitOrderLabelsForDisplay } from "../../../src/optics/foldedPathDisplay.js";
import { doLayout } from "../../../src/optics/optics.js";
import type { LensData, RuntimeLens } from "../../../src/types/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import { sharedNokton50f1 } from "./testLensFixtures.js";

/* The auto-mode probe path is covered in mirrorOptics.test.ts; these pin the other branches the
 * folded-path label in the UI depends on. */
function labels(L: RuntimeLens | undefined, stopScale = 1): string[] {
  const zPos = L ? doLayout(0, 0, L).z : [];
  return foldedHitOrderLabelsForDisplay({
    L,
    zPos,
    focusT: 0,
    zoomT: 0,
    aberrationT: 0,
    currentPhysStopSD: (L?.stopPhysSD ?? 0) * stopScale,
    currentEPSD: L?.EP.epSD ?? 0,
  });
}

describe("foldedHitOrderLabelsForDisplay", () => {
  it("returns no labels for a missing or non-folded lens", () => {
    expect(labels(undefined)).toEqual([]);
    expect(labels(sharedNokton50f1())).toEqual([]);
  });

  it("uses the authored hit order verbatim when the path declares one", () => {
    const L = buildLens(LENS_CATALOG["reference-annular-obscured-mirror"] as LensData);
    expect(L.opticalPath.surfaceLabels?.length).toBeGreaterThan(0);
    expect(labels(L)).toEqual(L.opticalPath.surfaceLabels);
  });

  it("falls back to the first diagnostic hit order when every probe ray clips", () => {
    // A pinhole stop clips every off-axis probe and the central blocker stops the axial one.
    const L = buildLens(LENS_CATALOG["reference-annular-ring-blocker"] as LensData);
    const fallback = labels(L, 1e-4);
    expect(fallback.length).toBeGreaterThan(0);
    expect(L.S.map((surface) => surface.label)).toEqual(expect.arrayContaining(fallback));
  });
});
