/**
 * ChromaticOverlayContent — Enlarged chromatic aberration visualization.
 *
 * Renders standalone charts for axial color and displayed off-axis ray-fan spread.
 * Used inside PanelOverlay.
 */

import type { CSSProperties } from "react";
import type { ChromaticRayFanSpread, ChromaticRayFanSpreadByAxis } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { DispersionQuality } from "../../optics/dispersion.js";
import { CHROMATIC_CHANNEL_METADATA } from "../../optics/chromatic/channels.js";
import LocaInsetWidget from "./LocaInsetWidget.js";
import ChromaticFanSpreadWidget from "./ChromaticFanSpreadWidget.js";

interface ChromaticOverlayContentProps {
  chromaticRayFanSpread: ChromaticRayFanSpread;
  chromaticRayFanSpreads?: ChromaticRayFanSpreadByAxis;
  effectiveSC: number;
  IMG_MM: number;
  t: Theme;
  dispersionQuality?: DispersionQuality;
}

const SINGLE_SVG_W = 340;
const SINGLE_SVG_H = 280;
const MARGIN = 12;
const CHART_COLUMN_STYLE = { flex: `0 1 ${SINGLE_SVG_W}px`, width: SINGLE_SVG_W, maxWidth: "100%", minWidth: 0 };
const CHART_SVG_STYLE = { width: "100%", height: "auto", display: "block" };
const CHART_CAPTION_STYLE: CSSProperties = { fontSize: 11, lineHeight: 1.45, marginTop: 8, textAlign: "center" };
const PANEL_TITLE_STYLE: CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  textAlign: "center",
  marginBottom: 8,
};

function formatUm(mm: number): string {
  if (Math.abs(mm * 1000) >= 1) return `${Math.abs(mm * 1000).toFixed(0)} µm`;
  return `${Math.abs(mm * 1000).toFixed(1)} µm`;
}

function formatSpreadUm(mm: number): string {
  return mm !== 0 ? formatUm(mm) : "< 0.1 µm";
}

export default function ChromaticOverlayContent({
  chromaticRayFanSpread,
  chromaticRayFanSpreads,
  effectiveSC,
  IMG_MM,
  t,
  dispersionQuality,
}: ChromaticOverlayContentProps) {
  const onAxisSpread = chromaticRayFanSpreads ? chromaticRayFanSpreads.onAxis : chromaticRayFanSpread;
  const offAxisSpread = chromaticRayFanSpreads?.offAxis ?? null;
  const svgW = SINGLE_SVG_W;
  const svgH = SINGLE_SVG_H;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "8px 20px 20px" }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          minHeight: 0,
          flexWrap: "wrap",
        }}
      >
        {onAxisSpread ? (
          <div style={CHART_COLUMN_STYLE}>
            <div style={{ ...PANEL_TITLE_STYLE, color: t.label }}>LoCA / Axial Color</div>
            <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={CHART_SVG_STYLE}>
              <LocaInsetWidget
                chromaticRayFanSpread={onAxisSpread}
                effectiveSC={effectiveSC}
                IMG_MM={IMG_MM}
                IX={0}
                svgW={svgW}
                sy={() => svgH / 2}
                t={t}
                width={svgW - MARGIN * 2}
                height={svgH - MARGIN * 2}
                originX={MARGIN}
                originY={MARGIN}
                fontScale={2.8}
                dispersionQuality={dispersionQuality}
              />
            </svg>
            <div style={{ ...CHART_CAPTION_STYLE, color: t.muted }}>
              Longitudinal color is the wavelength focus spread along the optical axis for the active on-axis marginal
              trace.
            </div>
          </div>
        ) : (
          <div style={{ color: t.muted, fontSize: 12, lineHeight: 1.5, textAlign: "center", maxWidth: 320 }}>
            LoCA is unavailable for the active channel set or current ray state.
          </div>
        )}
        {offAxisSpread && (
          <div style={CHART_COLUMN_STYLE}>
            <div style={{ ...PANEL_TITLE_STYLE, color: t.label }}>Off-Axis Fan</div>
            <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={CHART_SVG_STYLE}>
              <ChromaticFanSpreadWidget
                chromaticRayFanSpread={offAxisSpread}
                effectiveSC={effectiveSC}
                t={t}
                width={svgW - MARGIN * 2}
                height={svgH - MARGIN * 2}
                originX={MARGIN}
                originY={MARGIN}
                fontScale={2.8}
                dispersionQuality={dispersionQuality}
              />
            </svg>
            <div style={{ ...CHART_CAPTION_STYLE, color: t.muted }}>
              This follows the displayed off-axis marginal fan and reports wavelength endpoint spread at the image
              plane.
            </div>
          </div>
        )}
      </div>
      {(chromaticRayFanSpreads?.onAxis || chromaticRayFanSpreads?.offAxis) && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            marginTop: 6,
            color: t.muted,
            fontSize: 10,
            letterSpacing: "0.08em",
          }}
        >
          {chromaticRayFanSpreads?.onAxis && (
            <span>LoCA / AXIAL COLOR {formatSpreadUm(chromaticRayFanSpreads.onAxis.axialInterceptSpreadMm)}</span>
          )}
          {chromaticRayFanSpreads?.offAxis && (
            <span>OFF-AXIS FAN {formatSpreadUm(chromaticRayFanSpreads.offAxis.imagePlaneHeightSpreadMm)}</span>
          )}
        </div>
      )}
      <p
        style={{
          margin: "12px 0 0",
          fontSize: 13,
          lineHeight: 1.55,
          color: t.value,
          fontFamily: "inherit",
        }}
      >
        <strong>LoCA / axial color</strong> shows where the active on-axis marginal wavelengths focus along the optical
        axis. <strong>Off-axis fan</strong> shows where the displayed off-axis marginal fan lands at the image plane.
        Both charts use the same selected spectral channels: {CHROMATIC_CHANNEL_METADATA.R.description} (
        {CHROMATIC_CHANNEL_METADATA.R.wavelengthLabel}), {CHROMATIC_CHANNEL_METADATA.G.description} (
        {CHROMATIC_CHANNEL_METADATA.G.wavelengthLabel}), {CHROMATIC_CHANNEL_METADATA.B.description} (
        {CHROMATIC_CHANNEL_METADATA.B.wavelengthLabel}), and, when enabled, {CHROMATIC_CHANNEL_METADATA.V.description} (
        {CHROMATIC_CHANNEL_METADATA.V.wavelengthLabel}). These are geometric marginal-ray diagnostics for the displayed
        fan traces; lateral color/TCA remains a separate chief-ray image-height metric in the chromatic analysis drawer.
      </p>
    </div>
  );
}
