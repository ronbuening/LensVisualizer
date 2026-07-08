import { AberrationValueDisplay } from "../analysisUi.js";
import SagittalComaPlot from "../SagittalComaPlot.js";
import type { SagittalComaResult } from "../../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../../types/theme.js";
import { formatComaSpanUm } from "./format.js";
import SectionHeader from "./SectionHeader.js";

interface SagittalComaSectionProps {
  result: SagittalComaResult | null;
  expanded: boolean;
  onToggle: () => void;
  theme: Theme;
}

function formatField(result: SagittalComaResult): string {
  return `${Math.round(result.fieldFraction * 100)}% / ${result.fieldAngleDeg.toFixed(1)}°`;
}

export default function SagittalComaSection({ result, expanded, onToggle, theme }: SagittalComaSectionProps) {
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
        title="Sagittal Ray Fan"
        helpLabel="Sagittal ray fan help"
        helpText="Sagittal ray fan at the selected off-axis field. This is a 1D transverse ray-aberration view: chief-ray-relative image x versus sagittal pupil coordinate. Compare it with the tangential fan to see directional asymmetry."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            Sagittal ray fan using a dense off-axis sagittal pupil sweep at the selected field. Values are plotted
            relative to the traced chief ray, orthogonal to the tangential plane.
          </span>

          {result ? (
            <>
              <SagittalComaPlot result={result} t={theme} />
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  fontSize: 9.5,
                }}
              >
                <div title="Sagittal fan span: maximum minus minimum chief-ray-relative x-intercept across valid samples.">
                  <AberrationValueDisplay label="FAN SPAN" value={formatComaSpanUm(result.spanUm)} t={theme} />
                </div>
                <div title="Signed right-minus-left outer ray delta, still measured relative to the chief ray.">
                  <AberrationValueDisplay
                    label="OUTER DELTA"
                    value={formatComaSpanUm(result.signedOuterDeltaUm)}
                    t={theme}
                  />
                </div>
                <AberrationValueDisplay label="FIELD" value={formatField(result)} t={theme} />
                <AberrationValueDisplay
                  label="VALID"
                  value={`${result.validSampleCount}/${result.sampleCount}`}
                  t={theme}
                />
              </div>
            </>
          ) : (
            <div style={{ color: theme.muted, fontSize: 10, lineHeight: 1.5, transition: "color 0.3s" }}>
              Unable to compute a usable sagittal ray-fan view for this lens state.
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
