import type { FieldCurvatureFieldResult, FieldCurvatureResult } from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface AstigmatismPlotProps {
  result: FieldCurvatureResult;
  t: Theme;
  mode: "parabasal" | "realRay";
}

const VB_W = 320;
const VB_H = 228;
const ML = 42;
const MR = 18;
const MT = 20;
const MB = 72;
const PW = VB_W - ML - MR;
const PH = VB_H - MT - MB;

function formatSplitMm(value: number): string {
  if (Math.abs(value) < 1e-9) return "0";
  if (Math.abs(value) >= 1) return value.toFixed(1);
  return value.toFixed(2);
}

function splitMagnitudeForMode(field: FieldCurvatureFieldResult, mode: "parabasal" | "realRay"): number {
  if (mode === "realRay") {
    return Math.abs(field.diagnosticAstigmaticDifferenceMm ?? field.astigmaticDifferenceMm);
  }
  return Math.abs(field.astigmaticDifferenceMm);
}

export default function AstigmatismPlot({ result, t, mode }: AstigmatismPlotProps) {
  const imageCircleRadiusMm = Math.max(
    ...result.fields.filter((field) => field.usable).map((field) => Math.abs(field.chiefImageHeight)),
    0,
  );
  const withinImageCircle = (field: FieldCurvatureFieldResult) =>
    Math.abs(field.chiefImageHeight) <= imageCircleRadiusMm + 1e-9;
  const markerFields = result.fields.filter((field) => field.usable && withinImageCircle(field));
  const curveFields = result.curveFields.filter((field) => field.usable && withinImageCircle(field));
  const plotFields = curveFields.length > 0 ? curveFields : markerFields;
  if (plotFields.length < 2) return null;

  const splitColor = mode === "parabasal" ? t.value : (t.stopLabel ?? "#f8fafc");
  const plotLabel = mode === "parabasal" ? "Parabasal astigmatism split" : "Real-ray astigmatism split";
  const maxSplitMm = Math.max(0.02, ...plotFields.map((field) => splitMagnitudeForMode(field, mode)));
  const yMax = maxSplitMm * 1.08;
  const xScale = (fieldFraction: number) => ML + fieldFraction * PW;
  const yScale = (splitMm: number) => MT + PH - (splitMm / yMax) * PH;
  const zeroY = yScale(0);
  const tickValues = Array.from({ length: 5 }, (_, index) => (yMax * index) / 4);
  const splitPoints = plotFields
    .map(
      (field) => `${xScale(field.fieldFraction).toFixed(1)},${yScale(splitMagnitudeForMode(field, mode)).toFixed(1)}`,
    )
    .join(" ");

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
      <title>
        {mode === "parabasal"
          ? "Parabasal astigmatism plot showing tangential-sagittal focus separation across the field."
          : "Real-ray astigmatism plot showing tangential-sagittal best-focus separation from traced ray bundles."}
      </title>
      <rect x={ML} y={MT} width={PW} height={PH} rx={3} fill={t.panelBg} stroke={t.panelBorder} strokeWidth={0.75} />

      <line x1={ML} y1={zeroY} x2={ML + PW} y2={zeroY} stroke={t.axis} strokeWidth={0.75} strokeDasharray="3,3" />
      <text x={ML + PW - 4} y={zeroY - 5} textAnchor="end" fill={t.muted} fontSize={8} fontFamily="inherit">
        Zero split
      </text>

      {tickValues.map((tick) => {
        const y = yScale(tick);
        return (
          <g key={tick}>
            <line x1={ML - 4} y1={y} x2={ML} y2={y} stroke={t.muted} strokeWidth={0.75} />
            <text x={ML - 7} y={y + 4} textAnchor="end" fill={t.muted} fontSize={9} fontFamily="inherit">
              {formatSplitMm(tick)}
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
        Tangential-sagittal split (mm)
      </text>
      <text x={ML + PW / 2} y={VB_H - 16} textAnchor="middle" fill={t.muted} fontSize={9.5} fontFamily="inherit">
        Field position across current half-field
      </text>

      {splitPoints ? (
        <polyline points={splitPoints} fill="none" stroke={splitColor} strokeWidth={2.2} strokeLinejoin="round" />
      ) : null}

      {markerFields.map((field) => (
        <circle
          key={`field-${field.fieldFraction}`}
          cx={xScale(field.fieldFraction)}
          cy={yScale(splitMagnitudeForMode(field, mode))}
          r={2.5}
          fill={splitColor}
        />
      ))}

      <g transform={`translate(${ML + 6}, ${MT + 12})`}>
        <line x1={0} y1={0} x2={12} y2={0} stroke={splitColor} strokeWidth={2.2} />
        <circle cx={18} cy={0} r={2.5} fill={splitColor} />
        <text x={28} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          {plotLabel}
        </text>
      </g>

      <text x={ML + 6} y={VB_H - 3} fill={t.muted} fontSize={7.5} fontFamily="inherit">
        {mode === "parabasal"
          ? "Parabasal tangential-sagittal split across the image circle."
          : "Real-ray tangential-sagittal split across the image circle."}
      </text>
    </svg>
  );
}
