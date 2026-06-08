/**
 * Numeric value-envelope readers and status combination.
 *
 * Mount dimensions travel as `{ value, status, sourceRefs }` envelopes. These helpers read the
 * numeric value with a fallback, test whether it is known, and combine several envelope statuses
 * into the single status that drives a feature's stroke. The combination is "most cautious wins":
 * if any dimension needed to draw a feature to scale is unknown, the whole feature renders as a
 * dotted placeholder, never silently to scale.
 */

import type { AngleListValue, ValueEnvelope, ValueStatus } from "../../types/mount.js";

/** True when the envelope carries a usable number. */
export function isKnown(env: ValueEnvelope<number> | undefined): boolean {
  return env !== undefined && typeof env.value === "number" && isFinite(env.value);
}

/** Numeric value, or `fallback` when unknown/not-applicable. */
export function numberOr(env: ValueEnvelope<number> | undefined, fallback: number): number {
  return env !== undefined && typeof env.value === "number" && isFinite(env.value) ? env.value : fallback;
}

/** True when an angle-list envelope carries a usable array. */
export function isKnownList(env: AngleListValue | undefined): boolean {
  return env !== undefined && Array.isArray(env.value);
}

/** Display priority — higher wins so the most cautious reading governs the stroke. */
const STATUS_PRIORITY: Record<ValueStatus, number> = {
  unknown: 8,
  conflicting: 7,
  photo_scaled: 5,
  patent: 4,
  secondary: 3,
  service_manual: 2,
  measured: 1,
  official: 0,
  not_applicable: -1,
};

/**
 * Combine envelope statuses into the representative status for a feature's stroke.
 * Ignores `not_applicable` unless every input is `not_applicable`.
 */
export function combineStatus(statuses: ValueStatus[]): ValueStatus {
  const meaningful = statuses.filter((s) => s !== "not_applicable");
  const pool = meaningful.length > 0 ? meaningful : statuses;
  if (pool.length === 0) return "unknown";
  return pool.reduce((worst, s) => (STATUS_PRIORITY[s] > STATUS_PRIORITY[worst] ? s : worst), pool[0]);
}
