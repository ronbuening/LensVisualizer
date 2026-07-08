import { AberrationValueDisplay } from "../analysisUi.js";
import AstigmatismPlot from "../AstigmatismPlot.js";
import type { FieldCurvatureResult } from "../../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../../types/theme.js";
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
                <AberrationValueDisplay
                  label="FIELDS"
                  value={`${inCircleFields.length}/${result.fields.length}`}
                  t={theme}
                />
                <div title="Maximum parabasal tangential-sagittal split across sampled field positions.">
                  <AberrationValueDisplay
                    label="PARA MAX SPLIT"
                    value={formatSignedUm(parabasalMaxSplitUm)}
                    t={theme}
                  />
                </div>
                {showRealRayMetric ? (
                  <div title="Maximum real-ray tangential-sagittal split across sampled field positions.">
                    <AberrationValueDisplay
                      label="REAL MAX SPLIT"
                      value={formatSignedUm(realRayMaxSplitUm)}
                      t={theme}
                    />
                  </div>
                ) : null}
                <div title="Outermost tangential-sagittal split. When the real-ray solve differs materially, both values are shown.">
                  <AberrationValueDisplay label="OUTER SPLIT" value={edgeSplitLabel} t={theme} />
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
