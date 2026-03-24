/**
 * PetzvalSumBadge — Upper-left SVG overlay showing the Petzval sum and field radius.
 *
 * The Petzval sum P = Σ (n'−n)/(n'·n·R) quantifies field curvature; the Petzval
 * field radius R_ptz = 1/P gives a physical distance in mm. Both are displayed
 * as a compact badge in the upper-left corner of the diagram SVG.
 */
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface PetzvalSumBadgeProps {
  L: RuntimeLens;
  t: Theme;
}

function formatPetzvalRadius(P: number): string {
  if (Math.abs(P) < 1e-6) return "R = \u221e";
  const R = 1 / P;
  const absR = Math.abs(R);
  const formatted = absR < 10 ? absR.toFixed(1) : Math.round(absR).toString();
  return `R = ${R < 0 ? "\u2212" : ""}${formatted} mm`;
}

export default function PetzvalSumBadge({ L, t }: PetzvalSumBadgeProps) {
  const P = L.petzvalSum;
  const sign = P >= 0 ? "+" : "\u2212";
  const pStr = `${sign}${Math.abs(P).toFixed(4)} mm\u207b\u00b9`;
  const rStr = formatPetzvalRadius(P);

  const x = 8;
  const y = 8;
  const w = 94;
  const h = 52;

  return (
    <g style={{ pointerEvents: "none" }}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={4}
        fill={t.panelBg}
        stroke={t.panelBorder}
        strokeWidth={0.6}
        opacity={0.94}
      />
      <text
        x={x + w / 2}
        y={y + 14}
        textAnchor="middle"
        fill={t.muted}
        fontSize={7.5}
        fontFamily="inherit"
        style={{ letterSpacing: "0.1em" }}
      >
        PETZVAL
      </text>
      <text
        x={x + w / 2}
        y={y + 30}
        textAnchor="middle"
        fill={t.value}
        fontSize={10}
        fontFamily="inherit"
        fontWeight={600}
      >
        {pStr}
      </text>
      <text x={x + w / 2} y={y + 44} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
        {rStr}
      </text>
    </g>
  );
}
