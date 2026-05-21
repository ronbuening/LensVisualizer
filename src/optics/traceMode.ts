import type { RuntimeLens } from "../types/optics.js";

/**
 * Which surface-trace implementation to use for a ray.
 *
 * `"exact"` is the production default — it intersects spherical/aspheric
 * surfaces with full vector math. `"legacy"` is retained as a test/debug
 * escape hatch so regression tests can compare legacy vertex-plane tracing
 * against the exact path on the same lens.
 */
export type SurfaceTraceMode = "legacy" | "exact";

export function resolveSurfaceTraceMode(
  _L: Pick<RuntimeLens, "data"> | null | undefined,
  requestedMode?: SurfaceTraceMode,
): SurfaceTraceMode {
  return requestedMode ?? "exact";
}
