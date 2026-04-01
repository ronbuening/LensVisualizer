/**
 * Aberration analysis — barrel for the decomposed monochromatic aberration modules.
 *
 * Public imports stay stable here while the implementation lives in focused
 * internal modules under ./aberration/.
 */

export * from "./aberration/types.js";
export { computeSAProfile, computeSphericalAberration } from "./aberration/spherical.js";
export {
  computeComaPointCloudPreview,
  computeComaPreview,
  computeMeridionalComa,
  computeSagittalComa,
} from "./aberration/coma.js";
export { computeFieldCurvature } from "./aberration/fieldCurvature.js";
export { computeBokehPreview } from "./aberration/bokeh.js";
