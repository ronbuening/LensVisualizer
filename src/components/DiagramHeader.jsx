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
import { toggleGroup, toggleBtn, chromChannelBtn, collapseBtn, headerStrip } from "../utils/styles.js";

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
        ...headerStrip(t, { padding: compact ? "12px 16px 8px" : "18px 24px 10px" }),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
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
            <button onClick={() => onHeaderInfoExpandedChange?.(!headerInfoExpanded)} style={collapseBtn(t)}>
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
                  ...toggleBtn(t, false, { hasRightBorder: false, padding: "5px 12px" }),
                  borderRadius: 5,
                  width: headerControlsExpanded ? "100%" : "auto",
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
                <div style={toggleGroup(t, { width: "100%" })}>
                  <button onClick={() => onHighContrastChange?.(!highContrast)} style={toggleBtn(t, highContrast)}>
                    <span style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}>◐</span>
                    <span>HC</span>
                  </button>
                  <button
                    onClick={() => onDarkChange?.(!dark)}
                    style={toggleBtn(t, false, { hasRightBorder: false })}
                  >
                    <span style={{ fontSize: 14, lineHeight: 1 }}>{t.toggleIcon}</span>
                    <span>{dark ? "Light" : "Dark"}</span>
                  </button>
                </div>
                {/* Ray toggles */}
                <div style={toggleGroup(t, { width: "100%" })}>
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
                      <button key={idx} onClick={onClick} style={toggleBtn(t, active, { hasRightBorder: idx === 0 })}>
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
                <div style={toggleGroup(t, { width: "100%" })}>
                  {[
                    { label: "FROM \u221e", val: false, icon: "\u2225" },
                    { label: "TRACKS FOCUS", val: true, icon: "\u27e9" },
                  ].map(({ label, val, icon }) => (
                    <button
                      key={label}
                      onClick={() => onRayTracksFChange?.(val)}
                      style={toggleBtn(t, rayTracksF === val, { hasRightBorder: !val, gap: 4 })}
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
                  <div style={toggleGroup(t, { width: "100%" })}>
                    <button
                      onClick={() => onShowChromaticChange?.(!showChromatic)}
                      style={toggleBtn(t, showChromatic, { hasRightBorder: showChromatic })}
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
                        <button key={ch} onClick={() => set?.(!active)} style={chromChannelBtn(t, active, idx < 2)}>
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
