import { computeStateAwareOffAxisFieldGeometry } from "../../optics/aberration/offAxis.js";
import { eflAtZoom, traceRay } from "../../optics/optics.js";
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
  sx,
  sy,
  showOffAxis,
}: {
  L: RuntimeLens;
  zPos: number[];
  IMG_MM: number;
  focusT: number;
  zoomT: number;
  sx: (z: number) => number;
  sy: (y: number) => number;
  showOffAxis: OffAxisMode;
}): OffAxisTraceGeometry | null {
  const geometry = computeStateAwareOffAxisFieldGeometry(L, zPos, focusT, zoomT, L.offAxisFieldFrac);
  if (geometry === null) return null;
  const { fieldAngleDeg: currentOffAxisDeg, uField, yChief } = geometry;

  const useEdge = ENABLE_EDGE_PROJECTION && showOffAxis === "edge";
  let edgeImgH: number;
  if (useEdge) {
    const chiefTrace = traceRay(yChief, uField, zPos, focusT, zoomT, undefined, false, L);
    const lastSurfZ = zPos[L.N - 1];
    const chiefEndY = chiefTrace.y + chiefTrace.u * (IMG_MM - lastSurfZ);
    edgeImgH = isFinite(chiefEndY) ? chiefEndY : -(eflAtZoom(zoomT, L) * Math.tan((currentOffAxisDeg * Math.PI) / 180));
  } else {
    edgeImgH = -(eflAtZoom(zoomT, L) * Math.tan((currentOffAxisDeg * Math.PI) / 180));
  }

  return { uField, yChief, edgeEnd: [sx(IMG_MM), sy(edgeImgH)], useEdge };
}
