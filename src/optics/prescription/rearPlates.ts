/** Canonical rear-plate expansion. Generated records are internal and never enter authored ingest. */
import type { LensData, SurfaceData, RearPlateData } from "../../types/optics.js";
import { IMAGE_FORMAT_BY_ID, isImageFormatId } from "../../utils/catalog/lensTaxonomy.js";
import { FLAT_RADIUS } from "./canonical.js";
import type { CanonicalLens, CanonicalSurface, CanonicalElement, IngestedPrescription } from "./canonical.js";
import { canonicalConstructionData, elementDisplayData } from "./constructionData.js";
import { canonicalForView } from "./identity.js";
import { ingestLens } from "./ingestV2.js";

export const REAR_PLATE_LABEL_PATTERN = /^RP\d+[ab]$/;
export function rearPlateSurfaceLabels(index: number): [string, string] {
  return [`RP${index + 1}a`, `RP${index + 1}b`];
}
export { rearPlateAirEquivalentMm } from "./teleconverterCompatibility.js";

export interface ExpandedCanonicalLens extends CanonicalLens {
  surfaces: (CanonicalSurface & { clips?: false; synthetic?: "rearPlate" })[];
  elements: (CanonicalElement & { synthetic?: "rearPlate" })[];
}

/** Expand once, retaining physical gaps, insertion order and the authoritative-stop rim exclusion. */
export function expandCanonicalRearPlates(
  lens: CanonicalLens,
  descriptor?: LensData["attachedTeleconverter"],
): ExpandedCanonicalLens {
  const plates = lens.rearPlates;
  if (!plates?.length) return lens;
  const largest = Math.max(
    ...lens.surfaces.filter((s) => lens.aperture.stopRadius === "authored" || s.label !== "STO").map((s) => s.sd!),
  );
  const format = lens.catalog.imageFormat;
  const diagonal = isImageFormatId(format) ? IMAGE_FORMAT_BY_ID[format].diagonalMm : 0;
  const generatedSd = 1.5 * Math.max(largest, Math.max(diagonal, lens.catalog.imageCircleMm ?? 0) / 2);
  let nextId = Math.max(0, ...lens.elements.map((e) => e.id)) + 1;
  const ahead: ExpandedCanonicalLens["surfaces"] = [];
  const trailing: ExpandedCanonicalLens["surfaces"] = [];
  const elements: ExpandedCanonicalLens["elements"] = [...lens.elements];
  const platesAhead = descriptor?.platesAhead ?? 0;
  const converterStart =
    platesAhead > 0 ? lens.surfaces.findIndex((s) => s.label === descriptor!.firstSurfaceLabel) : lens.surfaces.length;
  plates.forEach((plate, index) => {
    const id = nextId++;
    const [front, rear] = rearPlateSurfaceLabels(index);
    const name = plate.label ?? `Rear plate ${index + 1}`;
    const rim = plate.sd === undefined ? { sd: generatedSd, clips: false as const } : { sd: plate.sd };
    elements.push({
      id,
      name,
      label: name,
      type: "Plane Parallel Plate",
      nd: plate.nd,
      vd: plate.vd,
      indexReference: plate.indexReference,
      apd: false,
      ...(plate.glass !== undefined ? { glass: plate.glass } : {}),
      ...(plate.dPgF !== undefined ? { dPgF: plate.dPgF } : {}),
      ...(plate.nC !== undefined ? { nC: plate.nC } : {}),
      ...(plate.nF !== undefined ? { nF: plate.nF } : {}),
      ...(plate.ng !== undefined ? { ng: plate.ng } : {}),
      role: "Source-documented rear plate (traced, not drawn).",
      synthetic: "rearPlate",
    });
    (index < platesAhead ? ahead : trailing).push(
      { label: front, R: FLAT_RADIUS, d: plate.thicknessMm, medium: id, ...rim, synthetic: "rearPlate" },
      { label: rear, R: FLAT_RADIUS, d: plate.gapAfterMm, medium: null, ...rim, synthetic: "rearPlate" },
    );
  });
  return {
    ...lens,
    surfaces: [
      ...lens.surfaces.slice(0, converterStart),
      ...ahead,
      ...lens.surfaces.slice(converterStart),
      ...trailing,
    ],
    elements,
  };
}

/** Project internal markers and source echoes separately from the canonical optical values. */
export function expandedConstruction(
  ingested: IngestedPrescription<CanonicalLens>,
  descriptor?: LensData["attachedTeleconverter"],
  sourceOverride?: LensData,
) {
  const expanded = expandCanonicalRearPlates(ingested.prescription, descriptor);
  const data = canonicalConstructionData(expanded);
  data.surfaces.forEach((surface, i) => {
    surface.sd ??= 0;
    const canonical = expanded.surfaces[i];
    if (canonical.synthetic) surface.synthetic = canonical.synthetic;
    if (canonical.clips === false) surface.clips = false;
  });
  data.elements.forEach((element, i) => {
    if (expanded.elements[i].synthetic) element.synthetic = expanded.elements[i].synthetic;
  });
  const source = sourceOverride ?? {
    surfaces: data.surfaces.map((surface, i) => ({
      ...surface,
      R: (ingested.provenance.ignored[`surfaces[${i}].R`] as number) ?? surface.R,
      sd: (ingested.provenance.ignored[`surfaces[${i}].sd`] as number) ?? surface.sd,
    })),
    elements: expanded.elements.map((element, i) =>
      element.synthetic
        ? generatedElementEcho(
            data.elements[i],
            ingested.prescription.rearPlates?.[i - ingested.prescription.elements.length],
          )
        : elementDisplayData(element, i, ingested.provenance),
    ),
  };
  return { expanded, data, source };
}

/* Generated elements historically omit defaulted fields, including the default reference line. */
function generatedElementEcho(element: LensData["elements"][number], plate?: RearPlateData) {
  const { apd: _apd, ...echo } = element;
  if (plate?.indexReference === undefined) delete echo.indexReference;
  return echo;
}

/** Compatibility projection for composition's paraxial pass and report scans. No second plate algorithm. */
export function expandRearPlates(data: LensData): LensData {
  if (!data.rearPlates?.length) return data;
  const ingested = canonicalForView(data) ?? ingestLens(data);
  const expanded = expandedConstruction(ingested, data.attachedTeleconverter, data);
  return { ...data, surfaces: expanded.data.surfaces, elements: expanded.data.elements };
}

/**
 * Index of the last authored lens surface, skipping synthetic rear-plate surfaces.
 *
 * @param surfaces - runtime surfaces (possibly expanded)
 * @returns index of the rear lens vertex
 */
export function lastLensSurfaceIndex(surfaces: readonly SurfaceData[]): number {
  for (let i = surfaces.length - 1; i >= 0; i--) {
    if (!surfaces[i].synthetic) return i;
  }
  return surfaces.length - 1;
}
