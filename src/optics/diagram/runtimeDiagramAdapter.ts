/**
 * Runtime diagram adapter — prepares RuntimeLens data for engine-native diagram helpers.
 *
 * Bridges legacy layout arrays to PreparedOpticalState so SVG rendering can use the new diagram geometry module.
 */

import type { ElementRenderDiagnostics, ElementShape, RuntimeLens, SurfaceAccentPathData } from "../../types/optics.js";
import { compiledLensFromRuntime } from "../prescription/identity.js";
import { prepareState, stateWithZ } from "../state/preparedGeometry.js";
import type { PreparedOpticalState } from "../types.js";
import { createCoordinateTransforms } from "./coordinateTransforms.js";
import { computeElementShapesForState } from "./elementShapes.js";
import { computeElementRenderDiagnosticsForState } from "./renderDiagnostics.js";
import { renderedSurfaceZ, surfaceMaterialPathD } from "./surfaceOutline.js";
import type { DiagramPointTransform } from "./surfaceOutline.js";

export { createCoordinateTransforms };

/**
 * Compute display-only element trimming diagnostics for a RuntimeLens diagram.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @returns per-element render semi-diameter diagnostics
 */
export function computeElementRenderDiagnostics(L: RuntimeLens, zPos: number[]): ElementRenderDiagnostics[] {
  return computeElementRenderDiagnosticsForState(stateForRuntimeDiagram(L, zPos));
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
export function computeElementShapes(
  L: RuntimeLens,
  zPos: number[],
  sx: (z: number) => number,
  sy: (y: number) => number,
  pointTransform?: DiagramPointTransform,
): ElementShape[] {
  return computeElementShapesForState(stateForRuntimeDiagram(L, zPos), sx, sy, pointTransform);
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
export function stateForRuntimeDiagram(L: RuntimeLens, zPos: readonly number[]): PreparedOpticalState {
  return stateWithZ(prepareState(compiledLensFromRuntime(L), 0, 0, 0), zPos, "preserve");
}

/** Render reflecting interfaces that are not boundaries of a transmissive glass body. */
export function computeStandaloneMirrorPaths(
  L: RuntimeLens,
  zPos: number[],
  sx: (z: number) => number,
  sy: (y: number) => number,
  pointTransform?: DiagramPointTransform,
): SurfaceAccentPathData[] {
  if (!L.S.some((surface) => surface.interaction?.type === "reflect")) return [];
  const boundaries = new Set(L.ES.flatMap(([, front, rear]) => [front, rear]));
  const state = stateForRuntimeDiagram(L, zPos);
  return state.surfaces.flatMap((surface, surfIdx) => {
    if (surface.interaction.type !== "reflect" || boundaries.has(surfIdx)) return [];
    const z = renderedSurfaceZ(surface, surface.sd);
    const [zz, yy] = pointTransform ? pointTransform(z, surface.sd) : [z, surface.sd];
    return [
      {
        surfIdx,
        pathD: surfaceMaterialPathD(state, surfIdx, surface.sd, surface.innerSd ?? 0, sx, sy, pointTransform),
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
