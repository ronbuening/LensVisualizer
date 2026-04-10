/**
 * SharedSlidersBar — unified focus/aperture/zoom controls for comparison mode.
 *
 * When two lenses are compared, each has different capabilities (close-focus
 * distance, max aperture, zoom range). This bar maps a single shared slider
 * position to per-lens values via the pure functions in comparisonSliders.js.
 *
 * Visual markers (▼ triangles + vertical lines) show the "common point" —
 * the slider position where the less-capable lens reaches its limit. Beyond
 * this point, that lens is clamped while the other continues.
 *
 * @param {Object}   props
 * @param {Object}   props.LA                   — built lens object for Lens A
 * @param {Object}   props.LB                   — built lens object for Lens B
 * @param {number}   props.sharedFocusT          — shared focus slider [0 = ∞, 1 = closest]
 * @param {number}   props.sharedStopdownT       — shared aperture slider [0 = wide open, 1 = max]
 * @param {number}   props.sharedZoomT            — shared zoom slider [0..1]
 * @param {Function} props.onSharedFocusChange    — callback when focus slider moves
 * @param {Function} props.onSharedStopdownChange — callback when aperture slider moves
 * @param {Function} props.onSharedZoomChange     — callback when zoom slider moves
 * @param {Function} props.onFocusPointerDown     — pointer-down on focus (for sticky logic)
 * @param {Function} props.onAperturePointerDown  — pointer-down on aperture (for sticky logic)
 * @param {Function} props.onSliderPointerUp      — pointer-up on any slider (ends sticky)
 * @param {Object}   props.focusPair              — { focusA, focusB, commonPoint, ... }
 * @param {Object}   props.aperturePair           — { stopdownA, stopdownB, commonPoint, ... }
 * @param {Object}   props.zoomPair               — { zoomA, zoomB, showZoom, ... }
 * @param {Object}   props.theme                  — active theme object
 * @param {boolean}  props.isWide                  — true when viewport is desktop-width
 */

import { formatSharedFocusDist, sharedFNumber } from "./comparisonSliders.js";
import type { FocusPairResult, AperturePairResult, ZoomPairResult } from "./comparisonSliders.js";
import { formatDist, eflAtZoom } from "../optics/optics.js";
import type { RuntimeLens } from "../types/optics.js";
import type { Theme } from "../types/theme.js";
import SharedSliderSection from "./SharedSliderSection.js";
import SharedFStopQuickSelect from "./SharedFStopQuickSelect.js";

interface SharedSlidersBarProps {
  LA: RuntimeLens;
  LB: RuntimeLens;
  sharedFocusT: number;
  sharedStopdownT: number;
  sharedZoomT: number;
  onSharedFocusChange: (value: number) => void;
  onSharedStopdownChange: (value: number) => void;
  onSharedZoomChange: (value: number) => void;
  onFocusPointerDown: () => void;
  onAperturePointerDown: () => void;
  onSliderPointerUp?: () => void;
  focusPair: FocusPairResult;
  aperturePair: AperturePairResult;
  zoomPair: ZoomPairResult | null;
  dynamicEflA: number;
  dynamicEflB: number;
  effectiveFNumA: number;
  effectiveFNumB: number;
  showEffectiveAperture: boolean;
  onToggleEffectiveAperture?: () => void;
  theme: Theme;
  isWide: boolean;
}

export default function SharedSlidersBar({
  LA,
  LB,
  sharedFocusT,
  sharedStopdownT,
  sharedZoomT,
  onSharedFocusChange,
  onSharedStopdownChange,
  onSharedZoomChange,
  onFocusPointerDown,
  onAperturePointerDown,
  onSliderPointerUp,
  focusPair,
  aperturePair,
  zoomPair,
  dynamicEflA,
  dynamicEflB,
  effectiveFNumA,
  effectiveFNumB,
  showEffectiveAperture,
  onToggleEffectiveAperture,
  theme: t,
  isWide,
}: SharedSlidersBarProps) {
  const { commonPoint: focusCP, minCloseFocus } = focusPair;
  const { commonPoint: apertureCP, widerFOPEN, sharedMaxFstop } = aperturePair;
  const fNum = sharedFNumber(sharedStopdownT, widerFOPEN, sharedMaxFstop);
  const focusDistStr = formatSharedFocusDist(sharedFocusT, minCloseFocus);
  /* Only show the common-point marker when it falls in a visible range
   * (not at the extreme ends of the slider where it would be meaningless) */
  const showFocusCP = focusCP > 0.01 && focusCP < 0.99;
  const showApertureCP = apertureCP > 0.01 && apertureCP < 0.99;
  const showZoom = zoomPair?.showZoom;

  /* Zoom readout helpers — dual-zoom uses the shared focal length from
   * computeZoomPair; single-zoom reads from the one zoom lens directly. */
  const zoomReadoutA = LA.isZoom ? `${eflAtZoom(zoomPair?.zoomA ?? 0, LA).toFixed(0)} mm` : "\u2014";
  const zoomReadoutB = LB.isZoom ? `${eflAtZoom(zoomPair?.zoomB ?? 0, LB).toFixed(0)} mm` : "\u2014";
  const bothZoom = LA.isZoom && LB.isZoom;
  const zoomLens = LA.isZoom ? LA : LB.isZoom ? LB : null;
  const zoomEfl =
    bothZoom && zoomPair?.sharedFL
      ? zoomPair.sharedFL.toFixed(0)
      : zoomLens
        ? eflAtZoom(sharedZoomT, zoomLens).toFixed(0)
        : "";
  /* Slider endpoints: dual-zoom uses the union range; single-zoom uses the lens's positions */
  const zoomMinLabel =
    bothZoom && zoomPair?.minFL
      ? `${zoomPair.minFL.toFixed(0)} mm`
      : zoomLens?.zoomPositions
        ? `${zoomLens.zoomPositions[0]} mm`
        : "";
  const zoomMaxLabel =
    bothZoom && zoomPair?.maxFL
      ? `${zoomPair.maxFL.toFixed(0)} mm`
      : zoomLens?.zoomPositions
        ? `${zoomLens.zoomPositions[zoomLens.zoomPositions.length - 1]} mm`
        : "";
  /* Common-point markers for dual-zoom (where one lens reaches its range boundary) */
  const showZoomCPLow = bothZoom && (zoomPair?.commonPointLow ?? 0) > 0.01;
  const showZoomCPHigh = bothZoom && (zoomPair?.commonPointHigh ?? 1) < 0.99;
  const zoomMarkerPositions = [
    ...(showZoomCPLow && zoomPair?.commonPointLow != null ? [zoomPair.commonPointLow] : []),
    ...(showZoomCPHigh && zoomPair?.commonPointHigh != null ? [zoomPair.commonPointHigh] : []),
  ];
  const quickStopSelect = (value: number) => {
    const stopT = Math.log(value / widerFOPEN) / Math.log(sharedMaxFstop / widerFOPEN);
    onSharedStopdownChange(Math.max(0, stopT));
    onSliderPointerUp?.();
  };

  return (
    <div
      style={{
        padding: isWide ? "14px 24px" : "12px 14px",
        borderTop: `1px solid ${t.panelBorder}`,
        background: t.panelBg,
        transition: "background 0.3s,border-color 0.3s",
      }}
    >
      <div style={{ display: "flex", flexDirection: isWide ? "row" : "column", gap: isWide ? 32 : 16 }}>
        {/* Zoom slider (only when at least one lens is a zoom) */}
        {showZoom && (
          <SharedSliderSection
            theme={t}
            label="ZOOM"
            valueLabel={`${zoomEfl} mm`}
            minLabel={zoomMinLabel}
            maxLabel={zoomMaxLabel}
            sliderValue={sharedZoomT}
            onSliderChange={onSharedZoomChange}
            onPointerUp={onSliderPointerUp}
            markerPositions={zoomMarkerPositions}
            readouts={
              <>
                <span>A: {zoomReadoutA}</span>
                <span>B: {zoomReadoutB}</span>
              </>
            }
          />
        )}

        {/* Focus slider */}
        <SharedSliderSection
          theme={t}
          label="FOCUS"
          valueLabel={focusDistStr}
          minLabel={"\u221e"}
          maxLabel={`${minCloseFocus} m`}
          sliderValue={sharedFocusT}
          onSliderChange={onSharedFocusChange}
          onPointerDown={onFocusPointerDown}
          onPointerUp={onSliderPointerUp}
          markerPositions={showFocusCP ? [focusCP] : []}
          readouts={
            <>
              <span>
                A: {formatDist(focusPair.focusA, LA)}
                {focusPair.focusA > 0.003 && Math.abs(dynamicEflA - (LA.isZoom ? eflAtZoom(0, LA) : LA.EFL)) > 0.1 && (
                  <span style={{ opacity: 0.7 }}> ({dynamicEflA.toFixed(1)} mm)</span>
                )}
              </span>
              <span>
                B: {formatDist(focusPair.focusB, LB)}
                {focusPair.focusB > 0.003 && Math.abs(dynamicEflB - (LB.isZoom ? eflAtZoom(0, LB) : LB.EFL)) > 0.1 && (
                  <span style={{ opacity: 0.7 }}> ({dynamicEflB.toFixed(1)} mm)</span>
                )}
              </span>
            </>
          }
        />

        {/* Aperture slider */}
        <SharedSliderSection
          theme={t}
          label="APERTURE"
          valueLabel={`f/${fNum < 10 ? fNum.toFixed(1) : Math.round(fNum)}`}
          minLabel={`f/${widerFOPEN.toFixed(1)}`}
          maxLabel={`f/${sharedMaxFstop}`}
          sliderValue={sharedStopdownT}
          onSliderChange={onSharedStopdownChange}
          onPointerDown={onAperturePointerDown}
          onPointerUp={onSliderPointerUp}
          markerPositions={showApertureCP ? [apertureCP] : []}
          readouts={
            <SharedFStopQuickSelect
              fstopSeriesA={LA.fstopSeries}
              fstopSeriesB={LB.fstopSeries}
              widerFopen={widerFOPEN}
              sharedMaxFstop={sharedMaxFstop}
              currentFNumber={fNum}
              onSelect={quickStopSelect}
            />
          }
          footer={
            <>
              {showEffectiveAperture &&
                (Math.abs(effectiveFNumA - fNum) > 0.05 || Math.abs(effectiveFNumB - fNum) > 0.05) && (
                  <div style={{ marginTop: 6, display: "flex", gap: 16, fontSize: 9, color: t.spacingVal }}>
                    <span>A eff. f/{effectiveFNumA < 10 ? effectiveFNumA.toFixed(1) : Math.round(effectiveFNumA)}</span>
                    <span>B eff. f/{effectiveFNumB < 10 ? effectiveFNumB.toFixed(1) : Math.round(effectiveFNumB)}</span>
                  </div>
                )}
              <div
                style={{ marginTop: 6, fontSize: 9, color: t.desc, cursor: "pointer", userSelect: "none" }}
                onClick={onToggleEffectiveAperture}
              >
                <span style={{ opacity: showEffectiveAperture ? 1 : 0.5 }}>
                  {showEffectiveAperture ? "\u2611" : "\u2610"} Show effective aperture
                </span>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}
