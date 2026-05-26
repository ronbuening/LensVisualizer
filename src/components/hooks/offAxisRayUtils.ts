import {
  computeProjectionAwareOffAxisFieldGeometry,
  isOffAxisVectorFieldGeometry,
} from "../../optics/aberration/offAxis.js";
import {
  eflAtZoom,
  halfFieldAtZoom,
  traceRay,
  traceRayVector,
  tracingHalfFieldAtZoom,
  type VectorFieldRayLaunch,
} from "../../optics/optics.js";
import { isFisheyeProjection, projectionImageHeightForLensAngle } from "../../optics/projection.js";
import { ENABLE_EDGE_PROJECTION } from "../../utils/featureFlags.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { OffAxisMode } from "../../types/state.js";

export type OffAxisTraceGeometry =
  | {
      kind: "slope";
      fieldAngleDeg: number;
      uField: number;
      yChief: number;
      edgeEnd: number[];
      useEdge: boolean;
    }
  | {
      kind: "vector";
      fieldAngleDeg: number;
      vectorLaunch: VectorFieldRayLaunch;
      edgeEnd: number[];
      useEdge: boolean;
    };

function idealOffAxisImageHeight(L: RuntimeLens, zoomT: number, fieldAngleDeg: number): number {
  const thetaRad = (fieldAngleDeg * Math.PI) / 180;
  return -projectionImageHeightForLensAngle(L, eflAtZoom(zoomT, L), thetaRad, zoomT);
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
  const halfDeg = halfFieldAtZoom(zoomT, L);
  const tracingDeg = tracingHalfFieldAtZoom(zoomT, L);
  const useEdge = ENABLE_EDGE_PROJECTION && showOffAxis === "edge";
  const isFisheye = isFisheyeProjection(L.projection);

  // Fisheye lenses launch at the declared field and let the optics helper
  // promote to vector geometry when the field exceeds the slope-safe cone.
  // Rectilinear lenses keep the pre-existing safe-zone clamp.
  const fieldFrac = isFisheye || halfDeg <= 0 ? L.offAxisFieldFrac : L.offAxisFieldFrac * (tracingDeg / halfDeg);
  const geometry = computeProjectionAwareOffAxisFieldGeometry(
    L,
    zPos,
    focusT,
    zoomT,
    fieldFrac,
    undefined,
    aberrationT,
  );
  if (geometry === null) return null;

  if (isOffAxisVectorFieldGeometry(geometry)) {
    const idealEdgeImgH = idealOffAxisImageHeight(L, zoomT, geometry.fieldAngleDeg);
    let edgeImgH = idealEdgeImgH;
    if (useEdge) {
      const chiefTrace = traceRayVector(geometry.vectorLaunch, zPos, undefined, false, L, focusT, zoomT, aberrationT);
      const chiefEndY = chiefTrace.y + chiefTrace.u * (IMG_MM - zPos[L.N - 1]);
      if (isFinite(chiefEndY)) edgeImgH = chiefEndY;
    }
    return {
      kind: "vector",
      fieldAngleDeg: geometry.fieldAngleDeg,
      vectorLaunch: geometry.vectorLaunch,
      edgeEnd: [sx(IMG_MM), sy(edgeImgH)],
      useEdge,
    };
  }

  const { uField, yChief, fieldAngleDeg } = geometry;

  const idealEdgeImgH = idealOffAxisImageHeight(L, zoomT, fieldAngleDeg);
  let edgeImgH = idealEdgeImgH;
  if (useEdge) {
    const chiefTrace = traceRay(yChief, uField, zPos, focusT, zoomT, undefined, false, L, aberrationT);
    const chiefEndY = chiefTrace.y + chiefTrace.u * (IMG_MM - zPos[L.N - 1]);
    if (isFinite(chiefEndY)) edgeImgH = chiefEndY;
  }

  return {
    kind: "slope",
    fieldAngleDeg,
    uField,
    yChief,
    edgeEnd: [sx(IMG_MM), sy(edgeImgH)],
    useEdge,
  };
}
