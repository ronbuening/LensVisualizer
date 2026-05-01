/**
 * LCAOverlayContent — Enlarged longitudinal chromatic aberration visualization.
 *
 * Renders a standalone SVG with the LCAInsetWidget at a larger size, plus a
 * short description explaining what LCA represents. Used inside PanelOverlay.
 */

import type { ChromaticSpread, ChromaticSpreadByAxis } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { DispersionQuality } from "../../optics/dispersion.js";
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
const DUAL_SVG_W = 220;
const DUAL_SVG_H = 220;
const MARGIN = 12;

export default function LCAOverlayContent({
  chromSpread,
  chromaticSpreads,
  effectiveSC,
  IMG_MM,
  t,
  dispersionQuality,
}: LCAOverlayContentProps) {
  const spreads = [
    { label: "ON-AXIS", spread: chromaticSpreads?.onAxis ?? null },
    { label: "OFF-AXIS", spread: chromaticSpreads?.offAxis ?? null },
  ].filter((item): item is { label: string; spread: ChromaticSpread } => item.spread !== null);
  const visibleSpreads = spreads.length > 0 ? spreads : [{ label: "ON-AXIS", spread: chromSpread }];
  const dual = visibleSpreads.length > 1;
  const svgW = dual ? DUAL_SVG_W : SINGLE_SVG_W;
  const svgH = dual ? DUAL_SVG_H : SINGLE_SVG_H;

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
        }}
      >
        {visibleSpreads.map(({ label, spread }) => (
          <div key={label} style={{ flex: dual ? "1 1 0" : "0 1 auto", maxWidth: svgW, minWidth: 0 }}>
            {dual && (
              <div
                style={{
                  textAlign: "center",
                  color: t.muted,
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  marginBottom: 4,
                  fontFamily: "inherit",
                }}
              >
                {label}
              </div>
            )}
            <svg
              viewBox={`0 0 ${svgW} ${svgH}`}
              style={{ width: "100%", maxWidth: svgW, maxHeight: "100%", display: "block" }}
            >
              <LCAInsetWidget
                chromSpread={spread}
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
                fontScale={dual ? 2.0 : 2.8}
                dispersionQuality={dispersionQuality}
              />
            </svg>
          </div>
        ))}
      </div>
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
        different distances along the optical axis. The colored bars show where red (C-line, 656 nm), green (d-line, 588
        nm), blue (F-line, 486 nm), and — when enabled — violet (g-line, 436 nm) marginal rays cross the axis relative
        to the reference focus. Apochromatic designs aim to bring three wavelengths to a common focus; the violet bar
        reveals the residual <em>secondary spectrum</em> that distinguishes a true APO from an achromat.
      </p>
    </div>
  );
}
