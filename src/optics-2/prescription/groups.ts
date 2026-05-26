import type { AnnotationData, ElementData, ResolvedAnnotation, SurfaceData } from "../../types/optics.js";
import type { CompiledElement } from "../types.js";
import { resolveLabel } from "./labels.js";

export function compileElements(
  surfaces: readonly SurfaceData[],
  elements: readonly ElementData[],
  labelToSurfaceIndex: Readonly<Record<string, number>>,
): readonly CompiledElement[] {
  return Object.freeze(
    elements.map((element) => {
      const span = resolveElementSpan(surfaces, element, labelToSurfaceIndex);
      return Object.freeze({
        id: element.id,
        name: element.name,
        label: element.label,
        type: element.type,
        nd: element.nd,
        vd: element.vd ?? null,
        glass: element.glass ?? null,
        surfaceSpan: Object.freeze(span),
        source: Object.freeze({ ...element }),
      });
    }),
  );
}

export function compileAnnotations(
  annotations: readonly AnnotationData[] | undefined,
  labelToSurfaceIndex: Readonly<Record<string, number>>,
): readonly ResolvedAnnotation[] {
  return Object.freeze(
    (annotations ?? []).map((annotation) =>
      Object.freeze({
        text: annotation.text,
        fromSurface: resolveLabel(annotation.fromSurface, labelToSurfaceIndex, "annotation.fromSurface"),
        toSurface: resolveLabel(annotation.toSurface, labelToSurfaceIndex, "annotation.toSurface"),
      }),
    ),
  );
}

function resolveElementSpan(
  surfaces: readonly SurfaceData[],
  element: ElementData,
  labelToSurfaceIndex: Readonly<Record<string, number>>,
): [number, number] {
  if (element.fromSurface !== undefined && element.toSurface !== undefined) {
    return [
      resolveLabel(element.fromSurface, labelToSurfaceIndex, `Element ${element.id}.fromSurface`),
      resolveLabel(element.toSurface, labelToSurfaceIndex, `Element ${element.id}.toSurface`),
    ];
  }

  const startIdx = surfaces.findIndex((surface) => surface.elemId === element.id);
  return [startIdx, startIdx + 1];
}
