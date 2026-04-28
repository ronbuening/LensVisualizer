/**
 * useRayTracing — Orchestrator hook composing on-axis, off-axis, and
 * chromatic ray sub-hooks.
 *
 * This thin wrapper computes the shared focusK convergence parameter
 * and delegates to useOnAxisRays, useOffAxisRays, and useChromaticRays.
 */

import { useMemo } from "react";
import { conjugateK } from "../../optics/optics.js";
import useOnAxisRays from "./useOnAxisRays.js";
import useOffAxisRays from "./useOffAxisRays.js";
import useChromaticRays from "./useChromaticRays.js";
import type { RaySegment } from "./useOnAxisRays.js";
import type { ChromaticRaySegment } from "./useChromaticRays.js";
import type { RuntimeLens, ChromaticSpread } from "../../types/optics.js";
import type { OffAxisMode } from "../../types/state.js";
import type { LensMovementTransform } from "../../optics/lensMovement.js";

interface UseRayTracingParams {
  L: RuntimeLens | undefined;
  zPos: number[];
  IMG_MM: number;
  focusT: number;
  zoomT: number;
  sx: (z: number) => number;
  sy: (y: number) => number;
  clampedRayEnd: (lastZ: number, lastY: number, u: number, targetZ: number) => [number, number];
  movementTransform?: LensMovementTransform;
  currentPhysStopSD: number;
  currentEPSD: number;
  rayTracksF: boolean;
  showOffAxis: OffAxisMode;
  showChromatic: boolean;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  lensKey: string;
}

interface UseRayTracingResult {
  focusK: number;
  rays: RaySegment[];
  offAxisRays: RaySegment[];
  chromaticRays: ChromaticRaySegment[];
  chromSpread: ChromaticSpread | null;
  /** First ray-trace error across all three sub-hooks, or null if all succeeded. */
  rayError: unknown;
}

export default function useRayTracing({
  L,
  zPos,
  IMG_MM,
  focusT,
  zoomT,
  sx,
  sy,
  clampedRayEnd,
  movementTransform,
  currentPhysStopSD,
  currentEPSD,
  rayTracksF,
  showOffAxis,
  showChromatic,
  chromR,
  chromG,
  chromB,
  lensKey,
}: UseRayTracingParams): UseRayTracingResult {
  /* focusK = convergence curvature at the entrance pupil for "tracks focus"
   * ray mode; 0 when rays arrive from infinity. */
  const focusK = useMemo(() => (L && rayTracksF ? conjugateK(focusT, zoomT, L) : 0), [focusT, zoomT, rayTracksF, L]);

  const { segments: rays, error: onAxisError } = useOnAxisRays({
    L,
    zPos,
    IMG_MM,
    focusT,
    zoomT,
    sx,
    sy,
    clampedRayEnd,
    movementTransform,
    currentPhysStopSD,
    currentEPSD,
    rayTracksF,
    focusK,
    lensKey,
  });

  const { segments: offAxisRays, error: offAxisError } = useOffAxisRays({
    L,
    zPos,
    IMG_MM,
    focusT,
    zoomT,
    sx,
    sy,
    clampedRayEnd,
    movementTransform,
    currentPhysStopSD,
    currentEPSD,
    rayTracksF,
    focusK,
    showOffAxis,
    lensKey,
  });

  const {
    chromaticRays,
    chromSpread,
    error: chromaticError,
  } = useChromaticRays({
    L,
    zPos,
    IMG_MM,
    focusT,
    zoomT,
    sx,
    sy,
    clampedRayEnd,
    movementTransform,
    currentPhysStopSD,
    currentEPSD,
    rayTracksF,
    focusK,
    showChromatic,
    chromR,
    chromG,
    chromB,
    lensKey,
  });

  const rayError = onAxisError ?? offAxisError ?? chromaticError ?? null;

  return { focusK, rays, offAxisRays, chromaticRays, chromSpread, rayError };
}
