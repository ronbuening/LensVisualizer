// Figure 2 of the spherical-aberration series: the same pupil-zone error shown
// as a longitudinal (LSA) plot, a transverse ray fan (TSA), and a wavefront
// departure W(rho). The three panels share one underlying primary residual.

import { memo } from "react";
import { SA_FONT, saColors, saCurvePath } from "./saDiagramShared.js";

const LSA_PATH = saCurvePath(25, (p) => [135 - 55 * p * p, 205 - 145 * p]);
const TSA_PATH = saCurvePath(33, (t) => {
  const p = -1 + 2 * t;
  return [320 + 72 * p, 130 - 52 * p * p * p];
});
const WF_PATH = saCurvePath(25, (p) => [445 + 155 * p, 205 - 135 * p ** 4]);

const ThreeDescriptionsDiagram = memo(function ThreeDescriptionsDiagram({ isDark }: { isDark: boolean }) {
  const c = saColors(isDark);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 250"
      width="100%"
      height="auto"
      role="img"
      aria-label="Longitudinal, transverse, and wavefront descriptions of spherical aberration"
    >
      <rect width="640" height="250" rx="6" fill={c.bg} />
      <rect width="640" height="250" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Panel separators */}
      <line x1="222" y1="24" x2="222" y2="236" stroke={c.grid} strokeWidth={1} strokeDasharray="4,4" />
      <line x1="422" y1="24" x2="422" y2="236" stroke={c.grid} strokeWidth={1} strokeDasharray="4,4" />

      {/* Panel titles */}
      <text x="125" y="30" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={11}>
        longitudinal (LSA)
      </text>
      <text x="320" y="30" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={11}>
        transverse (TSA)
      </text>
      <text x="525" y="30" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={11}>
        wavefront W(ρ)
      </text>

      {/* Panel A: LSA — pupil zone vertical, focus displacement horizontal */}
      <line x1="135" y1="55" x2="135" y2="205" stroke={c.axis} strokeWidth={1} strokeDasharray="4,3" />
      <line x1="45" y1="205" x2="205" y2="205" stroke={c.axis} strokeWidth={1} />
      <path d={LSA_PATH} fill="none" stroke={c.accent} strokeWidth={1.8} />
      <circle cx="80" cy="60" r="3" fill={c.warm} />
      <text x="72" y="63" textAnchor="end" fill={c.muted} fontFamily={SA_FONT} fontSize={10}>
        ρ=1
      </text>
      <text x="125" y="232" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={10}>
        focus position Δz
      </text>

      {/* Panel B: TSA — pupil coordinate horizontal, ray error vertical */}
      <line x1="240" y1="130" x2="400" y2="130" stroke={c.axis} strokeWidth={1} />
      <line x1="320" y1="60" x2="320" y2="200" stroke={c.axis} strokeWidth={1} strokeDasharray="4,3" />
      <path d={TSA_PATH} fill="none" stroke={c.accent} strokeWidth={1.8} />
      <text x="330" y="68" fill={c.muted} fontFamily={SA_FONT} fontSize={10}>
        ε
      </text>
      <text x="320" y="232" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={10}>
        pupil coordinate ρ
      </text>

      {/* Panel C: wavefront — pupil radius horizontal, wavefront error vertical */}
      <line x1="445" y1="55" x2="445" y2="205" stroke={c.axis} strokeWidth={1} />
      <line x1="445" y1="205" x2="605" y2="205" stroke={c.axis} strokeWidth={1} />
      <path d={WF_PATH} fill="none" stroke={c.accent} strokeWidth={1.8} />
      <text x="472" y="100" fill={c.accent} fontFamily={SA_FONT} fontSize={10}>
        W ∝ ρ^4
      </text>
      <text x="525" y="232" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={10}>
        pupil radius ρ
      </text>
    </svg>
  );
});

export default ThreeDescriptionsDiagram;
