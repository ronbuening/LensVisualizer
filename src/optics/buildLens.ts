/**
 * Stable lens-construction entry point.
 *
 * Stage 05 routes app-facing `buildLens()` imports through Optics 2 while
 * keeping `buildLensLegacy.ts` available as the rollback/parity reference.
 */

import { buildLens2 } from "../optics-2/compat.js";

export { paraxialTrace, realTraceToStop } from "./buildLensLegacy.js";

export default buildLens2;
