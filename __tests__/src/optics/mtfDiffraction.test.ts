import { describe, expect, it } from "vitest";
import { pupilOtf, reconstructMtfPupil, type ComplexPupil } from "../../../src/optics/analysis/mtfDiffraction.js";
import { otfMagnitude } from "../../../src/optics/analysis/mtfMath.js";
import { traceMtfPupil } from "../../../src/optics/analysis/mtfTracing.js";
import { assessMtfSupport } from "../../../src/optics/analysis/mtfSupport.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { buildSimplePositiveElementLens } from "./testLensFixtures.js";
import { computeMtf } from "../../../src/optics/mtf.js";
import type { MtfOptions } from "../../../src/types/mtf.js";

function disk(size: number, phase: (x: number, y: number) => number = () => 0): ComplexPupil {
  const real = new Float64Array(size * size),
    imaginary = new Float64Array(size * size);
  const step = 0.1 / size;
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++) {
      const qx = (x + 0.5 - size / 2) * step,
        qy = (y + 0.5 - size / 2) * step;
      if (Math.hypot(qx, qy) > 0.05) continue;
      real[y * size + x] = Math.cos(phase(qx, qy));
      imaginary[y * size + x] = Math.sin(phase(qx, qy));
    }
  return { size, real, imaginary, step };
}

/** Independent scalar Fraunhofer sum at every image sample, then an intensity Fourier sum.
 * Intentionally no FFT or pupil autocorrelation: small grids make this O(N^4) reference practical. */
function directScalarOtf(pupil: ComplexPupil, lag: number, axis: "x" | "y") {
  const n = 2 * pupil.size;
  let energy = 0,
    real = 0,
    imaginary = 0;
  for (let iy = 0; iy < n; iy++)
    for (let ix = 0; ix < n; ix++) {
      let re = 0,
        im = 0;
      for (let py = 0; py < pupil.size; py++)
        for (let px = 0; px < pupil.size; px++) {
          const phase = (-2 * Math.PI * (px * ix + py * iy)) / n;
          const i = py * pupil.size + px;
          re += pupil.real[i] * Math.cos(phase) - pupil.imaginary[i] * Math.sin(phase);
          im += pupil.real[i] * Math.sin(phase) + pupil.imaginary[i] * Math.cos(phase);
        }
      const intensity = re * re + im * im;
      const phase = (-2 * Math.PI * lag * (axis === "x" ? ix : iy)) / n;
      energy += intensity;
      real += intensity * Math.cos(phase);
      imaginary += intensity * Math.sin(phase);
    }
  return { real: real / energy, imaginary: imaginary / energy };
}

describe("scalar diffraction MTF", () => {
  it("reproduces the circular aperture analytic response, cutoff and physical wavelength scaling", () => {
    const frequencies = [0, 10, 40, 80, 120, 160, 190, 200, 250];
    const analytic = (f: number) => {
      const nu = Math.min(1, f / 200);
      return (2 / Math.PI) * (Math.acos(nu) - nu * Math.sqrt(1 - nu * nu));
    };
    const low = otfMagnitude(pupilOtf(disk(128), 0.0005, frequencies).sagittal);
    const high = otfMagnitude(pupilOtf(disk(256), 0.0005, frequencies).sagittal);
    high.forEach((v, i) => {
      expect(Math.abs(v - analytic(frequencies[i]))).toBeLessThan(0.003);
      expect(Math.abs(v - low[i])).toBeLessThan(0.003);
    });
    expect(high.at(-1)).toBe(0);
    expect(
      otfMagnitude(
        pupilOtf(
          disk(128),
          0.001,
          frequencies.map((f) => f / 2),
        ).sagittal,
      ),
    ).toEqual(low);
  });
  it("agrees with independent direct scalar diffraction for defocus, astigmatism and tilt, without wraparound", () => {
    for (const phase of [
      (x: number, y: number) => 1500 * (x * x + y * y),
      (x: number, y: number) => 1800 * x * x + 500 * y * y + 40 * x,
    ]) {
      const pupil = disk(8, phase);
      const lags = [0, 1, 3, 7];
      const actual = pupilOtf(
        pupil,
        0.0005,
        lags.map((lag) => (lag * pupil.step) / 0.0005),
      );
      for (const [axis, values] of [
        ["x", actual.sagittal],
        ["y", actual.tangential],
      ] as const) {
        lags.forEach((lag, i) => {
          const expected = directScalarOtf(pupil, lag, axis);
          expect(values.real[i]).toBeCloseTo(expected.real, 11);
          expect(values.imaginary[i]).toBeCloseTo(expected.imaginary, 11);
        });
      }
    }
  });
  it("preserves piston invariance, signed translation phase, and anisotropic aberrations", () => {
    const f = [0, 20, 40];
    const plain = pupilOtf(disk(64), 0.0005, f);
    const piston = pupilOtf(
      disk(64, () => 2.3),
      0.0005,
      f,
    );
    otfMagnitude(piston.sagittal).forEach((v, i) => expect(v).toBeCloseTo(otfMagnitude(plain.sagittal)[i], 12));
    const tilted = pupilOtf(
      disk(64, (x) => (2 * Math.PI * x * 0.004) / 0.0005),
      0.0005,
      f,
    );
    expect(tilted.sagittal.imaginary[1]).toBeLessThan(0);
    const astig = pupilOtf(
      disk(64, (x) => 2000 * x * x),
      0.0005,
      f,
    );
    expect(otfMagnitude(astig.sagittal)[1]).toBeLessThan(otfMagnitude(astig.tangential)[1]);
  });
  it("checks reference geometry and phase sampling rather than returning plausible invalid curves", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const options: MtfOptions = {
      method: "diffraction",
      spectrum: "reference",
      pupilSemiDiameterMm: 0.1,
      stopSemiDiameterMm: 0.1,
      fieldFractions: [0],
      frequenciesPerMm: [0, 1, 2],
      maxGridSize: 64,
    };
    const bundle = traceMtfPupil(state, options, assessMtfSupport(state, options), 0, 32)!;
    expect(reconstructMtfPupil(state, bundle, 0.0005876).pupil).not.toBeNull();
    const result = computeMtf(state, options);
    expect(result.fields[0].reason).toBeNull();
    expect(result.fields[0].sagittal[0]).toBeCloseTo(1, 12);
    const oblique = {
      ...bundle,
      chiefTrace: { ...bundle.chiefTrace, terminalDirection: [0, 0.5, Math.sqrt(0.75)] as [number, number, number] },
    };
    expect(reconstructMtfPupil(state, oblique, 0.0005876).message).toContain("15°");
    const aliased = {
      ...bundle,
      rays: bundle.rays.map((r, i) => ({
        ...r,
        trace: { ...r.trace, opticalPathLengthMm: r.trace.opticalPathLengthMm! + (i % 2) },
      })),
    };
    expect(reconstructMtfPupil(state, aliased, 0.0005876).refine).toBe(true);
    const immersed = { ...bundle, chiefTrace: { ...bundle.chiefTrace, finalMedium: 1.5 } };
    expect(reconstructMtfPupil(state, immersed, 0.0005876).message).toContain("air");
    const folded = {
      ...bundle,
      rays: bundle.rays.map((ray) => ({ ...ray, column: ray.row < 16 ? 31 - ray.column : ray.column })),
    };
    expect(reconstructMtfPupil(state, folded, 0.0005876).message).toContain("folds");
  });
});
