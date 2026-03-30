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
        helpText="Parabasal and real-ray tangential/sagittal field curves with Petzval reference. Astigmatic split is in the section below."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            The first chart shows parabasal tangential and sagittal field curves with the Petzval reference. The second
            chart shows the real-ray field curves from dense bundle solves.
          </span>

          {result ? (
            <>
              <StandardFieldCurvaturePlot result={result} t={theme} />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Parabasal tangential and sagittal field curves with Petzval reference. Negative values are fore
                (toward lens); positive values are aft (toward sensor).
              </span>
              <FieldCurvaturePlot result={result} t={theme} />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Real-ray tangential and sagittal field curves from dense bundle solves.
              </span>
              {result.chromaticFocusSpreadMm !== null ? (
                <>
                  <ChromaticFieldCurvaturePlot result={result} t={theme} />
                  <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                    Per-wavelength field curves. Each color shows tangential (solid) and sagittal (dashed) shift. Wider
                    R/B separation indicates stronger chromatic field curvature.
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
                  title="Edge-field parabasal tangential and sagittal shifts relative to the image plane."
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
                    title="Maximum chromatic focus spread: largest R-to-B tangential or sagittal best-focus separation across all sampled fields."
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
