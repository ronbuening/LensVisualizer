import { GROUP_MOVEMENT_MODES, type GroupMovementMode } from "../types/groupMovement.js";
import type { RuntimeLens, ResolvedAnnotation, VarRange } from "../types/optics.js";
import { doLayout } from "./optics.js";

const MOVEMENT_EPSILON_MM = 1e-6;
const FOCUS_SAMPLE_COUNT = 21;
const ZOOM_SAMPLE_COUNT = 25;

export interface LensMovementGroup {
  id: string;
  label: string;
  fromSurface: number;
  toSurface: number;
}

export interface GroupMovementPoint {
  x: number;
  shiftMm: number;
  positionMm: number;
  focusT: number;
  zoomT: number;
  focalLengthMm: number | null;
}

export interface GroupMovementSeries {
  group: LensMovementGroup;
  samples: GroupMovementPoint[];
  secondarySamples?: GroupMovementPoint[];
  currentPoint: GroupMovementPoint;
}

export interface GroupMovementAvailability {
  focus: boolean;
  zoom: boolean;
  combined: boolean;
}

export interface GroupMovementProfile {
  mode: GroupMovementMode;
  availability: GroupMovementAvailability;
  groups: LensMovementGroup[];
  series: GroupMovementSeries[];
  xDomain: [number, number];
  positionDomain: [number, number];
  maxAbsShiftMm: number;
}

interface GroupMovementOptions {
  focusT: number;
  zoomT: number;
  aberrationT?: number;
}

function isZoomRange(range: VarRange): range is [number, number][] {
  return Array.isArray(range[0]);
}

function rangeHasFocusTravel(range: VarRange, isZoom: boolean): boolean {
  if (isZoom && isZoomRange(range)) {
    return range.some(([dInfinity, dClose]) => Math.abs(dClose - dInfinity) > MOVEMENT_EPSILON_MM);
  }
  if (!isZoom && !isZoomRange(range)) {
    const [dInfinity, dClose] = range;
    return Math.abs(dClose - dInfinity) > MOVEMENT_EPSILON_MM;
  }
  return false;
}

function rangeHasZoomTravel(range: VarRange, isZoom: boolean): boolean {
  if (!isZoom || !isZoomRange(range) || range.length < 2) return false;
  const [firstInfinity, firstClose] = range[0];
  return range.some(
    ([dInfinity, dClose]) =>
      Math.abs(dInfinity - firstInfinity) > MOVEMENT_EPSILON_MM || Math.abs(dClose - firstClose) > MOVEMENT_EPSILON_MM,
  );
}

export function getGroupMovementAvailability(L: RuntimeLens): GroupMovementAvailability {
  const ranges = Object.values(L.varByIdx ?? {});
  const focus = ranges.some((range) => rangeHasFocusTravel(range, L.isZoom));
  const zoom = L.isZoom && ranges.some((range) => rangeHasZoomTravel(range, L.isZoom));
  return {
    focus,
    zoom,
    combined: focus && zoom,
  };
}

export function isGroupMovementModeAvailable(
  availability: GroupMovementAvailability,
  mode: GroupMovementMode,
): boolean {
  return availability[mode];
}

export function firstAvailableGroupMovementMode(availability: GroupMovementAvailability): GroupMovementMode | null {
  return GROUP_MOVEMENT_MODES.find((mode) => availability[mode]) ?? null;
}

function normalizeGroup(annotation: ResolvedAnnotation, index: number, surfaceCount: number): LensMovementGroup | null {
  if (!Number.isInteger(annotation.fromSurface) || !Number.isInteger(annotation.toSurface)) return null;
  const fromSurface = Math.max(0, Math.min(annotation.fromSurface, annotation.toSurface));
  const toSurface = Math.min(surfaceCount - 1, Math.max(annotation.fromSurface, annotation.toSurface));
  if (toSurface <= fromSurface) return null;
  return {
    id: `annotation-${index}`,
    label: annotation.text || `G${index + 1}`,
    fromSurface,
    toSurface,
  };
}

function fallbackConstructionGroups(L: RuntimeLens): LensMovementGroup[] {
  const spans = [...(L.ES ?? [])]
    .filter(([, fromSurface, toSurface]) => fromSurface >= 0 && toSurface > fromSurface)
    .sort((a, b) => a[1] - b[1]);
  const groups: LensMovementGroup[] = [];
  if (spans.length === 0 && (L.N ?? 0) > 1) {
    return [{ id: "group-1", label: "G1", fromSurface: 0, toSurface: L.N - 1 }];
  }

  let currentFrom = spans[0]?.[1] ?? 0;
  let currentTo = spans[0]?.[2] ?? 0;

  for (let index = 1; index < spans.length; index++) {
    const [, fromSurface, toSurface] = spans[index];
    if (fromSurface <= currentTo) {
      currentTo = Math.max(currentTo, toSurface);
      continue;
    }
    groups.push({
      id: `group-${groups.length + 1}`,
      label: `G${groups.length + 1}`,
      fromSurface: currentFrom,
      toSurface: currentTo,
    });
    currentFrom = fromSurface;
    currentTo = toSurface;
  }

  if (spans.length > 0) {
    groups.push({
      id: `group-${groups.length + 1}`,
      label: `G${groups.length + 1}`,
      fromSurface: currentFrom,
      toSurface: currentTo,
    });
  }

  return groups;
}

export function inferLensMovementGroups(L: RuntimeLens): LensMovementGroup[] {
  const annotated = (L.groups ?? [])
    .map((annotation, index) => normalizeGroup(annotation, index, L.N))
    .filter((group): group is LensMovementGroup => group !== null);
  return annotated.length > 0 ? annotated : fallbackConstructionGroups(L);
}

interface AnchoredSurfacePositions {
  z: number[];
  imagePlaneZ: number;
}

function anchoredSurfacePositions(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  aberrationT: number,
): AnchoredSurfacePositions {
  const ref = doLayout(0, 0, L);
  const cur = doLayout(focusT, zoomT, L, aberrationT);
  const dz = ref.imgZ - cur.imgZ;
  return {
    z: cur.z.map((z) => z + dz),
    imagePlaneZ: ref.imgZ,
  };
}

function groupMidpoint(group: LensMovementGroup, zPos: readonly number[]): number {
  return (zPos[group.fromSurface] + zPos[group.toSurface]) / 2;
}

function focalLengthAtZoomT(L: RuntimeLens, zoomT: number): number | null {
  if (!L.zoomPositions || L.zoomPositions.length === 0) return null;
  if (L.zoomPositions.length === 1) return L.zoomPositions[0];
  const position = Math.max(0, Math.min(1, zoomT)) * (L.zoomPositions.length - 1);
  const index = Math.min(Math.floor(position), L.zoomPositions.length - 2);
  const fraction = position - index;
  return L.zoomPositions[index] + (L.zoomPositions[index + 1] - L.zoomPositions[index]) * fraction;
}

function uniqueSorted(values: number[]): number[] {
  return [...new Set(values.map((value) => Number(value.toFixed(6))))].sort((a, b) => a - b);
}

function normalizedSamples(count: number, extra: number[]): number[] {
  const base = Array.from({ length: count }, (_, index) => index / Math.max(count - 1, 1));
  return uniqueSorted([...base, ...extra.map((value) => Math.max(0, Math.min(1, value)))]);
}

function zoomSamples(L: RuntimeLens, currentZoomT: number): number[] {
  const stops = L.zoomPositions
    ? L.zoomPositions.map((_, index) => index / Math.max(L.zoomPositions!.length - 1, 1))
    : [];
  return normalizedSamples(ZOOM_SAMPLE_COUNT, [...stops, currentZoomT]);
}

function buildPoint(
  L: RuntimeLens,
  group: LensMovementGroup,
  baselineCenter: number,
  focusT: number,
  zoomT: number,
  aberrationT: number,
  x: number,
): GroupMovementPoint {
  const { z: zPos, imagePlaneZ } = anchoredSurfacePositions(L, focusT, zoomT, aberrationT);
  const groupCenter = groupMidpoint(group, zPos);
  return {
    x,
    shiftMm: groupCenter - baselineCenter,
    positionMm: groupCenter - imagePlaneZ,
    focusT,
    zoomT,
    focalLengthMm: focalLengthAtZoomT(L, zoomT),
  };
}

function maxAbsProfileShift(series: readonly GroupMovementSeries[]): number {
  let maxAbs = 0;
  for (const groupSeries of series) {
    for (const point of groupSeries.samples) maxAbs = Math.max(maxAbs, Math.abs(point.shiftMm));
    for (const point of groupSeries.secondarySamples ?? []) maxAbs = Math.max(maxAbs, Math.abs(point.shiftMm));
    maxAbs = Math.max(maxAbs, Math.abs(groupSeries.currentPoint.shiftMm));
  }
  return maxAbs;
}

function profilePositionDomain(series: readonly GroupMovementSeries[]): [number, number] {
  let minPosition = 0;
  let maxPosition = 0;
  for (const groupSeries of series) {
    for (const point of groupSeries.samples) {
      minPosition = Math.min(minPosition, point.positionMm);
      maxPosition = Math.max(maxPosition, point.positionMm);
    }
    for (const point of groupSeries.secondarySamples ?? []) {
      minPosition = Math.min(minPosition, point.positionMm);
      maxPosition = Math.max(maxPosition, point.positionMm);
    }
    minPosition = Math.min(minPosition, groupSeries.currentPoint.positionMm);
    maxPosition = Math.max(maxPosition, groupSeries.currentPoint.positionMm);
  }

  const span = Math.max(maxPosition - minPosition, 1);
  const padding = Math.max(span * 0.04, 0.5);
  return [minPosition - padding, maxPosition > 0 ? maxPosition + padding : 0];
}

export function computeGroupMovementProfile(
  L: RuntimeLens,
  mode: GroupMovementMode,
  { focusT, zoomT, aberrationT = 0 }: GroupMovementOptions,
): GroupMovementProfile {
  const availability = getGroupMovementAvailability(L);
  const groups = inferLensMovementGroups(L);
  const safeFocusT = Math.max(0, Math.min(1, focusT));
  const safeZoomT = Math.max(0, Math.min(1, zoomT));

  if (mode === "zoom") {
    const baselineZ = anchoredSurfacePositions(L, safeFocusT, 0, aberrationT).z;
    const samples = zoomSamples(L, safeZoomT);
    const series = groups.map((group) => {
      const baselineCenter = groupMidpoint(group, baselineZ);
      return {
        group,
        samples: samples.map((sampleZoomT) =>
          buildPoint(
            L,
            group,
            baselineCenter,
            safeFocusT,
            sampleZoomT,
            aberrationT,
            focalLengthAtZoomT(L, sampleZoomT) ?? sampleZoomT,
          ),
        ),
        currentPoint: buildPoint(
          L,
          group,
          baselineCenter,
          safeFocusT,
          safeZoomT,
          aberrationT,
          focalLengthAtZoomT(L, safeZoomT) ?? safeZoomT,
        ),
      };
    });
    return {
      mode,
      availability,
      groups,
      series,
      xDomain: L.zoomPositions ? [L.zoomPositions[0], L.zoomPositions[L.zoomPositions.length - 1]] : [0, 1],
      positionDomain: profilePositionDomain(series),
      maxAbsShiftMm: maxAbsProfileShift(series),
    };
  }

  if (mode === "combined") {
    const baselineZ = anchoredSurfacePositions(L, 0, 0, aberrationT).z;
    const samples = zoomSamples(L, safeZoomT);
    const series = groups.map((group) => {
      const baselineCenter = groupMidpoint(group, baselineZ);
      return {
        group,
        samples: samples.map((sampleZoomT) =>
          buildPoint(
            L,
            group,
            baselineCenter,
            0,
            sampleZoomT,
            aberrationT,
            focalLengthAtZoomT(L, sampleZoomT) ?? sampleZoomT,
          ),
        ),
        secondarySamples: samples.map((sampleZoomT) =>
          buildPoint(
            L,
            group,
            baselineCenter,
            1,
            sampleZoomT,
            aberrationT,
            focalLengthAtZoomT(L, sampleZoomT) ?? sampleZoomT,
          ),
        ),
        currentPoint: buildPoint(
          L,
          group,
          baselineCenter,
          safeFocusT,
          safeZoomT,
          aberrationT,
          focalLengthAtZoomT(L, safeZoomT) ?? safeZoomT,
        ),
      };
    });
    return {
      mode,
      availability,
      groups,
      series,
      xDomain: L.zoomPositions ? [L.zoomPositions[0], L.zoomPositions[L.zoomPositions.length - 1]] : [0, 1],
      positionDomain: profilePositionDomain(series),
      maxAbsShiftMm: maxAbsProfileShift(series),
    };
  }

  const baselineZ = anchoredSurfacePositions(L, 0, safeZoomT, aberrationT).z;
  const samples = normalizedSamples(FOCUS_SAMPLE_COUNT, [safeFocusT]);
  const series = groups.map((group) => {
    const baselineCenter = groupMidpoint(group, baselineZ);
    return {
      group,
      samples: samples.map((sampleFocusT) =>
        buildPoint(L, group, baselineCenter, sampleFocusT, safeZoomT, aberrationT, sampleFocusT),
      ),
      currentPoint: buildPoint(L, group, baselineCenter, safeFocusT, safeZoomT, aberrationT, safeFocusT),
    };
  });
  return {
    mode,
    availability,
    groups,
    series,
    xDomain: [0, 1],
    positionDomain: profilePositionDomain(series),
    maxAbsShiftMm: maxAbsProfileShift(series),
  };
}
