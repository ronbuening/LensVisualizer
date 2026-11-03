/**
 * Optics formatting helpers — small presentation strings for distance, f-number and Petzval values.
 *
 * Kept in the pure optics layer so analysis displays share unit conventions without importing React components.
 */

import { focusDistanceAt } from "../state/focusDistance.js";
import { modeledFocusDistanceAt } from "../state/fieldAdapters.js";
import type { CanonicalLens } from "../prescription/canonical.js";
import type { RuntimeLens } from "../../types/optics.js";
import { FOCUS_INFINITY_CUTOFF } from "../state/focusDistance.js";
import type { ParaxialWorkingFNumberResult, ParaxialWorkingFNumberUnavailableReason } from "./fNumber.js";

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

/** Difference from the marked f-number past which a readout names the paraxial working one. */
const PARAXIAL_WORKING_NOTE_DIFFERENCE = 0.05;

const PARAXIAL_WORKING_UNAVAILABLE_TEXT: Record<ParaxialWorkingFNumberUnavailableReason, string> = {
  "folded-path": "not defined on a folded path",
  "no-stop": "no stop",
  "degenerate-trace": "degenerate paraxial trace",
};

/**
 * Format a paraxial working f-number, or say why the state has none.
 *
 * @param result - paraxial working f-number result
 * @returns e.g. "f/3.2", or "f/# unavailable (not defined on a folded path)"
 */
export function formatParaxialWorkingFNumber(result: ParaxialWorkingFNumberResult): string {
  return result.status === "computed"
    ? `f/${formatFNumber(result.value)}`
    : `f/# unavailable (${PARAXIAL_WORKING_UNAVAILABLE_TEXT[result.reason]})`;
}

/**
 * Whether a readout should name the paraxial working f-number beside the marked one: it differs from it, or the
 * state has none, which is shown as such rather than as the marked f-number.
 *
 * @param result - paraxial working f-number result
 * @param fNumber - marked f-number
 * @returns true when the readout names it
 */
export function showsParaxialWorkingFNumber(result: ParaxialWorkingFNumberResult, fNumber: number): boolean {
  return result.status === "unavailable" || Math.abs(result.value - fNumber) > PARAXIAL_WORKING_NOTE_DIFFERENCE;
}

/** Share by which the design f-number may differ from the marketed one before the readout names both. */
const MARKETED_APERTURE_NOTE_FRACTION = 0.005;

/**
 * Marketed f-number to show beside the wide-open readout. The stop opens to the source's design f-number, which a
 * maker rounds for the name on the barrel; a variable-aperture zoom markets a range, so it gets no single note.
 *
 * @param data - lens data carrying `apertureMarketing` and `nominalFno`
 * @param fNumber - current f-number
 * @param wideOpen - wide-open f-number at the current zoom
 * @returns secondary label, empty when stopped down or when the two agree
 */
export function marketedApertureNote(
  data: Pick<CanonicalLens, "catalog" | "aperture" | "zoom">,
  fNumber: number,
  wideOpen: number,
): string {
  const marketed = data.catalog.fNumber?.marketing;
  if (marketed === undefined || (data.aperture.nominalFNumber === undefined && data.zoom !== undefined)) return "";
  if (Math.abs(fNumber - wideOpen) > 1e-6 * wideOpen) return "";
  if (Math.abs(wideOpen / marketed - 1) <= MARKETED_APERTURE_NOTE_FRACTION) return "";
  return `marketed f/${formatFNumber(marketed)}`;
}

/**
 * The object distance a focus label reports: where the prepared state is paraxially in focus, or the slider
 * convention (closeFocus / focusT) on a folded path or where the focus control moves no gap.
 *
 * @param t - normalized focus slider, 0=infinity and 1=close focus
 * @param L - runtime lens object
 * @param zoomT - normalized zoom slider
 * @returns object-to-image distance in metres; `Infinity` at or beyond infinity; `null` when none is defined
 */
export function focusLabelDistanceM(t: number, L: RuntimeLens, zoomT = 0): number | null {
  if (t < FOCUS_INFINITY_CUTOFF) return Infinity;
  return modeledFocusDistanceAt(t, L, zoomT) ?? focusDistanceAt(t, L, zoomT);
}

/**
 * Format an object distance as a focus label.
 *
 * @param distanceM - object-to-image distance in metres; `Infinity` for infinity
 * @returns compact distance string in kilometres, metres or centimetres, or infinity
 */
export function formatDistanceM(distanceM: number): string {
  if (distanceM === Infinity) return "\u221e";
  if (distanceM >= 1000) return `${(distanceM / 1000).toFixed(distanceM >= 10_000 ? 0 : 1)} km`;
  if (distanceM >= 100) return `${Math.round(distanceM)} m`;
  if (distanceM >= 10) return `${distanceM.toFixed(1)} m`;
  if (distanceM >= 1) return `${distanceM.toFixed(2)} m`;
  return `${(distanceM * 100).toFixed(0)} cm`;
}

/** Share by which the maker's minimum focus distance may differ from the close-focus label before the readout names it. */
const MARKETED_CLOSE_FOCUS_NOTE_FRACTION = 0.02;

/**
 * Marketed minimum focus distance to show beside the focus readout at the close end. The label reports where the
 * model focuses, usually a source state; the maker's production figure can be nearer, so the readout names both.
 * A `[wide, tele]` figure is compared with its own end at the zoom extremes; between them the readout names the
 * range only when the label falls outside it.
 *
 * @param data - lens data carrying `catalog.closeFocusM.marketing`
 * @param focusT - current focus slider position
 * @param labelDistanceM - the close-focus label distance in metres, from `focusLabelDistanceM`
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @returns secondary label, empty away from the close end or when the two agree
 */
export function marketedCloseFocusNote(
  data: Pick<CanonicalLens, "catalog">,
  focusT: number,
  labelDistanceM: number | null,
  zoomT = 0,
): string {
  const marketed = data.catalog.closeFocusM?.marketing;
  if (marketed === undefined || focusT < 1 - 1e-9 || labelDistanceM === null || !Number.isFinite(labelDistanceM))
    return "";
  const agrees = (value: number) => Math.abs(value / labelDistanceM - 1) <= MARKETED_CLOSE_FOCUS_NOTE_FRACTION;
  const note = (value: number) => (agrees(value) ? "" : `marketed ${formatDistanceM(value)}`);
  if (!Array.isArray(marketed)) return note(marketed);
  const [wide, tele] = marketed;
  if (zoomT <= 1e-9) return note(wide);
  if (zoomT >= 1 - 1e-9) return note(tele);
  const low = Math.min(wide, tele) * (1 - MARKETED_CLOSE_FOCUS_NOTE_FRACTION);
  const high = Math.max(wide, tele) * (1 + MARKETED_CLOSE_FOCUS_NOTE_FRACTION);
  if (labelDistanceM >= low && labelDistanceM <= high) return "";
  return `marketed ${formatDistanceM(wide)}–${formatDistanceM(tele)}`;
}

/**
 * Format a normalized focus slider as user-facing object distance.
 *
 * @param t - normalized focus slider, 0=infinity and 1=close focus
 * @param L - runtime lens object
 * @param zoomT - normalized zoom slider
 * @returns compact distance string, infinity, or a dash when no distance is defined
 */
export function formatDist(t: number, L: RuntimeLens, zoomT = 0): string {
  const d = focusLabelDistanceM(t, L, zoomT);
  return d === null ? "\u2014" : formatDistanceM(d);
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
