/** Public dispersion seam; compiler and runtime tables share one material resolution. */
export {
  normalLinePgF,
  normalLinePdC,
  normalLinePeC,
  normalLinePgFPrime,
  abbeLineIndices,
  makeSurfaceDispersion,
} from "./chromatic/materialResolver.js";
export { resolveMaterialTable as buildSurfaceDispersionIndex } from "./chromatic/dispersionTable.js";
export type { DispersionQuality, SurfaceIndexFn, SurfaceDispersion } from "../types/dispersion.js";
export { summarizeDispersionQuality2 as summarizeDispersionQuality } from "./chromatic/dispersionQuality.js";
