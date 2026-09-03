import { useId } from "react";
import type {
  PerspectiveDistortionAnalysis,
  PerspectiveDistortionSample,
} from "../../../../optics/perspective/index.js";
import type { PerspectiveTraceContext } from "../../../../optics/perspective/index.js";
import { dot, subtract } from "../../../../optics/math/vector.js";
import { IMAGE_FORMAT_BY_ID, isImageFormatId } from "../../../../utils/catalog/lensTaxonomy.js";
import type { Theme } from "../../../../types/theme.js";
import { AnalysisMetricRow } from "../analysisUi.js";
import PerspectiveSignedChart from "./PerspectiveSignedChart.js";

interface PerspectiveDistortionViewProps {
  analysis: PerspectiveDistortionAnalysis;
  context: PerspectiveTraceContext;
  t: Theme;
}

/** Fixed-sensor decomposition of composition movement and residual optical distortion. */
export default function PerspectiveDistortionView({ analysis, context, t }: PerspectiveDistortionViewProps) {
  const top = analysis.summary.top;
  const bottom = analysis.summary.bottom;
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "grid", gap: 4 }}>
        <span style={{ fontSize: 10.5, color: t.muted }}>Perspective distortion — fixed sensor</span>
        <span style={{ fontSize: 9, color: t.muted, lineHeight: 1.45 }}>
          Composition is the deliberate shift/keystone mapping from the zero-pose ideal to the posed ideal. Optical
          residual is the exact moved-lens intercept minus that posed ideal; the reference is never fitted to active
          traces.
        </span>
      </div>
      <PerspectiveSignedChart
        title="Perspective distortion residual"
        valueLabel="Vertical displacement (mm)"
        t={t}
        series={[
          {
            label: "Composition",
            color: t.rayCool,
            dashed: true,
            points: analysis.vertical.map((sample) => ({
              v: sample.requestedSensorUv.v,
              value: sample.compositionDisplacement?.vMm ?? null,
              status: sample.status,
            })),
          },
          {
            label: "Optical residual",
            color: t.rayWarm,
            points: analysis.vertical.map((sample) => ({
              v: sample.requestedSensorUv.v,
              value: sample.opticalResidual?.vMm ?? null,
              status: sample.status,
            })),
          },
        ]}
      />
      <PerspectiveDistortionGrid analysis={analysis} context={context} t={t} />
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <AnalysisMetricRow label="Top residual" value={formatSignedMm(top?.opticalResidual?.vMm)} t={t} />
        <AnalysisMetricRow label="Bottom residual" value={formatSignedMm(bottom?.opticalResidual?.vMm)} t={t} />
        <AnalysisMetricRow label="Residual RMS" value={formatMm(analysis.summary.opticalResidual.rmsMm)} t={t} />
        <AnalysisMetricRow label="Residual max" value={formatMm(analysis.summary.opticalResidual.maxMm)} t={t} />
        <AnalysisMetricRow
          label="Coverage"
          value={`${analysis.summary.usableCount}/${analysis.summary.requestedCount}`}
          note="signed samples usable"
          t={t}
        />
      </div>
    </div>
  );
}

function PerspectiveDistortionGrid({ analysis, context, t }: PerspectiveDistortionViewProps) {
  const clipId = `perspective-distortion-${useId().replace(/:/g, "")}`;
  const imageFormat = context.state.lens.source.imageFormat;
  if (!isImageFormatId(imageFormat)) return null;
  const format = IMAGE_FORMAT_BY_ID[imageFormat];
  const width = 420;
  const height = Math.max(150, width * (format.heightMm / format.widthMm));
  const padding = 12;
  const innerWidth = width - 2 * padding;
  const innerHeight = height - 2 * padding;
  const project = (point: readonly [number, number, number]) => {
    const delta = subtract(point, context.sensorPlane.point);
    const uMm = dot(delta, context.sensorBasis.u);
    const vMm = dot(delta, context.sensorBasis.v);
    return [padding + (uMm / format.widthMm + 0.5) * innerWidth, padding + (vMm / format.heightMm + 0.5) * innerHeight];
  };
  const families = [
    { key: "zeroPoseIdeal" as const, label: "Zero-pose ideal", color: t.muted, dash: "3 3" },
    { key: "poseIdeal" as const, label: "Pose ideal / composition", color: t.rayCool, dash: "6 3" },
    { key: "actual" as const, label: "Exact moved lens", color: t.rayWarm, dash: undefined },
  ];
  const columns = analysis.grid.uCoordinates.map((_, column) => analysis.grid.rows.map((row) => row[column]));

  return (
    <div style={{ display: "grid", gap: 5 }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Zero-pose ideal, pose-ideal, and actual distortion grids clipped to the fixed sensor"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <title>Fixed-sensor perspective distortion grid</title>
        <defs>
          <clipPath id={clipId}>
            <rect x={padding} y={padding} width={innerWidth} height={innerHeight} />
          </clipPath>
        </defs>
        <rect
          x={padding}
          y={padding}
          width={innerWidth}
          height={innerHeight}
          fill="none"
          stroke={t.panelDivider}
          strokeWidth={1}
        />
        <g clipPath={`url(#${clipId})`}>
          {families.map((family) => (
            <g key={family.key}>
              {[...analysis.grid.rows, ...columns].map((samples, index) => {
                const segments = contiguousGridSegments(samples, family.key, project);
                return segments.map((points, segmentIndex) => (
                  <polyline
                    key={`${index}:${segmentIndex}`}
                    points={points}
                    fill="none"
                    stroke={family.color}
                    strokeWidth={1.15}
                    strokeDasharray={family.dash}
                    opacity={0.9}
                  />
                ));
              })}
            </g>
          ))}
          {analysis.grid.rows
            .flat()
            .map((sample, index) =>
              sample.status === "usable" ? null : (
                <UnavailableGridMark
                  key={index}
                  sample={sample}
                  width={innerWidth}
                  height={innerHeight}
                  padding={padding}
                  t={t}
                />
              ),
            )}
        </g>
      </svg>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, color: t.muted, fontSize: 8.5 }}>
        {families.map((family) => (
          <span key={family.key} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <span
              aria-hidden="true"
              style={{ width: 13, borderTop: `2px ${family.dash ? "dashed" : "solid"} ${family.color}` }}
            />
            {family.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function contiguousGridSegments(
  samples: readonly PerspectiveDistortionSample[],
  key: "zeroPoseIdeal" | "poseIdeal" | "actual",
  project: (point: readonly [number, number, number]) => number[],
): string[] {
  const segments: string[] = [];
  let current: string[] = [];
  for (const sample of samples) {
    const point = sample[key];
    if (point) {
      current.push(project(point).join(","));
      continue;
    }
    if (current.length > 0) segments.push(current.join(" "));
    current = [];
  }
  if (current.length > 0) segments.push(current.join(" "));
  return segments;
}

function UnavailableGridMark({
  sample,
  width,
  height,
  padding,
  t,
}: {
  sample: PerspectiveDistortionSample;
  width: number;
  height: number;
  padding: number;
  t: Theme;
}) {
  const x = padding + ((sample.requestedSensorUv.u + 1) / 2) * width;
  const y = padding + ((sample.requestedSensorUv.v + 1) / 2) * height;
  return (
    <g aria-label={`Unavailable grid sample: ${sample.status}`}>
      <line x1={x - 3} x2={x + 3} y1={y - 3} y2={y + 3} stroke={t.rayWarm} strokeWidth={1.2} />
      <line x1={x - 3} x2={x + 3} y1={y + 3} y2={y - 3} stroke={t.rayWarm} strokeWidth={1.2} />
    </g>
  );
}

function formatMm(value: number | null | undefined): string {
  return value === null || value === undefined ? "unavailable" : `${Math.abs(value).toFixed(3)} mm`;
}

function formatSignedMm(value: number | null | undefined): string {
  return value === null || value === undefined ? "unavailable" : `${value >= 0 ? "+" : ""}${value.toFixed(3)} mm`;
}
