/**
 * SharedSlidersBar — unified focus/aperture controls for comparison mode.
 */

import { formatSharedFocusDist, sharedFNumber } from '../utils/comparisonSliders.js';
import { formatDist } from '../optics/optics.js';

export default function SharedSlidersBar({ LA, LB, sharedFocusT, sharedStopdownT, onSharedFocusChange, onSharedStopdownChange, onFocusPointerDown, onAperturePointerDown, focusPair, aperturePair, theme: t, isWide }) {
  const { commonPoint: focusCP, minCloseFocus, maxCloseFocus } = focusPair;
  const { commonPoint: apertureCP, widerFOPEN, narrowerFOPEN, sharedMaxFstop } = aperturePair;
  const fNum = sharedFNumber(sharedStopdownT, widerFOPEN, sharedMaxFstop);
  const focusDistStr = formatSharedFocusDist(sharedFocusT, minCloseFocus);
  const showFocusCP = focusCP > 0.01 && focusCP < 0.99;
  const showApertureCP = apertureCP > 0.01 && apertureCP < 0.99;

  const sliderWrap = { position: "relative", flex: 1 };
  const markerStyle = (pos) => ({
    position: "absolute", left: `${pos * 100}%`, top: -2, transform: "translateX(-50%)",
    width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent",
    borderTop: `5px solid ${t.sliderAccent}`, opacity: 0.7, pointerEvents: "none",
  });
  const markerLineStyle = (pos) => ({
    position: "absolute", left: `${pos * 100}%`, top: 0, bottom: 0, transform: "translateX(-50%)",
    width: 1, background: `${t.sliderAccent}40`, pointerEvents: "none",
  });

  return (
    <div style={{ padding: isWide ? "14px 24px" : "12px 14px", borderTop: `1px solid ${t.panelBorder}`, background: t.panelBg, transition: "background 0.3s,border-color 0.3s" }}>
      <div style={{ display: "flex", flexDirection: isWide ? "row" : "column", gap: isWide ? 32 : 16 }}>
        {/* Focus slider */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 9.5, color: t.label, letterSpacing: "0.1em", minWidth: 55 }}>FOCUS</span>
            <span style={{ fontSize: 14, color: t.focusDist, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{focusDistStr}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>{"\u221e"}</span>
            <div style={sliderWrap}>
              {showFocusCP && <div style={markerStyle(focusCP)} />}
              {showFocusCP && <div style={markerLineStyle(focusCP)} />}
              <input type="range" min="0" max="1" step="0.004" value={sharedFocusT}
                onPointerDown={onFocusPointerDown}
                onChange={e => onSharedFocusChange(parseFloat(e.target.value))}
                style={{ width: "100%", height: 4, appearance: "none", background: t.sliderTrack, borderRadius: 2, outline: "none", cursor: "pointer", accentColor: t.sliderAccent }} />
            </div>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>{minCloseFocus} m</span>
          </div>
          {/* Per-lens readouts */}
          <div style={{ marginTop: 6, display: "flex", gap: 16, fontSize: 9, color: t.spacingVal, fontVariantNumeric: "tabular-nums" }}>
            <span>A: {formatDist(focusPair.focusA, LA)}</span>
            <span>B: {formatDist(focusPair.focusB, LB)}</span>
          </div>
        </div>

        {/* Aperture slider */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 9.5, color: t.label, letterSpacing: "0.1em", minWidth: 75 }}>APERTURE</span>
            <span style={{ fontSize: 14, color: t.focusDist, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>
              f/{fNum < 10 ? fNum.toFixed(1) : Math.round(fNum)}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>f/{widerFOPEN.toFixed(1)}</span>
            <div style={sliderWrap}>
              {showApertureCP && <div style={markerStyle(apertureCP)} />}
              {showApertureCP && <div style={markerLineStyle(apertureCP)} />}
              <input type="range" min="0" max="1" step="0.004" value={sharedStopdownT}
                onPointerDown={onAperturePointerDown}
                onChange={e => onSharedStopdownChange(parseFloat(e.target.value))}
                style={{ width: "100%", height: 4, appearance: "none", background: t.sliderTrack, borderRadius: 2, outline: "none", cursor: "pointer", accentColor: t.sliderAccent }} />
            </div>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>f/{sharedMaxFstop}</span>
          </div>
          {/* f-stop quick-select (union of both series) */}
          <div style={{ marginTop: 6, display: "flex", gap: 14, flexWrap: "wrap", fontSize: 9, color: t.spacingVal, fontVariantNumeric: "tabular-nums" }}>
            {[...new Set([...LA.fstopSeries, ...LB.fstopSeries])].sort((a, b) => a - b)
              .filter(n => n >= widerFOPEN - 0.1 && n <= sharedMaxFstop)
              .map(n => {
                const stopT = Math.log(n / widerFOPEN) / Math.log(sharedMaxFstop / widerFOPEN);
                return (
                  <span key={n}
                    onClick={() => onSharedStopdownChange(Math.max(0, stopT))}
                    style={{ cursor: "pointer", opacity: Math.abs(fNum - n) < 0.15 ? 1 : 0.55, transition: "opacity 0.15s" }}>
                    f/{n}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
