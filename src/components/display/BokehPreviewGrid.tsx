/**
 * BokehPreviewGrid — 2×2 SVG grid showing simulated bokeh ball footprints at
 * four field positions (Center, 25%, 50%, 75%).
 *
 * Each tile traces a fixed 225-sample circular pupil pattern and plots sagittal
 * (horizontal) and tangential (vertical) image-plane deviations relative to the
 * chief ray on a shared square spot scale that includes 15 % padding so no dot
 * is ever clipped at the tile boundary.
 */

import type {
  BokehPreviewGrid as BokehPreviewGridData,
  BokehPreviewFieldResult,
} from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface BokehPreviewGridProps {
  grid: BokehPreviewGridData;
  t: Theme;
  focusLabel: "Infinity" | "Near";
}

const VB_W = 320;
const VB_H = 312;
const OUTER_PAD_X = 18;
const OUTER_PAD_Y = 18;
const COL_GAP = 14;
const ROW_GAP = 18;
const FOOTER_H = 54;
const TILE_W = (VB_W - OUTER_PAD_X * 2 - COL_GAP) / 2;
const TILE_H = (VB_H - OUTER_PAD_Y * 2 - ROW_GAP - FOOTER_H) / 2;
const TILE_ML = 28;
const TILE_MR = 10;
const TILE_MT = 24;
const TILE_MB = 22;
const PLOT_W = TILE_W - TILE_ML - TILE_MR;
const PLOT_H = TILE_H - TILE_MT - TILE_MB;
const POINT_CLOUD_PLOT_SIZE = Math.min(PLOT_W, PLOT_H);

/** Factor by which sharedSpotHalfRangeMm exceeds the raw max extent (15 % padding). */
const SCALE_PADDING_FACTOR = 1.15;

interface TileGeometry {
  tileX: number;
  tileY: number;
  plotX: number;
  plotY: number;
  zeroX: number;
  zeroY: number;
  spotPlotX: number;
  spotPlotY: number;
}

function tileGeometry(index: number): TileGeometry {
  const col = index % 2;
  const row = Math.floor(index / 2);
  const tileX = OUTER_PAD_X + col * (TILE_W + COL_GAP);
  const tileY = OUTER_PAD_Y + row * (TILE_H + ROW_GAP);
  const plotX = tileX + TILE_ML;
  const plotY = tileY + TILE_MT;
  const plotInsetX = (PLOT_W - POINT_CLOUD_PLOT_SIZE) / 2;
  const plotInsetY = (PLOT_H - POINT_CLOUD_PLOT_SIZE) / 2;
  const spotPlotX = plotX + plotInsetX;
  const spotPlotY = plotY + plotInsetY;
  return {
    tileX,
    tileY,
    plotX,
    plotY,
    zeroX: spotPlotX + POINT_CLOUD_PLOT_SIZE / 2,
    zeroY: spotPlotY + POINT_CLOUD_PLOT_SIZE / 2,
    spotPlotX,
    spotPlotY,
  };
}

function renderBokehTile(field: BokehPreviewFieldResult, index: number, sharedSpotHalfRangeMm: number, t: Theme) {
  const geometry = tileGeometry(index);
  const { tileX, tileY, spotPlotX, spotPlotY, zeroX, zeroY } = geometry;

  // Industry convention: sagittal (X deviation) on horizontal, tangential (Y deviation) on vertical
  const xScale = (sagittalImageHeight: number) =>
    zeroX + (sagittalImageHeight / sharedSpotHalfRangeMm) * (POINT_CLOUD_PLOT_SIZE / 2);
  const yScale = (tangentialImageHeight: number) =>
    zeroY - (tangentialImageHeight / sharedSpotHalfRangeMm) * (POINT_CLOUD_PLOT_SIZE / 2);

  // Aperture circle: shows the raw extent before the 15 % scale padding
  const apertureCircleR = POINT_CLOUD_PLOT_SIZE / 2 / SCALE_PADDING_FACTOR;

  const vignetteLabel =
    field.usable && field.sampleCount > 0 ? `${(field.vignetteTransmission * 100).toFixed(0)}% T` : null;

  return (
    <g key={field.label} data-bokeh-tile={field.label}>
      {/* Tile background */}
      <rect x={tileX} y={tileY} width={TILE_W} height={TILE_H} rx={4} fill={t.panelBg} stroke={t.panelBorder} />

      {/* Field name top-left */}
      <text x={tileX + 6} y={tileY + 12} fill={t.label} fontSize={9.5} fontFamily="inherit">
        {field.label}
      </text>
      {/* Field angle top-right */}
      <text x={tileX + TILE_W - 6} y={tileY + 12} textAnchor="end" fill={t.muted} fontSize={8.5} fontFamily="inherit">
        {field.usable ? `${field.fieldAngleDeg.toFixed(1)}°` : "Unavailable"}
      </text>

      {/* Plot area border */}
      <rect
        x={geometry.plotX}
        y={geometry.plotY}
        width={PLOT_W}
        height={PLOT_H}
        rx={3}
        fill="none"
        stroke={t.panelBorder}
        strokeWidth={0.75}
      />

      {/* Dashed crosshair axes */}
      <line
        x1={spotPlotX}
        y1={zeroY}
        x2={spotPlotX + POINT_CLOUD_PLOT_SIZE}
        y2={zeroY}
        stroke={t.axis}
        strokeWidth={0.75}
        strokeDasharray="3,3"
      />
      <line
        x1={zeroX}
        y1={spotPlotY}
        x2={zeroX}
        y2={spotPlotY + POINT_CLOUD_PLOT_SIZE}
        stroke={t.axis}
        strokeWidth={0.75}
        strokeDasharray="3,3"
      />

      {field.usable ? (
        <>
          {/* Aperture reference circle at the un-padded scale boundary */}
          <circle
            cx={zeroX}
            cy={zeroY}
            r={apertureCircleR}
            fill="none"
            stroke={t.panelBorder}
            strokeWidth={0.75}
            opacity={0.6}
          />

          {/* Point cloud: equal-area sample weight encodes SA intensity distribution */}
          {field.points.map((point) => (
            <circle
              key={`${field.label}-${point.index}`}
              cx={xScale(point.sagittalImageHeight)}
              cy={yScale(point.tangentialImageHeight)}
              r={1.6}
              fill={t.value}
              opacity={0.65}
            />
          ))}

          {/* Vignetting transmission label bottom-left */}
          {vignetteLabel !== null ? (
            <text x={tileX + 6} y={tileY + TILE_H - 5} fill={t.muted} fontSize={7.5} fontFamily="inherit">
              {vignetteLabel}
            </text>
          ) : null}
        </>
      ) : (
        <text x={zeroX} y={zeroY + 3} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
          Insufficient data
        </text>
      )}
    </g>
  );
}

export default function BokehPreviewGrid({ grid, t, focusLabel }: BokehPreviewGridProps) {
  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
      <title>
        {`${focusLabel} source bokeh preview: chief-ray-referenced real-ray spot grid. Each tile traces a fixed circular pupil pattern and plots tangential and sagittal image heights relative to the chief ray on a shared square spot scale.`}
      </title>
      {grid.fields.map((field, index) => renderBokehTile(field, index, grid.sharedSpotHalfRangeMm, t))}
      <text x={VB_W / 2} y={VB_H - 3} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
        Sagittal (horiz.) / tangential (vert.) relative to chief ray (mm)
      </text>
    </svg>
  );
}
