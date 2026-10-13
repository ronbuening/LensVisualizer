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

  it("infers the auto folded Cassegrain order and matches its closed-form focal geometry", () => {
    /* With no surfaceOrder, cardinals must discover the reflective hit order by real-ray sampling; central samples
     * are blocked by the secondary, so the search has to walk out to the annular pupil. A flat secondary leaves the
     * primary's f = |R|/2 (the authored L.EFL) unchanged, the second reflection restores a positive EFL, and F' folds
     * to 2·z_SEC − z_F1. Flat + spherical paraxial power is exact, so only float rounding is tolerated. */
    const L = buildLens(LENS_CATALOG["reference-cassegrain-back-focus"]);
    const layout = doLayout(0, 0, L);
    const primaryFocusZ = layout.z[L.labelIdx.M1] + L.S[L.labelIdx.M1].R / 2;
    const result = cardinalsFor(L);

    expect(L.opticalPath.mode).toBe("auto");
    expect(L.opticalPath.surfaceOrder).toBeNull();
    expect(result).not.toBeNull();
    expect(result!.distances.efl.valueMm).toBeCloseTo(L.EFL, 8);
    expect(result!.points.rearFocal.z).toBeCloseTo(2 * layout.z[L.labelIdx.SEC] - primaryFocusZ, 8);
  });

  it("reports the closed-form Gregorian first order through an explicit folded surface order", () => {
    /* The concave secondary sits s beyond the primary focus and relays it to s' = 1 / (1/f2 - 1/s); the intermediate
     * real image makes the system EFL -f1·s'/s (an erect final image). Paraxial power is exact for spherical mirrors. */
    const L = buildLens(LENS_CATALOG["reference-gregorian-secondary"]);
    const layout = doLayout(0, 0, L);
    const f1 = Math.abs(L.S[L.labelIdx.M1].R) / 2;
    const f2 = Math.abs(L.S[L.labelIdx.SEC].R) / 2;
    const secondaryZ = layout.z[L.labelIdx.SEC];
    const s = layout.z[L.labelIdx.M1] - f1 - secondaryZ;
    const sPrime = 1 / (1 / f2 - 1 / s);
    const result = cardinalsFor(L);

    expect(L.opticalPath.surfaceOrder).toEqual([L.labelIdx.M1, L.labelIdx.SEC]);
    expect(result).not.toBeNull();
    expect(result!.distances.efl.valueMm).toBeCloseTo((-f1 * sPrime) / s, 8);
    expect(result!.points.rearFocal.z).toBeCloseTo(secondaryZ + sPrime, 8);
    // The fixture is authored so that relay lands on its image plane with |EFL| equal to the design focal length.
    expect(result!.points.rearFocal.z).toBeCloseTo(L.imagePlane.z, 8);
    expect(Math.abs(result!.distances.efl.valueMm)).toBeCloseTo(L.EFL, 8);
  });

  it("keeps auto-ordered folded cardinals consistent with the lens EFL across the catalog", () => {
    /* Auto-mode lenses without a surfaceOrder (production catadioptrics included) all run the sampled hit-order
     * inference. It must never throw, and any EFL it yields must match L.EFL — for folded lenses the authored
     * focalLengthDesign that sizes the nominal pupil — within 1%: looser than patent focal-length rounding, far
     * tighter than a dropped curved reflection or a wrong hit order. */
    const swept: string[] = [];
    const offenders: string[] = [];
    let compared = 0;
    for (const [key, data] of Object.entries(LENS_CATALOG)) {
      if (data.opticalPath?.mode !== "auto" || data.opticalPath.surfaceOrder?.length) continue;
      swept.push(key);
      try {
        const L = buildLens(data);
        const efl = cardinalsFor(L)?.distances.efl.valueMm;
        if (efl === undefined) continue;
        compared++;
        if (!Number.isFinite(efl) || Math.abs(Math.abs(efl) / L.EFL - 1) > 0.01) {
          offenders.push(`${key}: cardinal EFL ${efl} vs L.EFL ${L.EFL}`);
        }
      } catch (error) {
        offenders.push(`${key}: threw ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    expect(swept.length).toBeGreaterThan(0);
    expect(compared).toBeGreaterThan(0);
    expect(offenders).toEqual([]);
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
