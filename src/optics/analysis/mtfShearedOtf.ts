/**
 * Diffraction MTF from sheared rays.
 *
 * Hopkins' incoherent OTF at frequency ν is the overlap of the exit pupil with itself sheared by λν,
 * each pupil point weighted by exp(i2π[W(p + s) − W(p − s)]) for half shear s. The wave-aberration
 * difference is the integral of the wavefront slope along the shear, and that slope is what a ray
 * trace measures directly: a ray's transverse landing error ε is −(λ / NA) ∂W/∂p. Boole's rule on
 * the five rays at p, p ± s/2 and p ± s gives the phase
 * −2πν (7ε₋ₛ + 32ε₋ₛ⸝₂ + 12ε₀ + 32ε₊ₛ⸝₂ + 7ε₊ₛ) / 90, exact for every wavefront up to sixth order
 * along the shear: all primary and secondary aberrations at any shear. Three rays (Simpson) stop at
 * fourth order and read a vignetted corner 0.013 low at a sixth of the cutoff.
 *
 * The pupil is the traced beam on its regular launch lattice, so vignetting shape and throughput
 * carry in, cell edges stay sharp and nothing can fold. Amplitude √flux and landing error are
 * interpolated linearly along the lattice line, which integrates the overlap of each row exactly.
 * The shear is fixed in direction cosine, not in lattice cells: each pair opens by the cells that
 * λν spans at its own centre, because a wide-angle corner maps the lattice onto the exit pupil
 * unevenly (one lag for the whole pupil read a 43° corner 0.005 high). No optical path, reference
 * sphere or validity gate is involved, and the estimate tends to the geometric OTF as ν → 0. What
 * limits it is sampling: the landing error must change slowly from one lattice cell to the next,
 * which grid refinement checks. The per-pair lag is a first-order correction: the five rays stay
 * evenly spaced in cells and the pair carries no Jacobian, and a finer grid does not remove what
 * that leaves. On catalog corners it is within 0.003 up to 55 % of the cutoff, and reaches 0.009
 * near the cutoff, where MTF is under 0.05, on a 55° f/8 corner whose pitch varies 20 %.
 *
 * A pair whose centre has no ray, because a gap in the beam separates its ends, has no landing
 * errors between them, so the mean of the two ends stands in. The overlap (the aberration-free
 * response) stays exact there, but the phase is right only for defocus: an annular pupil with half
 * a wave of spherical aberration reads 0.09 low. `assessMtfSupport` rejects obstructed systems,
 * which would need the optical-path route; a refractive lens meets this only where a detached
 * arc of rays transmits beside the main beam, and `straddling` reports how much of the overlap
 * that is.
 */
import type { ComplexOtf, MtfSpot } from "./mtfMath.js";
import type { MtfBundle } from "./mtfTracing.js";

export interface MtfShearedOtf {
  sagittal: ComplexOtf;
  tangential: ComplexOtf;
  /** Aberration-free response of the same pupil: its amplitude overlap at each shear, 0 to 1. */
  limit: { sagittal: number[]; tangential: number[] };
  /**
   * Share of the overlap, per frequency and on the worse cut, that comes from pairs straddling a gap in the beam,
   * whose phase is approximate.
   */
  straddling: number[];
}

/** Entries per turn of the trigonometric tables; linear interpolation is then accurate to 3e-7. */
const TURN = 4096;
/** Two entries past the turn: one to interpolate toward, one for a wrapped position that rounds up to the turn. */
const SINE = Float64Array.from({ length: TURN + 2 }, (_, i) => Math.sin((2 * Math.PI * i) / TURN));
const COSINE = Float64Array.from({ length: TURN + 2 }, (_, i) => Math.cos((2 * Math.PI * i) / TURN));

/** One shear axis of the lattice: lines run along the shear, each padded by an empty cell at both ends. */
interface ShearLattice {
  lines: number;
  /** Cells per line including the two padding cells. */
  stride: number;
  amplitude: Float64Array;
  /** Landing error along the shear axis in mm; meaningful where amplitude is positive. */
  error: Float64Array;
  /** Lattice cells that one unit of image-space direction cosine spans at each cell, along the shear. */
  cellsPerCosine: Float64Array;
  /** First and last transmitted cell of each line, in padded indices; first > last when the line is empty. */
  first: Int32Array;
  last: Int32Array;
}

/**
 * Sheared-pair OTF of one wavelength's traced bundle.
 *
 * @param bundle - traced pupil samples on the launch lattice
 * @param reference - image point the OTF phase is measured from, shared by every wavelength of a field
 * @param wavelengthMm - wavelength in mm
 * @param frequencies - image-space frequencies in lp/mm
 * @returns complex OTF and aberration-free response per axis
 */
export function shearedOtf(
  bundle: Pick<MtfBundle, "rays"> & { columns?: number; mirrored?: boolean },
  reference: MtfSpot,
  wavelengthMm: number,
  frequencies: readonly number[],
): MtfShearedOtf {
  const rays = bundle.rays;
  let columns = bundle.columns ?? 1,
    rows = 1,
    energy = 0;
  for (const ray of rays) {
    columns = Math.max(columns, ray.column + 1);
    rows = Math.max(rows, ray.row + 1);
    energy += ray.weight;
  }
  // Image-space direction cosines, scaled by the image-space index, span the pupil in NA units.
  const slopeX = latticeCosineSlope(rays, "column", 0);
  const slopeY = latticeCosineSlope(rays, "row", 1);
  // A beam one cell thin on an axis has no slope of its own there. Launch cells are square, so the other axis's
  // scale stands in: the pair then closes within one cell, as a slit that thin does, instead of never shearing.
  const stepX = slopeX > 0 ? slopeX : slopeY;
  const stepY = slopeY > 0 ? slopeY : slopeX;
  // A meridional field of an x-symmetric lens is traced as one half pupil and its mirror image about the grid's centre.
  const half = bundle.mirrored && bundle.columns === columns && columns % 2 === 0 ? columns / 2 : 0;
  const acrossRows = shearLattice(rays, "x", rows, columns, stepX);
  const acrossColumns = shearLattice(rays, "y", columns, rows, stepY);
  // Mirrored cells contribute complex conjugates along x and equal terms along y.
  const sagittal = shearCut(acrossRows, energy, wavelengthMm, frequencies, reference.x, 0, half, half > 0);
  const tangential = shearCut(acrossColumns, energy, wavelengthMm, frequencies, reference.y, half, 0, false);
  return {
    sagittal: sagittal.otf,
    tangential: tangential.otf,
    limit: { sagittal: sagittal.limit, tangential: tangential.limit },
    straddling: sagittal.straddling.map((share, i) => Math.max(share, tangential.straddling[i])),
  };
}

/** Smallest local cosine-per-cell, as a share of the fitted one, that still sets a pair's lag. */
const MIN_PITCH_SHARE = 1 / 8;

/**
 * Lay the bundle out with lines along one shear axis.
 *
 * @param rays - transmitted pupil samples
 * @param axis - image axis of the shear: x runs along lattice rows, y along lattice columns
 * @param lines - lattice lines across the shear
 * @param cells - lattice cells along the shear
 * @param slope - fitted direction cosine per lattice cell along the shear
 * @returns padded amplitude, landing-error and local-scale lattice
 */
function shearLattice(
  rays: MtfBundle["rays"],
  axis: "x" | "y",
  lines: number,
  cells: number,
  slope: number,
): ShearLattice {
  const stride = cells + 2;
  const amplitude = new Float64Array(lines * stride);
  const error = new Float64Array(lines * stride);
  const cosine = new Float64Array(lines * stride);
  const first = new Int32Array(lines).fill(stride);
  const last = new Int32Array(lines).fill(-1);
  const component = axis === "x" ? 0 : 1;
  for (const ray of rays) {
    const line = axis === "x" ? ray.row : ray.column;
    const cell = (axis === "x" ? ray.column : ray.row) + 1;
    amplitude[line * stride + cell] = Math.sqrt(ray.weight);
    error[line * stride + cell] = ray[axis];
    cosine[line * stride + cell] = ray.trace.finalMedium * ray.trace.terminalDirection[component];
    first[line] = Math.min(first[line], cell);
    last[line] = Math.max(last[line], cell);
  }
  // Local scale from the neighbours along the line; the fitted slope where a cell stands alone or has no ray.
  const fitted = slope > 0 ? 1 / slope : 0;
  const cellsPerCosine = new Float64Array(lines * stride).fill(fitted);
  for (let line = 0; line < lines; line++)
    for (let cell = first[line]; cell <= last[line]; cell++) {
      const at = line * stride + cell;
      if (!(amplitude[at] > 0)) continue;
      const before = amplitude[at - 1] > 0 ? at - 1 : at;
      const after = amplitude[at + 1] > 0 ? at + 1 : at;
      if (after === before) continue;
      const pitch = Math.abs(cosine[after] - cosine[before]) / (after - before);
      if (pitch > slope * MIN_PITCH_SHARE) cellsPerCosine[at] = 1 / pitch;
    }
  return { lines, stride, amplitude, error, cellsPerCosine, first, last };
}

/**
 * Sum sheared pairs along every line of one lattice axis.
 *
 * @param lattice - lattice with lines along the shear
 * @param energy - transmitted flux, the zero-shear overlap
 * @param wavelengthMm - wavelength in mm
 * @param frequencies - image-space frequencies in lp/mm
 * @param origin - reference coordinate on the shear axis in mm
 * @param firstLine - first line summed; the remaining lines are counted twice when it is not 0
 * @param firstCell - first centre cell summed; the remaining cells are counted twice when it is not 0
 * @param conjugate - true when the skipped cells contribute the complex conjugate of the summed ones
 * @returns OTF, aberration-free overlap and the share of it from gap-straddling pairs, per frequency
 */
function shearCut(
  lattice: ShearLattice,
  energy: number,
  wavelengthMm: number,
  frequencies: readonly number[],
  origin: number,
  firstLine: number,
  firstCell: number,
  conjugate: boolean,
): { otf: ComplexOtf; limit: number[]; straddling: number[] } {
  const { lines, stride, amplitude, error, cellsPerCosine, first, last } = lattice;
  const real: number[] = [],
    imaginary: number[] = [],
    limit: number[] = [],
    straddling: number[] = [];
  const fold = firstLine > 0 || firstCell > 0 ? 2 : 1;
  for (const frequency of frequencies) {
    // The pupil shears by λν in direction cosine; each side of a pair moves half of it.
    const halfShear = (frequency * wavelengthMm) / 2;
    // Phase of the mean landing error, in table steps.
    const scale = -frequency * TURN;
    let re = 0,
      im = 0,
      overlap = 0,
      gapped = 0;
    for (let line = firstLine; line < lines; line++) {
      const base = line * stride;
      const lineFirst = first[line],
        lineLast = last[line];
      for (let cell = Math.max(lineFirst, firstCell + 1); cell <= lineLast; cell++) {
        const centre = base + cell;
        // Cells the half shear spans here; both sheared points must lie inside the line.
        const halfLag = halfShear * cellsPerCosine[centre];
        const whole = Math.floor(halfLag);
        if (cell + whole > lineLast || cell - whole < lineFirst) continue;
        const fraction = halfLag - whole;
        const near = 1 - fraction;
        // The quarter points of Boole's rule sit halfway out to each sheared point.
        const quarterWhole = Math.floor(halfLag / 2);
        const quarterFraction = halfLag / 2 - quarterWhole;
        const quarterNear = 1 - quarterFraction;
        const plus = centre + whole;
        const minus = centre - whole;
        const plusNear = near * amplitude[plus],
          plusFar = fraction * amplitude[plus + 1];
        const minusNear = near * amplitude[minus],
          minusFar = fraction * amplitude[minus - 1];
        const amplitudePlus = plusNear + plusFar;
        const amplitudeMinus = minusNear + minusFar;
        const pair = amplitudePlus * amplitudeMinus;
        if (!(pair > 0)) continue;
        // Amplitude-weighted interpolation: beside the beam's edge it reads the transmitted neighbour.
        const errorPlus = (plusNear * error[plus] + plusFar * error[plus + 1]) / amplitudePlus;
        const errorMinus = (minusNear * error[minus] + minusFar * error[minus - 1]) / amplitudeMinus;
        // A centre without a ray lies in a gap of the beam; the mean of the two ends stands in for it.
        const lit = amplitude[centre] > 0;
        const errorCentre = lit ? error[centre] : (errorPlus + errorMinus) / 2;
        if (!lit) gapped += pair;
        const quarterPlus = centre + quarterWhole;
        const quarterMinus = centre - quarterWhole;
        const quarterPlusNear = quarterNear * amplitude[quarterPlus],
          quarterPlusFar = quarterFraction * amplitude[quarterPlus + 1];
        const quarterMinusNear = quarterNear * amplitude[quarterMinus],
          quarterMinusFar = quarterFraction * amplitude[quarterMinus - 1];
        const weightPlus = quarterPlusNear + quarterPlusFar;
        const weightMinus = quarterMinusNear + quarterMinusFar;
        // Simpson's three rays where an obstruction hides a quarter point.
        const meanError =
          weightPlus > 0 && weightMinus > 0
            ? (7 * (errorMinus + errorPlus) +
                32 *
                  ((quarterPlusNear * error[quarterPlus] + quarterPlusFar * error[quarterPlus + 1]) / weightPlus +
                    (quarterMinusNear * error[quarterMinus] + quarterMinusFar * error[quarterMinus - 1]) /
                      weightMinus) +
                12 * errorCentre) /
              90
            : (errorMinus + 4 * errorCentre + errorPlus) / 6;
        let position = scale * meanError;
        position -= Math.floor(position / TURN) * TURN;
        const index = position | 0;
        const within = position - index;
        re += pair * (COSINE[index] + within * (COSINE[index + 1] - COSINE[index]));
        if (!conjugate) im += pair * (SINE[index] + within * (SINE[index + 1] - SINE[index]));
        overlap += pair;
      }
    }
    // Errors were summed about the lattice origin; one rotation refers them to the common image point.
    const phase = 2 * Math.PI * frequency * origin;
    const c = Math.cos(phase),
      s = Math.sin(phase);
    real.push((fold * (re * c - im * s)) / energy);
    imaginary.push((fold * (re * s + im * c)) / energy);
    limit.push(Math.min(1, (fold * overlap) / energy));
    straddling.push(overlap > 0 ? gapped / overlap : 0);
  }
  return { otf: { real, imaginary }, limit, straddling };
}

/**
 * Flux-weighted least-squares slope of an image-space direction cosine against a lattice index.
 *
 * @param rays - transmitted pupil samples
 * @param index - lattice index along the axis
 * @param component - direction-cosine component, 0 for x and 1 for y
 * @returns cosine per lattice cell, 0 when the index does not vary
 */
export function latticeCosineSlope(rays: MtfBundle["rays"], index: "column" | "row", component: 0 | 1): number {
  let weight = 0,
    meanIndex = 0,
    meanCosine = 0;
  for (const ray of rays) {
    weight += ray.weight;
    meanIndex += ray.weight * ray[index];
    meanCosine += ray.weight * ray.trace.finalMedium * ray.trace.terminalDirection[component];
  }
  if (!(weight > 0)) return 0;
  meanIndex /= weight;
  meanCosine /= weight;
  let covariance = 0,
    variance = 0;
  for (const ray of rays) {
    const offset = ray[index] - meanIndex;
    covariance += ray.weight * offset * (ray.trace.finalMedium * ray.trace.terminalDirection[component] - meanCosine);
    variance += ray.weight * offset * offset;
  }
  return variance > 0 ? Math.abs(covariance / variance) : 0;
}
