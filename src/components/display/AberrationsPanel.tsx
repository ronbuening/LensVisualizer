/**
 * AberrationsPanel — Collapsible panel displaying computed aberration metrics
 * for the current lens state.
 *
 * Currently shows spherical aberration (SA). Designed as the container for
 * future aberration/distortion displays (issues #297–#300).
 *
 * The panel computes SA via useMemo from the current slider state and
 * delegates the heavy lifting to the pure computeSphericalAberration() helper.
 */

import { useMemo } from "react";
import CollapseButton from "../controls/CollapseButton.js";
import { computeSphericalAberration } from "../../optics/aberrationAnalysis.js";
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
        </div>
      )}
    </div>
  );
}
