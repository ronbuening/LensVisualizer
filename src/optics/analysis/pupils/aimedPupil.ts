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
 * light is vignetted there, and the returned blocking ray is traced as clipped.
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
  /** Ray origin in optical coordinates; tabs trace exactly this ray. */
  origin: Vec3;
  /** Unit ray direction. */
  direction: Vec3;
}

/**
 * A sample whose target no traceable ray reaches because a clear aperture before the stop blocks the way: the ray
 * toward it leaves that aperture before the trace fails. Its light is vignetted; the returned ray is that blocking
 * ray, which the full trace clips.
 */
export interface AimedPupilBlockedRay extends AimedPupilRayBase {
  status: "blocked";
  reason: null;
  origin: Vec3;
  direction: Vec3;
  /** Surface whose clear aperture blocks the ray. */
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
 * Aim pupil samples at the real stop for one field of the request's current state.
 *
 * Each sample's launch is solved by Newton's method on its two launch coordinates, seeded from the chief ray and the
 * field's launch-to-stop Jacobian and corrected with Broyden updates of that Jacobian, so a sample costs two or three
 * stop traces. Aim rays are traced to the stop without aperture checks; the caller then traces every returned ray
 * through everything with apertures checked (`prepareAimedPupilTrace`), so a sample the stop admits but another
 * aperture blocks is vignetted, not unaimed. The solve depends only on the request, field, channel and the sample
 * itself: no state carries between samples, and the per-field model reused across calls is the one a fresh build
 * returns, so a cache hit never changes a bit.
 *
 * @param request - prepared geometry and the current stop radius R
 * @param samples - pupil samples in normalised stop coordinates
 * @param geometry - field launch: scalar or vector off-axis geometry, a finite object point or a solved launch frame
 * @param channel - chromatic channel the rays are aimed at; the authored reference indices when absent
 * @returns aimed launch, or null when the request has no stop or surfaces
 */
export function prepareAimedPupilLaunch(
  request: AnalysisRequest,
  samples: readonly AimedPupilSampleInput[],
  geometry: AimedPupilFieldGeometry,
  channel?: ChromaticChannel,
): AimedPupilLaunch | null {
  const { stopSemiDiameterMm, entrancePupilSemiDiameterMm } = request.aperture;
  return prepareAimedPupilLaunchForState(
    request.preparedGeometry,
    { stopSemiDiameterMm, launchScaleMm: entrancePupilSemiDiameterMm },
    samples,
    geometry,
    channel,
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
 * @param channel - chromatic channel the rays are aimed at
 * @returns aimed launch, or null when there is no stop or surface
 */
export function prepareAimedPupilLaunchForState(
  state: PreparedGeometry,
  aperture: AimedPupilAperture,
  samples: readonly AimedPupilSampleInput[],
  geometry: AimedPupilFieldGeometry,
  channel?: ChromaticChannel,
): AimedPupilLaunch | null {
  const R = aperture.stopSemiDiameterMm;
  if (!(R > 0) || !Number.isFinite(R) || state.surfaces.length < 1) return null;

  const toleranceMm = AIMED_PUPIL_RESIDUAL_TOLERANCE * R;
  const launchScale =
    aperture.launchScaleMm > 0 && Number.isFinite(aperture.launchScaleMm) ? aperture.launchScaleMm : R;
  const model = cachedFieldModel(state, geometry, R, launchScale, channel, () => {
    const frame = launchFrame(state, geometry);
    const stopAt = stopCrossingTracer(state, frame, channel);
    const blockedAt = apertureBlockTracer(state, frame, R + toleranceMm, channel);
    return fieldModel(frame, stopAt, blockedAt, toleranceMm, launchScale, R);
  });
  const { frame } = model;

  const unaimedByReason: Record<AimedPupilUnaimedReason, number> = {
    "aim-not-converged": 0,
    "stop-unreachable": 0,
    "trace-failed": 0,
  };
  const defaultWeight = samples.length > 0 ? 1 / samples.length : 1;
  const toRay = (index: number, xFraction: number, yFraction: number, weight: number): AimedPupilRay => {
    const target = frame.stopTarget(xFraction, yFraction, R);
    // Symmetric fields solve one canonical sample and map it back exactly, so mirror images agree to the bit.
    let symmetry: SampleSymmetry = "none";
    if (frame.meridional && xFraction < 0) symmetry = "mirror-x";
    else if (frame.axial && xFraction === 0 && yFraction < 0) symmetry = "negate-y";
    const canonical: Vec2 =
      symmetry === "mirror-x" ? [-target[0], target[1]] : symmetry === "negate-y" ? [target[0], -target[1]] : target;
    const solved = aimSample(model, canonical, frame.meridional && xFraction === 0);
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
    if (solve.status === "aimed") {
      const ray = frame.ray(solve.launch[0], solve.launch[1]);
      return { ...base, status: "aimed", reason: null, origin: ray.origin, direction: ray.direction };
    }
    if (solve.status === "blocked" && solve.blocked) {
      const ray = frame.ray(solve.blocked.launch[0], solve.blocked.launch[1]);
      return {
        ...base,
        launch: solve.blocked.launch,
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
 * @param channel - chromatic channel the launch was aimed at
 * @returns engine, skew-result and meridional-result tracers
 */
export function prepareAimedPupilTrace(
  state: PreparedGeometry,
  launch: Pick<AimedPupilLaunch, "clipSemiDiameterMm" | "launchBoundT">,
  channel?: ChromaticChannel,
): AimedPupilTrace {
  const shared = {
    checkSemiDiameter: true,
    stopSemiDiameter: launch.clipSemiDiameterMm,
    stopOnClip: true,
    directionNormalized: true,
    launchBoundT: launch.launchBoundT,
    ...channelTraceOptions(state, channel),
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

function channelTraceOptions(
  state: PreparedGeometry,
  channel: ChromaticChannel | undefined,
): Pick<TraceOptions, "indexAtSurface" | "wavelengthNm"> {
  return channel
    ? {
        indexAtSurface: (i, nd) => state.lens.dispersion[i]?.indexAt(channel) ?? nd,
        wavelengthNm: CHROMATIC_CHANNEL_WAVELENGTH_NM[channel],
      }
    : {};
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
  channel: ChromaticChannel | undefined,
): (launch: Vec2) => Vec2 | null {
  const stopIndex = state.lens.stop.surfaceIndex;
  const spectral = channelTraceOptions(state, channel);
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
 * The MTF's classifier decides: an aperture clip, or a failed intersection proven to miss the next surface's clear
 * cap, is a rim's blocking. Total internal reflection is not an aperture, so a target only totally reflected rays
 * could reach stays unreachable, as lens-design programs report a failed aim; an unresolved ray never poses as
 * vignetting either.
 *
 * @returns the blocking surface before the stop, or null
 */
function apertureBlockTracer(
  state: PreparedGeometry,
  frame: LaunchFrame,
  clipSemiDiameterMm: number,
  channel: ChromaticChannel | undefined,
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
    ...channelTraceOptions(state, channel),
  });
  return (launch) => {
    const result = trace(frame.ray(launch[0], launch[1]));
    if (result.status === "ok" || result.failureReason === "totalInternalReflection") return null;
    if (traceRayClassification(result, state, clipSemiDiameterMm) !== "blocked") return null;
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
  channel: ChromaticChannel | undefined,
  build: () => FieldModel,
): FieldModel {
  const key = [fieldGeometryKey(geometry), keyNumber(stopSemiDiameterMm), keyNumber(launchScale), channel ?? ""].join(
    "|",
  );
  let models = fieldModelsByState.get(state);
  if (!models) {
    models = new Map();
    fieldModelsByState.set(state, models);
  }
  const cached = models.get(key);
  if (cached) return cached;
  const model = build();
  if (models.size >= FIELD_MODEL_CACHE_LIMIT) {
    const oldest = models.keys().next().value;
    if (oldest !== undefined) models.delete(oldest);
  }
  models.set(key, model);
  return model;
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

function aimSample(model: FieldModel, target: Vec2, pinA: boolean): SampleSolve {
  if (!model.chiefStop)
    return { status: "unaimed", reason: "trace-failed", launch: model.chief, stop: null, iterations: 0 };
  const start = chiefStart(model);
  // The stop centre is the chief ray itself, accepted on the chief-ray solve's own terms and never re-solved.
  if (target[0] === 0 && target[1] === 0 && Math.hypot(start.stop[0], start.stop[1]) <= model.chiefAcceptMm)
    return { status: "aimed", reason: null, launch: start.launch, stop: start.stop, iterations: 0 };
  // A fitted seed the tracer cannot follow falls back to the chief's, which also finds where a blocked target's
  // reachable region ends.
  const fitted = model.fit && fittedStart(model, model.fit, target, pinA);
  if (fitted) return newtonAim(model, target, fitted, pinA, true);
  const solve = newtonAim(model, target, start, pinA, true);
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
 * toward the target could not reach the stop because it left a clear aperture, and either the launch it left from is
 * itself vignetted (nothing further out gets through; the transmitted part of an ordinary stop is convex enough) or
 * no shorter step reaches the stop either. A step that cannot be traced for any other reason, or a folded (singular)
 * map, ends it as `stop-unreachable`, as does reaching the iteration cap while its steps cannot be traced and no rim
 * is proven to stop them. The iteration cap otherwise, or a step that stops reducing the residual, ends it as
 * `aim-not-converged`: a stall is never reported as a block.
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
    // Pressed against the edge of the traceable region by steps no rim is proven to stop, the target is out of reach.
    if (iterations >= AIMED_PUPIL_MAX_ITERATIONS)
      return endUnconverged(atEdge && !lastBlock ? "stop-unreachable" : "aim-not-converged");
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
