/**
 * MTF data warnings the reader has dismissed on this page.
 *
 * Dismissals are kept per lens system and per kind of gap, in memory only. A reload shows every warning again, and
 * a kind of gap the reader has not yet seen on a lens brings that lens's warning back.
 */
import type { MtfDataLimitationKind } from "../../types/mtf.js";

const NONE: ReadonlySet<MtfDataLimitationKind> = new Set();
const dismissed = new Map<string, ReadonlySet<MtfDataLimitationKind>>();
const listeners = new Set<() => void>();

/** Snapshot for a render with no dismissals, as on the server. */
export function noMtfDataWarningsDismissed(): ReadonlySet<MtfDataLimitationKind> {
  return NONE;
}

/**
 * Kinds of gap dismissed for one lens system; referentially stable until they change.
 *
 * @param systemKey - lens key, or the composed key of a lens with a converter
 * @returns dismissed kinds
 */
export function getDismissedMtfDataWarnings(systemKey: string): ReadonlySet<MtfDataLimitationKind> {
  return dismissed.get(systemKey) ?? NONE;
}

/**
 * Record that the reader has seen these kinds of gap on one lens system, and notify subscribers.
 *
 * @param systemKey - lens key, or the composed key of a lens with a converter
 * @param kinds - kinds listed in the warning being dismissed
 */
export function dismissMtfDataWarnings(systemKey: string, kinds: readonly MtfDataLimitationKind[]): void {
  dismissed.set(systemKey, new Set([...getDismissedMtfDataWarnings(systemKey), ...kinds]));
  listeners.forEach((listener) => listener());
}

/**
 * Subscribe to dismissals.
 *
 * @param listener - called after a warning is dismissed
 * @returns unsubscribe callback
 */
export function subscribeMtfDataWarnings(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Forget every dismissal (tests). */
export function resetMtfDataWarnings(): void {
  dismissed.clear();
  listeners.forEach((listener) => listener());
}
