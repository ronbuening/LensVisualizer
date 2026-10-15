/**
 * Trace geometry — lens-independent view of prepared coordinates and path metadata.
 *
 * Selects full traversal once per geometry; partial requests retain sequential semantics.
 */

import { traceGeneralized } from "./generalizedTrace.js";
import { traceSequential } from "./sequentialTrace.js";
import type { TraceGeometry } from "./types.js";

/**
 * Share existing optical records and select traversal without evaluating surface profiles.
 *
 * @param input - immutable coordinates, stop/path metadata, and folded classification
 * @returns frozen geometry view with full and partial traversal entries
 */
export function createTraceGeometry({
  isFoldedOptics,
  ...geometry
}: Omit<TraceGeometry, "traversal"> & { isFoldedOptics: boolean }): TraceGeometry {
  const generalized =
    isFoldedOptics ||
    Boolean(geometry.pathPlan.surfaceOrder?.length) ||
    geometry.pathPlan.mode === "auto" ||
    geometry.surfaces.some((surface) => surface.interaction.type !== "refract");
  return Object.freeze({
    ...geometry,
    traversal: Object.freeze({
      kind: generalized ? "generalized" : "sequential",
      full: generalized ? traceGeneralized : traceSequential,
      partial: traceSequential,
    }),
  });
}
