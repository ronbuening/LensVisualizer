import type { ReactNode } from "react";
import type { Theme } from "../../types/theme.js";

export const PREVIEW_GRID_VIEWBOX_WIDTH = 320;
export const PREVIEW_GRID_VIEWBOX_HEIGHT = 312;
export const PREVIEW_GRID_OUTER_PAD_X = 18;
export const PREVIEW_GRID_OUTER_PAD_Y = 18;
export const PREVIEW_GRID_COLUMN_GAP = 14;
export const PREVIEW_GRID_ROW_GAP = 18;
export const PREVIEW_GRID_FOOTER_HEIGHT = 54;
export const PREVIEW_GRID_TILE_WIDTH =
  (PREVIEW_GRID_VIEWBOX_WIDTH - PREVIEW_GRID_OUTER_PAD_X * 2 - PREVIEW_GRID_COLUMN_GAP) / 2;
export const PREVIEW_GRID_TILE_HEIGHT =
  (PREVIEW_GRID_VIEWBOX_HEIGHT - PREVIEW_GRID_OUTER_PAD_Y * 2 - PREVIEW_GRID_ROW_GAP - PREVIEW_GRID_FOOTER_HEIGHT) / 2;
export const PREVIEW_GRID_TILE_MARGIN_LEFT = 28;
export const PREVIEW_GRID_TILE_MARGIN_RIGHT = 10;
export const PREVIEW_GRID_TILE_MARGIN_TOP = 24;
export const PREVIEW_GRID_TILE_MARGIN_BOTTOM = 22;
export const PREVIEW_GRID_PLOT_WIDTH =
  PREVIEW_GRID_TILE_WIDTH - PREVIEW_GRID_TILE_MARGIN_LEFT - PREVIEW_GRID_TILE_MARGIN_RIGHT;
export const PREVIEW_GRID_PLOT_HEIGHT =
  PREVIEW_GRID_TILE_HEIGHT - PREVIEW_GRID_TILE_MARGIN_TOP - PREVIEW_GRID_TILE_MARGIN_BOTTOM;
export const PREVIEW_GRID_POINT_CLOUD_PLOT_SIZE = Math.min(PREVIEW_GRID_PLOT_WIDTH, PREVIEW_GRID_PLOT_HEIGHT);

export interface PreviewTileGeometry {
  tileX: number;
  tileY: number;
  plotX: number;
  plotY: number;
  zeroX: number;
  zeroY: number;
}

interface PreviewGridSvgProps {
  title: string;
  children: ReactNode;
  legend: ReactNode;
}

interface PreviewTileShellProps {
  geometry: PreviewTileGeometry;
  label: string;
  angleLabel: string;
  footerLabel: string;
  footerDataAttributeName?: string;
  footerDataAttributeValue?: string;
  t: Theme;
  dataAttributeName?: string;
  children: ReactNode;
}

export function formatRelativeMm(value: number): string {
  if (Math.abs(value) < 1e-9) return "0";
  if (Math.abs(value) >= 0.1) return value.toFixed(1);
  return value.toFixed(2);
}

export function previewTileGeometry(index: number): PreviewTileGeometry {
  const col = index % 2;
  const row = Math.floor(index / 2);
  const tileX = PREVIEW_GRID_OUTER_PAD_X + col * (PREVIEW_GRID_TILE_WIDTH + PREVIEW_GRID_COLUMN_GAP);
  const tileY = PREVIEW_GRID_OUTER_PAD_Y + row * (PREVIEW_GRID_TILE_HEIGHT + PREVIEW_GRID_ROW_GAP);
  const plotX = tileX + PREVIEW_GRID_TILE_MARGIN_LEFT;
  const plotY = tileY + PREVIEW_GRID_TILE_MARGIN_TOP;
  return {
    tileX,
    tileY,
    plotX,
    plotY,
    zeroX: plotX + PREVIEW_GRID_PLOT_WIDTH / 2,
    zeroY: plotY + PREVIEW_GRID_PLOT_HEIGHT / 2,
  };
}

export function diamondPath(cx: number, cy: number, size: number): string {
  return `M ${cx} ${cy - size} L ${cx + size} ${cy} L ${cx} ${cy + size} L ${cx - size} ${cy} Z`;
}

export function PreviewGridSvg({ title, children, legend }: PreviewGridSvgProps) {
  return (
    <svg
      viewBox={`0 0 ${PREVIEW_GRID_VIEWBOX_WIDTH} ${PREVIEW_GRID_VIEWBOX_HEIGHT}`}
      style={{ display: "block", width: "100%", maxWidth: PREVIEW_GRID_VIEWBOX_WIDTH, height: "auto" }}
    >
      <title>{title}</title>
      {children}
      {legend}
    </svg>
  );
}

export function PreviewTileShell({
  geometry,
  label,
  angleLabel,
  footerLabel,
  footerDataAttributeName,
  footerDataAttributeValue,
  t,
  dataAttributeName = "data-preview-tile",
  children,
}: PreviewTileShellProps) {
  const { tileX, tileY, plotX, plotY, zeroX } = geometry;
  const tileProps = { [dataAttributeName]: label } as Record<string, string>;
  const footerProps =
    footerDataAttributeName && footerDataAttributeValue
      ? ({ [footerDataAttributeName]: footerDataAttributeValue } as Record<string, string>)
      : undefined;

  return (
    <g {...tileProps}>
      <rect
        x={tileX}
        y={tileY}
        width={PREVIEW_GRID_TILE_WIDTH}
        height={PREVIEW_GRID_TILE_HEIGHT}
        rx={4}
        fill={t.panelBg}
        stroke={t.panelBorder}
      />
      <text x={tileX + 6} y={tileY + 12} fill={t.label} fontSize={9.5} fontFamily="inherit">
        {label}
      </text>
      <text
        x={tileX + PREVIEW_GRID_TILE_WIDTH - 6}
        y={tileY + 12}
        textAnchor="end"
        fill={t.muted}
        fontSize={8.5}
        fontFamily="inherit"
      >
        {angleLabel}
      </text>

      <rect
        x={plotX}
        y={plotY}
        width={PREVIEW_GRID_PLOT_WIDTH}
        height={PREVIEW_GRID_PLOT_HEIGHT}
        rx={3}
        fill="none"
        stroke={t.panelBorder}
        strokeWidth={0.75}
      />

      {children}

      <text
        x={zeroX}
        y={tileY + PREVIEW_GRID_TILE_HEIGHT - 4}
        textAnchor="middle"
        fill={t.muted}
        fontSize={7.5}
        fontFamily="inherit"
        {...footerProps}
      >
        {footerLabel}
      </text>
    </g>
  );
}
