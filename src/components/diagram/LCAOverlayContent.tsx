/**
 * LCAOverlayContent — Enlarged chromatic aberration visualization.
 *
 * Renders a standalone SVG with the axial LCAInsetWidget at a larger size,
 * plus a compact off-axis transverse color readout when that fan is present.
 * Used inside PanelOverlay.
 */

import type { ChromaticSpread, ChromaticSpreadByAxis } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { DispersionQuality } from "../../optics/dispersion.js";
import { CHROMATIC_CHANNEL_METADATA } from "../../optics/chromatic/channels.js";
import LCAInsetWidget from "./LCAInsetWidget.js";

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
          <div style={{ flex: "0 1 auto", maxWidth: svgW, minWidth: 0 }}>
            <svg
              viewBox={`0 0 ${svgW} ${svgH}`}
              style={{ width: "100%", maxWidth: svgW, maxHeight: "100%", display: "block" }}
            >
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
          <div style={{ minWidth: 150, color: t.value, fontFamily: "inherit" }}>
            <div
              style={{
                color: t.muted,
                fontSize: 11,
                letterSpacing: "0.12em",
                marginBottom: 6,
                textAlign: "center",
              }}
            >
              OFF-AXIS TCA
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, textAlign: "center", fontVariantNumeric: "tabular-nums" }}>
              {formatSpreadUm(offAxisSpread.tcaMm)}
            </div>
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
        different distances along the optical axis. Off-axis TCA reports the color separation that remains at the image
        plane for the displayed off-axis fan. The colored bars show where {CHROMATIC_CHANNEL_METADATA.R.description} (
        {CHROMATIC_CHANNEL_METADATA.R.wavelengthLabel}), {CHROMATIC_CHANNEL_METADATA.G.description} (
        {CHROMATIC_CHANNEL_METADATA.G.wavelengthLabel}), {CHROMATIC_CHANNEL_METADATA.B.description} (
        {CHROMATIC_CHANNEL_METADATA.B.wavelengthLabel}), and, when enabled, {CHROMATIC_CHANNEL_METADATA.V.description} (
        {CHROMATIC_CHANNEL_METADATA.V.wavelengthLabel}) marginal rays cross the axis relative to the reference focus.
        This is a geometric spectral-line trace; it is useful for comparing correction strategy, but it is not a
        full-spectrum diffraction, sensor-stack, or production APO certification.
      </p>
    </div>
  );
}
