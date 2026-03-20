/**
 * LensDiagramPanel — Self-contained lens diagram renderer.
 *
 * Self-contained lens diagram renderer.  Owns its own lens building,
 * layout, coordinate transforms, ray tracing, element inspection,
 * and all SVG rendering.  Receives shared control state (focus,
 * aperture, ray toggles) from the parent.
 */

import { useState, useMemo, useCallback, useEffect, useLayoutEffect, useRef, Component } from "react";
import { LENS_CATALOG, CATALOG_KEYS } from '../utils/lensCatalog.js';
import buildLens from '../optics/buildLens.js';
import { sag, renderSag, gapTrimHeight, thick, doLayout,
         traceRay, traceRayChromatic, computeChromaticSpread, traceToImage,
         conjugateK, formatDist, SVG_PATH_SUBDIVISIONS } from '../optics/optics.js';
import { ENABLE_COLOR_TRACING } from '../utils/featureFlags.js';
import { ErrorDisplay } from './ErrorBoundary.jsx';

/* ── Panel-level error boundary — catches render errors within a single diagram ── */
class PanelErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) { return { error }; }
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
  maxSvgHeight = "54vh",
  minHeaderHeight,
  onFocusChange,
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
}) {
  const [hov, setHov] = useState(null);
  const [sel, setSel] = useState(null);
  const [flashKey, setFlashKey] = useState(0);
  const [flashVisible, setFlashVisible] = useState(false);
  const [flashFading, setFlashFading] = useState(false);

  useEffect(() => { setHov(null); setSel(null); }, [lensKey]);

  /* ── Flash overlay animation — two-phase: appear bright, then fade out ── */
  useEffect(() => {
    if (!flashOverlay) return;
    setFlashVisible(true);
    setFlashFading(false);
    setFlashKey(k => k + 1);
    /* Phase 2: start fade after two frames so browser paints the bright state */
    let raf1, raf2, timer;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setFlashFading(true);
        /* Phase 3: unmount after fade completes */
        timer = setTimeout(() => setFlashVisible(false), 500);
      });
    });
    return () => { cancelAnimationFrame(raf1); cancelAnimationFrame(raf2); clearTimeout(timer); };
  }, [flashOverlay]);

  /* ── Header height reporting for alignment ── */
  const headerRef = useRef(null);
  useLayoutEffect(() => {
    if (!onHeaderHeight || !headerRef.current) return;
    const el = headerRef.current;
    const report = () => onHeaderHeight(panelId, el.scrollHeight);
    report();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(report);
    ro.observe(el);
    return () => ro.disconnect();
  }, [onHeaderHeight, panelId, lensKey]);

  /* ── Build lens from catalog ── */
  const buildResult = useMemo(() => {
    try { return { L: buildLens(LENS_CATALOG[lensKey]) }; }
    catch (e) { return { error: e }; }
  }, [lensKey]);

  if (buildResult.error) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
        <ErrorDisplay
          error={buildResult.error}
          context={{ component: "LensDiagramPanel (buildLens)", lensKey }}
          title="Failed to build lens"
        />
      </div>
    );
  }

  const L = buildResult.L;
  const act = sel || hov;
  const info = act ? L.elements.find(e => e.id === act) : null;

  /* ── Layout ── */
  const inf = useMemo(() => doLayout(0, L), [L]);
  const IMG_MM = inf.imgZ;
  const cur = useMemo(() => doLayout(focusT, L), [focusT, L]);
  const dz = IMG_MM - cur.imgZ;
  const zPos = useMemo(() => cur.z.map(v => v + dz), [cur, dz]);

  /* ── Coordinate transforms (with scaleRatio for normalized mode) ── */
  const effectiveSC  = scaleRatio != null ? L.SC * scaleRatio : L.SC;
  const effectiveYSC = scaleRatio != null ? L.YSC * scaleRatio : L.YSC;
  const MID = IMG_MM / 2, CX = L.svgW / 2 + L.svgW * L.lensShiftFrac, CY = L.svgH / 2;
  const IX = CX + MID * effectiveSC;
  const sx = useCallback(z => IX - (IMG_MM - z) * effectiveSC, [IX, IMG_MM, effectiveSC]);
  const sy = useCallback(y => CY + y * effectiveYSC, [CY, effectiveYSC]);

  /* ── Element shapes ── */
  const shapes = useMemo(() => {
    try {
      return L.ES.map(([eid, s1, s2]) => {
        const sd = Math.min(L.S[s1].sd, L.S[s2].sd);
        const R1 = Math.abs(L.S[s1].R), R2 = Math.abs(L.S[s2].R);
        /* Conic-aware max height: surface slope → ∞ at h = |R|/√(1+K) when K > 0 */
        const K1 = L.asphByIdx[s1]?.K || 0;
        const K2 = L.asphByIdx[s2]?.K || 0;
        const hMax1 = (K1 > 0 && R1 < 1e10) ? R1 / Math.sqrt(1 + K1) * 0.98 : Infinity;
        const hMax2 = (K2 > 0 && R2 < 1e10) ? R2 / Math.sqrt(1 + K2) * 0.98 : Infinity;
        let trim1 = R1 < 1e10 ? Math.min(sd, R1 * L.maxRimSin, hMax1) : Math.min(sd, hMax1);
        let trim2 = R2 < 1e10 ? Math.min(sd, R2 * L.maxRimSin, hMax2) : Math.min(sd, hMax2);
        /* Trim front surface if it curves backward into preceding air gap.
         * Mirror of the TRIM2 logic: the preceding element's rear surface
         * may curve backward (negative sag) widening the effective clearance,
         * or forward (positive sag) narrowing it. */
        if (s1 > 0 && L.gapSagFrac > 0 && renderSag(trim1, s1, L) < 0) {
          const prevES = L.ES.findLast(([, , ps2]) => ps2 < s1 && L.S[ps2].nd === 1.0);
          const gapBefore = prevES ? zPos[s1] - zPos[prevES[2]] : L.S[s1 - 1].d;
          let effectiveGap = gapBefore;
          if (prevES) {
            const ps2 = prevES[2], ps1 = prevES[1];
            const prevSD = Math.min(L.S[ps1].sd, L.S[ps2].sd);
            /* Negative renderSag on rear surface = curves backward = widens gap */
            effectiveGap -= renderSag(Math.min(trim1, prevSD), ps2, L);
          }
          effectiveGap = Math.max(effectiveGap, 0);
          if (Math.abs(renderSag(trim1, s1, L)) > effectiveGap * L.gapSagFrac)
            trim1 = gapTrimHeight(s1, trim1, effectiveGap * L.gapSagFrac, L);
        }
        /* Trim rear surface if it actually overlaps with the following element.
         * A rear surface with positive sag curves forward into the gap, but the
         * next element's front surface may also curve forward (positive sag),
         * widening the effective clearance; or backward (negative sag), narrowing
         * it.  Account for both to avoid false trims on fast lenses. */
        if (L.S[s2].nd === 1.0 && L.gapSagFrac > 0 && renderSag(trim2, s2, L) > 0) {
          const nextES = L.ES.find(([, ns1]) => ns1 > s2);
          const gapAfter = nextES ? zPos[nextES[1]] - zPos[s2] : L.S[s2].d;
          let effectiveGap = gapAfter;
          if (nextES) {
            const ns1 = nextES[1], ns2 = ns1 + 1;
            const nextSD = Math.min(L.S[ns1].sd, ns2 < L.N ? L.S[ns2].sd : Infinity);
            effectiveGap += renderSag(Math.min(trim2, nextSD), ns1, L);
          }
          effectiveGap = Math.max(effectiveGap, 0);
          if (renderSag(trim2, s2, L) > effectiveGap * L.gapSagFrac)
            trim2 = gapTrimHeight(s2, trim2, effectiveGap * L.gapSagFrac, L);
        }
        const z1 = zPos[s1], z2 = zPos[s2], NN = SVG_PATH_SUBDIVISIONS;
        let d = "";
        for (let i = 0; i <= NN; i++) { const y = -sd + 2 * sd * i / NN; d += `${i ? "L" : "M"}${sx(z1 + renderSag(Math.min(Math.abs(y), trim1), s1, L))},${sy(y)} `; }
        for (let i = NN; i >= 0; i--) { const y = -sd + 2 * sd * i / NN; d += `L${sx(z2 + renderSag(Math.min(Math.abs(y), trim2), s2, L))},${sy(y)} `; }
        return { eid, d: d + "Z", z1, z2 };
      });
    } catch (e) {
      console.error(`[LensDiagramPanel] Element shape computation failed for "${lensKey}":`, e);
      return [];
    }
  }, [zPos, sx, sy, L, lensKey]);

  /* ── Aperture ── */
  const stopZ = zPos[L.stopIdx];
  const fNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const currentPhysStopSD = L.stopPhysSD * L.FOPEN / fNumber;
  const currentEPSD = L.EP.epSD * L.FOPEN / fNumber;
  const focusK = useMemo(() => rayTracksF ? conjugateK(focusT, L) : 0, [focusT, rayTracksF, L]);

  /* ── On-axis rays ── */
  const rays = useMemo(() => {
    try {
      const out = [];
      for (const f of L.rayFractions) {
        const h = f * currentEPSD;
        const uIn = rayTracksF ? h * focusK : 0;
        const { pts, ghostPts, y, u, clipped } = traceRay(h, uIn, zPos, focusT, currentPhysStopSD, true, L);
        const sp = pts.map(([z, yy]) => [sx(z), sy(yy)]);
        let gp = [];
        if (clipped && ghostPts.length > 0) {
          const lastSolid = pts[pts.length - 1];
          if (lastSolid) gp.push([sx(lastSolid[0]), sy(lastSolid[1])]);
          gp = gp.concat(ghostPts.map(([z, yy]) => [sx(z), sy(yy)]));
          const lastGhost = ghostPts[ghostPts.length - 1];
          if (lastGhost) { const dzI = IMG_MM - lastGhost[0]; gp.push([sx(IMG_MM), sy(lastGhost[1] + dzI * u)]); }
        }
        if (!clipped) {
          const last = pts[pts.length - 1];
          if (last) { const dzI = IMG_MM - last[0]; sp.push([sx(IMG_MM), sy(last[1] + dzI * u)]); }
        }
        out.push({ sp, gp });
      }
      return out;
    } catch (e) {
      console.error(`[LensDiagramPanel] On-axis ray trace failed for "${lensKey}":`, e);
      return [];
    }
  }, [zPos, focusT, sx, sy, currentPhysStopSD, currentEPSD, rayTracksF, focusK, L, IMG_MM, lensKey]);

  /* ── Off-axis rays ── */
  const offAxisRays = useMemo(() => {
    try {
      const out = [];
      const uField = -Math.tan(L.offAxisFieldDeg * Math.PI / 180);
      const yChief = -(L.B / L.EP.yRatio) * uField;
      for (const f of L.offAxisFractions) {
        const h = f * currentEPSD;
        const y0 = yChief + h;
        const uConverge = rayTracksF ? h * focusK : 0;
        const uIn = uField + uConverge;
        const { pts, ghostPts, y, u, clipped } = traceRay(y0, uIn, zPos, focusT, currentPhysStopSD, true, L);
        const sp = pts.map(([z, yy]) => [sx(z), sy(yy)]);
        let gp = [];
        if (clipped && ghostPts.length > 0) {
          const lastSolid = pts[pts.length - 1];
          if (lastSolid) gp.push([sx(lastSolid[0]), sy(lastSolid[1])]);
          gp = gp.concat(ghostPts.map(([z, yy]) => [sx(z), sy(yy)]));
          const lastGhost = ghostPts[ghostPts.length - 1];
          if (lastGhost) { const dzI = IMG_MM - lastGhost[0]; gp.push([sx(IMG_MM), sy(lastGhost[1] + dzI * u)]); }
        }
        if (!clipped) {
          const last = pts[pts.length - 1];
          if (last) { const dzI = IMG_MM - last[0]; sp.push([sx(IMG_MM), sy(last[1] + dzI * u)]); }
        }
        out.push({ sp, gp });
      }
      return out;
    } catch (e) {
      console.error(`[LensDiagramPanel] Off-axis ray trace failed for "${lensKey}":`, e);
      return [];
    }
  }, [zPos, focusT, sx, sy, currentPhysStopSD, currentEPSD, rayTracksF, focusK, L, IMG_MM, lensKey]);

  /* ── Chromatic rays ── */
  const CHROM_FRACS = [0, 0.75, -0.75];
  const chromaticRays = useMemo(() => {
    if (!showChromatic) return [];
    const channels = [];
    if (chromR) channels.push('R');
    if (chromG) channels.push('G');
    if (chromB) channels.push('B');
    if (channels.length === 0) return [];
    try {
      const out = [];
      for (const f of CHROM_FRACS) {
        const h = f * currentEPSD;
        const uIn = rayTracksF ? h * focusK : 0;
        for (const ch of channels) {
          const { pts, ghostPts, y, u, clipped } = traceRayChromatic(h, uIn, zPos, focusT, currentPhysStopSD, true, L, ch);
          const sp = pts.map(([z, yy]) => [sx(z), sy(yy)]);
          let gp = [];
          if (clipped && ghostPts.length > 0) {
            const lastSolid = pts[pts.length - 1];
            if (lastSolid) gp.push([sx(lastSolid[0]), sy(lastSolid[1])]);
            gp = gp.concat(ghostPts.map(([z, yy]) => [sx(z), sy(yy)]));
            const lastGhost = ghostPts[ghostPts.length - 1];
            if (lastGhost) { const dzI = IMG_MM - lastGhost[0]; gp.push([sx(IMG_MM), sy(lastGhost[1] + dzI * u)]); }
          }
          if (!clipped) {
            const last = pts[pts.length - 1];
            if (last) { const dzI = IMG_MM - last[0]; sp.push([sx(IMG_MM), sy(last[1] + dzI * u)]); }
          }
          out.push({ sp, gp, channel: ch, y, u, clipped });
        }
      }
      return out;
    } catch (e) {
      console.error(`[LensDiagramPanel] Chromatic ray trace failed for "${lensKey}":`, e);
      return [];
    }
  }, [showChromatic, chromR, chromG, chromB, zPos, focusT, sx, sy, currentPhysStopSD, currentEPSD, rayTracksF, focusK, L, IMG_MM, lensKey]);

  /* ── Chromatic spread ── */
  const chromSpread = useMemo(() => {
    if (!showChromatic || chromaticRays.length === 0) return null;
    const channels = [];
    if (chromR) channels.push('R');
    if (chromG) channels.push('G');
    if (chromB) channels.push('B');
    if (channels.length < 2) return null;
    const marginalRays = {};
    for (let ci = 0; ci < channels.length; ci++) {
      const rayIdx = 1 * channels.length + ci;
      if (rayIdx < chromaticRays.length) {
        const r = chromaticRays[rayIdx];
        marginalRays[r.channel] = { y: r.y, u: r.u, clipped: r.clipped };
      }
    }
    return computeChromaticSpread(marginalRays, IMG_MM, zPos[L.N - 1]);
  }, [showChromatic, chromR, chromG, chromB, chromaticRays, IMG_MM, zPos, L]);

  /* ── Variable gap readouts ── */
  const varReadouts = L.varLabels.map(([idx, label]) => {
    const v = L.varByIdx[idx];
    const val = (v[0] + (v[1] - v[0]) * focusT).toFixed(2);
    return { label, val };
  });

  const filterId = `gl-${panelId}`;

  return (
    <PanelErrorBoundary lensKey={lensKey}>
      {/* ── Header ── */}
      <div ref={headerRef} style={{ padding: compact ? "12px 16px 8px" : "18px 24px 10px", borderBottom: `1px solid ${t.headerBorder}`, backgroundColor: t.headerBgColor, backgroundImage: t.headerBgImage, display: "flex", justifyContent: "space-between", alignItems: "flex-start", transition: "background-color 0.3s,border-color 0.3s", ...(minHeaderHeight ? { minHeight: minHeaderHeight } : {}) }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: compact ? 8 : 10, flexWrap: "wrap" }}>
            <h1 style={{ fontSize: compact ? 14 : 17, fontWeight: 700, letterSpacing: "0.04em", margin: 0, color: t.title, fontFamily: "'DM Sans','Helvetica Neue',sans-serif", transition: "color 0.3s" }}>{L.data.name}</h1>
            {!compact && <a href={`https://www.flickr.com/search/?text=${encodeURIComponent(L.data.name)}`} target="_blank" rel="noopener noreferrer" title={`Search Flickr for "${L.data.name}"`} style={{ fontSize: 11, color: t.descLinkColor, letterSpacing: "0.06em", textDecoration: "none", borderBottom: `1px solid ${t.descLinkColor}40`, whiteSpace: "nowrap", transition: "color 0.3s, border-color 0.3s" }}>flickr ↗</a>}
          </div>
          <span style={{ display: "block", fontSize: compact ? 9 : 10.5, color: t.subtitle, letterSpacing: "0.08em", marginTop: compact ? 2 : 3, transition: "color 0.3s" }}>{L.data.subtitle}</span>
          <div style={{ display: "flex", gap: compact ? 14 : 22, marginTop: compact ? 4 : 6, fontSize: compact ? 9 : 10, color: t.specs, letterSpacing: "0.06em", transition: "color 0.3s", flexWrap: "wrap" }}>
            {L.data.specs.map((s, i) => <span key={i}>{s}</span>)}
          </div>
          {/* Per-panel readouts in compact mode */}
          {compact && (
            <div style={{ display: "flex", gap: 16, marginTop: 6, fontSize: 10, color: t.value, letterSpacing: "0.04em", fontVariantNumeric: "tabular-nums" }}>
              <span>{formatDist(focusT, L)}</span>
              <span>f/{fNumber < 10 ? fNumber.toFixed(1) : Math.round(fNumber)}</span>
              <span>EFL {L.EFL.toFixed(1)}</span>
            </div>
          )}
        </div>
        {/* Theme + ray controls in non-compact (single-lens) mode */}
        {!compact && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0, width: 220 }}>
            {/* Theme controls */}
            <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: "100%", transition: "border-color 0.3s" }}>
              <button onClick={() => onHighContrastChange?.(!highContrast)} style={{
                flex: 1, background: highContrast ? t.toggleActiveBg : t.toggleBg,
                border: "none", borderRight: `1px solid ${t.toggleBorder}`,
                padding: "5px 10px", cursor: "pointer", fontSize: 10,
                color: highContrast ? t.toggleActiveText : t.toggleInactiveText,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 5, transition: "all 0.3s",
                fontFamily: "inherit", letterSpacing: "0.08em",
              }}>
                <span style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}>◐</span><span>HC</span>
              </button>
              <button onClick={() => onDarkChange?.(!dark)} style={{
                flex: 1, background: t.toggleBg, border: "none",
                padding: "5px 10px", cursor: "pointer", fontSize: 10, color: t.toggleInactiveText,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 5, transition: "all 0.3s",
                fontFamily: "inherit", letterSpacing: "0.08em",
              }}>
                <span style={{ fontSize: 14, lineHeight: 1 }}>{t.toggleIcon}</span><span>{dark ? "Light" : "Dark"}</span>
              </button>
            </div>
            {/* Ray toggles */}
            <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: "100%", transition: "border-color 0.3s" }}>
              {[
                { label: "ON-AXIS", active: showOnAxis, set: onShowOnAxisChange, dotA: t.rayWarm, dotB: t.rayCool },
                { label: "OFF-AXIS", active: showOffAxis, set: onShowOffAxisChange, dotA: t.rayOffWarm, dotB: t.rayOffCool },
              ].map(({ label, active, set, dotA, dotB }, idx) => (
                <button key={label} onClick={() => set?.(!active)} style={{
                  flex: 1, background: active ? t.toggleActiveBg : t.toggleBg,
                  border: "none", borderRight: idx === 0 ? `1px solid ${t.toggleBorder}` : "none",
                  padding: "5px 8px", cursor: "pointer",
                  fontSize: 9, color: active ? t.toggleActiveText : t.toggleInactiveText,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 5, transition: "all 0.25s",
                  fontFamily: "inherit", letterSpacing: "0.08em",
                }}>
                  <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
                    <line x1="0" y1="4" x2="14" y2="4" stroke={active ? dotA : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
                    <line x1="0" y1="7" x2="14" y2="7" stroke={active ? dotB : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
                  </svg>
                  <span>{label}</span>
                </button>
              ))}
            </div>
            {/* Ray mode */}
            <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: "100%", transition: "border-color 0.3s" }}>
              {[
                { label: "FROM \u221e", val: false, icon: "\u2225" },
                { label: "TRACKS FOCUS", val: true, icon: "\u27e9" },
              ].map(({ label, val, icon }) => (
                <button key={label} onClick={() => onRayTracksFChange?.(val)} style={{
                  flex: 1, background: rayTracksF === val ? t.toggleActiveBg : t.toggleBg,
                  border: "none", borderRight: !val ? `1px solid ${t.toggleBorder}` : "none",
                  padding: "5px 9px", cursor: "pointer",
                  fontSize: 9, color: rayTracksF === val ? t.toggleActiveText : t.toggleInactiveText,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 4, transition: "all 0.25s",
                  fontFamily: "inherit", letterSpacing: "0.08em",
                }}>
                  <span style={{ fontSize: 11, fontWeight: 700, lineHeight: 1, opacity: rayTracksF === val ? 1 : 0.4 }}>{icon}</span><span>{label}</span>
                </button>
              ))}
            </div>
            {/* Chromatic */}
            {ENABLE_COLOR_TRACING && (
              <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: "100%", transition: "border-color 0.3s" }}>
                <button onClick={() => onShowChromaticChange?.(!showChromatic)} style={{
                  flex: 1, background: showChromatic ? t.toggleActiveBg : t.toggleBg,
                  border: "none", borderRight: showChromatic ? `1px solid ${t.toggleBorder}` : "none",
                  padding: "5px 8px", cursor: "pointer",
                  fontSize: 9, color: showChromatic ? t.toggleActiveText : t.toggleInactiveText,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 5, transition: "all 0.25s",
                  fontFamily: "inherit", letterSpacing: "0.08em",
                }}>
                  <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
                    <line x1="0" y1="1" x2="14" y2="1" stroke={showChromatic ? t.rayChromR : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
                    <line x1="0" y1="4" x2="14" y2="4" stroke={showChromatic ? t.rayChromG : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
                    <line x1="0" y1="7" x2="14" y2="7" stroke={showChromatic ? t.rayChromB : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
                  </svg>
                  <span>COLOR</span>
                </button>
                {showChromatic && [
                  { ch: 'R', active: chromR, set: onChromRChange, color: t.rayChromR },
                  { ch: 'G', active: chromG, set: onChromGChange, color: t.rayChromG },
                  { ch: 'B', active: chromB, set: onChromBChange, color: t.rayChromB },
                ].map(({ ch, active, set, color }, idx) => (
                  <button key={ch} onClick={() => set?.(!active)} style={{
                    flex: 0.6, background: active ? t.toggleActiveBg : t.toggleBg,
                    border: "none", borderRight: idx < 2 ? `1px solid ${t.toggleBorder}` : "none",
                    padding: "5px 6px", cursor: "pointer",
                    fontSize: 9, color: active ? t.toggleActiveText : t.toggleInactiveText,
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 3, transition: "all 0.25s",
                    fontFamily: "inherit", letterSpacing: "0.08em",
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: active ? color : "rgba(128,128,128,0.3)", display: "inline-block" }} />
                    <span>{ch}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── SVG viewport ── */}
      <svg viewBox={`0 0 ${L.svgW} ${L.svgH}`} width="100%" style={{ display: "block", maxHeight: maxSvgHeight, minHeight: compact ? 200 : 290, background: t.bg, transition: "background 0.3s" }}>
        <defs>
          {dark ? (
            <filter id={filterId}><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          ) : (
            <filter id={filterId}><feGaussianBlur stdDeviation="3" result="b" /><feFlood floodColor="#1070c0" floodOpacity="0.12" result="c" /><feComposite in="c" in2="b" operator="in" result="d" /><feMerge><feMergeNode in="d" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          )}
        </defs>
        {Array.from({ length: L.gridCount }, (_, i) => {
          const x = CX - (L.gridCount / 2) * L.gridPitch * effectiveSC + i * L.gridPitch * effectiveSC;
          return x > 0 && x < L.svgW ? <line key={i} x1={x} y1={20} x2={x} y2={L.svgH - 20} stroke={t.grid(i)} strokeWidth={t.gridStrokeWidth} strokeDasharray={t.gridDash(i)} /> : null;
        })}
        <line x1={8} y1={sy(0)} x2={L.svgW - 8} y2={sy(0)} stroke={t.axis} strokeWidth={0.5} strokeDasharray="6,4" />

        {showOnAxis && rays.map(({ sp, gp }, ri) => {
          const color = ri < L.rayHeights.length / 2 ? t.rayCool : t.rayWarm;
          return <g key={`on${ri}`}>
            {sp.length > 1 && <polyline points={sp.map(p => `${p[0]},${p[1]}`).join(" ")} fill="none"
              stroke={color} strokeWidth={1.2 * t.rayWidthScale} />}
            {gp.length > 1 && <polyline points={gp.map(p => `${p[0]},${p[1]}`).join(" ")} fill="none"
              stroke={color} strokeWidth={0.6 * t.rayWidthScale} strokeDasharray="3,4" opacity={0.3} />}
          </g>;
        })}

        {showOffAxis && offAxisRays.map(({ sp, gp }, ri) => {
          const color = ri < L.offAxisHeights.length / 2 ? t.rayOffCool : t.rayOffWarm;
          return <g key={`off${ri}`}>
            {sp.length > 1 && <polyline points={sp.map(p => `${p[0]},${p[1]}`).join(" ")} fill="none"
              stroke={color} strokeWidth={1.1 * t.rayWidthScale} strokeDasharray={t.rayOffDash || "none"} />}
            {gp.length > 1 && <polyline points={gp.map(p => `${p[0]},${p[1]}`).join(" ")} fill="none"
              stroke={color} strokeWidth={0.6 * t.rayWidthScale} strokeDasharray="3,4" opacity={0.3} />}
          </g>;
        })}

        {showChromatic && chromaticRays.map(({ sp, gp, channel }, ri) => {
          const color = channel === 'R' ? t.rayChromR : channel === 'G' ? t.rayChromG : t.rayChromB;
          return <g key={`chrom${ri}`}>
            {sp.length > 1 && <polyline points={sp.map(p => `${p[0]},${p[1]}`).join(" ")} fill="none"
              stroke={color} strokeWidth={1.0 * t.rayWidthScale} />}
            {gp.length > 1 && <polyline points={gp.map(p => `${p[0]},${p[1]}`).join(" ")} fill="none"
              stroke={color} strokeWidth={0.5 * t.rayWidthScale} strokeDasharray="3,4" opacity={0.3} />}
          </g>;
        })}

        {shapes.map(({ eid, d: path }) => {
          const e = L.elements.find(x => x.id === eid); const on = act === eid;
          return <path key={eid} d={path} fill={t.elemFill(e, on)} stroke={t.elemStroke(e, on)}
            strokeWidth={on ? t.elemStrokeActive : t.elemStrokeIdle} style={{ cursor: "pointer", transition: "all 0.12s", filter: on ? `url(#${filterId})` : "none" }}
            onMouseEnter={() => setHov(eid)} onMouseLeave={() => setHov(null)}
            onClick={() => setSel(sel === eid ? null : eid)} />;
        })}

        {(() => {
          const bladeInner = Math.min(currentPhysStopSD, L.stopPhysSD * (1 - L.bladeStubFrac));
          return <>
            <line x1={sx(stopZ)} y1={sy(-L.stopPhysSD)} x2={sx(stopZ)} y2={sy(-bladeInner)} stroke={t.stop} strokeWidth={2.2} strokeLinecap="round" />
            <line x1={sx(stopZ)} y1={sy(L.stopPhysSD)} x2={sx(stopZ)} y2={sy(bladeInner)} stroke={t.stop} strokeWidth={2.2} strokeLinecap="round" />
          </>;
        })()}
        <text x={sx(stopZ)} y={sy(-L.stopPhysSD - L.lyStoPad)} textAnchor="middle" fill={t.stopLabel} fontSize={7.5} fontFamily="inherit" style={{ letterSpacing: "0.1em" }}>STO</text>

        <line x1={IX} y1={sy(-L.lyImgLine)} x2={IX} y2={sy(L.lyImgLine)} stroke={t.imgLine} strokeWidth={t.imgLineWidth} strokeDasharray="4,3" />
        <text x={IX} y={sy(L.lyImgLabel)} textAnchor="middle" fill={t.imgLabel} fontSize={7.5} fontFamily="inherit" style={{ letterSpacing: "0.12em" }}>IMG</text>

        {showChromatic && chromSpread && chromSpread.lcaMm !== 0 && (() => {
          const insetW = 90;
          const insetH = 100;
          const gRef = chromSpread.intercepts.G || IMG_MM;
          const activeChans = ['R', 'G', 'B'].filter(ch => chromSpread.intercepts[ch] !== undefined);
          const offsets = activeChans.map(ch => Math.abs(chromSpread.intercepts[ch] - gRef));
          const maxOff = Math.max(...offsets, 1e-9);
          const maxPixelSpan = (insetW - 24) / 2;
          const mag = Math.min(maxPixelSpan / (maxOff * effectiveSC), 5000);
          let insetX = IX + 10;
          if (insetX + insetW > L.svgW - 4) insetX = IX - insetW - 10;
          const insetY = sy(0) - 55;
          const midX = insetX + insetW / 2;
          return <g>
            <rect x={insetX} y={insetY} width={insetW} height={insetH}
              rx={4} fill={t.panelBg} stroke={t.panelBorder} strokeWidth={0.6} opacity={0.94} />
            <text x={midX} y={insetY + 14} textAnchor="middle" fill={t.muted}
              fontSize={8.5} fontFamily="inherit" style={{ letterSpacing: "0.1em" }}>LCA</text>
            <line x1={insetX + 6} y1={insetY + 40} x2={insetX + insetW - 6} y2={insetY + 40}
              stroke={t.axis} strokeWidth={0.5} />
            {activeChans.map(ch => {
              const offset = (chromSpread.intercepts[ch] - gRef) * mag * effectiveSC;
              const color = ch === 'R' ? t.rayChromR : ch === 'G' ? t.rayChromG : t.rayChromB;
              return <g key={ch}>
                <line x1={midX + offset} y1={insetY + 22} x2={midX + offset} y2={insetY + 56}
                  stroke={color} strokeWidth={2} strokeLinecap="round" />
                <text x={midX + offset} y={insetY + 67} textAnchor="middle" fill={color}
                  fontSize={8.5} fontFamily="inherit" fontWeight={600}>{ch}</text>
              </g>;
            })}
            <text x={midX} y={insetY + 82} textAnchor="middle" fill={t.value}
              fontSize={10} fontFamily="inherit" fontWeight={600}>
              {Math.abs(chromSpread.lcaMm * 1000) >= 1 ? `${Math.abs(chromSpread.lcaMm * 1000).toFixed(0)} \u00b5m` : `${Math.abs(chromSpread.lcaMm * 1000).toFixed(1)} \u00b5m`}
            </text>
            <text x={midX} y={insetY + 95} textAnchor="middle" fill={t.muted}
              fontSize={7.5} fontFamily="inherit">{Math.round(mag)}{"\u00d7"}</text>
          </g>;
        })()}

        {shapes.map(({ eid, z1, z2 }) => {
          const e = L.elements.find(x => x.id === eid); const on = act === eid;
          return <text key={`n${eid}`} x={sx((z1 + z2) / 2)} y={sy(L.lyElemNum)} textAnchor="middle"
            fill={on ? t.elemNumActive : t.elemNum(e)} fontSize={7} fontFamily="inherit" fontWeight={on ? 700 : 400}>{eid}</text>;
        })}

        {showChromatic && shapes.map(({ eid, z1, z2 }) => {
          const e = L.elements.find(x => x.id === eid);
          if (!e || !e.vd) return null;
          const on = act === eid;
          const dispColor = e.vd < 35 ? t.chromDispHigh : e.vd < 55 ? t.chromDispMid : t.chromDispLow;
          return <text key={`vd${eid}`} x={sx((z1 + z2) / 2)} y={sy(L.lyVdBadge)} textAnchor="middle"
            fill={on ? t.elemNumActive : dispColor} fontSize={8.5} fontFamily="inherit"
            fontWeight={on ? 600 : 500} opacity={on ? 1 : 0.90}>{"\u03bd"}{e.vd.toFixed(0)}</text>;
        })}

        {L.groups.map(({ text, fromSurface, toSurface }) => (
          <text key={text} x={sx((zPos[fromSurface] + zPos[toSurface]) / 2)} y={sy(L.lyGroup)} fill={t.groupLabel} fontSize={7} fontFamily="inherit" textAnchor="middle" style={{ letterSpacing: "0.08em" }}>{text}</text>
        ))}

        {L.doublets.map(({ text, fromSurface, toSurface }) => (
          <text key={text} x={sx((zPos[fromSurface] + zPos[toSurface]) / 2)} y={sy(L.lyDoublet)} textAnchor="middle" fill={t.doubletLabel} fontSize={7} fontFamily="inherit">{text}</text>
        ))}

        {/* Flash overlay — brief highlight when slider sticks at common point */}
        {flashVisible && (
          <rect key={flashKey} x="0" y="0" width={L.svgW} height={L.svgH}
            fill={dark ? "#ffffff" : "#000000"}
            opacity={flashFading ? 0 : 0.22}
            style={{ transition: flashFading ? "opacity 0.45s ease-out" : "none", pointerEvents: "none" }} />
        )}
      </svg>

      {/* ── Control panel ── */}
      {showControls && (
        <div style={{ display: "flex", borderTop: `1px solid ${t.panelBorder}`, background: t.panelBg, flexWrap: "wrap", transition: "background 0.3s,border-color 0.3s" }}>
          {showSliders && <div style={{ flex: "1 1 260px", padding: compact ? "10px 14px" : "14px 22px", borderRight: `1px solid ${t.panelDivider}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 9.5, color: t.label, letterSpacing: "0.1em", minWidth: 85, transition: "color 0.3s" }}>FOCUS</span>
              <span style={{ fontSize: 14, color: t.focusDist, fontWeight: 700, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}>{formatDist(focusT, L)}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 9, color: t.focusEndpoint }}>{"\u221e"}</span>
              <input type="range" min="0" max="1" step={L.focusStep} value={focusT}
                onChange={e => onFocusChange?.(parseFloat(e.target.value))}
                style={{ flex: 1, height: 4, appearance: "none", background: t.sliderTrack, borderRadius: 2, outline: "none", cursor: "pointer", accentColor: t.sliderAccent }} />
              <span style={{ fontSize: 9, color: t.focusEndpoint }}>{L.closeFocusM} m</span>
            </div>
            <div style={{ marginTop: 8, fontSize: 9.5, color: t.desc, lineHeight: 1.6, transition: "color 0.3s" }}>{L.focusDescription}</div>
            <div style={{ marginTop: 6, display: "flex", gap: 14, fontSize: 9, color: t.spacingVal, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}>
              {varReadouts.map(({ label, val }) => <span key={label}>{label} {val}</span>)}
            </div>
          </div>}

          {showSliders && <div style={{ flex: "1 1 220px", padding: compact ? "10px 14px" : "14px 22px", borderRight: `1px solid ${t.panelDivider}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 9.5, color: t.label, letterSpacing: "0.1em", minWidth: 85, transition: "color 0.3s" }}>APERTURE</span>
              <span style={{ fontSize: 14, color: t.focusDist, fontWeight: 700, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}>
                f/{fNumber < 10 ? fNumber.toFixed(1) : Math.round(fNumber)}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 9, color: t.focusEndpoint }}>f/{L.FOPEN.toFixed(1)}</span>
              <input type="range" min="0" max="1" step={L.apertureStep} value={stopdownT}
                onChange={e => onStopdownChange?.(parseFloat(e.target.value))}
                style={{ flex: 1, height: 4, appearance: "none", background: t.sliderTrack, borderRadius: 2, outline: "none", cursor: "pointer", accentColor: t.sliderAccent }} />
              <span style={{ fontSize: 9, color: t.focusEndpoint }}>f/{L.maxFstop}</span>
            </div>
            <div style={{ marginTop: 8, fontSize: 9.5, color: t.desc, lineHeight: 1.6, transition: "color 0.3s" }}>
              EFL {L.EFL.toFixed(2)} mm · EP {"\u2300"} {(L.EP.epSD * 2).toFixed(2)} mm · Stop {"\u2300"} {(currentPhysStopSD * 2).toFixed(2)} mm
            </div>
            <div style={{ marginTop: 6, display: "flex", gap: 14, flexWrap: "wrap", fontSize: 9, color: t.spacingVal, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}>
              {L.fstopSeries.filter(n => n >= L.FOPEN - 0.1 && n <= L.maxFstop).map(n => (
                <span key={n}
                  onClick={() => onStopdownChange?.(Math.log(n / L.FOPEN) / Math.log(L.maxFstop / L.FOPEN))}
                  style={{ cursor: "pointer", opacity: Math.abs(fNumber - n) < 0.15 ? 1 : 0.55, transition: "opacity 0.15s" }}>
                  f/{n}
                </span>
              ))}
            </div>
          </div>}

          <div style={{ flex: "1 1 360px", padding: compact ? "10px 14px" : "14px 22px", minHeight: compact ? 100 : 125, transition: "background 0.2s", background: info ? t.infoBgActive : t.infoBgIdle }}>
            {info ? (
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: t.title, fontFamily: "'DM Sans','Helvetica Neue',sans-serif", transition: "color 0.3s" }}>{info.label}</span>
                  <span style={{ fontSize: 11, color: t.muted, transition: "color 0.3s" }}>{info.name}</span>
                  {info.apd && <span style={{
                    fontSize: 8, padding: "2px 6px", borderRadius: 3,
                    background: info.apd === "patent" ? t.apdPatentBg : t.apdInferBg,
                    color: info.apd === "patent" ? t.apdPatentText : t.apdInferText,
                    letterSpacing: "0.08em", fontWeight: 600, transition: "all 0.3s"
                  }}>{info.apd === "patent" ? "APD (PATENT)" : "APD (INFERRED)"}</span>}
                  {info.cemented && <span style={{
                    fontSize: 8, padding: "2px 6px", borderRadius: 3,
                    background: t.cementBg, color: t.cementText, letterSpacing: "0.08em", transition: "all 0.3s"
                  }}>DOUBLET {info.cemented}</span>}
                </div>
                <div style={{ fontSize: 10.5, color: t.elemType, marginBottom: 5, transition: "color 0.3s" }}>{info.type}</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(125px,1fr))", gap: "3px 18px", fontSize: 10.5, lineHeight: 1.8 }}>
                  <div><span style={{ color: t.propLabel }}>nd = </span><span style={{ color: t.value }}>{info.nd}</span></div>
                  <div><span style={{ color: t.propLabel }}>{"\u03bd"}d = </span><span style={{ color: t.value }}>{info.vd}</span></div>
                  <div><span style={{ color: t.propLabel }}>FL = </span><span style={{ color: t.value }}>{info.fl > 0 ? "+" : ""}{info.fl} mm</span></div>
                  <div><span style={{ color: t.propLabel }}>Glass: </span><span style={{ color: t.value }}>{info.glass}</span></div>
                </div>
                {showChromatic && info.vd && <div style={{ marginTop: 4, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(125px,1fr))", gap: "3px 18px", fontSize: 10.5, lineHeight: 1.8 }}>
                  <div><span style={{ color: t.propLabel }}>nF{"\u2212"}nC = </span><span style={{ color: t.value }}>{((info.nd - 1) / info.vd).toFixed(5)}</span></div>
                  <div>
                    <span style={{ color: t.propLabel }}>n</span><span style={{ color: t.rayChromR }}>R</span><span style={{ color: t.propLabel }}> = </span>
                    <span style={{ color: t.rayChromR }}>{(info.nd - (info.nd - 1) / (2 * info.vd)).toFixed(5)}</span>
                    <span style={{ color: t.propLabel, marginLeft: 8 }}> n</span><span style={{ color: t.rayChromB }}>B</span><span style={{ color: t.propLabel }}> = </span>
                    <span style={{ color: t.rayChromB }}>{(info.nd + (info.nd - 1) / (2 * info.vd)).toFixed(5)}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: info.vd >= 55 ? t.chromDispLow : info.vd >= 35 ? t.chromDispMid : t.chromDispHigh, display: "inline-block", flexShrink: 0 }} />
                    <span style={{ color: info.vd >= 55 ? t.chromDispLow : info.vd >= 35 ? t.chromDispMid : t.chromDispHigh }}>
                    {info.vd >= 55 ? "Low dispersion" : info.vd >= 35 ? "Normal dispersion" : "High dispersion"}{info.vd >= 65 ? " (ED)" : ""}
                  </span></div>
                </div>}
                {info.apdNote && <div style={{ fontSize: 9.5, color: t.apdNote, marginTop: 3, transition: "color 0.3s" }}>{info.apdNote}</div>}
                <div style={{ fontSize: 9.5, color: t.role, marginTop: 5, lineHeight: 1.5, transition: "color 0.3s" }}>{info.role}</div>
              </div>
            ) : (
              <div style={{ padding: "6px 0" }}>
                <div style={{ fontSize: 10.5, color: t.muted, marginBottom: 8, transition: "color 0.3s" }}>Hover or tap an element for optical details</div>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontSize: 9.5 }}>
                  {t.legendSwatches.map(([bg, bd, lb]) => (
                    <div key={lb} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <div style={{ width: 11, height: 11, borderRadius: 2, background: bg, border: `1px solid ${bd}`, transition: "all 0.3s" }} /><span style={{ color: t.legendText, transition: "color 0.3s" }}>{lb}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <div style={{ width: 3, height: 11, background: t.stop, borderRadius: 1 }} /><span style={{ color: t.legendText }}>Stop</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <div style={{ width: 11, height: 1, background: t.imgLine }} /><span style={{ color: t.legendText }}>Image plane (fixed)</span>
                  </div>
                  {showOnAxis && <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <svg width="14" height="10" viewBox="0 0 14 10"><line x1="0" y1="3" x2="14" y2="3" stroke={t.rayWarm} strokeWidth="1.5" /><line x1="0" y1="7" x2="14" y2="7" stroke={t.rayCool} strokeWidth="1.5" /></svg>
                    <span style={{ color: t.legendText }}>On-axis rays{rayTracksF ? " (tracks focus)" : " (from \u221e)"}</span>
                  </div>}
                  {showOffAxis && <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <svg width="14" height="10" viewBox="0 0 14 10"><line x1="0" y1="3" x2="14" y2="3" stroke={t.rayOffWarm} strokeWidth="1.5" strokeDasharray={t.rayOffDash || "none"} /><line x1="0" y1="7" x2="14" y2="7" stroke={t.rayOffCool} strokeWidth="1.5" strokeDasharray={t.rayOffDash || "none"} /></svg>
                    <span style={{ color: t.legendText }}>Off-axis rays ({L.offAxisFieldDeg.toFixed(1)}{"\u00b0"}){rayTracksF ? " tracks focus" : " from \u221e"}</span>
                  </div>}
                  {showOffAxis && <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <svg width="14" height="10" viewBox="0 0 14 10"><line x1="0" y1="5" x2="14" y2="5" stroke={t.rayOffWarm} strokeWidth="0.8" strokeDasharray="3,4" opacity="0.35" /></svg>
                    <span style={{ color: t.legendText }}>Vignetted (ghost)</span>
                  </div>}
                  {showChromatic && (() => {
                    const activeCh = [chromR && 'R', chromG && 'G', chromB && 'B'].filter(Boolean);
                    const chromLabel = activeCh.length > 0 ? `Chromatic (${activeCh.join('/')})` : 'Chromatic (none)';
                    const lcaStr = chromSpread && chromSpread.lcaMm !== 0
                      ? ` · LCA ${Math.abs(chromSpread.lcaMm * 1000) >= 1 ? Math.abs(chromSpread.lcaMm * 1000).toFixed(0) : Math.abs(chromSpread.lcaMm * 1000).toFixed(1)} µm`
                      : '';
                    return <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <svg width="22" height="14" viewBox="0 0 22 14">
                      {chromR && <line x1="0" y1="3" x2="22" y2="3" stroke={t.rayChromR} strokeWidth="1.8" />}
                      {chromG && <line x1="0" y1="7" x2="22" y2="7" stroke={t.rayChromG} strokeWidth="1.8" />}
                      {chromB && <line x1="0" y1="11" x2="22" y2="11" stroke={t.rayChromB} strokeWidth="1.8" />}
                    </svg>
                    <span style={{ color: t.legendText }}>{chromLabel}{lcaStr}</span>
                  </div>;})()}
                  {showChromatic && chromSpread && (
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4, flexBasis: "100%" }}>
                      <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em" }}>LCA</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: t.value, fontVariantNumeric: "tabular-nums" }}>
                        {chromSpread.lcaMm !== 0
                          ? (Math.abs(chromSpread.lcaMm * 1000) >= 1
                            ? `${Math.abs(chromSpread.lcaMm * 1000).toFixed(0)} µm`
                            : `${Math.abs(chromSpread.lcaMm * 1000).toFixed(1)} µm`)
                          : '< 0.1 µm'}
                      </span>
                      {chromSpread.tcaMm !== 0 && <>
                        <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", marginLeft: 6 }}>TCA</span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: t.value, fontVariantNumeric: "tabular-nums" }}>
                          {Math.abs(chromSpread.tcaMm * 1000) >= 1
                            ? `${Math.abs(chromSpread.tcaMm * 1000).toFixed(0)} µm`
                            : `${Math.abs(chromSpread.tcaMm * 1000).toFixed(1)} µm`}
                        </span>
                      </>}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </PanelErrorBoundary>
  );
}
