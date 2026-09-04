import { describe, expect, it } from "vitest";
import { computeMtfFromPsf } from "../../../src/optics/math/mtf.js";
import { combineSpectralPsfs, computeImageQuality } from "../../../src/optics/analysis/imageQuality.js";
import { computeHuygensPsf } from "../../../src/optics/math/huygens.js";
import { createAreaWeightedCircularPupilPoints } from "../../../src/optics/math/pupilSampling.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { buildSimplePositiveElementLens } from "./testLensFixtures.js";
import type { ScalarPsf } from "../../../src/types/imageQuality.js";

describe("PSF Fourier slices", () => {
  it("matches an anisotropic Gaussian's analytic MTF in physical cycles/mm", () => {
    const size = 65,
      pitch = 0.002;
    const intensity = Array.from({ length: size * size }, (_, i) => {
      const x = ((i % size) - 32) * pitch,
        y = (Math.floor(i / size) - 32) * pitch;
      return Math.exp(-0.5 * ((x / 0.005) ** 2 + (y / 0.01) ** 2));
    });
    const mtf = computeMtfFromPsf({ size, pixelPitchMm: pitch, intensity }, 11, 50);
    for (const s of mtf) {
      expect(s.horizontal).toBeCloseTo(Math.exp(-2 * Math.PI ** 2 * 0.005 ** 2 * s.frequencyPerMm ** 2), 7);
      expect(s.vertical).toBeCloseTo(Math.exp(-2 * Math.PI ** 2 * 0.01 ** 2 * s.frequencyPerMm ** 2), 7);
    }
  });

  it("preserves unit DC and shift-invariant magnitude for a point image", () => {
    for (const index of [0, 12, 24]) {
      const intensity = Array(25).fill(0);
      intensity[index] = 3;
      const curve = computeMtfFromPsf({ size: 5, pixelPitchMm: 0.01, intensity });
      expect(curve.at(-1)!.frequencyPerMm).toBe(50);
      curve.forEach((s) => {
        expect(s.horizontal).toBeCloseTo(1, 12);
        expect(s.vertical).toBeCloseTo(1, 12);
      });
    }
    expect(computeMtfFromPsf({ size: 3, pixelPitchMm: 1, intensity: Array(9).fill(0) })).toEqual([]);
    expect(computeMtfFromPsf({ size: 3, pixelPitchMm: 1, intensity: Array(9).fill(-1) })).toEqual([]);
    expect(computeMtfFromPsf({ size: 3, pixelPitchMm: 1, intensity: Array(9).fill(1) }, 33, 1)).toEqual([]);
  });

  it("matches the circular-pupil MTF and diffraction cutoff within finite-window error", () => {
    const wavelets = createAreaWeightedCircularPupilPoints(32, 128).map((p) => ({
      point: [p.u, p.v, 0] as const,
      opdMm: 0,
      amplitudeAreaMm2: p.weight * Math.PI,
      directionCosine: 1000 / Math.hypot(1000, p.u, p.v),
    }));
    const psf = computeHuygensPsf(wavelets, 500, [0, 0, 1000], 65, (0.0005 * 500) / 4);
    const cutoff = 1 / (0.0005 * 500);
    for (const sample of computeMtfFromPsf(psf, 17, cutoff * 1.2)) {
      const nu = sample.frequencyPerMm / cutoff;
      const reference = nu >= 1 ? 0 : (2 / Math.PI) * (Math.acos(nu) - nu * Math.sqrt(1 - nu * nu));
      expect(Math.abs(sample.horizontal - reference)).toBeLessThan(0.035);
    }
  });
});

describe("explicit spectral intensity", () => {
  const psf: ScalarPsf = {
    status: "ok",
    wavelengthNm: 500,
    size: 3,
    pixelPitchMm: 1,
    intensity: [0, 0, 0, 0, 1, 0, 0, 0, 0],
    referencePeakIntensity: 2,
    windowIntegralMm2: 1,
    centerStrehl: 1,
  };
  it("restores common input-field scale before incoherent addition", () => {
    const second: ScalarPsf = {
      ...psf,
      wavelengthNm: 600,
      referencePeakIntensity: 1,
      intensity: [0, 0, 0, 1, 0, 0, 0, 0, 0],
    };
    const combined = combineSpectralPsfs([
      { psf, weight: 1 },
      { psf: second, weight: 1 },
    ])!;
    expect(combined.intensity[4]).toBeCloseTo(2 / 3, 12);
    expect(combined.intensity[3]).toBeCloseTo(1 / 3, 12);
    expect(combined.referencePeakIntensity).toBe(3);
    expect(combined.windowIntegralMm2).toBeCloseTo(1, 12);
  });
  it("rejects mismatched grids, missing scale and empty weights", () => {
    expect(combineSpectralPsfs([])).toBeNull();
    expect(combineSpectralPsfs([{ psf, weight: 0 }])).toBeNull();
    expect(
      combineSpectralPsfs([
        { psf, weight: 1 },
        { psf: { ...psf, pixelPitchMm: 2 }, weight: 1 },
      ]),
    ).toBeNull();
    expect(combineSpectralPsfs([{ psf: { ...psf, referencePeakIntensity: null }, weight: 1 }])).toBeNull();
  });
});

describe("image quality availability and refinement", () => {
  const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
  const options = {
    stopSemiDiameterMm: 0.1,
    spectrum: [{ channel: "G" as const, weight: 1 }],
    radialStrata: 8,
    azimuthalSamples: 32,
    imageSize: 17,
  };
  it("retains a PSF and convergence diagnostics while withholding unconverged MTF", () => {
    const result = computeImageQuality(state, options);
    expect(result.psf?.status).toBe("ok");
    expect(result.convergence).not.toBeNull();
    expect(result.spectrum[0].wavelengthNm).toBe(587.5618);
    expect(result.spectrum[0].weight).toBe(1);
    expect(result.status).toBe("undersampled");
    expect(result.mtf).toEqual([]);
    const under = computeImageQuality(state, {
      ...options,
      stopSemiDiameterMm: 5,
      radialStrata: 2,
      azimuthalSamples: 8,
      imageSize: 5,
    });
    expect(under.status).toBe("undersampled");
    expect(under.mtf).toEqual([]);
  });
  it("publishes unit-DC MTF only after all three independent refinements pass", () => {
    const result = computeImageQuality(state, { ...options, radialStrata: 32, azimuthalSamples: 64, imageSize: 41 });
    expect(result.status).toBe("converged");
    expect(result.mtf[0].horizontal).toBeCloseTo(1, 12);
    expect(result.mtf[0].vertical).toBeCloseTo(1, 12);
    expect(result.convergence!.pupilDifference).toBeLessThan(0.03);
    expect(result.convergence!.windowDifference).toBeLessThan(0.03);
    expect(result.convergence!.imageSamplingDifference).toBeLessThan(0.03);
  });
  it("does not silently replace movement or unknown throughput with centered ideal optics", () => {
    expect(computeImageQuality(state, { ...options, movementActive: true }).status).toBe("unsupported");
    expect(computeImageQuality(state, { ...options, throughputModel: "authored" }).reason).toContain("incomplete");
    expect(computeImageQuality(state, { ...options, spectrum: [{ channel: "G", weight: 0 }] }).status).toBe(
      "unavailable",
    );
    expect(
      computeImageQuality(state, {
        ...options,
        spectrum: [
          { channel: "G", weight: 1 },
          { channel: "G", weight: 2 },
        ],
      }).status,
    ).toBe("unavailable");
    expect(computeImageQuality(state, { ...options, radialStrata: 256 }).status).toBe("unavailable");
    expect(computeImageQuality(state, { ...options, pixelPitchMm: NaN }).status).toBe("unavailable");
  });
});
