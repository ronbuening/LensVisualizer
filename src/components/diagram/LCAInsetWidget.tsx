/**
 * LCAInsetWidget — Magnified inset showing longitudinal chromatic aberration.
 *
 * Displays where each wavelength's marginal ray crosses the axis relative to
 * the G/d-line reference. Uses a fixed reference scale (from lcaScaling) so
 * lenses with worse CA show wider bars and well-corrected lenses show narrower
 * bars.  Accepts optional width/height for reuse in a future larger overlay.
 */
import type { ChromaticSpread, ChromaticChannel } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import { computeLcaBarOffsets } from "../../optics/lcaScaling.js";

interface LCAInsetWidgetProps {
  chromSpread: ChromaticSpread;
  effectiveSC: number;
  IMG_MM: number;
  IX: number;
  svgW: number;
  sy: (y: number) => number;
  t: Theme;
  /** Override default 90px width — for the larger overlay view. */
  width?: number;
  /** Override default 100px height — for the larger overlay view. */
  height?: number;
  /** Override computed X origin — for standalone SVG rendering. */
  originX?: number;
  /** Override computed Y origin — for standalone SVG rendering. */
  originY?: number;
  /** Click handler — used to open the enlarged overlay. */
  onClick?: () => void;
  /** Base font scale multiplier (default 1). */
  fontScale?: number;
}

export default function LCAInsetWidget({
  chromSpread,
  effectiveSC,
  IMG_MM,
  IX,
  svgW,
  sy,
  t,
  width,
  height,
  originX,
  originY,
  onClick,
  fontScale = 1,
}: LCAInsetWidgetProps) {
  const insetW = width ?? 90;
  const insetH = height ?? 100;
  const gRef = chromSpread.intercepts.G ?? IMG_MM;
  const viewWidthPx = insetW - 24;
  const { barOffsets, mag } = computeLcaBarOffsets(chromSpread.intercepts, gRef, viewWidthPx, effectiveSC);
  const activeChans = (["R", "G", "B"] as ChromaticChannel[]).filter((ch) => chromSpread.intercepts[ch] !== undefined);

  let insetX: number;
  let insetY: number;
  if (originX != null && originY != null) {
    insetX = originX;
    insetY = originY;
  } else {
    insetX = IX + 10;
    if (insetX + insetW > svgW - 4) insetX = IX - insetW - 10;
    insetY = sy(0) - 55;
  }
  const midX = insetX + insetW / 2;

  const fs = (base: number) => base * fontScale;

  return (
    <g onClick={onClick} style={onClick ? { cursor: "pointer" } : undefined}>
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
        fontSize={fs(8.5)}
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
        const offset = barOffsets[ch] ?? 0;
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
              fontSize={fs(8.5)}
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
        fontSize={fs(10)}
        fontFamily="inherit"
        fontWeight={600}
      >
        {Math.abs(chromSpread.lcaMm * 1000) >= 1
          ? `${Math.abs(chromSpread.lcaMm * 1000).toFixed(0)} \u00b5m`
          : `${Math.abs(chromSpread.lcaMm * 1000).toFixed(1)} \u00b5m`}
      </text>
      <text x={midX} y={insetY + 95} textAnchor="middle" fill={t.muted} fontSize={fs(7.5)} fontFamily="inherit">
        {Math.round(mag)}
        {"\u00d7"}
      </text>
    </g>
  );
}
