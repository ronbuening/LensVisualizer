/** Request-based perspective chromatic diagnostics and ordered field samples. */
import { afterEach, describe, expect, it, vi } from "vitest";
import { createAnalysisRequest } from "../../../../../src/optics/analysis/request.js";
import * as fieldSampling from "../../../../../src/optics/perspective/fieldSampling.js";
import buildLens from "../../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../../src/optics/compat.js";
import { computePerspectiveChromaticAnalysis } from "../../../../../src/optics/perspective/analysis/chromatic.js";
import {
  createPerspectiveTraceContext,
  type PerspectiveTraceContext,
} from "../../../../../src/optics/perspective/trace.js";
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

function request(camera: PerspectiveTraceContext) {
  return createAnalysisRequest({
    preparedState: camera.state,
    dynamicEFL: L.EFL,
    currentEPSD: 0.25,
    currentPhysStopSD: L.stopPhysSD,
    perspectiveTraceContext: camera,
  });
}

describe("perspective chromatic analysis", () => {
  afterEach(() => vi.restoreAllMocks());

  it.each(["settled", "interactive"] as const)("reads aperture and %s sampling from the request", (analysisQuality) => {
    const camera = context(3, 2);
    const input = createAnalysisRequest({
      preparedState: camera.state,
      dynamicEFL: L.EFL,
      currentEPSD: 0.25,
      currentPhysStopSD: L.stopPhysSD / 2,
      perspectiveTraceContext: camera,
      analysisQuality,
      sampling: { chromaticLongitudinalFractions: [0.5] },
    });
    const result = computePerspectiveChromaticAnalysis(input);
    expect(result.samples.map((sample) => sample.requestedSensorUv.v)).toEqual(
      analysisQuality === "interactive" ? [-1, 0, 1] : [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1],
    );
    expect(result.contextCacheKey).toBe(camera.cacheKey);
    expect(result.stopSemiDiameterMm).toBe(input.aperture.stopSemiDiameterMm);
    expect(result.pupilSemiDiameterMm).toBe(input.aperture.entrancePupilSemiDiameterMm);
    expect(result.pupilFractions).toEqual([-0.5, 0, 0.5]);
  });

  it("requires the request's shared perspective context", () => {
    expect(() =>
      computePerspectiveChromaticAnalysis({ ...request(context()), perspectiveTraceContext: null, pose: null }),
    ).toThrow("Movement-aware analysis requires a PerspectiveTraceContext");
  });

  it("applies the format band only to the sensor-locked reference channel", () => {
    const camera = context();
    const uv = { u: 0, v: 1 };
    const field = fieldSampling.sampleSensorLockedFields(camera, [uv])[0];
    expect(field.status).toBe("usable");
    // A converged residual may land just beyond the physical edge; the shared scene stays strict.
    const point = [0, 12 + 4e-6, field.sensorPoint![2]] as const;
    vi.spyOn(fieldSampling, "sampleSensorLockedFields").mockReturnValue([{ ...field, actualSensorIntercept: point }]);
    vi.spyOn(fieldSampling, "sampleSceneLockedFields").mockReturnValue([
      { ...field, domain: "scene-locked", sensorSolve: null, actualSensorIntercept: point },
    ]);
    const result = computePerspectiveChromaticAnalysis(request(camera), {
      sensorUvs: [uv],
      channels: ["G", "R"],
      pupilFractions: [0],
    });
    expect(result.samples[0].channels.map((sample) => sample.status)).toEqual(["usable", "missed-sensor"]);
    expect(result.samples[0].channels[1].actualSensorPoint).toBeNull();
  });

  it("preserves zero-pose trace parity for every channel independent of request order", () => {
    const common = {
      sensorUvs: [{ u: 0, v: 0.35 }],
      referenceChannel: "G" as const,
      pupilFractions: [-0.5, 0, 0.5],
    };
    const forward = computePerspectiveChromaticAnalysis(request(context()), {
      ...common,
      channels: ["R", "G", "B", "V"],
    });
    const reversed = computePerspectiveChromaticAnalysis(request(context()), {
      ...common,
      channels: ["V", "B", "G", "R"],
    });
    const summarizeByChannel = (result: typeof forward) =>
      Object.fromEntries(
        result.samples[0].channels.map((channel) => [
          channel.channel,
          {
            status: channel.status,
            actualSensorPoint: channel.actualSensorPoint,
            focus: channel.sensorRelativeFocus?.normalOffsetMm ?? null,
            fan: channel.rayFan.samples.map((ray) => ({
              pupilFraction: ray.pupilFraction,
              status: ray.status,
              sensorPoint: ray.sensorPoint,
            })),
          },
        ]),
      );

    expect(summarizeByChannel(reversed)).toEqual(summarizeByChannel(forward));
    for (const channel of forward.samples[0].channels) {
      expect(channel.fieldSample?.chiefTrace?.cameraTrace).toBe(channel.fieldSample?.chiefTrace?.localTrace);
      for (const ray of channel.rayFan.samples) {
        if (ray.trace) expect(ray.trace.cameraTrace).toBe(ray.trace.localTrace);
      }
    }
  });

  it("defaults to signed top-through-center-to-bottom sampling with moved-field asymmetry", () => {
    const result = computePerspectiveChromaticAnalysis(request(context(1, 1)), {
      channels: ["G", "R"],
      pupilFractions: [-0.5, 0, 0.5],
    });

    expect(result.samples.map((sample) => sample.requestedSensorUv.v)).toEqual([-1, -0.5, 0, 0.5, 1]);
    expect(result.samples[0].fieldAngleDeg).not.toBeNull();
    expect(result.samples.at(-1)!.fieldAngleDeg).not.toBeNull();
    expect(result.samples[0].fieldAngleDeg).not.toBeCloseTo(result.samples.at(-1)!.fieldAngleDeg!, 5);
  });

  it("scene-locks ordered channels to the reference wavelength and retains every requested fan ray", () => {
    const result = computePerspectiveChromaticAnalysis(request(context(3, 2)), {
      sensorUvs: [
        { u: 0, v: 0.25 },
        { u: 0, v: 1.2 },
      ],
      channels: ["B", "G", "R"],
      pupilFractions: [0.5, 0, -0.5],
    });
    const field = result.samples[0];

    expect(result.channels).toEqual(["B", "G", "R"]);
    expect(result.referenceChannel).toBe("G");
    expect(field.channels.map((sample) => sample.channel)).toEqual(["B", "G", "R"]);
    expect(field.channels.map((sample) => sample.status)).toEqual(["usable", "usable", "usable"]);
    expect(field.channels.map((sample) => sample.fieldSample?.domain)).toEqual([
      "scene-locked",
      "sensor-locked",
      "scene-locked",
    ]);
    expect(field.validChannelCount).toBe(3);
    expect(field.channels.map((sample) => sample.fieldSample?.sceneDirectionCamera)).toEqual([
      field.sceneDirectionCamera,
      field.sceneDirectionCamera,
      field.sceneDirectionCamera,
    ]);
    for (const channel of field.channels) {
      expect(channel.rayFan.samples.map((ray) => ray.pupilFraction)).toEqual([0.5, 0, -0.5]);
      expect(channel.rayFan.usableSampleCount).toBeGreaterThanOrEqual(2);
      expect(channel.sensorRelativeFocus?.normalOffsetMm).toBeTypeOf("number");
    }
    const reference = field.channels.find((sample) => sample.channel === "G")!;
    expect(reference.transverseToReference?.magnitudeMm).toBeCloseTo(0, 8);
    expect(reference.focusRelativeToReferenceMm).toBeCloseTo(0, 12);
    expect(field.focusSpreadMm).toBeGreaterThanOrEqual(0);
    expect(field.maxTransverseSeparationMm).toBeGreaterThanOrEqual(0);
  });

  it("retains unavailable field, channel, and pupil ordering", () => {
    const result = computePerspectiveChromaticAnalysis(request(context()), {
      sensorUvs: [
        { u: 0, v: -1.2 },
        { u: 0, v: 0 },
        { u: 0, v: 1.2 },
      ],
      channels: ["R", "G"],
      pupilFractions: [-0.75, 0, 0.75],
    });

    expect(result.samples.map((sample) => sample.requestedSensorUv.v)).toEqual([-1.2, 0, 1.2]);
    expect(result.samples.map((sample) => sample.status)).toEqual([
      "outside-projection-domain",
      "usable",
      "outside-projection-domain",
    ]);
    for (const field of [result.samples[0], result.samples[2]]) {
      expect(field.channels.map((sample) => sample.channel)).toEqual(["R", "G"]);
      expect(field.channels.flatMap((sample) => sample.rayFan.samples.map((ray) => ray.pupilFraction))).toEqual([
        -0.75, 0, 0.75, -0.75, 0, 0.75,
      ]);
      expect(field.channels.every((sample) => sample.sensorRelativeFocus === null)).toBe(true);
    }
  });

  it("validates channel and pupil reference contracts", () => {
    const common = {
      sensorUvs: [{ u: 0, v: 0 }],
    } as const;

    expect(() => computePerspectiveChromaticAnalysis(request(context()), { ...common, channels: [] })).toThrow(
      RangeError,
    );
    expect(() =>
      computePerspectiveChromaticAnalysis(request(context()), {
        ...common,
        channels: ["R", "B"],
        referenceChannel: "G",
      }),
    ).toThrow(RangeError);
    expect(() =>
      computePerspectiveChromaticAnalysis(request(context()), {
        ...common,
        channels: ["G", "G"],
      }),
    ).toThrow(RangeError);
    expect(() =>
      computePerspectiveChromaticAnalysis(request(context()), {
        ...common,
        pupilFractions: [-1.1, 0, 1],
      }),
    ).toThrow(RangeError);
  });
});
