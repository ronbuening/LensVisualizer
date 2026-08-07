// Figure 1 of the spherical-aberration series: paraxial, zonal, and marginal
// ray pairs from one distant on-axis point cross the axis at different
// positions, forming a caustic instead of a single focus (undercorrected case).

import { memo } from "react";
import { SA_FONT, saColors } from "./saDiagramShared.js";

const CausticDiagram = memo(function CausticDiagram({ isDark }: { isDark: boolean }) {
  const c = saColors(isDark);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 260"
      width="100%"
      height="auto"
      role="img"
      aria-label="Caustic diagram: pupil zones crossing the axis at different positions"
    >
      <rect width="640" height="260" rx="6" fill={c.bg} />
      <rect width="640" height="260" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Optical axis */}
      <line x1="28" y1="130" x2="612" y2="130" stroke={c.axis} strokeWidth={1} strokeDasharray="5,4" />

      {/* Caustic horn: widest near the marginal focus, cusp at the paraxial focus */}
      <path d="M 490,130 Q 420,124 350,118 L 350,142 Q 420,136 490,130 Z" fill={c.caustic} />

      {/* Marginal ray pair */}
      <g stroke={c.warm} strokeWidth={1.3}>
        <line x1="36" y1="58" x2="174" y2="58" />
        <line x1="174" y1="58" x2="590" y2="228.2" />
        <line x1="36" y1="202" x2="174" y2="202" />
        <line x1="174" y1="202" x2="590" y2="31.8" />
      </g>

      {/* Zonal ray pair */}
      <g stroke={c.violet} strokeWidth={1.3}>
        <line x1="36" y1="84" x2="174" y2="84" />
        <line x1="174" y1="84" x2="590" y2="161.8" />
        <line x1="36" y1="176" x2="174" y2="176" />
        <line x1="174" y1="176" x2="590" y2="98.2" />
      </g>

      {/* Paraxial ray pair */}
      <g stroke={c.accent} strokeWidth={1.3}>
        <line x1="36" y1="110" x2="174" y2="110" />
        <line x1="174" y1="110" x2="590" y2="136.3" />
        <line x1="36" y1="150" x2="174" y2="150" />
        <line x1="174" y1="150" x2="590" y2="123.7" />
      </g>

      {/* Lens element — tall enough that every drawn ray passes through the glass */}
      <path d="M 162,38 Q 138,130 162,222 L 186,222 Q 210,130 186,38 Z" fill={c.lensFill} />
      <path d="M 162,38 Q 138,130 162,222" fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
      <path d="M 186,38 Q 210,130 186,222" fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
      <line x1="162" y1="38" x2="186" y2="38" stroke={c.lensStroke} strokeWidth={1.5} />
      <line x1="162" y1="222" x2="186" y2="222" stroke={c.lensStroke} strokeWidth={1.5} />

      {/* Focus position ticks */}
      <line x1="350" y1="124" x2="350" y2="136" stroke={c.tick} strokeWidth={1} />
      <line x1="420" y1="124" x2="420" y2="136" stroke={c.tick} strokeWidth={1} />
      <line x1="490" y1="124" x2="490" y2="136" stroke={c.tick} strokeWidth={1} />

      {/* Labels */}
      <text x="32" y="26" fill={c.muted} fontFamily={SA_FONT} fontSize={10}>
        parallel rays from a distant on-axis point
      </text>
      <text x="40" y="52" fill={c.warm} fontFamily={SA_FONT} fontSize={10}>
        marginal
      </text>
      <text x="40" y="78" fill={c.violet} fontFamily={SA_FONT} fontSize={10}>
        zonal
      </text>
      <text x="40" y="104" fill={c.accent} fontFamily={SA_FONT} fontSize={10}>
        paraxial
      </text>
      <text x="350" y="246" textAnchor="middle" fill={c.warm} fontFamily={SA_FONT} fontSize={10}>
        marginal focus
      </text>
      <text x="420" y="246" textAnchor="middle" fill={c.violet} fontFamily={SA_FONT} fontSize={10}>
        zonal
      </text>
      <text x="490" y="246" textAnchor="middle" fill={c.accent} fontFamily={SA_FONT} fontSize={10}>
        paraxial focus
      </text>
      <text x="174" y="246" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={10}>
        lens
      </text>
    </svg>
  );
});

export default CausticDiagram;
