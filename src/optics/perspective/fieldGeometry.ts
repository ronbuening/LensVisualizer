/** Projection, image-format, and fixed-sensor geometry for perspective fields. */

import { IMAGE_FORMAT_BY_ID, isImageFormatId, type ImageFormatMetadata } from "../../utils/catalog/lensTaxonomy.js";
import {
  projectionFieldAngleForImageHeight2,
  projectionImageHeightForAngle2,
  type ProjectionReference2,
} from "../field/projection.js";
import { eflAtFocus2 } from "../first-order/focusBreathing.js";
import { xpZRelLastSurfAtZoom } from "../layout.js";
import { intersectRayPlane } from "../math/plane.js";
import { add, dot, normalize, scale, subtract } from "../math/vector.js";
import type { Plane3, Vec3 } from "../types.js";
import { isPerspectiveDirectionInsideProjectionDomain } from "./chiefRay.js";
import { createSensorBasis, type SensorBasis } from "./sensorBasis.js";
import type { PerspectiveTraceContext } from "./trace.js";

/** Normalized coordinates on the fixed image format: +/-1 reaches each edge. */
export interface SensorUv {
  u: number;
  v: number;
}

export interface FieldPlaneFrame {
  plane: Plane3;
  uAxis: Vec3;
  vAxis: Vec3;
  halfWidthMm: number;
  halfHeightMm: number;
}

export type PerspectiveProjectionReference = ProjectionReference2;

/** Error raised when field sampling preconditions are not represented in lens data. */
export class PerspectiveFieldSamplingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PerspectiveFieldSamplingError";
  }
}

export function requirePerspectiveImageFormatMetadata(context: PerspectiveTraceContext): ImageFormatMetadata {
  const imageFormat = context.state.lens.source.imageFormat;
  if (!isImageFormatId(imageFormat)) {
    throw new PerspectiveFieldSamplingError(
      `Lens "${context.state.lens.key}" requires validated imageFormat metadata for perspective field sampling`,
    );
  }
  return IMAGE_FORMAT_BY_ID[imageFormat];
}

export function resolvePerspectiveFocalLength(context: PerspectiveTraceContext, override: number | undefined): number {
  const focalLengthMm =
    override ??
    eflAtFocus2(context.state.focusT, context.state.zoomT, context.state.lens.runtime, context.state.aberrationT);
  if (!Number.isFinite(focalLengthMm) || Math.abs(focalLengthMm) <= 1e-9) {
    throw new PerspectiveFieldSamplingError("Perspective field sampling requires a finite non-zero focal length");
  }
  return Math.abs(focalLengthMm);
}

export function perspectiveProjectionReference(
  context: PerspectiveTraceContext,
  focalScaleMm: number,
): PerspectiveProjectionReference {
  const projection = context.state.lens.projection.config;
  if (projection.kind === "rectilinear") {
    return {
      kind: projection.kind,
      label: "Rectilinear perspective field",
      shortLabel: "rectilinear",
      focalScaleMm,
    };
  }
  const projectionFocalLength = projectionValue(context, projection.focalLengthMm);
  if (!Number.isFinite(projectionFocalLength) || projectionFocalLength <= 0) {
    throw new PerspectiveFieldSamplingError(
      "Fisheye perspective field sampling requires a valid projection focal length",
    );
  }
  return {
    kind: projection.kind,
    label: `${projection.kind} perspective field`,
    shortLabel: projection.kind,
    focalScaleMm: projectionFocalLength,
  };
}

export function createFieldPlaneFrame(
  plane: Plane3,
  format: ImageFormatMetadata,
  suppliedBasis?: SensorBasis,
): FieldPlaneFrame {
  const basis = suppliedBasis ?? createSensorBasis(plane);
  return {
    plane: { ...plane, normal: basis.normal },
    uAxis: basis.u,
    vAxis: basis.v,
    halfWidthMm: format.widthMm / 2,
    halfHeightMm: format.heightMm / 2,
  };
}

export function pointForSensorUv(frame: FieldPlaneFrame, uv: SensorUv): Vec3 {
  return add(
    frame.plane.point,
    add(scale(frame.uAxis, uv.u * frame.halfWidthMm), scale(frame.vAxis, uv.v * frame.halfHeightMm)),
  );
}

export function sensorUvForPoint(frame: FieldPlaneFrame, point: Vec3): SensorUv {
  const offset = subtract(point, frame.plane.point);
  return {
    u: dot(offset, frame.uAxis) / frame.halfWidthMm,
    v: dot(offset, frame.vAxis) / frame.halfHeightMm,
  };
}

export function finiteSensorUv(uv: SensorUv): boolean {
  return Number.isFinite(uv.u) && Number.isFinite(uv.v);
}

export function sensorUvInsideFormat(uv: SensorUv): boolean {
  return finiteSensorUv(uv) && Math.abs(uv.u) <= 1 + 1e-9 && Math.abs(uv.v) <= 1 + 1e-9;
}

export function pointInsideSensor(frame: FieldPlaneFrame, point: Vec3 | null): boolean {
  return point !== null && sensorUvInsideFormat(sensorUvForPoint(frame, point));
}

export function idealPointForDirection(
  context: PerspectiveTraceContext,
  direction: Vec3,
  frame: FieldPlaneFrame,
  projection: PerspectiveProjectionReference,
): Vec3 | null {
  if (!isPerspectiveDirectionInsideProjectionDomain(context, direction)) return null;
  const coordinates = idealCoordinatesForDirection(direction, projection);
  if (!coordinates) return null;
  return add(frame.plane.point, add(scale(frame.uAxis, coordinates.u), scale(frame.vAxis, coordinates.v)));
}

export function poseIdealPointForDirection(
  context: PerspectiveTraceContext,
  directionLens: Vec3,
  intrinsicFrame: FieldPlaneFrame,
  exitPupilCenterLens: Vec3,
  projection: PerspectiveProjectionReference,
): Vec3 | null {
  const intrinsicIdealPoint = idealPointForDirection(context, directionLens, intrinsicFrame, projection);
  if (!intrinsicIdealPoint) return null;
  const exitPupilCenterCamera = context.pose.lensToCameraPoint(exitPupilCenterLens);
  const idealPointCamera = context.pose.lensToCameraPoint(intrinsicIdealPoint);
  const connectorDirection = subtract(idealPointCamera, exitPupilCenterCamera);
  const hit = intersectRayPlane({ origin: exitPupilCenterCamera, direction: connectorDirection }, context.sensorPlane);
  return hit?.point ?? null;
}

export function invertSensorPointToLensDirection(
  context: PerspectiveTraceContext,
  sensorPoint: Vec3,
  intrinsicFrame: FieldPlaneFrame,
  exitPupilCenterLens: Vec3,
  projection: PerspectiveProjectionReference,
): Vec3 | null {
  const exitPupilCenterCamera = context.pose.lensToCameraPoint(exitPupilCenterLens);
  const posedIntrinsicPlane = context.pose.lensToCameraPlane(intrinsicFrame.plane);
  const hit = intersectRayPlane(
    { origin: exitPupilCenterCamera, direction: subtract(sensorPoint, exitPupilCenterCamera) },
    posedIntrinsicPlane,
  );
  if (!hit) return null;

  const intrinsicPoint = context.pose.cameraToLensPoint(hit.point);
  const intrinsicCoordinates = sensorUvForPoint(intrinsicFrame, intrinsicPoint);
  const imageU = intrinsicCoordinates.u * intrinsicFrame.halfWidthMm;
  const imageV = intrinsicCoordinates.v * intrinsicFrame.halfHeightMm;
  const direction = directionForIdealCoordinates(imageU, imageV, projection);
  return direction && isPerspectiveDirectionInsideProjectionDomain(context, direction) ? direction : null;
}

export function directionForIdealCoordinates(
  imageU: number,
  imageV: number,
  projection: PerspectiveProjectionReference,
): Vec3 | null {
  const radius = Math.hypot(imageU, imageV);
  if (!Number.isFinite(radius)) return null;
  if (radius <= 1e-12) return [0, 0, 1];
  const theta = projectionFieldAngleForImageHeight2(projection, radius);
  if (!Number.isFinite(theta)) return null;
  const sinTheta = Math.sin(theta);
  return normalize([-(imageU / radius) * sinTheta, -(imageV / radius) * sinTheta, Math.cos(theta)]);
}

export function idealCoordinatesForDirection(
  direction: Vec3,
  projection: PerspectiveProjectionReference,
): SensorUv | null {
  const transverse = Math.hypot(direction[0], direction[1]);
  if (transverse <= 1e-12) return { u: 0, v: 0 };
  const theta = Math.atan2(transverse, direction[2]);
  const radius = projectionImageHeightForAngle2(projection, theta);
  if (!Number.isFinite(radius)) return null;
  return { u: (-direction[0] / transverse) * radius, v: (-direction[1] / transverse) * radius };
}

export function paraxialExitPupilCenterLens(context: PerspectiveTraceContext): Vec3 {
  const lastSurfaceZ = context.state.z[context.state.z.length - 1] ?? 0;
  const relative = xpZRelLastSurfAtZoom(context.state.zoomT, context.state.lens.runtime);
  return [0, 0, lastSurfaceZ + (Number.isFinite(relative) ? relative : 0)];
}

function projectionValue(context: PerspectiveTraceContext, value: number | readonly number[]): number {
  if (typeof value === "number") return value;
  if (value.length === 0) return NaN;
  if (value.length === 1) return value[0];
  const scaled = Math.max(0, Math.min(1, context.state.zoomT)) * (value.length - 1);
  const lo = Math.floor(scaled);
  const hi = Math.min(value.length - 1, lo + 1);
  return value[lo] + (value[hi] - value[lo]) * (scaled - lo);
}
