import type {
  AnnotationData,
  AsphericCoefficients,
  ElementData,
  ElementSpan,
  ResolvedAnnotation,
  SurfaceData,
  SurfaceSpectral,
  VarRange,
} from "../../types/optics.js";

export function buildLabelIndex(surfaces: Pick<SurfaceData, "label">[]): Record<string, number> {
  const labelIdx: Record<string, number> = {};
  for (let i = 0; i < surfaces.length; i++) {
    labelIdx[surfaces[i].label] = i;
  }
  return labelIdx;
}

export function buildAsphereIndex(
  asph: Record<string, AsphericCoefficients> | undefined,
  labelIdx: Record<string, number>,
): Record<number, AsphericCoefficients> {
  const asphByIdx: Record<number, AsphericCoefficients> = {};
  for (const [label, coeffs] of Object.entries(asph || {})) {
    const idx = labelIdx[label];
    if (idx !== undefined) asphByIdx[idx] = coeffs;
  }
  return asphByIdx;
}

export function buildVarIndex(
  variableGaps: Record<string, VarRange> | undefined,
  labelIdx: Record<string, number>,
): Record<number, VarRange> {
  const varByIdx: Record<number, VarRange> = {};
  for (const [label, range] of Object.entries(variableGaps || {})) {
    const idx = labelIdx[label];
    if (idx !== undefined) varByIdx[idx] = range;
  }
  return varByIdx;
}

export function resolveAnnotations(
  annotations: AnnotationData[] | undefined,
  labelIdx: Record<string, number>,
): ResolvedAnnotation[] {
  return (annotations || []).map((annotation) => ({
    text: annotation.text,
    fromSurface: labelIdx[annotation.fromSurface],
    toSurface: labelIdx[annotation.toSurface],
  }));
}

export function buildElementSpans(surfaces: SurfaceData[], elements: ElementData[]): ElementSpan[] {
  return elements.map((element) => {
    let startIdx = -1;
    for (let i = 0; i < surfaces.length; i++) {
      if (surfaces[i].elemId === element.id) {
        startIdx = i;
        break;
      }
    }
    return [element.id, startIdx, startIdx + 1];
  });
}

export function buildVdIndex(surfaces: SurfaceData[], elements: ElementData[]): Record<number, number> {
  const elementById = new Map(elements.map((element) => [element.id, element]));
  const vdByIdx: Record<number, number> = {};
  for (let i = 0; i < surfaces.length; i++) {
    const elementId = surfaces[i].elemId;
    if (!elementId) continue;
    const element = elementById.get(elementId);
    if (element?.vd) vdByIdx[i] = element.vd;
  }
  return vdByIdx;
}

export function buildSpectralIndex(surfaces: SurfaceData[], elements: ElementData[]): Record<number, SurfaceSpectral> {
  const elementById = new Map(elements.map((element) => [element.id, element]));
  const spectralByIdx: Record<number, SurfaceSpectral> = {};
  for (let i = 0; i < surfaces.length; i++) {
    const elementId = surfaces[i].elemId;
    if (!elementId) continue;
    const element = elementById.get(elementId);
    if (!element) continue;
    const entry: SurfaceSpectral = {};
    if (element.dPgF !== undefined) entry.dPgF = element.dPgF;
    if (element.nC !== undefined) entry.nC = element.nC;
    if (element.nF !== undefined) entry.nF = element.nF;
    if (element.ng !== undefined) entry.ng = element.ng;
    if (Object.keys(entry).length > 0) spectralByIdx[i] = entry;
  }
  return spectralByIdx;
}

export function firstInfinityThickness(range: unknown, isZoom: boolean): number | null {
  if (!Array.isArray(range)) return null;
  if (!isZoom) {
    return typeof range[0] === "number" ? range[0] : null;
  }
  const firstZoomEntry = range[0];
  if (!Array.isArray(firstZoomEntry)) return null;
  return typeof firstZoomEntry[0] === "number" ? firstZoomEntry[0] : null;
}

export function resolveVariableThickness(
  baseThickness: number,
  range: VarRange | undefined,
  isZoom: boolean,
  focusT: number,
  zoomT: number,
): number {
  if (!range) return baseThickness;
  if (!isZoom) {
    const [dInfinity, dClose] = range as [number, number];
    return dInfinity + (dClose - dInfinity) * focusT;
  }
  const zoomRanges = range as [number, number][];
  if (zoomRanges.length === 0) return baseThickness;
  if (zoomRanges.length === 1) {
    const [dInfinity, dClose] = zoomRanges[0];
    return dInfinity + (dClose - dInfinity) * focusT;
  }
  const position = zoomT * (zoomRanges.length - 1);
  const index = Math.min(Math.floor(position), zoomRanges.length - 2);
  const fraction = position - index;
  const dInfinity = zoomRanges[index][0] + (zoomRanges[index + 1][0] - zoomRanges[index][0]) * fraction;
  const dClose = zoomRanges[index][1] + (zoomRanges[index + 1][1] - zoomRanges[index][1]) * fraction;
  return dInfinity + (dClose - dInfinity) * focusT;
}

export function buildStateSurfaces(
  surfaces: SurfaceData[],
  varByIdx: Record<number, VarRange>,
  isZoom: boolean,
  focusT: number,
  zoomT: number,
): SurfaceData[] {
  return surfaces.map((surface, index) => ({
    ...surface,
    d: resolveVariableThickness(surface.d, varByIdx[index], isZoom, focusT, zoomT),
  }));
}

export function zoomIndexToT(zoomIndex: number, zoomCount: number): number {
  if (zoomCount <= 1) return 0;
  return zoomIndex / (zoomCount - 1);
}

export function sumSurfaceThicknesses(surfaces: Pick<SurfaceData, "d">[], endExclusive: number): number {
  let total = 0;
  for (let i = 0; i < endExclusive; i++) total += surfaces[i].d;
  return total;
}
