import type { LensData, RuntimeLens } from "../../types/optics.js";
import type { CanonicalLens, IngestedPrescription } from "./canonical.js";
import { runtimeView } from "./runtimeView.js";
import { compileLensData, compileLens } from "./compile.js";

/**
 * Build and register a RuntimeLens from defaulted lens data.
 *
 * @param data - lens prescription after catalog defaults are acceptable
 * @returns the shared frozen RuntimeLens for the canonical identity
 */
export function buildLens(data: LensData): RuntimeLens {
  return runtimeView(compileLensData(data));
}

/**
 * Compile a transported canonical input and publish its compatibility view.
 *
 * @param input - canonical lens and source provenance, before rear-plate expansion
 * @returns frozen runtime sharing one successful compilation per prescription identity
 */
export function buildCanonicalLens(input: IngestedPrescription<CanonicalLens>): RuntimeLens {
  return runtimeView(compileLens(input));
}
