/** Camera-frame viewport envelopes for the active perspective-control pose. */

import { isIdentityLensMovement, type LensMovementState } from "../lensMovement.js";
import type { PerspectiveControlConfig } from "../../types/optics.js";
import { createPerspectivePose } from "./pose.js";

export interface PerspectiveMovementViewportExtent {
  z: { min: number; max: number };
  y: { min: number; max: number };
}

export interface PerspectiveMovementViewportParams {
  zPos: readonly number[];
  maxSemiDiameterMm: number;
  imagePlaneZ: number;
  config?: PerspectiveControlConfig | null;
  movement: LensMovementState;
}

/**
 * Bound the lens-space rectangle after the current shift/tilt transform.
 *
 * Centered perspective-control lenses use the ordinary lens viewport exactly.
 * Active movement reduces the scale only when the currently posed glass would
 * otherwise cross the diagram margins. The fixed sensor is not transformed.
 */
export function computePerspectiveMovementViewportExtent({
  zPos,
  maxSemiDiameterMm,
  imagePlaneZ,
  config,
  movement,
}: PerspectiveMovementViewportParams): PerspectiveMovementViewportExtent | null {
  if (!config || zPos.length === 0 || isIdentityLensMovement(movement)) return null;

  const zMin = Math.min(...zPos);
  const zMax = Math.max(...zPos);
  const halfHeight = Math.max(0, maxSemiDiameterMm);
  const points: Array<readonly [number, number]> = [];
  const pose = createPerspectivePose({
    movement,
    sensorPlane: { point: [0, 0, imagePlaneZ], normal: [0, 0, 1], label: "IMG" },
    tiltPivot: config.tiltPivot,
  });

  for (const z of [zMin, zMax]) {
    for (const y of [-halfHeight, halfHeight]) {
      const moved = pose.lensToCameraPoint([0, y, z]);
      points.push([moved[2], moved[1]]);
    }
  }

  return {
    z: {
      min: Math.min(...points.map(([z]) => z)),
      max: Math.max(...points.map(([z]) => z)),
    },
    y: {
      min: Math.min(...points.map(([, y]) => y)),
      max: Math.max(...points.map(([, y]) => y)),
    },
  };
}
