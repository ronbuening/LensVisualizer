/**
 * DiagramOverlayLayer — non-element overlays for DiagramSVG.
 *
 * Groups the aperture stop, image plane, annotations, inset widgets, pupil
 * markers, badge overlays, and flash effect into one compositional layer.
 */

import usePrefersReducedMotion from "../../utils/usePrefersReducedMotion.js";
import {
  epAtZoom,
  epZRelStopAtZoom,
  stopInnerBlockedSemiDiameter,
  xpAtZoom,
  xpZRelLastSurfAtZoom,
} from "../../optics/optics.js";
import ApertureStop from "./ApertureStop.js";
import CardinalElementsOverlay from "./CardinalElementsOverlay.js";
import ElementAnnotations from "./ElementAnnotations.js";
import LocaInsetWidget from "./LocaInsetWidget.js";
import PetzvalSumBadge from "./PetzvalSumBadge.js";
import type { RuntimeLens, ElementShape, ChromaticRayFanSpread } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { DispersionQuality } from "../../optics/dispersion.js";
import type { CardinalElements } from "../../optics/cardinalElements.js";

interface DiagramOverlayLayerProps {
  lens: RuntimeLens;
  theme: Theme;
  dark: boolean;
  sx: (z: number) => number;
  sy: (y: number) => number;
  IX: number;
  effectiveSC: number;
  pointTransform?: (z: number, y: number) => [number, number];
  zPos: number[];
  IMG_MM: number;
  shapes: ElementShape[];
  stopZ: number;
  currentPhysStopSD: number;
  chromaticRayFanSpread: ChromaticRayFanSpread | null;
  dispersionQuality?: DispersionQuality;
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
  flashVisible: boolean;
  flashKey: number;
  flashFading: boolean;
  onLocaInsetClick?: () => void;
  onPetzvalBadgeClick?: () => void;
}

export default function DiagramOverlayLayer({
  lens: L,
  theme: t,
  dark,
  sx,
  sy,
  IX,
  effectiveSC,
  pointTransform,
  zPos,
  IMG_MM,
  shapes,
  stopZ,
  currentPhysStopSD,
  chromaticRayFanSpread,
  dispersionQuality,
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
  flashVisible,
  flashKey,
  flashFading,
  onLocaInsetClick,
  onPetzvalBadgeClick,
}: DiagramOverlayLayerProps) {
  const reducedMotion = usePrefersReducedMotion();
  const stopInnerBlockedSD = stopInnerBlockedSemiDiameter(L);
  const screenPoint = (z: number, y: number): [number, number] => {
    const [zz, yy] = pointTransform ? pointTransform(z, y) : [z, y];
    return [sx(zz), sy(yy)];
  };
  const imageNormal = L.imagePlane.normal;
  const isAxialImagePlane = Math.abs(imageNormal.y) < 1e-9 && Math.abs(imageNormal.z) > 1 - 1e-9;
  // Ordinary lenses pin the rendered sensor to IMG_MM; folded/side-focus planes keep their authored geometry.
  const imagePlaneZ = isAxialImagePlane ? IMG_MM : L.imagePlane.z;
  const imagePlaneY = L.imagePlane.y;
  const imageTangent = { z: imageNormal.y, y: -imageNormal.z };
  const imageLineStart = screenPoint(
    imagePlaneZ - imageTangent.z * L.lyImgLine,
    imagePlaneY - imageTangent.y * L.lyImgLine,
  );
  const imageLineEnd = screenPoint(
    imagePlaneZ + imageTangent.z * L.lyImgLine,
    imagePlaneY + imageTangent.y * L.lyImgLine,
  );
  const imageLabel = screenPoint(
    imagePlaneZ + imageTangent.z * L.lyImgLabel,
    imagePlaneY + imageTangent.y * L.lyImgLabel,
  );

  return (
    <>
      <ApertureStop
        sx={sx}
        sy={sy}
        stopZ={stopZ}
        stopPhysSD={L.stopPhysSD}
        stopHousingSD={L.stopHousingSD}
        currentPhysStopSD={currentPhysStopSD}
        innerBlockedSD={stopInnerBlockedSD}
        bladeStubFrac={L.bladeStubFrac}
        lyStoPad={L.lyStoPad}
        pointTransform={pointTransform}
        t={t}
      />

      <line
        x1={imageLineStart[0]}
        y1={imageLineStart[1]}
        x2={imageLineEnd[0]}
        y2={imageLineEnd[1]}
        stroke={t.imgLine}
        strokeWidth={t.imgLineWidth}
        strokeDasharray="4,3"
      />
      <text
        x={imageLabel[0]}
        y={imageLabel[1]}
        textAnchor="middle"
        fill={t.imgLabel}
        fontSize={9.5}
        fontFamily="inherit"
        style={{ letterSpacing: "0.12em" }}
      >
        {L.imagePlane.label}
      </text>

      {showChromatic && chromaticRayFanSpread && Object.keys(chromaticRayFanSpread.axialIntercepts).length >= 2 && (
        <LocaInsetWidget
          chromaticRayFanSpread={chromaticRayFanSpread}
          effectiveSC={effectiveSC}
          IMG_MM={IMG_MM}
          IX={IX}
          svgW={L.svgW}
          sy={sy}
          t={t}
          onClick={onLocaInsetClick}
          dispersionQuality={dispersionQuality}
        />
      )}

      <ElementAnnotations
        L={L}
        t={t}
        shapes={shapes}
        sx={sx}
        sy={sy}
        zPos={zPos}
        pointTransform={pointTransform}
        act={act}
        showChromatic={showChromatic}
      />

      {foldedHitOrderLabels.length > 0 &&
        (() => {
          const seen = new Map<string, number>();
          return foldedHitOrderLabels.map((label, index) => {
            const surfaceIdx = L.labelIdx[label];
            if (surfaceIdx === undefined) return null;
            const previousCount = seen.get(label) ?? 0;
            seen.set(label, previousCount + 1);
            const surface = L.S[surfaceIdx];
            const labelOffset = previousCount * 8;
            const [x, y] = screenPoint(zPos[surfaceIdx], -(surface.sd + 8 + labelOffset));
            return (
              <text
                key={`folded-hit-${index}-${label}`}
                x={x}
                y={y}
                textAnchor="middle"
                fill={t.groupLabel}
                fontSize={8.5}
                fontFamily="inherit"
                fontWeight={600}
                opacity={0.92}
                style={{ pointerEvents: "none", letterSpacing: "0.06em" }}
              >
                {index + 1} {label}
              </text>
            );
          });
        })()}

      {showPupils && (
        <>
          {(() => {
            const epSD = epAtZoom(zoomT, L);
            const xpSD = xpAtZoom(zoomT, L);
            const epZRel = epZRelStopAtZoom(zoomT, L);
            const xpZRel = xpZRelLastSurfAtZoom(zoomT, L);
            const epCenter = isFinite(epZRel)
              ? screenPoint(zPos[L.stopIdx] + epZRel, 0)
              : ([NaN, NaN] as [number, number]);
            const xpCenter = isFinite(xpZRel)
              ? screenPoint(zPos[L.N - 1] + xpZRel, 0)
              : ([NaN, NaN] as [number, number]);
            const epX = epCenter[0];
            const xpX = xpCenter[0];
            const epTop = isFinite(epZRel) ? screenPoint(zPos[L.stopIdx] + epZRel, -epSD) : epCenter;
            const epBottom = isFinite(epZRel) ? screenPoint(zPos[L.stopIdx] + epZRel, epSD) : epCenter;
            const xpTop = isFinite(xpZRel) ? screenPoint(zPos[L.N - 1] + xpZRel, -xpSD) : xpCenter;
            const xpBottom = isFinite(xpZRel) ? screenPoint(zPos[L.N - 1] + xpZRel, xpSD) : xpCenter;
            const midY = isFinite(epCenter[1]) ? epCenter[1] : sy(0);
            const tickLen = 4;
            const epColor = t.pupilEntrance;
            const xpColor = t.pupilExit;
            const labelStyle = {
              pointerEvents: "none" as const,
              letterSpacing: "0.1em",
            };
            const fontSize = 9.5;
            /* Margin allows ticks that extend slightly beyond the SVG edge */
            const MARGIN = tickLen + 2;
            const epInView = isFinite(epX) && epX >= -MARGIN && epX <= L.svgW + MARGIN;
            const xpInView = isFinite(xpX) && xpX >= -MARGIN && xpX <= L.svgW + MARGIN;
            /* Edge indicators for off-screen pupils (only for finite but distant XP/EP) */
            const xpOffRight = !xpInView && isFinite(xpX) && xpX > L.svgW;
            const xpOffLeft = !xpInView && isFinite(xpX) && xpX < 0;
            const epOffLeft = !epInView && isFinite(epX) && epX < 0;
            const epOffRight = !epInView && isFinite(epX) && epX > L.svgW;
            return (
              <>
                {epInView && (
                  <>
                    <line
                      x1={epTop[0]}
                      y1={epTop[1]}
                      x2={epBottom[0]}
                      y2={epBottom[1]}
                      stroke={epColor}
                      strokeWidth={1.2}
                      strokeDasharray="3,2"
                      style={{ pointerEvents: "none" }}
                    />
                    <line
                      x1={epTop[0] - tickLen}
                      y1={epTop[1]}
                      x2={epTop[0] + tickLen}
                      y2={epTop[1]}
                      stroke={epColor}
                      strokeWidth={1.2}
                      style={{ pointerEvents: "none" }}
                    />
                    <line
                      x1={epBottom[0] - tickLen}
                      y1={epBottom[1]}
                      x2={epBottom[0] + tickLen}
                      y2={epBottom[1]}
                      stroke={epColor}
                      strokeWidth={1.2}
                      style={{ pointerEvents: "none" }}
                    />
                    <text
                      x={epX}
                      y={epTop[1] - L.lyStoPad}
                      textAnchor="middle"
                      fontSize={fontSize}
                      fill={epColor}
                      style={labelStyle}
                    >
                      EP
                    </text>
                    <circle cx={epCenter[0]} cy={epCenter[1]} r={2} fill={epColor} style={{ pointerEvents: "none" }} />
                  </>
                )}
                {epOffLeft && (
                  <text
                    x={6}
                    y={midY + fontSize / 2}
                    textAnchor="start"
                    fontSize={fontSize}
                    fill={epColor}
                    style={labelStyle}
                  >
                    ← EP
                  </text>
                )}
                {epOffRight && (
                  <text
                    x={L.svgW - 6}
                    y={midY + fontSize / 2}
                    textAnchor="end"
                    fontSize={fontSize}
                    fill={epColor}
                    style={labelStyle}
                  >
                    EP →
                  </text>
                )}
                {xpInView && (
                  <>
                    <line
                      x1={xpTop[0]}
                      y1={xpTop[1]}
                      x2={xpBottom[0]}
                      y2={xpBottom[1]}
                      stroke={xpColor}
                      strokeWidth={1.2}
                      strokeDasharray="3,2"
                      style={{ pointerEvents: "none" }}
                    />
                    <line
                      x1={xpTop[0] - tickLen}
                      y1={xpTop[1]}
                      x2={xpTop[0] + tickLen}
                      y2={xpTop[1]}
                      stroke={xpColor}
                      strokeWidth={1.2}
                      style={{ pointerEvents: "none" }}
                    />
                    <line
                      x1={xpBottom[0] - tickLen}
                      y1={xpBottom[1]}
                      x2={xpBottom[0] + tickLen}
                      y2={xpBottom[1]}
                      stroke={xpColor}
                      strokeWidth={1.2}
                      style={{ pointerEvents: "none" }}
                    />
                    <text
                      x={xpX}
                      y={xpTop[1] - L.lyStoPad}
                      textAnchor="middle"
                      fontSize={fontSize}
                      fill={xpColor}
                      style={labelStyle}
                    >
                      XP
                    </text>
                    <circle cx={xpCenter[0]} cy={xpCenter[1]} r={2} fill={xpColor} style={{ pointerEvents: "none" }} />
                  </>
                )}
                {xpOffRight && (
                  <text
                    x={L.svgW - 6}
                    y={midY + fontSize / 2}
                    textAnchor="end"
                    fontSize={fontSize}
                    fill={xpColor}
                    style={labelStyle}
                  >
                    XP →
                  </text>
                )}
                {xpOffLeft && (
                  <text
                    x={6}
                    y={midY + fontSize / 2}
                    textAnchor="start"
                    fontSize={fontSize}
                    fill={xpColor}
                    style={labelStyle}
                  >
                    ← XP
                  </text>
                )}
              </>
            );
          })()}
        </>
      )}

      {cardinalElements && (showCardinals || showCardinalDimensions) ? (
        <CardinalElementsOverlay
          lens={L}
          theme={t}
          cardinals={cardinalElements}
          sx={sx}
          sy={sy}
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
        />
      ) : null}

      <PetzvalSumBadge L={L} t={t} onClick={onPetzvalBadgeClick} />

      {flashVisible && (
        <rect
          key={flashKey}
          x="0"
          y="0"
          width={L.svgW}
          height={L.svgH}
          fill={dark ? "#ffffff" : "#000000"}
          opacity={flashFading ? 0 : 0.22}
          style={{
            transition: flashFading && !reducedMotion ? "opacity 0.45s ease-out" : "none",
            pointerEvents: "none",
          }}
        />
      )}
    </>
  );
}
