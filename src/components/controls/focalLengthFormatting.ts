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

export function formatZoomReconstructionNote(
  report?: import("../../optics/state/zoomReconstruction.js").ZoomReconstructionReport,
): string {
  if (!report || report.status === "source") return "";
  if (report.status === "reconstructed")
    return "Intermediate zoom motion is reconstructed from the source states and paraxial focus; it is not a measured cam curve.";
  return "Intermediate zoom motion could not be reconstructed. The displayed spacing interpolation is unvalidated.";
}
