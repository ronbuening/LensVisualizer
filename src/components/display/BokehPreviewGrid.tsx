import type { ReactNode } from "react";
import type {
  ApertureSilhouette,
  BokehPreviewConjugateResult,
  BokehPreviewFieldResult,
} from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";
import {
  PREVIEW_GRID_POINT_CLOUD_PLOT_SIZE,
  PREVIEW_GRID_PLOT_HEIGHT,
  PREVIEW_GRID_PLOT_WIDTH,
  PREVIEW_GRID_VIEWBOX_HEIGHT,
  PREVIEW_GRID_VIEWBOX_WIDTH,
  PreviewGridSvg,
  PreviewTileShell,
  diamondPath,
  formatRelativeMm,
  previewTileGeometry,
} from "./RepresentativePreviewGrid.js";
import { formatComaSpan } from "./MeridionalComaPlot.js";

interface BokehPreviewGridProps {
  result: BokehPreviewConjugateResult;
  sharedSpotHalfRangeMm: number;
  t: Theme;
}

interface BokehPreviewLegendProps {
  silhouette: ApertureSilhouette;
  t: Theme;
}

function describeApertureSilhouette(silhouette: ApertureSilhouette): string {
  switch (silhouette.kind) {
    case "circular":
      return "Circular stop silhouette";
    default:
      return "Traced stop silhouette";
  }
}

function apertureSilhouetteGlyph(silhouette: ApertureSilhouette, t: Theme): ReactNode {
  switch (silhouette.kind) {
    case "circular":
      return <circle cx={8} cy={8} r={4.8} fill="none" stroke={t.value} strokeWidth={1.2} />;
    default:
      return <circle cx={8} cy={8} r={4.8} fill="none" stroke={t.value} strokeWidth={1.2} />;
  }
}

function renderBokehTile(field: BokehPreviewFieldResult, index: number, sharedSpotHalfRangeMm: number, t: Theme) {
  const geometry = previewTileGeometry(index);
  const plotInsetX = (PREVIEW_GRID_PLOT_WIDTH - PREVIEW_GRID_POINT_CLOUD_PLOT_SIZE) / 2;
  const plotInsetY = (PREVIEW_GRID_PLOT_HEIGHT - PREVIEW_GRID_POINT_CLOUD_PLOT_SIZE) / 2;
  const spotPlotX = geometry.plotX + plotInsetX;
  const spotPlotY = geometry.plotY + plotInsetY;
  const zeroX = spotPlotX + PREVIEW_GRID_POINT_CLOUD_PLOT_SIZE / 2;
  const zeroY = spotPlotY + PREVIEW_GRID_POINT_CLOUD_PLOT_SIZE / 2;
  const xScale = (sagittalImageHeight: number) =>
    zeroX + (sagittalImageHeight / sharedSpotHalfRangeMm) * (PREVIEW_GRID_POINT_CLOUD_PLOT_SIZE / 2);
  const yScale = (tangentialImageHeight: number) =>
    zeroY - (tangentialImageHeight / sharedSpotHalfRangeMm) * (PREVIEW_GRID_POINT_CLOUD_PLOT_SIZE / 2);
  const tickValues = [-sharedSpotHalfRangeMm, 0, sharedSpotHalfRangeMm];
  const maxWeight = Math.max(...field.points.map((point) => point.weight), 1e-9);
  const centroidX = xScale(field.centroidSagittalImageHeight);
  const centroidY = yScale(field.centroidTangentialImageHeight);
  const rmsRadiusPx = Math.max(
    1.2,
    (field.rmsRadiusMm / sharedSpotHalfRangeMm) * (PREVIEW_GRID_POINT_CLOUD_PLOT_SIZE / 2),
  );
  const clippedPercent = field.sampleCount > 0 ? Math.round((field.clippedSampleCount / field.sampleCount) * 100) : 0;
  const shadedPoints = [...field.points].sort((a, b) => a.weight - b.weight);
  const footerLabel = field.usable ? `RMS ${formatComaSpan(field.rmsRadiusUm)}` : "Insufficient data";

  return (
    <PreviewTileShell
      key={`${field.objectConjugate}-${field.label}`}
      geometry={geometry}
      label={field.label}
      angleLabel={field.usable ? `${field.fieldAngleDeg.toFixed(1)}°` : "Unavailable"}
      footerLabel={footerLabel}
      footerDataAttributeName="data-bokeh-footer"
      footerDataAttributeValue={`${field.objectConjugate}-${field.label}`}
      t={t}
      dataAttributeName="data-bokeh-tile"
    >
      <line
        x1={spotPlotX}
        y1={zeroY}
        x2={spotPlotX + PREVIEW_GRID_POINT_CLOUD_PLOT_SIZE}
        y2={zeroY}
        stroke={t.axis}
        strokeWidth={0.75}
        strokeDasharray="3,3"
      />
      <line
        x1={zeroX}
        y1={spotPlotY}
        x2={zeroX}
        y2={spotPlotY + PREVIEW_GRID_POINT_CLOUD_PLOT_SIZE}
        stroke={t.axis}
        strokeWidth={0.75}
        strokeDasharray="3,3"
      />

      {tickValues.map((tick) => {
        const y = yScale(tick);
        return (
          <g key={`${field.objectConjugate}-${field.label}-${tick}`}>
            <line x1={spotPlotX - 3} y1={y} x2={spotPlotX} y2={y} stroke={t.muted} strokeWidth={0.75} />
            <text x={spotPlotX - 5} y={y + 3} textAnchor="end" fill={t.muted} fontSize={7.5} fontFamily="inherit">
              {formatRelativeMm(tick)}
            </text>
          </g>
        );
      })}

      {field.usable ? (
        <>
          {shadedPoints.map((point) => {
            const normalizedWeight = Math.max(0, Math.min(1, point.weight / maxWeight));
            return (
              <circle
                key={`${field.objectConjugate}-${field.label}-${point.index}`}
                cx={xScale(point.sagittalImageHeight)}
                cy={yScale(point.tangentialImageHeight)}
                r={1.05 + Math.sqrt(normalizedWeight) * 1.1}
                fill={t.value}
                opacity={0.12 + normalizedWeight * 0.52}
              />
            );
          })}

          <circle
            data-bokeh-rms={`${field.objectConjugate}-${field.label}`}
            cx={centroidX}
            cy={centroidY}
            r={rmsRadiusPx}
            fill="none"
            stroke={t.panelBorder}
            strokeWidth={1}
            opacity={0.85}
          />
          <line x1={zeroX - 4} y1={zeroY} x2={zeroX + 4} y2={zeroY} stroke={t.label} strokeWidth={0.9} opacity={0.85} />
          <line x1={zeroX} y1={zeroY - 4} x2={zeroX} y2={zeroY + 4} stroke={t.label} strokeWidth={0.9} opacity={0.85} />
          <path d={diamondPath(centroidX, centroidY, 3)} fill={t.panelBg} stroke={t.label} strokeWidth={0.9} />

          {field.clippedSampleCount > 0 ? (
            <g transform={`translate(${spotPlotX + PREVIEW_GRID_POINT_CLOUD_PLOT_SIZE - 4}, ${spotPlotY + 9})`}>
              <rect
                x={-34}
                y={-7}
                width={34}
                height={11}
                rx={3}
                fill={t.panelBg}
                stroke={t.panelBorder}
                strokeWidth={0.75}
                opacity={0.95}
              />
              <text x={-4} y={1.5} textAnchor="end" fill={t.muted} fontSize={7} fontFamily="inherit">
                Clip {clippedPercent}%
              </text>
            </g>
          ) : null}
        </>
      ) : (
        <text x={zeroX} y={zeroY + 3} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
          Insufficient data
        </text>
      )}
    </PreviewTileShell>
  );
}

export function BokehPreviewLegend({ silhouette, t }: BokehPreviewLegendProps) {
  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    minWidth: 180,
    fontSize: 8.5,
    color: t.muted,
    lineHeight: 1.35,
    fontFamily: "inherit",
  } as const;

  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <div style={itemStyle}>
        <svg viewBox="0 0 16 16" width={16} height={16} aria-hidden="true">
          <line x1={2} y1={8} x2={14} y2={8} stroke={t.label} strokeWidth={1.1} />
          <line x1={8} y1={2} x2={8} y2={14} stroke={t.label} strokeWidth={1.1} />
        </svg>
        <span>Crosshair = chief-ray reference</span>
      </div>
      <div style={itemStyle}>
        <svg viewBox="0 0 16 16" width={16} height={16} aria-hidden="true">
          <circle cx={8} cy={8} r={5} fill="none" stroke={t.panelBorder} strokeWidth={1} />
          <path d={diamondPath(8, 8, 2.5)} fill={t.panelBg} stroke={t.label} strokeWidth={0.9} />
        </svg>
        <span>Diamond / ring = centroid and RMS spot radius</span>
      </div>
      <div style={itemStyle}>
        <svg viewBox="0 0 16 16" width={16} height={16} aria-hidden="true">
          <circle cx={5} cy={8} r={1.6} fill={t.value} opacity={0.18} />
          <circle cx={8} cy={8} r={2.3} fill={t.value} opacity={0.42} />
          <circle cx={10.5} cy={8} r={3.1} fill={t.value} opacity={0.68} />
        </svg>
        <span>Density shading = weighted ray overlap at the image plane</span>
      </div>
      <div style={itemStyle}>
        <svg viewBox="0 0 24 16" width={24} height={16} aria-hidden="true">
          <rect x={1.5} y={2.5} width={20} height={11} rx={3} fill={t.panelBg} stroke={t.panelBorder} />
          <text x={11.5} y={10.8} textAnchor="middle" fill={t.muted} fontSize={5.5} fontFamily="inherit">
            CLIP
          </text>
        </svg>
        <span>Clip badge = blocked rays from optical / mechanical vignetting</span>
      </div>
      <div style={itemStyle}>
        <svg viewBox="0 0 16 16" width={16} height={16} aria-hidden="true">
          {apertureSilhouetteGlyph(silhouette, t)}
        </svg>
        <span>Stop model = {describeApertureSilhouette(silhouette)}</span>
      </div>
    </div>
  );
}

export default function BokehPreviewGrid({ result, sharedSpotHalfRangeMm, t }: BokehPreviewGridProps) {
  return (
    <PreviewGridSvg
      title={`${result.label} bokeh preview grid. Each tile plots sagittal and tangential blur relative to the chief ray on a shared square spot scale.`}
      legend={
        <text
          x={PREVIEW_GRID_VIEWBOX_WIDTH / 2}
          y={PREVIEW_GRID_VIEWBOX_HEIGHT - 3}
          textAnchor="middle"
          fill={t.muted}
          fontSize={8.5}
          fontFamily="inherit"
        >
          Sagittal (horiz.) / tangential (vert.) scale relative to chief ray (mm)
        </text>
      }
    >
      {result.fields.map((field, index) => renderBokehTile(field, index, sharedSpotHalfRangeMm, t))}
    </PreviewGridSvg>
  );
}
