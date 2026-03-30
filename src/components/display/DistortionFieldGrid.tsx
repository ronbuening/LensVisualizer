import { type DistortionFieldGridResult, type DistortionGridLine } from "../../optics/distortionAnalysis.js";
import type { Theme } from "../../types/theme.js";

interface DistortionFieldGridProps {
  grid: DistortionFieldGridResult;
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
  pointSelector: (point: DistortionGridLine["points"][number]) => { x: number; y: number } | null,
): string {
  let segmentOpen = false;

  return line.points
    .map((point) => {
      const selected = pointSelector(point);
      if (selected === null) {
        segmentOpen = false;
        return "";
      }

      const projected = project(selected.x, selected.y);
      const command = segmentOpen ? "L" : "M";
      segmentOpen = true;
      return `${command}${projected.x.toFixed(1)},${projected.y.toFixed(1)}`;
    })
    .join(" ");
}

export default function DistortionFieldGrid({ grid, t, width = VB_W, height = VB_H }: DistortionFieldGridProps) {
  const { lines, idealFieldRadius } = grid;
  if (lines.length === 0) return null;

  const plotSize = Math.min(width - PAD_X * 2, height - PAD_Y * 2 - 28);
  const plotX = (width - plotSize) / 2;
  const plotY = PAD_Y;
  const distortedExtent = Math.max(
    idealFieldRadius || 1,
    ...lines.flatMap((line) =>
      line.points.flatMap((point) => [
        point.tracedX === null ? 0 : Math.abs(point.tracedX),
        point.tracedY === null ? 0 : Math.abs(point.tracedY),
        point.insideImageCircle ? Math.abs(point.idealX) : 0,
        point.insideImageCircle ? Math.abs(point.idealY) : 0,
      ]),
    ),
  );
  const halfRange = distortedExtent * 1.08;
  const project = (x: number, y: number) => ({
    x: plotX + ((x + halfRange) / (halfRange * 2)) * plotSize,
    y: plotY + ((halfRange - y) / (halfRange * 2)) * plotSize,
  });
  const zero = project(0, 0);
  const idealCircleRadiusPx = Math.abs(project(idealFieldRadius, 0).x - zero.x);
  const distortedColor = t.sliderAccent ?? t.value;
  const idealColor = t.muted;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width, display: "block" }}>
      <title>
        Traced chief-ray field grid. Dashed lines show the ideal rectilinear field grid clipped to the current image
        circle; solid lines show the traced chief-ray image positions for the same 2D field samples.
      </title>

      <rect x={plotX} y={plotY} width={plotSize} height={plotSize} rx={4} fill="none" stroke={t.panelBorder} />
      <circle
        cx={zero.x}
        cy={zero.y}
        r={idealCircleRadiusPx}
        fill="none"
        stroke={idealColor}
        strokeWidth={0.85}
        strokeDasharray="4,3"
        opacity={0.55}
      />

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
          d={linePath(line, project, (point) =>
            point.insideImageCircle ? { x: point.idealX, y: point.idealY } : null,
          )}
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
          d={linePath(line, project, (point) =>
            point.usable && point.tracedX !== null && point.tracedY !== null
              ? { x: point.tracedX, y: point.tracedY }
              : null,
          )}
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
          Solid = traced chief-ray field
        </text>
      </g>

      <text x={width / 2} y={height - 2} textAnchor="middle" fill={t.muted} fontSize={8.5} fontFamily="inherit">
        True 2D field trace clipped to the current image circle
      </text>
    </svg>
  );
}
