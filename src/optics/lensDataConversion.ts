/**
 * Lens-data conversion seam — how code outside the engine reads a lens or teleconverter file of either version:
 * canonical ingest, and the V1 views that give the file back in V1 field names.
 *
 * Build metadata loads it by path under plain Node, through the `.js` specifier hook, to summarize a V2 file as its
 * V1 twin is summarized (`scripts/lens-summaries.mjs`). The converter reaches the canonical mapping here from S2.P3.
 * It holds re-exports only, as the seam guard requires of a top-level module.
 */

export { ingestLens, ingestTeleconverter } from "./prescription/ingestV2.js";
export { toLensDataInput, toTeleconverterData } from "./prescription/toLensData.js";
