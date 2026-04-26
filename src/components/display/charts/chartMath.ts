export interface ChartMargin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface PlotArea {
  width: number;
  height: number;
  margin: ChartMargin;
  plotW: number;
  plotH: number;
}

export const DEFAULT_ANALYSIS_CHART_MARGIN: ChartMargin = { top: 24, right: 20, bottom: 36, left: 48 };

const DEFAULT_NICE_STEPS = [1, 2, 5, 10] as const;

export function createPlotArea(
  width: number,
  height: number,
  margin: ChartMargin = DEFAULT_ANALYSIS_CHART_MARGIN,
): PlotArea {
  return {
    width,
    height,
    margin,
    plotW: width - margin.left - margin.right,
    plotH: height - margin.top - margin.bottom,
  };
}

export function linearScale(domainMin: number, domainMax: number, rangeMin: number, rangeMax: number) {
  const domainSpan = domainMax - domainMin;
  if (Math.abs(domainSpan) < 1e-12 || !isFinite(domainSpan)) {
    const midpoint = (rangeMin + rangeMax) / 2;
    return () => midpoint;
  }
  return (value: number) => rangeMin + ((value - domainMin) / domainSpan) * (rangeMax - rangeMin);
}

export function symmetricDomain(maxAbsValue: number, padding = 1.2, minHalfRange = 0.5): [number, number] {
  const halfRange = Math.max(Math.abs(maxAbsValue) * padding, minHalfRange);
  return [-halfRange, halfRange];
}

export function niceTicks(
  min: number,
  max: number,
  targetCount = 6,
  niceSteps: readonly number[] = DEFAULT_NICE_STEPS,
): number[] {
  if (!isFinite(min) || !isFinite(max) || max < min) return [];
  if (Math.abs(max - min) < 1e-12) return [roundTick(min)];

  const rawStep = (max - min) / Math.max(targetCount, 1);
  const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const step =
    (niceSteps.find((candidate) => candidate * magnitude >= rawStep) ?? niceSteps[niceSteps.length - 1]) * magnitude;

  const ticks: number[] = [];
  const first = Math.ceil(min / step) * step;
  for (let value = first; value <= max + step * 0.01; value += step) {
    const rounded = roundTick(value);
    if (rounded >= min - 1e-9 && rounded <= max + 1e-9) ticks.push(rounded);
  }
  return ticks;
}

export function angleTicks(maxAngle: number, targetCount = 5): number[] {
  if (!isFinite(maxAngle) || maxAngle <= 0) return [0];
  return niceTicks(0, maxAngle, targetCount, DEFAULT_NICE_STEPS).filter((tick) => tick >= 0);
}

export function imageHeightPercentTicks(): number[] {
  return [0, 20, 40, 60, 80, 100];
}

export function svgPath<T>(items: readonly T[], x: (item: T) => number, y: (item: T) => number): string {
  return items.map((item, index) => `${index === 0 ? "M" : "L"}${x(item).toFixed(1)},${y(item).toFixed(1)}`).join(" ");
}

export function svgPoints<T>(items: readonly T[], x: (item: T) => number, y: (item: T) => number): string {
  return items.map((item) => `${x(item).toFixed(1)},${y(item).toFixed(1)}`).join(" ");
}

export function formatCompactTick(value: number): string {
  if (Number.isInteger(value)) return value.toString();
  if (Math.abs(value) >= 1) return value.toFixed(1);
  return value.toFixed(2);
}

export function formatSignedCompactTick(value: number): string {
  if (Math.abs(value) < 1e-12) return "0";
  return `${value > 0 ? "+" : ""}${formatCompactTick(value)}`;
}

export function formatShiftTick(value: number): string {
  if (Math.abs(value) < 1e-12) return "0";
  const abs = Math.abs(value);
  if (abs >= 10) return value.toFixed(0);
  if (abs >= 1) return value.toFixed(1);
  return value.toFixed(2);
}

export function formatUnitIntervalTick(value: number): string {
  if (Math.abs(value) < 1e-12) return "0";
  if (Math.abs(value - 1) < 1e-12) return "1.0";
  return value.toFixed(2);
}

export function roundTick(value: number): number {
  return Math.round(value * 1e6) / 1e6;
}
