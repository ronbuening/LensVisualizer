import { AberrationValueDisplay } from "../analysisUi.js";
import ChromaticFieldCurvaturePlot from "../ChromaticFieldCurvaturePlot.js";
import FieldCurvaturePlot from "../FieldCurvaturePlot.js";
import StandardFieldCurvaturePlot from "../StandardFieldCurvaturePlot.js";
import type { FieldCurvatureResult } from "../../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../../types/theme.js";
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
                Parabasal tangential and sagittal field curves with Petzval reference. Negative values are fore (toward
                lens); positive values are aft (toward sensor).
              </span>
              <FieldCurvaturePlot result={result} t={theme} />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Real-ray tangential and sagittal field curves from dense bundle solves.
              </span>
              {result.chromaticFocusSpreadMm !== null ? (
                <>
                  <ChromaticFieldCurvaturePlot result={result} t={theme} />
                  <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                    Per-wavelength best-focus curves. Each color shows tangential (solid) and sagittal (dashed) focus
                    shift. Wider R/B separation indicates stronger chromatic focus variation across the field.
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
                <AberrationValueDisplay
                  label="FIELDS"
                  value={`${result.usableFieldCount}/${result.fields.length}`}
                  t={theme}
                />
                <div title="Edge-field parabasal tangential and sagittal shifts relative to the image plane.">
                  <AberrationValueDisplay
                    label="EDGE T / S"
                    value={
                      <>
                        T {formatSignedMm(result.edgeTangentialShiftMm)} / S{" "}
                        {formatSignedMm(result.edgeSagittalShiftMm)}
                      </>
                    }
                    t={theme}
                  />
                </div>
                {result.chromaticFocusSpreadMm !== null ? (
                  <div title="Maximum chromatic focus spread: largest R-to-B tangential or sagittal best-focus separation across all sampled fields.">
                    <AberrationValueDisplay
                      label="CHROM SPREAD"
                      value={formatSignedMm(result.chromaticFocusSpreadMm)}
                      t={theme}
                    />
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
