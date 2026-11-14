/**
 * MTF against image height, spatial frequency or aperture.
 *
 * Each frequency keeps a fixed color slot, so hiding one never repaints the others. Sagittal
 * curves are solid and tangential (meridional) curves dashed, as on manufacturer charts; direct
 * end labels and marker shapes keep series identifiable without relying on color alone. A
 * crosshair (pointer or arrow keys) reads exact values, and an optional comparison result, such
 * as the lens at f/8, is drawn in the same slots with thin lines.
 */
import { useId, useState, type KeyboardEvent, type PointerEvent, type Ref } from "react";
import type { MtfApertureSample, MtfFieldResult, MtfResult } from "../../../types/mtf.js";
import type { Theme } from "../../../types/theme.js";
import {
  MTF_CHART_FREQUENCIES,
  type MtfChartFrequency,
  type MtfChartView,
  type MtfFrequencyField,
  type MtfPixelPitch,
} from "../../../utils/state/mtfPreferences.js";
import {
  MTF_DIFFRACTION_LIMIT_LABEL,
  MTF_NYQUIST_NOTE,
  mtfFieldStatusLabel,
  mtfNyquistLabel,
  mtfLimitValue,
  mtfStableThroughLabel,
  mtfValueVisible,
  resolveMtfFrequencyField,
} from "./mtf/mtfPresentation.js";
import { formatFNumber } from "../../../optics/optics.js";
import { SvgChartFrame } from "./charts/SvgChartFrame.js";
import { createPlotArea, gapPath, linearScale, niceTicks, type ChartPoint } from "./charts/chartMath.js";

interface MtfChartProps {
  result: MtfResult;
  view: MtfChartView;
  apertureSamples?: readonly MtfApertureSample[];
  apertureFields?: readonly number[];
  apertureCaption?: string;
  /** Frequencies drawn in the image-height view. */
  frequencies: readonly MtfChartFrequency[];
  t: Theme;
  /** Dim curves that belong to an earlier request while a new one starts. */
  stale?: boolean;
  /** Second result drawn with thin lines in the same color slots, e.g. the lens stopped down to f/8. */
  comparison?: MtfResult | null;
  comparisonLabel?: string;
  /** Explicitly requested numerical estimates; never implied by a plotted line. */
  diagnostic?: boolean;
  /** Include field status and numerical stability in the crosshair readout. */
  advanced?: boolean;
  diffractionLimit?: boolean;
  frequencyField?: MtfFrequencyField;
  pixelPitchUm?: MtfPixelPitch | null;
  /** Export adapters snapshot the rendered SVG and legend without rebuilding chart series. */
  exportRef?: Ref<HTMLElement>;
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
  /** Frequency-view series keep their field because the active sample indexes frequency. */
  field?: MtfFieldResult;
  sampleFields?: Array<MtfFieldResult | undefined>;
  marker?: MarkerShape;
  /** Drawn points; withheld values break the regular line. */
  sagittalPoints: ChartPoint[];
  tangentialPoints: ChartPoint[];
  /** Bridges across pending fields only, kept separate from computed spans. */
  sagittalProvisional?: ChartPoint[];
  tangentialProvisional?: ChartPoint[];
  /** Points beyond the converged band, drawn dimmed. */
  sagittalDim?: ChartPoint[];
  tangentialDim?: ChartPoint[];
}

interface LimitCurvesProps {
  series: readonly Series[];
  xScale: (value: number) => number;
  yScale: (value: number) => number;
  markSamples?: boolean;
}

interface ProvisionalCurvesProps extends Omit<LimitCurvesProps, "series"> {
  series: Series;
  strokeWidth: number;
}

export default function MtfChart({
  result,
  view,
  frequencies,
  apertureSamples = [],
  apertureFields = [],
  apertureCaption,
  t,
  stale = false,
  comparison = null,
  comparisonLabel = "Comparison",
  diagnostic = false,
  advanced = false,
  diffractionLimit = false,
  frequencyField = "overview",
  pixelPitchUm = null,
  exportRef,
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
  const apertureStart = apertureSamples[0]?.fNumber ?? 1;
  const apertureEnd = apertureSamples.at(-1)?.fNumber ?? apertureStart;
  // Equal distances represent equal exposure stops: x = log2(N).
  const apertureScale = linearScale(
    Math.log2(apertureStart),
    Math.log2(apertureEnd > apertureStart ? apertureEnd : apertureStart * Math.SQRT2),
    plotLeft,
    plotRight,
  );
  const xScale =
    view === "aperture"
      ? (value: number) => apertureScale(Math.log2(value))
      : linearScale(0, maxX, plotLeft, plotRight);
  const yScale = linearScale(0, 1, plotBottom, plotTop);
  const selectedField = resolveMtfFrequencyField(result, frequencyField);
  const buildSeries = (source: MtfResult, limit = false) =>
    view === "frequency"
      ? frequencySeries(sortedFields(source), source, t, diagnostic, selectedField, limit)
      : fieldSeries(sortedFields(source), source, frequencies, t, diagnostic, limit);
  const series =
    view === "aperture"
      ? apertureSeries(apertureSamples, apertureFields, frequencies, t, diagnostic, false)
      : buildSeries(result);
  const compared = view !== "aperture" && comparison ? buildSeries(comparison) : [];
  const limits =
    diffractionLimit && result.method === "diffraction"
      ? view === "aperture"
        ? apertureSeries(apertureSamples, apertureFields, frequencies, t, diagnostic, true)
        : buildSeries(result, true)
      : [];
  const comparedLimits =
    view !== "aperture" && diffractionLimit && comparison?.method === "diffraction"
      ? buildSeries(comparison, true)
      : [];
  const nyquist = view === "frequency" && pixelPitchUm !== null ? 500 / pixelPitchUm : null;
  const nyquistLabel = nyquist !== null ? mtfNyquistLabel(pixelPitchUm!) : null;
  // x of every sample the crosshair can visit, aligned with the series value arrays.
  const samples =
    view === "aperture"
      ? apertureSamples.map((sample) => sample.fNumber)
      : view === "frequency"
        ? result.frequenciesPerMm
        : fields.map((f) => fieldHeight(f));
  const edge = view === "field" ? result.geometry?.modeledEdgeHeightMm : undefined;
  const hatched = edge !== undefined && edge < maxX - 1e-6;
  const marked = view !== "field" || fields.length <= MAX_MARKED_FIELDS;
  const pending =
    fields.some((field) => field.status === "pending") ||
    comparison?.fields.some((field) => field.status === "pending");
  const labels = view === "field" ? endLabels(series, xScale, yScale, plotTop, plotBottom) : [];
  const activeX = active !== null ? samples[active] : null;
  const onPointer = (event: PointerEvent<HTMLDivElement>) => {
    const svg = event.currentTarget.querySelector("svg");
    const rect = svg?.getBoundingClientRect();
    if (!rect || !(rect.width > 0)) return;
    const x = (((event.clientX - rect.left) * area.width) / rect.width - plotLeft) / (plotRight - plotLeft);
    const target = view === "aperture" ? plotLeft + x * (plotRight - plotLeft) : x * maxX;
    let best: number | null = null;
    samples.forEach((sample, i) => {
      if (sample === null) return;
      const distance = (value: number) => Math.abs((view === "aperture" ? xScale(value) : value) - target);
      if (best === null || distance(sample) < distance(samples[best]!)) best = i;
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
      ref={exportRef}
      style={{ margin: "12px 0" }}
      aria-label={`Simulated MTF versus ${view === "aperture" ? "aperture" : view === "frequency" ? "spatial frequency" : "image height"}`}
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
          xTicks={view === "aperture" ? apertureSamples.map((sample) => sample.fNumber) : niceTicks(0, maxX, 5)}
          yTicks={[0, 0.2, 0.4, 0.6, 0.8, 1]}
          xScale={xScale}
          yScale={yScale}
          xTickLabel={(v) => (view === "aperture" ? formatFNumber(v) : Number.isInteger(v) ? String(v) : v.toFixed(1))}
          yTickLabel={(v) => v.toFixed(1)}
          xLabel={
            view === "aperture" ? "f-number" : view === "frequency" ? "Spatial frequency (lp/mm)" : "Image height (mm)"
          }
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
                <title>{`Outside the model: beyond ${edge.toFixed(1)} mm its clear apertures pass no light, or no chief ray to place it by.`}</title>
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
          {nyquist !== null ? (
            <g aria-hidden="true" data-testid="mtf-nyquist">
              {nyquist <= maxX ? (
                <line
                  x1={xScale(nyquist)}
                  x2={xScale(nyquist)}
                  y1={plotTop}
                  y2={plotBottom}
                  stroke={t.muted}
                  strokeWidth={1}
                  strokeDasharray="3,3"
                />
              ) : null}
              <text
                x={xScale(Math.min(nyquist, maxX))}
                y={plotTop + 10}
                textAnchor="end"
                fill={t.muted}
                fontSize={8}
                fontFamily="inherit"
              >
                {`${nyquistLabel}${nyquist > maxX ? " →" : ""}`}
              </text>
            </g>
          ) : null}
          <g opacity={stale ? 0.45 : 1}>
            {limits.length ? (
              <LimitCurves series={limits} xScale={xScale} yScale={yScale} markSamples={view === "aperture"} />
            ) : null}
            {comparedLimits.length ? (
              <g opacity={COMPARISON_OPACITY}>
                <LimitCurves series={comparedLimits} xScale={xScale} yScale={yScale} />
              </g>
            ) : null}
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
                <ProvisionalCurves series={s} xScale={xScale} yScale={yScale} strokeWidth={1.1} />
                {s.sagittalDim ? (
                  <g opacity={DIM_OPACITY}>
                    <path d={gapPath(s.sagittalDim, xScale, yScale)} fill="none" stroke={s.color} strokeWidth={1.1} />
                    <path
                      d={gapPath(s.tangentialDim ?? [], xScale, yScale)}
                      fill="none"
                      stroke={s.color}
                      strokeWidth={1.1}
                      strokeDasharray={TANGENTIAL_DASH}
                    />
                  </g>
                ) : null}
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
                <ProvisionalCurves series={s} xScale={xScale} yScale={yScale} strokeWidth={2} />
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
                {view !== "field" && s.marker ? (
                  <g
                    data-testid={view === "aperture" ? "mtf-aperture-markers" : "mtf-frequency-markers"}
                    data-field={s.key}
                  >
                    {[s.sagittalPoints, s.tangentialPoints, s.sagittalDim ?? [], s.tangentialDim ?? []].map(
                      (points, axis) => (
                        <g key={axis} opacity={axis >= 2 ? DIM_OPACITY : 1}>
                          {(view === "aperture"
                            ? points.filter((point): point is NonNullable<ChartPoint> => !!point)
                            : frequencyMarkerPoints(points)
                          ).map((point, i) => (
                            <Marker
                              key={i}
                              shape={s.marker!}
                              x={xScale(point.x)}
                              y={yScale(point.y)}
                              color={s.color}
                              ring={t.panelBg}
                            />
                          ))}
                        </g>
                      ),
                    )}
                  </g>
                ) : null}
                {view === "field" && marked && s.marker
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
                  return typeof value === "number" ? (
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
          ? readout(
              view,
              samples[active],
              active,
              series,
              compared,
              comparisonLabel,
              fields[active],
              view === "field" && comparison ? fieldHeight(sortedFields(comparison)[active]) : null,
              diagnostic,
              limits,
              comparedLimits,
              advanced,
            )
          : null}
      </div>
      <figcaption style={{ color: t.muted, fontSize: 11, display: "flex", flexWrap: "wrap", gap: "4px 12px" }}>
        {view === "aperture" && apertureCaption ? <span>{apertureCaption}</span> : null}
        {series.map((s) => (
          <LegendItem
            key={s.key}
            t={t}
            color={s.color}
            marker={marked ? s.marker : undefined}
            label={view !== "field" ? `${s.label} (${s.marker} markers)` : s.label}
          />
        ))}
        <LegendItem t={t} color={t.value} label="Sagittal" />
        <LegendItem t={t} color={t.value} dash={TANGENTIAL_DASH} label="Tangential (meridional)" />
        {view !== "aperture" && comparison ? (
          <LegendItem t={t} color={t.value} thin label={`${comparisonLabel} (thin lines)`} />
        ) : null}
        {limits.length || comparedLimits.length ? (
          <>
            <span>{MTF_DIFFRACTION_LIMIT_LABEL}</span>
            <LegendItem t={t} color={t.muted} thin dash="1,3" label="Limit S (dotted)" />
            <LegendItem t={t} color={t.muted} thin dash="5,3,1,3" label="Limit T (dash-dot)" />
          </>
        ) : null}
        {nyquistLabel ? (
          <span role="status">{`${nyquistLabel}${nyquist! > maxX ? " — beyond chart range" : ""}. ${MTF_NYQUIST_NOTE}`}</span>
        ) : null}
        {hatched ? <LegendItem t={t} color={t.muted} hatch label="Outside model" /> : null}
        {view === "frequency" && diagnostic ? <span>Faded: beyond the converged frequency band.</span> : null}
        {view === "field" && pending ? <span>Lighter dotted spans bridge fields still calculating.</span> : null}
        <span>
          {diagnostic
            ? "Diagnostic estimates include unconverged values; they are not reliable performance measurements."
            : "Gaps mark unavailable or unconverged values."}
        </span>
      </figcaption>
    </figure>
  );
}

/** Thin reference strokes retain S/T dash patterns; hollow markers keep isolated aperture samples visible. */
function LimitCurves({ series, xScale, yScale, markSamples = false }: LimitCurvesProps) {
  return (
    <g data-testid="mtf-diffraction-limit" opacity={0.55}>
      {series.map((s) => (
        <g key={s.key}>
          {([false, true] as const).map((dim) => (
            <g key={String(dim)} opacity={dim ? DIM_OPACITY : 1}>
              <path
                d={gapPath((dim ? s.sagittalDim : s.sagittalPoints) ?? [], xScale, yScale)}
                fill="none"
                stroke={s.color}
                strokeWidth={0.9}
                strokeDasharray="1,3"
              />
              <path
                d={gapPath((dim ? s.tangentialDim : s.tangentialPoints) ?? [], xScale, yScale)}
                fill="none"
                stroke={s.color}
                strokeWidth={0.9}
                strokeDasharray="5,3,1,3"
              />
            </g>
          ))}
          {markSamples && s.marker ? (
            <g data-testid="mtf-aperture-limit-markers">
              {[...s.sagittalPoints, ...s.tangentialPoints].map((point, i) =>
                point ? (
                  <Marker
                    key={i}
                    shape={s.marker!}
                    x={xScale(point.x)}
                    y={yScale(point.y)}
                    color={s.color}
                    ring="none"
                    hollow
                  />
                ) : null,
              )}
            </g>
          ) : null}
          <ProvisionalCurves series={s} xScale={xScale} yScale={yScale} strokeWidth={0.9} />
        </g>
      ))}
    </g>
  );
}

/** Pending spans use the same provisional cue for the main aperture, comparison and pupil limit. */
function ProvisionalCurves({ series, xScale, yScale, strokeWidth }: ProvisionalCurvesProps) {
  if (!series.sagittalProvisional?.length && !series.tangentialProvisional?.length) return null;
  return (
    <g data-testid="mtf-provisional" opacity={DIM_OPACITY}>
      {[series.sagittalProvisional, series.tangentialProvisional].map((points, axis) => (
        <path
          key={axis}
          d={gapPath(points ?? [], xScale, yScale)}
          fill="none"
          stroke={series.color}
          strokeWidth={strokeWidth}
          strokeDasharray="1,3"
        />
      ))}
    </g>
  );
}

/** An unavailable value resets the bridge, so it cannot be mistaken for a field still computing. */
function pendingBridges(points: readonly ChartPoint[]): ChartPoint[] {
  const bridges: ChartPoint[] = [];
  let previous: NonNullable<ChartPoint> | null = null;
  let pending = false;
  for (const point of points) {
    if (point === undefined) pending = true;
    else {
      if (point && previous && pending) bridges.push(previous, point, null);
      previous = point;
      pending = false;
    }
  }
  return bridges;
}

/** Sample a few existing values inside each visible frequency band instead of crowding every point. */
function frequencyMarkerPoints(points: readonly ChartPoint[]): NonNullable<ChartPoint>[] {
  const visible = points.filter((point): point is NonNullable<ChartPoint> => !!point);
  if (!visible.length) return [];
  const indices = new Set([0.25, 0.5, 0.75].map((fraction) => Math.round((visible.length - 1) * fraction)));
  return [...indices].map((i) => visible[i]);
}

function sortedFields(result: MtfResult): MtfFieldResult[] {
  return [...result.fields].sort((a, b) => a.fieldFraction - b.fieldFraction);
}

function fieldHeight(field: MtfFieldResult | undefined): number | null {
  return field?.imageHeightMm ?? field?.targetImageHeightMm ?? null;
}

function curveValue(
  field: MtfFieldResult,
  values: readonly number[],
  index: number,
  frequency: number,
  diagnostic: boolean,
): number | null {
  return mtfValueVisible(field, frequency, diagnostic) && index >= 0 ? (values[index] ?? null) : null;
}

/** One series per selected frequency across image height, in fixed color slots. */
function fieldSeries(
  fields: readonly MtfFieldResult[],
  result: MtfResult,
  frequencies: readonly MtfChartFrequency[],
  t: Theme,
  diagnostic: boolean,
  limit: boolean,
): Series[] {
  return MTF_CHART_FREQUENCIES.flatMap((frequency, slot) => {
    const j = result.frequenciesPerMm.indexOf(frequency);
    if (!frequencies.includes(frequency) || j < 0) return [];
    const values = (axis: "sagittal" | "tangential") =>
      fields.map((field) =>
        limit
          ? mtfLimitValue(field, axis, j, frequency, diagnostic)
          : curveValue(field, field[axis], j, frequency, diagnostic),
      );
    const points = (axis: "sagittal" | "tangential") => {
      const curve = values(axis);
      return fields.map((field, i) => fieldPoint(field, curve[i] ?? undefined));
    };
    const sagittalPoints = points("sagittal");
    const tangentialPoints = points("tangential");
    return [
      {
        key: `f${frequency}`,
        label: `${frequency} lp/mm`,
        color: t.chartSeries[slot],
        marker: MARKERS[slot],
        sagittal: values("sagittal"),
        tangential: values("tangential"),
        sagittalPoints: sagittalPoints.map((point) => point ?? null),
        tangentialPoints: tangentialPoints.map((point) => point ?? null),
        sagittalProvisional: pendingBridges(sagittalPoints),
        tangentialProvisional: pendingBridges(tangentialPoints),
      },
    ];
  });
}

/** Undefined reserves a pending field for provisional bridging; null breaks every curve. */
function fieldPoint(field: MtfFieldResult, value: number | undefined): ChartPoint {
  if (field.status === "pending") return undefined;
  const x = fieldHeight(field);
  return field.status === "unavailable" || x === null || value === undefined ? null : { x, y: value };
}

/** One selected field, or the center/half-height/outermost overview, against frequency. */
function frequencySeries(
  fields: readonly MtfFieldResult[],
  result: MtfResult,
  t: Theme,
  diagnostic: boolean,
  selectedField: MtfFrequencyField,
  limit: boolean,
): Series[] {
  const available = fields.filter((f) => f.status === "converged" || f.status === "unconverged");
  const outermost = available.at(-1);
  const chosen: Array<[string, MtfFieldResult | undefined]> =
    typeof selectedField === "number"
      ? [[`${(selectedField * 100).toFixed(0)} %`, fields.find((field) => field.fieldFraction === selectedField)]]
      : [
          ["Center", available.find((f) => f.fieldFraction === 0)],
          ["50 %", available.find((f) => Math.abs(f.fieldFraction - 0.5) < 1e-9)],
          ["Edge", outermost && outermost.fieldFraction > 0.5 ? outermost : undefined],
        ];
  return chosen.flatMap(([name, field], slot) => {
    if (!field) return [];
    const value = (axis: "sagittal" | "tangential", i: number) =>
      limit
        ? mtfLimitValue(field, axis, i, result.frequenciesPerMm[i], diagnostic)
        : curveValue(field, field[axis], i, result.frequenciesPerMm[i], diagnostic);
    const through = field.convergedThroughLpMm ?? -Infinity;
    const split = (axis: "sagittal" | "tangential", dim: boolean) =>
      result.frequenciesPerMm.map((x, i) => {
        const inBand = x <= through;
        // Adjacent segments share the boundary point so the curve stays continuous.
        const keep = dim ? diagnostic && (!inBand || result.frequenciesPerMm[i + 1] > through) : inBand;
        const y = value(axis, i);
        return keep && y !== null ? { x, y } : null;
      });
    const height = field.imageHeightMm !== null ? ` · ${field.imageHeightMm.toFixed(1)} mm` : "";
    return [
      {
        key: name,
        label: `${name}${height}`,
        color: t.chartSeries[slot],
        field,
        marker: MARKERS[slot],
        sagittal: result.frequenciesPerMm.map((_, i) => value("sagittal", i)),
        tangential: result.frequenciesPerMm.map((_, i) => value("tangential", i)),
        sagittalPoints: split("sagittal", false),
        tangentialPoints: split("tangential", false),
        sagittalDim: split("sagittal", true),
        tangentialDim: split("tangential", true),
      },
    ];
  });
}

/** Fixed frequency colors and field shapes identify every pair throughout the aperture sweep. */
function apertureSeries(
  samples: readonly MtfApertureSample[],
  fields: readonly number[],
  frequencies: readonly MtfChartFrequency[],
  t: Theme,
  diagnostic: boolean,
  limit: boolean,
): Series[] {
  return MTF_CHART_FREQUENCIES.flatMap((frequency, slot) => {
    if (!frequencies.includes(frequency)) return [];
    return fields.map((fraction, fieldSlot) => {
      const sampleFields = samples.map(({ result }) =>
        result?.fields.find((field) => field.fieldFraction === fraction),
      );
      const values = (axis: "sagittal" | "tangential") =>
        samples.map(({ result }, i) => {
          const field = sampleFields[i];
          const index = result?.frequenciesPerMm.indexOf(frequency) ?? -1;
          if (!field || index < 0) return null;
          return limit
            ? result?.method === "diffraction"
              ? mtfLimitValue(field, axis, index, frequency, diagnostic)
              : null
            : curveValue(field, field[axis], index, frequency, diagnostic);
        });
      const sagittal = values("sagittal");
      const tangential = values("tangential");
      const points = (curve: Array<number | null>) =>
        curve.map((y, i) => (y === null ? null : { x: samples[i].fNumber, y }));
      return {
        key: `${frequency}/${fraction}`,
        label: `${frequency} lp/mm · ${fraction === 0 ? "Center" : `${(fraction * 100).toFixed(0)} %`}`,
        color: t.chartSeries[slot],
        marker: MARKERS[fieldSlot % MARKERS.length],
        sampleFields,
        sagittal,
        tangential,
        sagittalPoints: points(sagittal),
        tangentialPoints: points(tangential),
      };
    });
  });
}

/** Crosshair text: every series' sagittal and tangential values at one sample. */
function readout(
  view: MtfChartView,
  x: number | null | undefined,
  index: number,
  series: readonly Series[],
  compared: readonly Series[],
  comparisonLabel: string,
  field: MtfFieldResult | undefined,
  comparisonHeight: number | null,
  diagnostic: boolean,
  limits: readonly Series[],
  comparedLimits: readonly Series[],
  advanced: boolean,
): string {
  if (typeof x !== "number" || !Number.isFinite(x)) return "";
  const at = view === "aperture" ? `f/${formatFNumber(x)}` : view === "frequency" ? `${x} lp/mm` : `${x.toFixed(2)} mm`;
  const detail = (field: MtfFieldResult | undefined) =>
    advanced && field ? ` (${mtfFieldStatusLabel(field)}; stable through: ${mtfStableThroughLabel(field)})` : "";
  const fieldDetail = view === "field" ? detail(field) : "";
  if (view === "field" && field && field.status !== "converged" && field.status !== "unconverged")
    return `${at}${fieldDetail}: ${field.status === "pending" ? "still calculating" : field.message}`;
  const format = (s: Series, status = "") => {
    const sagittal = s.sagittal[index];
    const tangential = s.tangential[index];
    return typeof sagittal !== "number" || typeof tangential !== "number"
      ? `${s.label}${status} —`
      : `${s.label}${status} S ${sagittal.toFixed(3)} T ${tangential.toFixed(3)}`;
  };
  const main = series
    .map((s) =>
      format(s, view === "aperture" ? detail(s.sampleFields?.[index]) : view === "frequency" ? detail(s.field) : ""),
    )
    .join(" · ");
  const comparisonPosition =
    view === "field" ? ` at ${comparisonHeight === null ? "unknown height" : `${comparisonHeight.toFixed(2)} mm`}` : "";
  const extra = compared.length
    ? ` · ${comparisonLabel}${comparisonPosition}: ${compared.map((s) => format(s)).join(" · ")}`
    : "";
  const reference = limits.length ? ` · Diffraction limit: ${limits.map((s) => format(s)).join(" · ")}` : "";
  const comparisonReference = comparedLimits.length
    ? ` · ${comparisonLabel} diffraction limit: ${comparedLimits.map((s) => format(s)).join(" · ")}`
    : "";
  const status = fieldDetail || (view === "field" && field?.status === "unconverged" ? " (unconverged)" : "");
  return `${at}${status}${diagnostic ? " — diagnostic estimates" : ""} — ${main}${extra}${reference}${comparisonReference}`;
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
  hollow = false,
}: {
  shape: MarkerShape;
  x: number;
  y: number;
  color: string;
  ring: string;
  hollow?: boolean;
}) {
  const common = { fill: hollow ? "none" : color, stroke: hollow ? color : ring, strokeWidth: hollow ? 0.9 : 1 };
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
          strokeWidth={hollow ? 0.9 : 1.6}
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
      <span>{label}</span>
    </span>
  );
}
