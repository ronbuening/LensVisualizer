import { computeStateAwareOffAxisFieldGeometry } from "../../optics/aberration/offAxis.js";
import {
  computeFieldGeometryAtState,
  eflAtZoom,
  halfFieldAtZoom,
  solveChiefRay,
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

  // Promote to vector-launch only when the declared off-axis field exceeds the
  // slope-valid tracing half-field, and only for fisheye projections. Below the
  // cap the slope path is sufficient and cheaper; rectilinear lenses keep the
  // pre-existing safe-zone clamp.
  const declaredOffAxisDeg = halfDeg * L.offAxisFieldFrac;
  if (isFisheye && declaredOffAxisDeg > tracingDeg) {
    const stateGeometry = computeFieldGeometryAtState(focusT, zoomT, L, aberrationT);
    const solve = solveChiefRay(declaredOffAxisDeg, focusT, zoomT, L, stateGeometry, aberrationT);
    if (!solve.vectorLaunch) return null;

    const idealEdgeImgH = idealOffAxisImageHeight(L, zoomT, declaredOffAxisDeg);
    let edgeImgH = idealEdgeImgH;
    if (useEdge) {
      const chiefTrace = traceRayVector(solve.vectorLaunch, zPos, undefined, false, L, focusT, zoomT, aberrationT);
      const chiefEndY = chiefTrace.y + chiefTrace.u * (IMG_MM - zPos[L.N - 1]);
      if (isFinite(chiefEndY)) edgeImgH = chiefEndY;
    }
    return {
      kind: "vector",
      fieldAngleDeg: declaredOffAxisDeg,
      vectorLaunch: solve.vectorLaunch,
      edgeEnd: [sx(IMG_MM), sy(edgeImgH)],
      useEdge,
    };
  }

  // Slope path. Fisheye lenses within the slope-safe zone launch at the
  // declared field directly; rectilinear lenses keep the safe-zone clamp.
  const fieldFrac = isFisheye || halfDeg <= 0 ? L.offAxisFieldFrac : L.offAxisFieldFrac * (tracingDeg / halfDeg);
  const geometry = computeStateAwareOffAxisFieldGeometry(L, zPos, focusT, zoomT, fieldFrac, undefined, aberrationT);
  if (geometry === null) return null;
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
