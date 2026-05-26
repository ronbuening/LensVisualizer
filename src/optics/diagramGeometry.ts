/**
 * Stable SVG diagram geometry surface backed by Optics 2.
 *
 * `diagramGeometryLegacy.ts` keeps the previous implementation available for
 * rollback and parity debugging while component imports stay unchanged.
 */

export {
  computeElementRenderDiagnostics2 as computeElementRenderDiagnostics,
  computeElementShapes2 as computeElementShapes,
  createCoordinateTransforms2 as createCoordinateTransforms,
  type DiagramPointTransform2 as DiagramPointTransform,
} from "../optics-2/compat.js";
