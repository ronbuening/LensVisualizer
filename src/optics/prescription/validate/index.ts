/** Validation in diagnostic order: authored declarations, canonical facts, then compiled probe geometry. */
import type { LensData, SurfaceData } from "../../../types/optics.js";
import type { CanonicalLens, IngestedPrescription } from "../canonical.js";
import { canonicalConstructionData } from "../constructionData.js";
import { buildLabelIndex } from "../compileLabels.js";
import type { UntrustedLensData } from "./context.js";
import { validateTopLevel, validateSurfaces, validateElements } from "./schema.js";
import { validateReferences, validateSpans, validateAnnotations } from "./references.js";
import { validateStations, validateControls } from "./controls.js";
import { validateStop, validatePairedInnerSdConsistency } from "./aperture.js";
import { validateTiltedMirrorBackingNormals, validateFoldedImagePlaneReachability } from "./folded.js";
import { authoredMessages } from "./paths.js";
import { validateGeometry } from "./geometry.js";
import { validatePatentMetadata } from "./patent.js";

/** Restore ignored source facts only for diagnostics; optical construction always uses canonical values. */
function diagnosticRecords(ingested: IngestedPrescription<CanonicalLens>): LensData {
  const data = canonicalConstructionData(ingested.prescription);
  data.surfaces.forEach((surface, i) => {
    const ignored = ingested.provenance.ignored;
    for (const field of ["sd", "R"] as const) {
      const value = ignored[`surfaces[${i}].${field}`];
      if (typeof value === "number") surface[field] = value;
    }
  });
  if (typeof ingested.provenance.ignored["zoom.step"] === "number")
    data.zoomStep = ingested.provenance.ignored["zoom.step"];
  return data;
}

function validate(data: UntrustedLensData): string[] {
  const errors: string[] = [];
  validateTopLevel(data, errors);
  validatePatentMetadata(data, errors);
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
  validateGeometry(data, labelToIdx, explicitSpans, isZoom, errors, data.gapSagFrac, data.maxRimAngleDeg);
  return errors;
}

/** Raw numeric-column API; missing runtime fields retain their historical diagnostics. */
export default function validateLensData(data: UntrustedLensData): string[] {
  return validate(data);
}

/** Canonical entry: provenance keeps ignored values and source spellings in diagnostics, outside prescription semantics. */
export function validateCanonicalLens(
  ingested: IngestedPrescription<CanonicalLens>,
  descriptor = ingested.attachedTeleconverter,
): string[] {
  const data = diagnosticRecords(ingested);
  if (descriptor) data.attachedTeleconverter = descriptor;
  return authoredMessages(validate(data), ingested);
}
