import type {
  AngleValue,
  CameraSideFeature,
  LensMountSpec,
  LensSideFeature,
  LengthValue,
  MountSvgView,
  ValueEnvelope,
  ValueStatus,
} from "./types.js";

const SVG_NUMERIC_PRECISION = 3;
const KNOWN_NUMBER_STATUSES = new Set<ValueStatus>([
  "official",
  "patent",
  "service_manual",
  "measured",
  "photo_scaled",
  "secondary",
  "conflicting",
]);

export interface Point {
  x: number;
  y: number;
}

export interface ParsedViewBox {
  minX: number;
  minY: number;
  width: number;
  height: number;
}

export type RadialFeature = CameraSideFeature | LensSideFeature;

export function normalizeAngleDeg(angleDeg: number): number {
  const normalized = angleDeg % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

export function mirrorLensRearAngleDeg(angleDeg: number): number {
  return normalizeAngleDeg(360 - normalizeAngleDeg(angleDeg));
}

export function clockwiseSweepDeg(startDeg: number, endDeg: number): number {
  if (startDeg === 0 && endDeg === 360) return 360;
  return normalizeAngleDeg(endDeg - startDeg);
}

export function formatSvgNumber(value: number, precision = SVG_NUMERIC_PRECISION): string {
  const rounded = Number(value.toFixed(precision));
  return Object.is(rounded, -0) ? "0" : String(rounded);
}

export function polarPoint(radiusMm: number, angleDeg: number): Point {
  const radians = (normalizeAngleDeg(angleDeg) * Math.PI) / 180;
  return {
    x: radiusMm * Math.sin(radians),
    y: -radiusMm * Math.cos(radians),
  };
}

export function isKnownNumber(value: ValueEnvelope<number>): value is ValueEnvelope<number> & { value: number } {
  return typeof value.value === "number" && KNOWN_NUMBER_STATUSES.has(value.status);
}

export function isKnownAngle(value: AngleValue): value is AngleValue & { value: number } {
  return isKnownNumber(value);
}

export function lengthOr(value: LengthValue, fallback: number): number {
  return isKnownNumber(value) ? value.value : fallback;
}

export function statusForValue(value: ValueEnvelope<unknown>): ValueStatus {
  return value.status;
}

export function parseViewBox(viewBox: string): ParsedViewBox {
  const [minX, minY, width, height] = viewBox.split(/\s+/).map(Number);
  return { minX, minY, width, height };
}

export function calculateViewBox(points: readonly Point[], marginFraction = 0.1): string {
  const xs = points.map((point) => point.x);
  const ys = points.map((point) => point.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const width = maxX - minX;
  const height = maxY - minY;
  const margin = Math.max(width, height) * marginFraction;
  const expandedMinX = Math.floor(minX - margin);
  const expandedMinY = Math.floor(minY - margin);
  const expandedMaxX = Math.ceil(maxX + margin);
  const expandedMaxY = Math.ceil(maxY + margin);
  return `${expandedMinX} ${expandedMinY} ${expandedMaxX - expandedMinX} ${expandedMaxY - expandedMinY}`;
}

export function viewBoxForDiameter(diameterMm: number, marginFraction = 0.1): string {
  const radius = diameterMm / 2;
  return calculateViewBox(
    [
      { x: -radius, y: -radius },
      { x: radius, y: radius },
    ],
    marginFraction,
  );
}

export function featureSortValue(feature: RadialFeature): number {
  return isKnownAngle(feature.centerAngleDeg)
    ? normalizeAngleDeg(feature.centerAngleDeg.value)
    : Number.POSITIVE_INFINITY;
}

export function sortFeaturesByAngle<T extends RadialFeature>(features: readonly T[]): T[] {
  return [...features].sort(
    (a, b) => featureSortValue(a) - featureSortValue(b) || a.featureId.localeCompare(b.featureId),
  );
}

export function angleForView(angleDeg: number, view: MountSvgView): number {
  return view === "lens_side_rear_view" ? mirrorLensRearAngleDeg(angleDeg) : normalizeAngleDeg(angleDeg);
}

export function featureCenterForView(feature: RadialFeature, view: MountSvgView): number | null {
  if (!isKnownAngle(feature.centerAngleDeg)) return null;
  return angleForView(feature.centerAngleDeg.value, view);
}

export function arcSectorPath({
  innerRadiusMm,
  outerRadiusMm,
  startAngleDeg,
  endAngleDeg,
  view,
}: {
  innerRadiusMm: number;
  outerRadiusMm: number;
  startAngleDeg: number;
  endAngleDeg: number;
  view: MountSvgView;
}): string {
  const start = angleForView(startAngleDeg, view);
  const end = angleForView(endAngleDeg, view);
  const sweep = clockwiseSweepDeg(start, end);
  const largeArcFlag = sweep > 180 ? 1 : 0;
  const outerStart = polarPoint(outerRadiusMm, start);
  const outerEnd = polarPoint(outerRadiusMm, end);
  const innerEnd = polarPoint(innerRadiusMm, end);
  const innerStart = polarPoint(innerRadiusMm, start);

  return [
    `M ${formatSvgNumber(outerStart.x)} ${formatSvgNumber(outerStart.y)}`,
    `A ${formatSvgNumber(outerRadiusMm)} ${formatSvgNumber(outerRadiusMm)} 0 ${largeArcFlag} 1 ${formatSvgNumber(
      outerEnd.x,
    )} ${formatSvgNumber(outerEnd.y)}`,
    `L ${formatSvgNumber(innerEnd.x)} ${formatSvgNumber(innerEnd.y)}`,
    `A ${formatSvgNumber(innerRadiusMm)} ${formatSvgNumber(innerRadiusMm)} 0 ${largeArcFlag} 0 ${formatSvgNumber(
      innerStart.x,
    )} ${formatSvgNumber(innerStart.y)}`,
    "Z",
  ].join(" ");
}

export function viewBoxForSpecView(spec: LensMountSpec, view: MountSvgView): string {
  if (view === "camera_side_front_view") return spec.render.views.cameraSideFront.viewBox;
  if (view === "lens_side_rear_view") return spec.render.views.lensSideRear.viewBox;
  return spec.render.views.axialSection.viewBox;
}
