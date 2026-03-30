import SagittalComaPlot, { formatSagittalComaSpan } from "../SagittalComaPlot.js";
import type { SagittalComaResult } from "../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../types/theme.js";
import SectionHeader from "./SectionHeader.js";

interface SagittalComaSectionProps {
  result: SagittalComaResult | null;
  expanded: boolean;
  onToggle: () => void;
  theme: Theme;
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
        helpText="Sagittal ray fan at the configured off-axis field. This is the sagittal ray-aberration view: chief-ray-referenced image x versus sagittal pupil coordinate. Compare it with the tangential ray fan above to see directional asymmetry."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            Sagittal ray fan using a dense off-axis sagittal pupil sweep. This is a 1D chief-ray-referenced
            ray-aberration plot orthogonal to the tangential plane.
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
                <div
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                  title="Sagittal coma span: right outer valid x-intercept minus left outer valid x-intercept."
                >
                  <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                    COMA SPAN
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
                    {formatSagittalComaSpan(result.spanUm)}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                    FIELD
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
                    {result.fieldAngleDeg.toFixed(1)}°
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                    VALID
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
                    {result.validSampleCount}/{result.sampleCount}
                  </span>
                </div>
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
