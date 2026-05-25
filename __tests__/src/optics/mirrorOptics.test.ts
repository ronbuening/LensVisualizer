import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { computeElementShapes } from "../../../src/optics/diagramGeometry.js";
import { traceExactSurfaceStack } from "../../../src/optics/internal/exactSurfaceTrace.js";
import { doLayout, traceRay } from "../../../src/optics/optics.js";
import { obstructionAwareRayFractionsForDensity } from "../../../src/optics/raySampling.js";
import validateLensData from "../../../src/optics/validateLensData.js";
import type { LensData } from "../../../src/types/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

const mirrorData = LENS_CATALOG["reference-spherical-primary-mirror"] as LensData;
const annularData = LENS_CATALOG["reference-annular-obscured-mirror"] as LensData;
const manginData = LENS_CATALOG["reference-mangin-second-surface-mirror"] as LensData;
const newtonianData = LENS_CATALOG["reference-newtonian-side-focus"] as LensData;
const cassegrainData = LENS_CATALOG["reference-cassegrain-back-focus"] as LensData;

function reflectYz(incidentY: number, incidentZ: number, normalY: number, normalZ: number): [number, number] {
  const dot = incidentY * normalY + incidentZ * normalZ;
  const y = incidentY - 2 * dot * normalY;
  const z = incidentZ - 2 * dot * normalZ;
  const inv = 1 / Math.hypot(y, z);
  return [y * inv, z * inv];
}

describe("mirror optics support", () => {
  it("validates mirror-specific surface and optical path fields", () => {
    expect(validateLensData(mirrorData)).toEqual([]);

    const badInner = validateLensData({
      ...mirrorData,
      surfaces: mirrorData.surfaces.map((surface) =>
        surface.label === "M1" ? { ...surface, innerSd: surface.sd } : surface,
      ),
    });
    expect(badInner.some((error) => error.includes("innerSd"))).toBe(true);

    const badPath = validateLensData({
      ...mirrorData,
      opticalPath: { ...mirrorData.opticalPath, surfaceOrder: ["MISSING"] },
    });
    expect(badPath.some((error) => error.includes("opticalPath.surfaceOrder"))).toBe(true);
  });

  it("builds the hidden spherical mirror fixture as folded optics", () => {
    const L = buildLens(mirrorData);

    expect(L.isFoldedOptics).toBe(true);
    expect(L.imagePlane.z).toBe(0);
    expect(L.imagePlane.normal).toEqual({ z: 1, y: 0 });
    expect(L.opticalPath.surfaceLabels).toEqual(["STO", "M1"]);
    expect(L.opticalPath.surfaceOrder).toEqual([0, 1]);
    expect(L.FOPEN).toBeCloseTo(4, 10);
  });

  it("reflects a first-surface mirror ray according to the local surface normal", () => {
    const L = buildLens(mirrorData);
    const layout = doLayout(0, 0, L);
    const result = traceExactSurfaceStack(L, { y0: 5, uy0: 0 }, { zPos: layout.z, leadDistance: 0 });
    const mirrorHit = result.hits.find((hit) => hit.surfaceIdx === L.labelIdx.M1);

    expect(mirrorHit).toBeDefined();
    expect(result.reachedImagePlane).toBe(true);
    expect(result.failureReason).toBeNull();

    const [expectedY, expectedZ] = reflectYz(0, 1, mirrorHit!.normal[1], mirrorHit!.normal[2]);
    expect(result.terminalDirection[1]).toBeCloseTo(expectedY, 10);
    expect(result.terminalDirection[2]).toBeCloseTo(expectedZ, 10);
  });

  it("traces finite visible rays to the explicit front image plane", () => {
    const L = buildLens(mirrorData);
    const layout = doLayout(0, 0, L);
    const result = traceRay(1, 0, layout.z, 0, 0, L.stopPhysSD, true, L);
    const lastPoint = result.pts[result.pts.length - 1];

    expect(layout.imgZ).toBe(0);
    expect(result.reachedImagePlane).toBe(true);
    expect(result.clipped).toBe(false);
    expect(result.y).toBeCloseTo(0, 2);
    expect(lastPoint[0]).toBeCloseTo(L.imagePlane.z, 10);
    expect(lastPoint[1]).toBeCloseTo(result.y, 10);
  });

  it("clips central rays on an obstruction while sampling the usable annular pupil", () => {
    const L = buildLens(annularData);
    const layout = doLayout(0, 0, L);
    const central = traceExactSurfaceStack(L, { y0: 0, uy0: 0 }, { zPos: layout.z, leadDistance: 0 });
    const obstructionHit = central.hits.find((hit) => hit.surfaceIdx === L.labelIdx.OBS);

    expect(validateLensData(annularData)).toEqual([]);
    expect(obstructionHit).toBeDefined();
    expect(obstructionHit!.clipped).toBe(true);
    expect(central.clipped).toBe(true);

    const samples = obstructionAwareRayFractionsForDensity(L, L.rayFractions, "normal", L.EP.epSD);
    const blockedFraction = L.S[L.labelIdx.OBS].sd / L.EP.epSD;
    expect(samples.length).toBeGreaterThan(0);
    expect(samples.every((fraction) => Math.abs(fraction) >= blockedFraction - 1e-9)).toBe(true);
  });

  it("renders annular mirror elements with an even-odd aperture hole", () => {
    const L = buildLens(annularData);
    const layout = doLayout(0, 0, L);
    const shapes = computeElementShapes(
      L,
      layout.z,
      (z) => z,
      (y) => y,
    );
    const mirrorShape = shapes.find((shape) => shape.eid === 1);

    expect(mirrorShape).toBeDefined();
    expect(mirrorShape!.fillRule).toBe("evenodd");
    expect((mirrorShape!.d.match(/M/g) ?? []).length).toBeGreaterThan(1);
  });

  it("supports second-surface mirrors that exit through a repeated front surface", () => {
    const L = buildLens(manginData);
    const layout = doLayout(0, 0, L);
    const result = traceExactSurfaceStack(L, { y0: 4, uy0: 0 }, { zPos: layout.z, leadDistance: 0 });
    const hitLabels = result.hits.map((hit) => L.S[hit.surfaceIdx].label);

    expect(validateLensData(manginData)).toEqual([]);
    expect(L.isFoldedOptics).toBe(true);
    expect(hitLabels).toEqual(["STO", "MG1", "MG2", "MG1"]);
    expect(result.reachedImagePlane).toBe(true);
    expect(result.failureReason).toBeNull();
    expect(result.clipped).toBe(false);
    expect(result.n).toBeCloseTo(1, 12);
    expect(result.terminalPoint[2]).toBeCloseTo(L.imagePlane.z, 10);
    expect(Number.isFinite(result.terminalPoint[1])).toBe(true);
  });

  it("automatically resolves a folded Newtonian path to a side image plane", () => {
    const L = buildLens(newtonianData);
    const layout = doLayout(0, 0, L);
    const result = traceExactSurfaceStack(L, { y0: 12, uy0: 0 }, { zPos: layout.z, leadDistance: 0 });
    const hitLabels = result.hits.map((hit) => L.S[hit.surfaceIdx].label);

    expect(validateLensData(newtonianData)).toEqual([]);
    expect(L.opticalPath.mode).toBe("auto");
    expect(L.opticalPath.surfaceOrder).toBeNull();
    expect(L.imagePlane.normal).toEqual({ z: 0, y: 1 });
    expect(hitLabels).toEqual(["M1", "SEC"]);
    expect(result.reachedImagePlane).toBe(true);
    expect(result.failureReason).toBeNull();
    expect(result.clipped).toBe(false);
    expect(result.terminalPoint[1]).toBeCloseTo(25, 10);
    expect(Number.isFinite(result.terminalPoint[2])).toBe(true);
  });

  it("supports a Cassegrain-style obstruction and back-focus image plane fixture", () => {
    const L = buildLens(cassegrainData);
    const layout = doLayout(0, 0, L);
    const central = traceExactSurfaceStack(L, { y0: 0, uy0: 0 }, { zPos: layout.z, leadDistance: 0 });
    const marginal = traceExactSurfaceStack(L, { y0: 12, uy0: 0 }, { zPos: layout.z, leadDistance: 0 });
    const centralSecondary = central.hits.find((hit) => hit.surfaceIdx === L.labelIdx.SEC);
    const marginalHitLabels = marginal.hits.map((hit) => L.S[hit.surfaceIdx].label);
    const samples = obstructionAwareRayFractionsForDensity(L, L.rayFractions, "normal", L.EP.epSD);
    const blockedFraction = L.S[L.labelIdx.SEC].sd / L.EP.epSD;

    expect(validateLensData(cassegrainData)).toEqual([]);
    expect(centralSecondary?.clipped).toBe(true);
    expect(central.clipped).toBe(true);
    expect(marginalHitLabels).toEqual(["M1", "SEC"]);
    expect(marginal.reachedImagePlane).toBe(true);
    expect(marginal.clipped).toBe(false);
    expect(marginal.terminalPoint[2]).toBeCloseTo(L.imagePlane.z, 10);
    expect(samples.every((fraction) => Math.abs(fraction) >= blockedFraction - 1e-9)).toBe(true);
  });
});
