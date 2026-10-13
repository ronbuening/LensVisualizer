import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { anchorLayoutToCamera } from "../../../src/optics/cameraLayout.js";
import { computeCardinalElementsAtState } from "../../../src/optics/cardinalElements.js";
import { doLayout } from "../../../src/optics/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

const PC_LENSES = Object.values(LENS_CATALOG).filter((data) => data.perspectiveControl != null);

describe("perspectiveControl lens data", () => {
  it("carries perspective-control config onto the built runtime lens", () => {
    const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
    const ordinary = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);

    expect(L.perspectiveControl?.shiftRangeMm).toEqual(
      LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"].perspectiveControl?.shiftRangeMm,
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
    expect(LENS_CATALOG["nikon-pc-nikkor-35mm-f28"].perspectiveControl?.tiltPivot).toBeUndefined();
  });

  it("places the Fujifilm patent-guided tilt center at the reference image-side principal point", () => {
    const L = buildLens(LENS_CATALOG["fujifilm-gf-30mm-f56-ts"]);
    const reference = doLayout(0, 0, L);
    const cardinals = computeCardinalElementsAtState(L, 0, 0, reference.z, reference.imgZ, 0);
    const pivot = L.perspectiveControl!.tiltPivot!;

    expect(pivot.basis).toBe("patent-principal-point-guidance");
    expect(pivot.zOffsetFromImagePlaneMm).toBe(-LENS_CATALOG["fujifilm-gf-30mm-f56-ts"].focalLengthDesign!);
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
