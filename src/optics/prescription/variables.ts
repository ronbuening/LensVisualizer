/**
 * Prescription variable compiler — resolves focus, zoom, and aberration-controlled gaps.
 *
 * Converts authored variable thickness ranges into normalized metadata and state-specific distances
 * for RuntimeLens and prepared engine states.
 */

import type { VarRange } from "../../types/optics.js";
import { lerp } from "../math/numerics.js";
import { resolveLabel } from "./labels.js";

/**
 * Compile authored variable gaps from label keys to surface-index keys.
 *
 * @param variableGaps - optional label-keyed focus/zoom/aberration ranges
 * @param labelToSurfaceIndex - normalized label lookup for the lens
 * @param context - field name used in label-resolution errors
 * @returns frozen surface-index keyed variable ranges
 */
export function compileVariableGaps(
  variableGaps: Record<string, VarRange> | undefined,
  labelToSurfaceIndex: Readonly<Record<string, number>>,
  context = "var",
): Readonly<Record<number, VarRange>> {
  const out: Record<number, VarRange> = {};
  for (const [label, range] of Object.entries(variableGaps ?? {})) {
    out[resolveLabel(label, labelToSurfaceIndex, context)] = freezeRange(range);
  }
  return Object.freeze(out);
}

/**
 * Compile authored variable-gap labels from surface labels to indices.
 *
 * @param labels - optional label/text pairs for movement UI
 * @param labelToSurfaceIndex - normalized label lookup for the lens
 * @param context - field name used in label-resolution errors
 * @returns frozen surface-index/text pairs
 */
export function compileVariableLabels(
  labels: readonly (readonly [string, string])[] | undefined,
  labelToSurfaceIndex: Readonly<Record<string, number>>,
  context = "varLabels",
): readonly (readonly [number, string])[] {
  return Object.freeze(
    (labels ?? []).map(([label, text]) =>
      Object.freeze([resolveLabel(label, labelToSurfaceIndex, context), text] as const),
    ),
  );
}

/**
 * Resolve a variable gap at a normalized focus/aberration and zoom control.
 *
 * @param baseThickness - authored default thickness in mm
 * @param range - optional variable range
 * @param isZoom - whether the lens uses zoom-indexed ranges
 * @param controlT - normalized focus or aberration control
 * @param zoomT - normalized zoom control
 * @returns current axial thickness in mm
 */
export function resolveVariableThickness(
  baseThickness: number,
  range: VarRange | undefined,
  isZoom: boolean,
  controlT: number,
  zoomT: number,
): number {
  if (!range) return baseThickness;
  if (!isZoom) {
    const [dInfinity, dClose] = range as [number, number];
    return lerp(dInfinity, dClose, controlT);
  }

  const zoomRanges = range as [number, number][];
  if (zoomRanges.length === 0) return baseThickness;
  if (zoomRanges.length === 1) {
    const [dInfinity, dClose] = zoomRanges[0];
    return lerp(dInfinity, dClose, controlT);
  }

  const position = zoomT * (zoomRanges.length - 1);
  const index = Math.min(Math.floor(position), zoomRanges.length - 2);
  const fraction = position - index;
  const dInfinity = lerp(zoomRanges[index][0], zoomRanges[index + 1][0], fraction);
  const dClose = lerp(zoomRanges[index][1], zoomRanges[index + 1][1], fraction);
  return lerp(dInfinity, dClose, controlT);
}

/**
 * Combine focus and aberration variable ranges for one surface gap.
 *
 * Aberration control is applied as a delta from the base thickness after focus
 * movement, matching the RuntimeLens compatibility behavior.
 *
 * @param baseThickness - authored default thickness in mm
 * @param focusRange - optional focus/zoom range
 * @param aberrationRange - optional aberration-control range
 * @param isZoom - whether the lens uses zoom-indexed ranges
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param aberrationT - normalized aberration spacing slider
 * @returns current axial thickness in mm
 */
export function resolveControlledThickness(
  baseThickness: number,
  focusRange: VarRange | undefined,
  aberrationRange: VarRange | undefined,
  isZoom: boolean,
  focusT: number,
  zoomT: number,
  aberrationT: number,
): number {
  const focusThickness = resolveVariableThickness(baseThickness, focusRange, isZoom, focusT, zoomT);
  if (!aberrationRange) return focusThickness;
  const aberrationThickness = resolveVariableThickness(baseThickness, aberrationRange, isZoom, aberrationT, zoomT);
  return focusThickness + (aberrationThickness - baseThickness);
}

function freezeRange(range: VarRange): VarRange {
  if (Array.isArray(range[0])) {
    return Object.freeze(
      (range as [number, number][]).map((pair) => Object.freeze([...pair] as [number, number])),
    ) as unknown as VarRange;
  }
  return Object.freeze([range[0], range[1]] as [number, number]) as unknown as VarRange;
}
