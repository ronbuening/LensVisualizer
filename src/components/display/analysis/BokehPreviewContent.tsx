import type { BokehPreviewPair } from "../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../types/theme.js";
import BokehPreviewGrid from "./BokehPreviewGrid.js";

interface BokehPreviewContentProps {
  pair: BokehPreviewPair;
  t: Theme;
  title?: string;
}

export default function BokehPreviewContent({ pair, t, title = "Bokeh Preview (Beta)" }: BokehPreviewContentProps) {
  const hasInfinity = pair.infinity !== null;
  const hasNearFocus = pair.nearFocus !== null;

  return (
    <>
      <h3 style={{ fontSize: 14, margin: "0 0 4px", color: t.label, fontFamily: "inherit" }}>{title}</h3>
      <p style={{ fontSize: 10, color: t.muted, margin: "0 0 12px", lineHeight: 1.5, fontFamily: "inherit" }}>
        Circularized blur disks show spherical-aberration brightness character at 0%, 25%, 50%, and 75% field height.
        The small inset in each tile shows the surviving pupil footprint, separating mechanical vignetting from the main
        SA readout. Brighter rims indicate edge-bright blur; brighter centers indicate center-bright blur.
      </p>

      {!hasInfinity && !hasNearFocus ? (
        <p style={{ fontSize: 11, color: t.muted, textAlign: "center", padding: 20, fontFamily: "inherit" }}>
          Insufficient focus range to compute bokeh preview for this lens.
        </p>
      ) : null}

      {hasInfinity ? (
        <div style={{ marginBottom: 16 }}>
          <h4 style={{ fontSize: 11, margin: "0 0 6px", color: t.label, fontFamily: "inherit" }}>INFINITY SOURCE</h4>
          <p style={{ fontSize: 9, color: t.muted, margin: "0 0 4px", fontFamily: "inherit" }}>
            Point source at infinity, intercepted at the current focus plane
          </p>
          <BokehPreviewGrid result={pair.infinity!} t={t} />
        </div>
      ) : null}

      {hasNearFocus ? (
        <div>
          <h4 style={{ fontSize: 11, margin: "0 0 6px", color: t.label, fontFamily: "inherit" }}>NEAR FOCUS SOURCE</h4>
          <p style={{ fontSize: 9, color: t.muted, margin: "0 0 4px", fontFamily: "inherit" }}>
            Point source at minimum focus distance, intercepted at the current focus plane
          </p>
          <BokehPreviewGrid result={pair.nearFocus!} t={t} />
        </div>
      ) : null}
    </>
  );
}
