/**
 * Wave-optics OTF of a traced beam from optical path, on the bundle's lattice. Lengths are mm,
 * phases are not wrapped.
 *
 * The qualified product and the optical-path diagnostic use the same mapped pupil. Comparison
 * with external quadrature and analytic pupils checks the integration independently. Production
 * requires the phase to turn by less than a quarter wave from one
 * lattice cell to the next (`waveLatticePhaseStep`) and an invertible direction map. Fast or
 * strongly aberrated beams exceed the phase limit at any practical grid.
 */
import { MTF_CONVERGENCE_TOLERANCE } from "./mtfConstants.js";
import { cross, dot, subtract } from "../../math/vector.js";
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
  /** Both cuts are equivalent under axial rotation about the chosen reference. */
  axial?: boolean;
  /** √flux per cell in row-major order, 0 where no ray transmits. */
  amplitude: Float64Array;
  /** Optical path difference from the reference ray in mm; meaningful where amplitude is positive. */
  pathMm: Float64Array;
  /** Index-scaled cosines along the reference's image-coordinate tangents; meaningful where amplitude is positive. */
  cosineX: Float64Array;
  cosineY: Float64Array;
  /** First derivatives of optical path with respect to the two index-scaled tangent coordinates. */
  pathGradient?: { x: Float64Array; y: Float64Array };
}

const FLAT_TANGENTS: readonly [Vec3, Vec3] = [
  [1, 0, 0],
  [0, 1, 0],
];

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
    axial: bundle.rotationallySymmetric && reference.x === 0 && reference.y === 0,
    amplitude: new Float64Array(cells),
    pathMm: new Float64Array(cells),
    cosineX: new Float64Array(cells),
    cosineY: new Float64Array(cells),
  };
  if (bundle.landingPlaneZ !== undefined) {
    lattice.pathGradient = { x: new Float64Array(cells), y: new Float64Array(cells) };
  }
  let datum: number | undefined;
  for (const ray of bundle.rays) {
    const path = rayOpticalPathToImageMm(ray.trace, image, bundle.objectPoint);
    if (path === null) return null;
    // Piston is arbitrary: any one ray serves as the datum.
    datum ??= path;
    const cell = ray.row * columns + ray.column;
    lattice.amplitude[cell] = Math.sqrt(ray.weight);
    lattice.pathMm[cell] = path - datum;
    if (lattice.pathGradient) {
      if (shape === null && bundle.landingPlaneZ === imagePlaneZ) {
        // On the measured flat plane the two derivatives are the lateral displacements in mm.
        lattice.pathGradient.x[cell] = reference.x - ray.x;
        lattice.pathGradient.y[cell] = reference.y - ray.y;
      } else {
        // For image tangents U,V, solve image − terminal = a·U + b·V + t·direction.
        // Optical direction has constant length, so its variation annihilates t·direction.
        // The two remaining coordinates are exactly dW/d(n·d·U) and dW/d(n·d·V).
        const [u, v] = tangents ?? FLAT_TANGENTS;
        const direction = ray.trace.terminalDirection;
        const vCrossRay = cross(v, direction);
        const denominator = dot(u, vCrossRay);
        if (!(Math.abs(denominator) > 1e-12)) {
          delete lattice.pathGradient;
        } else {
          const offset = subtract(image, ray.trace.terminalPoint);
          lattice.pathGradient.x[cell] = dot(offset, vCrossRay) / denominator;
          lattice.pathGradient.y[cell] = dot(offset, cross(direction, u)) / denominator;
        }
      }
    }
    lattice.cosineX[cell] = mtfImageAxisCosine(ray, 0, tangents);
    lattice.cosineY[cell] = mtfImageAxisCosine(ray, 1, tangents);
  }
  return lattice;
}

/** The square mesh and its diagonals are invariant under transposition and central inversion.
 * Check the traced mask, weights and phase before exploiting the optical symmetry: a nearly
 * clipped ray or an inaccurate aim can break it even for a rotationally symmetric prescription. */
function sampledAxialSymmetry(lattice: MtfWaveLattice, wavelengthMm: number): boolean {
  const { columns, rows, amplitude, pathMm } = lattice;
  if (!lattice.axial || rows !== columns || columns % 2 !== 0) return false;
  const phaseToleranceMm = wavelengthMm * 1e-5;
  for (let cell = 0; cell < amplitude.length; cell++) {
    const opposite = amplitude.length - 1 - cell;
    const transposed = (cell % columns) * columns + Math.floor(cell / columns);
    if (amplitude[cell] !== amplitude[opposite] || amplitude[cell] !== amplitude[transposed]) return false;
    if (
      amplitude[cell] > 0 &&
      (Math.abs(pathMm[cell] - pathMm[opposite]) > phaseToleranceMm ||
        Math.abs(pathMm[cell] - pathMm[transposed]) > phaseToleranceMm)
    )
      return false;
  }
  return true;
}

/**
 * Largest optical-path change between neighbouring transmitted cells, in waves. The lattice OTF
 * is trustworthy below a quarter wave only when the direction map is invertible; a folded or
 * degenerate map on the interpolated pupil returns infinity regardless of its phase sampling.
 * Unilluminated padding outside that support does not constrain invertibility.
 *
 * @param lattice - lattice pupil
 * @param wavelengthMm - wavelength in mm
 * @returns largest neighbour step in waves, or infinity for a noninvertible direction map
 */
export function waveLatticePhaseStep(lattice: MtfWaveLattice, wavelengthMm: number): number {
  return waveMesh(lattice) === null ? Infinity : neighbourPhaseStep(lattice, wavelengthMm);
}

function neighbourPhaseStep(lattice: MtfWaveLattice, wavelengthMm: number): number {
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

/** A dark vertex supplies no path. Extend phase past the last ray only when the
 * independent landing slopes reproduce adjacent measured paths along both lattice axes. */
function resolvedPathSlopes(lattice: MtfWaveLattice, wavelengthMm: number): boolean {
  const { pathGradient, amplitude, pathMm, cosineX, cosineY, columns, rows } = lattice;
  if (!pathGradient) return false;
  const { x: slopeX, y: slopeY } = pathGradient;
  // Scale the slope consistency check to half the MTF tolerance per endpoint, using |exp(iδ)−1| ≤ |δ|.
  // This checks the measured support; it does not bound the unseen phase beyond its edge.
  const maxErrorMm = (wavelengthMm * MTF_CONVERGENCE_TOLERANCE) / (4 * Math.PI);
  function agrees(i: number, j: number) {
    if (!amplitude[j]) return true;
    const predicted =
      ((slopeX[i] + slopeX[j]) * (cosineX[j] - cosineX[i]) + (slopeY[i] + slopeY[j]) * (cosineY[j] - cosineY[i])) / 2;
    return Math.abs(pathMm[j] - pathMm[i] - predicted) <= maxErrorMm;
  }
  for (let row = 0; row < rows; row++)
    for (let col = 0; col < columns; col++) {
      const i = row * columns + col;
      if (!amplitude[i]) continue;
      if ((col + 1 < columns && !agrees(i, i + 1)) || (row + 1 < rows && !agrees(i, i + columns))) return false;
    }
  return true;
}

/** Direction-space mesh, padded by one dark cell so interpolation reaches the pupil rim. */
interface WaveMesh extends MtfWaveLattice {
  /** Absolute direction-area Jacobian per unit lattice-index area. */
  jacobian: Float64Array;
  /** Only triangles touching a lit vertex can contribute an interpolated endpoint. */
  triangles: [number, number, number][];
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
    triangles: [],
  };
  if (lattice.pathGradient) mesh.pathGradient = { x: new Float64Array(cells), y: new Float64Array(cells) };
  const known = new Uint8Array(cells);
  for (let row = 0; row < lattice.rows; row++)
    for (let column = 0; column < lattice.columns; column++) {
      const source = row * lattice.columns + column;
      if (!(lattice.amplitude[source] > 0)) continue;
      const cell = (row + 1) * columns + column + 1;
      known[cell] = 1;
      mesh.amplitude[cell] = lattice.amplitude[source];
      mesh.pathMm[cell] = lattice.pathMm[source];
      if (mesh.pathGradient && lattice.pathGradient) {
        mesh.pathGradient.x[cell] = lattice.pathGradient.x[source];
        mesh.pathGradient.y[cell] = lattice.pathGradient.y[source];
      }
      mesh.cosineX[cell] = lattice.cosineX[source];
      mesh.cosineY[cell] = lattice.cosineY[source];
    }
  // Only the one-cell ring can bound a lit triangle or enter a lit Jacobian. Fit its two
  // cosines to nearby measured directions in both axes; extending a whole column before
  // extending a row biases the rim when an axial pupil is exchanged with its transpose.
  for (let row = 0; row < rows; row++)
    for (let column = 0; column < columns; column++) {
      const cell = row * columns + column;
      if (known[cell]) continue;
      let touchesPupil = false;
      for (let r = Math.max(0, row - 1); r <= Math.min(rows - 1, row + 1); r++)
        for (let c = Math.max(0, column - 1); c <= Math.min(columns - 1, column + 1); c++)
          touchesPupil ||= known[r * columns + c] === 1;
      if (touchesPupil && !extendDirection(mesh, known, row, column)) return null;
    }

  const { cosineX: x, cosineY: y } = mesh;
  const cross = (a: number, b: number, c: number) => (x[b] - x[a]) * (y[c] - y[a]) - (y[b] - y[a]) * (x[c] - x[a]);
  // Shared edges cancel. A triangle touching a lit vertex borders empty support only
  // across two dark vertices, when the opposite vertex of its neighbor is dark too.
  // The one-cell padding keeps all lit vertices strictly inside the lattice.
  const boundary: [number, number, number][] = [];
  const addBoundary = (a: number, b: number, c: number, opposite: number) => {
    if (!(mesh.amplitude[a] > 0 || mesh.amplitude[b] > 0 || mesh.amplitude[opposite] > 0)) boundary.push([a, b, c]);
  };
  let orientation = 0;
  for (let row = 0; row < rows - 1; row++)
    for (let column = 0; column < columns - 1; column++) {
      const a = row * columns + column;
      for (const [b, c] of [
        [a + 1, a + columns + 1],
        [a + columns + 1, a + columns],
      ]) {
        if (!(mesh.amplitude[a] > 0 || mesh.amplitude[b] > 0 || mesh.amplitude[c] > 0)) continue;
        const det = cross(a, b, c);
        const scale = Math.hypot(x[b] - x[a], y[b] - y[a]) * Math.hypot(x[c] - x[a], y[c] - y[a]);
        if (!Number.isFinite(det) || !(Math.abs(det) > 1e-12 * scale)) return null;
        orientation ||= Math.sign(det);
        if (orientation * det <= 0) return null;
        mesh.triangles.push([a, b, c]);
        // The regular triangulation alternates the two halves of each square. Across
        // any edge, the neighboring triangle completes a parallelogram in lattice indices.
        addBoundary(a, b, c, a + b - c);
        addBoundary(b, c, a, b + c - a);
        addBoundary(c, a, b, c + a - b);
      }
    }
  // Consistent orientation and disjoint boundaries rule out folds within each piece.
  for (let i = 0; i < boundary.length; i++) {
    const [a, b] = boundary[i];
    for (let j = i + 1; j < boundary.length; j++) {
      const [c, d] = boundary[j];
      if (a === c || a === d || b === c || b === d) continue;
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
  // A component contained in another need not cross its boundary. Unit winding at
  // each boundary triangle's interior also excludes such multiple coverage.
  for (const [a, b, c] of boundary) {
    const px = (x[a] + x[b] + x[c]) / 3;
    const py = (y[a] + y[b] + y[c]) / 3;
    let winding = 0;
    for (const [u, v] of boundary) {
      const side = (x[v] - x[u]) * (py - y[u]) - (y[v] - y[u]) * (px - x[u]);
      if (y[u] <= py && y[v] > py && side > 0) winding++;
      if (y[u] > py && y[v] <= py && side < 0) winding--;
    }
    if (winding !== orientation) return null;
  }
  for (let row = 0; row < rows; row++)
    for (let column = 0; column < columns; column++) {
      const cell = row * columns + column;
      // Quadrature is anchored at a lit endpoint, so dark-cell Jacobians are unused.
      if (!(mesh.amplitude[cell] > 0)) continue;
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

/** Extrapolate an affine direction map at a dark rim vertex from measured non-collinear neighbours. */
function extendDirection(mesh: WaveMesh, known: Uint8Array, row: number, column: number): boolean {
  const { rows, columns, cosineX, cosineY } = mesh;
  for (const radius of [2, 4]) {
    let n = 0,
      sx = 0,
      sy = 0,
      sxx = 0,
      sxy = 0,
      syy = 0;
    let qx = 0,
      qy = 0,
      xqx = 0,
      yqx = 0,
      xqy = 0,
      yqy = 0;
    for (let r = Math.max(0, row - radius); r <= Math.min(rows - 1, row + radius); r++)
      for (let c = Math.max(0, column - radius); c <= Math.min(columns - 1, column + radius); c++) {
        const k = r * columns + c;
        if (!known[k]) continue;
        const x = c - column,
          y = r - row;
        n++;
        sx += x;
        sy += y;
        sxx += x * x;
        sxy += x * y;
        syy += y * y;
        qx += cosineX[k];
        qy += cosineY[k];
        xqx += x * cosineX[k];
        yqx += y * cosineX[k];
        xqy += x * cosineY[k];
        yqy += y * cosineY[k];
      }
    // First row of the inverse normal matrix for the fitted constant at (0, 0).
    const a = sxx * syy - sxy * sxy,
      b = sy * sxy - sx * syy,
      c = sx * sxy - sy * sxx;
    const determinant = n * a + sx * b + sy * c;
    if (!(determinant > 0)) continue;
    const k = row * columns + column;
    cosineX[k] = (a * qx + b * xqx + c * yqx) / determinant;
    cosineY[k] = (a * qy + b * xqy + c * yqy) / determinant;
    return true;
  }
  return false;
}

/** A mapped stop triangle, with its affine inverse for direction-coordinate lookups. */
interface WaveTriangle {
  a: number;
  b: number;
  c: number;
  originX: number;
  originY: number;
  duDx: number;
  duDy: number;
  dvDx: number;
  dvDy: number;
  /** Quadratic path corrections on the three edges. Zero on an edge with a missing ray. */
  ab: number;
  ac: number;
  bc: number;
  litCount: number;
}

/** Index the illuminated mesh triangles in direction-space bins; bins only accelerate exact 2-D lookups. */
function waveLookup(mesh: WaveMesh, extendRimPhase: boolean) {
  const { columns, rows, cosineX: x, cosineY: y, amplitude, pathMm } = mesh;
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (const triangle of mesh.triangles)
    for (const cell of triangle) {
      minX = Math.min(minX, x[cell]);
      maxX = Math.max(maxX, x[cell]);
      minY = Math.min(minY, y[cell]);
      maxY = Math.max(maxY, y[cell]);
    }
  const binX = (value: number) =>
    Math.max(0, Math.min(columns - 1, Math.floor(((value - minX) * columns) / (maxX - minX))));
  const binY = (value: number) => Math.max(0, Math.min(rows - 1, Math.floor(((value - minY) * rows) / (maxY - minY))));
  const bins: (WaveTriangle[] | undefined)[] = new Array(columns * rows);
  const gradient = mesh.pathGradient;
  const edgeCorrection = (i: number, j: number) =>
    gradient && amplitude[i] > 0 && amplitude[j] > 0
      ? 0.5 * ((gradient.x[i] - gradient.x[j]) * (x[j] - x[i]) + (gradient.y[i] - gradient.y[j]) * (y[j] - y[i]))
      : 0;
  for (const [a, b, c] of mesh.triangles) {
    const ux = x[b] - x[a],
      uy = y[b] - y[a];
    const vx = x[c] - x[a],
      vy = y[c] - y[a];
    const inverseDet = 1 / (ux * vy - uy * vx);
    const triangle = {
      a,
      b,
      c,
      originX: x[a],
      originY: y[a],
      duDx: vy * inverseDet,
      duDy: -vx * inverseDet,
      dvDx: -uy * inverseDet,
      dvDy: ux * inverseDet,
      ab: edgeCorrection(a, b),
      ac: edgeCorrection(a, c),
      bc: edgeCorrection(b, c),
      litCount: Number(amplitude[a] > 0) + Number(amplitude[b] > 0) + Number(amplitude[c] > 0),
    };
    const lowX = binX(Math.min(x[a], x[b], x[c])),
      highX = binX(Math.max(x[a], x[b], x[c]));
    const lowY = binY(Math.min(y[a], y[b], y[c])),
      highY = binY(Math.max(y[a], y[b], y[c]));
    for (let by = lowY; by <= highY; by++)
      for (let bx = lowX; bx <= highX; bx++) (bins[by * columns + bx] ??= []).push(triangle);
  }
  // Nearby frequency samples often land inside the same triangle. Reuse it only in its
  // strict interior. On a shared edge use the bin's original ordering and tolerance.
  let previous: WaveTriangle | undefined;
  const sample = { amplitude: 0, pathMm: 0 };
  let sampleU = 0,
    sampleV = 0;
  function contains(triangle: WaveTriangle, targetX: number, targetY: number, margin: number): boolean {
    const dx = targetX - triangle.originX,
      dy = targetY - triangle.originY;
    const u = dx * triangle.duDx + dy * triangle.duDy;
    const v = dx * triangle.dvDx + dy * triangle.dvDy;
    const w = 1 - u - v;
    if (Math.min(u, v, w) < margin) return false;
    sampleU = u;
    sampleV = v;
    return true;
  }
  function value(triangle: WaveTriangle, targetX: number, targetY: number) {
    previous = triangle;
    const { a, b, c } = triangle;
    const u = sampleU,
      v = sampleV,
      w = 1 - u - v;
    const wa = Math.max(0, w) * amplitude[a];
    const wb = Math.max(0, u) * amplitude[b];
    const wc = Math.max(0, v) * amplitude[c];
    sample.amplitude = wa + wb + wc;
    if (!gradient || (triangle.litCount !== 3 && !extendRimPhase) || !(sample.amplitude > 0)) {
      // Without a usable derivative, interpolate the measured paths at lit vertices.
      sample.pathMm = sample.amplitude > 0 ? (wa * pathMm[a] + wb * pathMm[b] + wc * pathMm[c]) / sample.amplitude : 0;
    } else if (triangle.litCount === 3) {
      // Barycentric interpolation plus the three edge curvature terms is exact for any
      // quadratic path. Flux and phase are separate, even when the Jacobian or transmission varies.
      sample.pathMm =
        w * pathMm[a] + u * pathMm[b] + v * pathMm[c] + w * u * triangle.ab + w * v * triangle.ac + u * v * triangle.bc;
    } else {
      // At a clipped rim only the lit vertices measure a phase. Interpolate on their
      // segment (or point), then continue its measured slope to the actual shear endpoint.
      const dx = targetX - triangle.originX,
        dy = targetY - triangle.originY;
      const aw = amplitude[a] > 0 ? Math.max(0, w) : 0;
      const bw = amplitude[b] > 0 ? Math.max(0, u) : 0;
      const cw = amplitude[c] > 0 ? Math.max(0, v) : 0;
      const sum = aw + bw + cw;
      const i = aw / sum,
        j = bw / sum,
        k = cw / sum;
      const gx = i * gradient.x[a] + j * gradient.x[b] + k * gradient.x[c];
      const gy = i * gradient.y[a] + j * gradient.y[b] + k * gradient.y[c];
      sample.pathMm =
        i * pathMm[a] +
        j * pathMm[b] +
        k * pathMm[c] +
        i * j * triangle.ab +
        i * k * triangle.ac +
        j * k * triangle.bc +
        gx * (dx - j * (x[b] - x[a]) - k * (x[c] - x[a])) +
        gy * (dy - j * (y[b] - y[a]) - k * (y[c] - y[a]));
    }
    return sample;
  }
  return (targetX: number, targetY: number) => {
    if (previous && contains(previous, targetX, targetY, 1e-8)) return value(previous, targetX, targetY);
    if (targetX >= minX && targetX <= maxX && targetY >= minY && targetY <= maxY) {
      const candidates = bins[binY(targetY) * columns + binX(targetX)];
      if (candidates)
        for (const candidate of candidates) {
          if (contains(candidate, targetX, targetY, -1e-9)) return value(candidate, targetX, targetY);
        }
    }
    sample.amplitude = 0;
    return sample;
  };
}

/**
 * Hopkins' OTF on a mapped lattice: autocorrelation at the exact direction-cosine shear λν.
 *
 * With J = |∂q/∂(column,row)|, the field amplitude is √flux/√J. Quadrature is anchored
 * at a lit endpoint with direction-area weight J, locating the other endpoint at ±λν
 * in the 2-D mesh while holding the perpendicular coordinate fixed. Averaging the
 * equivalent forward and backward integrals preserves symmetry on the sampled grid.
 * Translation gives ∫P(q+s/2)P*(q−s/2)dq = ∫P(q+s)P*(q)dq, so the anchor can
 * be lit even when the pair's midpoint lies in an obstruction or dark padding.
 * This includes pairs across obstructions without integrating through the arbitrary
 * dark extension. Optical path is interpolated without phase wrapping.
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
  if (mesh === null) throw new RangeError("Wave lattice illuminated direction map must be invertible");
  const response = mappedOtf(mesh, lattice, wavelengthMm, frequencies);
  return { sagittal: response.sagittal, tangential: response.tangential };
}

/** Production uses optical paths only on a resolved, one-to-one direction map. */
export function qualifiedWaveOtf(
  lattice: MtfWaveLattice,
  wavelengthMm: number,
  frequencies: readonly number[],
  mirrored = false,
) {
  if (!(neighbourPhaseStep(lattice, wavelengthMm) < 0.25)) return null;
  const mesh = waveMesh(lattice);
  return mesh && mappedOtf(mesh, lattice, wavelengthMm, frequencies, mirrored && lattice.columns % 2 === 0);
}

/** Accumulate the zero-phase overlap on the same pairs and quadrature as the complex field. */
function mappedOtf(
  mesh: WaveMesh,
  lattice: MtfWaveLattice,
  wavelengthMm: number,
  frequencies: readonly number[],
  mirrored = false,
) {
  const at = waveLookup(mesh, resolvedPathSlopes(lattice, wavelengthMm));
  let energy = 0;
  for (const value of lattice.amplitude) energy += value * value;
  // The tracer reconstructs the second half of a meridional pupil by reflection.
  // The sagittal pairs there are complex conjugates and the tangential pairs identical.
  // In an axial pupil central inversion conjugates the opposite half, and transposition
  // exchanges the two cuts. Neither operation changes the triangulation diagonal.
  const axial = sampledAxialSymmetry(lattice, wavelengthMm);
  const half = mirrored || axial;
  const firstColumn = half ? 1 + lattice.columns / 2 : 1;
  const normalization = half ? energy / 2 : energy;
  const cut = (axis: "x" | "y") => {
    const limit: number[] = new Array(frequencies.length).fill(0);
    const real: number[] = new Array(frequencies.length).fill(0);
    const imaginary: number[] = new Array(frequencies.length).fill(0);
    const shears = frequencies.map((frequency) => frequency * wavelengthMm);
    const sagittal = axis === "x";
    for (let row = 1; row < mesh.rows - 1; row++)
      for (let column = firstColumn; column < mesh.columns - 1; column++) {
        const cell = row * mesh.columns + column;
        if (!(mesh.amplitude[cell] > 0)) continue;
        const x = mesh.cosineX[cell];
        const y = mesh.cosineY[cell];
        const weight = mesh.jacobian[cell] * mesh.amplitude[cell];
        const path = mesh.pathMm[cell];
        for (let sign = -1; sign <= 1; sign += 2)
          for (let i = 0; i < shears.length; i++) {
            if (shears[i] === 0) continue;
            const shift = sign * shears[i];
            const other = at(sagittal ? x + shift : x, sagittal ? y : y + shift);
            const pair = (weight * other.amplitude) / 2;
            if (!(pair > 0)) continue;
            const phase = (sign * 2 * Math.PI * (other.pathMm - path)) / wavelengthMm;
            limit[i] += pair;
            real[i] += pair * Math.cos(phase);
            if (!half || !sagittal) imaginary[i] += pair * Math.sin(phase);
          }
      }
    for (let i = 0; i < frequencies.length; i++) {
      limit[i] = frequencies[i] === 0 ? 1 : Math.min(1, limit[i] / normalization);
      real[i] = frequencies[i] === 0 ? 1 : real[i] / normalization;
      imaginary[i] /= normalization;
    }
    return { otf: { real, imaginary }, limit };
  };
  const x = cut("x"),
    y = axial ? { otf: { real: [...x.otf.real], imaginary: [...x.otf.imaginary] }, limit: [...x.limit] } : cut("y");
  return { sagittal: x.otf, tangential: y.otf, limit: { sagittal: x.limit, tangential: y.limit } };
}
