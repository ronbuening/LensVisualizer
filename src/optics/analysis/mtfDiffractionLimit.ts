/**
 * Diffraction limit of a traced beam, for the diffraction-corrected geometric MTF.
 *
 * Geometric MTF ignores diffraction and overstates contrast for well-corrected lenses. The
 * product of geometric MTF and the aberration-free (zero-phase) OTF of the actual exit pupil is
 * the standard engineering correction (e.g. OpticStudio's "multiply by diffraction limit"). The
 * pupil is the transmitted beam weighted by traced flux, so vignetting shape and throughput
 * carry into the limit. It is autocorrelated on the regular launch lattice, whose cell edges
 * stay sharp and cannot fold, and lags are mapped into image-space direction cosines with the
 * beam's fitted pupil scale. None of the scalar-FFT validity gates apply.
 */
import { pupilAutocorrelation, sampleAutocorrelation } from "./mtfDiffraction.js";
import type { MtfBundle } from "./mtfTracing.js";

/** Real, non-negative diffraction-limited OTF along the sagittal (x) and tangential (y) axes. */
export interface MtfDiffractionLimit {
  sample(wavelengthMm: number, frequencies: readonly number[]): { sagittal: number[]; tangential: number[] };
  /** True when the analytic elliptical-pupil fallback was used. */
  analytic: boolean;
}

/** Largest lattice side autocorrelated directly; finer launch grids are binned to it. */
const MAX_LATTICE = 128;

/**
 * Build the diffraction limit of one traced bundle.
 *
 * @param bundle - traced pupil samples on the launch lattice (any wavelength; the pupil is nearly achromatic)
 * @returns sampler for any wavelength, or null when no rays transmit
 */
export function diffractionLimitFromBundle(bundle: MtfBundle): MtfDiffractionLimit | null {
  const rays = bundle.rays;
  if (!rays.length) return null;
  // Image-space direction cosines, scaled by the image-space index, span the pupil in NA units.
  const qx = rays.map((ray) => ray.trace.finalMedium * ray.trace.terminalDirection[0]);
  const qy = rays.map((ray) => ray.trace.finalMedium * ray.trace.terminalDirection[1]);
  const stepX = fittedSlope(
    rays.map((ray) => ray.column),
    qx,
    rays,
  );
  const stepY = fittedSlope(
    rays.map((ray) => ray.row),
    qy,
    rays,
  );
  if (!(stepX > 0) || !(stepY > 0)) return ellipticalLimit(halfRange(qx), halfRange(qy));
  let columns = 1,
    rowCount = 1;
  for (const ray of rays) {
    columns = Math.max(columns, ray.column + 1);
    rowCount = Math.max(rowCount, ray.row + 1);
  }
  const bin = Math.max(1, Math.ceil(Math.max(columns, rowCount) / MAX_LATTICE));
  let size = 2;
  while (size < Math.ceil(Math.max(columns, rowCount) / bin)) size *= 2;
  const flux = new Float64Array(size * size);
  for (const ray of rays) flux[Math.floor(ray.row / bin) * size + Math.floor(ray.column / bin)] += ray.weight;
  const autocorrelation = pupilAutocorrelation({
    size,
    real: flux.map(Math.sqrt),
    imaginary: new Float64Array(size * size),
    step: 1,
  });
  const clamp = (values: readonly number[]) => values.map((v) => Math.min(1, Math.max(0, v)));
  return {
    analytic: false,
    sample(wavelengthMm, frequencies) {
      // A lag of λν in direction cosine is λν / (q per lattice cell) cells on each axis.
      const sagittal = sampleAutocorrelation({ ...autocorrelation, step: stepX * bin }, wavelengthMm, frequencies);
      const tangential = sampleAutocorrelation({ ...autocorrelation, step: stepY * bin }, wavelengthMm, frequencies);
      return { sagittal: clamp(sagittal.sagittal.real), tangential: clamp(tangential.tangential.real) };
    },
  };
}

/** Flux-weighted least-squares slope of q against a lattice index; 0 when the index does not vary. */
function fittedSlope(index: readonly number[], q: readonly number[], rays: MtfBundle["rays"]): number {
  let weight = 0,
    meanIndex = 0,
    meanQ = 0;
  rays.forEach((ray, i) => {
    weight += ray.weight;
    meanIndex += ray.weight * index[i];
    meanQ += ray.weight * q[i];
  });
  if (!(weight > 0)) return 0;
  meanIndex /= weight;
  meanQ /= weight;
  let covariance = 0,
    variance = 0;
  rays.forEach((ray, i) => {
    covariance += ray.weight * (index[i] - meanIndex) * (q[i] - meanQ);
    variance += ray.weight * (index[i] - meanIndex) ** 2;
  });
  return variance > 0 ? Math.abs(covariance / variance) : 0;
}

function halfRange(values: readonly number[]): number {
  let min = Infinity,
    max = -Infinity;
  for (const value of values) {
    min = Math.min(min, value);
    max = Math.max(max, value);
  }
  return max > min ? (max - min) / 2 : 0;
}

/**
 * Circular-pupil OTF scaled per axis: exact for an elliptical pupil with these semi-axes.
 *
 * @param semiX - pupil semi-extent along image x in direction cosines
 * @param semiY - pupil semi-extent along image y in direction cosines
 * @returns analytic diffraction-limit sampler
 */
export function ellipticalLimit(semiX: number, semiY: number): MtfDiffractionLimit {
  const circle = (normalized: number) => {
    if (!(normalized < 1)) return 0;
    const x = Math.max(0, normalized);
    return (2 / Math.PI) * (Math.acos(x) - x * Math.sqrt(1 - x * x));
  };
  return {
    analytic: true,
    sample(wavelengthMm, frequencies) {
      const axis = (semi: number) =>
        frequencies.map((f) => (semi > 0 ? circle((f * wavelengthMm) / (2 * semi)) : f === 0 ? 1 : 0));
      return { sagittal: axis(semiX), tangential: axis(semiY) };
    },
  };
}
