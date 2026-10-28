/**
 * VignettingTab — Analysis drawer tab content for the vignetting /
 * relative illumination chart.
 *
 * Memoizes the stop-lattice computation from current slider state and
 * renders the VignettingChart SVG component plus edge readouts.
 */

import { useMemo } from "react";
import { createAnalysisRequest, createAnalysisComputationContext } from "../../../optics/analysis.js";
import type {
  AnalysisRequest,
  RelativeIlluminationUnavailableReason,
  VignettingCurveUnavailableReason,
  VignettingFieldUnavailableReason,
} from "../../../optics/analysis.js";
import HelpTooltipButton from "../../controls/HelpTooltipButton.js";
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
  const curve = useMemo(() => probe("computeVignettingCurve", () => context.computeVignettingCurve()), [context]);

  if (!curve.available || curve.samples.length < 2) {
    return (
      <div style={{ color: t.muted, fontSize: 10, padding: "8px 0", transition: "color 0.3s" }}>
        {CURVE_UNAVAILABLE[curve.reason ?? "invalid-state"]}
      </div>
    );
  }

  const samples = curve.samples;
  const edgeSample = samples[samples.length - 1];
  const percent = (value: number | null) => (value === null ? "—" : `${(value * 100).toFixed(1)}%`);
  const unaimed = samples.reduce((sum, sample) => sum + sample.unaimedCount, 0);
  const failed = samples.reduce((sum, sample) => sum + sample.failedCount, 0);
  const gaps = samples.flatMap((sample) => {
    const reason = sample.unavailableReason ?? sample.relativeIlluminationReason;
    return reason ? [`${sample.fieldAngleDeg.toFixed(1)}°: ${FIELD_UNAVAILABLE[reason]}`] : [];
  });

  return (
    <div>
      <div style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>
          Vignetting / Relative Illumination
        </span>
        <HelpTooltipButton theme={t} label="Vignetting help" text={VIGNETTING_HELP} />
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
        <AnalysisMetricRow label="Edge unvignetted" value={percent(edgeSample.unvignettedFraction)} t={t} />
        <AnalysisMetricRow label="Edge RI" value={percent(edgeSample.relativeIllumination)} t={t} />
        <AnalysisMetricRow label="Field" value={`${edgeSample.fieldAngleDeg.toFixed(1)}°`} t={t} />
      </div>
      {unaimed > 0 || failed > 0 || gaps.length > 0 ? (
        <div style={{ color: t.muted, fontSize: 9, lineHeight: 1.4, marginTop: 6, transition: "color 0.3s" }}>
          {unaimed > 0 ? `${unaimed} stop samples could not be aimed and are left out of both figures. ` : ""}
          {failed > 0 ? `${failed} rays failed to trace for a numerical reason and are left out of both figures. ` : ""}
          {gaps.length > 0 ? `No figure at ${gaps.join("; ")}.` : ""}
        </div>
      ) : null}
    </div>
  );
}

const VIGNETTING_HELP =
  "Unvignetted: the share of a regular lattice of rays across the real aperture stop that reaches the image with every aperture checked, as OpticStudio's Vignetting Diagram counts rays. It is geometric (no absorption or coating loss) and absolute, so it reads below 100% on the axis where a rim clips the axial beam. Relative illumination: Rimmer's method, as OpticStudio computes it. Each transmitted ray is referred to the image point through a reference sphere, and the beam's projected solid angle in image-space direction cosines, weighted by bulk transmission and n′², is divided by the axis's.";

const CURVE_UNAVAILABLE: Record<VignettingCurveUnavailableReason, string> = {
  "invalid-state": "Vignetting needs a positive stop radius and field for this lens state.",
  "unsupported-path":
    "Vignetting is computed for centered, sequential refractive lens states; this one is folded, mirrored, diffractive, annular or a fisheye projection.",
  "tilted-image-plane": "Vignetting needs an image plane perpendicular to the optical axis.",
  "bounding-sphere-field":
    "This lens's widest fields launch on the bounding sphere, which the stop lattice does not cover.",
};

const FIELD_UNAVAILABLE: Record<VignettingFieldUnavailableReason | RelativeIlluminationUnavailableReason, string> = {
  "no-field-launch": "no chief ray to launch the field from",
  "too-many-unaimed": "more than 1% of the stop samples could not be aimed or traced",
  "too-many-failed": "more than 1% of the stop samples could not be aimed or traced",
  "no-image-point": "relative illumination needs the chief ray's image point",
  "reference-sphere-missed": "a ray misses the reference sphere, so relative illumination is not computed",
  "rays-not-localized": "rays stray too far from the image point for Rimmer's method to apply",
  "unresolved-in-beam": "a stop sample inside the beam could not be aimed or traced",
  "cosine-map-folds": "the beam folds in direction-cosine space, where Rimmer's method does not apply",
  "isolated-cell": "the beam is too thin to form the cell map",
  "axis-unavailable": "relative illumination needs the axis's figure",
};
