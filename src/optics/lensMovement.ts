/**
 * Pure helpers for perspective-control lens movement.
 *
 * The v1 model keeps the optical prescription centered for tracing, then
 * displays the lens-space result in a shifted/tilted camera frame. The image
 * plane remains fixed, so exiting rays are projected to the original IMG line.
 */

import type { PerspectiveControlConfig, RayTraceResult, RuntimeLens } from "../types/optics.js";

export interface LensMovementState {
  shiftMm: number;
  tiltDeg: number;
}

export interface ResolvedLensMovement extends LensMovementState {
  active: boolean;
  config: PerspectiveControlConfig | null;
}

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

export const ZERO_LENS_MOVEMENT: LensMovementState = Object.freeze({ shiftMm: 0, tiltDeg: 0 });

function finiteOrZero(value: number | undefined): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function clampToRange(value: number, [min, max]: [number, number]): number {
  return Math.min(max, Math.max(min, value));
}

export function perspectiveControlSteps(
  config: PerspectiveControlConfig,
): Required<Pick<PerspectiveControlConfig, "shiftStepMm" | "tiltStepDeg">> {
  return {
    shiftStepMm: config.shiftStepMm && config.shiftStepMm > 0 ? config.shiftStepMm : DEFAULT_SHIFT_STEP_MM,
    tiltStepDeg: config.tiltStepDeg && config.tiltStepDeg > 0 ? config.tiltStepDeg : DEFAULT_TILT_STEP_DEG,
  };
}

export function isIdentityLensMovement(movement: LensMovementState): boolean {
  return Math.abs(movement.shiftMm) < IDENTITY_EPSILON && Math.abs(movement.tiltDeg) < IDENTITY_EPSILON;
}

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
