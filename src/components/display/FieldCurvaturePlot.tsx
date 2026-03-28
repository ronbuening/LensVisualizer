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
const MB = 40;
const PW = VB_W - ML - MR;
const PH = VB_H - MT - MB;

function formatShiftMm(value: number): string {
  if (Math.abs(value) < 1e-9) return "0";
  if (Math.abs(value) >= 1) return value.toFixed(1);
  return value.toFixed(2);
}

export default function FieldCurvaturePlot({ result, t }: FieldCurvaturePlotProps) {
  const usableFields = result.fields.filter((field) => field.usable);
  const yHalfRange = Math.max(0.1, result.sharedFocusShiftHalfRangeMm);
  const xScale = (fieldFraction: number) => ML + fieldFraction * PW;
  const yScale = (shiftMm: number) => MT + PH / 2 - (shiftMm / yHalfRange) * (PH / 2);
  const zeroY = yScale(0);
  const tickMm = yHalfRange >= 2 ? 1 : yHalfRange >= 1 ? 0.5 : yHalfRange >= 0.4 ? 0.2 : 0.1;
  const tickValues = [-tickMm, 0, tickMm];

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
        Field curvature and astigmatic difference. Tangential and sagittal best-focus surfaces are shown relative to the
        current image plane across the current half-field, with the Petzval mean surface overlaid for reference.
      </title>
      <rect x={ML} y={MT} width={PW} height={PH} rx={3} fill={t.panelBg} stroke={t.panelBorder} strokeWidth={0.75} />

      <line x1={ML} y1={zeroY} x2={ML + PW} y2={zeroY} stroke={t.axis} strokeWidth={0.75} strokeDasharray="3,3" />

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
      <text x={ML + PW / 2} y={VB_H - 2} textAnchor="middle" fill={t.muted} fontSize={9.5} fontFamily="inherit">
        Field position across current half-field
      </text>

      {usableFields.map((field) => (
        <line
          key={`delta-${field.fieldFraction}`}
          x1={xScale(field.fieldFraction)}
          y1={yScale(field.tangentialShiftMm)}
          x2={xScale(field.fieldFraction)}
          y2={yScale(field.sagittalShiftMm)}
          stroke={t.panelBorder}
          strokeWidth={1}
          strokeDasharray="2,2"
        />
      ))}

      {petzvalPoints ? <polyline points={petzvalPoints} fill="none" stroke={t.axis} strokeWidth={1.25} /> : null}
      {tangentialPoints ? (
        <polyline points={tangentialPoints} fill="none" stroke={t.value} strokeWidth={2} strokeLinejoin="round" />
      ) : null}
      {sagittalPoints ? (
        <polyline points={sagittalPoints} fill="none" stroke={t.label} strokeWidth={2} strokeLinejoin="round" />
      ) : null}

      {usableFields.map((field) => (
        <g key={`field-${field.fieldFraction}`}>
          <circle cx={xScale(field.fieldFraction)} cy={yScale(field.tangentialShiftMm)} r={2.5} fill={t.value} />
          <circle
            cx={xScale(field.fieldFraction)}
            cy={yScale(field.sagittalShiftMm)}
            r={2.5}
            fill={t.label}
            stroke={t.panelBg}
            strokeWidth={0.75}
          />
        </g>
      ))}

      <g transform={`translate(${ML + 6}, ${MT + 12})`}>
        <circle cx={0} cy={0} r={2.5} fill={t.value} />
        <text x={8} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Tangential
        </text>
        <circle cx={70} cy={0} r={2.5} fill={t.label} stroke={t.panelBg} strokeWidth={0.75} />
        <text x={78} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Sagittal
        </text>
        <line x1={135} y1={0} x2={147} y2={0} stroke={t.axis} strokeWidth={1.25} />
        <text x={154} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Petzval
        </text>
      </g>
    </svg>
  );
}
