import { describe, expect, it } from "vitest";
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

describe("perspective chromatic analysis", () => {
  it("preserves zero-pose trace parity for every channel independent of request order", () => {
    const common = {
      stopSemiDiameterMm: L.stopPhysSD,
      pupilSemiDiameterMm: 0.25,
      sensorUvs: [{ u: 0, v: 0.35 }],
      referenceChannel: "G" as const,
      pupilFractions: [-0.5, 0, 0.5],
    };
    const forward = computePerspectiveChromaticAnalysis(context(), {
      ...common,
      channels: ["R", "G", "B", "V"],
    });
    const reversed = computePerspectiveChromaticAnalysis(context(), {
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
    const result = computePerspectiveChromaticAnalysis(context(1, 1), {
      stopSemiDiameterMm: L.stopPhysSD,
      pupilSemiDiameterMm: 0.25,
      channels: ["G", "R"],
      pupilFractions: [-0.5, 0, 0.5],
    });

    expect(result.samples.map((sample) => sample.requestedSensorUv.v)).toEqual([-1, -0.5, 0, 0.5, 1]);
    expect(result.samples[0].fieldAngleDeg).not.toBeNull();
    expect(result.samples.at(-1)!.fieldAngleDeg).not.toBeNull();
    expect(result.samples[0].fieldAngleDeg).not.toBeCloseTo(result.samples.at(-1)!.fieldAngleDeg!, 5);
  });

  it("scene-locks ordered channels to the reference wavelength and retains every requested fan ray", () => {
    const result = computePerspectiveChromaticAnalysis(context(3, 2), {
      stopSemiDiameterMm: L.stopPhysSD,
      pupilSemiDiameterMm: 0.25,
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
    const result = computePerspectiveChromaticAnalysis(context(), {
      stopSemiDiameterMm: L.stopPhysSD,
      pupilSemiDiameterMm: 0.25,
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
      stopSemiDiameterMm: L.stopPhysSD,
      pupilSemiDiameterMm: 0.25,
      sensorUvs: [{ u: 0, v: 0 }],
    } as const;

    expect(() => computePerspectiveChromaticAnalysis(context(), { ...common, channels: [] })).toThrow(RangeError);
    expect(() =>
      computePerspectiveChromaticAnalysis(context(), {
        ...common,
        channels: ["R", "B"],
        referenceChannel: "G",
      }),
    ).toThrow(RangeError);
    expect(() =>
      computePerspectiveChromaticAnalysis(context(), {
        ...common,
        channels: ["G", "G"],
      }),
    ).toThrow(RangeError);
    expect(() =>
      computePerspectiveChromaticAnalysis(context(), {
        ...common,
        pupilFractions: [-1.1, 0, 1],
      }),
    ).toThrow(RangeError);
  });
});
