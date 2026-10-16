/** Public dispersion seam; compiler and runtime tables share one material resolution. */
export {
  normalLinePgF,
  normalLinePdC,
  normalLinePeC,
  normalLinePgFPrime,
  abbeLineIndices,
  makeSurfaceDispersion,
  summarizeDispersionQuality,
  type DispersionQuality,
  type SurfaceIndexFn,
  type SurfaceDispersion,
} from "./chromatic/materialResolver.js";
export { resolveMaterialTable as buildSurfaceDispersionIndex } from "./prescription/compileMaterials.js";
