/** Public buildLens seam; implementations live in the focused engine subdirectories. */
export { compileLens } from "./prescription/compile.js";
export { canonicalInput } from "./prescription/canonicalInput.js";
export type { CanonicalTeleconverter } from "./prescription/canonical.js";
export { buildCanonicalLens, buildLens } from "./prescription/buildRuntimeLens.js";
export type { CanonicalLens, IngestedPrescription } from "./prescription/canonical.js";
export { canonicalLensFromRuntime, compiledLensFromRuntime } from "./prescription/identity.js";
export { ingestLens, ingestTeleconverter, lensDataVersion } from "./prescription/ingestV2.js";
export { buildLens as default } from "./prescription/buildRuntimeLens.js";

export { prepareRuntimeState } from "./state/runtimeAdapters.js";
