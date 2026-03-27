/**
 * MeridionalComaPlot — Compact 2D meridional coma visualization for the
 * Aberrations drawer.
 *
 * Plots dense image-plane intercept heights against pupil sample position and
 * marks the image-plane axis so the top/bottom asymmetry is immediately
 * visible. This is intentionally a meridional-only diagnostic, not a full
 * 2D spot diagram.
 */

import type { MeridionalComaResult } from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface MeridionalComaPlotProps {
  result: MeridionalComaResult;
  t: Theme;
}

const VB_W = 300;
const VB_H = 216;
const ML = 44;
const MR = 16;
const MT = 20;
const MB = 40;
const PW = VB_W - ML - MR;
const PH = VB_H - MT - MB;
const MIN_Y_RANGE_MM = 0.02;

export function formatComaSpan(spanUm: number): string {
  const abs = Math.abs(spanUm);
  if (abs >= 1000) return `${(spanUm / 1000).toFixed(2)} mm`;
  if (abs >= 100) return `${spanUm.toFixed(0)} µm`;
  if (abs >= 10) return `${spanUm.toFixed(1)} µm`;
  return `${spanUm.toFixed(2)} µm`;
}

export default function MeridionalComaPlot({ result, t }: MeridionalComaPlotProps) {
  const yHalfRange = Math.max(MIN_Y_RANGE_MM, Math.max(Math.abs(result.minIntercept), Math.abs(result.maxIntercept)) * 1.1);
  const zeroY = MT + PH / 2;

  const xScale = (pupilFraction: number) => ML + ((pupilFraction + 1) / 2) * PW;
  const yScale = (imageHeight: number) => zeroY - (imageHeight / yHalfRange) * (PH / 2);

  const validSamples = result.samples.filter(
    (sample): sample is typeof sample & { imageHeight: number } => sample.imageHeight !== null && !sample.clipped,
  );

  const polylinePoints = validSamples
    .map((sample) => `${xScale(sample.pupilFraction).toFixed(1)},${yScale(sample.imageHeight).toFixed(1)}`)
    .join(" ");

  const tickMm = yHalfRange >= 1 ? 1 : yHalfRange >= 0.2 ? 0.2 : yHalfRange >= 0.05 ? 0.05 : 0.01;
  const tickValues = [-tickMm, 0, tickMm];

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
      <title>
        2D meridional coma view. Dense off-axis pupil samples are projected onto the image plane to show asymmetric
        spread, not a full 2D spot diagram.
      </title>
      <rect x={ML} y={MT} width={PW} height={PH} rx={3} fill={t.panelBg} stroke={t.panelBorder} strokeWidth={0.75} />

      <line x1={ML} y1={zeroY} x2={ML + PW} y2={zeroY} stroke={t.axis} strokeWidth={0.75} strokeDasharray="3,3" />
      <line x1={ML + PW / 2} y1={MT} x2={ML + PW / 2} y2={MT + PH} stroke={t.axis} strokeWidth={0.75} strokeDasharray="3,3" />

      {tickValues.map((tick) => {
        const y = yScale(tick);
        return (
          <g key={tick}>
            <line x1={ML - 4} y1={y} x2={ML} y2={y} stroke={t.muted} strokeWidth={0.75} />
            <text x={ML - 7} y={y + 4} textAnchor="end" fill={t.muted} fontSize={9} fontFamily="inherit">
              {tick === 0 ? "0" : tick.toFixed(tickMm < 0.1 ? 2 : 1)}
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
        Image plane (mm)
      </text>

      {polylinePoints && (
        <polyline points={polylinePoints} fill="none" stroke={t.value} strokeWidth={2} strokeLinejoin="round" />
      )}

      {validSamples.map((sample) => (
        <circle
          key={sample.index}
          cx={xScale(sample.pupilFraction)}
          cy={yScale(sample.imageHeight)}
          r={2.2}
          fill={Math.abs(sample.pupilFraction) < 1e-9 ? t.label : t.value}
        />
      ))}

      {result.samples
        .filter((sample) => sample.clipped)
        .map((sample) => (
          <line
            key={`clipped-${sample.index}`}
            x1={xScale(sample.pupilFraction) - 3}
            y1={MT + PH - 10}
            x2={xScale(sample.pupilFraction) + 3}
            y2={MT + PH - 4}
            stroke={t.muted}
            strokeWidth={1}
          />
        ))}

      <text x={ML + PW / 2} y={VB_H - 4} textAnchor="middle" fill={t.muted} fontSize={9.5} fontFamily="inherit">
        Pupil fraction (−1 to +1)
      </text>
    </svg>
  );
}
