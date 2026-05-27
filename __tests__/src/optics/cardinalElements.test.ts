import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { computeCardinalElementsAtState } from "../../../src/optics/cardinalElements.js";
import { doLayout } from "../../../src/optics/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import type { RuntimeLens, SurfaceData } from "../../../src/types/optics.js";

function cardinalsFor(L: RuntimeLens, focusT = 0, zoomT = 0) {
  const layout = doLayout(focusT, zoomT, L);
  return computeCardinalElementsAtState(L, focusT, zoomT, layout.z, layout.imgZ);
}

function minimalCardinalLens(surfaces: SurfaceData[]): RuntimeLens {
  const imageZ = surfaces.reduce((sum, surface) => sum + surface.d, 0);
  return {
    data: {
      key: "cardinal-fixture",
      name: "Cardinal fixture",
      closeFocusM: 0.5,
      focusStep: 0.004,
      maxFstop: 16,
      apertureStep: 0.004,
      fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
      elements: [],
      surfaces,
      svgW: 800,
      svgH: 400,
      scFill: 0.55,
      yScFill: 0.55,
      clipMargin: 1,
      maxRimAngleDeg: 64,
      gapSagFrac: 0.9,
      maxAspectRatio: 1.6,
      rayFractions: [-0.5, 0, 0.5],
      rayLeadFrac: 0.35,
      offAxisFieldFrac: 0.6,
      offAxisFractions: [-0.5, 0, 0.5],
      nominalFno: 2,
    },
    S: surfaces,
    N: surfaces.length,
    ES: [],
    elements: [],
    asphByIdx: {},
    varByIdx: {},
    vdByIdx: {},
    spectralByIdx: {},
    indexByIdx: {},
    varLabels: [],
    groups: [],
    doublets: [],
    perspectiveControl: null,
    aberrationControl: null,
    projection: { kind: "rectilinear" },
    opticalPath: { mode: "sequential", surfaceOrder: null, surfaceLabels: null, maxInteractions: surfaces.length + 1 },
    imagePlane: { z: imageZ, y: 0, normal: { z: 1, y: 0 }, label: "IMG" },
    isFoldedOptics: false,
    stopIdx: 0,
    stopPhysSD: surfaces[0]?.sd ?? 1,
    isZoom: false,
    zoomPositions: null,
    zoomLabels: null,
    zoomStep: 0.01,
    rayFractions: [-0.5, 0, 0.5],
    offAxisFractions: [-0.5, 0, 0.5],
    offAxisFieldFrac: 0.6,
  } as unknown as RuntimeLens;
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
    const L = minimalCardinalLens([{ label: "1", R: 100, d: 0, nd: 1.5, elemId: 1, sd: 10 }]);

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

  it("computes reflective cardinal elements for an axial folded primary mirror", () => {
    const L = buildLens(LENS_CATALOG["reference-spherical-primary-mirror"]);
    const result = cardinalsFor(L);

    expect(result).not.toBeNull();
    expect(result!.points.rearFocal.z).toBeCloseTo(L.imagePlane.z, 8);
    expect(Math.abs(result!.distances.efl.valueMm)).toBeCloseTo(L.EFL, 8);
    expect(result!.distances.efl.valueMm).toBeLessThan(0);
  });

  it("keeps tilted image-plane folded systems out of first-order cardinal reporting", () => {
    const L = buildLens(LENS_CATALOG["reference-newtonian-side-focus"]);

    expect(cardinalsFor(L)).toBeNull();
  });

  it("returns null for afocal or zero-power systems", () => {
    const L = minimalCardinalLens([{ label: "1", R: 1e15, d: 0, nd: 1, elemId: 1, sd: 10 }]);

    expect(computeCardinalElementsAtState(L, 0, 0, [0], 10)).toBeNull();
  });
});
