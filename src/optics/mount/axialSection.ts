/**
 * Axial/register schematic builder (package Section 2.1 axial view).
 *
 * Draws the side view: z runs horizontally with +z toward the lens (to the right), and radius runs
 * vertically. The flange datum sits at z = 0; the sensor/film plane and every other registered
 * plane come from `spec.axialStack`, where the sensor plane is stored at z = −flangeFocalDistance
 * (package Section 4.3). Each plane is a vertical extent at its z, labeled by planeId, with a stroke
 * encoding its value status. The optical axis spans the full z range at r = 0.
 */

import type { MountSpec } from "../../types/mount.js";
import { combineStatus, numberOr } from "./value.js";
import type { MountSvgElement } from "./svgDoc.js";
import type { BBox } from "./viewBox.js";
import { includePoint } from "./viewBox.js";
import { fmtPoint } from "./round.js";

interface AxialPlaneResolved {
  planeId: string;
  z: number;
  radius: number;
  status: ReturnType<typeof combineStatus>;
}

/** Push the axial-section elements for a spec into the shared accumulators. */
export function accumulateAxialSection(spec: MountSpec, elements: MountSvgElement[], bbox: BBox): void {
  const ffd = numberOr(spec.coreDimensions.flangeFocalDistanceMm, NaN);
  const ringOuterR = numberOr(spec.coreDimensions.cameraMountOuterDiameterMm, NaN) / 2;
  const throatR = numberOr(spec.coreDimensions.nominalThroatDiameterMm, NaN) / 2;
  const fallbackR = isFinite(ringOuterR) ? ringOuterR : isFinite(throatR) ? throatR * 1.25 : 28;

  const planes: AxialPlaneResolved[] = spec.axialStack.map((plane) => {
    const z = numberOr(plane.zPositionMm, NaN);
    const radius = numberOr(plane.diameterMm, NaN) / 2;
    return {
      planeId: plane.planeId,
      z: isFinite(z) ? z : 0,
      radius: isFinite(radius) ? radius : fallbackR,
      status: combineStatus([plane.zPositionMm.status, plane.diameterMm.status]),
    };
  });

  // Always represent the flange datum (z=0) and, when known, the sensor plane (z = −FFD).
  const zValues = [0, ...planes.map((p) => p.z)];
  if (isFinite(ffd)) zValues.push(-ffd);
  const zMin = Math.min(...zValues);
  const zMax = Math.max(...zValues);
  const maxR = Math.max(fallbackR, ...planes.map((p) => p.radius));

  // Optical axis (datum-axis layer): horizontal line at r=0 across the z range.
  elements.push({
    layer: "datum-axis",
    kind: "line",
    attrs: { x1: zMin, y1: 0, x2: zMax, y2: 0 },
    category: "datum",
    status: "official",
    fill: false,
    sortAngle: -1,
    sortKey: "axis-optical",
  });
  includePoint(bbox, zMin, -maxR);
  includePoint(bbox, zMax, maxR);

  // Flange datum (z=0): full-height vertical reference on the datum-axis layer.
  elements.push({
    layer: "datum-axis",
    kind: "line",
    attrs: { x1: 0, y1: -maxR, x2: 0, y2: maxR },
    category: "datum",
    status: "official",
    fill: false,
    sortAngle: 0,
    sortKey: "axis-flange-datum",
  });

  // Each registered plane: a vertical extent at its z plus a label.
  for (const plane of planes) {
    elements.push({
      layer: "axial-section",
      kind: "line",
      attrs: { x1: plane.z, y1: -plane.radius, x2: plane.z, y2: plane.radius },
      category: "axial",
      status: plane.status,
      fill: false,
      sortAngle: plane.z,
      sortKey: `axial-${plane.planeId}`,
    });
    includePoint(bbox, plane.z, -plane.radius);
    includePoint(bbox, plane.z, plane.radius);
    elements.push({
      layer: "axial-section",
      kind: "text",
      attrs: { x: plane.z, y: -plane.radius - 1.5, "font-size": 2.4, "text-anchor": "middle" },
      text: plane.planeId.replace(/_/g, " "),
      category: "axial",
      status: plane.status,
      fill: true,
      sortAngle: plane.z,
      sortKey: `axial-label-${plane.planeId}`,
    });
    includePoint(bbox, plane.z, -plane.radius - 4);
  }
}

/** Build the `d`/points for a short connector tick (used by callers needing a marker). */
export function tickPath(x: number, y1: number, y2: number): string {
  return `M${fmtPoint(x, y1)} L${fmtPoint(x, y2)}`;
}
