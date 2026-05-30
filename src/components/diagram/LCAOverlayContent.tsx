/**
 * LCAOverlayContent — Enlarged chromatic aberration visualization.
 *
 * Renders standalone SVG charts for axial LCA and, when the off-axis fan is
 * present, image-plane TCA.
 * Used inside PanelOverlay.
 */

import type { ChromaticSpread, ChromaticSpreadByAxis } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { DispersionQuality } from "../../optics/dispersion.js";
import { CHROMATIC_CHANNEL_METADATA } from "../../optics/chromatic/channels.js";
import LCAInsetWidget from "./LCAInsetWidget.js";
import TCAInsetWidget from "./TCAInsetWidget.js";

interface LCAOverlayContentProps {
  chromSpread: ChromaticSpread;
  chromaticSpreads?: ChromaticSpreadByAxis;
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

function formatUm(mm: number): string {
  if (Math.abs(mm * 1000) >= 1) return `${Math.abs(mm * 1000).toFixed(0)} µm`;
  return `${Math.abs(mm * 1000).toFixed(1)} µm`;
}

function formatSpreadUm(mm: number): string {
  return mm !== 0 ? formatUm(mm) : "< 0.1 µm";
}

export default function LCAOverlayContent({
  chromSpread,
  chromaticSpreads,
  effectiveSC,
  IMG_MM,
  t,
  dispersionQuality,
}: LCAOverlayContentProps) {
  const onAxisSpread = chromaticSpreads ? chromaticSpreads.onAxis : chromSpread;
  const offAxisSpread = chromaticSpreads?.offAxis ?? null;
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
            <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={CHART_SVG_STYLE}>
              <LCAInsetWidget
                chromSpread={onAxisSpread}
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
          </div>
        ) : (
          <div style={{ color: t.muted, fontSize: 12, lineHeight: 1.5, textAlign: "center", maxWidth: 320 }}>
            Axial LCA is unavailable for the active channel set or current ray state.
          </div>
        )}
        {offAxisSpread && (
          <div style={CHART_COLUMN_STYLE}>
            <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={CHART_SVG_STYLE}>
              <TCAInsetWidget
                chromSpread={offAxisSpread}
                effectiveSC={effectiveSC}
                t={t}
                width={svgW - MARGIN * 2}
                height={svgH - MARGIN * 2}
                originX={MARGIN}
                originY={MARGIN}
                fontScale={2.8}
              />
            </svg>
            <div style={{ color: t.muted, fontSize: 11, lineHeight: 1.45, marginTop: 8, textAlign: "center" }}>
              Transverse color is the surviving wavelength spread at the image plane for the displayed off-axis fan.
            </div>
          </div>
        )}
      </div>
      {chromaticSpreads?.onAxis && chromaticSpreads?.offAxis && (
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
          <span>AXIAL LCA {formatSpreadUm(chromaticSpreads.onAxis.lcaMm)}</span>
          <span>OFF-AXIS TCA {formatSpreadUm(chromaticSpreads.offAxis.tcaMm)}</span>
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
        <strong>Longitudinal Chromatic Aberration (LCA)</strong> measures how different wavelengths of light focus at
        different distances along the optical axis. The axial LCA chart uses the outermost usable on-axis marginal trace
        for the active channel set. Off-axis TCA reports the color separation that remains at the image plane for the
        displayed off-axis fan. The colored bars show where {CHROMATIC_CHANNEL_METADATA.R.description} (
        {CHROMATIC_CHANNEL_METADATA.R.wavelengthLabel}), {CHROMATIC_CHANNEL_METADATA.G.description} (
        {CHROMATIC_CHANNEL_METADATA.G.wavelengthLabel}), {CHROMATIC_CHANNEL_METADATA.B.description} (
        {CHROMATIC_CHANNEL_METADATA.B.wavelengthLabel}), and, when enabled, {CHROMATIC_CHANNEL_METADATA.V.description} (
        {CHROMATIC_CHANNEL_METADATA.V.wavelengthLabel}) marginal rays cross the axis in the LCA chart and land at the
        image plane in the TCA chart. This is a geometric spectral-line trace; it is useful for comparing correction
        strategy, but it is not a full-spectrum diffraction, sensor-stack, or production APO certification.
      </p>
    </div>
  );
}
