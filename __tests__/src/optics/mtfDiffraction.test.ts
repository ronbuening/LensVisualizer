import { describe, expect, it } from "vitest";
import { pupilOtf, reconstructMtfPupil, type ComplexPupil } from "../../../src/optics/analysis/mtfDiffraction.js";
import { diffractionLimitFromBundle } from "../../../src/optics/analysis/mtfDiffractionLimit.js";
import { geometricOtf, multiplyOtf, otfMagnitude } from "../../../src/optics/analysis/mtfMath.js";
import { traceMtfFieldPupil, type MtfBundle } from "../../../src/optics/analysis/mtfTracing.js";
import { assessMtfSupport } from "../../../src/optics/analysis/mtfSupport.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { build, buildSimplePositiveElementLens } from "./testLensFixtures.js";
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
      focus: "design",
      pupilSemiDiameterMm: 0.1,
      stopSemiDiameterMm: 0.1,
      fieldFractions: [0],
      frequenciesPerMm: [0, 1, 2],
      maxGridSize: 64,
    };
    const bundle = traceMtfFieldPupil(state, options, assessMtfSupport(state, options), 0, 32)!;
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
      rays: bundle.rays.map((ray) => ({
        ...ray,
        column: ray.row < bundle.rows / 2 ? bundle.columns - 1 - ray.column : ray.column,
      })),
    };
    expect(reconstructMtfPupil(state, folded, 0.0005876).message).toContain("folds");
  });
});

/** Uniform rays on a square launch lattice whose image-space direction cosines trace a given pupil. */
function latticePupil(inside: (qx: number, qy: number) => boolean, extent: number, samples: number): MtfBundle {
  const rays = [];
  for (let row = 0; row < samples; row++)
    for (let column = 0; column < samples; column++) {
      const qx = ((2 * (column + 0.5)) / samples - 1) * extent;
      const qy = ((2 * (row + 0.5)) / samples - 1) * extent;
      if (!inside(qx, qy)) continue;
      const terminalDirection = [qx, qy, Math.sqrt(1 - qx * qx - qy * qy)];
      rays.push({ x: 0, y: 0, weight: 1, column, row, trace: { terminalDirection, finalMedium: 1 } });
    }
  return { rays } as unknown as MtfBundle;
}

describe("diffraction limit of a traced pupil", () => {
  const wavelengthMm = 0.00055;
  it("reproduces the circular aperture response from lattice rays", () => {
    const na = 0.1;
    const cutoff = (2 * na) / wavelengthMm;
    const fractions = [0, 0.05, 0.1, 0.25, 0.5, 0.75, 0.9, 1.1];
    const limit = diffractionLimitFromBundle(latticePupil((x, y) => Math.hypot(x, y) <= na, na, 64))!;
    const values = limit.sample(
      wavelengthMm,
      fractions.map((f) => f * cutoff),
    );
    fractions.forEach((nu, i) => {
      const analytic = nu >= 1 ? 0 : (2 / Math.PI) * (Math.acos(nu) - nu * Math.sqrt(1 - nu * nu));
      expect(Math.abs(values.sagittal[i] - analytic)).toBeLessThan(0.005);
      expect(Math.abs(values.tangential[i] - analytic)).toBeLessThan(0.005);
    });
  });
  it("equals the normalized self-overlap area of a vignetted cat's-eye pupil", () => {
    const catsEye = (x: number, y: number) => Math.hypot(x, y - 0.03) <= 0.1 && Math.hypot(x, y + 0.03) <= 0.1;
    const limit = diffractionLimitFromBundle(latticePupil(catsEye, 0.1, 64))!;
    const lags = [0.02, 0.05, 0.1, 0.15];
    const values = limit.sample(
      wavelengthMm,
      lags.map((lag) => lag / wavelengthMm),
    );
    // Independent reference: dense point counting of the pupil and its shifted copy.
    const overlap = (dx: number, dy: number) => {
      let area = 0,
        shared = 0;
      for (let i = 0; i < 800; i++)
        for (let j = 0; j < 800; j++) {
          const x = -0.1 + (i + 0.5) * 0.00025;
          const y = -0.1 + (j + 0.5) * 0.00025;
          if (!catsEye(x, y)) continue;
          area++;
          if (catsEye(x + dx, y + dy)) shared++;
        }
      return shared / area;
    };
    lags.forEach((lag, i) => {
      expect(Math.abs(values.sagittal[i] - overlap(lag, 0))).toBeLessThan(0.01);
      expect(Math.abs(values.tangential[i] - overlap(0, lag))).toBeLessThan(0.01);
    });
    expect(values.tangential[1]).toBeLessThan(values.sagittal[1]);
  });
  it("agrees with scalar diffraction when the traced beam is aberration-free", () => {
    // Paraxial back focus of the fixture singlet: stop-to-glass 1 mm, radii +50/-50, n=1.5168, 5 mm thick.
    let y = 1,
      u = -(1 * 0.5168) / 50 / 1.5168;
    y += 5 * u;
    u = 1.5168 * u - (y * (1 - 1.5168)) / -50;
    const base = buildSimplePositiveElementLens();
    const focused = build({
      ...base.data,
      surfaces: base.data.surfaces.map((surface, i) => (i === 2 ? { ...surface, d: -y / u } : surface)),
    });
    const state = prepareRuntimeState(focused, 0, 0);
    const options: MtfOptions = {
      method: "diffraction",
      spectrum: "reference",
      focus: "design",
      pupilSemiDiameterMm: 0.1,
      stopSemiDiameterMm: 0.1,
      fieldFractions: [0],
      frequenciesPerMm: [0, 1, 2, 3, 4, 5],
      maxGridSize: 64,
    };
    const scalar = computeMtf(state, options).fields[0];
    const corrected = computeMtf(state, { ...options, method: "geometric-dl" }).fields[0];
    expect(scalar.reason).toBeNull();
    expect(corrected.reason).toBeNull();
    corrected.sagittal.forEach((value, i) => expect(Math.abs(value - scalar.sagittal[i])).toBeLessThan(0.01));
  });
});

/** Wave aberration in waves over the unit pupil disc; y is the meridional axis. */
type WaveAberration = (x: number, y: number) => number;

/** Diffraction-limited MTF of a circular pupil at s = ν / ν_c, where ν_c = 2 NA / λ. */
function circularMtf(s: number): number {
  return s >= 1 ? 0 : (2 / Math.PI) * (Math.acos(s) - s * Math.sqrt(1 - s * s));
}

/** Hopkins' exact incoherent MTF of an aberrated circular pupil at s = ν / ν_c: 1/π times the integral of
 * exp(i2π[W(p + s) - W(p - s)]) over the overlap of the unit discs centred at ±s on the cut axis.
 * Midpoint rule with v = sin t across the cut, which keeps the integrand smooth to the overlap's tips. */
function hopkinsMtf(aberration: WaveAberration, s: number, axis: "x" | "y", samples = 200): number {
  const wave: WaveAberration = axis === "x" ? aberration : (u, v) => aberration(v, u);
  const span = Math.acos(s);
  let real = 0,
    imaginary = 0;
  for (let i = 0; i < samples; i++) {
    const t = ((2 * (i + 0.5)) / samples - 1) * span;
    const v = Math.sin(t);
    // The chord at height v has half-width cos t - s, and dv = cos t dt.
    const half = Math.cos(t) - s;
    const area = Math.cos(t) * half;
    for (let j = 0; j < samples; j++) {
      const u = ((2 * (j + 0.5)) / samples - 1) * half;
      const phase = 2 * Math.PI * (wave(u + s, v) - wave(u - s, v));
      real += area * Math.cos(phase);
      imaginary += area * Math.sin(phase);
    }
  }
  return (Math.hypot(real, imaginary) * 4 * span) / (samples * samples * Math.PI);
}

/** Geometric bundle consistent with a wave aberration: a circular pupil `discCells` lattice cells across,
 * each ray landing at its transverse aberration -(λ / NA) ∇W. */
function aberratedLattice(
  aberration: WaveAberration,
  na: number,
  wavelengthMm: number,
  samples: number,
  discCells = samples,
): MtfBundle {
  const bundle = latticePupil((qx, qy) => Math.hypot(qx, qy) <= na, (na * samples) / discCells, samples);
  // A central difference is accurate to ~1e-9 for the low-order polynomial aberrations used here.
  const h = 1e-5;
  const scale = -wavelengthMm / (2 * h * na);
  for (const ray of bundle.rays) {
    const x = ray.trace.terminalDirection[0] / na,
      y = ray.trace.terminalDirection[1] / na;
    ray.x = scale * (aberration(x + h, y) - aberration(x - h, y));
    ray.y = scale * (aberration(x, y + h) - aberration(x, y - h));
  }
  return bundle;
}

describe("analytic wave-optics controls", () => {
  const wavelengthMm = 0.00055;
  const na = 0.1;
  const cutoff = (2 * na) / wavelengthMm;
  const unaberrated: WaveAberration = () => 0;
  const defocus: WaveAberration = (x, y) => x * x + y * y;
  // Two waves of spherical aberration balanced by defocus.
  const balancedSpherical: WaveAberration = (x, y) => 2 * ((x * x + y * y) ** 2 - (x * x + y * y));
  // Meridional coma and astigmatism, so the sagittal and tangential cuts differ.
  const comaAstigmatism: WaveAberration = (x, y) => 2 * (x * x + y * y) * y + y * y;

  /** Engine estimates and the Hopkins reference on the [sagittal, tangential] cuts at s = ν / ν_c. */
  const cuts = (aberration: WaveAberration, s: number, samples = 64, discCells = samples) => {
    const bundle = aberratedLattice(aberration, na, wavelengthMm, samples, discCells);
    const frequencies = [s * cutoff];
    const gain = diffractionLimitFromBundle(bundle)!.sample(wavelengthMm, frequencies);
    return (["x", "y"] as const).map((axis) => {
      const limit = (axis === "x" ? gain.sagittal : gain.tangential)[0];
      const geometric = geometricOtf(bundle.rays, frequencies, axis);
      return {
        limit,
        geometric: otfMagnitude(geometric)[0],
        // The diffraction-corrected estimator: geometric OTF times the pupil's aberration-free OTF.
        product: otfMagnitude(multiplyOtf(geometric, [limit]))[0],
        hopkins: hopkinsMtf(aberration, s, axis),
      };
    });
  };
  const productError = (aberration: WaveAberration, s: number) =>
    Math.max(...cuts(aberration, s).map((cut) => Math.abs(cut.product - cut.hopkins)));
  const limitError = (s: number, samples: number, discCells = samples) =>
    Math.max(...cuts(unaberrated, s, samples, discCells).map((cut) => Math.abs(cut.limit - circularMtf(s))));

  it("integrates Hopkins' formula to the circular aperture response for an unaberrated pupil", () => {
    for (const s of [0.005, 0.05, 0.2, 0.5, 0.9])
      expect(Math.abs(hopkinsMtf(unaberrated, s, "x") - circularMtf(s))).toBeLessThan(1e-4);
  });
  it("integrates Hopkins' formula in agreement with scalar diffraction of aberrated pupils", () => {
    // Independent route: FFT autocorrelation of the complex pupil raster, at whole-cell lags so nothing
    // is interpolated. The raster's pupil radius is 0.05, so a lag of k cells is s = k / size.
    const lags = [4, 16, 32, 64, 128];
    for (const aberration of [defocus, balancedSpherical, comaAstigmatism]) {
      const pupil = disk(256, (qx, qy) => 2 * Math.PI * aberration(qx / 0.05, qy / 0.05));
      const scalar = pupilOtf(
        pupil,
        wavelengthMm,
        lags.map((lag) => (lag * pupil.step) / wavelengthMm),
      );
      const sagittal = otfMagnitude(scalar.sagittal),
        tangential = otfMagnitude(scalar.tangential);
      lags.forEach((lag, i) => {
        expect(Math.abs(sagittal[i] - hopkinsMtf(aberration, lag / pupil.size, "x"))).toBeLessThan(0.001);
        expect(Math.abs(tangential[i] - hopkinsMtf(aberration, lag / pupil.size, "y"))).toBeLessThan(0.001);
      });
    }
  });
  it("reproduces the circular aperture response from an unbinned lattice", () => {
    for (const s of [0.01, 0.05, 0.1, 0.2]) expect(limitError(s, 64)).toBeLessThan(0.003);
  });
  it("matches Hopkins at low frequency under defocus and balanced spherical aberration", () => {
    expect(productError(defocus, 0.01)).toBeLessThan(0.003);
    expect(productError(balancedSpherical, 0.01)).toBeLessThan(0.003);
  });
  it("matches Hopkins at low frequency on both cuts under coma and astigmatism", () => {
    const [sagittal, tangential] = cuts(comaAstigmatism, 0.01);
    // The meridional aberration costs the tangential cut far more contrast than the sagittal one.
    expect(sagittal.hopkins - tangential.hopkins).toBeGreaterThan(0.01);
    expect(Math.abs(sagittal.product - sagittal.hopkins)).toBeLessThan(0.003);
    expect(Math.abs(tangential.product - tangential.hopkins)).toBeLessThan(0.003);
  });
  it("leaves geometric MTF alone above Hopkins by just the diffraction deficit, which vanishes as s -> 0", () => {
    for (const aberration of [defocus, balancedSpherical, comaAstigmatism]) {
      for (const s of [0.001, 0.0025, 0.005])
        for (const cut of cuts(aberration, s))
          expect(Math.abs(cut.geometric - cut.hopkins - (1 - circularMtf(s)))).toBeLessThan(0.0005);
      for (const cut of cuts(aberration, 0.001)) expect(Math.abs(cut.geometric - cut.hopkins)).toBeLessThan(0.002);
    }
  });
  it("keeps the two known estimator biases bounded", () => {
    // The same two errors as the expected failures below, so those cannot pass on a thrown error.
    expect(productError(balancedSpherical, 0.05)).toBeLessThan(0.1);
    expect(limitError(0.05, 144, 128)).toBeLessThan(0.01);
  });
  // Known biases pinned with `it.fails`: the marker flips red once the estimator is fixed and must then be removed
  // (MTF_ACCURACY_PLAN.md, diffraction estimator stage).
  it.fails("holds the product within 0.005 of Hopkins at s = 0.05 under two waves of balanced spherical", () => {
    // Hopkins' overlap excludes the pupil rim, where ray errors are largest; the product keeps it.
    expect(productError(balancedSpherical, 0.05)).toBeLessThan(0.005);
  });
  it.fails("holds a binned lattice within 0.002 of the circular aperture response", () => {
    // A 128-cell pupil with its blocked margin spans 144 cells, so flux is summed per 2x2 bin and then
    // square-rooted, which overweights the partly filled rim bins.
    expect(limitError(0.05, 144, 128)).toBeLessThan(0.002);
  });
});
