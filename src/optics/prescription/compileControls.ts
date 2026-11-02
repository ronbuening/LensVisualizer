/**
 * Prescription control compiler — resolves labels and freezes authored gap ranges.
 *
 * State-specific interpolation lives in state/stationTables.ts and state/layout.ts.
 */

import type { AberrationPositionRange, AberrationVarRange, VarRange } from "../../types/optics.js";
import { resolveLabel } from "./compileLabels.js";

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

function freezeRange<T extends VarRange | AberrationVarRange>(range: T): T {
  if (Array.isArray(range[0])) {
    return Object.freeze(
      (range as AberrationPositionRange[]).map((positions) => Object.freeze([...positions])),
    ) as unknown as T;
  }
  return Object.freeze([...range]) as unknown as T;
}

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

export function firstInfinityThickness(range: unknown, isZoom: boolean): number | null {
  if (!Array.isArray(range)) return null;
  if (!isZoom) {
    return typeof range[0] === "number" ? range[0] : null;
  }
  const firstZoomEntry = range[0];
  if (!Array.isArray(firstZoomEntry)) return null;
  return typeof firstZoomEntry[0] === "number" ? firstZoomEntry[0] : null;
}
