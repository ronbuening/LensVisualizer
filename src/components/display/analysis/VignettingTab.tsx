/**
 * VignettingTab — Analysis drawer tab content for the vignetting /
 * relative illumination chart.
 *
 * Memoizes the dense-ray-sweep computation from current slider state and
 * renders the VignettingChart SVG component plus edge illumination readouts.
 */

import { useMemo } from "react";
import { createAnalysisRequest, createAnalysisComputationContext } from "../../../optics/analysis.js";
import type { AnalysisRequest } from "../../../optics/analysis.js";
import { probe } from "../../../utils/perfProbe.js";
import VignettingChart from "./VignettingChart.js";
import { AnalysisMetricRow } from "./analysisUi.js";
import usePreparedAnalysisState from "./usePreparedAnalysisState.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../optics/analysis.js";
import type { RuntimeLens } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";
import type { FieldGeometryState } from "../../../optics/fieldGeometry.js";
import PerspectiveVignettingView from "./perspective/PerspectiveVignettingView.js";

interface VignettingTabProps {
  L: RuntimeLens;
  t: Theme;
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
  preparedState?: PreparedOpticalState | null;
  analysisContext?: AnalysisComputationContext;
}

export default function VignettingTab({
  L,
  t,
  focusT,
  zoomT,
  aberrationT = 0,
  currentEPSD,
  currentPhysStopSD,
  fieldGeometry,
  preparedState: preparedStateProp,
  analysisContext,
}: VignettingTabProps) {
  const preparedState = usePreparedAnalysisState({ L, focusT, zoomT, aberrationT, preparedState: preparedStateProp });
  const perspectiveRequest = analysisContext?.request;
  if (perspectiveRequest?.pose?.active) {
    return <MovedVignettingContent request={perspectiveRequest} t={t} />;
  }
  return (
    <CenteredVignettingContent
      t={t}
      currentEPSD={currentEPSD}
      currentPhysStopSD={currentPhysStopSD}
      fieldGeometry={fieldGeometry}
      preparedState={preparedState}
      analysisContext={analysisContext}
    />
  );
}

function MovedVignettingContent({ request, t }: { request: AnalysisRequest; t: Theme }) {
  const analysis = useMemo(
    () => createAnalysisComputationContext(request).computePerspectiveVignettingAnalysis(),
    [request],
  );
  return <PerspectiveVignettingView analysis={analysis} t={t} />;
}

interface CenteredVignettingContentProps {
  t: Theme;
  currentEPSD: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
  preparedState: PreparedOpticalState;
  analysisContext?: AnalysisComputationContext;
}

function CenteredVignettingContent({
  t,
  currentEPSD,
  currentPhysStopSD,
  fieldGeometry,
  preparedState,
  analysisContext,
}: CenteredVignettingContentProps) {
  const request = useMemo(
    () =>
      analysisContext?.request ??
      createAnalysisRequest({
        preparedState,
        dynamicEFL: 0,
        currentEPSD,
        currentPhysStopSD,
        fieldGeometry,
      }),
    [analysisContext, preparedState, currentEPSD, currentPhysStopSD, fieldGeometry],
  );
  const context = useMemo(() => createAnalysisComputationContext(request), [request]);
  const samples = useMemo(() => probe("computeVignettingCurve", () => context.computeVignettingCurve()), [context]);

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
