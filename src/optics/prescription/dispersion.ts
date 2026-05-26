import type { ElementData, SurfaceData, SurfaceSpectral } from "../../types/optics.js";
import { makeSurfaceDispersion } from "../dispersion.js";
import type { SurfaceDispersion } from "../types.js";

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
