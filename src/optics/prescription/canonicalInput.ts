/** Shared input boundary for compilation and composition; accepts authored V2 files and canonical prescriptions. */
import type { LensData } from "../../types/optics.js";
import type { LensDataV2Input } from "../../types/lensDataV2.js";
import type { CanonicalLens, IngestedPrescription, IngestRequest } from "./canonical.js";
import { ingestLens } from "./ingestV2.js";
import { associateCanonical, canonicalForView } from "./identity.js";

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
 * Resolve a canonical association or read an authored V2 file.
 *
 * @param data - authored lens file or associated canonical prescription
 * @returns unexpanded canonical prescription and provenance
 */
export function canonicalInput(
  data: LensDataV2Input | CanonicalLens,
  request?: IngestRequest,
): IngestedPrescription<CanonicalLens> {
  if (data && typeof data === "object" && "kind" in data && data.kind === "lens") {
    return canonicalForView(data) ?? { prescription: data, provenance: { format: 2, defaulted: [], ignored: {} } };
  }
  const cached = data && typeof data === "object" ? canonicalForView(data) : undefined;
  if (cached) return cached;
  const ingested = ingestLens(data as LensDataV2Input, request);
  associateCanonical(data, ingested);
  associateCanonical(ingested.prescription, ingested);
  return ingested;
}
