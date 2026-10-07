/**
 * Wave-optics OTF of a traced beam from optical path, on the launch lattice. Lengths are mm,
 * phases are not wrapped.
 *
 * This is the reference the tests and the chart report hold the sheared-ray estimator against,
 * not a product path: it reads optical path where the estimator reads ray landings, so the two
 * share only the ray trace. It needs the phase to turn by less than a quarter wave from one
 * lattice cell to the next (`waveLatticePhaseStep`), which fast or strongly aberrated beams
 * exceed at any practical grid.
 */
import type { Vec3 } from "../types.js";
import type { ComplexOtf, MtfSpot } from "./mtfMath.js";
import type { MtfBundle, MtfPupilRay } from "./mtfTracing.js";

/**
 * Phase of the incident wave at a ray's launch point, as a path length.
 *
 * @param ray - traced ray
 * @param objectPoint - finite source point; omitted for a plane wave from infinity
 * @returns path from the source point, or the launch point's projection on the wave normal
 */
export function launchPhaseMm(ray: MtfPupilRay["trace"], objectPoint?: Vec3): number {
  const { origin, direction } = ray.input;
  // Infinite conjugates have a plane incident wave; finite conjugates share one spherical source.
  return objectPoint
    ? Math.hypot(origin[0] - objectPoint[0], origin[1] - objectPoint[1], origin[2] - objectPoint[2])
    : origin[0] * direction[0] + origin[1] * direction[1] + origin[2] * direction[2];
}

/**
 * Optical path of a ray from the incident wave to the foot of the perpendicular dropped on it from
 * an image point: the phase its plane-wave component has at that point.
 *
 * This is the wavefront on a reference sphere at infinity, the form whose pupil coordinate is the
 * ray's own direction cosine. On a sphere of finite radius the coordinate is the position on the
 * sphere instead, and mixing the two misplaces an aberrated ray by its landing error over the
 * radius, which read an off-axis singlet 0.006 high.
 *
 * @param ray - trace with its optical path recorded
 * @param image - image point the wavefront is referred to
 * @param objectPoint - finite source point; omitted for a plane wave from infinity
 * @returns optical path in mm, or null when the trace carries no optical path
 */
export function rayOpticalPathToImageMm(ray: MtfPupilRay["trace"], image: Vec3, objectPoint?: Vec3): number | null {
  if (!Number.isFinite(ray.opticalPathLengthMm)) return null;
  const { terminalPoint: p, terminalDirection: d } = ray;
  const along = (image[0] - p[0]) * d[0] + (image[1] - p[1]) * d[1] + (image[2] - p[2]) * d[2];
  return launchPhaseMm(ray, objectPoint) + ray.opticalPathLengthMm! + ray.finalMedium * along;
}

/** Complex pupil of one traced bundle on its launch lattice. */
export interface MtfWaveLattice {
  columns: number;
  rows: number;
  /** √flux per cell in row-major order, 0 where no ray transmits. */
  amplitude: Float64Array;
  /** Optical path difference from the reference ray in mm; meaningful where amplitude is positive. */
  pathMm: Float64Array;
  /** Image-space direction cosines of each cell's ray along x and y; meaningful where amplitude is positive. */
  cosineX: Float64Array;
  cosineY: Float64Array;
}

/**
 * Sample a traced bundle's wavefront on its launch lattice.
 *
 * @param bundle - bundle traced with optical paths recorded
 * @param reference - image point the wavefront is measured from, shared by every wavelength of a field
 * @param imagePlaneZ - axial image-plane position in mm
 * @returns lattice pupil, or null when a ray carries no optical path
 */
export function mtfWaveLattice(bundle: MtfBundle, reference: MtfSpot, imagePlaneZ: number): MtfWaveLattice | null {
  const image: Vec3 = [reference.x, reference.y, imagePlaneZ];
  const { columns, rows } = bundle;
  const cells = columns * rows;
  const lattice: MtfWaveLattice = {
    columns,
    rows,
    amplitude: new Float64Array(cells),
    pathMm: new Float64Array(cells),
    cosineX: new Float64Array(cells),
    cosineY: new Float64Array(cells),
  };
  let datum: number | undefined;
  for (const ray of bundle.rays) {
    const path = rayOpticalPathToImageMm(ray.trace, image, bundle.objectPoint);
    if (path === null) return null;
    // Piston is arbitrary: any one ray serves as the datum.
    datum ??= path;
    const cell = ray.row * columns + ray.column;
    lattice.amplitude[cell] = Math.sqrt(ray.weight);
    lattice.pathMm[cell] = path - datum;
    lattice.cosineX[cell] = ray.trace.finalMedium * ray.trace.terminalDirection[0];
    lattice.cosineY[cell] = ray.trace.finalMedium * ray.trace.terminalDirection[1];
  }
  return lattice;
}

/**
 * Largest optical-path change between neighbouring transmitted cells, in waves. The lattice OTF
 * is trustworthy while this stays under a quarter wave.
 *
 * @param lattice - lattice pupil
 * @param wavelengthMm - wavelength in mm
 * @returns largest neighbour step in waves
 */
export function waveLatticePhaseStep(lattice: MtfWaveLattice, wavelengthMm: number): number {
  const { columns, rows, amplitude, pathMm } = lattice;
  let step = 0;
  for (let row = 0; row < rows; row++)
    for (let column = 0; column < columns; column++) {
      const cell = row * columns + column;
      if (!(amplitude[cell] > 0)) continue;
      if (column + 1 < columns && amplitude[cell + 1] > 0)
        step = Math.max(step, Math.abs(pathMm[cell + 1] - pathMm[cell]));
      if (row + 1 < rows && amplitude[cell + columns] > 0)
        step = Math.max(step, Math.abs(pathMm[cell + columns] - pathMm[cell]));
    }
  return step / wavelengthMm;
}

/** One lattice line along a shear axis, ordered by rising direction cosine, with an empty cell beyond each end. */
interface WaveLine {
  amplitude: Float64Array;
  pathMm: Float64Array;
  /** Direction cosine of every cell, filled in across cells without a ray so positions can be looked up. */
  cosine: Float64Array;
}

/**
 * Cut a lattice pupil into lines along one shear axis.
 *
 * @param lattice - lattice pupil
 * @param axis - image axis of the shear: x runs along lattice rows, y along lattice columns
 * @returns the lines that hold a ray
 */
function waveLines(lattice: MtfWaveLattice, axis: "x" | "y"): WaveLine[] {
  const { columns, rows } = lattice;
  const [lines, cells, lineStride, cellStride] =
    axis === "x" ? [rows, columns, columns, 1] : [columns, rows, 1, columns];
  const source = axis === "x" ? lattice.cosineX : lattice.cosineY;
  const litCells = Array.from({ length: lines }, (_, line) => {
    const lit: number[] = [];
    for (let cell = 0; cell < cells; cell++)
      if (lattice.amplitude[line * lineStride + cell * cellStride] > 0) lit.push(cell);
    return lit;
  });
  // Cosine per cell of the best-sampled line, signed, for a line whose own rays do not give one.
  let fallbackPitch = 0;
  let longest = 1;
  litCells.forEach((lit, line) => {
    const span = lit.length > 1 ? lit[lit.length - 1] - lit[0] : 0;
    if (span < longest) return;
    const first = source[line * lineStride + lit[0] * cellStride];
    const last = source[line * lineStride + lit[lit.length - 1] * cellStride];
    if (last === first) return;
    longest = span;
    fallbackPitch = (last - first) / span;
  });
  const result: WaveLine[] = [];
  litCells.forEach((lit, line) => {
    if (!lit.length) return;
    const at = (cell: number) => line * lineStride + cell * cellStride;
    const first = source[at(lit[0])];
    const ownPitch = lit.length > 1 ? (source[at(lit[lit.length - 1])] - first) / (lit[lit.length - 1] - lit[0]) : 0;
    const pitch = ownPitch !== 0 ? ownPitch : fallbackPitch;
    if (pitch === 0) return;
    const rising = pitch > 0;
    const amplitude = new Float64Array(cells + 2);
    const pathMm = new Float64Array(cells + 2);
    const cosine = new Float64Array(cells + 2);
    // Cosine of any cell: its own ray's, or a straight line through the nearest lit cells on either side.
    const cosineAt = (cell: number) => {
      const after = lit.findIndex((other) => other >= cell);
      if (after >= 0 && lit[after] === cell) return source[at(cell)];
      const a = after < 0 ? lit[lit.length - 1] : after === 0 ? lit[0] : lit[after - 1];
      const b = after <= 0 ? a : lit[after];
      const local = b !== a ? (source[at(b)] - source[at(a)]) / (b - a) : 0;
      return source[at(a)] + (local !== 0 ? local : pitch) * (cell - a);
    };
    for (let slot = 0; slot < cells + 2; slot++) {
      const cell = rising ? slot - 1 : cells - slot;
      cosine[slot] = cosineAt(cell);
      if (cell < 0 || cell >= cells) continue;
      amplitude[slot] = lattice.amplitude[at(cell)];
      pathMm[slot] = lattice.pathMm[at(cell)];
    }
    result.push({ amplitude, pathMm, cosine });
  });
  return result;
}

/**
 * Amplitude and optical path of a line at a direction cosine, interpolated between its two nearest cells and
 * weighted by amplitude, so that beside the beam's edge the path is the lit cell's.
 *
 * @param line - lattice line ordered by rising cosine
 * @param target - direction cosine
 * @returns amplitude and path, with amplitude 0 beyond the line
 */
function waveAt(line: WaveLine, target: number): { amplitude: number; pathMm: number } {
  const { amplitude, pathMm, cosine } = line;
  const end = cosine.length - 1;
  if (!(target > cosine[0]) || !(target < cosine[end])) return { amplitude: 0, pathMm: 0 };
  let low = 0,
    high = end;
  while (high - low > 1) {
    const middle = (low + high) >> 1;
    if (cosine[middle] <= target) low = middle;
    else high = middle;
  }
  const span = cosine[high] - cosine[low];
  const fraction = span > 0 ? (target - cosine[low]) / span : 0;
  const near = (1 - fraction) * amplitude[low];
  const far = fraction * amplitude[high];
  const weight = near + far;
  return { amplitude: weight, pathMm: weight > 0 ? (near * pathMm[low] + far * pathMm[high]) / weight : 0 };
}

/**
 * Hopkins' OTF of a lattice pupil: its autocorrelation at a shear of λν in direction cosine.
 *
 * Every lit cell is paired with the two points of its lattice line whose direction cosines lie
 * half a shear to either side, found by interpolation on the rays' own cosines, with amplitude
 * and optical path interpolated linearly. Each frequency is summed at its exact shear:
 * interpolating a precomputed autocorrelation between whole-cell lags under-reads by up to 0.008,
 * because its phase turns between them.
 *
 * @param lattice - lattice pupil
 * @param wavelengthMm - wavelength in mm
 * @param frequencies - image-space frequencies in lp/mm
 * @returns complex OTF per axis, with the phase convention of `geometricOtf`
 */
export function waveLatticeOtf(
  lattice: MtfWaveLattice,
  wavelengthMm: number,
  frequencies: readonly number[],
): { sagittal: ComplexOtf; tangential: ComplexOtf } {
  let energy = 0;
  for (const value of lattice.amplitude) energy += value * value;
  const cut = (lines: readonly WaveLine[]): ComplexOtf => {
    const real: number[] = [],
      imaginary: number[] = [];
    for (const frequency of frequencies) {
      const halfShear = (frequency * wavelengthMm) / 2;
      let re = 0,
        im = 0;
      for (const line of lines)
        for (let slot = 1; slot < line.cosine.length - 1; slot++) {
          // Every cell is a pair centre, lit or not: the two ends of a pair can straddle an obstruction.
          const plus = waveAt(line, line.cosine[slot] + halfShear);
          const minus = waveAt(line, line.cosine[slot] - halfShear);
          const pair = plus.amplitude * minus.amplitude;
          if (!(pair > 0)) continue;
          // A ray's landing offset is minus the gradient of its path over direction cosine, hence the sign.
          const phase = (2 * Math.PI * (plus.pathMm - minus.pathMm)) / wavelengthMm;
          re += pair * Math.cos(phase);
          im += pair * Math.sin(phase);
        }
      real.push(re / energy);
      imaginary.push(im / energy);
    }
    return { real, imaginary };
  };
  return { sagittal: cut(waveLines(lattice, "x")), tangential: cut(waveLines(lattice, "y")) };
}
