/** Calculated focal-length labels; unavailable optics never become catalog substitutes. */
export function formatFocalLength(value: number, digits = 1): string {
  return Number.isFinite(value) ? `${value.toFixed(digits)} mm` : "unavailable";
}

export function formatZoomFocalLength(infinityMm: number, focusedMm: number, showFocused: boolean): string {
  const base = formatFocalLength(infinityMm, 0);
  if (!showFocused) return base;
  if (!Number.isFinite(focusedMm)) return `${base} (eff. unavailable)`;
  return !Number.isFinite(infinityMm) || Math.abs(focusedMm - infinityMm) > 0.1
    ? `${base} (eff. ${formatFocalLength(focusedMm)})`
    : base;
}
