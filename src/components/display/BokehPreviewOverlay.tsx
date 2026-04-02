/**
 * BokehPreviewOverlay — Panel overlay showing bokeh ball density heatmaps
 * at four field positions for both infinity and near-focus source distances.
 *
 * The overlay responds in real time to the focus and aperture sliders.
 * At the lens's current focus setting, the infinity grid shows how far
 * objects at infinity are defocused and the near-focus grid shows the same
 * for objects at the minimum focus distance.
 */

import { useMemo } from "react";
import { computeBokehPreviewPair } from "../../optics/aberrationAnalysis.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import BokehPreviewGrid from "./BokehPreviewGrid.js";

interface BokehPreviewOverlayProps {
  L: RuntimeLens;
  focusT: number;
  zoomT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  t: Theme;
}

export default function BokehPreviewOverlay({
  L,
  focusT,
  zoomT,
  currentEPSD,
  currentPhysStopSD,
  t,
}: BokehPreviewOverlayProps) {
  const pair = useMemo(
    () => computeBokehPreviewPair(L, focusT, zoomT, currentEPSD, currentPhysStopSD),
    [L, focusT, zoomT, currentEPSD, currentPhysStopSD],
  );

  const hasInfinity = pair.infinity !== null;
  const hasNearFocus = pair.nearFocus !== null;

  return (
    <div style={{ padding: "8px 16px 16px", overflow: "auto" }}>
      <h3 style={{ fontSize: 14, margin: "0 0 4px", color: t.label, fontFamily: "inherit" }}>
        Bokeh Preview (Beta)
      </h3>
      <p style={{ fontSize: 10, color: t.muted, margin: "0 0 12px", lineHeight: 1.5, fontFamily: "inherit" }}>
        Density heatmaps of defocused point sources at 0%, 25%, 50%, and 75% field height. Brighter regions indicate
        higher ray density. Cat&apos;s eye shapes emerge off-axis from mechanical vignetting. Brightness variation across
        the disk reflects spherical aberration.
      </p>

      {!hasInfinity && !hasNearFocus ? (
        <p style={{ fontSize: 11, color: t.muted, textAlign: "center", padding: 20, fontFamily: "inherit" }}>
          Insufficient focus range to compute bokeh preview for this lens.
        </p>
      ) : null}

      {hasInfinity ? (
        <div style={{ marginBottom: 16 }}>
          <h4 style={{ fontSize: 11, margin: "0 0 6px", color: t.label, fontFamily: "inherit", letterSpacing: "0.06em" }}>
            INFINITY SOURCE
          </h4>
          <p style={{ fontSize: 9, color: t.muted, margin: "0 0 4px", fontFamily: "inherit" }}>
            Point source at infinity, image intercepted at current focus plane
          </p>
          <BokehPreviewGrid result={pair.infinity!} t={t} />
        </div>
      ) : null}

      {hasNearFocus ? (
        <div>
          <h4 style={{ fontSize: 11, margin: "0 0 6px", color: t.label, fontFamily: "inherit", letterSpacing: "0.06em" }}>
            NEAR FOCUS SOURCE
          </h4>
          <p style={{ fontSize: 9, color: t.muted, margin: "0 0 4px", fontFamily: "inherit" }}>
            Point source at minimum focus distance, image intercepted at current focus plane
          </p>
          <BokehPreviewGrid result={pair.nearFocus!} t={t} />
        </div>
      ) : null}
    </div>
  );
}
