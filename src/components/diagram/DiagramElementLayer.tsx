/**
 * DiagramElementLayer — interactive lens-element paths and asphere accents.
 *
 * Separates the clickable glass paths from the rest of the SVG so the parent
 * renderer only coordinates layout and render order.
 */

import { memo } from "react";
import { ENABLE_ASPH_DIAMOND_FILL } from "../../utils/featureFlags.js";
import type { RuntimeLens, ElementShape } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface DiagramElementLayerProps {
  lens: RuntimeLens;
  shapes: ElementShape[];
  theme: Theme;
  filterId: string;
  act: number | null;
  sel: number | null;
  zoomPanActive?: boolean;
  onHover: (eid: number | null) => void;
  onSelect: (eid: number | null) => void;
}

const DiagramElementLayer = memo(function DiagramElementLayer({
  lens: L,
  shapes,
  theme: t,
  filterId,
  act,
  sel,
  zoomPanActive,
  onHover,
  onSelect,
}: DiagramElementLayerProps) {
  return (
    <>
      {shapes.map(({ eid, d: path, fillRule }) => {
        const element = L.elements.find((candidate) => candidate.id === eid)!;
        const highlighted = act === eid;
        return (
          <path
            key={eid}
            d={path}
            fill={t.elemFill(element, highlighted)}
            fillRule={fillRule}
            stroke={t.elemStroke(element, highlighted)}
            strokeWidth={highlighted ? t.elemStrokeActive : t.elemStrokeIdle}
            style={{
              cursor: zoomPanActive ? undefined : "pointer",
              transition: "all 0.12s",
              filter: highlighted ? `url(#${filterId})` : "none",
              pointerEvents: zoomPanActive ? "none" : undefined,
            }}
            onMouseEnter={zoomPanActive ? undefined : () => onHover(eid)}
            onMouseLeave={zoomPanActive ? undefined : () => onHover(null)}
            onClick={zoomPanActive ? undefined : () => onSelect(sel === eid ? null : eid)}
          />
        );
      })}

      {ENABLE_ASPH_DIAMOND_FILL &&
        shapes.flatMap(({ asphPaths }) =>
          (asphPaths || []).map(({ surfIdx, halfPathD }) => (
            <path
              key={`asph-df-${surfIdx}`}
              d={halfPathD}
              fill={`url(#${filterId}-asph-dm)`}
              stroke="none"
              style={{ pointerEvents: "none" }}
            />
          )),
        )}

      {shapes.flatMap(({ asphPaths }) =>
        (asphPaths || []).map(({ surfIdx, pathD }) => (
          <path
            key={`asph-${surfIdx}`}
            d={pathD}
            fill="none"
            stroke={t.asphStroke}
            strokeWidth={t.asphStrokeWidth}
            strokeLinecap="round"
            style={{ pointerEvents: "none" }}
          />
        )),
      )}

      {shapes.flatMap(({ surfaceAccentPaths }) =>
        (surfaceAccentPaths || []).flatMap(({ surfIdx, pathD, kind }) => [
          <path
            key={`surface-accent-halo-${kind}-${surfIdx}`}
            data-testid={`surface-accent-halo-${kind}-${surfIdx}`}
            d={pathD}
            fill="none"
            stroke={t.silveredSurfaceHalo}
            strokeWidth={t.silveredSurfaceHaloWidth}
            strokeDasharray="3,2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.95}
            style={{ pointerEvents: "none" }}
          />,
          <path
            key={`surface-accent-${kind}-${surfIdx}`}
            data-testid={`surface-accent-${kind}-${surfIdx}`}
            d={pathD}
            fill="none"
            stroke={t.silveredSurfaceStroke}
            strokeWidth={t.silveredSurfaceStrokeWidth}
            strokeDasharray="3,2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pointerEvents: "none" }}
          />,
        ]),
      )}

      {shapes.flatMap(({ asphPaths }) =>
        (asphPaths || []).map(({ surfIdx, labelX, labelY }) => (
          <text
            key={`asph-lbl-${surfIdx}`}
            x={labelX}
            y={labelY}
            textAnchor="middle"
            fill={t.asphLabel}
            fontSize={9}
            fontFamily="inherit"
            fontWeight={500}
            style={{ pointerEvents: "none", letterSpacing: "0.06em" }}
          >
            A
          </text>
        )),
      )}

      {shapes.flatMap(({ surfaceAccentPaths }) =>
        (surfaceAccentPaths || []).map(({ surfIdx, kind, labelX, labelY }) => (
          <text
            key={`surface-accent-lbl-${kind}-${surfIdx}`}
            data-testid={`surface-accent-label-${kind}-${surfIdx}`}
            x={labelX}
            y={labelY}
            textAnchor="middle"
            fill={t.silveredSurfaceLabel}
            stroke={t.silveredSurfaceHalo}
            strokeWidth={3}
            paintOrder="stroke fill"
            fontSize={9}
            fontFamily="inherit"
            fontWeight={700}
            style={{ pointerEvents: "none", letterSpacing: 0 }}
          >
            S
          </text>
        )),
      )}
    </>
  );
});

export default DiagramElementLayer;
