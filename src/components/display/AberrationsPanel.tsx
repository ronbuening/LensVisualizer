/**
 * AberrationsPanel — Collapsible panel displaying computed aberration metrics
 * for the current lens state.
 *
 * Currently shows spherical aberration (SA). Designed as the container for
 * future aberration/distortion displays (issues #297–#300).
 *
 * The panel computes SA via useMemo from the current slider state and
 * delegates the heavy lifting to the pure computeSphericalAberration() and
 * computeSAProfile() helpers.  The profile data drives a small longitudinal
 * SA diagram (focus shift vs. pupil zone) shown below the numeric readout.
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

// ── LSA diagram constants ────────────────────────────────────────────────────
const SVG_W = 120;
const SVG_H = 72;
const MARGIN_L = 10; // left (zone label)
const MARGIN_R = 6;
const MARGIN_T = 6;
const MARGIN_B = 16; // bottom (µm label)
const PLOT_W = SVG_W - MARGIN_L - MARGIN_R;
const PLOT_H = SVG_H - MARGIN_T - MARGIN_B;
/** Minimum half-range on the x-axis so near-zero SA doesn't collapse the curve. */
const MIN_X_RANGE_UM = 5;

/**
 * Build the SVG polyline points string for the LSA profile curve.
 * X = SA in µm (centred on 0), Y = pupil zone fraction (0 at bottom, 1 at top).
 */
function buildPolylinePoints(profile: SAProfilePoint[], xRangeUm: number): string {
  return profile
    .map(({ fraction, saMm }) => {
      const saUm = saMm * 1000;
      const px = MARGIN_L + PLOT_W / 2 + (saUm / xRangeUm) * (PLOT_W / 2);
      const py = MARGIN_T + PLOT_H * (1 - fraction);
      return `${px.toFixed(1)},${py.toFixed(1)}`;
    })
    .join(" ");
}

/**
 * Longitudinal SA profile diagram — small SVG chart showing focus shift
 * (SA in µm) on the X-axis and normalised pupil zone on the Y-axis.
 *
 * A flat/vertical curve near x = 0 means well-corrected; a curve that sweeps
 * right with increasing zone = undercorrected; sweeping left = overcorrected.
 */
function SADiagram({ profile, t }: { profile: SAProfilePoint[]; t: Theme }) {
  const maxSaUm = Math.max(...profile.map((p) => Math.abs(p.saMm * 1000)));
  const xRangeUm = Math.max(MIN_X_RANGE_UM, maxSaUm * 1.25);

  // X pixel for the zero reference line
  const zeroX = MARGIN_L + PLOT_W / 2;

  // Tick label values on x-axis (±half-range, rounded to a nice number)
  const tickUm = xRangeUm >= 50 ? Math.round(xRangeUm / 10) * 5 : xRangeUm >= 10 ? 5 : 2;
  const tickPxLeft = MARGIN_L + PLOT_W / 2 + (-tickUm / xRangeUm) * (PLOT_W / 2);
  const tickPxRight = MARGIN_L + PLOT_W / 2 + (tickUm / xRangeUm) * (PLOT_W / 2);

  const points = buildPolylinePoints(profile, xRangeUm);

  return (
    <svg
      width={SVG_W}
      height={SVG_H}
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      style={{ display: "block", overflow: "visible" }}
      title="LSA profile: focus shift vs. pupil zone. A near-vertical curve = well-corrected; sweeping right = undercorrected; sweeping left = overcorrected."
    >
      {/* Background */}
      <rect
        x={MARGIN_L}
        y={MARGIN_T}
        width={PLOT_W}
        height={PLOT_H}
        rx={2}
        fill={t.panelBg}
        stroke={t.panelBorder}
        strokeWidth={0.5}
        opacity={0.85}
      />

      {/* Zero reference line (vertical dashed) */}
      <line
        x1={zeroX}
        y1={MARGIN_T}
        x2={zeroX}
        y2={MARGIN_T + PLOT_H}
        stroke={t.axis}
        strokeWidth={0.6}
        strokeDasharray="2,2"
      />

      {/* SA profile curve */}
      <polyline points={points} fill="none" stroke={t.value} strokeWidth={1.3} strokeLinejoin="round" />

      {/* X-axis tick marks */}
      <line
        x1={tickPxLeft}
        y1={MARGIN_T + PLOT_H}
        x2={tickPxLeft}
        y2={MARGIN_T + PLOT_H + 3}
        stroke={t.muted}
        strokeWidth={0.5}
      />
      <line
        x1={tickPxRight}
        y1={MARGIN_T + PLOT_H}
        x2={tickPxRight}
        y2={MARGIN_T + PLOT_H + 3}
        stroke={t.muted}
        strokeWidth={0.5}
      />

      {/* X-axis tick labels */}
      <text
        x={tickPxLeft}
        y={SVG_H - 5}
        textAnchor="middle"
        fill={t.muted}
        fontSize={6.5}
        fontFamily="inherit"
      >{`\u2212${tickUm}`}</text>
      <text
        x={tickPxRight}
        y={SVG_H - 5}
        textAnchor="middle"
        fill={t.muted}
        fontSize={6.5}
        fontFamily="inherit"
      >{`+${tickUm}`}</text>

      {/* X-axis unit label */}
      <text
        x={MARGIN_L + PLOT_W / 2}
        y={SVG_H - 5}
        textAnchor="middle"
        fill={t.muted}
        fontSize={6.5}
        fontFamily="inherit"
      >
        {"\u00b5m"}
      </text>

      {/* Y-axis label ("zone", rotated) */}
      <text
        x={0}
        y={0}
        textAnchor="middle"
        fill={t.muted}
        fontSize={6.5}
        fontFamily="inherit"
        transform={`rotate(-90) translate(${-(MARGIN_T + PLOT_H / 2)}, 7)`}
      >
        zone
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
        <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>Aberrations</span>
        <CollapseButton
          expanded={expanded}
          onToggle={() => onExpandedChange?.(!expanded)}
          theme={t}
          style={{ marginLeft: "auto" }}
        />
      </div>

      {/* ── Expanded content ── */}
      {expanded && (
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontSize: 9.5 }}>
          {/* Spherical aberration metric */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 10, flexBasis: "100%" }}
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

          {/* LSA profile diagram */}
          {saProfile.length >= 2 && (
            <div style={{ marginTop: 4 }}>
              <SADiagram profile={saProfile} t={t} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
