/** Scalar pupil autocorrelation and conservative exact-ray to reference-pupil reconstruction. */
import { fft2d } from "../math/fft.js";
import type { Vec3, PreparedOpticalState } from "../types.js";
import type { MtfBundle } from "./mtfTracing.js";
import { sampleReferenceWavefront } from "./mtfWavefront.js";
import type { ComplexOtf } from "./mtfMath.js";

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
}

/** Linear autocorrelation uses >=2x zero padding so opposite pupil edges never wrap. */
export function pupilOtf(pupil: ComplexPupil, wavelengthMm: number, frequencies: readonly number[]): DiffractionOtf {
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
  const cut = (stride: number): ComplexOtf => {
    const re: number[] = [],
      im: number[] = [];
    for (const frequency of frequencies) {
      const shift = (frequency * wavelengthMm) / pupil.step;
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
  return { sagittal: cut(1), tangential: cut(padded) };
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
): PupilReconstruction {
  const reject = (message: string, refine = false): PupilReconstruction => ({ pupil: null, message, refine });
  if (bundle.chiefTrace.finalMedium !== 1 || bundle.rays.some((ray) => ray.trace.finalMedium !== 1))
    return reject("Scalar FFT currently requires an image space in air.");
  const chiefDirection = bundle.chiefTrace.terminalDirection;
  if (chiefDirection[2] < Math.cos((15 * Math.PI) / 180))
    return reject("Diffraction is outside the validated 15° image-ray incidence domain.");
  const image: Vec3 = [bundle.chief.x, bundle.chief.y, state.imgZ];
  const radius = Math.hypot(...bundle.chiefTrace.terminalPoint.map((v, i) => v - image[i]));
  const reference = sampleReferenceWavefront(bundle.chiefTrace, image, radius, bundle.objectPoint);
  if (!reference) return reject("Unable to establish a reference wavefront.");
  const n = bundle.gridSize;
  const nodes: Array<PupilNode | undefined> = new Array(n * n);
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (const ray of bundle.rays) {
    const wave = sampleReferenceWavefront(ray.trace, image, radius, bundle.objectPoint);
    if (!wave) return reject("A ray cannot be mapped onto the reference sphere.");
    if (
      Math.hypot(wave.qx - reference.qx, wave.qy - reference.qy) > 0.25 ||
      Math.hypot(ray.x - image[0], ray.y - image[1]) > 0.02 * radius
    ) {
      return reject("Ray cone or image blur exceeds the validated scalar FFT domain; use geometric MTF.");
    }
    nodes[ray.row * n + ray.column] = {
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
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      const a = nodes[y * n + x];
      if (!a) continue;
      for (const b of [x + 1 < n ? nodes[y * n + x + 1] : undefined, y + 1 < n ? nodes[(y + 1) * n + x] : undefined]) {
        if (b && Math.abs(a.path - b.path) > wavelengthMm / 4)
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
  for (let y = 0; y < n - 1; y++)
    for (let x = 0; x < n - 1; x++) {
      const i = y * n + x;
      rasterize(nodes[i], nodes[i + 1], nodes[i + n + 1]);
      rasterize(nodes[i], nodes[i + n + 1], nodes[i + n]);
    }
  if (folded) return reject("Exit-pupil mapping folds or becomes singular; scalar FFT MTF is unavailable.");
  if (!real.some((v, i) => v !== 0 || imaginary[i] !== 0))
    return reject("No continuous transmitted pupil could be reconstructed.");
  return { pupil: { size: n, real, imaginary, step }, message: "", refine: false };
}
