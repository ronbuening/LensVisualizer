/**
 * Runtime lens-state utilities — label, asphere, group, dispersion, and variable-thickness helpers.
 *
 * Shared by validation and runtime-lens construction to keep authored data resolution consistent before
 * the normalized EngineLens layer is prepared.
 */

import type {
  AberrationVarRange,
  AnnotationData,
  AsphericCoefficients,
  ElementData,
  ElementSpan,
  ResolvedAnnotation,
  SurfaceData,
  SurfaceSpectral,
  VarRange,
} from "../../types/optics.js";
import { resolveControlledThickness } from "../prescription/variables.js";

export { resolveControlledThickness, resolveVariableThickness } from "../prescription/variables.js";

/**
 * Build a surface-label to zero-based index map.
 *
 * @param surfaces - authored surfaces with unique labels
 * @returns lookup table used by variables, aspheres, annotations, and optical paths
 */
export function buildLabelIndex(surfaces: Pick<SurfaceData, "label">[]): Record<string, number> {
  const labelIdx: Record<string, number> = {};
  for (let i = 0; i < surfaces.length; i++) {
    labelIdx[surfaces[i].label] = i;
  }
  return labelIdx;
}

/**
 * Resolve aspheric coefficients from surface labels to surface indices.
 *
 * Unknown labels are ignored here because validation reports them separately.
 *
 * @param asph - label-keyed aspheric coefficient map
 * @param labelIdx - surface-label lookup
 * @returns index-keyed aspheric coefficient map
 */
export function buildAsphereIndex(
  asph: Record<string, AsphericCoefficients> | undefined,
  labelIdx: Record<string, number>,
): Record<number, AsphericCoefficients> {
  const asphByIdx: Record<number, AsphericCoefficients> = {};
  for (const [label, coeffs] of Object.entries(asph || {})) {
    const idx = labelIdx[label];
    if (idx !== undefined) asphByIdx[idx] = Object.freeze({ ...coeffs });
  }
  return asphByIdx;
}

/**
 * Resolve variable gap ranges from surface labels to surface indices.
 *
 * @param variableGaps - label-keyed focus or zoom gap ranges
 * @param labelIdx - surface-label lookup
 * @returns index-keyed variable gap ranges
 */
export function buildVarIndex<T extends VarRange | AberrationVarRange>(
  variableGaps: Record<string, T> | undefined,
  labelIdx: Record<string, number>,
): Record<number, T> {
  const varByIdx: Record<number, T> = {};
  for (const [label, range] of Object.entries(variableGaps || {})) {
    const idx = labelIdx[label];
    if (idx !== undefined) varByIdx[idx] = range;
  }
  return varByIdx;
}

/**
 * Convert authored annotation surface labels to resolved surface indices.
 *
 * @param annotations - optional authored annotations
 * @param labelIdx - surface-label lookup
 * @returns annotations with `fromSurface`/`toSurface` as zero-based indices
 */
export function resolveAnnotations(
  annotations: AnnotationData[] | undefined,
  labelIdx: Record<string, number>,
): ResolvedAnnotation[] {
  return (annotations || []).map((annotation) => ({
    text: annotation.text,
    fromSurface: labelIdx[annotation.fromSurface],
    toSurface: labelIdx[annotation.toSurface],
  }));
}

/**
 * Resolve element ids into inclusive front/rear surface spans.
 *
 * Elements may explicitly name their boundary labels; otherwise the first surface
 * with the element id is paired with the following surface, matching lens-data
 * authoring conventions for simple refractive elements.
 *
 * @param surfaces - authored physical surfaces
 * @param elements - authored element metadata
 * @returns element id plus front/rear surface indices
 */
export function buildElementSpans(surfaces: SurfaceData[], elements: ElementData[]): ElementSpan[] {
  const labelIdx = buildLabelIndex(surfaces);
  return elements.map((element) => {
    if (element.fromSurface !== undefined && element.toSurface !== undefined) {
      const startIdx = labelIdx[element.fromSurface];
      const endIdx = labelIdx[element.toSurface];
      return [element.id, startIdx ?? -1, endIdx ?? -1];
    }

    let startIdx = -1;
    for (let i = 0; i < surfaces.length; i++) {
      if (surfaces[i].elemId === element.id) {
        startIdx = i;
        break;
      }
    }
    return [element.id, startIdx, startIdx + 1];
  });
}

/**
 * Build a per-surface Abbe-number lookup from owning element metadata.
 *
 * @param surfaces - authored physical surfaces
 * @param elements - authored element metadata
 * @returns index-keyed Vd values for surfaces inside glass elements
 */
export function buildVdIndex(surfaces: SurfaceData[], elements: ElementData[]): Record<number, number> {
  const elementById = new Map(elements.map((element) => [element.id, element]));
  const vdByIdx: Record<number, number> = {};
  for (let i = 0; i < surfaces.length; i++) {
    const elementId = surfaces[i].elemId;
    if (!elementId) continue;
    const element = elementById.get(elementId);
    if (element?.vd) vdByIdx[i] = element.vd;
  }
  return vdByIdx;
}

/**
 * Build a per-surface spectral line-index lookup from owning element metadata.
 *
 * @param surfaces - authored physical surfaces
 * @param elements - authored element metadata with optional nC/nF/ng/dPgF data
 * @returns index-keyed spectral data used by chromatic dispersion fallbacks
 */
export function buildSpectralIndex(surfaces: SurfaceData[], elements: ElementData[]): Record<number, SurfaceSpectral> {
  const elementById = new Map(elements.map((element) => [element.id, element]));
  const spectralByIdx: Record<number, SurfaceSpectral> = {};
  for (let i = 0; i < surfaces.length; i++) {
    const elementId = surfaces[i].elemId;
    if (!elementId) continue;
    const element = elementById.get(elementId);
    if (!element) continue;
    const entry: SurfaceSpectral = {};
    if (element.dPgF !== undefined) entry.dPgF = element.dPgF;
    if (element.nC !== undefined) entry.nC = element.nC;
    if (element.nF !== undefined) entry.nF = element.nF;
    if (element.ng !== undefined) entry.ng = element.ng;
    if (Object.keys(entry).length > 0) spectralByIdx[i] = entry;
  }
  return spectralByIdx;
}

/**
 * Extract the infinity-focus thickness from a variable-gap range.
 *
 * @param range - focus range `[inf, close]` or zoom range array
 * @param isZoom - whether the lens uses zoom-indexed ranges
 * @returns first infinity thickness in mm, or null for malformed ranges
 */
export function firstInfinityThickness(range: unknown, isZoom: boolean): number | null {
  if (!Array.isArray(range)) return null;
  if (!isZoom) {
    return typeof range[0] === "number" ? range[0] : null;
  }
  const firstZoomEntry = range[0];
  if (!Array.isArray(firstZoomEntry)) return null;
  return typeof firstZoomEntry[0] === "number" ? firstZoomEntry[0] : null;
}

/**
 * Build a state-adjusted surface array with current controlled thicknesses.
 *
 * @param surfaces - authored physical surfaces
 * @param varByIdx - focus variable gaps keyed by surface index
 * @param isZoom - whether the lens is zoom-variable
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param aberrationVarByIdx - aberration spacing ranges keyed by surface index
 * @param aberrationT - normalized aberration spacing slider
 * @param focusPositions - normalized focus coordinates aligned with each focus range
 * @returns copied surfaces with updated `d` values
 */
export function buildStateSurfaces(
  surfaces: SurfaceData[],
  varByIdx: Record<number, VarRange>,
  isZoom: boolean,
  focusT: number,
  zoomT: number,
  aberrationVarByIdx: Record<number, AberrationVarRange> = {},
  aberrationT = 0,
  focusPositions?: readonly number[],
): SurfaceData[] {
  return surfaces.map((surface, index) => ({
    ...surface,
    d: resolveControlledThickness(
      surface.d,
      varByIdx[index],
      aberrationVarByIdx[index],
      isZoom,
      focusT,
      zoomT,
      aberrationT,
      focusPositions,
    ),
  }));
}

/**
 * Convert a discrete zoom table index to normalized slider position.
 *
 * @param zoomIndex - zero-based zoom table index
 * @param zoomCount - number of zoom table entries
 * @returns normalized zoom position in `[0, 1]`
 */
export function zoomIndexToT(zoomIndex: number, zoomCount: number): number {
  if (zoomCount <= 1) return 0;
  return zoomIndex / (zoomCount - 1);
}

/**
 * Sum authored surface thicknesses up to, but not including, an index.
 *
 * @param surfaces - surfaces with axial thickness `d` in mm
 * @param endExclusive - first index not included in the sum
 * @returns accumulated thickness in mm
 */
export function sumSurfaceThicknesses(surfaces: Pick<SurfaceData, "d">[], endExclusive: number): number {
  let total = 0;
  for (let i = 0; i < endExclusive; i++) total += surfaces[i].d;
  return total;
}
