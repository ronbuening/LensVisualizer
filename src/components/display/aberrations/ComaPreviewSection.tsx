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

export default function ComaPreviewSection({ result, expanded, onToggle, theme }: ComaPreviewSectionProps) {
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
        title="Spot Diagram"
        helpLabel="Spot diagram help"
        helpText="This spot diagram traces a circular pupil pattern at the center and at 25%, 50%, and 75% of the current half-field. Each ray is projected to the image plane and plotted as chief-ray-centered tangential and sagittal image height in millimeters. The dashed circle shows the diffraction-limited Airy disk for scale reference."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            Spot diagram at center, 25%, 50%, and 75% of the current half-field. Both axes show chief-ray-centered
            image height in millimeters. Dashed circle = Airy disk (diffraction limit).
          </span>

          {result ? (
            <>
              <ComaPreviewGrid result={result} t={theme} mode="pointCloud" />
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
                  title="Shared tangential half-range used to normalize all four real coma tiles."
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
                    ±{formatComaSpan(result.sharedTangentialHalfRangeMm * 1000)}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div style={{ color: theme.muted, fontSize: 10, lineHeight: 1.5, transition: "color 0.3s" }}>
              Unable to compute spot diagrams for this lens state.
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
