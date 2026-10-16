/** Canonical-first construction entry. Authored validation remains here until S5.P1.T3. */
import validateLensData from "../validateLensData.js";
import type { LensData, LensDataInput } from "../../types/optics.js";
import type { LensDataV2Input } from "../../types/lensDataV2.js";
import type { CompiledLens } from "../types.js";
import type { CanonicalLens, IngestedPrescription } from "./canonical.js";
import { v1CatalogDefaults } from "./defaults.js";
import { ingestLens, isV1File } from "./ingestV2.js";
import { toLensData } from "./toLensData.js";
import { associateCanonical, canonicalForView } from "./identity.js";
import { canonicalFromComposedPair } from "./compileComposed.js";
import { compileCanonicalUncached } from "./compileCanonical.js";
export { compiledLensFromRuntime } from "./identity.js";

const COMPILED_BY_CANONICAL = new WeakMap<CanonicalLens, CompiledLens>();

/** Validator-first V1 defaults spread, retained until T3. Nothing is built from this spread. */
function asTheValidatorReadsIt(data: unknown): LensData {
  return { ...v1CatalogDefaults(), ...(data as object) } as LensData;
}
export function validateAuthoredLensData(data: unknown): string[] {
  return validateLensData(asTheValidatorReadsIt(data));
}
function assertValidLensData(data: LensData): void {
  const validationErrors = validateLensData(data);
  if (validationErrors.length > 0)
    throw new Error(
      `Lens data "${data.key || "?"}" has ${validationErrors.length} error(s):\n  • ${validationErrors.join("\n  • ")}`,
    );
}
function canonicalInput(data: LensData | LensDataV2Input): IngestedPrescription<CanonicalLens> {
  const marker = (data as { attachedTeleconverter?: unknown } | undefined)?.attachedTeleconverter;
  const composed = marker !== null && typeof marker === "object";
  if (composed) assertValidLensData(data as LensData);
  else if (data === null || typeof data !== "object" || isV1File(data))
    assertValidLensData(asTheValidatorReadsIt(data));
  const cached = canonicalForView(data);
  if (cached) return cached;
  const ingested = composed
    ? canonicalFromComposedPair(data as LensData)
    : ingestLens(data as LensDataInput | LensDataV2Input);
  associateCanonical(data, ingested);
  return ingested;
}
/** Compatibility data projection for callers inspecting the build boundary; no runtime compilation. */
export function withLensDefaults(data: LensData | LensDataV2Input): LensData {
  const ingested = canonicalInput(data);
  if ((data as LensData).attachedTeleconverter) {
    const view = { ...data } as LensData;
    associateCanonical(view, ingested);
    return view;
  }
  return toLensData(ingested);
}
/** One successful compile per canonical prescription identity, independent of key strings. */
export function compileLens(
  ingested: IngestedPrescription<CanonicalLens>,
  descriptor?: LensData["attachedTeleconverter"],
): CompiledLens {
  const cached = COMPILED_BY_CANONICAL.get(ingested.prescription);
  if (cached) return cached;
  const compiled = compileCanonicalUncached(ingested.prescription, ingested.provenance, descriptor);
  COMPILED_BY_CANONICAL.set(ingested.prescription, compiled);
  return compiled;
}
export function compileLensData(data: LensData | LensDataV2Input): CompiledLens {
  const ingested = canonicalInput(data);
  // V2 mapping retains its authored-path refusals; the validator then reads the mapped V1 view.
  assertValidLensData((data as LensData).attachedTeleconverter ? (data as LensData) : toLensData(ingested));
  return compileLens(ingested, (data as LensData).attachedTeleconverter);
}
