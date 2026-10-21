/**
 * Permanent file-conversion seam: version detection, canonical ingest, V1/V2 printers and source-path mapping.
 * Only scripts/lens-data-convert/load.mjs may load this seam outside focused tests. The converter and organizer
 * reach it through that loader. Runtime and build-metadata readers use V2 ingest through buildLens.ts.
 */

export { lensDataVersion } from "./prescription/ingestV2.js";
export { ingestLens, ingestTeleconverter } from "./prescription/v1/ingest.js";
export { V1_FLAT_RADIUS } from "./prescription/v1/ingestV1.js";
export {
  V1_GROUP_STARTS,
  V1_PRINT_ORDER,
  V1_ROW_LISTS,
  toLensData,
  toLensDataInput,
  toTeleconverterData,
} from "./prescription/v1/toLensData.js";
export { v1SourceMap, v1StopRadius } from "./prescription/v1/v1SourceMap.js";
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
