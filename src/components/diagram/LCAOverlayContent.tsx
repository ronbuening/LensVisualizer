/**
 * LCAOverlayContent — Enlarged longitudinal chromatic aberration visualization.
 *
 * Renders a standalone SVG with the LCAInsetWidget at a larger size, plus a
 * short description explaining what LCA represents. Used inside PanelOverlay.
 */

import type { ChromaticSpread } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import LCAInsetWidget from "./LCAInsetWidget.js";

interface LCAOverlayContentProps {
  chromSpread: ChromaticSpread;
  effectiveSC: number;
  IMG_MM: number;
  t: Theme;
}

const SVG_W = 340;
const SVG_H = 280;
const MARGIN = 12;

export default function LCAOverlayContent({ chromSpread, effectiveSC, IMG_MM, t }: LCAOverlayContentProps) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "8px 20px 20px" }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0 }}>
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          style={{ width: "100%", maxWidth: SVG_W, maxHeight: "100%", display: "block" }}
        >
          <LCAInsetWidget
            chromSpread={chromSpread}
            effectiveSC={effectiveSC}
            IMG_MM={IMG_MM}
            IX={0}
            svgW={SVG_W}
            sy={() => SVG_H / 2}
            t={t}
            width={SVG_W - MARGIN * 2}
            height={SVG_H - MARGIN * 2}
            originX={MARGIN}
            originY={MARGIN}
            fontScale={2.8}
          />
        </svg>
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
        different distances along the optical axis. The colored bars show where red (C-line, 656 nm), green (d-line,
        588 nm), and blue (F-line, 486 nm) marginal rays cross the axis relative to the reference focus. Wider
        separation indicates greater chromatic defocus.
      </p>
    </div>
  );
}
