import { memo } from "react";
import type { CardinalElements, CardinalDistance, CardinalPoint } from "../../optics/analysis.js";
import { cardinalDimensionLaneY, visibleCardinalDimensions } from "./cardinalDimensionBand.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface CardinalElementsOverlayProps {
  lens: RuntimeLens;
  theme: Theme;
  cardinals: CardinalElements;
  sx: (z: number) => number;
  sy: (y: number) => number;
  pointTransform?: (z: number, y: number) => [number, number];
  showCardinals: boolean;
  showCardinalFocal?: boolean;
  showCardinalPrincipal?: boolean;
  showCardinalNodal?: boolean;
  showCardinalDimensions: boolean;
  showCardinalEfl?: boolean;
  showCardinalBfd?: boolean;
  showCardinalFfd?: boolean;
  showCardinalHiatus?: boolean;
  showCardinalTotalTrack?: boolean;
}

/** Screen-x slack before a marker counts as off view; its tick may poke slightly past the edge. */
const VIEW_SLACK = 6;
/** Inset of edge indicators from the SVG edge, matching the pupil edge labels. */
const EDGE_INSET = 6;
/** Screen x where a span that runs off view is cut and capped with a chevron. */
const SPAN_CLIP_INSET = 3;
const EDGE_FONT_SIZE = 9.5;
const SPAN_FONT_SIZE = 8.5;
/** Rough glyph advance of the monospace label font, letter spacing included. */
const SPAN_CHAR_WIDTH = SPAN_FONT_SIZE * 0.68;

type ViewSide = "left" | "in" | "right";

function viewSide(x: number, svgW: number): ViewSide {
  if (x < -VIEW_SLACK) return "left";
  if (x > svgW + VIEW_SLACK) return "right";
  return "in";
}

interface OffViewMark {
  key: string;
  label: string;
  color: string;
  x: number;
}

/**
 * One label per side for cardinal points beyond the viewport, like the pupils' "EP →" hint.
 * The viewport keeps the lens's own scale, so a telephoto's H/H′ can sit metres off screen.
 */
function edgeIndicator(side: "left" | "right", marks: OffViewMark[], y: number, svgW: number, arrowColor: string) {
  if (marks.length === 0) return null;
  const ordered = [...marks].sort((a, b) => a.x - b.x);
  return (
    <text
      key={`edge-${side}`}
      x={side === "left" ? EDGE_INSET : svgW - EDGE_INSET}
      y={y}
      textAnchor={side === "left" ? "start" : "end"}
      fontSize={EDGE_FONT_SIZE}
      fontFamily="inherit"
      style={{ pointerEvents: "none", letterSpacing: "0.1em" }}
    >
      {side === "left" ? <tspan fill={arrowColor}>← </tspan> : null}
      {ordered.map((mark, index) => (
        <tspan key={mark.key} fill={mark.color}>
          {index > 0 ? ` ${mark.label}` : mark.label}
        </tspan>
      ))}
      {side === "right" ? <tspan fill={arrowColor}> →</tspan> : null}
    </text>
  );
}

function fmtMm(value: number, signed = false): string {
  if (!isFinite(value)) return "∞";
  const prefix = signed && value > 0 ? "+" : "";
  return `${prefix}${value.toFixed(Math.abs(value) < 10 ? 2 : 1)} mm`;
}

function tickPath(x: number, y: number, height: number): string {
  return `M${x},${y - height / 2} L${x},${y + height / 2}`;
}

function principalSurfacePath(
  centerZ: number,
  vertexZ: number,
  halfHeight: number,
  sx: (z: number) => number,
  sy: (y: number) => number,
  pointTransform?: (z: number, y: number) => [number, number],
): string {
  const radius = Math.abs(vertexZ - centerZ);
  if (!isFinite(radius) || radius < halfHeight * 1.03) {
    const [x, y] = screenPoint(vertexZ, 0, sx, sy, pointTransform);
    return tickPath(x, y, halfHeight * 2);
  }

  const side = Math.sign(vertexZ - centerZ) || 1;
  const samples = 28;
  let d = "";
  for (let i = 0; i <= samples; i++) {
    const y = -halfHeight + (2 * halfHeight * i) / samples;
    const z = centerZ + side * Math.sqrt(Math.max(0, radius * radius - y * y));
    const [x, screenY] = screenPoint(z, y, sx, sy, pointTransform);
    d += `${i === 0 ? "M" : "L"}${x},${screenY} `;
  }
  return d;
}

function pointMarker(
  point: CardinalPoint,
  label: string,
  anchor: readonly [number, number],
  laneOffset: number,
  color: string,
) {
  const [x, axisY] = [anchor[0], anchor[1] + laneOffset];
  return (
    <g key={point.id} style={{ pointerEvents: "none" }}>
      <path d={tickPath(x, axisY, 18)} stroke={color} strokeWidth={1.1} strokeDasharray="3,2" fill="none" />
      <circle cx={x} cy={axisY} r={2.2} fill={color} />
      <text
        x={x}
        y={axisY - 15}
        textAnchor="middle"
        fill={color}
        fontSize={9.5}
        fontFamily="inherit"
        style={{ letterSpacing: "0.1em" }}
      >
        {label}
      </text>
    </g>
  );
}

/** End cap of a span: a tick where it ends in view, an outward chevron where it runs off view. */
function spanEnd(x: number, y: number, clipped: "left" | "right" | null, color: string) {
  if (clipped === null) return <line x1={x} y1={y - 4} x2={x} y2={y + 4} stroke={color} strokeWidth={0.9} />;
  const back = clipped === "left" ? 5 : -5;
  return (
    <path
      d={`M${x + back},${y - 3.5} L${x},${y} L${x + back},${y + 3.5}`}
      stroke={color}
      strokeWidth={0.9}
      fill="none"
    />
  );
}

/**
 * Draw one dimension span on its band lane, level whatever the lens movement. A span that runs past
 * the viewport is cut at the edge with a chevron; one wholly beyond it becomes an edge label carrying
 * its value.
 *
 * @param laneY - SVG y of the span line inside the dimension band
 */
function dimensionLine(
  distance: CardinalDistance,
  laneY: number,
  sx: (z: number) => number,
  sy: (y: number) => number,
  color: string,
  svgW: number,
  pointTransform?: (z: number, y: number) => [number, number],
) {
  const fromX = screenPoint(distance.fromZ, 0, sx, sy, pointTransform)[0];
  const toX = screenPoint(distance.toZ, 0, sx, sy, pointTransform)[0];
  if (!Number.isFinite(fromX) || !Number.isFinite(toX)) return null;
  const x1 = Math.min(fromX, toX);
  const x2 = Math.max(fromX, toX);
  const label = `${distance.id} ${fmtMm(distance.valueMm, distance.id === "Hiatus")}`;
  const textStyle = { letterSpacing: "0.08em" };

  const leftSide = viewSide(x1, svgW);
  const rightSide = viewSide(x2, svgW);
  if (rightSide === "left" || leftSide === "right") {
    const side = rightSide === "left" ? "left" : "right";
    return (
      <text
        key={distance.id}
        x={side === "left" ? EDGE_INSET : svgW - EDGE_INSET}
        y={laneY + SPAN_FONT_SIZE / 2 - 1}
        textAnchor={side === "left" ? "start" : "end"}
        fill={color}
        fontSize={SPAN_FONT_SIZE}
        fontFamily="inherit"
        style={{ ...textStyle, pointerEvents: "none" }}
      >
        {side === "left" ? `← ${label}` : `${label} →`}
      </text>
    );
  }

  const startX = leftSide === "left" ? SPAN_CLIP_INSET : x1;
  const endX = rightSide === "right" ? svgW - SPAN_CLIP_INSET : x2;
  const halfLabelWidth = (label.length * SPAN_CHAR_WIDTH) / 2;
  const labelX = Math.min(
    Math.max((startX + endX) / 2, EDGE_INSET + halfLabelWidth),
    svgW - EDGE_INSET - halfLabelWidth,
  );
  return (
    <g key={distance.id} style={{ pointerEvents: "none" }}>
      <line x1={startX} y1={laneY} x2={endX} y2={laneY} stroke={color} strokeWidth={0.9} />
      {spanEnd(startX, laneY, leftSide === "left" ? "left" : null, color)}
      {spanEnd(endX, laneY, rightSide === "right" ? "right" : null, color)}
      <text
        x={labelX}
        y={laneY - 5}
        textAnchor="middle"
        fill={color}
        fontSize={SPAN_FONT_SIZE}
        fontFamily="inherit"
        style={textStyle}
      >
        {label}
      </text>
    </g>
  );
}

function screenPoint(
  z: number,
  y: number,
  sx: (z: number) => number,
  sy: (y: number) => number,
  pointTransform?: (z: number, y: number) => [number, number],
): [number, number] {
  const [cameraZ, cameraY] = pointTransform ? pointTransform(z, y) : [z, y];
  return [sx(cameraZ), sy(cameraY)];
}

const CardinalElementsOverlay = memo(function CardinalElementsOverlay({
  lens: L,
  theme: t,
  cardinals,
  sx,
  sy,
  pointTransform,
  showCardinals,
  showCardinalFocal = true,
  showCardinalPrincipal = true,
  showCardinalNodal = true,
  showCardinalDimensions,
  showCardinalEfl = true,
  showCardinalBfd = true,
  showCardinalFfd = true,
  showCardinalHiatus = true,
  showCardinalTotalTrack = true,
}: CardinalElementsOverlayProps) {
  const principalHalfHeight = Math.max(L.maxSD * 0.35, Math.min(L.maxSD * 1.2, L.svgH / Math.max(L.YSC, 1) / 5));
  const focalColor = t.sliderAccent;
  const principalColor = t.pupilEntrance;
  const nodalColor = t.pupilExit;
  const dimensionColor = t.spacingVal;
  const { frontFocal, rearFocal, frontPrincipal, rearPrincipal, frontNodal, rearNodal } = cardinals.points;
  const showCoincidentLabels = cardinals.nodalPrincipalCoincident && showCardinalNodal;
  const frontPrincipalLabel = showCoincidentLabels ? "H/N" : "H";
  const rearPrincipalLabel = showCoincidentLabels ? "H'/N'" : "H'";
  const project = (z: number, y: number) => screenPoint(z, y, sx, sy, pointTransform);

  /* Markers in draw order; a principal point also carries the focal point its surface curves about. */
  const markers: Array<{ point: CardinalPoint; label: string; lane: number; color: string; curveCenterZ?: number }> =
    [];
  if (showCardinals && showCardinalPrincipal) {
    markers.push(
      {
        point: frontPrincipal,
        label: frontPrincipalLabel,
        lane: 22,
        color: principalColor,
        curveCenterZ: frontFocal.z,
      },
      { point: rearPrincipal, label: rearPrincipalLabel, lane: 22, color: principalColor, curveCenterZ: rearFocal.z },
    );
  }
  if (showCardinals && showCardinalFocal) {
    markers.push(
      { point: frontFocal, label: "F", lane: 0, color: focalColor },
      { point: rearFocal, label: "F'", lane: 0, color: focalColor },
    );
  }
  if (showCardinals && showCardinalNodal && (!cardinals.nodalPrincipalCoincident || !showCardinalPrincipal)) {
    markers.push(
      { point: frontNodal, label: "N", lane: 44, color: nodalColor },
      { point: rearNodal, label: "N'", lane: 44, color: nodalColor },
    );
  }

  const offView: Record<"left" | "right", OffViewMark[]> = { left: [], right: [] };
  const inView = markers.flatMap((marker) => {
    const anchor = project(marker.point.z, 0);
    if (!anchor.every(Number.isFinite)) return [];
    const side = viewSide(anchor[0], L.svgW);
    if (side !== "in") {
      offView[side].push({ key: marker.point.id, label: marker.label, color: marker.color, x: anchor[0] });
      return [];
    }
    return [{ ...marker, anchor }];
  });
  /* Edge labels sit on the lens axis at the end they point past, one row above the pupil hints. */
  const edgeAxisY = {
    left: project(cardinals.frontVertexZ, 0)[1],
    right: project(cardinals.imagePlaneZ, 0)[1],
  };

  return (
    <g aria-label="Cardinal elements overlay">
      {inView.map((marker) =>
        marker.curveCenterZ === undefined ? (
          pointMarker(marker.point, marker.label, marker.anchor, marker.lane, marker.color)
        ) : (
          <g key={`${marker.point.id}-surface`}>
            <path
              d={principalSurfacePath(marker.curveCenterZ, marker.point.z, principalHalfHeight, sx, sy, pointTransform)}
              stroke={marker.color}
              strokeWidth={1.3}
              strokeDasharray="5,3"
              fill="none"
              style={{ pointerEvents: "none" }}
            />
            {pointMarker(marker.point, marker.label, marker.anchor, marker.lane, marker.color)}
          </g>
        ),
      )}
      {edgeIndicator("left", offView.left, edgeAxisY.left - 12, L.svgW, t.muted)}
      {edgeIndicator("right", offView.right, edgeAxisY.right - 12, L.svgW, t.muted)}

      {visibleCardinalDimensions({
        showCardinalDimensions,
        showCardinalEfl,
        showCardinalBfd,
        showCardinalFfd,
        showCardinalHiatus,
        showCardinalTotalTrack,
      }).map((id, lane) =>
        dimensionLine(
          cardinals.distances[id],
          cardinalDimensionLaneY(L.svgH, lane),
          sx,
          sy,
          dimensionColor,
          L.svgW,
          pointTransform,
        ),
      )}
    </g>
  );
});

export default CardinalElementsOverlay;
