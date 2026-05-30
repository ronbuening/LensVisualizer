import { useMemo } from "react";
import { analysisJobsForState2, summarizeChromaticFieldFocus2 } from "../../../optics/compat.js";
import { CHROMATIC_CHANNEL_ORDER } from "../../../optics/chromatic/channels.js";
import { probe } from "../../../utils/perfProbe.js";
import ChromaticFieldCurvaturePlot from "./ChromaticFieldCurvaturePlot.js";
import LateralColorChart from "./LateralColorChart.js";
import LongitudinalChromaticFocusChart from "./LongitudinalChromaticFocusChart.js";
import { AnalysisEmptyState, AnalysisMetricRow } from "./analysisUi.js";
import { formatUmMagnitude } from "./chromaticChartUtils.js";
import usePreparedAnalysisState from "./usePreparedAnalysisState.js";
import type { AnalysisComputationContext } from "../../../optics/compat.js";
import type { FieldGeometryState } from "../../../optics/optics.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { RuntimeLens } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";

interface ChromaticTabProps {
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

const sectionStyle = (t: Theme) => ({
  borderTop: `1px solid ${t.panelBorder}`,
  paddingTop: 14,
  display: "flex",
  flexDirection: "column" as const,
  gap: 10,
});

const sectionTitleStyle = (t: Theme) => ({
  color: t.value,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  transition: "color 0.3s",
});

const sectionCopyStyle = (t: Theme) => ({
  color: t.muted,
  fontSize: 9,
  lineHeight: 1.45,
  transition: "color 0.3s",
});

const metricsStyle = {
  display: "flex",
  gap: 14,
  flexWrap: "wrap" as const,
  fontSize: 9.5,
};

export default function ChromaticTab({
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
}: ChromaticTabProps) {
  const preparedState = usePreparedAnalysisState({ L, focusT, zoomT, aberrationT, preparedState: preparedStateProp });
  const analysis = useMemo(
    () =>
      probe(
        "computeChromaticAnalysis",
        () =>
          analysisContext?.computeChromaticAnalysis() ??
          analysisJobsForState2.computeChromaticAnalysis(
            preparedState,
            currentEPSD,
            currentPhysStopSD,
            fieldGeometry ?? undefined,
          ),
      ),
    [analysisContext, preparedState, currentEPSD, currentPhysStopSD, fieldGeometry],
  );
  const fieldFocus = useMemo(
    () =>
      probe("computeChromaticFieldFocusSummary", () => {
        const bundle =
          analysisContext?.computeFieldCurvatureBundle() ??
          analysisJobsForState2.computeFieldCurvatureBundle(
            preparedState,
            currentEPSD,
            currentPhysStopSD,
            fieldGeometry ?? undefined,
          );
        const result = bundle.chromaticFieldCurvature;
        return { result, summary: summarizeChromaticFieldFocus2(result) };
      }),
    [analysisContext, preparedState, currentEPSD, currentPhysStopSD, fieldGeometry],
  );
  const rayTraceAnalysis = useMemo(
    () =>
      probe(
        "computeChromaticRayTraceAnalysis",
        () =>
          analysisContext?.computeChromaticRayTraceAnalysis() ??
          analysisJobsForState2.computeChromaticRayTraceAnalysis(
            preparedState,
            currentEPSD,
            currentPhysStopSD,
            fieldGeometry ?? undefined,
            { channels: CHROMATIC_CHANNEL_ORDER },
          ),
      ),
    [analysisContext, preparedState, currentEPSD, currentPhysStopSD, fieldGeometry],
  );

  const longitudinal = analysis.longitudinalFocus;
  const lateral = analysis.lateralColor;
  const offAxisRaySpread = rayTraceAnalysis.spreads.offAxis;
  const edgeLateral = lateral?.fields.filter((field) => field.usable && field.lateralSpreadUm !== null).at(-1);

  if (!longitudinal && !lateral && !fieldFocus.summary && !offAxisRaySpread) {
    return <AnalysisEmptyState t={t}>Unable to compute chromatic diagnostics for this lens state.</AnalysisEmptyState>;
  }

  return (
    <div style={{ padding: "8px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 9.5 }}>
        <section style={{ ...sectionStyle(t), borderTop: "none", paddingTop: 0 }}>
          <span style={sectionTitleStyle(t)}>Chromatic Analysis</span>
          <span style={sectionCopyStyle(t)}>
            Geometric traces at C, d, F, and g spectral lines. These readouts report focus and image-height spread; they
            do not classify apochromatic correction, diffraction, transmission, flare, or sensor response. Spectral set:
            C-line 656.3 nm, d-line 587.6 nm, F-line 486.1 nm, g-line 435.8 nm.
          </span>
          <div style={metricsStyle}>
            <AnalysisMetricRow
              label="Axial LCA"
              value={formatFiniteUm(longitudinal?.longitudinalSpreadUm)}
              suffix={finiteUmSuffix(longitudinal?.longitudinalSpreadUm)}
              note={longitudinal ? `${(longitudinal.marginalFraction * 100).toFixed(0)}% pupil` : undefined}
              t={t}
            />
            <AnalysisMetricRow
              label="On-axis image spread"
              value={formatFiniteUm(longitudinal?.transverseSpreadUm)}
              suffix={finiteUmSuffix(longitudinal?.transverseSpreadUm)}
              note="sensor-plane ray heights"
              t={t}
            />
            <AnalysisMetricRow
              label="Max lateral color"
              value={formatFiniteUm(lateral?.maxLateralSpreadUm)}
              suffix={finiteUmSuffix(lateral?.maxLateralSpreadUm)}
              note={lateral ? `${lateral.usableFieldCount}/${lateral.fields.length} fields` : undefined}
              t={t}
            />
            <AnalysisMetricRow
              label="Off-axis marginal TCA"
              value={formatFiniteUm(offAxisRaySpread === null ? null : offAxisRaySpread.tcaMm * 1000)}
              suffix={finiteUmSuffix(offAxisRaySpread === null ? null : offAxisRaySpread.tcaMm * 1000)}
              note={offAxisRaySpread ? `${rayTraceAnalysis.offAxisFieldAngleDeg.toFixed(1)}° field` : undefined}
              t={t}
            />
            <AnalysisMetricRow
              label="Field focus spread"
              value={formatFiniteUm(fieldFocus.summary ? fieldFocus.summary.maxFocusSpreadMm * 1000 : undefined)}
              suffix={finiteUmSuffix(fieldFocus.summary ? fieldFocus.summary.maxFocusSpreadMm * 1000 : undefined)}
              note={
                fieldFocus.summary
                  ? `${(fieldFocus.summary.maxFocusFieldFraction * 100).toFixed(0)}% field, ${fieldFocus.summary.source}`
                  : undefined
              }
              t={t}
            />
          </div>
        </section>

        <section style={sectionStyle(t)}>
          <span style={sectionTitleStyle(t)}>Longitudinal Color</span>
          <span style={sectionCopyStyle(t)}>
            On-axis LCA from the outermost usable marginal chromatic ray. The chart is relative to the selected
            reference line, so common defocus is not counted as chromatic focus separation.
          </span>
          <LongitudinalChromaticFocusChart result={longitudinal} t={t} />
          {longitudinal ? (
            <div style={metricsStyle}>
              <AnalysisMetricRow
                label="Focus span"
                value={formatFiniteUm(longitudinal.longitudinalSpreadUm)}
                suffix={finiteUmSuffix(longitudinal.longitudinalSpreadUm)}
                t={t}
              />
              <AnalysisMetricRow
                label="Image span"
                value={formatFiniteUm(longitudinal.transverseSpreadUm)}
                suffix={finiteUmSuffix(longitudinal.transverseSpreadUm)}
                note="at image plane"
                t={t}
              />
              <AnalysisMetricRow
                label="Ray height"
                value={`${(longitudinal.marginalFraction * 100).toFixed(0)}%`}
                note="of entrance pupil"
                t={t}
              />
              <AnalysisMetricRow
                label="Channels"
                value={longitudinal.channels.join("/")}
                note={`${longitudinal.validChannelCount} usable`}
                t={t}
              />
            </div>
          ) : null}
        </section>

        <section style={sectionStyle(t)}>
          <span style={sectionTitleStyle(t)}>Lateral Color</span>
          <span style={sectionCopyStyle(t)}>
            Chief-ray image-height spread at the current image plane. This is chromatic magnification error across the
            field, separate from axial focus shift.
          </span>
          <LateralColorChart result={lateral} t={t} />
          {lateral ? (
            <div style={metricsStyle}>
              <AnalysisMetricRow
                label="Max lateral color"
                value={formatFiniteUm(lateral.maxLateralSpreadUm)}
                suffix={finiteUmSuffix(lateral.maxLateralSpreadUm)}
                t={t}
              />
              <AnalysisMetricRow
                label="Edge lateral"
                value={
                  edgeLateral?.lateralSpreadUm === null || edgeLateral === undefined
                    ? "n/a"
                    : formatFiniteUm(edgeLateral.lateralSpreadUm)
                }
                suffix={finiteUmSuffix(edgeLateral?.lateralSpreadUm)}
                t={t}
              />
              <AnalysisMetricRow label="Fields" value={`${lateral.usableFieldCount}/${lateral.fields.length}`} t={t} />
              <AnalysisMetricRow label="Half field" value={lateral.halfFieldDeg.toFixed(1)} suffix="deg" t={t} />
            </div>
          ) : null}
        </section>

        <section style={sectionStyle(t)}>
          <span style={sectionTitleStyle(t)}>Field-Focus Color</span>
          <span style={sectionCopyStyle(t)}>
            Wavelength-dependent tangential and sagittal best-focus separation from the real-ray field-curve solver.
          </span>
          {fieldFocus.result && fieldFocus.summary ? (
            <>
              <ChromaticFieldCurvaturePlot result={fieldFocus.result} t={t} />
              <div style={metricsStyle}>
                <AnalysisMetricRow
                  label="Max focus"
                  value={formatFiniteUm(fieldFocus.summary.maxFocusSpreadMm * 1000)}
                  suffix={finiteUmSuffix(fieldFocus.summary.maxFocusSpreadMm * 1000)}
                  t={t}
                />
                <AnalysisMetricRow
                  label="Edge focus"
                  value={
                    fieldFocus.summary.edgeFocusSpreadMm === null
                      ? "n/a"
                      : formatFiniteUm(fieldFocus.summary.edgeFocusSpreadMm * 1000)
                  }
                  suffix={finiteUmSuffix(
                    fieldFocus.summary.edgeFocusSpreadMm === null ? null : fieldFocus.summary.edgeFocusSpreadMm * 1000,
                  )}
                  t={t}
                />
                <AnalysisMetricRow
                  label="Field"
                  value={`${(fieldFocus.summary.maxFocusFieldFraction * 100).toFixed(0)}%`}
                  note="largest spread"
                  t={t}
                />
                <AnalysisMetricRow
                  label="Source"
                  value={fieldFocus.summary.source === "curve" ? "dense curve" : "checkpoints"}
                  t={t}
                />
              </div>
            </>
          ) : (
            <AnalysisEmptyState t={t}>No usable chromatic field-focus data for this lens state.</AnalysisEmptyState>
          )}
        </section>
      </div>
    </div>
  );
}

function isFiniteNumber(value: number | null | undefined): value is number {
  return typeof value === "number" && isFinite(value);
}

function formatFiniteUm(value: number | null | undefined): string {
  return isFiniteNumber(value) ? formatUmMagnitude(value) : "n/a";
}

function finiteUmSuffix(value: number | null | undefined): string | undefined {
  return isFiniteNumber(value) ? "um" : undefined;
}
