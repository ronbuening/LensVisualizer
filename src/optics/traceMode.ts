import type { RuntimeLens } from "../types/optics.js";

export type SurfaceTraceMode = "legacy" | "exact";
export type SurfaceTraceRolloutMode = SurfaceTraceMode | "per-lens";

export interface SurfaceTraceModeResolutionOptions {
  rolloutMode?: SurfaceTraceRolloutMode;
  exactLensKeys?: readonly string[];
}

/**
 * Short-lived exact surface tracing rollout control.
 *
 * Keep the default at "per-lens" with an empty allowlist until exact tracing has
 * enough catalog coverage to be enabled for selected prescriptions.
 */
export const SURFACE_TRACE_ROLLOUT_MODE: SurfaceTraceRolloutMode = "per-lens";
export const EXACT_SURFACE_TRACE_LENS_KEYS: readonly string[] = [];

export function resolveSurfaceTraceMode(
  L: Pick<RuntimeLens, "data"> | null | undefined,
  requestedMode?: SurfaceTraceMode,
  {
    rolloutMode = SURFACE_TRACE_ROLLOUT_MODE,
    exactLensKeys = EXACT_SURFACE_TRACE_LENS_KEYS,
  }: SurfaceTraceModeResolutionOptions = {},
): SurfaceTraceMode {
  if (requestedMode) return requestedMode;
  if (rolloutMode === "legacy" || rolloutMode === "exact") return rolloutMode;

  const lensKey = L?.data?.key;
  return lensKey && exactLensKeys.includes(lensKey) ? "exact" : "legacy";
}
