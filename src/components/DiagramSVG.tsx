/**
 * DiagramSVG — Pure SVG rendering component for the lens cross-section diagram.
 *
 * Renders the full `<svg>` element including: defs (glow filter + aspheric diamond
 * pattern), grid lines, optical axis, ray polylines, glass element paths (clickable),
 * aspheric overlays and labels, aperture stop, image plane, LCA inset widget,
 * element annotations, and flash overlay.
 *
 * This is a pure rendering component — all data arrives via props, no internal
 * state or side effects. Interaction callbacks (onHover, onSelect) are passed
 * through from the parent LensDiagramPanel.
 */
import { ENABLE_ASPH_DIAMOND_FILL } from "../utils/featureFlags.js";
import RayPolylines from "./RayPolylines.js";
import ApertureStop from "./ApertureStop.js";
import ElementAnnotations from "./ElementAnnotations.js";
import LCAInsetWidget from "./LCAInsetWidget.js";
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

      {/* Grid lines */}
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

      {/* Optical axis */}
      <line x1={8} y1={sy(0)} x2={L.svgW - 8} y2={sy(0)} stroke={t.axis} strokeWidth={0.5} strokeDasharray="6,4" />

      {/* On-axis rays */}
      {showOnAxis && (
        <RayPolylines
          rays={rays}
          colorFn={(ri) => (ri < L.rayHeights.length / 2 ? t.rayCool : t.rayWarm)}
          solidWidth={1.2}
          rayWidthScale={t.rayWidthScale}
          keyPrefix="on"
        />
      )}

      {/* Off-axis rays */}
      {showOffAxis !== "off" && (
        <RayPolylines
          rays={offAxisRays}
          colorFn={(ri) => (ri < L.offAxisHeights.length / 2 ? t.rayOffCool : t.rayOffWarm)}
          solidWidth={1.1}
          rayWidthScale={t.rayWidthScale}
          solidDash={t.rayOffDash || undefined}
          keyPrefix="off"
        />
      )}

      {/* Chromatic rays */}
      {showChromatic && (
        <RayPolylines
          rays={chromaticRays}
          colorFn={(ri) => {
            const ch = chromaticRays[ri]?.channel;
            return ch === "R" ? t.rayChromR : ch === "G" ? t.rayChromG : t.rayChromB;
          }}
          solidWidth={1.0}
          rayWidthScale={t.rayWidthScale}
          keyPrefix="chrom"
        />
      )}

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

      {/* Aperture stop blades + STO label */}
      <ApertureStop
        sx={sx}
        sy={sy}
        stopZ={stopZ}
        stopPhysSD={L.stopPhysSD}
        currentPhysStopSD={currentPhysStopSD}
        bladeStubFrac={L.bladeStubFrac}
        lyStoPad={L.lyStoPad}
        t={t}
      />

      {/* Image plane */}
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

      {/* LCA inset widget */}
      {showChromatic && chromSpread && chromSpread.lcaMm !== 0 && (
        <LCAInsetWidget
          chromSpread={chromSpread}
          effectiveSC={effectiveSC}
          IMG_MM={IMG_MM}
          IX={IX}
          svgW={L.svgW}
          sy={sy}
          t={t}
        />
      )}

      {/* Element numbers, Abbe badges, group/doublet labels */}
      <ElementAnnotations
        L={L}
        t={t}
        shapes={shapes}
        sx={sx}
        sy={sy}
        zPos={zPos}
        act={act}
        showChromatic={showChromatic}
      />

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
