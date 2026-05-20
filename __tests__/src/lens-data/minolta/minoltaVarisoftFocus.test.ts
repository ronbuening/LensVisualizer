import { describe, expect, it } from "vitest";
import buildLens from "../../../../src/optics/buildLens.js";
import {
  computeAnalysisFieldGeometryAtState,
  computeChromaticSpread,
  doLayout,
  entrancePupilAtState,
  thick,
  traceRayChromatic,
  traceToImage,
} from "../../../../src/optics/optics.js";
import {
  computeComaAnalysis,
  computeFieldCurvature,
  computeSAProfile,
  computeSphericalAberration,
} from "../../../../src/optics/aberrationAnalysis.js";
import { computeBokehPreviewPair } from "../../../../src/optics/aberration/bokeh.js";
import { computeBothPupilAberrationProfiles } from "../../../../src/optics/pupilAberration.js";
import LENS_DEFAULTS from "../../../../src/lens-data/defaults.js";
import MinoltaVarisoftRaw from "../../../../src/lens-data/minolta/MinoltaVarisoft85mmf28.data.js";
import type { ChromaticChannel, LensData, RuntimeLens } from "../../../../src/types/optics.js";

function buildMinoltaVarisoft(): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...MinoltaVarisoftRaw } as LensData);
}

function surfaceIndex(L: RuntimeLens, label: string): number {
  const index = L.S.findIndex((surface) => surface.label === label);
  expect(index, `surface ${label} should exist`).toBeGreaterThanOrEqual(0);
  return index;
}

function fixedImagePlanePositions(L: RuntimeLens, focusT: number): number[] {
  const ref = doLayout(0, 0, L);
  const cur = doLayout(focusT, 0, L);
  const dz = ref.imgZ - cur.imgZ;
  return cur.z.map((z) => z + dz);
}

function analysisState(L: RuntimeLens, focusT: number, aberrationT: number) {
  const layout = doLayout(focusT, 0, L, aberrationT);
  const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, 0, L, aberrationT);
  return {
    zPos: layout.z,
    fieldGeometry,
    currentPhysStopSD: L.stopPhysSD,
    currentEPSD: entrancePupilAtState(L.stopPhysSD, focusT, 0, L, fieldGeometry, aberrationT).epSD,
  };
}

function expectMeaningfulDifference(actual: number, expected: number, message: string) {
  expect(Math.abs(actual - expected), message).toBeGreaterThan(1e-7);
}

function lcaAt(L: RuntimeLens, aberrationT: number) {
  const { zPos, currentEPSD, currentPhysStopSD } = analysisState(L, 0, aberrationT);
  const lastSurfZ = zPos[L.N - 1];
  const rays: Partial<Record<ChromaticChannel, { y: number; u: number; clipped: boolean }>> = {};
  for (const channel of ["R", "G", "B"] as const) {
    const ray = traceRayChromatic(0.95 * currentEPSD, 0, zPos, 0, 0, currentPhysStopSD, true, L, channel, aberrationT);
    rays[channel] = { y: ray.y, u: ray.u, clipped: ray.clipped };
  }
  return computeChromaticSpread(rays, doLayout(0, 0, L, aberrationT).imgZ, lastSurfZ);
}

describe("Minolta Varisoft 85mm f/2.8 focus model", () => {
  it("advances Group AI while keeping AII, B, BFD, and dB0 fixed", () => {
    const L = buildMinoltaVarisoft();
    const dA7 = surfaceIndex(L, "7");
    const dB0 = surfaceIndex(L, "9");
    const bfd = surfaceIndex(L, "11");

    expect(thick(dA7, 1, 0, L)).toBeGreaterThan(thick(dA7, 0, 0, L));
    expect(thick(dB0, 1, 0, L)).toBeCloseTo(thick(dB0, 0, 0, L), 8);
    expect(thick(bfd, 1, 0, L)).toBeCloseTo(thick(bfd, 0, 0, L), 8);

    const infinityZ = fixedImagePlanePositions(L, 0);
    const closeZ = fixedImagePlanePositions(L, 1);
    const focusTravel = thick(dA7, 1, 0, L) - thick(dA7, 0, 0, L);

    for (const label of ["1", "STO", "7"]) {
      const index = surfaceIndex(L, label);
      expect(closeZ[index], `${label} should move objectward by the dA7 increase`).toBeCloseTo(
        infinityZ[index] - focusTravel,
        8,
      );
    }

    for (const label of ["8", "10", "11"]) {
      const index = surfaceIndex(L, label);
      expect(closeZ[index], `${label} should remain fixed during focus`).toBeCloseTo(infinityZ[index], 8);
    }
  });

  it("matches the patent close-focus magnification when dA7 is widened", () => {
    const L = buildMinoltaVarisoft();
    const magnification = traceToImage(1, 0, 1, 0, L);
    const raySensitivity = traceToImage(0, 1, 1, 0, L);

    expect(magnification).toBeCloseTo(-0.11, 2);
    expect(-raySensitivity / magnification).toBeGreaterThan(0);
  });

  it("drives the soft-focus ring separately from focus travel", () => {
    const L = buildMinoltaVarisoft();
    const dA7 = surfaceIndex(L, "7");
    const dB0 = surfaceIndex(L, "9");
    const bfd = surfaceIndex(L, "11");

    expect(L.aberrationControl?.label).toBe("SOFT");
    expect(thick(dB0, 0, 0, L, 1)).toBeCloseTo(6.962, 8);
    expect(thick(bfd, 0, 0, L, 1)).toBeCloseTo(53.951, 8);
    expect(thick(dA7, 0, 0, L, 1)).toBeCloseTo(thick(dA7, 0, 0, L, 0), 8);

    const softParaxialFocus = traceToImage(1, 0, 0, 0, L, 1);
    expect(softParaxialFocus).toBeCloseTo(0, 2);
  });

  it("applies the soft-focus ring to spherical aberration diagnostics", () => {
    const L = buildMinoltaVarisoft();
    const sharp = analysisState(L, 0, 0);
    const soft = analysisState(L, 0, 1);

    const sharpSA = computeSphericalAberration(L, sharp.zPos, 0, 0, sharp.currentEPSD, sharp.currentPhysStopSD, 0);
    const softSA = computeSphericalAberration(L, soft.zPos, 0, 0, soft.currentEPSD, soft.currentPhysStopSD, 1);
    expect(sharpSA).not.toBeNull();
    expect(softSA).not.toBeNull();
    expectMeaningfulDifference(
      softSA!.longitudinalSaMm,
      sharpSA!.longitudinalSaMm,
      "soft ring should change longitudinal spherical aberration",
    );

    const sharpProfile = computeSAProfile(L, sharp.zPos, 0, 0, sharp.currentEPSD, sharp.currentPhysStopSD, 0);
    const softProfile = computeSAProfile(L, soft.zPos, 0, 0, soft.currentEPSD, soft.currentPhysStopSD, 1);
    expect(sharpProfile.length).toBeGreaterThan(0);
    expect(softProfile.length).toBeGreaterThan(0);
    expectMeaningfulDifference(
      softProfile.at(-1)!.transverseSaMm,
      sharpProfile.at(-1)!.transverseSaMm,
      "soft ring should change the spherical aberration profile",
    );
  });

  it("applies the soft-focus ring to field curvature, astigmatism, and Petzval placement", () => {
    const L = buildMinoltaVarisoft();
    const sharp = analysisState(L, 0, 0);
    const soft = analysisState(L, 0, 1);

    const sharpField = computeFieldCurvature(L, sharp.zPos, 0, 0, sharp.currentEPSD, sharp.currentPhysStopSD, false, 0);
    const softField = computeFieldCurvature(L, soft.zPos, 0, 0, soft.currentEPSD, soft.currentPhysStopSD, false, 1);
    expect(sharpField).not.toBeNull();
    expect(softField).not.toBeNull();

    const sharpEdge = sharpField!.fields.find((field) => field.usable && field.fieldFraction === 1);
    const softEdge = softField!.fields.find((field) => field.usable && field.fieldFraction === 1);
    expect(sharpEdge).toBeTruthy();
    expect(softEdge).toBeTruthy();
    expectMeaningfulDifference(
      softEdge!.tangentialShiftMm,
      sharpEdge!.tangentialShiftMm,
      "soft ring should change tangential field curvature",
    );
    expectMeaningfulDifference(
      softEdge!.astigmaticDifferenceMm,
      sharpEdge!.astigmaticDifferenceMm,
      "soft ring should change astigmatic field split",
    );
    expectMeaningfulDifference(
      softEdge!.petzvalBestFocusZ,
      sharpEdge!.petzvalBestFocusZ,
      "soft ring should reposition the Petzval reference relative to the current image plane",
    );
  });

  it("applies the soft-focus ring to coma diagnostics", () => {
    const L = buildMinoltaVarisoft();
    const sharp = analysisState(L, 0, 0);
    const soft = analysisState(L, 0, 1);

    const sharpComa = computeComaAnalysis(L, sharp.zPos, 0, 0, sharp.currentEPSD, sharp.currentPhysStopSD, 0);
    const softComa = computeComaAnalysis(L, soft.zPos, 0, 0, soft.currentEPSD, soft.currentPhysStopSD, 1);
    expect(sharpComa.pointCloudPreview).not.toBeNull();
    expect(softComa.pointCloudPreview).not.toBeNull();

    const sharpField = sharpComa.pointCloudPreview!.fields.find((field) => field.usable && field.fieldFraction === 0.5);
    const softField = softComa.pointCloudPreview!.fields.find((field) => field.usable && field.fieldFraction === 0.5);
    expect(sharpField).toBeTruthy();
    expect(softField).toBeTruthy();
    expectMeaningfulDifference(
      softField!.rmsRadiusMm,
      sharpField!.rmsRadiusMm,
      "soft ring should change the coma point-cloud footprint",
    );
  });

  it("applies the soft-focus ring to bokeh previews", () => {
    const L = buildMinoltaVarisoft();
    const sharp = analysisState(L, 0.5, 0);
    const soft = analysisState(L, 0.5, 1);

    const sharpBokeh = computeBokehPreviewPair(L, 0.5, 0, sharp.currentEPSD, sharp.currentPhysStopSD, 0);
    const softBokeh = computeBokehPreviewPair(L, 0.5, 0, soft.currentEPSD, soft.currentPhysStopSD, 1);
    expect(sharpBokeh.infinity).not.toBeNull();
    expect(softBokeh.infinity).not.toBeNull();

    const sharpCenter = sharpBokeh.infinity!.fields.find((field) => field.usable && field.fieldFraction === 0);
    const softCenter = softBokeh.infinity!.fields.find((field) => field.usable && field.fieldFraction === 0);
    expect(sharpCenter).toBeTruthy();
    expect(softCenter).toBeTruthy();
    expectMeaningfulDifference(
      softCenter!.rmsRadiusMm,
      sharpCenter!.rmsRadiusMm,
      "soft ring should change bokeh blur size",
    );
  });

  it("applies the soft-focus ring to pupil aberration diagnostics", () => {
    const L = buildMinoltaVarisoft();
    const sharp = analysisState(L, 0, 0);
    const soft = analysisState(L, 0, 1);

    const sharpPupils = computeBothPupilAberrationProfiles(0, 0, L, undefined, sharp.fieldGeometry, 0);
    const softPupils = computeBothPupilAberrationProfiles(0, 0, L, undefined, soft.fieldGeometry, 1);
    expectMeaningfulDifference(
      softPupils.maxAbsEpShiftMm,
      sharpPupils.maxAbsEpShiftMm,
      "soft ring should change entrance-pupil aberration",
    );
    expectMeaningfulDifference(
      softPupils.maxAbsXpShiftMm,
      sharpPupils.maxAbsXpShiftMm,
      "soft ring should change exit-pupil aberration",
    );
  });

  it("applies the soft-focus ring to LCA", () => {
    const L = buildMinoltaVarisoft();
    const sharpLca = lcaAt(L, 0);
    const softLca = lcaAt(L, 1);
    expect(sharpLca).not.toBeNull();
    expect(softLca).not.toBeNull();
    expectMeaningfulDifference(softLca!.lcaMm, sharpLca!.lcaMm, "soft ring should change longitudinal CA");
  });
});
