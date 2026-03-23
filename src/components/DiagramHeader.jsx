/**
 * DiagramHeader — Header section for the lens diagram panel.
 *
 * Displays the lens title, subtitle, specs, per-panel compact readouts,
 * theme controls (HC/dark toggles), and ray toggles (on-axis, off-axis,
 * ray mode, chromatic + R/G/B channels).
 *
 * Extracted from LensDiagramPanel to reduce component size.
 * Uses React.forwardRef so the parent can attach headerRef for
 * height measurement and alignment in comparison mode.
 */

import { forwardRef } from "react";
import { eflAtZoom, formatDist } from "../optics/optics.js";
import {
  ENABLE_COLOR_TRACING,
  ENABLE_EDGE_PROJECTION,
  ENABLE_COLLAPSIBLE_HEADER_CONTROLS,
  ENABLE_COLLAPSIBLE_HEADER_INFO,
  ENABLE_MOBILE_CONTROLS_STRIP,
} from "../utils/featureFlags.js";

/* ── Hoisted style constants ── */
const COLLAPSE_BTN_BASE = {
  borderRadius: 10,
  cursor: "pointer",
  padding: "3px 8px",
  display: "flex",
  alignItems: "center",
  gap: 4,
  fontSize: 8,
  fontFamily: "inherit",
  letterSpacing: "0.08em",
  transition: "all 0.25s",
};
const TOGGLE_GROUP_BASE = {
  display: "flex",
  gap: 0,
  borderRadius: 5,
  overflow: "hidden",
  width: "100%",
  transition: "border-color 0.3s",
};
const TOGGLE_BTN_BASE = {
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "inherit",
  letterSpacing: "0.08em",
  transition: "all 0.25s",
  minHeight: 28,
  fontSize: 9,
};

const DiagramHeader = forwardRef(function DiagramHeader(
  {
    L,
    t,
    dark,
    compact,
    isWide,
    focusT,
    zoomT,
    fNumber,
    showOnAxis,
    onShowOnAxisChange,
    showOffAxis,
    onShowOffAxisChange,
    rayTracksF,
    onRayTracksFChange,
    showChromatic,
    onShowChromaticChange,
    chromR,
    chromG,
    chromB,
    onChromRChange,
    onChromGChange,
    onChromBChange,
    onDarkChange,
    onHighContrastChange,
    highContrast,
    headerControlsExpanded,
    onHeaderControlsExpandedChange,
    headerInfoExpanded,
    onHeaderInfoExpandedChange,
    minHeaderHeight,
  },
  ref,
) {
  return (
    <div
      ref={ref}
      style={{
        padding: compact ? "12px 16px 8px" : "18px 24px 10px",
        borderBottom: `1px solid ${t.headerBorder}`,
        backgroundColor: t.headerBgColor,
        backgroundImage: t.headerBgImage,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        transition: "background-color 0.3s,border-color 0.3s",
        ...(minHeaderHeight ? { minHeight: minHeaderHeight } : {}),
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: compact ? 8 : 10, flexWrap: "wrap" }}>
          <h1
            style={{
              fontSize: compact ? 14 : 17,
              fontWeight: 700,
              letterSpacing: "0.04em",
              margin: 0,
              color: t.title,
              fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
              transition: "color 0.3s",
            }}
          >
            {L.data.name}
          </h1>
          {!compact && (
            <a
              href={`https://www.flickr.com/search/?text=${encodeURIComponent(L.data.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`Search Flickr for "${L.data.name}"`}
              style={{
                fontSize: 11,
                color: t.descLinkColor,
                letterSpacing: "0.06em",
                textDecoration: "none",
                borderBottom: `1px solid ${t.descLinkColor}40`,
                whiteSpace: "nowrap",
                transition: "color 0.3s, border-color 0.3s",
              }}
            >
              flickr ↗
            </a>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: compact ? 2 : 3 }}>
          <span
            style={{
              fontSize: compact ? 9 : 10.5,
              color: t.subtitle,
              letterSpacing: "0.08em",
              transition: "color 0.3s",
            }}
          >
            {L.data.subtitle}
          </span>
          {ENABLE_COLLAPSIBLE_HEADER_INFO && !isWide && (
            <button
              onClick={() => onHeaderInfoExpandedChange?.(!headerInfoExpanded)}
              style={{
                ...COLLAPSE_BTN_BASE,
                background: t.toggleBg,
                border: `1px solid ${t.toggleBorder}`,
                color: t.muted,
              }}
            >
              <span>{headerInfoExpanded ? "LESS" : "MORE"}</span>
              <span style={{ fontSize: 11, lineHeight: 1 }}>{headerInfoExpanded ? "▴" : "▾"}</span>
            </button>
          )}
        </div>
        {(!ENABLE_COLLAPSIBLE_HEADER_INFO || isWide || headerInfoExpanded) && (
          <>
            <div
              style={{
                display: "flex",
                gap: compact ? 14 : 22,
                marginTop: compact ? 4 : 6,
                fontSize: compact ? 9 : 10,
                color: t.specs,
                letterSpacing: "0.06em",
                transition: "color 0.3s",
                flexWrap: "wrap",
              }}
            >
              {L.data.specs.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            {/* Per-panel readouts in compact mode */}
            {compact && (
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  marginTop: 6,
                  fontSize: 10,
                  color: t.value,
                  letterSpacing: "0.04em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {L.isZoom && <span>{eflAtZoom(zoomT, L).toFixed(0)} mm</span>}
                <span>{formatDist(focusT, L)}</span>
                <span>f/{fNumber < 10 ? fNumber.toFixed(1) : Math.round(fNumber)}</span>
                <span>EFL {L.isZoom ? eflAtZoom(zoomT, L).toFixed(1) : L.EFL.toFixed(1)}</span>
              </div>
            )}
          </>
        )}
      </div>
      {/* Theme + ray controls in non-compact (single-lens) mode.
           Hidden on mobile when ENABLE_MOBILE_CONTROLS_STRIP is active
           (controls live in the always-visible strip instead). */}
      {(!ENABLE_COLLAPSIBLE_HEADER_INFO || isWide || headerInfoExpanded) &&
        !compact &&
        !(ENABLE_MOBILE_CONTROLS_STRIP && !isWide) && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 8,
              flexShrink: 0,
              width: isWide ? 220 : ENABLE_COLLAPSIBLE_HEADER_CONTROLS && !headerControlsExpanded ? "auto" : 220,
            }}
          >
            {/* Mobile collapse toggle for controls */}
            {ENABLE_COLLAPSIBLE_HEADER_CONTROLS && !isWide && (
              <button
                onClick={() => onHeaderControlsExpandedChange?.(!headerControlsExpanded)}
                style={{
                  background: t.toggleBg,
                  border: `1px solid ${t.toggleBorder}`,
                  borderRadius: 5,
                  padding: "5px 12px",
                  cursor: "pointer",
                  fontSize: 9,
                  color: t.toggleInactiveText,
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  transition: "all 0.25s",
                  fontFamily: "inherit",
                  letterSpacing: "0.08em",
                  width: headerControlsExpanded ? "100%" : "auto",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 11, lineHeight: 1 }}>⚙</span>
                <span>CONTROLS</span>
                <span style={{ fontSize: 11, lineHeight: 1 }}>{headerControlsExpanded ? "▴" : "▾"}</span>
              </button>
            )}
            {/* Theme controls */}
            {(isWide || !ENABLE_COLLAPSIBLE_HEADER_CONTROLS || headerControlsExpanded) && (
              <>
                <div style={{ ...TOGGLE_GROUP_BASE, border: `1px solid ${t.toggleBorder}` }}>
                  <button
                    onClick={() => onHighContrastChange?.(!highContrast)}
                    style={{
                      ...TOGGLE_BTN_BASE,
                      flex: 1,
                      background: highContrast ? t.toggleActiveBg : t.toggleBg,
                      borderRight: `1px solid ${t.toggleBorder}`,
                      padding: "5px 8px",
                      color: highContrast ? t.toggleActiveText : t.toggleInactiveText,
                      gap: 5,
                    }}
                  >
                    <span style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}>◐</span>
                    <span>HC</span>
                  </button>
                  <button
                    onClick={() => onDarkChange?.(!dark)}
                    style={{
                      ...TOGGLE_BTN_BASE,
                      flex: 1,
                      background: t.toggleBg,
                      padding: "5px 8px",
                      color: t.toggleInactiveText,
                      gap: 5,
                    }}
                  >
                    <span style={{ fontSize: 14, lineHeight: 1 }}>{t.toggleIcon}</span>
                    <span>{dark ? "Light" : "Dark"}</span>
                  </button>
                </div>
                {/* Ray toggles */}
                <div style={{ ...TOGGLE_GROUP_BASE, border: `1px solid ${t.toggleBorder}` }}>
                  {(() => {
                    const offAxisActive = showOffAxis !== "off";
                    const offAxisCycle = ENABLE_EDGE_PROJECTION
                      ? () =>
                          onShowOffAxisChange?.(
                            showOffAxis === "off" ? "trueAngle" : showOffAxis === "trueAngle" ? "edge" : "off",
                          )
                      : () => onShowOffAxisChange?.(offAxisActive ? "off" : "trueAngle");
                    const offAxisLabel = ENABLE_EDGE_PROJECTION
                      ? showOffAxis === "edge"
                        ? "EDGE PROJ"
                        : showOffAxis === "trueAngle"
                          ? "TRUE \u2220"
                          : "OFF-AXIS"
                      : "OFF-AXIS";
                    return [
                      {
                        label: "ON-AXIS",
                        active: showOnAxis,
                        onClick: () => onShowOnAxisChange?.(!showOnAxis),
                        dotA: t.rayWarm,
                        dotB: t.rayCool,
                      },
                      {
                        label: offAxisLabel,
                        active: offAxisActive,
                        onClick: offAxisCycle,
                        dotA: t.rayOffWarm,
                        dotB: t.rayOffCool,
                      },
                    ].map(({ label, active, onClick, dotA, dotB }, idx) => (
                      <button
                        key={idx}
                        onClick={onClick}
                        style={{
                          ...TOGGLE_BTN_BASE,
                          flex: 1,
                          background: active ? t.toggleActiveBg : t.toggleBg,
                          borderRight: idx === 0 ? `1px solid ${t.toggleBorder}` : "none",
                          padding: "5px 8px",
                          color: active ? t.toggleActiveText : t.toggleInactiveText,
                          gap: 5,
                        }}
                      >
                        <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
                          <line
                            x1="0"
                            y1="4"
                            x2="14"
                            y2="4"
                            stroke={active ? dotA : "rgba(128,128,128,0.3)"}
                            strokeWidth="1.5"
                          />
                          <line
                            x1="0"
                            y1="7"
                            x2="14"
                            y2="7"
                            stroke={active ? dotB : "rgba(128,128,128,0.3)"}
                            strokeWidth="1.5"
                          />
                        </svg>
                        <span>{label}</span>
                      </button>
                    ));
                  })()}
                </div>
                {/* Ray mode */}
                <div style={{ ...TOGGLE_GROUP_BASE, border: `1px solid ${t.toggleBorder}` }}>
                  {[
                    { label: "FROM \u221e", val: false, icon: "\u2225" },
                    { label: "TRACKS FOCUS", val: true, icon: "\u27e9" },
                  ].map(({ label, val, icon }) => (
                    <button
                      key={label}
                      onClick={() => onRayTracksFChange?.(val)}
                      style={{
                        ...TOGGLE_BTN_BASE,
                        flex: 1,
                        background: rayTracksF === val ? t.toggleActiveBg : t.toggleBg,
                        borderRight: !val ? `1px solid ${t.toggleBorder}` : "none",
                        padding: "5px 8px",
                        color: rayTracksF === val ? t.toggleActiveText : t.toggleInactiveText,
                        gap: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          lineHeight: 1,
                          opacity: rayTracksF === val ? 1 : 0.4,
                        }}
                      >
                        {icon}
                      </span>
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
                {/* Chromatic */}
                {ENABLE_COLOR_TRACING && (
                  <div style={{ ...TOGGLE_GROUP_BASE, border: `1px solid ${t.toggleBorder}` }}>
                    <button
                      onClick={() => onShowChromaticChange?.(!showChromatic)}
                      style={{
                        ...TOGGLE_BTN_BASE,
                        flex: 1,
                        background: showChromatic ? t.toggleActiveBg : t.toggleBg,
                        borderRight: showChromatic ? `1px solid ${t.toggleBorder}` : "none",
                        padding: "5px 8px",
                        color: showChromatic ? t.toggleActiveText : t.toggleInactiveText,
                        gap: 5,
                      }}
                    >
                      <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
                        <line
                          x1="0"
                          y1="1"
                          x2="14"
                          y2="1"
                          stroke={showChromatic ? t.rayChromR : "rgba(128,128,128,0.3)"}
                          strokeWidth="1.5"
                        />
                        <line
                          x1="0"
                          y1="4"
                          x2="14"
                          y2="4"
                          stroke={showChromatic ? t.rayChromG : "rgba(128,128,128,0.3)"}
                          strokeWidth="1.5"
                        />
                        <line
                          x1="0"
                          y1="7"
                          x2="14"
                          y2="7"
                          stroke={showChromatic ? t.rayChromB : "rgba(128,128,128,0.3)"}
                          strokeWidth="1.5"
                        />
                      </svg>
                      <span>COLOR</span>
                    </button>
                    {showChromatic &&
                      [
                        { ch: "R", active: chromR, set: onChromRChange, color: t.rayChromR },
                        { ch: "G", active: chromG, set: onChromGChange, color: t.rayChromG },
                        { ch: "B", active: chromB, set: onChromBChange, color: t.rayChromB },
                      ].map(({ ch, active, set, color }, idx) => (
                        <button
                          key={ch}
                          onClick={() => set?.(!active)}
                          style={{
                            ...TOGGLE_BTN_BASE,
                            flex: 0.6,
                            background: active ? t.toggleActiveBg : t.toggleBg,
                            borderRight: idx < 2 ? `1px solid ${t.toggleBorder}` : "none",
                            padding: "5px 6px",
                            color: active ? t.toggleActiveText : t.toggleInactiveText,
                            gap: 3,
                          }}
                        >
                          <span
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: active ? color : "rgba(128,128,128,0.3)",
                              display: "inline-block",
                            }}
                          />
                          <span>{ch}</span>
                        </button>
                      ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
    </div>
  );
});

export default DiagramHeader;
