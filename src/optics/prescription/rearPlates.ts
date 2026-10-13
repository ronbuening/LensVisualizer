/**
 * Rear-plate expansion — turns source-documented cover glass / filter plates into traced surfaces.
 *
 * Authored lens data may list `rearPlates` behind the last lens surface with their physical patent gaps.
 * `expandRearPlates()` appends two flat refracting surfaces and one synthetic element per plate so the exact
 * tracer, dispersion lookup and every analysis see the plate. The synthetic marker keeps the plate out of
 * drawn element spans, element lists and diagram scale (see `buildElementSpans` and `buildLens`).
 *
 * A composed host + teleconverter system is the one case where plates are not all trailing: a lens-side drop-in
 * filter stays ahead of the converter, so its surfaces are emitted between the host's last surface and the
 * converter's first.
 */

import type { ElementData, LensData, SurfaceData } from "../../types/optics.js";
import { IMAGE_FORMAT_BY_ID, isImageFormatId } from "../../utils/catalog/lensTaxonomy.js";

/** Flat-surface radius used by authored prescriptions. */
const FLAT_R = 1e15;

/**
 * Generated plate semi-diameter as a multiple of the larger of the largest authored semi-diameter and the image
 * semi-diagonal. A generated rim is marked `clips: false`, so it never clips a ray or limits the field at any size;
 * the value only extends the envelopes that ray launch and intersection bounds read from surface rims.
 */
const GENERATED_SD_FACTOR = 1.5;

/**
 * Half the larger of the declared image circle and format diagonal, or 0 when neither is declared.
 *
 * @param data - lens data after defaults merging
 * @returns image semi-diagonal in mm
 */
function imageSemiDiagonalMm(data: LensData): number {
  const formatDiagonal = isImageFormatId(data.imageFormat) ? IMAGE_FORMAT_BY_ID[data.imageFormat].diagonalMm : 0;
  return Math.max(formatDiagonal, data.imageCircleMm ?? 0) / 2;
}

/** Reserved synthetic surface labels: `RP<n>a` (plate front) and `RP<n>b` (plate rear). */
export const REAR_PLATE_LABEL_PATTERN = /^RP\d+[ab]$/;

/**
 * Surface labels generated for the plate at `plateIndex`.
 *
 * @param plateIndex - zero-based position in `rearPlates`
 * @returns front and rear surface labels
 */
export function rearPlateSurfaceLabels(plateIndex: number): [string, string] {
  return [`RP${plateIndex + 1}a`, `RP${plateIndex + 1}b`];
}

/* The air-equivalent fold lives in the import-free teleconverter fit module so the build script can load it under
 * plain Node; re-exported here so plate callers keep one import path. */
export { rearPlateAirEquivalentMm } from "./teleconverterCompatibility.js";

/**
 * Append synthetic plate surfaces and elements for lenses that declare `rearPlates`.
 *
 * The last authored surface keeps its `d` and `var` entry, which now describe the physical gap to the first plate;
 * plate thicknesses and trailing gaps are fixed camera-side distances. Lenses without plates are returned unchanged
 * (same object), so the zero-plate path is identity.
 *
 * With an attached teleconverter, the descriptor's `platesAhead` leading plates go in front of the converter's first
 * surface; the composer has already set the last of them to trail into the converter. Expansion stays the only
 * place plates become surfaces, so a rebuild from stripped runtime data (the MTF worker) reproduces the same stack.
 *
 * @param data - validated lens data after defaults merging
 * @returns lens data whose `surfaces` and `elements` include the synthetic plates
 */
export function expandRearPlates(data: LensData): LensData {
  const plates = data.rearPlates;
  if (!plates || plates.length === 0) return data;

  const generatedSd =
    GENERATED_SD_FACTOR * Math.max(...data.surfaces.map((surface) => surface.sd), imageSemiDiagonalMm(data));
  let nextElementId = Math.max(0, ...data.elements.map((element) => element.id)) + 1;
  const teleconverter = data.attachedTeleconverter;
  const platesAhead = teleconverter?.platesAhead ?? 0;
  const converterStart =
    platesAhead > 0
      ? data.surfaces.findIndex((surface) => surface.label === teleconverter!.firstSurfaceLabel)
      : data.surfaces.length;
  /* Plates ahead of a converter are collected here and spliced in before it; the rest append as usual. */
  const aheadSurfaces: SurfaceData[] = [];
  const trailingSurfaces: SurfaceData[] = [];
  const elements: ElementData[] = [...data.elements];

  plates.forEach((plate, plateIndex) => {
    const surfaces = plateIndex < platesAhead ? aheadSurfaces : trailingSurfaces;
    const elemId = nextElementId++;
    const [frontLabel, rearLabel] = rearPlateSurfaceLabels(plateIndex);
    /* A published rim is a real aperture; a generated one only stands in for an unknown plate size. */
    const rim: Pick<SurfaceData, "sd" | "clips"> =
      plate.sd === undefined ? { sd: generatedSd, clips: false } : { sd: plate.sd };
    const name = plate.label ?? `Rear plate ${plateIndex + 1}`;
    elements.push({
      id: elemId,
      name,
      label: name,
      type: "Plane Parallel Plate",
      nd: plate.nd,
      vd: plate.vd,
      ...(plate.indexReference !== undefined ? { indexReference: plate.indexReference } : {}),
      ...(plate.glass !== undefined ? { glass: plate.glass } : {}),
      ...(plate.dPgF !== undefined ? { dPgF: plate.dPgF } : {}),
      ...(plate.nC !== undefined ? { nC: plate.nC } : {}),
      ...(plate.nF !== undefined ? { nF: plate.nF } : {}),
      ...(plate.ng !== undefined ? { ng: plate.ng } : {}),
      role: "Source-documented rear plate (traced, not drawn).",
      synthetic: "rearPlate",
    });
    surfaces.push(
      { label: frontLabel, R: FLAT_R, d: plate.thicknessMm, nd: plate.nd, elemId, ...rim, synthetic: "rearPlate" },
      { label: rearLabel, R: FLAT_R, d: plate.gapAfterMm, nd: 1, elemId: 0, ...rim, synthetic: "rearPlate" },
    );
  });

  return {
    ...data,
    surfaces: [
      ...data.surfaces.slice(0, converterStart),
      ...aheadSurfaces,
      ...data.surfaces.slice(converterStart),
      ...trailingSurfaces,
    ],
    elements,
  };
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
