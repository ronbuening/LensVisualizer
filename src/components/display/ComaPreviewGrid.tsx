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
  ComaPointCloudPreviewFieldResult,
  ComaPointCloudPreviewResult,
  ComaPreviewFieldResult,
  ComaPreviewResult,
} from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface ComaPreviewGridProps {
  result: ComaPreviewResult | ComaPointCloudPreviewResult;
  t: Theme;
  mode?: "meridional" | "pointCloud";
  pointCloudStyle?: "traced" | "idealized";
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

function diamondPath(cx: number, cy: number, size: number): string {
  return `M ${cx} ${cy - size} L ${cx + size} ${cy} L ${cx} ${cy + size} L ${cx - size} ${cy} Z`;
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
    <g data-coma-tile={label}>
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
      key={field.label}
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

function renderPointCloudTile(
  field: ComaPointCloudPreviewFieldResult,
  index: number,
  sharedSpotHalfRangeMm: number,
  t: Theme,
  style: "traced" | "idealized",
) {
  const geometry = tileGeometry(index);
  const plotInsetX = (PLOT_W - POINT_CLOUD_PLOT_SIZE) / 2;
  const plotInsetY = (PLOT_H - POINT_CLOUD_PLOT_SIZE) / 2;
  const spotPlotX = geometry.plotX + plotInsetX;
  const spotPlotY = geometry.plotY + plotInsetY;
  const zeroX = spotPlotX + POINT_CLOUD_PLOT_SIZE / 2;
  const zeroY = spotPlotY + POINT_CLOUD_PLOT_SIZE / 2;
  // Industry convention: sagittal (X-deviation) on horizontal, tangential (Y-deviation) on vertical
  const xScale = (sagittalImageHeight: number) =>
    zeroX + (sagittalImageHeight / sharedSpotHalfRangeMm) * (POINT_CLOUD_PLOT_SIZE / 2);
  const yScale = (tangentialImageHeight: number) =>
    zeroY - (tangentialImageHeight / sharedSpotHalfRangeMm) * (POINT_CLOUD_PLOT_SIZE / 2);
  const tickValues = [-sharedSpotHalfRangeMm, 0, sharedSpotHalfRangeMm];
  const maxWeight = Math.max(...field.points.map((point) => point.weight), 1e-9);
  const centroidX = xScale(field.centroidSagittalImageHeight);
  const centroidY = yScale(field.centroidTangentialImageHeight);
  const rmsRadiusPx = Math.max(1.2, (field.rmsRadiusMm / sharedSpotHalfRangeMm) * (POINT_CLOUD_PLOT_SIZE / 2));
  const tailDirection =
    Math.abs(field.centroidTangentialImageHeight) > 1e-9
      ? Math.sign(field.centroidTangentialImageHeight)
      : Math.abs(field.maxRelativeTangentialImageHeight) >= Math.abs(field.minRelativeTangentialImageHeight)
        ? 1
        : -1;
  const forwardExtent =
    tailDirection >= 0
      ? Math.max(field.maxRelativeTangentialImageHeight, field.centroidTangentialImageHeight + field.rmsRadiusMm)
      : Math.min(field.minRelativeTangentialImageHeight, field.centroidTangentialImageHeight - field.rmsRadiusMm);
  const rearExtent =
    tailDirection >= 0
      ? Math.min(field.minRelativeTangentialImageHeight, field.centroidTangentialImageHeight - field.rmsRadiusMm * 0.9)
      : Math.max(field.maxRelativeTangentialImageHeight, field.centroidTangentialImageHeight + field.rmsRadiusMm * 0.9);
  const comaLength = Math.max(Math.abs(forwardExtent - rearExtent), field.rmsRadiusMm * 2.2, 1e-6);
  // Seidel 3rd-order coma: 60-degree cone, sagittal extent ≈ 1/3 tangential.
  // Half-width at widest point ≈ comaLength * tan(30°) ≈ 0.33 * comaLength.
  const comaHalfWidth = Math.max(
    Math.abs(field.maxRelativeSagittalImageHeight),
    Math.abs(field.minRelativeSagittalImageHeight),
    field.rmsRadiusMm * 0.6,
    comaLength * 0.3,
  );
  // Tangential extent along vertical (yScale), sagittal half-width along horizontal (xScale)
  const shoulderT = forwardExtent - tailDirection * Math.max(comaLength * 0.33, field.rmsRadiusMm * 1.1, 1e-6);
  const noseT = rearExtent - tailDirection * Math.max(comaLength * 0.1, field.rmsRadiusMm * 0.25, 1e-6);
  const backT = noseT - tailDirection * Math.max(comaLength * 0.15, field.rmsRadiusMm * 0.3, 1e-6);
  const idealizedPath = `M ${xScale(comaHalfWidth * 0.4).toFixed(1)} ${yScale(backT).toFixed(1)}
    C ${xScale(comaHalfWidth).toFixed(1)} ${yScale(rearExtent).toFixed(1)} ${xScale(comaHalfWidth * 0.85).toFixed(1)} ${yScale(shoulderT).toFixed(1)} ${xScale(0).toFixed(1)} ${yScale(forwardExtent).toFixed(1)}
    C ${xScale(-comaHalfWidth * 0.85).toFixed(1)} ${yScale(shoulderT).toFixed(1)} ${xScale(-comaHalfWidth).toFixed(1)} ${yScale(rearExtent).toFixed(1)} ${xScale(-comaHalfWidth * 0.4).toFixed(1)} ${yScale(backT).toFixed(1)}
    C ${xScale(-comaHalfWidth * 0.08).toFixed(1)} ${yScale(noseT).toFixed(1)} ${xScale(comaHalfWidth * 0.08).toFixed(1)} ${yScale(noseT).toFixed(1)} ${xScale(comaHalfWidth * 0.4).toFixed(1)} ${yScale(backT).toFixed(1)} Z`;

  return (
    <TileShell
      key={field.label}
      geometry={geometry}
      label={field.label}
      angleLabel={field.usable ? `${field.fieldAngleDeg.toFixed(1)}°` : "Unavailable"}
      footerLabel={style === "traced" ? "Traced real-ray spot plot" : "Idealized coma sketch"}
      t={t}
    >
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
      <line x1={zeroX - 4} y1={zeroY} x2={zeroX + 4} y2={zeroY} stroke={t.label} strokeWidth={0.9} opacity={0.85} />
      <line x1={zeroX} y1={zeroY - 4} x2={zeroX} y2={zeroY + 4} stroke={t.label} strokeWidth={0.9} opacity={0.85} />

      {tickValues.map((tick) => {
        const y = yScale(tick);
        return (
          <g key={`${field.label}-${tick}`}>
            <line x1={spotPlotX - 3} y1={y} x2={spotPlotX} y2={y} stroke={t.muted} strokeWidth={0.75} />
            <text x={spotPlotX - 5} y={y + 3} textAnchor="end" fill={t.muted} fontSize={7.5} fontFamily="inherit">
              {formatRelativeMm(tick)}
            </text>
          </g>
        );
      })}

      {field.usable ? (
        <>
          <circle
            cx={centroidX}
            cy={centroidY}
            r={rmsRadiusPx}
            fill="none"
            stroke={t.panelBorder}
            strokeWidth={1}
            opacity={0.85}
          />
          <path d={diamondPath(centroidX, centroidY, 3)} fill={t.panelBg} stroke={t.label} strokeWidth={0.9} />
          {style === "traced" ? (
            field.points.map((point) => (
              <circle
                key={`${field.label}-${point.index}`}
                cx={xScale(point.sagittalImageHeight)}
                cy={yScale(point.tangentialImageHeight)}
                r={1.3 + (point.weight / maxWeight) * 0.8}
                fill={t.value}
                opacity={Math.max(0.12, Math.min(0.85, point.weight / maxWeight))}
              />
            ))
          ) : (
            <>
              <line
                x1={zeroX}
                y1={zeroY}
                x2={centroidX}
                y2={centroidY}
                stroke={t.panelBorder}
                strokeWidth={1}
                strokeDasharray="3,2"
                opacity={0.85}
              />
              <path d={idealizedPath} fill={t.value} opacity={0.18} stroke={t.value} strokeWidth={1.4} />
            </>
          )}
        </>
      ) : (
        <text x={zeroX} y={zeroY + 3} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
          Insufficient data
        </text>
      )}
    </TileShell>
  );
}

export default function ComaPreviewGrid({
  result,
  t,
  mode = "meridional",
  pointCloudStyle = "traced",
}: ComaPreviewGridProps) {
  if (mode === "pointCloud") {
    const pointCloudResult = result as ComaPointCloudPreviewResult;

    return (
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
        <title>
          {pointCloudStyle === "traced"
            ? "Chief-ray-referenced real-ray spot grid. Each tile traces a fixed circular pupil pattern and plots tangential and sagittal image heights relative to the chief ray on a shared square spot scale."
            : "Idealized coma comparison grid. Each tile converts the traced spot extent into a normalized textbook-style coma sketch on the same shared square spot scale."}
        </title>
        {pointCloudResult.fields.map((field, index) =>
          renderPointCloudTile(field, index, pointCloudResult.sharedSpotHalfRangeMm, t, pointCloudStyle),
        )}
        <g transform={`translate(${OUTER_PAD_X}, ${VB_H - 42})`}>
          <line x1={0} y1={0} x2={8} y2={0} stroke={t.label} strokeWidth={0.9} />
          <line x1={4} y1={-4} x2={4} y2={4} stroke={t.label} strokeWidth={0.9} />
          <text x={12} y={3} fill={t.muted} fontSize={7.5} fontFamily="inherit">
            Crosshair = chief-ray reference
          </text>
          <path d={diamondPath(0, 12, 2.6)} fill={t.panelBg} stroke={t.label} strokeWidth={0.9} />
          <text x={9} y={15} fill={t.muted} fontSize={7.5} fontFamily="inherit">
            Diamond = centroid
          </text>
          <circle cx={108} cy={12} r={3.3} fill="none" stroke={t.panelBorder} strokeWidth={1} />
          <text x={116} y={15} fill={t.muted} fontSize={7.5} fontFamily="inherit">
            Circle = RMS radius
          </text>
        </g>
        {pointCloudStyle === "traced" ? (
          <g transform={`translate(${OUTER_PAD_X + 210}, ${VB_H - 30})`}>
            <circle cx={0} cy={0} r={2.2} fill={t.value} opacity={0.75} />
            <text x={8} y={3} fill={t.muted} fontSize={7.5} fontFamily="inherit">
              Dot size / opacity = sample weight
            </text>
          </g>
        ) : (
          <g transform={`translate(${OUTER_PAD_X + 192}, ${VB_H - 30})`}>
            <path d="M 0 -3 C 8 -6 14 -4 20 0 C 14 4 8 6 0 3 C 3 1 3 -1 0 -3 Z" fill={t.value} opacity={0.18} />
            <path
              d="M 0 -3 C 8 -6 14 -4 20 0 C 14 4 8 6 0 3 C 3 1 3 -1 0 -3 Z"
              fill="none"
              stroke={t.value}
              strokeWidth={1.1}
            />
            <text x={28} y={3} fill={t.muted} fontSize={7.5} fontFamily="inherit">
              Outline = idealized coma footprint
            </text>
          </g>
        )}
        <text x={VB_W / 2} y={VB_H - 3} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
          Sagittal (horiz.) / tangential (vert.) scale relative to chief ray (mm)
        </text>
      </svg>
    );
  }

  const meridionalResult = result as ComaPreviewResult;
  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
      <title>
        Representative meridional ray-fan preview. Each tile shows a chief-ray-centered off-axis footprint, not a full
        2D spot diagram.
      </title>
      {meridionalResult.fields.map((field, index) =>
        renderMeridionalTile(field, index, meridionalResult.sharedRelativeHalfRangeMm, t),
      )}
      <text x={VB_W / 2} y={VB_H - 3} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
        Pupil fraction across the entrance pupil
      </text>
    </svg>
  );
}
