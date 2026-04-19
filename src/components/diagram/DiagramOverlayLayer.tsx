/**
 * DiagramOverlayLayer — non-element overlays for DiagramSVG.
 *
 * Groups the aperture stop, image plane, annotations, inset widgets, pupil
 * markers, badge overlays, and flash effect into one compositional layer.
 */

import { epAtZoom, epZRelStopAtZoom, xpAtZoom, xpZRelLastSurfAtZoom } from "../../optics/optics.js";
import ApertureStop from "./ApertureStop.js";
import ElementAnnotations from "./ElementAnnotations.js";
import LCAInsetWidget from "./LCAInsetWidget.js";
import PetzvalSumBadge from "./PetzvalSumBadge.js";
import type { RuntimeLens, ElementShape, ChromaticSpread } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface DiagramOverlayLayerProps {
  lens: RuntimeLens;
  theme: Theme;
  dark: boolean;
  sx: (z: number) => number;
  sy: (y: number) => number;
  IX: number;
  effectiveSC: number;
  zPos: number[];
  IMG_MM: number;
  shapes: ElementShape[];
  stopZ: number;
  currentPhysStopSD: number;
  chromSpread: ChromaticSpread | null;
  showChromatic: boolean;
  showPupils: boolean;
  zoomT: number;
  act: number | null;
  flashVisible: boolean;
  flashKey: number;
  flashFading: boolean;
  onLcaInsetClick?: () => void;
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
  zPos,
  IMG_MM,
  shapes,
  stopZ,
  currentPhysStopSD,
  chromSpread,
  showChromatic,
  showPupils,
  zoomT,
  act,
  flashVisible,
  flashKey,
  flashFading,
  onLcaInsetClick,
  onPetzvalBadgeClick,
}: DiagramOverlayLayerProps) {
  return (
    <>
      <ApertureStop
        sx={sx}
        sy={sy}
        stopZ={stopZ}
        stopPhysSD={L.stopPhysSD}
        stopHousingSD={L.stopHousingSD}
        currentPhysStopSD={currentPhysStopSD}
        bladeStubFrac={L.bladeStubFrac}
        lyStoPad={L.lyStoPad}
        t={t}
      />

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
        fontSize={9.5}
        fontFamily="inherit"
        style={{ letterSpacing: "0.12em" }}
      >
        IMG
      </text>

      {showChromatic && chromSpread && Object.keys(chromSpread.intercepts).length >= 2 && (
        <LCAInsetWidget
          chromSpread={chromSpread}
          effectiveSC={effectiveSC}
          IMG_MM={IMG_MM}
          IX={IX}
          svgW={L.svgW}
          sy={sy}
          t={t}
          onClick={onLcaInsetClick}
        />
      )}

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

      {showPupils && (
        <>
          {(() => {
            const epSD = epAtZoom(zoomT, L);
            const xpSD = xpAtZoom(zoomT, L);
            const epZRel = epZRelStopAtZoom(zoomT, L);
            const xpZRel = xpZRelLastSurfAtZoom(zoomT, L);
            const epX = isFinite(epZRel) ? sx(zPos[L.stopIdx] + epZRel) : NaN;
            const xpX = isFinite(xpZRel) ? sx(zPos[L.N - 1] + xpZRel) : NaN;
            const midY = sy(0);
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
                      x1={epX}
                      y1={sy(-epSD)}
                      x2={epX}
                      y2={sy(epSD)}
                      stroke={epColor}
                      strokeWidth={1.2}
                      strokeDasharray="3,2"
                      style={{ pointerEvents: "none" }}
                    />
                    <line
                      x1={epX - tickLen}
                      y1={sy(-epSD)}
                      x2={epX + tickLen}
                      y2={sy(-epSD)}
                      stroke={epColor}
                      strokeWidth={1.2}
                      style={{ pointerEvents: "none" }}
                    />
                    <line
                      x1={epX - tickLen}
                      y1={sy(epSD)}
                      x2={epX + tickLen}
                      y2={sy(epSD)}
                      stroke={epColor}
                      strokeWidth={1.2}
                      style={{ pointerEvents: "none" }}
                    />
                    <text
                      x={epX}
                      y={sy(-epSD) - L.lyStoPad}
                      textAnchor="middle"
                      fontSize={fontSize}
                      fill={epColor}
                      style={labelStyle}
                    >
                      EP
                    </text>
                    <circle cx={epX} cy={midY} r={2} fill={epColor} style={{ pointerEvents: "none" }} />
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
                      x1={xpX}
                      y1={sy(-xpSD)}
                      x2={xpX}
                      y2={sy(xpSD)}
                      stroke={xpColor}
                      strokeWidth={1.2}
                      strokeDasharray="3,2"
                      style={{ pointerEvents: "none" }}
                    />
                    <line
                      x1={xpX - tickLen}
                      y1={sy(-xpSD)}
                      x2={xpX + tickLen}
                      y2={sy(-xpSD)}
                      stroke={xpColor}
                      strokeWidth={1.2}
                      style={{ pointerEvents: "none" }}
                    />
                    <line
                      x1={xpX - tickLen}
                      y1={sy(xpSD)}
                      x2={xpX + tickLen}
                      y2={sy(xpSD)}
                      stroke={xpColor}
                      strokeWidth={1.2}
                      style={{ pointerEvents: "none" }}
                    />
                    <text
                      x={xpX}
                      y={sy(-xpSD) - L.lyStoPad}
                      textAnchor="middle"
                      fontSize={fontSize}
                      fill={xpColor}
                      style={labelStyle}
                    >
                      XP
                    </text>
                    <circle cx={xpX} cy={midY} r={2} fill={xpColor} style={{ pointerEvents: "none" }} />
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
          style={{ transition: flashFading ? "opacity 0.45s ease-out" : "none", pointerEvents: "none" }}
        />
      )}
    </>
  );
}
