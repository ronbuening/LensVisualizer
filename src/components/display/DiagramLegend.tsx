/**
 * DiagramLegend — Legend display showing color swatches, symbols, and ray
 * mode descriptions. Includes collapsible toggle for mobile and chromatic
 * aberration readouts.
 *
 * Extracted from LensDiagramPanel for separation of concerns.
 */

import { halfFieldAtZoom } from "../../optics/optics.js";
import {
  ENABLE_ASPH_DIAMOND_FILL,
  ENABLE_EDGE_PROJECTION,
  ENABLE_COLLAPSIBLE_LEGEND,
} from "../../utils/featureFlags.js";
import { collapseBtn } from "../../utils/styles.js";
import type { RuntimeLens, ChromaticSpread } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface DiagramLegendProps {
  L: RuntimeLens;
  t: Theme;
  isWide: boolean;
  zoomT: number;
  showOnAxis: boolean;
  showOffAxis: string;
  showChromatic: boolean;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  chromSpread: ChromaticSpread | null;
  rayTracksF: boolean;
  legendExpanded: boolean;
  onLegendExpandedChange?: (expanded: boolean) => void;
}

export default function DiagramLegend({
  L,
  t,
  isWide,
  zoomT,
  showOnAxis,
  showOffAxis,
  showChromatic,
  chromR,
  chromG,
  chromB,
  chromSpread,
  rayTracksF,
  legendExpanded,
  onLegendExpandedChange,
}: DiagramLegendProps) {
  return (
    <div style={{ padding: "6px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: ENABLE_COLLAPSIBLE_LEGEND && !isWide && !legendExpanded ? 0 : 8,
        }}
      >
        <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>
          {isWide ? "Hover" : "Tap"} an element for optical details
        </span>
        {ENABLE_COLLAPSIBLE_LEGEND && !isWide && (
          <button
            onClick={() => onLegendExpandedChange?.(!legendExpanded)}
            style={{ ...collapseBtn(t), marginLeft: "auto" }}
          >
            LEGEND <span style={{ fontSize: 11, lineHeight: 1 }}>{legendExpanded ? "▴" : "▾"}</span>
          </button>
        )}
      </div>
      {(!ENABLE_COLLAPSIBLE_LEGEND || isWide || legendExpanded) && (
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontSize: 9.5 }}>
          {t.legendSwatches.map(([bg, bd, lb]) => (
            <div key={lb} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <div
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: 2,
                  background: bg,
                  border: `1px solid ${bd}`,
                  transition: "all 0.3s",
                }}
              />
              <span style={{ color: t.legendText, transition: "color 0.3s" }}>{lb}</span>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <svg width="11" height="11" viewBox="0 0 11 11">
              {ENABLE_ASPH_DIAMOND_FILL && (
                <>
                  <defs>
                    <pattern id="legend-asph-dm" width="4" height="4" patternUnits="userSpaceOnUse">
                      <polygon points="2,0.5 3.5,2 2,3.5 0.5,2" fill={t.asphDiamondFill} />
                    </pattern>
                  </defs>
                  <rect x="5" y="0" width="6" height="11" fill="url(#legend-asph-dm)" />
                </>
              )}
              <path d="M5,1 Q2,5.5 5,10" fill="none" stroke={t.asphStroke} strokeWidth={1.6} strokeLinecap="round" />
            </svg>
            <span style={{ color: t.legendText }}>Aspheric surface</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 3, height: 11, background: t.stop, borderRadius: 1 }} />
            <span style={{ color: t.legendText }}>Stop</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 11, height: 1, background: t.imgLine }} />
            <span style={{ color: t.legendText }}>Image plane (fixed)</span>
          </div>
          {showOnAxis && (
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <svg width="14" height="10" viewBox="0 0 14 10">
                <line x1="0" y1="3" x2="14" y2="3" stroke={t.rayWarm} strokeWidth="1.5" />
                <line x1="0" y1="7" x2="14" y2="7" stroke={t.rayCool} strokeWidth="1.5" />
              </svg>
              <span style={{ color: t.legendText }}>
                On-axis rays{rayTracksF ? " (tracks focus)" : " (from \u221e)"}
              </span>
            </div>
          )}
          {showOffAxis !== "off" && (
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <svg width="14" height="10" viewBox="0 0 14 10">
                <line
                  x1="0"
                  y1="3"
                  x2="14"
                  y2="3"
                  stroke={t.rayOffWarm}
                  strokeWidth="1.5"
                  strokeDasharray={t.rayOffDash || "none"}
                />
                <line
                  x1="0"
                  y1="7"
                  x2="14"
                  y2="7"
                  stroke={t.rayOffCool}
                  strokeWidth="1.5"
                  strokeDasharray={t.rayOffDash || "none"}
                />
              </svg>
              <span style={{ color: t.legendText }}>
                Off-axis rays ({(halfFieldAtZoom(zoomT, L) * L.offAxisFieldFrac).toFixed(1)}
                {"\u00b0"}
                {ENABLE_EDGE_PROJECTION && showOffAxis === "edge" ? ", edge proj" : ""})
                {rayTracksF ? " tracks focus" : " from \u221e"}
              </span>
            </div>
          )}
          {showOffAxis !== "off" && (
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <svg width="14" height="10" viewBox="0 0 14 10">
                <line
                  x1="0"
                  y1="5"
                  x2="14"
                  y2="5"
                  stroke={t.rayOffWarm}
                  strokeWidth="0.8"
                  strokeDasharray="3,4"
                  opacity="0.35"
                />
              </svg>
              <span style={{ color: t.legendText }}>Vignetted (ghost)</span>
            </div>
          )}
          {showChromatic &&
            (() => {
              const activeCh = [chromR && "R", chromG && "G", chromB && "B"].filter(Boolean);
              const chromLabel = activeCh.length > 0 ? `Chromatic (${activeCh.join("/")})` : "Chromatic (none)";
              const lcaStr =
                chromSpread && chromSpread.lcaMm !== 0
                  ? ` · LCA ${Math.abs(chromSpread.lcaMm * 1000) >= 1 ? Math.abs(chromSpread.lcaMm * 1000).toFixed(0) : Math.abs(chromSpread.lcaMm * 1000).toFixed(1)} µm`
                  : "";
              return (
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <svg width="22" height="14" viewBox="0 0 22 14">
                    {chromR && <line x1="0" y1="3" x2="22" y2="3" stroke={t.rayChromR} strokeWidth="1.8" />}
                    {chromG && <line x1="0" y1="7" x2="22" y2="7" stroke={t.rayChromG} strokeWidth="1.8" />}
                    {chromB && <line x1="0" y1="11" x2="22" y2="11" stroke={t.rayChromB} strokeWidth="1.8" />}
                  </svg>
                  <span style={{ color: t.legendText }}>
                    {chromLabel}
                    {lcaStr}
                  </span>
                </div>
              );
            })()}
          {showChromatic && chromSpread && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 4,
                flexBasis: "100%",
              }}
            >
              <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em" }}>LCA</span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: t.value,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {chromSpread.lcaMm !== 0
                  ? Math.abs(chromSpread.lcaMm * 1000) >= 1
                    ? `${Math.abs(chromSpread.lcaMm * 1000).toFixed(0)} µm`
                    : `${Math.abs(chromSpread.lcaMm * 1000).toFixed(1)} µm`
                  : "< 0.1 µm"}
              </span>
              {chromSpread.tcaMm !== 0 && (
                <>
                  <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", marginLeft: 6 }}>TCA</span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: t.value,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {Math.abs(chromSpread.tcaMm * 1000) >= 1
                      ? `${Math.abs(chromSpread.tcaMm * 1000).toFixed(0)} µm`
                      : `${Math.abs(chromSpread.tcaMm * 1000).toFixed(1)} µm`}
                  </span>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
