import type { FieldCurvatureResult } from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface FieldCurvaturePlotProps {
  result: FieldCurvatureResult;
  t: Theme;
}

const VB_W = 320;
const VB_H = 224;
const ML = 42;
const MR = 18;
const MT = 20;
const MB = 60;
const PW = VB_W - ML - MR;
const PH = VB_H - MT - MB;

function formatShiftMm(value: number): string {
  if (Math.abs(value) < 1e-9) return "0";
  if (Math.abs(value) >= 1) return value.toFixed(1);
  return value.toFixed(2);
}

export default function FieldCurvaturePlot({ result, t }: FieldCurvaturePlotProps) {
  const usableFields = result.fields.filter((field) => field.usable);
  const imageCircleRadiusMm = Math.max(...usableFields.map((field) => Math.abs(field.chiefImageHeight)), 0);
  const yHalfRange = Math.max(0.1, Math.min(result.sharedFocusShiftHalfRangeMm, imageCircleRadiusMm));
  const tangentialColor = t.rayWarm ?? "#22c55e";
  const sagittalColor = t.rayChromB ?? "#38bdf8";
  const petzvalColor = t.stopLabel ?? "#f8fafc";
  const xScale = (fieldFraction: number) => ML + fieldFraction * PW;
  const yScale = (shiftMm: number) => MT + PH / 2 - (shiftMm / yHalfRange) * (PH / 2);
  const zeroY = yScale(0);
  const tickMm = yHalfRange >= 2 ? 1 : yHalfRange >= 1 ? 0.5 : yHalfRange >= 0.4 ? 0.2 : 0.1;
  const tickValues = Array.from(new Set([-yHalfRange, -tickMm, 0, tickMm, yHalfRange]));

  const tangentialPoints = usableFields
    .map((field) => `${xScale(field.fieldFraction).toFixed(1)},${yScale(field.tangentialShiftMm).toFixed(1)}`)
    .join(" ");
  const sagittalPoints = usableFields
    .map((field) => `${xScale(field.fieldFraction).toFixed(1)},${yScale(field.sagittalShiftMm).toFixed(1)}`)
    .join(" ");
  const petzvalPoints = usableFields
    .map((field) => `${xScale(field.fieldFraction).toFixed(1)},${yScale(field.petzvalShiftMm).toFixed(1)}`)
    .join(" ");

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
      <title>
        Field curvature and astigmatic difference. The solid circular tangential trace and the dashed square sagittal
        trace show where each off-axis ray family reaches best focus relative to the current image plane.
      </title>
      <rect x={ML} y={MT} width={PW} height={PH} rx={3} fill={t.panelBg} stroke={t.panelBorder} strokeWidth={0.75} />

      <line x1={ML} y1={zeroY} x2={ML + PW} y2={zeroY} stroke={t.axis} strokeWidth={0.75} strokeDasharray="3,3" />
      <text x={ML + PW - 4} y={zeroY - 5} textAnchor="end" fill={t.muted} fontSize={8} fontFamily="inherit">
        Current plane
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
            <text x={x} y={VB_H - 12} textAnchor="middle" fill={t.muted} fontSize={8} fontFamily="inherit">
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
      <text x={ML + PW - 4} y={MT + PH + 16} textAnchor="end" fill={t.muted} fontSize={8} fontFamily="inherit">
        Toward sensor
      </text>
      <text x={ML + PW / 2} y={VB_H - 2} textAnchor="middle" fill={t.muted} fontSize={9.5} fontFamily="inherit">
        Field position across current half-field
      </text>

      {usableFields.map((field) => {
        const x = xScale(field.fieldFraction);
        const tangentialY = yScale(field.tangentialShiftMm);
        const sagittalY = yScale(field.sagittalShiftMm);
        const topY = Math.min(tangentialY, sagittalY);
        const height = Math.max(1, Math.abs(tangentialY - sagittalY));

        return (
          <g key={`delta-${field.fieldFraction}`}>
            <rect x={x - 4} y={topY} width={8} height={height} fill={t.panelBorder} opacity={0.2} rx={2} />
            <line
              x1={x}
              y1={tangentialY}
              x2={x}
              y2={sagittalY}
              stroke={t.panelBorder}
              strokeWidth={1}
              strokeDasharray="2,2"
            />
          </g>
        );
      })}

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

      {usableFields.map((field) => (
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
          Tangential plane
        </text>

        <line x1={86} y1={0} x2={98} y2={0} stroke={sagittalColor} strokeWidth={2.2} strokeDasharray="5,3" />
        <rect
          x={104.5}
          y={-2.4}
          width={4.8}
          height={4.8}
          fill={sagittalColor}
          stroke={t.panelBg}
          strokeWidth={0.75}
          rx={0.8}
        />
        <text x={114} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Sagittal plane
        </text>
      </g>

      <g transform={`translate(${ML + 6}, ${MT + 26})`}>
        <rect x={0} y={-4} width={8} height={8} fill={t.panelBorder} opacity={0.2} rx={2} />
        <text x={14} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Shaded gap = astigmatic split
        </text>
        <line x1={118} y1={0} x2={130} y2={0} stroke={petzvalColor} strokeWidth={1.75} />
        <text x={136} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Petzval mean
        </text>
      </g>

      <text x={ML + 6} y={VB_H - 18} fill={t.muted} fontSize={7.5} fontFamily="inherit">
        Read left to right: if the two traces stay close together, astigmatism is low.
      </text>
    </svg>
  );
}
