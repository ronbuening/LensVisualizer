/**
 * LensDiagramPanel — Self-contained lens diagram renderer.
 *
 * Owns its own lens building, layout computation, coordinate transforms,
 * ray tracing, element inspection, and all SVG rendering.  Receives
 * shared control state (focus, aperture, ray toggles, theme) from the
 * parent (LensViewer).
 *
 * Data flow:
 *   LensViewer → props (lensKey, focusT, zoomT, stopdownT, theme, …)
 *   LensDiagramPanel:
 *     1. buildLens(LENS_CATALOG[lensKey]) → frozen lens object L
 *     2. doLayout(focusT, zoomT, L)       → surface z-positions
 *     3. traceRay / traceRayChromatic     → ray paths through the system
 *     4. SVG rendering of elements, rays, aperture, image plane, insets
 *
 * In comparison mode, two instances of this component are rendered
 * side-by-side, each with its own lensKey. The `scaleRatio` prop
 * enables normalized scale mode so both diagrams share the same
 * physical mm-per-pixel ratio.
 */

import { useState, useEffect, useLayoutEffect, useRef, Component } from "react";
import { eflAtZoom, halfFieldAtZoom, formatDist } from "../optics/optics.js";
import useLensComputation from "./useLensComputation.js";
import useRayTracing from "./useRayTracing.js";
import DiagramControls from "./DiagramControls.jsx";
import ElementInspector from "./ElementInspector.jsx";
import {
  ENABLE_COLOR_TRACING,
  ENABLE_ASPH_DIAMOND_FILL,
  ENABLE_DYNAMIC_DIAGRAM_HEIGHT,
  ENABLE_EDGE_PROJECTION,
  ENABLE_COLLAPSIBLE_HEADER_CONTROLS,
  ENABLE_COLLAPSIBLE_LEGEND,
  ENABLE_COLLAPSIBLE_HEADER_INFO,
  ENABLE_MOBILE_CONTROLS_STRIP,
} from "../utils/featureFlags.js";
import { ErrorDisplay } from "./ErrorBoundary.jsx";

/* =====================================================================
 * §1  HOISTED STYLES & ERROR BOUNDARY
 * ===================================================================== */
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

/* ── Panel-level error boundary — catches render errors within a single diagram ──
 * Separate from the app-wide ErrorBoundary so that one broken lens doesn't
 * crash the entire comparison view. Resets automatically when lensKey changes. */
class PanelErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error(`[LensDiagramPanel] Render error for lens "${this.props.lensKey}":`, error, info?.componentStack);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.lensKey !== this.props.lensKey) this.setState({ error: null });
  }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
        <ErrorDisplay
          error={this.state.error}
          context={{ component: "LensDiagramPanel", lensKey: this.props.lensKey }}
          title="Diagram Rendering Error"
          onRetry={() => this.setState({ error: null })}
        />
      </div>
    );
  }
}

/* =====================================================================
 * §2  COMPONENT — State, memos, ray tracing, and computed data
 * ===================================================================== */

/**
 * @param {Object}  props
 * @param {string}  props.lensKey       — catalog key identifying the lens to render
 * @param {number}  props.focusT        — focus position [0 = ∞, 1 = closest focus]
 * @param {number}  props.zoomT         — zoom position [0..1] (ignored for primes)
 * @param {number}  props.stopdownT     — aperture stopdown [0 = wide open, 1 = max]
 * @param {boolean} props.showOnAxis    — render on-axis ray fan
 * @param {string}  props.showOffAxis   — off-axis mode: "off"|"trueAngle"|"edge"
 * @param {boolean} props.showChromatic — render chromatic (R/G/B) ray fans
 * @param {boolean} props.chromR/G/B    — per-channel toggles for chromatic rays
 * @param {boolean} props.rayTracksF    — true: rays converge at focus distance;
 *                                        false: rays arrive from ∞ (parallel)
 * @param {number|null} props.scaleRatio — if non-null, scales the diagram by this
 *                                         factor (used in normalized comparison mode)
 * @param {Object}  props.theme         — active theme object from themes.js
 * @param {boolean} props.dark          — true when a dark theme is active
 * @param {string}  props.panelId       — unique ID for SVG filter namespacing ("a"/"b"/"main")
 * @param {boolean} props.compact       — true in comparison mode (smaller header/controls)
 * @param {boolean} props.flashOverlay  — trigger a brief highlight flash (sticky slider feedback)
 */
export default function LensDiagramPanel({
  lensKey,
  focusT,
  zoomT = 0,
  stopdownT,
  showOnAxis,
  showOffAxis,
  showChromatic,
  chromR,
  chromG,
  chromB,
  rayTracksF,
  scaleRatio,
  theme: t,
  dark,
  panelId,
  compact,
  showControls = true,
  showSliders = true,
  maxSvgHeight = ENABLE_DYNAMIC_DIAGRAM_HEIGHT ? "calc(100vh - 260px)" : "54vh",
  minHeaderHeight,
  onFocusChange,
  onZoomChange,
  onStopdownChange,
  onHeaderHeight,
  /* Ray/theme toggle callbacks (used in non-compact mode) */
  onShowOnAxisChange,
  onShowOffAxisChange,
  onRayTracksFChange,
  onShowChromaticChange,
  onChromRChange,
  onChromGChange,
  onChromBChange,
  onDarkChange,
  onHighContrastChange,
  highContrast,
  flashOverlay = false,
  onSliderPointerUp,
  sideLayoutEnabled = false,
  isWide = true,
  focusExpanded = true,
  onFocusExpandedChange,
  apertureExpanded = true,
  onApertureExpandedChange,
  headerControlsExpanded = false,
  onHeaderControlsExpandedChange,
  legendExpanded = false,
  onLegendExpandedChange,
  headerInfoExpanded = true,
  onHeaderInfoExpandedChange,
}) {
  const [hov, setHov] = useState(null);
  const [sel, setSel] = useState(null);
  const [useSideLayout, setUseSideLayout] = useState(false);
  const panelContainerRef = useRef(null);
  const sideLayoutRef = useRef(false);
  const [flashKey, setFlashKey] = useState(0);
  const [flashVisible, setFlashVisible] = useState(false);
  const [flashFading, setFlashFading] = useState(false);

  useEffect(() => {
    setHov(null);
    setSel(null);
  }, [lensKey]);

  /* ── Flash overlay animation — two-phase: appear bright, then fade out ── */
  useEffect(() => {
    if (!flashOverlay) return;
    setFlashVisible(true);
    setFlashFading(false);
    setFlashKey((k) => k + 1);
    /* Phase 2: start fade after two frames so browser paints the bright state */
    let raf1, raf2, timer;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setFlashFading(true);
        /* Phase 3: unmount after fade completes */
        timer = setTimeout(() => setFlashVisible(false), 500);
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timer);
    };
  }, [flashOverlay]);

  /* ── Header height reporting for alignment ── */
  const headerRef = useRef(null);
  useLayoutEffect(() => {
    if (!onHeaderHeight || !headerRef.current) return;
    const el = headerRef.current;
    const report = () => onHeaderHeight(panelId, el.scrollHeight);
    report();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(report);
    ro.observe(el);
    return () => ro.disconnect();
  }, [onHeaderHeight, panelId, lensKey]);

  /* ── Side-panel overflow detection ── */
  useLayoutEffect(() => {
    sideLayoutRef.current = useSideLayout;
  }, [useSideLayout]);

  useLayoutEffect(() => {
    if (!sideLayoutEnabled || !panelContainerRef.current) {
      setUseSideLayout(false);
      return;
    }
    const el = panelContainerRef.current;
    const check = () => {
      const rect = el.getBoundingClientRect();
      const available = window.innerHeight - rect.top;
      if (!sideLayoutRef.current) {
        if (el.scrollHeight > available + 10) setUseSideLayout(true);
      } else {
        if (available > el.scrollHeight + 200) setUseSideLayout(false);
      }
    };
    check();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(check);
    ro.observe(el);
    window.addEventListener("resize", check);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", check);
    };
  }, [sideLayoutEnabled, lensKey, showSliders, showControls, showChromatic]);

  /* ── Lens computation (build, layout, transforms, shapes, aperture) ── */
  const {
    L,
    buildError,
    IMG_MM,
    zPos,
    sx,
    sy,
    clampedRayEnd,
    CX,
    IX,
    effectiveSC,
    shapes,
    stopZ,
    fNumber,
    currentPhysStopSD,
    baseEPSD,
    currentEPSD,
    varReadouts,
    filterId,
  } = useLensComputation({ lensKey, focusT, zoomT, stopdownT, scaleRatio, panelId });

  const act = L ? sel || hov : null;
  const info = act && L ? L.elements.find((e) => e.id === act) : null;
  /* ── Ray tracing (on-axis, off-axis, chromatic) ── */
  const { rays, offAxisRays, chromaticRays, chromSpread } = useRayTracing({
    L,
    zPos,
    IMG_MM,
    focusT,
    zoomT,
    sx,
    sy,
    clampedRayEnd,
    currentPhysStopSD,
    currentEPSD,
    rayTracksF,
    showOffAxis,
    showChromatic,
    chromR,
    chromG,
    chromB,
    lensKey,
  });

  /* =====================================================================
   * §3  RENDER — Header, SVG diagram, controls, and inspector
   * ===================================================================== */
  return (
    <PanelErrorBoundary lensKey={lensKey}>
      {buildError ? (
        <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
          <ErrorDisplay
            error={buildError}
            context={{ component: "LensDiagramPanel (buildLens)", lensKey }}
            title="Failed to build lens"
          />
        </div>
      ) : (
        <div ref={panelContainerRef}>
          {/* ── Header ── */}
          <div
            ref={headerRef}
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

          {/* ── SVG + controls body (side-by-side when overflowing) ── */}
          <div style={useSideLayout ? { display: "flex", minHeight: 0 } : undefined}>
            {/* ── SVG viewport ── */}
            <div style={useSideLayout ? { flex: 1, minWidth: 0 } : undefined}>
              <svg
                viewBox={`0 0 ${L.svgW} ${L.svgH}`}
                width="100%"
                style={{
                  display: "block",
                  maxHeight: useSideLayout
                    ? `calc(100vh - ${headerRef.current?.offsetHeight || 80}px - 20px)`
                    : maxSvgHeight,
                  minHeight: compact ? 200 : 290,
                  background: t.bg,
                  transition: "background 0.3s",
                }}
              >
                <defs>
                  {dark ? (
                    <filter id={filterId}>
                      <feGaussianBlur stdDeviation="2.5" result="b" />
                      <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  ) : (
                    <filter id={filterId}>
                      <feGaussianBlur stdDeviation="3" result="b" />
                      <feFlood floodColor="#1070c0" floodOpacity="0.12" result="c" />
                      <feComposite in="c" in2="b" operator="in" result="d" />
                      <feMerge>
                        <feMergeNode in="d" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  )}
                  {ENABLE_ASPH_DIAMOND_FILL && (
                    <pattern id={`${filterId}-asph-dm`} width="7" height="7" patternUnits="userSpaceOnUse">
                      <polygon points="3.5,1 6,3.5 3.5,6 1,3.5" fill={t.asphDiamondFill} />
                    </pattern>
                  )}
                </defs>
                {Array.from({ length: L.gridCount }, (_, i) => {
                  const x = CX - (L.gridCount / 2) * L.gridPitch * effectiveSC + i * L.gridPitch * effectiveSC;
                  return x > 0 && x < L.svgW ? (
                    <line
                      key={i}
                      x1={x}
                      y1={20}
                      x2={x}
                      y2={L.svgH - 20}
                      stroke={t.grid(i)}
                      strokeWidth={t.gridStrokeWidth}
                      strokeDasharray={t.gridDash(i)}
                    />
                  ) : null;
                })}
                <line
                  x1={8}
                  y1={sy(0)}
                  x2={L.svgW - 8}
                  y2={sy(0)}
                  stroke={t.axis}
                  strokeWidth={0.5}
                  strokeDasharray="6,4"
                />

                {showOnAxis &&
                  rays.map(({ sp, gp }, ri) => {
                    const color = ri < L.rayHeights.length / 2 ? t.rayCool : t.rayWarm;
                    return (
                      <g key={`on${ri}`}>
                        {sp.length > 1 && (
                          <polyline
                            points={sp.map((p) => `${p[0]},${p[1]}`).join(" ")}
                            fill="none"
                            stroke={color}
                            strokeWidth={1.2 * t.rayWidthScale}
                          />
                        )}
                        {gp.length > 1 && (
                          <polyline
                            points={gp.map((p) => `${p[0]},${p[1]}`).join(" ")}
                            fill="none"
                            stroke={color}
                            strokeWidth={0.6 * t.rayWidthScale}
                            strokeDasharray="3,4"
                            opacity={0.3}
                          />
                        )}
                      </g>
                    );
                  })}

                {showOffAxis !== "off" &&
                  offAxisRays.map(({ sp, gp }, ri) => {
                    const color = ri < L.offAxisHeights.length / 2 ? t.rayOffCool : t.rayOffWarm;
                    return (
                      <g key={`off${ri}`}>
                        {sp.length > 1 && (
                          <polyline
                            points={sp.map((p) => `${p[0]},${p[1]}`).join(" ")}
                            fill="none"
                            stroke={color}
                            strokeWidth={1.1 * t.rayWidthScale}
                            strokeDasharray={t.rayOffDash || "none"}
                          />
                        )}
                        {gp.length > 1 && (
                          <polyline
                            points={gp.map((p) => `${p[0]},${p[1]}`).join(" ")}
                            fill="none"
                            stroke={color}
                            strokeWidth={0.6 * t.rayWidthScale}
                            strokeDasharray="3,4"
                            opacity={0.3}
                          />
                        )}
                      </g>
                    );
                  })}

                {showChromatic &&
                  chromaticRays.map(({ sp, gp, channel }, ri) => {
                    const color = channel === "R" ? t.rayChromR : channel === "G" ? t.rayChromG : t.rayChromB;
                    return (
                      <g key={`chrom${ri}`}>
                        {sp.length > 1 && (
                          <polyline
                            points={sp.map((p) => `${p[0]},${p[1]}`).join(" ")}
                            fill="none"
                            stroke={color}
                            strokeWidth={1.0 * t.rayWidthScale}
                          />
                        )}
                        {gp.length > 1 && (
                          <polyline
                            points={gp.map((p) => `${p[0]},${p[1]}`).join(" ")}
                            fill="none"
                            stroke={color}
                            strokeWidth={0.5 * t.rayWidthScale}
                            strokeDasharray="3,4"
                            opacity={0.3}
                          />
                        )}
                      </g>
                    );
                  })}

                {/* Element filled shapes — clickable for inspection, highlighted on hover.
                 * Hit-testing uses SVG's native pointer events on the <path> elements. */}
                {shapes.map(({ eid, d: path }) => {
                  const e = L.elements.find((x) => x.id === eid);
                  const on = act === eid;
                  return (
                    <path
                      key={eid}
                      d={path}
                      fill={t.elemFill(e, on)}
                      stroke={t.elemStroke(e, on)}
                      strokeWidth={on ? t.elemStrokeActive : t.elemStrokeIdle}
                      style={{ cursor: "pointer", transition: "all 0.12s", filter: on ? `url(#${filterId})` : "none" }}
                      onMouseEnter={() => setHov(eid)}
                      onMouseLeave={() => setHov(null)}
                      onClick={() => setSel(sel === eid ? null : eid)}
                    />
                  );
                })}

                {/* Aspheric diamond half-fill */}
                {ENABLE_ASPH_DIAMOND_FILL &&
                  shapes.flatMap(({ asphPaths }) =>
                    (asphPaths || []).map(({ surfIdx, halfPathD }) => (
                      <path
                        key={`asph-df-${surfIdx}`}
                        d={halfPathD}
                        fill={`url(#${filterId}-asph-dm)`}
                        stroke="none"
                        style={{ pointerEvents: "none" }}
                      />
                    )),
                  )}

                {/* Aspheric surface accent strokes */}
                {shapes.flatMap(({ asphPaths }) =>
                  (asphPaths || []).map(({ surfIdx, pathD }) => (
                    <path
                      key={`asph-${surfIdx}`}
                      d={pathD}
                      fill="none"
                      stroke={t.asphStroke}
                      strokeWidth={t.asphStrokeWidth}
                      strokeLinecap="round"
                      style={{ pointerEvents: "none" }}
                    />
                  )),
                )}

                {/* Aspheric "A" labels */}
                {shapes.flatMap(({ asphPaths }) =>
                  (asphPaths || []).map(({ surfIdx, labelX, labelY }) => (
                    <text
                      key={`asph-lbl-${surfIdx}`}
                      x={labelX}
                      y={labelY}
                      textAnchor="middle"
                      fill={t.asphLabel}
                      fontSize={6.5}
                      fontFamily="inherit"
                      fontWeight={500}
                      style={{ pointerEvents: "none", letterSpacing: "0.06em" }}
                    >
                      A
                    </text>
                  )),
                )}

                {/* Aperture stop blades — drawn as two thick lines (top and bottom) from
                 * the physical stop edge inward to the current aperture opening */}
                {(() => {
                  const bladeInner = Math.min(currentPhysStopSD, L.stopPhysSD * (1 - L.bladeStubFrac));
                  return (
                    <>
                      <line
                        x1={sx(stopZ)}
                        y1={sy(-L.stopPhysSD)}
                        x2={sx(stopZ)}
                        y2={sy(-bladeInner)}
                        stroke={t.stop}
                        strokeWidth={2.2}
                        strokeLinecap="round"
                      />
                      <line
                        x1={sx(stopZ)}
                        y1={sy(L.stopPhysSD)}
                        x2={sx(stopZ)}
                        y2={sy(bladeInner)}
                        stroke={t.stop}
                        strokeWidth={2.2}
                        strokeLinecap="round"
                      />
                    </>
                  );
                })()}
                <text
                  x={sx(stopZ)}
                  y={sy(-L.stopPhysSD - L.lyStoPad)}
                  textAnchor="middle"
                  fill={t.stopLabel}
                  fontSize={7.5}
                  fontFamily="inherit"
                  style={{ letterSpacing: "0.1em" }}
                >
                  STO
                </text>

                <line
                  x1={IX}
                  y1={sy(-L.lyImgLine)}
                  x2={IX}
                  y2={sy(L.lyImgLine)}
                  stroke={t.imgLine}
                  strokeWidth={t.imgLineWidth}
                  strokeDasharray="4,3"
                />
                <text
                  x={IX}
                  y={sy(L.lyImgLabel)}
                  textAnchor="middle"
                  fill={t.imgLabel}
                  fontSize={7.5}
                  fontFamily="inherit"
                  style={{ letterSpacing: "0.12em" }}
                >
                  IMG
                </text>

                {/* ── LCA inset widget ──
                 * Magnified view of where each wavelength's marginal ray crosses the axis.
                 * Green (G/d-line) is the reference; R and B offsets show longitudinal
                 * chromatic aberration. `mag` scales the tiny mm differences to fill the
                 * inset box, clamped at 5000× to avoid pixel overflow for sub-micron LCA. */}
                {showChromatic &&
                  chromSpread &&
                  chromSpread.lcaMm !== 0 &&
                  (() => {
                    const insetW = 90;
                    const insetH = 100;
                    const gRef = chromSpread.intercepts.G || IMG_MM;
                    const activeChans = ["R", "G", "B"].filter((ch) => chromSpread.intercepts[ch] !== undefined);
                    const offsets = activeChans.map((ch) => Math.abs(chromSpread.intercepts[ch] - gRef));
                    const maxOff = Math.max(...offsets, 1e-9);
                    const maxPixelSpan = (insetW - 24) / 2;
                    const mag = Math.min(maxPixelSpan / (maxOff * effectiveSC), 5000);
                    let insetX = IX + 10;
                    if (insetX + insetW > L.svgW - 4) insetX = IX - insetW - 10;
                    const insetY = sy(0) - 55;
                    const midX = insetX + insetW / 2;
                    return (
                      <g>
                        <rect
                          x={insetX}
                          y={insetY}
                          width={insetW}
                          height={insetH}
                          rx={4}
                          fill={t.panelBg}
                          stroke={t.panelBorder}
                          strokeWidth={0.6}
                          opacity={0.94}
                        />
                        <text
                          x={midX}
                          y={insetY + 14}
                          textAnchor="middle"
                          fill={t.muted}
                          fontSize={8.5}
                          fontFamily="inherit"
                          style={{ letterSpacing: "0.1em" }}
                        >
                          LCA
                        </text>
                        <line
                          x1={insetX + 6}
                          y1={insetY + 40}
                          x2={insetX + insetW - 6}
                          y2={insetY + 40}
                          stroke={t.axis}
                          strokeWidth={0.5}
                        />
                        {activeChans.map((ch) => {
                          const offset = (chromSpread.intercepts[ch] - gRef) * mag * effectiveSC;
                          const color = ch === "R" ? t.rayChromR : ch === "G" ? t.rayChromG : t.rayChromB;
                          return (
                            <g key={ch}>
                              <line
                                x1={midX + offset}
                                y1={insetY + 22}
                                x2={midX + offset}
                                y2={insetY + 56}
                                stroke={color}
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                              <text
                                x={midX + offset}
                                y={insetY + 67}
                                textAnchor="middle"
                                fill={color}
                                fontSize={8.5}
                                fontFamily="inherit"
                                fontWeight={600}
                              >
                                {ch}
                              </text>
                            </g>
                          );
                        })}
                        <text
                          x={midX}
                          y={insetY + 82}
                          textAnchor="middle"
                          fill={t.value}
                          fontSize={10}
                          fontFamily="inherit"
                          fontWeight={600}
                        >
                          {Math.abs(chromSpread.lcaMm * 1000) >= 1
                            ? `${Math.abs(chromSpread.lcaMm * 1000).toFixed(0)} \u00b5m`
                            : `${Math.abs(chromSpread.lcaMm * 1000).toFixed(1)} \u00b5m`}
                        </text>
                        <text
                          x={midX}
                          y={insetY + 95}
                          textAnchor="middle"
                          fill={t.muted}
                          fontSize={7.5}
                          fontFamily="inherit"
                        >
                          {Math.round(mag)}
                          {"\u00d7"}
                        </text>
                      </g>
                    );
                  })()}

                {shapes.map(({ eid, z1, z2 }) => {
                  const e = L.elements.find((x) => x.id === eid);
                  const on = act === eid;
                  return (
                    <text
                      key={`n${eid}`}
                      x={sx((z1 + z2) / 2)}
                      y={sy(L.lyElemNum)}
                      textAnchor="middle"
                      fill={on ? t.elemNumActive : t.elemNum(e)}
                      fontSize={7}
                      fontFamily="inherit"
                      fontWeight={on ? 700 : 400}
                    >
                      {eid}
                    </text>
                  );
                })}

                {/* Abbe number (νd) badges — color-coded by dispersion class:
                 * <35 = high dispersion (flint), 35-55 = normal, >55 = low dispersion (crown/ED) */}
                {showChromatic &&
                  shapes.map(({ eid, z1, z2 }) => {
                    const e = L.elements.find((x) => x.id === eid);
                    if (!e || !e.vd) return null;
                    const on = act === eid;
                    const dispColor = e.vd < 35 ? t.chromDispHigh : e.vd < 55 ? t.chromDispMid : t.chromDispLow;
                    return (
                      <text
                        key={`vd${eid}`}
                        x={sx((z1 + z2) / 2)}
                        y={sy(L.lyVdBadge)}
                        textAnchor="middle"
                        fill={on ? t.elemNumActive : dispColor}
                        fontSize={8.5}
                        fontFamily="inherit"
                        fontWeight={on ? 600 : 500}
                        opacity={on ? 1 : 0.9}
                      >
                        {"\u03bd"}
                        {e.vd.toFixed(0)}
                      </text>
                    );
                  })}

                {L.groups.map(({ text, fromSurface, toSurface }) => (
                  <text
                    key={text}
                    x={sx((zPos[fromSurface] + zPos[toSurface]) / 2)}
                    y={sy(L.lyGroup)}
                    fill={t.groupLabel}
                    fontSize={7}
                    fontFamily="inherit"
                    textAnchor="middle"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    {text}
                  </text>
                ))}

                {L.doublets.map(({ text, fromSurface, toSurface }) => (
                  <text
                    key={text}
                    x={sx((zPos[fromSurface] + zPos[toSurface]) / 2)}
                    y={sy(L.lyDoublet)}
                    textAnchor="middle"
                    fill={t.doubletLabel}
                    fontSize={7}
                    fontFamily="inherit"
                  >
                    {text}
                  </text>
                ))}

                {/* Flash overlay — brief highlight when slider sticks at common point */}
                {flashVisible && (
                  <rect
                    key={flashKey}
                    x="0"
                    y="0"
                    width={L.svgW}
                    height={L.svgH}
                    fill={dark ? "#ffffff" : "#000000"}
                    opacity={flashFading ? 0 : 0.22}
                    style={{ transition: flashFading ? "opacity 0.45s ease-out" : "none", pointerEvents: "none" }}
                  />
                )}
              </svg>
            </div>
            {/* end SVG wrapper */}

            {/* ── Control panel ── */}
            {showControls && (
              <div
                style={
                  useSideLayout
                    ? {
                        flex: "0 0 340px",
                        borderLeft: `1px solid ${t.panelBorder}`,
                        overflowY: "auto",
                        maxHeight: `calc(100vh - ${headerRef.current?.offsetHeight || 80}px - 20px)`,
                        display: "flex",
                        flexDirection: "column",
                        background: t.panelBg,
                        transition: "background 0.3s,border-color 0.3s",
                      }
                    : {
                        display: "flex",
                        borderTop: `1px solid ${t.panelBorder}`,
                        background: t.panelBg,
                        flexWrap: "wrap",
                        transition: "background 0.3s,border-color 0.3s",
                      }
                }
              >
                <DiagramControls
                  L={L}
                  t={t}
                  compact={compact}
                  useSideLayout={useSideLayout}
                  zoomT={zoomT}
                  onZoomChange={onZoomChange}
                  focusT={focusT}
                  onFocusChange={onFocusChange}
                  focusExpanded={focusExpanded}
                  onFocusExpandedChange={onFocusExpandedChange}
                  varReadouts={varReadouts}
                  stopdownT={stopdownT}
                  onStopdownChange={onStopdownChange}
                  fNumber={fNumber}
                  currentPhysStopSD={currentPhysStopSD}
                  baseEPSD={baseEPSD}
                  apertureExpanded={apertureExpanded}
                  onApertureExpandedChange={onApertureExpandedChange}
                  onSliderPointerUp={onSliderPointerUp}
                  showSliders={showSliders}
                />

                <div
                  style={
                    useSideLayout
                      ? {
                          flex: 1,
                          padding: compact ? "10px 14px" : "14px 22px",
                          minHeight: compact
                            ? 100
                            : ENABLE_COLLAPSIBLE_LEGEND && !isWide && !info && !legendExpanded
                              ? 40
                              : 125,
                          transition: "background 0.2s",
                          background: info ? t.infoBgActive : t.infoBgIdle,
                        }
                      : {
                          flex: "1 1 360px",
                          padding: compact ? "10px 14px" : "14px 22px",
                          minHeight: compact
                            ? 100
                            : ENABLE_COLLAPSIBLE_LEGEND && !isWide && !info && !legendExpanded
                              ? 40
                              : 125,
                          transition: "background 0.2s",
                          background: info ? t.infoBgActive : t.infoBgIdle,
                        }
                  }
                >
                  {info ? (
                    <ElementInspector info={info} L={L} t={t} showChromatic={showChromatic} />
                  ) : (
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
                            style={{
                              ...COLLAPSE_BTN_BASE,
                              marginLeft: "auto",
                              background: t.toggleBg,
                              border: `1px solid ${t.toggleBorder}`,
                              color: t.muted,
                            }}
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
                              <path
                                d="M5,1 Q2,5.5 5,10"
                                fill="none"
                                stroke={t.asphStroke}
                                strokeWidth={1.6}
                                strokeLinecap="round"
                              />
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
                              const chromLabel =
                                activeCh.length > 0 ? `Chromatic (${activeCh.join("/")})` : "Chromatic (none)";
                              const lcaStr =
                                chromSpread && chromSpread.lcaMm !== 0
                                  ? ` · LCA ${Math.abs(chromSpread.lcaMm * 1000) >= 1 ? Math.abs(chromSpread.lcaMm * 1000).toFixed(0) : Math.abs(chromSpread.lcaMm * 1000).toFixed(1)} µm`
                                  : "";
                              return (
                                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                                  <svg width="22" height="14" viewBox="0 0 22 14">
                                    {chromR && (
                                      <line x1="0" y1="3" x2="22" y2="3" stroke={t.rayChromR} strokeWidth="1.8" />
                                    )}
                                    {chromG && (
                                      <line x1="0" y1="7" x2="22" y2="7" stroke={t.rayChromG} strokeWidth="1.8" />
                                    )}
                                    {chromB && (
                                      <line x1="0" y1="11" x2="22" y2="11" stroke={t.rayChromB} strokeWidth="1.8" />
                                    )}
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
                                  <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", marginLeft: 6 }}>
                                    TCA
                                  </span>
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
                  )}
                </div>
              </div>
            )}
          </div>
          {/* end side-layout flex wrapper */}
        </div>
      )}
    </PanelErrorBoundary>
  );
}
