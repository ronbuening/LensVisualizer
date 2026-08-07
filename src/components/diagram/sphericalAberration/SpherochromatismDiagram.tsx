// Figure 7 of the spherical-aberration series: longitudinal
// spherical-aberration curves for three wavelengths whose paraxial foci nearly
// coincide but whose pupil-zone behavior separates toward the margin.

import { memo } from "react";
import { SA_FONT, saColors, saCurvePath } from "./saDiagramShared.js";

const BLUE_PATH = saCurvePath(33, (p) => [326 - 88 * p ** 4, 210 - 150 * p]);
const GREEN_PATH = saCurvePath(33, (p) => [320 - 40 * p ** 4, 210 - 150 * p]);
const RED_PATH = saCurvePath(33, (p) => [314 + 42 * p ** 4, 210 - 150 * p]);

const SpherochromatismDiagram = memo(function SpherochromatismDiagram({ isDark }: { isDark: boolean }) {
  const c = saColors(isDark);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 260"
      width="100%"
      height="auto"
      role="img"
      aria-label="Spherochromatism: wavelength-dependent longitudinal spherical-aberration curves"
    >
      <rect width="640" height="260" rx="6" fill={c.bg} />
      <rect width="640" height="260" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Reference and pupil axes */}
      <line x1="320" y1="55" x2="320" y2="210" stroke={c.axis} strokeWidth={1} strokeDasharray="4,3" />
      <line x1="100" y1="210" x2="560" y2="210" stroke={c.axis} strokeWidth={1} />

      {/* Wavelength curves */}
      <path d={BLUE_PATH} fill="none" stroke={c.blue} strokeWidth={1.8} />
      <path d={GREEN_PATH} fill="none" stroke={c.green} strokeWidth={1.8} />
      <path d={RED_PATH} fill="none" stroke={c.red} strokeWidth={1.8} />

      {/* Legend */}
      <line x1="500" y1="58" x2="524" y2="58" stroke={c.blue} strokeWidth={2} />
      <text x="532" y="62" fill={c.label} fontFamily={SA_FONT} fontSize={11}>
        486 nm
      </text>
      <line x1="500" y1="76" x2="524" y2="76" stroke={c.green} strokeWidth={2} />
      <text x="532" y="80" fill={c.label} fontFamily={SA_FONT} fontSize={11}>
        587 nm
      </text>
      <line x1="500" y1="94" x2="524" y2="94" stroke={c.red} strokeWidth={2} />
      <text x="532" y="98" fill={c.label} fontFamily={SA_FONT} fontSize={11}>
        656 nm
      </text>

      {/* Labels */}
      <text x="230" y="64" textAnchor="end" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        ρ=1
      </text>
      <text x="320" y="228" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        paraxial foci close together
      </text>
      <text x="320" y="246" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        ← undercorrected&#160;&#160;&#160;Δz&#160;&#160;&#160;overcorrected →
      </text>
    </svg>
  );
});

export default SpherochromatismDiagram;
