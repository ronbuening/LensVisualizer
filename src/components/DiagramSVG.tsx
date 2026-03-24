/**
 * DiagramSVG — Pure SVG rendering component for the lens cross-section diagram.
 *
 * Renders the full `<svg>` element including: defs (glow filter + aspheric diamond
 * pattern), grid lines, optical axis, on-axis/off-axis/chromatic ray polylines,
 * glass element paths (clickable), aspheric overlays and labels, aperture stop
 * blades, image plane, LCA inset widget, element number labels, Abbe badges,
 * group labels, doublet labels, and flash overlay.
 *
 * This is a pure rendering component — all data arrives via props, no internal
 * state or side effects. Interaction callbacks (onHover, onSelect) are passed
 * through from the parent LensDiagramPanel.
 */
import { ENABLE_ASPH_DIAMOND_FILL } from "../utils/featureFlags.js";
import type { RuntimeLens, ElementShape, ChromaticSpread, ChromaticChannel } from "../types/optics.js";
import type { Theme } from "../types/theme.js";

interface RaySegment {
  sp: number[][];
  gp: number[][];
}

interface ChromaticRaySegment extends RaySegment {
  channel: ChromaticChannel;
}

interface DiagramSVGProps {
  L: RuntimeLens;
  t: Theme;
  dark: boolean;
  sx: (z: number) => number;
  sy: (y: number) => number;
  CX: number;
  IX: number;
  effectiveSC: number;
  zPos: number[];
  IMG_MM: number;
  shapes: ElementShape[];
  filterId: string;
  stopZ: number;
  currentPhysStopSD: number;
  rays: RaySegment[];
  offAxisRays: RaySegment[];
  chromaticRays: ChromaticRaySegment[];
  chromSpread: ChromaticSpread | null;
  showOnAxis: boolean;
  showOffAxis: string;
  showChromatic: boolean;
  act: number | null;
  onHover: (eid: number | null) => void;
  onSelect: (eid: number | null) => void;
  sel: number | null;
  maxSvgHeight: string;
  useSideLayout: boolean;
  headerHeight: number;
  compact: boolean;
  flashVisible: boolean;
  flashKey: number;
  flashFading: boolean;
}

export default function DiagramSVG({
  L,
  t,
  dark,
  sx,
  sy,
  CX,
  IX,
  effectiveSC,
  zPos,
  IMG_MM,
  shapes,
  filterId,
  stopZ,
  currentPhysStopSD,
  rays,
  offAxisRays,
  chromaticRays,
  chromSpread,
  showOnAxis,
  showOffAxis,
  showChromatic,
  act,
  onHover,
  onSelect,
  sel,
  maxSvgHeight,
  useSideLayout,
  headerHeight,
  compact,
  flashVisible,
  flashKey,
  flashFading,
}: DiagramSVGProps) {
  return (
    <svg
      viewBox={`0 0 ${L.svgW} ${L.svgH}`}
      width="100%"
      style={{
        display: "block",
        maxHeight: useSideLayout ? `calc(100vh - ${headerHeight}px - 20px)` : maxSvgHeight,
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
      <line x1={8} y1={sy(0)} x2={L.svgW - 8} y2={sy(0)} stroke={t.axis} strokeWidth={0.5} strokeDasharray="6,4" />

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
        const e = L.elements.find((x) => x.id === eid)!;
        const on = act === eid;
        return (
          <path
            key={eid}
            d={path}
            fill={t.elemFill(e, on)}
            stroke={t.elemStroke(e, on)}
            strokeWidth={on ? t.elemStrokeActive : t.elemStrokeIdle}
            style={{ cursor: "pointer", transition: "all 0.12s", filter: on ? `url(#${filterId})` : "none" }}
            onMouseEnter={() => onHover(eid)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onSelect(sel === eid ? null : eid)}
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
          const activeChans = (["R", "G", "B"] as ChromaticChannel[]).filter(
            (ch) => chromSpread.intercepts[ch] !== undefined,
          );
          const offsets = activeChans.map((ch) => Math.abs((chromSpread.intercepts[ch] ?? 0) - gRef));
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
                const offset = ((chromSpread.intercepts[ch] ?? 0) - gRef) * mag * effectiveSC;
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
              <text x={midX} y={insetY + 95} textAnchor="middle" fill={t.muted} fontSize={7.5} fontFamily="inherit">
                {Math.round(mag)}
                {"\u00d7"}
              </text>
            </g>
          );
        })()}

      {shapes.map(({ eid, z1, z2 }) => {
        const e = L.elements.find((x) => x.id === eid)!;
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
  );
}
