/** Scalar Huygens-Kirchhoff quadrature on a plane in image-space air. */
import type { HuygensWavelet, ScalarPsf } from "../../types/imageQuality.js";
import type { Vec3 } from "../types.js";
import { IMAGE_QUALITY_LIMITS } from "../constants.js";

/** Coherent amplitude sum; the resulting squared amplitude is intensity. */
export function huygensIntensity(
  wavelets: readonly HuygensWavelet[],
  wavelengthNm: number,
  referencePoint: Vec3,
  imagePoint: Vec3,
  zeroOpd = false,
): number {
  const wavelengthMm = wavelengthNm * 1e-6;
  if (!Number.isFinite(wavelengthMm) || wavelengthMm <= 0) return NaN;
  let real = 0;
  let imaginary = 0;
  for (const wavelet of wavelets) {
    const p = wavelet.point;
    const dx = imagePoint[0] - p[0],
      dy = imagePoint[1] - p[1],
      dz = imagePoint[2] - p[2];
    const distance = Math.hypot(dx, dy, dz);
    const referenceDistance = Math.hypot(referencePoint[0] - p[0], referencePoint[1] - p[1], referencePoint[2] - p[2]);
    if (dz <= 0 || distance <= 0) return NaN;
    const phase = (2 * Math.PI * ((zeroOpd ? 0 : wavelet.opdMm) + distance - referenceDistance)) / wavelengthMm;
    const obliquity = (wavelet.directionCosine + dz / distance) / 2;
    const amplitude = (wavelet.amplitudeAreaMm2 * obliquity) / (wavelengthMm * distance);
    real += amplitude * Math.cos(phase);
    imaginary += amplitude * Math.sin(phase);
  }
  return real * real + imaginary * imaginary;
}

/** Keep a fixed diffraction-limited peak normalization; never renormalize a cropped window to unit energy. */
export function computeHuygensPsf(
  wavelets: readonly HuygensWavelet[],
  wavelengthNm: number,
  referencePoint: Vec3,
  size = 65,
  pixelPitchMm = 0.001,
  /** Caller guarantees reflection and quarter-turn symmetry about the reference axis. */
  squareSymmetry = false,
): ScalarPsf {
  const empty: ScalarPsf = {
    status: "unavailable",
    wavelengthNm,
    size,
    pixelPitchMm,
    intensity: [],
    referencePeakIntensity: null,
    windowIntegralMm2: 0,
    centerStrehl: null,
  };
  if (
    !Number.isInteger(size) ||
    size < 3 ||
    size > IMAGE_QUALITY_LIMITS.imageSize * 4 - 3 ||
    size % 2 === 0 ||
    !Number.isFinite(pixelPitchMm) ||
    pixelPitchMm <= 0 ||
    wavelets.length === 0
  )
    return empty;
  const idealPeak = huygensIntensity(wavelets, wavelengthNm, referencePoint, referencePoint, true);
  if (!Number.isFinite(idealPeak) || idealPeak <= 0) return empty;
  // Reference distance and axial separation do not change across this sensor plane.
  // Keep the public point evaluator as an independent scalar reference path.
  const wavelengthMm = wavelengthNm * 1e-6;
  const prepared = wavelets.map((w) => ({
    x: w.point[0],
    y: w.point[1],
    dz: referencePoint[2] - w.point[2],
    referenceDistance: Math.hypot(
      referencePoint[0] - w.point[0],
      referencePoint[1] - w.point[1],
      referencePoint[2] - w.point[2],
    ),
    opd: w.opdMm,
    area: w.amplitudeAreaMm2,
    cosine: w.directionCosine,
  }));
  const intensity: number[] = [];
  const middle = (size - 1) / 2;
  // Centered equal-angle rings with counts divisible by four have exact D4
  // symmetry, including staggered rings. Reuse equal sensor points, without
  // imposing that symmetry on arbitrary public wavelet inputs.
  const symmetricValues = squareSymmetry ? new Map<number, number>() : null;
  let sum = 0;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const ax = Math.abs(x - middle),
        ay = Math.abs(y - middle);
      const symmetryKey = Math.max(ax, ay) * size + Math.min(ax, ay);
      const cached = symmetricValues?.get(symmetryKey);
      if (cached !== undefined) {
        intensity.push(cached);
        sum += cached;
        continue;
      }
      const px = referencePoint[0] + (x - middle) * pixelPitchMm;
      const py = referencePoint[1] + (y - middle) * pixelPitchMm;
      let real = 0,
        imaginary = 0;
      for (const w of prepared) {
        const dx = px - w.x,
          dy = py - w.y;
        const square = dx * dx + dy * dy + w.dz * w.dz;
        const distance = Number.isFinite(square) && square > 0 ? Math.sqrt(square) : Math.hypot(dx, dy, w.dz);
        if (w.dz <= 0 || distance <= 0) return empty;
        const phase = (2 * Math.PI * (w.opd + distance - w.referenceDistance)) / wavelengthMm;
        const amplitude = (w.area * (w.cosine + w.dz / distance)) / 2 / (wavelengthMm * distance);
        real += amplitude * Math.cos(phase);
        imaginary += amplitude * Math.sin(phase);
      }
      const value = (real * real + imaginary * imaginary) / idealPeak;
      if (!Number.isFinite(value)) return empty;
      symmetricValues?.set(symmetryKey, value);
      intensity.push(value);
      sum += value;
    }
  }
  return {
    status: "ok",
    wavelengthNm,
    size,
    pixelPitchMm,
    intensity,
    referencePeakIntensity: idealPeak,
    windowIntegralMm2: sum * pixelPitchMm ** 2,
    centerStrehl: intensity[middle * size + middle],
  };
}
