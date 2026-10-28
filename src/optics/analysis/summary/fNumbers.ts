/**
 * The working f-number of the current state, from the real marginal ray (OpticStudio's "Working F/#").
 *
 * Working f/# = 1 / (2 n′ sin θ′), θ′ the image-space angle of the real marginal ray from the axial object point
 * through the stop's rim, at the authored indices: the d or e line each glass is given at, which the result names. The ray is the aimed pupil launch's axial zone at f = 1
 * under its rim rule; the object is at the current object distance (`paraxialObjectVergence`), infinite at
 * infinity focus. A ray that is vignetted, unaimed or cannot be traced reports that state, never another figure.
 */

import type { AnalysisRequest } from "../request.js";
import type { AimedPupilFieldGeometry, AimedPupilUnaimedReason } from "../pupils/aimedPupil.js";
import { prepareAimedPupilLaunch, prepareAimedPupilTrace } from "../pupils/aimedPupil.js";
import type { PreparedGeometry, Vec3 } from "../../types.js";
import type { RefractiveIndexReferenceLine } from "../../../types/optics.js";
import type { TraceFailureReason } from "../../trace/types.js";
import { traceRayClassification } from "../../trace/rayClassification.js";
import { paraxialObjectVergence } from "../../field/geometry.js";

/** Real working f-number, or why the marginal ray gives none. */
export type WorkingFNumberResult =
  /** `indexLine`: the line of the authored indices, or `mixed` when the glasses are given at different lines. */
  | { status: "traced"; value: number; indexLine: RefractiveIndexReferenceLine | "mixed" }
  /** A clear aperture stops the marginal ray: before the stop (`blocked`, the aim's outcome) or after it. */
  | { status: "vignetted"; surfaceLabel: string; beforeStop: boolean }
  | { status: "unaimed"; reason: AimedPupilUnaimedReason }
  | { status: "unavailable"; reason: "no-stop" | "object-inside-lens" | TraceFailureReason | "trace-failed" };

const AXIAL_FIELD: AimedPupilFieldGeometry = { uField: 0, yChief: 0 };

/**
 * Trace the real marginal ray and read its working f-number.
 *
 * @param request - prepared geometry and the current stop radius
 * @returns 1 / (2 n′ sin θ′), or the marginal ray's state
 */
export function computeWorkingFNumber(request: AnalysisRequest): WorkingFNumberResult {
  const state = request.preparedGeometry;
  if (!(request.aperture.stopSemiDiameterMm > 0)) return { status: "unavailable", reason: "no-stop" };
  const field = axialObjectField(state);
  if (field === null) return { status: "unavailable", reason: "object-inside-lens" };
  const launch = prepareAimedPupilLaunch(request, [{ xFraction: 0, yFraction: 1 }], field);
  if (launch === null) return { status: "unavailable", reason: "no-stop" };
  const marginal = launch.rays[0];
  if (marginal.status === "unaimed") return { status: "unaimed", reason: marginal.reason };
  if (marginal.status === "blocked") {
    return { status: "vignetted", surfaceLabel: surfaceLabel(state, marginal.blockedAtSurfaceIndex), beforeStop: true };
  }
  const trace = prepareAimedPupilTrace(state, launch).engine({
    origin: marginal.origin,
    direction: marginal.direction,
  });
  const outcome = traceRayClassification(trace, state, launch.clipSemiDiameterMm);
  if (outcome === "blocked") {
    // A clip or total internal reflection ends on its own surface; a proven miss ends before the next one.
    const missed = trace.failureReason === "noBracket" || trace.failureReason === "noConvergedIntersection";
    const index = trace.terminalSurfaceIndex + (missed ? 1 : 0);
    return { status: "vignetted", surfaceLabel: surfaceLabel(state, index), beforeStop: false };
  }
  if (outcome === "failed") return { status: "unavailable", reason: trace.failureReason ?? "trace-failed" };
  const sine = sineToNormal(trace.terminalDirection, state.imagePlane.normal);
  const value = 1 / (2 * trace.finalMedium * sine);
  return Number.isFinite(value) && value > 0
    ? { status: "traced", value, indexLine: authoredIndexLine(state) }
    : { status: "unavailable", reason: "trace-failed" };
}

/**
 * Line of the authored indices of the glasses in the path.
 *
 * @param state - prepared geometry
 * @returns "d" or "e" when every glass is given at it, "mixed" otherwise; an all-air path reads "d"
 */
function authoredIndexLine(state: PreparedGeometry): RefractiveIndexReferenceLine | "mixed" {
  const lines = new Set(
    state.lens.elements
      .filter((element) => state.surfaces.some((surface) => surface.nd !== 1 && surface.elemId === element.id))
      .map((element) => element.source.indexReference ?? "d"),
  );
  if (lines.size > 1) return "mixed";
  return lines.has("e") ? "e" : "d";
}

/**
 * The axial object point at the current object distance, as an aimed-launch field.
 *
 * @param state - prepared geometry
 * @returns collimated axial field at infinity, the finite object point, or null when that point is not in front of
 * the first surface
 */
function axialObjectField(state: PreparedGeometry): AimedPupilFieldGeometry | null {
  const vergence = paraxialObjectVergence(state);
  if (vergence === 0) return AXIAL_FIELD;
  const first = state.surfaces[0];
  const frontZ = first.z + Math.min(0, first.profile.sag(first.sd));
  const objectZ = first.z - 1 / vergence;
  if (!(vergence > 0) || !(objectZ < frontZ)) return null;
  // The launch plane sits between the object and the first surface, as the MTF's finite launch does.
  return { kind: "finite-object", objectPoint: [0, 0, objectZ], leadZ: Math.max(frontZ - 1, (objectZ + frontZ) / 2) };
}

/** |d × n| for unit vectors: the sine of the angle between the ray and the image-plane normal. */
function sineToNormal(direction: Vec3, normal: Vec3): number {
  const [dx, dy, dz] = direction;
  const [nx, ny, nz] = normal;
  return Math.hypot(dy * nz - dz * ny, dz * nx - dx * nz, dx * ny - dy * nx);
}

function surfaceLabel(state: PreparedGeometry, index: number): string {
  return state.surfaces[index]?.label ?? `surface ${index}`;
}
