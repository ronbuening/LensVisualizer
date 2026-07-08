/**
 * DiagramSVG — Pure SVG rendering component for the lens cross-section diagram.
 *
 * Renders the full `<svg>` element including: defs (glow filter + aspheric diamond
 * pattern), grid lines, optical axis, ray polylines, glass element paths (clickable),
 * aspheric overlays and labels, aperture stop, image plane, LoCA inset widget,
 * element annotations, and flash overlay.
 *
 * This is a pure rendering component — all data arrives via props, no internal
 * state or side effects. Interaction callbacks (onHover, onSelect) are passed
 * through from the parent LensDiagramPanel.
 */
import { memo } from "react";
import usePrefersReducedMotion from "../../utils/usePrefersReducedMotion.js";
import DiagramDefs from "./DiagramDefs.js";
import DiagramElementLayer from "./DiagramElementLayer.js";
import DiagramGridAxisLayer from "./DiagramGridAxisLayer.js";
import DiagramOverlayLayer from "./DiagramOverlayLayer.js";
import DiagramRayLayers from "./DiagramRayLayers.js";
import type { RuntimeLens, ElementShape, ChromaticRayFanSpread } from "../../types/optics.js";
import type { DispersionQuality } from "../../optics/dispersion.js";
import type { LensMovementTransform } from "../../optics/lensMovement.js";
import type { CardinalElements } from "../../optics/cardinalElements.js";
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
  chromaticRayFanSpread: ChromaticRayFanSpread | null;
  dispersionQuality?: DispersionQuality;
  showOnAxis: boolean;
  showOffAxis: OffAxisMode;
  showChromatic: boolean;
  showPupils: boolean;
  showCardinals?: boolean;
  showCardinalFocal?: boolean;
  showCardinalPrincipal?: boolean;
  showCardinalNodal?: boolean;
  showCardinalDimensions?: boolean;
  showCardinalEfl?: boolean;
  showCardinalBfd?: boolean;
  showCardinalFfd?: boolean;
  showCardinalHiatus?: boolean;
  showCardinalTotalTrack?: boolean;
  cardinalElements?: CardinalElements | null;
  foldedHitOrderLabels?: string[];
  zoomT: number;
  act: number | null;
  onHover: (eid: number | null) => void;
  onSelect: (eid: number | null) => void;
  sel: number | null;
  maxSvgHeight: string;
  useSideLayout: boolean;
  fillAvailableHeight?: boolean;
  headerHeight: number;
  compact: boolean;
  flashVisible: boolean;
  flashKey: number;
  flashFading: boolean;
  onLocaInsetClick?: () => void;
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
  chromaticRayFanSpread,
  dispersionQuality,
  showOnAxis,
  showOffAxis,
  showChromatic,
  showPupils,
  showCardinals = false,
  showCardinalFocal = true,
  showCardinalPrincipal = true,
  showCardinalNodal = true,
  showCardinalDimensions = false,
  showCardinalEfl = true,
  showCardinalBfd = true,
  showCardinalFfd = true,
  showCardinalHiatus = true,
  showCardinalTotalTrack = true,
  cardinalElements,
  foldedHitOrderLabels = [],
  zoomT,
  act,
  onHover,
  onSelect,
  sel,
  maxSvgHeight,
  useSideLayout,
  fillAvailableHeight = false,
  headerHeight,
  compact,
  flashVisible,
  flashKey,
  flashFading,
  onLocaInsetClick,
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
  const reducedMotion = usePrefersReducedMotion();

  /* ── Accessible name/description for the primary diagram ── */
  const lensDisplayName = [L.data.maker, L.data.name].filter(Boolean).join(" ");
  const ariaLabel = `Lens cross-section diagram of ${lensDisplayName}`;
  const shownLayers = [
    showOnAxis ? "on-axis rays" : null,
    showOffAxis !== "off" ? "off-axis rays" : null,
    showChromatic ? "chromatic rays" : null,
    showPupils ? "pupil overlays" : null,
    showCardinals ? "cardinal element markers" : null,
  ].filter((layer): layer is string => layer !== null);
  const description =
    `Cross-section of the ${L.elements.length}-element ${lensDisplayName} with ray tracing` +
    (shownLayers.length > 0 ? `, showing ${shownLayers.join(", ")}.` : "; all ray layers hidden.");

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox={viewBoxOverride ?? `0 0 ${L.svgW} ${L.svgH}`}
      width="100%"
      style={{
        display: "block",
        height: fillAvailableHeight ? "100%" : undefined,
        maxHeight: fillAvailableHeight
          ? "none"
          : useSideLayout
            ? `calc(100vh - ${headerHeight}px - 20px)`
            : maxSvgHeight,
        minHeight: fillAvailableHeight ? 0 : compact ? 200 : 290,
        background: t.bg,
        transition: reducedMotion ? undefined : "background 0.3s",
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
      <title>{ariaLabel}</title>
      <desc>{description}</desc>
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
        chromaticRayFanSpread={chromaticRayFanSpread}
        dispersionQuality={dispersionQuality}
        showChromatic={showChromatic}
        showPupils={showPupils}
        showCardinals={showCardinals}
        showCardinalFocal={showCardinalFocal}
        showCardinalPrincipal={showCardinalPrincipal}
        showCardinalNodal={showCardinalNodal}
        showCardinalDimensions={showCardinalDimensions}
        showCardinalEfl={showCardinalEfl}
        showCardinalBfd={showCardinalBfd}
        showCardinalFfd={showCardinalFfd}
        showCardinalHiatus={showCardinalHiatus}
        showCardinalTotalTrack={showCardinalTotalTrack}
        cardinalElements={cardinalElements}
        foldedHitOrderLabels={foldedHitOrderLabels}
        zoomT={zoomT}
        act={act}
        flashVisible={flashVisible}
        flashKey={flashKey}
        flashFading={flashFading}
        onLocaInsetClick={onLocaInsetClick}
        onPetzvalBadgeClick={onPetzvalBadgeClick}
      />
    </svg>
  );
});

export default DiagramSVG;
