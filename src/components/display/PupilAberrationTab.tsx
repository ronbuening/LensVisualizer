/**
 * PupilAberrationTab — Analysis drawer tab content showing how the entrance
 * pupil (EP) and exit pupil (XP) z-positions shift with field angle.
 *
 * Both profiles are computed in a single pass via computeBothPupilAberrationProfiles,
 * which shares the per-angle chief-ray bisection between the two computations.
 * The memoized result reacts to changes in focusT or zoomT.
 */

import { useMemo } from "react";
import { computeBothPupilAberrationProfiles } from "../../optics/pupilAberration.js";
import PupilAberrationChart from "./PupilAberrationChart.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface PupilAberrationTabProps {
  L: RuntimeLens;
  t: Theme;
  focusT: number;
  zoomT: number;
}

export default function PupilAberrationTab({ L, t, focusT, zoomT }: PupilAberrationTabProps) {
  const profiles = useMemo(() => computeBothPupilAberrationProfiles(focusT, zoomT, L), [L, focusT, zoomT]);

  if (profiles.ep.samples.length < 2) {
    return (
      <div style={{ color: t.muted, fontSize: 10, padding: "8px 0", transition: "color 0.3s" }}>
        Unable to compute pupil aberration profile for this lens state.
      </div>
    );
  }

  const telecentricXP = !isFinite(profiles.xp.paraxialXpZRelLastSurf);

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>
          Pupil aberration (EP &amp; XP shift vs field)
        </span>
      </div>
      <PupilAberrationChart profiles={profiles} t={t} />
      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          fontSize: 9.5,
          marginTop: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
            MAX EP SHIFT
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {profiles.maxAbsEpShiftMm.toFixed(3)} mm
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
            MAX XP SHIFT
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: telecentricXP ? t.muted : t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {telecentricXP ? "∞ (telecentric)" : `${profiles.maxAbsXpShiftMm.toFixed(3)} mm`}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>FIELD</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {profiles.halfFieldDeg.toFixed(1)}°
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>EP Z</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {profiles.ep.paraxialEpZRelStop.toFixed(1)} mm
          </span>
          <span style={{ fontSize: 9, color: t.muted, transition: "color 0.3s" }}>rel. stop</span>
        </div>
      </div>
    </div>
  );
}
