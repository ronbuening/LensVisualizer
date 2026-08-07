// Figure 6 of the spherical-aberration series: foreground and background blur
// disks under undercorrection and overcorrection. Center-weighted and
// edge-weighted radial distributions exchange sides when the sign reverses.

import { memo } from "react";
import { SA_FONT, saColors } from "./saDiagramShared.js";

interface DiskSpec {
  cx: number;
  cy: number;
  kind: "center" | "edge";
}

const DISKS: ReadonlyArray<DiskSpec> = [
  { cx: 200, cy: 130, kind: "edge" }, // undercorrected, foreground
  { cx: 460, cy: 130, kind: "center" }, // undercorrected, background
  { cx: 200, cy: 240, kind: "center" }, // overcorrected, foreground
  { cx: 460, cy: 240, kind: "edge" }, // overcorrected, background
];

const FrontRearDefocusDiagram = memo(function FrontRearDefocusDiagram({ isDark }: { isDark: boolean }) {
  const c = saColors(isDark);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 320"
      width="100%"
      height="auto"
      role="img"
      aria-label="Foreground and background blur disks under undercorrection and overcorrection"
    >
      <defs>
        <radialGradient id="sa06-center">
          <stop offset="0" stopColor={c.diskBright} stopOpacity={0.9} />
          <stop offset="0.4" stopColor={c.diskMid} />
          <stop offset="1" stopColor={c.diskMid} stopOpacity={0} />
        </radialGradient>
        <radialGradient id="sa06-edge">
          <stop offset="0" stopColor={c.diskFaint} />
          <stop offset="0.55" stopColor={c.diskFaint} />
          <stop offset="0.8" stopColor={c.diskBright} stopOpacity={0.8} />
          <stop offset="0.92" stopColor={c.diskMid} />
          <stop offset="1" stopColor={c.diskMid} stopOpacity={0} />
        </radialGradient>
      </defs>

      <rect width="640" height="320" rx="6" fill={c.bg} />
      <rect width="640" height="320" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Column headers */}
      <text x="200" y="52" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={11}>
        foreground point
      </text>
      <text x="200" y="66" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={10}>
        (in front of focus)
      </text>
      <text x="460" y="52" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={11}>
        background point
      </text>
      <text x="460" y="66" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={10}>
        (behind focus)
      </text>

      {/* Row labels */}
      <text x="24" y="124" fill={c.label} fontFamily={SA_FONT} fontSize={10}>
        undercorrected
      </text>
      <text x="24" y="234" fill={c.label} fontFamily={SA_FONT} fontSize={10}>
        overcorrected
      </text>

      {/* Blur disks */}
      {DISKS.map(({ cx, cy, kind }) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="38" fill={`url(#sa06-${kind})`} />
          <text x={cx} y={cy + 52} textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={9.5}>
            {kind === "center" ? "center-weighted" : "edge-weighted"}
          </text>
        </g>
      ))}

      <text x="320" y="308" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={10}>
        disk diameters normalized; reversing the correction sign exchanges the weighting
      </text>
    </svg>
  );
});

export default FrontRearDefocusDiagram;
