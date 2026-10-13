import { memo } from "react";
import type { CardinalElements, CardinalDistance, CardinalPoint } from "../../optics/cardinalElements.js";
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

function dimensionLine(
  distance: CardinalDistance,
  laneOffset: number,
  sx: (z: number) => number,
  sy: (y: number) => number,
  color: string,
  pointTransform?: (z: number, y: number) => [number, number],
) {
  const [x1, axisY1] = screenPoint(distance.fromZ, 0, sx, sy, pointTransform);
  const [x2, axisY2] = screenPoint(distance.toZ, 0, sx, sy, pointTransform);
  const y1 = axisY1 + laneOffset;
  const y2 = axisY2 + laneOffset;
  const labelX = (x1 + x2) / 2;
  const labelY = (y1 + y2) / 2;
  const signed = distance.id === "Hiatus";
  return (
    <g key={distance.id} style={{ pointerEvents: "none" }}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={0.9} />
      <line x1={x1} y1={y1 - 4} x2={x1} y2={y1 + 4} stroke={color} strokeWidth={0.9} />
      <line x1={x2} y1={y2 - 4} x2={x2} y2={y2 + 4} stroke={color} strokeWidth={0.9} />
      <text
        x={labelX}
        y={labelY - 5}
        textAnchor="middle"
        fill={color}
        fontSize={8.5}
        fontFamily="inherit"
        style={{ letterSpacing: "0.08em" }}
      >
        {distance.id} {fmtMm(distance.valueMm, signed)}
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

  return (
    <g aria-label="Cardinal elements overlay">
      {showCardinals ? (
        <>
          {showCardinalPrincipal ? (
            <>
              <path
                d={principalSurfacePath(frontFocal.z, frontPrincipal.z, principalHalfHeight, sx, sy, pointTransform)}
                stroke={principalColor}
                strokeWidth={1.3}
                strokeDasharray="5,3"
                fill="none"
                style={{ pointerEvents: "none" }}
              />
              <path
                d={principalSurfacePath(rearFocal.z, rearPrincipal.z, principalHalfHeight, sx, sy, pointTransform)}
                stroke={principalColor}
                strokeWidth={1.3}
                strokeDasharray="5,3"
                fill="none"
                style={{ pointerEvents: "none" }}
              />
              {pointMarker(
                frontPrincipal,
                frontPrincipalLabel,
                screenPoint(frontPrincipal.z, 0, sx, sy, pointTransform),
                22,
                principalColor,
              )}
              {pointMarker(
                rearPrincipal,
                rearPrincipalLabel,
                screenPoint(rearPrincipal.z, 0, sx, sy, pointTransform),
                22,
                principalColor,
              )}
            </>
          ) : null}
          {showCardinalFocal ? (
            <>
              {pointMarker(frontFocal, "F", screenPoint(frontFocal.z, 0, sx, sy, pointTransform), 0, focalColor)}
              {pointMarker(rearFocal, "F'", screenPoint(rearFocal.z, 0, sx, sy, pointTransform), 0, focalColor)}
            </>
          ) : null}
          {showCardinalNodal &&
            (!cardinals.nodalPrincipalCoincident || !showCardinalPrincipal) &&
            pointMarker(frontNodal, "N", screenPoint(frontNodal.z, 0, sx, sy, pointTransform), 44, nodalColor)}
          {showCardinalNodal &&
            (!cardinals.nodalPrincipalCoincident || !showCardinalPrincipal) &&
            pointMarker(rearNodal, "N'", screenPoint(rearNodal.z, 0, sx, sy, pointTransform), 44, nodalColor)}
        </>
      ) : null}

      {showCardinalDimensions ? (
        <>
          {showCardinalEfl ? dimensionLine(cardinals.distances.efl, 70, sx, sy, dimensionColor, pointTransform) : null}
          {showCardinalBfd ? dimensionLine(cardinals.distances.bfd, 86, sx, sy, dimensionColor, pointTransform) : null}
          {showCardinalFfd ? dimensionLine(cardinals.distances.ffd, 102, sx, sy, dimensionColor, pointTransform) : null}
          {showCardinalHiatus
            ? dimensionLine(cardinals.distances.hiatus, 118, sx, sy, dimensionColor, pointTransform)
            : null}
          {showCardinalTotalTrack
            ? dimensionLine(cardinals.distances.totalTrack, 134, sx, sy, dimensionColor, pointTransform)
            : null}
        </>
      ) : null}
    </g>
  );
});

export default CardinalElementsOverlay;
