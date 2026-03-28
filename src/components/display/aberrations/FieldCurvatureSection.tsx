import FieldCurvaturePlot from "../FieldCurvaturePlot.js";
import type { FieldCurvatureResult } from "../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../types/theme.js";
import { formatSignedMm, formatSignedUm } from "./format.js";
import SectionHeader from "./SectionHeader.js";

interface FieldCurvatureSectionProps {
  result: FieldCurvatureResult | null;
  expanded: boolean;
  onToggle: () => void;
  theme: Theme;
}

export default function FieldCurvatureSection({ result, expanded, onToggle, theme }: FieldCurvatureSectionProps) {
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
        title="Field Curvature & Astigmatic Difference"
        helpLabel="Field curvature help"
        helpText="Tangential and sagittal off-axis image surfaces do not usually meet the current image plane at the same axial position. This chart shows their best-focus shifts across the current half-field. The line spacing at each field sample is the astigmatic difference, while the centerline reference shows the Petzval mean surface."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            Sagittal and tangential best-focus surfaces across the current half-field. The vertical split at each field
            sample shows the astigmatic difference; both curves are referenced to the current image plane.
          </span>

          {result ? (
            <>
              <FieldCurvaturePlot result={result} t={theme} />
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
                  title="Maximum sagittal minus tangential best-focus separation across the sampled field positions."
                >
                  <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                    MAX ASTIG
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
                    {formatSignedUm(result.maxAstigmaticDifferenceUm)}
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                  title="Representative edge-field curvature shift: tangential and sagittal best-focus positions relative to the current image plane."
                >
                  <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                    EDGE CURVATURE
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
                    T {formatSignedMm(result.edgeTangentialShiftMm)} / S {formatSignedMm(result.edgeSagittalShiftMm)}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div style={{ color: theme.muted, fontSize: 10, lineHeight: 1.5, transition: "color 0.3s" }}>
              Unable to compute a usable field-curvature and astigmatic-difference view for this lens state.
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
