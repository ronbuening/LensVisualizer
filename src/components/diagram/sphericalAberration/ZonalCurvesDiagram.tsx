// Figure 3 of the spherical-aberration series: four normalized LSA curve
// shapes — primary-dominated, reinforced, balanced, and multiple-zone — with
// similar marginal endpoints but different zonal structure.

import { memo } from "react";
import { SA_FONT, saColors, saCurvePath } from "./saDiagramShared.js";

const PANELS: ReadonlyArray<{ zx: number; title: string; fn: (p: number) => number }> = [
  { zx: 113, title: "primary", fn: (p) => -38 * p ** 2 },
  { zx: 263, title: "reinforced", fn: (p) => -52 * (0.45 * p ** 2 + 0.55 * p ** 6) },
  { zx: 413, title: "balanced", fn: (p) => -95 * (p ** 2 - p ** 6) },
  { zx: 563, title: "multiple-zone", fn: (p) => -160 * (p ** 2 - 3.4 * p ** 4 + 2.6 * p ** 6) },
];

const ZonalCurvesDiagram = memo(function ZonalCurvesDiagram({ isDark }: { isDark: boolean }) {
  const c = saColors(isDark);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 250"
      width="100%"
      height="auto"
      role="img"
      aria-label="Four longitudinal spherical-aberration curve shapes"
    >
      <rect width="640" height="250" rx="6" fill={c.bg} />
      <rect width="640" height="250" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      <text x="320" y="30" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        focus error Δz (horizontal) vs pupil zone ρ (vertical, 0 → 1)
      </text>

      {PANELS.map(({ zx, title, fn }) => (
        <g key={title}>
          <line x1={zx} y1="60" x2={zx} y2="205" stroke={c.axis} strokeWidth={1} strokeDasharray="4,3" />
          <line x1={zx - 58} y1="200" x2={zx + 22} y2="200" stroke={c.axis} strokeWidth={1} />
          <path
            d={saCurvePath(33, (p) => [zx + fn(p), 200 - 135 * p])}
            fill="none"
            stroke={c.accent}
            strokeWidth={1.8}
          />
          <circle cx={zx + fn(1)} cy="65" r="2.5" fill={c.warm} />
          <text x={zx - 18} y="228" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={11}>
            {title}
          </text>
        </g>
      ))}
    </svg>
  );
});

export default ZonalCurvesDiagram;
