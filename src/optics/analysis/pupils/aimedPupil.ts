/**
 * Aimed pupil launch — pupil coordinates are positions on the real aperture stop.
 *
 * A sample at normalised (px, py) is the ray from the field's object point that crosses the stop surface at
 * (px·R, py·R) about the axis, R being the current stopped-down stop radius: the convention of OpticStudio with ray
 * aiming on and of CODE V. Every ray-based analysis launches its pupil samples here, so one field shows the same
 * pupil in every tab, and an external cross-checker calling this function gets the tabs' rays bit for bit.
 *
 * Lens-design programs aim through mathematically extended surfaces. Here a ray far outside a clear aperture can
 * meet a surface beyond the next vertex, where the surfaces of an element cross, and the trace fails. A target only
 * such rays could reach is `blocked` when the ray toward it is already outside a clear aperture before it fails: its
 * light is vignetted there, and the returned blocking ray is traced as clipped. Total internal reflection ahead of the
 * stop blocks the same way, at the reflecting surface, as it does after the stop.
 */

import type { ChromaticChannel, RayTraceResult } from "../../../types/optics.js";
import { CHROMATIC_CHANNEL_WAVELENGTH_NM } from "../../chromatic/channels.js";
import type { VectorFieldRayLaunch } from "../../field/launch.js";
import { directionFromSkewSlope } from "../../math/vector.js";
import { transmissionTraceCapture } from "../../trace/bulkAbsorption.js";
import { prepareEngineTrace } from "../../trace/rayAdapters.js";
import { engineTraceToRuntimeRayResult, engineTraceToRuntimeSkewResult } from "../../trace/runtimeRayResult.js";
import type { RuntimeSkewRayTraceResult } from "../../trace/runtimeRayResult.js";
import { traceToStopViaGeneralized } from "../../trace/stopTrace.js";
import type { EngineTraceResult, TraceOptions } from "../../trace/types.js";
import type { PreparedGeometry, Ray3, Vec3 } from "../../types.js";
import { traceRayClassification } from "../../trace/rayClassification.js";
import { mirrorSymmetricAboutMeridian } from "../../trace/symmetry.js";
import { stopLattice } from "./stopLattice.js";
import type { StopLatticeCell } from "./stopLattice.js";
import type { AnalysisRequest } from "../request.js";

/**
 * Stop-crossing residual a converged aim accepts, per millimetre of stop radius.
 *
 * It is the chief-ray solve's 1e-7 mm at a 1 mm stop, scaled with R so the relative accuracy is the same at every
 * aperture. The full trace admits the stop out to R plus this tolerance, so a rim sample aimed at R cannot be
 * blocked by the rounding of its own solve.
 */
export const AIMED_PUPIL_RESIDUAL_TOLERANCE = 1e-7;
/** Stop traces one sample may spend reaching the tolerance, its seed included. */
export const AIMED_PUPIL_MAX_ITERATIONS = 24;
/**
 * Residual, per millimetre of stop radius, at which a converged aim stops polishing. Past the tolerance each sample
 * keeps taking Newton steps until its residual reaches this or stops falling, so the returned ray is set by the optics
 * (the root, to rounding) rather than by the path its seed took.
 */
export const AIMED_PUPIL_POLISH_TOLERANCE = 1e-12;
/** Extra stop traces a converged sample may spend polishing. */
const AIMED_PUPIL_MAX_POLISH_ITERATIONS = 6;
/** Halvings of a correction step that lands where no ray reaches the stop before the target is declared unreachable. */
const AIMED_PUPIL_MAX_STEP_HALVINGS = 12;
/** Finite-difference step of the field's launch-to-stop Jacobian, as a fraction of the launch scale. */
const AIMED_PUPIL_JACOBIAN_STEP = 1e-3;
/** Smaller steps tried when a Jacobian probe of the chief cannot be traced. */
const AIMED_PUPIL_JACOBIAN_STEP_RETRIES = 3;
/** Relative determinant below which the launch-to-stop map is treated as folded at that point. */
const AIMED_PUPIL_SINGULAR_DETERMINANT = 1e-12;
/**
 * Reference targets the field's stop-to-launch fit is aimed at, in normalised stop coordinates: rings of eight at half
 * and full radius. Fixed per field, so the fit, and every seed taken from it, depend on nothing a caller asks for.
 */
const AIMED_PUPIL_FIT_TARGETS: readonly Vec2[] = [0.5, 1].flatMap((radius) =>
  Array.from(
    { length: 8 },
    (_, k): Vec2 => [radius * Math.cos((k * Math.PI) / 4), radius * Math.sin((k * Math.PI) / 4)],
  ),
);
/** Fewest aimed references the cubic fit accepts; vignetting can remove the rest. */
const AIMED_PUPIL_FIT_MIN_POINTS = 12;

/** Why a sample has no launch. Unaimed samples are never traced. */
export type AimedPupilUnaimedReason = "aim-not-converged" | "stop-unreachable" | "trace-failed";

/** How the field launches its rays; the launch coordinates are two lengths in that frame. */
export type AimedPupilLaunchSurface = "object-plane" | "bounding-sphere" | "finite-object" | "launch-frame";

/** One requested pupil sample in normalised stop coordinates. */
export interface AimedPupilSampleInput {
  readonly xFraction: number;
  readonly yFraction: number;
  /** Sample weight; equal weights (1 / sample count) when absent. */
  readonly weight?: number | null;
}

/** Collimated field launched on the first-vertex plane at slope `uField` (scalar off-axis geometry). */
export interface AimedObjectPlaneField {
  readonly uField: number;
  /** Solved chief-ray launch height on the first-vertex plane, in mm. */
  readonly yChief: number;
}

/** Collimated fisheye or past-cap field launched from the bounding sphere (vector off-axis geometry). */
export interface AimedBoundingSphereField {
  readonly kind: "vector";
  readonly vectorLaunch: VectorFieldRayLaunch;
}

/** Finite object point; rays leave it through points of a launch plane at `leadZ`. */
export interface AimedFiniteObjectField {
  readonly kind: "finite-object";
  readonly objectPoint: Vec3;
  /** Axial position of the launch plane in mm, between the object and the first surface. */
  readonly leadZ: number;
}

/**
 * Collimated chief ray already solved through the stop centre, with its pupil axes (perspective lens frame).
 * Pupil coordinates follow these axes: x along the sagittal axis, y along the radial one, both as they meet the stop.
 */
export interface AimedLaunchFrameField {
  readonly kind: "launch-frame";
  readonly chiefRay: Ray3;
  readonly sagittalAxis: Vec3;
  readonly radialAxis: Vec3;
  readonly launchBoundT?: number;
}

/** Field geometry the aim launches from; the off-axis scalar and vector geometries qualify as they are. */
export type AimedPupilFieldGeometry =
  | AimedObjectPlaneField
  | AimedBoundingSphereField
  | AimedFiniteObjectField
  | AimedLaunchFrameField;

interface AimedPupilRayBase {
  /** Position of the sample in the requested list. */
  index: number;
  xFraction: number;
  yFraction: number;
  /** Requested stop crossing (px·R, py·R) in mm. */
  targetStopMm: readonly [number, number];
  /** Stop crossing of the returned ray, or of the last traced attempt for an unaimed sample. */
  achievedStopMm: readonly [number, number] | null;
  /** Distance between achieved and target crossings in mm; NaN when nothing reached the stop. */
  residualMm: number;
  /** Stop traces this sample spent. */
  iterations: number;
  weight: number;
  /** Launch coordinates of the returned ray (or last attempt) in the field's launch frame, in mm. */
  launch: readonly [number, number];
}

/** A sample whose ray crosses the stop at its target within the tolerance. */
export interface AimedPupilAimedRay extends AimedPupilRayBase {
  status: "aimed";
  reason: null;
  achievedStopMm: readonly [number, number];
  /** Ray origin in optical coordinates; tabs trace exactly this ray. */
  origin: Vec3;
  /** Unit ray direction. */
  direction: Vec3;
}

/**
 * A sample whose target no traceable ray reaches because a clear aperture or total internal reflection before the stop
 * blocks the way: the ray toward it leaves that aperture, or reflects there, before the trace fails. Its light is
 * vignetted; the returned ray is that blocking ray, which the full trace clips or reflects.
 */
export interface AimedPupilBlockedRay extends AimedPupilRayBase {
  status: "blocked";
  reason: null;
  /** Nothing reached the stop: the ray is blocked before it. */
  achievedStopMm: null;
  origin: Vec3;
  direction: Vec3;
  /** Surface whose clear aperture blocks the ray, or where it reflects totally. */
  blockedAtSurfaceIndex: number;
}

/** A sample no ray was found for; it is counted with its reason and never traced. */
export interface AimedPupilUnaimedRay extends AimedPupilRayBase {
  status: "unaimed";
  reason: AimedPupilUnaimedReason;
  origin: null;
  direction: null;
}

export type AimedPupilRay = AimedPupilAimedRay | AimedPupilBlockedRay | AimedPupilUnaimedRay;
/** A sample with a ray to trace: aimed, or blocked before the stop. */
export type AimedPupilTracedRay = AimedPupilAimedRay | AimedPupilBlockedRay;

/** One field's aimed launch for a list of pupil samples. */
export interface AimedPupilLaunch {
  launchSurface: AimedPupilLaunchSurface;
  stopSurfaceIndex: number;
  /** Stop radius R the targets scale with, in mm. */
  stopSemiDiameterMm: number;
  residualToleranceMm: number;
  /** Stop radius the full trace checks: R plus the residual tolerance (the rim rule). */
  clipSemiDiameterMm: number;
  launchBoundT?: number;
  /** The stop-centre ray (0, 0). */
  chief: AimedPupilRay;
  /** One ray per requested sample, in request order. */
  rays: AimedPupilRay[];
  aimedCount: number;
  blockedCount: number;
  unaimedCount: number;
  unaimedByReason: Readonly<Record<AimedPupilUnaimedReason, number>>;
}

/** Aperture inputs of a state-level aim. */
export interface AimedPupilAperture {
  /** Current stop radius R in mm. */
  stopSemiDiameterMm: number;
  /** Size of the beam on the launch frame in mm (the paraxial entrance-pupil radius); scales the Jacobian probes. */
  launchScaleMm: number;
}

type Vec2 = readonly [number, number];
/** Row-major 2×2 launch-to-stop Jacobian [[∂x/∂a, ∂x/∂b], [∂y/∂a, ∂y/∂b]]. */
type Matrix2 = [number, number, number, number];

interface LaunchFrame {
  surface: AimedPupilLaunchSurface;
  ray(a: number, b: number): Ray3;
  /** Stop crossing (mm) of normalised pupil coordinates at stop radius R. */
  stopTarget(xFraction: number, yFraction: number, R: number): Vec2;
  /** Launch coordinates of the chief seed. */
  chief: Vec2;
  launchBoundT?: number;
  /**
   * The frame and the optics are exactly mirror-symmetric about the meridian (y–z plane), with launch coordinate a = 0
   * on it: a sample with x = 0 is solved in b alone with a pinned at 0, and (−px, py) is the exact mirror of (px, py).
   */
  meridional: boolean;
  /** Also rotationally symmetric about the axis (an axial object): (0, −py) is the exact negation of (0, py). */
  axial: boolean;
}

interface FieldModel {
  frame: LaunchFrame;
  stopAt: (launch: Vec2) => Vec2 | null;
  /** Surface whose clear aperture clips a launch before the stop, or null. */
  blockedAt: (launch: Vec2) => number | null;
  toleranceMm: number;
  chief: Vec2;
  chiefStop: Vec2 | null;
  jacobian: Matrix2 | null;
  /** Cubic stop-to-launch map fitted on the aimed reference targets, or null. */
  fit: StopToLaunchFit | null;
  /** The chief crossing a (0, 0) sample accepts: the chief-ray solve's own max(1e-7·R, 1e-7 mm). */
  chiefAcceptMm: number;
  /** Residual below which converged samples stop polishing. */
  polishToleranceMm: number;
}

/** Launch offset from the chief as a cubic without constant in the normalised target (u, v) = target / R. */
interface StopToLaunchFit {
  stopSemiDiameterMm: number;
  a: readonly number[];
  b: readonly number[];
}

/** Where a solve starts: a traced launch, its stop crossing, the Jacobian to correct with, traces already spent. */
interface SolveStart {
  launch: Vec2;
  stop: Vec2;
  jacobian: Matrix2 | null;
  iterations: number;
}

interface SampleSolve {
  status: AimedPupilRay["status"];
  reason: AimedPupilUnaimedReason | null;
  launch: Vec2;
  stop: Vec2 | null;
  iterations: number;
  /** For a blocked sample: the blocking launch and the surface that clips it. */
  blocked?: { launch: Vec2; surfaceIndex: number };
}

/** How a sample's canonical solve maps back onto it: mirrored across the meridian, negated on the axis, or as is. */
type SampleSymmetry = "none" | "mirror-x" | "negate-y";

/**
 * A wavelength the rays are aimed and traced at with indices the caller supplies (the MTF's spectral lines), where a
 * chromatic channel names one of the tabs' own lines.
 */
export interface AimedPupilSpectralLine {
  readonly wavelengthNm: number;
  /** Index of each surface's medium at this wavelength; the authored indices when absent. */
  readonly indexAtSurface?: (surfaceIndex: number, nd: number) => number;
  /** Names the index source in the field-model cache, so two sources at one wavelength never share a model. */
  readonly indexKey: string;
}

/** What the rays are aimed at: a chromatic channel or a spectral line; the authored reference indices when absent. */
export type AimedPupilSpectrum = ChromaticChannel | AimedPupilSpectralLine;

/**
 * Aim pupil samples at the real stop for one field of the request's current state.
 *
 * Each sample's launch is solved by Newton's method on its two launch coordinates, seeded from the chief ray and the
 * field's launch-to-stop Jacobian and corrected with Broyden updates of that Jacobian, so a sample costs two or three
 * stop traces. Aim rays are traced to the stop without aperture checks; the caller then traces every returned ray
 * through everything with apertures checked (`prepareAimedPupilTrace`), so a sample the stop admits but another
 * aperture blocks is vignetted, not unaimed. The solve depends only on the request, field, spectrum and the sample
 * itself: no state carries between samples, and the per-field model reused across calls is the one a fresh build
 * returns, so a cache hit never changes a bit.
 *
 * @param request - prepared geometry and the current stop radius R
 * @param samples - pupil samples in normalised stop coordinates
 * @param geometry - field launch: scalar or vector off-axis geometry, a finite object point or a solved launch frame
 * @param spectrum - chromatic channel or spectral line the rays are aimed at; the authored reference indices when absent
 * @returns aimed launch, or null when the request has no stop or surfaces
 */
export function prepareAimedPupilLaunch(
  request: AnalysisRequest,
  samples: readonly AimedPupilSampleInput[],
  geometry: AimedPupilFieldGeometry,
  spectrum?: AimedPupilSpectrum,
): AimedPupilLaunch | null {
  return prepareAimedPupilLaunchForState(
    request.preparedGeometry,
    requestAperture(request),
    samples,
    geometry,
    spectrum,
  );
}

/**
 * State-level form of `prepareAimedPupilLaunch`, for callers that trace a state other than the request's own (the
 * perspective lens frame) or that hold no request.
 *
 * @param state - prepared geometry the rays are traced through
 * @param aperture - stop radius R and launch scale in mm
 * @param samples - pupil samples in normalised stop coordinates
 * @param geometry - field launch
 * @param spectrum - chromatic channel or spectral line the rays are aimed at
 * @returns aimed launch, or null when there is no stop or surface
 */
export function prepareAimedPupilLaunchForState(
  state: PreparedGeometry,
  aperture: AimedPupilAperture,
  samples: readonly AimedPupilSampleInput[],
  geometry: AimedPupilFieldGeometry,
  spectrum?: AimedPupilSpectrum,
): AimedPupilLaunch | null {
  const field = aimedFieldModel(state, aperture, geometry, spectrum);
  if (!field) return null;
  const { model } = field;
  return aimedLaunch(state, model, aperture.stopSemiDiameterMm, samples, (target) =>
    aimSample(model, target.stop, target.pinA),
  );
}

/**
 * Cells across the stop at and below which a stop lattice is aimed sample by sample; a finer lattice is seeded from the
 * lattice half as fine.
 */
export const AIMED_LATTICE_DIRECT_CELLS = 8;
/** Newton corrections a cell seeded from the coarser lattice may take before it is solved as a lone sample. */
export const AIMED_LATTICE_MAX_CORRECTIONS = 2;

/** A stop lattice aimed for one field: the launch's rays are the lattice's cells, in lattice order. */
export interface AimedStopLattice extends AimedPupilLaunch {
  /** Lattice cells across the stop's diameter. */
  cellsAcross: number;
  /** The lattice (`stopLattice`); `rays[i]` is the ray of `cells[i]`. */
  cells: readonly StopLatticeCell[];
}

// The field model each lattice was aimed with, so a coarser lattice seeds only lattices of its own field and spectrum.
const latticeModelKeys = new WeakMap<AimedStopLattice, string>();

/**
 * Aim a regular stop lattice for one field of the request's current state (`stopLattice`, `cellsAcross` cells across
 * the stop's diameter).
 *
 * @param request - prepared geometry and the current stop radius R
 * @param cellsAcross - lattice cells across the stop's diameter
 * @param geometry - field launch
 * @param spectrum - chromatic channel or spectral line the rays are aimed at
 * @param coarse - the same field's lattice half as fine, when the caller already holds it
 * @returns aimed lattice, or null when the request has no stop or surfaces
 */
export function prepareAimedStopLattice(
  request: AnalysisRequest,
  cellsAcross: number,
  geometry: AimedPupilFieldGeometry,
  spectrum?: AimedPupilSpectrum,
  coarse?: AimedStopLattice | null,
): AimedStopLattice | null {
  return prepareAimedStopLatticeForState(
    request.preparedGeometry,
    requestAperture(request),
    cellsAcross,
    geometry,
    spectrum,
    coarse,
  );
}

/**
 * State-level form of `prepareAimedStopLattice`.
 *
 * A lattice of at most `AIMED_LATTICE_DIRECT_CELLS` across is aimed sample by sample, as `prepareAimedPupilLaunch`
 * aims any list. A finer one is seeded from the same field's lattice half as fine, the one supplied or else aimed
 * first (`seededAim`), which costs a cell about one stop trace where a lone sample spends three to six, most of them
 * polishing. Lattice cells are never polished: they lie within the residual tolerance of their targets, so their rays
 * can differ from a lone solve's by up to the tolerance at the stop. The stop centre is the chief, as in any launch.
 * The lattice depends only on the field, spectrum, stop radius and size: the coarse lattice is a deterministic function
 * of the same inputs, so supplying it never changes a bit.
 *
 * @param state - prepared geometry the rays are traced through
 * @param aperture - stop radius R and launch scale in mm
 * @param cellsAcross - lattice cells across the stop's diameter, rounded to an integer
 * @param geometry - field launch
 * @param spectrum - chromatic channel or spectral line the rays are aimed at
 * @param coarse - the same field's lattice half as fine; ignored unless it was aimed for this field and spectrum
 * @returns aimed lattice, or null when there is no stop or surface
 */
export function prepareAimedStopLatticeForState(
  state: PreparedGeometry,
  aperture: AimedPupilAperture,
  cellsAcross: number,
  geometry: AimedPupilFieldGeometry,
  spectrum?: AimedPupilSpectrum,
  coarse?: AimedStopLattice | null,
): AimedStopLattice | null {
  const n = Math.round(cellsAcross);
  const field = n >= 1 ? aimedFieldModel(state, aperture, geometry, spectrum) : null;
  if (!field) return null;
  const { model, key } = field;
  const R = aperture.stopSemiDiameterMm;
  // Lattice cells are aimed to the tolerance, never polished: one stop trace each is the point of the lattice.
  let solve: CanonicalSolver = (target) => aimSample(model, target.stop, target.pinA, false);
  if (n > AIMED_LATTICE_DIRECT_CELLS) {
    const half = n >> 1;
    const seeds =
      coarse && coarse.cellsAcross === half && latticeModelKeys.get(coarse) === key
        ? coarse
        : prepareAimedStopLatticeForState(state, aperture, half, geometry, spectrum);
    if (seeds) {
      const map = latticeSeedMap(seeds, model.frame, R);
      solve = (target) => seededAim(model, map, target);
    }
  }
  const cells = stopLattice(n);
  const lattice: AimedStopLattice = { ...aimedLaunch(state, model, R, cells, solve), cellsAcross: n, cells };
  latticeModelKeys.set(lattice, key);
  return lattice;
}

/** A request's stop radius and launch scale. */
function requestAperture(request: AnalysisRequest): AimedPupilAperture {
  const { stopSemiDiameterMm, entrancePupilSemiDiameterMm } = request.aperture;
  return { stopSemiDiameterMm, launchScaleMm: entrancePupilSemiDiameterMm };
}

/** The field's model and its cache key, or null without a usable stop radius or surface. */
function aimedFieldModel(
  state: PreparedGeometry,
  aperture: AimedPupilAperture,
  geometry: AimedPupilFieldGeometry,
  spectrum: AimedPupilSpectrum | undefined,
): { model: FieldModel; key: string } | null {
  const R = aperture.stopSemiDiameterMm;
  if (!(R > 0) || !Number.isFinite(R) || state.surfaces.length < 1) return null;
  const toleranceMm = AIMED_PUPIL_RESIDUAL_TOLERANCE * R;
  const launchScale =
    aperture.launchScaleMm > 0 && Number.isFinite(aperture.launchScaleMm) ? aperture.launchScaleMm : R;
  return cachedFieldModel(state, geometry, R, launchScale, spectrum, () => {
    const frame = launchFrame(state, geometry);
    const stopAt = stopCrossingTracer(state, frame, spectrum);
    const blockedAt = apertureBlockTracer(state, frame, R + toleranceMm, spectrum);
    return fieldModel(frame, stopAt, blockedAt, toleranceMm, launchScale, R);
  });
}

/** A sample's canonical target: its stop crossing in mm, its normalised stop coordinates, and whether a stays at 0. */
interface CanonicalTarget {
  stop: Vec2;
  fractions: Vec2;
  pinA: boolean;
}

/** Solves one canonical target. */
type CanonicalSolver = (target: CanonicalTarget) => SampleSolve;

/**
 * Build a field's launch from per-sample solves: each canonical target is solved once per call, and a mirror image or
 * an axial negation maps its partner's solve back exactly.
 */
function aimedLaunch(
  state: PreparedGeometry,
  model: FieldModel,
  R: number,
  samples: readonly AimedPupilSampleInput[],
  solveCanonical: CanonicalSolver,
): AimedPupilLaunch {
  const { frame } = model;
  const toleranceMm = model.toleranceMm;
  const unaimedByReason: Record<AimedPupilUnaimedReason, number> = {
    "aim-not-converged": 0,
    "stop-unreachable": 0,
    "trace-failed": 0,
  };
  const defaultWeight = samples.length > 0 ? 1 / samples.length : 1;
  // A mirror image's canonical target is its partner's: solved once per call, the same bits as solving it again.
  const solves = new Map<string, SampleSolve>();
  const aimCanonical = (canonical: CanonicalTarget): SampleSolve => {
    const key = `${keyNumber(canonical.stop[0])},${keyNumber(canonical.stop[1])},${canonical.pinA}`;
    let solve = solves.get(key);
    if (!solve) {
      solve = solveCanonical(canonical);
      solves.set(key, solve);
    }
    return solve;
  };
  const toRay = (index: number, xFraction: number, yFraction: number, weight: number): AimedPupilRay => {
    const target = frame.stopTarget(xFraction, yFraction, R);
    // Symmetric fields solve one canonical sample and map it back exactly, so mirror images agree to the bit.
    let symmetry: SampleSymmetry = "none";
    if (frame.meridional && xFraction < 0) symmetry = "mirror-x";
    else if (frame.axial && xFraction === 0 && yFraction < 0) symmetry = "negate-y";
    const canonical: Vec2 =
      symmetry === "mirror-x" ? [-target[0], target[1]] : symmetry === "negate-y" ? [target[0], -target[1]] : target;
    const fractions: Vec2 =
      symmetry === "mirror-x"
        ? [-xFraction, yFraction]
        : symmetry === "negate-y"
          ? [xFraction, -yFraction]
          : [xFraction, yFraction];
    const solved = aimCanonical({ stop: canonical, fractions, pinA: frame.meridional && xFraction === 0 });
    const solve = mapSolve(solved, symmetry, model.chief);
    const base = {
      index,
      xFraction,
      yFraction,
      targetStopMm: target,
      achievedStopMm: solve.status === "blocked" ? null : solve.stop,
      residualMm:
        solve.status !== "blocked" && solve.stop
          ? Math.hypot(solve.stop[0] - target[0], solve.stop[1] - target[1])
          : NaN,
      iterations: solve.iterations,
      weight,
      launch: solve.launch,
    };
    if (solve.status === "aimed" && solve.stop) {
      const ray = frame.ray(solve.launch[0], solve.launch[1]);
      return {
        ...base,
        achievedStopMm: solve.stop,
        status: "aimed",
        reason: null,
        origin: ray.origin,
        direction: ray.direction,
      };
    }
    if (solve.status === "blocked" && solve.blocked) {
      const ray = frame.ray(solve.blocked.launch[0], solve.blocked.launch[1]);
      return {
        ...base,
        launch: solve.blocked.launch,
        achievedStopMm: null,
        status: "blocked",
        reason: null,
        origin: ray.origin,
        direction: ray.direction,
        blockedAtSurfaceIndex: solve.blocked.surfaceIndex,
      };
    }
    return { ...base, status: "unaimed", reason: solve.reason ?? "aim-not-converged", origin: null, direction: null };
  };

  const chief = toRay(-1, 0, 0, 0);
  const rays = samples.map((sample, index) => {
    const ray = toRay(index, sample.xFraction, sample.yFraction, sample.weight ?? defaultWeight);
    if (ray.status === "unaimed") unaimedByReason[ray.reason]++;
    return ray;
  });
  const aimedCount = rays.filter((ray) => ray.status === "aimed").length;
  const blockedCount = rays.filter((ray) => ray.status === "blocked").length;

  return {
    launchSurface: frame.surface,
    stopSurfaceIndex: state.lens.stop.surfaceIndex,
    stopSemiDiameterMm: R,
    residualToleranceMm: toleranceMm,
    clipSemiDiameterMm: R + toleranceMm,
    launchBoundT: frame.launchBoundT,
    chief,
    rays,
    aimedCount,
    blockedCount,
    unaimedCount: rays.length - aimedCount - blockedCount,
    unaimedByReason,
  };
}

/** A coarser lattice's aimed launches, indexed for bilinear seeding. */
interface LatticeSeedMap {
  /** Cells across the coarse lattice. */
  cellsAcross: number;
  /** Launch of each aimed coarse cell at row · cellsAcross + column; null where the cell is not aimed or not in the disc. */
  launches: (Vec2 | null)[];
  /** Stop crossing of each aimed coarse cell, indexed alike. */
  stops: (Vec2 | null)[];
  /** For every coarse grid position, the index of an aimed coarse cell fewest king's moves away; −1 when none is aimed. */
  nearestAimed: Int32Array;
  /** The frame's linear map from normalised stop coordinates to the stop crossing in mm, [∂x/∂u, ∂x/∂v, ∂y/∂u, ∂y/∂v]. */
  stopPerFraction: Matrix2;
}

function latticeSeedMap(lattice: AimedStopLattice, frame: LaunchFrame, R: number): LatticeSeedMap {
  const m = lattice.cellsAcross;
  const launches: (Vec2 | null)[] = new Array(m * m).fill(null);
  const stops: (Vec2 | null)[] = new Array(m * m).fill(null);
  lattice.cells.forEach((cell, i) => {
    const ray = lattice.rays[i];
    if (ray.status !== "aimed") return;
    launches[cell.row * m + cell.column] = ray.launch;
    stops[cell.row * m + cell.column] = ray.achievedStopMm;
  });
  const origin = frame.stopTarget(0, 0, R);
  const alongU = frame.stopTarget(1, 0, R);
  const alongV = frame.stopTarget(0, 1, R);
  // Multi-source breadth-first sweep from the aimed cells: each grid position takes the first aimed cell to reach it.
  const nearestAimed = new Int32Array(m * m).fill(-1);
  let frontier: number[] = [];
  launches.forEach((launch, index) => {
    if (launch) {
      nearestAimed[index] = index;
      frontier.push(index);
    }
  });
  while (frontier.length) {
    const next: number[] = [];
    for (const index of frontier) {
      const row = Math.floor(index / m);
      const column = index % m;
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          const r = row + dr;
          const c = column + dc;
          if (r < 0 || c < 0 || r >= m || c >= m || nearestAimed[r * m + c] >= 0) continue;
          nearestAimed[r * m + c] = nearestAimed[index];
          next.push(r * m + c);
        }
    }
    frontier = next;
  }
  return {
    cellsAcross: m,
    launches,
    stops,
    nearestAimed,
    stopPerFraction: [alongU[0] - origin[0], alongV[0] - origin[0], alongU[1] - origin[1], alongV[1] - origin[1]],
  };
}

/**
 * Aim one lattice cell from the coarser lattice. The seed interpolates the coarse cells by tensor-product cubic Lagrange
 * interpolation over a 4 × 4 block of aimed coarse cells, the one centred on the cell where it is all aimed, else the
 * nearest shifted block (extrapolating at the rim), else bilinearly over the 2 × 2 around it. Newton steps then correct
 * it, with a Jacobian that starts as the interpolation's and is Broyden-updated, at most
 * `AIMED_LATTICE_MAX_CORRECTIONS` of them. The cubic seed of a smooth stop-to-launch map usually lands within the
 * tolerance at once, so the cell costs one stop trace. A cell with no such block, or whose seeded steps cannot be traced
 * or stay off target, is solved as a lone sample would be (`newtonAim`, unpolished) but from the nearest aimed coarse
 * cell rather than from the field's fit or chief: at the edge of what the tracer can reach, that start is already
 * beside the target, and a blocked target ends in two or three traces. Without any aimed coarse cell it is solved as a
 * lone sample. The traces spent are added to the cell's count either way.
 */
function seededAim(model: FieldModel, map: LatticeSeedMap, target: CanonicalTarget): SampleSolve {
  const lone = (spent: number): SampleSolve => {
    const solve = aimSample(model, target.stop, target.pinA, false);
    return spent > 0 ? { ...solve, iterations: solve.iterations + spent } : solve;
  };
  const [u, v] = target.fractions;
  if (target.pinA || (u === 0 && v === 0)) return lone(0);
  // Coarse cell centres sit at whole positions s, t = 0 … m − 1.
  const m = map.cellsAcross;
  const s = (u * m + m - 1) / 2;
  const t = (v * m + m - 1) / 2;
  const fromNearest = (spent: number): SampleSolve => {
    const near = nearestAimedCoarseCell(map, s, t);
    if (!near || !model.jacobian) return lone(spent);
    const start: SolveStart = { launch: near.launch, stop: near.stop, jacobian: model.jacobian, iterations: spent };
    return newtonAim(model, target.stop, start, false, false);
  };
  const window = seedWindow(map, s, t);
  if (!window) return fromNearest(0);
  const stencilU = lagrangeStencil(s - window.column, window.nodes);
  const stencilV = lagrangeStencil(t - window.row, window.nodes);
  const seed: [number, number] = [0, 0];
  // Launch per normalised coordinate: one coarse cell spans 2 / m of it.
  const perU: [number, number] = [0, 0];
  const perV: [number, number] = [0, 0];
  for (let i = 0; i < window.nodes; i++)
    for (let j = 0; j < window.nodes; j++) {
      const node = map.launches[(window.row + i) * m + window.column + j]!;
      for (const k of [0, 1] as const) {
        seed[k] += stencilV.weights[i] * stencilU.weights[j] * node[k];
        perU[k] += stencilV.weights[i] * stencilU.slopes[j] * node[k] * (m / 2);
        perV[k] += stencilV.slopes[i] * stencilU.weights[j] * node[k] * (m / 2);
      }
    }
  const fractionPerLaunch = invert2([perU[0], perV[0], perU[1], perV[1]]);
  if (!fractionPerLaunch) return lone(0);
  let jacobian = multiply2(map.stopPerFraction, fractionPerLaunch);
  let launch: Vec2 = seed;
  let stop = model.stopAt(launch);
  let iterations = 1;
  if (!stop) return fromNearest(iterations);
  for (let corrections = 0; ; corrections++) {
    if (Math.hypot(target.stop[0] - stop[0], target.stop[1] - stop[1]) <= model.toleranceMm)
      return { status: "aimed", reason: null, launch, stop, iterations };
    if (corrections >= AIMED_LATTICE_MAX_CORRECTIONS) return fromNearest(iterations);
    const step = solve2(jacobian, [target.stop[0] - stop[0], target.stop[1] - stop[1]]);
    if (!step) return fromNearest(iterations);
    const trial: Vec2 = [launch[0] + step[0], launch[1] + step[1]];
    const trialStop = model.stopAt(trial);
    iterations++;
    if (!trialStop) return fromNearest(iterations);
    jacobian = broydenUpdate(jacobian, step, [trialStop[0] - stop[0], trialStop[1] - stop[1]]);
    launch = trial;
    stop = trialStop;
  }
}

/** The aimed coarse cell nearest a position in coarse-cell units (`LatticeSeedMap.nearestAimed`), or null. */
function nearestAimedCoarseCell(map: LatticeSeedMap, s: number, t: number): { launch: Vec2; stop: Vec2 } | null {
  const m = map.cellsAcross;
  const row = Math.min(m - 1, Math.max(0, Math.round(t)));
  const column = Math.min(m - 1, Math.max(0, Math.round(s)));
  const index = map.nearestAimed[row * m + column];
  const launch = index >= 0 ? map.launches[index] : null;
  const stop = index >= 0 ? map.stops[index] : null;
  return launch && stop ? { launch, stop } : null;
}

/** Shifts of a 4-node window from centred, nearest first; a shift past the cell extrapolates. */
const SEED_WINDOW_SHIFTS = [0, -1, 1, -2, 2] as const;

/**
 * The block of aimed coarse cells a seed interpolates: 4 × 4 starting one node below the cell, or shifted toward the
 * aimed cells by up to two nodes per axis, nearest first; else the 2 × 2 around the cell.
 *
 * @returns first row and column of the block and its nodes per axis, or null without one
 */
function seedWindow(map: LatticeSeedMap, s: number, t: number): { row: number; column: number; nodes: 2 | 4 } | null {
  const m = map.cellsAcross;
  const aimed = (row: number, column: number, nodes: number) => {
    if (row < 0 || column < 0 || row + nodes > m || column + nodes > m) return false;
    for (let i = 0; i < nodes; i++)
      for (let j = 0; j < nodes; j++) if (map.launches[(row + i) * m + column + j] === null) return false;
    return true;
  };
  const row = Math.floor(t);
  const column = Math.floor(s);
  for (const dr of SEED_WINDOW_SHIFTS)
    for (const dc of SEED_WINDOW_SHIFTS)
      if (aimed(row - 1 + dr, column - 1 + dc, 4)) return { row: row - 1 + dr, column: column - 1 + dc, nodes: 4 };
  return aimed(row, column, 2) ? { row, column, nodes: 2 } : null;
}

/** Lagrange weights of a window's nodes and their derivatives, at one position along an axis. */
interface LagrangeStencil {
  weights: readonly number[];
  slopes: readonly number[];
}

/**
 * One axis of the seed's interpolation: the Lagrange polynomials through nodes 0 … count − 1, and their slopes.
 *
 * @param x - position in node steps from the window's first node
 * @param count - nodes in the window
 * @returns each node's weight and the derivative of that weight in x
 */
function lagrangeStencil(x: number, count: number): LagrangeStencil {
  const weights: number[] = [];
  const slopes: number[] = [];
  for (let i = 0; i < count; i++) {
    let denominator = 1;
    let weight = 1;
    let slope = 0;
    for (let j = 0; j < count; j++) {
      if (j === i) continue;
      denominator *= i - j;
      // Product rule: the slope of Π (x − j) gains each factor's derivative times the rest.
      slope = slope * (x - j) + weight;
      weight *= x - j;
    }
    weights.push(weight / denominator);
    slopes.push(slope / denominator);
  }
  return { weights, slopes };
}

/** Inverse of a 2×2 matrix; null when it is singular relative to its own scale. */
function invert2(j: Matrix2): Matrix2 | null {
  const x = solve2(j, [1, 0]);
  const y = solve2(j, [0, 1]);
  return x && y ? [x[0], y[0], x[1], y[1]] : null;
}

/** Product a · b of two row-major 2×2 matrices. */
function multiply2(a: Matrix2, b: Matrix2): Matrix2 {
  return [a[0] * b[0] + a[1] * b[2], a[0] * b[1] + a[1] * b[3], a[2] * b[0] + a[3] * b[2], a[2] * b[1] + a[3] * b[3]];
}

/** Full-system traces of returned rays with every aperture checked and the stop at the launch's clip radius. */
export interface AimedPupilTrace {
  engine(ray: Ray3): EngineTraceResult<"terminal" | "hits">;
  skew(ray: Ray3): RuntimeSkewRayTraceResult;
  meridional(ray: Ray3): RayTraceResult;
}

/**
 * Bind the full trace of an aimed launch's rays.
 *
 * Rays are traced exactly as returned (their directions are already unit vectors), stopping at the first clip. A
 * clipped ray is vignetted: an aimed ray by an aperture other than the stop, a blocked ray by the aperture named.
 *
 * @param state - prepared geometry the launch was aimed through
 * @param launch - aimed launch supplying the clip radius and launch bound
 * @param spectrum - chromatic channel or spectral line the launch was aimed at
 * @returns engine, skew-result and meridional-result tracers
 */
export function prepareAimedPupilTrace(
  state: PreparedGeometry,
  launch: Pick<AimedPupilLaunch, "clipSemiDiameterMm" | "launchBoundT">,
  spectrum?: AimedPupilSpectrum,
): AimedPupilTrace {
  const shared = {
    checkSemiDiameter: true,
    stopSemiDiameter: launch.clipSemiDiameterMm,
    stopOnClip: true,
    directionNormalized: true,
    launchBoundT: launch.launchBoundT,
    ...spectralTraceOptions(state, spectrum),
  };
  const traceSkew = prepareEngineTrace(state, { ...shared, capture: transmissionTraceCapture(state.lens) });
  const traceMeridional = prepareEngineTrace(state, shared);
  return {
    engine: traceSkew,
    skew: (ray) => engineTraceToRuntimeSkewResult(traceSkew(ray), state.lens),
    meridional: (ray) =>
      engineTraceToRuntimeRayResult(traceMeridional(ray), [ray.origin[2], ray.origin[1]], false, state.lens),
  };
}

/**
 * Trace options of a spectrum: a channel's own indices and wavelength, a spectral line's supplied ones, or nothing for
 * the authored reference indices.
 */
export function spectralTraceOptions(
  state: PreparedGeometry,
  spectrum: AimedPupilSpectrum | undefined,
): Pick<TraceOptions, "indexAtSurface" | "wavelengthNm"> {
  if (spectrum === undefined) return {};
  if (typeof spectrum === "string")
    return {
      indexAtSurface: (i, nd) => state.lens.dispersion[i]?.indexAt(spectrum) ?? nd,
      wavelengthNm: CHROMATIC_CHANNEL_WAVELENGTH_NM[spectrum],
    };
  return spectrum.indexAtSurface
    ? { indexAtSurface: spectrum.indexAtSurface, wavelengthNm: spectrum.wavelengthNm }
    : { wavelengthNm: spectrum.wavelengthNm };
}

function launchFrame(state: PreparedGeometry, geometry: AimedPupilFieldGeometry): LaunchFrame {
  const symmetric = mirrorSymmetricAboutMeridian(state);
  if ("kind" in geometry && geometry.kind === "vector") {
    const launch = geometry.vectorLaunch;
    // A field in the meridian is mirror-symmetric to the bit only once rounding is cleared from its x components.
    const meridional = symmetric && launch.fieldAngleXDeg === 0;
    const origin = meridional ? inMeridian(launch.origin) : launch.origin;
    const direction = meridional ? inMeridian(launch.direction) : launch.direction;
    const radialAxis = meridional ? inMeridian(launch.radialPupilAxis) : launch.radialPupilAxis;
    const sagittalAxis: Vec3 = meridional
      ? [Math.sign(launch.sagittalPupilAxis[0]) || 1, 0, 0]
      : launch.sagittalPupilAxis;
    return {
      surface: "bounding-sphere",
      ray: (a, b) => ({ origin: offsetOrigin(origin, sagittalAxis, a, radialAxis, b), direction }),
      stopTarget: axisAlignedTarget,
      chief: [0, 0],
      launchBoundT: launch.launchBoundT,
      meridional,
      axial: false,
    };
  }
  if ("kind" in geometry && geometry.kind === "launch-frame") {
    const { chiefRay, sagittalAxis, radialAxis } = geometry;
    const meridional =
      symmetric &&
      chiefRay.origin[0] === 0 &&
      chiefRay.direction[0] === 0 &&
      radialAxis[0] === 0 &&
      sagittalAxis[1] === 0 &&
      sagittalAxis[2] === 0;
    return {
      surface: "launch-frame",
      ray: (a, b) => ({
        origin: offsetOrigin(chiefRay.origin, sagittalAxis, a, radialAxis, b),
        direction: chiefRay.direction,
      }),
      stopTarget: fieldAlignedTarget(sagittalAxis, radialAxis),
      chief: [0, 0],
      launchBoundT: geometry.launchBoundT,
      meridional,
      axial: false,
    };
  }
  if ("kind" in geometry && geometry.kind === "finite-object") {
    const { objectPoint, leadZ } = geometry;
    const meridional = symmetric && objectPoint[0] === 0;
    const axial = meridional && objectPoint[1] === 0;
    // Seed the chief on the straight line from the object point to the stop centre.
    const stopZ = state.z[state.lens.stop.surfaceIndex] ?? 0;
    const seedFraction = (stopZ - leadZ) / (stopZ - objectPoint[2]);
    return {
      surface: "finite-object",
      ray: (a, b) => {
        const origin: Vec3 = [a, b, leadZ];
        const dx = origin[0] - objectPoint[0];
        const dy = origin[1] - objectPoint[1];
        const dz = origin[2] - objectPoint[2];
        const length = Math.hypot(dx, dy, dz);
        return { origin, direction: [dx / length, dy / length, dz / length] };
      },
      stopTarget: axisAlignedTarget,
      chief: axial ? [0, 0] : [objectPoint[0] * seedFraction, objectPoint[1] * seedFraction],
      meridional,
      axial,
    };
  }
  const { uField, yChief } = geometry;
  // The skew adapters' launch: coordinates on the first-vertex plane, origin stepped back by the lead.
  const lead = state.lens.constants.rayLead ?? 0;
  const firstZ = state.z[0] ?? 0;
  const ux = 0;
  const direction = directionFromSkewSlope(ux, uField) ?? ([0, 0, 1] as Vec3);
  return {
    surface: "object-plane",
    ray: (a, b) => ({ origin: [a - ux * lead, b - uField * lead, firstZ - lead], direction }),
    stopTarget: axisAlignedTarget,
    chief: [0, yChief],
    meridional: symmetric,
    axial: symmetric && uField === 0 && yChief === 0,
  };
}

/** The vector with its x component cleared: the meridian's own launch, without the rounding of its construction. */
function inMeridian(v: Vec3): Vec3 {
  return [0, v[1], v[2]];
}

/** Off-axis fields lie in the meridional y–z plane, so pupil x and y are the stop's own x and y. */
function axisAlignedTarget(xFraction: number, yFraction: number, R: number): Vec2 {
  return [xFraction * R, yFraction * R];
}

/** Pupil x and y along a field's sagittal and radial axes, as projected onto the stop plane. */
function fieldAlignedTarget(sagittalAxis: Vec3, radialAxis: Vec3): LaunchFrame["stopTarget"] {
  const unit = (axis: Vec3): Vec2 => {
    const length = Math.hypot(axis[0], axis[1]);
    return length > 0 ? [axis[0] / length, axis[1] / length] : [0, 0];
  };
  const s = unit(sagittalAxis);
  const r = unit(radialAxis);
  return (xFraction, yFraction, R) => [
    R * (xFraction * s[0] + yFraction * r[0]),
    R * (xFraction * s[1] + yFraction * r[1]),
  ];
}

/** Map a canonical solve back onto its sample: mirror a about the meridian, or negate b about the axial chief. */
function mapSolve(solve: SampleSolve, symmetry: SampleSymmetry, chief: Vec2): SampleSolve {
  if (symmetry === "none") return solve;
  const map = (point: Vec2): Vec2 =>
    symmetry === "mirror-x" ? [-point[0], point[1]] : [point[0], 2 * chief[1] - point[1]];
  const mapStop = (point: Vec2): Vec2 => (symmetry === "mirror-x" ? [-point[0], point[1]] : [point[0], -point[1]]);
  return {
    ...solve,
    launch: map(solve.launch),
    stop: solve.stop && mapStop(solve.stop),
    blocked: solve.blocked && { ...solve.blocked, launch: map(solve.blocked.launch) },
  };
}

function offsetOrigin(origin: Vec3, axisA: Vec3, a: number, axisB: Vec3, b: number): Vec3 {
  return [
    origin[0] + axisA[0] * a + axisB[0] * b,
    origin[1] + axisA[1] * a + axisB[1] * b,
    origin[2] + axisA[2] * a + axisB[2] * b,
  ];
}

/**
 * Trace a launch to the stop surface without aperture checks.
 * @returns the stop crossing (x, y) in mm, or null when the ray cannot reach the stop
 */
function stopCrossingTracer(
  state: PreparedGeometry,
  frame: LaunchFrame,
  spectrum: AimedPupilSpectrum | undefined,
): (launch: Vec2) => Vec2 | null {
  const stopIndex = state.lens.stop.surfaceIndex;
  const spectral = spectralTraceOptions(state, spectrum);
  const finite = (x: number, y: number): Vec2 | null => (Number.isFinite(x) && Number.isFinite(y) ? [x, y] : null);
  if (state.lens.flags.isFoldedOptics) {
    const options = { checkSemiDiameter: false, launchBoundT: frame.launchBoundT, ...spectral };
    return (launch) => {
      const result = traceToStopViaGeneralized(state, frame.ray(launch[0], launch[1]), stopIndex, options);
      return result.found ? finite(result.x, result.y) : null;
    };
  }
  const trace = prepareEngineTrace(state, {
    capture: "terminal",
    stopAt: stopIndex + 1,
    checkSemiDiameter: false,
    directionNormalized: true,
    launchBoundT: frame.launchBoundT,
    ...spectral,
  });
  return (launch) => {
    const result = trace(frame.ray(launch[0], launch[1]));
    if (result.status !== "ok" || result.terminalSurfaceIndex !== stopIndex) return null;
    return finite(result.terminalPoint[0], result.terminalPoint[1]);
  };
}

/**
 * Trace a launch toward the stop with every clear aperture checked, and name the surface that physically stops it.
 *
 * The shared classifier decides, as it does after the stop: an aperture clip, total internal reflection, or a failed
 * intersection proven to miss the next surface's clear cap blocks the ray at that surface. An unresolved ray never
 * poses as vignetting.
 *
 * @returns the blocking surface before the stop, or null
 */
function apertureBlockTracer(
  state: PreparedGeometry,
  frame: LaunchFrame,
  clipSemiDiameterMm: number,
  spectrum: AimedPupilSpectrum | undefined,
): (launch: Vec2) => number | null {
  const stopIndex = state.lens.stop.surfaceIndex;
  // Generalized paths have no ordered surface to blame before the stop; their unreachable targets stay unaimed.
  if (state.lens.flags.isFoldedOptics) return () => null;
  const trace = prepareEngineTrace(state, {
    capture: "terminal",
    stopAt: stopIndex + 1,
    checkSemiDiameter: true,
    stopSemiDiameter: clipSemiDiameterMm,
    stopOnClip: true,
    directionNormalized: true,
    launchBoundT: frame.launchBoundT,
    ...spectralTraceOptions(state, spectrum),
  });
  return (launch) => {
    const result = trace(frame.ray(launch[0], launch[1]));
    if (result.status === "ok" || traceRayClassification(result, state, clipSemiDiameterMm) !== "blocked") return null;
    // A clip or total internal reflection ends the trace at its own surface; a proven miss is of the next one.
    const missed = result.failureReason === "noBracket" || result.failureReason === "noConvergedIntersection";
    const surfaceIndex = missed ? result.terminalSurfaceIndex + 1 : result.terminalSurfaceIndex;
    return surfaceIndex < stopIndex ? surfaceIndex : null;
  };
}

/**
 * The field's chief crossing and launch-to-stop Jacobian, shared by every sample of the field.
 *
 * A chief launch that crosses within the chief-ray solve's own acceptance, max(1e-7·R, 1e-7 mm), is kept as it is
 * (the chief-ray solve's own ray); otherwise the chief is aimed like any sample. The Jacobian is a central difference
 * about the chief, the step shrinking when a probe cannot be traced.
 */
function fieldModel(
  frame: LaunchFrame,
  stopAt: (launch: Vec2) => Vec2 | null,
  blockedAt: (launch: Vec2) => number | null,
  toleranceMm: number,
  launchScale: number,
  stopSemiDiameterMm: number,
): FieldModel {
  const model: FieldModel = {
    frame,
    stopAt,
    blockedAt,
    toleranceMm,
    chief: frame.chief,
    chiefStop: stopAt(frame.chief),
    jacobian: null,
    fit: null,
    chiefAcceptMm: Math.max(toleranceMm, CHIEF_RAY_RESIDUAL_TOLERANCE_MM),
    polishToleranceMm: AIMED_PUPIL_POLISH_TOLERANCE * stopSemiDiameterMm,
  };
  if (!model.chiefStop) return model;
  model.jacobian = jacobianAt(stopAt, frame.chief, launchScale);
  if (!model.jacobian) return model;
  if (Math.hypot(model.chiefStop[0], model.chiefStop[1]) > model.chiefAcceptMm) {
    // The supplied chief does not pass the stop centre (a finite object's straight-line seed, or a fallback solve).
    const solved = newtonAim(model, [0, 0], chiefStart(model), frame.meridional, true);
    if (solved.status !== "aimed" || !solved.stop) return model;
    model.chief = solved.launch;
    model.chiefStop = solved.stop;
    model.jacobian = jacobianAt(stopAt, solved.launch, launchScale) ?? model.jacobian;
  }
  model.fit = stopToLaunchFit(model, stopSemiDiameterMm);
  return model;
}

/**
 * Fit the field's stop-to-launch map on its aimed reference targets, each solved from the chief.
 *
 * Seeding from the fit and its derivative leaves a sample one or two corrections from its target, where the chief's
 * Jacobian alone leaves it two or three: pupil aberration bends the map most toward the rim.
 */
function stopToLaunchFit(model: FieldModel, stopSemiDiameterMm: number): StopToLaunchFit | null {
  const rows: number[][] = [];
  const offsetsA: number[] = [];
  const offsetsB: number[] = [];
  for (const [u, v] of AIMED_PUPIL_FIT_TARGETS) {
    // References need only the tolerance; samples are polished from wherever the fit seeds them.
    const solved = newtonAim(model, [u * stopSemiDiameterMm, v * stopSemiDiameterMm], chiefStart(model), false, false);
    if (solved.status !== "aimed") continue;
    rows.push(fitBasis(u, v));
    offsetsA.push(solved.launch[0] - model.chief[0]);
    offsetsB.push(solved.launch[1] - model.chief[1]);
  }
  if (rows.length < AIMED_PUPIL_FIT_MIN_POINTS) return null;
  const a = leastSquares(rows, offsetsA);
  const b = leastSquares(rows, offsetsB);
  return a && b ? { stopSemiDiameterMm, a, b } : null;
}

function fitBasis(u: number, v: number): number[] {
  return [u, v, u * u, u * v, v * v, u * u * u, u * u * v, u * v * v, v * v * v];
}

function fitBasisDerivatives(u: number, v: number): { du: number[]; dv: number[] } {
  return {
    du: [1, 0, 2 * u, v, 0, 3 * u * u, 2 * u * v, v * v, 0],
    dv: [0, 1, 0, u, 2 * v, 0, u * u, 2 * u * v, 3 * v * v],
  };
}

/** Normal-equation least squares by Gaussian elimination with partial pivoting; null when rank-deficient. */
function leastSquares(rows: readonly number[][], values: readonly number[]): number[] | null {
  const n = rows[0].length;
  const m = Array.from({ length: n }, (_, i) => [
    ...Array.from({ length: n }, (_, j) => rows.reduce((sum, row) => sum + row[i] * row[j], 0)),
    rows.reduce((sum, row, k) => sum + row[i] * values[k], 0),
  ]);
  for (let col = 0; col < n; col++) {
    let pivot = col;
    for (let row = col + 1; row < n; row++) if (Math.abs(m[row][col]) > Math.abs(m[pivot][col])) pivot = row;
    if (!(Math.abs(m[pivot][col]) > 1e-12 * Math.abs(m[0][0]))) return null;
    [m[col], m[pivot]] = [m[pivot], m[col]];
    for (let row = 0; row < n; row++) {
      if (row === col) continue;
      const factor = m[row][col] / m[col][col];
      for (let k = col; k <= n; k++) m[row][k] -= factor * m[col][k];
    }
  }
  return m.map((row, i) => row[n] / row[i]);
}

function chiefStart(model: FieldModel): SolveStart {
  return { launch: model.chief, stop: model.chiefStop!, jacobian: model.jacobian, iterations: 0 };
}

/**
 * Start from the fit's launch for the target, traced, with the fit's own Jacobian; null when it cannot be traced.
 * A pinned (meridional) start keeps a exactly at the chief's 0.
 */
function fittedStart(model: FieldModel, fit: StopToLaunchFit, target: Vec2, pinA: boolean): SolveStart | null {
  const u = target[0] / fit.stopSemiDiameterMm;
  const v = target[1] / fit.stopSemiDiameterMm;
  const basis = fitBasis(u, v);
  const dot = (coefficients: readonly number[], terms: readonly number[]) =>
    terms.reduce((sum, term, k) => sum + coefficients[k] * term, 0);
  const launch: Vec2 = [pinA ? model.chief[0] : model.chief[0] + dot(fit.a, basis), model.chief[1] + dot(fit.b, basis)];
  const stop = model.stopAt(launch);
  if (!stop) return null;
  // The fit's derivative is launch per stop; its inverse is the stop-per-launch Jacobian the corrections use.
  const { du, dv } = fitBasisDerivatives(u, v);
  const R = fit.stopSemiDiameterMm;
  const launchPerStop: Matrix2 = [dot(fit.a, du) / R, dot(fit.a, dv) / R, dot(fit.b, du) / R, dot(fit.b, dv) / R];
  const det = launchPerStop[0] * launchPerStop[3] - launchPerStop[1] * launchPerStop[2];
  const jacobian: Matrix2 | null =
    Math.abs(det) > 0 && Number.isFinite(det)
      ? [launchPerStop[3] / det, -launchPerStop[1] / det, -launchPerStop[2] / det, launchPerStop[0] / det]
      : model.jacobian;
  return { launch, stop, jacobian, iterations: 1 };
}

// Field models per prepared geometry, keyed by every input they depend on. A model is a deterministic function of its
// key, so a hit returns the bits a fresh build would: the fans, clouds and lattices of one field share its fit.
const FIELD_MODEL_CACHE_LIMIT = 64;
const fieldModelsByState = new WeakMap<PreparedGeometry, Map<string, FieldModel>>();

function cachedFieldModel(
  state: PreparedGeometry,
  geometry: AimedPupilFieldGeometry,
  stopSemiDiameterMm: number,
  launchScale: number,
  spectrum: AimedPupilSpectrum | undefined,
  build: () => FieldModel,
): { model: FieldModel; key: string } {
  const key = [
    fieldGeometryKey(geometry),
    keyNumber(stopSemiDiameterMm),
    keyNumber(launchScale),
    spectrumKey(spectrum),
  ].join("|");
  let models = fieldModelsByState.get(state);
  if (!models) {
    models = new Map();
    fieldModelsByState.set(state, models);
  }
  const cached = models.get(key);
  if (cached) return { model: cached, key };
  const model = build();
  if (models.size >= FIELD_MODEL_CACHE_LIMIT) {
    const oldest = models.keys().next().value;
    if (oldest !== undefined) models.delete(oldest);
  }
  models.set(key, model);
  return { model, key };
}

/** A spectrum's cache key: the channel, or a spectral line's wavelength and index source. */
function spectrumKey(spectrum: AimedPupilSpectrum | undefined): string {
  if (spectrum === undefined) return "";
  return typeof spectrum === "string" ? spectrum : `${keyNumber(spectrum.wavelengthNm)}nm:${spectrum.indexKey}`;
}

/** A number's exact key: its round-tripping string, with −0 kept apart from 0, since a launch built on either differs. */
function keyNumber(value: number): string {
  return Object.is(value, -0) ? "-0" : String(value);
}

/** Every number a launch frame is built from. */
function fieldGeometryKey(geometry: AimedPupilFieldGeometry): string {
  const join = (tag: string, values: readonly (number | undefined)[]) =>
    [tag, ...values.map((value) => (value === undefined ? "" : keyNumber(value)))].join(",");
  if ("kind" in geometry && geometry.kind === "vector") {
    const launch = geometry.vectorLaunch;
    return join("v", [
      ...launch.origin,
      ...launch.direction,
      ...launch.sagittalPupilAxis,
      ...launch.radialPupilAxis,
      launch.launchBoundT,
      launch.fieldAngleXDeg,
    ]);
  }
  if ("kind" in geometry && geometry.kind === "launch-frame") {
    const { chiefRay, sagittalAxis, radialAxis, launchBoundT } = geometry;
    return join("l", [...chiefRay.origin, ...chiefRay.direction, ...sagittalAxis, ...radialAxis, launchBoundT]);
  }
  if ("kind" in geometry && geometry.kind === "finite-object") {
    return join("f", [...geometry.objectPoint, geometry.leadZ]);
  }
  return join("o", [geometry.uField, geometry.yChief]);
}

/** The chief-ray solve's absolute stop-height tolerance at fields of one degree and more. */
const CHIEF_RAY_RESIDUAL_TOLERANCE_MM = 1e-7;

function jacobianAt(stopAt: (launch: Vec2) => Vec2 | null, at: Vec2, launchScale: number): Matrix2 | null {
  let step = AIMED_PUPIL_JACOBIAN_STEP * launchScale;
  for (let attempt = 0; attempt <= AIMED_PUPIL_JACOBIAN_STEP_RETRIES; attempt++, step /= 10) {
    const aPlus = stopAt([at[0] + step, at[1]]);
    const aMinus = stopAt([at[0] - step, at[1]]);
    const bPlus = stopAt([at[0], at[1] + step]);
    const bMinus = stopAt([at[0], at[1] - step]);
    if (!aPlus || !aMinus || !bPlus || !bMinus) continue;
    const jacobian: Matrix2 = [
      (aPlus[0] - aMinus[0]) / (2 * step),
      (bPlus[0] - bMinus[0]) / (2 * step),
      (aPlus[1] - aMinus[1]) / (2 * step),
      (bPlus[1] - bMinus[1]) / (2 * step),
    ];
    if (solve2(jacobian, [1, 0]) && solve2(jacobian, [0, 1])) return jacobian;
  }
  return null;
}

/** Solve J·d = r; null when J is singular relative to its own scale. */
function solve2(j: Matrix2, r: Vec2): Vec2 | null {
  const det = j[0] * j[3] - j[1] * j[2];
  const scale = (Math.abs(j[0]) + Math.abs(j[1])) * (Math.abs(j[2]) + Math.abs(j[3]));
  if (!(Math.abs(det) > AIMED_PUPIL_SINGULAR_DETERMINANT * scale)) return null;
  return [(j[3] * r[0] - j[1] * r[1]) / det, (j[0] * r[1] - j[2] * r[0]) / det];
}

/** Broyden's rank-one update: the secant through the last step replaces the Jacobian's action along it. */
function broydenUpdate(j: Matrix2, dp: Vec2, ds: Vec2): Matrix2 {
  const norm = dp[0] * dp[0] + dp[1] * dp[1];
  if (!(norm > 0)) return j;
  const e0 = ds[0] - (j[0] * dp[0] + j[1] * dp[1]);
  const e1 = ds[1] - (j[2] * dp[0] + j[3] * dp[1]);
  const next: Matrix2 = [
    j[0] + (e0 * dp[0]) / norm,
    j[1] + (e0 * dp[1]) / norm,
    j[2] + (e1 * dp[0]) / norm,
    j[3] + (e1 * dp[1]) / norm,
  ];
  return next.every(Number.isFinite) ? next : j;
}

function aimSample(model: FieldModel, target: Vec2, pinA: boolean, polish = true): SampleSolve {
  if (!model.chiefStop)
    return { status: "unaimed", reason: "trace-failed", launch: model.chief, stop: null, iterations: 0 };
  const start = chiefStart(model);
  // The stop centre is the chief ray itself, accepted on the chief-ray solve's own terms and never re-solved.
  if (target[0] === 0 && target[1] === 0 && Math.hypot(start.stop[0], start.stop[1]) <= model.chiefAcceptMm)
    return { status: "aimed", reason: null, launch: start.launch, stop: start.stop, iterations: 0 };
  // A fitted seed the tracer cannot follow falls back to the chief's, which also finds where a blocked target's
  // reachable region ends.
  const fitted = model.fit && fittedStart(model, model.fit, target, pinA);
  if (fitted) return newtonAim(model, target, fitted, pinA, polish);
  const solve = newtonAim(model, target, start, pinA, polish);
  return model.fit ? { ...solve, iterations: solve.iterations + 1 } : solve;
}

/**
 * Newton's method with Broyden-updated Jacobian corrections, then polishing.
 *
 * A step whose ray cannot reach the stop is halved; a step that fails to reduce the residual updates the Jacobian
 * and is retried shorter. Once the residual is within the tolerance, a polished solve keeps stepping until it reaches
 * the polish tolerance or stops falling. A pinned solve (a meridional sample) moves b alone with a held exactly.
 *
 * An unconverged solve is classified by how it ended. It is `blocked` only when it ends on a block: its last step
 * toward the target could not reach the stop because it left a clear aperture or reflected totally, and either the
 * launch it left from is itself vignetted (nothing further out gets through; the transmitted part of an ordinary stop
 * is convex enough), no shorter step reaches the stop either, or the iteration cap arrives with that block the last
 * failed step since the solve last moved. A step that cannot be traced for any other reason, or a folded (singular) map, ends it as
 * `stop-unreachable`, as does reaching the iteration cap while its steps cannot be traced and no rim is proven to stop
 * them. The iteration cap otherwise, or a step that stops reducing the residual, ends it as `aim-not-converged`: a
 * stall is never reported as a block.
 */
function newtonAim(model: FieldModel, target: Vec2, start: SolveStart, pinA: boolean, polish: boolean): SampleSolve {
  const { stopAt, toleranceMm, polishToleranceMm } = model;
  let { launch, stop, jacobian, iterations } = start;
  let lambda = 1;
  let lastBlock: SampleSolve["blocked"];
  // A step failed to trace since the last full step that reduced the residual: the solve is at a traceable edge.
  let atEdge = false;
  const residual = (s: Vec2): number => Math.hypot(target[0] - s[0], target[1] - s[1]);
  const stepFor = (j: Matrix2): Vec2 | null => {
    if (!pinA) return solve2(j, [target[0] - stop[0], target[1] - stop[1]]);
    return Math.abs(j[3]) > 0 && Number.isFinite(j[3]) ? [0, (target[1] - stop[1]) / j[3]] : null;
  };
  const update = (j: Matrix2, dp: Vec2, ds: Vec2): Matrix2 => {
    if (!pinA) return broydenUpdate(j, dp, ds);
    const secant = ds[1] / dp[1];
    return Number.isFinite(secant) && secant !== 0 ? [j[0], j[1], j[2], secant] : j;
  };
  let current = residual(stop);
  if (current > toleranceMm && !jacobian)
    return { status: "unaimed", reason: "trace-failed", launch, stop, iterations };

  // Converge to the tolerance.
  while (current > toleranceMm) {
    // At the cap, creeping along the edge of the traceable region: blocked when the last failed step left a clear
    // aperture, out of reach when no rim is proven to stop the steps.
    if (iterations >= AIMED_PUPIL_MAX_ITERATIONS)
      return endUnconverged(atEdge && !lastBlock ? "stop-unreachable" : "aim-not-converged", true);
    const step = stepFor(jacobian!);
    if (!step) return endUnconverged("stop-unreachable");
    const trial: Vec2 = [launch[0] + lambda * step[0], launch[1] + lambda * step[1]];
    const trialStop = stopAt(trial);
    iterations++;
    if (!trialStop) {
      atEdge = true;
      const surfaceIndex = model.blockedAt(trial);
      lastBlock = surfaceIndex === null ? undefined : { launch: trial, surfaceIndex };
      // Already vignetted on the way and blocked beyond: every ray left toward the target is lost too.
      if (lastBlock && model.blockedAt(launch) !== null) return endUnconverged("stop-unreachable", true);
      lambda /= 2;
      if (lambda < 2 ** -AIMED_PUPIL_MAX_STEP_HALVINGS) return endUnconverged("stop-unreachable", true);
      continue;
    }
    jacobian = update(
      jacobian!,
      [trial[0] - launch[0], trial[1] - launch[1]],
      [trialStop[0] - stop[0], trialStop[1] - stop[1]],
    );
    const trialResidual = residual(trialStop);
    if (trialResidual < current) {
      launch = trial;
      stop = trialStop;
      current = trialResidual;
      if (lambda === 1) atEdge = false;
      lambda = 1;
      lastBlock = undefined;
    } else {
      lambda /= 2;
      if (lambda < 2 ** -AIMED_PUPIL_MAX_STEP_HALVINGS) return endUnconverged("aim-not-converged");
    }
  }

  // Polish: keep stepping while the residual still falls, down to the polish tolerance.
  if (polish && jacobian) {
    for (let polished = 0; polished < AIMED_PUPIL_MAX_POLISH_ITERATIONS && current > polishToleranceMm; polished++) {
      const step = stepFor(jacobian);
      if (!step) break;
      const trial: Vec2 = [launch[0] + step[0], launch[1] + step[1]];
      if (trial[0] === launch[0] && trial[1] === launch[1]) break;
      const trialStop = stopAt(trial);
      iterations++;
      if (!trialStop) break;
      const trialResidual = residual(trialStop);
      if (!(trialResidual < current)) break;
      jacobian = update(
        jacobian,
        [trial[0] - launch[0], trial[1] - launch[1]],
        [trialStop[0] - stop[0], trialStop[1] - stop[1]],
      );
      launch = trial;
      stop = trialStop;
      current = trialResidual;
    }
  }
  return { status: "aimed", reason: null, launch, stop, iterations };

  function endUnconverged(reason: AimedPupilUnaimedReason, onBlock = false): SampleSolve {
    // Only a solve that ends on a block is blocked: its last step was stopped by a clear aperture.
    if (onBlock && lastBlock) return { status: "blocked", reason: null, launch, stop, iterations, blocked: lastBlock };
    return { status: "unaimed", reason, launch, stop, iterations };
  }
}
