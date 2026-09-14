import { useMemo, type ReactNode } from "react";
import { analysisJobsForState2 } from "../../../optics/compat.js";
import { AnalysisMetricRow } from "./analysisUi.js";
import usePreparedAnalysisState from "./usePreparedAnalysisState.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../optics/compat.js";
import type { FieldGeometryState } from "../../../optics/optics.js";
import type { RuntimeLens, TiltPivot } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";

interface OpticalSummaryTabProps {
  L: RuntimeLens;
  t: Theme;
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  dynamicEFL: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
  preparedState?: PreparedOpticalState | null;
  analysisContext?: AnalysisComputationContext;
}

export default function OpticalSummaryTab({
  L,
  t,
  focusT,
  zoomT,
  aberrationT = 0,
  dynamicEFL,
  currentEPSD,
  currentPhysStopSD,
  fieldGeometry,
  preparedState: preparedStateProp,
  analysisContext,
}: OpticalSummaryTabProps) {
  const preparedState = usePreparedAnalysisState({ L, focusT, zoomT, aberrationT, preparedState: preparedStateProp });
  const summary = useMemo(
    () =>
      analysisContext?.computeOpticalSummary() ??
      analysisJobsForState2.computeOpticalSummary(
        preparedState,
        dynamicEFL,
        currentEPSD,
        currentPhysStopSD,
        fieldGeometry ?? undefined,
      ),
    [analysisContext, preparedState, dynamicEFL, currentEPSD, currentPhysStopSD, fieldGeometry],
  );
  const perspectiveFocus = useMemo(
    () => (analysisContext?.movementActive ? analysisContext.computePerspectiveFocusAnalysis() : null),
    [analysisContext],
  );
  const perspectiveContext = analysisContext?.movementActive ? analysisContext.perspectiveTraceContext : null;
  const sensorCenterFocus = perspectiveFocus?.samples.find(
    (sample) => Math.abs(sample.requestedSensorUv.u) <= 1e-9 && Math.abs(sample.requestedSensorUv.v) <= 1e-9,
  );

  return (
    <div style={{ display: "grid", gap: 14, padding: "8px 0", fontSize: 9.5 }}>
      {perspectiveContext ? (
        <SummarySection title="Current Perspective Pose" t={t}>
          <span style={{ color: t.muted, fontSize: 9, lineHeight: 1.45 }}>
            The camera frame and sensor stay fixed. These controls rigidly pose the complete lens and stop around the
            declared camera-frame pivot.
          </span>
          <AnalysisMetricRow label="Shift" value={formatSignedMm(perspectiveContext.pose.movement.shiftMm)} t={t} />
          <AnalysisMetricRow label="Tilt" value={formatSignedDeg(perspectiveContext.pose.movement.tiltDeg)} t={t} />
          <AnalysisMetricRow
            label="Pivot basis"
            value={formatPivotBasis(perspectiveContext.pose.tiltPivot?.basis)}
            t={t}
          />
          <AnalysisMetricRow
            label="Pivot from sensor"
            value={formatSignedMm(perspectiveContext.pose.tiltPivot?.zOffsetFromImagePlaneMm)}
            note="objectward is negative"
            t={t}
          />
          <AnalysisMetricRow label="Sensor center" value={sensorCenterFocus?.status ?? "unavailable"} t={t} />
          <AnalysisMetricRow
            label="Center best focus"
            value={formatSignedMm(sensorCenterFocus?.bestFocus?.normalOffsetMm)}
            note="along fixed sensor normal"
            t={t}
          />
          <AnalysisMetricRow
            label="Sensor coverage"
            value={`${perspectiveFocus?.usableSampleCount ?? 0}/${perspectiveFocus?.samples.length ?? 0}`}
            note="signed samples usable"
            t={t}
          />
        </SummarySection>
      ) : null}
      <SummarySection title="Optical State" t={t}>
        <AnalysisMetricRow label="Path" value={summary.opticalPath === "folded" ? "Folded" : "Sequential"} t={t} />
        <AnalysisMetricRow label="Surfaces" value={summary.surfaceCount.toString()} t={t} />
        <AnalysisMetricRow label="Focus" value={formatFocusDistance(summary.focusDistanceM)} t={t} />
        <AnalysisMetricRow label="Zoom" value={formatControl(summary.zoomT)} t={t} />
        <AnalysisMetricRow label="Aberration" value={formatControl(summary.aberrationT)} t={t} />
      </SummarySection>

      <SummarySection title="First Order — Intrinsic / Lens-local" t={t}>
        <span style={{ color: t.muted, fontSize: 9, lineHeight: 1.45 }}>
          Rigid perspective movement does not change focal length, paraxial cardinals, Petzval sum, or focus breathing.
        </span>
        <AnalysisMetricRow label="Current EFL" value={formatMm(summary.currentEFLMm)} t={t} />
        <AnalysisMetricRow label="Infinity EFL" value={formatMm(summary.infinityEFLMm)} t={t} />
        <AnalysisMetricRow label="Breathing" value={formatSignedPercent(summary.breathingPercent)} t={t} />
        <AnalysisMetricRow label="BFD" value={formatMm(summary.bfdMm)} t={t} />
        <AnalysisMetricRow label="FFD" value={formatMm(summary.ffdMm)} t={t} />
        <AnalysisMetricRow label="Hiatus" value={formatMm(summary.principalHiatusMm)} t={t} />
      </SummarySection>

      <SummarySection title="Aperture And Field" t={t}>
        <AnalysisMetricRow label="Working f/#" value={formatFNumber(summary.effectiveFNumber)} t={t} />
        <AnalysisMetricRow label="Entrance pupil" value={formatMm(summary.entrancePupilDiameterMm)} t={t} />
        <AnalysisMetricRow label="Physical stop" value={formatMm(summary.physicalStopDiameterMm)} t={t} />
        <AnalysisMetricRow label="Half field" value={formatDeg(summary.halfFieldDeg)} t={t} />
        <AnalysisMetricRow label="Full field" value={formatDeg(summary.fullFieldDeg)} t={t} />
      </SummarySection>

      <SummarySection title="Image Plane" t={t}>
        <AnalysisMetricRow
          label={perspectiveContext ? "Fixed sensor Z" : "Image plane Z"}
          value={formatMm(perspectiveContext?.sensorPlane.point[2] ?? summary.imagePlaneZMm)}
          note={perspectiveContext ? "camera frame" : undefined}
          t={t}
        />
        <AnalysisMetricRow label="Total track" value={formatMm(summary.totalTrackMm)} t={t} />
        <AnalysisMetricRow
          label="Cardinal EFL"
          value={formatMm(summary.cardinalEFLMm)}
          note="intrinsic / lens-local"
          t={t}
        />
      </SummarySection>
    </div>
  );
}

function SummarySection({ title, t, children }: { title: string; t: Theme; children: ReactNode }) {
  return (
    <section style={{ display: "grid", gap: 6, paddingBottom: 12, borderBottom: `1px solid ${t.panelDivider}` }}>
      <h3
        style={{
          margin: 0,
          color: t.desc,
          fontSize: 10.5,
          fontWeight: 650,
          transition: "color 0.3s",
        }}
      >
        {title}
      </h3>
      <div style={{ display: "grid", gap: 5 }}>{children}</div>
    </section>
  );
}

function formatMm(value: number | null, digits = 1): string {
  return value === null ? "n/a" : `${value.toFixed(digits)} mm`;
}

function formatDeg(value: number | null): string {
  return value === null ? "n/a" : `${value.toFixed(1)}°`;
}

function formatSignedMm(value: number | null | undefined): string {
  return value === null || value === undefined || !Number.isFinite(value)
    ? "unavailable"
    : `${value >= 0 ? "+" : ""}${value.toFixed(2)} mm`;
}

function formatSignedDeg(value: number | null | undefined): string {
  return value === null || value === undefined || !Number.isFinite(value)
    ? "unavailable"
    : `${value >= 0 ? "+" : ""}${value.toFixed(2)}°`;
}

function formatPivotBasis(basis: TiltPivot["basis"] | undefined): string {
  return basis === "mechanical-axis"
    ? "Mechanical axis"
    : basis === "patent-principal-point-guidance"
      ? "Patent-guided principal point"
      : basis === "rear-vertex-fallback"
        ? "Rear-vertex fallback"
        : "Shift only / no tilt pivot";
}

function formatFNumber(value: number | null): string {
  return value === null ? "n/a" : `f/${value.toFixed(2)}`;
}

function formatSignedPercent(value: number | null): string {
  return value === null ? "n/a" : `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}

function formatControl(value: number): string {
  return `${(value * 100).toFixed(0)}%`;
}

function formatFocusDistance(value: number | null): string {
  if (value === null) return "Infinity";
  return `${value.toFixed(value >= 10 ? 1 : 2)} m`;
}
