import ChromaticFieldCurvaturePlot from "../ChromaticFieldCurvaturePlot.js";
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
        title="Field Curves & Astigmatism"
        helpLabel="Field curvature help"
        helpText="Use this section in two passes. First, the upper chart shows the Petzval reference surface relative to the current image plane from center to edge. Second, the lower chart overlays the real-ray tangential and sagittal best-focus diagnostics and compares them against that Petzval reference so you can separate simple field bend from astigmatism."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            The first chart is a Petzval reference trace: how the Petzval surface moves fore or aft of the current image
            plane from center to edge. The second chart overlays the real-ray tangential and sagittal best-focus
            diagnostics so you can see how much of the off-axis behavior is simple field bend versus astigmatism.
          </span>

          {result ? (
            <>
              <FieldCurvatureMeanPlot result={result} t={theme} />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Petzval reference only. Negative values are fore of the current image plane; positive values are aft.
              </span>
              <FieldCurvaturePlot result={result} t={theme} />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Real-ray tangential and sagittal best-focus diagnostic. The gap between the two traces is the astigmatic
                split.
              </span>
              {result.chromaticFocusSpreadMm !== null ? (
                <>
                  <ChromaticFieldCurvaturePlot result={result} t={theme} />
                  <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                    Per-wavelength focus shift. Each color shows its own tangential (solid) and sagittal (dashed) best
                    focus across the field. Wider R/B separation indicates stronger chromatic field curvature.
                  </span>
                </>
              ) : null}
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
                {result.chromaticFocusSpreadMm !== null ? (
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                    title="Maximum chromatic focus spread: the largest R-to-B tangential or sagittal best-focus separation across all sampled field positions."
                  >
                    <span
                      style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}
                    >
                      CHROM SPREAD
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
                      {formatSignedMm(result.chromaticFocusSpreadMm)}
                    </span>
                  </div>
                ) : null}
              </div>
            </>
          ) : (
            <div style={{ color: theme.muted, fontSize: 10, lineHeight: 1.5, transition: "color 0.3s" }}>
              Unable to compute usable field-curve diagnostics for this lens state.
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
