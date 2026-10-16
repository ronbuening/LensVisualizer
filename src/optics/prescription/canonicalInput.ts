/** Shared input boundary for compilation and composition; preserves authored V1 refusals before ingest. */
import type { LensData, LensDataInput } from "../../types/optics.js";
import type { LensDataV2Input } from "../../types/lensDataV2.js";
import type { CanonicalLens, IngestedPrescription } from "./canonical.js";
import { ingestLens, isV1File } from "./ingestV2.js";
import { associateCanonical, canonicalForView } from "./identity.js";
import { validateLensInput } from "./validate/index.js";

/**
 * Refuse validation errors before ingest or compiled publication.
 *
 * @param data - prescription identity for the diagnostic
 * @param validationErrors - ordered validator messages
 * @returns nothing when validation succeeds
 */
export function assertValidLensData(data: Pick<LensData, "key">, validationErrors: string[]): void {
  if (validationErrors.length > 0)
    throw new Error(
      `Lens data "${data?.key || "?"}" has ${validationErrors.length} error(s):\n  • ${validationErrors.join("\n  • ")}`,
    );
}
/**
 * Resolve a canonical association or read an authored file with V1 validation first.
 *
 * @param data - authored lens file or associated compatibility view
 * @returns unexpanded canonical prescription and provenance
 */
export function canonicalInput(data: LensData | LensDataV2Input): IngestedPrescription<CanonicalLens> {
  if (data === null || typeof data !== "object" || isV1File(data)) assertValidLensData(data, validateLensInput(data));
  const cached = canonicalForView(data);
  if (cached) return cached;
  const ingested = ingestLens(data as LensDataInput | LensDataV2Input);
  associateCanonical(data, ingested);
  return ingested;
}
