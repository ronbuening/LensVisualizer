/**
 * DiagramControlPanel — Renders the control panel section of LensDiagramPanel:
 * slider controls (DiagramControls) and inspector/legend display.
 *
 * Handles responsive layout switching between side-by-side and stacked modes.
 */

import DiagramControls from "../controls/DiagramControls.js";
import ElementInspector from "../display/ElementInspector.js";
import DiagramLegend from "../display/DiagramLegend.js";
import type { RuntimeLens, ElementData, ChromaticSpread } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface VarReadout {
  label: string;
  val: string;
}

interface DiagramControlPanelProps {
  L: RuntimeLens;
  t: Theme;
  compact: boolean;
  isWide: boolean;
  useSideLayout: boolean;
  headerHeight: number;
  showSliders: boolean;
  zoomT: number;
  focusT: number;
  stopdownT: number;
  fNumber: number;
  currentPhysStopSD: number;
  baseEPSD: number;
  dynamicEFL: number;
  effectiveFNum: number;
  showEffectiveAperture: boolean;
  onToggleEffectiveAperture: () => void;
  varReadouts: VarReadout[];
  focusExpanded: boolean;
  apertureExpanded: boolean;
  legendExpanded: boolean;
  onZoomChange: (v: number) => void;
  onFocusChange: (v: number) => void;
  onStopdownChange: (v: number) => void;
  onFocusExpandedChange: (v: boolean) => void;
  onApertureExpandedChange: (v: boolean) => void;
  onLegendExpandedChange: (v: boolean) => void;
  onSliderPointerUp: () => void;
  info: ElementData | null;
  showOnAxis: boolean;
  showOffAxis: string;
  showChromatic: boolean;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  chromSpread: ChromaticSpread | null;
  rayTracksF: boolean;
  onOpenAbbeDiagram: () => void;
}

export default function DiagramControlPanel({
  L,
  t,
  compact,
  isWide,
  useSideLayout,
  headerHeight,
  showSliders,
  zoomT,
  focusT,
  stopdownT,
  fNumber,
  currentPhysStopSD,
  baseEPSD,
  dynamicEFL,
  effectiveFNum,
  showEffectiveAperture,
  onToggleEffectiveAperture,
  varReadouts,
  focusExpanded,
  apertureExpanded,
  legendExpanded,
  onZoomChange,
  onFocusChange,
  onStopdownChange,
  onFocusExpandedChange,
  onApertureExpandedChange,
  onLegendExpandedChange,
  onSliderPointerUp,
  info,
  showOnAxis,
  showOffAxis,
  showChromatic,
  chromR,
  chromG,
  chromB,
  chromSpread,
  rayTracksF,
  onOpenAbbeDiagram,
}: DiagramControlPanelProps) {
  return (
    <div
      style={
        useSideLayout
          ? {
              flex: "0 0 340px",
              borderLeft: `1px solid ${t.panelBorder}`,
              overflowY: "auto",
              maxHeight: `calc(100vh - ${headerHeight}px - 20px)`,
              display: "flex",
              flexDirection: "column",
              background: t.panelBg,
              transition: "background 0.3s,border-color 0.3s",
            }
          : {
              display: "flex",
              borderTop: `1px solid ${t.panelBorder}`,
              background: t.panelBg,
              flexWrap: "wrap",
              transition: "background 0.3s,border-color 0.3s",
            }
      }
    >
      <DiagramControls
        L={L}
        t={t}
        compact={compact}
        useSideLayout={useSideLayout}
        zoomT={zoomT}
        onZoomChange={onZoomChange}
        focusT={focusT}
        onFocusChange={onFocusChange}
        focusExpanded={focusExpanded}
        onFocusExpandedChange={onFocusExpandedChange}
        varReadouts={varReadouts}
        stopdownT={stopdownT}
        onStopdownChange={onStopdownChange}
        fNumber={fNumber}
        currentPhysStopSD={currentPhysStopSD}
        baseEPSD={baseEPSD}
        dynamicEFL={dynamicEFL}
        effectiveFNum={effectiveFNum}
        showEffectiveAperture={showEffectiveAperture}
        onToggleEffectiveAperture={onToggleEffectiveAperture}
        apertureExpanded={apertureExpanded}
        onApertureExpandedChange={onApertureExpandedChange}
        onSliderPointerUp={onSliderPointerUp}
        showSliders={showSliders}
      />

      <div
        style={{
          flex: useSideLayout ? 1 : "1 1 360px",
          padding: compact ? "10px 14px" : "14px 22px",
          minHeight: compact ? 100 : !isWide && !info && !legendExpanded ? 40 : 125,
          transition: "background 0.2s",
          background: info ? t.infoBgActive : t.infoBgIdle,
        }}
      >
        {info ? (
          <ElementInspector info={info} L={L} t={t} showChromatic={showChromatic} />
        ) : (
          <DiagramLegend
            L={L}
            t={t}
            isWide={isWide}
            zoomT={zoomT}
            showOnAxis={showOnAxis}
            showOffAxis={showOffAxis}
            showChromatic={showChromatic}
            chromR={chromR}
            chromG={chromG}
            chromB={chromB}
            chromSpread={chromSpread}
            rayTracksF={rayTracksF}
            legendExpanded={legendExpanded}
            onLegendExpandedChange={onLegendExpandedChange}
            onOpenAbbeDiagram={onOpenAbbeDiagram}
          />
        )}
      </div>
    </div>
  );
}
