import type { LensDataV2Input } from "../../types/lensDataV2.js";
import type { LensDataInput, RuntimeLens } from "../../types/optics.js";
import type { CanonicalLens, IngestedPrescription } from "./canonical.js";
import { runtimeView } from "./runtimeView.js";
import { compileLensData, compileLens } from "./compile.js";

/**
 * Build and register a RuntimeLens from an authored file or canonical prescription.
 *
 * @param data - authored V1/V2 file or canonical prescription
 * @returns the shared frozen RuntimeLens for the canonical identity
 */
export function buildLens(data: LensDataInput | LensDataV2Input | CanonicalLens): RuntimeLens {
  return runtimeView(compileLensData(data));
}

/**
 * Compile a transported canonical input and publish its UI view.
 *
 * @param input - canonical lens and source provenance, before rear-plate expansion
 * @returns frozen runtime sharing one successful compilation per prescription identity
 */
export function buildCanonicalLens(input: IngestedPrescription<CanonicalLens>): RuntimeLens {
  return runtimeView(compileLens(input));
}
