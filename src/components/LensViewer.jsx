/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           INTERACTIVE LENS CROSS-SECTION VISUALIZATION             ║
 * ║                      — Orchestration Layer —                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Diagram rendering lives in LensDiagramPanel.  This file handles   ║
 * ║  top bar, comparison mode, shared controls, view toggles, overlays,║
 * ║  and localStorage persistence.                                     ║
 * ║                                                                    ║
 * ║  Features:                                                         ║
 * ║    • Side-by-side lens comparison (desktop) / stacked (mobile)     ║
 * ║    • Independent + normalized scale modes                          ║
 * ║    • URL deep links (?a=&b= for comparison, ?lens= for single)    ║
 * ║    • Shared controls bar in comparison mode                        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

import { useState, useMemo, useCallback, useEffect, useRef } from "react";

import T               from '../utils/themes.js';
import buildLens       from '../optics/buildLens.js';
import { LENS_CATALOG, CATALOG_KEYS, mdForKey } from '../utils/lensCatalog.js';
import LensDiagramPanel from './LensDiagramPanel.jsx';
import DescriptionPanel from './DescriptionPanel.jsx';
import SharedSlidersBar from './SharedSlidersBar.jsx';
import useMediaQuery   from '../utils/useMediaQuery.js';
import { PREFS_KEY, loadPrefs } from '../utils/preferences.js';
import { parseComparisonParams, buildComparisonURL } from '../utils/parseComparisonParams.js';
import { ENABLE_COLOR_TRACING, DEFAULT_COLOR_TRACING,
         ENABLE_DESKTOP_VIEW_TOGGLE, ENABLE_DIAGRAM_ONLY, ENABLE_ANALYSIS_ONLY,
         ENABLE_COMPARISON, ENABLE_COMPARISON_MOBILE } from '../utils/featureFlags.js';
import { computeFocusPair, computeAperturePair, snapToCommon } from '../utils/comparisonSliders.js';
import { ErrorDisplay } from './ErrorBoundary.jsx';
import ABOUT_ME_MD from '../content/AboutMe.md?raw';
import ABOUT_SITE_MD from '../content/AboutSite.md?raw';


/* =====================================================================
 * §6  RENDERER — React component
 * =====================================================================
 *  Diagram rendering delegated to LensDiagramPanel.  This component
 *  handles orchestration, comparison mode, shared controls, and chrome.
 * ------------------------------------------------------------------- */

export default function LensVisualization() {
  const [prefs] = useState(() => loadPrefs(CATALOG_KEYS));

  /* ── URL params take precedence over localStorage ── */
  const urlState = useMemo(() => {
    if (typeof window === 'undefined') return {};
    return parseComparisonParams(window.location.search, CATALOG_KEYS);
  }, []);

  const [lensKeyA, setLensKeyA] = useState(urlState.singleLens || urlState.lensKeyA || prefs.lensKeyA || CATALOG_KEYS[0]);
  const [lensKeyB, setLensKeyB] = useState(urlState.lensKeyB || prefs.lensKeyB || CATALOG_KEYS[Math.min(1, CATALOG_KEYS.length - 1)]);
  const [comparing, setComparing] = useState(urlState.comparing || prefs.comparing || false);
  const [scaleMode, setScaleMode] = useState(prefs.scaleMode || 'independent');

  const [dark, setDark] = useState(prefs.dark ?? (() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : true
  ));
  const [highContrast, setHighContrast] = useState(prefs.highContrast ?? (() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-contrast: more)').matches : false
  ));
  const [focusT, setFocusT] = useState(0);
  const [showOnAxis, setShowOnAxis] = useState(prefs.showOnAxis ?? true);
  const [showOffAxis, setShowOffAxis] = useState(prefs.showOffAxis ?? false);
  const [rayTracksF, setRayTracksF] = useState(prefs.rayTracksF ?? false);
  const [showChromatic, setShowChromatic] = useState(prefs.showChromatic ?? DEFAULT_COLOR_TRACING);
  const [chromR, setChromR] = useState(prefs.chromR ?? true);
  const [chromG, setChromG] = useState(prefs.chromG ?? true);
  const [chromB, setChromB] = useState(prefs.chromB ?? true);
  const [stopdownT, setStopdownT] = useState(0);
  const [mobileView, setMobileView] = useState('diagram');
  const [desktopView, setDesktopView] = useState('both');
  const [showAbout, setShowAbout] = useState(false);
  const [showAboutSite, setShowAboutSite] = useState(false);
  const [sharedFocusT, setSharedFocusT] = useState(0);
  const [sharedStopdownT, setSharedStopdownT] = useState(0);
  const [headerHeights, setHeaderHeights] = useState({ a: 0, b: 0 });

  /* ── Persist preferences ── */
  useEffect(() => {
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify({
        v: 2, dark, highContrast,
        lensKeyA, lensKeyB, comparing, scaleMode,
        showOnAxis, showOffAxis, rayTracksF,
        showChromatic, chromR, chromG, chromB,
      }));
    } catch { /* private browsing or quota — ignore */ }
  }, [dark, highContrast, lensKeyA, lensKeyB, comparing, scaleMode, showOnAxis, showOffAxis, rayTracksF, showChromatic, chromR, chromG, chromB]);

  /* ── Update URL on comparison state change ── */
  useEffect(() => {
    const url = buildComparisonURL(comparing, lensKeyA, lensKeyB);
    const current = window.location.search;
    if (url !== current) {
      history.replaceState(null, '', url || window.location.pathname);
    }
  }, [comparing, lensKeyA, lensKeyB]);

  /* ── Escape key closes overlays ── */
  useEffect(() => {
    if (!showAbout && !showAboutSite) return;
    const handleKey = (e) => { if (e.key === 'Escape') { setShowAbout(false); setShowAboutSite(false); } };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [showAbout, showAboutSite]);

  const isWide = useMediaQuery('(min-width: 900px)');
  const markdown = useMemo(() => mdForKey(lensKeyA), [lensKeyA]);

  const desktopViewOptions = useMemo(() => {
    if (!ENABLE_DESKTOP_VIEW_TOGGLE) return [];
    const opts = [];
    if (ENABLE_DIAGRAM_ONLY) opts.push({ label: "DIAGRAM", val: "diagram" });
    opts.push({ label: "BOTH", val: "both" });
    if (ENABLE_ANALYSIS_ONLY) opts.push({ label: "ANALYSIS", val: "analysis" });
    return opts;
  }, []);
  const effectiveDesktopView = desktopViewOptions.some(o => o.val === desktopView) ? desktopView : 'both';
  const showDesktopToggle = isWide && !comparing && desktopViewOptions.length > 1;

  const t = T[dark ? (highContrast ? "darkHC" : "dark") : (highContrast ? "lightHC" : "light")];

  /* ── Lens switching (single-lens mode resets sliders, comparison mode does not) ── */
  const switchLensA = useCallback((key) => {
    setLensKeyA(key);
    if (!comparing) {
      setFocusT(0);
      setStopdownT(0);
    }
  }, [comparing]);

  const switchLensB = useCallback((key) => {
    setLensKeyB(key);
  }, []);

  /* ── Build both lenses for comparison computations ── */
  const comparisonLenses = useMemo(() => {
    if (!comparing) return null;
    try {
      return { LA: buildLens(LENS_CATALOG[lensKeyA]), LB: buildLens(LENS_CATALOG[lensKeyB]) };
    } catch (e) { return { error: e, failedKeys: `${lensKeyA} vs ${lensKeyB}` }; }
  }, [comparing, lensKeyA, lensKeyB]);

  /* ── Normalized scale computation ── */
  const scaleRatios = useMemo(() => {
    if (!comparisonLenses || comparisonLenses.error || scaleMode !== 'normalized') return null;
    const { LA, LB } = comparisonLenses;
    const minSC = Math.min(LA.SC, LB.SC);
    return { a: minSC / LA.SC, b: minSC / LB.SC };
  }, [comparisonLenses, scaleMode]);

  /* ── Per-lens focus/aperture from shared sliders ── */
  const focusPair = useMemo(() => {
    if (!comparisonLenses || comparisonLenses.error) return null;
    return computeFocusPair(sharedFocusT, comparisonLenses.LA, comparisonLenses.LB);
  }, [sharedFocusT, comparisonLenses]);

  const aperturePair = useMemo(() => {
    if (!comparisonLenses || comparisonLenses.error) return null;
    return computeAperturePair(sharedStopdownT, comparisonLenses.LA, comparisonLenses.LB);
  }, [sharedStopdownT, comparisonLenses]);

  /* ── Enter/exit comparison mode ── */
  const toggleCompare = useCallback(() => {
    if (!comparing) {
      /* Entering comparison: pick next lens if A===B */
      if (lensKeyA === lensKeyB) {
        const idx = CATALOG_KEYS.indexOf(lensKeyA);
        setLensKeyB(CATALOG_KEYS[(idx + 1) % CATALOG_KEYS.length]);
      }
      /* Snap shared sliders to common points */
      setSharedFocusT(0);
      setSharedStopdownT(0);
    } else {
      /* Exiting: map shared values back to single-lens values */
      if (focusPair) setFocusT(focusPair.focusA);
      if (aperturePair) setStopdownT(aperturePair.stopdownA);
    }
    setComparing(c => !c);
  }, [comparing, lensKeyA, lensKeyB, focusPair, aperturePair]);

  /* ── Header height alignment callback ── */
  const handleHeaderHeight = useCallback((panelId, height) => {
    setHeaderHeights(prev => prev[panelId] === height ? prev : { ...prev, [panelId]: height });
  }, []);
  const maxHeaderHeight = Math.max(headerHeights.a, headerHeights.b);

  /* ── Shared panel props ── */
  const sharedProps = {
    focusT, stopdownT,
    showOnAxis, showOffAxis,
    showChromatic, chromR, chromG, chromB,
    rayTracksF,
    theme: t, dark, highContrast,
    onFocusChange: setFocusT,
    onStopdownChange: setStopdownT,
    onShowOnAxisChange: setShowOnAxis,
    onShowOffAxisChange: setShowOffAxis,
    onRayTracksFChange: setRayTracksF,
    onShowChromaticChange: setShowChromatic,
    onChromRChange: setChromR,
    onChromGChange: setChromG,
    onChromBChange: setChromB,
    onDarkChange: setDark,
    onHighContrastChange: setHighContrast,
  };

  /* ── Selector style helper ── */
  const selectorStyle = (wide) => ({
    backgroundColor: t.selectorBg, border: `1.5px solid ${t.sliderAccent}40`,
    borderRadius: 6, padding: wide ? "7px 32px 7px 12px" : "7px 28px 7px 8px", cursor: "pointer",
    fontSize: wide ? 13 : 12, color: t.selectorText, fontFamily: "inherit",
    letterSpacing: "0.06em", appearance: "none", outline: "none",
    boxShadow: `0 0 6px ${t.sliderAccent}18`,
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='12' height='7'><path d='M0 0l6 7 6-7z' fill='${t.selectorText}'/></svg>`)}")`,
    backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center",
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
  });

  /* ── Toggle button style helper ── */
  const toggleBtnStyle = (active, hasRightBorder = true) => ({
    flex: 1, background: active ? t.toggleActiveBg : t.toggleBg,
    border: "none", borderRight: hasRightBorder ? `1px solid ${t.toggleBorder}` : "none",
    padding: "5px 8px", cursor: "pointer",
    fontSize: 9, color: active ? t.toggleActiveText : t.toggleInactiveText,
    display: "flex", alignItems: "center", justifyContent: "center", gap: 5, transition: "all 0.25s",
    fontFamily: "inherit", letterSpacing: "0.08em",
  });

  const showCompareBtn = ENABLE_COMPARISON && (isWide || ENABLE_COMPARISON_MOBILE);

  /* ── Description content (only in single-lens mode) ── */
  const descriptionContent = (
    <div style={{ background: t.descBg, overflowY: "auto", transition: "background 0.3s" }}>
      <DescriptionPanel markdown={markdown} theme={t} />
    </div>
  );

  /* ── Shared controls bar (comparison mode) ── */
  const sharedControlsBar = comparing ? (
    <div style={{ padding: "8px 16px", borderBottom: `1px solid ${t.headerBorder}`, backgroundColor: t.headerBgColor, backgroundImage: t.headerBgImage, display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", justifyContent: "center", transition: "background-color 0.3s,border-color 0.3s" }}>
      {/* Theme controls */}
      <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: 120, transition: "border-color 0.3s" }}>
        <button onClick={() => setHighContrast(!highContrast)} style={toggleBtnStyle(highContrast, true)}>
          <span style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}>◐</span><span>HC</span>
        </button>
        <button onClick={() => setDark(!dark)} style={toggleBtnStyle(false, false)}>
          <span style={{ fontSize: 14, lineHeight: 1 }}>{t.toggleIcon}</span><span>{dark ? "Light" : "Dark"}</span>
        </button>
      </div>

      {/* Ray toggles */}
      <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: 180, transition: "border-color 0.3s" }}>
        {[
          { label: "ON-AXIS", active: showOnAxis, set: setShowOnAxis, dotA: t.rayWarm, dotB: t.rayCool },
          { label: "OFF-AXIS", active: showOffAxis, set: setShowOffAxis, dotA: t.rayOffWarm, dotB: t.rayOffCool },
        ].map(({ label, active, set, dotA, dotB }, idx) => (
          <button key={label} onClick={() => set(!active)} style={toggleBtnStyle(active, idx === 0)}>
            <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
              <line x1="0" y1="4" x2="14" y2="4" stroke={active ? dotA : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
              <line x1="0" y1="7" x2="14" y2="7" stroke={active ? dotB : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
            </svg>
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Ray mode */}
      <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: 180, transition: "border-color 0.3s" }}>
        {[
          { label: "FROM \u221e", val: false, icon: "\u2225" },
          { label: "TRACKS FOCUS", val: true, icon: "\u27e9" },
        ].map(({ label, val, icon }) => (
          <button key={label} onClick={() => setRayTracksF(val)} style={toggleBtnStyle(rayTracksF === val, !val)}>
            <span style={{ fontSize: 11, fontWeight: 700, lineHeight: 1, opacity: rayTracksF === val ? 1 : 0.4 }}>{icon}</span><span>{label}</span>
          </button>
        ))}
      </div>

      {/* Chromatic */}
      {ENABLE_COLOR_TRACING && (
        <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: showChromatic ? 220 : 90, transition: "border-color 0.3s, width 0.3s" }}>
          <button onClick={() => setShowChromatic(!showChromatic)} style={toggleBtnStyle(showChromatic, showChromatic)}>
            <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
              <line x1="0" y1="1" x2="14" y2="1" stroke={showChromatic ? t.rayChromR : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
              <line x1="0" y1="4" x2="14" y2="4" stroke={showChromatic ? t.rayChromG : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
              <line x1="0" y1="7" x2="14" y2="7" stroke={showChromatic ? t.rayChromB : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
            </svg>
            <span>COLOR</span>
          </button>
          {showChromatic && [
            { ch: 'R', active: chromR, set: setChromR, color: t.rayChromR },
            { ch: 'G', active: chromG, set: setChromG, color: t.rayChromG },
            { ch: 'B', active: chromB, set: setChromB, color: t.rayChromB },
          ].map(({ ch, active, set, color }, idx) => (
            <button key={ch} onClick={() => set(!active)} style={{
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

      {/* Scale mode toggle */}
      <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: 190, transition: "border-color 0.3s" }}>
        {[
          { label: "INDEPENDENT", val: 'independent' },
          { label: "NORMALIZED", val: 'normalized' },
        ].map(({ label, val }, idx) => (
          <button key={val} onClick={() => setScaleMode(val)} style={toggleBtnStyle(scaleMode === val, idx === 0)}>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  ) : null;

  /* ── Comparison error display ── */
  const comparisonError = comparisonLenses?.error ? (
    <div style={{ display: "flex", justifyContent: "center", padding: 32 }}>
      <ErrorDisplay
        error={comparisonLenses.error}
        context={{ component: "Comparison Mode", lensKey: comparisonLenses.failedKeys }}
        title="Failed to build lens for comparison"
      />
    </div>
  ) : null;

  /* ── Comparison content ── */
  const comparisonContent = comparing ? (comparisonLenses?.error ? comparisonError :
    <div style={{ display: "flex", flexDirection: isWide ? "row" : "column" }}>
      <div style={{ flex: isWide ? "0 0 50%" : "none", borderRight: isWide ? `1px solid ${t.panelDivider}` : "none", borderBottom: !isWide ? `1px solid ${t.panelDivider}` : "none", minWidth: 0, overflow: "hidden" }}>
        <LensDiagramPanel
          lensKey={lensKeyA}
          {...sharedProps}
          focusT={focusPair?.focusA ?? 0}
          stopdownT={aperturePair?.stopdownA ?? 0}
          scaleRatio={scaleRatios?.a ?? null}
          panelId="a"
          compact={true}
          showControls={true}
          showSliders={false}
          maxSvgHeight={isWide ? "54vh" : "42vh"}
          onHeaderHeight={handleHeaderHeight}
          minHeaderHeight={isWide && maxHeaderHeight > 0 ? maxHeaderHeight : undefined}
        />
      </div>
      <div style={{ flex: isWide ? "0 0 50%" : "none", minWidth: 0, overflow: "hidden" }}>
        <LensDiagramPanel
          lensKey={lensKeyB}
          {...sharedProps}
          focusT={focusPair?.focusB ?? 0}
          stopdownT={aperturePair?.stopdownB ?? 0}
          scaleRatio={scaleRatios?.b ?? null}
          panelId="b"
          compact={true}
          showControls={true}
          showSliders={false}
          maxSvgHeight={isWide ? "54vh" : "42vh"}
          onHeaderHeight={handleHeaderHeight}
          minHeaderHeight={isWide && maxHeaderHeight > 0 ? maxHeaderHeight : undefined}
        />
      </div>
    </div>
  ) : null;

  /* ── Single-lens diagram content ── */
  const singleDiagramContent = !comparing ? (
    <LensDiagramPanel
      lensKey={lensKeyA}
      {...sharedProps}
      scaleRatio={null}
      panelId="main"
      compact={false}
      showControls={true}
    />
  ) : null;

  return (
    <div style={{ background: t.bg, color: t.body, fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace", minHeight: "100vh", transition: "background 0.3s,color 0.3s" }}>
      {/* ── Top bar: lens selector(s) + compare button ── */}
      <div style={{ padding: isWide ? "12px 24px" : "10px 12px", borderBottom: `1px solid ${t.headerBorder}`, backgroundColor: t.headerBgColor, backgroundImage: t.headerBgImage, display: "flex", alignItems: "center", gap: isWide ? 12 : 8, flexWrap: "wrap", transition: "background-color 0.3s,border-color 0.3s" }}>
        <span style={{ fontSize: 9, letterSpacing: "0.12em", color: t.muted, fontFamily: "inherit", whiteSpace: "nowrap" }}>
          {comparing ? "LENS A" : "LENS"}
        </span>
        <select
          value={lensKeyA}
          onChange={e => switchLensA(e.target.value)}
          style={{ ...selectorStyle(isWide), flex: isWide ? "0 1 280px" : "1 1 0%", minWidth: 0 }}
        >
          {CATALOG_KEYS.map(k => (
            <option key={k} value={k} style={{ background: t.bg, color: t.body }}>
              {LENS_CATALOG[k].name}
            </option>
          ))}
        </select>

        {comparing && <>
          <span style={{ fontSize: 9, letterSpacing: "0.12em", color: t.muted, fontFamily: "inherit", whiteSpace: "nowrap" }}>LENS B</span>
          <select
            value={lensKeyB}
            onChange={e => switchLensB(e.target.value)}
            style={{ ...selectorStyle(isWide), flex: isWide ? "0 1 280px" : "1 1 0%", minWidth: 0 }}
          >
            {CATALOG_KEYS.map(k => (
              <option key={k} value={k} style={{ background: t.bg, color: t.body }}>
                {LENS_CATALOG[k].name}
              </option>
            ))}
          </select>
        </>}

        {showCompareBtn && (
          <button
            onClick={toggleCompare}
            style={{
              backgroundColor: comparing ? t.toggleActiveBg : t.selectorBg,
              border: `1.5px solid ${comparing ? t.sliderAccent : `${t.sliderAccent}40`}`,
              borderRadius: 6, padding: isWide ? "5px 14px" : "5px 10px", cursor: "pointer",
              fontSize: 10, color: comparing ? t.toggleActiveText : t.selectorText, fontFamily: "inherit",
              letterSpacing: "0.08em", outline: "none", flexShrink: 0,
              boxShadow: `0 0 6px ${t.sliderAccent}18`,
              transition: "all 0.3s",
            }}
          >
            {comparing ? "EXIT COMPARE" : "COMPARE"}
          </button>
        )}

        {isWide && <div style={{ flex: 1 }} />}
        {isWide && <span style={{ fontSize: 9, letterSpacing: "0.12em", color: t.muted, fontFamily: "inherit", whiteSpace: "nowrap" }}>ABOUT</span>}
        <button
          onClick={() => setShowAboutSite(true)}
          style={{
            backgroundColor: t.selectorBg, border: `1.5px solid ${t.sliderAccent}40`,
            borderRadius: 6, padding: isWide ? "5px 14px" : "5px 10px", cursor: "pointer",
            fontSize: 11, color: t.selectorText, fontFamily: "inherit",
            letterSpacing: "0.06em", outline: "none", flexShrink: 0,
            boxShadow: `0 0 6px ${t.sliderAccent}18`,
            transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
          }}
        >
          Site
        </button>
        <button
          onClick={() => setShowAbout(true)}
          style={{
            backgroundColor: t.selectorBg, border: `1.5px solid ${t.sliderAccent}40`,
            borderRadius: 6, padding: isWide ? "5px 14px" : "5px 10px", cursor: "pointer",
            fontSize: 11, color: t.selectorText, fontFamily: "inherit",
            letterSpacing: "0.06em", outline: "none", flexShrink: 0,
            boxShadow: `0 0 6px ${t.sliderAccent}18`,
            transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
          }}
        >
          Author
        </button>
      </div>

      {/* ── Shared controls bar (comparison mode only) ── */}
      {sharedControlsBar}

      {/* ── Mobile view toggle (narrow screens, single-lens only) ── */}
      {!isWide && !comparing && (
        <div style={{ display: "flex", justifyContent: "center", padding: "8px 24px", borderBottom: `1px solid ${t.headerBorder}`, backgroundColor: t.headerBgColor, backgroundImage: t.headerBgImage, transition: "background-color 0.3s,border-color 0.3s" }}>
          <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: 220 }}>
            {[
              { label: "DIAGRAM", val: 'diagram' },
              { label: "ANALYSIS", val: 'description' },
            ].map(({ label, val }) => (
              <button key={val} onClick={() => setMobileView(val)} style={{
                flex: 1, background: mobileView === val ? t.toggleActiveBg : t.toggleBg,
                border: "none", borderRight: val === 'diagram' ? `1px solid ${t.toggleBorder}` : "none",
                padding: "6px 0", cursor: "pointer",
                fontSize: 10, color: mobileView === val ? t.toggleActiveText : t.toggleInactiveText,
                fontFamily: "inherit", letterSpacing: "0.08em", transition: "all 0.25s",
              }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Desktop view toggle (wide screens, single-lens only) ── */}
      {showDesktopToggle && (
        <div style={{ display: "flex", justifyContent: "center", padding: "8px 24px", borderBottom: `1px solid ${t.headerBorder}`, backgroundColor: t.headerBgColor, backgroundImage: t.headerBgImage, transition: "background-color 0.3s,border-color 0.3s" }}>
          <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: desktopViewOptions.length * 110 }}>
            {desktopViewOptions.map(({ label, val }, i) => (
              <button key={val} onClick={() => setDesktopView(val)} style={{
                flex: 1, background: effectiveDesktopView === val ? t.toggleActiveBg : t.toggleBg,
                border: "none", borderRight: i < desktopViewOptions.length - 1 ? `1px solid ${t.toggleBorder}` : "none",
                padding: "6px 0", cursor: "pointer",
                fontSize: 10, color: effectiveDesktopView === val ? t.toggleActiveText : t.toggleInactiveText,
                fontFamily: "inherit", letterSpacing: "0.08em", transition: "all 0.25s",
              }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Main content area ── */}
      {comparing ? (<>
        {comparisonContent}
        {comparisonLenses && !comparisonLenses.error && focusPair && aperturePair && (
          <SharedSlidersBar
            LA={comparisonLenses.LA} LB={comparisonLenses.LB}
            sharedFocusT={sharedFocusT} sharedStopdownT={sharedStopdownT}
            onSharedFocusChange={v => setSharedFocusT(snapToCommon(v, focusPair.commonPoint))}
            onSharedStopdownChange={v => setSharedStopdownT(snapToCommon(v, aperturePair.commonPoint))}
            focusPair={focusPair} aperturePair={aperturePair}
            theme={t} isWide={isWide}
          />
        )}
      </>) : isWide ? (
        effectiveDesktopView === 'diagram' ? (
          <div style={{ minHeight: `calc(100vh - ${showDesktopToggle ? 82 : 45}px)` }}>
            {singleDiagramContent}
          </div>
        ) : effectiveDesktopView === 'analysis' ? (
          <div style={{ overflowY: "auto", maxHeight: `calc(100vh - ${showDesktopToggle ? 82 : 45}px)` }}>
            {descriptionContent}
          </div>
        ) : (
          /* Both — side-by-side */
          <div style={{ display: "flex", minHeight: `calc(100vh - ${showDesktopToggle ? 82 : 45}px)` }}>
            <div style={{ flex: "0 0 60%", minWidth: 0, overflow: "hidden" }}>
              {singleDiagramContent}
            </div>
            <div style={{ flex: "0 0 40%", borderLeft: `1px solid ${t.descBorder}`, overflowY: "auto", maxHeight: `calc(100vh - ${showDesktopToggle ? 82 : 45}px)` }}>
              {descriptionContent}
            </div>
          </div>
        )
      ) : (
        /* Mobile: toggle between views */
        mobileView === 'diagram' ? singleDiagramContent : descriptionContent
      )}

      {/* ── About Site overlay ── */}
      {showAboutSite && (
        <div
          onClick={() => setShowAboutSite(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.5)", display: "flex",
            alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: t.descBg, borderRadius: 10,
              maxWidth: 480, width: "90%", maxHeight: "70vh",
              overflowY: "auto", position: "relative",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              border: `1px solid ${t.descBorder}`,
            }}
          >
            <button
              onClick={() => setShowAboutSite(false)}
              style={{
                position: "sticky", top: 0, float: "right",
                margin: "10px 10px 0 0", background: "none",
                border: "none", color: t.muted, cursor: "pointer",
                fontSize: 18, fontFamily: "inherit", lineHeight: 1,
                padding: "2px 6px", borderRadius: 4, zIndex: 1,
              }}
            >
              ×
            </button>
            <DescriptionPanel markdown={ABOUT_SITE_MD} theme={t} />
          </div>
        </div>
      )}

      {/* ── About Me overlay ── */}
      {showAbout && (
        <div
          onClick={() => setShowAbout(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.5)", display: "flex",
            alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: t.descBg, borderRadius: 10,
              maxWidth: 480, width: "90%", maxHeight: "70vh",
              overflowY: "auto", position: "relative",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              border: `1px solid ${t.descBorder}`,
            }}
          >
            <button
              onClick={() => setShowAbout(false)}
              style={{
                position: "sticky", top: 0, float: "right",
                margin: "10px 10px 0 0", background: "none",
                border: "none", color: t.muted, cursor: "pointer",
                fontSize: 18, fontFamily: "inherit", lineHeight: 1,
                padding: "2px 6px", borderRadius: 4, zIndex: 1,
              }}
            >
              ×
            </button>
            <DescriptionPanel markdown={ABOUT_ME_MD} theme={t} />
          </div>
        </div>
      )}
    </div>
  );
}
