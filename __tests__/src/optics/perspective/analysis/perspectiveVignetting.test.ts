import { CATALOG_CONSTRUCTION_FIXTURES } from "../../constructionFixtures.js";
import { createAnalysisRequest } from "../../../../../src/optics/analysis/request.js";
import { describe, expect, it } from "vitest";
import { buildLens } from "../../../../../src/optics/prescription/buildRuntimeLens.js";
import { prepareRuntimeState } from "../../../../../src/optics/state/runtimeAdapters.js";
import {
  computePerspectiveVignettingAnalysis,
  integratePerspectiveVignettingRays,
  perspectiveExitPupilPlane,
  perspectiveRayGeometricFactor,
  perspectiveVignettingRayContribution,
} from "../../../../../src/optics/perspective/analysis/vignetting.js";
import { createAreaWeightedCircularPupilPoints } from "../../../../../src/optics/perspective/analysis/shared.js";
import type { PerspectiveVignettingRayContribution } from "../../../../../src/optics/perspective/analysis/vignetting.js";
import { dot, subtract } from "../../../../../src/optics/math/vector.js";
import { createPerspectiveTraceContext } from "../../../../../src/optics/perspective/trace.js";
import type { PerspectiveTraceContext } from "../../../../../src/optics/perspective/trace.js";
import {} from "../../../../../src/utils/catalog/lensCatalog.js";

const L = buildLens(CATALOG_CONSTRUCTION_FIXTURES["nikon-pc-nikkor-19mm-f4e-ed"]);
const STATE = prepareRuntimeState(L, 0, 0);

function context(shiftMm = 0, tiltDeg = 0): PerspectiveTraceContext {
  return createPerspectiveTraceContext({
    preparedState: STATE,
    movement: { shiftMm, tiltDeg },
    tiltPivot: L.perspectiveControl?.tiltPivot,
  });
}

function request(camera: PerspectiveTraceContext, stopSemiDiameterMm = L.stopPhysSD) {
  return createAnalysisRequest({
    preparedState: camera.state,
    dynamicEFL: 0,
    currentEPSD: 0.25,
    currentPhysStopSD: stopSemiDiameterMm,
    perspectiveTraceContext: camera,
  });
}

function axialContribution(
  weight: number,
  transmission: number,
  transmitted = true,
): PerspectiveVignettingRayContribution {
  return {
    weight,
    transmitted,
    transmission,
    exitPoint: [0, 0, 0],
    exitNormal: [0, 0, 1],
    sensorPoint: [0, 0, 2],
  };
}

describe("perspective vignetting analysis", () => {
  it.each(["settled", "interactive"] as const)(
    "reads aperture and %s sampling from the shared request",
    (analysisQuality) => {
      const camera = context(3, 2);
      const input = createAnalysisRequest({
        preparedState: camera.state,
        perspectiveTraceContext: camera,
        dynamicEFL: L.EFL,
        currentEPSD: 0.25,
        currentPhysStopSD: L.stopPhysSD / 2,
        analysisQuality,
        sampling: { vignettingFieldSampleCount: 5, vignettingPupilSampleCount: 4, pupilAberrationSampleCount: 5 },
      });
      const result = computePerspectiveVignettingAnalysis(input);
      expect(result.contextCacheKey).toBe(camera.cacheKey);
      expect(result.samples.map((sample) => sample.requestedSensorUv.v)).toEqual(
        analysisQuality === "interactive" ? [-1, 0, 1] : [-1, -0.5, 0, 0.5, 1],
      );
      expect(result.stopSemiDiameterMm).toBe(input.aperture.stopSemiDiameterMm);
      expect(result.pupilSemiDiameterMm).toBe(input.aperture.entrancePupilSemiDiameterMm);
      expect(result.pupilPoints).toHaveLength(4);
      expect(result.samples.every((sample) => sample.activeToZeroRatio !== null)).toBe(true);
    },
  );

  it("requires the request's perspective trace context", () => {
    const input = createAnalysisRequest({
      preparedState: STATE,
      dynamicEFL: 0,
      currentEPSD: 0.25,
      currentPhysStopSD: L.stopPhysSD,
    });
    expect(() => computePerspectiveVignettingAnalysis(input)).toThrow(/PerspectiveTraceContext/);
  });

  it("generates deterministic equal-area points inside the circular pupil", () => {
    const points = createAreaWeightedCircularPupilPoints(3, 8);

    expect(points).toHaveLength(24);
    expect(points.reduce((sum, point) => sum + point.weight, 0)).toBeCloseTo(1, 12);
    expect(points.every((point) => Math.hypot(point.u, point.v) < 1)).toBe(true);
    expect(points).toEqual(createAreaWeightedCircularPupilPoints(3, 8));
    expect(() => createAreaWeightedCircularPupilPoints(Number.POSITIVE_INFINITY, 8)).toThrow(RangeError);
  });

  it("evaluates the two-cosine inverse-square geometric factor", () => {
    expect(perspectiveRayGeometricFactor([0, 0, 0], [0, 0, 1], [0, 0, 2], [0, 0, 1])).toBeCloseTo(0.25, 12);

    const offAxis = perspectiveRayGeometricFactor([0, 0, 0], [0, 0, 1], [3, 0, 4], [0, 0, 1]);
    const cosine = 4 / 5;
    expect(offAxis).toBeCloseTo(cosine ** 4 / 4 ** 2, 12);
  });

  it("projects traced rays onto the posed exit-pupil plane instead of using the final surface normal", () => {
    const moved = context(1, 2);
    const result = computePerspectiveVignettingAnalysis(request(moved), {
      sensorUvs: [{ u: 0, v: 0 }],
      pupilPoints: createAreaWeightedCircularPupilPoints(1, 4),
    });
    const sample = result.samples[0].fieldSample.pupilBundle?.samples.find(
      (candidate) => candidate.status === "usable",
    );
    expect(sample).toBeDefined();

    const exitPlane = perspectiveExitPupilPlane(moved);
    const contribution = perspectiveVignettingRayContribution(sample!, exitPlane);
    expect(contribution.exitPoint).not.toBeNull();
    expect(dot(subtract(contribution.exitPoint!, exitPlane.point), exitPlane.normal)).toBeCloseTo(0, 10);
    expect(contribution.exitNormal).toEqual(exitPlane.normal);

    const outsideSensor = perspectiveVignettingRayContribution({ ...sample!, status: "missed-sensor" }, exitPlane);
    expect(outsideSensor.transmitted).toBe(true);
  });

  it("isolates absorption from mechanical transmission and geometric propagation", () => {
    const clear = integratePerspectiveVignettingRays(
      [axialContribution(0.5, 1), axialContribution(0.5, 1)],
      [0, 0, 1],
    )!;
    const absorbed = integratePerspectiveVignettingRays(
      [axialContribution(0.5, 1), axialContribution(0.5, 0.25)],
      [0, 0, 1],
    )!;

    expect(clear.absoluteGeometricTransmission).toBe(1);
    expect(absorbed.absoluteGeometricTransmission).toBe(1);
    expect(absorbed.absoluteGeometricFactor).toBeCloseTo(clear.absoluteGeometricFactor, 12);
    expect(absorbed.absoluteTransmittedFlux).toBeCloseTo(0.625, 12);
    expect(absorbed.absoluteTransmittedGeometricFactor).toBeCloseTo(0.15625, 12);
    expect(absorbed.absoluteTransmittedFlux).toBeLessThan(clear.absoluteTransmittedFlux);
  });

  it("keeps absolute survival bounded and counts clipped weight as zero", () => {
    const result = integratePerspectiveVignettingRays(
      [axialContribution(0.25, 0.5), axialContribution(0.75, 1, false)],
      [0, 0, 1],
    )!;

    expect(result.usableCount).toBe(1);
    expect(result.absoluteGeometricTransmission).toBeCloseTo(0.25, 12);
    expect(result.absoluteTransmittedFlux).toBeCloseTo(0.125, 12);
    expect(result.absoluteGeometricTransmission).toBeGreaterThanOrEqual(0);
    expect(result.absoluteGeometricTransmission).toBeLessThanOrEqual(1);
  });

  it("uses the cached zero-movement center and returns identity ratios", () => {
    const camera = context();
    const options = {
      sensorUvs: [{ u: 0, v: 0 }],
      pupilPoints: createAreaWeightedCircularPupilPoints(1, 4),
      includeActiveToZeroRatio: true,
    } as const;
    const first = computePerspectiveVignettingAnalysis(request(camera), options);
    const second = computePerspectiveVignettingAnalysis(request(camera), options);
    const sample = first.samples[0];

    expect(first.zeroMovementCenterReference).toBe(second.zeroMovementCenterReference);
    expect(first.zeroMovementCenterReference.status).toBe("usable");
    expect(sample.status).toBe("usable");
    expect(sample.geometricFactorNormalizedToZeroCenter).toBeCloseTo(1, 10);
    expect(sample.transmittedGeometricFactorNormalizedToZeroCenter).toBeCloseTo(1, 10);
    expect(sample.activeToZeroRatio?.geometricTransmission).toBeCloseTo(1, 12);
    expect(sample.activeToZeroRatio?.transmittedFlux).toBeCloseTo(1, 12);
  });

  it("reuses the zero-movement center across poses of the same prepared aperture state", () => {
    const options = {
      sensorUvs: [{ u: 0, v: 0 }],
      pupilPoints: createAreaWeightedCircularPupilPoints(1, 4),
    } as const;
    const shifted = computePerspectiveVignettingAnalysis(request(context(2, 0)), options);
    const tilted = computePerspectiveVignettingAnalysis(request(context(0, 2)), options);
    const changedAperture = computePerspectiveVignettingAnalysis(request(context(2, 0), L.stopPhysSD * 0.9), options);
    const changedQuadrature = computePerspectiveVignettingAnalysis(request(context(2, 0)), {
      ...options,
      pupilPoints: createAreaWeightedCircularPupilPoints(1, 8),
    });

    expect(shifted.contextCacheKey).not.toBe(tilted.contextCacheKey);
    expect(shifted.zeroMovementCenterReference).toBe(tilted.zeroMovementCenterReference);
    expect(shifted.zeroMovementCenterReference.cacheKey).not.toContain("active=");
    expect(changedAperture.zeroMovementCenterReference).not.toBe(shifted.zeroMovementCenterReference);
    expect(changedQuadrature.zeroMovementCenterReference).not.toBe(shifted.zeroMovementCenterReference);
  });

  it("recomputes an identical center reference after aperture-history eviction", () => {
    const camera = context();
    const options = { sensorUvs: [], pupilPoints: createAreaWeightedCircularPupilPoints(1, 4) } as const;
    const first = computePerspectiveVignettingAnalysis(request(camera), options).zeroMovementCenterReference;
    const snapshot = structuredClone(first);
    for (let step = 1; step <= 80; step++) {
      computePerspectiveVignettingAnalysis(request(camera, L.stopPhysSD * (1 - step / 100)), options);
    }
    const recomputed = computePerspectiveVignettingAnalysis(request(camera), options).zeroMovementCenterReference;
    expect(recomputed).not.toBe(first);
    expect(recomputed).toStrictEqual(snapshot);
    expect(first).toStrictEqual(snapshot);
  });

  it("retains out-of-format signed requests instead of filtering them", () => {
    const result = computePerspectiveVignettingAnalysis(request(context()), {
      sensorUvs: [
        { u: 0, v: -1.2 },
        { u: 0, v: 0 },
        { u: 0, v: 1.2 },
      ],
      pupilPoints: createAreaWeightedCircularPupilPoints(1, 4),
    });

    expect(result.samples.map((sample) => sample.requestedSensorUv.v)).toEqual([-1.2, 0, 1.2]);
    expect(result.samples.map((sample) => sample.status)).toEqual([
      "outside-projection-domain",
      "usable",
      "outside-projection-domain",
    ]);
    expect(result.samples[0].throughput).toBeNull();
    expect(result.samples[2].throughput).toBeNull();
  });

  it("mirrors fixed-sensor throughput under opposite movement and field signs", () => {
    const common = {
      pupilPoints: createAreaWeightedCircularPupilPoints(2, 8),
    } as const;
    const positive = computePerspectiveVignettingAnalysis(request(context(3, 2)), {
      ...common,
      sensorUvs: [{ u: 0, v: 0.35 }],
    }).samples[0];
    const negative = computePerspectiveVignettingAnalysis(request(context(-3, -2)), {
      ...common,
      sensorUvs: [{ u: 0, v: -0.35 }],
    }).samples[0];

    expect(positive.status).toBe("usable");
    expect(negative.status).toBe("usable");
    expect(positive.throughput?.absoluteGeometricTransmission).toBeCloseTo(
      negative.throughput!.absoluteGeometricTransmission,
      8,
    );
    expect(positive.throughput?.absoluteGeometricFactor).toBeCloseTo(negative.throughput!.absoluteGeometricFactor, 8);
  });

  it("exposes top-to-bottom illumination asymmetry within one active pose", () => {
    const samples = computePerspectiveVignettingAnalysis(request(context(3, 2)), {
      sensorUvs: [
        { u: 0, v: -0.6 },
        { u: 0, v: 0.6 },
      ],
      pupilPoints: createAreaWeightedCircularPupilPoints(3, 12),
    }).samples;
    const top = samples[0].throughput?.absoluteTransmittedGeometricFactor;
    const bottom = samples[1].throughput?.absoluteTransmittedGeometricFactor;

    expect(samples.map((sample) => sample.status)).toEqual(["usable", "usable"]);
    expect(top).toBeTypeOf("number");
    expect(bottom).toBeTypeOf("number");
    expect(top).not.toBeCloseTo(bottom!, 10);
  });
});
