/**
 * Finite-only diagram fans. Rays start at the authored finite object and are aimed at the stop as finite MTF aims
 * them, so the diagram and MTF share one object point.
 */
import { stateWithZ } from "../state/preparedGeometry.js";
import { prepareRuntimeState } from "../state/runtimeAdapters.js";
import { mtfFiniteConjugate, mtfFiniteObjectPoint } from "../analysis/mtf/mtfConjugates.js";
import { prepareAimedPupilLaunchForState, prepareAimedPupilTrace } from "../analysis/pupils/aimedPupil.js";
import type { RuntimeLens } from "../../types/optics.js";

export interface FiniteFocusFanRequest {
  focusT: number;
  stopSemiDiameterMm: number;
  /** Scale of the first launch guess; aiming then targets the stop rim. */
  entrancePupilSemiDiameterMm: number;
  /** Object-space field angle at the first vertex; 0 on axis. */
  fieldAngleDeg?: number;
  /** Meridional pupil fractions of the stop rim. */
  fractions: readonly number[];
  /** Diagram z positions, when the drawing translates the lens. */
  zPos?: readonly number[];
}

/**
 * Trace stop-aimed meridional samples from a finite-only lens's authored object.
 *
 * @param L - runtime lens declaring `focus.finiteOnly`
 * @param request - state, aperture, field and sampling of the fan
 * @returns one meridional trace per fraction
 */
export function traceFiniteFocusFan(L: RuntimeLens, request: FiniteFocusFanRequest) {
  const base = prepareRuntimeState(L, request.focusT, 0);
  const state = request.zPos ? stateWithZ(base, request.zPos) : base;
  const conjugate = mtfFiniteConjugate(state);
  if (!conjugate) throw new Error("Finite-only ray launch requires an explicit object conjugate");
  const objectPoint = mtfFiniteObjectPoint(state, conjugate, request.fieldAngleDeg ?? 0);
  if (!objectPoint) throw new Error("Finite-only object lies inside the optical system");
  const first = state.surfaces[0];
  const frontZ = first.z + Math.min(0, first.profile.sag(first.sd));
  // Start the drawn rays at the usual lead in front of the lens, or halfway to a nearer object.
  const leadZ = Math.max(frontZ - Math.max(10, L.rayLead), (objectPoint[2] + frontZ) / 2);
  const launch = prepareAimedPupilLaunchForState(
    state,
    { stopSemiDiameterMm: request.stopSemiDiameterMm, launchScaleMm: request.entrancePupilSemiDiameterMm },
    request.fractions.map((yFraction) => ({ xFraction: 0, yFraction })),
    { kind: "finite-object", objectPoint, leadZ },
  );
  if (!launch) throw new Error("Finite-only pupil launch is unavailable");
  const trace = prepareAimedPupilTrace(state, launch);
  return launch.rays.map((ray) => {
    if (ray.status === "unaimed") throw new Error(`Finite-only pupil aim unavailable: ${ray.reason}`);
    return trace.meridional(ray);
  });
}
