/**
 * Chromatic dispersion adapter — legacy RuntimeLens wrappers over compiled surface dispersions.
 *
 * Keeps public chromatic helpers stable while the chromatic table builder owns dispersion compilation.
 */

import type { ElementData, RuntimeLens, SurfaceData, SurfaceSpectral } from "../../types/optics.js";
import { makeSurfaceDispersion } from "./materialResolver.js";
import type { CompiledSurfaceDispersion } from "../types.js";
import { compiledLensFromRuntime } from "../prescription/identity.js";
import { compileSurfaceDispersions } from "./dispersionTable.js";

export { compileSurfaceDispersions };

/**
 * Build a per-surface dispersion descriptor from RuntimeLens prescription data.
 *
 * @param surface - physical surface record with d-line index and optional glass label
 * @param element - owning element metadata, used for glass-level catalog hints
 * @param spectral - optional patent line-index data for this surface
 * @returns channel-index resolver and quality marker for the surface
 */
export function makeSurfaceDispersionForRuntimeSurface(
  surface: SurfaceData,
  element: ElementData | undefined,
  spectral: SurfaceSpectral | undefined,
): ReturnType<typeof makeSurfaceDispersion> {
  return makeSurfaceDispersion(surface, element, spectral);
}

/**
 * Compile the RuntimeLens dispersion table in engine-native shape.
 *
 * @param L - runtime lens with physical surfaces, elements, and spectral metadata
 * @returns one dispersion descriptor per physical surface
 */
export function dispersionTableFromRuntime(L: RuntimeLens): readonly CompiledSurfaceDispersion[] {
  return compiledLensFromRuntime(L).dispersion;
}
