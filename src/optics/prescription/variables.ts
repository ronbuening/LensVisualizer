/**
 * Prescription variable compiler — resolves focus, zoom, and aberration-controlled gaps.
 *
 * Converts authored variable thickness ranges into normalized metadata and state-specific distances
 * for RuntimeLens and prepared engine states.
 */

import type { AberrationPositionRange, AberrationVarRange, VarRange } from "../../types/optics.js";
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
export function compileVariableGaps<T extends VarRange | AberrationVarRange>(
  variableGaps: Record<string, T> | undefined,
  labelToSurfaceIndex: Readonly<Record<string, number>>,
  context = "var",
): Readonly<Record<number, T>> {
  const out: Record<number, T> = {};
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
 * Resolve an aberration-controlled gap at the current control and zoom positions.
 *
 * Legacy two-position controls use normalized `0..1` travel. Three-position controls
 * use signed `-1..1` travel so their center position remains the universal default `0`.
 *
 * @param baseThickness - authored default thickness in mm
 * @param range - optional two- or three-position aberration range
 * @param isZoom - whether the lens uses zoom-indexed ranges
 * @param controlT - normalized or signed aberration control
 * @param zoomT - normalized zoom control
 * @returns current aberration-controlled thickness in mm
 */
export function resolveAberrationThickness(
  baseThickness: number,
  range: AberrationVarRange | undefined,
  isZoom: boolean,
  controlT: number,
  zoomT: number,
): number {
  if (!range) return baseThickness;
  const positions = isZoom
    ? interpolateAberrationPositionsAtZoom(range as AberrationPositionRange[], zoomT)
    : (range as AberrationPositionRange);
  if (positions.length === 2) return lerp(positions[0], positions[1], controlT);
  return controlT <= 0 ? lerp(positions[1], positions[0], -controlT) : lerp(positions[1], positions[2], controlT);
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
  aberrationRange: AberrationVarRange | undefined,
  isZoom: boolean,
  focusT: number,
  zoomT: number,
  aberrationT: number,
): number {
  const focusThickness = resolveVariableThickness(baseThickness, focusRange, isZoom, focusT, zoomT);
  if (!aberrationRange) return focusThickness;
  const aberrationThickness = resolveAberrationThickness(baseThickness, aberrationRange, isZoom, aberrationT, zoomT);
  return focusThickness + (aberrationThickness - baseThickness);
}

function interpolateAberrationPositionsAtZoom(
  zoomRanges: AberrationPositionRange[],
  zoomT: number,
): AberrationPositionRange {
  if (zoomRanges.length === 0) return [0, 0];
  if (zoomRanges.length === 1) return zoomRanges[0];
  const position = zoomT * (zoomRanges.length - 1);
  const index = Math.min(Math.floor(position), zoomRanges.length - 2);
  const fraction = position - index;
  const from = zoomRanges[index];
  const to = zoomRanges[index + 1];
  if (from.length === 3 && to.length === 3) {
    return [lerp(from[0], to[0], fraction), lerp(from[1], to[1], fraction), lerp(from[2], to[2], fraction)];
  }
  return [lerp(from[0], to[0], fraction), lerp(from[1], to[1], fraction)];
}

function freezeRange<T extends VarRange | AberrationVarRange>(range: T): T {
  if (Array.isArray(range[0])) {
    return Object.freeze(
      (range as AberrationPositionRange[]).map((positions) => Object.freeze([...positions])),
    ) as unknown as T;
  }
  return Object.freeze([...range]) as unknown as T;
}
