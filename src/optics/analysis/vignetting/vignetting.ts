/**
 * Vignetting and relative illumination: OpticStudio's two field analyses, on one lattice on the stop per field.
 *
 * Each field launches a regular lattice of stop samples through the aimed pupil launch (`pupils/aimedPupil.ts`):
 * `BEAM_GRID_CELLS` cells across the stop's diameter, keeping the cells whose centre lies in the unit disc. Every
 * returned ray is traced with every aperture checked.
 *
 *   - The vignetting curve is the share of the lattice's samples that reach the image, as OpticStudio's Vignetting
 *     Diagram counts rays. It is geometric (no bulk absorption or coating loss), absolute and at most 1. Blocked
 *     samples, and rays a rim, total internal reflection or a proven aperture miss stops after the stop
 *     (`trace/rayClassification.ts`), count as vignetted. Unaimed samples and rays whose full trace fails for any other
 *     reason are left out of both counts, and each field reports how many of each there were.
 *   - Relative illumination follows Rimmer's method, as OpticStudio computes it: a transmitted cell contributes n′²
 *     times its area in image-space direction cosines (L, M) times its bulk transmission, and a field's sum over its
 *     beam is divided by the axis's. Each ray is referred to the image point through the reference sphere (Rimmer's
 *     Eq. 3): (L, M) are the direction cosines of the segment from the ray's crossing of a sphere centred on the chief
 *     ray's image-plane point, through the state's exit pupil, to that point. Without aberration this is the ray's
 *     own direction; with it, the cone is the exit pupil as seen from the image point, not from where each ray happens
 *     to focus. A cell's cosine-space area is |det J| times its stop area, J the Jacobian of the lattice's map from
 *     stop coordinates to (L, M), by finite differences between lit cells. The chief ray that names the image point is
 *     traced without aperture checks, so a field whose chief ray is vignetted keeps its image point.
 *
 * Edge cells: a transmitted cell counts its whole cell in both figures (the midpoint rule). Each derivative of its
 * Jacobian is a central difference where both lattice neighbours along that axis transmit, one-sided where one does,
 * and, for a cell with no transmitting neighbour along an axis (the tip of a cat's-eye beam), that derivative of the
 * nearest cell in its column or row that has one (the mean of two at equal distance).
 *
 * Rimmer's method assumes the cell map does not fold in cosine space and that the rays localize at the image point: a
 * field where a transmitted cell's oriented area is reversed or collapses below `RIMMER_MIN_CELL_AREA_RATIO` of the
 * field's median, or where a transmitted ray strays from its referred direction by more than
 * `RIMMER_MAX_REFERRED_DEVIATION`, has no relative illumination. Nor does a field where an unaimed or failed sample is
 * the row or column neighbour of a transmitted one: its share of the beam is unknown, and its neighbours' derivatives
 * would be one-sided. A field whose unaimed and failed samples together exceed `VIGNETTING_MAX_UNAIMED_SHARE` of its
 * lattice has neither figure. States the MTF's beam model refuses (folded, mirror, diffractive or annular paths, fisheye projections, a
 * tilted image plane) and curves with a bounding-sphere field have no curve. Each of these carries its reason.
 *
 * On a meridional field of a system mirror-symmetric about the meridian (`trace/symmetry.ts`), the +px half is traced
 * and the −px half is its exact mirror image, as the launch itself mirrors.
 *
 * No React dependencies — fully testable in isolation.  Memoize from current state in a React hook rather than
 * embedding in a component.
 */

import { uniformFieldFraction } from "../sampling.js";
import { computeAnalysisFieldGeometryAtState } from "../../state/fieldAdapters.js";
import { launchSurfaceForFieldDeg } from "../../field/projection.js";
import { bulkTransmissionForTrace } from "../../trace/bulkAbsorption.js";
import { prepareEngineTrace } from "../../trace/rayAdapters.js";
import { traceRayClassification } from "../../trace/rayClassification.js";
import { mirrorSymmetricAboutMeridian } from "../../trace/symmetry.js";
import { mtfAxialImagePlane, mtfSequentialRefractivePath } from "../mtf/mtfSupport.js";
import { computeOffAxisFieldGeometry, isOffAxisVectorFieldGeometry } from "../aberration/offAxis.js";
import { prepareAimedPupilLaunch, prepareAimedPupilTrace } from "../pupils/aimedPupil.js";
import type { AimedPupilLaunch, AimedPupilRay } from "../pupils/aimedPupil.js";
import type { FieldGeometryState } from "../../field/launch.js";
import type { OffAxisFieldGeometry } from "../aberration/offAxis.js";
import type { PreparedGeometry, Vec3 } from "../../types.js";
import { runtimeView } from "../../prescription/runtimeView.js";
import type { AnalysisRequest } from "../request.js";

/** Lattice cells across the stop's diameter. */
export const BEAM_GRID_CELLS = 64;
/** Fewest cells across the stop a sampling override may request. */
export const MIN_BEAM_GRID_CELLS = 4;
/**
 * Largest share of a field's lattice that may be unaimed or failed. Left out of both counts, those samples could move
 * the vignetting figure by up to their share, so a field with more has no figures.
 */
export const VIGNETTING_MAX_UNAIMED_SHARE = 0.01;
/**
 * Smallest oriented cosine-space area of a transmitted cell, as a share of the field's median. Below it, or with the
 * orientation reversed, the cell map folds or collapses in cosine space and Rimmer's integral does not apply.
 */
export const RIMMER_MIN_CELL_AREA_RATIO = 0.01;
/**
 * Largest angle (rad) between a transmitted ray and its direction referred to the image point: its transverse
 * aberration over the reference-sphere radius. Rimmer's integral assumes the rays localize at the image point, as
 * OpticStudio's analysis does; the reference-sphere correction is first order in that ratio, and at 5 % its neglected
 * square stays below the lattice's own convergence band.
 */
export const RIMMER_MAX_REFERRED_DEVIATION = 0.05;

/** One cell of the stop lattice: a stop sample at normalised (xFraction, yFraction), its centre in the unit disc. */
export interface VignettingLatticeCell {
  /** Position in the lattice list. */
  index: number;
  /** Lattice row, 0 at yFraction = −1. */
  row: number;
  /** Lattice column, 0 at xFraction = −1. */
  column: number;
  xFraction: number;
  yFraction: number;
  /** Equal weight, 1 / number of cells. */
  weight: number;
}

/**
 * Why a field has neither figure: no launch, or more unaimed and failed samples than `VIGNETTING_MAX_UNAIMED_SHARE`
 * (`too-many-unaimed` when the unaimed ones are at least as many, `too-many-failed` otherwise).
 */
export type VignettingFieldUnavailableReason = "no-field-launch" | "too-many-unaimed" | "too-many-failed";
/** Why a field has a vignetting figure but no relative illumination. */
export type RelativeIlluminationUnavailableReason =
  | VignettingFieldUnavailableReason
  | "no-image-point"
  | "reference-sphere-missed"
  | "rays-not-localized"
  | "unresolved-in-beam"
  | "cosine-map-folds"
  | "isolated-cell"
  | "axis-unavailable";
/** Why a lens state has no vignetting curve. */
export type VignettingCurveUnavailableReason =
  | "invalid-state"
  | "unsupported-path"
  | "tilted-image-plane"
  | "bounding-sphere-field";

/** One lattice cell of one field. */
export interface VignettingCellResult {
  cell: VignettingLatticeCell;
  /** The launch's ray for this cell, with its status (`aimed`, `blocked` or `unaimed`) and weight. */
  ray: AimedPupilRay;
  /** True when the aimed ray reaches the image with every aperture checked. */
  transmitted: boolean;
  /**
   * True when the aimed ray's full trace fails for a reason other than a rim, total internal reflection or a proven
   * aperture miss, or leaves the last surface backward: left out of both counts, like an unaimed sample.
   */
  failed: boolean;
  /** Bulk transmission of a transmitted ray, else 0. */
  bulkTransmission: number;
  /** Image-space direction cosines (L, M) of a transmitted ray's own exit direction, else null. */
  exitDirectionCosines: readonly [number, number] | null;
  /**
   * Direction cosines (L, M) of a transmitted ray referred to the image point through the reference sphere (Rimmer's
   * Eq. 3), which Rimmer's integral uses; null when the ray does not cross the sphere or the field has no image point.
   */
  referredDirectionCosines: readonly [number, number] | null;
  /** Angle (rad) between the ray and its referred direction, about its transverse aberration over the sphere radius. */
  referredDeviation: number | null;
  /** Refractive index of the image space n′, or null. */
  imageIndex: number | null;
  /** Oriented cosine-space area det J · cell area of a transmitted cell, or null where no Jacobian forms. */
  orientedCosineArea: number | null;
  /** Area of the cell in image-space direction-cosine space, |det J| · cell area, or null. */
  cosineArea: number | null;
}

/** One field on its stop lattice. */
export interface VignettingFieldResult {
  fieldFraction: number;
  fieldAngleDeg: number;
  /** Lattice cells across the stop's diameter. */
  cellsAcross: number;
  /** Area of one cell in normalised stop units, (2 / cellsAcross)². */
  cellArea: number;
  /** True when the −px half is the mirror image of the traced +px half. */
  mirrored: boolean;
  /** Chief ray's image-plane point, the reference sphere's centre, or null. */
  imagePoint: Vec3 | null;
  /** Reference-sphere radius in mm (Infinity for an image-space telecentric state), or null. */
  referenceRadiusMm: number | null;
  /** The state's traced exit pupil z in mm (`exitPupilZ`): Infinity when telecentric, null without one. */
  exitPupilZ: number | null;
  /** Unit vector from the image point toward the exit pupil, which picks each ray's sphere crossing, or null. */
  towardPupil: Vec3 | null;
  sampleCount: number;
  transmittedCount: number;
  /** Samples a clear aperture blocks before the stop, counted as vignetted. */
  blockedCount: number;
  /** Samples no ray could be aimed at, left out of both counts. */
  unaimedCount: number;
  /** Aimed samples whose full trace failed (`VignettingCellResult.failed`), left out of both counts. */
  failedCount: number;
  /** Share of the samples neither unaimed nor failed that reach the image, or null. */
  unvignettedFraction: number | null;
  /** Σ n′² · bulk transmission · cosine area over the transmitted cells, or null. */
  rimmerSum: number | null;
  unavailableReason: VignettingFieldUnavailableReason | null;
  relativeIlluminationReason: RelativeIlluminationUnavailableReason | null;
  cells: VignettingCellResult[];
}

/** A single field on the vignetting / relative-illumination curve. */
export interface VignettingSample {
  /** Field angle in degrees (0 = on-axis). */
  fieldAngleDeg: number;
  fieldFraction: number;
  /** Share of the field's stop samples that reach the image, geometric and absolute; null when unavailable. */
  unvignettedFraction: number | null;
  /** Rimmer's projected solid angle with transmission, relative to the axis; null when unavailable. */
  relativeIllumination: number | null;
  sampleCount: number;
  transmittedCount: number;
  blockedCount: number;
  unaimedCount: number;
  failedCount: number;
  unavailableReason: VignettingFieldUnavailableReason | null;
  relativeIlluminationReason: RelativeIlluminationUnavailableReason | null;
}

/** The tab's curve, or the reason the state has none. */
export interface VignettingCurve {
  available: boolean;
  reason: VignettingCurveUnavailableReason | null;
  cellsAcross: number;
  samples: VignettingSample[];
}

/**
 * The stop lattice: cells `cellsAcross` across the stop's diameter, those whose centre lies in the unit disc.
 *
 * Coordinates are (2k + 1 − n) / n, so a column and its mirror are exact negatives.
 *
 * @param cellsAcross - cells across the diameter; at least `MIN_BEAM_GRID_CELLS`
 * @returns cells in row-major order, with equal weights
 */
export function vignettingStopLattice(cellsAcross: number): VignettingLatticeCell[] {
  const n = latticeSize(cellsAcross);
  const cells: Omit<VignettingLatticeCell, "index" | "weight">[] = [];
  for (let row = 0; row < n; row++) {
    const yFraction = (2 * row + 1 - n) / n;
    for (let column = 0; column < n; column++) {
      const xFraction = (2 * column + 1 - n) / n;
      if (xFraction * xFraction + yFraction * yFraction <= 1) cells.push({ row, column, xFraction, yFraction });
    }
  }
  const weight = 1 / cells.length;
  return cells.map((cell, index) => ({ index, ...cell, weight }));
}

/**
 * The tab's lattice size: the sampling override (at least `MIN_BEAM_GRID_CELLS`), else `BEAM_GRID_CELLS`.
 *
 * @param request - analysis request
 * @returns cells across the stop's diameter
 */
export function vignettingCellsAcross(request: AnalysisRequest): number {
  const override = request.sampling.vignettingPupilSampleCount;
  return latticeSize(override !== undefined ? override : BEAM_GRID_CELLS);
}

function latticeSize(cellsAcross: number): number {
  return Math.max(Math.round(cellsAcross), MIN_BEAM_GRID_CELLS);
}

/**
 * Trace one field's stop lattice and integrate its two figures.
 *
 * @param request - prepared geometry, stop radius and sampling
 * @param fieldFraction - fraction of the half field in [0, 1]
 * @param cellsAcross - lattice cells across the stop's diameter
 * @param stateGeometry - the state's field geometry, when already computed
 * @returns the field's samples, cells and figures; relative illumination is the caller's ratio of `rimmerSum`s
 */
export function computeVignettingField(
  request: AnalysisRequest,
  fieldFraction: number,
  cellsAcross: number = vignettingCellsAcross(request),
  stateGeometry?: FieldGeometryState,
): VignettingFieldResult {
  // The tab's own field geometry, so a fraction names the same field alone as in the curve.
  const fields = stateGeometry ?? analysisFieldGeometry(request);
  return vignettingField(request, fieldFraction, cellsAcross, fields, exitPupilZ(request, fields));
}

/** One field, given the state's field geometry and exit pupil, which the curve computes once for all its fields. */
function vignettingField(
  request: AnalysisRequest,
  fieldFraction: number,
  cellsAcross: number,
  fields: FieldGeometryState,
  xpZ: number | null,
): VignettingFieldResult {
  const state = request.preparedGeometry;
  const n = latticeSize(cellsAcross);
  const lattice = vignettingStopLattice(n);
  const geometry = computeOffAxisFieldGeometry(state, fieldFraction, fields);
  const fieldAngleDeg = fieldFraction * fields.halfFieldDeg;
  const base = {
    fieldFraction,
    fieldAngleDeg,
    cellsAcross: n,
    cellArea: (2 / n) ** 2,
    sampleCount: lattice.length,
  };
  const scalar = geometry && !isOffAxisVectorFieldGeometry(geometry) ? geometry : null;
  const launch = scalar && prepareAimedPupilLaunch(request, lattice, scalar);
  if (!scalar || !launch) return unavailableField(base, "no-field-launch");

  // The launch mirrors a meridional field's −px samples exactly; their traces are mirrored the same way.
  const mirrored = mirrorSymmetricAboutMeridian(state);
  const tracer = prepareAimedPupilTrace(state, launch);
  const reference = referenceSphere(state, launch, scalar, xpZ);
  const cells = traceLattice(state, lattice, launch, tracer.engine, n, mirrored, reference);

  const unaimedCount = launch.unaimedCount;
  const blockedCount = launch.blockedCount;
  const failedCount = cells.filter((cell) => cell.failed).length;
  const transmittedCount = cells.filter((cell) => cell.transmitted).length;
  const counts = {
    ...base,
    mirrored,
    imagePoint: reference?.center ?? null,
    referenceRadiusMm: reference?.radius ?? null,
    exitPupilZ: xpZ,
    towardPupil: reference?.towardPupil ?? null,
    transmittedCount,
    blockedCount,
    unaimedCount,
    failedCount,
  };
  if (unaimedCount + failedCount > VIGNETTING_MAX_UNAIMED_SHARE * lattice.length)
    return { ...counts, ...noFigures(unaimedCount >= failedCount ? "too-many-unaimed" : "too-many-failed"), cells };

  const unvignettedFraction = transmittedCount / (lattice.length - unaimedCount - failedCount);
  const transmitted = cells.filter((cell) => cell.transmitted);
  const rimmer: ReturnType<typeof integrateCosineAreas> = !reference
    ? { sum: null, reason: "no-image-point" }
    : unresolvedInBeam(cells, n)
      ? { sum: null, reason: "unresolved-in-beam" }
      : transmitted.some((cell) => !cell.referredDirectionCosines)
        ? { sum: null, reason: "reference-sphere-missed" }
        : transmitted.some((cell) => cell.referredDeviation! > RIMMER_MAX_REFERRED_DEVIATION)
          ? { sum: null, reason: "rays-not-localized" }
          : integrateCosineAreas(cells, n, base.cellArea, mirrored);
  return {
    ...counts,
    unvignettedFraction,
    rimmerSum: rimmer.sum,
    unavailableReason: null,
    relativeIlluminationReason: rimmer.reason,
    cells,
  };
}

/**
 * Compute the vignetting / relative-illumination curve for the current lens state.
 *
 * The fields run from the axis to the current half-field edge at the tab's spacing: about 3° apart and at least seven.
 *
 * @param request - prepared geometry, stop radius, field and sampling
 * @returns the curve, or the reason the state has none
 */
export function computeVignettingCurve(request: AnalysisRequest): VignettingCurve {
  const { preparedGeometry: state, sampling } = request;
  const L = runtimeView(state.lens);
  const cellsAcross = vignettingCellsAcross(request);
  const none = (reason: VignettingCurveUnavailableReason): VignettingCurve => ({
    available: false,
    reason,
    cellsAcross,
    samples: [],
  });
  if (!(request.aperture.stopSemiDiameterMm > 0) || L.N < 1) return none("invalid-state");
  // One method per curve: a state the beam model refuses gets no curve rather than another method's.
  if (!mtfSequentialRefractivePath(state)) return none("unsupported-path");
  if (!mtfAxialImagePlane(state)) return none("tilted-image-plane");

  const geometry = analysisFieldGeometry(request);
  const halfFieldDeg = geometry.halfFieldDeg;
  if (!(halfFieldDeg > 0) || !isFinite(halfFieldDeg)) return none("invalid-state");

  /* Adaptive field sampling: ~3° spacing, min 7 samples.  Ultra-wide lenses (>50° half-field) get denser sampling
   * to capture rapid vignetting onset near the field edge. */
  const fieldCount =
    sampling.vignettingFieldSampleCount !== undefined
      ? Math.max(Math.round(sampling.vignettingFieldSampleCount), 3)
      : Math.max(Math.ceil(halfFieldDeg / 3) + 1, 7);
  const fractions = Array.from({ length: fieldCount }, (_, i) => uniformFieldFraction(i, fieldCount));
  // A bounding-sphere field has no object-plane launch: no curve instead of a mixed one.
  if (
    fractions.some(
      (fraction) => launchSurfaceForFieldDeg(fraction * halfFieldDeg, state.lens.projection.config) !== "object-plane",
    )
  )
    return none("bounding-sphere-field");

  const xpZ = exitPupilZ(request, geometry);
  const fields = fractions.map((fraction) => vignettingField(request, fraction, cellsAcross, geometry, xpZ));
  const axis = fields[0];
  const axisSum = axis.relativeIlluminationReason === null ? axis.rimmerSum : null;
  const samples = fields.map((field): VignettingSample => {
    let relativeIllumination: number | null = null;
    let relativeIlluminationReason = field.relativeIlluminationReason;
    if (relativeIlluminationReason === null) {
      if (axisSum !== null && axisSum > 0 && field.rimmerSum !== null) {
        relativeIllumination = field.rimmerSum / axisSum;
      } else {
        relativeIlluminationReason = "axis-unavailable";
      }
    }
    return {
      fieldAngleDeg: field.fieldAngleDeg,
      fieldFraction: field.fieldFraction,
      unvignettedFraction: field.unvignettedFraction,
      relativeIllumination,
      sampleCount: field.sampleCount,
      transmittedCount: field.transmittedCount,
      blockedCount: field.blockedCount,
      unaimedCount: field.unaimedCount,
      failedCount: field.failedCount,
      unavailableReason: field.unavailableReason,
      relativeIlluminationReason,
    };
  });
  return { available: true, reason: null, cellsAcross, samples };
}

/** The request's analysis field geometry: the image-format-limited half field the tab samples. */
function analysisFieldGeometry(request: AnalysisRequest): FieldGeometryState {
  const state = request.preparedGeometry;
  return (
    request.fieldGeometry ??
    computeAnalysisFieldGeometryAtState(state.focusT, state.zoomT, runtimeView(state.lens), state.aberrationT)
  );
}

function noFigures(reason: VignettingFieldUnavailableReason) {
  return {
    unvignettedFraction: null,
    rimmerSum: null,
    unavailableReason: reason,
    relativeIlluminationReason: reason,
  };
}

/** A field with no launch: no sample was aimed, blocked, left unaimed or failed, so every count is zero. */
function unavailableField(
  base: Pick<VignettingFieldResult, "fieldFraction" | "fieldAngleDeg" | "cellsAcross" | "cellArea" | "sampleCount">,
  reason: VignettingFieldUnavailableReason,
): VignettingFieldResult {
  return {
    ...base,
    mirrored: false,
    imagePoint: null,
    referenceRadiusMm: null,
    exitPupilZ: null,
    towardPupil: null,
    transmittedCount: 0,
    blockedCount: 0,
    unaimedCount: 0,
    failedCount: 0,
    ...noFigures(reason),
    cells: [],
  };
}

type EngineTrace = ReturnType<typeof prepareAimedPupilTrace>["engine"];

/**
 * Trace each aimed cell with every aperture checked; on a mirrored field, trace the +px half and mirror the rest.
 *
 * @returns one result per lattice cell, in lattice order, with no cosine areas yet
 */
function traceLattice(
  state: AnalysisRequest["preparedGeometry"],
  lattice: readonly VignettingLatticeCell[],
  launch: AimedPupilLaunch,
  trace: EngineTrace,
  n: number,
  mirrored: boolean,
  reference: ReferenceSphere | null,
): VignettingCellResult[] {
  const indexAt = latticeIndex(lattice, n);
  const results: VignettingCellResult[] = new Array(lattice.length);
  const traceCell = (cell: VignettingLatticeCell): VignettingCellResult => {
    const ray = launch.rays[cell.index];
    const dark = {
      cell,
      ray,
      transmitted: false,
      failed: false,
      bulkTransmission: 0,
      exitDirectionCosines: null,
      referredDirectionCosines: null,
      referredDeviation: null,
      imageIndex: null,
      orientedCosineArea: null,
      cosineArea: null,
    };
    // A blocked ray is stopped ahead of the stop by the rim it names; an unaimed sample has no ray.
    if (ray.status !== "aimed") return dark;
    const result = trace(ray);
    // A rim, total internal reflection or a proven aperture miss vignettes the ray; any other failure is the tracer's.
    const outcome = traceRayClassification(result, state, launch.clipSemiDiameterMm);
    if (outcome === "blocked") return dark;
    if (outcome === "failed" || !(result.terminalDirection[2] > 0)) return { ...dark, failed: true };
    return {
      ...dark,
      transmitted: true,
      bulkTransmission: bulkTransmissionForTrace(state.lens, result.hits),
      exitDirectionCosines: [result.terminalDirection[0], result.terminalDirection[1]],
      ...referred(reference, result.terminalPoint, result.terminalDirection),
      imageIndex: result.finalMedium,
    };
  };
  for (const cell of lattice) {
    if (mirrored && cell.xFraction < 0) continue;
    results[cell.index] = traceCell(cell);
  }
  if (mirrored) {
    for (const cell of lattice) {
      if (cell.xFraction >= 0) continue;
      const partner = results[indexAt(cell.row, n - 1 - cell.column)!];
      const mirror = (cosines: readonly [number, number] | null) => cosines && ([-cosines[0], cosines[1]] as const);
      results[cell.index] = {
        ...partner,
        cell,
        ray: launch.rays[cell.index],
        exitDirectionCosines: mirror(partner.exitDirectionCosines),
        referredDirectionCosines: mirror(partner.referredDirectionCosines),
      };
    }
  }
  return results;
}

/** Lattice index at (row, column), or null outside the disc. */
function latticeIndex(
  lattice: readonly VignettingLatticeCell[],
  n: number,
): (row: number, column: number) => number | null {
  const grid = new Int32Array(n * n).fill(-1);
  for (const cell of lattice) grid[cell.row * n + cell.column] = cell.index;
  return (row, column) => {
    if (row < 0 || row >= n || column < 0 || column >= n) return null;
    const index = grid[row * n + column];
    return index < 0 ? null : index;
  };
}

/**
 * True when an unaimed or failed sample is the row or column neighbour of a transmitted one. Its share of the beam is
 * unknown: left out, it would read Rimmer's sum low by up to its own area, and the neighbours' derivatives would turn
 * one-sided against a cell that may carry light.
 */
function unresolvedInBeam(cells: readonly VignettingCellResult[], n: number): boolean {
  const indexAt = latticeIndex(
    cells.map((cell) => cell.cell),
    n,
  );
  const transmittedAt = (row: number, column: number) => {
    const index = indexAt(row, column);
    return index !== null && cells[index].transmitted;
  };
  return cells.some(
    ({ cell, ray, failed }) =>
      (ray.status === "unaimed" || failed) &&
      (transmittedAt(cell.row - 1, cell.column) ||
        transmittedAt(cell.row + 1, cell.column) ||
        transmittedAt(cell.row, cell.column - 1) ||
        transmittedAt(cell.row, cell.column + 1)),
  );
}

/**
 * Fill each transmitted cell's cosine-space area and sum Rimmer's integral.
 *
 * The Jacobian of (px, py) → (L, M) comes from finite differences between transmitted cells, in normalised stop
 * units of spacing 2 / n. On a mirrored field the +px half is integrated and the −px half copies its partner.
 *
 * @returns Σ n′² · T · area, or the reason the field has no relative illumination
 */
function integrateCosineAreas(
  cells: VignettingCellResult[],
  n: number,
  cellArea: number,
  mirrored: boolean,
): { sum: number | null; reason: RelativeIlluminationUnavailableReason | null } {
  const lattice = cells.map((cell) => cell.cell);
  const indexAt = latticeIndex(lattice, n);
  const h = 2 / n;
  const lit = (row: number, column: number): VignettingCellResult | null => {
    const index = indexAt(row, column);
    const cell = index === null ? null : cells[index];
    return cell && cell.transmitted ? cell : null;
  };
  /** Derivative of (L, M) along a lattice axis from transmitted neighbours, or null without one. */
  const along = (row: number, column: number, dRow: number, dColumn: number): [number, number] | null => {
    const here = lit(row, column)!.referredDirectionCosines!;
    const before = lit(row - dRow, column - dColumn)?.referredDirectionCosines ?? null;
    const after = lit(row + dRow, column + dColumn)?.referredDirectionCosines ?? null;
    if (before && after) return [(after[0] - before[0]) / (2 * h), (after[1] - before[1]) / (2 * h)];
    if (after) return [(after[0] - here[0]) / h, (after[1] - here[1]) / h];
    if (before) return [(here[0] - before[0]) / h, (here[1] - before[1]) / h];
    return null;
  };
  const dx = new Map<number, [number, number] | null>();
  const dy = new Map<number, [number, number] | null>();
  for (const cell of cells) {
    if (!cell.transmitted) continue;
    dx.set(cell.cell.index, along(cell.cell.row, cell.cell.column, 0, 1));
    dy.set(cell.cell.index, along(cell.cell.row, cell.cell.column, 1, 0));
  }
  /**
   * A missing derivative from the nearest cell along the other axis that has one, the mean of two at equal distance.
   * Each way stops at the first cell that does not transmit, so a derivative is never borrowed across a gap in the beam.
   */
  const borrow = (
    derivatives: Map<number, [number, number] | null>,
    cell: VignettingLatticeCell,
    dRow: number,
    dColumn: number,
  ): [number, number] | null => {
    const nearest = [-1, 1].map((sign) => {
      for (let step = 1; step < n; step++) {
        const index = indexAt(cell.row + sign * step * dRow, cell.column + sign * step * dColumn);
        // Only transmitted cells have an entry, null where they lack a derivative of their own.
        if (index === null || !derivatives.has(index)) return null;
        const value = derivatives.get(index);
        if (value) return { step, value };
      }
      return null;
    });
    const [before, after] = nearest;
    if (before && after && before.step === after.step)
      return [(before.value[0] + after.value[0]) / 2, (before.value[1] + after.value[1]) / 2];
    if (before && (!after || before.step < after.step)) return before.value;
    return after?.value ?? null;
  };

  let isolated = false;
  for (const cell of cells) {
    if (!cell.transmitted || (mirrored && cell.cell.xFraction < 0)) continue;
    const derivativeX = dx.get(cell.cell.index) ?? borrow(dx, cell.cell, 1, 0);
    const derivativeY = dy.get(cell.cell.index) ?? borrow(dy, cell.cell, 0, 1);
    if (!derivativeX || !derivativeY) {
      isolated = true;
      continue;
    }
    const oriented = (derivativeX[0] * derivativeY[1] - derivativeX[1] * derivativeY[0]) * cellArea;
    cell.orientedCosineArea = oriented;
    cell.cosineArea = Math.abs(oriented);
  }
  if (mirrored) {
    for (const cell of cells) {
      if (!cell.transmitted || cell.cell.xFraction >= 0) continue;
      const partner = cells[indexAt(cell.cell.row, n - 1 - cell.cell.column)!];
      // The mirror reverses orientation: (−L, M) against (−px, py) keeps det J's sign.
      cell.orientedCosineArea = partner.orientedCosineArea;
      cell.cosineArea = partner.cosineArea;
    }
  }
  const transmitted = cells.filter((cell) => cell.transmitted);
  if (transmitted.length === 0) return { sum: 0, reason: null };
  if (isolated) return { sum: null, reason: "isolated-cell" };

  // Rimmer's integral needs a one-to-one map: every cell keeps the beam's orientation and a share of its median area.
  const oriented = transmitted.map((cell) => cell.orientedCosineArea!);
  const median = medianOf(oriented);
  const orientation = Math.sign(median);
  if (orientation === 0 || oriented.some((area) => area * orientation <= RIMMER_MIN_CELL_AREA_RATIO * Math.abs(median)))
    return { sum: null, reason: "cosine-map-folds" };

  let sum = 0;
  for (const cell of transmitted) sum += cell.imageIndex! ** 2 * cell.bulkTransmission * cell.cosineArea!;
  return { sum, reason: null };
}

/** Rimmer's reference sphere: centred on the chief ray's image-plane point, through the state's exit pupil. */
export interface ReferenceSphere {
  center: Vec3;
  /** Radius in mm; Infinity where the exit pupil is at infinity (image-space telecentric). */
  radius: number;
  /** Unit vector from the centre toward the exit pupil, which picks the sphere's pupil-side crossing. */
  towardPupil: Vec3;
}

/** Fraction of the half field whose real chief ray locates the current state's exit pupil. */
export const EXIT_PUPIL_PROBE_FRACTION = 0.01;

/** Trace to the image plane with no aperture checks, for the chief rays that name points rather than carry light. */
function uncheckedTrace(state: PreparedGeometry, launchBoundT: number | undefined) {
  return prepareEngineTrace(state, {
    checkSemiDiameter: false,
    stopOnClip: false,
    directionNormalized: true,
    launchBoundT,
    capture: "terminal",
  });
}

/**
 * The current state's exit pupil: where the real chief ray of a field near the axis crosses the axis in image space.
 *
 * It is traced at the state's own focus and zoom, so it follows focusing and passes through infinity between zoom
 * positions as the pupil does, where an interpolated station table would cross the pole near the last surface. The
 * probe field is `EXIT_PUPIL_PROBE_FRACTION` of the half field, launched through the aimed pupil launch and traced
 * without aperture checks.
 *
 * @param request - prepared geometry and stop radius
 * @param fields - the state's field geometry; the tab uses the analysis field geometry
 * @returns the exit pupil's z in mm, Infinity for an image-space telecentric state, or null without a chief ray
 */
export function exitPupilZ(request: AnalysisRequest, fields: FieldGeometryState): number | null {
  const state = request.preparedGeometry;
  const geometry = computeOffAxisFieldGeometry(state, EXIT_PUPIL_PROBE_FRACTION, fields);
  if (!geometry || isOffAxisVectorFieldGeometry(geometry)) return null;
  const launch = prepareAimedPupilLaunch(request, [], geometry);
  if (!launch || launch.chief.status !== "aimed") return null;
  const result = uncheckedTrace(state, launch.launchBoundT)(launch.chief);
  const [p, d] = [result.terminalPoint, result.terminalDirection];
  if (result.status === "failed" || !(d[2] > 0)) return null;
  if (!(Math.abs(d[1]) > 0)) return Infinity;
  return p[2] - (p[1] * d[2]) / d[1];
}

/**
 * The field's reference sphere, or null without a chief ray to the image plane.
 *
 * The chief ray is the launch's (0, 0) ray traced without aperture checks: it names the image point whether or not a
 * rim vignettes it. The sphere passes through the chief ray's crossing of the exit-pupil plane.
 *
 * @param state - prepared geometry
 * @param launch - the field's aimed pupil launch
 * @param geometry - the field's scalar geometry, for the image plane
 * @param xpZ - the state's exit pupil z (`exitPupilZ`)
 * @returns the sphere, with radius Infinity for an image-space telecentric state, or null
 */
export function referenceSphere(
  state: PreparedGeometry,
  launch: AimedPupilLaunch,
  geometry: OffAxisFieldGeometry,
  xpZ: number | null,
): ReferenceSphere | null {
  const chief = launch.chief;
  if (chief.status !== "aimed" || xpZ === null) return null;
  const result = uncheckedTrace(state, launch.launchBoundT)(chief);
  const [p, d] = [result.terminalPoint, result.terminalDirection];
  if (result.status === "failed" || !(d[2] > 0)) return null;
  const toImage = (geometry.imagePlaneZ - p[2]) / d[2];
  const center: Vec3 = [p[0] + d[0] * toImage, p[1] + d[1] * toImage, geometry.imagePlaneZ];
  if (!isFinite(xpZ)) return { center, radius: Infinity, towardPupil: [-d[0], -d[1], -d[2]] };
  const toPupil = (xpZ - p[2]) / d[2];
  const pupil: Vec3 = [p[0] + d[0] * toPupil, p[1] + d[1] * toPupil, xpZ];
  const offset: Vec3 = [pupil[0] - center[0], pupil[1] - center[1], pupil[2] - center[2]];
  const radius = Math.hypot(...offset);
  if (!(radius > 0)) return null;
  return { center, radius, towardPupil: [offset[0] / radius, offset[1] / radius, offset[2] / radius] };
}

/** A transmitted ray's referred direction cosines and deviation, or nulls without them. */
function referred(
  sphere: ReferenceSphere | null,
  point: Vec3,
  direction: Vec3,
): Pick<VignettingCellResult, "referredDirectionCosines" | "referredDeviation"> {
  const unit = sphere && referredDirection(sphere, point, direction);
  if (!unit) return { referredDirectionCosines: null, referredDeviation: null };
  return {
    referredDirectionCosines: [unit[0], unit[1]],
    referredDeviation: Math.hypot(unit[0] - direction[0], unit[1] - direction[1], unit[2] - direction[2]),
  };
}

/**
 * A ray's direction referred to the image point (Rimmer's Eq. 3): the unit vector of the segment between the ray's
 * pupil-side crossing of the reference sphere and the sphere's centre, oriented along the ray. At infinite radius this
 * is the ray's own direction. The pupil side can lie before the image point or, where the exit pupil is beyond the
 * image plane, after it.
 *
 * @param sphere - the field's reference sphere
 * @param point - a point on the ray in image space
 * @param direction - the ray's unit direction in image space
 * @returns the referred unit vector, or null when the ray misses the sphere's pupil side
 */
export function referredDirection(sphere: ReferenceSphere, point: Vec3, direction: Vec3): Vec3 | null {
  if (!isFinite(sphere.radius)) return direction;
  const { center, radius, towardPupil } = sphere;
  const offset: Vec3 = [point[0] - center[0], point[1] - center[1], point[2] - center[2]];
  const b = offset[0] * direction[0] + offset[1] * direction[1] + offset[2] * direction[2];
  const discriminant = b * b - (offset[0] ** 2 + offset[1] ** 2 + offset[2] ** 2 - radius * radius);
  if (!(discriminant >= 0)) return null;
  // Of the two crossings, the one on the exit pupil's hemisphere of the sphere.
  const crossings = [-b - Math.sqrt(discriminant), -b + Math.sqrt(discriminant)].map(
    (t): Vec3 => [offset[0] + direction[0] * t, offset[1] + direction[1] * t, offset[2] + direction[2] * t],
  );
  const side = (crossing: Vec3) =>
    crossing[0] * towardPupil[0] + crossing[1] * towardPupil[1] + crossing[2] * towardPupil[2];
  const crossing = side(crossings[0]) >= side(crossings[1]) ? crossings[0] : crossings[1];
  if (!(side(crossing) > 0)) return null;
  // The segment's direction, oriented with the ray: toward the centre from a crossing before it, away after it.
  const sign = crossing[0] * direction[0] + crossing[1] * direction[1] + crossing[2] * direction[2] > 0 ? 1 : -1;
  return [(sign * crossing[0]) / radius, (sign * crossing[1]) / radius, (sign * crossing[2]) / radius];
}

/** Median of a non-empty list. */
function medianOf(values: readonly number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = sorted.length >> 1;
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}
