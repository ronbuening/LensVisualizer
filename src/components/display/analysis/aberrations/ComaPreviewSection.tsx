import { AberrationValueDisplay } from "../analysisUi.js";
import ComaPreviewGrid from "../ComaPreviewGrid.js";
import type { ComaPointCloudPreviewResult } from "../../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../../types/theme.js";
import { formatComaSpanUm } from "./format.js";
import SectionHeader from "./SectionHeader.js";

interface ComaPreviewSectionProps {
  result: ComaPointCloudPreviewResult | null;
  expanded: boolean;
  onToggle: () => void;
  theme: Theme;
}

function formatTailDirection(direction: ComaPointCloudPreviewResult["fields"][number]["tailDirection"]): string {
  switch (direction) {
    case "toward-edge":
      return "toward edge";
    case "toward-center":
      return "toward center";
    default:
      return "balanced";
  }
}

export default function ComaPreviewSection({ result, expanded, onToggle, theme }: ComaPreviewSectionProps) {
  const outerField =
    result?.fields
      .filter((field) => field.usable && field.fieldFraction > 0)
      .sort((left, right) => right.fieldFraction - left.fieldFraction)[0] ?? null;

  return (
    <div
      style={{
        borderTop: `1px solid ${theme.panelBorder}`,
        paddingTop: 14,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <SectionHeader
        title="Chief-Ray Spot Footprints"
        helpLabel="Spot footprint help"
        helpText="The traced pane samples a fixed circular pupil pattern at representative fields and plots each image-plane hit relative to the chief ray. These real-ray footprints include coma plus defocus, astigmatism, clipping, and higher-order aberrations. The schematic pane is not another trace; it converts the measured footprint extents into a textbook-style coma sketch for visual comparison."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            Left: chief-ray-referenced real-ray spot footprints with equal tangential / sagittal scale, centroid, and
            RMS radius cues. Right: a schematic coma comparison normalized to that same measured scale.
          </span>

          {result ? (
            <>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "1 1 320px", minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                    Traced real-ray spot footprints
                  </span>
                  <ComaPreviewGrid result={result} t={theme} mode="pointCloud" pointCloudStyle="traced" />
                </div>
                <div style={{ flex: "1 1 320px", minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                    Schematic coma comparison
                  </span>
                  <ComaPreviewGrid result={result} t={theme} mode="pointCloud" pointCloudStyle="idealized" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  fontSize: 9.5,
                }}
              >
                <AberrationValueDisplay
                  label="FIELDS"
                  value={`${result.usableFieldCount}/${result.fields.length}`}
                  t={theme}
                />
                <div title="Shared square spot half-range used to normalize all representative traced and schematic tiles.">
                  <AberrationValueDisplay
                    label="RANGE"
                    value={`±${formatComaSpanUm(result.sharedSpotHalfRangeMm * 1000)}`}
                    t={theme}
                  />
                </div>
                {outerField ? (
                  <div title="Outermost usable field weighted RMS radius around the traced spot centroid.">
                    <AberrationValueDisplay
                      label="OUTER RMS"
                      value={formatComaSpanUm(outerField.rmsRadiusUm)}
                      t={theme}
                    />
                  </div>
                ) : null}
                {outerField ? (
                  <div title="Outermost usable field tangential span from the chief-ray-referenced point cloud.">
                    <AberrationValueDisplay
                      label="T SPAN"
                      value={formatComaSpanUm(outerField.tangentialSpanUm)}
                      t={theme}
                    />
                  </div>
                ) : null}
                {outerField ? (
                  <div title="Outermost usable field sagittal span from the chief-ray-referenced point cloud.">
                    <AberrationValueDisplay
                      label="S SPAN"
                      value={formatComaSpanUm(outerField.sagittalSpanUm)}
                      t={theme}
                    />
                  </div>
                ) : null}
                {outerField ? (
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                    title="Outermost usable field tail bias derived from the traced point cloud by comparing the dominant tangential extent on either side of the centroid."
                  >
                    <span
                      style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}
                    >
                      OUTER TAIL
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: theme.value,
                        transition: "color 0.3s",
                      }}
                    >
                      {`${formatTailDirection(outerField.tailDirection)} ${outerField.tailSkewRatio.toFixed(2)}×`}
                    </span>
                  </div>
                ) : null}
                {outerField ? (
                  <div title="Outermost usable field sagittal-to-tangential span ratio from the traced point cloud. Smaller values indicate a more elongated coma footprint.">
                    <AberrationValueDisplay
                      label="OUTER S/T"
                      value={outerField.sagittalToTangentialRatio.toFixed(2)}
                      t={theme}
                    />
                  </div>
                ) : null}
              </div>
            </>
          ) : (
            <div style={{ color: theme.muted, fontSize: 10, lineHeight: 1.5, transition: "color 0.3s" }}>
              Unable to compute a usable real-ray spot diagram for this lens state.
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
