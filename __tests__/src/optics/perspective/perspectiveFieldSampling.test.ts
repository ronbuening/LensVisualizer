import { constructionFixtureData } from "../constructionFixtures.js";
import { CATALOG_CONSTRUCTION_FIXTURES } from "../constructionFixtures.js";
import { createAnalysisRequest } from "../../../../src/optics/analysis/request.js";
import { afterEach, describe, expect, it, vi } from "vitest";
import { buildFixtureLens as buildLens } from "../constructionFixtures.js";
import { prepareRuntimeState } from "../../../../src/optics/state/runtimeAdapters.js";
import { PerspectiveFieldSamplingError } from "../../../../src/optics/perspective/fieldGeometry.js";
import {
  samplePerspectiveFields,
  sampleSceneLockedFields,
  sampleSensorLockedFields,
  zeroPoseSceneDirectionForSensorUv,
} from "../../../../src/optics/perspective/fieldSampling.js";
import type { PerspectiveFieldSamplingOptions } from "../../../../src/optics/perspective/fieldTypes.js";
import type { SensorUv } from "../../../../src/optics/perspective/fieldGeometry.js";
import { createPerspectiveTraceContext } from "../../../../src/optics/perspective/trace.js";
import type { PerspectiveTraceContext } from "../../../../src/optics/perspective/trace.js";
import {
  createFieldPlaneFrame,
  pointForSensorUv,
  pointInsideSensor,
  sensorPointForUv,
  sensorUvForPoint,
  sensorUvInsideFormat,
} from "../../../../src/optics/perspective/fieldGeometry.js";
import { IMAGE_FORMAT_BY_ID } from "../../../../src/utils/catalog/lensTaxonomy.js";
import type { Vec3 } from "../../../../src/optics/types.js";
import {} from "../../../../src/utils/catalog/lensCatalog.js";
import { build, buildChromaticPositiveElementLens, buildSimplePositiveElementLens } from "../testLensFixtures.js";
import { boundedFieldStatus } from "../../../../src/optics/perspective/fieldResults.js";
import * as sensorTarget from "../../../../src/optics/perspective/sensorTarget.js";
import { computePerspectiveFocusAnalysis } from "../../../../src/optics/perspective/analysis/focus.js";
import { computePerspectiveVignettingAnalysis } from "../../../../src/optics/perspective/analysis/vignetting.js";
import { computePerspectiveFieldAberrations } from "../../../../src/optics/perspective/analysis/fieldAberrations.js";
import { computePerspectiveChromaticAnalysis } from "../../../../src/optics/perspective/analysis/chromatic.js";
import { computePerspectivePupilAnalysis } from "../../../../src/optics/perspective/analysis/pupil.js";
import { computePerspectiveDistortionAnalysis } from "../../../../src/optics/perspective/analysis/distortion.js";
import { createZeroMovementPerspectiveContext } from "../../../../src/optics/perspective/analysis/shared.js";

afterEach(() => vi.restoreAllMocks());

const L = buildLens(CATALOG_CONSTRUCTION_FIXTURES["nikon-pc-nikkor-19mm-f4e-ed"]);
const STATE = prepareRuntimeState(L, 0, 0);

function context(shiftMm = 0, tiltDeg = 0): PerspectiveTraceContext {
  return createPerspectiveTraceContext({
    preparedState: STATE,
    movement: { shiftMm, tiltDeg },
    tiltPivot: L.perspectiveControl?.tiltPivot,
  });
}

function expectPointClose(actual: Vec3 | null, expected: Vec3 | null, precision = 4): void {
  expect(actual).not.toBeNull();
  expect(expected).not.toBeNull();
  for (let index = 0; index < 3; index++) expect(actual![index]).toBeCloseTo(expected![index], precision);
}

function sceneDirectionsForUvs(camera: PerspectiveTraceContext, uvs: readonly SensorUv[]): Vec3[] {
  return uvs.map((uv) => {
    const direction = zeroPoseSceneDirectionForSensorUv(camera, uv);
    expect(direction).not.toBeNull();
    return direction!;
  });
}

// Preserve shared sensor boundary and checked/unchecked contracts independently of trace tolerances.
describe("perspective sensor geometry", () => {
  it("keeps the inclusive normalized edge tolerance and rejects non-finite coordinates", () => {
    const frame = {
      plane: { label: "sensor", point: [0, 0, 0] as Vec3, normal: [0, 0, 1] as Vec3 },
      uAxis: [1, 0, 0] as Vec3,
      vAxis: [0, 1, 0] as Vec3,
      halfWidthMm: 1,
      halfHeightMm: 1,
    };
    for (const axis of ["u", "v"] as const) {
      for (const sign of [-1, 1]) {
        for (const [value, inside] of [
          [0, true],
          [1, true],
          [1 + 1e-9, true],
          [1 + 1e-9 + Number.EPSILON, false],
          [Infinity, false],
          [NaN, false],
        ] as const) {
          const uv = { u: 0, v: 0, [axis]: sign * value };
          expect(sensorUvInsideFormat(uv)).toBe(inside);
          expect(pointInsideSensor(frame, pointForSensorUv(frame, uv))).toBe(inside);
        }
      }
    }
    expect(pointInsideSensor(frame, null)).toBe(false);
  });

  it("uses the supplied camera basis and keeps checked and unchecked conversions distinct", () => {
    const camera = {
      state: { lens: { source: { catalog: { imageFormat: "135-full-frame" } } } },
      sensorPlane: { point: [9, 0.1, 0.2], normal: [-1, 0, 0] },
      sensorBasis: { u: [0, 1, 0], v: [0, 0, 1], normal: [1, 0, 0] },
    } as unknown as PerspectiveTraceContext;
    const frame = createFieldPlaneFrame(camera.sensorPlane, IMAGE_FORMAT_BY_ID["135-full-frame"], camera.sensorBasis);
    expect(sensorPointForUv(camera, { u: 0.5, v: 0.5 })).toStrictEqual([9, 9.1, 6.2]);
    expect(sensorUvForPoint(frame, [9, 9.1, 6.2])).toStrictEqual({ u: 0.5, v: 0.5 });
    for (const uv of [
      { u: -0, v: 0 },
      { u: 1 + 1e-9, v: -1 - 1e-9 },
    ]) {
      expect(sensorPointForUv(camera, uv)).toStrictEqual(pointForSensorUv(frame, uv));
    }
    expect(sensorPointForUv(camera, { u: 2, v: 0 })).toBeNull();
    expect(pointForSensorUv(frame, { u: 2, v: 0 })).toStrictEqual([9, 36.1, 0.2]);
    expect(sensorPointForUv(camera, { u: NaN, v: 0 })).toBeNull();
    expect(pointForSensorUv(frame, { u: NaN, v: 0 }).every(Number.isNaN)).toBe(true);
  });

  it("returns null for missing or invalid format metadata without requiring sensor geometry", () => {
    for (const imageFormat of [undefined, "invalid-format"]) {
      const camera = {
        state: { lens: { source: { catalog: { imageFormat } } } },
      } as unknown as PerspectiveTraceContext;
      expect(sensorPointForUv(camera, { u: 0, v: 0 })).toBeNull();
    }
  });
});

describe("perspective field sampling", () => {
  it("preserves signed -1/0/1 input order and zero-pose ideal parity", () => {
    const camera = context();
    const requested = [
      { u: 0, v: -0.5 },
      { u: 0, v: 0 },
      { u: 0, v: 0.5 },
    ] as const;
    const samples = sampleSceneLockedFields(camera, sceneDirectionsForUvs(camera, requested));

    expect(samples).toHaveLength(3);
    expect(samples.map((sample) => sample.domain)).toEqual(["scene-locked", "scene-locked", "scene-locked"]);
    expect(samples.map((sample) => sample.status)).toEqual(["usable", "usable", "usable"]);
    expect(samples.map((sample) => Math.sign(sample.sensorUv!.v))).toEqual([-1, 0, 1]);
    samples.forEach((sample, index) => {
      expect(sample.sensorUv!.u).toBeCloseTo(requested[index].u, 10);
      expect(sample.sensorUv!.v).toBeCloseTo(requested[index].v, 10);
      expectPointClose(sample.poseIdealSensorIntercept, sample.zeroPoseIdealSensorIntercept, 9);
      expect(sample.chiefSolve?.stopResidualMm).toBeLessThan(1e-6);
      expect(sample.sensorSolve).toBeNull();
    });
  });

  it("outer-solves actual sensor intercepts for meridional and rectangular-corner targets", () => {
    const targets = [
      { u: 0, v: -0.35 },
      { u: 0, v: 0.25 },
      { u: 0.3, v: 0.4 },
    ] as const;
    const samples = sampleSensorLockedFields(context(3, 2), targets);

    expect(samples.map((sample) => sample.sensorUv)).toEqual(targets);
    expect(samples.map((sample) => sample.status)).toEqual(["usable", "usable", "usable"]);
    samples.forEach((sample) => {
      expect(sample.sensorSolve?.status).toBe("converged");
      expect(sample.sensorSolve?.residualMm?.u).toBeCloseTo(0, 4);
      expect(sample.sensorSolve?.residualMm?.v).toBeCloseTo(0, 4);
      expectPointClose(sample.actualSensorIntercept, sample.sensorPoint, 4);
      expect(sample.chiefSolve?.stopResidualMm).toBeLessThan(1e-6);
    });
    expect(samples[0].sensorSolve?.scalarRoot?.status).toBe("converged");
    expect(samples[2].sensorSolve?.scalarRoot).toBeNull();
  });

  it.each([
    { u: 0, v: 1 },
    { u: 0, v: -1 },
    { u: 1, v: 0 },
    { u: -1, v: 0 },
  ])("keeps a converged edge landing inside the sensor-lock band at $u/$v", (uv) => {
    const fixture = build({
      ...constructionFixtureData(buildChromaticPositiveElementLens()),
      imageFormat: "135-full-frame",
    });
    const camera = createPerspectiveTraceContext({
      preparedState: prepareRuntimeState(fixture, 0, 0),
      movement: { shiftMm: 0, tiltDeg: 0 },
    });
    const initial = sampleSensorLockedFields(camera, [uv])[0];
    expect(initial.sensorSolve?.status).toBe("converged");
    // Control a valid residual's sign independently of the scalar solver's iteration choices.
    const point: Vec3 = [uv.u * (18 + 4e-6), uv.v * (12 + 4e-6), initial.sensorPoint![2]];
    const trace = {
      ...initial.chiefTrace!,
      sensorIntersection: { ...initial.chiefTrace!.sensorIntersection!, point },
    };
    camera.sensorChiefSolves.clear();
    vi.spyOn(sensorTarget, "solveChiefToSensorPoint").mockReturnValue({
      chief: { ...initial.chiefSolve!, chiefTrace: trace },
      sensorSolve: { ...initial.sensorSolve!, residualMm: { u: uv.u * 4e-6, v: uv.v * 4e-6 } },
    });
    const controlled = { ...camera, traceRay: () => trace };
    const sample = sampleSensorLockedFields(controlled, [uv], {
      pupilBundle: { kind: "meridional", pupilSemiDiameterMm: 0.25, fractions: [0] },
    })[0];
    expect(sample.status).toBe("usable");
    expect(sample.pupilBundle?.samples[0].status).toBe("usable");
    expect(sample.pupilBundle?.samples[0].sensorIntercept).toEqual(point);

    const frame = createFieldPlaneFrame(camera.sensorPlane, IMAGE_FORMAT_BY_ID["135-full-frame"], camera.sensorBasis);
    expect(pointInsideSensor(frame, point)).toBe(false);
    expect(boundedFieldStatus("scene-locked", "usable", frame, initial.sensorPoint, point)).toBe("missed-sensor");
    const outside: Vec3 = [uv.u * (18 + 0.012), uv.v * (12 + 0.012), point[2]];
    expect(boundedFieldStatus("sensor-locked", "usable", frame, initial.sensorPoint, outside)).toBe("missed-sensor");
    expect(sampleSensorLockedFields(camera, [{ u: outside[0] / 18, v: outside[1] / 12 }])[0].status).toBe(
      "outside-projection-domain",
    );
    // The landing band must not enlarge even a near-edge request.
    expect(sampleSensorLockedFields(camera, [{ u: point[0] / 18, v: point[1] / 12 }])[0].status).toBe(
      "outside-projection-domain",
    );
  });

  it("retains unavailable requests and their exact order", () => {
    const samples = samplePerspectiveFields(context(), [
      { domain: "scene-locked", sceneDirectionCamera: [Number.NaN, 0, 1] },
      { domain: "sensor-locked", sensorUv: { u: 0, v: 0 } },
      { domain: "scene-locked", sceneDirectionCamera: [0, 1, 0] },
      { domain: "sensor-locked", sensorUv: { u: 1.5, v: -0.25 } },
    ]);

    expect(samples.map((sample) => sample.domain)).toEqual([
      "scene-locked",
      "sensor-locked",
      "scene-locked",
      "sensor-locked",
    ]);
    expect(samples.map((sample) => sample.status)).toEqual([
      "outside-projection-domain",
      "usable",
      "outside-projection-domain",
      "outside-projection-domain",
    ]);
    expect(samples[0].sensorUv).toBeNull();
    expect(samples[3].sensorUv).toEqual({ u: 1.5, v: -0.25 });
  });

  it("preserves +/- movement symmetry for a scene-locked field", () => {
    const positive = sampleSceneLockedFields(context(3, 2), [[0, 0, 1]])[0];
    const negative = sampleSceneLockedFields(context(-3, -2), [[0, 0, 1]])[0];

    expect(positive.status).toBe("usable");
    expect(negative.status).toBe("usable");
    expect(positive.actualSensorIntercept![0]).toBeCloseTo(negative.actualSensorIntercept![0], 8);
    expect(positive.actualSensorIntercept![1]).toBeCloseTo(-negative.actualSensorIntercept![1], 7);
    expect(positive.poseIdealSensorIntercept![1]).toBeCloseTo(-negative.poseIdealSensorIntercept![1], 9);
  });

  it("preserves pupil order, active-stop clipping, circular weights, and transmission", () => {
    const camera = context(1, 1);
    const meridional = sampleSceneLockedFields(camera, [[0, 0, 1]], {
      pupilBundle: {
        kind: "meridional",
        pupilSemiDiameterMm: 1,
        stopSemiDiameterMm: 0.05,
        fractions: [-1, 0, 1],
      },
    })[0];
    const circular = sampleSceneLockedFields(camera, [[0, 0, 1]], {
      pupilBundle: {
        kind: "circular",
        pupilSemiDiameterMm: 0.25,
        stopSemiDiameterMm: L.stopPhysSD,
        points: [
          { u: 0, v: 0, weight: 0.5 },
          { u: 0.5, v: 0, weight: 0.25 },
          { u: 0, v: 0.5, weight: 0.25 },
        ],
      },
    })[0];

    expect(meridional.pupilBundle?.samples.map((sample) => sample.pupilUv.v)).toEqual([-1, 0, 1]);
    expect(meridional.pupilBundle?.samples[1].status).toBe("usable");
    expect(meridional.pupilBundle?.samples.some((sample) => sample.status === "clipped")).toBe(true);
    expect(circular.pupilBundle?.kind).toBe("circular");
    expect(circular.pupilBundle?.samples.map((sample) => sample.weight)).toEqual([0.5, 0.25, 0.25]);
    expect(circular.pupilBundle?.samples.every((sample) => Number.isFinite(sample.transmission))).toBe(true);
    expect(circular.pupilBundle?.samples.map((sample) => sample.pupilUv)).toEqual([
      { u: 0, v: 0 },
      { u: 0.5, v: 0 },
      { u: 0, v: 0.5 },
    ]);
  });

  it("requires validated image-format metadata", () => {
    const fixture = buildSimplePositiveElementLens("perspective-field-without-format");
    const camera = createPerspectiveTraceContext({
      preparedState: prepareRuntimeState(fixture, 0, 0),
      movement: { shiftMm: 0, tiltDeg: 0 },
    });

    expect(() => sampleSceneLockedFields(camera, [[0, 0, 1]])).toThrow(PerspectiveFieldSamplingError);
  });

  it("applies finite bounds by domain: scene pose misses, sensor target remains usable", () => {
    const extreme = context(12, 7.5);
    const scene = sampleSceneLockedFields(extreme, [[0, 0, 1]])[0];
    const moderate = context(3, 2);
    const sensor = sampleSensorLockedFields(moderate, [{ u: 0, v: 0.8 }])[0];

    expect(scene.status).toBe("missed-sensor");
    expect(scene.actualSensorIntercept).not.toBeNull();
    expect(Math.abs(scene.actualSensorIntercept![1] - extreme.sensorPlane.point[1])).toBeGreaterThan(12);
    expect(sensor.status).toBe("usable");
    expect(Math.abs(sensor.poseIdealSensorIntercept![1] - moderate.sensorPlane.point[1])).toBeGreaterThan(12);
    expectPointClose(sensor.actualSensorIntercept, sensor.sensorPoint, 4);
  });
});

/* A small dispersive element exercises both sensor-target paths without a catalog-specific count. */
function sensorMemoContext(focusT = 0): PerspectiveTraceContext {
  const fixture = build({
    ...constructionFixtureData(buildChromaticPositiveElementLens()),
    imageFormat: "135-full-frame",
  });
  return createPerspectiveTraceContext({
    preparedState: prepareRuntimeState(fixture, focusT, 0),
    movement: { shiftMm: 1, tiltDeg: 2 },
    tiltPivot: { frame: "camera", basis: "rear-vertex-fallback", zOffsetFromImagePlaneMm: -80 },
  });
}

const MEMO_SENSOR_UVS = [
  { u: 0, v: 0 },
  { u: 0, v: -0.25 },
  { u: 0.2, v: 0.3 },
] as const;

function sensorMemoAnalyses(camera: PerspectiveTraceContext, channel?: "G") {
  const common = {
    sensorUvs: MEMO_SENSOR_UVS,
    fieldSampling: { chiefRay: { channel } },
  };
  const pupilPoints = [
    { u: 0, v: 0, weight: 0.5 },
    { u: 0, v: -0.5, weight: 0.25 },
    { u: 0, v: 0.5, weight: 0.25 },
  ];
  const pupilFractions = [-0.5, 0, 0.5];
  const request = createAnalysisRequest({
    preparedState: camera.state,
    dynamicEFL: 0,
    currentEPSD: 0.25,
    currentPhysStopSD: 1,
    perspectiveTraceContext: camera,
  });
  return {
    focus: computePerspectiveFocusAnalysis(request, { ...common, pupilPoints }),
    vignetting: computePerspectiveVignettingAnalysis(request, {
      ...common,
      pupilPoints,
      includeActiveToZeroRatio: true,
    }),
    field: computePerspectiveFieldAberrations(request, {
      ...common,
      focusPupilFractions: pupilFractions,
      comaPupilPoints: pupilPoints,
    }),
    chromatic: computePerspectiveChromaticAnalysis(request, { ...common, pupilFractions, channels: ["R", "G", "B"] }),
    pupils: computePerspectivePupilAnalysis(request, { ...common, pupilFractions }),
    distortion: computePerspectiveDistortionAnalysis(request, {
      fieldSampling: common.fieldSampling,
      verticalSensorV: [-0.25, 0, 0.3],
      gridSensorU: [0, 0.2],
      gridSensorV: [0, 0.3],
    }),
  };
}

describe("context-owned sensor chief memo", () => {
  it.each([
    { channel: undefined, activeCount: 6, totalCount: 9 },
    { channel: "G" as const, activeCount: 3, totalCount: 6 },
  ])(
    "shares sensor solves across analyses with channel $channel and C0 payloads",
    ({ channel, activeCount, totalCount }) => {
      const solve = vi.spyOn(sensorTarget, "solveChiefToSensorPoint");
      const uncached = sensorMemoContext();
      const uncachedZero = createZeroMovementPerspectiveContext(uncached);
      vi.spyOn(uncached.sensorChiefSolves, "get").mockReturnValue(undefined);
      vi.spyOn(uncachedZero.sensorChiefSolves, "get").mockReturnValue(undefined);
      const before = [sensorMemoAnalyses(uncached, channel), sensorMemoAnalyses(uncached, channel)];
      const beforeCount = solve.mock.calls.length;
      solve.mockClear();

      const camera = sensorMemoContext();
      const zero = createZeroMovementPerspectiveContext(camera);
      expect(zero).not.toBe(camera);
      expect(zero.sensorChiefSolves).not.toBe(camera.sensorChiefSolves);
      expect(createZeroMovementPerspectiveContext(camera)).toBe(zero);
      const after = [sensorMemoAnalyses(camera, channel), sensorMemoAnalyses(camera, channel)];
      expect(after).toStrictEqual(before);
      expect(after[0].focus.samples.map((sample) => sample.status)).toEqual(["usable", "usable", "usable"]);
      expect(after[0].vignetting.samples.every((sample) => sample.activeToZeroRatio !== null)).toBe(true);
      expect(after[0].chromatic.samples.every((sample) => sample.channels.length === 3)).toBe(true);
      const calls = solve.mock.calls;
      expect(calls).toHaveLength(totalCount);
      for (const owner of [camera, zero]) {
        const owned = calls.filter(([context]) => context === owner);
        const count = owner === camera ? activeCount : 3;
        expect(owned).toHaveLength(count);
        expect(new Set(owned.map(([, point, , , , , options]) => JSON.stringify([point, options?.channel]))).size).toBe(
          count,
        );
      }
      expect(beforeCount).toBe(37);

      // Distortion keeps its scene direction; retargeting it would erase the measured displacement.
      expect(after[0].distortion.vertical.every((sample) => sample.fieldSample?.sensorSolve === null)).toBe(true);
      const zeroFields = sampleSensorLockedFields(zero, MEMO_SENSOR_UVS, { chiefRay: { channel } });
      expect(zeroFields.every((field) => field.sensorSolve?.status === "converged")).toBe(true);
      expect(solve).toHaveBeenCalledTimes(totalCount);
    },
  );

  it("separates every chief option, channel and exact focal scale while ignoring pupil quadrature", () => {
    const camera = sensorMemoContext();
    const rawSolve = sensorTarget.solveChiefToSensorPoint;
    const solve = vi.spyOn(sensorTarget, "solveChiefToSensorPoint");
    const variants: PerspectiveFieldSamplingOptions[] = [
      {},
      { chiefRay: { channel: "R" } },
      { chiefRay: { channel: "G" } },
      { chiefRay: { channel: "B" } },
      { chiefRay: { residualToleranceMm: 1e-8 } },
      { chiefRay: { maxIterations: 12 } },
      { chiefRay: { bracketScanSamples: 16 } },
      { focalLengthMm: 50 },
      { focalLengthMm: 50 + Number.EPSILON * 50 },
      { chiefRay: { maxIterations: 0 } },
    ];
    for (const [index, options] of variants.entries()) {
      const first = sampleSensorLockedFields(camera, [MEMO_SENSOR_UVS[1]], options)[0];
      const second = sampleSensorLockedFields(camera, [MEMO_SENSOR_UVS[1]], {
        ...options,
        pupilBundle: { kind: "meridional", pupilSemiDiameterMm: 0.25, fractions: [-1, 0, 1] },
      })[0];
      expect(second.chiefSolve).toBe(first.chiefSolve);
      expect(second.sensorSolve).toBe(first.sensorSolve);
      expect(solve).toHaveBeenCalledTimes(index + 1);
      // Recompute through the unchanged solver and compare all diagnostics and trace numbers.
      const args = solve.mock.calls[index];
      const expected = rawSolve(...args);
      expect({ chief: first.chiefSolve, sensorSolve: first.sensorSolve }).toStrictEqual(expected);
    }
    const failed = sampleSensorLockedFields(camera, [MEMO_SENSOR_UVS[1]], variants.at(-1))[0];
    expect(failed.sensorSolve?.status).not.toBe("converged");
    expect(solve).toHaveBeenCalledTimes(variants.length);

    const inherited = sampleSensorLockedFields(camera, [MEMO_SENSOR_UVS[1]], {
      chiefRay: { channel: "R" },
      pupilBundle: { kind: "meridional", pupilSemiDiameterMm: 0.25, fractions: [0], channel: "G" },
    })[0];
    expect(inherited.chiefSolve).toBe(
      sampleSensorLockedFields(camera, [MEMO_SENSOR_UVS[1]], variants[2])[0].chiefSolve,
    );
    expect(solve).toHaveBeenCalledTimes(variants.length);
  });

  it("keeps nearby sensor points distinct and shares duplicate requests in their original order", () => {
    const camera = sensorMemoContext();
    const solve = vi.spyOn(sensorTarget, "solveChiefToSensorPoint");
    const targets = [MEMO_SENSOR_UVS[1], { u: 0, v: -0.25 + Number.EPSILON }, MEMO_SENSOR_UVS[1]];
    const samples = sampleSensorLockedFields(camera, targets);
    expect(solve).toHaveBeenCalledTimes(2);
    expect(samples.map((sample) => sample.sensorUv)).toEqual(targets);
    expect(samples[2].sensorSolve).toBe(samples[0].sensorSolve);
    expect(samples[1].sensorSolve).not.toBe(samples[0].sensorSolve);
  });

  it("isolates prepared state, layout, sensor, pose and pivot by context identity", () => {
    const camera = sensorMemoContext();
    const params = {
      preparedState: camera.state,
      movement: camera.pose.movement,
      tiltPivot: camera.pose.tiltPivot,
    };
    const contexts = [
      camera,
      createPerspectiveTraceContext(params),
      createPerspectiveTraceContext({ ...params, movement: { shiftMm: 2, tiltDeg: 2 } }),
      createPerspectiveTraceContext({ ...params, movement: { shiftMm: 1, tiltDeg: 3 } }),
      createPerspectiveTraceContext({ ...params, tiltPivot: { ...params.tiltPivot!, zOffsetFromImagePlaneMm: -70 } }),
      createPerspectiveTraceContext({
        ...params,
        sensorPlane: { ...camera.sensorPlane, point: [0, 0, 90], normal: [0, 0.1, 1] },
      }),
      createPerspectiveTraceContext({ ...params, cameraZPos: camera.state.z.map((z) => z + 1) }),
      sensorMemoContext(0.5),
    ];
    const solve = vi.spyOn(sensorTarget, "solveChiefToSensorPoint");
    for (const owner of contexts) {
      const first = sampleSensorLockedFields(owner, [MEMO_SENSOR_UVS[1]])[0];
      expect(sampleSensorLockedFields(owner, [MEMO_SENSOR_UVS[1]])[0]).toStrictEqual(first);
    }
    expect(solve).toHaveBeenCalledTimes(contexts.length);
    expect(new Set(solve.mock.calls.map(([owner]) => owner)).size).toBe(contexts.length);
  });
});
