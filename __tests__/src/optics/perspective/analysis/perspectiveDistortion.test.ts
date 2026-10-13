import { describe, expect, it } from "vitest";
import buildLens from "../../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../../src/optics/compat.js";
import {
  computePerspectiveDistortionAnalysis,
  perspectiveDistortionSampleFromField,
  summarizePerspectiveDistortionSamples,
} from "../../../../../src/optics/perspective/analysis/distortion.js";
import type { FieldSample, PerspectiveFieldStatus } from "../../../../../src/optics/perspective/fieldSampling.js";
import {
  createPerspectiveTraceContext,
  type PerspectiveTraceContext,
} from "../../../../../src/optics/perspective/trace.js";
import type { Vec3 } from "../../../../../src/optics/types.js";
import { LENS_CATALOG } from "../../../../../src/utils/catalog/lensCatalog.js";

const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
const STATE = prepareRuntimeState(L, 0, 0);

function context(shiftMm = 0, tiltDeg = 0): PerspectiveTraceContext {
  return createPerspectiveTraceContext({
    preparedState: STATE,
    movement: { shiftMm, tiltDeg },
    tiltPivot: L.perspectiveControl?.tiltPivot,
  });
}

function fieldSample(
  status: PerspectiveFieldStatus,
  zeroPoseIdealSensorIntercept: Vec3 | null,
  poseIdealSensorIntercept: Vec3 | null,
  actualSensorIntercept: Vec3 | null,
): FieldSample {
  return {
    domain: "scene-locked",
    status,
    sensorUv: null,
    sensorPoint: zeroPoseIdealSensorIntercept,
    sceneDirectionCamera: [0, 0, 1],
    sceneDirectionLens: [0, 0, 1],
    zeroPoseIdealSensorIntercept,
    poseIdealSensorIntercept,
    actualSensorIntercept,
    chiefTrace: null,
    chiefSolve: null,
    sensorSolve: null,
    pupilBundle: null,
  };
}

describe("perspective distortion analysis", () => {
  it("separates identity composition from the real optical residual", () => {
    const camera = context();
    const z = camera.sensorPlane.point[2];
    const ideal: Vec3 = [0, -4, z];
    const actual: Vec3 = [0, -3.25, z];
    const sample = perspectiveDistortionSampleFromField(
      camera,
      { u: 0, v: -0.25 },
      fieldSample("usable", ideal, ideal, actual),
    );

    expect(sample.compositionDisplacement?.magnitudeMm).toBeCloseTo(0, 12);
    expect(sample.opticalResidual?.vMm).toBeCloseTo(0.75, 12);
    expect(sample.totalDisplacement?.vMm).toBeCloseTo(0.75, 12);
  });

  it("defines moved optical residual against pose ideal, not zero-pose ideal", () => {
    const camera = context(3, 2);
    const z = camera.sensorPlane.point[2];
    const zeroIdeal: Vec3 = [0, -5, z];
    const poseIdeal: Vec3 = [0, -3, z];
    const actual: Vec3 = [0, -2.25, z];
    const sample = perspectiveDistortionSampleFromField(
      camera,
      { u: 0, v: -0.5 },
      fieldSample("usable", zeroIdeal, poseIdeal, actual),
    );

    expect(sample.compositionDisplacement?.vMm).toBeCloseTo(2, 12);
    expect(sample.opticalResidual?.vMm).toBeCloseTo(0.75, 12);
    expect(sample.totalDisplacement?.vMm).toBeCloseTo(2.75, 12);
  });

  it("reports near-zero optical residual for a moved affine ideal, including the sensor center", () => {
    const camera = context(3, 2);
    const z = camera.sensorPlane.point[2];
    const samples = [-1, 0, 1].map((v) => {
      const zeroIdeal: Vec3 = [0, v * 10, z];
      const poseIdeal: Vec3 = [0, v * 11 + 2, z];
      return perspectiveDistortionSampleFromField(
        camera,
        { u: 0, v },
        fieldSample("usable", zeroIdeal, poseIdeal, poseIdeal),
      );
    });
    const summary = summarizePerspectiveDistortionSamples(samples);

    expect(samples.map((sample) => sample.opticalResidual?.magnitudeMm)).toEqual([0, 0, 0]);
    expect(samples[1].compositionDisplacement?.vMm).toBeCloseTo(2, 12);
    expect(Number.isFinite(samples[1].totalDisplacement!.magnitudeMm)).toBe(true);
    expect(summary.opticalResidual.rmsMm).toBeCloseTo(0, 12);
    expect(summary.opticalResidual.maxMm).toBeCloseTo(0, 12);
  });

  it("retains unavailable signed samples while summarizing only usable residuals", () => {
    const camera = context();
    const z = camera.sensorPlane.point[2];
    const top = perspectiveDistortionSampleFromField(
      camera,
      { u: 0, v: -1 },
      fieldSample("usable", [0, -10, z], [0, -10, z], [0, -12, z]),
    );
    const unavailable = perspectiveDistortionSampleFromField(camera, { u: 0, v: 0 }, null);
    const bottom = perspectiveDistortionSampleFromField(
      camera,
      { u: 0, v: 1 },
      fieldSample("usable", [0, 10, z], [0, 10, z], [0, 11, z]),
    );
    const summary = summarizePerspectiveDistortionSamples([top, unavailable, bottom]);

    expect(summary.requestedCount).toBe(3);
    expect(summary.usableCount).toBe(2);
    expect(summary.opticalResidual.rmsMm).toBeCloseTo(Math.sqrt(2.5), 12);
    expect(summary.opticalResidual.maxMm).toBeCloseTo(2, 12);
    expect(summary.top?.requestedSensorUv.v).toBe(-1);
    expect(summary.bottom?.requestedSensorUv.v).toBe(1);
    expect(unavailable.status).toBe("outside-projection-domain");
  });

  it("keeps requested bounds failures in order", () => {
    const result = computePerspectiveDistortionAnalysis(context(), {
      verticalSensorV: [-1.25, 0, 1.25],
      gridSensorU: [],
      gridSensorV: [],
    });

    expect(result.vertical.map((sample) => sample.requestedSensorUv.v)).toEqual([-1.25, 0, 1.25]);
    expect(result.vertical.map((sample) => sample.status)).toEqual([
      "outside-projection-domain",
      "usable",
      "outside-projection-domain",
    ]);
    expect(result.summary.requestedCount).toBe(3);
    expect(result.grid.rows).toEqual([]);
  });

  it("preserves opposite composition for +/- physical movement", () => {
    const options = { verticalSensorV: [0], gridSensorU: [], gridSensorV: [] } as const;
    const positive = computePerspectiveDistortionAnalysis(context(3, 2), options).vertical[0];
    const negative = computePerspectiveDistortionAnalysis(context(-3, -2), options).vertical[0];

    expect(positive.status).toBe("usable");
    expect(negative.status).toBe("usable");
    expect(positive.compositionDisplacement?.vMm).toBeCloseTo(-negative.compositionDisplacement!.vMm, 7);
    expect(positive.actual?.[1]).toBeCloseTo(-negative.actual![1], 7);
  });
});
