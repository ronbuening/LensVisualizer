/**
 * Dev-only performance probe for tracking expensive analysis computations.
 *
 * Usage: wrap a call you want to time:
 *   const result = probe("computeVignettingCurve", () => computeVignettingCurve(...));
 *
 * Every LOG_EVERY calls the full call-count / total-ms / avg-ms table is
 * printed to the console so you can see the cumulative cost without
 * flooding output on every tick.
 *
 * No-ops in production (import.meta.env.DEV === false). Safe to ship.
 * To reset counters mid-session call resetPerfProbe().
 */

interface ProbeRecord {
  totalMs: number;
  callCount: number;
}

const records = new Map<string, ProbeRecord>();

/** How many calls between console.table summaries per probe name. */
const LOG_EVERY = 10;

export function probe<T>(name: string, fn: () => T): T {
  if (!import.meta.env.DEV) return fn();
  const start = performance.now();
  const result = fn();
  const elapsed = performance.now() - start;
  const rec = records.get(name) ?? { totalMs: 0, callCount: 0 };
  rec.totalMs += elapsed;
  rec.callCount += 1;
  records.set(name, rec);
  if (rec.callCount % LOG_EVERY === 0) {
    console.table(
      Object.fromEntries(
        Array.from(records.entries()).map(([k, v]) => [
          k,
          { calls: v.callCount, totalMs: v.totalMs.toFixed(1), avgMs: (v.totalMs / v.callCount).toFixed(2) },
        ]),
      ),
    );
  }
  return result;
}

/** Clears all accumulated timing records. */
export function resetPerfProbe(): void {
  records.clear();
}
