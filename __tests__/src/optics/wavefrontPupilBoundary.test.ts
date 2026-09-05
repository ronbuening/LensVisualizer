import { afterEach, describe, expect, it, vi } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import type { LensData } from "../../../src/types/optics.js";
import defaults from "../../../src/lens-data/defaults.js";
import data from "../../../src/lens-data/nikon/NikonZ105f28.data.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { resolveApertureStop } from "../../../src/optics/first-order/aperture.js";
import { computeImageQuality } from "../../../src/optics/analysis/imageQuality.js";
import { computeScalarWavefront } from "../../../src/optics/analysis/wavefront.js";
import * as spectral from "../../../src/optics/trace/spectralThroughput.js";

const lens = buildLens({ ...defaults, ...data } as LensData);
const state = prepareRuntimeState(lens, 0, 0);
const options = {
  stopSemiDiameterMm: resolveApertureStop(lens, 0, 2.89).stopSemiDiameterMm,
  radialStrata: 32,
  azimuthalSamples: 16,
};
afterEach(() => vi.restoreAllMocks());

describe("transmitting pupil boundary", () => {
  it.each([2.8, 2.89, 4, 8])("retains the MC 105mm wavefront at f/%s despite outer surface misses", (fNumber) => {
    const result = computeScalarWavefront(state, {
      ...options,
      stopSemiDiameterMm: resolveApertureStop(lens, 0, fNumber).stopSemiDiameterMm,
    });
    expect(result.status).toBe("ok");
    expect(result.acceptedSampleCount).toBe(32 * 16);
    expect(result.rmsOpdMm).toBeGreaterThan(0);
  });

  it("converges for the MC 105mm at f/2.89 with default sampling without relaxing thresholds", () => {
    const result = computeImageQuality(state, {
      ...options,
      azimuthalSamples: 64,
      imageSize: 41,
      spectrum: [{ channel: "G", weight: 1 }],
    });
    expect(result.status).toBe("converged");
    // Baseline from independent full-grid evaluation before grid reuse.
    expect(result.convergence!.pupilDifference).toBeCloseTo(0.021755010565767674, 8);
    expect(result.convergence!.windowDifference).toBeCloseTo(0.02072697239481236, 8);
    expect(result.convergence!.imageSamplingDifference).toBeCloseTo(0.00020343236067454917, 8);
    expect(result.mtf[0].horizontal).toBeCloseTo(1, 12);
  });
  it("still rejects an intersection failure inside the transmitting pupil", () => {
    const original = spectral.traceSpectralThroughput;
    vi.spyOn(spectral, "traceSpectralThroughput").mockImplementation((...args) => {
      const result = original(...args);
      if (args[1].origin[0] > 1 && args[1].origin[0] < 2) {
        result.trace = { ...result.trace, status: "failed", failureReason: "noBracket" };
        result.throughput = { ...result.throughput, status: "failed", transmission: null };
      }
      return result;
    });
    expect(computeScalarWavefront(state, options).status).toBe("failed");
  });

  it("continues beyond outer misses to reject a disconnected transmitting island", () => {
    const original = spectral.traceSpectralThroughput;
    vi.spyOn(spectral, "traceSpectralThroughput").mockImplementation((...args) => {
      if (args[1].origin[0] > 22) {
        return original(args[0], { ...args[1], origin: [1, 0, args[1].origin[2]] }, args[2], args[3], args[4]);
      }
      return original(...args);
    });
    expect(computeScalarWavefront(state, options).status).toBe("unsupported");
  });

  it("does not hide missing transmission evidence beyond the first blocker", () => {
    const original = spectral.traceSpectralThroughput;
    vi.spyOn(spectral, "traceSpectralThroughput").mockImplementation((...args) => {
      const result = original(...args);
      if (args[1].origin[0] > 22)
        result.throughput = { ...result.throughput, status: "incomplete", transmission: null };
      return result;
    });
    expect(computeScalarWavefront(state, options).status).toBe("missing-throughput");
  });
});
