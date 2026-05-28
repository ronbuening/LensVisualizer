/**
 * Numeric utility helpers — finite checks, clamping, interpolation, and cache formatting.
 *
 * Shared by state preparation, projection, and trace code where tiny representation differences
 * can otherwise fragment memoization keys.
 */

export function isFiniteNumber(value: number): boolean {
  return Number.isFinite(value);
}

/**
 * Clamp a numeric value into a closed interval.
 *
 * @param value - input value
 * @param min - lower bound
 * @param max - upper bound
 * @returns `value` limited to `[min, max]`
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Clamp a normalized control value into the UI slider range.
 *
 * @param value - input value
 * @returns value limited to `[0, 1]`
 */
export function clamp01(value: number): number {
  return clamp(value, 0, 1);
}

/**
 * Linearly interpolate between two scalar values.
 *
 * @param a - value at `t = 0`
 * @param b - value at `t = 1`
 * @param t - interpolation parameter
 * @returns interpolated scalar
 */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Compare two numbers with an absolute tolerance.
 *
 * @param a - first scalar
 * @param b - second scalar
 * @param absTolerance - allowed absolute difference
 * @returns true when `|a - b| <= absTolerance`
 */
export function nearlyEqual(a: number, b: number, absTolerance: number): boolean {
  return Math.abs(a - b) <= absTolerance;
}

/**
 * Validate and clamp a normalized UI/analysis control parameter.
 *
 * Throws for non-finite values so cache keys never silently merge invalid inputs.
 *
 * @param value - proposed normalized control value
 * @param label - control name used in validation errors
 * @returns finite value clamped to `[0, 1]`
 */
export function normalizeControlT(value: number, label: string): number {
  if (!Number.isFinite(value)) {
    throw new Error(`${label} must be finite`);
  }
  return clamp01(value);
}

/**
 * Format a floating-point number for deterministic cache keys.
 *
 * `-0` is normalized to `0` because the optical state is identical but JavaScript
 * would otherwise stringify the values differently under high precision.
 *
 * @param value - scalar cache-key component
 * @returns stable decimal representation
 */
export function formatCacheNumber(value: number): string {
  return Object.is(value, -0) ? "0" : value.toPrecision(17);
}
