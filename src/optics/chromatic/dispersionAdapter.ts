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

export function makeSurfaceDispersion2(
  surface: SurfaceData,
  element: ElementData | undefined,
  spectral: SurfaceSpectral | undefined,
): ReturnType<typeof makeSurfaceDispersion> {
  return makeSurfaceDispersion(surface, element, spectral);
}

export function dispersionTableFromRuntime2(L: RuntimeLens): readonly SurfaceDispersion[] {
  return compileSurfaceDispersions(L.S, L.data.elements, L.spectralByIdx);
}
