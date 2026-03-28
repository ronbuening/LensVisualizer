import type { FieldCurvatureResult } from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface FieldCurvatureMeanPlotProps {
  result: FieldCurvatureResult;
  t: Theme;
}

const VB_W = 320;
const VB_H = 188;
const ML = 42;
const MR = 18;
const MT = 18;
const MB = 42;
const PW = VB_W - ML - MR;
const PH = VB_H - MT - MB;

function formatShiftMm(value: number): string {
  if (Math.abs(value) < 1e-9) return "0";
  if (Math.abs(value) >= 1) return value.toFixed(1);
  return value.toFixed(2);
}

export default function FieldCurvatureMeanPlot({ result, t }: FieldCurvatureMeanPlotProps) {
  const usableFields = result.fields.filter((field) => field.usable);
  const meanShiftHalfRange = Math.max(...usableFields.map((field) => Math.abs(field.petzvalShiftMm)), 0);
  const imageCircleRadiusMm = Math.max(...usableFields.map((field) => Math.abs(field.chiefImageHeight)), 0);
  const uncappedHalfRange = Math.max(0.05, meanShiftHalfRange * 1.15);
  const yHalfRange = Math.max(0.05, Math.min(uncappedHalfRange, imageCircleRadiusMm));
  const scaleCapped = uncappedHalfRange > imageCircleRadiusMm + 1e-9;
  const curveColor = t.stopLabel ?? "#f8fafc";
  const fillColor = t.panelBorder;
  const xScale = (fieldFraction: number) => ML + fieldFraction * PW;
  const yScale = (shiftMm: number) => MT + PH / 2 - (shiftMm / yHalfRange) * (PH / 2);
  const zeroY = yScale(0);
  const tickMm = yHalfRange >= 2 ? 1 : yHalfRange >= 1 ? 0.5 : yHalfRange >= 0.4 ? 0.2 : 0.1;
  const tickValues = Array.from(new Set([-yHalfRange, -tickMm, 0, tickMm, yHalfRange]));

  const curvePoints = usableFields
    .map((field) => `${xScale(field.fieldFraction).toFixed(1)},${yScale(field.petzvalShiftMm).toFixed(1)}`)
    .join(" ");

  const fillPoints = usableFields.length
    ? [
        `${xScale(usableFields[0].fieldFraction).toFixed(1)},${zeroY.toFixed(1)}`,
        ...usableFields.map(
          (field) => `${xScale(field.fieldFraction).toFixed(1)},${yScale(field.petzvalShiftMm).toFixed(1)}`,
        ),
        `${xScale(usableFields[usableFields.length - 1].fieldFraction).toFixed(1)},${zeroY.toFixed(1)}`,
      ].join(" ")
    : "";

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
      <title>
        Field curvature only. This chart shows the mean field surface moving fore or aft of the current focus plane as
        field position increases from center to edge.
      </title>
      <rect x={ML} y={MT} width={PW} height={PH} rx={3} fill={t.panelBg} stroke={t.panelBorder} strokeWidth={0.75} />

      <line x1={ML} y1={zeroY} x2={ML + PW} y2={zeroY} stroke={t.axis} strokeWidth={0.75} strokeDasharray="3,3" />
      <text x={ML + PW - 4} y={zeroY - 5} textAnchor="end" fill={t.muted} fontSize={8} fontFamily="inherit">
        Focused plane
      </text>

      {tickValues.map((tick) => {
        const y = yScale(tick);
        return (
          <g key={tick}>
            <line x1={ML - 4} y1={y} x2={ML} y2={y} stroke={t.muted} strokeWidth={0.75} />
            <text x={ML - 7} y={y + 4} textAnchor="end" fill={t.muted} fontSize={8.5} fontFamily="inherit">
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
        Fore / aft deviation (mm)
      </text>
      <text x={ML + PW - 4} y={MT - 5} textAnchor="end" fill={t.muted} fontSize={8} fontFamily="inherit">
        Fore: toward lens
      </text>
      <text x={ML + PW - 4} y={MT + PH + 16} textAnchor="end" fill={t.muted} fontSize={8} fontFamily="inherit">
        Aft: toward sensor
      </text>

      {fillPoints ? <polygon points={fillPoints} fill={fillColor} opacity={0.18} /> : null}
      {curvePoints ? (
        <polyline points={curvePoints} fill="none" stroke={curveColor} strokeWidth={2.1} strokeLinejoin="round" />
      ) : null}

      {usableFields.map((field) => (
        <circle
          key={field.fieldFraction}
          cx={xScale(field.fieldFraction)}
          cy={yScale(field.petzvalShiftMm)}
          r={2.4}
          fill={curveColor}
        />
      ))}

      <text x={ML + 6} y={VB_H - 2} fill={t.muted} fontSize={7.5} fontFamily="inherit">
        Center to edge bend of the mean field surface only.
      </text>
      {scaleCapped ? (
        <text x={ML + PW} y={VB_H - 2} textAnchor="end" fill={t.muted} fontSize={7.5} fontFamily="inherit">
          Scale capped to image circle
        </text>
      ) : null}
    </svg>
  );
}
