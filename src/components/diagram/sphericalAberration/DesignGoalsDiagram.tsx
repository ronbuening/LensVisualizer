// Figure 9 of the spherical-aberration series: three uses of a controlled
// residual — core-and-halo subject softness, foreground–background defocus
// bias, and a user-adjustable under-to-over range.

import { memo } from "react";
import { SA_FONT, saColors } from "./saDiagramShared.js";

const DesignGoalsDiagram = memo(function DesignGoalsDiagram({ isDark }: { isDark: boolean }) {
  const c = saColors(isDark);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 280"
      width="100%"
      height="auto"
      role="img"
      aria-label="Three design uses of a controlled spherical-aberration residual"
    >
      <defs>
        <radialGradient id="sa09-core">
          <stop offset="0" stopColor={c.diskBright} />
          <stop offset="0.45" stopColor={c.diskMid} />
          <stop offset="1" stopColor={c.diskMid} stopOpacity={0} />
        </radialGradient>
        <radialGradient id="sa09-halo">
          <stop offset="0" stopColor={c.diskFaint} />
          <stop offset="0.6" stopColor={c.diskFaint} />
          <stop offset="1" stopColor={c.diskFaint} stopOpacity={0} />
        </radialGradient>
        <radialGradient id="sa09-edge">
          <stop offset="0" stopColor={c.diskFaint} />
          <stop offset="0.55" stopColor={c.diskFaint} />
          <stop offset="0.8" stopColor={c.diskBright} stopOpacity={0.8} />
          <stop offset="0.92" stopColor={c.diskMid} />
          <stop offset="1" stopColor={c.diskMid} stopOpacity={0} />
        </radialGradient>
        <radialGradient id="sa09-center">
          <stop offset="0" stopColor={c.diskBright} stopOpacity={0.9} />
          <stop offset="0.4" stopColor={c.diskMid} />
          <stop offset="1" stopColor={c.diskMid} stopOpacity={0} />
        </radialGradient>
        <radialGradient id="sa09-flat">
          <stop offset="0" stopColor={c.diskMid} />
          <stop offset="0.85" stopColor={c.diskMid} />
          <stop offset="1" stopColor={c.diskMid} stopOpacity={0.1} />
        </radialGradient>
      </defs>

      <rect width="640" height="280" rx="6" fill={c.bg} />
      <rect width="640" height="280" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Panel separators */}
      <line x1="213" y1="24" x2="213" y2="256" stroke={c.grid} strokeWidth={1} strokeDasharray="4,4" />
      <line x1="427" y1="24" x2="427" y2="256" stroke={c.grid} strokeWidth={1} strokeDasharray="4,4" />

      {/* Titles and subtitles */}
      <text x="120" y="44" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={12}>
        soft subject
      </text>
      <text x="120" y="60" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        core + halo
      </text>
      <text x="320" y="44" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={12}>
        defocus bias
      </text>
      <text x="320" y="60" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        R / F exchange
      </text>
      <text x="520" y="44" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={12}>
        adjustable range
      </text>
      <text x="520" y="60" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        under – sharp – over
      </text>

      {/* Panel 1: in-focus core plus halo */}
      <circle cx="120" cy="140" r="36" fill="url(#sa09-halo)" />
      <circle cx="120" cy="140" r="8" fill="url(#sa09-core)" />
      <text x="120" y="196" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        in-focus point
      </text>

      {/* Panel 2: foreground/background exchange with a concentrated subject */}
      <text x="320" y="100" textAnchor="middle" fill={c.accent} fontFamily={SA_FONT} fontSize={12}>
        R ↔ F
      </text>
      <circle cx="285" cy="140" r="24" fill="url(#sa09-edge)" />
      <circle cx="355" cy="140" r="24" fill="url(#sa09-center)" />
      <text x="285" y="182" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        front
      </text>
      <text x="355" y="182" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        behind
      </text>

      {/* Panel 3: under–sharp–over control. All three mini disks are the same
          defocused background point so only the radial weighting changes:
          smoother when undercorrected, uniform when sharp, ringed when over. */}
      <text x="520" y="92" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        background blur
      </text>
      <circle cx="450" cy="114" r="13" fill="url(#sa09-center)" />
      <circle cx="520" cy="114" r="13" fill="url(#sa09-flat)" />
      <circle cx="520" cy="114" r="13" fill="none" stroke={c.diskRim} strokeWidth={0.8} />
      <circle cx="590" cy="114" r="13" fill="url(#sa09-edge)" />
      <line x1="446" y1="150" x2="594" y2="150" stroke={c.axis} strokeWidth={2} strokeLinecap="round" />
      <line x1="450" y1="144" x2="450" y2="156" stroke={c.tick} strokeWidth={1} />
      <line x1="520" y1="144" x2="520" y2="156" stroke={c.tick} strokeWidth={1} />
      <line x1="590" y1="144" x2="590" y2="156" stroke={c.tick} strokeWidth={1} />
      <circle cx="520" cy="150" r="5" fill={c.accent} />
      <text x="450" y="172" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        under
      </text>
      <text x="520" y="172" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        sharp
      </text>
      <text x="590" y="172" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        over
      </text>

      {/* Example lenses */}
      <text x="120" y="240" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        e.g. Varisoft
      </text>
      <text x="320" y="240" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        e.g. DC-Nikkor
      </text>
      <text x="520" y="240" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        e.g. Portrait Heliar
      </text>
    </svg>
  );
});

export default DesignGoalsDiagram;
