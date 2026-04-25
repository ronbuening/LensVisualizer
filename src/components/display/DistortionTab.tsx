/**
 * DistortionTab — Analysis drawer tab content for the distortion curve.
 *
 * Memoizes the distortion computation from current slider state and
 * renders the DistortionChart SVG component.
 */

import { useMemo } from "react";
import { analysisJobs } from "../../optics/analysisJobs.js";
import { probe } from "../../utils/perfProbe.js";
import { eflAtZoom } from "../../optics/optics.js";
import DistortionChart from "./DistortionChart.js";
import DistortionFieldGrid from "./DistortionFieldGrid.js";
import { AnalysisMetricRow } from "./analysisUi.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { FieldGeometryState } from "../../optics/optics.js";

interface DistortionTabProps {
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  focusT: number;
  zoomT: number;
  dynamicEFL: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
}

export default function DistortionTab({
  L,
  t,
  zPos,
  focusT,
  zoomT,
  dynamicEFL,
  currentPhysStopSD,
  fieldGeometry,
}: DistortionTabProps) {
  const samples = useMemo(
    () =>
      probe("computeDistortionCurve", () =>
        analysisJobs.computeDistortionCurve(
          L,
          zPos,
          focusT,
          zoomT,
          dynamicEFL,
          currentPhysStopSD,
          fieldGeometry ?? undefined,
        ),
      ),
    [L, zPos, focusT, zoomT, dynamicEFL, currentPhysStopSD, fieldGeometry],
  );
  const fieldGrid = useMemo(
    () =>
      probe("computeDistortionFieldGrid", () =>
        analysisJobs.computeDistortionFieldGrid(L, zPos, focusT, zoomT, currentPhysStopSD, fieldGeometry ?? undefined),
      ),
    [L, zPos, focusT, zoomT, currentPhysStopSD, fieldGeometry],
  );

  if (samples.length < 2) {
    return (
      <div style={{ color: t.muted, fontSize: 10, padding: "8px 0", transition: "color 0.3s" }}>
        Unable to compute distortion curve for this lens state.
      </div>
    );
  }

  const edgeSample = samples[samples.length - 1];
  const directionLabel =
    edgeSample.distortionPercent > 0.01 ? "barrel" : edgeSample.distortionPercent < -0.01 ? "pincushion" : "negligible";
  const infinityEFL = L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  const breathingPercent = Math.abs(infinityEFL) > 1e-9 ? (100 * (dynamicEFL - infinityEFL)) / infinityEFL : 0;
  const breathingLabel =
    Math.abs(breathingPercent) < 0.05 ? "negligible" : breathingPercent < 0 ? "narrower FOV" : "wider FOV";

  return (
    <div>
      <div style={{ marginBottom: 8, display: "grid", gap: 4 }}>
        <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>
          Rectilinear distortion (F-Tan(theta))
        </span>
        <span style={{ fontSize: 9, color: t.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
          Computed against a near-axis rectilinear reference at fixed image height. The curve stays 1D, while the field
          grid below now traces real chief-ray image positions across the current image circle against that same
          rectilinear reference. Focus breathing is reported separately from distortion.
        </span>
      </div>
      <DistortionChart samples={samples} t={t} />
      <div style={{ marginTop: 12, display: "grid", gap: 4 }}>
        <span style={{ fontSize: 9, color: t.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
          Traced field grid
        </span>
        <DistortionFieldGrid grid={fieldGrid} t={t} />
        <span style={{ fontSize: 8.5, color: t.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
          Dashed lines show the ideal rectilinear field grid clipped to the current image circle. Solid lines show the
          traced chief-ray image positions for those same 2D field samples, so this view is now a real field trace
          rather than a radial approximation.
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
          label="Edge"
          value={`${edgeSample.distortionPercent >= 0 ? "+" : ""}${edgeSample.distortionPercent.toFixed(2)}%`}
          note={`(${directionLabel})`}
          t={t}
        />
        <AnalysisMetricRow label="Height" value={`${Math.abs(edgeSample.imageHeight).toFixed(1)} mm`} t={t} />
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
