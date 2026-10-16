/**
 * Dispersion quality summaries — reports catalog and approximation coverage for a lens state.
 *
 * Used by chromatic UI and reports to explain whether a lens is using Sellmeier, line-index, or Abbe fallback data.
 */

import type { DispersionQuality } from "../../types/dispersion.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { CompiledLens, PreparedOpticalState } from "../types.js";

const QUALITY_ORDER: DispersionQuality[] = ["sellmeier", "lineIndices", "abbe", "constant"];

/**
 * Report the weakest dispersion data quality used by a compiled lens.
 *
 * Air surfaces are ignored. The returned quality is a conservative summary for
 * user-facing badges: if any glass falls back to Abbe or constant index, that
 * weaker level represents the whole lens.
 *
 * @param lens - compiled lens with compiled surface dispersions
 * @returns worst non-air dispersion quality in the lens
 */
export function summarizeDispersionQualityForLens2(lens: CompiledLens): DispersionQuality {
  return summarizeTableQuality(lens.dispersion, lens.dispersion.length);
}

function summarizeTableQuality(
  table: Readonly<Record<number, { quality: DispersionQuality }>> | undefined,
  count: number,
): DispersionQuality {
  let worst: DispersionQuality = "sellmeier";
  for (let i = 0; i < count; i++) {
    const entry = table?.[i];
    if (!entry || entry.quality === "air") continue;
    if (QUALITY_ORDER.indexOf(entry.quality) > QUALITY_ORDER.indexOf(worst)) worst = entry.quality;
  }
  return worst;
}

/**
 * Report dispersion quality for an already prepared optical state.
 *
 * @param state - prepared optical state whose lens contains compiled dispersion data
 * @returns worst non-air dispersion quality in the lens
 */
export function summarizeDispersionQualityForState2(state: PreparedOpticalState): DispersionQuality {
  return summarizeDispersionQualityForLens2(state.lens);
}

/**
 * Report dispersion quality from the shared runtime table, without resolving materials.
 *
 * @param L - runtime lens object
 * @returns worst non-air dispersion quality in the lens
 */
export function summarizeDispersionQuality2(L: RuntimeLens): DispersionQuality {
  return summarizeTableQuality(L.indexByIdx, L.N);
}
