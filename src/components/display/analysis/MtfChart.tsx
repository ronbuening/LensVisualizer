/**
 * MTF against image height or spatial frequency.
 *
 * Each frequency keeps a fixed colour slot, so hiding one never repaints the others. Sagittal
 * curves are solid and tangential (meridional) curves dashed, as on manufacturer charts; direct
 * end labels and marker shapes keep series identifiable without relying on colour alone.
 */
import { useId } from "react";
import type { MtfFieldResult, MtfResult } from "../../../types/mtf.js";
import type { Theme } from "../../../types/theme.js";
import {
  MTF_CHART_FREQUENCIES,
  type MtfChartFrequency,
  type MtfChartView,
} from "../../../utils/state/mtfPreferences.js";
import { SvgChartFrame } from "./charts/SvgChartFrame.js";
import { createPlotArea, gapPath, linearScale, niceTicks, type ChartPoint } from "./charts/chartMath.js";

interface MtfChartProps {
  result: MtfResult;
  view: MtfChartView;
  /** Frequencies drawn in the image-height view. */
  frequencies: readonly MtfChartFrequency[];
  t: Theme;
  /** Dim curves that belong to an earlier request while a new one starts. */
  stale?: boolean;
}

type MarkerShape = "circle" | "square" | "triangle" | "diamond" | "cross";
const MARKERS: readonly MarkerShape[] = ["circle", "square", "triangle", "diamond", "cross"];
/** Markers stay readable up to this many fields (5 % steps). */
const MAX_MARKED_FIELDS = 21;
const TANGENTIAL_DASH = "5,3";
const DIM_OPACITY = 0.35;

interface Series {
  key: string;
  label: string;
  color: string;
  marker?: MarkerShape;
  sagittal: ChartPoint[];
  tangential: ChartPoint[];
  /** Points beyond the converged band, drawn dimmed. */
  sagittalDim?: ChartPoint[];
  tangentialDim?: ChartPoint[];
}

export default function MtfChart({ result, view, frequencies, t, stale = false }: MtfChartProps) {
  // useId output contains characters that are not valid in url(#…) references.
  const patternId = `mtf-hatch-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const area = createPlotArea(380, 245, { top: 16, right: 30, bottom: 36, left: 40 });
  const plotLeft = area.margin.left;
  const plotRight = plotLeft + area.plotW;
  const plotTop = area.margin.top;
  const plotBottom = plotTop + area.plotH;
  const fields = [...result.fields].sort((a, b) => a.fieldFraction - b.fieldFraction);
  const reference = result.geometry?.referenceHeightMm;
  const maxX =
    view === "frequency"
      ? Math.max(1, ...result.frequenciesPerMm)
      : (reference ?? Math.max(0.01, ...fields.map((f) => f.imageHeightMm ?? f.targetImageHeightMm ?? 0)));
  const xScale = linearScale(0, maxX, plotLeft, plotRight);
  const yScale = linearScale(0, 1, plotBottom, plotTop);
  const series =
    view === "frequency" ? frequencySeries(fields, result, t) : fieldSeries(fields, result, frequencies, t);
  const edge = view === "field" ? result.geometry?.modeledEdgeHeightMm : undefined;
  const hatched = edge !== undefined && edge < maxX - 1e-6;
  const marked = view === "field" && fields.length <= MAX_MARKED_FIELDS;
  const labels = view === "field" ? endLabels(series, xScale, yScale, plotTop, plotBottom) : [];
  return (
    <figure
      style={{ margin: "12px 0" }}
      aria-label={`Simulated MTF versus ${view === "frequency" ? "spatial frequency" : "image height"}`}
    >
      <SvgChartFrame
        area={area}
        t={t}
        xTicks={niceTicks(0, maxX, 5)}
        yTicks={[0, 0.2, 0.4, 0.6, 0.8, 1]}
        xScale={xScale}
        yScale={yScale}
        xTickLabel={(v) => (Number.isInteger(v) ? String(v) : v.toFixed(1))}
        yTickLabel={(v) => v.toFixed(1)}
        xLabel={view === "frequency" ? "Spatial frequency (lp/mm)" : "Image height (mm)"}
        yLabel="MTF"
      >
        {hatched ? (
          <g>
            <defs>
              <pattern id={patternId} width={6} height={6} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1={0} y1={0} x2={0} y2={6} stroke={t.muted} strokeWidth={1} opacity={0.45} />
              </pattern>
            </defs>
            <rect
              x={xScale(edge)}
              y={plotTop}
              width={plotRight - xScale(edge)}
              height={area.plotH}
              fill={`url(#${patternId})`}
            >
              <title>{`Outside the model: its clear apertures clip the chief ray beyond ${edge.toFixed(1)} mm.`}</title>
            </rect>
            {plotRight - xScale(edge) >= 44 ? (
              <text
                x={(xScale(edge) + plotRight) / 2}
                y={plotTop + 10}
                textAnchor="middle"
                fill={t.muted}
                fontSize={7.5}
                fontFamily="inherit"
              >
                Outside model
              </text>
            ) : null}
          </g>
        ) : null}
        <g opacity={stale ? 0.45 : 1}>
          {series.map((s) => (
            <g key={s.key}>
              <path d={gapPath(s.sagittal, xScale, yScale)} fill="none" stroke={s.color} strokeWidth={2} />
              <path
                d={gapPath(s.tangential, xScale, yScale)}
                fill="none"
                stroke={s.color}
                strokeWidth={2}
                strokeDasharray={TANGENTIAL_DASH}
              />
              {s.sagittalDim ? (
                <g opacity={DIM_OPACITY}>
                  <path d={gapPath(s.sagittalDim, xScale, yScale)} fill="none" stroke={s.color} strokeWidth={2} />
                  <path
                    d={gapPath(s.tangentialDim ?? [], xScale, yScale)}
                    fill="none"
                    stroke={s.color}
                    strokeWidth={2}
                    strokeDasharray={TANGENTIAL_DASH}
                  />
                </g>
              ) : null}
              {marked && s.marker
                ? [...s.sagittal, ...s.tangential].map((point, i) =>
                    point ? (
                      <Marker
                        key={i}
                        shape={s.marker!}
                        x={xScale(point.x)}
                        y={yScale(point.y)}
                        color={s.color}
                        ring={t.panelBg}
                      />
                    ) : null,
                  )
                : null}
            </g>
          ))}
          {labels.map((label) => (
            <text
              key={label.key}
              x={label.x}
              y={label.y}
              dominantBaseline="central"
              fill={t.value}
              fontSize={8}
              fontFamily="inherit"
            >
              {label.text}
            </text>
          ))}
        </g>
      </SvgChartFrame>
      <figcaption style={{ color: t.muted, fontSize: 11, display: "flex", flexWrap: "wrap", gap: "4px 12px" }}>
        {series.map((s) => (
          <LegendItem key={s.key} t={t} color={s.color} marker={marked ? s.marker : undefined} label={s.label} />
        ))}
        <LegendItem t={t} color={t.value} label="Sagittal" />
        <LegendItem t={t} color={t.value} dash={TANGENTIAL_DASH} label="Tangential (meridional)" />
        {hatched ? <LegendItem t={t} color={t.muted} hatch label="Outside model" /> : null}
        {view === "frequency" ? <span>Faded: beyond the converged frequency band.</span> : null}
        <span>Gaps mark unavailable fields.</span>
      </figcaption>
    </figure>
  );
}

/** One series per selected frequency across image height, in fixed colour slots. */
function fieldSeries(
  fields: readonly MtfFieldResult[],
  result: MtfResult,
  frequencies: readonly MtfChartFrequency[],
  t: Theme,
): Series[] {
  return MTF_CHART_FREQUENCIES.flatMap((frequency, slot) => {
    const j = result.frequenciesPerMm.indexOf(frequency);
    if (!frequencies.includes(frequency) || j < 0) return [];
    const points = (axis: "sagittal" | "tangential") => fields.map((field) => fieldPoint(field, field[axis][j]));
    return [
      {
        key: `f${frequency}`,
        label: `${frequency} lp/mm`,
        color: t.chartSeries[slot],
        marker: MARKERS[slot],
        sagittal: points("sagittal"),
        tangential: points("tangential"),
      },
    ];
  });
}

/** A pending field is skipped so the line connects over it; an unavailable field breaks the line. */
function fieldPoint(field: MtfFieldResult, value: number | undefined): ChartPoint {
  if (field.status === "pending") return undefined;
  const x = field.imageHeightMm ?? field.targetImageHeightMm;
  return field.status === "unavailable" || x === null || value === undefined ? null : { x, y: value };
}

/** Centre, half height and outermost available field against frequency. */
function frequencySeries(fields: readonly MtfFieldResult[], result: MtfResult, t: Theme): Series[] {
  const available = fields.filter((f) => f.status === "converged" || f.status === "unconverged");
  const outermost = available.at(-1);
  const chosen: Array<[string, MtfFieldResult | undefined]> = [
    ["Centre", available.find((f) => f.fieldFraction === 0)],
    ["50 %", available.find((f) => Math.abs(f.fieldFraction - 0.5) < 1e-9)],
    ["Edge", outermost && outermost.fieldFraction > 0.5 ? outermost : undefined],
  ];
  return chosen.flatMap(([name, field], slot) => {
    if (!field) return [];
    const through = field.convergedThroughLpMm ?? Infinity;
    const split = (axis: "sagittal" | "tangential", dim: boolean) =>
      result.frequenciesPerMm.map((x, i) => {
        const inBand = x <= through;
        // Adjacent segments share the boundary point so the curve stays continuous.
        const keep = dim ? !inBand || result.frequenciesPerMm[i + 1] > through : inBand;
        return keep ? { x, y: field[axis][i] } : null;
      });
    const height = field.imageHeightMm !== null ? ` · ${field.imageHeightMm.toFixed(1)} mm` : "";
    return [
      {
        key: name,
        label: `${name}${height}`,
        color: t.chartSeries[slot],
        sagittal: split("sagittal", false),
        tangential: split("tangential", false),
        sagittalDim: split("sagittal", true),
        tangentialDim: split("tangential", true),
      },
    ];
  });
}

/** Frequency labels at the end of each sagittal curve, nudged apart so they never overlap. */
function endLabels(
  series: readonly Series[],
  xScale: (v: number) => number,
  yScale: (v: number) => number,
  top: number,
  bottom: number,
) {
  const labels = series.flatMap((s) => {
    const last = [...s.sagittal].reverse().find((p): p is { x: number; y: number } => !!p);
    return last ? [{ key: s.key, text: s.label.split(" ")[0], x: xScale(last.x) + 5, y: yScale(last.y) }] : [];
  });
  labels.sort((a, b) => a.y - b.y);
  for (let i = 1; i < labels.length; i++) labels[i].y = Math.max(labels[i].y, labels[i - 1].y + 9);
  const overflow = (labels.at(-1)?.y ?? 0) - bottom;
  if (overflow > 0) labels.forEach((label) => (label.y = Math.max(top, label.y - overflow)));
  return labels;
}

function Marker({
  shape,
  x,
  y,
  color,
  ring,
}: {
  shape: MarkerShape;
  x: number;
  y: number;
  color: string;
  ring: string;
}) {
  const common = { fill: color, stroke: ring, strokeWidth: 1 };
  switch (shape) {
    case "circle":
      return <circle cx={x} cy={y} r={2.8} {...common} />;
    case "square":
      return <rect x={x - 2.5} y={y - 2.5} width={5} height={5} {...common} />;
    case "triangle":
      return <path d={`M${x},${y - 3.2}L${x + 3},${y + 2.2}L${x - 3},${y + 2.2}Z`} {...common} />;
    case "diamond":
      return <path d={`M${x},${y - 3.4}L${x + 3.4},${y}L${x},${y + 3.4}L${x - 3.4},${y}Z`} {...common} />;
    case "cross":
      return (
        <path
          d={`M${x - 2.8},${y - 2.8}L${x + 2.8},${y + 2.8}M${x - 2.8},${y + 2.8}L${x + 2.8},${y - 2.8}`}
          stroke={color}
          strokeWidth={1.6}
        />
      );
  }
}

function LegendItem({
  t,
  color,
  label,
  dash,
  marker,
  hatch = false,
}: {
  t: Theme;
  color: string;
  label: string;
  dash?: string;
  marker?: MarkerShape;
  hatch?: boolean;
}) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: t.muted }}>
      <svg width={20} height={10} aria-hidden="true">
        {hatch ? (
          <g stroke={color} strokeWidth={1} opacity={0.6}>
            <line x1={2} y1={10} x2={10} y2={0} />
            <line x1={8} y1={10} x2={16} y2={0} />
            <line x1={14} y1={10} x2={20} y2={2} />
          </g>
        ) : (
          <line x1={1} y1={5} x2={19} y2={5} stroke={color} strokeWidth={2} strokeDasharray={dash} />
        )}
        {marker ? <Marker shape={marker} x={10} y={5} color={color} ring={t.panelBg} /> : null}
      </svg>
      {label}
    </span>
  );
}
