/** Public teleconverter seam; implementations live in the focused engine subdirectories. */
export {
  TeleconverterAttachError,
  attachTeleconverter,
  teleconverterGroupLabel,
  teleconverterSurfaceLabel,
} from "./prescription/teleconverter.js";
export {
  MIN_TELECONVERTER_GAP_MM,
  TELECONVERTER_LABEL_PREFIX,
  teleconverterCompatibility,
  teleconverterGeometry,
} from "./prescription/teleconverterCompatibility.js";
