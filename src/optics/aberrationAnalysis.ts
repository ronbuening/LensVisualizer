/**
 * Aberration analysis — barrel for the decomposed monochromatic aberration modules.
 *
 * Public imports stay stable here while the implementation lives in focused
 * internal modules under ./aberration/.
 */

export * from "./analysis/aberration/types.js";
export {
  computeSAProfile,
  computeSphericalAberration,
  computeSphericalAberrationBlurCharacter,
} from "./analysis/aberration/spherical.js";
export {
  computeComaAnalysis,
  computeComaPointCloudPreview,
  computeComaPreview,
  computeMeridionalComa,
  computeSagittalComa,
} from "./analysis/aberration/coma.js";
export { computeFieldCurvature, computeFieldCurvatureBundle } from "./analysis/aberration/fieldCurvature.js";
export {
  computeProjectionAwareOffAxisFieldGeometry,
  computeStateAwareOffAxisFieldGeometry,
  isOffAxisVectorFieldGeometry,
} from "./analysis/aberration/offAxis.js";
export { buildBokehDensityGrid, computeBokehPreviewPair, describeBokehDefocusSide } from "./analysis/bokeh/bokeh.js";

export { computeBestFocusZ } from "./analysis/aberration/bestFocus.js";
export { buildBokehRadialProfile, classifyBokehBrightnessCharacter } from "./analysis/aberration/radialProfile.js";
