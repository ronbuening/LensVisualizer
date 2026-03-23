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
import { eflAtZoom, formatDist } from "../optics/optics.js";
import useLensComputation from "./useLensComputation.js";
import useRayTracing from "./useRayTracing.js";
import DiagramControls from "./DiagramControls.jsx";
import ElementInspector from "./ElementInspector.jsx";
import DiagramLegend from "./DiagramLegend.jsx";
import DiagramSVG from "./DiagramSVG.jsx";
import {
  ENABLE_COLOR_TRACING,
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
              <DiagramSVG
                L={L}
                t={t}
                dark={dark}
                sx={sx}
                sy={sy}
                CX={CX}
                IX={IX}
                effectiveSC={effectiveSC}
                zPos={zPos}
                IMG_MM={IMG_MM}
                shapes={shapes}
                filterId={filterId}
                stopZ={stopZ}
                currentPhysStopSD={currentPhysStopSD}
                rays={rays}
                offAxisRays={offAxisRays}
                chromaticRays={chromaticRays}
                chromSpread={chromSpread}
                showOnAxis={showOnAxis}
                showOffAxis={showOffAxis}
                showChromatic={showChromatic}
                act={act}
                onHover={setHov}
                onSelect={(eid) => setSel(sel === eid ? null : eid)}
                sel={sel}
                maxSvgHeight={maxSvgHeight}
                useSideLayout={useSideLayout}
                headerHeight={headerRef.current?.offsetHeight || 80}
                compact={compact}
                flashVisible={flashVisible}
                flashKey={flashKey}
                flashFading={flashFading}
              />
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
                    <DiagramLegend
                      L={L}
                      t={t}
                      isWide={isWide}
                      zoomT={zoomT}
                      showOnAxis={showOnAxis}
                      showOffAxis={showOffAxis}
                      showChromatic={showChromatic}
                      chromR={chromR}
                      chromG={chromG}
                      chromB={chromB}
                      chromSpread={chromSpread}
                      rayTracksF={rayTracksF}
                      legendExpanded={legendExpanded}
                      onLegendExpandedChange={onLegendExpandedChange}
                    />
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
