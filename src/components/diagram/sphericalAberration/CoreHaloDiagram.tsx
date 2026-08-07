// Figure 4 of the spherical-aberration series: three point-image structures —
// a concentrated point, a core-plus-halo distribution, and ordinary defocus —
// each with a schematic radial intensity profile beneath the disk.

import { memo } from "react";
import { SA_FONT, saColors, saCurvePath } from "./saDiagramShared.js";

const PROFILE_A = saCurvePath(49, (u) => {
  const t = -1 + 2 * u;
  return [120 + 70 * t, 250 - 55 * Math.exp(-((4.2 * t) ** 2))];
});
const PROFILE_B = saCurvePath(49, (u) => {
  const t = -1 + 2 * u;
  return [320 + 70 * t, 250 - (40 * Math.exp(-((4.2 * t) ** 2)) + 16 * Math.exp(-((1.5 * t) ** 2)))];
});
const PROFILE_C = saCurvePath(49, (u) => {
  const t = -1 + 2 * u;
  return [520 + 70 * t, 250 - 24 / (1 + (t / 0.62) ** 12)];
});

const CoreHaloDiagram = memo(function CoreHaloDiagram({ isDark }: { isDark: boolean }) {
  const c = saColors(isDark);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 300"
      width="100%"
      height="auto"
      role="img"
      aria-label="Concentrated point, core plus halo, and ordinary defocus point images"
    >
      <defs>
        <radialGradient id="sa04-core">
          <stop offset="0" stopColor={c.diskBright} />
          <stop offset="0.45" stopColor={c.diskMid} />
          <stop offset="1" stopColor={c.diskMid} stopOpacity={0} />
        </radialGradient>
        <radialGradient id="sa04-halo">
          <stop offset="0" stopColor={c.diskFaint} />
          <stop offset="0.6" stopColor={c.diskFaint} />
          <stop offset="1" stopColor={c.diskFaint} stopOpacity={0} />
        </radialGradient>
        <radialGradient id="sa04-flat">
          <stop offset="0" stopColor={c.diskMid} />
          <stop offset="0.85" stopColor={c.diskMid} />
          <stop offset="1" stopColor={c.diskMid} stopOpacity={0.1} />
        </radialGradient>
      </defs>

      <rect width="640" height="300" rx="6" fill={c.bg} />
      <rect width="640" height="300" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Panel separators */}
      <line x1="213" y1="24" x2="213" y2="262" stroke={c.grid} strokeWidth={1} strokeDasharray="4,4" />
      <line x1="427" y1="24" x2="427" y2="262" stroke={c.grid} strokeWidth={1} strokeDasharray="4,4" />

      {/* Panel titles */}
      <text x="120" y="42" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={11}>
        concentrated
      </text>
      <text x="320" y="42" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={11}>
        core + halo
      </text>
      <text x="520" y="42" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={11}>
        ordinary defocus
      </text>

      {/* Point images */}
      <circle cx="120" cy="120" r="14" fill="url(#sa04-core)" />
      <circle cx="320" cy="120" r="44" fill="url(#sa04-halo)" />
      <circle cx="320" cy="120" r="9" fill="url(#sa04-core)" />
      <circle cx="520" cy="120" r="44" fill="url(#sa04-flat)" />
      <circle cx="520" cy="120" r="44" fill="none" stroke={c.diskRim} strokeWidth={1} />

      {/* Intensity profiles */}
      <line x1="46" y1="250" x2="194" y2="250" stroke={c.tick} strokeWidth={1} />
      <line x1="246" y1="250" x2="394" y2="250" stroke={c.tick} strokeWidth={1} />
      <line x1="446" y1="250" x2="594" y2="250" stroke={c.tick} strokeWidth={1} />
      <path d={PROFILE_A} fill="none" stroke={c.accent} strokeWidth={1.5} />
      <path d={PROFILE_B} fill="none" stroke={c.accent} strokeWidth={1.5} />
      <path d={PROFILE_C} fill="none" stroke={c.accent} strokeWidth={1.5} />

      <text x="320" y="284" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={10}>
        schematic radial intensity profiles
      </text>
    </svg>
  );
});

export default CoreHaloDiagram;
