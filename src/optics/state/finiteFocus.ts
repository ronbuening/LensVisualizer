/**
 * Optional finite-only focus domain. Its coordinates name authored finite states: never an infinity endpoint and
 * never a cam, so a coordinate between states snaps to the nearest one.
 */
import type { CanonicalFocus } from "../prescription/canonical.js";

/** The focus fields the domain reads; canonical, compiled and authored V2 focus records all supply them. */
export interface FiniteFocusSource {
  readonly focus: { readonly finiteOnly?: CanonicalFocus["finiteOnly"]; readonly keyframes?: readonly number[] };
}

/**
 * Resolve a proposed focus coordinate in the finite-only domain.
 *
 * @param source - lens or draft focus record; an ordinary one returns `proposed` unchanged (0 when absent)
 * @param proposed - requested coordinate; absent, non-finite or outside [0, 1] resolves to the authored default
 * @returns the coordinate of the nearest authored finite state
 */
export function normalizeFiniteFocus(source: FiniteFocusSource, proposed?: number): number {
  const { finiteOnly, keyframes = [0, 1] } = source.focus;
  if (!finiteOnly) return proposed ?? 0;
  if (proposed === undefined || !Number.isFinite(proposed) || proposed < 0 || proposed > 1)
    return keyframes[finiteOnly.defaultKeyframe];
  return keyframes.reduce((best, t) => (Math.abs(t - proposed) < Math.abs(best - proposed) ? t : best), keyframes[0]);
}
