import ChromaticFieldCurvaturePlot from "../ChromaticFieldCurvaturePlot.js";
import FieldCurvaturePlot from "../FieldCurvaturePlot.js";
import StandardFieldCurvaturePlot from "../StandardFieldCurvaturePlot.js";
import type { FieldCurvatureResult } from "../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../types/theme.js";
import { formatSignedMm } from "./format.js";
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
        title="Field Curves"
        helpLabel="Field curves help"
        helpText="Use this section to compare the standardized tangential and sagittal field curves against the dense real-ray field-curve diagnostic. These charts now use their own field-curve scale so large focus shifts remain on-chart, while astigmatic split is isolated in the section below."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            This section now keeps field curvature on its own scale. The first chart shows standardized chief-ray-
            relative parabasal tangential and sagittal field curves relative to the current image plane, with the
            Petzval reference overlaid. The second chart keeps the denser real-ray tangential and sagittal best-focus
            diagnostic on the same kind of field-curve axis so large focus shifts remain visible.
          </span>

          {result ? (
            <>
              <StandardFieldCurvaturePlot result={result} t={theme} />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Standardized parabasal tangential and sagittal field curves with the Petzval reference. Negative values
                are fore of the current image plane; positive values are aft.
              </span>
              <FieldCurvaturePlot result={result} t={theme} />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Dense real-ray tangential and sagittal best-focus diagnostic on its own field-curve scale.
              </span>
              {result.chromaticFocusSpreadMm !== null ? (
                <>
                  <ChromaticFieldCurvaturePlot result={result} t={theme} />
                  <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                    Per-wavelength standardized field curves. Each color shows its own tangential (solid) and sagittal
                    (dashed) shift across the field. Wider R/B separation indicates stronger chromatic field curvature.
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
                  title="Representative edge-field standardized tangential and sagittal field-curve positions relative to the current image plane."
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
