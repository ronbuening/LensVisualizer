/**
 * Lens-data conversion seam — how code outside the engine reads a lens or teleconverter file of either version:
 * canonical ingest, the version rule, the V1 views that give the file back in V1 field names, and the V2 views the
 * converter prints.
 *
 * Build metadata loads it by path under plain Node, through the `.js` specifier hook, to summarize a V2 file as its
 * V1 twin is summarized (`scripts/lens-summaries.mjs`). The converter (`scripts/lens-data-convert/`) loads it the same
 * way: it asks a file's version, ingests the file with its source paths, writes the view of the version it converts
 * to, composes the two to carry comments and literal text across, spells the paths it reads as ingest spells them,
 * and compares the prescription the output ingests to with the source's. It holds re-exports only, as the seam guard
 * requires of a top-level module.
 */

export { ingestLens, ingestTeleconverter, lensDataVersion } from "./prescription/ingestV2.js";
export { V1_FLAT_RADIUS } from "./prescription/ingestV1.js";
export {
  V1_GROUP_STARTS,
  V1_PRINT_ORDER,
  V1_ROW_LISTS,
  toLensDataInput,
  toTeleconverterData,
} from "./prescription/toLensData.js";
export { v1SourceMap, v1StopRadius } from "./prescription/v1SourceMap.js";
export {
  V2_GROUP_STARTS,
  V2_ROW_LISTS,
  toLensDataV2Input,
  toTeleconverterDataV2Input,
  v2SourceMap,
  v2Writes,
} from "./prescription/toLensDataV2.js";
export { prescriptionDifference } from "./prescription/canonical.js";
export { childPath, parentPath } from "./prescription/sourcePaths.js";
