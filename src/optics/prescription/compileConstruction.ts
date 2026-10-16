/** Compile canonical prescription indices, profiles, controls and shared materials before constants. */
import type { LensConstructionData } from "../types.js";
import type { SurfaceData, LensData } from "../../types/optics.js";
import { buildSurfaceLabelMap } from "./compileLabels.js";
import { compileAspheres } from "./compileAspheres.js";
import { compileElements, compileAnnotations } from "./compileGroups.js";
import { compileVariableGaps } from "./compileControls.js";
import {
  buildVdIndex,
  buildSpectralIndex,
  resolveMaterialTable,
  compiledDispersionTable,
} from "../chromatic/dispersionTable.js";
import { lastLensSurfaceIndex } from "./rearPlates.js";
import { compileSurfaces } from "./surfaces.js";
import type { LensProjectionConfig, ResolvedOpticalPath } from "../../types/optics.js";

export function compileConstruction(data: LensConstructionData, source: LensData) {
  const S: SurfaceData[] = data.surfaces.map((s) => ({ ...s }));
  const N = S.length;
  const projection = resolveProjection(data);
  const isFoldedOptics = Boolean(
    data.opticalPath || data.surfaces.some((surface) => surface.interaction && surface.interaction.type !== "refract"),
  );

  const isZoom = Array.isArray(data.zoomPositions) && data.zoomPositions.length >= 2;
  const labelIdx = buildSurfaceLabelMap(S);
  const asphByIdx = compileAspheres(data.asph, labelIdx);
  const varByIdx = compileVariableGaps(data.var, labelIdx);
  const focusPositions = Object.freeze([...(data.focusPositions ?? [0, 1])]);
  const aberrationControl = data.aberrationControl
    ? {
        label: data.aberrationControl.label,
        description: data.aberrationControl.description,
        minLabel: data.aberrationControl.minLabel,
        centerLabel: data.aberrationControl.centerLabel,
        maxLabel: data.aberrationControl.maxLabel,
        step: data.aberrationControl.step,
        varByIdx: compileVariableGaps(data.aberrationControl.var, labelIdx),
        varLabels: (data.aberrationControl.varLabels || []).map(
          ([label, text]: [string, string]) => [labelIdx[label], text] as [number, string],
        ),
      }
    : null;

  const varLabels: [number, string][] = (data.varLabels || []).map(
    ([label, text]: [string, string]) => [labelIdx[label], text] as [number, string],
  );
  const displayElements = source.elements.filter((element) => !element.synthetic);
  const elements = compileElements(S, data.elements, labelIdx, source.elements);
  const ES = elements
    .filter((e) => !e.source.synthetic)
    .map((e) => [e.id, ...e.surfaceSpan] as [number, number, number]);
  const lastLensSurfaceIdx = lastLensSurfaceIndex(S);

  /* ── Per-surface dispersion data (for chromatic tracing) ── */
  const vdByIdx = buildVdIndex(S, data.elements);
  const spectralByIdx = buildSpectralIndex(S, data.elements);
  const indexByIdx = resolveMaterialTable(S, data.elements, spectralByIdx);
  const groups = compileAnnotations(data.groups, labelIdx);
  const doublets = compileAnnotations(data.doublets, labelIdx);

  const stopIdx = S.findIndex((row) => row.label === "STO");
  const opticalPath = resolveOpticalPath(data, labelIdx);

  const surfaces = compileSurfaces(S, source.surfaces, asphByIdx);
  const dispersion = compiledDispersionTable(indexByIdx, S);
  return {
    data,
    source,
    S,
    N,
    projection,
    isZoom,
    isFoldedOptics,
    labelIdx,
    asphByIdx,
    varByIdx,
    focusPositions,
    aberrationControl,
    varLabels,
    displayElements,
    elements,
    ES,
    lastLensSurfaceIdx,
    vdByIdx,
    spectralByIdx,
    indexByIdx,
    groups,
    doublets,
    stopIdx,
    opticalPath,
    surfaces,
    dispersion,
  };
}
export type LensConstruction = ReturnType<typeof compileConstruction>;

function resolveProjection(data: LensData): LensProjectionConfig {
  return data.projection ?? { kind: "rectilinear" };
}

function resolveOpticalPath(data: LensData, labelIdx: Record<string, number>): ResolvedOpticalPath {
  const surfaceLabels = data.opticalPath?.surfaceOrder ?? null;
  return {
    mode: data.opticalPath?.mode ?? "sequential",
    surfaceOrder: surfaceLabels
      ? surfaceLabels.map((label) => labelIdx[label]).filter((idx) => idx !== undefined)
      : null,
    surfaceLabels,
    maxInteractions: data.opticalPath?.maxInteractions ?? Math.max(data.surfaces.length + 1, 1),
  };
}
