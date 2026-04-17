/**
 * PupilAberrationChart — SVG line chart showing entrance-pupil (EP) and exit-pupil (XP)
 * z-position shifts versus field angle.  Both curves are plotted on a shared symmetric
 * axis so the relative magnitudes are directly comparable.
 */

import type { Theme } from "../../types/theme.js";
import type { BothPupilAberrationProfiles } from "../../optics/pupilAberration.js";

interface PupilAberrationChartProps {
  profiles: BothPupilAberrationProfiles;
  t: Theme;
  width?: number;
  height?: number;
}

const MARGIN = { top: 24, right: 20, bottom: 36, left: 48 };

export default function PupilAberrationChart({ profiles, t, width = 320, height = 220 }: PupilAberrationChartProps) {
  const { ep, xp, halfFieldDeg, maxAbsEpShiftMm, maxAbsXpShiftMm } = profiles;

  if (ep.samples.length < 2) {
    return (
      <div style={{ color: t.muted, fontSize: 10, padding: 12, transition: "color 0.3s" }}>
        Not enough data to plot pupil aberration curves.
      </div>
    );
  }

  const plotW = width - MARGIN.left - MARGIN.right;
  const plotH = height - MARGIN.top - MARGIN.bottom;

  /* ── Axis ranges ── */
  const telecentricXP = !isFinite(xp.paraxialXpZRelLastSurf);
  const rawMax = Math.max(maxAbsEpShiftMm, telecentricXP ? 0 : maxAbsXpShiftMm);
  const range = Math.max(rawMax * 1.2, 0.01);
  const yMin = -range;
  const yMax = range;

  /* ── Scale helpers ── */
  const xScale = (angle: number) => MARGIN.left + (angle / halfFieldDeg) * plotW;
  const yScale = (v: number) => MARGIN.top + ((yMax - v) / (yMax - yMin)) * plotH;

  /* ── Curve paths ── */
  const epPath = ep.samples
    .map((s, i) => `${i === 0 ? "M" : "L"}${xScale(s.fieldDeg).toFixed(1)},${yScale(s.epShiftMm).toFixed(1)}`)
    .join(" ");

  const xpPath = xp.samples
    .map((s, i) => `${i === 0 ? "M" : "L"}${xScale(s.fieldDeg).toFixed(1)},${yScale(s.xpShiftMm).toFixed(1)}`)
    .join(" ");

  /* ── Axis tick values ── */
  const yTicks = generateSymmetricTicks(yMin, yMax);
  const xTicks = generateAngleTicks(halfFieldDeg);

  /* ── Legend layout ── */
  const legendX = MARGIN.left + plotW - 4;
  const legendY = MARGIN.top + 8;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width, display: "block" }}>
      {/* ── Plot background ── */}
      <rect x={MARGIN.left} y={MARGIN.top} width={plotW} height={plotH} fill="none" />

      {/* ── Zero reference line ── */}
      <line
        x1={MARGIN.left}
        y1={yScale(0)}
        x2={MARGIN.left + plotW}
        y2={yScale(0)}
        stroke={t.muted}
        strokeWidth={1}
        strokeDasharray="4,3"
        opacity={0.5}
      />

      {/* ── Y-axis grid + labels ── */}
      {yTicks.map((tick) => (
        <g key={`y-${tick}`}>
          <line
            x1={MARGIN.left}
            y1={yScale(tick)}
            x2={MARGIN.left + plotW}
            y2={yScale(tick)}
            stroke={t.panelBorder}
            strokeWidth={0.5}
            opacity={0.4}
          />
          <text
            x={MARGIN.left - 6}
            y={yScale(tick)}
            textAnchor="end"
            dominantBaseline="central"
            fill={t.muted}
            fontSize={8}
            fontFamily="inherit"
          >
            {formatShiftTick(tick)}
          </text>
        </g>
      ))}

      {/* ── X-axis ticks + labels ── */}
      {xTicks.map((tick) => (
        <g key={`x-${tick}`}>
          <line
            x1={xScale(tick)}
            y1={MARGIN.top + plotH}
            x2={xScale(tick)}
            y2={MARGIN.top + plotH + 4}
            stroke={t.muted}
            strokeWidth={0.5}
          />
          <text
            x={xScale(tick)}
            y={MARGIN.top + plotH + 14}
            textAnchor="middle"
            fill={t.muted}
            fontSize={8}
            fontFamily="inherit"
          >
            {tick.toFixed(0)}°
          </text>
        </g>
      ))}

      {/* ── Axes ── */}
      <line
        x1={MARGIN.left}
        y1={MARGIN.top}
        x2={MARGIN.left}
        y2={MARGIN.top + plotH}
        stroke={t.panelBorder}
        strokeWidth={1}
      />
      <line
        x1={MARGIN.left}
        y1={MARGIN.top + plotH}
        x2={MARGIN.left + plotW}
        y2={MARGIN.top + plotH}
        stroke={t.panelBorder}
        strokeWidth={1}
      />

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
          x={MARGIN.left + plotW - 4}
          y={yScale(0) - 6}
          textAnchor="end"
          fill={t.muted}
          fontSize={7.5}
          fontFamily="inherit"
        >
          XP at ∞ (telecentric)
        </text>
      )}

      {/* ── Axis labels ── */}
      <text
        x={MARGIN.left + plotW / 2}
        y={height - 4}
        textAnchor="middle"
        fill={t.muted}
        fontSize={8.5}
        fontFamily="inherit"
        letterSpacing="0.05em"
      >
        Field angle (°)
      </text>
      <text
        x={10}
        y={MARGIN.top + plotH / 2}
        textAnchor="middle"
        fill={t.muted}
        fontSize={8.5}
        fontFamily="inherit"
        letterSpacing="0.05em"
        transform={`rotate(-90, 10, ${MARGIN.top + plotH / 2})`}
      >
        Shift (mm)
      </text>

      {/* ── Legend ── */}
      <g>
        <line
          x1={legendX - 80}
          y1={legendY + 4}
          x2={legendX - 68}
          y2={legendY + 4}
          stroke={t.sliderAccent}
          strokeWidth={1.5}
        />
        <text
          x={legendX - 65}
          y={legendY + 4}
          dominantBaseline="central"
          fill={t.muted}
          fontSize={7.5}
          fontFamily="inherit"
        >
          EP shift
        </text>
        <line
          x1={legendX - 80}
          y1={legendY + 14}
          x2={legendX - 68}
          y2={legendY + 14}
          stroke={t.rayOffWarm}
          strokeWidth={1.5}
          strokeDasharray="4,3"
        />
        <text
          x={legendX - 65}
          y={legendY + 14}
          dominantBaseline="central"
          fill={t.muted}
          fontSize={7.5}
          fontFamily="inherit"
        >
          XP shift
        </text>
      </g>
    </svg>
  );
}

/** Generate symmetric y-axis ticks from -range to +range, nice intervals. */
function generateSymmetricTicks(yMin: number, yMax: number): number[] {
  const range = yMax - yMin;
  const rawStep = range / 6;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const niceSteps = [0.1, 0.2, 0.25, 0.5, 1, 2, 5, 10];
  const step = (niceSteps.find((s) => s * mag >= rawStep) ?? 1) * mag;

  const ticks: number[] = [];
  for (let v = Math.ceil(yMin / step) * step; v <= yMax + step * 0.01; v += step) {
    const rounded = Math.round(v * 1e6) / 1e6;
    if (rounded >= yMin - 1e-9 && rounded <= yMax + 1e-9) ticks.push(rounded);
  }
  return ticks;
}

/** Generate x-axis angle tick values. */
function generateAngleTicks(maxAngle: number): number[] {
  const rawStep = maxAngle / 5;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const niceSteps = [1, 2, 5, 10];
  const step = (niceSteps.find((s) => s * mag >= rawStep) ?? 1) * mag;

  const ticks: number[] = [];
  for (let v = 0; v <= maxAngle; v += step) {
    ticks.push(v);
  }
  return ticks;
}

/** Format a y-axis shift tick value. */
function formatShiftTick(v: number): string {
  if (v === 0) return "0";
  const abs = Math.abs(v);
  if (abs >= 10) return v.toFixed(0);
  if (abs >= 1) return v.toFixed(1);
  return v.toFixed(2);
}
