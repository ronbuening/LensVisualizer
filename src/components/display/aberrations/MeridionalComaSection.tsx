import MeridionalComaPlot, { formatComaSpan } from "../MeridionalComaPlot.js";
import type { MeridionalComaResult } from "../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../types/theme.js";
import SectionHeader from "./SectionHeader.js";

interface MeridionalComaSectionProps {
  result: MeridionalComaResult | null;
  expanded: boolean;
  onToggle: () => void;
  theme: Theme;
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
        title="Meridional Coma"
        helpLabel="Meridional coma help"
        helpText="Meridional coma shows how an off-axis point spreads asymmetrically across the image plane in the tangential plane. The coma span helps show how much the upper and lower pupil zones fail to meet at the same image height."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded ? (
        <>
          <span style={{ fontSize: 9, color: theme.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
            2D meridional coma view using a dense off-axis ray fan. This is not a full 2D spot diagram or
            sagittal/tangential split.
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
                  title="Meridional coma span: upper outer valid image-plane intercept minus lower outer valid intercept."
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
                    {formatComaSpan(result.spanUm)}
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
              Unable to compute a usable 2D meridional coma view for this lens state.
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
