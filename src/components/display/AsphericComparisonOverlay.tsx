/**
 * AsphericComparisonOverlay — Renders a focused view of a single lens element
 * with each aspheric surface overlaid on its spherical replacement (either the
 * base/vertex sphere or a least-squares best-fit sphere). Supports zoom/pan,
 * an exaggeration slider for visualizing μm-scale departures, and click-to-
 * measure that reports the true (un-exaggerated) Δsag in mm at any point.
 */

import { useCallback, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import useViewBoxZoom from "../hooks/useViewBoxZoom.js";
import {
  computeAsphericDeparture,
  computeBestFitSphereR,
  computeDepartureProfile,
  nearestSurfaceForClick,
  peakAbsDeparture,
  rmsDeparture,
} from "../../optics/asphericComparison.js";
import { sag, conicPolySag } from "../../optics/internal/surfaceMath.js";
import type { AsphericCoefficients, ElementData, RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface AsphericComparisonOverlayProps {
  L: RuntimeLens;
  info: ElementData;
  theme: Theme;
}

interface SurfaceComparison {
  surfIdx: number;
  label: string;
  R_aspheric: number;
  asph: AsphericCoefficients;
  sd: number;
  /** Vertex z position in the local (element-relative) frame — front = 0. */
  vertexZ: number;
  R_base: number;
  R_bestFit: number;
}

interface ClickReadout {
  svgX: number;
  svgY: number;
  surfIdx: number;
  h: number;
  delta: number;
}

const SAMPLES = 96;
const SVG_W = 720;
const SVG_H = 420;

function buildAsphericPathD(
  zVertex: number,
  R: number,
  asph: AsphericCoefficients,
  sd: number,
  sx: (z: number) => number,
  sy: (y: number) => number,
): string {
  let d = "";
  for (let i = 0; i <= SAMPLES; i++) {
    const h = -sd + (2 * sd * i) / SAMPLES;
    const z = zVertex + conicPolySag(Math.abs(h), R, asph);
    d += `${i === 0 ? "M" : "L"}${sx(z).toFixed(3)},${sy(h).toFixed(3)} `;
  }
  return d;
}

/**
 * Sphere drawn relative to the aspheric profile, with departure exaggerated:
 *   z = vertexZ + asphSag − exag · (asphSag − sphereSag(R_sphere))
 * which equals vertexZ + sphereSag(R_sphere) at exag=1, and amplifies the
 * visual offset of the sphere from the aspheric for larger exag.
 */
function buildExaggeratedSpherePathD(
  zVertex: number,
  R_aspheric: number,
  asph: AsphericCoefficients,
  R_sphere: number,
  sd: number,
  exag: number,
  sx: (z: number) => number,
  sy: (y: number) => number,
): string {
  let d = "";
  for (let i = 0; i <= SAMPLES; i++) {
    const h = -sd + (2 * sd * i) / SAMPLES;
    const absH = Math.abs(h);
    const asphZ = conicPolySag(absH, R_aspheric, asph);
    const sphereZ = sag(absH, R_sphere);
    const z = zVertex + asphZ - exag * (asphZ - sphereZ);
    d += `${i === 0 ? "M" : "L"}${sx(z).toFixed(3)},${sy(h).toFixed(3)} `;
  }
  return d;
}

function buildPlainSurfacePathD(
  zVertex: number,
  R: number,
  sd: number,
  sx: (z: number) => number,
  sy: (y: number) => number,
): string {
  let d = "";
  for (let i = 0; i <= SAMPLES; i++) {
    const h = -sd + (2 * sd * i) / SAMPLES;
    const z = zVertex + sag(Math.abs(h), R);
    d += `${i === 0 ? "M" : "L"}${sx(z).toFixed(3)},${sy(h).toFixed(3)} `;
  }
  return d;
}

const exagFromSlider = (t: number) => Math.round(10 ** (t * 3));
const sliderFromExag = (e: number) => Math.log10(Math.max(1, e)) / 3;

export default function AsphericComparisonOverlay({ L, info, theme: t }: AsphericComparisonOverlayProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [mode, setMode] = useState<"base" | "bestFit">("base");
  const [click, setClick] = useState<ClickReadout | null>(null);

  /* ── Resolve aspheric surfaces of this element ── */
  const { surfaces, elemThickness, sdMax } = useMemo(() => {
    const es = L.ES.find(([id]) => id === info.id);
    if (!es) return { surfaces: [] as SurfaceComparison[], elemThickness: 0, sdMax: 0 };
    const [, s1, s2] = es;
    const surf1 = L.S[s1];
    const surf2 = L.S[s2];
    const thickness = surf1.d;
    const list: SurfaceComparison[] = [];
    if (L.asphByIdx[s1]) {
      list.push({
        surfIdx: s1,
        label: surf1.label,
        R_aspheric: surf1.R,
        asph: L.asphByIdx[s1],
        sd: surf1.sd,
        vertexZ: 0,
        R_base: surf1.R,
        R_bestFit: computeBestFitSphereR(surf1.R, L.asphByIdx[s1], surf1.sd),
      });
    }
    if (L.asphByIdx[s2]) {
      list.push({
        surfIdx: s2,
        label: surf2.label,
        R_aspheric: surf2.R,
        asph: L.asphByIdx[s2],
        sd: surf2.sd,
        vertexZ: thickness,
        R_base: surf2.R,
        R_bestFit: computeBestFitSphereR(surf2.R, L.asphByIdx[s2], surf2.sd),
      });
    }
    return {
      surfaces: list,
      elemThickness: thickness,
      sdMax: Math.max(surf1.sd, surf2.sd),
    };
  }, [L, info.id]);

  /* Plain (non-aspheric) surfaces of the element, for visual completeness. */
  const plainSurfaces = useMemo(() => {
    const es = L.ES.find(([id]) => id === info.id);
    if (!es) return [] as { surfIdx: number; R: number; sd: number; vertexZ: number }[];
    const [, s1, s2] = es;
    const out: { surfIdx: number; R: number; sd: number; vertexZ: number }[] = [];
    if (!L.asphByIdx[s1]) out.push({ surfIdx: s1, R: L.S[s1].R, sd: L.S[s1].sd, vertexZ: 0 });
    if (!L.asphByIdx[s2]) out.push({ surfIdx: s2, R: L.S[s2].R, sd: L.S[s2].sd, vertexZ: L.S[s1].d });
    return out;
  }, [L, info.id]);

  /* ── Local element-frame layout (mm → pixels) ── */
  const elementExtentZ = elemThickness + 6; /* 3mm margin each side */
  const elementExtentY = 2 * (sdMax + 2);
  const pxPerMm = Math.min(SVG_W / elementExtentZ, SVG_H / elementExtentY);
  const xOffset = (SVG_W - elemThickness * pxPerMm) / 2;
  const yMid = SVG_H / 2;
  const sx = useCallback((z: number) => xOffset + z * pxPerMm, [xOffset, pxPerMm]);
  const sy = useCallback((y: number) => yMid - y * pxPerMm, [yMid, pxPerMm]);

  /* ── Departure profiles (per surface, current mode) ── */
  const departureBySurf = useMemo(() => {
    const map: Record<number, { profile: ReturnType<typeof computeDepartureProfile>; R_sphere: number }> = {};
    for (const s of surfaces) {
      const R_sphere = mode === "base" ? s.R_base : s.R_bestFit;
      map[s.surfIdx] = {
        profile: computeDepartureProfile(R_sphere, s.R_aspheric, s.asph, s.sd, SAMPLES + 1),
        R_sphere,
      };
    }
    return map;
  }, [surfaces, mode]);

  const peakDeparture = useMemo(() => {
    let p = 0;
    for (const sIdx of Object.keys(departureBySurf)) {
      const v = peakAbsDeparture(departureBySurf[Number(sIdx)].profile);
      if (v > p) p = v;
    }
    return p;
  }, [departureBySurf]);

  /* Auto-exaggeration: target ~5% of element width visual divergence. */
  const defaultExag = useMemo(() => {
    const target = 0.05 * elementExtentZ;
    if (peakDeparture <= 0) return 1;
    return Math.min(1000, Math.max(1, Math.round(target / peakDeparture)));
  }, [elementExtentZ, peakDeparture]);

  const [exag, setExag] = useState<number>(defaultExag);
  /* When mode changes, reset exaggeration to the new auto-default. */
  const lastModeRef = useRef(mode);
  if (lastModeRef.current !== mode) {
    lastModeRef.current = mode;
    setExag(defaultExag);
    setClick(null);
  }

  /* ── Zoom/pan ── */
  const zoom = useViewBoxZoom(SVG_W, SVG_H, true);

  /* ── Click handler ── */
  const handleSvgClick = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      if (zoom.isPanning) return;
      const svgEl = svgRef.current;
      if (!svgEl || surfaces.length === 0) return;
      const rect = svgEl.getBoundingClientRect();
      const fracX = (e.clientX - rect.left) / rect.width;
      const fracY = (e.clientY - rect.top) / rect.height;
      const svgX = zoom.state.vbX + fracX * zoom.state.vbW;
      const svgY = zoom.state.vbY + fracY * zoom.state.vbH;
      const z_mm = (svgX - xOffset) / pxPerMm;
      const h_mm = (yMid - svgY) / pxPerMm;
      const surfIdx = nearestSurfaceForClick(
        z_mm,
        surfaces.map((s) => ({ surfIdx: s.surfIdx, z: s.vertexZ })),
      );
      if (surfIdx === null) return;
      const surf = surfaces.find((s) => s.surfIdx === surfIdx);
      if (!surf) return;
      const R_sphere = departureBySurf[surfIdx].R_sphere;
      const delta = computeAsphericDeparture(Math.abs(h_mm), R_sphere, surf.R_aspheric, surf.asph);
      setClick({ svgX, svgY, surfIdx, h: h_mm, delta });
    },
    [zoom.isPanning, zoom.state, surfaces, xOffset, pxPerMm, yMid, departureBySurf],
  );

  /* ── No aspheric surfaces (defensive) ── */
  if (surfaces.length === 0) {
    return (
      <div style={{ padding: 16, color: t.muted, fontSize: 12 }}>
        This element has no aspheric surfaces. Nothing to compare.
      </div>
    );
  }

  /* ── Styles ── */
  const headerStyle: CSSProperties = {
    display: "flex",
    alignItems: "baseline",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 10,
  };
  const segBtn = (active: boolean): CSSProperties => ({
    fontSize: 10.5,
    padding: "4px 10px",
    border: `1px solid ${active ? t.toggleActiveBorder : t.toggleBorder}`,
    background: active ? t.toggleActiveBg : t.toggleBg,
    color: active ? t.toggleActiveText : t.toggleText,
    borderRadius: 3,
    cursor: "pointer",
    letterSpacing: "0.04em",
    fontWeight: 600,
    transition: "all 0.2s",
  });
  const zoomBtn: CSSProperties = {
    fontSize: 12,
    padding: "3px 9px",
    border: `1px solid ${t.toggleBorder}`,
    background: t.toggleBg,
    color: t.toggleText,
    borderRadius: 3,
    cursor: "pointer",
    fontFamily: "monospace",
  };

  return (
    <div style={{ minWidth: 360, padding: "20px 24px" }}>
      <div style={headerStyle}>
        <span style={{ fontSize: 14, fontWeight: 700, color: t.title }}>{info.label} · Aspheric departure</span>
        <span style={{ fontSize: 11, color: t.muted }}>{surfaces.map((s) => `S${s.label}`).join(" · ")}</span>
      </div>

      {/* Mode toggle + exaggeration slider */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", marginBottom: 8 }}>
        <div style={{ display: "flex", gap: 4 }}>
          <button onClick={() => setMode("base")} style={segBtn(mode === "base")}>
            Base sphere (R)
          </button>
          <button onClick={() => setMode("bestFit")} style={segBtn(mode === "bestFit")}>
            Best-fit sphere
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flex: "1 1 220px", minWidth: 200 }}>
          <span style={{ fontSize: 10, color: t.propLabel }}>Exaggeration</span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.001}
            value={sliderFromExag(exag)}
            onChange={(e) => setExag(exagFromSlider(parseFloat(e.target.value)))}
            style={{ flex: 1, accentColor: t.sliderAccent }}
          />
          <span style={{ fontSize: 10.5, color: t.value, minWidth: 48, textAlign: "right" }}>{exag}×</span>
        </div>
      </div>

      {/* SVG diagram */}
      <div
        style={{
          border: `1px solid ${t.panelBorder}`,
          background: t.bg,
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <svg
          ref={svgRef}
          width="100%"
          viewBox={zoom.viewBox}
          style={{
            display: "block",
            cursor: zoom.isPanning ? "grabbing" : "crosshair",
            touchAction: "none",
          }}
          onWheel={zoom.handleWheel}
          onPointerDown={zoom.handlePointerDown}
          onPointerMove={zoom.handlePointerMove}
          onPointerUp={zoom.handlePointerUp}
          onTouchStart={zoom.handleTouchStart}
          onTouchMove={zoom.handleTouchMove}
          onTouchEnd={zoom.handleTouchEnd}
          onClick={handleSvgClick}
        >
          {/* Optical axis */}
          <line x1={0} x2={SVG_W} y1={yMid} y2={yMid} stroke={t.axis} strokeWidth={0.5} strokeDasharray="3 3" />

          {/* Plain (non-aspheric) surfaces of the same element */}
          {plainSurfaces.map((p) => (
            <path
              key={`plain-${p.surfIdx}`}
              d={buildPlainSurfacePathD(p.vertexZ, p.R, p.sd, sx, sy)}
              fill="none"
              stroke={t._strokeDefault}
              strokeWidth={1.2}
            />
          ))}

          {/* Aspheric (true) profile + spherical (exaggerated) profile per surface */}
          {surfaces.map((s) => {
            const R_sphere = departureBySurf[s.surfIdx].R_sphere;
            const aspPath = buildAsphericPathD(s.vertexZ, s.R_aspheric, s.asph, s.sd, sx, sy);
            const spherePath = buildExaggeratedSpherePathD(
              s.vertexZ,
              s.R_aspheric,
              s.asph,
              R_sphere,
              s.sd,
              exag,
              sx,
              sy,
            );
            return (
              <g key={`asph-${s.surfIdx}`}>
                <path d={spherePath} fill="none" stroke={t.muted} strokeWidth={1} strokeDasharray="4 3" />
                <path d={aspPath} fill="none" stroke={t.asphStroke} strokeWidth={1.6} />
              </g>
            );
          })}

          {/* Click marker — counter-scaled so the ring + tooltip stay constant
           * pixel size regardless of viewBox zoom. Geometry below is anchored
           * at the origin and translated to the click point. */}
          {click &&
            (() => {
              const surf = surfaces.find((s) => s.surfIdx === click.surfIdx);
              if (!surf) return null;
              const ox = 14;
              const oy = -14;
              /* Rect top is oy - rectH; text baselines sit at padding + n*lineH from top.
               * Width is generous to fit "Δsag = -0.00012 mm (-0.12 μm)" at 12px font. */
              const rectW = 255;
              const rectH = 42;
              const lineH = 15;
              const padTop = 14;
              const rectTop = oy - rectH;
              const absDelta = Math.abs(click.delta);
              const deltaStr =
                absDelta >= 0.01 ? `${click.delta.toFixed(4)} mm` : `${(click.delta * 1000).toFixed(2)} μm`;
              const inv = 1 / zoom.state.zoom;
              return (
                <g transform={`translate(${click.svgX} ${click.svgY}) scale(${inv})`}>
                  <circle cx={0} cy={0} r={5.5} fill="none" stroke={t.asphLabel} strokeWidth={1.8} />
                  <line x1={0} y1={0} x2={ox} y2={oy} stroke={t.asphLabel} strokeWidth={1} />
                  <rect
                    x={ox}
                    y={rectTop}
                    width={rectW}
                    height={rectH}
                    rx={4}
                    fill={t.panelBg}
                    stroke={t.panelBorder}
                    strokeWidth={0.8}
                  />
                  <text x={ox + 9} y={rectTop + padTop} fontSize={12} fill={t.value}>
                    S{surf.label} h={click.h.toFixed(2)} mm
                  </text>
                  <text x={ox + 9} y={rectTop + padTop + lineH} fontSize={12} fill={t.asphLabel} fontWeight={600}>
                    Δsag = {deltaStr}
                  </text>
                </g>
              );
            })()}
        </svg>
      </div>

      {/* Footer: per-surface stats + zoom controls */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          alignItems: "center",
          marginTop: 8,
          fontSize: 10.5,
          color: t.propLabel,
        }}
      >
        {surfaces.map((s) => {
          const profile = departureBySurf[s.surfIdx].profile;
          const peakUm = peakAbsDeparture(profile) * 1000;
          const rmsUm = rmsDeparture(profile) * 1000;
          const R_sphere = departureBySurf[s.surfIdx].R_sphere;
          return (
            <div key={s.surfIdx} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ color: t.asphLabel, fontWeight: 600 }}>S{s.label}</span>
              <span>
                R<sub>sphere</sub> = <span style={{ color: t.value }}>{R_sphere.toFixed(3)}</span> mm
              </span>
              <span>
                peak <span style={{ color: t.value }}>{peakUm.toFixed(2)} μm</span>
                {"  ·  "}rms <span style={{ color: t.value }}>{rmsUm.toFixed(2)} μm</span>
              </span>
            </div>
          );
        })}
        <div style={{ marginLeft: "auto", display: "flex", gap: 4, alignItems: "center" }}>
          <span style={{ marginRight: 4 }}>{zoom.state.zoom.toFixed(1)}×</span>
          <button onClick={zoom.zoomOut} style={zoomBtn} aria-label="zoom out">
            −
          </button>
          <button onClick={zoom.reset} style={zoomBtn} aria-label="reset zoom">
            0
          </button>
          <button onClick={zoom.zoomIn} style={zoomBtn} aria-label="zoom in">
            +
          </button>
        </div>
      </div>
      <div style={{ marginTop: 6, fontSize: 9.5, color: t.muted, lineHeight: 1.4 }}>
        Solid line: aspheric (true). Dashed: spherical replacement, displayed with{" "}
        <span style={{ color: t.value }}>{exag}×</span> departure exaggeration. Click anywhere to read the true Δsag.
        Scroll/drag to zoom and pan.
      </div>
    </div>
  );
}
