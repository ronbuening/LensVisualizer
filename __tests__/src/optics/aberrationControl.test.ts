import { describe, expect, it } from "vitest";
import { computeBokehPreviewPair } from "../../../src/optics/aberration/bokeh.js";
import {
  computeComaAnalysis,
  computeFieldCurvature,
  computeSAProfile,
  computeSphericalAberration,
} from "../../../src/optics/aberrationAnalysis.js";
import {
  computeAnalysisFieldGeometryAtState,
  computeChromaticRayFanSpread,
  doLayout,
  entrancePupilAtState,
  thick,
  traceRayChromatic,
} from "../../../src/optics/optics.js";
import { computeBothPupilAberrationProfiles } from "../../../src/optics/pupilAberration.js";
import MinoltaVarisoftRaw from "../../../src/lens-data/minolta/MinoltaVarisoft85mmf28.data.js";
import type { ChromaticChannel, RuntimeLens } from "../../../src/types/optics.js";
import { build } from "./testLensFixtures.js";

/**
 * `aberrationControl` — the soft-focus / spherical-aberration ring.
 *
 * The ring is a third slider axis (`aberrationT`) that has to reach every
 * thickness-dependent analysis path independently of focus and zoom. The
 * Minolta Varisoft is the catalog's canonical two-position control and serves
 * as the fixture; the centered under/sharp/over form is exercised by overriding
 * its control block. Expected values come from the authored control ranges, so
 * nothing here pins a lens-specific constant.
 */

const VARISOFT = build(MinoltaVarisoftRaw);
const CONTROL = MinoltaVarisoftRaw.aberrationControl;

/** Centered variant: `[minimum, center, maximum]` triples around the authored sharp spacings. */
function centeredVar(): Record<string, [number, number, number]> {
  const sharpD = (label: string) => MinoltaVarisoftRaw.surfaces.find((surface) => surface.label === label)!.d;
  const sharpB0 = sharpD("9");
  const sharpBfd = sharpD("11");
  return {
    // One increasing and one decreasing triple, so both ring directions are covered.
    "9": [sharpB0 - 0.5, sharpB0, sharpB0 + 5],
    "11": [sharpBfd + 1, sharpBfd, sharpBfd - 10],
  };
}

function buildCenteredVarisoft(): RuntimeLens {
  return build({
    ...MinoltaVarisoftRaw,
    aberrationControl: {
      ...CONTROL,
      minLabel: "UNDER",
      centerLabel: "SHARP",
      maxLabel: "OVER",
      var: centeredVar(),
    },
  });
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

function locaAt(L: RuntimeLens, aberrationT: number) {
  const { zPos, currentEPSD, currentPhysStopSD } = analysisState(L, 0, aberrationT);
  const lastSurfZ = zPos[L.N - 1];
  const rays: Partial<Record<ChromaticChannel, { y: number; u: number; clipped: boolean }>> = {};
  for (const channel of ["R", "G", "B"] as const) {
    const ray = traceRayChromatic(0.95 * currentEPSD, 0, zPos, 0, 0, currentPhysStopSD, true, L, channel, aberrationT);
    rays[channel] = { y: ray.y, u: ray.u, clipped: ray.clipped };
  }
  return computeChromaticRayFanSpread(rays, doLayout(0, 0, L, aberrationT).imgZ, lastSurfZ);
}

describe("aberrationControl thickness resolution", () => {
  it("drives the controlled spacings from the ring, independently of focus travel", () => {
    const L = VARISOFT;
    expect(L.aberrationControl?.label).toBe(CONTROL.label);

    for (const [label, [normal, maximum]] of Object.entries(CONTROL.var)) {
      const index = L.labelIdx[label];
      expect(thick(index, 0, 0, L, 0), `${label} at ring 0`).toBeCloseTo(normal, 8);
      expect(thick(index, 0, 0, L, 1), `${label} at ring 1`).toBeCloseTo(maximum, 8);
      expect(thick(index, 1, 0, L, 1), `${label} at ring 1, close focus`).toBeCloseTo(maximum, 8);
    }

    // Focus-only spacings must not move with the ring.
    for (const label of Object.keys(MinoltaVarisoftRaw.var).filter((key) => !(key in CONTROL.var))) {
      const index = L.labelIdx[label];
      expect(thick(index, 0, 0, L, 1), `${label} should ignore the ring`).toBeCloseTo(thick(index, 0, 0, L, 0), 8);
    }
  });

  it("supports under/sharp/over travel while keeping sharp as the default", () => {
    const L = buildCenteredVarisoft();
    const ranges = centeredVar();

    expect(L.aberrationControl?.centerLabel).toBe("SHARP");
    for (const [label, [minimum, center, maximum]] of Object.entries(ranges)) {
      const index = L.labelIdx[label];
      expect(thick(index, 0, 0, L), `${label} default`).toBeCloseTo(center, 8);
      expect(thick(index, 0, 0, L, 0), `${label} at ring 0`).toBeCloseTo(center, 8);
      expect(thick(index, 0, 0, L, -1), `${label} at ring -1`).toBeCloseTo(minimum, 8);
      expect(thick(index, 0, 0, L, 1), `${label} at ring 1`).toBeCloseTo(maximum, 8);
    }
  });
});

describe("aberrationControl analysis plumbing", () => {
  it("applies the ring to spherical aberration diagnostics", () => {
    const L = VARISOFT;
    const sharp = analysisState(L, 0, 0);
    const soft = analysisState(L, 0, 1);

    const sharpSA = computeSphericalAberration(L, sharp.zPos, 0, 0, sharp.currentEPSD, sharp.currentPhysStopSD, 0);
    const softSA = computeSphericalAberration(L, soft.zPos, 0, 0, soft.currentEPSD, soft.currentPhysStopSD, 1);
    expect(sharpSA).not.toBeNull();
    expect(softSA).not.toBeNull();
    expectMeaningfulDifference(
      softSA!.longitudinalSaMm,
      sharpSA!.longitudinalSaMm,
      "ring should change longitudinal spherical aberration",
    );

    const sharpProfile = computeSAProfile(L, sharp.zPos, 0, 0, sharp.currentEPSD, sharp.currentPhysStopSD, 0);
    const softProfile = computeSAProfile(L, soft.zPos, 0, 0, soft.currentEPSD, soft.currentPhysStopSD, 1);
    expect(sharpProfile.length).toBeGreaterThan(0);
    expect(softProfile.length).toBeGreaterThan(0);
    expectMeaningfulDifference(
      softProfile.at(-1)!.transverseSaMm,
      sharpProfile.at(-1)!.transverseSaMm,
      "ring should change the spherical aberration profile",
    );
  });

  it("applies the ring to field curvature, astigmatism, and Petzval placement", () => {
    const L = VARISOFT;
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
      "ring should change tangential field curvature",
    );
    expectMeaningfulDifference(
      softEdge!.astigmaticDifferenceMm,
      sharpEdge!.astigmaticDifferenceMm,
      "ring should change astigmatic field split",
    );
    expectMeaningfulDifference(
      softEdge!.petzvalBestFocusZ,
      sharpEdge!.petzvalBestFocusZ,
      "ring should reposition the Petzval reference relative to the current image plane",
    );
  });

  it("applies the ring to coma diagnostics", () => {
    const L = VARISOFT;
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
      "ring should change the coma point-cloud footprint",
    );
  });

  it("applies the ring to bokeh previews", () => {
    const L = VARISOFT;
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
    expectMeaningfulDifference(softCenter!.rmsRadiusMm, sharpCenter!.rmsRadiusMm, "ring should change bokeh blur size");
  });

  it("applies the ring to pupil aberration diagnostics", () => {
    const L = VARISOFT;
    const sharp = analysisState(L, 0, 0);
    const soft = analysisState(L, 0, 1);

    const sharpPupils = computeBothPupilAberrationProfiles(0, 0, L, undefined, sharp.fieldGeometry, 0);
    const softPupils = computeBothPupilAberrationProfiles(0, 0, L, undefined, soft.fieldGeometry, 1);
    expectMeaningfulDifference(
      softPupils.maxAbsEpShiftMm,
      sharpPupils.maxAbsEpShiftMm,
      "ring should change entrance-pupil aberration",
    );
    expectMeaningfulDifference(
      softPupils.maxAbsXpShiftMm,
      sharpPupils.maxAbsXpShiftMm,
      "ring should change exit-pupil aberration",
    );
  });

  it("applies the ring to longitudinal chromatic aberration", () => {
    const L = VARISOFT;
    const sharpLoca = locaAt(L, 0);
    const softLoca = locaAt(L, 1);
    expect(sharpLoca).not.toBeNull();
    expect(softLoca).not.toBeNull();
    expectMeaningfulDifference(
      softLoca!.axialInterceptSpreadMm,
      sharpLoca!.axialInterceptSpreadMm,
      "ring should change longitudinal CA",
    );
  });
});
