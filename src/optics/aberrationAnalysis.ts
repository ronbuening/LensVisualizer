/**
 * Aberration analysis — barrel for the decomposed monochromatic aberration modules.
 *
 * Public imports stay stable here while the implementation lives in focused
 * internal modules under ./aberration/.
 */

export * from "./aberration/types.js";
export {
  computeSAProfile,
  computeSphericalAberration,
  computeSphericalAberrationBlurCharacter,
} from "./aberration/spherical.js";
export {
  computeComaAnalysis,
  computeComaPointCloudPreview,
  computeComaPreview,
  computeMeridionalComa,
  computeSagittalComa,
} from "./aberration/coma.js";
export { computeFieldCurvature, computeFieldCurvatureBundle } from "./aberration/fieldCurvature.js";
export {
  computeProjectionAwareOffAxisFieldGeometry,
  computeStateAwareOffAxisFieldGeometry,
  isOffAxisVectorFieldGeometry,
} from "./aberration/offAxis.js";
export {
  buildBokehDensityGrid,
  buildBokehRadialProfile,
  classifyBokehBrightnessCharacter,
  computeBestFocusZ,
  computeBokehPreviewPair,
  describeBokehDefocusSide,
} from "./aberration/bokeh.js";
