import FieldCurvatureMeanPlot from "../FieldCurvatureMeanPlot.js";
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
        helpText="Use this chart in three passes. First, the field-curvature-only chart shows the mean field surface moving fore or aft of the focused plane from center to edge. Second, the combined chart compares the tangential solid-circle trace against the estimated sagittal dashed-square trace; the shaded gap is the astigmatic difference. Third, compare both against the Petzval mean line to see whether the off-axis error is mostly simple field bend or a stronger tangential-versus-sagittal split."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            The first chart strips the problem down to field curvature only: how far the mean field surface moves fore
            or aft of the focused plane as you go from center to edge. The second chart adds the tangential/sagittal
            split so you can see how much of the off-axis behavior is true field bend versus astigmatism.
          </span>

          {result ? (
            <>
              <FieldCurvatureMeanPlot result={result} t={theme} />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Field curvature only. Negative values are fore of the focused plane; positive values are aft.
              </span>
              <FieldCurvaturePlot result={result} t={theme} />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Tangential versus estimated sagittal diagnostic. The gap between the two traces is the astigmatic split.
              </span>
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
                    MAX T-S SPLIT
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
                    EDGE T / S
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
