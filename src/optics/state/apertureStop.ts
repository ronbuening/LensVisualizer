/**
 * Aperture stop rule — the stop radius for a marked f-number.
 *
 * One rule at every f-number: the paraxial entrance-pupil diameter is F/N (OpticStudio's "Image Space F/#" system
 * aperture, the textbook f-number). F is the aperture reference focal length, the EFL or a fisheye's projection
 * focal length. The stop radius is (F / 2N) times the paraxial marginal ray's height ratio at the stop, evaluated at
 * infinity focus of the current zoom position; focus does not move the iris.
 *
 * Exceptions keep a physical wide-open stop (`ApertureStopRule`): a published zoom schedule, a fixed-iris zoom, an
 * authored stop inside an element, and a folded system's authored stop. Stopped-down f-numbers follow the rule on
 * every lens and never open past the wide-open stop.
 */

import type { CompiledLens, CompiledPrescription, LensConstants } from "../types.js";
import type { RuntimeLens } from "../../types/optics.js";
import { traceParaxialSurfaces } from "../math/paraxial.js";
import { fisheyeProjectionFocalLengthAtZoom } from "../field/projection.js";
import { compiledLensFromRuntime } from "../prescription/identity.js";
import { resolveControlledThickness } from "./layout.js";
import { clampStationControl, interpolateStationTable } from "./stationTables.js";

/** Records the rule reads; a prescription before its constants exist is enough for a sequential lens. */
export type StopRuleLens = Pick<
  CompiledPrescription,
  "surfaces" | "variables" | "flags" | "aberrationControl" | "stop" | "projection"
> & { constants?: Pick<LensConstants, "apertureReferenceFocalLength" | "EP"> };

/** Paraxial first-order data of the rule at one zoom position, infinity focus, default aberration spacing. */
export interface StopRuleGeometry {
  /** Aperture reference focal length F in mm: the paraxial EFL, or a fisheye's projection focal length. */
  referenceFocalLengthMm: number;
  /** Paraxial marginal-ray height at the stop per unit entrance height (y = 1, u = 0); F/2N times it is the stop. */
  stopHeightRatio: number;
}

/** Zoom positions memoized per lens; slider drags revisit a handful. */
const STOP_RULE_CACHE_LIMIT = 128;
const STOP_RULE_GEOMETRY_BY_LENS = new WeakMap<object, Map<number, StopRuleGeometry>>();

/**
 * Paraxial data the rule sizes the stop with at one zoom position.
 *
 * A sequential lens traces its surfaces at infinity focus and the zoom position, with the gaps `prepareState` gives
 * at aberration 0. A folded path is the one exception: the sequential kernel does not follow a fold, so it uses
 * the reference focal length and the generalized tracer's near-axis stop ratio (`EP.yRatio`) from its constants.
 *
 * @param lens - compiled lens, or a sequential prescription before its constants
 * @param zoomT - normalized zoom control, clamped to [0, 1]
 * @returns reference focal length and stop height ratio
 * @throws Error when a folded lens has no constants yet
 */
export function stopRuleGeometry(lens: StopRuleLens, zoomT: number): StopRuleGeometry {
  if (lens.flags.isFoldedOptics) {
    if (!lens.constants) throw new Error("A folded stop rule reads the lens constants");
    return {
      referenceFocalLengthMm: lens.constants.apertureReferenceFocalLength,
      stopHeightRatio: lens.constants.EP.yRatio,
    };
  }
  const controlT = clampStationControl(zoomT) || 0;
  let byZoom = STOP_RULE_GEOMETRY_BY_LENS.get(lens);
  const cached = byZoom?.get(controlT);
  if (cached) return cached;
  const surfaces = lens.surfaces.map((surface) => ({
    ...surface,
    d: resolveControlledThickness(
      surface.d,
      lens.variables.bySurfaceIndex[surface.physicalIndex],
      lens.aberrationControl?.varBySurfaceIndex[surface.physicalIndex],
      lens.flags.isZoom,
      0,
      controlT,
      0,
      lens.variables.focusPositions,
    ),
  }));
  const marginal = traceParaxialSurfaces(surfaces, 1, 0, { stopAt: lens.stop.surfaceIndex });
  const image = traceParaxialSurfaces(surfaces, 1, 0, { skipLastTransfer: true });
  const geometry = Object.freeze({
    referenceFocalLengthMm: fisheyeProjectionFocalLengthAtZoom(lens.projection.config, controlT) ?? -1 / image.u,
    stopHeightRatio: marginal.y,
  });
  if (!byZoom) {
    byZoom = new Map();
    STOP_RULE_GEOMETRY_BY_LENS.set(lens, byZoom);
  }
  if (byZoom.size >= STOP_RULE_CACHE_LIMIT) byZoom.delete(byZoom.keys().next().value!);
  byZoom.set(controlT, geometry);
  return geometry;
}

/**
 * The rule alone: the stop radius whose paraxial entrance pupil is F/N.
 *
 * @param lens - compiled lens, or a sequential prescription before its constants
 * @param fNumber - f-number N
 * @param zoomT - normalized zoom control
 * @returns stop semi-diameter (F / 2N) × the stop height ratio, in mm
 */
export function fNumberRuleStop(lens: StopRuleLens, fNumber: number, zoomT: number): number {
  const { referenceFocalLengthMm, stopHeightRatio } = stopRuleGeometry(lens, zoomT);
  return Math.abs((referenceFocalLengthMm / (2 * fNumber)) * stopHeightRatio);
}

/**
 * Marked wide-open f-number at a zoom position: the station values, interpolated linearly in zoom between stations.
 *
 * @param constants - lens constants
 * @param zoomT - normalized zoom control
 * @returns wide-open f-number
 */
function wideOpenFNumber(constants: Pick<LensConstants, "isZoom" | "zoomFOPENs" | "FOPEN">, zoomT: number): number {
  if (!constants.isZoom || !constants.zoomFOPENs) return constants.FOPEN;
  return interpolateStationTable(clampStationControl(zoomT), constants.zoomFOPENs);
}

/**
 * The wide-open stop at a zoom position.
 *
 * - `"f-number"`: the rule at the marked wide-open f-number of this zoom position. A prime's is `stopPhysSD`.
 *   Between zoom stations the wide-open f-number is interpolated, and the rule is evaluated at the zoom position
 *   itself, so the paraxial entrance pupil is F/N there too.
 * - `"schedule"`: the published station radii, interpolated linearly between stations.
 * - `"fixed-iris"`, `"authored"`: the one physical stop, `stopPhysSD`.
 *
 * @param lens - compiled lens
 * @param zoomT - normalized zoom control, clamped to [0, 1]
 * @returns wide-open stop semi-diameter in mm
 */
export function wideOpenStop(lens: StopRuleLens & Pick<CompiledLens, "constants">, zoomT: number): number {
  const constants = lens.constants;
  switch (constants.stopRule) {
    case "f-number":
      return constants.isZoom ? fNumberRuleStop(lens, wideOpenFNumber(constants, zoomT), zoomT) : constants.stopPhysSD;
    case "schedule":
      return scheduledStop(constants, zoomT);
    default:
      // "fixed-iris" and "authored": the one physical stop.
      return constants.stopPhysSD;
  }
}

function scheduledStop(constants: Pick<LensConstants, "isZoom" | "zoomStopSDs" | "stopPhysSD">, zoomT: number) {
  const values = constants.zoomStopSDs;
  if (!constants.isZoom || !values || values.length < 2) return constants.stopPhysSD;
  return interpolateStationTable(clampStationControl(zoomT), values);
}

/**
 * The stop a lens traces at a marked f-number.
 *
 * At or below the wide-open f-number of the zoom position this is the wide-open stop, so an exception keeps its
 * physical stop there. Above it the rule sets the stop, capped at the wide-open stop: an iris cannot open past it.
 *
 * @param lens - compiled lens
 * @param fNumber - marked f-number N
 * @param zoomT - normalized zoom control
 * @returns stop semi-diameter in mm
 */
export function stopForFNumber(lens: StopRuleLens & Pick<CompiledLens, "constants">, fNumber: number, zoomT: number) {
  const wideOpen = wideOpenStop(lens, zoomT);
  if (!(fNumber > wideOpenFNumber(lens.constants, zoomT))) return wideOpen;
  return Math.min(wideOpen, fNumberRuleStop(lens, fNumber, zoomT));
}

/**
 * Read the wide-open stop for a RuntimeLens.
 *
 * Only the f-number rule on a zoom needs the compiled geometry; every other lens reads its constants.
 *
 * @param zoomT - normalized zoom control
 * @param L - runtime lens
 * @returns wide-open stop semi-diameter in mm
 */
export function wideOpenStopAtZoom(zoomT: number, L: RuntimeLens): number {
  if (L.stopRule === "schedule") return scheduledStop(L, zoomT);
  if (L.stopRule !== "f-number" || !L.isZoom) return L.stopPhysSD;
  return wideOpenStop(compiledLensFromRuntime(L), zoomT);
}

/**
 * The stop a RuntimeLens traces at a marked f-number (`stopForFNumber`).
 *
 * @param fNumber - marked f-number N
 * @param zoomT - normalized zoom control
 * @param L - runtime lens
 * @returns stop semi-diameter in mm
 */
export function stopSemiDiameterForFNumber(fNumber: number, zoomT: number, L: RuntimeLens): number {
  return stopForFNumber(compiledLensFromRuntime(L), fNumber, zoomT);
}

/**
 * The rule alone for a RuntimeLens (`fNumberRuleStop`), without a lens's wide-open exception or cap.
 *
 * @param fNumber - f-number N
 * @param zoomT - normalized zoom control
 * @param L - runtime lens
 * @returns stop semi-diameter in mm
 */
export function fNumberRuleStopSemiDiameter(fNumber: number, zoomT: number, L: RuntimeLens): number {
  return fNumberRuleStop(compiledLensFromRuntime(L), fNumber, zoomT);
}
