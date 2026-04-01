import type { BokehPreviewResult } from "../../optics/aberrationAnalysis.js";
import type { Theme } from "../../types/theme.js";
import BokehPreviewGrid, { BokehPreviewLegend } from "./BokehPreviewGrid.js";
import { formatComaSpan } from "./MeridionalComaPlot.js";

interface BokehPreviewOverlayContentProps {
  result: BokehPreviewResult | null;
  t: Theme;
}

export default function BokehPreviewOverlayContent({ result, t }: BokehPreviewOverlayContentProps) {
  const representativeSilhouette = result?.conjugates
    .flatMap((conjugate) => conjugate.fields)
    .find((field) => field.usable)?.apertureSilhouette ?? { kind: "circular" as const };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "8px 20px 20px", gap: 14 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 700,
              color: t.value,
              fontFamily: "inherit",
              letterSpacing: "0.02em",
            }}
          >
            Bokeh Preview (Beta)
          </h2>
          {result ? (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 8,
                color: t.muted,
                fontSize: 10,
                letterSpacing: "0.08em",
              }}
            >
              <span>SHARED SPOT SCALE</span>
              <strong style={{ color: t.value, fontSize: 13, fontWeight: 700 }}>
                ±{formatComaSpan(result.sharedSpotHalfRangeMm * 1000)}
              </strong>
            </div>
          ) : null}
        </div>
        <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.55, color: t.value, fontFamily: "inherit" }}>
          Two chief-ray-centered real-ray spot grids traced through the active lens state. Density darkening comes from
          accumulated weighted ray hits, so spherical-aberration structure and cat&apos;s-eye clipping appear directly
          from the traced samples. The focus slider still updates the lens state for both grids; the minimum-focus grid
          keeps the object conjugate pinned to the lens close-focus distance.
        </p>
      </div>

      {result ? (
        <>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "center",
              minHeight: 0,
            }}
          >
            {result.conjugates.map((conjugate) => (
              <div
                key={conjugate.objectConjugate}
                style={{
                  flex: "1 1 320px",
                  minWidth: 0,
                  maxWidth: 360,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", fontFamily: "inherit" }}>
                    {conjugate.label.toUpperCase()}
                  </span>
                  <span style={{ fontSize: 8.5, color: t.muted, fontFamily: "inherit" }}>
                    {conjugate.usableFieldCount}/{conjugate.fields.length} usable fields
                  </span>
                </div>
                <BokehPreviewGrid result={conjugate} sharedSpotHalfRangeMm={result.sharedSpotHalfRangeMm} t={t} />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", fontFamily: "inherit" }}>LEGEND</span>
            <BokehPreviewLegend silhouette={representativeSilhouette} t={t} />
          </div>
        </>
      ) : (
        <div style={{ color: t.muted, fontSize: 11, lineHeight: 1.5, fontFamily: "inherit" }}>
          Unable to compute a usable bokeh preview for this lens state.
        </div>
      )}
    </div>
  );
}
