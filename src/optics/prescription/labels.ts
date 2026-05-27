/**
 * Prescription label utilities — resolve authored surface labels into stable numeric indices.
 *
 * Used during lens normalization so optical paths, stops, aspheres, and annotations can reference
 * human-readable labels without carrying string lookups into hot trace loops.
 */

import type { SurfaceData } from "../../types/optics.js";

export class Optics2LensNormalizationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Optics2LensNormalizationError";
  }
}

export function buildSurfaceLabelMap(
  surfaces: readonly Pick<SurfaceData, "label">[],
): Readonly<Record<string, number>> {
  const labelToSurfaceIndex: Record<string, number> = {};
  for (let i = 0; i < surfaces.length; i++) {
    const label = surfaces[i].label;
    if (labelToSurfaceIndex[label] !== undefined) {
      throw new Optics2LensNormalizationError(`Duplicate surface label: "${label}"`);
    }
    labelToSurfaceIndex[label] = i;
  }
  return Object.freeze(labelToSurfaceIndex);
}

export function resolveLabel(
  label: string,
  labelToSurfaceIndex: Readonly<Record<string, number>>,
  context: string,
): number {
  const index = labelToSurfaceIndex[label];
  if (index === undefined) {
    throw new Optics2LensNormalizationError(`${context}: surface label "${label}" was not found`);
  }
  return index;
}
