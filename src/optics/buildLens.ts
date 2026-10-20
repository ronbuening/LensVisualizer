/** Public buildLens seam; implementations live in the focused engine subdirectories. */
export { buildCanonicalLens, buildLens } from "./prescription/buildRuntimeLens.js";
export type { CanonicalLens, IngestedPrescription } from "./prescription/canonical.js";
export { canonicalLensFromRuntime, compiledLensFromRuntime } from "./prescription/identity.js";
export { ingestLensV1, ingestTeleconverterV1 } from "./prescription/ingestV1.js";
export { ingestLens, ingestTeleconverter, isV1File } from "./prescription/ingestV2.js";
export { expandRearPlates } from "./prescription/rearPlates.js";
export { toLensData, toTeleconverterData } from "./prescription/toLensData.js";
export { buildLens as default } from "./prescription/buildRuntimeLens.js";

export { prepareRuntimeState } from "./state/runtimeAdapters.js";
