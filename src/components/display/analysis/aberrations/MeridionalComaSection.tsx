import { AberrationValueDisplay } from "../analysisUi.js";
import MeridionalComaPlot from "../MeridionalComaPlot.js";
import type { MeridionalComaResult } from "../../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../../types/theme.js";
import { formatComaSpanUm } from "./format.js";
import SectionHeader from "./SectionHeader.js";

interface MeridionalComaSectionProps {
  result: MeridionalComaResult | null;
  expanded: boolean;
  onToggle: () => void;
  theme: Theme;
}

function formatField(result: MeridionalComaResult): string {
  return `${Math.round(result.fieldFraction * 100)}% / ${result.fieldAngleDeg.toFixed(1)}°`;
}

export default function MeridionalComaSection({ result, expanded, onToggle, theme }: MeridionalComaSectionProps) {
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
        title="Tangential Ray Fan"
        helpLabel="Tangential ray fan help"
        helpText="Tangential ray fan at the selected off-axis field. This is a 1D transverse ray-aberration view: chief-ray-relative image y versus tangential pupil coordinate. It helps reveal coma-like asymmetry, but it is not a full 2D spot diagram or a pure Seidel coma coefficient."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            Tangential ray fan using a dense off-axis meridional pupil sweep at the selected field. Values are plotted
            relative to the traced chief ray, so the zero line is the chief-ray intercept rather than absolute frame
            height.
          </span>

          {result ? (
            <>
              <MeridionalComaPlot result={result} t={theme} />
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  fontSize: 9.5,
                }}
              >
                <div title="Tangential fan span: maximum minus minimum chief-ray-relative y-intercept across valid samples.">
                  <AberrationValueDisplay label="FAN SPAN" value={formatComaSpanUm(result.spanUm)} t={theme} />
                </div>
                <div title="Signed upper-minus-lower outer ray delta, still measured relative to the chief ray.">
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
              Unable to compute a usable tangential ray-fan view for this lens state.
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
