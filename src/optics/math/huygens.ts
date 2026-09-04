/** Scalar Huygens-Kirchhoff quadrature on a plane in image-space air. */
import type { HuygensWavelet, ScalarPsf } from "../../types/imageQuality.js";
import type { Vec3 } from "../types.js";

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
    size > 257 ||
    size % 2 === 0 ||
    !Number.isFinite(pixelPitchMm) ||
    pixelPitchMm <= 0 ||
    wavelets.length === 0
  )
    return empty;
  const idealPeak = huygensIntensity(wavelets, wavelengthNm, referencePoint, referencePoint, true);
  if (!Number.isFinite(idealPeak) || idealPeak <= 0) return empty;
  const intensity: number[] = [];
  const middle = (size - 1) / 2;
  let sum = 0;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const value =
        huygensIntensity(wavelets, wavelengthNm, referencePoint, [
          referencePoint[0] + (x - middle) * pixelPitchMm,
          referencePoint[1] + (y - middle) * pixelPitchMm,
          referencePoint[2],
        ]) / idealPeak;
      if (!Number.isFinite(value)) return empty;
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
