import ComaPreviewGrid from "../ComaPreviewGrid.js";
import { formatComaSpan } from "../MeridionalComaPlot.js";
import type { ComaPointCloudPreviewResult } from "../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../types/theme.js";
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
        title="Spot Diagram (Real-Ray)"
        helpLabel="Spot diagram help"
        helpText="This spot-diagram section now works in two panes. The left pane traces a denser fixed circular pupil pattern at the center and at 25%, 50%, and 75% of the current half-field on a shared square spot scale, then overlays centroid and RMS spot-radius cues. The right pane converts the same measured footprint extents into an idealized textbook-style coma sketch so users can compare the traced spot against the standard schematic view. The summary row also reports the outer-field tail bias and sagittal-to-tangential span ratio derived directly from the traced point cloud."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            Left: a higher-resolution chief-ray-referenced real-ray spot grid with equal tangential / sagittal scale,
            centroid, and RMS radius cues. Right: an idealized textbook-style coma sketch normalized to that same
            measured scale so the traced footprint can be compared against the standard schematic shape.
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
                    Traced real-ray spot diagram
                  </span>
                  <ComaPreviewGrid result={result} t={theme} mode="pointCloud" pointCloudStyle="traced" />
                </div>
                <div style={{ flex: "1 1 320px", minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                    Idealized coma comparison
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
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                    FIELDS
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: theme.value,
                      fontVariantNumeric: "tabular-nums",
                      transition: "color 0.3s",
                    }}
                  >
                    {result.usableFieldCount}/{result.fields.length}
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                  title="Shared square spot half-range used to normalize all four traced and idealized coma tiles."
                >
                  <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                    RANGE
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: theme.value,
                      fontVariantNumeric: "tabular-nums",
                      transition: "color 0.3s",
                    }}
                  >
                    ±{formatComaSpan(result.sharedSpotHalfRangeMm * 1000)}
                  </span>
                </div>
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
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                    title="Outermost usable field sagittal-to-tangential span ratio from the traced point cloud. Smaller values indicate a more elongated coma footprint."
                  >
                    <span
                      style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}
                    >
                      OUTER S/T
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: theme.value,
                        fontVariantNumeric: "tabular-nums",
                        transition: "color 0.3s",
                      }}
                    >
                      {outerField.sagittalToTangentialRatio.toFixed(2)}
                    </span>
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
