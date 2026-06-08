/**
 * Research-status visual language (package Section 9.2).
 *
 * A feature's drawn stroke encodes the provenance/epistemic status of its dimensions, so every
 * figure is self-documenting. Dash arrays are expressed in millimetres (1 user unit = 1 mm), and
 * the weight multiplier scales a base stroke width chosen by the renderer. Trustworthy values are
 * solid; inferred values are dashed; unknown placeholders are dotted; patents are solid with a "P"
 * tag; conflicting sources are dash-dot and flagged for the conflicts table.
 */

import type { ValueStatus } from "../../types/mount.js";

export interface StatusStyle {
  /** SVG stroke-dasharray in mm, or undefined for a solid stroke. */
  dashArray?: string;
  /** Multiplier on the renderer's base stroke width. */
  weight: number;
  /** Short legend label. */
  label: string;
  /** A glyph tag drawn beside the feature (e.g. "P" for patent embodiments). */
  tag?: string;
  /** True when the value is a non-to-scale placeholder. */
  placeholder?: boolean;
  /** True when sources disagree and a conflicts callout is warranted. */
  conflicting?: boolean;
}

const STATUS_STYLES: Record<ValueStatus, StatusStyle> = {
  official: { weight: 1, label: "Official / to scale" },
  measured: { weight: 1, label: "Measured" },
  service_manual: { weight: 0.75, label: "Service manual" },
  secondary: { weight: 0.75, label: "Secondary source" },
  patent: { weight: 1, label: "Patent embodiment", tag: "P" },
  photo_scaled: { dashArray: "4 2", weight: 1, label: "Photo-scaled" },
  conflicting: { dashArray: "3 1.5 0.6 1.5", weight: 1, label: "Conflicting sources", conflicting: true },
  unknown: { dashArray: "0.6 1.6", weight: 1, label: "Unknown (schematic)", placeholder: true },
  not_applicable: { dashArray: "0.6 1.6", weight: 0.75, label: "Not applicable", placeholder: true },
};

/** Resolve the stroke style for a value status. */
export function strokeForStatus(status: ValueStatus): StatusStyle {
  return STATUS_STYLES[status] ?? STATUS_STYLES.unknown;
}

/** All statuses in a stable legend order (used to build the per-figure legend). */
export const STATUS_LEGEND_ORDER: readonly ValueStatus[] = [
  "official",
  "measured",
  "service_manual",
  "secondary",
  "patent",
  "photo_scaled",
  "conflicting",
  "unknown",
  "not_applicable",
];
