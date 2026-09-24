/** Scalar pupil autocorrelation and conservative exact-ray to reference-pupil reconstruction. */
import { fft2d } from "../math/fft.js";
import type { Vec3, PreparedOpticalState } from "../types.js";
import { xpZRelLastSurfAtZoom } from "../layout.js";
import type { MtfBundle, MtfPupilRay } from "./mtfTracing.js";
import { sampleReferenceWavefront } from "./mtfWavefront.js";
import type { ComplexOtf, MtfSpot } from "./mtfMath.js";
import { MTF_DIFFRACTION_LIMITS } from "./mtfConstants.js";

export interface ComplexPupil {
  size: number;
  real: Float64Array;
  imaginary: Float64Array;
  /** Uniform grid spacing in transverse direction cosine, in the fixed image-plane axes. */
  step: number;
}
export interface DiffractionOtf {
  sagittal: ComplexOtf;
  tangential: ComplexOtf;
}
export interface PupilReconstruction {
  pupil: ComplexPupil | null;
  message: string;
  refine: boolean;
  /** Image-plane point the wavefront is referenced to; its OTF phase is relative to this point. */
  reference: MtfSpot;
}

/** Pupil autocorrelation on a 2x zero-padded raster, reusable at any wavelength. */
export interface PupilAutocorrelation {
  /** Pupil raster side before padding. */
  size: number;
  real: Float64Array;
  imaginary: Float64Array;
  /** Zero-lag value: the pupil's transmitted energy. */
  energy: number;
  /** Pupil raster spacing in transverse direction cosine. */
  step: number;
}

/**
 * Linear autocorrelation of a pupil raster. The >=2x zero padding keeps opposite pupil edges
 * from wrapping.
 *
 * @param pupil - complex pupil raster with a power-of-two side
 * @returns padded autocorrelation raster
 */
export function pupilAutocorrelation(pupil: ComplexPupil): PupilAutocorrelation {
  const n = pupil.size,
    padded = 2 * n;
  const real = new Float64Array(padded * padded),
    imaginary = new Float64Array(padded * padded);
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      real[y * padded + x] = pupil.real[y * n + x];
      imaginary[y * padded + x] = pupil.imaginary[y * n + x];
    }
  fft2d(real, imaginary, padded);
  for (let i = 0; i < real.length; i++) {
    real[i] = real[i] ** 2 + imaginary[i] ** 2;
    imaginary[i] = 0;
  }
  fft2d(real, imaginary, padded, true);
  const energy = real[0];
  if (!(energy > 0)) throw new Error("Diffraction pupil has no transmitted energy.");
  return { size: n, real, imaginary, energy, step: pupil.step };
}

/**
 * Sample a pupil autocorrelation along the sagittal (x) and tangential (y) lag axes.
 *
 * @param autocorrelation - raster from `pupilAutocorrelation`
 * @param wavelengthMm - wavelength in mm; a frequency ν lags the pupil by λν in direction cosine
 * @param frequencies - image-space frequencies in lp/mm
 * @returns normalized complex OTF per axis, zero beyond the pupil's extent
 */
export function sampleAutocorrelation(
  autocorrelation: PupilAutocorrelation,
  wavelengthMm: number,
  frequencies: readonly number[],
): DiffractionOtf {
  const { size: n, real, imaginary, energy, step } = autocorrelation;
  const cut = (stride: number): ComplexOtf => {
    const re: number[] = [],
      im: number[] = [];
    for (const frequency of frequencies) {
      const shift = (frequency * wavelengthMm) / step;
      if (shift >= n) {
        re.push(0);
        im.push(0);
        continue;
      }
      const lo = Math.floor(shift),
        fraction = shift - lo;
      re.push(((1 - fraction) * real[lo * stride] + fraction * real[(lo + 1) * stride]) / energy);
      // Incoherent image OTF is the conjugate of this positive-lag FFT autocorrelation.
      im.push(-((1 - fraction) * imaginary[lo * stride] + fraction * imaginary[(lo + 1) * stride]) / energy);
    }
    return { real: re, imaginary: im };
  };
  return { sagittal: cut(1), tangential: cut(2 * n) };
}

/** Scalar OTF of a complex pupil raster. */
export function pupilOtf(pupil: ComplexPupil, wavelengthMm: number, frequencies: readonly number[]): DiffractionOtf {
  return sampleAutocorrelation(pupilAutocorrelation(pupil), wavelengthMm, frequencies);
}

interface PupilNode {
  x: number;
  y: number;
  path: number;
  transmission: number;
}

export function reconstructMtfPupil(
  state: PreparedOpticalState,
  bundle: MtfBundle,
  wavelengthMm: number,
  imagePlaneZ = state.imgZ,
): PupilReconstruction {
  const limits = MTF_DIFFRACTION_LIMITS;
  // A clipped chief can sit outside the transmitted beam; reference the beam's flux centroid instead.
  const centroidRay = bundle.chiefClipped ? rayNearestFluxCentroid(bundle) : null;
  const referenceTrace = centroidRay?.trace ?? bundle.chiefTrace;
  const referenceSpot: MtfSpot = centroidRay ? fluxCentroid(bundle) : bundle.chief;
  const reject = (message: string, refine = false): PupilReconstruction => ({
    pupil: null,
    message,
    refine,
    reference: referenceSpot,
  });
  if (referenceTrace.finalMedium !== 1 || bundle.rays.some((ray) => ray.trace.finalMedium !== 1))
    return reject("Scalar FFT currently requires an image space in air.");
  const chiefDirection = referenceTrace.terminalDirection;
  if (chiefDirection[2] < Math.cos((limits.maxChiefIncidenceDeg * Math.PI) / 180))
    return reject(`Diffraction is outside the validated ${limits.maxChiefIncidenceDeg}° image-ray incidence domain.`);
  const image: Vec3 = [referenceSpot.x, referenceSpot.y, imagePlaneZ];
  const radius = referenceSphereRadius(state, referenceTrace, image);
  const reference = sampleReferenceWavefront(referenceTrace, image, radius, bundle.objectPoint);
  if (!reference) return reject("Unable to establish a reference wavefront.");
  // Launch nodes keep the rectangular footprint grid; the pupil raster is square with the ladder size.
  const { columns, rows } = bundle;
  const n = bundle.gridSize;
  const nodes: Array<PupilNode | undefined> = new Array(columns * rows);
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (const ray of bundle.rays) {
    const wave = sampleReferenceWavefront(ray.trace, image, radius, bundle.objectPoint);
    if (!wave) return reject("A ray cannot be mapped onto the reference sphere.");
    if (Math.hypot(wave.qx - reference.qx, wave.qy - reference.qy) > limits.maxConeDirectionCosine)
      return reject(
        "Diffraction requires a narrower ray cone (roughly f/2 or slower in air). Stop down or use geometric MTF.",
      );
    if (Math.hypot(ray.x - image[0], ray.y - image[1]) > limits.maxBlurToReferenceRadius * radius)
      return reject("Image blur exceeds the validated scalar FFT domain; use geometric MTF.");
    nodes[ray.row * columns + ray.column] = {
      x: wave.qx,
      y: wave.qy,
      path: wave.opticalPathMm - reference.opticalPathMm,
      transmission: ray.weight,
    };
    minX = Math.min(minX, wave.qx);
    maxX = Math.max(maxX, wave.qx);
    minY = Math.min(minY, wave.qy);
    maxY = Math.max(maxY, wave.qy);
  }
  for (let y = 0; y < rows; y++)
    for (let x = 0; x < columns; x++) {
      const a = nodes[y * columns + x];
      if (!a) continue;
      for (const b of [
        x + 1 < columns ? nodes[y * columns + x + 1] : undefined,
        y + 1 < rows ? nodes[(y + 1) * columns + x] : undefined,
      ]) {
        if (b && Math.abs(a.path - b.path) > wavelengthMm * limits.maxPhaseStepWaves)
          return reject("Wavefront phase needs finer pupil sampling.", true);
      }
    }
  const step = Math.max(maxX - minX, maxY - minY) / (n - 3);
  if (!(step > 0) || !Number.isFinite(step)) return reject("Degenerate reference pupil.");
  const originX = (minX + maxX) / 2 - ((n - 1) * step) / 2;
  const originY = (minY + maxY) / 2 - ((n - 1) * step) / 2;
  const real = new Float64Array(n * n),
    imaginary = new Float64Array(n * n);
  let orientation = 0,
    folded = false;
  const rasterize = (a?: PupilNode, b?: PupilNode, c?: PupilNode) => {
    if (!a || !b || !c) return;
    const determinant = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
    if (Math.abs(determinant) < 1e-20) {
      folded = true;
      return;
    }
    if (orientation && Math.sign(determinant) !== orientation) {
      folded = true;
      return;
    }
    orientation = Math.sign(determinant);
    const x0 = Math.max(0, Math.ceil((Math.min(a.x, b.x, c.x) - originX) / step));
    const x1 = Math.min(n - 1, Math.floor((Math.max(a.x, b.x, c.x) - originX) / step));
    const y0 = Math.max(0, Math.ceil((Math.min(a.y, b.y, c.y) - originY) / step));
    const y1 = Math.min(n - 1, Math.floor((Math.max(a.y, b.y, c.y) - originY) / step));
    // The Jacobian conserves flux when a uniform incident grid maps to a distorted exit pupil.
    const density = bundle.launchStepMm ** 2 / Math.abs(determinant);
    for (let y = y0; y <= y1; y++)
      for (let x = x0; x <= x1; x++) {
        const px = originX + x * step - a.x,
          py = originY + y * step - a.y;
        const u = (px * (c.y - a.y) - py * (c.x - a.x)) / determinant;
        const v = ((b.x - a.x) * py - (b.y - a.y) * px) / determinant;
        if (u < -1e-10 || v < -1e-10 || u + v > 1 + 1e-10) continue;
        const w = 1 - u - v;
        const phase = (2 * Math.PI * (w * a.path + u * b.path + v * c.path)) / wavelengthMm;
        const amplitude = Math.sqrt(
          Math.max(0, density * (w * a.transmission + u * b.transmission + v * c.transmission)),
        );
        real[y * n + x] = amplitude * Math.cos(phase);
        imaginary[y * n + x] = amplitude * Math.sin(phase);
      }
  };
  for (let y = 0; y < rows - 1; y++)
    for (let x = 0; x < columns - 1; x++) {
      const i = y * columns + x;
      rasterize(nodes[i], nodes[i + 1], nodes[i + columns + 1]);
      rasterize(nodes[i], nodes[i + columns + 1], nodes[i + columns]);
    }
  if (folded) return reject("Exit-pupil mapping folds or becomes singular; scalar FFT MTF is unavailable.");
  if (!real.some((v, i) => v !== 0 || imaginary[i] !== 0))
    return reject("No continuous transmitted pupil could be reconstructed.");
  return { pupil: { size: n, real, imaginary, step }, message: "", refine: false, reference: referenceSpot };
}

/**
 * Reference-sphere radius: the exit-pupil distance when it lies in front of the image, which is
 * the textbook reference and stays finite when the last surface sits on the image plane;
 * otherwise the distance from the reference ray's last surface hit.
 */
function referenceSphereRadius(state: PreparedOpticalState, referenceTrace: MtfPupilRay["trace"], image: Vec3): number {
  const lastZ = state.surfaces[state.surfaces.length - 1]?.z;
  const exitPupilZ = lastZ + xpZRelLastSurfAtZoom(state.zoomT, state.lens.runtime);
  const pupilDistance = image[2] - exitPupilZ;
  if (Number.isFinite(pupilDistance) && pupilDistance > 1e-6) return pupilDistance;
  return Math.hypot(...referenceTrace.terminalPoint.map((v, i) => v - image[i]));
}

function fluxCentroid(bundle: MtfBundle): MtfSpot {
  const weight = bundle.rays.reduce((sum, ray) => sum + ray.weight, 0);
  return {
    x: bundle.rays.reduce((sum, ray) => sum + ray.weight * ray.x, 0) / weight,
    y: bundle.rays.reduce((sum, ray) => sum + ray.weight * ray.y, 0) / weight,
    weight,
  };
}

function rayNearestFluxCentroid(bundle: MtfBundle): MtfPupilRay | null {
  if (!bundle.rays.length) return null;
  const centroid = fluxCentroid(bundle);
  return bundle.rays.reduce((best, ray) =>
    Math.hypot(ray.x - centroid.x, ray.y - centroid.y) < Math.hypot(best.x - centroid.x, best.y - centroid.y)
      ? ray
      : best,
  );
}
