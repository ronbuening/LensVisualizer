/**
 * ChromaticFanSpreadWidget — Magnified inset showing off-axis chromatic ray-fan spread.
 *
 * Displays each wavelength's image-plane height relative to the G/d-line
 * reference. The chart matches the LoCA inset visual language, but it plots
 * the displayed marginal fan's endpoint spread instead of chief-ray TCA.
 */
import type { ChromaticRayFanSpread, ChromaticChannel } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { DispersionQuality } from "../../optics/dispersion.js";
import {
  computeChromaticBarOffsets,
  REFERENCE_FAN_IMAGE_HEIGHT_SPREAD_MM,
} from "../../optics/chromaticRayFanScaling.js";
import { chromaticChannelColor, formatSpreadUmFromMm } from "../display/analysis/chromaticChartUtils.js";
import { ChromaticQualityBadge, chromaticQualityBadgeLabel } from "./ChromaticQualityBadge.js";

function referenceHeight(imagePlaneHeights: Partial<Record<ChromaticChannel, number>>, fallback: number): number {
  if (imagePlaneHeights.G !== undefined) return imagePlaneHeights.G;
  const values = Object.values(imagePlaneHeights);
  if (values.length === 0) return fallback;
  return (Math.min(...values) + Math.max(...values)) / 2;
}

interface ChromaticFanSpreadWidgetProps {
  chromaticRayFanSpread: ChromaticRayFanSpread;
  effectiveSC: number;
  t: Theme;
  width?: number;
  height?: number;
  originX?: number;
  originY?: number;
  fontScale?: number;
  dispersionQuality?: DispersionQuality;
}

export default function ChromaticFanSpreadWidget({
  chromaticRayFanSpread,
  effectiveSC,
  t,
  width,
  height,
  originX = 0,
  originY = 0,
  fontScale = 1,
  dispersionQuality,
}: ChromaticFanSpreadWidgetProps) {
  const insetW = width ?? 110;
  const insetH = height ?? 100;
  const reference = referenceHeight(chromaticRayFanSpread.imagePlaneHeights, 0);
  const viewWidthPx = insetW - 24;
  const { barOffsets, mag } = computeChromaticBarOffsets(
    chromaticRayFanSpread.imagePlaneHeights,
    reference,
    viewWidthPx,
    effectiveSC,
    REFERENCE_FAN_IMAGE_HEIGHT_SPREAD_MM,
  );
  const activeChans = (["R", "G", "B", "V"] as ChromaticChannel[]).filter(
    (ch) => chromaticRayFanSpread.imagePlaneHeights[ch] !== undefined,
  );
  const qualityLabel = chromaticQualityBadgeLabel(dispersionQuality);
  const midX = originX + insetW / 2;
  const fs = (base: number) => base * fontScale;

  const yTitle = originY + insetH * 0.14;
  const ySubtitle = originY + insetH * 0.22;
  const yLineTop = originY + insetH * 0.3;
  const yAxis = originY + insetH * 0.4;
  const yLineBot = originY + insetH * 0.56;
  const yLabel = originY + insetH * 0.67;
  const yMagnitude = originY + insetH * 0.82;
  const yMagScale = originY + insetH * 0.95;

  return (
    <g>
      <rect
        x={originX}
        y={originY}
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
        FAN
      </text>
      {qualityLabel ? (
        <ChromaticQualityBadge dispersionQuality={dispersionQuality} x={midX} y={ySubtitle} t={t} fontSize={fs(6.5)} />
      ) : (
        <text x={midX} y={ySubtitle} textAnchor="middle" fill={t.muted} fontSize={fs(6.5)} fontFamily="inherit">
          IMAGE HEIGHT
        </text>
      )}
      <line x1={originX + 6} y1={yAxis} x2={originX + insetW - 6} y2={yAxis} stroke={t.axis} strokeWidth={0.5} />
      {activeChans.map((ch) => {
        const offset = barOffsets[ch] ?? 0;
        const color = chromaticChannelColor(t, ch);
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
        {formatSpreadUmFromMm(chromaticRayFanSpread.imagePlaneHeightSpreadMm)}
      </text>
      <text x={midX} y={yMagScale} textAnchor="middle" fill={t.muted} fontSize={fs(7.5)} fontFamily="inherit">
        {Math.round(mag)}
        {"\u00d7"}
      </text>
    </g>
  );
}
