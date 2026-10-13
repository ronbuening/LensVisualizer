/**
 * Teleconverter public barrel — stable exports for composing a detachable rear converter onto a host lens.
 *
 * App, catalog and test code import from here; the implementation lives in `prescription/teleconverter.ts`
 * (merge and first-order rescale) and `prescription/teleconverterCompatibility.ts` (fit rules and spacing, kept
 * import-free so the build script can load it under plain Node).
 */

export {
  attachTeleconverter,
  TeleconverterAttachError,
  teleconverterGroupLabel,
  teleconverterSurfaceLabel,
} from "./prescription/teleconverter.js";
export {
  MIN_TELECONVERTER_GAP_MM,
  TELECONVERTER_LABEL_PREFIX,
  teleconverterCompatibility,
  teleconverterGeometry,
} from "./prescription/teleconverterCompatibility.js";
export { default as validateTeleconverterData } from "./validateTeleconverterData.js";
