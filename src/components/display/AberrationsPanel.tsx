/**
 * AberrationsPanel — Analysis drawer tab content displaying computed aberration
 * metrics for the current lens state.
 *
 * Shows spherical aberration (SA) as both a numeric readout and a longitudinal
 * SA (LSA) profile diagram — a classic optics plot of focus shift vs. pupil
 * zone.  Designed as the container for future aberration displays (issues
 * #297–#300).
 *
 * The panel computes SA via useMemo from the current slider state and
 * delegates the heavy lifting to the pure computeSphericalAberration() and
 * computeSAProfile() helpers.
 */

import { useMemo } from "react";
import CollapseButton from "../controls/CollapseButton.js";
import { computeSphericalAberration, computeSAProfile } from "../../optics/aberrationAnalysis.js";
import type { SAProfilePoint } from "../../optics/aberrationAnalysis.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface AberrationsPanelProps {
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  focusT: number;
  zoomT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  expanded: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}

/**
 * Format an SA value in µm for display.
 * Shows integer for values ≥ 1 µm, one decimal for smaller values.
 */
function formatSaUm(saUm: number): string {
  const abs = Math.abs(saUm);
  if (abs >= 1) return `${abs.toFixed(0)} µm`;
  if (abs >= 0.1) return `${abs.toFixed(1)} µm`;
  return "< 0.1 µm";
}

// ── LSA diagram layout (viewBox units) ───────────────────────────────────────
const VB_W = 280;
const VB_H = 200;
const ML = 44; // left margin — room for Y-axis label + tick values
const MR = 16;
const MT = 20;
const MB = 36; // bottom margin — room for X-axis label + tick values
const PW = VB_W - ML - MR; // plot width
const PH = VB_H - MT - MB; // plot height
/** Minimum x-axis half-range in µm so well-corrected lenses still show curve shape. */
const MIN_X_RANGE_UM = 5;

/**
 * Build SVG polyline points for the LSA profile curve.
 * X maps SA in µm (centre = 0), Y maps pupil zone fraction (0 at bottom, 1 at top).
 */
function buildPolylinePoints(profile: SAProfilePoint[], xRangeUm: number): string {
  return profile
    .map(({ fraction, saMm }) => {
      const saUm = saMm * 1000;
      const px = ML + PW / 2 + (saUm / xRangeUm) * (PW / 2);
      const py = MT + PH * (1 - fraction);
      return `${px.toFixed(1)},${py.toFixed(1)}`;
    })
    .join(" ");
}

/**
 * Longitudinal SA profile diagram — SVG chart of focus shift (µm) vs. pupil zone.
 *
 * A near-vertical curve means well-corrected; sweeping right = undercorrected
 * (typical for fast primes); sweeping left = overcorrected.
 */
function SADiagram({ profile, t }: { profile: SAProfilePoint[]; t: Theme }) {
  const maxSaUm = Math.max(...profile.map((p) => Math.abs(p.saMm * 1000)));
  const xRangeUm = Math.max(MIN_X_RANGE_UM, maxSaUm * 1.2);

  const zeroX = ML + PW / 2;

  // X-axis: choose a round tick value that fits within the range
  const rawTick = xRangeUm / 2;
  const tickUm =
    rawTick >= 50 ? Math.round(rawTick / 25) * 25 : rawTick >= 10 ? Math.round(rawTick / 5) * 5 : Math.round(rawTick);
  const tickXLeft = ML + PW / 2 - (tickUm / xRangeUm) * (PW / 2);
  const tickXRight = ML + PW / 2 + (tickUm / xRangeUm) * (PW / 2);

  // Y-axis ticks at pupil zones 0, 0.5, 1.0
  const yTicks = [
    { frac: 0, label: "0" },
    { frac: 0.5, label: "0.5" },
    { frac: 1, label: "1" },
  ];

  const polylinePoints = buildPolylinePoints(profile, xRangeUm);

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}
      title="LSA profile: longitudinal spherical aberration vs. pupil zone. Near-vertical = well-corrected; rightward sweep = undercorrected; leftward sweep = overcorrected."
    >
      {/* Plot area background */}
      <rect x={ML} y={MT} width={PW} height={PH} rx={3} fill={t.panelBg} stroke={t.panelBorder} strokeWidth={0.75} />

      {/* Y-axis tick marks and labels */}
      {yTicks.map(({ frac, label }) => {
        const ty = MT + PH * (1 - frac);
        return (
          <g key={label}>
            <line x1={ML - 4} y1={ty} x2={ML} y2={ty} stroke={t.muted} strokeWidth={0.75} />
            <text x={ML - 7} y={ty + 4} textAnchor="end" fill={t.muted} fontSize={9} fontFamily="inherit">
              {label}
            </text>
          </g>
        );
      })}

      {/* Y-axis label ("zone"), rotated */}
      <text
        textAnchor="middle"
        fill={t.muted}
        fontSize={9.5}
        fontFamily="inherit"
        transform={`rotate(-90) translate(${-(MT + PH / 2)}, 12)`}
      >
        Pupil zone
      </text>

      {/* Zero reference line (vertical, dashed) */}
      <line x1={zeroX} y1={MT} x2={zeroX} y2={MT + PH} stroke={t.axis} strokeWidth={0.75} strokeDasharray="3,3" />

      {/* LSA profile curve */}
      <polyline points={polylinePoints} fill="none" stroke={t.value} strokeWidth={2} strokeLinejoin="round" />

      {/* X-axis tick marks */}
      <line x1={tickXLeft} y1={MT + PH} x2={tickXLeft} y2={MT + PH + 4} stroke={t.muted} strokeWidth={0.75} />
      <line x1={tickXRight} y1={MT + PH} x2={tickXRight} y2={MT + PH + 4} stroke={t.muted} strokeWidth={0.75} />
      <line x1={zeroX} y1={MT + PH} x2={zeroX} y2={MT + PH + 4} stroke={t.muted} strokeWidth={0.75} />

      {/* X-axis tick labels */}
      <text x={tickXLeft} y={MT + PH + 15} textAnchor="middle" fill={t.muted} fontSize={9} fontFamily="inherit">
        {`\u2212${tickUm}`}
      </text>
      <text x={zeroX} y={MT + PH + 15} textAnchor="middle" fill={t.muted} fontSize={9} fontFamily="inherit">
        0
      </text>
      <text x={tickXRight} y={MT + PH + 15} textAnchor="middle" fill={t.muted} fontSize={9} fontFamily="inherit">
        {`+${tickUm}`}
      </text>

      {/* X-axis unit label */}
      <text x={ML + PW / 2} y={VB_H - 4} textAnchor="middle" fill={t.muted} fontSize={9.5} fontFamily="inherit">
        Focus shift (&micro;m)
      </text>
    </svg>
  );
}

export default function AberrationsPanel({
  L,
  t,
  zPos,
  focusT,
  zoomT,
  currentEPSD,
  currentPhysStopSD,
  expanded,
  onExpandedChange,
}: AberrationsPanelProps) {
  const saResult = useMemo(
    () => computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD],
  );

  const saProfile = useMemo(
    () => computeSAProfile(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD],
  );

  return (
    <div style={{ padding: "8px 0" }}>
      {/* ── Header row with collapse toggle ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: expanded ? 8 : 0 }}>
        <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>Spherical Aberration</span>
        <CollapseButton
          expanded={expanded}
          onToggle={() => onExpandedChange?.(!expanded)}
          theme={t}
          style={{ marginLeft: "auto" }}
        />
      </div>

      {/* ── Expanded content ── */}
      {expanded && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 9.5 }}>
          {/* LSA profile diagram */}
          {saProfile.length >= 2 && <SADiagram profile={saProfile} t={t} />}

          {/* Spherical aberration metric readout */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 10 }}
            title={
              "Longitudinal spherical aberration: axial focus shift of a marginal ray " +
              "vs. paraxial reference. Positive = undercorrected (real focus farther from lens)."
            }
          >
            <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>SA</span>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: t.value,
                fontVariantNumeric: "tabular-nums",
                transition: "color 0.3s",
              }}
            >
              {saResult ? formatSaUm(saResult.saUm) : "\u2014"}
            </span>
            {saResult && (
              <span style={{ fontSize: 9, color: t.muted, transition: "color 0.3s" }}>
                ({saResult.saMm > 0 ? "undercorrected" : saResult.saMm < 0 ? "overcorrected" : "corrected"})
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
