import ComaPreviewGrid from "../ComaPreviewGrid.js";
import { formatComaSpan } from "../MeridionalComaPlot.js";
import type { EstimatedComaPreviewResult } from "../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../types/theme.js";
import SectionHeader from "./SectionHeader.js";

interface ComaPreviewSectionProps {
  result: EstimatedComaPreviewResult | null;
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
        title="Coma Preview"
        helpLabel="Coma preview help"
        helpText="This estimated 2D coma appearance uses the real chief-ray-centered tangential spread from the meridional ray trace at the center and at 25%, 50%, and 75% of the current half-field. Each valid meridional slice is expanded across its circular pupil chord to synthesize a normalized sagittal thickness. It is a heuristic point-shape estimate, not a full skew-ray spot diagram."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            Estimated 2D coma appearance at center, 25%, 50%, and 75% of the current half-field. The horizontal spread
            is the real chief-ray-centered tangential image height; the vertical thickness is a normalized
            chord-expanded estimate rather than a true sagittal trace.
          </span>

          {result ? (
            <>
              <ComaPreviewGrid result={result} t={theme} mode="estimated" />
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
                  title="Shared tangential half-range used to normalize all four estimated coma tiles."
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
              Unable to compute an estimated 2D coma appearance for this lens state.
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
