import {
  computeDistortionFieldGrid,
  type DistortionGridLine,
  type DistortionSample,
} from "../../optics/distortionAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface DistortionFieldGridProps {
  samples: DistortionSample[];
  t: Theme;
  width?: number;
  height?: number;
}

const VB_W = 320;
const VB_H = 280;
const PAD_X = 24;
const PAD_Y = 24;

function linePath(
  line: DistortionGridLine,
  project: (x: number, y: number) => { x: number; y: number },
  pointSelector: (point: DistortionGridLine["points"][number]) => { x: number; y: number },
): string {
  return line.points
    .map((point, index) => {
      const projected = project(pointSelector(point).x, pointSelector(point).y);
      return `${index === 0 ? "M" : "L"}${projected.x.toFixed(1)},${projected.y.toFixed(1)}`;
    })
    .join(" ");
}

export default function DistortionFieldGrid({ samples, t, width = VB_W, height = VB_H }: DistortionFieldGridProps) {
  const lines = computeDistortionFieldGrid(samples);
  if (lines.length === 0) return null;

  const plotSize = Math.min(width - PAD_X * 2, height - PAD_Y * 2 - 28);
  const plotX = (width - plotSize) / 2;
  const plotY = PAD_Y;
  const distortedExtent = Math.max(
    1,
    ...lines.flatMap((line) =>
      line.points.flatMap((point) => [
        Math.abs(point.distortedX),
        Math.abs(point.distortedY),
        Math.abs(point.idealX),
        Math.abs(point.idealY),
      ]),
    ),
  );
  const halfRange = distortedExtent * 1.08;
  const project = (x: number, y: number) => ({
    x: plotX + ((x + halfRange) / (halfRange * 2)) * plotSize,
    y: plotY + ((halfRange - y) / (halfRange * 2)) * plotSize,
  });
  const zero = project(0, 0);
  const distortedColor = t.sliderAccent ?? t.value;
  const idealColor = t.muted;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width, display: "block" }}>
      <title>
        Approximate uncorrected field grid. Dashed lines show the ideal rectilinear grid; solid lines show the
        approximate radial warp derived from the 1D distortion curve.
      </title>

      <rect x={plotX} y={plotY} width={plotSize} height={plotSize} rx={4} fill="none" stroke={t.panelBorder} />

      <line
        x1={plotX}
        y1={zero.y}
        x2={plotX + plotSize}
        y2={zero.y}
        stroke={t.axis}
        strokeWidth={0.8}
        strokeDasharray="3,3"
      />
      <line
        x1={zero.x}
        y1={plotY}
        x2={zero.x}
        y2={plotY + plotSize}
        stroke={t.axis}
        strokeWidth={0.8}
        strokeDasharray="3,3"
      />

      {lines.map((line, index) => (
        <path
          key={`ideal-${line.orientation}-${line.idealCoordinate}-${index}`}
          d={linePath(line, project, (point) => ({ x: point.idealX, y: point.idealY }))}
          fill="none"
          stroke={idealColor}
          strokeWidth={0.9}
          strokeDasharray="4,3"
          opacity={0.75}
        />
      ))}

      {lines.map((line, index) => (
        <path
          key={`distorted-${line.orientation}-${line.idealCoordinate}-${index}`}
          d={linePath(line, project, (point) => ({ x: point.distortedX, y: point.distortedY }))}
          fill="none"
          stroke={distortedColor}
          strokeWidth={1.35}
          opacity={0.92}
        />
      ))}

      <g transform={`translate(${plotX}, ${plotY + plotSize + 16})`}>
        <line x1={0} y1={0} x2={16} y2={0} stroke={idealColor} strokeWidth={0.9} strokeDasharray="4,3" />
        <text x={22} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Dashed = ideal rectilinear grid
        </text>
      </g>

      <g transform={`translate(${plotX}, ${plotY + plotSize + 30})`}>
        <line x1={0} y1={0} x2={16} y2={0} stroke={distortedColor} strokeWidth={1.35} />
        <text x={22} y={3} fill={t.muted} fontSize={8} fontFamily="inherit">
          Solid = approximate uncorrected field
        </text>
      </g>

      <text x={width / 2} y={height - 2} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
        Approximate radial grid warp derived from the 1D distortion curve
      </text>
    </svg>
  );
}
