/**
 * First-order system matrix — paraxial ABCD accumulation for prepared optical states.
 *
 * Provides the linear reference model used by cardinal elements and pupil/f-number calculations.
 */

import type { PreparedOpticalState } from "../types.js";
import { traceParaxialSurfaces2 } from "../math/paraxial.js";

/**
 * First-order ABCD matrix and surrounding media indices for a prepared system.
 *
 * Coefficients use paraxial ray state `(y, u)` with optical power represented as
 * `C = n' * u_marginal`; cardinal formulas consume the same convention.
 */
export interface FirstOrderSystemMatrix {
  A: number;
  B: number;
  C: number;
  D: number;
  objectIndex: number;
  imageIndex: number;
}

/**
 * Compute the current-state first-order system matrix by tracing basis rays.
 *
 * A unit-height marginal ray gives `A` and `C`; a unit-slope chief ray gives
 * `B` and `D`. The final transfer to the image plane is skipped so the matrix
 * represents the optical system from first to last surface.
 *
 * @param state - prepared optical state for current focus/zoom/aberration sliders
 * @returns ABCD matrix and object/image-side refractive indices
 */
export function computeSystemMatrix2(state: PreparedOpticalState): FirstOrderSystemMatrix {
  const marginal = traceParaxialSurfaces2(state.surfaces, 1, 0, { skipLastTransfer: true });
  const chief = traceParaxialSurfaces2(state.surfaces, 0, 1, { skipLastTransfer: true });
  const objectIndex = 1;
  const imageIndex = marginal.n;
  return {
    A: marginal.y,
    B: chief.y,
    C: imageIndex * marginal.u,
    D: imageIndex * chief.u,
    objectIndex,
    imageIndex,
  };
}
