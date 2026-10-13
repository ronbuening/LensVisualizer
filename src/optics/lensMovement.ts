/**
 * Pure helpers for perspective-control lens movement.
 *
 * Display geometry delegates to the same rigid pose used by exact
 * perspective-control tracing. The image plane remains fixed in the camera
 * frame while lens-local points, directions, and annotations move together.
 */

import type { PerspectiveControlConfig, RuntimeLens, TiltPivot } from "../types/optics.js";
import { createPerspectivePose, type PerspectivePose } from "./perspective/pose.js";

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
  axis: (zStart: number, zEnd: number) => [[number, number], [number, number]];
}

const DEFAULT_SHIFT_STEP_MM = 0.1;
const DEFAULT_TILT_STEP_DEG = 0.1;

/**
 * Hard envelope for movement values arriving from untrusted sources (URL
 * params). Wider than any lens-authored `shiftRangeMm` / `tiltRangeDeg`, which
 * clamp tighter per lens via `clampLensMovement` at trace time.
 */
export const MOVEMENT_SHIFT_ENVELOPE_MM: [number, number] = [-25, 25];
export const MOVEMENT_TILT_ENVELOPE_DEG: [number, number] = [-15, 15];
const IDENTITY_EPSILON = 1e-9;

/** Return whether a declared perspective-control axis has non-zero travel. */
export function isMovementAxisEnabled([min, max]: [number, number]): boolean {
  return max > min;
}

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
 * Positive z is toward image space; positive y renders downward, so positive
 * lens shift is displayed upward. Tilt uses the supplied camera-frame pivot.
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
  tiltPivot?: TiltPivot | null,
): [number, number] {
  if (isIdentityLensMovement(movement)) return [z, y];
  const point = displayPose(imagePlaneZ, movement, tiltPivot).lensToCameraPoint([0, y, z]);
  return [point[2], point[1]];
}

/**
 * Transform a meridional ray slope through the display-frame rotation.
 *
 * @param u - original slope dy/dz
 * @param movement - shift/tilt movement state
 * @returns rotated slope dy/dz, or signed Infinity for vertical display rays
 */
export function transformMovedSlope(
  u: number,
  movement: LensMovementState,
  imagePlaneZ = 0,
  tiltPivot?: TiltPivot | null,
): number {
  if (isIdentityLensMovement(movement)) return u;
  const direction = displayPose(imagePlaneZ, movement, tiltPivot).lensToCameraDirection([0, u, 1]);
  if (Math.abs(direction[2]) < 1e-12) return dySign(direction[1]) * Number.POSITIVE_INFINITY;
  return direction[1] / direction[2];
}

function dySign(value: number): 1 | -1 {
  return value < 0 ? -1 : 1;
}

/**
 * Create movement transform callbacks bound to one fixed image plane.
 *
 * @param imagePlaneZ - fixed image-plane z coordinate in mm
 * @param resolved - clamped movement state and capability metadata
 * @returns point, slope, and optical-axis transform helpers
 */
export function createLensMovementTransform(
  imagePlaneZ: number,
  resolved: ResolvedLensMovement,
): LensMovementTransform {
  const movement = { shiftMm: resolved.shiftMm, tiltDeg: resolved.tiltDeg };
  const tiltPivot = resolved.config?.tiltPivot;
  const pose = displayPose(imagePlaneZ, movement, tiltPivot);
  const point = (z: number, y: number): [number, number] => {
    const moved = pose.lensToCameraPoint([0, y, z]);
    return [moved[2], moved[1]];
  };
  return {
    ...resolved,
    point,
    slope: (u) => {
      const direction = pose.lensToCameraDirection([0, u, 1]);
      return Math.abs(direction[2]) < 1e-12
        ? dySign(direction[1]) * Number.POSITIVE_INFINITY
        : direction[1] / direction[2];
    },
    axis: (zStart, zEnd) => [point(zStart, 0), point(zEnd, 0)],
  };
}

function displayPose(imagePlaneZ: number, movement: LensMovementState, tiltPivot?: TiltPivot | null): PerspectivePose {
  // Standalone legacy helpers historically allowed sensor-plane tilt. Real
  // perspective-control transforms always supply the validated lens metadata.
  const compatibilityPivot =
    Math.abs(movement.tiltDeg) > IDENTITY_EPSILON && !tiltPivot
      ? ({ frame: "camera", basis: "rear-vertex-fallback", zOffsetFromImagePlaneMm: 0 } as const)
      : tiltPivot;
  return createPerspectivePose({
    movement,
    sensorPlane: { point: [0, 0, imagePlaneZ], normal: [0, 0, 1], label: "IMG" },
    tiltPivot: compatibilityPivot,
  });
}
