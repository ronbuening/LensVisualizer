/**
 * Runtime diagram adapter — prepares RuntimeLens data for engine-native diagram helpers.
 *
 * Bridges legacy layout arrays to PreparedOpticalState so SVG rendering can use the new diagram geometry module.
 */

import type { ElementRenderDiagnostics, ElementShape, RuntimeLens, SurfaceAccentPathData } from "../../types/optics.js";
import { compiledLensFromRuntime } from "../prescription/compile.js";
import { prepareState, stateWithZ } from "../state/preparedGeometry.js";
import type { PreparedOpticalState } from "../types.js";
import { createCoordinateTransforms2 } from "./coordinateTransforms.js";
import { computeElementShapesForState2 } from "./elementShapes.js";
import { computeElementRenderDiagnosticsForState2 } from "./renderDiagnostics.js";
import { renderedSurfaceZ2, surfaceMaterialPathD2, type DiagramPointTransform2 } from "./surfaceOutline.js";

export { createCoordinateTransforms2 };

/**
 * Compute display-only element trimming diagnostics for a RuntimeLens diagram.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @returns per-element render semi-diameter diagnostics
 */
export function computeElementRenderDiagnostics2(L: RuntimeLens, zPos: number[]): ElementRenderDiagnostics[] {
  return computeElementRenderDiagnosticsForState2(stateForRuntimeDiagram2(L, zPos));
}

/**
 * Build SVG-ready element shapes for RuntimeLens diagram rendering.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param sx - optical z-mm to SVG x-coordinate mapper
 * @param sy - optical y-mm to SVG y-coordinate mapper
 * @param pointTransform - optional display transform for lens movement overlays
 * @returns SVG path data for elements, aspheres, and mirror-coating accents
 */
export function computeElementShapes2(
  L: RuntimeLens,
  zPos: number[],
  sx: (z: number) => number,
  sy: (y: number) => number,
  pointTransform?: DiagramPointTransform2,
): ElementShape[] {
  return computeElementShapesForState2(stateForRuntimeDiagram2(L, zPos), sx, sy, pointTransform);
}

/**
 * Create a prepared diagram state from RuntimeLens data and caller-provided z positions.
 *
 * The z positions usually come from the legacy layout pipeline. They replace only the
 * display-space vertex positions and adjacent thicknesses, leaving optical metadata
 * and surface profiles unchanged.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @returns prepared optical state suitable for diagram geometry helpers
 */
export function stateForRuntimeDiagram2(L: RuntimeLens, zPos: readonly number[]): PreparedOpticalState {
  return stateWithZ(prepareState(compiledLensFromRuntime(L), 0, 0, 0), zPos, "preserve");
}

/** Render reflecting interfaces that are not boundaries of a transmissive glass body. */
export function computeStandaloneMirrorPaths2(
  L: RuntimeLens,
  zPos: number[],
  sx: (z: number) => number,
  sy: (y: number) => number,
  pointTransform?: DiagramPointTransform2,
): SurfaceAccentPathData[] {
  if (!L.S.some((surface) => surface.interaction?.type === "reflect")) return [];
  const boundaries = new Set(L.ES.flatMap(([, front, rear]) => [front, rear]));
  const state = stateForRuntimeDiagram2(L, zPos);
  return state.surfaces.flatMap((surface, surfIdx) => {
    if (surface.interaction.type !== "reflect" || boundaries.has(surfIdx)) return [];
    const z = renderedSurfaceZ2(surface, surface.sd);
    const [zz, yy] = pointTransform ? pointTransform(z, surface.sd) : [z, surface.sd];
    return [
      {
        surfIdx,
        pathD: surfaceMaterialPathD2(state, surfIdx, surface.sd, surface.innerSd ?? 0, sx, sy, pointTransform),
        labelX: sx(zz),
        labelY: sy(yy) + 10,
        kind:
          surface.interaction.mirrorKind === "second-surface"
            ? ("second-surface-coating" as const)
            : ("first-surface-mirror" as const),
      },
    ];
  });
}
