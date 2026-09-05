import type { ApertureMetrics } from "../../types/optics.js";

/** Preserve hundredths for design apertures such as f/1.85 in every aperture readout. */
export function formatAperture(value: number | null): string {
  if (value === null || !Number.isFinite(value)) return "unavailable";
  const text = value.toFixed(2).replace(/(\.\d)0$/, "$1");
  return `f/${value < 10 ? text : text.replace(/\.0$/, "")}`;
}

/** Keep numeric availability and model-rim clipping distinct in every readout. */
export function formatWorkingApertureNote(
  metrics: Pick<ApertureMetrics, "status" | "clippedSurfaceIndices"> | null,
  moved = false,
): string {
  if (moved) return "Working aperture unavailable for active movement.";
  if (!metrics) return "Working aperture unavailable.";
  if (metrics.status === "failed") return "Working aperture unavailable: marginal ray could not be traced.";
  if (metrics.status === "unsupported") return "Working aperture unavailable for this optical configuration.";
  if (metrics.status === "degenerate") return "Working aperture unavailable: source or outgoing cone is undefined.";
  const indices = metrics.clippedSurfaceIndices ?? [];
  return indices.length
    ? `Marginal ray clipped by modeled surface${indices.length === 1 ? "" : "s"} ${indices.map((i) => i + 1).join(", ")}.`
    : "";
}
