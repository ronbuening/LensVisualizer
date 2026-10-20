/**
 * Request-facing cardinals keep first-order ownership separate from analysis orchestration.
 * Camera coordinates override the prepared layout only for diagram/readout callers.
 */

import { computeCardinalElements2, computeCardinalElementsWithLayout } from "../../first-order/cardinals.js";
import type { AnalysisRequest } from "../request.js";

/**
 * Compute axial cardinal elements for the request, optionally in camera coordinates.
 * @param request - current prepared optical geometry
 * @param layout - camera surface vertices and image-plane position in mm
 * @returns cardinal points/distances, or null when unsupported
 */
export function computeCardinalElements(
  request: AnalysisRequest,
  layout?: { zPos: readonly number[]; imagePlaneZ: number },
) {
  return layout
    ? computeCardinalElementsWithLayout(request.preparedGeometry, layout.zPos, layout.imagePlaneZ)
    : computeCardinalElements2(request.preparedGeometry);
}
