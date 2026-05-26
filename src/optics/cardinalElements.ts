/**
 * Stable cardinal-element diagnostics backed by Optics 2.
 *
 * The legacy implementation remains in `cardinalElementsLegacy.ts` during the
 * post-migration rollback window.
 */

export {
  computeCardinalElements2 as computeCardinalElements,
  computeCardinalElementsAtState2 as computeCardinalElementsAtState,
  type CardinalDistance2 as CardinalDistance,
  type CardinalElements2 as CardinalElements,
  type CardinalPoint2 as CardinalPoint,
} from "../optics-2/compat.js";
