import { useId, useMemo } from "react";
import type { Theme } from "../../types/theme.js";
import type { ViewBoxState } from "../hooks/useViewBoxZoom.js";
import { clientPointToSvg, type SvgBounds } from "../../utils/svgCoordinates.js";
import { VISUALLY_HIDDEN } from "../../utils/style/styles.js";
import type { UniversalRelationshipLayout } from "./universalLayout.js";

interface UniversalMapOverviewProps {
  id: string;
  layout: UniversalRelationshipLayout;
  theme: Theme;
  selectedNodeId: string | null;
  view: ViewBoxState;
  visibleBounds: SvgBounds;
  /** Center the main map on a world point, optionally at a new zoom level. */
  onCenterView: (x: number, y: number, zoom?: number) => void;
  onPanView: (dx: number, dy: number) => void;
  onFitAll: () => void;
}

const WIDTH = 220;
const HEIGHT = 150;
/** Each double-click halves the visible area around the chosen point. */
const DOUBLE_CLICK_ZOOM_FACTOR = 2;

export default function UniversalMapOverview({
  id,
  layout,
  theme: t,
  selectedNodeId,
  view,
  visibleBounds,
  onCenterView,
  onPanView,
  onFitAll,
}: UniversalMapOverviewProps) {
  const instructionsId = useId();
  const scale = Math.min(WIDTH / layout.width, HEIGHT / layout.height);
  // The static scene is reused while panning; only the viewport rectangle moves.
  const scene = useMemo(
    () => (
      <g aria-hidden="true" pointerEvents="none">
        {layout.clusters.map((cluster) => (
          <ellipse
            key={cluster.id}
            cx={cluster.x + cluster.width / 2}
            cy={cluster.y + cluster.height / 2}
            rx={cluster.width / 2}
            ry={cluster.height / 2}
            fill="none"
            stroke={t.panelBorder}
            strokeWidth={0.7}
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {layout.nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={Math.max(node.r, 1 / scale)}
            fill={t.muted}
            fillOpacity={0.65}
          />
        ))}
      </g>
    ),
    [layout, t, scale],
  );
  const selected = selectedNodeId ? layout.nodeById[selectedNodeId] : undefined;
  /* Clamp the pointer to the layout so clicks in the letterboxed margins still land on the map edge. */
  const worldPointFromEvent = (event: React.MouseEvent<SVGSVGElement>) => {
    const point = clientPointToSvg(event.currentTarget, event.clientX, event.clientY);
    if (!point) return undefined;
    return {
      x: Math.max(0, Math.min(layout.width, point.x)),
      y: Math.max(0, Math.min(layout.height, point.y)),
    };
  };
  const x = Math.max(0, Math.min(layout.width, visibleBounds.x));
  const y = Math.max(0, Math.min(layout.height, visibleBounds.y));
  const width = Math.max(0, Math.min(layout.width, visibleBounds.x + visibleBounds.width) - x);
  const height = Math.max(0, Math.min(layout.height, visibleBounds.y + visibleBounds.height) - y);

  return (
    <div
      id={id}
      style={{
        width: WIDTH,
        maxWidth: "100%",
        boxSizing: "border-box",
        border: `1px solid ${t.panelBorder}`,
        borderRadius: 6,
        background: t.panelBg,
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "5px 8px", fontSize: "0.68rem", color: t.label }}>Overview</div>
      <p id={instructionsId} style={VISUALLY_HIDDEN}>
        Click or tap to center the map. Double-click or double-tap to zoom in there. Arrow keys pan. Home fits the full
        map.
      </p>
      <svg
        role="group"
        aria-label="Map overview"
        aria-describedby={instructionsId}
        tabIndex={0}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          display: "block",
          width: "100%",
          height: HEIGHT,
          touchAction: "manipulation",
          cursor: "crosshair",
          outlineOffset: -3,
        }}
        onClick={(event) => {
          const point = worldPointFromEvent(event);
          if (!point) return;
          event.currentTarget.focus({ preventScroll: true });
          onCenterView(point.x, point.y);
        }}
        onDoubleClick={(event) => {
          /* The two clicks already centered here; now magnify around the same point. */
          const point = worldPointFromEvent(event);
          if (!point) return;
          event.preventDefault();
          onCenterView(point.x, point.y, view.zoom * DOUBLE_CLICK_ZOOM_FACTOR);
        }}
        onKeyDown={(event) => {
          const directions: Record<string, [number, number]> = {
            ArrowLeft: [-1, 0],
            ArrowRight: [1, 0],
            ArrowUp: [0, -1],
            ArrowDown: [0, 1],
          };
          if (event.key === "Home") {
            event.preventDefault();
            onFitAll();
          } else if (directions[event.key]) {
            event.preventDefault();
            const [dx, dy] = directions[event.key];
            onPanView(dx * view.vbW * 0.1, dy * view.vbH * 0.1);
          }
        }}
      >
        {scene}
        {selected && (
          <circle
            aria-hidden="true"
            cx={selected.x}
            cy={selected.y}
            r={3 / scale}
            fill={t.sliderAccent}
            stroke={t.title}
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            pointerEvents="none"
          />
        )}
        <rect
          role="img"
          aria-label="Visible map area"
          x={x}
          y={y}
          width={width}
          height={height}
          fill={t.sliderAccent}
          fillOpacity={0.1}
          stroke={t.sliderAccent}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
          pointerEvents="none"
        />
      </svg>
    </div>
  );
}
