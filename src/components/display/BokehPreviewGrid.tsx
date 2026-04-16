/**
 * BokehPreviewGrid — 2×2 SVG grid rendering a circularized spherical-aberration
 * brightness disk plus a secondary mechanical-vignetting pupil inset.
 *
 * The main disk uses the radial brightness profile derived from the traced image-
 * plane point cloud, so the SA character stays readable even when off-axis pupil
 * clipping becomes severe. The inset shows the surviving pupil footprint itself.
 */

import type { ReactNode } from "react";
import { describeBokehDefocusSide } from "../../optics/aberrationAnalysis.js";
import type {
  BokehBrightnessCharacter,
  BokehFieldResult,
  BokehPreviewResult,
} from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface BokehPreviewGridProps {
  result: BokehPreviewResult;
  t: Theme;
}

/* ── Layout constants ── */
const VB_W = 320;
const VB_H = 326;
const OUTER_PAD_X = 18;
const OUTER_PAD_Y = 18;
const COL_GAP = 14;
const ROW_GAP = 18;
const FOOTER_H = 68;
const TILE_W = (VB_W - OUTER_PAD_X * 2 - COL_GAP) / 2;
const TILE_H = (VB_H - OUTER_PAD_Y * 2 - ROW_GAP - FOOTER_H) / 2;
const TILE_ML = 10;
const TILE_MR = 10;
const TILE_MT = 24;
const TILE_MB = 16;
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

function formatCharacterLabel(character: BokehBrightnessCharacter): string {
  switch (character) {
    case "edge-bright":
      return "EDGE-BRIGHT";
    case "center-bright":
      return "CENTER-BRIGHT";
    default:
      return "NEUTRAL";
  }
}

function characterColor(character: BokehBrightnessCharacter, theme: Theme): string {
  if (character === "neutral") return theme.muted;
  return theme.value;
}

function circlePath(cx: number, cy: number, radius: number): string {
  if (radius <= 0) return "";
  return `M ${cx - radius} ${cy} a ${radius} ${radius} 0 1 0 ${radius * 2} 0 a ${radius} ${radius} 0 1 0 ${-radius * 2} 0`;
}

function annulusPath(cx: number, cy: number, innerRadius: number, outerRadius: number): string {
  if (outerRadius <= 0) return "";
  if (innerRadius <= 0) return circlePath(cx, cy, outerRadius);
  return `${circlePath(cx, cy, outerRadius)} ${circlePath(cx, cy, innerRadius)}`;
}

function TileShell({
  geometry,
  label,
  angleLabel,
  footerLine1,
  footerLine2,
  footerLine3,
  footerLine1Color,
  t,
  children,
}: {
  geometry: TileGeometry;
  label: string;
  angleLabel: string;
  footerLine1: string;
  footerLine2: string;
  footerLine3?: string;
  footerLine1Color: string;
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

      <rect x={plotX} y={plotY} width={PLOT_SIZE} height={PLOT_SIZE} rx={3} fill="#101010" />

      {children}

      <text
        x={plotCX}
        y={tileY + TILE_H - 18}
        textAnchor="middle"
        fill={footerLine1Color}
        fontSize={7.7}
        fontFamily="inherit"
      >
        {footerLine1}
      </text>
      <text x={plotCX} y={tileY + TILE_H - 10} textAnchor="middle" fill={t.muted} fontSize={7.2} fontFamily="inherit">
        {footerLine2}
      </text>
      {footerLine3 ? (
        <text x={plotCX} y={tileY + TILE_H - 2} textAnchor="middle" fill={t.muted} fontSize={7.2} fontFamily="inherit">
          {footerLine3}
        </text>
      ) : null}
    </g>
  );
}

function CircularizedBrightnessDisk({
  field,
  geometry,
  theme,
}: {
  field: BokehFieldResult;
  geometry: TileGeometry;
  theme: Theme;
}) {
  const { plotCX, plotCY } = geometry;
  const diskRadius = PLOT_SIZE * 0.34;

  if (!field.usable || field.radialProfile.bins.length === 0) {
    return (
      <text x={plotCX} y={plotCY} textAnchor="middle" fill="#666" fontSize={8} fontFamily="inherit">
        Insufficient data
      </text>
    );
  }

  return (
    <g>
      <circle cx={plotCX} cy={plotCY} r={diskRadius} fill="#050505" stroke="rgba(255,255,255,0.2)" strokeWidth={0.6} />
      {field.radialProfile.bins
        .slice()
        .reverse()
        .map((bin) => {
          const outerRadius = diskRadius * bin.outerRadiusFraction;
          const innerRadius = diskRadius * bin.innerRadiusFraction;
          if (outerRadius <= 0 || bin.density <= 0) return null;
          return (
            <path
              key={`${bin.innerRadiusFraction}-${bin.outerRadiusFraction}`}
              d={annulusPath(plotCX, plotCY, innerRadius, outerRadius)}
              fill="#fff"
              fillRule="evenodd"
              opacity={0.08 + bin.density * 0.82}
            />
          );
        })}
      <circle
        cx={plotCX}
        cy={plotCY}
        r={diskRadius}
        fill="none"
        stroke={theme.panelBorder}
        strokeOpacity={0.8}
        strokeWidth={0.5}
      />
    </g>
  );
}

function MechanicalInset({
  field,
  geometry,
  theme,
}: {
  field: BokehFieldResult;
  geometry: TileGeometry;
  theme: Theme;
}) {
  const insetSize = PLOT_SIZE * 0.34;
  const insetX = geometry.plotX + PLOT_SIZE - insetSize - 4;
  const insetY = geometry.plotY + 4;
  const insetCX = insetX + insetSize / 2;
  const insetCY = insetY + insetSize / 2;
  const sampleScale = insetSize * 0.38;

  return (
    <g>
      <rect
        x={insetX}
        y={insetY}
        width={insetSize}
        height={insetSize}
        rx={3}
        fill="#171717"
        stroke={theme.panelBorder}
      />
      <circle cx={insetCX} cy={insetCY} r={sampleScale} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth={0.5} />
      {field.pupilFootprint.samples.map((sample) => (
        <circle
          key={sample.index}
          cx={insetCX + sample.xFraction * sampleScale}
          cy={insetCY + sample.yFraction * sampleScale}
          r={1}
          fill="#fff"
          opacity={Math.min(0.9, 0.25 + sample.weight * 120)}
        />
      ))}
      <line
        x1={insetCX + field.pupilFootprint.centroidSagittal * sampleScale - 2.5}
        y1={insetCY + field.pupilFootprint.centroidTangential * sampleScale}
        x2={insetCX + field.pupilFootprint.centroidSagittal * sampleScale + 2.5}
        y2={insetCY + field.pupilFootprint.centroidTangential * sampleScale}
        stroke="rgba(100,200,255,0.7)"
        strokeWidth={0.5}
      />
      <line
        x1={insetCX + field.pupilFootprint.centroidSagittal * sampleScale}
        y1={insetCY + field.pupilFootprint.centroidTangential * sampleScale - 2.5}
        x2={insetCX + field.pupilFootprint.centroidSagittal * sampleScale}
        y2={insetCY + field.pupilFootprint.centroidTangential * sampleScale + 2.5}
        stroke="rgba(100,200,255,0.7)"
        strokeWidth={0.5}
      />
      <text
        x={insetCX}
        y={insetY + insetSize + 7}
        textAnchor="middle"
        fill={theme.muted}
        fontSize={6.4}
        fontFamily="inherit"
      >
        MECH
      </text>
    </g>
  );
}

export default function BokehPreviewGrid({ result, t }: BokehPreviewGridProps) {
  const footerY = OUTER_PAD_Y + 2 * TILE_H + ROW_GAP + 8;
  const defocusSide = describeBokehDefocusSide(result.defocusDeltaMm);

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ width: "100%", maxWidth: 480, display: "block" }}>
      {result.fields.map((field, index) => {
        const geometry = tileGeometry(index);
        const angleFmt = field.fieldAngleDeg > 0 ? `${field.fieldAngleDeg.toFixed(1)} deg` : "on-axis";
        const transmissionPct = field.usable ? `${(field.transmission * 100).toFixed(0)}% T` : "T --";
        const shiftPct = field.usable ? `${(field.pupilFootprint.shiftRadius * 100).toFixed(0)}% shift` : "shift --";
        const ratioLabel = field.usable ? `C/R ${field.centerToRimRatio.toFixed(2)}` : "";

        return (
          <TileShell
            key={field.fieldFraction}
            geometry={geometry}
            label={field.label}
            angleLabel={angleFmt}
            footerLine1={formatCharacterLabel(field.brightnessCharacter)}
            footerLine2={`${transmissionPct} · ${shiftPct}`}
            footerLine3={ratioLabel}
            footerLine1Color={characterColor(field.brightnessCharacter, t)}
            t={t}
          >
            <CircularizedBrightnessDisk field={field} geometry={geometry} theme={t} />
            <MechanicalInset field={field} geometry={geometry} theme={t} />
          </TileShell>
        );
      })}

      <text x={VB_W / 2} y={footerY + 10} textAnchor="middle" fill={t.muted} fontSize={8} fontFamily="inherit">
        {defocusSide}
      </text>
      <text x={VB_W / 2} y={footerY + 22} textAnchor="middle" fill={t.muted} fontSize={7.8} fontFamily="inherit">
        Main disk: SA brightness
      </text>
      <text x={VB_W / 2} y={footerY + 34} textAnchor="middle" fill={t.muted} fontSize={7.8} fontFamily="inherit">
        Inset: mechanical vignette
      </text>
      <text x={VB_W / 2} y={footerY + 46} textAnchor="middle" fill={t.muted} fontSize={8} fontFamily="inherit">
        {`Scale: +-${result.sharedHalfRangeMm >= 0.1 ? result.sharedHalfRangeMm.toFixed(2) : result.sharedHalfRangeMm.toFixed(3)} mm`}
      </text>
      <text x={VB_W / 2} y={footerY + 58} textAnchor="middle" fill={t.muted} fontSize={7.5} fontFamily="inherit">
        {`Defocus: ${Math.abs(result.defocusDeltaMm).toFixed(3)} mm`}
      </text>
    </svg>
  );
}
