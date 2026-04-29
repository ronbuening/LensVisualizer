import { describe, expect, it } from "vitest";
import buildLens from "../src/optics/buildLens.js";
import { computeCardinalElementsAtState } from "../src/optics/cardinalElements.js";
import { doLayout } from "../src/optics/optics.js";
import { LENS_CATALOG } from "../src/utils/lensCatalog.js";
import type { RuntimeLens } from "../src/types/optics.js";

function cardinalsFor(L: RuntimeLens, focusT = 0, zoomT = 0) {
  const layout = doLayout(focusT, zoomT, L);
  return computeCardinalElementsAtState(L, focusT, zoomT, layout.z, layout.imgZ);
}

describe("computeCardinalElementsAtState", () => {
  it("computes the full same-index cardinal set and marks H/N coincidence", () => {
    const L = buildLens(LENS_CATALOG["nokton-50f1"]);
    const result = cardinalsFor(L);

    expect(result).not.toBeNull();
    expect(result!.objectIndex).toBe(1);
    expect(result!.imageIndex).toBeCloseTo(1, 12);
    expect(result!.nodalPrincipalCoincident).toBe(true);
    expect(result!.points.frontNodal.z).toBeCloseTo(result!.points.frontPrincipal.z, 8);
    expect(result!.points.rearNodal.z).toBeCloseTo(result!.points.rearPrincipal.z, 8);
    expect(result!.distances.efl.valueMm).toBeCloseTo(L.EFL, 8);
  });

  it("computes nodal points independently when image-side index differs", () => {
    const L = {
      S: [{ label: "1", R: 100, d: 0, nd: 1.5, elemId: 1, sd: 10 }],
      varByIdx: {},
      isZoom: false,
      N: 1,
    } as unknown as RuntimeLens;

    const result = computeCardinalElementsAtState(L, 0, 0, [0], 20);

    expect(result).not.toBeNull();
    expect(result!.imageIndex).toBeCloseTo(1.5, 12);
    expect(result!.nodalPrincipalCoincident).toBe(false);
    expect(result!.points.frontPrincipal.z).toBeCloseTo(0, 10);
    expect(result!.points.rearPrincipal.z).toBeCloseTo(0, 10);
    expect(result!.points.frontNodal.z).toBeCloseTo(100, 10);
    expect(result!.points.rearNodal.z).toBeCloseTo(100, 10);
    expect(result!.distances.efl.valueMm).toBeCloseTo(300, 10);
  });

  it("reports signed axial distances with explicit endpoints", () => {
    const L = buildLens(LENS_CATALOG["nokton-50f1"]);
    const result = cardinalsFor(L)!;

    expect(result.distances.bfd.valueMm).toBeCloseTo(result.points.rearFocal.z - result.rearVertexZ, 10);
    expect(result.distances.ffd.valueMm).toBeCloseTo(result.frontVertexZ - result.points.frontFocal.z, 10);
    expect(result.distances.hiatus.valueMm).toBeCloseTo(
      result.points.frontPrincipal.z - result.points.rearPrincipal.z,
      10,
    );
    expect(result.distances.totalTrack.valueMm).toBeCloseTo(result.imagePlaneZ - result.frontVertexZ, 10);
  });

  it("updates with current focus state for variable-gap lenses", () => {
    const L = buildLens(LENS_CATALOG["sony-fe-90mm-f2p8-macro"]);
    const infinity = cardinalsFor(L, 0, 0)!;
    const close = cardinalsFor(L, 1, 0)!;

    expect(close.distances.efl.valueMm).not.toBeCloseTo(infinity.distances.efl.valueMm, 3);
    expect(close.points.rearPrincipal.z).not.toBeCloseTo(infinity.points.rearPrincipal.z, 3);
  });

  it("returns null for afocal or zero-power systems", () => {
    const L = {
      S: [{ label: "1", R: 1e15, d: 0, nd: 1, elemId: 1, sd: 10 }],
      varByIdx: {},
      isZoom: false,
      N: 1,
    } as unknown as RuntimeLens;

    expect(computeCardinalElementsAtState(L, 0, 0, [0], 10)).toBeNull();
  });
});
