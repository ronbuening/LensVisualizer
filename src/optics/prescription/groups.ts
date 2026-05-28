/**
 * Prescription group compiler — converts authored element and annotation ranges into engine spans.
 *
 * Keeps UI grouping, glass dispersion ownership, and annotation references aligned with the normalized
 * surface index model.
 */

import type { AnnotationData, ElementData, ResolvedAnnotation, SurfaceData } from "../../types/optics.js";
import type { CompiledElement } from "../types.js";
import { resolveLabel } from "./labels.js";

/**
 * Compile authored element metadata into normalized engine element spans.
 *
 * @param surfaces - authored physical surfaces
 * @param elements - authored element metadata
 * @param labelToSurfaceIndex - normalized label lookup for the lens
 * @returns frozen compiled element records with surface-index spans
 */
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

/**
 * Compile annotation label ranges into index ranges.
 *
 * @param annotations - optional authored annotation records
 * @param labelToSurfaceIndex - normalized label lookup for the lens
 * @returns frozen annotation records with zero-based surface indices
 */
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
