/** Canonical-first construction entry; validation precedes successful compilation. */
import validateLensData, { validateLensInput, validateCanonicalLens } from "./validate/index.js";
import type { LensData, LensDataInput } from "../../types/optics.js";
import type { LensDataV2Input } from "../../types/lensDataV2.js";
import type { CompiledLens } from "../types.js";
import type { CanonicalLens, IngestedPrescription } from "./canonical.js";
import { ingestLens, isV1File } from "./ingestV2.js";
import { toLensData } from "./toLensData.js";
import { associateCanonical, canonicalForView } from "./identity.js";
import { canonicalFromComposedPair } from "./compileComposed.js";
import { compileCanonicalUncached } from "./compileCanonical.js";
export { compiledLensFromRuntime } from "./identity.js";

const COMPILED_BY_CANONICAL = new WeakMap<CanonicalLens, CompiledLens>();

function assertValidLensData(data: Pick<LensData, "key">, validationErrors: string[]): void {
  if (validationErrors.length > 0)
    throw new Error(
      `Lens data "${data?.key || "?"}" has ${validationErrors.length} error(s):\n  • ${validationErrors.join("\n  • ")}`,
    );
}
function canonicalInput(data: LensData | LensDataV2Input): IngestedPrescription<CanonicalLens> {
  const marker = (data as { attachedTeleconverter?: unknown } | undefined)?.attachedTeleconverter;
  const composed = marker !== null && typeof marker === "object";
  if (composed) assertValidLensData(data as LensData, validateLensData(data as LensData));
  else if (data === null || typeof data !== "object" || isV1File(data))
    assertValidLensData(data, validateLensInput(data));
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
  assertValidLensData(ingested.prescription, validateCanonicalLens(ingested, descriptor));
  const compiled = compileCanonicalUncached(ingested.prescription, ingested.provenance, descriptor);
  COMPILED_BY_CANONICAL.set(ingested.prescription, compiled);
  return compiled;
}
export function compileLensData(data: LensData | LensDataV2Input): CompiledLens {
  const ingested = canonicalInput(data);
  return compileLens(ingested, (data as LensData).attachedTeleconverter);
}
