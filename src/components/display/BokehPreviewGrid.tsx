/**
 * BokehPreviewGrid — 2×2 SVG grid rendering bokeh ball density heatmaps
 * at four field positions (Center, 25%, 50%, 75%).
 *
 * Each tile bins the traced ray points into a density grid and renders
 * cells as small rects whose opacity maps to local ray density. This
 * reveals SA-driven brightness profiles (bright rings vs. uniform disks)
 * and vignetting shapes (cat's eye clipping off-axis).
 */

import { useMemo } from "react";
import type { ReactNode } from "react";
import { buildBokehDensityGrid } from "../../optics/aberrationAnalysis.js";
import type { BokehFieldResult, BokehPreviewResult } from "../../optics/aberrationAnalysis.js";
import { BOKEH_DENSITY_GRID_SIZE } from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface BokehPreviewGridProps {
  result: BokehPreviewResult;
  t: Theme;
}

/* ── Layout constants (matches ComaPreviewGrid proportions) ── */
const VB_W = 320;
const VB_H = 312;
const OUTER_PAD_X = 18;
const OUTER_PAD_Y = 18;
const COL_GAP = 14;
const ROW_GAP = 18;
const FOOTER_H = 54;
const TILE_W = (VB_W - OUTER_PAD_X * 2 - COL_GAP) / 2;
const TILE_H = (VB_H - OUTER_PAD_Y * 2 - ROW_GAP - FOOTER_H) / 2;
const TILE_ML = 10;
const TILE_MR = 10;
const TILE_MT = 24;
const TILE_MB = 14;
const PLOT_SIZE = Math.min(TILE_W - TILE_ML - TILE_MR, TILE_H - TILE_MT - TILE_MB);

interface TileGeometry {
  tileX: number;
  tileY: number;
  plotX: number;
  plotY: number;
  plotCX: number;
  plotCY: number;
}

function tileGeometry(index: number): TileGeometry {
  const col = index % 2;
  const row = Math.floor(index / 2);
  const tileX = OUTER_PAD_X + col * (TILE_W + COL_GAP);
  const tileY = OUTER_PAD_Y + row * (TILE_H + ROW_GAP);
  const plotX = tileX + TILE_ML + (TILE_W - TILE_ML - TILE_MR - PLOT_SIZE) / 2;
  const plotY = tileY + TILE_MT;
  return {
    tileX,
    tileY,
    plotX,
    plotY,
    plotCX: plotX + PLOT_SIZE / 2,
    plotCY: plotY + PLOT_SIZE / 2,
  };
}

function TileShell({
  geometry,
  label,
  angleLabel,
  footerLine1,
  footerLine2,
  t,
  children,
}: {
  geometry: TileGeometry;
  label: string;
  angleLabel: string;
  footerLine1: string;
  footerLine2: string;
  t: Theme;
  children: ReactNode;
}) {
  const { tileX, tileY, plotX, plotY, plotCX } = geometry;

  return (
    <g data-bokeh-tile={label}>
      <rect x={tileX} y={tileY} width={TILE_W} height={TILE_H} rx={4} fill={t.panelBg} stroke={t.panelBorder} />
      <text x={tileX + 6} y={tileY + 12} fill={t.label} fontSize={9.5} fontFamily="inherit">
        {label}
      </text>
      <text x={tileX + TILE_W - 6} y={tileY + 12} textAnchor="end" fill={t.muted} fontSize={8.5} fontFamily="inherit">
        {angleLabel}
      </text>

      {/* Dark background for bokeh rendering */}
      <rect x={plotX} y={plotY} width={PLOT_SIZE} height={PLOT_SIZE} rx={3} fill="#111" />

      {children}

      <text x={plotCX} y={tileY + TILE_H - 10} textAnchor="middle" fill={t.muted} fontSize={7.5} fontFamily="inherit">
        {footerLine1}
      </text>
      <text x={plotCX} y={tileY + TILE_H - 2} textAnchor="middle" fill={t.muted} fontSize={7} fontFamily="inherit">
        {footerLine2}
      </text>
    </g>
  );
}

function BokehTileContent({
  field,
  sharedHalfRange,
  geometry,
}: {
  field: BokehFieldResult;
  sharedHalfRange: number;
  geometry: TileGeometry;
}) {
  const { plotX, plotY, plotCX, plotCY } = geometry;

  const cells = useMemo(
    () => buildBokehDensityGrid(field.points, sharedHalfRange, BOKEH_DENSITY_GRID_SIZE),
    [field.points, sharedHalfRange],
  );

  if (!field.usable || cells.length === 0) {
    return (
      <text x={plotCX} y={plotCY} textAnchor="middle" fill="#555" fontSize={8} fontFamily="inherit">
        Insufficient data
      </text>
    );
  }

  const cellSize = PLOT_SIZE / BOKEH_DENSITY_GRID_SIZE;

  /* Map mm coordinates to SVG pixel positions */
  const scale = PLOT_SIZE / (2 * sharedHalfRange);

  return (
    <g>
      {cells.map((cell, i) => {
        const cx = plotCX + cell.x * scale;
        const cy = plotCY + cell.y * scale;
        /* Only render cells within the plot area */
        if (
          cx - cellSize / 2 < plotX ||
          cx + cellSize / 2 > plotX + PLOT_SIZE ||
          cy - cellSize / 2 < plotY ||
          cy + cellSize / 2 > plotY + PLOT_SIZE
        ) {
          return null;
        }
        return (
          <rect
            key={i}
            x={cx - cellSize / 2}
            y={cy - cellSize / 2}
            width={cellSize}
            height={cellSize}
            fill="#fff"
            opacity={cell.density * 0.85 + 0.05}
          />
        );
      })}

      {/* RMS radius ring */}
      {field.rmsRadiusMm > 0 && field.rmsRadiusMm * scale < PLOT_SIZE / 2 ? (
        <circle
          cx={plotCX + field.centroidSagittal * scale}
          cy={plotCY + field.centroidTangential * scale}
          r={field.rmsRadiusMm * scale}
          fill="none"
          stroke="rgba(100,200,255,0.5)"
          strokeWidth={0.5}
          strokeDasharray="2,2"
        />
      ) : null}

      {/* Centroid crosshair */}
      <line
        x1={plotCX + field.centroidSagittal * scale - 3}
        y1={plotCY + field.centroidTangential * scale}
        x2={plotCX + field.centroidSagittal * scale + 3}
        y2={plotCY + field.centroidTangential * scale}
        stroke="rgba(100,200,255,0.6)"
        strokeWidth={0.5}
      />
      <line
        x1={plotCX + field.centroidSagittal * scale}
        y1={plotCY + field.centroidTangential * scale - 3}
        x2={plotCX + field.centroidSagittal * scale}
        y2={plotCY + field.centroidTangential * scale + 3}
        stroke="rgba(100,200,255,0.6)"
        strokeWidth={0.5}
      />
    </g>
  );
}

export default function BokehPreviewGrid({ result, t }: BokehPreviewGridProps) {
  const footerY = OUTER_PAD_Y + 2 * TILE_H + ROW_GAP + 4;

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ width: "100%", maxWidth: 480, display: "block" }}>
      {result.fields.map((field, index) => {
        const geo = tileGeometry(index);
        const angleFmt = field.fieldAngleDeg > 0 ? `${field.fieldAngleDeg.toFixed(1)}°` : "on-axis";
        const transmissionPct = field.usable ? `${(field.transmission * 100).toFixed(0)}% T` : "—";
        const rmsFmt = field.usable ? `RMS ${(field.rmsRadiusMm * 1000).toFixed(1)} µm` : "";

        return (
          <TileShell
            key={field.fieldFraction}
            geometry={geo}
            label={field.label}
            angleLabel={angleFmt}
            footerLine1={transmissionPct}
            footerLine2={rmsFmt}
            t={t}
          >
            <BokehTileContent field={field} sharedHalfRange={result.sharedHalfRangeMm} geometry={geo} />
          </TileShell>
        );
      })}

      {/* Shared scale footer */}
      <text x={VB_W / 2} y={footerY + 14} textAnchor="middle" fill={t.muted} fontSize={8} fontFamily="inherit">
        {`Scale: ±${result.sharedHalfRangeMm >= 0.1 ? result.sharedHalfRangeMm.toFixed(2) : result.sharedHalfRangeMm.toFixed(3)} mm`}
      </text>
      <text x={VB_W / 2} y={footerY + 26} textAnchor="middle" fill={t.muted} fontSize={7.5} fontFamily="inherit">
        {`Defocus: ${Math.abs(result.defocusDeltaMm).toFixed(3)} mm`}
      </text>
    </svg>
  );
}
