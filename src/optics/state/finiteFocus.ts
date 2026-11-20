/** Optional finite-only focus domain. Coordinates name explicit states, never an infinity endpoint or a cam. */
import { findCompiledLens } from "../prescription/identity.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { CanonicalFocus } from "../prescription/canonical.js";

export type FiniteFocusSource = {
  focus: {
    finiteOnly?: CanonicalFocus["finiteOnly"];
    keyframes?: readonly number[];
    conjugates?: CanonicalFocus["conjugates"];
  };
};
/** Resolve an absent/invalid control to the authored finite default; valid coordinates snap to explicit states. */
export function normalizeFiniteFocus(source: FiniteFocusSource, proposed?: number): number {
  const focus = source.focus;
  if (!focus?.finiteOnly) return proposed ?? 0;
  const keyframes = focus.keyframes ?? [0, 1];
  const fallback = keyframes[focus.finiteOnly.defaultKeyframe];
  if (proposed === undefined || !Number.isFinite(proposed) || proposed < 0 || proposed > 1) return fallback;
  return keyframes.reduce((best, t) => (Math.abs(t - proposed) < Math.abs(best - proposed) ? t : best), keyframes[0]);
}
export function finiteFocusConjugate(source: FiniteFocusSource, proposed: number) {
  if (!source.focus?.finiteOnly) return undefined;
  const t = normalizeFiniteFocus(source, proposed);
  const index = (source.focus.keyframes ?? [0, 1]).indexOf(t);
  return source.focus.conjugates?.find((c) => c.zoomStation === 0 && c.keyframe === index);
}

/** Read the opt-in without touching a caller's lens properties; legacy infinity labels accept sparse controls. */
export function isFiniteOnlyRuntime(lens: RuntimeLens): boolean {
  return Boolean(findCompiledLens(lens)?.variables.finiteOnly);
}
