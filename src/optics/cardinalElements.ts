/**
 * Cardinal-elements public barrel — stable import path for first-order overlay calculations.
 *
 * Re-exports the state-aware implementation that lives under first-order/cardinals.
 */

export {
  computeCardinalElements2 as computeCardinalElements,
  computeCardinalElementsAtState2 as computeCardinalElementsAtState,
  type CardinalDistance2 as CardinalDistance,
  type CardinalElements2 as CardinalElements,
  type CardinalPoint2 as CardinalPoint,
} from "./compat.js";
