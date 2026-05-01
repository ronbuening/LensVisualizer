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
import type { DispersionQuality } from "../../optics/dispersion.js";
import { computeLcaBarOffsets } from "../../optics/lcaScaling.js";

const QUALITY_LABEL: Record<DispersionQuality, string> = {
  sellmeier: "Sellmeier",
  lineIndices: "Measured (C/F)",
  abbe: "Abbe approx",
  constant: "No dispersion",
  air: "",
};

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
  /** Aggregate dispersion-data quality across the lens (drives the small badge). */
  dispersionQuality?: DispersionQuality;
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
  dispersionQuality,
}: LCAInsetWidgetProps) {
  const insetW = width ?? 110;
  const insetH = height ?? 100;
  const gRef = chromSpread.intercepts.G ?? IMG_MM;
  const viewWidthPx = insetW - 24;
  const { barOffsets, mag } = computeLcaBarOffsets(chromSpread.intercepts, gRef, viewWidthPx, effectiveSC);
  const activeChans = (["R", "G", "B", "V"] as ChromaticChannel[]).filter(
    (ch) => chromSpread.intercepts[ch] !== undefined,
  );
  const qualityLabel = dispersionQuality && dispersionQuality !== "air" ? QUALITY_LABEL[dispersionQuality] : "";

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

  // Y positions scale proportionally with insetH so the layout works at any size
  // (small 100px inset and large 256px overlay). Fractions match the original
  // fixed values: 14/100, 30/100, 40/100, 56/100, 67/100, 82/100, 95/100.
  const yTitle = insetY + insetH * 0.14;
  const yLineTop = insetY + insetH * 0.30;
  const yAxis = insetY + insetH * 0.4;
  const yLineBot = insetY + insetH * 0.56;
  const yLabel = insetY + insetH * 0.67;
  const yMagnitude = insetY + insetH * 0.82;
  const yMagScale = insetY + insetH * 0.95;

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
        y={yTitle}
        textAnchor="middle"
        fill={t.muted}
        fontSize={fs(8.5)}
        fontFamily="inherit"
        style={{ letterSpacing: "0.1em" }}
      >
        LCA
      </text>
      <line x1={insetX + 6} y1={yAxis} x2={insetX + insetW - 6} y2={yAxis} stroke={t.axis} strokeWidth={0.5} />
      {activeChans.map((ch) => {
        const offset = barOffsets[ch] ?? 0;
        const color = ch === "R" ? t.rayChromR : ch === "G" ? t.rayChromG : ch === "B" ? t.rayChromB : t.rayChromV;
        return (
          <g key={ch}>
            <line
              x1={midX + offset}
              y1={yLineTop}
              x2={midX + offset}
              y2={yLineBot}
              stroke={color}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <text
              x={midX + offset}
              y={yLabel}
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
        y={yMagnitude}
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
      <text x={midX} y={yMagScale} textAnchor="middle" fill={t.muted} fontSize={fs(7.5)} fontFamily="inherit">
        {Math.round(mag)}
        {"\u00d7"}
      </text>
      {qualityLabel && (
        <text
          x={midX}
          y={insetY + insetH * 0.21}
          textAnchor="middle"
          fill={t.muted}
          fontSize={fs(6.5)}
          fontFamily="inherit"
          opacity={0.75}
        >
          {qualityLabel}
        </text>
      )}
    </g>
  );
}
