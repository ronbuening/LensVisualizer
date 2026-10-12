/**
 * buildLens public entry — stable constructor exports for runtime lens creation.
 *
 * Keeps app imports pointed at the historical buildLens path while delegating the
 * active implementation to runtimeLens and the engine compatibility layer. It also
 * exposes canonical ingest, which reads an authored file into the canonical
 * prescription that construction will start from.
 */

import { buildLens2 } from "./compat.js";

export { paraxialTrace, realTraceToStop } from "./runtimeLens.js";
export { ingestLensV1, ingestTeleconverterV1 } from "./prescription/ingestV1.js";

export default buildLens2;
