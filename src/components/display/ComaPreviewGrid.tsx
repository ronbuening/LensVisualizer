/**
 * ComaPreviewGrid — Representative meridional coma previsualization shown as
 * a 2×2 SVG grid across the field.
 *
 * Each tile is centered on the chief-ray intercept for that field position so
 * users can compare the asymmetric footprint growth without conflating it with
 * the absolute image height shift across the frame.
 */

import type { ReactNode } from "react";
import type {
  ComaPreviewFieldResult,
  ComaPreviewResult,
  EstimatedComaPreviewFieldResult,
  EstimatedComaPreviewResult,
} from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface ComaPreviewGridProps {
  result: ComaPreviewResult | EstimatedComaPreviewResult;
  t: Theme;
  mode?: "meridional" | "estimated";
}

const VB_W = 320;
const VB_H = 268;
const OUTER_PAD_X = 18;
const OUTER_PAD_Y = 18;
const COL_GAP = 14;
const ROW_GAP = 18;
const TILE_W = (VB_W - OUTER_PAD_X * 2 - COL_GAP) / 2;
const TILE_H = (VB_H - OUTER_PAD_Y * 2 - ROW_GAP) / 2;
const TILE_ML = 28;
const TILE_MR = 10;
const TILE_MT = 24;
const TILE_MB = 22;
const PLOT_W = TILE_W - TILE_ML - TILE_MR;
const PLOT_H = TILE_H - TILE_MT - TILE_MB;

interface TileGeometry {
  tileX: number;
  tileY: number;
  plotX: number;
  plotY: number;
  zeroX: number;
  zeroY: number;
}

function formatRelativeMm(value: number): string {
  if (Math.abs(value) < 1e-9) return "0";
  if (Math.abs(value) >= 0.1) return value.toFixed(1);
  return value.toFixed(2);
}

function tileGeometry(index: number): TileGeometry {
  const col = index % 2;
  const row = Math.floor(index / 2);
  const tileX = OUTER_PAD_X + col * (TILE_W + COL_GAP);
  const tileY = OUTER_PAD_Y + row * (TILE_H + ROW_GAP);
  const plotX = tileX + TILE_ML;
  const plotY = tileY + TILE_MT;
  return {
    tileX,
    tileY,
    plotX,
    plotY,
    zeroX: plotX + PLOT_W / 2,
    zeroY: plotY + PLOT_H / 2,
  };
}

function TileShell({
  geometry,
  label,
  angleLabel,
  footerLabel,
  t,
  children,
}: {
  geometry: TileGeometry;
  label: string;
  angleLabel: string;
  footerLabel: string;
  t: Theme;
  children: ReactNode;
}) {
  const { tileX, tileY, plotX, plotY, zeroX } = geometry;

  return (
    <g key={label} data-coma-tile={label}>
      <rect x={tileX} y={tileY} width={TILE_W} height={TILE_H} rx={4} fill={t.panelBg} stroke={t.panelBorder} />
      <text x={tileX + 6} y={tileY + 12} fill={t.label} fontSize={9.5} fontFamily="inherit">
        {label}
      </text>
      <text x={tileX + TILE_W - 6} y={tileY + 12} textAnchor="end" fill={t.muted} fontSize={8.5} fontFamily="inherit">
        {angleLabel}
      </text>

      <rect
        x={plotX}
        y={plotY}
        width={PLOT_W}
        height={PLOT_H}
        rx={3}
        fill="none"
        stroke={t.panelBorder}
        strokeWidth={0.75}
      />

      {children}

      <text x={zeroX} y={tileY + TILE_H - 4} textAnchor="middle" fill={t.muted} fontSize={7.5} fontFamily="inherit">
        {footerLabel}
      </text>
    </g>
  );
}

function renderMeridionalTile(
  field: ComaPreviewFieldResult,
  index: number,
  sharedRelativeHalfRangeMm: number,
  t: Theme,
) {
  const geometry = tileGeometry(index);
  const { plotX, plotY, zeroX, zeroY } = geometry;
  const yScale = (relativeHeight: number) => zeroY - (relativeHeight / sharedRelativeHalfRangeMm) * (PLOT_H / 2);
  const xScale = (pupilFraction: number) => plotX + ((pupilFraction + 1) / 2) * PLOT_W;
  const tickValues = [-sharedRelativeHalfRangeMm, 0, sharedRelativeHalfRangeMm];

  const validSamples = field.samples.filter(
    (sample): sample is typeof sample & { relativeImageHeight: number } =>
      sample.relativeImageHeight !== null && sample.imageHeight !== null && !sample.clipped,
  );
  const polylinePoints = validSamples
    .map((sample) => `${xScale(sample.pupilFraction).toFixed(1)},${yScale(sample.relativeImageHeight).toFixed(1)}`)
    .join(" ");

  return (
    <TileShell
      geometry={geometry}
      label={field.label}
      angleLabel={field.usable ? `${field.fieldAngleDeg.toFixed(1)}°` : "Unavailable"}
      footerLabel="Chief-ray-centered image height (mm)"
      t={t}
    >
      <line
        x1={plotX}
        y1={zeroY}
        x2={plotX + PLOT_W}
        y2={zeroY}
        stroke={t.axis}
        strokeWidth={0.75}
        strokeDasharray="3,3"
      />
      <line
        x1={zeroX}
        y1={plotY}
        x2={zeroX}
        y2={plotY + PLOT_H}
        stroke={t.axis}
        strokeWidth={0.75}
        strokeDasharray="3,3"
      />

      {tickValues.map((tick) => {
        const y = yScale(tick);
        return (
          <g key={`${field.label}-${tick}`}>
            <line x1={plotX - 3} y1={y} x2={plotX} y2={y} stroke={t.muted} strokeWidth={0.75} />
            <text x={plotX - 5} y={y + 3} textAnchor="end" fill={t.muted} fontSize={7.5} fontFamily="inherit">
              {formatRelativeMm(tick)}
            </text>
          </g>
        );
      })}

      {field.usable ? (
        <>
          {polylinePoints ? (
            <polyline points={polylinePoints} fill="none" stroke={t.value} strokeWidth={1.5} strokeLinejoin="round" />
          ) : null}

          {validSamples.map((sample) => (
            <circle
              key={`${field.label}-${sample.index}`}
              cx={xScale(sample.pupilFraction)}
              cy={yScale(sample.relativeImageHeight)}
              r={1.8}
              fill={Math.abs(sample.pupilFraction) < 1e-9 ? t.label : t.value}
            />
          ))}

          {field.samples
            .filter((sample) => sample.clipped)
            .map((sample) => (
              <line
                key={`${field.label}-clipped-${sample.index}`}
                x1={xScale(sample.pupilFraction) - 2.5}
                y1={plotY + PLOT_H - 8}
                x2={xScale(sample.pupilFraction) + 2.5}
                y2={plotY + PLOT_H - 3}
                stroke={t.muted}
                strokeWidth={1}
              />
            ))}
        </>
      ) : (
        <text x={zeroX} y={zeroY + 3} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
          Insufficient data
        </text>
      )}
    </TileShell>
  );
}

function renderEstimatedTile(
  field: EstimatedComaPreviewFieldResult,
  index: number,
  sharedTangentialHalfRangeMm: number,
  normalizedSagittalHalfRange: number,
  t: Theme,
) {
  const geometry = tileGeometry(index);
  const { plotX, plotY, zeroX, zeroY } = geometry;
  const xScale = (tangentialImageHeight: number) =>
    zeroX + (tangentialImageHeight / sharedTangentialHalfRangeMm) * (PLOT_W / 2);
  const yScale = (sagittalNormalized: number) =>
    zeroY - (sagittalNormalized / normalizedSagittalHalfRange) * (PLOT_H / 2);
  const tickValues = [-normalizedSagittalHalfRange, 0, normalizedSagittalHalfRange];
  const maxWeight = Math.max(...field.points.map((point) => point.weight), 1e-9);

  return (
    <TileShell
      geometry={geometry}
      label={field.label}
      angleLabel={field.usable ? `${field.fieldAngleDeg.toFixed(1)}°` : "Unavailable"}
      footerLabel="Estimated 2D point appearance"
      t={t}
    >
      <line
        x1={plotX}
        y1={zeroY}
        x2={plotX + PLOT_W}
        y2={zeroY}
        stroke={t.axis}
        strokeWidth={0.75}
        strokeDasharray="3,3"
      />
      <line
        x1={zeroX}
        y1={plotY}
        x2={zeroX}
        y2={plotY + PLOT_H}
        stroke={t.axis}
        strokeWidth={0.75}
        strokeDasharray="3,3"
      />

      {tickValues.map((tick) => {
        const y = yScale(tick);
        return (
          <g key={`${field.label}-${tick}`}>
            <line x1={plotX - 3} y1={y} x2={plotX} y2={y} stroke={t.muted} strokeWidth={0.75} />
            <text x={plotX - 5} y={y + 3} textAnchor="end" fill={t.muted} fontSize={7.5} fontFamily="inherit">
              {tick.toFixed(0)}
            </text>
          </g>
        );
      })}

      {field.usable ? (
        field.points.map((point) => (
          <circle
            key={`${field.label}-${point.index}`}
            cx={xScale(point.tangentialImageHeight)}
            cy={yScale(point.sagittalNormalized)}
            r={1.5}
            fill={t.value}
            opacity={Math.max(0.12, Math.min(0.85, point.weight / maxWeight))}
          />
        ))
      ) : (
        <text x={zeroX} y={zeroY + 3} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
          Insufficient data
        </text>
      )}
    </TileShell>
  );
}

export default function ComaPreviewGrid({ result, t, mode = "meridional" }: ComaPreviewGridProps) {
  if (mode === "estimated") {
    const estimatedResult = result as EstimatedComaPreviewResult;

    return (
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
        <title>
          Estimated 2D coma appearance. Each tile uses the real chief-ray-centered tangential spread and expands each
          meridional slice across its circular pupil chord to synthesize a normalized sagittal thickness estimate.
        </title>
        {estimatedResult.fields.map((field, index) =>
          renderEstimatedTile(
            field,
            index,
            estimatedResult.sharedTangentialHalfRangeMm,
            estimatedResult.normalizedSagittalHalfRange,
            t,
          ),
        )}
        <text x={VB_W / 2} y={VB_H - 2} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
          Tangential image height (mm) with normalized sagittal estimate
        </text>
      </svg>
    );
  }

  const meridionalResult = result as ComaPreviewResult;
  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
      <title>
        Representative meridional coma preview. Each tile shows a chief-ray-centered off-axis footprint, not a full 2D
        spot diagram.
      </title>
      {meridionalResult.fields.map((field, index) =>
        renderMeridionalTile(field, index, meridionalResult.sharedRelativeHalfRangeMm, t),
      )}
      <text x={VB_W / 2} y={VB_H - 2} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
        Pupil fraction across the entrance pupil
      </text>
    </svg>
  );
}
