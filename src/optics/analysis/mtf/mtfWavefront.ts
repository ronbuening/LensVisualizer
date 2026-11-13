/**
 * Wave-optics OTF of a traced beam from optical path, on the bundle's lattice. Lengths are mm,
 * phases are not wrapped.
 *
 * This is the reference the tests and the chart report hold the sheared-ray estimator against,
 * not a product path: it reads optical path where the estimator reads ray landings, so the two
 * share only the ray trace. It needs the phase to turn by less than a quarter wave from one
 * lattice cell to the next (`waveLatticePhaseStep`) and an invertible direction map. Fast or
 * strongly aberrated beams exceed the phase limit at any practical grid.
 */
import type { Vec3 } from "../../types.js";
import type { ComplexOtf, MtfSpot } from "./mtfMath.js";
import type { MtfBundle, MtfPupilRay } from "./mtfTracing.js";
import { mtfImageAxisCosine } from "./mtfShearedOtf.js";

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

/** Complex pupil of one traced bundle on its lattice. */
export interface MtfWaveLattice {
  columns: number;
  rows: number;
  /** √flux per cell in row-major order, 0 where no ray transmits. */
  amplitude: Float64Array;
  /** Optical path difference from the reference ray in mm; meaningful where amplitude is positive. */
  pathMm: Float64Array;
  /** Index-scaled cosines along the reference's image-coordinate tangents; meaningful where amplitude is positive. */
  cosineX: Float64Array;
  cosineY: Float64Array;
}

/**
 * Sample a traced bundle's wavefront on its lattice.
 *
 * @param bundle - bundle traced with optical paths recorded
 * @param reference - image point the wavefront is measured from, shared by every wavelength of a field
 * @param imagePlaneZ - axial image-plane position in mm
 * @returns lattice pupil, or null when a ray carries no optical path
 */
export function mtfWaveLattice(bundle: MtfBundle, reference: MtfSpot, imagePlaneZ: number): MtfWaveLattice | null {
  const shape = bundle.imageSurface ?? null;
  const tangents = shape === null ? null : shape.imageTangentsAt(reference.x, reference.y);
  /* A curved reference is given in image coordinates; the wavefront is measured from the point on the surface. */
  const lateral = shape === null ? null : shape.fromImageCoordinates(reference.x, reference.y);
  const image: Vec3 =
    lateral === null
      ? [reference.x, reference.y, imagePlaneZ]
      : [lateral[0], lateral[1], imagePlaneZ + shape!.sagAt(lateral[0], lateral[1])];
  if (shape !== null && !image.every(Number.isFinite)) return null;
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
    lattice.cosineX[cell] = mtfImageAxisCosine(ray, 0, tangents);
    lattice.cosineY[cell] = mtfImageAxisCosine(ray, 1, tangents);
  }
  return lattice;
}

/**
 * Largest optical-path change between neighbouring transmitted cells, in waves. The lattice OTF
 * is trustworthy below a quarter wave only when the direction map is invertible; a folded or
 * degenerate map returns infinity regardless of its phase sampling.
 *
 * @param lattice - lattice pupil
 * @param wavelengthMm - wavelength in mm
 * @returns largest neighbour step in waves, or infinity for a noninvertible direction map
 */
export function waveLatticePhaseStep(lattice: MtfWaveLattice, wavelengthMm: number): number {
  if (waveMesh(lattice) === null) return Infinity;
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

/** Direction-space mesh, padded by one dark cell so interpolation reaches the pupil rim. */
interface WaveMesh extends MtfWaveLattice {
  /** Absolute direction-area Jacobian per unit lattice-index area. */
  jacobian: Float64Array;
}

/** Extend both cosines through dark cells; they carry geometry, never flux or phase. */
function waveMesh(lattice: MtfWaveLattice): WaveMesh | null {
  const columns = lattice.columns + 2;
  const rows = lattice.rows + 2;
  if (lattice.columns < 2 || lattice.rows < 2) return null;
  const cells = columns * rows;
  const mesh: WaveMesh = {
    columns,
    rows,
    amplitude: new Float64Array(cells),
    pathMm: new Float64Array(cells),
    cosineX: new Float64Array(cells),
    cosineY: new Float64Array(cells),
    jacobian: new Float64Array(cells),
  };
  const known = new Uint8Array(cells);
  for (let row = 0; row < lattice.rows; row++)
    for (let column = 0; column < lattice.columns; column++) {
      const source = row * lattice.columns + column;
      if (!(lattice.amplitude[source] > 0)) continue;
      const cell = (row + 1) * columns + column + 1;
      known[cell] = 1;
      mesh.amplitude[cell] = lattice.amplitude[source];
      mesh.pathMm[cell] = lattice.pathMm[source];
      mesh.cosineX[cell] = lattice.cosineX[source];
      mesh.cosineY[cell] = lattice.cosineY[source];
    }
  // Local linear extrapolation uses the nearest measured slope at a rim, not a whole-line average.
  const extend = (start: number, stride: number, length: number) => {
    const lit: number[] = [];
    for (let slot = 0; slot < length; slot++) if (known[start + slot * stride]) lit.push(slot);
    if (lit.length < 2) return false;
    let right = 1;
    for (let slot = 0; slot < length; slot++) {
      const cell = start + slot * stride;
      if (known[cell]) continue;
      while (right < lit.length - 1 && lit[right] < slot) right++;
      const low = lit[right - 1];
      const high = lit[right];
      const fraction = (slot - low) / (high - low);
      for (const coordinate of [mesh.cosineX, mesh.cosineY])
        coordinate[cell] =
          coordinate[start + low * stride] * (1 - fraction) + coordinate[start + high * stride] * fraction;
    }
    for (let slot = 0; slot < length; slot++) known[start + slot * stride] = 1;
    return true;
  };
  for (let column = 1; column < columns - 1; column++) extend(column, columns, rows);
  for (let row = 0; row < rows; row++) if (!extend(row * columns, 1, columns)) return null;

  const { cosineX: x, cosineY: y } = mesh;
  const cross = (a: number, b: number, c: number) => (x[b] - x[a]) * (y[c] - y[a]) - (y[b] - y[a]) * (x[c] - x[a]);
  let orientation = 0;
  for (let row = 0; row < rows - 1; row++)
    for (let column = 0; column < columns - 1; column++) {
      const a = row * columns + column;
      for (const [b, c] of [
        [a + 1, a + columns + 1],
        [a + columns + 1, a + columns],
      ]) {
        const det = cross(a, b, c);
        const scale = Math.hypot(x[b] - x[a], y[b] - y[a]) * Math.hypot(x[c] - x[a], y[c] - y[a]);
        if (!Number.isFinite(det) || !(Math.abs(det) > 1e-12 * scale)) return null;
        orientation ||= Math.sign(det);
        if (orientation * det <= 0) return null;
      }
    }
  // Consistent triangle orientation plus a simple boundary makes the piecewise-affine map one-to-one.
  const boundary: number[] = [];
  for (let column = 0; column < columns; column++) boundary.push(column);
  for (let row = 1; row < rows; row++) boundary.push(row * columns + columns - 1);
  for (let column = columns - 2; column >= 0; column--) boundary.push((rows - 1) * columns + column);
  for (let row = rows - 2; row > 0; row--) boundary.push(row * columns);
  for (let i = 0; i < boundary.length; i++) {
    const a = boundary[i];
    const b = boundary[(i + 1) % boundary.length];
    for (let j = i + 2; j < boundary.length; j++) {
      if (i === 0 && j === boundary.length - 1) continue;
      const c = boundary[j];
      const d = boundary[(j + 1) % boundary.length];
      if (
        Math.max(x[a], x[b]) < Math.min(x[c], x[d]) ||
        Math.max(x[c], x[d]) < Math.min(x[a], x[b]) ||
        Math.max(y[a], y[b]) < Math.min(y[c], y[d]) ||
        Math.max(y[c], y[d]) < Math.min(y[a], y[b])
      )
        continue;
      if (cross(a, b, c) * cross(a, b, d) <= 0 && cross(c, d, a) * cross(c, d, b) <= 0) return null;
    }
  }
  for (let row = 0; row < rows; row++)
    for (let column = 0; column < columns; column++) {
      const cell = row * columns + column;
      const left = row * columns + Math.max(column - 1, 0);
      const right = row * columns + Math.min(column + 1, columns - 1);
      const bottom = Math.max(row - 1, 0) * columns + column;
      const top = Math.min(row + 1, rows - 1) * columns + column;
      const det =
        ((x[right] - x[left]) * (y[top] - y[bottom]) - (y[right] - y[left]) * (x[top] - x[bottom])) /
        ((right - left) * ((top - bottom) / columns));
      if (!(orientation * det > 0)) return null;
      mesh.jacobian[cell] = Math.abs(det);
      // A cell carries flux in stop coordinates. Hopkins needs field amplitude per direction-space area.
      mesh.amplitude[cell] /= Math.sqrt(mesh.jacobian[cell]);
    }
  return mesh;
}

/** A mapped stop triangle, with its affine inverse for direction-coordinate lookups. */
interface WaveTriangle {
  a: number;
  b: number;
  c: number;
  ux: number;
  uy: number;
  vx: number;
  vy: number;
  inverseDet: number;
}

/** Index the illuminated mesh triangles in direction-space bins; bins only accelerate exact 2-D lookups. */
function waveLookup(mesh: WaveMesh): (x: number, y: number) => { amplitude: number; pathMm: number } {
  const { columns, rows, cosineX: x, cosineY: y, amplitude, pathMm } = mesh;
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (let cell = 0; cell < x.length; cell++) {
    minX = Math.min(minX, x[cell]);
    maxX = Math.max(maxX, x[cell]);
    minY = Math.min(minY, y[cell]);
    maxY = Math.max(maxY, y[cell]);
  }
  const binX = (value: number) =>
    Math.max(0, Math.min(columns - 1, Math.floor(((value - minX) * columns) / (maxX - minX))));
  const binY = (value: number) => Math.max(0, Math.min(rows - 1, Math.floor(((value - minY) * rows) / (maxY - minY))));
  const bins: WaveTriangle[][] = Array.from({ length: columns * rows }, () => []);
  for (let row = 0; row < rows - 1; row++)
    for (let column = 0; column < columns - 1; column++) {
      const a = row * columns + column;
      for (const [b, c] of [
        [a + 1, a + columns + 1],
        [a + columns + 1, a + columns],
      ]) {
        if (!(amplitude[a] > 0 || amplitude[b] > 0 || amplitude[c] > 0)) continue;
        const ux = x[b] - x[a],
          uy = y[b] - y[a];
        const vx = x[c] - x[a],
          vy = y[c] - y[a];
        const triangle = { a, b, c, ux, uy, vx, vy, inverseDet: 1 / (ux * vy - uy * vx) };
        const lowX = binX(Math.min(x[a], x[b], x[c])),
          highX = binX(Math.max(x[a], x[b], x[c]));
        const lowY = binY(Math.min(y[a], y[b], y[c])),
          highY = binY(Math.max(y[a], y[b], y[c]));
        for (let by = lowY; by <= highY; by++)
          for (let bx = lowX; bx <= highX; bx++) bins[by * columns + bx].push(triangle);
      }
    }
  return (targetX, targetY) => {
    if (targetX >= minX && targetX <= maxX && targetY >= minY && targetY <= maxY)
      for (const { a, b, c, ux, uy, vx, vy, inverseDet } of bins[binY(targetY) * columns + binX(targetX)]) {
        const dx = targetX - x[a],
          dy = targetY - y[a];
        const u = (dx * vy - dy * vx) * inverseDet;
        const v = (ux * dy - uy * dx) * inverseDet;
        const w = 1 - u - v;
        // Roundoff at shared edges must not open cracks in the mapped pupil.
        if (Math.min(u, v, w) < -1e-9) continue;
        const wa = Math.max(0, w) * amplitude[a];
        const wb = Math.max(0, u) * amplitude[b];
        const wc = Math.max(0, v) * amplitude[c];
        const value = wa + wb + wc;
        // Amplitude weighting leaves a dark cell's undefined phase out of rim interpolation.
        return { amplitude: value, pathMm: value > 0 ? (wa * pathMm[a] + wb * pathMm[b] + wc * pathMm[c]) / value : 0 };
      }
    return { amplitude: 0, pathMm: 0 };
  };
}

/**
 * Hopkins' OTF on a mapped lattice: autocorrelation at the exact direction-cosine shear λν.
 *
 * Both sheared endpoints are located in the 2-D direction mesh, keeping the perpendicular
 * coordinate fixed. With J = |∂q/∂(column,row)|, the field amplitude is √flux/√J and each
 * midpoint has direction-area weight J. Thus the stop-coordinate integrand is
 * J₀ √(flux₊ flux₋ / (J₊ J₋)), with optical path interpolated without phase wrapping.
 * Dark midpoint cells count too: an overlapping pair can straddle an obstruction.
 *
 * @param lattice - lattice pupil with an invertible direction map and adequately sampled phase
 * @param wavelengthMm - wavelength in mm
 * @param frequencies - image-space frequencies in lp/mm
 * @returns complex OTF per axis, with the phase convention of `geometricOtf`
 */
export function waveLatticeOtf(
  lattice: MtfWaveLattice,
  wavelengthMm: number,
  frequencies: readonly number[],
): { sagittal: ComplexOtf; tangential: ComplexOtf } {
  const mesh = waveMesh(lattice);
  if (mesh === null) throw new RangeError("Wave lattice direction map must be invertible");
  const at = waveLookup(mesh);
  let energy = 0;
  for (const value of lattice.amplitude) energy += value * value;
  const cut = (axis: "x" | "y"): ComplexOtf => {
    const real: number[] = [],
      imaginary: number[] = [];
    for (const frequency of frequencies) {
      if (frequency === 0) {
        real.push(1);
        imaginary.push(0);
        continue;
      }
      const halfShear = (frequency * wavelengthMm) / 2;
      let re = 0,
        im = 0;
      for (let row = 1; row < mesh.rows - 1; row++)
        for (let column = 1; column < mesh.columns - 1; column++) {
          const cell = row * mesh.columns + column;
          const x = mesh.cosineX[cell],
            y = mesh.cosineY[cell];
          const plus = at(x + (axis === "x" ? halfShear : 0), y + (axis === "y" ? halfShear : 0));
          const minus = at(x - (axis === "x" ? halfShear : 0), y - (axis === "y" ? halfShear : 0));
          const pair = mesh.jacobian[cell] * plus.amplitude * minus.amplitude;
          if (!(pair > 0)) continue;
          // A ray's landing offset is minus its path gradient over direction cosine, hence the sign.
          const phase = (2 * Math.PI * (plus.pathMm - minus.pathMm)) / wavelengthMm;
          re += pair * Math.cos(phase);
          im += pair * Math.sin(phase);
        }
      real.push(re / energy);
      imaginary.push(im / energy);
    }
    return { real, imaginary };
  };
  return { sagittal: cut("x"), tangential: cut("y") };
}
