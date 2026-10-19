import {
  computeSAProfile,
  computeSphericalAberration,
  computeSphericalAberrationBlurCharacter,
} from "../../../../src/optics/analysis.js";
import { analysisRequestForLens } from "../testLensFixtures.js";
import { describe, expect, it } from "vitest";
import {
  computeComaAnalysis2,
  computeComaAnalysisForState2,
  computeFieldCurvatureBundle2,
  computeFieldCurvatureBundleForState2,
} from "../../../../src/optics/analysis/aberrations.js";
import { zPosForPreparedAnalysis2 } from "../../../../src/optics/analysis/preparedStateAdapters.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { computeAnalysisFieldGeometryAtState } from "../../../../src/optics/optics.js";
import { apertureAt, buildSimplePositiveElementLens } from "../testLensFixtures.js";

describe("aberration analysis prepared-state adapters", () => {
  it("reuses a supplied SA result and preserves profile fraction order", () => {
    const lens = buildSimplePositiveElementLens("test-aberration-request-sa");
    const request = analysisRequestForLens(lens, 0.2);
    const sa = computeSphericalAberration(request);
    expect(sa).not.toBeNull();
    const profile = computeSAProfile(request);
    expect(profile.map((point) => point.fraction)).toEqual(
      [...profile.map((point) => point.fraction)].sort((a, b) => a - b),
    );
    expect(computeSphericalAberrationBlurCharacter(request, sa)).toEqual(
      computeSphericalAberrationBlurCharacter(request),
    );
    expect(computeSphericalAberrationBlurCharacter(request, { bestFocusZ: 0, longitudinalSaMm: 0 })).toBeNull();
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
