/**
 * DiagramControls — Zoom, focus, and aperture slider controls for the
 * lens diagram. Extracted from LensDiagramPanel for separation of concerns.
 */

import { eflAtZoom, formatDist } from "../optics/optics.js";
import { ENABLE_COLLAPSIBLE_FOCUS, ENABLE_COLLAPSIBLE_APERTURE } from "../utils/featureFlags.js";
import { SLIDER_LABEL, SLIDER_VALUE_BASE, collapseBtn, sliderInput } from "../utils/styles.js";

export default function DiagramControls({
  L,
  t,
  compact,
  useSideLayout,
  /* Zoom */
  zoomT,
  onZoomChange,
  /* Focus */
  focusT,
  onFocusChange,
  focusExpanded,
  onFocusExpandedChange,
  varReadouts,
  /* Aperture */
  stopdownT,
  onStopdownChange,
  fNumber,
  currentPhysStopSD,
  baseEPSD,
  apertureExpanded,
  onApertureExpandedChange,
  /* Shared */
  onSliderPointerUp,
  showSliders,
}) {
  return (
    <>
      {showSliders && L.isZoom && (
        <div
          style={
            useSideLayout
              ? { padding: compact ? "10px 14px" : "14px 22px", borderBottom: `1px solid ${t.panelDivider}` }
              : {
                  flex: "1 1 200px",
                  padding: compact ? "10px 14px" : "14px 22px",
                  borderRight: `1px solid ${t.panelDivider}`,
                }
          }
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ ...SLIDER_LABEL, color: t.label, minWidth: 55 }}>ZOOM</span>
            <span style={{ ...SLIDER_VALUE_BASE, color: t.focusDist }}>{eflAtZoom(zoomT, L).toFixed(0)} mm</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>{L.zoomPositions[0]} mm</span>
            <input
              type="range"
              min="0"
              max="1"
              step={L.zoomStep}
              value={zoomT}
              onChange={(e) => onZoomChange?.(parseFloat(e.target.value))}
              onPointerUp={onSliderPointerUp}
              style={sliderInput(t)}
            />
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>
              {L.zoomPositions[L.zoomPositions.length - 1]} mm
            </span>
          </div>
        </div>
      )}

      {showSliders && (
        <div
          style={
            useSideLayout
              ? { padding: compact ? "10px 14px" : "14px 22px", borderBottom: `1px solid ${t.panelDivider}` }
              : {
                  flex: "1 1 260px",
                  padding: compact ? "10px 14px" : "14px 22px",
                  borderRight: `1px solid ${t.panelDivider}`,
                }
          }
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ ...SLIDER_LABEL, color: t.label, minWidth: 85 }}>FOCUS</span>
            <span style={{ ...SLIDER_VALUE_BASE, color: t.focusDist }}>{formatDist(focusT, L)}</span>
            {ENABLE_COLLAPSIBLE_FOCUS && (
              <button
                onClick={() => onFocusExpandedChange?.(!focusExpanded)}
                style={{ ...collapseBtn(t), marginLeft: "auto" }}
              >
                <span>{focusExpanded ? "LESS" : "MORE"}</span>
                <span style={{ fontSize: 11, lineHeight: 1 }}>{focusExpanded ? "▴" : "▾"}</span>
              </button>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>{"\u221e"}</span>
            <input
              type="range"
              min="0"
              max="1"
              step={L.focusStep}
              value={focusT}
              onChange={(e) => onFocusChange?.(parseFloat(e.target.value))}
              onPointerUp={onSliderPointerUp}
              style={sliderInput(t)}
            />
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>{L.closeFocusM} m</span>
          </div>
          {(!ENABLE_COLLAPSIBLE_FOCUS || focusExpanded) && (
            <>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 9.5,
                  color: t.desc,
                  lineHeight: 1.6,
                  transition: "color 0.3s",
                }}
              >
                {L.focusDescription}
              </div>
              <div
                style={{
                  marginTop: 6,
                  display: "flex",
                  gap: 14,
                  fontSize: 9,
                  color: t.spacingVal,
                  fontVariantNumeric: "tabular-nums",
                  transition: "color 0.3s",
                }}
              >
                {varReadouts.map(({ label, val }) => (
                  <span key={label}>
                    {label} {val}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {showSliders && (
        <div
          style={
            useSideLayout
              ? { padding: compact ? "10px 14px" : "14px 22px", borderBottom: `1px solid ${t.panelDivider}` }
              : {
                  flex: "1 1 220px",
                  padding: compact ? "10px 14px" : "14px 22px",
                  borderRight: `1px solid ${t.panelDivider}`,
                }
          }
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ ...SLIDER_LABEL, color: t.label, minWidth: 85 }}>APERTURE</span>
            <span style={{ ...SLIDER_VALUE_BASE, color: t.focusDist }}>
              f/{fNumber < 10 ? fNumber.toFixed(1) : Math.round(fNumber)}
            </span>
            {ENABLE_COLLAPSIBLE_APERTURE && (
              <button
                onClick={() => onApertureExpandedChange?.(!apertureExpanded)}
                style={{ ...collapseBtn(t), marginLeft: "auto" }}
              >
                <span>{apertureExpanded ? "LESS" : "MORE"}</span>
                <span style={{ fontSize: 11, lineHeight: 1 }}>{apertureExpanded ? "▴" : "▾"}</span>
              </button>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>f/{L.FOPEN.toFixed(1)}</span>
            <input
              type="range"
              min="0"
              max="1"
              step={L.apertureStep}
              value={stopdownT}
              onChange={(e) => onStopdownChange?.(parseFloat(e.target.value))}
              onPointerUp={onSliderPointerUp}
              style={sliderInput(t)}
            />
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>f/{L.maxFstop}</span>
          </div>
          {(!ENABLE_COLLAPSIBLE_APERTURE || apertureExpanded) && (
            <>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 9.5,
                  color: t.desc,
                  lineHeight: 1.6,
                  transition: "color 0.3s",
                }}
              >
                EFL {L.isZoom ? eflAtZoom(zoomT, L).toFixed(1) : L.EFL.toFixed(2)} mm · EP {"\u2300"}{" "}
                {(baseEPSD * 2).toFixed(2)} mm · Stop {"\u2300"} {(currentPhysStopSD * 2).toFixed(2)} mm
              </div>
              <div
                style={{
                  marginTop: 6,
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  fontSize: 9,
                  color: t.spacingVal,
                  fontVariantNumeric: "tabular-nums",
                  transition: "color 0.3s",
                }}
              >
                {L.fstopSeries
                  .filter((n) => n >= L.FOPEN - 0.1 && n <= L.maxFstop)
                  .map((n) => (
                    <span
                      key={n}
                      onClick={() => {
                        onStopdownChange?.(Math.log(n / L.FOPEN) / Math.log(L.maxFstop / L.FOPEN));
                        onSliderPointerUp?.();
                      }}
                      style={{
                        cursor: "pointer",
                        opacity: Math.abs(fNumber - n) < 0.15 ? 1 : 0.55,
                        transition: "opacity 0.15s",
                      }}
                    >
                      f/{n}
                    </span>
                  ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
