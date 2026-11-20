/** Finite-only diagrams use the same actual object and stop aiming as finite MTF. */
import { stateWithZ } from "../state/preparedGeometry.js";
import { prepareRuntimeState } from "../state/runtimeAdapters.js";
import { finiteFocusConjugate } from "../state/finiteFocus.js";
import { mtfFiniteObjectPoint } from "../analysis/mtf/mtfConjugates.js";
import { prepareAimedPupilLaunchForState, prepareAimedPupilTrace } from "../analysis/pupils/aimedPupil.js";
import type { ChromaticChannel, RuntimeLens } from "../../types/optics.js";
/** Trace shared-stop-aimed meridional samples from the actual finite object, optionally in translated diagram coordinates. */
export function traceFiniteFocusFan(
  L: RuntimeLens,
  focusT: number,
  stopSemiDiameterMm: number,
  entrancePupilSemiDiameterMm: number,
  fieldAngleDeg: number,
  fractions: readonly number[],
  channel?: ChromaticChannel,
  zPos?: readonly number[],
) {
  const base = prepareRuntimeState(L, focusT, 0);
  const state = zPos ? stateWithZ(base, zPos) : base;
  const c = finiteFocusConjugate(L.source, state.focusT);
  if (!c) throw new Error("Finite-only ray launch requires an explicit object conjugate");
  const conjugate = { ...c, focusT: state.focusT, zoomT: 0 };
  const objectPoint = mtfFiniteObjectPoint(state, conjugate, fieldAngleDeg);
  if (!objectPoint) throw new Error("Finite-only object lies inside the optical system");
  const first = state.surfaces[0];
  const frontZ = first.z + Math.min(0, first.profile.sag(first.sd));
  const leadZ = Math.max(frontZ - Math.max(10, L.rayLead), (objectPoint[2] + frontZ) / 2);
  const launch = prepareAimedPupilLaunchForState(
    state,
    { stopSemiDiameterMm, launchScaleMm: entrancePupilSemiDiameterMm },
    fractions.map((yFraction) => ({ xFraction: 0, yFraction })),
    { kind: "finite-object", objectPoint, leadZ },
    channel,
  );
  if (!launch) throw new Error("Finite-only pupil launch is unavailable");
  const trace = prepareAimedPupilTrace(state, launch, channel);
  return launch.rays.map((ray) => {
    if (ray.status === "unaimed") throw new Error(`Finite-only pupil aim unavailable: ${ray.reason}`);
    return trace.meridional(ray);
  });
}
