import { describe, expect, it } from "vitest";
import {
  computeComaAnalysis2,
  computeComaAnalysisForState2,
  computeFieldCurvatureBundle2,
  computeFieldCurvatureBundleForState2,
  computeSAProfile2,
  computeSAProfileForState2,
  computeSphericalAberration2,
  computeSphericalAberrationBlurCharacter2,
  computeSphericalAberrationBlurCharacterForState2,
  computeSphericalAberrationForState2,
} from "../../../../src/optics/analysis/aberrations.js";
import { zPosForPreparedAnalysis2 } from "../../../../src/optics/analysis/preparedStateAdapters.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { computeAnalysisFieldGeometryAtState, epAtZoom, fopenAtZoom } from "../../../../src/optics/optics.js";
import { buildSimplePositiveElementLens } from "../testLensFixtures.js";

function apertureAt(lens: ReturnType<typeof buildSimplePositiveElementLens>, zoomT: number) {
  const fNumber = Math.max(lens.FOPEN, fopenAtZoom(zoomT, lens));
  return {
    currentPhysStopSD: (lens.stopPhysSD * lens.FOPEN) / fNumber,
    currentEPSD: (epAtZoom(zoomT, lens) * lens.FOPEN) / fNumber,
  };
}

describe("aberration analysis prepared-state adapters", () => {
  it("matches runtime spherical-aberration helpers for the same prepared state", () => {
    const lens = buildSimplePositiveElementLens("test-aberration-adapter-sa");
    const focusT = 0.2;
    const zoomT = 0;
    const state = prepareRuntimeState(lens, focusT, zoomT);
    const zPos = zPosForPreparedAnalysis2(state);
    const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT);
    const sa = computeSphericalAberrationForState2(state, currentEPSD, currentPhysStopSD);

    expect(sa).toEqual(computeSphericalAberration2(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD));
    expect(computeSAProfileForState2(state, currentEPSD, currentPhysStopSD)).toEqual(
      computeSAProfile2(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
    expect(computeSphericalAberrationBlurCharacterForState2(state, currentEPSD, currentPhysStopSD, sa)).toEqual(
      computeSphericalAberrationBlurCharacter2(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, sa),
    );
  });

  it("passes optional field geometry through curvature and coma adapters", () => {
    const lens = buildSimplePositiveElementLens("test-aberration-adapter-field");
    const focusT = 0;
    const zoomT = 0;
    const state = prepareRuntimeState(lens, focusT, zoomT);
    const zPos = zPosForPreparedAnalysis2(state);
    const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT);
    const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, lens);

    expect(computeFieldCurvatureBundleForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry)).toEqual(
      computeFieldCurvatureBundle2(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, 0, fieldGeometry),
    );
    expect(computeComaAnalysisForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry)).toEqual(
      computeComaAnalysis2(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, 0, fieldGeometry),
    );
  });
});
