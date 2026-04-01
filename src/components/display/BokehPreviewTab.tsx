/**
 * BokehPreviewTab — Analysis drawer tab content for bokeh preview (beta).
 *
 * Renders two 2×2 bokeh-ball grids (one for an infinity point source, one for
 * a near point source at the lens minimum focus distance) at the current focus
 * and aperture settings.
 */

import { useMemo } from "react";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import BokehPreviewSection from "./aberrations/BokehPreviewSection.js";
import { computeBokehPreview } from "../../optics/aberrationAnalysis.js";

interface BokehPreviewTabProps {
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  focusT: number;
  zoomT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
}

export default function BokehPreviewTab({
  L,
  t,
  zPos,
  focusT,
  zoomT,
  currentEPSD,
  currentPhysStopSD,
}: BokehPreviewTabProps) {
  const bokehResult = useMemo(
    () => computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD],
  );

  return (
    <div style={{ padding: "8px 0" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "flex-start",
          fontSize: 9.5,
        }}
      >
        <div style={{ flex: "1 1 260px", minWidth: 0 }}>
          <BokehPreviewSection
            grid={bokehResult.infinityGrid}
            title="Infinity Source"
            helpText="Shows how an infinitely-distant point source appears at the current sensor position. At infinity focus (focusT=0) the ball is small (in focus); as the lens focuses closer, the infinity source defocuses and the ball grows."
            focusLabel="Infinity"
            theme={t}
          />
        </div>
        <div style={{ flex: "1 1 260px", minWidth: 0 }}>
          <BokehPreviewSection
            grid={bokehResult.nearGrid}
            title="Near Source (Minimum Focus)"
            helpText="Shows how a near point source at the lens minimum focus distance appears at the current sensor position. At near focus (focusT=1) the ball is small (in focus); as the lens focuses toward infinity, the near source defocuses and the ball grows. Off-axis fields show the cat's-eye vignetting shape from mechanical apertures."
            focusLabel="Near"
            theme={t}
          />
        </div>
      </div>
    </div>
  );
}
