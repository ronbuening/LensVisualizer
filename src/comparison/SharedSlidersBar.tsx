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

import type { CSSProperties } from "react";
import { formatSharedFocusDist, sharedFNumber } from "./comparisonSliders.js";
import type { FocusPairResult, AperturePairResult, ZoomPairResult } from "./comparisonSliders.js";
import { formatDist, eflAtZoom } from "../optics/optics.js";
import { SLIDER_LABEL, SLIDER_VALUE_BASE, sliderInput } from "../utils/styles.js";
import type { RuntimeLens } from "../types/optics.js";
import type { Theme } from "../types/theme.js";

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

/* ── Hoisted static styles (unique to this component) ── */
const SLIDER_ROW: CSSProperties = { display: "flex", alignItems: "center", gap: 8 };
const READOUT_ROW: CSSProperties = {
  marginTop: 6,
  display: "flex",
  gap: 16,
  fontSize: 9,
  fontVariantNumeric: "tabular-nums",
};
const LABEL_ROW: CSSProperties = { display: "flex", alignItems: "center", gap: 10, marginBottom: 8 };

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

  /* ── Common-point marker styles ── */
  const sliderWrap: CSSProperties = { position: "relative", flex: 1 };
  /* Downward-pointing triangle above the slider at the common-point position */
  const markerStyle = (pos: number): CSSProperties => ({
    position: "absolute",
    left: `${pos * 100}%`,
    top: -2,
    transform: "translateX(-50%)",
    width: 0,
    height: 0,
    borderLeft: "4px solid transparent",
    borderRight: "4px solid transparent",
    borderTop: `5px solid ${t.sliderAccent}`,
    opacity: 0.7,
    pointerEvents: "none",
  });
  /* Vertical hairline through the slider track at the common-point position */
  const markerLineStyle = (pos: number): CSSProperties => ({
    position: "absolute",
    left: `${pos * 100}%`,
    top: 0,
    bottom: 0,
    transform: "translateX(-50%)",
    width: 1,
    background: `${t.sliderAccent}40`,
    pointerEvents: "none",
  });

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
          <div style={{ flex: 1 }}>
            <div style={LABEL_ROW}>
              <span style={{ ...SLIDER_LABEL, color: t.label, minWidth: 55 }}>ZOOM</span>
              <span style={{ ...SLIDER_VALUE_BASE, color: t.focusDist }}>{zoomEfl} mm</span>
            </div>
            <div style={SLIDER_ROW}>
              <span style={{ fontSize: 9, color: t.focusEndpoint }}>{zoomMinLabel}</span>
              <div style={sliderWrap}>
                {showZoomCPLow && <div style={markerStyle(zoomPair.commonPointLow!)} />}
                {showZoomCPLow && <div style={markerLineStyle(zoomPair.commonPointLow!)} />}
                {showZoomCPHigh && <div style={markerStyle(zoomPair.commonPointHigh!)} />}
                {showZoomCPHigh && <div style={markerLineStyle(zoomPair.commonPointHigh!)} />}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.004"
                  value={sharedZoomT}
                  onChange={(e) => onSharedZoomChange(parseFloat(e.target.value))}
                  onPointerUp={onSliderPointerUp}
                  style={sliderInput(t, { sizing: "full" })}
                />
              </div>
              <span style={{ fontSize: 9, color: t.focusEndpoint }}>{zoomMaxLabel}</span>
            </div>
            <div style={{ ...READOUT_ROW, color: t.spacingVal }}>
              <span>A: {zoomReadoutA}</span>
              <span>B: {zoomReadoutB}</span>
            </div>
          </div>
        )}

        {/* Focus slider */}
        <div style={{ flex: 1 }}>
          <div style={LABEL_ROW}>
            <span style={{ ...SLIDER_LABEL, color: t.label, minWidth: 55 }}>FOCUS</span>
            <span style={{ ...SLIDER_VALUE_BASE, color: t.focusDist }}>{focusDistStr}</span>
          </div>
          <div style={SLIDER_ROW}>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>{"\u221e"}</span>
            <div style={sliderWrap}>
              {showFocusCP && <div style={markerStyle(focusCP)} />}
              {showFocusCP && <div style={markerLineStyle(focusCP)} />}
              <input
                type="range"
                min="0"
                max="1"
                step="0.004"
                value={sharedFocusT}
                onPointerDown={onFocusPointerDown}
                onChange={(e) => onSharedFocusChange(parseFloat(e.target.value))}
                onPointerUp={onSliderPointerUp}
                style={sliderInput(t, { sizing: "full" })}
              />
            </div>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>{minCloseFocus} m</span>
          </div>
          {/* Per-lens readouts */}
          <div style={{ ...READOUT_ROW, color: t.spacingVal }}>
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
          </div>
        </div>

        {/* Aperture slider */}
        <div style={{ flex: 1 }}>
          <div style={LABEL_ROW}>
            <span style={{ ...SLIDER_LABEL, color: t.label, minWidth: 75 }}>APERTURE</span>
            <span style={{ ...SLIDER_VALUE_BASE, color: t.focusDist, minWidth: "3.5em" }}>
              f/{fNum < 10 ? fNum.toFixed(1) : Math.round(fNum)}
            </span>
          </div>
          <div style={SLIDER_ROW}>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>f/{widerFOPEN.toFixed(1)}</span>
            <div style={sliderWrap}>
              {showApertureCP && <div style={markerStyle(apertureCP)} />}
              {showApertureCP && <div style={markerLineStyle(apertureCP)} />}
              <input
                type="range"
                min="0"
                max="1"
                step="0.004"
                value={sharedStopdownT}
                onPointerDown={onAperturePointerDown}
                onChange={(e) => onSharedStopdownChange(parseFloat(e.target.value))}
                onPointerUp={onSliderPointerUp}
                style={sliderInput(t, { sizing: "full" })}
              />
            </div>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>f/{sharedMaxFstop}</span>
          </div>
          {/* f-stop quick-select (union of both series) */}
          <div style={{ ...READOUT_ROW, gap: 14, flexWrap: "wrap", color: t.spacingVal }}>
            {/* Merge both lenses' f-stop series into a sorted union, filter to the
              valid shared range, then compute each f-number's slider position.
              stopT = log(f/fOpen) / log(fMax/fOpen) maps f-number → [0..1] via
              the logarithmic f-stop scale (each full stop is a √2 factor). */}
            {[...new Set([...LA.fstopSeries, ...LB.fstopSeries])]
              .sort((a, b) => a - b)
              .filter((n) => n >= widerFOPEN - 0.1 && n <= sharedMaxFstop)
              .map((n) => {
                const stopT = Math.log(n / widerFOPEN) / Math.log(sharedMaxFstop / widerFOPEN);
                return (
                  <span
                    key={n}
                    onClick={() => {
                      onSharedStopdownChange(Math.max(0, stopT));
                      onSliderPointerUp?.();
                    }}
                    style={{
                      cursor: "pointer",
                      opacity: Math.abs(fNum - n) < 0.15 ? 1 : 0.55,
                      transition: "opacity 0.15s",
                    }}
                  >
                    f/{n}
                  </span>
                );
              })}
          </div>
          {showEffectiveAperture &&
            (Math.abs(effectiveFNumA - fNum) > 0.05 || Math.abs(effectiveFNumB - fNum) > 0.05) && (
              <div style={{ ...READOUT_ROW, color: t.spacingVal }}>
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
        </div>
      </div>
    </div>
  );
}
