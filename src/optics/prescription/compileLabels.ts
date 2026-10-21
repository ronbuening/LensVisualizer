/**
 * Prescription label utilities — resolve authored surface labels into stable numeric indices.
 *
 * Used during lens normalization so optical paths, stops, aspheres, and annotations can reference
 * human-readable labels without carrying string lookups into hot trace loops.
 */

import type { SurfaceData } from "../../types/optics.js";

/** Error thrown when lens normalization cannot resolve authored prescription references. */
export class LensNormalizationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LensNormalizationError";
  }
}

/**
 * Build a unique surface-label lookup for a prescription.
 *
 * @param surfaces - authored surfaces with label fields
 * @returns frozen label-to-index map
 * @throws LensNormalizationError when labels are duplicated
 */
export function buildSurfaceLabelMap(
  surfaces: readonly Pick<SurfaceData, "label">[],
): Readonly<Record<string, number>> {
  const labelToSurfaceIndex = buildLabelIndex(surfaces);
  const seen = new Set<string>();
  for (let i = 0; i < surfaces.length; i++) {
    const label = surfaces[i].label;
    if (seen.has(label)) {
      throw new LensNormalizationError(`Duplicate surface label: "${label}"`);
    }
    seen.add(label);
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
 * @throws LensNormalizationError when the label is unknown
 */
export function resolveLabel(
  label: string,
  labelToSurfaceIndex: Readonly<Record<string, number>>,
  context: string,
): number {
  const index = labelToSurfaceIndex[label];
  if (index === undefined) {
    throw new LensNormalizationError(`${context}: surface label "${label}" was not found`);
  }
  return index;
}

export function buildLabelIndex(surfaces: readonly Pick<SurfaceData, "label">[]): Record<string, number> {
  const labelIdx: Record<string, number> = {};
  for (let i = 0; i < surfaces.length; i++) {
    labelIdx[surfaces[i].label] = i;
  }
  return labelIdx;
}
