import type { CardinalElements, CardinalDistance, CardinalPoint } from "../../optics/cardinalElements.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface CardinalElementsOverlayProps {
  lens: RuntimeLens;
  theme: Theme;
  cardinals: CardinalElements;
  sx: (z: number) => number;
  sy: (y: number) => number;
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
): string {
  const radius = Math.abs(vertexZ - centerZ);
  if (!isFinite(radius) || radius < halfHeight * 1.03) return tickPath(sx(vertexZ), sy(0), halfHeight * 2);

  const side = Math.sign(vertexZ - centerZ) || 1;
  const samples = 28;
  let d = "";
  for (let i = 0; i <= samples; i++) {
    const y = -halfHeight + (2 * halfHeight * i) / samples;
    const z = centerZ + side * Math.sqrt(Math.max(0, radius * radius - y * y));
    d += `${i === 0 ? "M" : "L"}${sx(z)},${sy(y)} `;
  }
  return d;
}

function pointMarker(point: CardinalPoint, label: string, x: number, axisY: number, color: string) {
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

function dimensionLine(distance: CardinalDistance, y: number, sx: (z: number) => number, color: string) {
  const x1 = sx(distance.fromZ);
  const x2 = sx(distance.toZ);
  const labelX = (x1 + x2) / 2;
  const signed = distance.id === "Hiatus";
  return (
    <g key={distance.id} style={{ pointerEvents: "none" }}>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeWidth={0.9} />
      <line x1={x1} y1={y - 4} x2={x1} y2={y + 4} stroke={color} strokeWidth={0.9} />
      <line x1={x2} y1={y - 4} x2={x2} y2={y + 4} stroke={color} strokeWidth={0.9} />
      <text
        x={labelX}
        y={y - 5}
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

export default function CardinalElementsOverlay({
  lens: L,
  theme: t,
  cardinals,
  sx,
  sy,
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
  const axisY = sy(0);
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
                d={principalSurfacePath(frontFocal.z, frontPrincipal.z, principalHalfHeight, sx, sy)}
                stroke={principalColor}
                strokeWidth={1.3}
                strokeDasharray="5,3"
                fill="none"
                style={{ pointerEvents: "none" }}
              />
              <path
                d={principalSurfacePath(rearFocal.z, rearPrincipal.z, principalHalfHeight, sx, sy)}
                stroke={principalColor}
                strokeWidth={1.3}
                strokeDasharray="5,3"
                fill="none"
                style={{ pointerEvents: "none" }}
              />
              {pointMarker(frontPrincipal, frontPrincipalLabel, sx(frontPrincipal.z), axisY + 22, principalColor)}
              {pointMarker(rearPrincipal, rearPrincipalLabel, sx(rearPrincipal.z), axisY + 22, principalColor)}
            </>
          ) : null}
          {showCardinalFocal ? (
            <>
              {pointMarker(frontFocal, "F", sx(frontFocal.z), axisY, focalColor)}
              {pointMarker(rearFocal, "F'", sx(rearFocal.z), axisY, focalColor)}
            </>
          ) : null}
          {showCardinalNodal &&
            (!cardinals.nodalPrincipalCoincident || !showCardinalPrincipal) &&
            pointMarker(frontNodal, "N", sx(frontNodal.z), axisY + 44, nodalColor)}
          {showCardinalNodal &&
            (!cardinals.nodalPrincipalCoincident || !showCardinalPrincipal) &&
            pointMarker(rearNodal, "N'", sx(rearNodal.z), axisY + 44, nodalColor)}
        </>
      ) : null}

      {showCardinalDimensions ? (
        <>
          {showCardinalEfl ? dimensionLine(cardinals.distances.efl, axisY + 70, sx, dimensionColor) : null}
          {showCardinalBfd ? dimensionLine(cardinals.distances.bfd, axisY + 86, sx, dimensionColor) : null}
          {showCardinalFfd ? dimensionLine(cardinals.distances.ffd, axisY + 102, sx, dimensionColor) : null}
          {showCardinalHiatus ? dimensionLine(cardinals.distances.hiatus, axisY + 118, sx, dimensionColor) : null}
          {showCardinalTotalTrack
            ? dimensionLine(cardinals.distances.totalTrack, axisY + 134, sx, dimensionColor)
            : null}
        </>
      ) : null}
    </g>
  );
}
