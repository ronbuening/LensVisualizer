/**
 * Authoring helpers for `*.mount.ts` data files.
 *
 * The package wraps every numeric dimension in a `{ value, status, sourceRefs }` envelope. Writing
 * those literals by hand for a fully-researched mount is verbose and error-prone, so these tiny
 * constructors keep the data files readable while producing exactly the typed envelopes the schema
 * mirror expects. They add no shape of their own — `v(46.5, "secondary", ["nf-1"])` is just the
 * envelope it returns — so the emitted JSON is unchanged and `satisfies MountSpecInput` still checks
 * every field.
 */

import type { AngleListValue, DirectionValue, ValueEnvelope, ValueStatus } from "../../types/mount.js";

/** Numeric value envelope (angle, length, coordinate, or count — all share this shape). */
export function v(
  value: number | "unknown" | "not_applicable",
  status: ValueStatus,
  sourceRefs: string[] = [],
): ValueEnvelope<number> {
  return { value, status, sourceRefs };
}

/** Unknown numeric envelope (drawn as a labeled placeholder). */
export function unknownV(sourceRefs: string[] = []): ValueEnvelope<number> {
  return { value: "unknown", status: "unknown", sourceRefs };
}

/** Not-applicable numeric envelope. */
export function naV(): ValueEnvelope<number> {
  return { value: "not_applicable", status: "not_applicable", sourceRefs: [] };
}

/** Rotation-direction envelope. */
export function dirV(value: DirectionValue["value"], status: ValueStatus, sourceRefs: string[] = []): DirectionValue {
  return { value, status, sourceRefs };
}

/** Angle-list envelope (e.g. screw clock positions). */
export function degListV(
  value: number[] | "unknown" | "not_applicable",
  status: ValueStatus,
  sourceRefs: string[] = [],
): AngleListValue {
  return { value, status, sourceRefs };
}
