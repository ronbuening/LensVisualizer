/**
 * PupilAberrationChart — SVG line chart showing entrance-pupil (EP) and exit-pupil (XP)
 * z-position shifts versus field angle.  Both curves are plotted on a shared symmetric
 * axis so the relative magnitudes are directly comparable.
 */

import type { Theme } from "../../types/theme.js";
import type { BothPupilAberrationProfiles } from "../../optics/pupilAberration.js";
import { ChartLegend, SvgChartFrame } from "./charts/SvgChartFrame.js";
import {
  angleTicks,
  createPlotArea,
  formatShiftTick,
  linearScale,
  niceTicks,
  svgPath,
  symmetricDomain,
} from "./charts/chartMath.js";
import { AnalysisEmptyState } from "./analysisUi.js";

interface PupilAberrationChartProps {
  profiles: BothPupilAberrationProfiles;
  t: Theme;
  width?: number;
  height?: number;
}

export default function PupilAberrationChart({ profiles, t, width = 320, height = 220 }: PupilAberrationChartProps) {
  const { ep, xp, halfFieldDeg, maxAbsEpShiftMm, maxAbsXpShiftMm } = profiles;

  if (ep.samples.length < 2) {
    return <AnalysisEmptyState t={t}>Not enough data to plot pupil aberration curves.</AnalysisEmptyState>;
  }

  const area = createPlotArea(width, height);
  const { margin, plotW, plotH } = area;

  /* ── Axis ranges ── */
  const telecentricXP = !isFinite(xp.paraxialXpZRelLastSurf);
  const rawMax = Math.max(maxAbsEpShiftMm, telecentricXP ? 0 : maxAbsXpShiftMm);
  const [yMin, yMax] = symmetricDomain(rawMax, 1.2, 0.01);

  /* ── Scale helpers ── */
  const xScale = linearScale(0, halfFieldDeg, margin.left, margin.left + plotW);
  const yScale = linearScale(yMin, yMax, margin.top + plotH, margin.top);

  /* ── Curve paths ── */
  const epPath = svgPath(
    ep.samples,
    (s) => xScale(s.fieldDeg),
    (s) => yScale(s.epShiftMm),
  );
  const xpPath = svgPath(
    xp.samples,
    (s) => xScale(s.fieldDeg),
    (s) => yScale(s.xpShiftMm),
  );

  /* ── Axis tick values ── */
  const yTicks = niceTicks(yMin, yMax, 6, [0.1, 0.2, 0.25, 0.5, 1, 2, 5, 10]);
  const xTicks = angleTicks(halfFieldDeg);

  /* ── Legend layout ── */
  const legendX = margin.left + plotW - 4;
  const legendY = margin.top + 8;

  return (
    <SvgChartFrame
      area={area}
      t={t}
      xTicks={xTicks}
      yTicks={yTicks}
      xScale={xScale}
      yScale={yScale}
      xTickLabel={(tick) => `${tick.toFixed(0)}°`}
      yTickLabel={formatShiftTick}
      xLabel="Field angle (°)"
      yLabel="Shift (mm)"
      referenceLines={[{ value: 0, opacity: 0.5 }]}
    >
      {/* ── EP shift curve (solid) ── */}
      <path d={epPath} fill="none" stroke={t.sliderAccent} strokeWidth={1.5} strokeLinejoin="round" />

      {/* ── XP shift curve (dashed) ── */}
      {!telecentricXP && (
        <path
          d={xpPath}
          fill="none"
          stroke={t.rayOffWarm}
          strokeWidth={1.5}
          strokeLinejoin="round"
          strokeDasharray="4,3"
        />
      )}

      {/* ── Sample dots — EP ── */}
      {ep.samples.map((s, i) => (
        <circle
          key={`ep-${i}`}
          cx={xScale(s.fieldDeg)}
          cy={yScale(s.epShiftMm)}
          r={2}
          fill={t.sliderAccent}
          opacity={0.8}
        />
      ))}

      {/* ── Sample dots — XP ── */}
      {!telecentricXP &&
        xp.samples.map((s, i) => (
          <circle
            key={`xp-${i}`}
            cx={xScale(s.fieldDeg)}
            cy={yScale(s.xpShiftMm)}
            r={2}
            fill={t.rayOffWarm}
            opacity={0.8}
          />
        ))}

      {/* ── Telecentric note ── */}
      {telecentricXP && (
        <text
          x={margin.left + plotW - 4}
          y={yScale(0) - 6}
          textAnchor="end"
          fill={t.muted}
          fontSize={7.5}
          fontFamily="inherit"
        >
          XP at ∞ (telecentric)
        </text>
      )}

      {/* ── Legend ── */}
      <ChartLegend
        x={legendX}
        y={legendY}
        t={t}
        items={[
          { label: "EP shift", color: t.sliderAccent },
          { label: "XP shift", color: t.rayOffWarm, dasharray: "4,3" },
        ]}
      />
    </SvgChartFrame>
  );
}
