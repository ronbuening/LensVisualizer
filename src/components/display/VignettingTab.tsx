/**
 * VignettingTab — Analysis drawer tab content for the vignetting /
 * relative illumination chart.
 *
 * Memoizes the dense-ray-sweep computation from current slider state and
 * renders the VignettingChart SVG component plus edge illumination readouts.
 */

import { useMemo } from "react";
import { analysisJobs } from "../../optics/analysisJobs.js";
import { probe } from "../../utils/perfProbe.js";
import VignettingChart from "./VignettingChart.js";
import { AnalysisMetricRow } from "./analysisUi.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { FieldGeometryState } from "../../optics/optics.js";

interface VignettingTabProps {
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  focusT: number;
  zoomT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
}

export default function VignettingTab({
  L,
  t,
  zPos,
  focusT,
  zoomT,
  currentEPSD,
  currentPhysStopSD,
  fieldGeometry,
}: VignettingTabProps) {
  const samples = useMemo(
    () =>
      probe("computeVignettingCurve", () =>
        analysisJobs.computeVignettingCurve(
          L,
          zPos,
          focusT,
          zoomT,
          currentEPSD,
          currentPhysStopSD,
          fieldGeometry ?? undefined,
        ),
      ),
    [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, fieldGeometry],
  );

  if (samples.length < 2) {
    return (
      <div style={{ color: t.muted, fontSize: 10, padding: "8px 0", transition: "color 0.3s" }}>
        Unable to compute vignetting curve for this lens state.
      </div>
    );
  }

  const edgeSample = samples[samples.length - 1];

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>
          Vignetting / Relative Illumination
        </span>
      </div>
      <VignettingChart samples={samples} t={t} />
      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          fontSize: 9.5,
          marginTop: 10,
        }}
      >
        <AnalysisMetricRow label="Edge GT" value={`${(edgeSample.geometricTransmission * 100).toFixed(1)}%`} t={t} />
        <AnalysisMetricRow label="Edge RI" value={`${(edgeSample.relativeIllumination * 100).toFixed(1)}%`} t={t} />
        <AnalysisMetricRow label="Field" value={`${edgeSample.fieldAngleDeg.toFixed(1)}°`} t={t} />
      </div>
    </div>
  );
}
