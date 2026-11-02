/**
 * Chromatic dispersion tables — attaches per-surface spectral metadata to engine surfaces.
 *
 * Preserves catalog/line-index information from lens data so chromatic tracing can resolve n(lambda)
 * without reparsing element records.
 */

import type { ElementData, SurfaceData, SurfaceSpectral } from "../../types/optics.js";
import { makeSurfaceDispersion } from "./materialResolver.js";
import type { CompiledSurfaceDispersion } from "../types.js";

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
): readonly CompiledSurfaceDispersion[] {
  const table = resolveMaterialTable(surfaces, elements, spectralByIdx);
  return compiledDispersionTable(table, surfaces);
}

export function buildVdIndex(surfaces: SurfaceData[], elements: ElementData[]): Record<number, number> {
  const elementById = new Map(elements.map((element) => [element.id, element]));
  const vdByIdx: Record<number, number> = {};
  for (let i = 0; i < surfaces.length; i++) {
    const elementId = surfaces[i].elemId;
    if (!elementId) continue;
    const element = elementById.get(elementId);
    if (element?.vd) vdByIdx[i] = element.vd;
  }
  return vdByIdx;
}

export function buildSpectralIndex(surfaces: SurfaceData[], elements: ElementData[]): Record<number, SurfaceSpectral> {
  const elementById = new Map(elements.map((element) => [element.id, element]));
  const spectralByIdx: Record<number, SurfaceSpectral> = {};
  for (let i = 0; i < surfaces.length; i++) {
    const elementId = surfaces[i].elemId;
    if (!elementId) continue;
    const element = elementById.get(elementId);
    if (!element) continue;
    const entry: SurfaceSpectral = {};
    if (element.dPgF !== undefined) entry.dPgF = element.dPgF;
    if (element.nC !== undefined) entry.nC = element.nC;
    if (element.nF !== undefined) entry.nF = element.nF;
    if (element.ng !== undefined) entry.ng = element.ng;
    if (Object.keys(entry).length > 0) spectralByIdx[i] = entry;
  }
  return spectralByIdx;
}

/** Resolve each medium identity once. Equal names on distinct elements never merge. */
export function resolveMaterialTable(
  surfaces: readonly SurfaceData[],
  elements: readonly ElementData[],
  spectralByIdx: Readonly<Record<number, SurfaceSpectral>>,
): Record<number, ReturnType<typeof makeSurfaceDispersion>> {
  const elementsById = new Map(elements.map((e) => [e.id, e]));
  const media = new Map<number | string, ReturnType<typeof makeSurfaceDispersion>>();
  const table: Record<number, ReturnType<typeof makeSurfaceDispersion>> = {};
  surfaces.forEach((surface, index) => {
    const key = surface.nd === 1 ? "air" : surface.elemId || `index:${surface.nd}`;
    let descriptor = media.get(key);
    if (!descriptor) {
      descriptor = makeSurfaceDispersion(surface, elementsById.get(surface.elemId), spectralByIdx[index]);
      media.set(key, descriptor);
    }
    table[index] = descriptor;
  });
  return table;
}

export function compiledDispersionTable(
  table: ReturnType<typeof resolveMaterialTable>,
  surfaces: readonly SurfaceData[],
): readonly CompiledSurfaceDispersion[] {
  return Object.freeze(
    surfaces.map((_, surfaceIndex) => {
      const descriptor = table[surfaceIndex];
      return Object.freeze({
        surfaceIndex,
        quality: descriptor.quality,
        glassEntry: descriptor.glassEntry ?? null,
        indexAt: descriptor.fn,
      });
    }),
  );
}
