import type { FieldCurvatureResult } from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface StandardFieldCurvaturePlotProps {
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

export default function StandardFieldCurvaturePlot({ result, t }: StandardFieldCurvaturePlotProps) {
  const markerFields = result.fields.filter((field) => field.usable);
  const curveFields = result.curveFields.filter((field) => field.usable);
  const plotFields = curveFields.length > 0 ? curveFields : markerFields;
  const yHalfRange = Math.max(0.1, result.sharedFocusShiftHalfRangeMm * 1.08);
  const tangentialColor = t.rayWarm ?? "#22c55e";
  const sagittalColor = t.rayChromB ?? "#38bdf8";
  const petzvalColor = t.stopLabel ?? "#f8fafc";
  const xScale = (fieldFraction: number) => ML + fieldFraction * PW;
  const yScale = (shiftMm: number) => MT + PH / 2 - (shiftMm / yHalfRange) * (PH / 2);
  const zeroY = yScale(0);
  const tickMm = yHalfRange >= 2 ? 1 : yHalfRange >= 1 ? 0.5 : yHalfRange >= 0.4 ? 0.2 : 0.1;
  const tickValues = Array.from(new Set([-yHalfRange, -tickMm, 0, tickMm, yHalfRange]));

  const tangentialPoints = plotFields
    .map((field) => `${xScale(field.fieldFraction).toFixed(1)},${yScale(field.tangentialShiftMm).toFixed(1)}`)
    .join(" ");
  const sagittalPoints = plotFields
    .map((field) => `${xScale(field.fieldFraction).toFixed(1)},${yScale(field.sagittalShiftMm).toFixed(1)}`)
    .join(" ");
  const petzvalPoints = plotFields
    .map((field) => `${xScale(field.fieldFraction).toFixed(1)},${yScale(field.petzvalShiftMm).toFixed(1)}`)
    .join(" ");

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
      <title>
        Parabasal field-curvature plot. Tangential and sagittal field curves relative to the image plane, with Petzval
        reference overlay.
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
        Focus shift from image plane (mm)
      </text>
      <text x={ML + PW - 4} y={MT - 6} textAnchor="end" fill={t.muted} fontSize={8} fontFamily="inherit">
        Toward sensor
      </text>
      <text x={ML + PW - 4} y={MT + PH + 18} textAnchor="end" fill={t.muted} fontSize={8} fontFamily="inherit">
        Toward lens
      </text>
      <text x={ML + PW / 2} y={VB_H - 16} textAnchor="middle" fill={t.muted} fontSize={9.5} fontFamily="inherit">
        Field position across current half-field
      </text>

      {petzvalPoints ? (
        <polyline points={petzvalPoints} fill="none" stroke={petzvalColor} strokeWidth={1.75} opacity={0.95} />
      ) : null}
      {tangentialPoints ? (
        <polyline
          points={tangentialPoints}
          fill="none"
          stroke={tangentialColor}
          strokeWidth={2.2}
          strokeLinejoin="round"
        />
      ) : null}
      {sagittalPoints ? (
        <polyline
          points={sagittalPoints}
          fill="none"
          stroke={sagittalColor}
          strokeWidth={2.2}
          strokeLinejoin="round"
          strokeDasharray="5,3"
        />
      ) : null}

      {markerFields.map((field) => (
        <g key={`field-${field.fieldFraction}`}>
          <circle
            cx={xScale(field.fieldFraction)}
            cy={yScale(field.tangentialShiftMm)}
            r={2.5}
            fill={tangentialColor}
          />
          <rect
            x={xScale(field.fieldFraction) - 2.4}
            y={yScale(field.sagittalShiftMm) - 2.4}
            width={4.8}
            height={4.8}
            fill={sagittalColor}
            stroke={t.panelBg}
            strokeWidth={0.75}
            rx={0.8}
          />
        </g>
      ))}

      <g transform={`translate(${ML + 6}, ${MT + 12})`}>
        <circle cx={0} cy={0} r={2.5} fill={tangentialColor} />
        <text x={8} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Tangential field curve
        </text>

        <line x1={102} y1={0} x2={114} y2={0} stroke={sagittalColor} strokeWidth={2.2} strokeDasharray="5,3" />
        <rect
          x={120.5}
          y={-2.4}
          width={4.8}
          height={4.8}
          fill={sagittalColor}
          stroke={t.panelBg}
          strokeWidth={0.75}
          rx={0.8}
        />
        <text x={130} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Sagittal field curve
        </text>
      </g>

      <g transform={`translate(${ML + 6}, ${MT + 26})`}>
        <line x1={0} y1={0} x2={12} y2={0} stroke={petzvalColor} strokeWidth={1.75} />
        <text x={18} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Petzval reference
        </text>
      </g>

      <text x={ML + 6} y={VB_H - 3} fill={t.muted} fontSize={7.5} fontFamily="inherit">
        Parabasal field curves with independent scale.
      </text>
    </svg>
  );
}
