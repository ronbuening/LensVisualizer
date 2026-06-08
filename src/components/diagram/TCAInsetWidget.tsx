/**
 * TCAInsetWidget — Magnified inset showing transverse chromatic aberration.
 *
 * Displays each wavelength's image-plane height relative to the G/d-line
 * reference. The chart matches the LCA inset visual language, but it plots
 * lateral color instead of axial focus position.
 */
import type { ChromaticSpread, ChromaticChannel } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { DispersionQuality } from "../../optics/dispersion.js";
import { computeChromaticBarOffsets, REFERENCE_TCA_MM } from "../../optics/lcaScaling.js";
import { ChromaticQualityBadge, chromaticQualityBadgeLabel } from "./ChromaticQualityBadge.js";

function referenceHeight(imgHeights: Partial<Record<ChromaticChannel, number>>, fallback: number): number {
  if (imgHeights.G !== undefined) return imgHeights.G;
  const values = Object.values(imgHeights);
  if (values.length === 0) return fallback;
  return (Math.min(...values) + Math.max(...values)) / 2;
}

function channelColor(channel: ChromaticChannel, t: Theme): string {
  if (channel === "R") return t.rayChromR;
  if (channel === "G") return t.rayChromG;
  if (channel === "B") return t.rayChromB;
  return t.rayChromV;
}

function formatSpreadUm(mm: number): string {
  const um = Math.abs(mm * 1000);
  if (um === 0) return "< 0.1 \u00b5m";
  return um >= 1 ? `${um.toFixed(0)} \u00b5m` : `${um.toFixed(1)} \u00b5m`;
}

interface TCAInsetWidgetProps {
  chromSpread: ChromaticSpread;
  effectiveSC: number;
  t: Theme;
  width?: number;
  height?: number;
  originX?: number;
  originY?: number;
  fontScale?: number;
  dispersionQuality?: DispersionQuality;
}

export default function TCAInsetWidget({
  chromSpread,
  effectiveSC,
  t,
  width,
  height,
  originX = 0,
  originY = 0,
  fontScale = 1,
  dispersionQuality,
}: TCAInsetWidgetProps) {
  const insetW = width ?? 110;
  const insetH = height ?? 100;
  const reference = referenceHeight(chromSpread.imgHeights, 0);
  const viewWidthPx = insetW - 24;
  const { barOffsets, mag } = computeChromaticBarOffsets(
    chromSpread.imgHeights,
    reference,
    viewWidthPx,
    effectiveSC,
    REFERENCE_TCA_MM,
  );
  const activeChans = (["R", "G", "B", "V"] as ChromaticChannel[]).filter(
    (ch) => chromSpread.imgHeights[ch] !== undefined,
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
        TCA
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
        const color = channelColor(ch, t);
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
        {formatSpreadUm(chromSpread.tcaMm)}
      </text>
      <text x={midX} y={yMagScale} textAnchor="middle" fill={t.muted} fontSize={fs(7.5)} fontFamily="inherit">
        {Math.round(mag)}
        {"\u00d7"}
      </text>
    </g>
  );
}
