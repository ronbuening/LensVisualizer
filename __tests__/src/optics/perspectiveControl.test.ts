import { CATALOG_CONSTRUCTION_FIXTURES } from "./constructionFixtures.js";
import { describe, expect, it } from "vitest";
import { buildFixtureLens as buildLens } from "./constructionFixtures.js";
import { anchorLayoutToCamera } from "../../../src/optics/state/cameraLayout.js";
import { computeCardinalElements } from "../../../src/optics/analysis/summary/cardinals.js";
import { analysisRequestForLens } from "./testLensFixtures.js";
import { doLayoutForRuntimeLens as doLayout } from "../../../src/optics/state/runtimeAdapters.js";

const PC_LENSES = Object.values(CATALOG_CONSTRUCTION_FIXTURES).filter((data) => data.perspectiveControl != null);

describe("perspectiveControl lens data", () => {
  it("carries perspective-control config onto the built runtime lens", () => {
    const L = buildLens(CATALOG_CONSTRUCTION_FIXTURES["nikon-pc-nikkor-19mm-f4e-ed"]);
    const ordinary = buildLens(CATALOG_CONSTRUCTION_FIXTURES["nikkor-z-50f18s"]);

    expect(L.perspectiveControl?.shiftRangeMm).toEqual(
      CATALOG_CONSTRUCTION_FIXTURES["nikon-pc-nikkor-19mm-f4e-ed"].perspectiveControl?.shiftRangeMm,
    );
    expect(ordinary.perspectiveControl).toBeNull();
  });

  it("declares camera-fixed tilt pivots, with rear-vertex fallbacks at the reference rear vertex", () => {
    const tilting = PC_LENSES.filter((data) => data.perspectiveControl?.tiltPivot);
    expect(tilting.length).toBeGreaterThan(0);
    for (const data of tilting) {
      const L = buildLens(data);
      const pivot = L.perspectiveControl!.tiltPivot!;
      expect(pivot.frame, data.key).toBe("camera");
      if (pivot.basis === "rear-vertex-fallback") {
        const reference = doLayout(0, 0, L);
        expect(pivot.zOffsetFromImagePlaneMm, data.key).toBeCloseTo(reference.z.at(-1)! - reference.imgZ, 9);
      }
    }

    // Shift-only designs omit the pivot rather than inventing one.
    expect(CATALOG_CONSTRUCTION_FIXTURES["nikon-pc-nikkor-35mm-f28"].perspectiveControl?.tiltPivot).toBeUndefined();
  });

  it("places the Fujifilm patent-guided tilt center at the reference image-side principal point", () => {
    const L = buildLens(CATALOG_CONSTRUCTION_FIXTURES["fujifilm-gf-30mm-f56-ts"]);
    const reference = doLayout(0, 0, L);
    const cardinals = computeCardinalElements(analysisRequestForLens(L, 0, 0, 0), {
      zPos: reference.z,
      imagePlaneZ: reference.imgZ,
    });
    const pivot = L.perspectiveControl!.tiltPivot!;

    expect(pivot.basis).toBe("patent-principal-point-guidance");
    expect(pivot.zOffsetFromImagePlaneMm).toBe(
      -CATALOG_CONSTRUCTION_FIXTURES["fujifilm-gf-30mm-f56-ts"].focalLengthDesign!,
    );
    expect(pivot.zOffsetFromImagePlaneMm).toBeCloseTo(cardinals!.points.rearPrincipal.z - reference.imgZ, 3);
    expect(pivot.zOffsetFromImagePlaneMm).not.toBeCloseTo(reference.z.at(-1)! - reference.imgZ, 3);
  });

  it("keeps tilt pivots fixed in the camera frame across the focus range", () => {
    for (const data of PC_LENSES.filter((entry) => entry.perspectiveControl?.tiltPivot)) {
      const L = buildLens(data);
      const reference = doLayout(0, 0, L);
      const close = anchorLayoutToCamera(reference, doLayout(1, 0, L));
      const pivotOffset = L.perspectiveControl!.tiltPivot!.zOffsetFromImagePlaneMm;

      expect(close.imgZ + pivotOffset, data.key).toBe(reference.imgZ + pivotOffset);
      expect(Number.isFinite(close.z.at(-1)!), data.key).toBe(true);
    }
  });
});
