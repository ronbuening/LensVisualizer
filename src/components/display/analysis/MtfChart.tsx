/**
 * MTF against image height or spatial frequency.
 *
 * Each frequency keeps a fixed color slot, so hiding one never repaints the others. Sagittal
 * curves are solid and tangential (meridional) curves dashed, as on manufacturer charts; direct
 * end labels and marker shapes keep series identifiable without relying on color alone. A
 * crosshair (pointer or arrow keys) reads exact values, and an optional comparison result, such
 * as the lens at f/8, is drawn in the same slots with thin lines.
 */
import { useId, useState, type KeyboardEvent, type PointerEvent } from "react";
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
  /** Second result drawn with thin lines in the same color slots, e.g. the lens stopped down to f/8. */
  comparison?: MtfResult | null;
  comparisonLabel?: string;
}

type MarkerShape = "circle" | "square" | "triangle" | "diamond" | "cross";
const MARKERS: readonly MarkerShape[] = ["circle", "square", "triangle", "diamond", "cross"];
/** Markers stay readable up to this many fields (5 % steps). */
const MAX_MARKED_FIELDS = 21;
const TANGENTIAL_DASH = "5,3";
const DIM_OPACITY = 0.35;
const COMPARISON_OPACITY = 0.6;

/** Values of one series at every x sample; null where the field or frequency has no value. */
interface SeriesValues {
  sagittal: Array<number | null>;
  tangential: Array<number | null>;
}

interface Series extends SeriesValues {
  key: string;
  label: string;
  color: string;
  marker?: MarkerShape;
  /** Drawn points; `undefined` connects across pending fields, `null` breaks the line. */
  sagittalPoints: ChartPoint[];
  tangentialPoints: ChartPoint[];
  /** Points beyond the converged band, drawn dimmed. */
  sagittalDim?: ChartPoint[];
  tangentialDim?: ChartPoint[];
}

export default function MtfChart({
  result,
  view,
  frequencies,
  t,
  stale = false,
  comparison = null,
  comparisonLabel = "Comparison",
}: MtfChartProps) {
  // useId output contains characters that are not valid in url(#…) references.
  const patternId = `mtf-hatch-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const [active, setActive] = useState<number | null>(null);
  const area = createPlotArea(380, 245, { top: 16, right: 30, bottom: 36, left: 40 });
  const plotLeft = area.margin.left;
  const plotRight = plotLeft + area.plotW;
  const plotTop = area.margin.top;
  const plotBottom = plotTop + area.plotH;
  const fields = sortedFields(result);
  const reference = result.geometry?.referenceHeightMm;
  const maxX =
    view === "frequency"
      ? Math.max(1, ...result.frequenciesPerMm)
      : (reference ?? Math.max(0.01, ...fields.map((f) => fieldHeight(f) ?? 0)));
  const xScale = linearScale(0, maxX, plotLeft, plotRight);
  const yScale = linearScale(0, 1, plotBottom, plotTop);
  const buildSeries = (source: MtfResult) =>
    view === "frequency"
      ? frequencySeries(sortedFields(source), source, t)
      : fieldSeries(sortedFields(source), source, frequencies, t);
  const series = buildSeries(result);
  const compared = comparison ? buildSeries(comparison) : [];
  // x of every sample the crosshair can visit, aligned with the series value arrays.
  const samples = view === "frequency" ? result.frequenciesPerMm : fields.map((f) => fieldHeight(f));
  const edge = view === "field" ? result.geometry?.modeledEdgeHeightMm : undefined;
  const hatched = edge !== undefined && edge < maxX - 1e-6;
  const marked = view === "field" && fields.length <= MAX_MARKED_FIELDS;
  const labels = view === "field" ? endLabels(series, xScale, yScale, plotTop, plotBottom) : [];
  const activeX = active !== null ? samples[active] : null;
  const onPointer = (event: PointerEvent<HTMLDivElement>) => {
    const svg = event.currentTarget.querySelector("svg");
    const rect = svg?.getBoundingClientRect();
    if (!rect || !(rect.width > 0)) return;
    const x = (((event.clientX - rect.left) * area.width) / rect.width - plotLeft) / (plotRight - plotLeft);
    const target = x * maxX;
    let best: number | null = null;
    samples.forEach((sample, i) => {
      if (sample === null) return;
      if (best === null || Math.abs(sample - target) < Math.abs(samples[best]! - target)) best = i;
    });
    setActive(best);
  };
  const onKey = (event: KeyboardEvent<HTMLDivElement>) => {
    // Step through samples that have an x position; Escape hides the crosshair.
    const valid = samples.flatMap((x, i) => (x !== null ? [i] : []));
    const position = active === null ? -1 : valid.indexOf(active);
    const last = valid.length - 1;
    const step = ({ ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 } as Record<string, number>)[event.key];
    if (step !== undefined && last >= 0)
      setActive(valid[position < 0 ? (step > 0 ? 0 : last) : Math.min(last, Math.max(0, position + step))]);
    else if (event.key === "Home" && last >= 0) setActive(valid[0]);
    else if (event.key === "End" && last >= 0) setActive(valid[last]);
    else if (event.key === "Escape") setActive(null);
    else return;
    event.preventDefault();
  };
  return (
    <figure
      style={{ margin: "12px 0" }}
      aria-label={`Simulated MTF versus ${view === "frequency" ? "spatial frequency" : "image height"}`}
    >
      <div
        tabIndex={0}
        role="group"
        aria-label="MTF chart values: hover, or focus and use the arrow keys"
        onPointerMove={onPointer}
        onPointerLeave={() => setActive(null)}
        onKeyDown={onKey}
        onBlur={() => setActive(null)}
        style={{ outlineOffset: 2, touchAction: "pan-y" }}
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
                <pattern
                  id={patternId}
                  width={6}
                  height={6}
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
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
            {compared.map((s) => (
              <g key={`compare-${s.key}`} opacity={COMPARISON_OPACITY}>
                <path d={gapPath(s.sagittalPoints, xScale, yScale)} fill="none" stroke={s.color} strokeWidth={1.1} />
                <path
                  d={gapPath(s.tangentialPoints, xScale, yScale)}
                  fill="none"
                  stroke={s.color}
                  strokeWidth={1.1}
                  strokeDasharray={TANGENTIAL_DASH}
                />
              </g>
            ))}
            {series.map((s) => (
              <g key={s.key}>
                <path d={gapPath(s.sagittalPoints, xScale, yScale)} fill="none" stroke={s.color} strokeWidth={2} />
                <path
                  d={gapPath(s.tangentialPoints, xScale, yScale)}
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
                  ? [...s.sagittalPoints, ...s.tangentialPoints].map((point, i) =>
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
          {activeX !== null && activeX !== undefined ? (
            <g pointerEvents="none" data-testid="mtf-crosshair">
              <line
                x1={xScale(activeX)}
                y1={plotTop}
                x2={xScale(activeX)}
                y2={plotBottom}
                stroke={t.value}
                strokeWidth={0.8}
                opacity={0.6}
              />
              {series.flatMap((s) =>
                (["sagittal", "tangential"] as const).map((axis) => {
                  const value = s[axis][active!];
                  return value !== null ? (
                    <circle
                      key={`${s.key}-${axis}`}
                      cx={xScale(activeX)}
                      cy={yScale(value)}
                      r={3}
                      fill={axis === "sagittal" ? s.color : t.panelBg}
                      stroke={s.color}
                      strokeWidth={1.4}
                    />
                  ) : null;
                }),
              )}
            </g>
          ) : null}
        </SvgChartFrame>
      </div>
      <div aria-live="polite" style={{ minHeight: 16, color: t.value, fontSize: 11, margin: "2px 0 4px" }}>
        {active !== null
          ? readout(view, samples[active], active, series, compared, comparisonLabel, fields[active])
          : null}
      </div>
      <figcaption style={{ color: t.muted, fontSize: 11, display: "flex", flexWrap: "wrap", gap: "4px 12px" }}>
        {series.map((s) => (
          <LegendItem key={s.key} t={t} color={s.color} marker={marked ? s.marker : undefined} label={s.label} />
        ))}
        <LegendItem t={t} color={t.value} label="Sagittal" />
        <LegendItem t={t} color={t.value} dash={TANGENTIAL_DASH} label="Tangential (meridional)" />
        {comparison ? <LegendItem t={t} color={t.value} thin label={`${comparisonLabel} (thin lines)`} /> : null}
        {hatched ? <LegendItem t={t} color={t.muted} hatch label="Outside model" /> : null}
        {view === "frequency" ? <span>Faded: beyond the converged frequency band.</span> : null}
        <span>Gaps mark unavailable fields.</span>
      </figcaption>
    </figure>
  );
}

function sortedFields(result: MtfResult): MtfFieldResult[] {
  return [...result.fields].sort((a, b) => a.fieldFraction - b.fieldFraction);
}

function fieldHeight(field: MtfFieldResult): number | null {
  return field.imageHeightMm ?? field.targetImageHeightMm;
}

function curveValue(field: MtfFieldResult, values: readonly number[], index: number): number | null {
  return (field.status === "converged" || field.status === "unconverged") && index >= 0
    ? (values[index] ?? null)
    : null;
}

/** One series per selected frequency across image height, in fixed color slots. */
function fieldSeries(
  fields: readonly MtfFieldResult[],
  result: MtfResult,
  frequencies: readonly MtfChartFrequency[],
  t: Theme,
): Series[] {
  return MTF_CHART_FREQUENCIES.flatMap((frequency, slot) => {
    const j = result.frequenciesPerMm.indexOf(frequency);
    if (!frequencies.includes(frequency) || j < 0) return [];
    const values = (axis: "sagittal" | "tangential") => fields.map((field) => curveValue(field, field[axis], j));
    const points = (axis: "sagittal" | "tangential") => fields.map((field) => fieldPoint(field, field[axis][j]));
    return [
      {
        key: `f${frequency}`,
        label: `${frequency} lp/mm`,
        color: t.chartSeries[slot],
        marker: MARKERS[slot],
        sagittal: values("sagittal"),
        tangential: values("tangential"),
        sagittalPoints: points("sagittal"),
        tangentialPoints: points("tangential"),
      },
    ];
  });
}

/** A pending field is skipped so the line connects over it; an unavailable field breaks the line. */
function fieldPoint(field: MtfFieldResult, value: number | undefined): ChartPoint {
  if (field.status === "pending") return undefined;
  const x = fieldHeight(field);
  return field.status === "unavailable" || x === null || value === undefined ? null : { x, y: value };
}

/** Center, half height and outermost available field against frequency. */
function frequencySeries(fields: readonly MtfFieldResult[], result: MtfResult, t: Theme): Series[] {
  const available = fields.filter((f) => f.status === "converged" || f.status === "unconverged");
  const outermost = available.at(-1);
  const chosen: Array<[string, MtfFieldResult | undefined]> = [
    ["Center", available.find((f) => f.fieldFraction === 0)],
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
        sagittal: [...field.sagittal],
        tangential: [...field.tangential],
        sagittalPoints: split("sagittal", false),
        tangentialPoints: split("tangential", false),
        sagittalDim: split("sagittal", true),
        tangentialDim: split("tangential", true),
      },
    ];
  });
}

/** Crosshair text: every series' sagittal and tangential values at one sample. */
function readout(
  view: MtfChartView,
  x: number | null,
  index: number,
  series: readonly Series[],
  compared: readonly Series[],
  comparisonLabel: string,
  field: MtfFieldResult | undefined,
): string {
  if (x === null) return "";
  const at = view === "frequency" ? `${x} lp/mm` : `${x.toFixed(2)} mm`;
  if (view === "field" && field && field.status !== "converged" && field.status !== "unconverged")
    return `${at}: ${field.status === "pending" ? "still calculating" : field.message}`;
  const format = (s: Series) => {
    const sagittal = s.sagittal[index];
    const tangential = s.tangential[index];
    return sagittal === null || tangential === null
      ? `${s.label} —`
      : `${s.label} S ${sagittal.toFixed(3)} T ${tangential.toFixed(3)}`;
  };
  const main = series.map(format).join(" · ");
  const extra = compared.length ? ` · ${comparisonLabel}: ${compared.map(format).join(" · ")}` : "";
  return `${at} — ${main}${extra}`;
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
    const last = [...s.sagittalPoints].reverse().find((p): p is { x: number; y: number } => !!p);
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
  thin = false,
}: {
  t: Theme;
  color: string;
  label: string;
  dash?: string;
  marker?: MarkerShape;
  hatch?: boolean;
  thin?: boolean;
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
          <line
            x1={1}
            y1={5}
            x2={19}
            y2={5}
            stroke={color}
            strokeWidth={thin ? 1.1 : 2}
            strokeDasharray={dash}
            opacity={thin ? COMPARISON_OPACITY : 1}
          />
        )}
        {marker ? <Marker shape={marker} x={10} y={5} color={color} ring={t.panelBg} /> : null}
      </svg>
      {label}
    </span>
  );
}
