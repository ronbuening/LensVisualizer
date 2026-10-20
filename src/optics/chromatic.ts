/** Public chromatic seam; implementations live in the focused engine subdirectories. */
export {
  CHROMATIC_CHANNEL_METADATA,
  CHROMATIC_CHANNEL_ORDER,
  CHROMATIC_CHANNEL_WAVELENGTH_NM,
  chromaticChannelDescription,
  chromaticChannelIndexLabel,
  chromaticChannelLineList,
  chromaticChannelWavelengthLabel,
  lensChromaticReference,
} from "./chromatic/channels.js";
export { computeChromaticRayFanSpread } from "./chromatic/chromaticTrace.js";
export { dispersionTableFromRuntime, makeSurfaceDispersionForRuntimeSurface } from "./chromatic/dispersionAdapter.js";
export {
  summarizeDispersionQuality,
  summarizeDispersionQualityForLens,
  summarizeDispersionQualityForState,
} from "./chromatic/dispersionQuality.js";
export { buildSpectralIndex, compileSurfaceDispersions, resolveMaterialTable } from "./chromatic/dispersionTable.js";
export {
  CHROMATIC_CHANNELS,
  channelIndexResolverForState,
  indexAtPreparedSurface,
  indexAtRuntimeSurface,
  wavelengthNd,
} from "./chromatic/indexResolver.js";
export type { SurfaceIndexResolver } from "./chromatic/indexResolver.js";
export {
  abbeLineIndices,
  makeSurfaceDispersion,
  normalLinePdC,
  normalLinePeC,
  normalLinePgF,
  normalLinePgFPrime,
} from "./chromatic/materialResolver.js";
export { LINE_NM } from "./chromatic/spectralLines.js";

export type { DispersionQuality, SurfaceIndexFn, SurfaceDispersion } from "../types/dispersion.js";
