/**
 * LensDiagramPanel — Composition layer for the lens diagram.
 *
 * Orchestrates sub-components and custom hooks:
 *   useLensComputation  → lens building, layout, transforms, shapes, aperture
 *   useRayTracing       → on-axis, off-axis, chromatic ray fans
 *   DiagramHeader       → title, specs, theme/ray toggle controls
 *   DiagramSVG          → full SVG rendering of the optical system
 *   DiagramControls     → zoom, focus, aperture sliders
 *   ElementInspector    → selected element property display
 *   DiagramLegend       → legend with color swatches and ray descriptions
 *
 * Owns only: hover/selection state, flash animation, side-layout detection,
 * header height reporting, and the structural layout that wires sub-components.
 */

import { useState, useEffect, useLayoutEffect, useRef, Component } from "react";
import useLensComputation from "./useLensComputation.js";
import useRayTracing from "./useRayTracing.js";
import DiagramControls from "./DiagramControls.jsx";
import ElementInspector from "./ElementInspector.jsx";
import DiagramLegend from "./DiagramLegend.jsx";
import DiagramSVG from "./DiagramSVG.jsx";
import DiagramHeader from "./DiagramHeader.jsx";
import { ENABLE_DYNAMIC_DIAGRAM_HEIGHT, ENABLE_COLLAPSIBLE_LEGEND } from "../utils/featureFlags.js";
import { ErrorDisplay } from "./ErrorBoundary.jsx";

/* ── Panel-level error boundary — resets automatically when lensKey changes ── */
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
          <DiagramHeader
            ref={headerRef}
            L={L}
            t={t}
            dark={dark}
            compact={compact}
            isWide={isWide}
            focusT={focusT}
            zoomT={zoomT}
            fNumber={fNumber}
            showOnAxis={showOnAxis}
            onShowOnAxisChange={onShowOnAxisChange}
            showOffAxis={showOffAxis}
            onShowOffAxisChange={onShowOffAxisChange}
            rayTracksF={rayTracksF}
            onRayTracksFChange={onRayTracksFChange}
            showChromatic={showChromatic}
            onShowChromaticChange={onShowChromaticChange}
            chromR={chromR}
            chromG={chromG}
            chromB={chromB}
            onChromRChange={onChromRChange}
            onChromGChange={onChromGChange}
            onChromBChange={onChromBChange}
            onDarkChange={onDarkChange}
            onHighContrastChange={onHighContrastChange}
            highContrast={highContrast}
            headerControlsExpanded={headerControlsExpanded}
            onHeaderControlsExpandedChange={onHeaderControlsExpandedChange}
            headerInfoExpanded={headerInfoExpanded}
            onHeaderInfoExpandedChange={onHeaderInfoExpandedChange}
            minHeaderHeight={minHeaderHeight}
          />
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
                  style={{
                    flex: useSideLayout ? 1 : "1 1 360px",
                    padding: compact ? "10px 14px" : "14px 22px",
                    minHeight: compact
                      ? 100
                      : ENABLE_COLLAPSIBLE_LEGEND && !isWide && !info && !legendExpanded
                        ? 40
                        : 125,
                    transition: "background 0.2s",
                    background: info ? t.infoBgActive : t.infoBgIdle,
                  }}
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
