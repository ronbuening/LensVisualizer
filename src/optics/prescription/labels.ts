/**
 * Prescription label utilities — resolve authored surface labels into stable numeric indices.
 *
 * Used during lens normalization so optical paths, stops, aspheres, and annotations can reference
 * human-readable labels without carrying string lookups into hot trace loops.
 */

import type { SurfaceData } from "../../types/optics.js";

/** Error thrown when lens normalization cannot resolve authored prescription references. */
export class Optics2LensNormalizationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Optics2LensNormalizationError";
  }
}

/**
 * Build a unique surface-label lookup for a prescription.
 *
 * @param surfaces - authored surfaces with label fields
 * @returns frozen label-to-index map
 * @throws Optics2LensNormalizationError when labels are duplicated
 */
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

/**
 * Resolve a required surface label to its zero-based index.
 *
 * @param label - authored surface label
 * @param labelToSurfaceIndex - normalized label lookup
 * @param context - field name included in errors
 * @returns zero-based physical surface index
 * @throws Optics2LensNormalizationError when the label is unknown
 */
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
