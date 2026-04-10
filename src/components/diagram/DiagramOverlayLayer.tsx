/**
 * DiagramOverlayLayer — non-element overlays for DiagramSVG.
 *
 * Groups the aperture stop, image plane, annotations, inset widgets, pupil
 * markers, badge overlays, and flash effect into one compositional layer.
 */

import { ENABLE_PUPIL_TOGGLE } from "../../utils/featureFlags.js";
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

      {ENABLE_PUPIL_TOGGLE && showPupils && (
        <>
          {(() => {
            const epX = sx(zPos[L.stopIdx] + L.epZRelStop);
            const xpX = sx(zPos[L.N - 1] + L.xpZRelLastSurf);
            const epTopY = sy(-L.EP.epSD);
            const epBotY = sy(L.EP.epSD);
            const xpTopY = sy(-L.xpSD);
            const xpBotY = sy(L.xpSD);
            const midY = sy(0);
            const tickLen = 4;
            const color = t.stopLabel;
            const labelStyle = {
              pointerEvents: "none" as const,
              letterSpacing: "0.1em",
            };
            return (
              <>
                <line
                  x1={epX}
                  y1={epTopY}
                  x2={epX}
                  y2={epBotY}
                  stroke={color}
                  strokeWidth={1.2}
                  strokeDasharray="3,2"
                  style={{ pointerEvents: "none" }}
                />
                <line
                  x1={epX - tickLen}
                  y1={epTopY}
                  x2={epX + tickLen}
                  y2={epTopY}
                  stroke={color}
                  strokeWidth={1.2}
                  style={{ pointerEvents: "none" }}
                />
                <line
                  x1={epX - tickLen}
                  y1={epBotY}
                  x2={epX + tickLen}
                  y2={epBotY}
                  stroke={color}
                  strokeWidth={1.2}
                  style={{ pointerEvents: "none" }}
                />
                <text
                  x={epX}
                  y={epTopY - L.lyStoPad}
                  textAnchor="middle"
                  fontSize={L.lyStoPad * 1.4}
                  fill={color}
                  style={labelStyle}
                >
                  EP
                </text>
                <line
                  x1={xpX}
                  y1={xpTopY}
                  x2={xpX}
                  y2={xpBotY}
                  stroke={color}
                  strokeWidth={1.2}
                  strokeDasharray="3,2"
                  style={{ pointerEvents: "none" }}
                />
                <line
                  x1={xpX - tickLen}
                  y1={xpTopY}
                  x2={xpX + tickLen}
                  y2={xpTopY}
                  stroke={color}
                  strokeWidth={1.2}
                  style={{ pointerEvents: "none" }}
                />
                <line
                  x1={xpX - tickLen}
                  y1={xpBotY}
                  x2={xpX + tickLen}
                  y2={xpBotY}
                  stroke={color}
                  strokeWidth={1.2}
                  style={{ pointerEvents: "none" }}
                />
                <text
                  x={xpX}
                  y={xpTopY - L.lyStoPad}
                  textAnchor="middle"
                  fontSize={L.lyStoPad * 1.4}
                  fill={color}
                  style={labelStyle}
                >
                  XP
                </text>
                <circle cx={epX} cy={midY} r={2} fill={color} style={{ pointerEvents: "none" }} />
                <circle cx={xpX} cy={midY} r={2} fill={color} style={{ pointerEvents: "none" }} />
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
