/**
 * DistortionGridOverlay — SVG component rendering a standard TV distortion
 * grid showing the ideal rectilinear grid vs the distorted grid.
 *
 * The ideal grid is drawn as dashed light lines, with the distorted grid
 * overlaid in solid themed color, showing barrel/pincushion bowing.
 */

import type { Theme } from "../../types/theme.js";
import type { DistortionGridResult } from "../../optics/distortionAnalysis.js";

interface DistortionGridOverlayProps {
  grid: DistortionGridResult;
  t: Theme;
  size?: number;
}

const MARGIN = 20;

function pointsToPath(points: { x: number; y: number }[], scale: number, offset: number): string {
  return points
    .map((pt, i) => {
      const px = offset + pt.x * scale;
      const py = offset - pt.y * scale;
      return `${i === 0 ? "M" : "L"}${px.toFixed(1)},${py.toFixed(1)}`;
    })
    .join(" ");
}

export default function DistortionGridOverlay({ grid, t, size = 280 }: DistortionGridOverlayProps) {
  const plotSize = size - MARGIN * 2;
  const scale = plotSize / 2;
  const center = size / 2;
  const gridSize = grid.gridSize;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ display: "block", width: "100%", maxWidth: size, height: "auto" }}>
      <title>
        TV distortion grid overlay. Dashed lines show the ideal rectilinear grid; solid lines show the distorted grid.
      </title>

      <rect x={MARGIN} y={MARGIN} width={plotSize} height={plotSize} rx={3} fill={t.panelBg} stroke={t.panelBorder} />

      {/* Ideal rectilinear grid (straight dashed lines) */}
      {Array.from({ length: gridSize }, (_, i) => {
        const pos = MARGIN + (i / (gridSize - 1)) * plotSize;
        return (
          <g key={`ideal-${i}`}>
            <line
              x1={MARGIN}
              y1={pos}
              x2={MARGIN + plotSize}
              y2={pos}
              stroke={t.panelBorder}
              strokeWidth={0.5}
              strokeDasharray="3,3"
              opacity={0.5}
            />
            <line
              x1={pos}
              y1={MARGIN}
              x2={pos}
              y2={MARGIN + plotSize}
              stroke={t.panelBorder}
              strokeWidth={0.5}
              strokeDasharray="3,3"
              opacity={0.5}
            />
          </g>
        );
      })}

      {/* Distorted grid (solid colored lines) */}
      {grid.horizontalLines.map((line, i) => (
        <path
          key={`h-${i}`}
          d={pointsToPath(line, scale, center)}
          fill="none"
          stroke={t.sliderAccent}
          strokeWidth={1}
          opacity={0.85}
        />
      ))}
      {grid.verticalLines.map((line, i) => (
        <path
          key={`v-${i}`}
          d={pointsToPath(line, scale, center)}
          fill="none"
          stroke={t.sliderAccent}
          strokeWidth={1}
          opacity={0.85}
        />
      ))}

      {/* Center crosshair */}
      <line x1={center - 4} y1={center} x2={center + 4} y2={center} stroke={t.muted} strokeWidth={0.75} opacity={0.5} />
      <line x1={center} y1={center - 4} x2={center} y2={center + 4} stroke={t.muted} strokeWidth={0.75} opacity={0.5} />

      {/* Corner labels */}
      <text x={MARGIN + 4} y={MARGIN - 6} fill={t.muted} fontSize={8} fontFamily="inherit">
        Ideal (dashed) vs distorted (solid)
      </text>
      {grid.maxDistortionPercent > 0.01 ? (
        <text x={size - MARGIN} y={size - 6} textAnchor="end" fill={t.muted} fontSize={7.5} fontFamily="inherit">
          {`Max: ${grid.maxDistortionPercent.toFixed(2)}%`}
        </text>
      ) : null}
    </svg>
  );
}
