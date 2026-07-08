/**
 * DiagramRayLayers — on-axis, off-axis, and chromatic ray rendering.
 *
 * Consolidates the conditional RayPolylines wiring so DiagramSVG only needs to
 * hand off the current render state and not repeat three similar branches.
 */

import { memo, useCallback, useMemo } from "react";
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
  const chromaticOnAxisRays = useMemo(() => chromaticRays.filter((ray) => ray.axis === "onAxis"), [chromaticRays]);
  const chromaticOffAxisRays = useMemo(() => chromaticRays.filter((ray) => ray.axis === "offAxis"), [chromaticRays]);
  const onAxisColor = useCallback((ri: number) => (ri < rays.length / 2 ? t.rayCool : t.rayWarm), [rays.length, t]);
  const offAxisColor = useCallback(
    (ri: number) => (ri < offAxisRays.length / 2 ? t.rayOffCool : t.rayOffWarm),
    [offAxisRays.length, t],
  );
  const chromaticOnAxisColor = useCallback(
    (ri: number) => {
      const ch = chromaticOnAxisRays[ri]?.channel;
      return ch === "R" ? t.rayChromR : ch === "G" ? t.rayChromG : t.rayChromB;
    },
    [chromaticOnAxisRays, t],
  );
  const chromaticOffAxisColor = useCallback(
    (ri: number) => {
      const ch = chromaticOffAxisRays[ri]?.channel;
      return ch === "R" ? t.rayChromR : ch === "G" ? t.rayChromG : t.rayChromB;
    },
    [chromaticOffAxisRays, t],
  );

  return (
    <>
      {showOnAxis && !showChromatic && (
        <RayPolylines
          rays={rays}
          colorFn={onAxisColor}
          solidWidth={1.2}
          rayWidthScale={t.rayWidthScale}
          keyPrefix="on"
        />
      )}

      {showOffAxis !== "off" && !showChromatic && (
        <RayPolylines
          rays={offAxisRays}
          colorFn={offAxisColor}
          solidWidth={1.1}
          rayWidthScale={t.rayWidthScale}
          solidDash={t.rayOffDash || undefined}
          keyPrefix="off"
        />
      )}

      {showChromatic && showOnAxis && (
        <RayPolylines
          rays={chromaticOnAxisRays}
          colorFn={chromaticOnAxisColor}
          solidWidth={1.0}
          rayWidthScale={t.rayWidthScale}
          keyPrefix="chrom-on"
        />
      )}

      {showChromatic && showOffAxis !== "off" && (
        <RayPolylines
          rays={chromaticOffAxisRays}
          colorFn={chromaticOffAxisColor}
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
