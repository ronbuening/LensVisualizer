// Figure 5 of the spherical-aberration series: three aperture states over the
// same undercorrected lens. Smaller openings exclude the marginal, then the
// zonal, ray pairs, shrinking the blur at a fixed image plane.

import { memo } from "react";
import type { SaColors } from "./saDiagramShared.js";
import { SA_FONT, saColors } from "./saDiagramShared.js";

interface PanelSpec {
  x0: number;
  title: string;
  blocked: ReadonlyArray<"marginal" | "zonal">;
  gapTop: number; // aperture bar inner edge above/below the axis (y=150)
  blurHalf: number;
}

const PANELS: ReadonlyArray<PanelSpec> = [
  { x0: 10, title: "wide open", blocked: [], gapTop: 78, blurHalf: 43 },
  { x0: 220, title: "marginal zone blocked", blocked: ["marginal"], gapTop: 54, blurHalf: 11 },
  { x0: 430, title: "inner zones only", blocked: ["marginal", "zonal"], gapTop: 32, blurHalf: 3 },
];

// Ray heights at the lens and their arrival heights at the image plane, from
// the shared crossing geometry (marginal crosses first, paraxial at the plane).
const RAYS = [
  { zone: "marginal", yLens: 80, yPlane: 193 },
  { zone: "marginal", yLens: 220, yPlane: 107 },
  { zone: "zonal", yLens: 106, yPlane: 161 },
  { zone: "zonal", yLens: 194, yPlane: 139 },
  { zone: "paraxial", yLens: 132, yPlane: 150 },
  { zone: "paraxial", yLens: 168, yPlane: 150 },
] as const;

function zoneColor(zone: (typeof RAYS)[number]["zone"], c: SaColors): string {
  if (zone === "marginal") return c.warm;
  if (zone === "zonal") return c.violet;
  return c.accent;
}

const ApertureSweepDiagram = memo(function ApertureSweepDiagram({ isDark }: { isDark: boolean }) {
  const c = saColors(isDark);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 270"
      width="100%"
      height="auto"
      role="img"
      aria-label="Aperture sweep: smaller openings exclude outer pupil zones"
    >
      <rect width="640" height="270" rx="6" fill={c.bg} />
      <rect width="640" height="270" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      <line x1="215" y1="20" x2="215" y2="250" stroke={c.grid} strokeWidth={1} strokeDasharray="4,4" />
      <line x1="425" y1="20" x2="425" y2="250" stroke={c.grid} strokeWidth={1} strokeDasharray="4,4" />

      {PANELS.map(({ x0, title, blocked, gapTop, blurHalf }) => {
        const lx = x0 + 45;
        const ax = lx - 18;
        const ip = x0 + 158;
        return (
          <g key={title}>
            <text x={x0 + 100} y="34" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={12}>
              {title}
            </text>

            <line x1={x0 + 6} y1="150" x2={x0 + 192} y2="150" stroke={c.axis} strokeWidth={1} strokeDasharray="5,4" />

            {/* Rays: blocked pairs stop at the aperture plane */}
            {RAYS.map(({ zone, yLens, yPlane }) => {
              const color = zoneColor(zone, c);
              if (blocked.includes(zone as "marginal" | "zonal")) {
                return (
                  <line
                    key={`${zone}-${yLens}`}
                    x1={x0 + 6}
                    y1={yLens}
                    x2={ax}
                    y2={yLens}
                    stroke={color}
                    strokeWidth={1.2}
                    opacity={0.3}
                  />
                );
              }
              return (
                <g key={`${zone}-${yLens}`} stroke={color} strokeWidth={1.2}>
                  <line x1={x0 + 6} y1={yLens} x2={lx} y2={yLens} />
                  <line x1={lx} y1={yLens} x2={ip} y2={yPlane} />
                </g>
              );
            })}

            {/* Aperture bars */}
            <g stroke={c.warm} strokeWidth={3} strokeLinecap="round">
              <line x1={ax} y1="58" x2={ax} y2={150 - gapTop} />
              <line x1={ax} y1={150 + gapTop} x2={ax} y2="242" />
            </g>

            {/* Lens element */}
            <path
              d={`M ${lx - 8},80 Q ${lx - 20},150 ${lx - 8},220 L ${lx + 8},220 Q ${lx + 20},150 ${lx + 8},80 Z`}
              fill={c.lensFill}
            />
            <path
              d={`M ${lx - 8},80 Q ${lx - 20},150 ${lx - 8},220`}
              fill="none"
              stroke={c.lensStroke}
              strokeWidth={1.4}
            />
            <path
              d={`M ${lx + 8},80 Q ${lx + 20},150 ${lx + 8},220`}
              fill="none"
              stroke={c.lensStroke}
              strokeWidth={1.4}
            />

            {/* Image plane and blur extent */}
            <line x1={ip} y1="70" x2={ip} y2="230" stroke={c.axis} strokeWidth={1} />
            <line
              x1={ip}
              y1={150 - blurHalf}
              x2={ip}
              y2={150 + blurHalf}
              stroke={c.accent}
              strokeWidth={4}
              opacity={0.9}
            />
            <text x={ip} y="258" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
              image plane
            </text>
          </g>
        );
      })}
    </svg>
  );
});

export default ApertureSweepDiagram;
