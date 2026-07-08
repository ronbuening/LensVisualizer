/**
 * RayPolylines — Renders a set of ray segments as SVG polylines.
 *
 * Each ray has solid segments (sp) for the real traced path and ghost
 * segments (gp) for the extrapolated path of clipped rays. Consolidates
 * the on-axis, off-axis, and chromatic ray rendering into one component.
 */

import { memo } from "react";
import type { RaySegment } from "./diagramSvgTypes.js";

interface RayPolylinesProps {
  rays: RaySegment[];
  /** Returns the stroke color for ray at the given index */
  colorFn: (index: number) => string;
  /** Stroke width for solid segments */
  solidWidth: number;
  /** Width scale from theme */
  rayWidthScale: number;
  /** Stroke dasharray for solid segments (e.g. "none" or "4,3") */
  solidDash?: string;
  /** Key prefix for unique element keys */
  keyPrefix: string;
}

const RayPolylines = memo(function RayPolylines({
  rays,
  colorFn,
  solidWidth,
  rayWidthScale,
  solidDash,
  keyPrefix,
}: RayPolylinesProps) {
  return (
    <>
      {rays.map(({ sp, gp, spPoints, gpPoints }, ri) => {
        const color = colorFn(ri);
        return (
          <g key={`${keyPrefix}${ri}`}>
            {sp.length > 1 && (
              <polyline
                points={spPoints}
                fill="none"
                stroke={color}
                strokeWidth={solidWidth * rayWidthScale}
                strokeDasharray={solidDash || "none"}
              />
            )}
            {gp.length > 1 && (
              <polyline
                points={gpPoints}
                fill="none"
                stroke={color}
                strokeWidth={0.6 * rayWidthScale}
                strokeDasharray="3,4"
                opacity={0.3}
              />
            )}
          </g>
        );
      })}
    </>
  );
});

export default RayPolylines;
