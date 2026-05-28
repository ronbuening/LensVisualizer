/**
 * Dispersion quality summaries — reports catalog and approximation coverage for a lens state.
 *
 * Used by chromatic UI and reports to explain whether a lens is using Sellmeier, line-index, or Abbe fallback data.
 */

import type { DispersionQuality } from "../dispersion.js";
import type { RuntimeLens } from "../../types/optics.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import type { EngineLens, PreparedOpticalState } from "../types.js";

const QUALITY_ORDER: DispersionQuality[] = ["sellmeier", "lineIndices", "abbe", "constant"];
const ENGINE_LENS_BY_RUNTIME = new WeakMap<RuntimeLens, EngineLens>();

/**
 * Report the weakest dispersion data quality used by a normalized engine lens.
 *
 * Air surfaces are ignored. The returned quality is a conservative summary for
 * user-facing badges: if any glass falls back to Abbe or constant index, that
 * weaker level represents the whole lens.
 *
 * @param lens - normalized engine lens with compiled surface dispersions
 * @returns worst non-air dispersion quality in the lens
 */
export function summarizeDispersionQualityForLens2(lens: EngineLens): DispersionQuality {
  let worst: DispersionQuality = "sellmeier";
  for (const entry of lens.dispersion) {
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
 * Report dispersion quality for a RuntimeLens, normalizing once per lens object.
 *
 * @param L - runtime lens object
 * @returns worst non-air dispersion quality in the lens
 */
export function summarizeDispersionQuality2(L: RuntimeLens): DispersionQuality {
  let engineLens = ENGINE_LENS_BY_RUNTIME.get(L);
  if (!engineLens) {
    engineLens = normalizeRuntimeLens(L);
    ENGINE_LENS_BY_RUNTIME.set(L, engineLens);
  }
  return summarizeDispersionQualityForLens2(engineLens);
}
