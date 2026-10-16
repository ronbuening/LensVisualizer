/** Canonical-first construction entry; validation precedes successful compilation. */
import { validateCanonicalLens } from "./validate/index.js";
import type { LensData } from "../../types/optics.js";
import type { LensDataV2Input } from "../../types/lensDataV2.js";
import type { CompiledLens } from "../types.js";
import type { CanonicalLens, IngestedPrescription } from "./canonical.js";
import { assertValidLensData, canonicalInput } from "./canonicalInput.js";
import { toLensData } from "./toLensData.js";
import { associateCanonical } from "./identity.js";
import { compileCanonicalUncached } from "./compileCanonical.js";
export { compiledLensFromRuntime } from "./identity.js";

const COMPILED_BY_CANONICAL = new WeakMap<CanonicalLens, CompiledLens>();

/** Compatibility data projection for callers inspecting the build boundary; no runtime compilation. */
export function withLensDefaults(data: LensData | LensDataV2Input): LensData {
  const ingested = canonicalInput(data);
  return toLensData(ingested);
}
/** One successful compile per canonical prescription identity, independent of key strings. */
export function compileLens(ingested: IngestedPrescription<CanonicalLens>): CompiledLens {
  const descriptor = ingested.attachedTeleconverter;
  const cached = COMPILED_BY_CANONICAL.get(ingested.prescription);
  if (cached) return cached;
  assertValidLensData(ingested.prescription, validateCanonicalLens(ingested, descriptor));
  const compiled = compileCanonicalUncached(ingested.prescription, ingested.provenance, descriptor);
  associateCanonical(compiled.source, ingested);
  COMPILED_BY_CANONICAL.set(ingested.prescription, compiled);
  return compiled;
}
export function compileLensData(data: LensData | LensDataV2Input): CompiledLens {
  const ingested = canonicalInput(data);
  return compileLens(ingested);
}
