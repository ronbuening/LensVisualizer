/**
 * DistortionTab — Analysis drawer tab content for the distortion curve.
 *
 * Memoizes the distortion computation from current slider state and
 * renders the DistortionChart SVG component.
 */

import { useMemo } from "react";
import { analysisJobsForState2 } from "../../../optics/compat.js";
import { probe } from "../../../utils/perfProbe.js";
import { eflAtZoom } from "../../../optics/optics.js";
import DistortionChart from "./DistortionChart.js";
import DistortionFieldGrid from "./DistortionFieldGrid.js";
import { AnalysisMetricRow } from "./analysisUi.js";
import usePreparedAnalysisState from "./usePreparedAnalysisState.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../optics/compat.js";
import type { RuntimeLens } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";
import type { FieldGeometryState } from "../../../optics/optics.js";
import PerspectiveDistortionView from "./perspective/PerspectiveDistortionView.js";

interface DistortionTabProps {
  L: RuntimeLens;
  t: Theme;
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  dynamicEFL: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
  preparedState?: PreparedOpticalState | null;
  analysisContext?: AnalysisComputationContext;
}

export default function DistortionTab({
  L,
  t,
  focusT,
  zoomT,
  aberrationT = 0,
  dynamicEFL,
  currentPhysStopSD,
  fieldGeometry,
  preparedState: preparedStateProp,
  analysisContext,
}: DistortionTabProps) {
  const preparedState = usePreparedAnalysisState({ L, focusT, zoomT, aberrationT, preparedState: preparedStateProp });
  if (analysisContext?.movementActive) {
    return <MovedDistortionContent analysisContext={analysisContext} t={t} />;
  }
  return (
    <CenteredDistortionContent
      L={L}
      t={t}
      zoomT={zoomT}
      dynamicEFL={dynamicEFL}
      currentPhysStopSD={currentPhysStopSD}
      fieldGeometry={fieldGeometry}
      preparedState={preparedState}
      analysisContext={analysisContext}
    />
  );
}

function MovedDistortionContent({ analysisContext, t }: { analysisContext: AnalysisComputationContext; t: Theme }) {
  const analysis = useMemo(() => analysisContext.computePerspectiveDistortionAnalysis(), [analysisContext]);
  const context = analysisContext.perspectiveTraceContext;
  if (!context) {
    return <div style={{ color: t.muted, fontSize: 10, padding: "8px 0" }}>Perspective trace context unavailable.</div>;
  }
  return <PerspectiveDistortionView analysis={analysis} context={context} t={t} />;
}

interface CenteredDistortionContentProps {
  L: RuntimeLens;
  t: Theme;
  zoomT: number;
  dynamicEFL: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
  preparedState: PreparedOpticalState;
  analysisContext?: AnalysisComputationContext;
}

function CenteredDistortionContent({
  L,
  t,
  zoomT,
  dynamicEFL,
  currentPhysStopSD,
  fieldGeometry,
  preparedState,
  analysisContext,
}: CenteredDistortionContentProps) {
  const result = useMemo(
    () =>
      probe(
        "computeDistortionCurve",
        () =>
          analysisContext?.computeDistortionCurve() ??
          analysisJobsForState2.computeDistortionCurve(
            preparedState,
            dynamicEFL,
            currentPhysStopSD,
            fieldGeometry ?? undefined,
          ),
      ),
    [analysisContext, preparedState, dynamicEFL, currentPhysStopSD, fieldGeometry],
  );
  const fieldGrid = useMemo(
    () =>
      probe(
        "computeDistortionFieldGrid",
        () =>
          analysisContext?.computeDistortionFieldGrid() ??
          analysisJobsForState2.computeDistortionFieldGrid(
            preparedState,
            currentPhysStopSD,
            fieldGeometry ?? undefined,
          ),
      ),
    [analysisContext, preparedState, currentPhysStopSD, fieldGeometry],
  );

  const { samples, corner } = result;
  const cornerAvailable = corner.status === "reached" || corner.reason === "field-limit";
  if (samples.length < 2) {
    return (
      <div style={{ color: t.muted, fontSize: 10, padding: "8px 0", transition: "color 0.3s" }}>
        {cornerAvailable
          ? "Unable to compute distortion curve for this lens state."
          : `Corner distortion unavailable — ${corner.reason === "trace-failure" ? "chief-ray trace failed" : "chief ray missed its target height"} at the corner.`}
      </div>
    );
  }

  const edgeSample = samples[samples.length - 1];
  const isProjectionResidual =
    edgeSample.referenceKind === "fisheye-equidistant" || edgeSample.referenceKind === "fisheye-equisolid";
  /* Positive (real − ideal) is pincushion, negative is barrel; keep in step with DistortionChart. */
  const directionLabel =
    edgeSample.distortionPercent > 0.01
      ? isProjectionResidual
        ? "outward residual"
        : "pincushion"
      : edgeSample.distortionPercent < -0.01
        ? isProjectionResidual
          ? "inward residual"
          : "barrel"
        : "negligible";
  const infinityEFL = L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  const breathingPercent = Math.abs(infinityEFL) > 1e-9 ? (100 * (dynamicEFL - infinityEFL)) / infinityEFL : 0;
  const breathingLabel =
    Math.abs(breathingPercent) < 0.05 ? "negligible" : breathingPercent < 0 ? "narrower FOV" : "wider FOV";

  return (
    <div>
      <div style={{ marginBottom: 8, display: "grid", gap: 4 }}>
        <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>
          {isProjectionResidual ? "Equidistant projection residual" : "Rectilinear distortion (F-Tan(theta))"}
        </span>
        <span style={{ fontSize: 9, color: t.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
          {isProjectionResidual
            ? "Computed against the declared equidistant fisheye projection at fixed image height. The curve reports residual mapping error rather than treating the intended fisheye projection as rectilinear barrel distortion."
            : "Computed against a near-axis rectilinear reference at fixed image height; at finite focus that reference is the paraxial image of each chief ray's object point. The curve stays 1D, while the field grid below now traces real chief-ray image positions across the current image circle against that same rectilinear reference. Focus breathing is reported separately from distortion."}
        </span>
      </div>
      <DistortionChart partial={!cornerAvailable} samples={samples} t={t} />
      <div style={{ marginTop: 12, display: "grid", gap: 4 }}>
        <span style={{ fontSize: 9, color: t.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
          Traced field grid
        </span>
        <DistortionFieldGrid grid={fieldGrid} t={t} />
        <span style={{ fontSize: 8.5, color: t.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
          {isProjectionResidual
            ? "Dashed lines show the ideal equidistant projection grid clipped to the current trace field. Solid lines show traced chief-ray image positions for those same 2D field samples."
            : "Dashed lines show the ideal rectilinear field grid clipped to the current image circle. Solid lines show the traced chief-ray image positions for those same 2D field samples, so this view is now a real field trace rather than a radial approximation."}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          fontSize: 9.5,
          marginTop: 10,
        }}
      >
        <AnalysisMetricRow
          label={cornerAvailable ? "Edge" : "Corner"}
          value={
            cornerAvailable
              ? `${edgeSample.distortionPercent >= 0 ? "+" : ""}${edgeSample.distortionPercent.toFixed(2)}%`
              : "Unavailable"
          }
          note={
            cornerAvailable
              ? `(${directionLabel})`
              : corner.reason === "trace-failure"
                ? "No complete chief ray reaches the corner"
                : "Chief ray missed its target height at the corner"
          }
          t={t}
        />
        <AnalysisMetricRow
          label={cornerAvailable ? "Height" : "Last traced height"}
          value={`${Math.abs(edgeSample.imageHeight).toFixed(1)} mm`}
          t={t}
        />
        <AnalysisMetricRow label="Angle" value={`${edgeSample.fieldAngleDeg.toFixed(1)}°`} t={t} />
        <AnalysisMetricRow
          label="Breathing"
          value={`${breathingPercent >= 0 ? "+" : ""}${breathingPercent.toFixed(1)}%`}
          note={`(${breathingLabel})`}
          t={t}
        />
      </div>
    </div>
  );
}
