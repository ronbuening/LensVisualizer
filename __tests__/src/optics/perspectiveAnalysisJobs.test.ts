import { describe, expect, it } from "vitest";
import {
  perspectiveAnalysisSamplingPlan,
  type PerspectiveAnalysisSamplingPlan,
} from "../../../src/optics/analysis/perspectiveAnalysisJobs.js";
import { INTERACTIVE_ANALYSIS_SAMPLING } from "../../../src/optics/analysis/analysisQuality.js";

const COMMON = {
  dynamicEFL: 50,
  currentEPSD: 12.5,
  currentPhysStopSD: 5,
} as const;

function sensorVs(plan: PerspectiveAnalysisSamplingPlan) {
  return {
    focus: plan.focus.sensorUvs?.map(({ v }) => v),
    fieldAberrations: plan.fieldAberrations.sensorUvs?.map(({ v }) => v),
    chromatic: plan.chromatic.sensorUvs?.map(({ v }) => v),
    vignetting: plan.vignetting.sensorUvs?.map(({ v }) => v),
    pupils: plan.pupils.sensorUvs?.map(({ v }) => v),
  };
}

describe("perspective analysis sampling jobs", () => {
  it("uses denser explicitly signed sampling for settled analysis", () => {
    const plan = perspectiveAnalysisSamplingPlan(COMMON);
    const signedNine = [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1];

    expect(sensorVs(plan)).toEqual({
      focus: signedNine,
      fieldAberrations: signedNine,
      chromatic: signedNine,
      vignetting: signedNine,
      pupils: signedNine,
    });
    expect(plan.distortion.verticalSensorV).toHaveLength(17);
    expect(plan.distortion.verticalSensorV?.[0]).toBe(-1);
    expect(plan.distortion.verticalSensorV?.[8]).toBe(0);
    expect(plan.distortion.verticalSensorV?.at(-1)).toBe(1);
    expect(plan.distortion.gridSensorU).toEqual([-1, -0.5, 0, 0.5, 1]);
    expect(plan.distortion.gridSensorV).toEqual([-1, -0.5, 0, 0.5, 1]);
    expect(plan.vignetting.pupilPoints).toHaveLength(60);
    expect(plan.vignetting.pupilPoints?.reduce((sum, point) => sum + point.weight, 0)).toBeCloseTo(1, 12);
    expect(plan.pupils.pupilFractions).toHaveLength(17);
    expect(plan.chromatic.pupilFractions).toEqual([-0.9, -0.6, -0.3, 0, 0.3, 0.6, 0.9]);
    expect(plan.focus.fieldSampling?.focalLengthMm).toBe(COMMON.dynamicEFL);
    expect(plan.fieldAberrations.fieldSampling?.focalLengthMm).toBe(COMMON.dynamicEFL);
    expect(plan.chromatic.fieldSampling?.focalLengthMm).toBe(COMMON.dynamicEFL);
    expect(plan.distortion.fieldSampling?.focalLengthMm).toBe(COMMON.dynamicEFL);
    expect(plan.vignetting.fieldSampling?.focalLengthMm).toBe(COMMON.dynamicEFL);
    expect(plan.pupils.fieldSampling?.focalLengthMm).toBe(COMMON.dynamicEFL);
  });

  it("uses exactly top, center, and bottom fields for every interactive family", () => {
    const plan = perspectiveAnalysisSamplingPlan({
      ...COMMON,
      analysisQuality: "interactive",
      sampling: INTERACTIVE_ANALYSIS_SAMPLING,
    });
    const canonical = [-1, 0, 1];

    for (const values of Object.values(sensorVs(plan))) expect(values).toEqual(canonical);
    expect(plan.distortion.verticalSensorV).toEqual(canonical);
    expect(plan.distortion.gridSensorU).toEqual(canonical);
    expect(plan.distortion.gridSensorV).toEqual(canonical);
    expect(plan.focus.pupilRingSamples).toEqual(INTERACTIVE_ANALYSIS_SAMPLING.bokehRingSamples);
    expect(plan.fieldAberrations.focusFanSampleCount).toBe(9);
    expect(plan.fieldAberrations.comaRingSamples).toEqual(INTERACTIVE_ANALYSIS_SAMPLING.comaRingSamples);
    expect(plan.vignetting.pupilPoints).toHaveLength(48);
    expect(plan.vignetting.pupilPoints?.reduce((sum, point) => sum + point.weight, 0)).toBeCloseTo(1, 12);
    expect(plan.vignetting.includeActiveToZeroRatio).toBe(true);
    expect(plan.pupils.pupilFractions).toHaveLength(7);
    expect(plan.chromatic.channels).toEqual(["R", "G", "B", "V"]);
    expect(plan.chromatic.pupilFractions).toEqual([-0.95, -0.85, -0.75, -0.5, 0, 0.5, 0.75, 0.85, 0.95]);
  });

  it("maps custom settled quality knobs without treating them as an active slider drag", () => {
    const plan = perspectiveAnalysisSamplingPlan({
      ...COMMON,
      analysisQuality: "settled",
      sampling: INTERACTIVE_ANALYSIS_SAMPLING,
    });

    const fields = sensorVs(plan);
    expect(fields.focus).toEqual([-1, -0.5, 0, 0.5, 1]);
    expect(fields.fieldAberrations).toEqual([-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]);
    expect(fields.chromatic).toEqual([-1, -0.5, 0, 0.5, 1]);
    expect(fields.vignetting).toHaveLength(7);
    expect(fields.vignetting?.[0]).toBe(-1);
    expect(fields.vignetting?.[3]).toBe(0);
    expect(fields.vignetting?.at(-1)).toBe(1);
    expect(fields.pupils).toEqual(fields.vignetting);
    expect(plan.distortion.verticalSensorV).toHaveLength(9);
    expect(plan.distortion.gridSensorU).toHaveLength(9);
    expect(plan.distortion.gridSensorV).toHaveLength(9);
    expect(plan.vignetting.pupilPoints).toHaveLength(48);
    expect(plan.pupils.pupilFractions).toHaveLength(17);
  });

  it("uses the legacy pupil sample count for signed sensor fields, not bundle density", () => {
    const plan = perspectiveAnalysisSamplingPlan({
      ...COMMON,
      analysisQuality: "settled",
      sampling: { pupilAberrationSampleCount: 5 },
    });

    expect(plan.pupils.sensorUvs?.map(({ v }) => v)).toEqual([-1, -0.5, 0, 0.5, 1]);
    expect(plan.pupils.pupilFractions).toHaveLength(17);
  });
});
