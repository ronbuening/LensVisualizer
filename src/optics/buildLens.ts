/**
 * buildLens public entry — stable constructor exports for runtime lens creation.
 *
 * Keeps app imports pointed at the historical buildLens path while delegating the
 * active implementation to runtimeLens and the engine compatibility layer. It also
 * exposes canonical ingest, which reads an authored file into the canonical
 * prescription, and the V1 view that gives the engine its lens data back from it:
 * the catalogs and tools apply the schema defaults through these two.
 * `ingestLens` and `ingestTeleconverter` read a file of either version by its
 * `schema`, as `isV1File` tells them apart; the V1 functions read V1 alone.
 */

import { buildLens2 } from "./compat.js";

export { paraxialTrace, realTraceToStop } from "./runtimeLens.js";
export { ingestLensV1, ingestTeleconverterV1 } from "./prescription/ingestV1.js";
export { ingestLens, ingestTeleconverter, isV1File } from "./prescription/ingestV2.js";
export { toLensData, toTeleconverterData } from "./prescription/toLensData.js";
export { validateAuthoredLensData } from "./prescription/normalizeLensData.js";

export default buildLens2;
