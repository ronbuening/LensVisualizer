/** Public buildLens seam; implementations live in the focused engine subdirectories. */
export { compileLens } from "./prescription/compile.js";
export { canonicalInput } from "./prescription/canonicalInput.js";
export type { CanonicalTeleconverter } from "./prescription/canonical.js";
export { buildCanonicalLens, buildLens } from "./prescription/buildRuntimeLens.js";
export type { CanonicalLens, IngestedPrescription } from "./prescription/canonical.js";
export { canonicalLensFromRuntime, compiledLensFromRuntime } from "./prescription/identity.js";
export { ingestLensV1, ingestTeleconverterV1 } from "./prescription/ingestV1.js";
export { ingestLens, ingestTeleconverter, isV1File, lensDataVersion } from "./prescription/ingestV2.js";
export { expandRearPlates } from "./prescription/rearPlates.js";
export { buildLens as default } from "./prescription/buildRuntimeLens.js";

export { prepareRuntimeState } from "./state/runtimeAdapters.js";
