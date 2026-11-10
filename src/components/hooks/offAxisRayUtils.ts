import { computeOffAxisFieldGeometry, isOffAxisVectorFieldGeometry } from "../../optics/analysis.js";
import {
  eflAtZoomClamped as eflAtZoom,
  halfFieldAtZoom,
  landImageSurfaceMeridional,
  prepareRuntimeState,
  stateWithZ,
  traceRay,
  traceRayVector,
  tracingHalfFieldAtZoom,
} from "../../optics/optics.js";
import type { VectorFieldRayLaunch } from "../../optics/fieldGeometry.js";
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

/**
 * Diagram end of the off-axis fan's edge marker at an image height: on a flat plane at `IMG_MM`, or on the curved
 * image surface there.
 */
function imageEdgeEnd(L: RuntimeLens, IMG_MM: number, height: number): [number, number] {
  const sag = L.imageSurface && !L.isFoldedOptics ? L.imageSurface.sagAt(0, height) : 0;
  return [IMG_MM + (Number.isFinite(sag) ? sag : 0), height];
}

/** Lateral height at which a meridional ray reported at the last vertex reaches the image. */
function chiefEndHeight(L: RuntimeLens, IMG_MM: number, lastZ: number, y: number, u: number): number {
  if (!L.imageSurface || L.isFoldedOptics) return y + u * (IMG_MM - lastZ);
  return landImageSurfaceMeridional(L.imageSurface, y, u, lastZ, IMG_MM)?.y ?? NaN;
}

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
  const rectilinearTraceScale = halfDeg > 0 && Number.isFinite(tracingDeg) ? Math.min(1, tracingDeg / halfDeg) : 1;
  const fieldFrac = isFisheye ? L.offAxisFieldFrac : L.offAxisFieldFrac * rectilinearTraceScale;
  const state = stateWithZ(prepareRuntimeState(L, focusT, zoomT, aberrationT), zPos);
  const geometry = computeOffAxisFieldGeometry(state, fieldFrac);
  if (geometry === null) return null;

  if (isOffAxisVectorFieldGeometry(geometry)) {
    const idealEdgeImgH = idealOffAxisImageHeight(L, zoomT, geometry.fieldAngleDeg);
    let edgeImgH = idealEdgeImgH;
    if (useEdge) {
      const chiefTrace = traceRayVector(geometry.vectorLaunch, zPos, undefined, false, L, focusT, zoomT, aberrationT);
      const chiefEndY = chiefEndHeight(L, IMG_MM, zPos[L.N - 1], chiefTrace.y, chiefTrace.u);
      if (isFinite(chiefEndY)) edgeImgH = chiefEndY;
    }
    const [edgeZ, edgeY] = imageEdgeEnd(L, IMG_MM, edgeImgH);
    return {
      kind: "vector",
      fieldAngleDeg: geometry.fieldAngleDeg,
      vectorLaunch: geometry.vectorLaunch,
      edgeEnd: [sx(edgeZ), sy(edgeY)],
      useEdge,
    };
  }

  const { uField, yChief, fieldAngleDeg } = geometry;

  const idealEdgeImgH = idealOffAxisImageHeight(L, zoomT, fieldAngleDeg);
  let edgeImgH = idealEdgeImgH;
  if (useEdge) {
    const chiefTrace = traceRay(yChief, uField, zPos, focusT, zoomT, undefined, false, L, aberrationT);
    const chiefEndY = chiefEndHeight(L, IMG_MM, zPos[L.N - 1], chiefTrace.y, chiefTrace.u);
    if (isFinite(chiefEndY)) edgeImgH = chiefEndY;
  }

  const [edgeZ, edgeY] = imageEdgeEnd(L, IMG_MM, edgeImgH);
  return {
    kind: "slope",
    fieldAngleDeg,
    uField,
    yChief,
    edgeEnd: [sx(edgeZ), sy(edgeY)],
    useEdge,
  };
}
