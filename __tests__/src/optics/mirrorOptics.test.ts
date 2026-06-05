import { describe, expect, it } from "vitest";
import {
  computeBestFocusZ,
  computeSAProfile,
  computeSphericalAberration,
} from "../../../src/optics/aberrationAnalysis.js";
import buildLens from "../../../src/optics/buildLens.js";
import { computeElementShapes } from "../../../src/optics/diagramGeometry.js";
import { foldedHitOrderLabelsForDisplay } from "../../../src/optics/foldedPathDisplay.js";
import {
  traceExactSurfaceStack,
  traceExactSurfaceStackVector,
  traceToStopViaGeneralized,
  type ExactTraceLens,
} from "../../../src/optics/internal/exactSurfaceTrace.js";
import { computeGroupMovementProfile } from "../../../src/optics/groupMovement.js";
import {
  conjugateK,
  doLayout,
  entrancePupilAtState,
  solveChiefRay,
  stopInnerBlockedSemiDiameter,
  SVG_PATH_SUBDIVISIONS,
  traceRay,
} from "../../../src/optics/optics.js";
import { obstructionAwareRayFractionsForDensity } from "../../../src/optics/raySampling.js";
import validateLensData from "../../../src/optics/validateLensData.js";
import type { LensData, RuntimeLens } from "../../../src/types/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

const mirrorData = LENS_CATALOG["reference-spherical-primary-mirror"] as LensData;
const annularData = LENS_CATALOG["reference-annular-obscured-mirror"] as LensData;
const manginData = LENS_CATALOG["reference-mangin-second-surface-mirror"] as LensData;
const newtonianData = LENS_CATALOG["reference-newtonian-side-focus"] as LensData;
const cassegrainData = LENS_CATALOG["reference-cassegrain-back-focus"] as LensData;
const maksutovData = LENS_CATALOG["reference-maksutov-cassegrain-meniscus"] as LensData;
const gregorianData = LENS_CATALOG["reference-gregorian-secondary"] as LensData;
const ringBlockerData = LENS_CATALOG["reference-annular-ring-blocker"] as LensData;
const nikonReflex500NewData = LENS_CATALOG["nikon-reflex-nikkor-500mm-f8-new"] as LensData;
const nikonReflex1000Data = LENS_CATALOG["nikon-reflex-nikkor-1000mm-f11"] as LensData;
const nikonReflexC500Data = LENS_CATALOG["nikon-reflex-nikkor-c-500mm-f8"] as LensData;
const planarData = LENS_CATALOG["zeiss-planar-t-50f14"] as LensData;

function reflectYz(incidentY: number, incidentZ: number, normalY: number, normalZ: number): [number, number] {
  const dot = incidentY * normalY + incidentZ * normalZ;
  const y = incidentY - 2 * dot * normalY;
  const z = incidentZ - 2 * dot * normalZ;
  const inv = 1 / Math.hypot(y, z);
  return [y * inv, z * inv];
}

function pathCoords(pathD: string): [number, number][] {
  return [...pathD.matchAll(/[ML]([\d.e+-]+),([\d.e+-]+)/g)].map((match) => [Number(match[1]), Number(match[2])]);
}

function imagePlaneCoordinateFromTrace(result: { pts: number[][] }, L: RuntimeLens): number {
  const point = result.pts[result.pts.length - 1]!;
  const tangentZ = -L.imagePlane.normal.y;
  const tangentY = L.imagePlane.normal.z;
  return (point[0] - L.imagePlane.z) * tangentZ + (point[1] - L.imagePlane.y) * tangentY;
}

function singleSurfaceBackHitMirror(
  interaction: ExactTraceLens["S"][number]["interaction"],
  surface?: Partial<ExactTraceLens["S"][number]>,
): ExactTraceLens {
  return {
    S: [
      {
        label: "M1",
        R: 1e15,
        d: 0,
        nd: 1,
        sd: 10,
        ...surface,
        interaction,
      },
    ],
    asphByIdx: {},
    opticalPath: { mode: "sequential", surfaceOrder: [0], surfaceLabels: ["M1"], maxInteractions: 3 },
    imagePlane: { z: -10, y: 0, normal: { z: 1, y: 0 }, label: "IMG" },
    isFoldedOptics: true,
  };
}

function traceBackSideMirror(lens: ExactTraceLens, y: number) {
  return traceExactSurfaceStackVector(
    lens,
    { origin: [0, y, 10], direction: [0, 0, -1] },
    { zPos: [0], launchBoundT: 25, stopOnClip: true },
  );
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

    const badBackingNormal = validateLensData({
      ...newtonianData,
      surfaces: newtonianData.surfaces.map((surface) =>
        surface.label === "SECB" ? { ...surface, interaction: { type: "refract" } } : surface,
      ),
    });
    expect(badBackingNormal.some((error) => error.includes("tilted mirror backing plane"))).toBe(true);

    const badMaxInteractions = validateLensData({
      ...mirrorData,
      opticalPath: { ...mirrorData.opticalPath, maxInteractions: 2 },
    });
    expect(badMaxInteractions.some((error) => error.includes("opticalPath.maxInteractions"))).toBe(true);

    const badInnerPair = validateLensData({
      ...annularData,
      surfaces: annularData.surfaces.map((surface) =>
        surface.label === "M1B" ? { ...surface, innerSd: undefined } : surface,
      ),
    });
    expect(badInnerPair.some((error) => error.includes("matching innerSd"))).toBe(true);

    const unreachableImagePlane = validateLensData({
      ...mirrorData,
      opticalPath: { ...mirrorData.opticalPath, imagePlane: { z: 500, label: "IMG" } },
    });
    expect(unreachableImagePlane.some((error) => error.includes("imagePlane"))).toBe(true);
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

  it("blocks inactive-side hits on reflective surfaces by default", () => {
    const lens = singleSurfaceBackHitMirror({
      type: "reflect",
      incidentSide: "front",
      mirrorKind: "first-surface",
    });
    const result = traceBackSideMirror(lens, 5);

    expect(result.clipped).toBe(true);
    expect(result.reachedImagePlane).toBe(false);
    expect(result.hits).toHaveLength(1);
    expect(result.hits[0]!.clipReason).toBe("inactive-side-block");
    expect(result.diagnostics.clipEvents).toContainEqual({
      surfaceIdx: 0,
      surfaceLabel: "M1",
      reason: "inactive-side-block",
      failureReason: null,
    });
  });

  it("blocks inactive annular mirror rings while passing central holes", () => {
    const lens = singleSurfaceBackHitMirror(
      {
        type: "reflect",
        incidentSide: "front",
        mirrorKind: "first-surface",
      },
      { innerSd: 3 },
    );
    const central = traceBackSideMirror(lens, 2);
    const ring = traceBackSideMirror(lens, 5);

    expect(central.clipped).toBe(false);
    expect(central.reachedImagePlane).toBe(true);
    expect(ring.clipped).toBe(true);
    expect(ring.hits[0]!.clipReason).toBe("inactive-side-block");
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

  it("anchors the spherical primary fixture to the closed-form R/2 focal plane", () => {
    const L = buildLens(mirrorData);
    const layout = doLayout(0, 0, L);
    const mirror = L.S[L.labelIdx.M1];
    const expectedFocusZ = layout.z[L.labelIdx.M1] + mirror.R / 2;

    expect(L.imagePlane.z).toBeCloseTo(expectedFocusZ, 10);
  });

  it("traces off-axis spherical-mirror chief rays to the rectilinear image height", () => {
    const L = buildLens(mirrorData);
    const layout = doLayout(0, 0, L);
    const fieldDeg = 2;
    const expected = L.EFL * Math.tan((fieldDeg * Math.PI) / 180);

    const positiveSolve = solveChiefRay(fieldDeg, 0, 0, L);
    const negativeSolve = solveChiefRay(-fieldDeg, 0, 0, L);
    const positive = traceRay(positiveSolve.yLaunch, positiveSolve.uField, layout.z, 0, 0, L.stopPhysSD, true, L);
    const negative = traceRay(negativeSolve.yLaunch, negativeSolve.uField, layout.z, 0, 0, L.stopPhysSD, true, L);
    const positiveHeight = imagePlaneCoordinateFromTrace(positive, L);
    const negativeHeight = imagePlaneCoordinateFromTrace(negative, L);

    expect(positiveSolve.status).toBe("converged");
    expect(positive.reachedImagePlane).toBe(true);
    expect(negative.reachedImagePlane).toBe(true);
    expect(positive.clipped).toBe(false);
    expect(negative.clipped).toBe(false);
    expect(Math.abs(positiveHeight)).toBeCloseTo(expected, 2);
    expect(positiveHeight).toBeCloseTo(-negativeHeight, 8);
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

  it("resolves central stop blockers from folded obstruction geometry", () => {
    const annular = buildLens(annularData);
    const nikon = buildLens(nikonReflex500NewData);
    const ringBlocker = buildLens(ringBlockerData);

    expect(stopInnerBlockedSemiDiameter(annular)).toBeCloseTo(6, 12);
    expect(stopInnerBlockedSemiDiameter(nikon)).toBeCloseTo(20.35, 12);
    expect(stopInnerBlockedSemiDiameter(ringBlocker)).toBe(0);
  });

  it("prefers an explicitly authored stop inner semi-diameter", () => {
    const explicitStopData = {
      ...annularData,
      surfaces: annularData.surfaces.map((surface) => (surface.label === "STO" ? { ...surface, innerSd: 4 } : surface)),
    } satisfies LensData;
    const L = buildLens(explicitStopData);

    expect(stopInnerBlockedSemiDiameter(L)).toBe(4);
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

  it("supports the Nikon 500mm New rear corrector nested inside the annular primary opening", () => {
    const L = buildLens(nikonReflex500NewData);
    const layout = doLayout(0, 0, L);
    const samples = obstructionAwareRayFractionsForDensity(L, L.rayFractions, "normal", L.EP.epSD);
    const sample = samples.find((fraction) => fraction > 0) ?? samples[0] ?? 0;
    const result = traceRay(sample * L.EP.epSD, 0, layout.z, 0, 0, L.stopPhysSD, true, L);

    expect(validateLensData(nikonReflex500NewData)).toEqual([]);
    expect(L.isFoldedOptics).toBe(true);
    expect(result.clipped).toBe(false);
    expect(result.reachedImagePlane).toBe(true);
    expect(result.diagnostics?.hitSurfaceLabels).toContain("4");
    expect(result.diagnostics?.hitSurfaceLabels).toContain("14");
    expect(result.diagnostics?.finalMedium).toBeCloseTo(1, 12);
  });

  it("moves the Nikon 500mm New L1/M2 focus unit toward the object at close focus", () => {
    const L = buildLens(nikonReflex500NewData);
    const profile = computeGroupMovementProfile(L, "focus", { focusT: 1, zoomT: 0 });
    const shiftByGroup = new Map(profile.series.map((series) => [series.group.label, series.currentPoint.shiftMm]));

    expect(validateLensData(nikonReflex500NewData)).toEqual([]);
    expect(shiftByGroup.get("L1")).toBeCloseTo(-8.05, 10);
    expect(shiftByGroup.get("M2")).toBeCloseTo(-8.05, 10);
    expect(shiftByGroup.get("L2")).toBeCloseTo(0, 10);
    expect(shiftByGroup.get("M1")).toBeCloseTo(0, 10);
  });

  it("tracks close-focus rays through the Nikon 500mm New annular pupil", () => {
    const L = buildLens(nikonReflex500NewData);
    const layout = doLayout(1, 0, L);
    const ep = entrancePupilAtState(L.stopPhysSD, 1, 0, L).epSD;
    const focusK = conjugateK(1, 0, L);
    const rayHeight = 0.8 * ep;
    const infinityRay = traceRay(rayHeight, 0, layout.z, 1, 0, L.stopPhysSD, true, L);
    const trackedRay = traceRay(rayHeight, rayHeight * focusK, layout.z, 1, 0, L.stopPhysSD, true, L);

    expect(focusK).toBeGreaterThan(0);
    expect(infinityRay.clipped).toBe(false);
    expect(trackedRay.clipped).toBe(false);
    expect(Math.abs(trackedRay.y)).toBeLessThan(Math.abs(infinityRay.y) * 0.1);
  });

  it("keeps the Nikon 1000mm primary mirror thickness and folded intervals aligned to the patent", () => {
    const L = buildLens(nikonReflex1000Data);
    const layout = doLayout(0, 0, L);
    const indexByLabel = new Map(L.S.map((surface, index) => [surface.label, index]));
    const z = (label: string) => layout.z[indexByLabel.get(label)!]!;
    const samples = obstructionAwareRayFractionsForDensity(L, L.rayFractions, "normal", L.EP.epSD);
    const sample = samples.find((fraction) => fraction > 0) ?? samples[0] ?? 0;
    const result = traceRay(sample * L.EP.epSD, 0, layout.z, 0, 0, L.stopPhysSD, true, L);
    const hitLabels = result.diagnostics?.hitSurfaceLabels ?? [];

    expect(validateLensData(nikonReflex1000Data)).toEqual([]);
    expect(z("M1R") - z("M1F")).toBeCloseTo(10, 12);
    expect(z("M1R") - z("M2F")).toBeCloseTo(147, 12);
    expect(z("L2F") - z("M2F")).toBeCloseTo(150, 12);
    expect(z("L2F")).toBeGreaterThan(z("M1R"));
    expect(hitLabels.indexOf("M1R")).toBeGreaterThan(hitLabels.indexOf("M1F"));
    expect(hitLabels.indexOf("L2F")).toBeGreaterThan(hitLabels.indexOf("M2F"));
    expect(result.clipped).toBe(false);
    expect(result.reachedImagePlane).toBe(true);
  });

  it("keeps the Nikon Reflex-Nikkor C 500mm L3 inside the primary clear center", () => {
    const L = buildLens(nikonReflexC500Data);
    const layout = doLayout(0, 0, L);
    const indexByLabel = new Map(L.S.map((surface, index) => [surface.label, index]));
    const z = (label: string) => layout.z[indexByLabel.get(label)!]!;
    const shapes = computeElementShapes(
      L,
      layout.z,
      (zValue) => zValue,
      (yValue) => yValue,
    );
    const l3Shape = shapes.find((shape) => shape.eid === 4);
    const primaryShape = shapes.find((shape) => shape.eid === 5);
    const l4Shape = shapes.find((shape) => shape.eid === 6);
    const samples = obstructionAwareRayFractionsForDensity(L, L.rayFractions, "normal", L.EP.epSD);
    const sample = samples.find((fraction) => fraction > 0) ?? samples[0] ?? 0;
    const result = traceRay(sample * L.EP.epSD, 0, layout.z, 0, 0, L.stopPhysSD, true, L);
    const hitLabels = result.diagnostics?.hitSurfaceLabels ?? [];

    expect(validateLensData(nikonReflexC500Data)).toEqual([]);
    expect(z("9")).toBeCloseTo(z("3"), 12);
    expect(z("10")).toBeCloseTo(z("4M"), 12);
    expect(z("10") - z("9")).toBeCloseTo(8.800611, 6);
    expect(z("4M") - z("3")).toBeCloseTo(z("10") - z("9"), 12);
    expect(Math.max(...pathCoords(l3Shape!.d).map(([, y]) => Math.abs(y)))).toBeLessThanOrEqual(18.5 + 1e-9);
    expect(Math.max(...pathCoords(l4Shape!.d).map(([, y]) => Math.abs(y)))).toBeLessThanOrEqual(18.5 + 1e-9);
    expect(primaryShape?.fillRule).toBe("evenodd");
    expect(hitLabels.slice(-4)).toEqual(["7", "8", "9", "10"]);
    expect(result.clipped).toBe(false);
    expect(result.reachedImagePlane).toBe(true);
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

  it("clips Newtonian off-axis chief rays that hit the blocking secondary", () => {
    const L = buildLens(newtonianData);
    const layout = doLayout(0, 0, L);
    const fieldDeg = 2;

    const positiveSolve = solveChiefRay(fieldDeg, 0, 0, L);
    const negativeSolve = solveChiefRay(-fieldDeg, 0, 0, L);
    const positive = traceRay(positiveSolve.yLaunch, positiveSolve.uField, layout.z, 0, 0, L.stopPhysSD, true, L);
    const negative = traceRay(negativeSolve.yLaunch, negativeSolve.uField, layout.z, 0, 0, L.stopPhysSD, true, L);
    const positiveCoordinate = imagePlaneCoordinateFromTrace(positive, L);
    const negativeCoordinate = imagePlaneCoordinateFromTrace(negative, L);

    expect(positiveSolve.status).toBe("converged");
    expect(positive.reachedImagePlane).toBe(true);
    expect(negative.reachedImagePlane).toBe(true);
    for (const trace of [positive, negative]) {
      expect(trace.clipped).toBe(true);
      expect(trace.diagnostics?.clipEvents).toContainEqual({
        surfaceIdx: L.labelIdx.SEC,
        surfaceLabel: "SEC",
        reason: "inactive-side-block",
        failureReason: null,
      });
    }
    expect(Number.isFinite(positiveCoordinate)).toBe(true);
    expect(Number.isFinite(negativeCoordinate)).toBe(true);
  });

  it("keeps auto folded hit order stable under small ray-height and aperture perturbations", () => {
    const cases = [
      { data: newtonianData, y0: 12, expectedHitLabels: ["M1", "SEC"] },
      { data: cassegrainData, y0: 12, expectedHitLabels: ["M1", "SEC"] },
    ] as const;

    for (const { data, y0, expectedHitLabels } of cases) {
      const L = buildLens(data);
      const layout = doLayout(0, 0, L);

      for (const yOffset of [-0.15, 0, 0.15]) {
        for (const stopScale of [0.98, 1, 1.02]) {
          const result = traceRay(y0 + yOffset, 0, layout.z, 0, 0, L.stopPhysSD * stopScale, true, L);

          expect(result.clipped, `${data.key} yOffset=${yOffset} stopScale=${stopScale}`).toBe(false);
          expect(result.reachedImagePlane, `${data.key} yOffset=${yOffset} stopScale=${stopScale}`).toBe(true);
          expect(result.diagnostics?.hitSurfaceLabels, `${data.key} yOffset=${yOffset} stopScale=${stopScale}`).toEqual(
            expectedHitLabels,
          );
        }
      }
    }
  });

  it("derives display hit-order labels for automatic folded paths", () => {
    const L = buildLens(newtonianData);
    const layout = doLayout(0, 0, L);

    expect(
      foldedHitOrderLabelsForDisplay({
        L,
        zPos: layout.z,
        focusT: 0,
        zoomT: 0,
        aberrationT: 0,
        currentPhysStopSD: L.stopPhysSD,
        currentEPSD: L.EP.epSD,
      }),
    ).toEqual(["M1", "SEC"]);
  });

  it("exposes folded-path diagnostics through the public ray trace result", () => {
    const L = buildLens(newtonianData);
    const layout = doLayout(0, 0, L);
    const result = traceRay(12, 0, layout.z, 0, 0, L.stopPhysSD, true, L);
    const diagnostics = result.diagnostics;

    expect(diagnostics).toBeDefined();
    expect(diagnostics!.expectedPathMode).toBe("auto");
    expect(diagnostics!.hitSurfaceLabels).toEqual(["M1", "SEC"]);
    expect(diagnostics!.reachedImagePlane).toBe(true);
    expect(diagnostics!.finalMedium).toBeCloseTo(1, 12);
    expect(diagnostics!.terminationReason).toBe("image-plane");
    expect(diagnostics!.autoSteps.some((step) => step.skippedCandidates.length > 0)).toBe(true);
    expect(
      diagnostics!.autoSteps
        .flatMap((step) => step.skippedCandidates)
        .some((skip) => skip.reason === "passive-same-index"),
    ).toBe(true);
  });

  it("renders the Newtonian secondary as a tilted fold mirror", () => {
    const L = buildLens(newtonianData);
    const layout = doLayout(0, 0, L);
    const shapes = computeElementShapes(
      L,
      layout.z,
      (z) => z,
      (y) => y,
    );
    const secondaryShape = shapes.find((shape) => shape.eid === 2);
    const coords = pathCoords(secondaryShape?.d ?? "");
    const frontTop = coords[0];
    const frontBottom = coords[SVG_PATH_SUBDIVISIONS];

    expect(secondaryShape).toBeDefined();
    expect(frontTop[1]).toBeCloseTo(-10, 10);
    expect(frontTop[0]).toBeCloseTo(layout.z[L.labelIdx.SEC] + 10, 10);
    expect(frontBottom[1]).toBeCloseTo(10, 10);
    expect(frontBottom[0]).toBeCloseTo(layout.z[L.labelIdx.SEC] - 10, 10);
  });

  it("supports a Cassegrain-style obstruction and back-focus image plane fixture", () => {
    const L = buildLens(cassegrainData);
    const layout = doLayout(0, 0, L);
    const central = traceExactSurfaceStack(L, { y0: 0, uy0: 0 }, { zPos: layout.z, leadDistance: 0 });
    const marginal = traceExactSurfaceStack(L, { y0: 12, uy0: 0 }, { zPos: layout.z, leadDistance: 0 });
    const offAxisStop = traceToStopViaGeneralized(L, { y0: 0, uy0: -Math.tan((2 * Math.PI) / 180) }, L.stopIdx, {
      zPos: layout.z,
      leadDistance: 0,
    });
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
    expect(offAxisStop.found).toBe(true);
    expect(offAxisStop.hitIndex).toBe(-1);
    expect(offAxisStop.y).toBeCloseTo(0, 12);
    expect(samples.every((fraction) => Math.abs(fraction) >= blockedFraction - 1e-9)).toBe(true);
  });

  it("records inactive-side blocking as a folded-path clip reason", () => {
    const L = buildLens(cassegrainData);
    const layout = doLayout(0, 0, L);
    const result = traceRay(0, 0, layout.z, 0, 0, L.stopPhysSD, true, L);

    expect(result.clipped).toBe(true);
    expect(result.diagnostics?.clipEvents).toContainEqual({
      surfaceIdx: L.labelIdx.SEC,
      surfaceLabel: "SEC",
      reason: "inactive-side-block",
      failureReason: null,
    });
  });

  it("detects repeated auto-path states before maxInteractions is exhausted", () => {
    const L = buildLens({
      ...mirrorData,
      key: "reference-looping-flat-mirrors",
      name: "REFERENCE Looping Flat Mirrors",
      elements: [
        {
          id: 1,
          name: "LOOP",
          label: "Loop mirrors",
          type: "Flat Mirror Pair",
          nd: 1.0,
          vd: 0,
          glass: "Aluminized front surfaces",
          apd: false,
          fromSurface: "STO",
          toSurface: "M1",
        },
      ],
      surfaces: [
        {
          label: "STO",
          R: 1e15,
          d: 10,
          nd: 1.0,
          elemId: 1,
          sd: 20,
          interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "first-surface" },
        },
        {
          label: "M1",
          R: 1e15,
          d: 0,
          nd: 1.0,
          elemId: 1,
          sd: 20,
          interaction: { type: "reflect", incidentSide: "front", mirrorKind: "first-surface" },
        },
      ],
      groups: [{ text: "Loop", fromSurface: "STO", toSurface: "M1" }],
      opticalPath: {
        mode: "auto",
        imagePlane: { z: 50, label: "IMG" },
        maxInteractions: 8,
      },
    } satisfies LensData);
    const layout = doLayout(0, 0, L);
    const result = traceExactSurfaceStackVector(
      L,
      { origin: [0, 5, 5], direction: [0, 0, 1] },
      { zPos: layout.z, launchBoundT: 50 },
    );

    expect(result.clipped).toBe(true);
    expect(result.diagnostics?.loopDetected).toBe(true);
    expect(result.diagnostics?.terminationReason).toBe("loop-detected");
    expect(result.diagnostics?.hitSurfaceLabels).toEqual(["M1", "STO", "M1"]);
    expect(result.diagnostics?.hitSurfaceLabels.length).toBeLessThan(L.opticalPath.maxInteractions);
  });

  it("supports a compact Maksutov-Cassegrain-style meniscus fixture", () => {
    const L = buildLens(maksutovData);
    const layout = doLayout(0, 0, L);
    const marginal = traceRay(12, 0, layout.z, 0, 0, L.stopPhysSD, true, L);

    expect(validateLensData(maksutovData)).toEqual([]);
    expect(L.isFoldedOptics).toBe(true);
    expect(marginal.diagnostics?.hitSurfaceLabels).toEqual(["MEN1", "MEN2", "M1", "SEC"]);
    expect(marginal.reachedImagePlane).toBe(true);
    expect(marginal.clipped).toBe(false);
    expect(marginal.diagnostics?.finalMedium).toBeCloseTo(1, 12);
  });

  it("continues tracing active mirrors after an explicit folded opening sequence", () => {
    const lens: ExactTraceLens = {
      S: [
        { label: "STO", R: 1e15, d: 100, nd: 1, sd: 30 },
        {
          label: "M1",
          R: -200,
          d: 2,
          nd: 1,
          sd: 30,
          innerSd: 7,
          interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
        },
        { label: "M1B", R: 1e15, d: -127, nd: 1, sd: 30, innerSd: 7 },
        {
          label: "SEC",
          R: 80,
          d: 1,
          nd: 1,
          sd: 12,
          interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "first-surface" },
        },
        { label: "SECB", R: 1e15, d: 159, nd: 1, sd: 12 },
      ],
      asphByIdx: {},
      opticalPath: { mode: "sequential", surfaceOrder: [1, 3], surfaceLabels: ["M1", "SEC"], maxInteractions: 6 },
      imagePlane: { z: 135, y: 0, normal: { z: 1, y: 0 }, label: "IMG" },
      isFoldedOptics: true,
    };
    const result = traceExactSurfaceStack(lens, { y0: 12, uy0: 0 }, { leadDistance: 40, checkSemiDiameter: true });
    const hitLabels = result.hits.map((hit) => lens.S[hit.surfaceIdx].label);
    const repeatedPrimary = result.hits.find((hit, index) => index > 1 && hit.surfaceIdx === 1);

    expect(hitLabels.slice(0, 3)).toEqual(["M1", "SEC", "M1"]);
    expect(repeatedPrimary?.outgoingDirection?.[2]).toBeLessThan(0);
    expect(result.reachedImagePlane).toBe(false);
  });

  it("supports a Gregorian-style secondary fixture with alternate secondary curvature", () => {
    const L = buildLens(gregorianData);
    const layout = doLayout(0, 0, L);
    const marginal = traceRay(12, 0, layout.z, 0, 0, L.stopPhysSD, true, L);

    expect(validateLensData(gregorianData)).toEqual([]);
    expect(L.isFoldedOptics).toBe(true);
    expect(layout.z[L.labelIdx.SEC]).toBeLessThan(layout.z[L.labelIdx.STO]);
    expect(marginal.diagnostics?.hitSurfaceLabels).toEqual(["M1", "SEC"]);
    expect(marginal.reachedImagePlane).toBe(true);
    expect(marginal.clipped).toBe(false);
    expect(marginal.pts[marginal.pts.length - 1]![0]).toBeCloseTo(L.imagePlane.z, 10);
  });

  it("supports an annular blocker that clips a ring while allowing the center through", () => {
    const L = buildLens(ringBlockerData);
    const layout = doLayout(0, 0, L);
    const central = traceRay(0, 0, layout.z, 0, 0, L.stopPhysSD, true, L);
    const ring = traceRay(8, 0, layout.z, 0, 0, L.stopPhysSD, true, L);

    expect(validateLensData(ringBlockerData)).toEqual([]);
    expect(central.clipped).toBe(false);
    expect(central.reachedImagePlane).toBe(true);
    expect(ring.clipped).toBe(true);
    expect(ring.diagnostics?.clipEvents).toContainEqual({
      surfaceIdx: L.labelIdx.RING,
      surfaceLabel: "RING",
      reason: "block-surface",
      failureReason: null,
    });
  });

  it("selects repeated stop-surface occurrences in generalized stop traces", () => {
    const L = buildLens({
      ...mirrorData,
      key: "reference-repeated-stop-primary",
      opticalPath: {
        surfaceOrder: ["STO", "M1", "STO"],
        imagePlane: { z: 0, label: "IMG" },
        maxInteractions: 4,
      },
    } satisfies LensData);
    const layout = doLayout(0, 0, L);
    const firstStop = traceToStopViaGeneralized(L, { y0: 5, uy0: 0 }, L.stopIdx, {
      zPos: layout.z,
      leadDistance: 0,
    });
    const secondStop = traceToStopViaGeneralized(L, { y0: 5, uy0: 0 }, L.stopIdx, {
      zPos: layout.z,
      leadDistance: 0,
      stopOccurrence: 1,
    });

    expect(firstStop.found).toBe(true);
    expect(secondStop.found).toBe(true);
    expect(firstStop.hitIndex).toBe(0);
    expect(secondStop.hitIndex).toBeGreaterThan(firstStop.hitIndex);
    expect(secondStop.point![2]).toBeCloseTo(layout.z[L.stopIdx], 10);
  });

  it("infers enough launch lead for a tilted flat first surface", () => {
    const result = traceExactSurfaceStack(
      {
        S: [
          {
            label: "M1",
            R: 1e15,
            d: 0,
            nd: 1,
            sd: 10,
            interaction: { type: "reflect", mirrorKind: "first-surface", normal: { z: 1, y: 1 } },
          },
        ],
        asphByIdx: {},
        opticalPath: { mode: "sequential", surfaceOrder: [0], surfaceLabels: ["M1"], maxInteractions: 2 },
        isFoldedOptics: true,
      },
      { y0: 10, uy0: 0 },
    );

    expect(result.failureReason).toBeNull();
    expect(result.hits).toHaveLength(1);
    expect(result.hits[0]!.point[2]).toBeCloseTo(-10, 8);
  });

  it("preserves representative refractive lens build constants", () => {
    const L = buildLens(planarData);

    expect(L.EP.epSD).toBeCloseTo(17.856823466425105, 12);
    expect(L.EP.yRatio).toBeCloseTo(0.6960409629659625, 12);
    expect(L.B).toBeCloseTo(16.79046967193117, 12);
    expect(L.halfField).toBeCloseTo(25.81431950150305, 12);
    expect(L.tracingHalfField).toBeCloseTo(25.81431950150305, 12);
    expect(L.epZRelStop).toBeCloseTo(4.204818318081482, 12);
    expect(L.xpZRelLastSurf).toBeCloseTo(-29.615117987357305, 12);
    expect(L.xpSD).toBeCloseTo(23.254328038906696, 12);
  });

  it("computes mirror-safe on-axis spherical aberration against the explicit image plane", () => {
    const L = buildLens(mirrorData);
    const layout = doLayout(0, 0, L);
    const result = computeSphericalAberration(L, layout.z, 0, 0, L.EP.epSD, L.stopPhysSD);
    const profile = computeSAProfile(L, layout.z, 0, 0, L.EP.epSD, L.stopPhysSD);
    const bestFocusZ = computeBestFocusZ(L, 0, 0, L.EP.epSD, L.stopPhysSD);

    expect(result).not.toBeNull();
    expect(result!.imagePlaneZ).toBeCloseTo(L.imagePlane.z, 10);
    expect(Number.isFinite(result!.bestFocusZ)).toBe(true);
    expect(Number.isFinite(result!.currentPlaneRmsMm)).toBe(true);
    expect(profile.length).toBeGreaterThan(2);
    expect(Number.isFinite(bestFocusZ)).toBe(true);
  });
});
