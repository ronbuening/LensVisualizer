import MeridionalComaPlot, { formatComaSpan } from "../MeridionalComaPlot.js";
import type { MeridionalComaResult } from "../../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../../types/theme.js";
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
                <div
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                  title="Tangential fan span: maximum minus minimum chief-ray-relative y-intercept across valid samples."
                >
                  <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                    FAN SPAN
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
                    {formatComaSpan(result.spanUm)}
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                  title="Signed upper-minus-lower outer ray delta, still measured relative to the chief ray."
                >
                  <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                    OUTER DELTA
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
                    {formatComaSpan(result.signedOuterDeltaUm)}
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
                    {formatField(result)}
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
              Unable to compute a usable tangential ray-fan view for this lens state.
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
