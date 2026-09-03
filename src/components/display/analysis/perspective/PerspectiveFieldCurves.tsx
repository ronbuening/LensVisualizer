import type {
  PerspectiveFieldAberrationAnalysis,
  PerspectiveFieldCurvatureSample,
} from "../../../../optics/perspective/index.js";
import type { Theme } from "../../../../types/theme.js";
import { AnalysisMetricRow } from "../analysisUi.js";
import {
  formatSignedMm,
  formatSignedUm,
  perspectiveFieldLabel,
  perspectiveStatusLabel,
  PerspectiveSection,
  PerspectiveUnavailable,
} from "./perspectiveAnalysisUi.js";

interface PerspectiveFieldCurvesProps {
  result: PerspectiveFieldAberrationAnalysis;
  t: Theme;
}

const WIDTH = 360;
const HEIGHT = 224;
const MARGIN = { top: 20, right: 18, bottom: 42, left: 58 };
const PLOT_WIDTH = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;

/** Signed fixed-sensor field-focus and astigmatism presentation. */
export default function PerspectiveFieldCurves({ result, t }: PerspectiveFieldCurvesProps) {
  const analysis = result.fieldCurvature;
  const center = analysis.samples.find((sample) => Math.abs(sample.requestedSensorUv.v) <= 1e-9) ?? null;
  const halfRange = Math.max(0.01, analysis.sharedFocusShiftHalfRangeMm);
  const xScale = (v: number) => MARGIN.left + ((v + 1) / 2) * PLOT_WIDTH;
  const yScale = (focusMm: number) => MARGIN.top + PLOT_HEIGHT / 2 - (focusMm / halfRange) * (PLOT_HEIGHT / 2);
  const tangentialPaths = curveSegments(
    analysis.samples,
    (sample) => sample.tangential.bestFocus?.normalOffsetMm,
    xScale,
    yScale,
  );
  const sagittalPaths = curveSegments(
    analysis.samples,
    (sample) => sample.sagittal.bestFocus?.normalOffsetMm,
    xScale,
    yScale,
  );

  return (
    <PerspectiveSection
      title="Fixed-Sensor Field Focus & Astigmatism"
      copy={
        <>
          Tangential and sagittal best-focus offsets are solved along the fixed sensor normal at signed top-to-bottom
          format positions. Positive is imageward along the sensor normal; negative is lensward. Missing positions stay
          visible instead of being interpolated. The Petzval sum/reference remains intrinsic and lens-local, so it is
          not overlaid on these fixed-sensor curves where that would mix coordinate frames.
        </>
      }
      t={t}
    >
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        width="100%"
        style={{ maxWidth: WIDTH, display: "block" }}
        role="img"
        aria-label="Movement-aware fixed-sensor tangential and sagittal field focus"
      >
        {[-halfRange, 0, halfRange].map((tick) => (
          <g key={tick}>
            <line
              x1={MARGIN.left}
              y1={yScale(tick)}
              x2={MARGIN.left + PLOT_WIDTH}
              y2={yScale(tick)}
              stroke={tick === 0 ? t.axis : t.panelBorder}
              strokeWidth={tick === 0 ? 1 : 0.5}
              strokeDasharray={tick === 0 ? "4,3" : undefined}
            />
            <text
              x={MARGIN.left - 7}
              y={yScale(tick)}
              textAnchor="end"
              dominantBaseline="central"
              fill={t.muted}
              fontSize={8}
              fontFamily="inherit"
            >
              {formatAxisMm(tick)}
            </text>
          </g>
        ))}
        {[-1, -0.5, 0, 0.5, 1].map((tick) => (
          <g key={tick}>
            <line
              x1={xScale(tick)}
              y1={MARGIN.top}
              x2={xScale(tick)}
              y2={MARGIN.top + PLOT_HEIGHT}
              stroke={t.panelBorder}
              strokeWidth={0.5}
              opacity={0.45}
            />
            <text
              x={xScale(tick)}
              y={MARGIN.top + PLOT_HEIGHT + 14}
              textAnchor="middle"
              fill={t.muted}
              fontSize={8}
              fontFamily="inherit"
            >
              {tick === 0 ? "C" : tick < 0 ? `T${Math.abs(tick) * 100}` : `B${tick * 100}`}
            </text>
          </g>
        ))}
        {tangentialPaths.map((path, index) => (
          <path key={`t-${index}`} d={path} fill="none" stroke={t.value} strokeWidth={1.6} />
        ))}
        {sagittalPaths.map((path, index) => (
          <path
            key={`s-${index}`}
            d={path}
            fill="none"
            stroke={t.pupilEntrance}
            strokeWidth={1.6}
            strokeDasharray="5,3"
          />
        ))}
        {analysis.samples.map((sample) => (
          <FieldMarkers
            key={`${sample.requestedSensorUv.u}:${sample.requestedSensorUv.v}`}
            sample={sample}
            xScale={xScale}
            yScale={yScale}
            t={t}
          />
        ))}
        <text x={MARGIN.left + 4} y={11} fill={t.value} fontSize={8} fontFamily="inherit">
          T solid
        </text>
        <text x={MARGIN.left + 56} y={11} fill={t.pupilEntrance} fontSize={8} fontFamily="inherit">
          S dashed
        </text>
        <text
          x={MARGIN.left + PLOT_WIDTH / 2}
          y={HEIGHT - 5}
          textAnchor="middle"
          fill={t.muted}
          fontSize={8.5}
          fontFamily="inherit"
        >
          Fixed sensor position · T top / C center / B bottom
        </text>
      </svg>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <AnalysisMetricRow
          label="Fields"
          value={`${analysis.usableSampleCount}/${analysis.samples.length}`}
          note="signed sensor positions"
          t={t}
        />
        <AnalysisMetricRow
          label="Center T / S"
          value={`${formatSignedMm(center?.tangential.bestFocus?.normalOffsetMm)} / ${formatSignedMm(center?.sagittal.bestFocus?.normalOffsetMm)}`}
          t={t}
        />
        <AnalysisMetricRow label="Max T-S split" value={formatSignedUm(analysis.maxAbsAstigmaticDifferenceMm)} t={t} />
      </div>

      <div style={{ display: "grid", gap: 5 }} aria-label="Fixed-sensor field focus samples">
        {analysis.samples.map((sample) => (
          <div
            key={`${sample.requestedSensorUv.u}:${sample.requestedSensorUv.v}`}
            data-perspective-field-v={sample.requestedSensorUv.v}
            data-perspective-status={sample.status}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(86px, 1fr) minmax(150px, 2fr)",
              gap: 10,
              alignItems: "baseline",
              padding: "5px 7px",
              border: `1px solid ${t.panelDivider}`,
              borderRadius: 4,
              background: t.panelBg,
            }}
          >
            <span style={{ color: t.label, fontSize: 9.5 }}>{perspectiveFieldLabel(sample.requestedSensorUv)}</span>
            {sample.tangential.bestFocus && sample.sagittal.bestFocus ? (
              <span style={{ color: t.value, fontSize: 9, fontVariantNumeric: "tabular-nums" }}>
                T {formatSignedMm(sample.tangential.bestFocus.normalOffsetMm)} · S{" "}
                {formatSignedMm(sample.sagittal.bestFocus.normalOffsetMm)} · T-S{" "}
                {formatSignedUm(sample.astigmaticDifferenceMm)}
              </span>
            ) : (
              <PerspectiveUnavailable status={sample.status} t={t} />
            )}
          </div>
        ))}
      </div>
      <span style={{ color: t.muted, fontSize: 8.5 }}>
        Statuses: {analysis.samples.map((sample) => perspectiveStatusLabel(sample.status)).join(" · ")}
      </span>
    </PerspectiveSection>
  );
}

function FieldMarkers({
  sample,
  xScale,
  yScale,
  t,
}: {
  sample: PerspectiveFieldCurvatureSample;
  xScale: (value: number) => number;
  yScale: (value: number) => number;
  t: Theme;
}) {
  const x = xScale(sample.requestedSensorUv.v);
  const tangential = sample.tangential.bestFocus?.normalOffsetMm;
  const sagittal = sample.sagittal.bestFocus?.normalOffsetMm;
  if (tangential === undefined || sagittal === undefined) {
    return (
      <text x={x} y={MARGIN.top + PLOT_HEIGHT - 5} textAnchor="middle" fill={t.muted} fontSize={11}>
        ×
      </text>
    );
  }
  return (
    <g>
      <circle cx={x} cy={yScale(tangential)} r={2.2} fill={t.value} />
      <circle cx={x} cy={yScale(sagittal)} r={2.2} fill={t.panelBg} stroke={t.pupilEntrance} strokeWidth={1.2} />
    </g>
  );
}

function curveSegments(
  samples: readonly PerspectiveFieldCurvatureSample[],
  value: (sample: PerspectiveFieldCurvatureSample) => number | null | undefined,
  xScale: (value: number) => number,
  yScale: (value: number) => number,
): string[] {
  const segments: string[] = [];
  let points: string[] = [];
  const flush = () => {
    if (points.length > 0) segments.push(points.join(" "));
    points = [];
  };
  for (const sample of samples) {
    const ordinate = value(sample);
    if (ordinate === null || ordinate === undefined || !Number.isFinite(ordinate)) {
      flush();
      continue;
    }
    points.push(
      `${points.length === 0 ? "M" : "L"}${xScale(sample.requestedSensorUv.v).toFixed(1)},${yScale(ordinate).toFixed(1)}`,
    );
  }
  flush();
  return segments;
}

function formatAxisMm(value: number): string {
  if (Math.abs(value) < 1e-9) return "0";
  const abs = Math.abs(value);
  return `${value > 0 ? "+" : "-"}${abs >= 1 ? abs.toFixed(1) : abs.toFixed(2)}`;
}
