export function isFiniteNumber(value: number): boolean {
  return Number.isFinite(value);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function clamp01(value: number): number {
  return clamp(value, 0, 1);
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function nearlyEqual(a: number, b: number, absTolerance: number): boolean {
  return Math.abs(a - b) <= absTolerance;
}

export function normalizeControlT(value: number, label: string): number {
  if (!Number.isFinite(value)) {
    throw new Error(`${label} must be finite`);
  }
  return clamp01(value);
}

export function formatCacheNumber(value: number): string {
  return Object.is(value, -0) ? "0" : value.toPrecision(17);
}
