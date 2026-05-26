/**
 * buildLens public entry — stable constructor exports for runtime lens creation.
 *
 * Keeps app imports pointed at the historical buildLens path while delegating the
 * active implementation to runtimeLens and the engine compatibility layer.
 */

import { buildLens2 } from "./compat.js";

export { paraxialTrace, realTraceToStop } from "./runtimeLens.js";

export default buildLens2;
