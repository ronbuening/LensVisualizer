/**
 * Request-facing selection for the aspheric element inspector.
 * Construction surfaces intentionally define this element-local view; focus/zoom
 * layouts and camera anchoring must not move its vertices or change its thickness.
 */

import type { AsphericCoefficients } from "../../../types/optics.js";
import { runtimeView } from "../../prescription/runtimeView.js";
import type { AnalysisRequest } from "../request.js";
import { computeBestFitSphereR } from "./comparison.js";

export interface SurfaceComparison {
  surfIdx: number;
  label: string;
  R_aspheric: number;
  asph: AsphericCoefficients;
  sd: number;
  /** Vertex z position in the local (element-relative) frame — front = 0. */
  vertexZ: number;
  R_base: number;
  R_bestFit: number;
}

/**
 * Resolve the selected element's aspheric surfaces and comparison radii.
 * @param request - lens identity; control, aperture and field values are unused
 * @param elementId - selected display element id
 * @returns ordered aspheric surfaces, construction thickness and largest rim in mm
 */
export function computeAsphericElementComparison(request: AnalysisRequest, elementId: number) {
  const L = runtimeView(request.preparedGeometry.lens);
  const es = L.ES.find(([id]) => id === elementId);
  if (!es) return { surfaces: [] as SurfaceComparison[], elemThickness: 0, sdMax: 0 };
  const [, s1, s2] = es;
  const surf1 = L.S[s1];
  const surf2 = L.S[s2];
  const thickness = surf1.d;
  const list: SurfaceComparison[] = [];
  if (L.asphByIdx[s1]) {
    list.push({
      surfIdx: s1,
      label: surf1.label,
      R_aspheric: surf1.R,
      asph: L.asphByIdx[s1],
      sd: surf1.sd,
      vertexZ: 0,
      R_base: surf1.R,
      R_bestFit: computeBestFitSphereR(surf1.R, L.asphByIdx[s1], surf1.sd),
    });
  }
  if (L.asphByIdx[s2]) {
    list.push({
      surfIdx: s2,
      label: surf2.label,
      R_aspheric: surf2.R,
      asph: L.asphByIdx[s2],
      sd: surf2.sd,
      vertexZ: thickness,
      R_base: surf2.R,
      R_bestFit: computeBestFitSphereR(surf2.R, L.asphByIdx[s2], surf2.sd),
    });
  }
  return {
    surfaces: list,
    elemThickness: thickness,
    sdMax: Math.max(surf1.sd, surf2.sd),
  };
}
