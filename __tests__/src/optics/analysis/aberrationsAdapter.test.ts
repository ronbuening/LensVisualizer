import { createAnalysisComputationContext } from "../../../../src/optics/analysis/analysisContext.js";
import {
  summarizeChromaticFieldFocus,
  computeFieldCurvature,
  computeFieldCurvatureBundle,
} from "../../../../src/optics/analysis/aberration/fieldCurvature.js";
import type {
  FieldCurvatureFieldResult,
  FieldCurvatureResult,
} from "../../../../src/optics/analysis/aberration/types.js";
import { createAnalysisRequest } from "../../../../src/optics/analysis/request.js";
import {
  computeComaAnalysis,
  computeMeridionalComa,
  computeSagittalComa,
  computeComaPointCloudPreview,
} from "../../../../src/optics/analysis/aberration/coma.js";
import {
  computeSAProfile,
  computeSphericalAberration,
  computeSphericalAberrationBlurCharacter,
} from "../../../../src/optics/analysis/aberration/spherical.js";
import { analysisRequestForLens } from "../testLensFixtures.js";
import { describe, expect, it } from "vitest";
import { prepareRuntimeState } from "../../../../src/optics/state/runtimeAdapters.js";
import { computeAnalysisFieldGeometryAtState } from "../../../../src/optics/state/fieldAdapters.js";
import { apertureAt, buildSimplePositiveElementLens } from "../testLensFixtures.js";

describe("aberration request contracts", () => {
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

  it("preserves bundle/single entry contracts and forwards optional field geometry to coma", () => {
    const lens = buildSimplePositiveElementLens("test-aberration-adapter-field");
    const focusT = 0;
    const zoomT = 0;
    const state = prepareRuntimeState(lens, focusT, zoomT);
    const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT);
    const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, lens);

    const request = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: lens.EFL,
      currentEPSD,
      currentPhysStopSD,
      fieldGeometry,
    });
    const bundle = computeFieldCurvatureBundle(request);
    expect(bundle.fieldCurvature).toEqual(computeFieldCurvature(request));
    expect(bundle.chromaticFieldCurvature).toEqual(computeFieldCurvature(request, true));
    const coma = computeComaAnalysis(request);
    expect(coma.meridionalComa).toEqual(computeMeridionalComa(request));
    expect(coma.sagittalComa).toEqual(computeSagittalComa(request));
    expect(coma.pointCloudPreview).toEqual(computeComaPointCloudPreview(request));
    const context = createAnalysisComputationContext(request);
    expect(context.computeComaAnalysis()).toEqual(coma);
    expect(context.computeComaAnalysis()).toBe(context.computeComaAnalysis());
  });
  it("summarizes chromatic field-focus spread from existing field-curvature data", () => {
    const field = (
      fieldFraction: number,
      shifts: FieldCurvatureFieldResult["chromaticFieldShifts"],
    ): FieldCurvatureFieldResult =>
      ({
        fieldFraction,
        label: `${fieldFraction * 100}%`,
        fieldAngleDeg: fieldFraction * 20,
        chromaticFieldShifts: shifts,
        usable: true,
      }) as FieldCurvatureFieldResult;
    const result = {
      fields: [
        field(0, null),
        field(1, [
          { channel: "R", tangentialShiftMm: -0.05, sagittalShiftMm: -0.05 },
          { channel: "G", tangentialShiftMm: 0, sagittalShiftMm: 0 },
          { channel: "B", tangentialShiftMm: 0.1, sagittalShiftMm: 0.15 },
        ]),
      ],
      curveFields: [
        field(0.5, [
          { channel: "R", tangentialShiftMm: -0.1, sagittalShiftMm: -0.05 },
          { channel: "G", tangentialShiftMm: 0, sagittalShiftMm: 0.05 },
          { channel: "B", tangentialShiftMm: 0.2, sagittalShiftMm: 0.4 },
        ]),
        // Second field with a smaller spread so the max-field reduction has to compare.
        field(1, [
          { channel: "R", tangentialShiftMm: -0.02, sagittalShiftMm: -0.02 },
          { channel: "G", tangentialShiftMm: 0, sagittalShiftMm: 0 },
          { channel: "B", tangentialShiftMm: 0.05, sagittalShiftMm: 0.08 },
        ]),
      ],
    } as FieldCurvatureResult;

    const summary = summarizeChromaticFieldFocus(result);

    expect(summary?.source).toBe("curve");
    expect(summary?.maxTangentialSpreadMm).toBeCloseTo(0.3);
    expect(summary?.maxSagittalSpreadMm).toBeCloseTo(0.45);
    expect(summary?.maxFocusFieldFraction).toBe(0.5);
    expect(summary?.edgeFocusSpreadMm).toBeCloseTo(0.2); // Named edge remains independent of curve selection.
    expect(summary?.fields.map((field) => field.fieldFraction)).toEqual([0.5, 1]);
    expect(summary?.fields[0].tangential.minChannel).toBe("R");
    expect(summary?.fields[0].sagittal.maxChannel).toBe("B");
    expect(summarizeChromaticFieldFocus({ ...result, curveFields: [] })?.source).toBe("fields");
    expect(summarizeChromaticFieldFocus({ ...result, curveFields: [], fields: [] })).toBeNull();
    expect(summarizeChromaticFieldFocus(null)).toBeNull();
  });

  it("keys field geometry and ordered sampling in the shared request context", () => {
    const lens = buildSimplePositiveElementLens("field-curvature-request-identity");
    const base = analysisRequestForLens(lens);
    const params = {
      preparedState: base.preparedGeometry,
      dynamicEFL: base.dynamicEFL,
      currentEPSD: base.aperture.entrancePupilSemiDiameterMm,
      currentPhysStopSD: base.aperture.stopSemiDiameterMm,
      fieldGeometry: { halfFieldDeg: 5, yRatio: 1, b: 1, epRatio: 1 },
      sampling: {
        fieldCurvatureFieldFractions: [0, 0.4, 1],
        fieldCurvatureCurveFieldFractions: [0, 0.2, 0.8, 1],
        fieldCurvatureDiagnosticSampleCount: 7,
      },
    };
    const request = createAnalysisRequest(params);
    expect(
      createAnalysisRequest({
        ...params,
        fieldGeometry: { ...params.fieldGeometry },
        sampling: { ...params.sampling, fieldCurvatureFieldFractions: [0, 0.4, 1] },
      }),
    ).toBe(request);
    const context = createAnalysisComputationContext(request);
    const bundle = context.computeFieldCurvatureBundle();
    expect(context.computeFieldCurvatureBundle()).toBe(bundle);
    expect(bundle.fieldCurvature?.fieldFractions).toEqual([0, 0.4, 1]);
    expect(bundle.chromaticFieldCurvature?.curveFieldFractions).toEqual([0, 0.2, 0.8, 1]);
    expect(bundle.chromaticFieldCurvature?.fields[0].chromaticFieldShifts?.map(({ channel }) => channel)).toEqual([
      "R",
      "G",
      "B",
      "V",
    ]);
    for (const changed of [
      { ...params, fieldGeometry: { ...params.fieldGeometry, halfFieldDeg: 6 } },
      { ...params, sampling: { ...params.sampling, fieldCurvatureFieldFractions: [0, 0.6, 1] } },
      { ...params, sampling: { ...params.sampling, fieldCurvatureCurveFieldFractions: [0, 0.3, 0.8, 1] } },
      { ...params, sampling: { ...params.sampling, fieldCurvatureDiagnosticSampleCount: 9 } },
    ]) {
      const next = createAnalysisRequest(changed);
      expect(next).not.toBe(request);
      expect(createAnalysisComputationContext(next)).not.toBe(context);
    }
  });
});
