/** Source-defined finite conjugates. Distance labels alone do not certify focus configurations. */
import { resolveLensSourceState, sourceFiniteConjugate } from "../sourceStates.js";
import type { FiniteConjugate } from "../../types/optics.js";
import type { PreparedOpticalState, Vec3 } from "../types.js";
import { projectionLaunchSlopeForField2 } from "../field/projection.js";

export function mtfFiniteConjugate(state: PreparedOpticalState): FiniteConjugate | undefined {
  return sourceFiniteConjugate(resolveLensSourceState(state.lens.source, state.focusT, state.zoomT, state.aberrationT));
}

export function mtfFiniteObjectPoint(
  state: PreparedOpticalState,
  conjugate: FiniteConjugate,
  fieldAngle: number,
): Vec3 | null {
  const first = state.surfaces[0];
  const z = (conjugate.distanceReference === "image-plane" ? state.imgZ : first.z) - conjugate.objectDistanceMm;
  const slope = projectionLaunchSlopeForField2(state.lens.runtime, fieldAngle);
  if (slope.status === "out-of-domain" || z >= first.z + Math.min(0, first.profile.sag(first.sd)) - 1e-3) return null;
  // Field angle is measured from the first vertex; all pupil rays share this one physical source point.
  return [0, (z - first.z) * slope.uField, z];
}
