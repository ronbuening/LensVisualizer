import { useMemo, type ReactNode } from "react";
import { analysisJobsForState2 } from "../../../optics/compat.js";
import { AnalysisMetricRow } from "./analysisUi.js";
import usePreparedAnalysisState from "./usePreparedAnalysisState.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../optics/compat.js";
import type { FieldGeometryState } from "../../../optics/optics.js";
import type { RuntimeLens } from "../../../types/optics.js";
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

  return (
    <div style={{ display: "grid", gap: 14, padding: "8px 0", fontSize: 9.5 }}>
      <SummarySection title="Optical State" t={t}>
        <AnalysisMetricRow label="Path" value={summary.opticalPath === "folded" ? "Folded" : "Sequential"} t={t} />
        <AnalysisMetricRow label="Surfaces" value={summary.surfaceCount.toString()} t={t} />
        <AnalysisMetricRow label="Focus" value={formatFocusDistance(summary.focusDistanceM)} t={t} />
        <AnalysisMetricRow label="Zoom" value={formatControl(summary.zoomT)} t={t} />
        <AnalysisMetricRow label="Aberration" value={formatControl(summary.aberrationT)} t={t} />
      </SummarySection>

      <SummarySection title="First Order" t={t}>
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
        <AnalysisMetricRow label="Image Z" value={formatMm(summary.imagePlaneZMm)} t={t} />
        <AnalysisMetricRow label="Total track" value={formatMm(summary.totalTrackMm)} t={t} />
        <AnalysisMetricRow label="Cardinal EFL" value={formatMm(summary.cardinalEFLMm)} t={t} />
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
