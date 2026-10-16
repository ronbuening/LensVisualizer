/** Stable construction seam: canonical ingest, one compiler, and the RuntimeLens compatibility view. */

import { buildLens2 } from "./compat.js";

export { paraxialTrace, realTraceToStop } from "./first-order/lensConstants.js";
export { ingestLensV1, ingestTeleconverterV1 } from "./prescription/ingestV1.js";
export { ingestLens, ingestTeleconverter, isV1File } from "./prescription/ingestV2.js";
export { toLensData, toTeleconverterData } from "./prescription/toLensData.js";
export { validateAuthoredLensData } from "./prescription/compile.js";

export default buildLens2;

export { buildSpectralIndex, compileSurfaceDispersions } from "./prescription/compileMaterials.js";
export { expandRearPlates } from "./prescription/rearPlates.js";
export { compiledLensFromRuntime } from "./prescription/identity.js";
