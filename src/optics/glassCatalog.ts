/** Public glassCatalog seam; implementations live in the focused engine subdirectories. */
export {
  GLASS_CATALOG_ND_TOLERANCE,
  GLASS_CATALOG_VD_TOLERANCE,
  GLASS_ND_TOLERANCE,
  GLASS_VD_TOLERANCE,
  UNRESOLVED_MARKER,
  allEntries,
  assertCatalogConsistent,
  assessCatalogGlassCompatibility,
  catalogSize,
  decodeCode6,
  evaluateCatalogAbbeNumber,
  evaluateSellmeier,
  explainCompatibleGlassResolution,
  glassTokens,
  resolveCompatibleGlass,
  resolveGlass,
  resolveGlassCandidates,
} from "./chromatic/glassCatalog.js";
export type {
  CatalogGlassCompatibility,
  CompatibleGlassCandidate,
  CompatibleGlassResolution,
  GlassResolutionCriterion,
  GlassResolutionMatchSource,
} from "./chromatic/glassCatalog.js";
export type { GlassAliasKind, GlassAliasRecord } from "./chromatic/glassCatalogAliases.js";
export { ALIASES, ALIAS_RECORDS } from "./chromatic/glassCatalogAliases.js";
export { DUPLICATE_CODE6_PRECEDENCE, RAW_CATALOG } from "./chromatic/glassCatalogData.js";
export type { GlassEntry } from "./chromatic/glassCatalogTypes.js";
