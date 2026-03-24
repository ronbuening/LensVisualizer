/**
 * LCAInsetWidget — Magnified inset showing longitudinal chromatic aberration.
 *
 * Displays where each wavelength's marginal ray crosses the axis relative to
 * the G/d-line reference. Magnification is auto-scaled and clamped at 5000x
 * to avoid pixel overflow for sub-micron LCA.
 */
import type { ChromaticSpread, ChromaticChannel } from "../types/optics.js";
import type { Theme } from "../types/theme.js";

interface LCAInsetWidgetProps {
  chromSpread: ChromaticSpread;
  effectiveSC: number;
  IMG_MM: number;
  IX: number;
  svgW: number;
  sy: (y: number) => number;
  t: Theme;
}

export default function LCAInsetWidget({ chromSpread, effectiveSC, IMG_MM, IX, svgW, sy, t }: LCAInsetWidgetProps) {
  const insetW = 90;
  const insetH = 100;
  const gRef = chromSpread.intercepts.G || IMG_MM;
  const activeChans = (["R", "G", "B"] as ChromaticChannel[]).filter((ch) => chromSpread.intercepts[ch] !== undefined);
  const offsets = activeChans.map((ch) => Math.abs((chromSpread.intercepts[ch] ?? 0) - gRef));
  const maxOff = Math.max(...offsets, 1e-9);
  const maxPixelSpan = (insetW - 24) / 2;
  const mag = Math.min(maxPixelSpan / (maxOff * effectiveSC), 5000);
  let insetX = IX + 10;
  if (insetX + insetW > svgW - 4) insetX = IX - insetW - 10;
  const insetY = sy(0) - 55;
  const midX = insetX + insetW / 2;

  return (
    <g>
      <rect
        x={insetX}
        y={insetY}
        width={insetW}
        height={insetH}
        rx={4}
        fill={t.panelBg}
        stroke={t.panelBorder}
        strokeWidth={0.6}
        opacity={0.94}
      />
      <text
        x={midX}
        y={insetY + 14}
        textAnchor="middle"
        fill={t.muted}
        fontSize={8.5}
        fontFamily="inherit"
        style={{ letterSpacing: "0.1em" }}
      >
        LCA
      </text>
      <line
        x1={insetX + 6}
        y1={insetY + 40}
        x2={insetX + insetW - 6}
        y2={insetY + 40}
        stroke={t.axis}
        strokeWidth={0.5}
      />
      {activeChans.map((ch) => {
        const offset = ((chromSpread.intercepts[ch] ?? 0) - gRef) * mag * effectiveSC;
        const color = ch === "R" ? t.rayChromR : ch === "G" ? t.rayChromG : t.rayChromB;
        return (
          <g key={ch}>
            <line
              x1={midX + offset}
              y1={insetY + 22}
              x2={midX + offset}
              y2={insetY + 56}
              stroke={color}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <text
              x={midX + offset}
              y={insetY + 67}
              textAnchor="middle"
              fill={color}
              fontSize={8.5}
              fontFamily="inherit"
              fontWeight={600}
            >
              {ch}
            </text>
          </g>
        );
      })}
      <text
        x={midX}
        y={insetY + 82}
        textAnchor="middle"
        fill={t.value}
        fontSize={10}
        fontFamily="inherit"
        fontWeight={600}
      >
        {Math.abs(chromSpread.lcaMm * 1000) >= 1
          ? `${Math.abs(chromSpread.lcaMm * 1000).toFixed(0)} \u00b5m`
          : `${Math.abs(chromSpread.lcaMm * 1000).toFixed(1)} \u00b5m`}
      </text>
      <text x={midX} y={insetY + 95} textAnchor="middle" fill={t.muted} fontSize={7.5} fontFamily="inherit">
        {Math.round(mag)}
        {"\u00d7"}
      </text>
    </g>
  );
}
