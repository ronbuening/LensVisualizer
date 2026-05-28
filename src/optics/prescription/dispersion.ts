/**
 * Prescription dispersion compiler — attaches per-surface spectral metadata to engine surfaces.
 *
 * Preserves catalog/line-index information from lens data so chromatic tracing can resolve n(lambda)
 * without reparsing element records.
 */

import type { ElementData, SurfaceData, SurfaceSpectral } from "../../types/optics.js";
import { makeSurfaceDispersion } from "../dispersion.js";
import type { SurfaceDispersion } from "../types.js";

/**
 * Compile one chromatic dispersion descriptor per physical surface.
 *
 * Element metadata owns glass names and line indices; the compiled table stores
 * surface-index callbacks so chromatic tracing can ask for `n(lambda)` directly.
 *
 * @param surfaces - authored/runtime physical surfaces
 * @param elements - element metadata used to resolve glass and spectral hints
 * @param spectralByIdx - per-surface patent line-index metadata
 * @returns frozen dispersion descriptors aligned with surface indices
 */
export function compileSurfaceDispersions(
  surfaces: readonly SurfaceData[],
  elements: readonly ElementData[],
  spectralByIdx: Readonly<Record<number, SurfaceSpectral>>,
): readonly SurfaceDispersion[] {
  const elementById = new Map(elements.map((element) => [element.id, element]));
  return Object.freeze(
    surfaces.map((surface, surfaceIndex) => {
      const element = surface.elemId ? elementById.get(surface.elemId) : undefined;
      const descriptor = makeSurfaceDispersion(surface, element, spectralByIdx[surfaceIndex]);
      return Object.freeze({
        surfaceIndex,
        quality: descriptor.quality,
        glassEntry: descriptor.glassEntry ?? null,
        indexAt: descriptor.fn,
      });
    }),
  );
}
