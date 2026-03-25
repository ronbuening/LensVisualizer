/**
 * AbbeDiagram — Abbe glass map for a single lens.
 *
 * Plots each glass element as a point on the standard Abbe diagram:
 *   X-axis: Abbe number Vd (reversed — low dispersion on left, high on right)
 *   Y-axis: Refractive index Nd
 *
 * Each dot is colored with the same fill as in the lens diagram, and labeled
 * with the element name and glass designation. Elements without Vd data are
 * excluded and counted in a footnote.
 */

import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import { toggleGroup, toggleBtn } from "../../utils/styles.js";

interface AbbeDiagramProps {
  L: RuntimeLens;
  t: Theme;
  showGlassType: boolean;
  onToggleGlassType: () => void;
}

/* ── Chart geometry constants ── */
const SVG_W = 520;
const SVG_H = 370;
const ML = 54; // left margin (Nd axis labels)
const MR = 18; // right margin
const MT = 44; // top margin (title)
const MB = 46; // bottom margin (Vd axis labels)
const PLOT_W = SVG_W - ML - MR;
const PLOT_H = SVG_H - MT - MB;

/* Standard glass map axis limits */
const VD_MIN = 15;
const VD_MAX = 90;
const ND_MIN = 1.45;
const ND_MAX = 2.05;

function toX(vd: number): number {
  return ML + ((VD_MAX - vd) / (VD_MAX - VD_MIN)) * PLOT_W;
}

function toY(nd: number): number {
  return MT + ((ND_MAX - nd) / (ND_MAX - ND_MIN)) * PLOT_H;
}

/* Truncate long glass strings for label readability */
function shortGlass(glass: string | undefined, type: string): string {
  const src = glass ?? type;
  return src.length > 28 ? src.slice(0, 26) + "…" : src;
}

/* Decide label placement: right of dot by default, flip left if near right edge */
function labelAnchor(px: number): { anchor: "start" | "end"; dx: number } {
  return px > SVG_W - 130 ? { anchor: "end", dx: -12 } : { anchor: "start", dx: 12 };
}

export default function AbbeDiagram({ L, t, showGlassType, onToggleGlassType }: AbbeDiagramProps) {
  const allElements = L.elements;
  const plotElements = allElements.filter((e) => e.vd != null && e.nd != null);
  const missingCount = allElements.length - plotElements.length;

  /* Vd grid tick positions every 10 */
  const vdTicks: number[] = [];
  for (let v = 20; v <= 85; v += 10) vdTicks.push(v);

  /* Nd grid tick positions every 0.1 */
  const ndTicks: number[] = [];
  for (let n = 1.5; n <= 2.0 + 0.001; n = Math.round((n + 0.1) * 100) / 100) ndTicks.push(n);

  const axisColor = t.axis;
  const gridColor = t.axis + "33"; // ~20% opacity grid lines
  const labelColor = t.label;
  const mutedColor = t.muted;
  const panelBg = t.panelBg;
  const panelBorder = t.panelBorder;

  return (
    <div style={{ padding: "8px 12px 4px" }}>
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        width="100%"
        style={{ display: "block", maxWidth: SVG_W, margin: "0 auto" }}
        aria-label="Abbe diagram glass map"
      >
        {/* ── Background ── */}
        <rect x={0} y={0} width={SVG_W} height={SVG_H} fill={panelBg} />
        <rect x={ML} y={MT} width={PLOT_W} height={PLOT_H} fill="none" stroke={panelBorder} strokeWidth={1} />

        {/* ── Title ── */}
        <text
          x={SVG_W / 2}
          y={18}
          textAnchor="middle"
          fontSize={12}
          fontWeight={600}
          fill={labelColor}
          fontFamily="inherit"
          letterSpacing="0.04em"
        >
          ABBE DIAGRAM
        </text>
        <text x={SVG_W / 2} y={34} textAnchor="middle" fontSize={9.5} fill={mutedColor} fontFamily="inherit">
          {L.data.name}
        </text>

        {/* ── Vd grid lines and axis ticks ── */}
        {vdTicks.map((v) => {
          const px = toX(v);
          return (
            <g key={`vd-${v}`}>
              <line x1={px} y1={MT} x2={px} y2={MT + PLOT_H} stroke={gridColor} strokeWidth={1} />
              <text x={px} y={MT + PLOT_H + 14} textAnchor="middle" fontSize={9} fill={mutedColor} fontFamily="inherit">
                {v}
              </text>
            </g>
          );
        })}

        {/* ── Nd grid lines and axis ticks ── */}
        {ndTicks.map((n) => {
          const py = toY(n);
          return (
            <g key={`nd-${n.toFixed(1)}`}>
              <line x1={ML} y1={py} x2={ML + PLOT_W} y2={py} stroke={gridColor} strokeWidth={1} />
              <text x={ML - 6} y={py + 3.5} textAnchor="end" fontSize={9} fill={mutedColor} fontFamily="inherit">
                {n.toFixed(2)}
              </text>
            </g>
          );
        })}

        {/* ── Axis border lines ── */}
        <line x1={ML} y1={MT} x2={ML} y2={MT + PLOT_H} stroke={axisColor} strokeWidth={1} />
        <line x1={ML} y1={MT + PLOT_H} x2={ML + PLOT_W} y2={MT + PLOT_H} stroke={axisColor} strokeWidth={1} />

        {/* ── Axis labels ── */}
        <text
          x={ML + PLOT_W / 2}
          y={MT + PLOT_H + 36}
          textAnchor="middle"
          fontSize={10}
          fill={labelColor}
          fontFamily="inherit"
          letterSpacing="0.06em"
        >
          Abbe number Vd →
        </text>
        <text
          x={14}
          y={MT + PLOT_H / 2}
          textAnchor="middle"
          fontSize={10}
          fill={labelColor}
          fontFamily="inherit"
          letterSpacing="0.06em"
          transform={`rotate(-90, 14, ${MT + PLOT_H / 2})`}
        >
          Refractive index Nd
        </text>

        {/* ── Element dots and labels ── */}
        {plotElements.map((e) => {
          const px = toX(e.vd!);
          const py = toY(e.nd);
          const fill = t.elemFill(e, false);
          const stroke = t.elemStroke(e, false);
          const { anchor, dx } = labelAnchor(px);
          const glassLabel = shortGlass(e.glass, e.type);

          return (
            <g key={e.id}>
              {/* Dot */}
              <circle cx={px} cy={py} r={8} fill={fill} stroke={stroke} strokeWidth={1.5} />
              {/* Element name inside dot */}
              <text
                x={px}
                y={py + 3.5}
                textAnchor="middle"
                fontSize={7}
                fontWeight={700}
                fill={t.elemNum(e)}
                fontFamily="inherit"
              >
                {e.name}
              </text>
              {/* Glass type label — above and offset from dot */}
              {showGlassType && (
                <text x={px + dx} y={py - 11} textAnchor={anchor} fontSize={7.5} fill={mutedColor} fontFamily="inherit">
                  {glassLabel}
                </text>
              )}
            </g>
          );
        })}

        {/* ── Footnote for missing Vd data ── */}
        {missingCount > 0 && (
          <text
            x={ML + PLOT_W}
            y={MT + PLOT_H + 36}
            textAnchor="end"
            fontSize={8}
            fill={mutedColor}
            fontFamily="inherit"
          >
            {missingCount} element{missingCount > 1 ? "s" : ""} omitted (no Vd data)
          </text>
        )}
      </svg>
      <div style={{ display: "flex", justifyContent: "center", padding: "6px 0 4px" }}>
        <div style={toggleGroup(t, { width: 160 })}>
          <button style={toggleBtn(t, showGlassType, { hasRightBorder: false })} onClick={onToggleGlassType}>
            GLASS TYPE
          </button>
        </div>
      </div>
    </div>
  );
}
