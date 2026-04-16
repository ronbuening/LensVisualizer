import type {
  BokehBrightnessCharacter,
  SAProfilePoint,
  SphericalAberrationBlurCharacterResult,
  SphericalAberrationResult,
} from "../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../types/theme.js";
import { ENABLE_REAL_RAY_LSA_DIAGNOSTIC } from "../../../utils/featureFlags.js";
import SADiagram from "./SADiagram.js";
import { formatSaUm } from "./format.js";
import SectionHeader from "./SectionHeader.js";

interface SphericalAberrationSectionProps {
  result: SphericalAberrationResult | null;
  profile: SAProfilePoint[];
  blurCharacter: SphericalAberrationBlurCharacterResult | null;
  expanded: boolean;
  onToggle: () => void;
  theme: Theme;
}

function formatCharacterLabel(character: BokehBrightnessCharacter): string {
  switch (character) {
    case "edge-bright":
      return "edge-bright";
    case "center-bright":
      return "center-bright";
    default:
      return "neutral";
  }
}

function characterColor(character: BokehBrightnessCharacter, theme: Theme): string {
  return character === "neutral" ? theme.muted : theme.value;
}

export default function SphericalAberrationSection({
  result,
  profile,
  blurCharacter,
  expanded,
  onToggle,
  theme,
}: SphericalAberrationSectionProps) {
  const correctionLabel =
    result === null
      ? null
      : result.longitudinalSaMm < -1e-6
        ? "(undercorrected)"
        : result.longitudinalSaMm > 1e-6
          ? "(overcorrected)"
          : "(neutral)";

  return (
    <>
      <SectionHeader
        title="Spherical Aberration"
        helpLabel="Spherical aberration help"
        helpText="The chart shows the one-sided real-ray transverse fan at the common best-focus plane, referenced to the near-axis real ray; the scalar SA metric still uses symmetric +/- ray pairing so clipped zones are rejected cleanly. The front/rear blur row is a separate on-axis diagnostic traced from circular pupil bundles at a standardized defocus around best focus, so visible edge-bright vs center-bright behavior is derived from the blur itself rather than inferred from LSA sign alone."
        expanded={expanded}
        onToggle={onToggle}
        theme={theme}
      />

      {correctionLabel ? (
        <div style={{ fontSize: 9, color: theme.muted, marginTop: -10, transition: "color 0.3s" }}>
          {correctionLabel}
        </div>
      ) : null}

      {expanded && profile.length >= 2 && <SADiagram profile={profile} theme={theme} />}

      {blurCharacter ? (
        <div
          style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}
          title={
            `Front/rear blur character: on-axis circular bundles traced at ±${blurCharacter.defocusOffsetMm.toFixed(3)} mm ` +
            "around best focus, circularized radially, and classified from center-to-rim brightness. " +
            "This reflects visible blur structure directly and is separate from the over/under-corrected lens-state label."
          }
        >
          <span style={{ fontSize: 10, color: theme.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
            FRONT / REAR BLUR
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: characterColor(blurCharacter.frontDefocus.brightnessCharacter, theme),
              transition: "color 0.3s",
            }}
          >
            {`Front ${formatCharacterLabel(blurCharacter.frontDefocus.brightnessCharacter)}`}
          </span>
          <span style={{ fontSize: 11, color: theme.muted, transition: "color 0.3s" }}>/</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: characterColor(blurCharacter.rearDefocus.brightnessCharacter, theme),
              transition: "color 0.3s",
            }}
          >
            {`Rear ${formatCharacterLabel(blurCharacter.rearDefocus.brightnessCharacter)}`}
          </span>
          <span style={{ fontSize: 9, color: theme.muted, transition: "color 0.3s" }}>
            {`(±${blurCharacter.defocusOffsetMm.toFixed(3)} mm, C/R ${blurCharacter.frontDefocus.centerToRimRatio.toFixed(2)} / ${blurCharacter.rearDefocus.centerToRimRatio.toFixed(2)})`}
          </span>
        </div>
      ) : null}

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
