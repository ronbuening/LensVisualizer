/**
 * First-order system matrix — paraxial ABCD accumulation for prepared optical states.
 *
 * Provides the linear reference model used by cardinal elements and pupil/f-number calculations.
 */

import type { PreparedOpticalState } from "../types.js";
import { traceParaxialSurfaces2 } from "../math/paraxial.js";

export interface FirstOrderSystemMatrix {
  A: number;
  B: number;
  C: number;
  D: number;
  objectIndex: number;
  imageIndex: number;
}

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
