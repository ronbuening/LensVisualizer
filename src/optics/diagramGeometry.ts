/** Public diagramGeometry seam; implementations live in the focused engine subdirectories. */
export { createCoordinateTransforms } from "./diagram/coordinateTransforms.js";
export { computeElementShapesForState } from "./diagram/elementShapes.js";
export { foldedHitOrderLabelsForDisplay } from "./diagram/foldedPathDisplay.js";
export { computeElementRenderDiagnosticsForState } from "./diagram/renderDiagnostics.js";
export {
  computeElementRenderDiagnostics,
  computeElementShapes,
  computeStandaloneMirrorPaths,
  stateForRuntimeDiagram,
} from "./diagram/runtimeDiagramAdapter.js";
export { gapTrimHeight, renderSag, sagSlope, slopeTrimHeight } from "./diagram/runtimeSurface.js";
export { SVG_PATH_SUBDIVISIONS, surfacePathD } from "./diagram/surfaceOutline.js";
export type { DiagramPointTransform } from "./diagram/surfaceOutline.js";
