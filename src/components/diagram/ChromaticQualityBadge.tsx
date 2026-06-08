import type { DispersionQuality } from "../../optics/dispersion.js";
import type { Theme } from "../../types/theme.js";

export const CHROMATIC_QUALITY_BADGE_LABEL: Record<DispersionQuality, string> = {
  sellmeier: "Sellmeier",
  lineIndices: "Line indices",
  abbe: "Abbe approx",
  constant: "No dispersion",
  air: "",
};

export function chromaticQualityBadgeLabel(dispersionQuality: DispersionQuality | undefined): string {
  return dispersionQuality && dispersionQuality !== "air" ? CHROMATIC_QUALITY_BADGE_LABEL[dispersionQuality] : "";
}

interface ChromaticQualityBadgeProps {
  dispersionQuality?: DispersionQuality;
  x: number;
  y: number;
  t: Theme;
  fontSize: number;
  opacity?: number;
}

export function ChromaticQualityBadge({
  dispersionQuality,
  x,
  y,
  t,
  fontSize,
  opacity = 0.75,
}: ChromaticQualityBadgeProps) {
  const label = chromaticQualityBadgeLabel(dispersionQuality);
  if (!label) return null;

  return (
    <text x={x} y={y} textAnchor="middle" fill={t.muted} fontSize={fontSize} fontFamily="inherit" opacity={opacity}>
      {label}
    </text>
  );
}
