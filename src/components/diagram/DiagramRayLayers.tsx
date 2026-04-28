/**
 * DiagramRayLayers — on-axis, off-axis, and chromatic ray rendering.
 *
 * Consolidates the conditional RayPolylines wiring so DiagramSVG only needs to
 * hand off the current render state and not repeat three similar branches.
 */

import { memo } from "react";
import RayPolylines from "./RayPolylines.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import type { ChromaticRaySegment, RaySegment } from "./diagramSvgTypes.js";
import type { OffAxisMode } from "../../types/state.js";

interface DiagramRayLayersProps {
  lens: RuntimeLens;
  theme: Theme;
  rays: RaySegment[];
  offAxisRays: RaySegment[];
  chromaticRays: ChromaticRaySegment[];
  showOnAxis: boolean;
  showOffAxis: OffAxisMode;
  showChromatic: boolean;
}

const DiagramRayLayers = memo(function DiagramRayLayers({
  lens: _lens,
  theme: t,
  rays,
  offAxisRays,
  chromaticRays,
  showOnAxis,
  showOffAxis,
  showChromatic,
}: DiagramRayLayersProps) {
  const chromaticOnAxisRays = chromaticRays.filter((ray) => ray.axis === "onAxis");
  const chromaticOffAxisRays = chromaticRays.filter((ray) => ray.axis === "offAxis");
  const chromaticColor = (ray: ChromaticRaySegment | undefined) => {
    const ch = ray?.channel;
    return ch === "R" ? t.rayChromR : ch === "G" ? t.rayChromG : t.rayChromB;
  };

  return (
    <>
      {showOnAxis && !showChromatic && (
        <RayPolylines
          rays={rays}
          colorFn={(ri) => (ri < rays.length / 2 ? t.rayCool : t.rayWarm)}
          solidWidth={1.2}
          rayWidthScale={t.rayWidthScale}
          keyPrefix="on"
        />
      )}

      {showOffAxis !== "off" && !showChromatic && (
        <RayPolylines
          rays={offAxisRays}
          colorFn={(ri) => (ri < offAxisRays.length / 2 ? t.rayOffCool : t.rayOffWarm)}
          solidWidth={1.1}
          rayWidthScale={t.rayWidthScale}
          solidDash={t.rayOffDash || undefined}
          keyPrefix="off"
        />
      )}

      {showChromatic && showOnAxis && (
        <RayPolylines
          rays={chromaticOnAxisRays}
          colorFn={(ri) => chromaticColor(chromaticOnAxisRays[ri])}
          solidWidth={1.0}
          rayWidthScale={t.rayWidthScale}
          keyPrefix="chrom-on"
        />
      )}

      {showChromatic && showOffAxis !== "off" && (
        <RayPolylines
          rays={chromaticOffAxisRays}
          colorFn={(ri) => chromaticColor(chromaticOffAxisRays[ri])}
          solidWidth={1.0}
          rayWidthScale={t.rayWidthScale}
          solidDash={t.rayOffDash || undefined}
          keyPrefix="chrom-off"
        />
      )}
    </>
  );
});

export default DiagramRayLayers;
