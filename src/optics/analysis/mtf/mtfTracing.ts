/**
 * Shared pupil sampling for MTF. Exact hits stay in physical millimeters.
 *
 * Pupil coordinates are positions on the real aperture stop, as in OpticStudio with ray aiming on and in CODE V: each
 * wavelength of a field launches the stop lattice (`pupils/stopLattice.ts`) through the shared aimed launch
 * (`pupils/aimedPupil.ts`), cells evenly spaced on the stop and of equal weight, and traces every aimed ray with every
 * aperture checked. A field the launch reaches only through the bounding sphere keeps the launch-plane sampling this
 * module used before: a footprint scan of the launch plane (`mtfFootprint.ts`) and equal launch-plane cells over it.
 */

import { runtimeView } from "../../prescription/runtimeView.js";
import type { MtfOptions, MtfSpectralLine, MtfSupport } from "../../../types/mtf.js";
import type { PreparedGeometry, Ray3, Vec3 } from "../../types.js";
import type { EngineTraceResult, TraceOptions } from "../../trace/types.js";
import { solveChiefRayForRuntimeLens } from "../../state/fieldAdapters.js";
import { solveScalarRoot } from "../../math/rootSolve.js";
import { prepareEngineTrace, traceEngineRay } from "../../trace/rayAdapters.js";
import { bulkTransmissionForTrace } from "../../trace/bulkAbsorption.js";
import { anchoredIndexTable } from "../../chromatic/indexResolver.js";
import type { MtfSpot } from "./mtfMath.js";
import { mtfFiniteObjectPoint } from "./mtfConjugates.js";
import { findMtfFootprint } from "./mtfFootprint.js";
import type { MtfFootprint } from "./mtfFootprint.js";
import { traceRayClassification } from "../../trace/rayClassification.js";
import { mirrorSymmetricAboutMeridian } from "../../trace/symmetry.js";
import { launchSurfaceForFieldDeg } from "../../field/projection.js";
import { prepareAimedStopLatticeForState } from "../pupils/aimedPupil.js";
import type { AimedPupilFieldGeometry, AimedPupilSpectrum, AimedStopLattice } from "../pupils/aimedPupil.js";

export interface MtfPupilRay extends MtfSpot {
  column: number;
  row: number;
  trace: Pick<
    EngineTraceResult,
    "input" | "terminalPoint" | "terminalDirection" | "finalMedium" | "opticalPathLengthMm"
  >;
}

/** Footprint sides whose guard band transmitted rays, so flux may lie outside the sampled box. */
export interface MtfOpenBorders {
  x: boolean;
  y0: boolean;
  y1: boolean;
}

/** Where a bundle's pupil is sampled: evenly on the real stop, or on the launch plane for a bounding-sphere field. */
export type MtfPupilSampling = "stop" | "launch-plane";

export interface MtfBundle {
  sampling: MtfPupilSampling;
  rays: MtfPupilRay[];
  /** Samples a rim, total internal reflection or a proven aperture miss stops, on either side of the stop. */
  blocked: number;
  /** Aimed samples whose full trace failed for another reason, or never reached the image plane. */
  failed: number;
  /** Stop samples no ray could be aimed at; 0 on the launch plane. */
  unaimed: number;
  /** Weight of the unaimed and failed samples, in the units of ray weights: what they would carry fully transmitted. */
  unresolvedWeight: number;
  /** Unaimed or failed samples beside the transmitted beam: the row or column neighbour of a transmitted cell. */
  unresolvedInBeam: number;
  /** Weight of the samples beside the beam, in the units of `unresolvedWeight`: the share a field is judged by. */
  unresolvedInBeamWeight: number;
  chief: MtfSpot;
  /** True when the reference chief ray is itself stopped by an aperture. */
  chiefClipped: boolean;
  columns: number;
  rows: number;
  /** True when one half pupil was traced and mirrored about the meridional plane. */
  mirrored: boolean;
  /** Cell pitch in mm: on the stop for stop sampling, on the launch plane otherwise. */
  stepMm: number;
  objectPoint?: Vec3;
  /** Launch-plane sampling only: footprint sides whose guard band carried flux. */
  openBorders: MtfOpenBorders;
  /** Stop sampling only: the aimed lattice, which seeds the next finer one of the same wavelength. */
  lattice?: AimedStopLattice;
}

/** One field's chief-ray launch, shared by every wavelength and refinement level. */
export interface MtfFieldLaunch {
  fieldAngleDeg: number;
  /** Collimated launch direction; a finite source launches every ray from `objectPoint`. */
  direction: Vec3;
  objectPoint?: Vec3;
  /** Axial position of the launch plane in mm. */
  leadZ: number;
  /** Chief-ray height on the launch plane in mm. */
  centerY: number;
  /**
   * The field as the aimed launch takes it: the solved chief's slope and height for a collimated field, the object point
   * for a finite one. Null for a field launched from the bounding sphere, which keeps launch-plane sampling.
   */
  aim: AimedPupilFieldGeometry | null;
}

/**
 * Intersect a trace's final segment with the axial image plane.
 *
 * A zero-length transfer is a landing: some prescriptions put the last plate surface on the
 * image plane itself.
 *
 * @param state - prepared optical state
 * @param trace - exact trace ending after the last surface
 * @param imagePlaneZ - axial image-plane position in mm
 * @returns landing point with bulk-transmission weight, or null when the plane is not ahead
 */
export function mtfImagePoint(
  state: PreparedGeometry,
  trace: EngineTraceResult,
  imagePlaneZ = state.imgZ,
): MtfSpot | null {
  if (trace.status !== "ok" || Math.abs(trace.terminalDirection[2]) < 1e-12) return null;
  const distance = (imagePlaneZ - trace.terminalPoint[2]) / trace.terminalDirection[2];
  if (!(distance >= -1e-9)) return null;
  const transfer = Math.max(0, distance);
  return {
    x: trace.terminalPoint[0] + transfer * trace.terminalDirection[0],
    y: trace.terminalPoint[1] + transfer * trace.terminalDirection[1],
    weight: bulkTransmissionForTrace(state.lens, trace.hits),
  };
}

// Keep several complete spectral grids warm without retaining an arbitrary wavelength history.
const MTF_INDEX_TABLE_CACHE_LIMIT = 64;
const indexTablesByState = new WeakMap<PreparedGeometry, Map<number, Float64Array>>();

/**
 * Surface-index callback for one MTF wavelength.
 *
 * Reference-wavelength runs keep the authored indices unless mixed d/e references need a
 * physical conversion. Resolved runs use indices anchored to each authored reference, so the
 * design's focus at its reference line is unchanged.
 *
 * @param state - prepared optical state
 * @param support - support record selecting authored or resolved indices
 * @param wavelengthNm - traced wavelength in nanometres
 * @returns trace callback, or undefined for authored reference indices
 */
export function mtfIndexResolver(
  state: PreparedGeometry,
  support: MtfSupport,
  wavelengthNm: number,
): TraceOptions["indexAtSurface"] {
  if (!support.useResolvedReference) return undefined;
  let tables = indexTablesByState.get(state);
  if (!tables) {
    tables = new Map();
    indexTablesByState.set(state, tables);
  }
  let table = tables.get(wavelengthNm);
  if (!table) {
    table = anchoredIndexTable(state, wavelengthNm);
    if (tables.size >= MTF_INDEX_TABLE_CACHE_LIMIT) {
      const oldest = tables.keys().next().value;
      if (oldest !== undefined) tables.delete(oldest);
    }
    tables.set(wavelengthNm, table);
  }
  const resolved = table;
  return (surfaceIndex) => resolved[surfaceIndex];
}

/**
 * Pupil-sample trace options for one wavelength.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record selecting authored or resolved indices
 * @param line - traced spectral line
 * @param opticalPath - true to accumulate each ray's optical path, for the wave-optics reference
 * @returns aperture-checked options that stop at the first clip
 */
export function mtfTraceOptions(
  state: PreparedGeometry,
  options: MtfOptions,
  support: MtfSupport,
  line: MtfSpectralLine,
  opticalPath = false,
): TraceOptions {
  return {
    checkSemiDiameter: true,
    stopSemiDiameter: options.stopSemiDiameterMm,
    stopOnClip: true,
    directionNormalized: true,
    wavelengthNm: line.wavelengthNm,
    recordOpticalPath: opticalPath,
    indexAtSurface: mtfIndexResolver(state, support, line.wavelengthNm),
  };
}

/**
 * Ray launched at an offset from the chief ray on the field's launch plane.
 *
 * @param launch - field launch
 * @param x - sagittal offset in mm
 * @param y - tangential offset in mm
 * @returns collimated ray, or a ray from the finite source point
 */
export function mtfLaunchRay(launch: MtfFieldLaunch, x: number, y: number): Ray3 {
  const origin: Vec3 = [x, launch.centerY + y, launch.leadZ];
  const source = launch.objectPoint;
  if (!source) return { origin, direction: launch.direction };
  const dx = origin[0] - source[0];
  const dy = origin[1] - source[1];
  const dz = origin[2] - source[2];
  const length = Math.hypot(dx, dy, dz);
  return { origin, direction: [dx / length, dy / length, dz / length] };
}

/**
 * Resolve one field's chief-ray launch.
 *
 * Collimated fields launch along the solved chief direction. Finite sources aim the chief
 * through the physical stop center at the reference wavelength; the same source point and
 * launch plane then serve every wavelength and grid. The chief places the field's image height;
 * pupil samples are aimed per wavelength from `aim`.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record, including any finite conjugate
 * @param fieldAngleDeg - chief-ray field angle in degrees
 * @returns launch, or null when no chief ray can be established
 */
export function prepareMtfFieldLaunch(
  state: PreparedGeometry,
  options: MtfOptions,
  support: MtfSupport,
  fieldAngleDeg: number,
): MtfFieldLaunch | null {
  const constants = state.lens.constants;
  const chief = solveChiefRayForRuntimeLens(
    fieldAngleDeg,
    state.focusT,
    state.zoomT,
    runtimeView(state.lens),
    undefined,
    state.aberrationT,
  );
  const objectPoint = support.conjugate ? mtfFiniteObjectPoint(state, support.conjugate, fieldAngleDeg) : undefined;
  if (objectPoint === null || (!objectPoint && chief.status !== "converged")) return null;
  const norm = Math.hypot(1, chief.uField);
  const direction: Vec3 = [0, chief.uField / norm, 1 / norm];
  const firstZ = Math.min(0, state.surfaces[0].profile.sag(state.surfaces[0].sd));
  const leadZ = Math.max(
    firstZ - Math.max(10, constants.rayLead ?? 0),
    objectPoint ? (objectPoint[2] + firstZ) / 2 : -Infinity,
  );
  const seedY = chief.status === "converged" ? chief.yLaunch + leadZ * chief.uField : 0;
  // Finite sources aim from the object point; a collimated field launches on the first-vertex plane at its solved chief.
  const pupilAim: AimedPupilFieldGeometry | null = objectPoint
    ? { kind: "finite-object", objectPoint, leadZ }
    : launchSurfaceForFieldDeg(fieldAngleDeg, state.lens.projection.config) === "object-plane"
      ? { uField: chief.uField, yChief: chief.yLaunch }
      : null;
  const launch: MtfFieldLaunch = { fieldAngleDeg, direction, objectPoint, leadZ, centerY: seedY, aim: pupilAim };
  if (!objectPoint) return launch;
  const referenceNm = support.spectralLines[0]?.wavelengthNm ?? support.referenceWavelengthNm;
  const aimOptions: TraceOptions<"terminal"> = {
    capture: "terminal",
    stopAt: state.lens.stop.surfaceIndex + 1,
    checkSemiDiameter: false,
    directionNormalized: true,
    wavelengthNm: referenceNm,
    indexAtSurface: mtfIndexResolver(state, support, referenceNm),
  };
  const traceAim = prepareEngineTrace(state, aimOptions);
  const aim = solveScalarRoot(
    (y) => {
      const trace = traceAim(mtfLaunchRay(launch, 0, y - seedY));
      return trace.status === "ok" ? trace.terminalPoint[1] : null;
    },
    {
      initialGuess: seedY,
      initialHalfWidth: Math.max(1, options.pupilSemiDiameterMm),
      residualTolerance: 1e-8,
      scanSamples: 16,
    },
  );
  if (aim.status !== "converged" || aim.root === null) return null;
  return { ...launch, centerY: aim.root };
}

/**
 * Find the launch-plane region whose rays reach the image at the reference wavelength.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record
 * @param launch - field launch
 * @param growths - doublings of the scanned box before giving up; the full search by default
 * @returns footprint box relative to the chief launch point, or null when the field is vignetted
 */
export function findMtfFieldFootprint(
  state: PreparedGeometry,
  options: MtfOptions,
  support: MtfSupport,
  launch: MtfFieldLaunch,
  growths?: number,
): MtfFootprint | null {
  const traceOptions = {
    ...mtfTraceOptions(state, options, support, support.spectralLines[0]),
    capture: "terminal",
  } as const;
  const traceRay = prepareEngineTrace(state, traceOptions);
  return findMtfFootprint(
    (x, y) => traceRayClassification(traceRay(mtfLaunchRay(launch, x, y)), state, options.stopSemiDiameterMm),
    options.pupilSemiDiameterMm,
    mtfMirrorSymmetric(state),
    growths,
  );
}

/** Uniform launch grid of square cells covering a footprint, symmetric about the meridional plane. */
export interface MtfLaunchGrid {
  columns: number;
  rows: number;
  step: number;
  x0: number;
  y0: number;
}

/**
 * Lay square cells over a footprint box, `gridSize` of them across the beam's larger dimension.
 *
 * On axis this reproduces a uniform entrance-pupil grid; the margin cells around the beam are
 * blocked and cost only a partial trace.
 *
 * @param footprint - launch-plane box, symmetric in x
 * @param gridSize - cells across the estimated beam's larger dimension
 * @returns grid with an even column count, so no sample lies on the meridional plane
 */
export function mtfLaunchGrid(footprint: MtfFootprint, gridSize: number): MtfLaunchGrid {
  const halfWidth = Math.max(Math.abs(footprint.x0), Math.abs(footprint.x1));
  const height = footprint.y1 - footprint.y0;
  const step = Math.max(footprint.beamWidthMm, footprint.beamHeightMm) / gridSize;
  const columns = 2 * Math.max(1, Math.ceil(halfWidth / step - 1e-9));
  const rows = Math.max(1, Math.ceil(height / step - 1e-9));
  return {
    columns,
    rows,
    step,
    x0: (-columns * step) / 2,
    y0: (footprint.y0 + footprint.y1) / 2 - (rows * step) / 2,
  };
}

/**
 * True when every surface is mirror-symmetric in x, so a meridional field needs only one half pupil.
 *
 * @param state - prepared optical state
 * @returns whether mirrored half-pupil tracing is exact
 */
export function mtfMirrorSymmetric(state: PreparedGeometry): boolean {
  return mirrorSymmetricAboutMeridian(state);
}

/**
 * The spectrum a spectral line is aimed at: its anchored indices on a resolved run. A run on the authored reference
 * indices aims as the other tabs' default launch does, and shares its field model.
 *
 * @param state - prepared optical state
 * @param support - support record selecting authored or resolved indices
 * @param line - traced spectral line
 * @returns aimed-launch spectrum, or undefined for the authored indices
 */
export function mtfAimSpectrum(
  state: PreparedGeometry,
  support: MtfSupport,
  line: MtfSpectralLine,
): AimedPupilSpectrum | undefined {
  const indexAtSurface = mtfIndexResolver(state, support, line.wavelengthNm);
  return indexAtSurface ? { wavelengthNm: line.wavelengthNm, indexAtSurface, indexKey: "mtf-anchored" } : undefined;
}

/**
 * Aim one wavelength's stop lattice for a field: `gridSize` cells across the stop's diameter (`stopLattice`), each a
 * ray from the field's object point to its position on the real stop at this wavelength.
 *
 * @param state - prepared optical state
 * @param options - MTF request, supplying the stop radius
 * @param support - support record selecting authored or resolved indices
 * @param launch - field launch
 * @param gridSize - cells across the stop's diameter
 * @param line - traced spectral line
 * @param coarse - this wavelength's lattice half as fine, which seeds the aim when it is the field's own
 * @returns aimed lattice, or null for a bounding-sphere field or a request without a stop
 */
export function aimMtfStopLattice(
  state: PreparedGeometry,
  options: MtfOptions,
  support: MtfSupport,
  launch: MtfFieldLaunch,
  gridSize: number,
  line: MtfSpectralLine,
  coarse?: AimedStopLattice | null,
): AimedStopLattice | null {
  if (!launch.aim) return null;
  return prepareAimedStopLatticeForState(
    state,
    { stopSemiDiameterMm: options.stopSemiDiameterMm, launchScaleMm: options.pupilSemiDiameterMm },
    gridSize,
    launch.aim,
    mtfAimSpectrum(state, support, line),
    coarse,
  );
}

/**
 * Trace one wavelength's pupil on the real stop: aim the stop lattice, then trace it (`traceMtfLattice`).
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record
 * @param launch - field launch
 * @param gridSize - cells across the stop's diameter
 * @param line - traced spectral line
 * @param imagePlaneZ - axial image-plane position in mm
 * @param extras - `reference`: image point that stands in when this wavelength's chief cannot be traced to the
 *   plane; `opticalPath`: record each ray's optical path; `coarse`: this wavelength's lattice half as fine
 * @returns traced bundle, or null for a bounding-sphere field or when no reference chief point exists
 */
export function traceMtfStopBundle(
  state: PreparedGeometry,
  options: MtfOptions,
  support: MtfSupport,
  launch: MtfFieldLaunch,
  gridSize: number,
  line: MtfSpectralLine,
  imagePlaneZ = state.imgZ,
  extras: { reference?: MtfSpot; opticalPath?: boolean; coarse?: AimedStopLattice | null } = {},
): MtfBundle | null {
  const lattice = aimMtfStopLattice(state, options, support, launch, gridSize, line, extras.coarse);
  return lattice && traceMtfLattice(state, options, support, launch, lattice, line, imagePlaneZ, extras);
}

/**
 * Trace an aimed stop lattice with every aperture checked.
 *
 * Every lit cell carries the same weight times its bulk transmission: uniform amplitude on the stop. A blocked sample,
 * and an aimed ray whose full trace a rim, total internal reflection or a proven aperture miss stops, is vignetted. An
 * unaimed sample, and an aimed ray whose full trace fails otherwise or never reaches the image plane, is unresolved:
 * counted, never replaced, and charged to the unresolved weight at full transmission; those beside the transmitted
 * beam are counted and weighed apart, since a field is judged by them. The stop sits at the lattice's
 * clip radius, so a rim cell aimed at R is admitted by the stop it was aimed at. On a lens mirror-symmetric about the
 * meridian the +x half is traced and the −x half mirrors it.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record
 * @param launch - field launch, supplying a finite object point
 * @param lattice - aimed stop lattice of this wavelength
 * @param line - traced spectral line
 * @param imagePlaneZ - axial image-plane position in mm
 * @param extras - `reference`: image point that stands in when this wavelength's chief cannot be traced to the
 *   plane; `opticalPath`: record each ray's optical path
 * @returns traced bundle, or null when no reference chief point exists
 */
export function traceMtfLattice(
  state: PreparedGeometry,
  options: MtfOptions,
  support: MtfSupport,
  launch: Pick<MtfFieldLaunch, "objectPoint">,
  lattice: AimedStopLattice,
  line: MtfSpectralLine,
  imagePlaneZ = state.imgZ,
  extras: { reference?: MtfSpot; opticalPath?: boolean } = {},
): MtfBundle | null {
  const traceOptions: TraceOptions = {
    ...mtfTraceOptions(state, options, support, line, extras.opticalPath),
    stopSemiDiameter: lattice.clipSemiDiameterMm,
    launchBoundT: lattice.launchBoundT,
  };
  const traceRay = prepareEngineTrace(state, traceOptions);
  // The chief is a geometric reference, not a pupil sample: trace it through every surface even when an aperture clips
  // it, and record the clipping separately.
  const chief = lattice.chief.status === "aimed" ? lattice.chief : null;
  const chiefTrace =
    chief && traceEngineRay(state, chief, { ...traceOptions, checkSemiDiameter: false, stopOnClip: false });
  // A clipped chief runs over surface zones beyond their rims, where another wavelength can lose it.
  const chiefPoint = (chiefTrace && mtfImagePoint(state, chiefTrace, imagePlaneZ)) ?? extras.reference;
  if (!chiefPoint) return null;
  const chiefClipped = !chief || traceRayClassification(traceRay(chief), state, lattice.clipSemiDiameterMm) !== "valid";
  const n = lattice.cellsAcross;
  // A meridional field of an x-symmetric lens images each half pupil as the mirror of the other; an even lattice has no
  // cell on the meridian.
  const mirror = mtfMirrorSymmetric(state) && n % 2 === 0;
  const bundle: MtfBundle = {
    sampling: "stop",
    rays: [],
    blocked: 0,
    failed: 0,
    unaimed: 0,
    unresolvedWeight: 0,
    unresolvedInBeam: 0,
    unresolvedInBeamWeight: 0,
    chief: chiefPoint,
    chiefClipped,
    columns: n,
    rows: n,
    mirrored: mirror,
    stepMm: (2 * lattice.stopSemiDiameterMm) / n,
    objectPoint: launch.objectPoint,
    openBorders: { x: false, y0: false, y1: false },
    lattice,
  };
  // Cell outcomes on the full lattice, for finding unresolved cells beside the beam.
  const outcome = new Uint8Array(n * n);
  const mark = (row: number, column: number, value: number) => {
    outcome[row * n + column] = value;
    if (mirror) outcome[row * n + n - 1 - column] = value;
  };
  // Every stop cell carries the same weight, so each unresolved cell would carry 1.
  const unresolvedWeights = new Float64Array(n * n).fill(1);
  lattice.cells.forEach((cell, i) => {
    if (mirror && cell.xFraction < 0) return;
    const samples = mirror ? 2 : 1;
    const ray = lattice.rays[i];
    if (ray.status === "blocked") {
      bundle.blocked += samples;
      return;
    }
    if (ray.status === "unaimed") {
      bundle.unaimed += samples;
      bundle.unresolvedWeight += samples;
      mark(cell.row, cell.column, CELL_UNRESOLVED);
      return;
    }
    const trace = traceRay(ray);
    const classification = traceRayClassification(trace, state, lattice.clipSemiDiameterMm);
    if (classification === "blocked") {
      bundle.blocked += samples;
      return;
    }
    const point = classification === "valid" ? mtfImagePoint(state, trace, imagePlaneZ) : null;
    if (!point) {
      bundle.failed += samples;
      bundle.unresolvedWeight += samples;
      mark(cell.row, cell.column, CELL_UNRESOLVED);
      return;
    }
    mark(cell.row, cell.column, CELL_LIT);
    const record: MtfPupilRay["trace"] = {
      input: trace.input,
      terminalPoint: trace.terminalPoint,
      terminalDirection: trace.terminalDirection,
      finalMedium: trace.finalMedium,
      opticalPathLengthMm: trace.opticalPathLengthMm,
    };
    const ray0: MtfPupilRay = { ...point, column: cell.column, row: cell.row, trace: record };
    bundle.rays.push(ray0);
    if (mirror) bundle.rays.push(mirrorPupilRay(ray0, n));
  });
  const beside = unresolvedBesideBeam(outcome, unresolvedWeights, n, n);
  bundle.unresolvedInBeam = beside.count;
  bundle.unresolvedInBeamWeight = beside.weight;
  return bundle;
}

/** A lattice cell's outcome, for finding unresolved cells beside the beam; 0 is a dark (blocked) cell. */
const CELL_LIT = 1;
const CELL_UNRESOLVED = 2;

/**
 * Count and weigh the unresolved cells that are the row or column neighbour of a lit cell, the vignetting tab's
 * `unresolved-in-beam` rule.
 *
 * @param outcome - cell outcomes in row-major order
 * @param weights - the weight each unresolved cell would carry, in the same order
 * @param columns - cells per row
 * @param rows - rows
 * @returns how many unresolved cells lie beside the transmitted beam, and their weight
 */
function unresolvedBesideBeam(
  outcome: Uint8Array,
  weights: Float64Array,
  columns: number,
  rows: number,
): { count: number; weight: number } {
  const lit = (row: number, column: number) =>
    row >= 0 && column >= 0 && row < rows && column < columns && outcome[row * columns + column] === CELL_LIT;
  let count = 0;
  let weight = 0;
  for (let row = 0; row < rows; row++)
    for (let column = 0; column < columns; column++)
      if (
        outcome[row * columns + column] === CELL_UNRESOLVED &&
        (lit(row - 1, column) || lit(row + 1, column) || lit(row, column - 1) || lit(row, column + 1))
      ) {
        count++;
        weight += weights[row * columns + column];
      }
  return { count, weight };
}

/**
 * Trace one wavelength's pupil samples over a launch-plane footprint: the sampling of a field launched from the
 * bounding sphere, which the stop lattice does not cover. Cells carry equal launch-plane flux (solid-angle weights for a
 * finite source).
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record
 * @param launch - field launch
 * @param footprint - launch-plane box from `findMtfFieldFootprint`
 * @param gridSize - cells across the beam's larger dimension
 * @param line - traced spectral line
 * @param imagePlaneZ - axial image-plane position in mm
 * @param extras - `reference`: image point that stands in when this wavelength's chief cannot be traced to the
 *   plane; `opticalPath`: record each ray's optical path
 * @returns traced bundle, or null when no reference chief point exists
 */
export function traceMtfLaunchPlaneBundle(
  state: PreparedGeometry,
  options: MtfOptions,
  support: MtfSupport,
  launch: MtfFieldLaunch,
  footprint: MtfFootprint,
  gridSize: number,
  line: MtfSpectralLine,
  imagePlaneZ = state.imgZ,
  extras: { reference?: MtfSpot; opticalPath?: boolean } = {},
): MtfBundle | null {
  const traceOptions = mtfTraceOptions(state, options, support, line, extras.opticalPath);
  const traceRay = prepareEngineTrace(state, traceOptions);
  // The chief is a geometric reference, not a pupil sample: trace it through every surface even
  // when an aperture clips it, and record the clipping separately.
  const chiefRay = mtfLaunchRay(launch, 0, 0);
  const chiefTrace = traceEngineRay(state, chiefRay, { ...traceOptions, checkSemiDiameter: false, stopOnClip: false });
  // A clipped chief runs over surface zones beyond their rims, where another wavelength can lose it.
  const chiefPoint = mtfImagePoint(state, chiefTrace, imagePlaneZ) ?? extras.reference;
  if (!chiefPoint) return null;
  const chiefClipped = traceRayClassification(traceRay(chiefRay), state, options.stopSemiDiameterMm) !== "valid";
  const grid = mtfLaunchGrid(footprint, gridSize);
  // A meridional field of an x-symmetric lens images each half pupil as the mirror of the other.
  const mirror = mtfMirrorSymmetric(state);
  const bundle: MtfBundle = {
    sampling: "launch-plane",
    rays: [],
    blocked: 0,
    failed: 0,
    unaimed: 0,
    unresolvedWeight: 0,
    unresolvedInBeam: 0,
    unresolvedInBeamWeight: 0,
    chief: chiefPoint,
    chiefClipped,
    columns: grid.columns,
    rows: grid.rows,
    mirrored: mirror,
    stepMm: grid.step,
    objectPoint: launch.objectPoint,
    openBorders: { x: false, y0: false, y1: false },
  };
  const source = launch.objectPoint;
  const chiefDistance = source ? Math.hypot(...chiefTrace.input.origin.map((v, i) => v - source[i])) : 0;
  const firstColumn = mirror ? grid.columns / 2 : 0;
  const outcome = new Uint8Array(grid.rows * grid.columns);
  const unresolvedWeights = new Float64Array(grid.rows * grid.columns);
  const mark = (row: number, column: number, value: number, weight = 0) => {
    for (const c of mirror ? [column, grid.columns - 1 - column] : [column]) {
      outcome[row * grid.columns + c] = value;
      unresolvedWeights[row * grid.columns + c] = weight;
    }
  };
  for (let row = 0; row < grid.rows; row++) {
    for (let column = firstColumn; column < grid.columns; column++) {
      const x = grid.x0 + (column + 0.5) * grid.step;
      const y = grid.y0 + (row + 0.5) * grid.step;
      const trace = traceRay(mtfLaunchRay(launch, x, y));
      const samples = mirror ? 2 : 1;
      // Solid angle subtended by equal cells of the launch plane: cos(theta) / distance².
      const launchWeight = source
        ? (chiefDistance / Math.hypot(...trace.input.origin.map((v, i) => v - source[i]))) ** 3
        : 1;
      const classification = traceRayClassification(trace, state, options.stopSemiDiameterMm);
      if (classification === "blocked") {
        bundle.blocked += samples;
        continue;
      }
      const point = classification === "valid" ? mtfImagePoint(state, trace, imagePlaneZ) : null;
      if (!point) {
        bundle.failed += samples;
        bundle.unresolvedWeight += samples * launchWeight;
        mark(row, column, CELL_UNRESOLVED, launchWeight);
        continue;
      }
      mark(row, column, CELL_LIT);
      point.weight *= launchWeight;
      if (Math.abs(x) > footprint.x1 - footprint.guardMm) bundle.openBorders.x = true;
      if (y < footprint.y0 + footprint.guardMm) bundle.openBorders.y0 = true;
      if (y > footprint.y1 - footprint.guardMm) bundle.openBorders.y1 = true;
      const record: MtfPupilRay["trace"] = {
        input: trace.input,
        terminalPoint: trace.terminalPoint,
        terminalDirection: trace.terminalDirection,
        finalMedium: trace.finalMedium,
        opticalPathLengthMm: trace.opticalPathLengthMm,
      };
      bundle.rays.push({ ...point, column, row, trace: record });
      if (mirror) bundle.rays.push(mirrorPupilRay({ ...point, column, row, trace: record }, grid.columns));
    }
  }
  const beside = unresolvedBesideBeam(outcome, unresolvedWeights, grid.columns, grid.rows);
  bundle.unresolvedInBeam = beside.count;
  bundle.unresolvedInBeamWeight = beside.weight;
  return bundle;
}

function mirrorPupilRay(ray: MtfPupilRay, columns: number): MtfPupilRay {
  const flip = (v: Vec3): Vec3 => [-v[0], v[1], v[2]];
  return {
    x: -ray.x,
    y: ray.y,
    weight: ray.weight,
    column: columns - 1 - ray.column,
    row: ray.row,
    trace: {
      input: { origin: flip(ray.trace.input.origin), direction: flip(ray.trace.input.direction) },
      terminalPoint: flip(ray.trace.terminalPoint),
      terminalDirection: flip(ray.trace.terminalDirection),
      finalMedium: ray.trace.finalMedium,
      opticalPathLengthMm: ray.trace.opticalPathLengthMm,
    },
  };
}

/**
 * Trace one field's pupil at one grid size in a single call: on the real stop, or over a launch-plane footprint for a
 * bounding-sphere field.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record
 * @param fieldAngleDeg - chief-ray field angle in degrees
 * @param gridSize - cells across the stop's diameter (the beam's larger dimension on the launch plane)
 * @param line - traced spectral line, the reference line by default
 * @param imagePlaneZ - axial image-plane position in mm
 * @param opticalPath - true to record each ray's optical path, for the wave-optics reference
 * @returns traced bundle, or null when the field has no chief ray or no transmitted beam
 */
export function traceMtfFieldPupil(
  state: PreparedGeometry,
  options: MtfOptions,
  support: MtfSupport,
  fieldAngleDeg: number,
  gridSize: number,
  line: MtfSpectralLine = support.spectralLines[0],
  imagePlaneZ = state.imgZ,
  opticalPath = false,
): MtfBundle | null {
  const launch = prepareMtfFieldLaunch(state, options, support, fieldAngleDeg);
  if (!launch) return null;
  if (launch.aim)
    return traceMtfStopBundle(state, options, support, launch, gridSize, line, imagePlaneZ, { opticalPath });
  const footprint = findMtfFieldFootprint(state, options, support, launch);
  return footprint
    ? traceMtfLaunchPlaneBundle(state, options, support, launch, footprint, gridSize, line, imagePlaneZ, {
        opticalPath,
      })
    : null;
}
