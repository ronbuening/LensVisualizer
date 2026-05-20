import type { LensProjectionConfig, RuntimeLens } from "../types/optics.js";

export type ProjectionReferenceKind = "rectilinear" | "fisheye-equidistant";

export interface ProjectionReference {
  kind: ProjectionReferenceKind;
  label: string;
  shortLabel: string;
  focalScaleMm: number;
}

export interface ProjectionFieldSlopes {
  fieldSlopeX: number;
  fieldSlopeY: number;
  equivalentAngleDeg: number;
}

export function resolveProjection(projection?: LensProjectionConfig): LensProjectionConfig {
  return projection ?? { kind: "rectilinear" };
}

export function distortionProjectionReferenceForLens(L: RuntimeLens, rectilinearScale: number): ProjectionReference {
  const projection = resolveProjection(L.projection);
  if (projection.kind === "fisheye-equidistant") {
    return {
      kind: "fisheye-equidistant",
      label: "Equidistant projection residual",
      shortLabel: "equidistant",
      focalScaleMm: projection.focalLengthMm,
    };
  }

  return {
    kind: "rectilinear",
    label: "Rectilinear distortion",
    shortLabel: "rectilinear",
    focalScaleMm: rectilinearScale,
  };
}

export function projectionImageHeightForAngle(reference: ProjectionReference, fieldAngleRad: number): number {
  switch (reference.kind) {
    case "fisheye-equidistant":
      return reference.focalScaleMm * fieldAngleRad;
    case "rectilinear":
    default:
      return reference.focalScaleMm * Math.tan(fieldAngleRad);
  }
}

export function projectionFieldAngleForImageHeight(reference: ProjectionReference, imageHeight: number): number {
  const radius = Math.abs(imageHeight);
  if (!isFinite(radius) || reference.focalScaleMm <= 0) return NaN;

  switch (reference.kind) {
    case "fisheye-equidistant":
      return radius / reference.focalScaleMm;
    case "rectilinear":
    default:
      return Math.atan(radius / reference.focalScaleMm);
  }
}

export function projectionFieldSlopesForImagePoint(
  reference: ProjectionReference,
  imageX: number,
  imageY: number,
): ProjectionFieldSlopes | null {
  const radius = Math.hypot(imageX, imageY);
  if (!isFinite(radius)) return null;
  if (radius < 1e-12) {
    return { fieldSlopeX: 0, fieldSlopeY: 0, equivalentAngleDeg: 0 };
  }

  const theta = projectionFieldAngleForImageHeight(reference, radius);
  if (!isFinite(theta) || theta < 0 || theta >= Math.PI / 2) return null;

  const slopeMagnitude = Math.tan(theta);
  return {
    fieldSlopeX: (imageX / radius) * slopeMagnitude,
    fieldSlopeY: (-imageY / radius) * slopeMagnitude,
    equivalentAngleDeg: (theta * 180) / Math.PI,
  };
}
