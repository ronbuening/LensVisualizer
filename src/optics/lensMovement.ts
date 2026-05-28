/**
 * Pure helpers for perspective-control lens movement.
 *
 * The v1 model keeps the optical prescription centered for tracing, then
 * displays the lens-space result in a shifted/tilted camera frame. The image
 * plane remains fixed, so exiting rays are projected to the original IMG line.
 */

import type { PerspectiveControlConfig, RayTraceResult, RuntimeLens } from "../types/optics.js";

/** User-facing movement controls in physical shift millimeters and tilt degrees. */
export interface LensMovementState {
  shiftMm: number;
  tiltDeg: number;
}

/** Movement state after clamping against a lens perspective-control capability. */
export interface ResolvedLensMovement extends LensMovementState {
  active: boolean;
  config: PerspectiveControlConfig | null;
}

/** Display transform callbacks for the 2D perspective-control movement layer. */
export interface LensMovementTransform extends ResolvedLensMovement {
  point: (z: number, y: number) => [number, number];
  slope: (u: number) => number;
  rayEnd: (lastZ: number, lastY: number, u: number, imagePlaneZ: number) => [number, number];
  trace: (result: RayTraceResult) => RayTraceResult;
  axis: (zStart: number, zEnd: number) => [[number, number], [number, number]];
}

const DEFAULT_SHIFT_STEP_MM = 0.1;
const DEFAULT_TILT_STEP_DEG = 0.1;
const IDENTITY_EPSILON = 1e-9;
const DEG_TO_RAD = Math.PI / 180;

/** Canonical zero shift/tilt movement state. */
export const ZERO_LENS_MOVEMENT: LensMovementState = Object.freeze({ shiftMm: 0, tiltDeg: 0 });

function finiteOrZero(value: number | undefined): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function clampToRange(value: number, [min, max]: [number, number]): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Resolve slider step sizes for a perspective-control lens.
 *
 * @param config - lens-authored shift/tilt capability metadata
 * @returns positive shift and tilt step sizes, falling back to project defaults
 */
export function perspectiveControlSteps(
  config: PerspectiveControlConfig,
): Required<Pick<PerspectiveControlConfig, "shiftStepMm" | "tiltStepDeg">> {
  return {
    shiftStepMm: config.shiftStepMm && config.shiftStepMm > 0 ? config.shiftStepMm : DEFAULT_SHIFT_STEP_MM,
    tiltStepDeg: config.tiltStepDeg && config.tiltStepDeg > 0 ? config.tiltStepDeg : DEFAULT_TILT_STEP_DEG,
  };
}

/**
 * Test whether movement is visually/optically identity within tolerance.
 *
 * @param movement - shift/tilt movement state
 * @returns true when both shift and tilt are effectively zero
 */
export function isIdentityLensMovement(movement: LensMovementState): boolean {
  return Math.abs(movement.shiftMm) < IDENTITY_EPSILON && Math.abs(movement.tiltDeg) < IDENTITY_EPSILON;
}

/**
 * Clamp a requested movement to the lens's declared perspective-control ranges.
 *
 * @param lens - lens object or partial lens with movement capability metadata
 * @param movement - optional requested movement
 * @returns clamped movement plus active/config flags
 */
export function clampLensMovement(
  lens: Pick<RuntimeLens, "perspectiveControl"> | undefined,
  movement: Partial<LensMovementState> | undefined,
): ResolvedLensMovement {
  const config = lens?.perspectiveControl ?? null;
  if (!config) return { ...ZERO_LENS_MOVEMENT, active: false, config: null };

  const shiftMm = clampToRange(finiteOrZero(movement?.shiftMm), config.shiftRangeMm);
  const tiltDeg = clampToRange(finiteOrZero(movement?.tiltDeg), config.tiltRangeDeg);
  const resolved = { shiftMm, tiltDeg };
  return { ...resolved, active: !isIdentityLensMovement(resolved), config };
}

/**
 * Transform an optical point into the shifted/tilted display frame.
 *
 * The image plane is the rotation pivot and remains fixed. Positive z is toward
 * image space; positive y renders downward, so positive lens shift is displayed upward.
 *
 * @param z - optical z coordinate in mm
 * @param y - optical y coordinate in mm
 * @param imagePlaneZ - fixed image-plane z coordinate in mm
 * @param movement - shift/tilt movement state
 * @returns transformed z/y point in display optical coordinates
 */
export function transformMovedPoint(
  z: number,
  y: number,
  imagePlaneZ: number,
  movement: LensMovementState,
): [number, number] {
  if (isIdentityLensMovement(movement)) return [z, y];
  const theta = movement.tiltDeg * DEG_TO_RAD;
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);
  const dz = z - imagePlaneZ;
  /* Optical +Y renders downward in SVG space, so positive lens shift moves the lens upward on screen. */
  const displayShiftY = -movement.shiftMm;
  return [imagePlaneZ + dz * cos - y * sin, displayShiftY + dz * sin + y * cos];
}

/**
 * Transform a meridional ray slope through the display-frame rotation.
 *
 * @param u - original slope dy/dz
 * @param movement - shift/tilt movement state
 * @returns rotated slope dy/dz, or signed Infinity for vertical display rays
 */
export function transformMovedSlope(u: number, movement: LensMovementState): number {
  if (isIdentityLensMovement(movement)) return u;
  const theta = movement.tiltDeg * DEG_TO_RAD;
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);
  const dz = cos - u * sin;
  if (Math.abs(dz) < 1e-12) return dySign(sin + u * cos) * Number.POSITIVE_INFINITY;
  return (sin + u * cos) / dz;
}

function dySign(value: number): 1 | -1 {
  return value < 0 ? -1 : 1;
}

/**
 * Project a transformed ray endpoint back to the fixed image plane.
 *
 * Movement is a display layer; the rendered ray must still terminate on the same
 * image-plane z coordinate used by the centered optical trace.
 *
 * @param lastZ - last transformed ray z coordinate in mm
 * @param lastY - last transformed ray y coordinate in mm
 * @param u - transformed meridional slope dy/dz
 * @param imagePlaneZ - fixed image-plane z coordinate in mm
 * @returns endpoint on the fixed image plane
 */
export function projectMovedRayToFixedImagePlane(
  lastZ: number,
  lastY: number,
  u: number,
  imagePlaneZ: number,
): [number, number] {
  return [imagePlaneZ, lastY + (imagePlaneZ - lastZ) * u];
}

function mapPointArray(points: number[][], imagePlaneZ: number, movement: LensMovementState): number[][] {
  if (isIdentityLensMovement(movement)) return points;
  return points.map(([z, y]) => transformMovedPoint(z, y, imagePlaneZ, movement));
}

/**
 * Transform an entire ray trace into the moved display frame.
 *
 * The original trace remains centered-lens physics. Points and final slope are
 * rotated/shifted for display, and the final image height follows the moved ray.
 *
 * @param result - centered-lens ray trace result
 * @param imagePlaneZ - fixed image-plane z coordinate in mm
 * @param movement - shift/tilt movement state
 * @returns display-transformed trace result
 */
export function transformRayTraceResult(
  result: RayTraceResult,
  imagePlaneZ: number,
  movement: LensMovementState,
): RayTraceResult {
  if (isIdentityLensMovement(movement)) return result;
  const lastLocalPoint = result.ghostPts[result.ghostPts.length - 1] ?? result.pts[result.pts.length - 1];
  const finalZ = lastLocalPoint?.[0] ?? imagePlaneZ;
  const [, finalY] = transformMovedPoint(finalZ, result.y, imagePlaneZ, movement);
  return {
    ...result,
    pts: mapPointArray(result.pts, imagePlaneZ, movement),
    ghostPts: mapPointArray(result.ghostPts, imagePlaneZ, movement),
    y: finalY,
    u: transformMovedSlope(result.u, movement),
  };
}

/**
 * Create movement transform callbacks bound to one fixed image plane.
 *
 * @param imagePlaneZ - fixed image-plane z coordinate in mm
 * @param resolved - clamped movement state and capability metadata
 * @returns point, slope, ray-end, trace, and axis transform helpers
 */
export function createLensMovementTransform(
  imagePlaneZ: number,
  resolved: ResolvedLensMovement,
): LensMovementTransform {
  const movement = { shiftMm: resolved.shiftMm, tiltDeg: resolved.tiltDeg };
  return {
    ...resolved,
    point: (z, y) => transformMovedPoint(z, y, imagePlaneZ, movement),
    slope: (u) => transformMovedSlope(u, movement),
    rayEnd: (lastZ, lastY, u, targetZ) => projectMovedRayToFixedImagePlane(lastZ, lastY, u, targetZ),
    trace: (result) => transformRayTraceResult(result, imagePlaneZ, movement),
    axis: (zStart, zEnd) => [
      transformMovedPoint(zStart, 0, imagePlaneZ, movement),
      transformMovedPoint(zEnd, 0, imagePlaneZ, movement),
    ],
  };
}
