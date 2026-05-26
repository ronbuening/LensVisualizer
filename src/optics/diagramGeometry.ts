/**
 * Diagram-geometry compatibility barrel — stable exports for SVG shape and coordinate helpers.
 *
 * Keeps UI code decoupled from the engine's diagram submodule layout.
 */

export {
  computeElementRenderDiagnostics2 as computeElementRenderDiagnostics,
  computeElementShapes2 as computeElementShapes,
  createCoordinateTransforms2 as createCoordinateTransforms,
  type DiagramPointTransform2 as DiagramPointTransform,
} from "./compat.js";
