/** Stable public MTF entry points for workers and UI. */
export {
  assessMtfSupport,
  MTF_FIELDS,
  MTF_FREQUENCIES,
  MTF_PHOTOPIC_LINES,
  resolveMtfSpectrum,
} from "./analysis/mtfSupport.js";
export { computeMtf, computeMtfSteps, resolveMtfGeometry, type MtfJobCache } from "./analysis/mtf.js";
