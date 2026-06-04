/**
 * Diagram element-shape builder — converts prepared surfaces into SVG-ready glass and coating outlines.
 *
 * Uses current-state surface positions and folded mirror metadata to describe rendered element spans without
 * affecting physical trace behavior.
 */

import type { AsphPathData, ElementShape, ElementSpan, SurfaceAccentPathData } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import {
  renderedSurfaceZ2,
  surfacePathD2,
  SVG_PATH_SUBDIVISIONS_2,
  type DiagramPointTransform2,
} from "./surfaceOutline.js";
import { computeElementRenderDiagnosticsForState2 } from "./renderDiagnostics.js";

/**
 * Build SVG-ready element outlines from current prepared surface positions.
 *
 * The generated paths describe visual glass boundaries only. Trace behavior still
 * comes from surface profiles and interactions in the prepared state, including
 * folded second-surface mirror coating accents.
 *
 * @param state - prepared optical state with current surface positions
 * @param sx - optical z-mm to SVG x-coordinate mapper
 * @param sy - optical y-mm to SVG y-coordinate mapper
 * @param pointTransform - optional display transform for perspective-control movement
 * @returns element shapes with glass paths, asphere highlights, and coating accents
 */
export function computeElementShapesForState2(
  state: PreparedOpticalState,
  sx: (z: number) => number,
  sy: (y: number) => number,
  pointTransform?: DiagramPointTransform2,
): ElementShape[] {
  const diagnostics = computeElementRenderDiagnosticsForState2(state);
  const L = state.lens.runtime;
  const screenPoint = (z: number, y: number): [number, number] => {
    const [zz, yy] = pointTransform ? pointTransform(z, y) : [z, y];
    return [sx(zz), sy(yy)];
  };
  const pathPoint = (z: number, y: number): string => {
    const [x, yy] = screenPoint(z, y);
    return `${x},${yy}`;
  };

  return L.ES.map(([eid, s1, s2]: ElementSpan, elementIndex: number) => {
    const trim1 = diagnostics[elementIndex].front.renderSD;
    const trim2 = diagnostics[elementIndex].rear.renderSD;
    const front = state.surfaces[s1];
    const rear = state.surfaces[s2];
    const z1 = front.z;
    const z2 = rear.z;
    const NN = SVG_PATH_SUBDIVISIONS_2;

    const surfacePath = (surfaceIndex: number, trim: number): string =>
      surfacePathD2(state, surfaceIndex, trim, sx, sy, pointTransform);

    const surfaceMaterialPath = (surfaceIndex: number, outerTrim: number, innerTrim = 0): string => {
      const surface = state.surfaces[surfaceIndex];
      if (!surface) return "";

      const bandInner = Number.isFinite(innerTrim) ? Math.max(0, Math.min(innerTrim, outerTrim)) : 0;
      if (bandInner <= 0) return surfacePath(surfaceIndex, outerTrim);

      /* Annular coatings are two physical radial bands; split the SVG path so the clear center is not marked silvered. */
      const segmentCount = Math.max(8, Math.round((SVG_PATH_SUBDIVISIONS_2 * (outerTrim - bandInner)) / outerTrim));
      const segment = (from: number, to: number): string => {
        let path = "";
        for (let i = 0; i <= segmentCount; i++) {
          const y = from + ((to - from) * i) / segmentCount;
          path += `${i ? "L" : "M"}${pathPoint(renderedSurfaceZ2(surface, y), y)} `;
        }
        return path;
      };

      return `${segment(-outerTrim, -bandInner)}${segment(bandInner, outerTrim)}`;
    };

    let d = "";
    for (let i = 0; i <= NN; i++) {
      const y = -trim1 + (2 * trim1 * i) / NN;
      d += `${i ? "L" : "M"}${pathPoint(renderedSurfaceZ2(front, y), y)} `;
    }
    for (let i = NN; i >= 0; i--) {
      const y = -trim2 + (2 * trim2 * i) / NN;
      d += `L${pathPoint(renderedSurfaceZ2(rear, y), y)} `;
    }

    const inner = Math.min(Math.min(trim1, trim2), Math.max(front.innerSd ?? 0, rear.innerSd ?? 0));
    const fillRule = inner > 0 ? "evenodd" : undefined;
    if (inner > 0) {
      /* Annular elements use an inner counter-path so central mirror holes remain transparent. */
      d += "Z ";
      for (let i = 0; i <= NN; i++) {
        const y = -inner + (2 * inner * i) / NN;
        d += `${i ? "L" : "M"}${pathPoint(renderedSurfaceZ2(front, y), y)} `;
      }
      for (let i = NN; i >= 0; i--) {
        const y = -inner + (2 * inner * i) / NN;
        d += `L${pathPoint(renderedSurfaceZ2(rear, y), y)} `;
      }
    }

    const asphPaths: AsphPathData[] = [];
    const surfaceAccentPaths: SurfaceAccentPathData[] = [];
    const midZ = (z1 + z2) / 2;
    if (front.asphere) {
      const p = surfacePath(s1, trim1);
      const hp = p + `L${pathPoint(midZ, trim1)} L${pathPoint(midZ, -trim1)} Z`;
      const [labelX, labelY] = screenPoint(renderedSurfaceZ2(front, -trim1), -trim1);
      asphPaths.push({
        surfIdx: s1,
        pathD: p,
        halfPathD: hp,
        labelX,
        labelY: labelY - 4,
      });
    }
    if (rear.asphere) {
      const p = surfacePath(s2, trim2);
      let hp = `M${pathPoint(midZ, -trim2)} L${pathPoint(midZ, trim2)} `;
      for (let i = NN; i >= 0; i--) {
        const y = -trim2 + (2 * trim2 * i) / NN;
        hp += `L${pathPoint(renderedSurfaceZ2(rear, y), y)} `;
      }
      hp += "Z";
      const [labelX, labelY] = screenPoint(renderedSurfaceZ2(rear, -trim2), -trim2);
      asphPaths.push({
        surfIdx: s2,
        pathD: p,
        halfPathD: hp,
        labelX,
        labelY: labelY - 4,
      });
    }

    for (const surfaceIndex of [s1, s2]) {
      const surface = state.surfaces[surfaceIndex];
      if (surface.interaction.type === "reflect" && surface.interaction.mirrorKind === "second-surface") {
        /* The coating accent is visual only; reflection/refraction behavior stays in interaction data. */
        const trim = surfaceIndex === s1 ? trim1 : trim2;
        const innerTrim = Math.min(trim, Math.max(0, surface.innerSd ?? 0));
        const [labelX, labelY] = screenPoint(renderedSurfaceZ2(surface, trim), trim);
        surfaceAccentPaths.push({
          surfIdx: surfaceIndex,
          pathD: surfaceMaterialPath(surfaceIndex, trim, innerTrim),
          labelX,
          labelY: labelY + 10,
          kind: "second-surface-coating",
        });
      }
    }

    return { eid, d: d + "Z", z1, z2, fillRule, asphPaths, surfaceAccentPaths };
  });
}
