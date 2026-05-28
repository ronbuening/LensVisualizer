/**
 * Chromatic dispersion adapter — legacy RuntimeLens wrappers over compiled surface dispersions.
 *
 * Keeps public chromatic helpers stable while the normalized prescription layer owns dispersion compilation.
 */

import type { ElementData, RuntimeLens, SurfaceData, SurfaceSpectral } from "../../types/optics.js";
import { makeSurfaceDispersion } from "../dispersion.js";
import type { SurfaceDispersion } from "../types.js";
import { compileSurfaceDispersions } from "../prescription/dispersion.js";

export { compileSurfaceDispersions };

/**
 * Build a per-surface dispersion descriptor from RuntimeLens prescription data.
 *
 * @param surface - physical surface record with d-line index and optional glass label
 * @param element - owning element metadata, used for glass-level catalog hints
 * @param spectral - optional patent line-index data for this surface
 * @returns channel-index resolver and quality marker for the surface
 */
export function makeSurfaceDispersion2(
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
export function dispersionTableFromRuntime2(L: RuntimeLens): readonly SurfaceDispersion[] {
  return compileSurfaceDispersions(L.S, L.data.elements, L.spectralByIdx);
}
