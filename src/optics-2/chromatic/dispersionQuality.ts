import type { DispersionQuality } from "../../optics/dispersion.js";
import type { RuntimeLens } from "../../types/optics.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import type { EngineLens, PreparedOpticalState } from "../types.js";

const QUALITY_ORDER: DispersionQuality[] = ["sellmeier", "lineIndices", "abbe", "constant"];
const ENGINE_LENS_BY_RUNTIME = new WeakMap<RuntimeLens, EngineLens>();

export function summarizeDispersionQualityForLens2(lens: EngineLens): DispersionQuality {
  let worst: DispersionQuality = "sellmeier";
  for (const entry of lens.dispersion) {
    if (!entry || entry.quality === "air") continue;
    if (QUALITY_ORDER.indexOf(entry.quality) > QUALITY_ORDER.indexOf(worst)) worst = entry.quality;
  }
  return worst;
}

export function summarizeDispersionQualityForState2(state: PreparedOpticalState): DispersionQuality {
  return summarizeDispersionQualityForLens2(state.lens);
}

export function summarizeDispersionQuality2(L: RuntimeLens): DispersionQuality {
  let engineLens = ENGINE_LENS_BY_RUNTIME.get(L);
  if (!engineLens) {
    engineLens = normalizeRuntimeLens(L);
    ENGINE_LENS_BY_RUNTIME.set(L, engineLens);
  }
  return summarizeDispersionQualityForLens2(engineLens);
}
