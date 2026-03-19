/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           INTERACTIVE LENS CROSS-SECTION VISUALIZATION             ║
 * ║                     — Generic Viewer — v4.0                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  v4 architecture: LENS_DATA separated from viewer logic.           ║
 * ║                                                                    ║
 * ║  All lens prescriptions live in external data files under           ║
 * ║  ./lens-data/, each exporting a LENS_DATA object.  This viewer     ║
 * ║  imports from a LENS_CATALOG, builds the runtime lens (L) on       ║
 * ║  selection, and renders.                                           ║
 * ║                                                                    ║
 * ║  Module structure:                                                 ║
 * ║    • buildLens.js  — validation, label resolution, optical math    ║
 * ║    • optics.js     — sag, layout, ray tracing, conjugates          ║
 * ║    • themes.js     — theme factory + 4 theme definitions           ║
 * ║    • lens-data/    — per-lens prescriptions + defaults.js          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

import { useState, useMemo, useCallback, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import T               from './themes.js';
import LENS_DEFAULTS   from './lens-data/defaults.js';
import buildLens       from './buildLens.js';
import { sag, renderSag, gapTrimHeight, thick, doLayout,
         traceRay, traceRayChromatic, computeChromaticSpread, traceToImage,
         conjugateK, formatDist, SVG_PATH_SUBDIVISIONS } from './optics.js';
import { ENABLE_COLOR_TRACING, DEFAULT_COLOR_TRACING,
         ENABLE_DESKTOP_VIEW_TOGGLE, ENABLE_DIAGRAM_ONLY, ENABLE_ANALYSIS_ONLY } from './featureFlags.js';


/* =====================================================================
 * §1  LENS CATALOG — Auto-registered from ./lens-data/*.js
 * =====================================================================
 *  To add a new lens, create a data file in ./lens-data/ with a
 *  `key` field in its default-exported LENS_DATA object.  It will
 *  appear in the dropdown automatically — no imports or edits here.
 *
 *  Shared defaults (rayFractions, svgW, etc.) come from defaults.js
 *  and are merged under each lens's own fields so any lens can override.
 * ------------------------------------------------------------------- */

const _modules = import.meta.glob('./lens-data/*.data.js', { eager: true });
const LENS_CATALOG = {};
for (const mod of Object.values(_modules)) {
  const data = mod.default;
  if (data?.key) LENS_CATALOG[data.key] = { ...LENS_DEFAULTS, ...data };
}
const CATALOG_KEYS = Object.keys(LENS_CATALOG);

const _mdModules = import.meta.glob('./lens-data/*.analysis.md', { eager: true, query: '?raw', import: 'default' });
const MD_BY_STEM = {};
for (const [path, raw] of Object.entries(_mdModules)) {
  const stem = path.replace('./lens-data/', '').replace('.analysis.md', '');
  MD_BY_STEM[stem] = raw;
}

/* Map lens key → data file stem so we can find the matching .analysis.md */
const KEY_TO_STEM = {};
for (const [path, mod] of Object.entries(_modules)) {
  const stem = path.replace('./lens-data/', '').replace('.data.js', '').replace('.js', '');
  if (mod.default?.key) KEY_TO_STEM[mod.default.key] = stem;
}

function mdForKey(key) {
  const stem = KEY_TO_STEM[key];
  return stem ? (MD_BY_STEM[stem] || null) : null;
}




/* ── useMediaQuery hook ── */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : true
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

/* ── DescriptionPanel — renders markdown with theme-aware styling ── */
function DescriptionPanel({ markdown, theme: t }) {
  if (!markdown) {
    return (
      <div style={{ padding: 32, color: t.muted, fontSize: 12, fontStyle: "italic" }}>
        No description available for this lens.
      </div>
    );
  }
  const components = {
    h1: ({ children }) => <h1 style={{ fontSize: 18, fontWeight: 700, color: t.descH1, margin: "24px 0 12px", fontFamily: "'DM Sans','Helvetica Neue',sans-serif", lineHeight: 1.3, borderBottom: `1px solid ${t.descBorder}`, paddingBottom: 8 }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: 15, fontWeight: 600, color: t.descH2, margin: "20px 0 8px", fontFamily: "'DM Sans','Helvetica Neue',sans-serif", lineHeight: 1.3 }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontSize: 13, fontWeight: 600, color: t.descH2, margin: "16px 0 6px", fontFamily: "'DM Sans','Helvetica Neue',sans-serif", lineHeight: 1.3 }}>{children}</h3>,
    p: ({ children }) => <p style={{ fontSize: 12, color: t.descText, lineHeight: 1.7, margin: "8px 0" }}>{children}</p>,
    a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: t.descLinkColor, textDecoration: "none", borderBottom: `1px solid ${t.descLinkColor}40` }}>{children}</a>,
    em: ({ children }) => <em style={{ color: t.muted, fontStyle: "italic" }}>{children}</em>,
    strong: ({ children }) => <strong style={{ color: t.descH1, fontWeight: 600 }}>{children}</strong>,
    code: ({ children, className }) => {
      const isBlock = className?.startsWith('language-');
      if (isBlock) return <code style={{ fontSize: 11 }}>{children}</code>;
      return <code style={{ background: t.descCodeBg, padding: "1px 5px", borderRadius: 3, fontSize: 11, color: t.descLinkColor }}>{children}</code>;
    },
    pre: ({ children }) => <pre style={{ background: t.descCodeBg, padding: 12, borderRadius: 6, overflow: "auto", margin: "10px 0", fontSize: 11, lineHeight: 1.5 }}>{children}</pre>,
    ul: ({ children }) => <ul style={{ paddingLeft: 20, margin: "6px 0", fontSize: 12, color: t.descText, lineHeight: 1.7 }}>{children}</ul>,
    ol: ({ children }) => <ol style={{ paddingLeft: 20, margin: "6px 0", fontSize: 12, color: t.descText, lineHeight: 1.7 }}>{children}</ol>,
    li: ({ children }) => <li style={{ marginBottom: 3 }}>{children}</li>,
    blockquote: ({ children }) => <blockquote style={{ borderLeft: `3px solid ${t.descLinkColor}`, paddingLeft: 14, margin: "10px 0", color: t.muted }}>{children}</blockquote>,
    table: ({ children }) => <div style={{ overflowX: "auto", margin: "10px 0" }}><table style={{ borderCollapse: "collapse", width: "100%", fontSize: 11 }}>{children}</table></div>,
    thead: ({ children }) => <thead style={{ background: t.descTableHeaderBg }}>{children}</thead>,
    th: ({ children }) => <th style={{ border: `1px solid ${t.descTableBorder}`, padding: "6px 10px", textAlign: "left", color: t.descH2, fontWeight: 600, fontSize: 10.5 }}>{children}</th>,
    td: ({ children }) => <td style={{ border: `1px solid ${t.descTableBorder}`, padding: "5px 10px", color: t.descText, fontSize: 10.5 }}>{children}</td>,
    hr: () => <hr style={{ border: "none", borderTop: `1px solid ${t.descBorder}`, margin: "16px 0" }} />,
  };
  return (
    <div style={{ padding: "16px 24px 24px", fontSize: 12, lineHeight: 1.7 }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}


/* ── Persistent preferences (localStorage) ── */

const PREFS_KEY = 'lensvis:prefs';

function loadPrefs() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (!raw) return {};
    const p = JSON.parse(raw);
    if (!p || typeof p !== 'object') return {};
    const out = {};
    if (typeof p.dark === 'boolean') out.dark = p.dark;
    if (typeof p.highContrast === 'boolean') out.highContrast = p.highContrast;
    if (typeof p.showOnAxis === 'boolean') out.showOnAxis = p.showOnAxis;
    if (typeof p.showOffAxis === 'boolean') out.showOffAxis = p.showOffAxis;
    if (typeof p.rayTracksF === 'boolean') out.rayTracksF = p.rayTracksF;
    if (typeof p.showChromatic === 'boolean') out.showChromatic = p.showChromatic;
    if (typeof p.chromR === 'boolean') out.chromR = p.chromR;
    if (typeof p.chromG === 'boolean') out.chromG = p.chromG;
    if (typeof p.chromB === 'boolean') out.chromB = p.chromB;
    if (typeof p.lensKey === 'string' && CATALOG_KEYS.includes(p.lensKey)) out.lensKey = p.lensKey;
    return out;
  } catch { return {}; }
}

/* =====================================================================
 * §6  RENDERER — React component
 * =====================================================================
 *  v4: L computed from selected LENS_DATA via useMemo.  All render
 *  logic parameterised on L — no module-level state.
 * ------------------------------------------------------------------- */

export default function LensVisualization() {
  const [prefs] = useState(loadPrefs);
  const [lensKey, setLensKey] = useState(prefs.lensKey ?? CATALOG_KEYS[0]);
  const [dark, setDark] = useState(prefs.dark ?? (() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : true
  ));
  const [highContrast, setHighContrast] = useState(prefs.highContrast ?? (() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-contrast: more)').matches : false
  ));
  const [focusT, setFocusT] = useState(0);
  const [hov, setHov] = useState(null);
  const [sel, setSel] = useState(null);
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

  useEffect(() => {
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify({
        v: 1, dark, highContrast, lensKey, showOnAxis, showOffAxis, rayTracksF,
        showChromatic, chromR, chromG, chromB,
      }));
    } catch { /* private browsing or quota — ignore */ }
  }, [dark, highContrast, lensKey, showOnAxis, showOffAxis, rayTracksF, showChromatic, chromR, chromG, chromB]);

  const isWide = useMediaQuery('(min-width: 900px)');
  const markdown = useMemo(() => mdForKey(lensKey), [lensKey]);

  const desktopViewOptions = useMemo(() => {
    if (!ENABLE_DESKTOP_VIEW_TOGGLE) return [];
    const opts = [];
    if (ENABLE_DIAGRAM_ONLY) opts.push({ label: "DIAGRAM", val: "diagram" });
    opts.push({ label: "BOTH", val: "both" });
    if (ENABLE_ANALYSIS_ONLY) opts.push({ label: "ANALYSIS", val: "analysis" });
    return opts;
  }, []);
  const effectiveDesktopView = desktopViewOptions.some(o => o.val === desktopView) ? desktopView : 'both';
  const showDesktopToggle = isWide && desktopViewOptions.length > 1;

  /* ── Build lens from selected data ── */
  const buildResult = useMemo(() => {
    try { return { L: buildLens(LENS_CATALOG[lensKey]) }; }
    catch (e) { return { error: e }; }
  }, [lensKey]);

  /* ── Reset interactive state on lens change ── */
  const switchLens = useCallback((key) => {
    setLensKey(key);
    setFocusT(0);
    setStopdownT(0);
    setHov(null);
    setSel(null);
  }, []);

  const t = T[dark ? (highContrast ? "darkHC" : "dark") : (highContrast ? "lightHC" : "light")];

  if (buildResult.error) {
    return (
      <div style={{ background: t.bg, color: t.body, fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: 520, padding: 32, textAlign: "center" }}>
          <h1 style={{ color: "#ff6060", fontSize: 18, marginBottom: 8 }}>Failed to build lens</h1>
          <pre style={{ background: "rgba(255,60,60,0.08)", border: "1px solid rgba(255,60,60,0.25)", borderRadius: 6, padding: 16, whiteSpace: "pre-wrap", wordBreak: "break-word", fontSize: 13, color: "#ffa0a0", marginBottom: 20, textAlign: "left" }}>
            {buildResult.error.message}
          </pre>
          <label style={{ fontSize: 12, color: t.label, display: "block", marginBottom: 8 }}>Try another lens:</label>
          <select value={lensKey} onChange={e => switchLens(e.target.value)} style={{ background: t.selectorBg, color: t.selectorText, border: `1px solid ${t.selectorBorder}`, borderRadius: 4, padding: "6px 10px", fontSize: 13, fontFamily: "inherit" }}>
            {CATALOG_KEYS.map(k => <option key={k} value={k}>{LENS_CATALOG[k].name}</option>)}
          </select>
        </div>
      </div>
    );
  }

  const L = buildResult.L;
  const act = sel || hov;
  const info = act ? L.elements.find(e => e.id === act) : null;

  const inf = useMemo(() => doLayout(0, L), [L]);
  const IMG_MM = inf.imgZ;
  const cur = useMemo(() => doLayout(focusT, L), [focusT, L]);
  const dz = IMG_MM - cur.imgZ;
  const zPos = useMemo(() => cur.z.map(v => v + dz), [cur, dz]);

  const MID = IMG_MM / 2, CX = L.svgW / 2 + L.svgW * L.lensShiftFrac, CY = L.svgH / 2;
  const IX = CX + MID * L.SC;
  const sx = useCallback(z => IX - (IMG_MM - z) * L.SC, [IX, IMG_MM, L.SC]);
  const sy = useCallback(y => CY + y * L.YSC, [CY, L.YSC]);

  const shapes = useMemo(() => L.ES.map(([eid, s1, s2]) => {
    const sd = Math.min(L.S[s1].sd, L.S[s2].sd);
    const R1 = Math.abs(L.S[s1].R), R2 = Math.abs(L.S[s2].R);
    let trim1 = R1 < 1e10 ? Math.min(sd, R1 * L.maxRimSin) : sd;
    let trim2 = R2 < 1e10 ? Math.min(sd, R2 * L.maxRimSin) : sd;
    if (s1 > 0 && L.gapSagFrac > 0 && renderSag(trim1, s1, L) < 0) {
      const gapBefore = L.S[s1 - 1].d;
      trim1 = gapTrimHeight(s1, trim1, gapBefore * L.gapSagFrac, L);
    }
    const z1 = zPos[s1], z2 = zPos[s2], NN = SVG_PATH_SUBDIVISIONS;
    let d = "";
    for (let i = 0; i <= NN; i++) { const y = -sd + 2 * sd * i / NN; d += `${i ? "L" : "M"}${sx(z1 + renderSag(Math.min(Math.abs(y), trim1), s1, L))},${sy(y)} `; }
    for (let i = NN; i >= 0; i--) { const y = -sd + 2 * sd * i / NN; d += `L${sx(z2 + renderSag(Math.min(Math.abs(y), trim2), s2, L))},${sy(y)} `; }
    return { eid, d: d + "Z", z1, z2 };
  }), [zPos, sx, sy, L]);

  const stopZ = zPos[L.stopIdx];
  const fNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const currentPhysStopSD = L.stopPhysSD * L.FOPEN / fNumber;
  const currentEPSD = L.EP.epSD * L.FOPEN / fNumber;
  const focusK = useMemo(() => rayTracksF ? conjugateK(focusT, L) : 0, [focusT, rayTracksF, L]);

  const rays = useMemo(() => {
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
  }, [zPos, focusT, sx, sy, currentPhysStopSD, currentEPSD, rayTracksF, focusK, L, IMG_MM]);

  const offAxisRays = useMemo(() => {
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
  }, [zPos, focusT, sx, sy, currentPhysStopSD, currentEPSD, rayTracksF, focusK, L, IMG_MM]);

  const CHROM_FRACS = [0, 0.75, -0.75];
  const chromaticRays = useMemo(() => {
    if (!showChromatic) return [];
    const channels = [];
    if (chromR) channels.push('R');
    if (chromG) channels.push('G');
    if (chromB) channels.push('B');
    if (channels.length === 0) return [];
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
  }, [showChromatic, chromR, chromG, chromB, zPos, focusT, sx, sy, currentPhysStopSD, currentEPSD, rayTracksF, focusK, L, IMG_MM]);

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

  const varReadouts = L.varLabels.map(([idx, label]) => {
    const v = L.varByIdx[idx];
    const val = (v[0] + (v[1] - v[0]) * focusT).toFixed(2);
    return { label, val };
  });

  /* ── Diagram panel content (reused in both layouts) ── */
  const diagramContent = (
    <>
      {/* ── Header ── */}
      <div style={{ padding: "18px 24px 10px", borderBottom: `1px solid ${t.headerBorder}`, backgroundColor: t.headerBgColor, backgroundImage: t.headerBgImage, display: "flex", justifyContent: "space-between", alignItems: "flex-start", transition: "background-color 0.3s,border-color 0.3s" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
            <h1 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "0.04em", margin: 0, color: t.title, fontFamily: "'DM Sans','Helvetica Neue',sans-serif", transition: "color 0.3s" }}>{L.data.name}</h1>
            <span style={{ fontSize: 10.5, color: t.subtitle, letterSpacing: "0.08em", transition: "color 0.3s" }}>{L.data.subtitle}</span>
          </div>
          <div style={{ display: "flex", gap: 22, marginTop: 6, fontSize: 10, color: t.specs, letterSpacing: "0.06em", transition: "color 0.3s", flexWrap: "wrap" }}>
            {L.data.specs.map((s, i) => <span key={i}>{s}</span>)}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0, width: 220 }}>
          {/* ── Theme controls ── */}
          <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: "100%", transition: "border-color 0.3s" }}>
            <button onClick={() => setHighContrast(!highContrast)} style={{
              flex: 1, background: highContrast ? t.toggleActiveBg : t.toggleBg,
              border: "none", borderRight: `1px solid ${t.toggleBorder}`,
              padding: "5px 10px", cursor: "pointer", fontSize: 10,
              color: highContrast ? t.toggleActiveText : t.toggleInactiveText,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 5, transition: "all 0.3s",
              fontFamily: "inherit", letterSpacing: "0.08em",
            }}>
              <span style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}>◐</span><span>HC</span>
            </button>
            <button onClick={() => setDark(!dark)} style={{
              flex: 1, background: t.toggleBg, border: "none",
              padding: "5px 10px", cursor: "pointer", fontSize: 10, color: t.toggleInactiveText,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 5, transition: "all 0.3s",
              fontFamily: "inherit", letterSpacing: "0.08em",
            }}>
              <span style={{ fontSize: 14, lineHeight: 1 }}>{t.toggleIcon}</span><span>{dark ? "Light" : "Dark"}</span>
            </button>
          </div>
          {/* ── Ray controls ── */}
          <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: "100%", transition: "border-color 0.3s" }}>
            {[
              { label: "ON-AXIS", active: showOnAxis, set: setShowOnAxis, dotA: t.rayWarm, dotB: t.rayCool },
              { label: "OFF-AXIS", active: showOffAxis, set: setShowOffAxis, dotA: t.rayOffWarm, dotB: t.rayOffCool },
            ].map(({ label, active, set, dotA, dotB }, idx) => (
              <button key={label} onClick={() => set(!active)} style={{
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
          {/* ── Ray mode ── */}
          <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: "100%", transition: "border-color 0.3s" }}>
            {[
              { label: "FROM \u221e", val: false, icon: "\u2225" },
              { label: "TRACKS FOCUS", val: true, icon: "\u27e9" },
            ].map(({ label, val, icon }) => (
              <button key={label} onClick={() => setRayTracksF(val)} style={{
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
          {/* ── Chromatic color toggle ── */}
          {ENABLE_COLOR_TRACING && (
            <div style={{ display: "flex", gap: 0, borderRadius: 5, overflow: "hidden", border: `1px solid ${t.toggleBorder}`, width: "100%", transition: "border-color 0.3s" }}>
              <button onClick={() => setShowChromatic(!showChromatic)} style={{
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
        </div>
      </div>

      {/* ── SVG viewport ── */}
      <svg viewBox={`0 0 ${L.svgW} ${L.svgH}`} width="100%" style={{ display: "block", maxHeight: "54vh", minHeight: 290, background: t.bg, transition: "background 0.3s" }}>
        <defs>
          {dark ? (
            <filter id="gl"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          ) : (
            <filter id="gl"><feGaussianBlur stdDeviation="3" result="b" /><feFlood floodColor="#1070c0" floodOpacity="0.12" result="c" /><feComposite in="c" in2="b" operator="in" result="d" /><feMerge><feMergeNode in="d" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          )}
        </defs>
        {Array.from({ length: L.gridCount }, (_, i) => {
          const x = CX - (L.gridCount / 2) * L.gridPitch * L.SC + i * L.gridPitch * L.SC;
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
            strokeWidth={on ? t.elemStrokeActive : t.elemStrokeIdle} style={{ cursor: "pointer", transition: "all 0.12s", filter: on ? "url(#gl)" : "none" }}
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
          const mag = Math.min(30 / Math.abs(chromSpread.lcaMm), 5000);
          const insetX = IX + 8;
          const insetY = sy(0) - 45;
          const insetW = 52;
          const insetH = 58;
          const midX = insetX + insetW / 2;
          const gRef = chromSpread.intercepts.G || IMG_MM;
          return <g>
            <rect x={insetX} y={insetY} width={insetW} height={insetH}
              rx={3} fill={t.panelBg} stroke={t.panelBorder} strokeWidth={0.5} opacity={0.92} />
            <text x={midX} y={insetY + 9} textAnchor="middle" fill={t.muted}
              fontSize={5.5} fontFamily="inherit" style={{ letterSpacing: "0.1em" }}>LCA</text>
            <line x1={insetX + 4} y1={insetY + 24} x2={insetX + insetW - 4} y2={insetY + 24}
              stroke={t.axis} strokeWidth={0.4} />
            {['R', 'G', 'B'].filter(ch => chromSpread.intercepts[ch] !== undefined).map(ch => {
              const offset = (chromSpread.intercepts[ch] - gRef) * mag * L.SC;
              const color = ch === 'R' ? t.rayChromR : ch === 'G' ? t.rayChromG : t.rayChromB;
              return <g key={ch}>
                <line x1={midX + offset} y1={insetY + 14} x2={midX + offset} y2={insetY + 34}
                  stroke={color} strokeWidth={1.5} strokeLinecap="round" />
                <text x={midX + offset} y={insetY + 41} textAnchor="middle" fill={color}
                  fontSize={5.5} fontFamily="inherit" fontWeight={600}>{ch}</text>
              </g>;
            })}
            <text x={midX} y={insetY + 50} textAnchor="middle" fill={t.value}
              fontSize={6.5} fontFamily="inherit" fontWeight={600}>
              {Math.abs(chromSpread.lcaMm * 1000) >= 1 ? `${Math.abs(chromSpread.lcaMm * 1000).toFixed(0)} \u00b5m` : `${Math.abs(chromSpread.lcaMm * 1000).toFixed(1)} \u00b5m`}
            </text>
            <text x={midX} y={insetY + 57} textAnchor="middle" fill={t.muted}
              fontSize={5} fontFamily="inherit">{Math.round(mag)}{"\u00d7"}</text>
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
            fill={on ? t.elemNumActive : dispColor} fontSize={6} fontFamily="inherit"
            fontWeight={on ? 600 : 400} opacity={on ? 1 : 0.75}>{"\u03bd"}{e.vd.toFixed(0)}</text>;
        })}

        {L.groups.map(({ text, fromSurface, toSurface }) => (
          <text key={text} x={sx((zPos[fromSurface] + zPos[toSurface]) / 2)} y={sy(L.lyGroup)} fill={t.groupLabel} fontSize={7} fontFamily="inherit" textAnchor="middle" style={{ letterSpacing: "0.08em" }}>{text}</text>
        ))}

        {L.doublets.map(({ text, fromSurface, toSurface }) => (
          <text key={text} x={sx((zPos[fromSurface] + zPos[toSurface]) / 2)} y={sy(L.lyDoublet)} textAnchor="middle" fill={t.doubletLabel} fontSize={7} fontFamily="inherit">{text}</text>
        ))}
      </svg>

      {/* ── Control panel ── */}
      <div style={{ display: "flex", borderTop: `1px solid ${t.panelBorder}`, background: t.panelBg, flexWrap: "wrap", transition: "background 0.3s,border-color 0.3s" }}>
        <div style={{ flex: "1 1 260px", padding: "14px 22px", borderRight: `1px solid ${t.panelDivider}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 9.5, color: t.label, letterSpacing: "0.1em", minWidth: 85, transition: "color 0.3s" }}>FOCUS</span>
            <span style={{ fontSize: 14, color: t.focusDist, fontWeight: 700, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}>{formatDist(focusT, L)}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>{"\u221e"}</span>
            <input type="range" min="0" max="1" step={L.focusStep} value={focusT}
              onChange={e => setFocusT(parseFloat(e.target.value))}
              style={{ flex: 1, height: 4, appearance: "none", background: t.sliderTrack, borderRadius: 2, outline: "none", cursor: "pointer", accentColor: t.sliderAccent }} />
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>{L.closeFocusM} m</span>
          </div>
          <div style={{ marginTop: 8, fontSize: 9.5, color: t.desc, lineHeight: 1.6, transition: "color 0.3s" }}>{L.focusDescription}</div>
          <div style={{ marginTop: 6, display: "flex", gap: 14, fontSize: 9, color: t.spacingVal, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}>
            {varReadouts.map(({ label, val }) => <span key={label}>{label} {val}</span>)}
          </div>
        </div>

        <div style={{ flex: "1 1 220px", padding: "14px 22px", borderRight: `1px solid ${t.panelDivider}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 9.5, color: t.label, letterSpacing: "0.1em", minWidth: 85, transition: "color 0.3s" }}>APERTURE</span>
            <span style={{ fontSize: 14, color: t.focusDist, fontWeight: 700, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}>
              f/{fNumber < 10 ? fNumber.toFixed(1) : Math.round(fNumber)}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>f/{L.FOPEN.toFixed(1)}</span>
            <input type="range" min="0" max="1" step={L.apertureStep} value={stopdownT}
              onChange={e => setStopdownT(parseFloat(e.target.value))}
              style={{ flex: 1, height: 4, appearance: "none", background: t.sliderTrack, borderRadius: 2, outline: "none", cursor: "pointer", accentColor: t.sliderAccent }} />
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>f/{L.maxFstop}</span>
          </div>
          <div style={{ marginTop: 8, fontSize: 9.5, color: t.desc, lineHeight: 1.6, transition: "color 0.3s" }}>
            EFL {L.EFL.toFixed(2)} mm · EP {"\u2300"} {(L.EP.epSD * 2).toFixed(2)} mm · Stop {"\u2300"} {(currentPhysStopSD * 2).toFixed(2)} mm
          </div>
          <div style={{ marginTop: 6, display: "flex", gap: 14, flexWrap: "wrap", fontSize: 9, color: t.spacingVal, fontVariantNumeric: "tabular-nums", transition: "color 0.3s" }}>
            {L.fstopSeries.filter(n => n >= L.FOPEN - 0.1 && n <= L.maxFstop).map(n => (
              <span key={n}
                onClick={() => setStopdownT(Math.log(n / L.FOPEN) / Math.log(L.maxFstop / L.FOPEN))}
                style={{ cursor: "pointer", opacity: Math.abs(fNumber - n) < 0.15 ? 1 : 0.55, transition: "opacity 0.15s" }}>
                f/{n}
              </span>
            ))}
          </div>
        </div>

        <div style={{ flex: "1 1 360px", padding: "14px 22px", minHeight: 125, transition: "background 0.2s", background: info ? t.infoBgActive : t.infoBgIdle }}>
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
                <div><span style={{ color: info.vd >= 55 ? t.chromDispLow : info.vd >= 35 ? t.chromDispMid : t.chromDispHigh }}>
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
                {showChromatic && <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <svg width="14" height="10" viewBox="0 0 14 10">
                    {chromR && <line x1="0" y1="2" x2="14" y2="2" stroke={t.rayChromR} strokeWidth="1.5" />}
                    {chromG && <line x1="0" y1="5" x2="14" y2="5" stroke={t.rayChromG} strokeWidth="1.5" />}
                    {chromB && <line x1="0" y1="8" x2="14" y2="8" stroke={t.rayChromB} strokeWidth="1.5" />}
                  </svg>
                  <span style={{ color: t.legendText }}>Chromatic (R/G/B)</span>
                </div>}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );

  const descriptionContent = (
    <div style={{ background: t.descBg, overflowY: "auto", transition: "background 0.3s" }}>
      <DescriptionPanel markdown={markdown} theme={t} />
    </div>
  );

  return (
    <div style={{ background: t.bg, color: t.body, fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace", minHeight: "100vh", transition: "background 0.3s,color 0.3s" }}>
      {/* ── Top bar: lens selector ── */}
      <div style={{ padding: "12px 24px", borderBottom: `1px solid ${t.headerBorder}`, backgroundColor: t.headerBgColor, backgroundImage: t.headerBgImage, display: "flex", alignItems: "center", gap: 12, transition: "background-color 0.3s,border-color 0.3s" }}>
        <span style={{ fontSize: 9, letterSpacing: "0.12em", color: t.muted, fontFamily: "inherit", whiteSpace: "nowrap" }}>LENS</span>
        <select
          value={lensKey}
          onChange={e => switchLens(e.target.value)}
          style={{
            backgroundColor: t.selectorBg, border: `1.5px solid ${t.sliderAccent}40`,
            borderRadius: 6, padding: "7px 32px 7px 12px", cursor: "pointer",
            fontSize: 13, color: t.selectorText, fontFamily: "inherit",
            letterSpacing: "0.06em", appearance: "none", outline: "none",
            boxShadow: `0 0 6px ${t.sliderAccent}18`,
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='12' height='7'><path d='M0 0l6 7 6-7z' fill='${t.selectorText}'/></svg>`)}")`,
            backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center",
            transition: "background-color 0.3s, color 0.3s, border-color 0.3s", flex: "0 1 360px",
          }}
        >
          {CATALOG_KEYS.map(k => (
            <option key={k} value={k} style={{ background: t.bg, color: t.body }}>
              {LENS_CATALOG[k].name}
            </option>
          ))}
        </select>

      </div>

      {/* ── Mobile view toggle (narrow screens — own row for visibility) ── */}
      {!isWide && (
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

      {/* ── Desktop view toggle (wide screens) ── */}
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
      {isWide ? (
        effectiveDesktopView === 'diagram' ? (
          <div style={{ minHeight: `calc(100vh - ${showDesktopToggle ? 82 : 45}px)` }}>
            {diagramContent}
          </div>
        ) : effectiveDesktopView === 'analysis' ? (
          <div style={{ overflowY: "auto", maxHeight: `calc(100vh - ${showDesktopToggle ? 82 : 45}px)` }}>
            {descriptionContent}
          </div>
        ) : (
          /* Both — side-by-side */
          <div style={{ display: "flex", minHeight: `calc(100vh - ${showDesktopToggle ? 82 : 45}px)` }}>
            <div style={{ flex: "0 0 60%", minWidth: 0, overflow: "hidden" }}>
              {diagramContent}
            </div>
            <div style={{ flex: "0 0 40%", borderLeft: `1px solid ${t.descBorder}`, overflowY: "auto", maxHeight: `calc(100vh - ${showDesktopToggle ? 82 : 45}px)` }}>
              {descriptionContent}
            </div>
          </div>
        )
      ) : (
        /* Mobile: toggle between views */
        mobileView === 'diagram' ? diagramContent : descriptionContent
      )}
    </div>
  );
}
