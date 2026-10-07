import { describe, expect, it } from "vitest";
import { shearedOtf } from "../../../src/optics/analysis/mtfShearedOtf.js";
import { geometricOtf, otfMagnitude, type ComplexOtf } from "../../../src/optics/analysis/mtfMath.js";
import {
  mtfWaveLattice,
  waveLatticeOtf,
  waveLatticePhaseStep,
  type MtfWaveLattice,
} from "../../../src/optics/analysis/mtfWavefront.js";
import { traceMtfFieldPupil, type MtfBundle } from "../../../src/optics/analysis/mtfTracing.js";
import { assessMtfSupport } from "../../../src/optics/analysis/mtfSupport.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { build, buildSimplePositiveElementLens } from "./testLensFixtures.js";
import { computeMtf, computeMtfSteps, type MtfJobCache } from "../../../src/optics/mtf.js";
import type { MtfOptions } from "../../../src/types/mtf.js";

const ORIGIN = { x: 0, y: 0, weight: 1 };

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
  return { rays, columns: samples, rows: samples, mirrored: false } as unknown as MtfBundle;
}

/** Share of a pupil's area that overlaps its copy shifted by (dx, dy), by dense point counting. */
function overlapShare(inside: (x: number, y: number) => boolean, extent: number, dx: number, dy: number): number {
  const samples = 800;
  const step = (2 * extent) / samples;
  let area = 0,
    shared = 0;
  for (let i = 0; i < samples; i++)
    for (let j = 0; j < samples; j++) {
      const x = -extent + (i + 0.5) * step;
      const y = -extent + (j + 0.5) * step;
      if (!inside(x, y)) continue;
      area++;
      if (inside(x + dx, y + dy)) shared++;
    }
  return shared / area;
}

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

/** The same pupil as a wavefront. A landing error of -(λ / NA) ∇W is an optical path of λ W over direction cosine. */
function aberratedWaveLattice(
  aberration: WaveAberration,
  na: number,
  wavelengthMm: number,
  samples: number,
): MtfWaveLattice {
  const cells = samples * samples;
  const lattice: MtfWaveLattice = {
    columns: samples,
    rows: samples,
    amplitude: new Float64Array(cells),
    pathMm: new Float64Array(cells),
    cosineX: new Float64Array(cells),
    cosineY: new Float64Array(cells),
  };
  for (let row = 0; row < samples; row++)
    for (let column = 0; column < samples; column++) {
      const x = (2 * (column + 0.5)) / samples - 1;
      const y = (2 * (row + 0.5)) / samples - 1;
      if (Math.hypot(x, y) > 1) continue;
      const cell = row * samples + column;
      lattice.amplitude[cell] = 1;
      lattice.pathMm[cell] = wavelengthMm * aberration(x, y);
      lattice.cosineX[cell] = na * x;
      lattice.cosineY[cell] = na * y;
    }
  return lattice;
}

const wavelengthMm = 0.00055;
const na = 0.1;
const cutoff = (2 * na) / wavelengthMm;
const unaberrated: WaveAberration = () => 0;
const defocus: WaveAberration = (x, y) => x * x + y * y;
// Two waves of spherical aberration balanced by defocus.
const balancedSpherical: WaveAberration = (x, y) => 2 * ((x * x + y * y) ** 2 - (x * x + y * y));
// Meridional coma and astigmatism, so the sagittal and tangential cuts differ.
const comaAstigmatism: WaveAberration = (x, y) => 2 * (x * x + y * y) * y + y * y;
// One wave of sixth-order (secondary) spherical aberration, balanced like the Zernike term.
const secondarySpherical: WaveAberration = (x, y) => {
  const r2 = x * x + y * y;
  return 20 * r2 ** 3 - 30 * r2 ** 2 + 12 * r2;
};

describe("sheared-ray diffraction MTF", () => {
  it("reproduces the circular aperture response from lattice rays", () => {
    const fractions = [0, 0.05, 0.1, 0.25, 0.5, 0.75, 0.9, 1.1];
    const out = shearedOtf(
      latticePupil((x, y) => Math.hypot(x, y) <= na, na, 64),
      ORIGIN,
      wavelengthMm,
      fractions.map((f) => f * cutoff),
    );
    fractions.forEach((nu, i) => {
      for (const cut of ["sagittal", "tangential"] as const) {
        expect(Math.abs(out.limit[cut][i] - circularMtf(nu))).toBeLessThan(0.003);
        // With no landing error the OTF is its own aberration-free response.
        expect(otfMagnitude(out[cut])[i]).toBeCloseTo(out.limit[cut][i], 12);
      }
    });
  });
  it("gives the self-overlap of a vignetted cat's-eye pupil and of an obstructed one as the limit", () => {
    const catsEye = (x: number, y: number) => Math.hypot(x, y - 0.03) <= 0.1 && Math.hypot(x, y + 0.03) <= 0.1;
    // A central obstruction leaves sheared pairs whose midpoint has no ray.
    const annulus = (x: number, y: number) => Math.hypot(x, y) <= 0.1 && Math.hypot(x, y) >= 0.04;
    const lags = [0.02, 0.05, 0.1, 0.15];
    for (const pupil of [catsEye, annulus]) {
      const { limit, straddling } = shearedOtf(
        latticePupil(pupil, 0.1, 64),
        ORIGIN,
        wavelengthMm,
        lags.map((lag) => lag / wavelengthMm),
      );
      lags.forEach((lag, i) => {
        expect(Math.abs(limit.sagittal[i] - overlapShare(pupil, 0.1, lag, 0))).toBeLessThan(0.01);
        expect(Math.abs(limit.tangential[i] - overlapShare(pupil, 0.1, 0, lag))).toBeLessThan(0.01);
      });
      if (pupil === catsEye) expect(limit.tangential[1]).toBeLessThan(limit.sagittal[1]);
      // Only the annulus has pairs whose midpoint is unlit, and it reports how much of the overlap they are:
      // most pairs once the shear outgrows the hole, next to none while it fits inside the ring.
      if (pupil === catsEye) expect(Math.max(...straddling)).toBe(0);
      else {
        expect(straddling[0]).toBeLessThan(0.01);
        expect(straddling[3]).toBeGreaterThan(0.5);
      }
    }
  });
  it("opens each pair by the lattice cells its shear spans where the lattice maps unevenly onto the pupil", () => {
    // Rows map to direction cosine as y = v + 0.2 (1 - v²): the lattice pitch varies 2.3 to 1 across the pupil,
    // far more than the 10 to 20 % of real wide-angle corners. Rays carry the Jacobian as flux, so the pupil is uniform.
    const samples = 64;
    const rays = [];
    const h = 1e-5;
    const scale = -wavelengthMm / (2 * h * na);
    for (let row = 0; row < samples; row++)
      for (let column = 0; column < samples; column++) {
        const x = (2 * (column + 0.5)) / samples - 1;
        const v = (2 * (row + 0.5)) / samples - 1;
        const y = v + 0.2 * (1 - v * v);
        if (Math.hypot(x, y) > 1) continue;
        rays.push({
          x: scale * (comaAstigmatism(x + h, y) - comaAstigmatism(x - h, y)),
          y: scale * (comaAstigmatism(x, y + h) - comaAstigmatism(x, y - h)),
          weight: 1 - 0.4 * v,
          column,
          row,
          trace: { terminalDirection: [na * x, na * y, Math.sqrt(1 - na * na * (x * x + y * y))], finalMedium: 1 },
        });
      }
    const bundle = { rays, columns: samples, rows: samples, mirrored: false } as unknown as MtfBundle;
    const shears = [0.05, 0.2];
    const out = shearedOtf(
      bundle,
      ORIGIN,
      wavelengthMm,
      shears.map((s) => s * cutoff),
    );
    // One lag fitted to the whole pupil reads these 0.014 and 0.032 off.
    shears.forEach((s, i) => {
      expect(Math.abs(otfMagnitude(out.tangential)[i] - hopkinsMtf(comaAstigmatism, s, "y"))).toBeLessThan(0.004);
      expect(Math.abs(otfMagnitude(out.sagittal)[i] - hopkinsMtf(comaAstigmatism, s, "x"))).toBeLessThan(0.004);
    });
  });
  it("closes a beam one lattice cell thin within that cell instead of leaving it unsheared", () => {
    // 32 cells wide and a single row high: a slit whose own height the lattice cannot resolve.
    const slit = latticePupil((x, y) => Math.abs(x) <= na && Math.abs(y) < na / 16, na, 32);
    expect(new Set(slit.rays.map((ray) => ray.row)).size).toBe(2);
    const oneRow = { ...slit, rays: slit.rays.filter((ray) => ray.row === 16) } as unknown as MtfBundle;
    // One cell spans 2 NA / 32 in direction cosine, so nothing overlaps beyond 1/32 of the wide axis's cutoff.
    const { limit } = shearedOtf(oneRow, ORIGIN, wavelengthMm, [0, cutoff / 64, cutoff / 16, cutoff / 2]);
    expect(limit.tangential[0]).toBeCloseTo(1, 12);
    // A quarter cell each way: both ends taper inside the one cell, (1 - 1/4)².
    expect(limit.tangential[1]).toBeCloseTo(0.5625, 9);
    expect(limit.tangential[2]).toBe(0);
    expect(limit.tangential[3]).toBe(0);
    expect(limit.sagittal[3]).toBeCloseTo(0.5, 1);
  });
  it("scales direction cosines by the image-space index, so an immersed image reads as it does in air", () => {
    const frequencies = [0.05, 0.3].map((s) => s * cutoff);
    const air = aberratedLattice(balancedSpherical, na, wavelengthMm, 64);
    const immersed = {
      ...air,
      rays: air.rays.map((ray) => ({
        ...ray,
        trace: { finalMedium: 1.5, terminalDirection: ray.trace.terminalDirection.map((v) => v / 1.5) },
      })),
    } as unknown as MtfBundle;
    const expected = shearedOtf(air, ORIGIN, wavelengthMm, frequencies);
    const actual = shearedOtf(immersed, ORIGIN, wavelengthMm, frequencies);
    frequencies.forEach((_, i) => {
      expect(actual.sagittal.real[i]).toBeCloseTo(expected.sagittal.real[i], 12);
      expect(actual.limit.tangential[i]).toBeCloseTo(expected.limit.tangential[i], 12);
    });
  });
  it("tends to the geometric OTF, phase included, as the shear closes", () => {
    const bundle = aberratedLattice(comaAstigmatism, na, wavelengthMm, 64);
    const reference = { x: 0.004, y: 0.01, weight: 1 };
    const frequencies = [0.002 * cutoff];
    const points = bundle.rays.map((ray) => ({ x: ray.x - reference.x, y: ray.y - reference.y, weight: ray.weight }));
    const sheared = shearedOtf(bundle, reference, wavelengthMm, frequencies);
    for (const [cut, axis] of [
      ["sagittal", "x"],
      ["tangential", "y"],
    ] as const) {
      const geometric = geometricOtf(points, frequencies, axis);
      expect(sheared[cut].real[0]).toBeCloseTo(geometric.real[0] * sheared.limit[cut][0], 3);
      expect(sheared[cut].imaginary[0]).toBeCloseTo(geometric.imaginary[0] * sheared.limit[cut][0], 3);
    }
    // The tangential cut carries the coma's image shift as phase.
    expect(Math.abs(sheared.tangential.imaginary[0])).toBeGreaterThan(1e-3);
  });
  it("sums a mirrored half pupil to the same complex OTF and refers its phase to the given image point", () => {
    // Astigmatism along x gives each half pupil a net sagittal phase that only the pair of halves cancels.
    const bundle = aberratedLattice((x, y) => comaAstigmatism(x, y) + 0.7 * x * x, na, wavelengthMm, 64);
    const frequencies = [5, 20, 60, 200];
    const reference = { x: 0, y: 0.01, weight: 1 };
    const full = shearedOtf(bundle, reference, wavelengthMm, frequencies);
    const mirrored = shearedOtf({ ...bundle, mirrored: true }, reference, wavelengthMm, frequencies);
    const moved = shearedOtf(bundle, { x: 0.003, y: 0.01 - 0.002, weight: 1 }, wavelengthMm, frequencies);
    const rotate = (otf: ComplexOtf, i: number, displacementMm: number) => {
      const phase = 2 * Math.PI * frequencies[i] * displacementMm;
      return [
        otf.real[i] * Math.cos(phase) - otf.imaginary[i] * Math.sin(phase),
        otf.real[i] * Math.sin(phase) + otf.imaginary[i] * Math.cos(phase),
      ];
    };
    frequencies.forEach((_, i) => {
      for (const cut of ["sagittal", "tangential"] as const) {
        expect(mirrored[cut].real[i]).toBeCloseTo(full[cut].real[i], 12);
        expect(mirrored[cut].imaginary[i]).toBeCloseTo(full[cut].imaginary[i], 12);
        expect(mirrored.limit[cut][i]).toBeCloseTo(full.limit[cut][i], 12);
      }
      expect(Math.abs(full.sagittal.imaginary[i])).toBeLessThan(1e-12);
      // Moving the reference by d turns the OTF by exp(2πiνd) and leaves its modulus alone.
      const [sagittalReal, sagittalImaginary] = rotate(full.sagittal, i, 0.003);
      const [tangentialReal, tangentialImaginary] = rotate(full.tangential, i, -0.002);
      expect(moved.sagittal.real[i]).toBeCloseTo(sagittalReal, 10);
      expect(moved.sagittal.imaginary[i]).toBeCloseTo(sagittalImaginary, 10);
      expect(moved.tangential.real[i]).toBeCloseTo(tangentialReal, 10);
      expect(moved.tangential.imaginary[i]).toBeCloseTo(tangentialImaginary, 10);
    });
  });
});

describe("sheared-ray diffraction MTF of an asymmetric pupil", () => {
  it("sums the whole pupil when the bundle is not a mirrored pair of halves", () => {
    // Coma along x: the two halves differ, so only the unfolded sum is right.
    const sideways: WaveAberration = (x, y) => 2 * (x * x + y * y) * x + 0.5 * x * x;
    const bundle = aberratedLattice(sideways, na, wavelengthMm, 64);
    const shears = [0.05, 0.2, 0.5];
    const out = shearedOtf(
      bundle,
      ORIGIN,
      wavelengthMm,
      shears.map((s) => s * cutoff),
    );
    shears.forEach((s, i) => {
      expect(Math.abs(otfMagnitude(out.sagittal)[i] - hopkinsMtf(sideways, s, "x"))).toBeLessThan(0.004);
      expect(Math.abs(otfMagnitude(out.tangential)[i] - hopkinsMtf(sideways, s, "y"))).toBeLessThan(0.004);
    });
    // The sagittal cut carries the coma's image shift as phase, which a mirrored pair would cancel.
    expect(Math.abs(out.sagittal.imaginary[1])).toBeGreaterThan(0.05);
  });
});

describe("diffraction MTF of a traced lens", () => {
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
  it("returns the aberration-free response of the pupil beside the curves, and only for the diffraction method", () => {
    const field = computeMtf(state, options).fields[0];
    expect(field.reason).toBeNull();
    // A 0.1 mm stop at this focus is diffraction limited: about f/240, cutoff 2 NA / λ near 7 lp/mm at 587.6 nm.
    const limitCutoff = (2 * 0.1) / (0.0005876 * focused.EFL);
    options.frequenciesPerMm!.forEach((frequency, i) => {
      expect(Math.abs(field.diffractionLimit!.sagittal[i] - circularMtf(frequency / limitCutoff))).toBeLessThan(0.01);
      expect(Math.abs(field.sagittal[i] - field.diffractionLimit!.sagittal[i])).toBeLessThan(0.005);
      expect(field.tangential[i]).toBeCloseTo(field.sagittal[i], 6);
    });
    expect(computeMtf(state, { ...options, method: "geometric" }).fields[0].diffractionLimit).toBeNull();
    // Refinement starts at the 16 grid like geometric MTF: capped at 32, the 32 grid has a coarser one to compare with.
    const capped = computeMtf(state, { ...options, maxGridSize: 32 }).fields[0];
    expect(capped.gridSize).toBe(32);
    expect(capped.maxDelta).not.toBeNull();
    // A request that only changes its field list reuses finished fields, the limit included.
    const cache: MtfJobCache = { fields: new Map() };
    const drain = (request: MtfOptions) => {
      const steps = computeMtfSteps(state, request, cache);
      let step = steps.next();
      while (!step.done) step = steps.next();
      return step.value;
    };
    drain(options);
    const reused = drain({ ...options, fieldFractions: [0, 0.5] }).fields[0];
    expect(reused.diffractionLimit).toEqual(field.diffractionLimit);
    expect(reused.diffractionLimit).not.toBe(cache.fields.get(0)!.diffractionLimit);
  });
  it("agrees with the optical-path autocorrelation of the same rays under real spherical aberration", () => {
    // The singlet at f/8 and its best focus carries spherical aberration, and coma and astigmatism off axis.
    const request: MtfOptions = { ...options, pupilSemiDiameterMm: 3, stopSemiDiameterMm: 3, focus: "best-axial" };
    const support = assessMtfSupport(state, request);
    const planeZ = state.imgZ + computeMtf(state, request).focus!.appliedShiftMm;
    const line = support.spectralLines[0];
    const lambda = line.wavelengthNm * 1e-6;
    const frequencies = [10, 30, 60, 100];
    for (const fieldAngleDeg of [0, 4]) {
      const bundle = traceMtfFieldPupil(state, request, support, fieldAngleDeg, 64, line, planeZ, true)!;
      const lattice = mtfWaveLattice(bundle, bundle.chief, planeZ)!;
      const step = waveLatticePhaseStep(lattice, lambda);
      expect(step).toBeGreaterThan(0.005);
      expect(step).toBeLessThan(0.25);
      // Two routes that share only the trace: ray landings against optical path.
      const landings = shearedOtf(bundle, bundle.chief, lambda, frequencies);
      const paths = waveLatticeOtf(lattice, lambda, frequencies);
      frequencies.forEach((_, i) => {
        for (const cut of ["sagittal", "tangential"] as const) {
          expect(Math.abs(landings[cut].real[i] - paths[cut].real[i])).toBeLessThan(0.004);
          expect(Math.abs(landings[cut].imaginary[i] - paths[cut].imaginary[i])).toBeLessThan(0.004);
        }
      });
      // The aberration costs real contrast here, so the agreement is not two copies of the limit.
      expect(landings.limit.tangential[2] - otfMagnitude(landings.tangential)[2]).toBeGreaterThan(0.02);
    }
  });
});

describe("analytic wave-optics controls", () => {
  /** Engine estimates and the Hopkins reference on the [sagittal, tangential] cuts at s = ν / ν_c. */
  const cuts = (aberration: WaveAberration, s: number, samples = 64, discCells = samples) => {
    const bundle = aberratedLattice(aberration, na, wavelengthMm, samples, discCells);
    const frequencies = [s * cutoff];
    const sheared = shearedOtf(bundle, ORIGIN, wavelengthMm, frequencies);
    return (["x", "y"] as const).map((axis) => {
      const cut = axis === "x" ? "sagittal" : "tangential";
      return {
        limit: sheared.limit[cut][0],
        geometric: otfMagnitude(geometricOtf(bundle.rays, frequencies, axis))[0],
        estimate: otfMagnitude(sheared[cut])[0],
        hopkins: hopkinsMtf(aberration, s, axis),
      };
    });
  };
  const estimateError = (aberration: WaveAberration, s: number, samples = 64, discCells = samples) =>
    Math.max(...cuts(aberration, s, samples, discCells).map((cut) => Math.abs(cut.estimate - cut.hopkins)));
  const limitError = (s: number, samples: number, discCells = samples) =>
    Math.max(...cuts(unaberrated, s, samples, discCells).map((cut) => Math.abs(cut.limit - circularMtf(s))));

  it("integrates Hopkins' formula to the circular aperture response for an unaberrated pupil", () => {
    for (const s of [0.005, 0.05, 0.2, 0.5, 0.9])
      expect(Math.abs(hopkinsMtf(unaberrated, s, "x") - circularMtf(s))).toBeLessThan(1e-4);
  });
  it("measures the optical-path reference's phase step and pairs its cells across an obstruction", () => {
    // A pure tilt of 0.1 wave per column and 0.3 per row.
    const tilted = aberratedWaveLattice((x, y) => (0.1 * x + 0.3 * y) * 16, na, wavelengthMm, 32);
    expect(waveLatticePhaseStep(tilted, wavelengthMm)).toBeCloseTo(0.3, 9);
    // An annulus: pairs at large shear have their midpoint in the hole and still count.
    const annulus = aberratedWaveLattice(unaberrated, na, wavelengthMm, 128);
    const inside = (x: number, y: number) => Math.hypot(x, y) <= na && Math.hypot(x, y) >= 0.4 * na;
    annulus.amplitude.forEach((_, cell) => {
      if (!inside(annulus.cosineX[cell], annulus.cosineY[cell])) annulus.amplitude[cell] = 0;
    });
    const shears = [0.5, 0.8];
    const otf = waveLatticeOtf(
      annulus,
      wavelengthMm,
      shears.map((s) => s * cutoff),
    );
    shears.forEach((s, i) =>
      expect(Math.abs(otf.sagittal.real[i] - overlapShare(inside, na, 2 * s * na, 0))).toBeLessThan(0.005),
    );
  });
  it("integrates Hopkins' formula in agreement with the lattice optical-path autocorrelation", () => {
    // Independent route: the complex pupil autocorrelated on a 256-cell lattice at each exact lag.
    const shears = [0.02, 0.05, 0.13, 0.25, 0.5];
    for (const aberration of [defocus, balancedSpherical, comaAstigmatism]) {
      const lattice = aberratedWaveLattice(aberration, na, wavelengthMm, 256);
      expect(waveLatticePhaseStep(lattice, wavelengthMm)).toBeLessThan(0.25);
      const otf = waveLatticeOtf(
        lattice,
        wavelengthMm,
        shears.map((s) => s * cutoff),
      );
      const sagittal = otfMagnitude(otf.sagittal),
        tangential = otfMagnitude(otf.tangential);
      shears.forEach((s, i) => {
        expect(Math.abs(sagittal[i] - hopkinsMtf(aberration, s, "x"))).toBeLessThan(0.002);
        expect(Math.abs(tangential[i] - hopkinsMtf(aberration, s, "y"))).toBeLessThan(0.002);
      });
      // The ray route gives the same complex OTF, so the two agree on the sign of an image shift too.
      const rays = shearedOtf(
        aberratedLattice(aberration, na, wavelengthMm, 256),
        ORIGIN,
        wavelengthMm,
        shears.map((s) => s * cutoff),
      );
      shears.forEach((_, i) => {
        expect(Math.abs(rays.tangential.real[i] - otf.tangential.real[i])).toBeLessThan(0.002);
        expect(Math.abs(rays.tangential.imaginary[i] - otf.tangential.imaginary[i])).toBeLessThan(0.002);
      });
      if (aberration === comaAstigmatism) expect(Math.abs(otf.tangential.imaginary[1])).toBeGreaterThan(0.05);
    }
  });
  it("reproduces the circular aperture response from the lattice, with or without a blocked margin", () => {
    for (const s of [0.01, 0.05, 0.1, 0.2]) expect(limitError(s, 64)).toBeLessThan(0.003);
    // A 128-cell pupil inside a 144-cell launch grid, which a binned autocorrelation read 0.005 to 0.009 high.
    for (const s of [0.01, 0.05, 0.1, 0.2, 0.5]) expect(limitError(s, 144, 128)).toBeLessThan(0.002);
  });
  it("matches Hopkins at low frequency under defocus and balanced spherical aberration", () => {
    expect(estimateError(defocus, 0.01)).toBeLessThan(0.003);
    expect(estimateError(balancedSpherical, 0.01)).toBeLessThan(0.003);
  });
  it("matches Hopkins at low frequency on both cuts under coma and astigmatism", () => {
    const [sagittal, tangential] = cuts(comaAstigmatism, 0.01);
    // The meridional aberration costs the tangential cut far more contrast than the sagittal one.
    expect(sagittal.hopkins - tangential.hopkins).toBeGreaterThan(0.01);
    expect(Math.abs(sagittal.estimate - sagittal.hopkins)).toBeLessThan(0.003);
    expect(Math.abs(tangential.estimate - tangential.hopkins)).toBeLessThan(0.003);
  });
  it("leaves geometric MTF alone above Hopkins by just the diffraction deficit, which vanishes as s -> 0", () => {
    for (const aberration of [defocus, balancedSpherical, comaAstigmatism]) {
      for (const s of [0.001, 0.0025, 0.005])
        for (const cut of cuts(aberration, s))
          expect(Math.abs(cut.geometric - cut.hopkins - (1 - circularMtf(s)))).toBeLessThan(0.0005);
      for (const cut of cuts(aberration, 0.001)) expect(Math.abs(cut.geometric - cut.hopkins)).toBeLessThan(0.002);
    }
  });
  it("holds within 0.004 of Hopkins at every shear under primary aberrations", () => {
    // Geometric MTF times the diffraction limit read 0.01 to 0.055 low here: Hopkins' overlap excludes the pupil
    // rim, where ray errors are largest, and a product keeps it.
    for (const aberration of [defocus, balancedSpherical, comaAstigmatism])
      for (const s of [0.02, 0.05, 0.1, 0.2, 0.3, 0.5, 0.8]) expect(estimateError(aberration, s)).toBeLessThan(0.004);
    const [atFivePercent] = cuts(balancedSpherical, 0.05);
    expect(atFivePercent.hopkins - atFivePercent.geometric * atFivePercent.limit).toBeGreaterThan(0.02);
  });
  it("holds within 0.004 of Hopkins under sixth-order spherical aberration", () => {
    // Five rays per sheared pair integrate the wavefront slope exactly through sixth order; three stop at fourth.
    for (const s of [0.05, 0.1, 0.2, 0.3, 0.5]) expect(estimateError(secondarySpherical, s, 128)).toBeLessThan(0.004);
  });
});
