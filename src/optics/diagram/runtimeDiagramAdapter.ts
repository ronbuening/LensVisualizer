/**
 * Runtime diagram adapter — prepares RuntimeLens data for engine-native diagram helpers.
 *
 * Bridges legacy layout arrays to PreparedOpticalState so SVG rendering can use the new diagram geometry module.
 */

import type { ElementRenderDiagnostics, ElementShape, RuntimeLens } from "../../types/optics.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { prepareState } from "../state/prepareState.js";
import type { CompiledStateSurface, EngineLens, PreparedOpticalState } from "../types.js";
import { createCoordinateTransforms2 } from "./coordinateTransforms.js";
import { computeElementShapesForState2 } from "./elementShapes.js";
import { computeElementRenderDiagnosticsForState2 } from "./renderDiagnostics.js";
import type { DiagramPointTransform2 } from "./surfaceOutline.js";

const ENGINE_LENS_BY_RUNTIME = new WeakMap<RuntimeLens, EngineLens>();

export { createCoordinateTransforms2 };

export function computeElementRenderDiagnostics2(L: RuntimeLens, zPos: number[]): ElementRenderDiagnostics[] {
  return computeElementRenderDiagnosticsForState2(stateForRuntimeDiagram2(L, zPos));
}

export function computeElementShapes2(
  L: RuntimeLens,
  zPos: number[],
  sx: (z: number) => number,
  sy: (y: number) => number,
  pointTransform?: DiagramPointTransform2,
): ElementShape[] {
  return computeElementShapesForState2(stateForRuntimeDiagram2(L, zPos), sx, sy, pointTransform);
}

export function stateForRuntimeDiagram2(L: RuntimeLens, zPos: readonly number[]): PreparedOpticalState {
  let engineLens = ENGINE_LENS_BY_RUNTIME.get(L);
  if (!engineLens) {
    engineLens = normalizeRuntimeLens(L);
    ENGINE_LENS_BY_RUNTIME.set(L, engineLens);
  }
  return stateWithDiagramZ2(prepareState(engineLens, 0, 0, 0), zPos);
}

function stateWithDiagramZ2(state: PreparedOpticalState, zPos: readonly number[]): PreparedOpticalState {
  if (zPos.length === 0 || zPos.every((z, index) => z === state.z[index])) return state;
  const surfaces = state.surfaces.map((surface, index) => {
    const z = zPos[index] ?? surface.z;
    const d = index < state.surfaces.length - 1 && zPos[index + 1] !== undefined ? zPos[index + 1] - z : surface.d;
    return Object.freeze({ ...surface, z, d }) as CompiledStateSurface;
  });
  return Object.freeze({
    ...state,
    surfaces: Object.freeze(surfaces),
    z: Object.freeze([...zPos]),
  });
}
