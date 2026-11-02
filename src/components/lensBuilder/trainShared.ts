/** Shared helpers for the optical-train editor: context passed to cards and rows, formatting and button styles. */

import type { CSSProperties } from "react";
import {
  describeShape,
  elementFocalLength,
  type BuilderGroup,
  type BuilderModel,
} from "../../lensBuilder/elementModel.js";
import type { Theme } from "../../types/theme.js";
import { toggleBtn } from "../../utils/style/styles.js";

export type SurfaceField = "R" | "sd" | "d" | "asphere";

export interface TrainCtx {
  t: Theme;
  touch: boolean;
  /** Apply a model operation to the draft; refusals surface in the editor's alert. */
  edit: (op: (model: BuilderModel) => BuilderModel) => void;
  /** Validation issues that name any of these surfaces (by label) or elements (by id). */
  issuesFor: (labels: string[], elementIds: number[]) => string[];
  surfaceInvalid: (label: string, field: SurfaceField) => boolean;
  elementInvalid: (id: number) => boolean;
  /** Hovering or focusing an element's controls highlights it in the diagram. */
  highlight: (elementId: number | null) => void;
}

/** Up to four decimals for display; editing reveals the exact authored value. */
export function formatMm(value: string | number): string {
  return typeof value === "number" && Number.isFinite(value) ? String(Number(value.toFixed(4))) : String(value);
}

/** Aspheric coefficients in compact exponent form for display; editing reveals the exact authored value. */
export function formatCoefficient(value: string | number): string {
  if (typeof value !== "number" || !Number.isFinite(value) || value === 0) return String(value);
  return Math.abs(value) < 1e-3 || Math.abs(value) >= 1e6 ? value.toExponential(3) : String(value);
}

export function formatFocal(f: number | null): string {
  if (f === null || !Number.isFinite(f)) return "afocal";
  const rounded = Math.abs(f) >= 1000 ? f.toFixed(0) : f.toFixed(1);
  return `f = ${f > 0 ? "+" : "−"}${rounded.replace("-", "")} mm`;
}

/** "Biconvex Positive" → "Biconvex positive". */
export function sentenceCase(text: string): string {
  return text ? text.charAt(0) + text.slice(1).toLowerCase() : text;
}

/** The V2 shape descriptor the model computes for one element, or "" when it cannot be computed. */
export function shapeOf(group: BuilderGroup, elementIndex: number): string {
  try {
    return describeShape(
      group.surfaces[elementIndex].R,
      group.surfaces[elementIndex + 1].R,
      elementFocalLength(group, elementIndex),
    );
  } catch {
    return "";
  }
}

/**
 * A site toggle button drawn standalone with its own outline. `toggleBtn` separates grouped buttons with
 * `borderRight`; mixing that longhand with a `border` shorthand makes React warn when either changes.
 */
export function outlinedButton(
  t: Theme,
  active: boolean,
  opts: { padding?: string; borderColor?: string } = {},
): CSSProperties {
  const {
    borderRight: _separator,
    border: _none,
    ...base
  } = toggleBtn(t, active, {
    hasRightBorder: false,
    padding: opts.padding,
    flex: 0,
  });
  return {
    ...base,
    /* Standalone actions use the stronger idle text other free-standing buttons use, not a grouped toggle's. */
    color: active ? t.toggleActiveText : t.toggleText,
    border: `1px solid ${opts.borderColor ?? (active ? t.toggleActiveBorder : t.toggleBorder)}`,
  };
}

/** Square icon button (move, delete, flat toggle). */
export function iconButton(
  t: Theme,
  touch: boolean,
  opts: { active?: boolean; disabled?: boolean } = {},
): CSSProperties {
  const size = touch ? 32 : 22;
  return {
    ...outlinedButton(t, !!opts.active, { padding: "0" }),
    flex: `0 0 ${size}px`,
    width: size,
    height: size,
    minHeight: size,
    borderRadius: 4,
    fontSize: touch ? 13 : 11,
    letterSpacing: 0,
    opacity: opts.disabled ? 0.35 : 1,
    cursor: opts.disabled ? "default" : "pointer",
  };
}

/** Small outlined text button (Cement, + Element, Split). */
export function textButton(t: Theme, touch: boolean, active = false, borderColor?: string): CSSProperties {
  return {
    ...outlinedButton(t, active, { padding: touch ? "6px 10px" : "2px 7px", borderColor }),
    borderRadius: 4,
    minHeight: touch ? 32 : 22,
    fontSize: touch ? 11 : 10,
    letterSpacing: "0.04em",
  };
}

/** Muted inline note under a field or row. */
export function noteStyle(t: Theme): CSSProperties {
  return { margin: 0, color: t.muted, fontSize: 10.5, lineHeight: 1.4 };
}
