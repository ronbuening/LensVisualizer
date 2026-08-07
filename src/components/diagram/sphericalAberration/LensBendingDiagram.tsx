// Figure 8 of the spherical-aberration series: three bendings of an element
// with equal first-order power. Every panel shares the same paraxial focus;
// the marginal rays cross at a bending-dependent distance, so the visible
// LSA spread between the two crossings compares the spherical aberration.

import { memo } from "react";
import { SA_FONT, saColors } from "./saDiagramShared.js";

const AXIS_Y = 140;
const MARGINAL_H = 48;
const PARAXIAL_H = 18;
const PARAXIAL_FOCUS = 165; // panel-relative; identical in all panels (equal power)

interface PanelSpec {
  x0: number;
  title: string;
  spread: string;
  marginalFocus: number; // panel-relative marginal crossing
  fillPath: (lx: number) => string;
  edges: (lx: number) => string[];
}

const PANELS: ReadonlyArray<PanelSpec> = [
  {
    x0: 10,
    title: "flat side to object",
    spread: "large LSA spread",
    marginalFocus: 105,
    fillPath: (lx) => `M ${lx - 9},80 L ${lx - 9},200 L ${lx + 5},200 Q ${lx + 27},140 ${lx + 5},80 Z`,
    edges: (lx) => [
      `M ${lx - 9},80 L ${lx - 9},200`,
      `M ${lx + 5},80 Q ${lx + 27},140 ${lx + 5},200`,
      `M ${lx - 9},80 L ${lx + 5},80`,
      `M ${lx - 9},200 L ${lx + 5},200`,
    ],
  },
  {
    x0: 220,
    title: "biconvex",
    spread: "smaller",
    marginalFocus: 135,
    fillPath: (lx) => `M ${lx - 5},80 Q ${lx - 22},140 ${lx - 5},200 L ${lx + 5},200 Q ${lx + 22},140 ${lx + 5},80 Z`,
    edges: (lx) => [
      `M ${lx - 5},80 Q ${lx - 22},140 ${lx - 5},200`,
      `M ${lx + 5},80 Q ${lx + 22},140 ${lx + 5},200`,
      `M ${lx - 5},80 L ${lx + 5},80`,
      `M ${lx - 5},200 L ${lx + 5},200`,
    ],
  },
  {
    x0: 430,
    title: "curved side to object",
    spread: "smallest",
    marginalFocus: 152,
    fillPath: (lx) => `M ${lx - 5},80 Q ${lx - 27},140 ${lx - 5},200 L ${lx + 9},200 L ${lx + 9},80 Z`,
    edges: (lx) => [
      `M ${lx - 5},80 Q ${lx - 27},140 ${lx - 5},200`,
      `M ${lx + 9},80 L ${lx + 9},200`,
      `M ${lx - 5},80 L ${lx + 9},80`,
      `M ${lx - 5},200 L ${lx + 9},200`,
    ],
  },
];

function refractedEnd(lensX: number, crossX: number, rayHeight: number, endX: number): number {
  return AXIS_Y + (rayHeight / (crossX - lensX)) * (endX - crossX);
}

const LensBendingDiagram = memo(function LensBendingDiagram({ isDark }: { isDark: boolean }) {
  const c = saColors(isDark);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 280"
      width="100%"
      height="auto"
      role="img"
      aria-label="Lens bending: equal power and shared paraxial focus, different marginal focus"
    >
      <rect width="640" height="280" rx="6" fill={c.bg} />
      <rect width="640" height="280" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      <line x1="215" y1="20" x2="215" y2="252" stroke={c.grid} strokeWidth={1} strokeDasharray="4,4" />
      <line x1="425" y1="20" x2="425" y2="252" stroke={c.grid} strokeWidth={1} strokeDasharray="4,4" />

      {PANELS.map(({ x0, title, spread, marginalFocus, fillPath, edges }) => {
        const lx = x0 + 52;
        const mx = x0 + marginalFocus;
        const px = x0 + PARAXIAL_FOCUS;
        // The steep flat-front marginal fan is clipped earlier so it stays clear
        // of the spread bracket; the flatter fans run the full panel width.
        const marginalEndX = marginalFocus === 105 ? x0 + 177 : x0 + 188;
        const paraxialEndX = x0 + 188;
        return (
          <g key={title}>
            <text x={x0 + 100} y="34" textAnchor="middle" fill={c.label} fontFamily={SA_FONT} fontSize={12}>
              {title}
            </text>

            <line
              x1={x0 + 6}
              y1={AXIS_Y}
              x2={x0 + 192}
              y2={AXIS_Y}
              stroke={c.axis}
              strokeWidth={1}
              strokeDasharray="5,4"
            />

            {/* Marginal ray pair */}
            {[MARGINAL_H, -MARGINAL_H].map((h) => (
              <g key={`m${h}`} stroke={c.warm} strokeWidth={1.3}>
                <line x1={x0 + 8} y1={AXIS_Y - h} x2={lx} y2={AXIS_Y - h} />
                <line x1={lx} y1={AXIS_Y - h} x2={marginalEndX} y2={refractedEnd(lx, mx, h, marginalEndX)} />
              </g>
            ))}
            {[MARGINAL_H, -MARGINAL_H].map((h) => (
              <polygon
                key={`ma${h}`}
                points={`${x0 + 24},${AXIS_Y - h - 3} ${x0 + 31},${AXIS_Y - h} ${x0 + 24},${AXIS_Y - h + 3}`}
                fill={c.warm}
              />
            ))}

            {/* Paraxial ray pair */}
            {[PARAXIAL_H, -PARAXIAL_H].map((h) => (
              <g key={`p${h}`} stroke={c.accent} strokeWidth={1.3}>
                <line x1={x0 + 8} y1={AXIS_Y - h} x2={lx} y2={AXIS_Y - h} />
                <line x1={lx} y1={AXIS_Y - h} x2={paraxialEndX} y2={refractedEnd(lx, px, h, paraxialEndX)} />
              </g>
            ))}
            {[PARAXIAL_H, -PARAXIAL_H].map((h) => (
              <polygon
                key={`pa${h}`}
                points={`${x0 + 24},${AXIS_Y - h - 3} ${x0 + 31},${AXIS_Y - h} ${x0 + 24},${AXIS_Y - h + 3}`}
                fill={c.accent}
              />
            ))}

            {/* Lens element */}
            <path d={fillPath(lx)} fill={c.lensFill} />
            {edges(lx).map((d) => (
              <path key={d} d={d} fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
            ))}

            {/* Focus ticks and the LSA spread bracket between them */}
            <line x1={mx} y1={AXIS_Y - 6} x2={mx} y2={AXIS_Y + 6} stroke={c.warm} strokeWidth={1.5} />
            <line x1={px} y1={AXIS_Y - 6} x2={px} y2={AXIS_Y + 6} stroke={c.accent} strokeWidth={1.5} />
            <line x1={mx} y1={AXIS_Y + 8} x2={mx} y2="220" stroke={c.tick} strokeWidth={1} strokeDasharray="3,3" />
            <line x1={px} y1={AXIS_Y + 8} x2={px} y2="220" stroke={c.tick} strokeWidth={1} strokeDasharray="3,3" />
            <line x1={mx} y1="220" x2={px} y2="220" stroke={c.tick} strokeWidth={1} />
            <line x1={mx} y1="216" x2={mx} y2="224" stroke={c.tick} strokeWidth={1} />
            <line x1={px} y1="216" x2={px} y2="224" stroke={c.tick} strokeWidth={1} />
            <text x={(mx + px) / 2} y="240" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
              {spread}
            </text>
          </g>
        );
      })}

      <text x="320" y="268" textAnchor="middle" fill={c.muted} fontFamily={SA_FONT} fontSize={11}>
        equal focal power: all three share the paraxial focus; bending moves the marginal focus
      </text>
    </svg>
  );
});

export default LensBendingDiagram;
