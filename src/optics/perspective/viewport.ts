/** Camera-frame viewport envelopes for authored perspective-control travel. */

import type { PerspectiveControlConfig } from "../../types/optics.js";
import { createPerspectivePose } from "./pose.js";

export interface PerspectiveMovementViewportExtent {
  z: { min: number; max: number };
  y: { min: number; max: number };
}

export interface PerspectiveMovementViewportParams {
  zPos: readonly number[];
  maxSemiDiameterMm: number;
  rayLeadMm?: number;
  imagePlaneZ: number;
  config?: PerspectiveControlConfig | null;
}

/**
 * Bound the lens-space rectangle after every authored shift/tilt extreme.
 *
 * Including zero plus each range endpoint makes the diagram scale stable as
 * controls move. The fixed sensor is intentionally not transformed.
 */
export function computePerspectiveMovementViewportExtent({
  zPos,
  maxSemiDiameterMm,
  rayLeadMm = 0,
  imagePlaneZ,
  config,
}: PerspectiveMovementViewportParams): PerspectiveMovementViewportExtent | null {
  if (!config || zPos.length === 0) return null;

  const firstZ = zPos[0] ?? 0;
  const zMin = Math.min(...zPos, firstZ - Math.max(0, rayLeadMm));
  const zMax = Math.max(...zPos);
  const halfHeight = Math.max(0, maxSemiDiameterMm);
  const shifts = rangeSamples(config.shiftRangeMm);
  const tilts = rangeSamples(config.tiltRangeDeg);
  const points: Array<readonly [number, number]> = [];

  for (const shiftMm of shifts) {
    for (const tiltDeg of tilts) {
      const pose = createPerspectivePose({
        movement: { shiftMm, tiltDeg },
        sensorPlane: { point: [0, 0, imagePlaneZ], normal: [0, 0, 1], label: "IMG" },
        tiltPivot: config.tiltPivot,
      });
      for (const z of [zMin, zMax]) {
        for (const y of [-halfHeight, halfHeight]) {
          const moved = pose.lensToCameraPoint([0, y, z]);
          points.push([moved[2], moved[1]]);
        }
      }
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

function rangeSamples([min, max]: readonly [number, number]): number[] {
  return Array.from(new Set([min, 0, max]));
}
