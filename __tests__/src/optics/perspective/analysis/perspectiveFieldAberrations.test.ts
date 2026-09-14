import { describe, expect, it } from "vitest";
import buildLens from "../../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../../src/optics/compat.js";
import {
  computePerspectiveFieldAberrations,
  describeComaTail,
} from "../../../../../src/optics/perspective/analysis/fieldAberrations.js";
import {
  createPerspectiveTraceContext,
  type PerspectiveTraceContext,
} from "../../../../../src/optics/perspective/trace.js";
import { LENS_CATALOG } from "../../../../../src/utils/catalog/lensCatalog.js";

const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
const STATE = prepareRuntimeState(L, 0, 0);
const COMA_POINTS = [
  { u: 0, v: 0, weight: 1 },
  { u: -0.5, v: 0, weight: 1 },
  { u: 0.5, v: 0, weight: 1 },
  { u: 0, v: -0.5, weight: 1 },
  { u: 0, v: 0.5, weight: 1 },
] as const;

function context(shiftMm = 0, tiltDeg = 0): PerspectiveTraceContext {
  return createPerspectiveTraceContext({
    preparedState: STATE,
    movement: { shiftMm, tiltDeg },
    tiltPivot: L.perspectiveControl?.tiltPivot,
  });
}

describe("perspective field aberrations", () => {
  it("defaults to signed top-through-center-to-bottom field sampling", () => {
    const result = computePerspectiveFieldAberrations(context(1, 1), {
      stopSemiDiameterMm: L.stopPhysSD,
      pupilSemiDiameterMm: 0.25,
      focusPupilFractions: [-0.5, 0, 0.5],
      comaPupilPoints: COMA_POINTS,
    });

    expect(result.fieldCurvature.samples.map((sample) => sample.requestedSensorUv.v)).toEqual([-1, -0.5, 0, 0.5, 1]);
    expect(result.coma.samples.map((sample) => sample.requestedSensorUv.v)).toEqual([-1, -0.5, 0, 0.5, 1]);
    const topAngle = result.fieldCurvature.samples[0].fieldAngleDeg;
    const bottomAngle = result.fieldCurvature.samples.at(-1)!.fieldAngleDeg;
    expect(topAngle).not.toBeNull();
    expect(bottomAngle).not.toBeNull();
    expect(topAngle).not.toBeCloseTo(bottomAngle!, 5);
  });

  it("retains unavailable fields and solves tangential/sagittal focus along the sensor normal", () => {
    const result = computePerspectiveFieldAberrations(context(3, 2), {
      stopSemiDiameterMm: L.stopPhysSD,
      pupilSemiDiameterMm: 0.25,
      sensorUvs: [
        { u: 0, v: -0.25 },
        { u: 0, v: 0.25 },
        { u: 0, v: 1.2 },
      ],
      focusPupilFractions: [-0.5, 0, 0.5],
      comaPupilPoints: COMA_POINTS,
    });

    expect(result.fieldCurvature.samples.map((sample) => sample.requestedSensorUv.v)).toEqual([-0.25, 0.25, 1.2]);
    expect(result.fieldCurvature.samples.map((sample) => sample.status)).toEqual([
      "usable",
      "usable",
      "outside-projection-domain",
    ]);
    for (const sample of result.fieldCurvature.samples.slice(0, 2)) {
      expect(sample.tangential.rays.map((ray) => ray.pupilUv.v)).toEqual([-0.5, 0, 0.5]);
      expect(sample.sagittal.rays.map((ray) => ray.pupilUv.u)).toEqual([0, -0.5, 0.5]);
      expect(sample.tangential.bestFocus?.normalOffsetMm).toBeTypeOf("number");
      expect(sample.sagittal.bestFocus?.normalOffsetMm).toBeTypeOf("number");
      expect(sample.astigmaticDifferenceMm).toBeCloseTo(
        sample.sagittal.bestFocus!.normalOffsetMm - sample.tangential.bestFocus!.normalOffsetMm,
        12,
      );
    }
    expect(result.fieldCurvature.samples[2].tangential.bestFocus).toBeNull();
    expect(result.fieldCurvature.samples[2].sagittal.bestFocus).toBeNull();
  });

  it("keeps circular-pupil ray order and reports chief-relative coma", () => {
    const result = computePerspectiveFieldAberrations(context(3, 2), {
      stopSemiDiameterMm: L.stopPhysSD,
      pupilSemiDiameterMm: 0.25,
      sensorUvs: [
        { u: 0, v: 0.5 },
        { u: 0, v: 1.2 },
      ],
      focusPupilFractions: [-0.5, 0, 0.5],
      comaPupilPoints: COMA_POINTS,
    });
    const usable = result.coma.samples[0];

    expect(usable.fieldSample.chiefSolve).toBe(result.fieldCurvature.samples[0].fieldSample.chiefSolve);
    expect(usable.rays.map((ray) => ray.pupilUv)).toEqual(COMA_POINTS.map(({ u, v }) => ({ u, v })));
    expect(usable.usableSampleCount).toBeGreaterThanOrEqual(3);
    expect(usable.rmsRadiusMm).toBeTypeOf("number");
    expect(usable.tailDirection).toMatch(/balanced|toward-edge|toward-center/);
    expect(usable.tailSkewRatio).toBeGreaterThanOrEqual(1);
    expect(result.coma.samples[1].status).toBe("outside-projection-domain");
    expect(result.coma.samples[1].rays).toEqual([]);
  });

  it("classifies signed coma tails in field-aligned coordinates", () => {
    expect(describeComaTail([-1, -0.5, 0.25])?.tailDirection).toBe("toward-center");
    expect(describeComaTail([-0.25, 0.5, 1])?.tailDirection).toBe("toward-edge");
    expect(describeComaTail([-1, 1])?.tailDirection).toBe("balanced");
  });
});
