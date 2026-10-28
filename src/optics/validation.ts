/** Public validation seam; implementations live in the focused engine subdirectories. */
export { default as validateLensData, validateCanonicalLens } from "./prescription/validate/index.js";
export { LENS_KEY_PATTERN, validateLensMounts, validateRearPlates } from "./prescription/validate/schema.js";
export { default as validateTeleconverterData } from "./prescription/validate/teleconverter.js";
export { rimCutBeamReach, validateRimCutBeams } from "./prescription/validate/rimCutBeams.js";
export type { RimCutBeamCheck, RimCutBeamPoint, RimCutBeamReach } from "./prescription/validate/rimCutBeams.js";
export { rimCutDenseProbe } from "./prescription/validate/rimCutProbe.js";
export type { RimCutProbe, RimCutProbeCut, RimCutProbeOptions } from "./prescription/validate/rimCutProbe.js";
