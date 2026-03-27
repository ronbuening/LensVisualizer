import type { SAProfilePoint, SphericalAberrationResult } from "../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../types/theme.js";
import { ENABLE_REAL_RAY_LSA_DIAGNOSTIC } from "../../../utils/featureFlags.js";
import SADiagram from "./SADiagram.js";
import { formatSaUm } from "./format.js";
import SectionHeader from "./SectionHeader.js";

interface SphericalAberrationSectionProps {
  result: SphericalAberrationResult | null;
  profile: SAProfilePoint[];
  expanded: boolean;
  onToggle: () => void;
  theme: Theme;
}

export default function SphericalAberrationSection({
  result,
  profile,
  expanded,
  onToggle,
  theme,
}: SphericalAberrationSectionProps) {
  return (
    <>
      <SectionHeader
        title="Spherical Aberration"
        helpLabel="Spherical aberration help"
        helpText="The curve shows the real-ray transverse aberration fan at the common best-focus plane, referenced to the near-axis real ray. Because it stays in image space, it remains stable near the pupil edge while still showing the signed fan shape of the on-axis bundle. The spread metric below still shows the residual bundle size at best focus."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {expanded && profile.length >= 2 && <SADiagram profile={profile} theme={theme} />}

      <div
        style={{ display: "flex", alignItems: "center", gap: 10 }}
        title={
          "Best-focus spread: RMS spread of the sampled on-axis real rays at the best-fit image plane for the " +
          "current state. This remains focus-responsive because the best-focus plane is solved from the current bundle."
        }
      >
        <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
          BEST-FOCUS SPREAD
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
          {result ? formatSaUm(result.bestFocusRmsUm) : "\u2014"}
        </span>
        {result ? (
          <span style={{ fontSize: 9, color: theme.muted, transition: "color 0.3s" }}>
            (peak {formatSaUm(result.bestFocusPeakUm)}, shift {result.bestFocusShiftMm.toFixed(2)} mm)
          </span>
        ) : null}
      </div>

      {ENABLE_REAL_RAY_LSA_DIAGNOSTIC ? (
        <div
          style={{ display: "flex", alignItems: "center", gap: 10 }}
          title={
            "Longitudinal spherical aberration (LSA): axial focus shift of the marginal real ray " +
            "vs. a near-axis real-ray reference. Negative = undercorrected (marginal focus closer to lens)."
          }
        >
          <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
            LSA
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
            {result ? formatSaUm(result.longitudinalSaUm) : "\u2014"}
          </span>
        </div>
      ) : null}
    </>
  );
}
