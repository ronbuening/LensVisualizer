/**
 * Optics formatting helpers — small presentation strings for distance, f-number and Petzval values.
 *
 * Kept in the pure optics layer so analysis displays share unit conventions without importing React components.
 */

import { closeFocusAtZoom } from "./focusDistance.js";
import type { RuntimeLens } from "../types/optics.js";
import { FOCUS_INFINITY_THRESHOLD } from "./layout.js";

/**
 * Format an f-number as the aperture control shows it: hundredth-stop patent apertures keep their
 * precision while whole stops stay compact.
 *
 * @param f - f-number
 * @returns number text without the "f/" prefix, e.g. "1.45", "2.8", "16"
 */
export function formatFNumber(f: number): string {
  const rounded = Math.round(f * 100) / 100;
  if (Number.isInteger(rounded)) return rounded < 10 ? rounded.toFixed(1) : String(rounded);
  return rounded.toFixed(2).replace(/0$/, "");
}

/**
 * Format a normalized focus slider as user-facing object distance.
 *
 * @param t - normalized focus slider, 0=infinity and 1=close focus
 * @param L - runtime lens object with close-focus distance
 * @returns compact distance string in meters, centimeters, or infinity
 */
export function formatDist(t: number, L: RuntimeLens, zoomT = 0): string {
  if (t < FOCUS_INFINITY_THRESHOLD) return "\u221e";
  const d = closeFocusAtZoom(zoomT, L) / t;
  if (d >= 100) return `${Math.round(d)} m`;
  if (d >= 10) return `${d.toFixed(1)} m`;
  if (d >= 1) return `${d.toFixed(2)} m`;
  return `${(d * 100).toFixed(0)} cm`;
}

/**
 * Format Petzval curvature as a signed radius.
 *
 * @param P - Petzval curvature in reciprocal millimeters
 * @param subscript - whether to use the R_petz label
 * @returns display string in millimeters, or infinity for near-zero curvature
 */
export function formatPetzvalRadius(P: number, subscript = true): string {
  const label = subscript ? "R\u209a\u209c\u2093" : "R";
  if (Math.abs(P) < 1e-6) return `${label} = \u221e`;
  const R = 1 / P;
  const absR = Math.abs(R);
  const formatted = absR < 10 ? absR.toFixed(1) : Math.round(absR).toString();
  return `${label} = ${R < 0 ? "\u2212" : ""}${formatted} mm`;
}
