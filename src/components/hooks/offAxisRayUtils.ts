import { computeStateAwareOffAxisFieldGeometry } from "../../optics/aberration/offAxis.js";
import { eflAtZoom, halfFieldAtZoom, tracingHalfFieldAtZoom, traceRay } from "../../optics/optics.js";
import { ENABLE_EDGE_PROJECTION } from "../../utils/featureFlags.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { OffAxisMode } from "../../types/state.js";

export interface OffAxisTraceGeometry {
  uField: number;
  yChief: number;
  edgeEnd: number[];
  useEdge: boolean;
}

export function computeOffAxisTraceGeometry({
  L,
  zPos,
  IMG_MM,
  focusT,
  zoomT,
  aberrationT = 0,
  sx,
  sy,
  showOffAxis,
}: {
  L: RuntimeLens;
  zPos: number[];
  IMG_MM: number;
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  sx: (z: number) => number;
  sy: (y: number) => number;
  showOffAxis: OffAxisMode;
}): OffAxisTraceGeometry | null {
  // Off-axis ray rendering uses `tracingHalfField` (slope-launch-bisected with
  // safety margin), not the declared `halfField`. For fisheyes the declared
  // half-field can be much wider than what chief rays can physically traverse,
  // and we want the visible off-axis bundle to actually reach the image plane.
  // For rectilinear lenses the ratio is `TRACING_SAFETY_FACTOR` (e.g., 0.9).
  const halfDeg = halfFieldAtZoom(zoomT, L);
  const tracingDeg = tracingHalfFieldAtZoom(zoomT, L);
  const safeFieldFrac = halfDeg > 0 ? L.offAxisFieldFrac * (tracingDeg / halfDeg) : L.offAxisFieldFrac;
  const geometry = computeStateAwareOffAxisFieldGeometry(L, zPos, focusT, zoomT, safeFieldFrac, undefined, aberrationT);
  if (geometry === null) return null;
  const { fieldAngleDeg: currentOffAxisDeg, uField, yChief } = geometry;

  const useEdge = ENABLE_EDGE_PROJECTION && showOffAxis === "edge";
  let edgeImgH: number;
  if (useEdge) {
    const chiefTrace = traceRay(yChief, uField, zPos, focusT, zoomT, undefined, false, L, aberrationT);
    const lastSurfZ = zPos[L.N - 1];
    const chiefEndY = chiefTrace.y + chiefTrace.u * (IMG_MM - lastSurfZ);
    edgeImgH = isFinite(chiefEndY) ? chiefEndY : -(eflAtZoom(zoomT, L) * Math.tan((currentOffAxisDeg * Math.PI) / 180));
  } else {
    edgeImgH = -(eflAtZoom(zoomT, L) * Math.tan((currentOffAxisDeg * Math.PI) / 180));
  }

  return { uField, yChief, edgeEnd: [sx(IMG_MM), sy(edgeImgH)], useEdge };
}
