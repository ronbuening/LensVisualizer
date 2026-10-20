/**
 * Permanent file-conversion seam: version detection, canonical ingest, V1/V2 printers and source-path mapping.
 * The converter and its regression tests use these exports; runtime and metadata readers use canonical ingest
 * through buildLens.ts and never construct the source-preserving V1 view.
 */

export { ingestLens, ingestTeleconverter, lensDataVersion } from "./prescription/ingestV2.js";
export { V1_FLAT_RADIUS } from "./prescription/ingestV1.js";
export {
  V1_GROUP_STARTS,
  V1_PRINT_ORDER,
  V1_ROW_LISTS,
  toLensData,
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
