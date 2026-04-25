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
import { AnalysisMetricRow } from "./analysisUi.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { FieldGeometryState } from "../../optics/optics.js";

interface PupilAberrationTabProps {
  L: RuntimeLens;
  t: Theme;
  focusT: number;
  zoomT: number;
  fieldGeometry?: FieldGeometryState | null;
}

export default function PupilAberrationTab({ L, t, focusT, zoomT, fieldGeometry }: PupilAberrationTabProps) {
  const profiles = useMemo(
    () => computeBothPupilAberrationProfiles(focusT, zoomT, L, undefined, fieldGeometry ?? undefined),
    [L, focusT, zoomT, fieldGeometry],
  );

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
        <AnalysisMetricRow label="Max EP shift" value={`${profiles.maxAbsEpShiftMm.toFixed(3)} mm`} t={t} />
        <AnalysisMetricRow
          label="Max XP shift"
          value={telecentricXP ? "∞ (telecentric)" : `${profiles.maxAbsXpShiftMm.toFixed(3)} mm`}
          t={t}
        />
        <AnalysisMetricRow label="Field" value={`${profiles.halfFieldDeg.toFixed(1)}°`} t={t} />
        <AnalysisMetricRow
          label="EP Z"
          value={`${profiles.ep.paraxialEpZRelStop.toFixed(1)} mm`}
          note="rel. stop"
          t={t}
        />
      </div>
    </div>
  );
}
