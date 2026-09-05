import { describe, expect, it } from "vitest";
import { computeHuygensPsf, huygensIntensity } from "../../../src/optics/math/huygens.js";
import { createAreaWeightedCircularPupilPoints } from "../../../src/optics/math/pupilSampling.js";
import { opticalPathForTrace } from "../../../src/optics/trace/opticalPath.js";
import { traceSpectralThroughput } from "../../../src/optics/trace/spectralThroughput.js";
import { computeScalarWavefront } from "../../../src/optics/analysis/wavefront.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { buildSimplePositiveElementLens } from "./testLensFixtures.js";
import type { HuygensWavelet } from "../../../src/types/imageQuality.js";

const wavelengthNm = 500;
const lambda = wavelengthNm * 1e-6;
const reference = [0, 0, 1000] as const;
const pupil: HuygensWavelet[] = createAreaWeightedCircularPupilPoints(64, 64).map((p) => ({
  point: [p.u, p.v, 0],
  opdMm: 0,
  amplitudeAreaMm2: p.weight * Math.PI,
  directionCosine: 1000 / Math.hypot(1000, p.u, p.v),
}));
// Independent Bessel power series for the Fraunhofer circular-aperture reference.
function airy(v: number) {
  if (v === 0) return 1;
  let term = v / 2,
    j1 = term;
  for (let k = 1; k < 40; k++) {
    term *= -((v * v) / 4) / (k * (k + 1));
    j1 += term;
  }
  return ((2 * j1) / v) ** 2;
}

describe("independent scalar diffraction references", () => {
  it("reproduces Airy intensity and the first circular-aperture zero", () => {
    const peak = huygensIntensity(pupil, wavelengthNm, reference, reference);
    for (const v of [0, 1, 2, 3, 3.8317059702]) {
      const x = (v * lambda * reference[2]) / (2 * Math.PI);
      const intensity = huygensIntensity(pupil, wavelengthNm, reference, [x, 0, reference[2]]) / peak;
      expect(intensity).toBeCloseTo(airy(v), 4);
    }
  });

  it("is invariant to piston and gives intensity proportional to amplitude squared", () => {
    const point = [0.08, 0, 1000] as const;
    const base = huygensIntensity(pupil, wavelengthNm, reference, point);
    const piston = pupil.map((w) => ({ ...w, opdMm: w.opdMm + 17.3 * lambda }));
    expect(huygensIntensity(piston, wavelengthNm, reference, point) / base).toBeCloseTo(1, 7);
    expect(
      huygensIntensity(
        pupil.map((w) => ({ ...w, amplitudeAreaMm2: w.amplitudeAreaMm2 * 2 })),
        wavelengthNm,
        reference,
        point,
      ) / base,
    ).toBeCloseTo(4, 12);
  });

  it("matches the analytic on-axis quadratic-defocus integral", () => {
    const defocused = pupil.map((w) => ({ ...w, opdMm: (lambda / 2) * (w.point[0] ** 2 + w.point[1] ** 2) }));
    const ratio =
      huygensIntensity(defocused, wavelengthNm, reference, reference) /
      huygensIntensity(pupil, wavelengthNm, reference, reference);
    expect(ratio).toBeCloseTo(4 / Math.PI ** 2, 3);
  });

  it("preserves peak and captured-window energy instead of normalizing a crop", () => {
    const small = computeHuygensPsf(pupil, wavelengthNm, reference, 17, (lambda * 500) / 3);
    const larger = computeHuygensPsf(pupil, wavelengthNm, reference, 33, (lambda * 500) / 3);
    expect(small.status).toBe("ok");
    expect(larger.centerStrehl).toBeCloseTo(1, 12);
    expect(larger.windowIntegralMm2).toBeGreaterThan(small.windowIntegralMm2);
    // Integral of a unit-peak Airy pattern is lambda^2 f^2 / (pi a^2).
    const full = (lambda ** 2 * 1000 ** 2) / Math.PI;
    expect(larger.windowIntegralMm2 / full).toBeGreaterThan(0.9);
    expect(larger.windowIntegralMm2 / full).toBeLessThan(1.01);
    expect(computeHuygensPsf([], wavelengthNm, reference).status).toBe("unavailable");
    expect(computeHuygensPsf(pupil, wavelengthNm, reference, 4).status).toBe("unavailable");
    expect(computeHuygensPsf(pupil, NaN, reference).status).toBe("unavailable");
    expect(huygensIntensity(pupil, wavelengthNm, reference, [0, 0, -1])).toBeNaN();
  });
});

describe("opt-in path and prepared wavefront", () => {
  it("adds refractive optical distance and the full last-surface-to-sensor segment", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const { trace } = traceSpectralThroughput(state, { origin: [0, 0, -1], direction: [0, 0, 1] }, 5, "ideal");
    const path = opticalPathForTrace(state, trace);
    expect(path.toLastSurfaceMm).toBeCloseTo(2 + 5 * 1.5168, 12);
    expect(path.toSensorMm).toBeCloseTo(2 + 5 * 1.5168 + 80, 12);
    expect(path.sensorPoint).toEqual([0, 0, state.imgZ]);
    expect(opticalPathForTrace(state, { ...trace, status: "clipped" }).status).toBe("blocked");
    expect(opticalPathForTrace(state, { ...trace, status: "failed" }).status).toBe("failed");
  });

  it("derives a current-state wavefront with explicit source and marks unresolved phase sampling", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const narrow = computeScalarWavefront(state, { stopSemiDiameterMm: 0.1, radialStrata: 16, azimuthalSamples: 16 });
    expect(narrow.status).toBe("ok");
    expect(narrow.wavelets.length).toBe(256);
    expect(narrow.objectDistanceMm).toBe(Infinity);
    expect(narrow.rmsOpdMm).toBeGreaterThan(0);
    const finite = computeScalarWavefront(state, {
      stopSemiDiameterMm: 0.1,
      objectDistanceMm: 300,
      radialStrata: 16,
      azimuthalSamples: 16,
    });
    expect(finite.status).toBe("ok");
    expect(finite.rmsOpdMm).not.toBe(narrow.rmsOpdMm);
    const wide = computeScalarWavefront(state, { stopSemiDiameterMm: 5, radialStrata: 16, azimuthalSamples: 16 });
    expect(wide.status).toBe("undersampled");
    expect(wide.maxOpdStepWaves).toBeGreaterThan(0.25);
  });

  it("keeps unvalidated paths, invalid sampling and missing throughput unavailable", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    expect(computeScalarWavefront(state, { stopSemiDiameterMm: 1, radialStrata: 0 }).status).toBe("failed");
    expect(computeScalarWavefront(state, { stopSemiDiameterMm: 1, objectDistanceMm: 0.1 }).status).toBe("unsupported");
    expect(computeScalarWavefront(state, { stopSemiDiameterMm: 1, throughputModel: "authored" }).status).toBe(
      "missing-throughput",
    );
    expect(
      computeScalarWavefront(
        { ...state, lens: { ...state.lens, flags: { ...state.lens.flags, isFoldedOptics: true } } },
        { stopSemiDiameterMm: 1 },
      ).status,
    ).toBe("unsupported");
  });
});

describe("symmetric scalar grid reuse", () => {
  it("matches independent point integration for every pixel of a staggered, aberrated pupil", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const wave = computeScalarWavefront(state, { stopSemiDiameterMm: 1, radialStrata: 8, azimuthalSamples: 12 });
    expect(wave.wavelets.length).toBe(96);
    const size = 9,
      pitch = 0.003;
    const psf = computeHuygensPsf(wave.wavelets, wave.wavelengthNm, wave.referencePoint, size, pitch, true);
    const peak = huygensIntensity(wave.wavelets, wave.wavelengthNm, wave.referencePoint, wave.referencePoint, true);
    for (let i = 0; i < size * size; i++) {
      const expected =
        huygensIntensity(wave.wavelets, wave.wavelengthNm, wave.referencePoint, [
          ((i % size) - 4) * pitch,
          (Math.floor(i / size) - 4) * pitch,
          state.imgZ,
        ]) / peak;
      expect(Math.abs(psf.intensity[i] - expected)).toBeLessThan(1e-8);
    }
  });
});
