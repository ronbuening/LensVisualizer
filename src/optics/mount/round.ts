/**
 * Deterministic numeric formatting for mount SVG emission.
 *
 * Every coordinate that reaches an SVG attribute funnels through `fmt()` so that identical input
 * produces byte-identical output (package Section 9.1). Values are rounded to 3 decimal places
 * (`render.numericPrecision`), negative zero is normalized to "0", and trailing zeros are dropped
 * for clean, stable diffs. The magnitudes used here (mount dimensions, 0–400 mm) never reach the
 * exponential-notation thresholds of `Number.prototype.toString`, so output is always plain decimal.
 */

/** Round to 3 decimal places (the fixed mount render precision). */
export function round3(n: number): number {
  return Math.round(n * 1000) / 1000;
}

/**
 * Format a number as a canonical, deterministic decimal string.
 *
 * @param n — value in millimetres (user units)
 * @returns 3-decimal-rounded string with trailing zeros stripped; "0" for ±0.
 */
export function fmt(n: number): string {
  const r = round3(n);
  if (Object.is(r, -0) || r === 0) return "0";
  return r.toString();
}

/** Format an `x,y` point pair as `"<x>,<y>"`. */
export function fmtPoint(x: number, y: number): string {
  return `${fmt(x)},${fmt(y)}`;
}
