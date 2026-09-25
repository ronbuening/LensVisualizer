/** Shared pupil sampling for MTF. Exact hits stay in physical millimeters. */
import type { MtfOptions, MtfSpectralLine, MtfSupport } from "../../types/mtf.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import type { EngineTraceResult, TraceOptions } from "../trace/types.js";
import { solveChiefRay2 } from "../field/chiefRay.js";
import { solveScalarRoot } from "../math/rootSolve.js";
import { traceEngineRay2 } from "../trace/rayAdapters.js";
import { bulkTransmissionForTrace } from "../trace/bulkAbsorption.js";
import { anchoredIndexTable } from "../chromatic/indexResolver.js";
import type { MtfSpot } from "./mtfMath.js";
import { mtfFiniteObjectPoint } from "./mtfConjugates.js";
import { findMtfFootprint, type MtfFootprint } from "./mtfFootprint.js";
import { mtfTraceClassification } from "./mtfRayClassification.js";

export { mtfTraceClassification } from "./mtfRayClassification.js";

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

export interface MtfBundle {
  rays: MtfPupilRay[];
  blocked: number;
  failed: number;
  /** Launch flux of rays the tracer could not resolve, in the same units as ray weights. */
  failedWeight: number;
  chief: MtfSpot;
  chiefTrace: EngineTraceResult;
  /** True when the reference chief ray is itself stopped by an aperture. */
  chiefClipped: boolean;
  direction: Vec3;
  /** Launch cells across the beam's larger dimension; also the scalar-diffraction raster size. */
  gridSize: number;
  columns: number;
  rows: number;
  launchStepMm: number;
  objectPoint?: Vec3;
  openBorders: MtfOpenBorders;
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
}

/** Surface profiles whose sag depends on y or radius only, so a meridional field images symmetrically in x. */
const X_SYMMETRIC_PROFILES = new Set(["flat", "spherical", "aspheric", "tilted-plane"]);

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
  state: PreparedOpticalState,
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
    weight: bulkTransmissionForTrace(state.lens.runtime, trace.hits),
  };
}

const indexTablesByState = new WeakMap<PreparedOpticalState, Map<number, Float64Array>>();

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
  state: PreparedOpticalState,
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
 * @returns aperture-checked options that stop at the first clip
 */
export function mtfTraceOptions(
  state: PreparedOpticalState,
  options: MtfOptions,
  support: MtfSupport,
  line: MtfSpectralLine,
): TraceOptions {
  return {
    checkSemiDiameter: true,
    stopSemiDiameter: options.stopSemiDiameterMm,
    stopOnClip: true,
    directionNormalized: true,
    wavelengthNm: line.wavelengthNm,
    recordOpticalPath: options.method === "diffraction",
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
 * launch plane then serve every wavelength and grid.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record, including any finite conjugate
 * @param fieldAngleDeg - chief-ray field angle in degrees
 * @returns launch, or null when no chief ray can be established
 */
export function prepareMtfFieldLaunch(
  state: PreparedOpticalState,
  options: MtfOptions,
  support: MtfSupport,
  fieldAngleDeg: number,
): MtfFieldLaunch | null {
  const L = state.lens.runtime;
  const chief = solveChiefRay2(fieldAngleDeg, state.focusT, state.zoomT, L, undefined, state.aberrationT);
  const objectPoint = support.conjugate ? mtfFiniteObjectPoint(state, support.conjugate, fieldAngleDeg) : undefined;
  if (objectPoint === null || (!objectPoint && chief.status !== "converged")) return null;
  const norm = Math.hypot(1, chief.uField);
  const direction: Vec3 = [0, chief.uField / norm, 1 / norm];
  const firstZ = Math.min(0, state.surfaces[0].profile.sag(state.surfaces[0].sd));
  const leadZ = Math.max(
    firstZ - Math.max(10, L.rayLead ?? 0),
    objectPoint ? (objectPoint[2] + firstZ) / 2 : -Infinity,
  );
  const seedY = chief.status === "converged" ? chief.yLaunch + leadZ * chief.uField : 0;
  const launch: MtfFieldLaunch = { fieldAngleDeg, direction, objectPoint, leadZ, centerY: seedY };
  if (!objectPoint) return launch;
  const referenceNm = support.spectralLines[0]?.wavelengthNm ?? support.referenceWavelengthNm;
  const aimOptions: TraceOptions = {
    stopAt: state.lens.stop.surfaceIndex + 1,
    checkSemiDiameter: false,
    directionNormalized: true,
    wavelengthNm: referenceNm,
    indexAtSurface: mtfIndexResolver(state, support, referenceNm),
  };
  const aim = solveScalarRoot(
    (y) => {
      const trace = traceEngineRay2(state, mtfLaunchRay(launch, 0, y - seedY), aimOptions);
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
 * @returns footprint box relative to the chief launch point, or null when the field is vignetted
 */
export function findMtfFieldFootprint(
  state: PreparedOpticalState,
  options: MtfOptions,
  support: MtfSupport,
  launch: MtfFieldLaunch,
): MtfFootprint | null {
  const traceOptions = mtfTraceOptions(state, options, support, support.spectralLines[0]);
  return findMtfFootprint(
    (x, y) =>
      mtfTraceClassification(
        traceEngineRay2(state, mtfLaunchRay(launch, x, y), traceOptions),
        state,
        options.stopSemiDiameterMm,
      ),
    options.pupilSemiDiameterMm,
    mtfMirrorSymmetric(state),
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
export function mtfMirrorSymmetric(state: PreparedOpticalState): boolean {
  return state.surfaces.every((surface) => X_SYMMETRIC_PROFILES.has(surface.profile.kind));
}

/**
 * Trace one wavelength's pupil samples over a footprint.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record
 * @param launch - field launch
 * @param footprint - launch-plane box from `findMtfFieldFootprint`
 * @param gridSize - cells across the beam's larger dimension
 * @param line - traced spectral line
 * @param imagePlaneZ - axial image-plane position in mm
 * @returns traced bundle, or null when the reference chief ray cannot reach the image plane
 */
export function traceMtfBundle(
  state: PreparedOpticalState,
  options: MtfOptions,
  support: MtfSupport,
  launch: MtfFieldLaunch,
  footprint: MtfFootprint,
  gridSize: number,
  line: MtfSpectralLine,
  imagePlaneZ = state.imgZ,
): MtfBundle | null {
  const traceOptions = mtfTraceOptions(state, options, support, line);
  // The chief is a geometric reference, not a pupil sample: trace it through every surface even
  // when an aperture clips it, and record the clipping separately.
  const chiefRay = mtfLaunchRay(launch, 0, 0);
  const chiefTrace = traceEngineRay2(state, chiefRay, { ...traceOptions, checkSemiDiameter: false, stopOnClip: false });
  const chiefPoint = mtfImagePoint(state, chiefTrace, imagePlaneZ);
  if (!chiefPoint) return null;
  const chiefClipped =
    mtfTraceClassification(traceEngineRay2(state, chiefRay, traceOptions), state, options.stopSemiDiameterMm) !==
    "valid";
  const grid = mtfLaunchGrid(footprint, gridSize);
  const bundle: MtfBundle = {
    rays: [],
    blocked: 0,
    failed: 0,
    failedWeight: 0,
    chief: chiefPoint,
    chiefTrace,
    chiefClipped,
    direction: chiefTrace.input.direction,
    gridSize,
    columns: grid.columns,
    rows: grid.rows,
    launchStepMm: grid.step,
    objectPoint: launch.objectPoint,
    openBorders: { x: false, y0: false, y1: false },
  };
  const source = launch.objectPoint;
  const chiefDistance = source ? Math.hypot(...chiefTrace.input.origin.map((v, i) => v - source[i])) : 0;
  // A meridional field of an x-symmetric lens images each half pupil as the mirror of the other.
  const mirror = mtfMirrorSymmetric(state);
  const firstColumn = mirror ? grid.columns / 2 : 0;
  for (let row = 0; row < grid.rows; row++) {
    for (let column = firstColumn; column < grid.columns; column++) {
      const x = grid.x0 + (column + 0.5) * grid.step;
      const y = grid.y0 + (row + 0.5) * grid.step;
      const trace = traceEngineRay2(state, mtfLaunchRay(launch, x, y), traceOptions);
      const samples = mirror ? 2 : 1;
      // Solid angle subtended by equal cells of the launch plane: cos(theta) / distance².
      const launchWeight = source
        ? (chiefDistance / Math.hypot(...trace.input.origin.map((v, i) => v - source[i]))) ** 3
        : 1;
      const classification = mtfTraceClassification(trace, state, options.stopSemiDiameterMm);
      if (classification === "blocked") {
        bundle.blocked += samples;
        continue;
      }
      const point = classification === "valid" ? mtfImagePoint(state, trace, imagePlaneZ) : null;
      if (!point) {
        bundle.failed += samples;
        bundle.failedWeight += samples * launchWeight;
        continue;
      }
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
 * Trace one field's pupil at one grid size: launch, footprint and bundle in a single call.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record
 * @param fieldAngleDeg - chief-ray field angle in degrees
 * @param gridSize - cells across the beam's larger dimension
 * @param line - traced spectral line, the reference line by default
 * @param imagePlaneZ - axial image-plane position in mm
 * @returns traced bundle, or null when the field has no chief ray or no transmitted beam
 */
export function traceMtfFieldPupil(
  state: PreparedOpticalState,
  options: MtfOptions,
  support: MtfSupport,
  fieldAngleDeg: number,
  gridSize: number,
  line: MtfSpectralLine = support.spectralLines[0],
  imagePlaneZ = state.imgZ,
): MtfBundle | null {
  const launch = prepareMtfFieldLaunch(state, options, support, fieldAngleDeg);
  const footprint = launch ? findMtfFieldFootprint(state, options, support, launch) : null;
  return launch && footprint
    ? traceMtfBundle(state, options, support, launch, footprint, gridSize, line, imagePlaneZ)
    : null;
}
