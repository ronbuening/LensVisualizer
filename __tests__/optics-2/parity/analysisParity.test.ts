import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import {
  computeBokehPreviewPair,
  computeComaAnalysis,
  computeFieldCurvature,
  computeSAProfile,
} from "../../../src/optics/aberrationAnalysis.js";
import { computeDistortionCurve } from "../../../src/optics/distortionAnalysis.js";
import { doLayout, epAtZoom, fopenAtZoom } from "../../../src/optics/optics.js";
import { computeBothPupilAberrationProfiles } from "../../../src/optics/pupilAberration.js";
import { computeVignettingCurve } from "../../../src/optics/vignetteAnalysis.js";
import {
  computeBokehPreviewPair2,
  computeBothPupilAberrationProfiles2,
  computeComaAnalysis2,
  computeDistortionCurve2,
  computeDistortionCurveForState2,
  computeFieldCurvature2,
  computeSAProfile2,
  computeSAProfileForState2,
  computeVignettingCurve2,
  computeVignettingCurveForState2,
  prepareLegacyState,
} from "../../../src/optics-2/compat.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import type { RuntimeLens } from "../../../src/types/optics.js";
import { OPTICS_2_PARITY_TOLERANCES } from "./tolerances.js";

function apertureAt(
  lens: RuntimeLens,
  zoomT: number,
  apertureT: number,
): { currentEPSD: number; currentPhysStopSD: number } {
  const currentFopen = fopenAtZoom(zoomT, lens);
  const rawFNumber = lens.FOPEN * Math.pow(lens.maxFstop / lens.FOPEN, apertureT);
  const fNumber = Math.max(rawFNumber, currentFopen);
  return {
    currentPhysStopSD: (lens.stopPhysSD * lens.FOPEN) / fNumber,
    currentEPSD: (epAtZoom(zoomT, lens) * lens.FOPEN) / fNumber,
  };
}

function expectClose(actual: number, expected: number, label: string): void {
  expect(Math.abs(actual - expected), label).toBeLessThanOrEqual(OPTICS_2_PARITY_TOLERANCES.analysis.boundedValue.abs);
}

function expectDistortionParity(
  actual: ReturnType<typeof computeDistortionCurve>,
  expected: ReturnType<typeof computeDistortionCurve>,
  label: string,
): void {
  expect(actual.length, `${label} length`).toBe(expected.length);
  for (const index of [0, Math.floor((expected.length - 1) / 2), expected.length - 1]) {
    expectClose(actual[index].fieldAngleDeg, expected[index].fieldAngleDeg, `${label} field ${index}`);
    expectClose(actual[index].realHeight, expected[index].realHeight, `${label} real ${index}`);
    expectClose(actual[index].idealHeight, expected[index].idealHeight, `${label} ideal ${index}`);
    expectClose(actual[index].distortionPercent, expected[index].distortionPercent, `${label} distortion ${index}`);
  }
}

function expectVignettingParity(
  actual: ReturnType<typeof computeVignettingCurve>,
  expected: ReturnType<typeof computeVignettingCurve>,
  label: string,
): void {
  expect(actual.length, `${label} length`).toBe(expected.length);
  for (const index of [0, Math.floor((expected.length - 1) / 2), expected.length - 1]) {
    expectClose(actual[index].fieldAngleDeg, expected[index].fieldAngleDeg, `${label} field ${index}`);
    expectClose(
      actual[index].geometricTransmission,
      expected[index].geometricTransmission,
      `${label} transmission ${index}`,
    );
    expectClose(
      actual[index].relativeIllumination,
      expected[index].relativeIllumination,
      `${label} illumination ${index}`,
    );
  }
}

function expectSaProfileParity(
  actual: ReturnType<typeof computeSAProfile>,
  expected: ReturnType<typeof computeSAProfile>,
  label: string,
): void {
  expect(actual.length, `${label} length`).toBe(expected.length);
  for (let index = 0; index < expected.length; index++) {
    expectClose(actual[index].fraction, expected[index].fraction, `${label} fraction ${index}`);
    expectClose(actual[index].transverseSaMm, expected[index].transverseSaMm, `${label} transverse ${index}`);
  }
}

describe("Optics 2 analysis parity scaffold", () => {
  it("captures representative current-engine analysis sample shapes", () => {
    const lens = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, lens);
    const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT, 0);

    const distortion = computeDistortionCurve(lens, zPos, focusT, zoomT, lens.EFL, currentPhysStopSD);
    expect(distortion.length).toBeGreaterThan(0);
    expect(distortion[0]).toMatchObject({ fieldAngleDeg: 0, normalizedImageHeight: 0, distortionPercent: 0 });

    const vignetting = computeVignettingCurve(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    expect(vignetting.length).toBeGreaterThan(0);
    expect(vignetting[0].fieldAngleDeg).toBe(0);

    const spherical = computeSAProfile(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    expect(spherical.length).toBeGreaterThan(0);
  });

  it("compares distortion samples against computeDistortionCurve2 and prepared-state facade", () => {
    const lens = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, lens);
    const { currentPhysStopSD } = apertureAt(lens, zoomT, 0);
    const state = prepareLegacyState(lens, focusT, zoomT);
    const legacy = computeDistortionCurve(lens, zPos, focusT, zoomT, lens.EFL, currentPhysStopSD);

    expectDistortionParity(
      computeDistortionCurve2(lens, zPos, focusT, zoomT, lens.EFL, currentPhysStopSD),
      legacy,
      "compat",
    );
    expectDistortionParity(computeDistortionCurveForState2(state, lens.EFL, currentPhysStopSD), legacy, "state");
  });

  it("compares vignetting samples against computeVignettingCurve2 and prepared-state facade", () => {
    const lens = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, lens);
    const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT, 0);
    const state = prepareLegacyState(lens, focusT, zoomT);
    const legacy = computeVignettingCurve(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);

    expectVignettingParity(
      computeVignettingCurve2(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
      legacy,
      "compat",
    );
    expectVignettingParity(computeVignettingCurveForState2(state, currentEPSD, currentPhysStopSD), legacy, "state");
  });

  it("compares pupil aberration samples against computeBothPupilAberrationProfiles2", () => {
    const lens = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);
    const focusT = 0;
    const zoomT = 0;

    expect(computeBothPupilAberrationProfiles2(focusT, zoomT, lens)).toEqual(
      computeBothPupilAberrationProfiles(focusT, zoomT, lens),
    );
  });

  it("compares bokeh samples against computeBokehPreviewPair2", () => {
    const lens = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);
    const focusT = 0.25;
    const zoomT = 0;
    const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT, 0);

    expect(computeBokehPreviewPair2(lens, focusT, zoomT, currentEPSD, currentPhysStopSD)).toEqual(
      computeBokehPreviewPair(lens, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
  });

  it("compares coma samples against computeComaAnalysis2", () => {
    const lens = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, lens);
    const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT, 0);

    expect(computeComaAnalysis2(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD)).toEqual(
      computeComaAnalysis(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
  });

  it("compares field curvature samples against computeFieldCurvature2", () => {
    const lens = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, lens);
    const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT, 0);

    expect(computeFieldCurvature2(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD)).toEqual(
      computeFieldCurvature(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
  });

  it("compares spherical aberration samples against computeSAProfile2 and prepared-state facade", () => {
    const lens = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, lens);
    const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT, 0);
    const state = prepareLegacyState(lens, focusT, zoomT);
    const legacy = computeSAProfile(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);

    expectSaProfileParity(
      computeSAProfile2(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
      legacy,
      "compat",
    );
    expectSaProfileParity(computeSAProfileForState2(state, currentEPSD, currentPhysStopSD), legacy, "state");
  });
});
