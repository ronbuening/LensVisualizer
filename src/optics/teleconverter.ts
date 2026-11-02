/** Public teleconverter seam; implementations live in the focused engine subdirectories. */
export { teleconverterCompatibility } from "./prescription/teleconverter.js";
export {
  TeleconverterAttachError,
  attachTeleconverter,
  teleconverterGroupLabel,
  teleconverterSurfaceLabel,
} from "./prescription/teleconverter.js";
export {
  MIN_TELECONVERTER_GAP_MM,
  TELECONVERTER_LABEL_PREFIX,
  teleconverterGeometry,
} from "./prescription/teleconverterCompatibility.js";
