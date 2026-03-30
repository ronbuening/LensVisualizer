/**
 * ChromaticFieldCurvaturePlot — SVG chart showing per-wavelength (R/G/B)
 * tangential and sagittal standardized field-curve shifts across the field.
 *
 * Renders three pairs of tangential (solid) + sagittal (dashed) traces,
 * one per chromatic channel, to visualize how lateral color shifts the
 * standardized focal surface at each field position.
 */

import type { FieldCurvatureResult } from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface ChromaticFieldCurvaturePlotProps {
  result: FieldCurvatureResult;
  t: Theme;
}

const VB_W = 320;
const VB_H = 244;
const ML = 42;
const MR = 18;
const MT = 20;
const MB = 80;
const PW = VB_W - ML - MR;
const PH = VB_H - MT - MB;

function formatShiftMm(value: number): string {
  if (Math.abs(value) < 1e-9) return "0";
  if (Math.abs(value) >= 1) return value.toFixed(1);
  return value.toFixed(2);
}

export default function ChromaticFieldCurvaturePlot({ result, t }: ChromaticFieldCurvaturePlotProps) {
  const markerFields = result.fields.filter((field) => field.usable && field.chromaticFieldShifts !== null);
  const curveFields = result.curveFields.filter((field) => field.usable && field.chromaticFieldShifts !== null);
  const plotFields = curveFields.length > 0 ? curveFields : markerFields;
  if (plotFields.length < 2) return null;

  // Compute y-range from all chromatic shifts
  let maxShift = 0.1;
  for (const field of plotFields) {
    for (const shift of field.chromaticFieldShifts!) {
      maxShift = Math.max(maxShift, Math.abs(shift.tangentialShiftMm), Math.abs(shift.sagittalShiftMm));
    }
  }
  const yHalfRange = Math.max(0.1, maxShift * 1.1);

  const xScale = (fieldFraction: number) => ML + fieldFraction * PW;
  const yScale = (shiftMm: number) => MT + PH / 2 - (shiftMm / yHalfRange) * (PH / 2);
  const zeroY = yScale(0);
  const tickMm = yHalfRange >= 2 ? 1 : yHalfRange >= 1 ? 0.5 : yHalfRange >= 0.4 ? 0.2 : 0.1;
  const tickValues = Array.from(new Set([-yHalfRange, -tickMm, 0, tickMm, yHalfRange]));

  const channelColors: Record<string, string> = {
    R: t.rayChromR,
    G: t.rayChromG,
    B: t.rayChromB,
  };

  const channels = ["R", "G", "B"] as const;

  function buildPolyline(
    channel: string,
    accessor: (s: { tangentialShiftMm: number; sagittalShiftMm: number }) => number,
  ) {
    return plotFields
      .map((field) => {
        const shift = field.chromaticFieldShifts!.find((s) => s.channel === channel);
        if (!shift) return null;
        return `${xScale(field.fieldFraction).toFixed(1)},${yScale(accessor(shift)).toFixed(1)}`;
      })
      .filter(Boolean)
      .join(" ");
  }

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
      <title>
        Chromatic field curvature. R, G, and B tangential (solid) and sagittal (dashed) standardized field curves show
        how dispersion shifts the focal surface per wavelength across the field.
      </title>
      <rect x={ML} y={MT} width={PW} height={PH} rx={3} fill={t.panelBg} stroke={t.panelBorder} strokeWidth={0.75} />

      <line x1={ML} y1={zeroY} x2={ML + PW} y2={zeroY} stroke={t.axis} strokeWidth={0.75} strokeDasharray="3,3" />
      <text x={ML + PW - 4} y={zeroY - 5} textAnchor="end" fill={t.muted} fontSize={8} fontFamily="inherit">
        Current image plane
      </text>

      {tickValues.map((tick) => {
        const y = yScale(tick);
        return (
          <g key={tick}>
            <line x1={ML - 4} y1={y} x2={ML} y2={y} stroke={t.muted} strokeWidth={0.75} />
            <text x={ML - 7} y={y + 4} textAnchor="end" fill={t.muted} fontSize={9} fontFamily="inherit">
              {formatShiftMm(tick)}
            </text>
          </g>
        );
      })}

      {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
        const x = xScale(tick);
        return (
          <g key={tick}>
            <line x1={x} y1={MT + PH} x2={x} y2={MT + PH + 4} stroke={t.muted} strokeWidth={0.75} />
            <text x={x} y={VB_H - 34} textAnchor="middle" fill={t.muted} fontSize={8} fontFamily="inherit">
              {tick === 0 ? "C" : `${Math.round(tick * 100)}%`}
            </text>
          </g>
        );
      })}

      <text
        textAnchor="middle"
        fill={t.muted}
        fontSize={9.5}
        fontFamily="inherit"
        transform={`rotate(-90) translate(${-(MT + PH / 2)}, 12)`}
      >
        Best-focus shift (mm)
      </text>
      <text x={ML + PW - 4} y={MT - 6} textAnchor="end" fill={t.muted} fontSize={8} fontFamily="inherit">
        Toward lens
      </text>
      <text x={ML + PW - 4} y={MT + PH + 18} textAnchor="end" fill={t.muted} fontSize={8} fontFamily="inherit">
        Toward sensor
      </text>
      <text x={ML + PW / 2} y={VB_H - 16} textAnchor="middle" fill={t.muted} fontSize={9.5} fontFamily="inherit">
        Field position across current half-field
      </text>

      {/* Tangential traces (solid) and sagittal traces (dashed) per channel */}
      {channels.map((channel) => {
        const color = channelColors[channel];
        const tangentialPts = buildPolyline(channel, (s) => s.tangentialShiftMm);
        const sagittalPts = buildPolyline(channel, (s) => s.sagittalShiftMm);
        return (
          <g key={channel}>
            {tangentialPts && (
              <polyline
                points={tangentialPts}
                fill="none"
                stroke={color}
                strokeWidth={1.8}
                strokeLinejoin="round"
                opacity={0.85}
              />
            )}
            {sagittalPts && (
              <polyline
                points={sagittalPts}
                fill="none"
                stroke={color}
                strokeWidth={1.8}
                strokeLinejoin="round"
                strokeDasharray="5,3"
                opacity={0.85}
              />
            )}
          </g>
        );
      })}

      {/* Data point markers per channel */}
      {channels.map((channel) => {
        const color = channelColors[channel];
        return markerFields.map((field) => {
          const shift = field.chromaticFieldShifts!.find((s) => s.channel === channel);
          if (!shift) return null;
          return (
            <g key={`${channel}-${field.fieldFraction}`}>
              <circle cx={xScale(field.fieldFraction)} cy={yScale(shift.tangentialShiftMm)} r={2} fill={color} />
              <rect
                x={xScale(field.fieldFraction) - 1.8}
                y={yScale(shift.sagittalShiftMm) - 1.8}
                width={3.6}
                height={3.6}
                fill={color}
                rx={0.6}
              />
            </g>
          );
        });
      })}

      {/* Legend */}
      <g transform={`translate(${ML + 6}, ${MT + 12})`}>
        {channels.map((channel, i) => {
          const color = channelColors[channel];
          const xOff = i * 72;
          return (
            <g key={channel} transform={`translate(${xOff}, 0)`}>
              <line x1={0} y1={0} x2={12} y2={0} stroke={color} strokeWidth={1.8} />
              <circle cx={16} cy={0} r={2} fill={color} />
              <text x={22} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
                {channel} T/S
              </text>
            </g>
          );
        })}
      </g>

      <g transform={`translate(${ML + 6}, ${MT + 26})`}>
        <line x1={0} y1={0} x2={12} y2={0} stroke={t.muted} strokeWidth={1.5} />
        <text x={18} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Solid = tangential
        </text>
        <line x1={100} y1={0} x2={112} y2={0} stroke={t.muted} strokeWidth={1.5} strokeDasharray="5,3" />
        <text x={118} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Dashed = sagittal
        </text>
      </g>
    </svg>
  );
}
