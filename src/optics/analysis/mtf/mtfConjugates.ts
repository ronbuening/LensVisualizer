/** Source-defined finite conjugates. Distance labels alone do not certify focus configurations. */

import { runtimeView } from "../../prescription/runtimeView.js";
import type { FiniteConjugate } from "../../../types/optics.js";
import type { PreparedGeometry, Vec3 } from "../../types.js";
import { projectionLaunchSlopeForField } from "../../field/projection.js";

export function mtfFiniteConjugate(state: PreparedGeometry): FiniteConjugate | undefined {
  if (state.aberrationT !== 0) return undefined;
  const source = state.lens.source;
  const count = source.zoom?.stations.length ?? 1;
  const conjugate = source.focus.conjugates?.find(
    (c) =>
      Math.abs(source.focus.keyframes[c.keyframe] - state.focusT) < 1e-8 &&
      Math.abs((count > 1 ? c.zoomStation / (count - 1) : 0) - state.zoomT) < 1e-8,
  );
  if (!conjugate) return undefined;
  return {
    objectDistanceMm: conjugate.objectDistanceMm,
    distanceReference: conjugate.distanceReference,
    source: conjugate.source,
    focusT: source.focus.keyframes[conjugate.keyframe],
    zoomT: count > 1 ? conjugate.zoomStation / (count - 1) : 0,
  };
}

export function mtfFiniteObjectPoint(
  state: PreparedGeometry,
  conjugate: FiniteConjugate,
  fieldAngle: number,
): Vec3 | null {
  const first = state.surfaces[0];
  const z = (conjugate.distanceReference === "image-plane" ? state.imgZ : first.z) - conjugate.objectDistanceMm;
  const slope = projectionLaunchSlopeForField(runtimeView(state.lens), fieldAngle);
  if (slope.status === "out-of-domain" || z >= first.z + Math.min(0, first.profile.sag(first.sd)) - 1e-3) return null;
  // Field angle is measured from the first vertex; all pupil rays share this one physical source point.
  return [0, (z - first.z) * slope.uField, z];
}
