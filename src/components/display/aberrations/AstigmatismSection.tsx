import AstigmatismPlot from "../AstigmatismPlot.js";
import type { FieldCurvatureResult } from "../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../types/theme.js";
import { formatSignedUm } from "./format.js";
import SectionHeader from "./SectionHeader.js";

interface AstigmatismSectionProps {
  result: FieldCurvatureResult | null;
  expanded: boolean;
  onToggle: () => void;
  theme: Theme;
}

function diagnosticSplitMagnitudeUm(field: FieldCurvatureResult["fields"][number]): number {
  return Math.abs(field.diagnosticAstigmaticDifferenceUm ?? field.astigmaticDifferenceUm);
}

function standardizedSplitMagnitudeUm(field: FieldCurvatureResult["fields"][number]): number {
  return Math.abs(field.astigmaticDifferenceUm);
}

function focusShiftWithinImageCircle(
  field: FieldCurvatureResult["fields"][number],
  imageCircleRadiusMm: number,
  mode: "standardized" | "diagnostic",
): boolean {
  const tangentialShiftMm =
    mode === "diagnostic" ? (field.diagnosticTangentialShiftMm ?? field.tangentialShiftMm) : field.tangentialShiftMm;
  const sagittalShiftMm =
    mode === "diagnostic" ? (field.diagnosticSagittalShiftMm ?? field.sagittalShiftMm) : field.sagittalShiftMm;
  return Math.max(Math.abs(tangentialShiftMm), Math.abs(sagittalShiftMm)) <= imageCircleRadiusMm + 1e-9;
}

export default function AstigmatismSection({ result, expanded, onToggle, theme }: AstigmatismSectionProps) {
  const usableFields = result?.fields.filter((field) => field.usable) ?? [];
  const imageCircleRadiusMm = Math.max(...usableFields.map((field) => Math.abs(field.chiefImageHeight)), 0);
  const standardizedFields = usableFields.filter((field) =>
    focusShiftWithinImageCircle(field, imageCircleRadiusMm, "standardized"),
  );
  const diagnosticFields = usableFields.filter((field) =>
    focusShiftWithinImageCircle(field, imageCircleRadiusMm, "diagnostic"),
  );
  const standardizedMaxSplitUm =
    standardizedFields.length > 0 ? Math.max(...standardizedFields.map(standardizedSplitMagnitudeUm)) : 0;
  const diagnosticMaxSplitUm =
    diagnosticFields.length > 0 ? Math.max(...diagnosticFields.map(diagnosticSplitMagnitudeUm)) : 0;
  const showDiagnosticMetric =
    standardizedFields.length > 0 && Math.abs(diagnosticMaxSplitUm - standardizedMaxSplitUm) > 0.5;
  const outerField = standardizedFields[standardizedFields.length - 1] ?? null;
  const outerStandardSplitUm = outerField ? standardizedSplitMagnitudeUm(outerField) : null;
  const outerDiagnosticSplitUm =
    outerField && focusShiftWithinImageCircle(outerField, imageCircleRadiusMm, "diagnostic")
      ? diagnosticSplitMagnitudeUm(outerField)
      : null;
  const edgeSplitLabel =
    outerStandardSplitUm !== null &&
    outerDiagnosticSplitUm !== null &&
    Math.abs(outerDiagnosticSplitUm - outerStandardSplitUm) > 0.5
      ? `Std ${formatSignedUm(outerStandardSplitUm)} / Real ${formatSignedUm(outerDiagnosticSplitUm)}`
      : outerStandardSplitUm !== null
        ? formatSignedUm(outerStandardSplitUm)
        : "0 µm";
  const hasAstigmatismPlots = standardizedFields.length >= 2 || diagnosticFields.length >= 2;

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
        title="Astigmatism"
        helpLabel="Astigmatism help"
        helpText="This section isolates tangential-versus-sagittal focus separation so astigmatic split can use its own scale. Only in-circle focus positions are shown here. The upper chart shows the standardized chief-ray-relative parabasal split. The lower chart shows the dense real-ray split from the traced tangential and sagittal bundle solves."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            Field curvature and astigmatism are now separated. These charts plot only the tangential-sagittal best-focus
            difference, which keeps the split behavior readable even when the field curves swing far from the current
            image plane. Any split whose focus positions fall outside the current image-circle envelope is omitted here.
          </span>

          {result && hasAstigmatismPlots ? (
            <>
              <AstigmatismPlot result={result} t={theme} mode="standardized" />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Standardized chief-ray-relative parabasal tangential-sagittal split. Larger values indicate stronger
                astigmatic separation between the two focal surfaces.
              </span>
              <AstigmatismPlot result={result} t={theme} mode="diagnostic" />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Dense real-ray tangential-sagittal split from the traced best-focus solves. Use this to see how the real
                bundle behavior departs from the standardized astigmatism view.
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
                    {standardizedFields.length}/{result.fields.length}
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                  title="Maximum standardized tangential-sagittal split across the in-circle sampled field positions."
                >
                  <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                    STD MAX SPLIT
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
                    {formatSignedUm(standardizedMaxSplitUm)}
                  </span>
                </div>
                {showDiagnosticMetric ? (
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                    title="Maximum dense real-ray tangential-sagittal split across the in-circle sampled field positions."
                  >
                    <span
                      style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}
                    >
                      REAL MAX SPLIT
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
                      {formatSignedUm(diagnosticMaxSplitUm)}
                    </span>
                  </div>
                ) : null}
                <div
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                  title="Outermost in-circle tangential-sagittal split shown in the charts. When the real-ray solve differs materially, both standardized and real values are shown."
                >
                  <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                    OUTER SPLIT
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
                    {edgeSplitLabel}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div style={{ color: theme.muted, fontSize: 10, lineHeight: 1.5, transition: "color 0.3s" }}>
              Unable to compute usable in-circle astigmatism diagnostics for this lens state.
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
