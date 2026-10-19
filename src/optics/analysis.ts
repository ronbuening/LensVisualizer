/**
 * Public analysis entry for request construction and the migrated summary family.
 * Implementation leaves import their lower-level owners directly to avoid barrel cycles.
 */

export { createAnalysisRequest, type AnalysisRequest, type AnalysisRequestParams } from "./analysis/request.js";
export { createAnalysisComputationContext, type AnalysisComputationContext } from "./analysis/analysisContext.js";
export { computeOpticalSummary, type OpticalSummaryMetrics2 } from "./analysis/summary/summary.js";
export { computeCardinalElements } from "./analysis/summary/cardinals.js";
export { computeFocusEFL, computeFocusBreathingSeries, type BreathingSample } from "./analysis/summary/breathing.js";
export {
  computeGroupMovementProfile,
  getGroupMovementAvailability,
  inferLensMovementGroups,
  firstAvailableGroupMovementMode,
  isGroupMovementModeAvailable,
  type GroupMovementPoint,
  type GroupMovementProfile,
} from "./analysis/summary/groupMovement.js";
