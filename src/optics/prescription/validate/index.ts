/** Validation in diagnostic order: authored declarations, canonical facts, then compiled probe geometry. */
import type { LensData, LensDataInput, SurfaceData } from "../../../types/optics.js";
import type { CanonicalLens, IngestedPrescription } from "../canonical.js";
import { canonicalForView } from "../identity.js";
import { ingestLensV1 } from "../ingestV1.js";
import { toLensData } from "../toLensData.js";
import { buildLabelIndex } from "../compileLabels.js";
import type { UntrustedLensData } from "./context.js";
import { catalogField, validateTopLevel, validateSurfaces, validateElements } from "./schema.js";
import { validateReferences, validateSpans, validateAnnotations } from "./references.js";
import { validateStations, validateControls } from "./controls.js";
import { validateStop, validatePairedInnerSdConsistency } from "./aperture.js";
import { validateTiltedMirrorBackingNormals, validateFoldedImagePlaneReachability } from "./folded.js";
import { authoredMessages } from "./paths.js";
import { validateGeometry } from "./geometry.js";

/** A diagnostic projection only: never compile, expand plates or resolve materials during validation. */
function canonicalRecords(data: UntrustedLensData): LensData | UntrustedLensData {
  if (canonicalForView(data)) return data;
  // The converter validator's reference merge is generated data, not an authored file.
  if (data.attachedTeleconverter !== undefined) return data;
  try {
    return toLensData(ingestLensV1(data as LensDataInput));
  } catch {
    // Ingest refuses ambiguity independently of validation. It must not add a new validator refusal or hide errors.
    return data;
  }
}

function validate(
  data: UntrustedLensData,
  catalogDefaults: boolean,
  canonical?: IngestedPrescription<CanonicalLens>,
): string[] {
  const errors: string[] = [];
  validateTopLevel(data, errors, catalogDefaults);
  if (!Array.isArray(data.surfaces) || !Array.isArray(data.elements)) return errors;
  const surfaceLabels = validateSurfaces(data, errors);
  const elemIds = validateElements(data, errors);
  validateReferences(data, surfaceLabels, elemIds, errors);
  const { isZoom, focusPositionCount } = validateStations(data, errors);
  const labelToIdx = buildLabelIndex(
    data.surfaces.filter((surface: SurfaceData) => typeof surface.label === "string") as Pick<SurfaceData, "label">[],
  );
  const explicitSpans = validateSpans(data, surfaceLabels, labelToIdx, errors);
  validateTiltedMirrorBackingNormals(data.surfaces, explicitSpans, errors);
  validatePairedInnerSdConsistency(data.surfaces, explicitSpans, errors);
  validateFoldedImagePlaneReachability(data, data.surfaces, labelToIdx, errors);
  validateStop(data.surfaces, labelToIdx, explicitSpans, errors);
  validateControls(data, surfaceLabels, labelToIdx, isZoom, focusPositionCount, errors);
  validateAnnotations(data, surfaceLabels, errors);
  // Shape refusals retain their raw geometry diagnostics. Successful mapping supplies canonical geometry facts.
  const geometryData = errors.length === 0 && !canonical ? canonicalRecords(data) : data;
  validateGeometry(
    geometryData,
    labelToIdx,
    explicitSpans,
    isZoom,
    errors,
    catalogField(data, "gapSagFrac", catalogDefaults),
    catalogField(data, "maxRimAngleDeg", catalogDefaults),
  );
  return errors;
}

/** Already-defaulted V1 compatibility API; missing runtime fields retain their historical diagnostics. */
export default function validateLensData(data: UntrustedLensData): string[] {
  return validate(data, false);
}

/** Authored V1 file front door. Only omitted catalog fields read defaults; nothing is merged into the input. */
export function validateLensInput(data: unknown): string[] {
  return validate((data ?? {}) as UntrustedLensData, true);
}

/** Canonical entry: provenance keeps ignored values and source spellings in diagnostics, outside the fingerprint. */
export function validateCanonicalLens(
  ingested: IngestedPrescription<CanonicalLens>,
  descriptor = ingested.attachedTeleconverter,
): string[] {
  const data = toLensData(ingested);
  if (descriptor) data.attachedTeleconverter = descriptor;
  return authoredMessages(validate(data, false, ingested), ingested);
}
