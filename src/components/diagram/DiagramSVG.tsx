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
import { memo } from "react";
import DiagramDefs from "./DiagramDefs.js";
import DiagramElementLayer from "./DiagramElementLayer.js";
import DiagramGridAxisLayer from "./DiagramGridAxisLayer.js";
import DiagramOverlayLayer from "./DiagramOverlayLayer.js";
import DiagramRayLayers from "./DiagramRayLayers.js";
import type { RuntimeLens, ElementShape, ChromaticSpread } from "../../types/optics.js";
import type { LensMovementTransform } from "../../optics/lensMovement.js";
import type { Theme } from "../../types/theme.js";
import type { ChromaticRaySegment, RaySegment } from "./diagramSvgTypes.js";
import type { OffAxisMode } from "../../types/state.js";

interface DiagramSVGProps {
  L: RuntimeLens;
  t: Theme;
  dark: boolean;
  sx: (z: number) => number;
  sy: (y: number) => number;
  CX: number;
  IX: number;
  effectiveSC: number;
  movementTransform?: LensMovementTransform;
  lensAxis?: [[number, number], [number, number]] | null;
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
  showOffAxis: OffAxisMode;
  showChromatic: boolean;
  showPupils: boolean;
  zoomT: number;
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
  onLcaInsetClick?: () => void;
  onPetzvalBadgeClick?: () => void;
  /** Override the default viewBox for zoom/pan mode */
  viewBoxOverride?: string;
  /** When true, disable element hover/click and show grab cursor */
  zoomPanActive?: boolean;
  /** SVG interaction handlers for zoom/pan mode */
  onSvgWheel?: (e: React.WheelEvent<SVGSVGElement>) => void;
  onSvgPointerDown?: (e: React.PointerEvent<SVGSVGElement>) => void;
  onSvgPointerMove?: (e: React.PointerEvent<SVGSVGElement>) => void;
  onSvgPointerUp?: (e: React.PointerEvent<SVGSVGElement>) => void;
  onSvgTouchStart?: (e: React.TouchEvent<SVGSVGElement>) => void;
  onSvgTouchMove?: (e: React.TouchEvent<SVGSVGElement>) => void;
  onSvgTouchEnd?: (e: React.TouchEvent<SVGSVGElement>) => void;
  /** Whether a drag pan is in progress (for cursor style) */
  isPanning?: boolean;
}

const DiagramSVG = memo(function DiagramSVG({
  L,
  t,
  dark,
  sx,
  sy,
  CX,
  IX,
  effectiveSC,
  movementTransform,
  lensAxis,
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
  showPupils,
  zoomT,
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
  onLcaInsetClick,
  onPetzvalBadgeClick,
  viewBoxOverride,
  zoomPanActive,
  onSvgWheel,
  onSvgPointerDown,
  onSvgPointerMove,
  onSvgPointerUp,
  onSvgTouchStart,
  onSvgTouchMove,
  onSvgTouchEnd,
  isPanning,
}: DiagramSVGProps) {
  const zoomCursor = zoomPanActive ? (isPanning ? "grabbing" : "grab") : undefined;

  return (
    <svg
      viewBox={viewBoxOverride ?? `0 0 ${L.svgW} ${L.svgH}`}
      width="100%"
      style={{
        display: "block",
        maxHeight: useSideLayout ? `calc(100vh - ${headerHeight}px - 20px)` : maxSvgHeight,
        minHeight: compact ? 200 : 290,
        background: t.bg,
        transition: "background 0.3s",
        cursor: zoomCursor,
        touchAction: zoomPanActive ? "none" : undefined,
      }}
      onWheel={zoomPanActive ? onSvgWheel : undefined}
      onPointerDown={zoomPanActive ? onSvgPointerDown : undefined}
      onPointerMove={zoomPanActive ? onSvgPointerMove : undefined}
      onPointerUp={zoomPanActive ? onSvgPointerUp : undefined}
      onPointerCancel={zoomPanActive ? onSvgPointerUp : undefined}
      onTouchStart={zoomPanActive ? onSvgTouchStart : undefined}
      onTouchMove={zoomPanActive ? onSvgTouchMove : undefined}
      onTouchEnd={zoomPanActive ? onSvgTouchEnd : undefined}
    >
      <DiagramDefs dark={dark} filterId={filterId} theme={t} />
      <DiagramGridAxisLayer lens={L} theme={t} CX={CX} effectiveSC={effectiveSC} sy={sy} />
      {lensAxis && (
        <line
          x1={sx(lensAxis[0][0])}
          y1={sy(lensAxis[0][1])}
          x2={sx(lensAxis[1][0])}
          y2={sy(lensAxis[1][1])}
          stroke={t.axis}
          strokeWidth={0.9}
          strokeDasharray="2,4"
          opacity={0.55}
          style={{ pointerEvents: "none" }}
        />
      )}
      <DiagramRayLayers
        lens={L}
        theme={t}
        rays={rays}
        offAxisRays={offAxisRays}
        chromaticRays={chromaticRays}
        showOnAxis={showOnAxis}
        showOffAxis={showOffAxis}
        showChromatic={showChromatic}
      />
      <DiagramElementLayer
        lens={L}
        shapes={shapes}
        theme={t}
        filterId={filterId}
        act={act}
        sel={sel}
        zoomPanActive={zoomPanActive}
        onHover={onHover}
        onSelect={onSelect}
      />
      <DiagramOverlayLayer
        lens={L}
        theme={t}
        dark={dark}
        sx={sx}
        sy={sy}
        IX={IX}
        effectiveSC={effectiveSC}
        pointTransform={movementTransform?.point}
        zPos={zPos}
        IMG_MM={IMG_MM}
        shapes={shapes}
        stopZ={stopZ}
        currentPhysStopSD={currentPhysStopSD}
        chromSpread={chromSpread}
        showChromatic={showChromatic}
        showPupils={showPupils}
        zoomT={zoomT}
        act={act}
        flashVisible={flashVisible}
        flashKey={flashKey}
        flashFading={flashFading}
        onLcaInsetClick={onLcaInsetClick}
        onPetzvalBadgeClick={onPetzvalBadgeClick}
      />
    </svg>
  );
});

export default DiagramSVG;
