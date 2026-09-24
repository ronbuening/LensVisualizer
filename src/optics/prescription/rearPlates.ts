/**
 * Rear-plate expansion — turns source-documented cover glass / filter plates into traced surfaces.
 *
 * Authored lens data may list `rearPlates` behind the last lens surface with their physical patent gaps.
 * `expandRearPlates()` appends two flat refracting surfaces and one synthetic element per plate so the exact
 * tracer, dispersion lookup and every analysis see the plate. The synthetic marker keeps the plate out of
 * drawn element spans, element lists and diagram scale (see `buildElementSpans` and `buildLens`).
 */

import type { ElementData, LensData, RearPlateData, SurfaceData } from "../../types/optics.js";

/** Flat-surface radius used by authored prescriptions. */
const FLAT_R = 1e15;

/** Generated plate semi-diameter as a multiple of the largest authored semi-diameter (never clips or limits field). */
const GENERATED_SD_FACTOR = 1.5;

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

/**
 * Sum of the air-equivalent distances of a plate stack: Σ(t/n + gapAfter).
 *
 * Adding the physical gap before the first plate gives the legacy folded back-focus value, so migrations can check
 * that paraxial focus is unchanged.
 *
 * @param plates - authored rear plates
 * @returns air-equivalent length of the plates and trailing gaps in mm
 */
export function rearPlateAirEquivalentMm(plates: readonly RearPlateData[]): number {
  return plates.reduce((sum, plate) => sum + plate.thicknessMm / plate.nd + plate.gapAfterMm, 0);
}

/**
 * Append synthetic plate surfaces and elements for lenses that declare `rearPlates`.
 *
 * The last authored surface keeps its `d` and `var` entry, which now describe the physical gap to the first plate;
 * plate thicknesses and trailing gaps are fixed camera-side distances. Lenses without plates are returned unchanged
 * (same object), so the zero-plate path is identity.
 *
 * @param data - validated lens data after defaults merging
 * @returns lens data whose `surfaces` and `elements` include the synthetic plates
 */
export function expandRearPlates(data: LensData): LensData {
  const plates = data.rearPlates;
  if (!plates || plates.length === 0) return data;

  const generatedSd = GENERATED_SD_FACTOR * Math.max(...data.surfaces.map((surface) => surface.sd));
  let nextElementId = Math.max(0, ...data.elements.map((element) => element.id)) + 1;
  const surfaces: SurfaceData[] = [...data.surfaces];
  const elements: ElementData[] = [...data.elements];

  plates.forEach((plate, plateIndex) => {
    const elemId = nextElementId++;
    const [frontLabel, rearLabel] = rearPlateSurfaceLabels(plateIndex);
    const sd = plate.sd ?? generatedSd;
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
      { label: frontLabel, R: FLAT_R, d: plate.thicknessMm, nd: plate.nd, elemId, sd, synthetic: "rearPlate" },
      { label: rearLabel, R: FLAT_R, d: plate.gapAfterMm, nd: 1, elemId: 0, sd, synthetic: "rearPlate" },
    );
  });

  return { ...data, surfaces, elements };
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
