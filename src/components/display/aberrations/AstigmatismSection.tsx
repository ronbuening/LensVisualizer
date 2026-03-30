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

function realRaySplitMagnitudeUm(field: FieldCurvatureResult["fields"][number]): number {
  return Math.abs(field.diagnosticAstigmaticDifferenceUm ?? field.astigmaticDifferenceUm);
}

function parabasalSplitMagnitudeUm(field: FieldCurvatureResult["fields"][number]): number {
  return Math.abs(field.astigmaticDifferenceUm);
}

function fieldWithinImageCircle(field: FieldCurvatureResult["fields"][number], imageCircleRadiusMm: number): boolean {
  return Math.abs(field.chiefImageHeight) <= imageCircleRadiusMm + 1e-9;
}

export default function AstigmatismSection({ result, expanded, onToggle, theme }: AstigmatismSectionProps) {
  const usableFields = result?.fields.filter((field) => field.usable) ?? [];
  const imageCircleRadiusMm = Math.max(...usableFields.map((field) => Math.abs(field.chiefImageHeight)), 0);
  const inCircleFields = usableFields.filter((field) => fieldWithinImageCircle(field, imageCircleRadiusMm));
  const parabasalMaxSplitUm =
    inCircleFields.length > 0 ? Math.max(...inCircleFields.map(parabasalSplitMagnitudeUm)) : 0;
  const realRayMaxSplitUm = inCircleFields.length > 0 ? Math.max(...inCircleFields.map(realRaySplitMagnitudeUm)) : 0;
  const showRealRayMetric = inCircleFields.length > 0 && Math.abs(realRayMaxSplitUm - parabasalMaxSplitUm) > 0.5;
  const outerField = inCircleFields[inCircleFields.length - 1] ?? null;
  const outerParabasalSplitUm = outerField ? parabasalSplitMagnitudeUm(outerField) : null;
  const outerRealRaySplitUm =
    outerField && fieldWithinImageCircle(outerField, imageCircleRadiusMm) ? realRaySplitMagnitudeUm(outerField) : null;
  const edgeSplitLabel =
    outerParabasalSplitUm !== null &&
    outerRealRaySplitUm !== null &&
    Math.abs(outerRealRaySplitUm - outerParabasalSplitUm) > 0.5
      ? `Para ${formatSignedUm(outerParabasalSplitUm)} / Real ${formatSignedUm(outerRealRaySplitUm)}`
      : outerParabasalSplitUm !== null
        ? formatSignedUm(outerParabasalSplitUm)
        : "0 µm";
  const hasAstigmatismPlots = inCircleFields.length >= 2;

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
        helpText="Tangential-sagittal focus separation on its own scale. The upper chart uses parabasal rays; the lower chart uses dense real-ray bundle solves."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            These charts plot the tangential-sagittal best-focus difference on its own scale, keeping astigmatic split
            readable even when field curves shift far from the image plane.
          </span>

          {result && hasAstigmatismPlots ? (
            <>
              <AstigmatismPlot result={result} t={theme} mode="parabasal" />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Parabasal tangential-sagittal split. Larger values indicate stronger astigmatic separation.
              </span>
              <AstigmatismPlot result={result} t={theme} mode="realRay" />
              <span style={{ fontSize: 8.5, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
                Real-ray tangential-sagittal split from traced bundle solves.
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
                    {inCircleFields.length}/{result.fields.length}
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                  title="Maximum parabasal tangential-sagittal split across sampled field positions."
                >
                  <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                    PARA MAX SPLIT
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
                    {formatSignedUm(parabasalMaxSplitUm)}
                  </span>
                </div>
                {showRealRayMetric ? (
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                    title="Maximum real-ray tangential-sagittal split across sampled field positions."
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
                      {formatSignedUm(realRayMaxSplitUm)}
                    </span>
                  </div>
                ) : null}
                <div
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                  title="Outermost tangential-sagittal split. When the real-ray solve differs materially, both values are shown."
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
